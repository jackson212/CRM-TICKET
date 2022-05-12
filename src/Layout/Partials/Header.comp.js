import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import logo from "../../assets/img/logo.jpg";
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
             <Nav.Link  href ="/dashboard">dashboard</Nav.Link>
             <Nav.Link href ="/dashboard">Ticket</Nav.Link>
             
         </Nav>
         <Nav className=  "ms-auto">
             
             <Nav.Link href ="/dashboard" >Logout</Nav.Link>
         </Nav>

      </Navbar.Collapse>
     </Navbar>
  )
}

