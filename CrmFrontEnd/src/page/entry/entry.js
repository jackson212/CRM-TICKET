import React,{useState} from 'react'
import "./entry.style.css"
import {Login} from "../../component/login/Login.comp"
import { Forgot } from '../../component/password-reset/forgot.comp';
 
export const   Entry = () => {
  const [pageload,setload]=useState("login")
  


const handlePageload=(load)=>{
      
  setload(load);
      

}


const handleOnsubmitUpdate=(e)=>{

  e.preventDefault();

 
};



  return (
    <div className="entry-page bg-info">  
  
  <div className="jumbotron">

  { pageload=="login"&&(
    <Login 
      loadonn={handlePageload}/>
     
  )}
        { pageload=="reset"&&(
    <Forgot 
    
    // handleOnchange={handleOnchange}
    //   email={email} 
      handleOnsubmit={handleOnsubmitUpdate}
      loadonn={handlePageload}/>
      
  )}

</div>
    </div>
  
    )
};

