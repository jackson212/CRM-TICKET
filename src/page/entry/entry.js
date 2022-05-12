import React,{useState} from 'react'
import "./entry.style.css"
import {Login} from "../../component/login/Login.comp"
import { Forgot } from '../../component/login/forgot.comp';
 
export const   Entry = () => {
  
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  
  const [pageload,setload]=useState("login")


  const handlePageload=(load)=>{
      
    setload(load);
        

  }


  const handleOnchange=e=>{

     const {name,value}=e.target;

      switch(name){

        case "email":
          setEmail(value);
          break;
        case "password":
          setPassword(value);
          break;


      }

}






const handleOnsubmit=(e)=>{

   e.preventDefault();

   if(!email|| !password){

  return alert("fill up all the form")

   }else{
   console.log(email,password)
   }
};

const handleOnsubmitUpdate=(e)=>{

  e.preventDefault();

  if(!email){

 return alert("fill up all the form")

  }else{
  console.log(email)
  }
};



  return (
    <div className="entry-page bg-info">  
  
  <div className="jumbotron">

  { pageload=="login"&&(
    <Login handleOnchange={handleOnchange}
      email={email}
     
      password={password}
      handleOnsubmit={handleOnsubmit}
      loadon={handlePageload}/>
     
  )}
        { pageload=="reset"&&(
    <Forgot handleOnchange={handleOnchange}
      email={email} 
      handleOnsubmit={handleOnsubmitUpdate}
      loadon={handlePageload}/>
      
  )}

</div>
    </div>
  
    )
};

