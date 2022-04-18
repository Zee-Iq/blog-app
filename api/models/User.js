const mongoose = require("mongoose")
const jwt = require('jsonwebtoken')


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,

    },
    email: {
        type: String,
        required: true,
        unique: true,
        
    },
    password: {
        type: String,
        required: true

    },

    profilePic: {
        type: String, 
        default: ""
    },


}, {timestamps: true}
);




// userSchema.methods.generateToken = async function(expiration, dbField) {

//     const user = this;

//     // console.log('inside generate token: user is', user)

//     // console.log('user._id converted', user._id.toHexString());

//     const token = jwt.sign({id: user._id.toHexString()}, process.env.SECRET, {
//         expiresIn: expiration
//     })
//     // console.log('token is', token)

//     if (dbField) {

//         // user.token
//         // user.resetToken
//         // user.refreshToken
//         // user.emailVerifyToken

//         user[dbField] = token;
//         await user.save()
//         return user

//     } else { // just return the token

//         return token
//     }


// }



// userSchema.statics.getPayload = async token => {

//     try {
//         return jwt.verify(token, process.env.SECRET)
        
//     } catch (error) {
//         return error.message
//     }
// }

module.exports = mongoose.model("User", UserSchema)