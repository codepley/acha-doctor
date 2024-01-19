const User = require("../models/user.model.js");

async function signUpUser(req, res) {
   const { email, password, phoneNo, gender, firstName, lastName } = req.body;

   if(!email || !password || !phoneNo || !gender || !firstName || !lastName){
      res.status(400).json({
         success: false,
         msg: "All fields are required"
      })
   }

   const userExists = await User.findOne({email})

   if(userExists) {
      res.status(400).json({
         success: false,
         msg: "User already present"
      })
   }

   const user = await User.create({
      email,
      password,
      firstName,
      lastName,
      phoneNo,
      gender
   })

   user.save();

   console.log(req.body)
   res.status(200).json({
      success: true,
      msg: "User created successfully",
      user
   });
}

module.exports = {signUpUser}