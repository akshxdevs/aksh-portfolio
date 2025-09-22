use serde::{Deserialize, Serialize};
use jsonwebtoken::{encode, decode, Header, Validation, EncodingKey, DecodingKey};
use std::time::{SystemTime, Duration, UNIX_EPOCH};

#[derive(Debug, Serialize, Deserialize)]
pub struct Claims {
    pub sub: String, 
    pub exp: usize,
}

pub fn generate_jwt(user_id: String, secret: &str) -> Result<String, jsonwebtoken::errors::Error> {
    let now = SystemTime::now().duration_since(UNIX_EPOCH).unwrap_or(Duration::from_secs(0));
    let exp = (now + Duration::from_secs(24 * 60 * 60)).as_secs() as usize;

    let claims = Claims {
        sub: user_id,
        exp,
    };

    encode(&Header::default(), &claims, &EncodingKey::from_secret(secret.as_ref()))
}

pub fn verify_jwt(token: &str, secret: &str) -> Result<Claims, jsonwebtoken::errors::Error> {
    let decoded = decode::<Claims>(
        token,
        &DecodingKey::from_secret(secret.as_ref()),
        &Validation::default(),
    )?;
    Ok(decoded.claims)
}
