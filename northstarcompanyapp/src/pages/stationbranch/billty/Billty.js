import React, {useState} from "react";
import {Form, Button, Container,Navbar, Row, Col} from 'react-bootstrap';
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import './Billty.css';
//import ListCustomer from "./ListCustomer";



const Billty = () => {


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

     <Container fluid> <Row className="addcustouterbody fluid" > <Col > <Container >

     <div  className="addcustinnerbody">

     <Form > 

     <div className="empregheader">
       <h4 >Generate Billty for Customer </h4>
     </div> 

     <div className="">
       <p>* Please insert correct information in given fields </p>
     </div> 

{/* Row  contain Name and Father Name Colums */}
   <Row> <Col> <Form.Group  >
               <Form.Label>Date</Form.Label>
               <Form.Control
               required
               type="text"
               placeholder="Date"
           
               />
               </Form.Group>  </Col>

         <Col> <Form.Group  >
               <Form.Label>Staff Name</Form.Label>
               <Form.Control
               required
               type="text"
               placeholder="Name"
           
               />
     </Form.Group> </Col></Row>

{/* Row  contain Name and Father Name Colums */}
<Row> <Col> <Form.Group  >
               <Form.Label>Sender CNIC</Form.Label>
               <Form.Control
               required
               type="text"
               placeholder="CNIC"
           
               />
               </Form.Group>  </Col>

         <Col> <Form.Group  >
               <Form.Label>Sender Mobile</Form.Label>
               <Form.Control
               required
               type="text"
               placeholder="Active mobile no"
           
               />
     </Form.Group> </Col></Row>

{/* Row  contain Name and Father Name Colums */}
<Row> <Col> <Form.Group  >
               <Form.Label>Reciver CNIC</Form.Label>
               <Form.Control
               required
               type="text"
               placeholder="CNIC"
           
               />
               </Form.Group>  </Col>

         <Col> <Form.Group  >
               <Form.Label>Reciver Mobile</Form.Label>
               <Form.Control
               required
               type="text"
               placeholder="Active mobile no"
           
               />
     </Form.Group> </Col></Row>  

     <Row> <Col> <Form.Group  >
               <Form.Label>Departure Station</Form.Label>
               <Form.Control
               required
               type="text"
               placeholder="Station Name"
           
               />
               </Form.Group>  </Col>

         <Col> <Form.Group  >
               <Form.Label>Arrival Station</Form.Label>
               <Form.Control
               required
               type="text"
               placeholder="Station Name"
           
               />
     </Form.Group> </Col></Row>  

     <Row><Col> <Form.Group  >
               <Form.Label>Reciver Adderss </Form.Label>
               <Form.Control
               required
               type="text"
               placeholder="Reciver Full Address"
           
               />
     </Form.Group> </Col></Row>  
 

 {/*Row contains  form buttons   */}
       <Row className="pt-3"><Col >

          <Button type="button" variant="secondary " >
            Reset
          </Button>{' '}
         
          <Button type="button" variant="secondary" >
            Confirm
          </Button>
          
       </Col></Row>
       
     
     </Form> 

     </div>
     </Container> </Col> </Row> </Container>

     {/* <ListCustomer/> */}

     </>
    );
  };
  
  export default Billty;