const express = require("express");
const app = express();

app.get("/todos", (req, res) => {
  res.send("Hello World");
});

app.listen(8080);
