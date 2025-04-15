require("dotenv").config();
const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.PGCONNECTIONSTRING,
  connectionTimeoutMillis: 50000, // connection timeout in milliseconds
  idleTimeoutMillis: 50000, // idle timeout in milliseconds
});

const SQL = `
CREATE TABLE IF NOT EXISTS mmbusers (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 255 )
);
`;

async function main() {
console.log(process.env.PGCONNECTIONSTRING);
  try {
    await client.connect();
    console.log("seeding...");
    const { res } = await client.query(SQL);
    console.log(res);
    console.log("done");
  } catch (e) {
    console.error("there was an error", e);
  } finally {
    await client.end();        
  }
}

main();
