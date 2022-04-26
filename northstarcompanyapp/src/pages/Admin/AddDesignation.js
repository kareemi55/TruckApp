import React, {useState} from "react";
import {Form, Button, Container,Navbar, Row, Col} from 'react-bootstrap';
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import './AddDesignation.css';



const AddDesignation = () => {


    return (
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

        <Link to ="/Sidebar">
        <Button  variant="dark" size="sm"  className=""  >Dashboard</Button>
        </Link>

        </Container>
   
        </Navbar>

     <Container fluid> <Row className="adddesigouterbody fluid" > <Col > <Container >

     <div  className="adddesiginnerbody">

     <Form > 

     <div className="empregheader">
       <h4 >Office Designation Registration</h4>
     </div> 

     <div className="">
       <p>* Please insert correct information of office designation in given fields. </p>
     </div> 

{/* Row  contain Name and Father Name Colums */}
   <Row> <Col> <Form.Group  >
               <Form.Label>Designation Title</Form.Label>
               <Form.Control
               required
               type="text"
               placeholder="Name"
           
               />
               </Form.Group>  </Col>

         <Col> <Form.Group  >
               <Form.Label>Responsibilities</Form.Label>
               <Form.Control
               required
               type="text"
               placeholder="Landline No"
           
               />
     </Form.Group> </Col></Row>

 

 {/*Row contains  form buttons   */}
       <Row className="pt-3"><Col >

          <Button type="button" variant="secondary " >
            Reset
          </Button>{' '}
         
          <Button type="button" variant="secondary" >
            Register
          </Button>
          
       </Col></Row>
       
     
     </Form> 

     </div>
     </Container> </Col> </Row> </Container>

     </>
    );
  };
  
  export default AddDesignation;