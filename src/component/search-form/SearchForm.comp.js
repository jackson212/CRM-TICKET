import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

export const SearchForm = ({onhandlechange,str}) => {
    console.log(str)
    return (
     
    <Form>
       <Form.Group as={Row}>
           <Form.Label  column sm="2"> sisoisoisosi</Form.Label>
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
