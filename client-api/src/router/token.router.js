const express = require("express");
const router = express.Router();
const { verifyRefreshJWT,createaccessjwt } = require("../helper/jwt.helper");
const {getUserByEMail} =require("../model/user/User.model")









router.all("/" ,(req,res,next)=>{

     


 
 

 next()


});

router.get("/", async (req, res, next) => {

    
    const  auth  = req.headers['authorization']
    console.log("jackosn") 
    console.log(auth)
  
    //TODO
  
    const decoded = await verifyRefreshJWT(auth);
    if (decoded.email) {
      const userProf = await getUserByEMail(decoded.email);
  
      if (userProf._id) {
        let tokenExp = userProf.refreshJWT.addedAt;
        const dBrefreshToken = userProf.refreshJWT.token;
  
        tokenExp = tokenExp.setDate(
          tokenExp.getDate() + process.env.JWT_REFRESH_SECRET_EXP
        );
  
        const today = new Date();
  
        if (dBrefreshToken !== auth && tokenExp < today) {
          return res.status(403).json({ message: "Forbidden" });
        }
  
        const accessJWT = await createaccessjwt(
          decoded.email,
          userProf._id.toString()
        );
  
        return res.json({ status: "success", accessJWT });
      }
    }
  
    res.status(403).json({ message: "Forbidden" });
  });
  




  module.exports = router;
  



