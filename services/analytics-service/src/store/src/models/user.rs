use crate::store::Store;
use diesel::{insert_into, prelude::*, OptionalExtension};
use chrono::NaiveDateTime;
use uuid::Uuid;

#[derive(Queryable, Selectable, Debug)]
#[diesel(table_name = crate::schema::users)]
#[diesel(check_for_backend(diesel::pg::Pg))]
pub struct User {
    pub id: Uuid,
    pub username: String,
    pub password_hash: String,
    pub created_at: NaiveDateTime,
}

#[derive(Insertable)]
#[diesel(table_name = crate::schema::users)]
pub struct NewUser {
    pub username: String,
    pub password_hash: String,
}

impl Store {
    pub fn sign_up(&self, username: String, password_hash: String) -> Result<User, diesel::result::Error> {
        let mut conn = self
            .get_conn()
            .map_err(|e| diesel::result::Error::SerializationError(Box::new(e)))?;
        let new_user = NewUser { username, password_hash };
        let user: User = insert_into(crate::schema::users::table)
            .values(&new_user)
            .get_result(&mut conn)?;
        Ok(user)
    }

    pub fn get_user_by_username(&self, input_username: String) -> Result<Option<User>, diesel::result::Error> {
        use crate::schema::users::dsl::*;
        let mut conn = self
            .get_conn()
            .map_err(|e| diesel::result::Error::SerializationError(Box::new(e)))?;
        let user_result = users
            .filter(username.eq(&input_username))
            .select(User::as_select())
            .first::<User>(&mut conn)
            .optional()?;
        Ok(user_result)
    }
    
    pub fn sign_in(&self, input_username: String, input_password_hash: String) -> Result<Option<User>, diesel::result::Error> {
        use crate::schema::users::dsl::*;
        let mut conn = self
            .get_conn()
            .map_err(|e| diesel::result::Error::SerializationError(Box::new(e)))?;
        let user_result = users
            .filter(username.eq(&input_username))
            .select(User::as_select())
            .first::<User>(&mut conn)
            .optional()?;
        if let Some(user) = user_result {
            if user.password_hash == input_password_hash {
                return Ok(Some(user));
            }
        }
        Ok(None)
    }
}