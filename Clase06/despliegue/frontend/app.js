const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use("/", express.static(__dirname + "/public"));

app.get("/healthz", (req, res) => res.send("I am alive!"));

app.get("/api/config", (req, res) =>
  res.json({
    pathBackend1:
      process.env.SERVICE_BACKEND1 || "http://localhost:19010/api/message",
  })
);

app.use("**", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

module.exports = app;
