import mongoose from 'mongoose'
const { Schema } = mongoose

const userSchema = new Schema({
   name: {
      type: String,
   },
   email: {
      type: String,
      lowercase: true
   },
   password: {
      type: String
   },
   updated_at: {
      type: Date,
      default: Date.now
   }
})

exports.module = mongoose.model('User', userSchema)