import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

import { useDispatch } from 'react-redux'
import {filterSearchTicket} from'../../page/ticket-listing/TicketAction'

export const SearchForm = () => {


const dispatch =useDispatch()

    
   const onhandlechange= e =>{

   const {value}= e.target

   


   dispatch(filterSearchTicket(value))

   }
    return (
     
    <Form>
       <Form.Group as={Row}>
           <Form.Label  column sm="2"> search form</Form.Label>
        <Col sm="10">
        <Form.Control 
        name="searchstr" 
        onChange={onhandlechange}
        placeholder="search here"/>
         
        </Col>

       </Form.Group>


    </Form>


  )
}
