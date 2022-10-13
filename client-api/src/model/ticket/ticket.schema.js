const  mongoose = require("mongoose")
const Schema=mongoose.Schema


const TicketSchema= new Schema({


  ClientID:{
    
    type:Schema.Types.ObjectId

  },
 

 subject:{
       
    type :String,
    maxlength: 50,
    required: true,
    default:''


},
openAt:{
    type:Date,
    required:true,
    default:Date.now(),


},
 status :{
       
    type :String,
    maxlength: 50,
    required: true,
    default:"pending operator responce"
},

conversation:[

   {
      sender:{
       
        type:String,
        maxlength:50,
        required:true,
        default:""

      },

      message:{
        type:String,
        maxlength:1000,
        required:true,
        default:""


      },

      msgAt:{
      
        type:Date,
        required:true,
        default:Date.now(),


      },



   }


]
 




})


module.exports={
 TicketSchema: mongoose.model('Ticket',TicketSchema)


}