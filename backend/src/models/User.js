const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   email: String,
   password: String,
   phoneNo: String,
   gender: String,
})