const bcrypt  = require('bcrypt')
const saltRounds = 10;


const hashpassword=(Plainpassword)=>{
 
    return new Promise((resolve)=>{

     resolve(bcrypt.hashSync(Plainpassword, saltRounds));


    });



}

const comparepassword =  (plainpass,passfromDB)=>{

   return new Promise((resolve,reject)=>{


    bcrypt.compare(plainpass, passfromDB, function(err, result) {
        
        if(err){
            reject(err)
        }
        resolve(result)
    });

   })


}


module.exports={

hashpassword,
comparepassword

}