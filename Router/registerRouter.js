const express = require("express");
const router = express.Router()
const {addregister} = require("../controller/registerCotroler");


router.post("/", addregister);


module.exports = router