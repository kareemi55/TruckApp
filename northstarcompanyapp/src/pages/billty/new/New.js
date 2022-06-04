import React, {useState} from "react";
import {Form, Button, Container,Navbar, Row, Col} from 'react-bootstrap';
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import './new.css';
import Sidebar from "../../../components/sidebar/Sidebar";
import Topbar from "../../../components/topbar/Topbar";
import ListBillty from '../list/List';

import { List } from "react-bootstrap-icons";



const New = () => {


    return (
     <>
     {/* Sidebar and Topbar */}
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
     {/* Sidebar Topbar */}
        <Row>
        <Container fluid> <Row className="addcustouterbody fluid" > <Col > <Container >

<div  className="addcustinnerbody">

<Form > 

<div className="empregheader">
  <h5 >New Billty  </h5>
</div> 



{/* Row  contain Name and Father Name Colums */}
<Row> <Col> <Form.Group  >
          <Form.Label>Sender</Form.Label>
          <Form.Control
          required
          type="text"
          placeholder="Name"
      
          />
          </Form.Group>  </Col>

    <Col> <Form.Group  >
          <Form.Label>Mobile</Form.Label>
          <Form.Control
          required
          type="text"
          placeholder="Mobile No"
      
          />
</Form.Group> </Col>


<Col> <Form.Group  >
          <Form.Label>Staff Name</Form.Label>
          <Form.Control
          required
          type="text"
          placeholder="Booking Officer"
      
          />
          </Form.Group>  </Col></Row>
{/* Row  contain Name and Father Name Colums */}

          <Row> <Col> <Form.Group  >
          <Form.Label>Customer</Form.Label>
          <Form.Control
          required
          type="text"
          placeholder="Customer Name"
      
          />
</Form.Group> </Col>


           <Col> <Form.Group  >
          <Form.Label>CNIC</Form.Label>
          <Form.Control
          required
          type="text"
          placeholder="CNIC No"
      
          />
          </Form.Group>  </Col>

          <Col> <Form.Group  >
          <Form.Label>Mobile no</Form.Label>
          <Form.Control
          required
          type="text"
          placeholder="Active mobile no"
      
          />
          </Form.Group> </Col></Row>  
   {/* Row  contain Name and Father Name Colums */}
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
          </Form.Group> </Col> 

          <Col> <Form.Group  >
          <Form.Label>Ondamand Droping </Form.Label>
          <Form.Control
          required
          type="text"
          placeholder="Address"
      
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

     <Link to='/Item'>
     <Button className="float-end"  type="button" variant="secondary " >
       Add Item
     </Button>
     </Link>
     
      </Col></Row>
  

      </Form> 

      </div>
       </Container> </Col> </Row> </Container> 
       </Row>

       <Row>
       <ListBillty/>

       </Row>
        </Col>

     </Row>   

     </>
    );
  };
  
  export default New;