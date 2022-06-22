const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  res.send("Todos end point hit");
});

//making a module
module.exports = router;
