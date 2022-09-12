require('dotenv').config()

const express =require("express")
const app =express()

const bodyParser=require("body-parser")

const cors=require("cors")

const helmet=require("helmet")

const morgen =require("morgan")

const port = process.env.PORT || 3001


// app.use(helmet());

app.use(cors());

app.use(morgen("tiny"));

app.use(bodyParser.urlencoded({extended :true}));

app.use(bodyParser.json());









//load router
const  userRouter=require("./src/router/user.router")
const  ticketRouter=require("./src/router/ticket.router")

//use that router

app.use("/v1/user",userRouter);
app.use("/v1/ticket",ticketRouter);


//handle  error

const errorHandler=require("./src/util/errorHandler")

//mongodb connection
// Using Node.js `require()`
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   //  useCreateIndex: true
  }
);

if(process.env.NODE_ENV!=="production")
{

   const mDB=mongoose.connection
   mDB.on("open",()=>{

      console.log("mongodb is connected")
     
     })
     
     mDB.on("error",(error)=>{
     
      console.log(error)
     
     });
     


}






app.use((req,res,next)=>{
  
    const error= new Error("not found")

    error.status=404;

   next(error)

})

app.use((error,req,res,next)=>{

  errorHandler(error,res)  
 
})


 


app.listen(port,()=>{

   console.log("listeinnig...",port)

   

})