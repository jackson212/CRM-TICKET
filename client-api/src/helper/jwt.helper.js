const jwt = require('jsonwebtoken');
const{setJWT,getJWT}=require("../helper/redis.helper")

const{storeUserRefreshJWT}= require("../model/user/User.model")

const createaccessjwt=async (email,user_id)=>{

    try{
         
        const accessJWT = await jwt.sign({ email}, process.env.JWT_ACCESS_SECRET,{expiresIn:"15m"});
     

        await setJWT(accessJWT,user_id)

        return Promise.resolve(accessJWT)



    }catch(error){
     
        return Promise.reject(error)

    }

   
    
}

const createRefreshjwt=async(email,user_id)=>{

    const RefereshJwt = jwt.sign({ email}, process.env.JWT_ACCESS_SECRET,{expiresIn:"30d"});

    await storeUserRefreshJWT(user_id,RefereshJwt)

    return Promise.resolve(RefereshJwt)
    
}



module.exports={

    createaccessjwt,
    createRefreshjwt
}

