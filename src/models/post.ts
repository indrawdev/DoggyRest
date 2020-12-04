import mongoose from 'mongoose'
const { Schema } = mongoose

const postSchema = new Schema({
   title: {
      type: String
   },
   description: {
      type: String
   },
   user: {
      
   }
})

exports.module = mongoose.model('Post', postSchema)