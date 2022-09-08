import React from 'react'
import { Container,Row,Col,Button,  } from 'react-bootstrap'
import { Tablecomp } from '../../component/table/Table.comp';

import ticket from '../../assets/data/dummy-ticket.json'

import { PageBreadcrumb } from '../../component/breadcrumb/Breadcrumb.comp';
import { Link } from 'react-router-dom';
export const Dashboard = () => {
  return (
    
    <Container>
      <Row>
        <Col>
            <PageBreadcrumb page ="dashboard" />
        </Col>

        </Row>

     <Row>
         <Col className="text-center mt-5 md-2">
           <Link to= "/add-ticket">
           <Button 
           style={{fontSize: "2rem", padding:"10px 30px"}}
           
           > ADD TICKET</Button>
            </Link>
         </Col>
     </Row>

     <Row>
         <Col className="text-center mt-5 md-2">
           
           <div>total ticket</div>
           <div>pending ticket</div>


         </Col>
     </Row>
     <Row>
         <Col className="md-2">
           
           <div>tickets are:</div>
         


         </Col>
     </Row>
     <Row>
         <Col className="ticket-table">
            
                 
             <Tablecomp ticket={ticket}/>

         </Col>
     </Row>

    </Container>
    
    
    
  )
}
