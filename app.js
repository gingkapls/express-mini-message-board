require("dotenv").config;

const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 8080;

const indexRouter = require("./routes/indexRouter");
const messageRouter = require("./routes/messageRouter");
const userRouter = require("./routes/userRouter");

const app = express();

// ejs setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Form middleware
app.use(express.urlencoded({ extended: true }));

// Routers
app.use("/", indexRouter);
app.use("/message", messageRouter);
app.use("/user", userRouter)

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
  console.log(`click to visit: http://localhost:${PORT}/`);
});
