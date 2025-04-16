const { Router } = require("express");
const {
  postMessage,
  getMessageByMessageId,
} = require("../controllers/messageController");

const router = Router();

router.get("/:messageId", getMessageByMessageId);
router.post("/", postMessage);

module.exports = router;
