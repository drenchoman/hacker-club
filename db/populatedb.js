const { Client } = require('pg');
const { DB_HOST, DB_USER, DB_DATABASE, DB_PASSWORD, DB_PORT } =
  process.env;
const { DBURL } = process.env;

const connectionString = DBURL;

const SQL = `
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    alias TEXT NOT NULL,
    password TEXT NOT NULL,
    status TEXT NOT NULL,
    avatar_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS avatar (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
);


INSERT INTO avatar(id, name)
VALUES 
    (1, 'cube1'),
    (2, 'cube2'),
    (3, 'cube3'),
    (4, 'cube4'),
    (5, 'cube5'),
    (6, 'smiley1'),
    (7, 'smiley2'),
    (8, 'smiley3'),
    (9, 'cookie'),
    (10, 'pizza'); 


CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString: connectionString,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
