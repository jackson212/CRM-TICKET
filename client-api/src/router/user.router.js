const express=require("express");

const { insertUser,getUserByEMail } = require("../model/user/User.model");
const{comparepassword }=require("../helper/bcrypt.helper")

const {hashpassword}=require("../helper/bcrypt.helper");

const {createaccessjwt, createRefreshjwt}=require("../helper/jwt.helper")   

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

              

  

     const result =comparepassword(password,userpassword)

     if(!result){

        return  res.json({status: "invalid",messgae:"ur email or paswword is wrong"})
     }
        
        const accessJWT= await createaccessjwt(user.email,`${user._id}`)

        

      const RefreshJwt=await createRefreshjwt(user.email,`${user._id}`)
   
     
      
    res.json({status:"success", messgae:"Login successfully",accessJWT,RefreshJwt});





});


module.exports=router;

