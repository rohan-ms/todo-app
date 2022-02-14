const mongoose=require('mongoose');

const taskSchema=mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    }
})

const TaskModel=mongoose.model('task',taskSchema)

module.exports=TaskModel