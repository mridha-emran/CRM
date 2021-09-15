const Contact= require("../model/contact")


const getContact=async (_req,res)=>{
    const contacts=await Contact.find().populate("userId")
    res.json({
		status: "OK",
		message:"data send",
        data: contacts
	});

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
        const contactQuery=req.query.name
          await Contact.findOneAndUpdate( {_id:contactID},
            { $set: { name: contactQuery } })
            res.json({
                message: "contact updated"
            })

    
 
     
}

module.exports ={
    getContact,
    addContact,
    changeContact
   
    
}