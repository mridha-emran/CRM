
const jwt = require("jsonwebtoken");
const { model } = require("mongoose");

 const doLogout=(_req,res)=>{
    res.clearCookie('jwt');
    res.json({
        message: 'you are deconnected ! :)'
    })
 }

 module.exports={
     doLogout
 }
