-- Enable pgcrypto for gen_random_uuid()
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Add a temporary UUID column with default
ALTER TABLE users ADD COLUMN uid uuid DEFAULT gen_random_uuid();

-- Backfill existing rows
UPDATE users SET uid = gen_random_uuid() WHERE uid IS NULL;

-- Replace primary key
ALTER TABLE users DROP CONSTRAINT users_pkey;
ALTER TABLE users DROP COLUMN id;
ALTER TABLE users RENAME COLUMN uid TO id;
ALTER TABLE users ADD PRIMARY KEY (id); 