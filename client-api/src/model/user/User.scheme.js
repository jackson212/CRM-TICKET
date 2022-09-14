const  mongoose = require("mongoose")
const Schema=mongoose.Schema


const UserSchema= new Schema({

name:{
       
    type :String,
    maxlength: 50,
    required: true,
},

company :{
       
    type :String,
    maxlength: 50,
    required: true,
},

address:{
       
    type :String,
    maxlength: 50,
    required: true,
},

phone:{
       
    type :Number,
    maxlength: 50,
    
}
,
email:{
       
    type :String,
    maxlength: 50,
    required: true,
},

password:{
       
    type :String,
    minlength:8,
    maxlength: 200,
    required: true,
},
refreshJWT:{

    token:{
        type:String,
        maxlength:500,
        default:""


    },
    addedAt:{
        type:String,
        required:true,
        default:Date.now()


    },
}

})


module.exports={
 UserSchema: mongoose.model('User',UserSchema)


}