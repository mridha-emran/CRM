const express = require("express")
const router = express.Router()
const { getContact,addContact,changeContact,deleteContact} = require("../controller/contactController")
const{protect}=require("../midelware/protrct")

router.get("/",protect,getContact)
router.post("/",protect,addContact)
router.put("/:id",changeContact)
router.delete("/:id",protect,deleteContact)

module.exports = router