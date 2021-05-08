const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const todoSchema = new mongoose.Schema({
    todo:{
        type:String,
        required:true
    },
    todoBy:{
        type:ObjectId,
        ref:"User"
    }
})


module.exports = mongoose.model('Todo',todoSchema)