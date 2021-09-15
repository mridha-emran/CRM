const express = require("express")
const router = express.Router()
const { getContact,addContact,changeContact} = require("../controller/contactController")

router.get("/",getContact)
router.post("/",addContact)
router.put("/:id",changeContact)
router.delete("/:id",)

module.exports = router