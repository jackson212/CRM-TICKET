const express=require("express");
// const { verifyRefreshJWT,createaccessjwt } = require("../helper/jwt.helper");
// const {getUserByEMail} =require("../model/user/User.model")

const {insertTicket,getTicket}=require("../model/ticket/ticket.model")
const { Autherization}=require("../middleware/authorization.middleware")


const router = express.Router();




router.all("/" ,(req,res,next)=>{

     

     
  
 

 next()


});

router.post('/',Autherization,async(req,res)=>{


  try {
    const {subject,sender,message}=req.body

   
    const ticketObj={
      
        ClientID: req.user_id,
        subject,
        conversation:[
           {
                sender,
                message
            }
       ]
 } 
   
 const result =await insertTicket(ticketObj)

  

 if(result._id){

  return res.json({status : "success",  message:"ticket created succesfully"})
  

 }
 return res.json({status : "error",  message:"ticket not able to create"})

  } catch (error) {
 
      console.log(error)  
  

  }


res.json({Message:"todo create a new ticket"})

})

router.get('/',Autherization,async(req,res)=>{


  try {
    

    const _id=req.user_id 
   
   
 const result =await getTicket(_id)

  

 if(result.length){

  return res.json({status : "success", result})
  
 
 }
 return res.json({status : "error",  message:"ticket not able to create"})

  } catch (error) {
 
      console.log(error)  
  

  }




})










module.exports=router;


