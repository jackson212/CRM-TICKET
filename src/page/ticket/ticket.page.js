import React, { useEffect, useState } from 'react'
import { Container, Row ,Col, Button } from 'react-bootstrap'
import { PageBreadcrumb } from '../../component/breadcrumb/Breadcrumb.comp'
import tickets from    '../../assets/data/dummy-ticket.json'
import { Message } from '../../component/MessageHistory/Message.comp'
import { TicketUpdate } from '../../component/ticketUpdate/TicketUpdate.comp'
const ticket = tickets[0]
export const Ticket = () => {

    
   
     const [message,setmessage]= useState('')

     useEffect( ()=>{} ,[message])
 
    const handlOnchange =e=>{

      setmessage(e.target.value)
      console.log(message)
      

    }
    const handlOnsubmit =(e)=>{
      console.log(message)
     
    
     
    }
  return (
    <div>

    <Container>
     <Row>
         <Col>
         <PageBreadcrumb page="ticket"/>
         </Col>
     </Row>
     <Row>
         <Col className="text-weight-bolder   text-secondary">
          <div className="subject">{ticket.sub } </div>
          <div className="subject">{ticket.addededat}</div>
          <div className="subject"> {ticket.status } </div>
         </Col>

         <Col className="text-right">
              <Button varient="outline-black"> Close Ticket</Button>
          
         </Col>
     </Row>

      <Row className="mt-4"> 
      <Col>
        <Message msg={ticket.history}/>
      </Col>
        
        </Row> 
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Row className="mt-7"> 
      <Col>
        <TicketUpdate msg={message}  handlOnchange={handlOnchange} handlOnsubmit={handlOnsubmit} />
      </Col>
        
        
        </Row> 


      

    </Container>

    </div>
  )
}
