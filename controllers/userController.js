const formatDate = require("../lib/formatDate");
const { getMessageByUser } = require("../models/messages");

const getUserMessages = async (req, res) => {
  const { username } = req.params;
  const messages = await getMessageByUser(username);

  if (!messages) {
    res.status(404).send("User not found");
    return;
  }

  res.render("index", { title: `Messages by ${username}`, messages, formatDate });
};

module.exports = { getUserMessages };
