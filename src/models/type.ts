import mongoose from 'mongoose'
const { Schema } = mongoose

const typeSchema = new Schema({
   id: String,
   name: String
})

exports.module = mongoose.model('Type', typeSchema)