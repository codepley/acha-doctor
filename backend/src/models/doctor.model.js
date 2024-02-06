import mongoose from 'mongoose'

const doctorSchema = new mongoose.Schema({
   doctorName: {
      type: String,
      required: true
   },
   degree: {
      type: String
   },
   location: {
      type: String
   },
   city: {
      type: String
   },
   fee: {
      type: String
   },
   yearOfExperience: {
      type: Number
   },
   speciality: {
      type: String
   }
})