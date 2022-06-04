import React, {useState} from "react";
import {Form, Button, Container,Navbar, Row, Col} from 'react-bootstrap';
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import './new.css';
import Sidebar from "../../../components/sidebar/Sidebar";
import Topbar from "../../../components/topbar/Topbar";
// import ListItems from '../list/List';

import { List } from "react-bootstrap-icons";



const New = () => {


    return (
     <>
     {/* Sidebar and Topbar */}
     <Row > <Col sm={2}className="first"><Row>
     
     <Sidebar/>
        
     </Row></Col>

     <Col sm={10}className="second"><Row className="topbar">
        
        <Topbar/>
        </Row>  
     {/* Sidebar Topbar */}

      <Row>
      <Container fluid> <Row className="addcustouterbody fluid" > <Col > <Container >
          <div  className="addcustinnerbody">
             <div className="empregheader">
             <h5 >Billty Detail</h5></div> 
      
            {/* Row  contain Billty no */}
            <Row> <Col> <Form.Group  >
            <Form.Control
            required
            type="text"
            placeholder="Enter Billty No"
          
            />
            </Form.Group  ></Col><Col>
            
            <Button type="button" variant="secondary" > Search </Button>
            
            </Col></Row>



          </div>
          
          </Container> </Col> </Row> </Container> 
          </Row></Col>

          </Row>   

     </>
    );
  };
  
  export default New;