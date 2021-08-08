const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ status: 200, message: "Server running" });
});

app.get("/g10", (req, res) => {
  res.json({ status: 200, message: "Hello G11" });
});

module.exports = app;
