const express=require("express");
// const { verifyRefreshJWT,createaccessjwt } = require("../helper/jwt.helper");
// const {getUserByEMail} =require("../model/user/User.model")

const {insertTicket}=require("../model/ticket/ticket.model")


const router = express.Router();




router.all("/" ,(req,res,next)=>{

     

     
  
 

 next()


});



module.exports=router;