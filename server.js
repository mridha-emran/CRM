const express=require("express")
const app=express()
const dotenv=require("dotenv")
const mongoose=require("mongoose")

dotenv.config({
    path:"./config.env"
})
app.use(express.json())

mongoose.connect(process.env.DB,{useNewUrlParser:true,}).then(()=>{
    console.log("connected to mongoDB!")
})

app.listen(process.env.PORT,()=>(console.log("this server listing port:3005")))