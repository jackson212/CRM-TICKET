import React, { useEffect, useState } from 'react'

import { useDispatch } from "react-redux"

import {fetchAllTickets} from './TicketAction'

import { Container,Row,Col, Button, Table } from 'react-bootstrap'
import { PageBreadcrumb } from '../../component/breadcrumb/Breadcrumb.comp'
import { SearchForm } from '../../component/search-form/SearchForm.comp'
import { Tablecomp } from '../../component/table/Table.comp'
import ticket from "../../assets/data/dummy-ticket.json"
import { Link } from 'react-router-dom'



export const TicketListing = () => {

  const dispatch =useDispatch()

    

    // const[str , setstr]=useState("")
   

   useEffect(()=>{

    dispatch(fetchAllTickets());
       
   },[dispatch])



  return (
     
    <Container>
       <Row>
         <Col>
           <PageBreadcrumb  page="ticket-list"/>
         </Col>

       </Row>
       <Row className="mt-4">
         <Col>
         <Link to ="/add-ticket">
           <Button variant= "info" > add New ticket</Button>
           </Link>
         </Col>
         <Col className="text-right">
             <SearchForm   />
         </Col>


       </Row>
       <br/>
       <br/>
       <br/>
       
       <Row>
         <Col>
           <Tablecomp/>
         </Col>

       </Row>

    </Container>
 


  )
}
