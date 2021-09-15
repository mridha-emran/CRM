const express = require("express")
const router = express.Router()
const { addlogin} = require("../controller/loginControler")



router.post("/",addlogin )


module.exports = router