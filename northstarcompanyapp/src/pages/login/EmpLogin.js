import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Navbar, Container, Row, Badge } from 'react-bootstrap';
import {Link, } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";






export default function EmpLogin() {

      
return(
      <>
      
  <Navbar className="loginscreennavbarclr"  variant="dark">
    <Container fluid>
      <Navbar.Brand href="#home">
        <img
          alt="logo"
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      North Star Company Pvt ltd
      </Navbar.Brand>
<Link to ="/AdminLogin">
      <Button  variant="dark" size="sm"  className=""  >Admin login</Button>
      </Link>
    </Container>
    
  </Navbar>

  {/* starting of main body */}
  <Container className="ml-2 " >

      <div  className="loginscreenbody">
      
      <Form> 

      <div className="employeeloginheading">
        <h3 >Employee Login </h3>
      </div> 
      <Form.Group  >
          <Form.Label>Employee CNIC</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="CNIC"
            
          />
      </Form.Group>

      <Form.Group  >
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            
          />
      </Form.Group>

      
      <Container fluid> 
        
        <Row className="emploginbtn ">
          {/* <Col xs={10} md={6} ></Col> */}
          
           <Button variant="secondary" >
             Login
           </Button>
          
           
           
        </Row>
        
      </Container>  
             
          
          </Form> 
          <div className="poweredby"><h6>Powered by <Badge bg="secondary">Cloudlem</Badge> </h6> </div>
      </div>
      </Container>
      
      </>
    )
        
}
