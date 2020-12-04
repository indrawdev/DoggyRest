import mongoose from 'mongoose'
const { Schema } = mongoose

const phoneSchema = new Schema({
   user: String,
   number: String
})

exports.module = mongoose.model('Phone', phoneSchema)