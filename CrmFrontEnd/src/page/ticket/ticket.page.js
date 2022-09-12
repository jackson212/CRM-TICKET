import React, { useEffect, useState } from 'react'
import { Container, Row ,Col, Button } from 'react-bootstrap'
import { PageBreadcrumb } from '../../component/breadcrumb/Breadcrumb.comp'
import tickets from    '../../assets/data/dummy-ticket.json'
import { MessageHistory } from '../../component/MessageHistory/Message.comp'
import { TicketUpdate } from '../../component/ticketUpdate/TicketUpdate.comp'
import { useParams } from 'react-router-dom'

// const ticket = tickets[0]
export const Ticket = () => {

    const {td}=useParams();
  
    
         
     const [message,setmessage]= useState('')
      
     const [ticket,setticket]=useState('')

     

     useEffect( ()=>{
         for(let i=0;i<tickets.length;i++)
         {

            if(tickets[i].id==td){

              setticket(tickets[i])
              continue;

            }

         }

     } ,[message,td]
     )
 
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
           {td}
          <div className="subject">{ticket.subject } </div>
          <div className="subject">{ticket.addededat}</div>
          <div className="subject"> {ticket.status } </div>
         </Col>

         <Col className="text-right">
              <Button varient="outline-black"> Close Ticket</Button>
          
         </Col>
     </Row>

      <Row className="mt-4"> 
      <Col>
      {ticket.history&& <MessageHistory msg={ticket.history}/>}
       
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
