import React, { useState } from "react";
import {Navbar, Button, Container, Row, Col} from 'react-bootstrap';
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import './ListEmployee.css';
import EditEmployee from "./EditEmployee";
import ViewEmployee from "./ViewEmployee";


const ListEmployee = () => {

    //  const [registeredemp, setregisteremped] = usestate(data);

    //  Const [registeremp, setregisteremp]=ustate();

    return (
      <>
      
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
                    
                    <th>Action</th>
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
                      
                      <td>
                         <ViewEmployee/>
                         
                         <EditEmployee/> 
                         
                         <Button>
                         Delete 
                         </Button>
                         </td>

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
  
  export default ListEmployee;