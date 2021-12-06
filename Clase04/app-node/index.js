const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("¡Hola mundo!"));

app.get("/health", (req, res) => res.send("OK"));

app.use("**", (req, res) => res.send("404"));

app
  .listen(4000)
  .on("listening", () => console.log("Listening on port 4000"))
  .on("error", (err) => console.log(err));
