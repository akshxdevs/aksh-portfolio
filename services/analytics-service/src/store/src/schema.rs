// @generated automatically by Diesel CLI.

diesel::table! {
    use diesel::sql_types::*;

    users (id) {
        id -> Int4,
        username -> Text,
        password_hash -> Text,
        created_at -> Timestamp,
    }
}
