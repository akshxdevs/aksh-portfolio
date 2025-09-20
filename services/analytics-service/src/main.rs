use futures_util::StreamExt;
use services::{kafka::{init_consumer, init_producer}, redis::init_redis_pool, ws};
use tokio::{sync::broadcast};
use rdkafka::{consumer::{CommitMode, Consumer, StreamConsumer}, Message};
use std::{net::SocketAddr, sync::Arc};
use log::{info};

mod services;

#[derive(Clone)]
pub struct AppState {
    pub kafka_producer: Arc<rdkafka::producer::FutureProducer>,
    pub redis_pool: deadpool_redis::Pool,
    pub broadcaster: broadcast::Sender<String>,
    pub kafka_topic: String
}

#[tokio::main]
pub async fn main() -> Result<(),std::io::Error>{
    env_logger::init();
    let brokers = std::env::var("KAFKA_BROKERS").unwrap_or("localhost:9092".into());
    let topic = std::env::var("KAFKA_TOPIC").unwrap_or("rust-topic".into());
    let producer = Arc::new(init_producer(&brokers));
    let consumer: StreamConsumer = init_consumer(&brokers,"rust-ws-service",&topic);
    let redis_pool = init_redis_pool().await;
    let (tx,_rx) = broadcast::channel(100);
    let state = AppState {
        kafka_producer:producer.clone(),
        kafka_topic:topic.clone(),
        redis_pool,
        broadcaster:tx.clone()
    };

    let bg_state = state.clone();
    tokio::spawn(async move {
        let mut stream = consumer.stream();
        while let Some(Ok(msg)) = stream.next().await {
            if let Some(Ok(payload)) = msg.payload_view::<str>() {
                let _ = bg_state.broadcaster.send(payload.to_string());
            }
            let _ = consumer.commit_message(&msg, CommitMode::Async);
        }
    });

    let app = ws::ws_router().with_state(state);
    let addr = SocketAddr::from(([0,0,0,0],3000));
    info!("Server Listening on {}",addr);
    let listener = tokio::net::TcpListener::bind(&addr).await?;
    axum::serve(listener, app).await?;
    Ok(())
}