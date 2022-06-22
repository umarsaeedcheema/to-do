const express = require("express");
const app = express();

app.get("/todos", (req, res) => {
  res.send("Todos end point hit");
});

app.listen(8080);
