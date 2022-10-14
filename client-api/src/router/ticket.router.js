const express=require("express");
// const { verifyRefreshJWT,createaccessjwt } = require("../helper/jwt.helper");
// const {getUserByEMail} =require("../model/user/User.model")

const {insertTicket,getTicket,getTicketbyID ,deleteTicket,updateClientReply,updateStatusClose}=require("../model/ticket/ticket.model")
const { Autherization}=require("../middleware/authorization.middleware")

const {createNewTicketValidation ,replyTicketMessageValidation}=require("../middleware/formValidation.middleware")



const router = express.Router();




router.all("/" ,(req,res,next)=>{

     

     
  
 

 next()


});

router.post('/',createNewTicketValidation ,Autherization,async(req,res)=>{


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

router.get('/:id',Autherization,async(req,res)=>{

  console.log(req.params.id)

  try {
    
    const _id=req.params.id 
     console.log("ticket id", _id)

    const user_id=req.user_id 
   
   
 const result =await getTicketbyID(_id,user_id)

   

 if(result.length){

  return res.json({status : "success", result})
  
 
 }
 return res.json({status : "error",  message:"ticket not able to create"})

  } catch (error) {
 
      console.log(error)  
  

  }




})

router.put('/:id',replyTicketMessageValidation,Autherization,async(req,res)=>{



  try {
    
     const {message,sender}=req.body
    
     const id=req.params.id 

     
    
    

    const user_id=req.user_id 
   
   
 
    const result =await updateClientReply({id,message,sender})




   

 if(result._id){

  return res.json({status : "success", Message:"successfully  message updated"})
  
 
 }
 res.json({status : "error",  message:"unable to update"})

  } catch (error) {
 
      console.log(error)  
  

  }




})



router.patch('/close-ticket/:id',Autherization,async(req,res)=>{



  try {
    
    
    
    const _id=req.params.id 
    
    const user_id=req.user_id 
   
   
 
    const result =await updateStatusClose({_id,user_id})




   

 if(result._id){

  return res.json({status : "success", Message:"successfully  status updated"})
  
 
 }
 res.json({status : "error",  message:"unable to update"})

  } catch (error) {
 
      console.log(error)  
  

  }




})


router.delete('/:id',Autherization,async(req,res)=>{



  try {
    
    
    
    const _id=req.params.id 
    
    const user_id=req.user_id 
   
   
 
    const result =await deleteTicket({_id,user_id})




   

 if(result._id){

  return res.json({status : "success", Message:"successfully deleted"})
  
 
 }
 res.json({status : "error",  message:"unable to delete"})

  } catch (error) {
 
      console.log(error)  
  

  }




})







module.exports=router;


