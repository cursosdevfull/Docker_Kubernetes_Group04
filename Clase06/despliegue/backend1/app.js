const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");

app.use(cors());

app.get("/health", (req, res) => res.send("I am alive!"));

app.get("/api/message", async (req, res) => {
  const path =
    process.env.SERVICE_BACKEND2 || "http://localhost:19020/api/message";

  const response = await axios.get(path);

  res.json({
    messageBackend1: "Hello from backend1",
    messageBackend2: response.data.messageBackend2,
  });
});

module.exports = app;
