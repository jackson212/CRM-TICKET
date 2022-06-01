import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import logo from "../../assets/img/logo.jpg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
     <Navbar
      collapseOnSelect
      bg=" navbar-dark bg-primary"
      varient="dark"
      expand="md"
     
     >
       <Navbar.Brand>
        <img  src={logo} alt="logo" width="50px"/>

       </Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
     
      <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="ms-auto">
             <Link  to ="/dashboard">dashboard</Link>
             <Link to ="/dashboard">Ticket</Link>
             
         </Nav>
         <Nav className=  "ms-auto">
             
             <Link to ="/dashboard" >Logout</Link>
         </Nav>

      </Navbar.Collapse>
     </Navbar>
  )
}

