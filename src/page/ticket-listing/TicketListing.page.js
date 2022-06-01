import React, { useEffect, useState } from 'react'
import { Container,Row,Col, Button, Table } from 'react-bootstrap'
import { PageBreadcrumb } from '../../component/breadcrumb/Breadcrumb.comp'
import { SearchForm } from '../../component/search-form/SearchForm.comp'
import { Tablecomp } from '../../component/table/Table.comp'
import ticket from "../../assets/data/dummy-ticket.json"



export const TicketListing = () => {
    

    const[str , setstr]=useState("")
    const[disTic , setticket]=useState(ticket)

   useEffect(()=>{
       
   },[str,disTic])

 const searchTicket =strr=>{

  const displayticket=ticket.filter((row)=>{
     
    
    return row.sub.includes(strr.toLowerCase())


});
   console.log(displayticket)
  setticket(displayticket)

 }

const onhandlechange=e=>{
const {value}=e.target

 setstr(value)
 searchTicket(value)

}
  return (
     
    <Container>
       <Row>
         <Col>
           <PageBreadcrumb  page="ticket-list"/>
         </Col>

       </Row>
       <Row className="mt-4">
         <Col>
           <Button variant= "info" > add New ticket</Button>
         </Col>
         <Col className="text-right">
             <SearchForm  onhandlechange={onhandlechange} str={str}  />
         </Col>


       </Row>
       <br/>
       <br/>
       <br/>
       
       <Row>
         <Col>
           <Tablecomp ticket={disTic}/>
         </Col>

       </Row>

    </Container>
 


  )
}
