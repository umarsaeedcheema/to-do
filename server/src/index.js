const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();

//middleware
//before hitting end points, run this code
app.use(morgan("tiny"));

console.log(process.env.MONGO_URI);

app.listen(8080);
