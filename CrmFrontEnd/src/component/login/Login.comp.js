import React, { useEffect } from 'react'
import {useState} from 'react'
import { Container,Row,Col,Form ,Button} from 'react-bootstrap'

import {  useDispatch,useSelector } from 'react-redux'

import {userLogin} from '../../api/userApi'

import { loginPending, loginSuccess, loginFail } from './loginSlice'

import {getUserProfile} from "../../page/dashboard/userAction"


import { useNavigate } from 'react-router-dom';



export const Login = ({loadonn}) => {

  const  dispatch= useDispatch()

  const navigate = useNavigate();

  const {isauth,sLoading,error}=useSelector(state=>state.login)
 

    useEffect(() => {
      
    sessionStorage.getItem('accessJWT')&&navigate('/dashboard')
      
    }, [isauth,navigate])
    


  const [email,setEmail]=useState("jacksongeorge1998@gmail.com")
  const [password,setPassword]=useState("majicpot")
  
 


  

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






const handleOnsubmit= async(e)=>{

   e.preventDefault();

   if(!email|| !password){

  return alert("fill up all the form")
   }

   dispatch(loginPending() )

   try {

   const isAuth= await userLogin({ email, password })

   console.log(isAuth)

   if(isAuth.status=='not good'){

    console.log("working")

   dispatch(loginFail( isAuth.message))

   }
   dispatch(loginSuccess())
   
   dispatch(getUserProfile())

   navigate('/dashboard');
   
   } catch (error) {

    dispatch(loginFail(error.message))
    
   }

   
};
  return (
    
  


    <Container>

      <Row>
          <Col>
            <h1 className="text-center">Client Login</h1>
            <br/>
            <Form onSubmit={handleOnsubmit}>
               <Form.Group>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleOnchange}
                  
                  placeholder="enter email"
                  
                  
                  />


               </Form.Group>
               <br/>
               <Form.Group>
                  <Form.Label>Passwords</Form.Label>
                  <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleOnchange}
                  
                  
                  placeholder="Enter Password"
                  
                  
                  />


               </Form.Group>
                <br/>
                <Button type ="submit">Login</Button>

            </Form>

          </Col>

      </Row>
      <Row>
          <Col>
             <a href ="#"  onClick={()=> loadonn('reset')}>forget password</a>         
          </Col>
      </Row>
    </Container>
   
  );
};







