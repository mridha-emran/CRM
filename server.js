const express=require("express")
const app=express()
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const router=require("./Router/contactRouter")
const registerRouter=require("./Router/registerRouter")
const loginRouter=require("./Router/loginRouter")
const cookieParser = require("cookie-parser");
dotenv.config({
    path:"./config.env"
})
app.use(express.json())
app.use(cookieParser());

mongoose.connect(process.env.DB,{useNewUrlParser:true,}).then(()=>{
    console.log("connected to mongoDB!")
})

app.use("/contact",router)
app.use("/register",registerRouter)
app.use("/login",loginRouter)

app.listen(process.env.PORT,()=>(console.log("this server listing port:3005")))