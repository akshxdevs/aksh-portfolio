use axum::{
    extract::ws::{Message, WebSocket, WebSocketUpgrade},
    extract::State,
    response::IntoResponse,
    routing::get,
    Router,
};
use futures_util::{SinkExt, StreamExt};
use log::info;
use uuid::Uuid;
use redis::cmd;

use crate::AppState;

pub fn ws_router() -> Router<AppState> {
    Router::new().route("/ws", get(ws_handler))
}

async fn ws_handler(ws: WebSocketUpgrade, State(state): State<AppState>) -> impl IntoResponse {
    let user_id = Uuid::new_v4().to_string();
    println!("Connected to aksh web socket server {}", user_id);
    ws.on_upgrade(move |socket| handle_socket(socket, state, user_id))
}

async fn handle_socket(socket: WebSocket, state: AppState, user_id: String) {
    let mut rx = state.broadcaster.subscribe();
    let (mut sender, mut receiver) = socket.split();

    let sender_task = tokio::spawn(async move {
        while let Ok(msg) = rx.recv().await {
            if sender.send(Message::Text(msg.into())).await.is_err() {
                break;
            }
        }
    });

    while let Some(Ok(msg)) = receiver.next().await {
        if let Message::Text(text) = msg {
            let text_str = text.to_string();
            let key = Uuid::new_v4().to_string();
            let producer = state.kafka_producer.clone();
            let topic = state.kafka_topic.clone();
            let text_for_redis = text_str.clone();
            let user_id_clone = user_id.clone();
            tokio::spawn(async move {
                let record = rdkafka::producer::FutureRecord::to(&topic)
                    .key(&key)
                    .payload(&text_str);
                println!("{} sent from {}", text_str, user_id_clone);
                let _ = producer.send(record, std::time::Duration::from_secs(0)).await;
            });

            if let Ok(mut conn) = state.redis_pool.get().await {
                let _: Result<(), _> = cmd("SET")
                    .arg(format!("last_from_ws:{}", &state.kafka_topic))
                    .arg(&text_for_redis)
                    .exec_async(&mut conn)
                    .await;
            }
        }
    }

    let _ = sender_task.abort();
    info!("WebSocket client disconnected");
}
