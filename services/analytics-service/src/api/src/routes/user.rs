use crate::auth::generate_jwt;
use axum::{extract::State, response::IntoResponse, Json};
use std::sync::Arc;
use store::store::Store;

#[derive(serde::Deserialize)]
pub struct CreateUserInput {
    pub username: String,
    pub password_hash: String,
}

#[derive(serde::Deserialize)]
pub struct SignInInput {
    pub username: String,
    pub password_hash: String,
}

#[derive(serde::Serialize)]
pub struct CreateUserOutput {
    pub id: i32,
    pub token: String,
}

pub async fn signup_route(
    State(store): State<Arc<Store>>,
    Json(data): Json<CreateUserInput>,
) -> impl IntoResponse {
    match store.sign_up(data.username.clone(), data.password_hash) {
        Ok(user) => {
            let secret = "your-secret-key"; // Move to env/config in real app
            match generate_jwt(user.id.to_string(), secret) {
                Ok(token) => {
                    let response = CreateUserOutput {
                        id: user.id,
                        token,
                    };
                    Json(response).into_response()
                }
                Err(e) => (
                    axum::http::StatusCode::INTERNAL_SERVER_ERROR,
                    format!("Token generation error: {}", e),
                )
                    .into_response(),
            }
        }
        Err(e) => (
            axum::http::StatusCode::INTERNAL_SERVER_ERROR,
            format!("Signup error: {}", e),
        )
            .into_response(),
    }
}

pub async fn signin_route(
    State(store): State<Arc<Store>>,
    Json(data): Json<SignInInput>,
) -> impl IntoResponse {
    match store.sign_in(data.username.clone(), data.password_hash.clone()) {
        Ok(Some(user)) => {
            let secret = "akshxsect34";
            match generate_jwt(user.id.to_string(), secret) {
                Ok(token) => {
                    let response = CreateUserOutput {
                        id: user.id,
                        token,
                    };
                    Json(response).into_response()
                }
                Err(e) => (
                    axum::http::StatusCode::INTERNAL_SERVER_ERROR,
                    format!("Token generation error: {}", e),
                )
                .into_response(),
            }
        }
        Ok(None) => (
            axum::http::StatusCode::UNAUTHORIZED,
            "Invalid username or password".to_string(),
        )
        .into_response(),
        Err(e) => (
            axum::http::StatusCode::INTERNAL_SERVER_ERROR,
            format!("Signin error: {}", e),
        )
        .into_response(),
    }
}

