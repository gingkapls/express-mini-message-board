const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
    id: crypto.randomUUID(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
    id: crypto.randomUUID(),
  },
];

const getAllMessages = async () => messages.slice();

const getMessageByUser = async (user) =>
  messages.filter((message) => message.user === user);

const addMessage = async ({ text, user, added }) =>
  void messages.push({ text, user, added, id: crypto.randomUUID() });

const findMessageById = async (messageId) =>
  messages.find(({ id }) => messageId === id);

module.exports = { getAllMessages, getMessageByUser, addMessage, findMessageById };
