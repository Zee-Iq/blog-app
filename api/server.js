const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.MONGO_URL,)
.then(console.log("Connected to MongoDB"))
.catch((err) => console.log(err))

app.use("/", (req, res) => {
  console.log("Hello from /");
});

app.listen("5500", () => {
  console.log("server is running at port 5500");
});
