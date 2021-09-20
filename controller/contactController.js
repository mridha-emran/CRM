const Contact= require("../model/contact")


const getContact=async (req,res)=>{
  const query = req.query;
  const userId = req.cookies.jwtData.id
  const objecjKey = Object.keys(query)[0];
  const objectValue= Object.values(query)[0];
  
  try{
    const contacts = await Contact.find({ userId: userId }).populate('userId');
    const findContacts = await Contact.find ({[objecjKey]:[objectValue]})
  if(findContacts){
    res.status(201).json({
      message: "Founding match",
      data: contacts,
    })}
  else{
    res.status(200)({
		status: "OK",
		message:"data send",
        data: findContacts
	});}
}
catch (err) {
  res.status(404).json({
    message: err,
  });}

}

const addContact=async (req,res)=>{
    const addContacts =await Contact.create(req.body)
    res.json({
		status: "OK",
		message:"data send",
        data: addContacts
	});

}
const changeContact=async(req,res)=>{

          const contactID = req.params.id
          const { userId, name, email, description, category } = req.body;
          try{
          await Contact.findOneAndUpdate( contactID, { userId, name, email, description, category })
            
            res.json({
                message: "contact updated"
            })
          }
          catch (err) {
            return res.status(400).json({
              message: " user created",
            });}
     
}

const deleteContact=async(req,res)=>{
  const contactID=req.params.id
  const removecontact=await Contact.deleteOne({_id:contactID})
  if(Contact){
      res.json({
          status:"ok",
          message:"data update",
          data: removecontact
      })
  }
}



module.exports ={
    getContact,
    addContact,
    changeContact,
    deleteContact
   
    
}