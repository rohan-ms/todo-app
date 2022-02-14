const express=require('express')
const morgan=require('morgan')
const router=require('./routes/taskRouter')
const path=require('path')
const mongoose=require('mongoose')
const controller=require('./controller/taskController')
const app= express()
app.use(express.static(path.resolve(__dirname,'dist')))
app.engine('pug', require('pug').__express)
app.use(morgan('dev'))
app.set('view engine','pug')
app.set('views',path.resolve(__dirname,'views'))
app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb://localhost:27017/TODO").then(()=>{
    console.log('connected to database');
})

app.use('/todo',router)
app.listen(5000,()=>{
    console.log('server started on port 5000...')
})