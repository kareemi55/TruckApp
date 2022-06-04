import React, {useState} from "react";
import {Form, Button, Container,Navbar, Row, Col} from 'react-bootstrap';
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import Sidebar from "../../../components/sidebar/Sidebar";
import Topbar from "../../../components/topbar/Topbar";
import './new.css';
import ListCustomer from "../list/List";



const New = () => {


    return (
    <>
        <Row >
        <Col sm={2}className="first">
        <Row>
        <Sidebar/>
        
        </Row>

        </Col>

        <Col sm={10}className="second">

        <Row className="topbar">
            <Topbar/>
        </Row>  

         {/*Main body   */}
        <Row>
        <Container fluid> <Row className="addcustouterbody fluid" > <Col > <Container >

<div  className="addcustinnerbody">

<Form > 

<div className="empregheader">
  <h4 >New Customer </h4>
</div> 

{/* Row  contain Name and Father Name Colums */}
<Row>
<Col> <Form.Group  >
          <Form.Label>Customer Name</Form.Label>
          <Form.Control
          required
          type="text"
          placeholder="Name"
      
          />
          </Form.Group>  </Col>

    <Col> <Form.Group  >
          <Form.Label>CNIC</Form.Label>
          <Form.Control
          required
          type="text"
          placeholder="CNIC Number"
      
          />
</Form.Group> </Col>

{/* Row  contain Name and Father Name Colums */}
 <Col> <Form.Group  >
          <Form.Label>Business/Company</Form.Label>
          <Form.Control
          required
          type="text"
          placeholder="Title"
      
          />
          </Form.Group>  </Col>

    <Col> <Form.Group  >
          <Form.Label>Type</Form.Label>
          <Form.Control
          required
          type="text"
          placeholder="Regular or Visitor"
      
          />
</Form.Group> </Col></Row>


{/*Row contains  form buttons   */}
  <Row className="pt-3"><Col >

     <Button type="button" variant="secondary " >
       Reset
     </Button>{' '}
    
     <Button type="button" variant="secondary" >
       Confrim
     </Button>{' '}
     
     <Link to='/billty'>
     <Button className="float-end"  type="button" variant="secondary " >
       Generate Billty
     </Button>
     </Link>

  </Col></Row>
  

</Form> 

</div>
</Container> </Col> </Row> </Container>

<ListCustomer/>
        </Row>
        </Col>

     </Row>

    </>
    );
  };
  
  export default New;