const express = require("express");
const router = express.Router();
// we want to use isLoggedIn on some specific end points
const isLoggedIn = require("./middleware/isLoggedIn");

router.post("/login", require("./routes/loginRoute"));

router.get("/todos", isLoggedIn, require("./routes/readTodosRoute"));
router.post("/todos", isLoggedIn, require("./routes/createTodoRoute"));
//update
//delete

//making a module
module.exports = router;
