const express = require("express");
const router = express.Router();
// we want to use isLoggedIn on some specific end points
const isLoggedIn = require("./middleware/isLoggedIn");
const readTodosRoute = require("./routes/readTodosRoute");
const createTodoRoute = require("./routes/createTodoRoute");
const updateTodoRoute = require("./routes/updateTodoRoute");
const deleteTodoRoute = require("./routes/deleteTodoRoute");

router.post("/login", require("./routes/loginRoute"));

router.get("/todos", isLoggedIn, readTodosRoute); //read
router.post("/todos", isLoggedIn, createTodoRoute); //create
router.put("/todos/:id", isLoggedIn, updateTodoRoute); //update
router.delete("/todos/:id", isLoggedIn, deleteTodoRoute); //delete

//making a module
module.exports = router;
