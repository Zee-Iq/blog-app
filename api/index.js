const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")

dotenv.config()

mongoose
.connect(process.env.MONGO_URL,).then(console.log("Connected to MongoDB"))
.catch(err=>console.log(err));

app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)



app.use("/", (req, res) => {
    console.log("This is main URL");
})





app.listen("5000", () =>  {
    console.log("Backend is running");

})