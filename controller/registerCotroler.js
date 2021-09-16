const User = require("../model/user");
const bcrypt = require("bcrypt");

const passwordValid = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,50})$/;
 const addregister = async(req,res)=>{
    const { email, password } = req.body;
    const passwordTest= passwordValid.test(password)
    const userPassword = await bcrypt.hash(password, 12);
   if(passwordTest){
    try {
		await User.create({ email: email, password: userPassword });
        res.json("User added",)
	} 
    catch (err) {
		return res.status(400).json({
			message: " user created",
		});
	}}
  else {
    res.status(400).json({
      message: " enter a valid email/password",
    });
  }
 }

 module.exports ={
    
    addregister
   
    
}