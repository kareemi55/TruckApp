import React from "react";
import {Form, Button, Container, Row, Col, Navbar} from 'react-bootstrap';
import App from "../../App";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import './EmployeeRegistration.css';


const EmployeeRegistration = () => {
    return (
      <>
      <Navbar className="loginscreennavbarclr"  variant="dark"> <Container fluid>
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

      {/* Main body of page */}

      <Container fluid> <Row className="empregouterbody" > <Col >
      <Container  >

      <div  className="empreginnerbody"> <Form > 

      <div className="empregheader"> <h4 >Employee Registration </h4> </div> 

      <div className="">
        <p>* Please insert correct information of employee in given fields. </p>
      </div> 

{/* Row  contain Name and Father Name Colums */}

    <Row> <Col> <Form.Group  >
                <Form.Label>Name</Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Name"
            
                />
                </Form.Group>  </Col>

          <Col> <Form.Group  >
                <Form.Label>Father Name</Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Father Name"
            
                />
      </Form.Group> </Col></Row>

{/* Row  contain CNIC and Mobile No Colums */}

<Row> <Col> <Form.Group  >
                <Form.Label>CNIC</Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Correct CNIC"
            
                />
                </Form.Group>  </Col>

          <Col> <Form.Group  >
                <Form.Label>Mobile </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Current Mobile No"
            
                />
      </Form.Group> </Col></Row>

{/* Row  contain Email and Date Colums */}

<Row> <Col> <Form.Group  >
                <Form.Label>Email</Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Current Email"
            
                />
                </Form.Group>  </Col>

          <Col> <Form.Group  >
                <Form.Label>Date </Form.Label>
                <Form.Control
                required
                type="date"
                placeholder="Current Date "
            
                />
      </Form.Group> </Col></Row>

{/* Row caintains Designation and Station    */}

      <Row> <Col> <Form.Group  >
                <Form.Label>Designation </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="select"
            
                />
                </Form.Group>  </Col>

          <Col> <Form.Group  >
                <Form.Label>Status </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="select  "
            
                />
      </Form.Group> </Col></Row>

{/* Row Caintain Current Address  */}

      <Row> <Col> <Form.Group  >
                <Form.Label>Current Address </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Current Address"
            
                />
             
      </Form.Group> </Col></Row>

      <Row> <Col> <Form.Group  >
                <Form.Label>Perment Address </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Permenent Address"
            
                />
             
      </Form.Group> </Col></Row>

{/* Row contains Password and Conform Password    */}

  <Row> <Col> <Form.Group  >
                <Form.Label>Password </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Password"
            
                />
                </Form.Group>  </Col>

          <Col> <Form.Group  >
                <Form.Label>Confirm Password </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Confirm Password  "
            
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
        
      
      </Form> </div>
      </Container></Col></Row></Container>

      </>
    );
  };
  
  export default EmployeeRegistration;