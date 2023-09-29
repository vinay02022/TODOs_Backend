const Todo=require('../models/ToDoSchema');//y dega dhachaa , bole to kya kya masaala h copy m
//ceateTodo
const postTodo=async(req,res)=>{
    try {
        const success=await Todo.create({todo:req.params.sameNameRakhnaApiMain})//Dhache k according Kaam uski help s liya ja rha
        if(success){
            res.status(200).send({"msg":"Worked..POST.."})
        }else{
            res.status(400).send("Not Send Data..")
        }
    } catch (err) {
        console.log(err);   
    }
}
//update TODO
const updateTodo=async(req,res)=>{
    try {
        const success=await Todo.findByIdAndUpdate(req.params.id,{todo:req.params.data})//Dhache k according Kaam uski help s liya ja rha
        console.log(req.params.data)
        if(success){
            res.status(200).send({"msg":" Worked.and Updated..."})
        }else{
            res.status(400).send("Not Updated ..")
        }

         
    } catch (err) {
        console.log(err);

        
    }
    
}

//Delete todo
const deleteTodo=async(req,res)=>{
    try {
        const success=await Todo.findByIdAndDelete(req.params.id)//Dhache k according Kaam uski help s liya ja rha
        if(success){
            res.status(200).send({"msg":" Worked.and Deleted Broo..."})
        }else{
            res.status(400).send("Could Not Deleted..")
        }
         
    } catch (err) {
        console.log(err);   
    }
    
}

//GetAllTheTodo

const getAllTodo=async(req,res)=>{
    try {
        const success=await Todo.find()//Dhache k according Kaam uski help s liya ja rha
        if(success){
            res.status(200).send({"success":[success]})
        }else{
            res.status(400).send("Not Updated ..")
        }

         
    } catch (err) {
        console.log(err);

        
    }
    
}
module.exports={postTodo,updateTodo,deleteTodo,getAllTodo}