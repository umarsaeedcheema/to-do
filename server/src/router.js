const express = require("express");
const router = express.Router();
// we want to use isLoggedIn on some specific end points
const isLoggedIn = require("./middleware/isLoggedIn");
const readTodosRoute = require("./routes/readTodosRoute");
const createTodoRoute = require("./routes/createTodoRoute");
const updateTodoRoute = require("./routes/updateTodoRoute");
const removeTodoRoute = require("./routes/removeTodoRoute");

router.post("/login", require("./routes/loginRoute"));

router.get("/todos", isLoggedIn, readTodosRoute);
router.post("/todos", isLoggedIn, createTodoRoute); //create
router.put("/todos/:id", isLoggedIn, updateTodoRoute); //update
router.delete("/todos/:id", isLoggedIn, removeTodoRoute); //remove

//making a module
module.exports = router;
