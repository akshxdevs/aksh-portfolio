// @generated automatically by Diesel CLI.

diesel::table! {
    use diesel::sql_types::*;
    use diesel::sql_types::Uuid;

    users (id) {
        id -> Uuid,
        username -> Text,
        password_hash -> Text,
        created_at -> Timestamp,
    }
}
