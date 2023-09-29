const express=require('express')
const mongoose=require('mongoose')
const app=express()
const userRouter=require('./routers/userRouter')
app.use(express.json())//made capable to handle json data
app.use(express.urlencoded({extended:true}))
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/todoss');
  console.log("DataBase Connected.....");
}
app.use(userRouter)//mujhe ab koi matlb nhi h aap jao userRouter k pass
// app.use(userRouter);
app.listen(4000,()=>{
    console.log(`Server is running on port 4000`);
})
