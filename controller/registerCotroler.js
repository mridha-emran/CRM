const User = require("../model/user");
const bcrypt = require("bcrypt");

 const addregister = async(req,res)=>{
    const { email, password } = req.body;
    const userPassword = await bcrypt.hash(password, 12);

    try {
		await User.create({ email: email, password: userPassword });
        res.json("User added",)
	} 
    catch (err) {
		return res.status(400).json({
			message: " user created",
		});
	}
 }

 module.exports ={
    
    addregister
   
    
}