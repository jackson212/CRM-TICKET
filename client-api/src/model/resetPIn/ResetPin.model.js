const{randomPinNumber}=require("../../util/randomGenerator")

const {ResetPinSchema}=require("../resetPIn/ResetPin.Schema")

const setPasswordResetPin= async (email)=>{

    const pinlength=6
    const randPin= await  randomPinNumber(pinlength)

     const restObj={
       
        email,
        pin: randPin

     }

    return new Promise ((resolve,reject)=>{
      
        ResetPinSchema(restObj)
        .save()
        .then((data)=>resolve(data))
        .catch((error)=>reject(error))
    
    
    });
    
    };



    
module.exports={
    setPasswordResetPin

}



