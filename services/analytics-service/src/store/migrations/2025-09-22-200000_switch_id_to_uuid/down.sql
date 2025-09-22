-- Revert UUID id to serial int
ALTER TABLE users DROP CONSTRAINT users_pkey;
ALTER TABLE users ADD COLUMN old_id serial;
UPDATE users SET old_id = nextval(pg_get_serial_sequence('users','old_id'));
ALTER TABLE users DROP COLUMN id;
ALTER TABLE users RENAME COLUMN old_id TO id;
ALTER TABLE users ADD PRIMARY KEY (id); 