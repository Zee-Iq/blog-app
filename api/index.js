const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

mongoose.connect("mongodb://localhost/test");

app.listen("5000", () => {
    console.log("Server is running on port 5000");
})