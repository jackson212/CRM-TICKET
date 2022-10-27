const express=require("express");

const { insertUser,getUserByEMail } = require("../model/user/User.model");
const{comparepassword }=require("../helper/bcrypt.helper")

const {hashpassword}=require("../helper/bcrypt.helper");

const {createaccessjwt, createRefreshjwt}=require("../helper/jwt.helper")   

const {Autherization}=require("../middleware/authorization.middleware")

const {getUserbyId}=require("../model/user/User.model")

const{setPasswordResetPin, getPinByEmail,deletePin}=require("../model/resetPIn/ResetPin.model")

const {emailProcessor}=require("../helper/email.helper")

const  {resetPassReqValidation,updatePassValidation} = require("../middleware/formValidation.middleware")
const {updatepassword,storeUserRefreshJWT}=require("../model/user/User.model")

const {deleteJWT}=require("../helper/redis.helper")



const router = express.Router();

router.all("/", (req,res,next)=>{
// console.log(name)
   
    // res.json({message:"return  from user  router"})

    next()
 

})

router.post("/", async (req,res)=>{

    
    const {name,company,address,phone,email,password}=req.body



    try{
       
        const hashpass= await hashpassword (password);


        const newUserObj={
            name,
            company,
            address,
            phone,
            email,
            password:hashpass
        }

        const result =  await insertUser(newUserObj);

        console.log(result);


        res.json({message:"new user has been created" ,result})

        
    }catch(error) {

        console.log(error)
        res.json({messgae:"Failde created " ,error})


    }

  

    
  
})



router.post('/login',async(req,res)=>{

    const {email,password}=req.body

    

    if(!email||!password){

     return res.json({status:"not good" ,message:"enter password and email"})


    }     

    const user =await getUserByEMail(email)




    const userpassword= user&& user._id? user.password:null

    



    
    if(!userpassword)
       return  res.json({status: "invalid",messgae:"ur email or paswword is wrong"})

              

  

     const result = await comparepassword(password,userpassword)

     if(!result){

        return  res.json({status: "invalid",messgae:"ur email or paswword is wrong"})
     }
        
        const accessJWT= await createaccessjwt(user.email,`${user._id}`)

        

      const RefreshJwt=await createRefreshjwt(user.email,`${user._id}`)
   
     
      
    res.json({status:"success", messgae:"Login successfully",accessJWT,RefreshJwt});





});

router.get('/',Autherization, async(req,res)=>{


const _id=req.user_id

const userprof=await  getUserbyId(_id)


 const{name,email}=userprof



res.json({

 user:{
  _id,
 email,
 name
 }
})

})






router.post('/reset-password',resetPassReqValidation,async(req,res)=>{

 const {email} =req.body

const user= await getUserByEMail(email);





if(user&& user._id){

    const setpin= await setPasswordResetPin(email)

    console.log(setpin)

    await  emailProcessor({email, pin:setpin.pin,type:'request-new-pass'})

   

   
 

   

        return res.json({
            status: "success",
            message:
                "If the email is exist in our database, the password reset pin will be sent shortly.",
        });
    
     
    };
    
   

})






router.patch('/reset-password',updatePassValidation,async(req,res)=>{


    const {email,pin,newpassword}=req.body

    
    const getpin= await  getPinByEmail(email,pin)
    
      if(getpin._id){

        const DBdate=getpin.addedAt
        const expiresIn=1

        const expDate=DBdate.setDate(DBdate.getDate()+expiresIn)
        


        const today=new Date()
          
        if(today>expDate){

            res.json({status:"error",message:"invalid pin or expired pin"})
        }


        const hashedpass= await  hashpassword(newpassword)
        
        
         
        const user = await updatepassword(email,hashedpass)

       
        if(user._id){
           await  emailProcessor({email,type:'password-update-success'})

           await deletePin(email,pin)
           
           return res.json({status:"succuss",message:"your password has been updated"})
        }
 
      }

      res.json({status:"errro",message:"unable to  updated password"})



})
 
    //user logout 

router.delete('/logout',Autherization, async(req,res)=>{



    const token= req.headers['authorization']

    const id=req.user_id
       
    deleteJWT(token) 
    
    
    const result =await storeUserRefreshJWT(id,'')

     
    if(result._id){

        res.json({status:"succes" ,message:" logged out success fuly"})
     }

   
    res.json({status:"error",message:"can't log out"})
    
    })
    






module.exports=router;

