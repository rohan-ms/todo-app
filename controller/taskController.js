const Task=require('../model/taskModel')

exports.addTask=async(req,res)=>{
    const created=await Task.create(req.body)
    // res.send(created)
    
    res.status(200).redirect('http://localhost:5000/todo')
    
}

exports.getTask=async(req,res)=>{
    const tasks=await Task.find({'completed':false})
    const comTask=await Task.find({'completed':true})
    // console.log(tasks)
    res.status(200).render('index',{
        tasks,
        comTask
})
}

exports.checkCom=async(req,res)=>{
    const {id}=req.params
    if(id==='deleteTodo'){
        await Task.deleteMany({'completed':false})
    }else if(id==='deleteCom'){
        await Task.deleteMany({'completed':true})
    }
    else{
        await Task.findByIdAndUpdate({_id:id},{'completed':true})
    }
    res.status(200).redirect('http://localhost:5000/todo')

}