import React, {useState} from "react";
import {Form, Button, Container,Navbar, Row, Col} from 'react-bootstrap';
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import './new.css';
import Sidebar from "../../../components/sidebar/Sidebar";
import Topbar from "../../../components/topbar/Topbar";
import ListItems from '../list/List';

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
  <h4 >Add item</h4></div> 


{/* Row  contain Name and Father Name Colums */}
          <Row> <Col> <Form.Group  >
          <Form.Label>Billty No</Form.Label>
          <Form.Control
          required
          type="text"
          placeholder="Billty No"
      
          />
          </Form.Group>  </Col>
   
          <Col> <Form.Group  >
          <Form.Label>Item  </Form.Label>
          <Form.Control
          required
          type="text"
          placeholder="Title"
      
          />
          </Form.Group> </Col>  <Col></Col> <Col></Col><Col></Col></Row>

       {/* Row  contain Name and Father Name Colums */}
          <Row classname="mt-2"><Col> <Form.Group  >
          <Form.Label>Item Quantity</Form.Label>
          <Form.Control
          required
          type="text"
          placeholder="Quantity"
      
          />
          </Form.Group>  </Col>

          <Col> <Form.Group  >
          <Form.Label>Stn to Stn Charge</Form.Label>
          <Form.Control
          required
          type="text"
          placeholder="Amount"
      
          />
           </Form.Group> </Col>

{/* Row  contain Name and Father Name Colums */}
          <Col> <Form.Group  >
          <Form.Label>Local Transport Charge</Form.Label>
          <Form.Control
          required
          type="text"
          placeholder="Amount"
      
          />
          </Form.Group>  </Col>

          <Col> <Form.Group  >
          <Form.Label>Droper Charge </Form.Label>
          <Form.Control
          required
          type="text"
          placeholder="Amount"
      
          />
          </Form.Group> </Col>

          <Col> <Form.Group  >
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
       </Row>

       <Row>
       <ListItems/>

       </Row>
        </Col>

     </Row>   

     </>
    );
  };
  
  export default New;