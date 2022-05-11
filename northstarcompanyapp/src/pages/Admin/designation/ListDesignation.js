import React, { useState } from "react";
import {Navbar, Button, Container, Row, Col} from 'react-bootstrap';
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import './ListStation.css';


const ListDesignation= () => {

   

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

      </Container> </Navbar>


      <Container fluid> <Row > <Col className="liststnouterbody" > <Container  >

      <div  className="liststninnerbody">
        <div><h4>List of all Designation</h4></div>
      <div className="listempdata">
         <table>
              <thead>
                  <tr>
                    <th>Desig_Id</th>
                    <th>Designation Title</th>
                    <th>Responsibilities</th>             
                  </tr>
              </thead>
              <tbody>
                
                  <tr>
                      <td>01</td>
                      <td>Station Incharge</td>
                      <td>Check Station Progress </td>
                      
                  </tr>

                

              </tbody>
          </table>   
      </div>

      </div>
      </Container>
      </Col>
      </Row>

      </Container>

      </>
    );
  };
  
 export default ListDesignation;