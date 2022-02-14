const express=require('express')
const controller=require('./../controller/taskController')
const router=express.Router()

router.route('/')
.get(controller.getTask)
.post(controller.addTask)

router.route('/:id').get(controller.checkCom)

module.exports=router