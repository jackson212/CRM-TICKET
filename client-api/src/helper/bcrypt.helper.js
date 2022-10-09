const bcrypt  = require('bcrypt')
const salt = 10;


const hashpassword = (plainPassword) => {
    return new Promise((resolve) => {
      resolve(bcrypt.hashSync(plainPassword, salt));
    });
  };

  



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