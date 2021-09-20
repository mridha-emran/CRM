const express = require("express")
const router = express.Router()
const {   doLogout} = require("../controller/logoutController")



router.post("/",doLogout)


module.exports = router