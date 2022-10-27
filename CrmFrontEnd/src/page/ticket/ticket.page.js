import React, { useEffect, useState } from 'react'
import { Container, Row ,Col, Button,Spinner,Alert } from 'react-bootstrap'
import { PageBreadcrumb } from '../../component/breadcrumb/Breadcrumb.comp'
import tickets from    '../../assets/data/dummy-ticket.json'
import { MessageHistory } from '../../component/MessageHistory/Message.comp'
import { UpdateTicket  } from '../../component/ticketUpdate/TicketUpdate.comp'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {fetchsingleTickets,closeTicket} from '../ticket-listing/TicketAction'

// const ticket = tickets[0]
export const Ticket = () => {


   const dispatch=useDispatch()
    const {td}=useParams();
  
    
    
         
     
      
     const [ticket,setticket]=useState('')

     const{isLoading,error,selectedTicket,replyMsg}=useSelector(state=>state.tickets)

     

     useEffect( ()=>{
        dispatch(fetchsingleTickets(td))

     } ,[td,dispatch,replyMsg,])
 
   
  return (
    <div>

    <Container>
     <Row>
         <Col>
         <PageBreadcrumb page="ticket"/>
         </Col>
     </Row>
     <Row>
         <Col>
           {isLoading&& <Spinner  animation='border'/>}
           {error&&<Alert variant='danger'>{error}</Alert>}
         </Col>
     </Row>
     <Row>
         <Col className="text-weight-bolder   text-secondary">
           {td}
          <div className="subject"> subject: {selectedTicket.subject } </div>
          <div className="subject"> AddededAt: {selectedTicket.openAt}</div>
          <div className="subject">  Status:  {selectedTicket.status } </div>
         </Col>

         <Col className="text-right">
              <Button varient="outline-black" onClick={()=>dispatch(closeTicket(td))} disabled={selectedTicket.status === "Closed"} > Close Ticket</Button>
          
         </Col>
     </Row>

      <Row className="mt-4"> 
      <Col>
      {selectedTicket.conversation&& <MessageHistory msg={selectedTicket.conversation}/>}

      
        
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
        <UpdateTicket  _id={td} />
      </Col>
        
        
        </Row> 


      

    </Container>

    </div>
  )
}
