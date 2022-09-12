import React from 'react'

import {Form,Button,Col,Row} from "react-bootstrap"

export const AddTicketForm = ({handleOnchange, handleOnSubmit,sub}) => {
   console.log(sub)
   
    return (

         
    <div className="jumbotron" className="add-ticket"> 
     
     <Form autoComplete="off" onSubmit={handleOnSubmit}>
     <Form.Group as ={Row}>
                  <Form.Label column sm={3}>Subject</Form.Label>
                  <Col> 
                  <Form.Control
                  type="subject"
                  name="subject"
                  value={sub.subject}
                  onChange={handleOnchange}
                  
                  
                  
                  required
                  
                  
                  />
     

                  </Col>
                  </Form.Group>

               <br/>
               <Form.Group as ={Row}>
                  <Form.Label column sm={3}>issue date</Form.Label>
                  <Col> 
                  <Form.Control
                  type="date"
                  name="issuedate"
                  value={sub.issuedate}
                  onChange={handleOnchange}
                  
                  
                  placeholder="Enter Password"
                  required
                  
                  
                  />
     

                  </Col>
                  </Form.Group>


              
               <hr/>
               <Form.Group>
                  <Form.Label>detail</Form.Label>
                  <Form.Control
                  as ="textarea"
                  rows={4}
                  value={sub.detail}
                  type="date"
                  name="detail"
                //   value={password}
                  onChange={handleOnchange}
                  
                  
                  placeholder="Enter Password"
                  required  />
                </Form.Group>
                <hr/>
                <Button type="submit" variant="info" >
               Open Ticket  </Button>

            </Form>

    </div>
    
  )


}
