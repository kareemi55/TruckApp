import React, {useState} from "react";
import {Form, Button, Container,Navbar, Row, Col} from 'react-bootstrap';
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import './Item.css';
//import ListCustomer from "./ListCustomer";



const Item = () => {


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

     <Container fluid> <Row className="itemouterbody fluid" > <Col > <Container >

         
     <div  className="iteminnerbody">


     <Form > 

     <div className="empregheader">
       <h4 >Add items to billty </h4>

     </div> 

     <div className="">
       <p>* Please insert correct information in given fields </p>
     </div> 

{/* Row  contain Name and Father Name Colums */}
               <Row> <Col> <Form.Group  >
               <Form.Label>Billty No</Form.Label>
               <Form.Control
               required
               type="text"
               placeholder="Billty No"
           
               />
               </Form.Group>  </Col></Row>
        
               <Row> <Col> <Form.Group  >
               <Form.Label>Item Name </Form.Label>
               <Form.Control
               required
               type="text"
               placeholder="Name"
           
               />
               </Form.Group> </Col></Row>

{/* Row  contain Name and Father Name Colums */}
               <Row> <Col> <Form.Group  >
               <Form.Label>Item Quantity</Form.Label>
               <Form.Control
               required
               type="text"
               placeholder="Quantity"
           
               />
               </Form.Group>  </Col></Row>

               <Row><Col> <Form.Group  >
               <Form.Label>Stn to Stn Charge</Form.Label>
               <Form.Control
               required
               type="text"
               placeholder="Amount"
           
               />
                </Form.Group> </Col></Row>

{/* Row  contain Name and Father Name Colums */}
               <Row> <Col> <Form.Group  >
               <Form.Label>Local Transport Charge</Form.Label>
               <Form.Control
               required
               type="text"
               placeholder="Amount"
           
               />
               </Form.Group>  </Col></Row>

               <Row><Col> <Form.Group  >
               <Form.Label>Droper Charge </Form.Label>
               <Form.Control
               required
               type="text"
               placeholder="Amount"
           
               />
               </Form.Group> </Col></Row>  

               <Row> <Col> <Form.Group  >
               <Form.Label>Total Charge</Form.Label>
               <Form.Control
               required
               type="text"
               placeholder="Amount"
           
               />
               </Form.Group> </Col></Row>  

    
 

 {/*Row contains  form buttons   */}
       <Row className="pt-3"><Col >

          <Button type="button" variant="secondary " >
            Reset
          </Button>{' '}
         
          <Button type="button" variant="secondary" >
            Add Item
          </Button>
          
       </Col></Row>
       
     
     </Form> 

     </div>
     </Container> </Col> </Row> </Container>

     {/* <ListCustomer/> */}

     </>
    );
  };
  
  export default Item;