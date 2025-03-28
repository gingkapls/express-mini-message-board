const { Router } = require("express");
const { getAllMessages, addMessage } = require("../models/messages");
const formatDate = require("../lib/formatDate");
const router = Router();

router.get("/", async (req, res, next) => {
  const messages = await getAllMessages();
  res.render("index", { title: "Mini-Message Board", messages, formatDate });
});

router.get("/new", async (req, res, next) => {
    res.render("form");
});


module.exports = router;
