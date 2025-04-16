const pool = require("./pool");

const getAllMessages = async () => {
  const { rows } = await pool.query("SELECT * from messages");
  return rows;
};

const getMessage = async ({messageId}) => {
  const { rows }  = await pool.query("SELECT * from messages WHERE id = ($1)", [
    messageId,
  ]);
  return rows;
};

const getMessagesByUsername = async ({username}) => {
  const { rows } = await pool.query(
    "SELECT * FROM MESSAGES WHERE username LIKE ($1)",
    [`%${username}%`]
  );

  return rows;
};

const insertMessage = async ({username, message}) => {
  const { rows } = await pool.query(
    "INSERT INTO messages (username, message) VALUES ($1, $2)",
    [username, message]
  );
    
  return rows;
};

module.exports = {
  getAllMessages,
  getMessage,
  getMessagesByUsername,
  insertMessage,
};
