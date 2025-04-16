const { Router } = require("express");
const formatDate = require("../lib/formatDate");
const { getAllMessages } = require("../db/queries");
const router = Router();

router.get("/", async (req, res, next) => {
  const messages = await getAllMessages();
  console.log(messages);
  res.render("index", { title: "Mini-Message Board", messages, formatDate });
});

router.get("/new", async (req, res, next) => {
    res.render("form");
});


module.exports = router;
