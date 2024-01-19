const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   email: String,
   firstName: String,
   lastName: String,
   password: String,
   phoneNo: String,
   gender: String,
   image: String
})

const User = mongoose.model('User', userSchema);

module.exports = User;