\c
weapon_database;

CREATE TABLE users
(
  uniq UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  id UUID DEFAULT gen_random_UUID(),
  name VARCHAR(255),
  surname VARCHAR(255)
);
