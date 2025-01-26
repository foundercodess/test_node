const express= require("express");
const route = express.Router();
const {signUpValidation}= require("../helper/validator");
const userCon= require('../controller/userCon');

route.post("/register", signUpValidation,userCon.register);

module.exports= route;