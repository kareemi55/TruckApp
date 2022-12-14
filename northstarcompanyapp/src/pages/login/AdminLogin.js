import React, { useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Navbar, Container, Row, Badge } from 'react-bootstrap';
import {Link, } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { logDOM } from "@testing-library/react";
import { Navigate, useNavigate } from 'react-router-dom';
// import { setUserSession } from '../Utils/common';
import axios from 'axios';
// import useHistory from 'useHistory';



export default function AdminLogin() {    

return(
      <>
      
  <Navbar className="loginscreennavbarclr"  variant="dark" >
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

      <Button  variant="dark" size="sm"  className=""  > Back </Button>

    </Container>
    
  </Navbar>

  {/* starting of main body */}
  <Container className="ml-2 " >

      <div  className="loginscreenbody">

      <Form> 

      <div className="employeeloginheading">
        <h3 >Adminstrator Login </h3>
      </div> 
      <Form.Group  >
          <Form.Label>Adminstrator ID</Form.Label>
          <Form.Control
            required
            type="string"
            placeholder="Admin ID"
            name="username"
           
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
};

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}