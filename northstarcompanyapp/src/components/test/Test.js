import React from 'react';
import {Button,Nav, Container,Navbar, ListGroup,Col,Row, ButtonGroup} from 'react-bootstrap';
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import './test.css';
import Topbar from '../topbar/Topbar';
import Sidebar from '../sidebar/Sidebar';

const Test = () => {
  
  
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

        </Col>

     </Row>
    </> 
  );
};

export default Test;