import React, {useState} from "react";
import {Form, Button,Navbar, Container, Row, Col} from 'react-bootstrap';
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import './AddStation.css';


const AddStation = () => {
 
return (


<>
{/* Section for Navbar starts from here */}
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

         </Container> </Navbar>

{/*  Section for main page starts here */}

      <Container fluid> <Row className="addstnouterbody fluid" > <Col > <Container >

      <div className="addstninnerbody"> <Form > 

      <div className="empregheader"> <h4 >Station Registration</h4> </div> 

      <div >
        <p>* Please insert correct information of Booking and Delivery station in given fields. </p>
      </div> 

{/* Row  contain Name and Father Name Colums */}

    <Row> <Col> <Form.Group  >
                <Form.Label>Station</Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Name"
            
                />
                </Form.Group>  </Col>

          <Col> <Form.Group  >
                <Form.Label>Contact No</Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Landline No"
            
                />
      </Form.Group> </Col></Row>

{/* Row  contain Address  Colums */}

<Row> <Col> <Form.Group  >
                <Form.Label>Address</Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Station Address"
            
                />
                </Form.Group>  </Col></Row>
  

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
}
  export default AddStation;