import React, { useEffect, useState } from 'react'

import { Container,Row,Col } from 'react-bootstrap'
import { AddTicketForm } from '../../component/add-ticket-form/AddTicketForm.comp'
import { PageBreadcrumb } from '../../component/breadcrumb/Breadcrumb.comp'



export const AddTicket= () => {

    const intitial ={
      
        subject:"",
        issuedate:"",
        detail:""

    }
   
    
    const [ sub ,CreateSubject]= useState(intitial)
    useEffect(()=>{},[sub]);
  
  
    const handleOnchange=(e)=>{

      const {name,value}=e.target
       
      CreateSubject({
        ...sub,
        [name]:value

      })


    }
    const handleOnSubmit = async (e) => {
      e.preventDefault();
  
     console.log("aj" , sub)
     
    };
    return (
   
    <Container>
          <Row>
              <Col>
                  <PageBreadcrumb  page ="NewTicket" />
              </Col>
          </Row>
          <Row>
              <Col>
                  <AddTicketForm 
                  handleOnchange={handleOnchange} 
                  handleOnSubmit={handleOnSubmit}
                  sub={sub}/>
              </Col>
          </Row>

    </Container>

  )
}
