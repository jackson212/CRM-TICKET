const {verifyJWT} =require("../helper/jwt.helper")
const { getJWT,deleteJWT } = require("../helper/redis.helper")
const Autherization = async(req,res,next)=>{
     
     
    
    
    const token= req.headers['authorization']

     
    const decode= await verifyJWT(token)
   
     console.log(decode.email)


    if(decode.email){

     
     const user_id= await getJWT(token)

     

     if(!user_id){
        return res.status(403).json({message:"cant enter"})


     }
       
      req.user_id=user_id

       return next();

    }

    deleteJWT(token)
     
     res.status(403).json({message:"cant enter"})

   
    
   
  
   
}





module.exports={

    Autherization

}