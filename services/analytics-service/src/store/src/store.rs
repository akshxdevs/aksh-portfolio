use crate::config::Config;
use diesel::prelude::*;
use diesel::r2d2::{ConnectionManager, Pool, PooledConnection};
use diesel::ConnectionError;

#[derive(Clone)]
pub struct Store {
    pub pool: Pool<ConnectionManager<PgConnection>>,
}

impl Store {
    pub fn new() -> Result<Self, ConnectionError> {
        let config = Config::default();
        let manager = ConnectionManager::<PgConnection>::new(&config.db_url);
        let pool = Pool::builder()
            .build(manager)
            .map_err(|e| ConnectionError::BadConnection(e.to_string()))?;
        Ok(Self { pool })
    }

    pub fn get_conn(&self) -> Result<PooledConnection<ConnectionManager<PgConnection>>, diesel::r2d2::PoolError> {
        self.pool.get()
    }
}