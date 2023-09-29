const mongoose=require('mongoose')//to work with dataBase Mongoose will help us
//var Schema = mongoose.Schema; //this is a schema of the database we are going to create
const todoSchema=mongoose.Schema({
    //pass the object, kya kya rhega tags, samaan/tools  basicall what data we want
    todo:{
        type:String,
        required:true,
    }
})
module.exports=mongoose.model("Todo",todoSchema)
    // })mongoose.model("AnyModelName",SchemaLega)
