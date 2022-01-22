const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/healthz", (req, res) => res.send("I am alive!"));

app.get("/api/message", (req, res) =>
  res.json({ messageBackend2: "Hello from backend2" })
);

module.exports = app;
