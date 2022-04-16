const router = require("express").Router();

const UserModel = require("../models/UserModel");
const User = require("../models/UserModel");
const bcrypt = require("bcrypt")


//REGISTER
router.post("/regsiter", async (req, res) => {
  try {

    const salt = await bcrypt.gensalt(10)
    const hashedPass = await bcrypt.hash(req.body.password,salt)
    const newUser = new UserModel({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

module.exports = router;
