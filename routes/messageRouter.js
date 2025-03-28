const { Router } = require("express");
const formatDate = require("../lib/formatDate");
const {
  postMessage,
  getMessageById,
} = require("../controllers/messageController");

const router = Router();

router.get("/:messageId", getMessageById);
router.post("/", postMessage);

module.exports = router;
