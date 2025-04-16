const { getMessage, insertMessage } = require("../db/queries");
const formatDate = require("../lib/formatDate");

async function getMessageByMessageId(req, res) {
  const { messageId } = req.params;
  const [message] = await getMessage({ messageId });
  res.render("message", { ...message, formatDate });
}

async function postMessage(req, res) {
  const { username, message } = req.body;
  insertMessage({ username, message });
  res.redirect("/");
}

module.exports = { postMessage, getMessageByMessageId };
