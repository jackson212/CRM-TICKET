import React from 'react'
import { Container,Row,Col,Form ,Button} from 'react-bootstrap'
import PropTypes from 'prop-types';

export const Login = ({handleOnchange,password,handleOnsubmit,}) => {
  return (
    <Container>

      <Row>
          <Col>
            <h1 className="text-center">Client Login</h1>
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
               <Form.Group>
                  <Form.Label>Passwords</Form.Label>
                  <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleOnchange}
                  
                  
                  placeholder="Enter Password"
                  
                  
                  />


               </Form.Group>
                <br/>
                <Button type ="submit">Login</Button>

            </Form>

          </Col>

      </Row>
      <Row>
          <Col>
             <a href ="!#"  onClick={()=> loadon('reset')}>forget password</a>         
          </Col>
      </Row>
    </Container>
   
  );
};

Login.propTypes={

  handleOnchange: PropTypes.func.isRequired,
  handleOnsubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  loadon:PropTypes.func.isRequired,
  
  


};





