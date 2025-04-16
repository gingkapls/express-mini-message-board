require("dotenv").config();
const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.PGCONNECTIONSTRING,
});

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 255 ),
    message TEXT,
    DATE timestamp without time zone DEFAULT NOW()

);

INSERT INTO messages (username, message) VALUES
 ('gin', 'Hello world'),
 ('jam', 'peak'),
 ('pookie', 'pookiemaxxing')
 RETURNING username,  message;
`;

async function main() {
console.log(process.env.PGPASSWORD);
  try {
    await client.connect();
    console.log("seeding...");
    const { rows } = await client.query(SQL);
    console.log(rows);
    console.log("done");
  } catch (e) {
    console.error("there was an error", e);
  } finally {
    await client.end();        
  }
}

main();
