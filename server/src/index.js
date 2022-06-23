//files
const router = require("./router");
//
const express = require("express");
const app = express();
app.use(express.json());
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

//middleware
//runs before hitting any end points
const morgan = require("morgan");
app.use(morgan("tiny"));
const cors = require("cors");
app.use(cors());

app.use(router);
//
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("starting on port 8080");
  app.listen(8080);
});
// app.listen(8080);
