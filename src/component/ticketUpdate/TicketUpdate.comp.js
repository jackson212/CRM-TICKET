import React from 'react'
import { Form,Button } from 'react-bootstrap'

export const TicketUpdate = ({msg,handlOnchange,handlOnsubmit}) => {
  return (
    
     <Form onSubmit={handlOnsubmit}>
          
         <Form.Text>please do it</Form.Text>
         <Form.Control
        
         as="textarea"
         name=""
         value={msg}
         onChange={handlOnchange}
         row="5"
         name="detail"
         />

         <div className="text-right mt-3 mb-3">
         <Button varient="info" type="submit">  submit</Button>
        </div>

     </Form>


  )
}
