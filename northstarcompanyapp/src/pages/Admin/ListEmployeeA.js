import React, { useState } from "react";
import {Navbar, Button, Container, Row, Col} from 'react-bootstrap';
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import './ListEmployeeA.css';


const ListEmployeeA = () => {

    //  const [registeredemp, setregisteremped] = usestate(data);

    //  Const [registeremp, setregisteremp]=ustate();

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


      <Container fluid> <Row > <Col className="listempouterbody" > <Container  >

      <div  className="listempinnerbody">
        <div><h4>List of All Employess</h4></div>
      <div className="listempdata">
         <table>
              <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Father Name</th>
                    <th>CNIC</th>
                    <th>Mobile No</th>
                    <th>Email</th>
                    <th>Designation</th>
                    <th>Station</th>
                    <th>Current Address</th>
                    <th>Permanent Address</th>
                    <th>Password</th>
                  </tr>
              </thead>
              <tbody>
                
                  <tr>
                      <td>01</td>
                      <td>zafar iqbal</td>
                      <td>Mohd iqbal </td>
                      <td>7150252021222</td>
                      <td>03125458788</td>
                      <td>zafarhunza@gmail.com</td>
                      <td>Station Incharge</td>
                      <td>Hunza</td>
                      <td>Aliabad Hunza</td>
                      <td>Karimabad Hunza</td>
                      <td>Hunza </td>

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
  
  export default ListEmployeeA;