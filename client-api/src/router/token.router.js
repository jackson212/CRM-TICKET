const express=require("express");
const { verifyRefreshJWT,createaccessjwt } = require("../helper/jwt.helper");
const {getUserByEMail} =require("../model/user/User.model")

const router = express.Router();

router.get("/", async(req,res,next)=>{
    const token= req.headers['authorization']

    
     const decode = await  verifyRefreshJWT(token)
     // console.log(decode.email)
     if(decode.email){


          const userProf = await getUserByEMail(decode.email)

          console.log(userProf._id.toString())

          if(userProf._id){
          //   res.json({message: userProf})   

            let tokenexp=userProf.refreshJWT.addedAt

          const DBrefreshtoken=userProf.refreshJWT.token
          console.log(DBrefreshtoken)


            tokenexp=new Date(tokenexp)
            
            
           
            
            tokenexp=tokenexp.setDate(
               tokenexp.getDate() + +process.env.JWT_REFRESH_SECRET_EXP
               

               )

             

               const today=new Date()

                
               if(DBrefreshtoken!==token&&  tokenexp<today){

                    console.log("error")
                   return res.json({message: "forbidden"}) 

               }

              
               const accessJWT= await createaccessjwt(decode.email,userProf._id.toString())


                return res.json({message:"succes" ,accessJWT})
               console.log("jackson")
            
               

            
   
            
          }

     }
     
     
    

     return res.json({message: "forbidden"}) 
    
 

})

module.exports=router;

