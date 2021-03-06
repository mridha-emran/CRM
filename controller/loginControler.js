const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


 const addlogin = async(req,res)=>{
    const { email, password } = req.body;
    const user = await User.findOne({ email: email })

    try {
        const passwordValid = await bcrypt.compare(password, user.password);
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
 
	    res.cookie("jwt", token, { httpOnly: true, secure: false },{expires:new Date(Date.now()+6000)});

        res.json({massage:"user match"})
    } catch (error) {
      

        res.json({ errorMessage: "There is a probleme " })
    }
 }

 module.exports ={
    
    addlogin
   
    
}