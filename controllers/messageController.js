const formatDate = require("../lib/formatDate");
const {
  getMessageByUser,
  addMessage,
  findMessageById,
} = require("../models/messages");

async function getMessageById(req, res) {
  const { messageId } = req.params;
  const message = await findMessageById(messageId);

  if (!message) {
    res.status(404).send("something wrong happened");
    return;
  }

  res.render("message", { ...message, formatDate });
}

async function postMessage(req, res) {
  const { user, text } = req.body;
  addMessage({ user, text, date: new Date() });
  res.redirect("/");
}

module.exports = { postMessage, getMessageById };
