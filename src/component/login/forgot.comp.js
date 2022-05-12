import React from 'react'
import { Container,Row,Col,Form ,Button} from 'react-bootstrap'
import PropTypes from 'prop-types';

export const Forgot = ({handleOnchange,email,handleOnsubmit, loadon}) => {
  return (
    <Container>

      <Row>
          <Col>
            <h1 className="text-center">Reset</h1>
            <br/>
            <Form onSubmit={handleOnsubmit}>
               <Form.Group>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleOnchange}
                  placeholder="enter email"
                  
                  
                  
                  />



               </Form.Group>
                <br/>
                <Button type ="submit">Reset</Button>

            </Form>

          </Col>

      </Row>
      <Row>
          <Col>
             <a href ="!#" onClick={()=>loadon("login")}> Log back</a>         
          </Col>
      </Row>
    </Container>
   
  );
};

Forgot.propTypes={

  handleOnchange: PropTypes.func.isRequired,
  handleOnsubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
 

};





