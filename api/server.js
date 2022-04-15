const express = require("express");
const app = express();

app.use("/", (req,res) =>{
    console.log("Hello from /")
})

app.listen("5500", () => {
  console.log("server is running at port 5500");
});
