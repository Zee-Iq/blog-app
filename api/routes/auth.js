const express = require("express")
const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");


const sendEmail = require('../utils/mail/mail')
const sendEmailResetPass = require('../utils/mail/mailResetPass')


// Register


router.post("/register", express.json(), async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();




    // sending email
    sendEmail(user.email) 


    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Log in

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong credentials !!!");

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Wrong credentials !!!");

    const {password, ...others} = user._doc
    res.status(200).json(others)
  } catch (error) {
    res.status(500).json(err);
  }
});




// forgot password

router.post('/forgotpass', async (req, res) => {

  try {

      const email = req.body.email
      console.log('email is', email)
      // const token = req.params.token
      // console.log('token is ', token)

      // find user in db
      const user = await User.findOne({email: email})
      console.log('user is', user)

      if (!user) return send({success: false, errorId: 1})

      const userWithToken = await user.generateToken('1d', 'resetToken')

      console.log('token is ', userWithToken.resetToken)

      if (!userWithToken.resetToken) return send({success: false, errorId: 2})

      sendEmailResetPass(user.email, userWithToken.resetToken)

      res.send({success: true})

  } catch (error) {
      
      console.log('forgot pass ERROR:', error.message)
      res.send(error.message)
  }
})


// email confirm

router.get('/emailconfirm/:token', async (req, res) => {

  try {

      const token = req.params.token
      console.log('token is ', token)

      // find the user with provided id (id is contained inside JWT)
      // update the user and set emailverified to true

      const payload = await User.getPayload(token)
      console.log('payload is ', payload)

      const id = payload.id

      const updatedUser = User.findByIdAndUpdate(id, {emailVerified: true}, {new: true})

      if (!updatedUser) return res.send({success: false})

      res.send({success: true})

  } catch (error) {
      
      console.log('email confirm ERROR:', error.message)
      res.send(error.message)
  }
})



router.post('/changepass', async (req, res) => {

  try {

      const {pass, token} = req.body

      console.log('body is', req.body)

      // 1. verify the token 
      const verifiedToken = await User.getPayload(token)

      console.log('verified token is', verifiedToken)

      const user = await User.findByIdAndUpdate(verifiedToken.id)

      if (user) {

          user.pass = pass;
          user.resetToken = '';

          const userSaved = await user.save();
          console.log('user is ', userSaved)
      }

     

      res.send({success: true})

  } catch (error) {
      
      console.log('change pass ERROR:', error.message)
      res.send(error.message)
  }
})



module.exports = router;
