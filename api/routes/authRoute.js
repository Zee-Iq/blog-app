const router = require("express").Router();

const UserModel = require("../models/UserModel");
const User = require("../models/UserModel");

//REGISTER
router.post("/regsiter", async (req, res) => {
  try {
    const newUser = new UserModel({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })

    const user = await newUser.save()
    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

module.exports = router