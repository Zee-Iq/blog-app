const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/authRoute")
const userRoute = require("./routes/usersRoute")


dotenv.config();
app.use(express.json())




mongoose.connect(process.env.MONGO_URL,)
.then(console.log("Connected to MongoDB"))
.catch((err) => console.log(err))

app.get("/greeting", (req,res) => {
  res.json({greeting:"hello from /greeing"})
})

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)

app.listen("5500", () => {
  console.log("server is running at port 5500");
});
