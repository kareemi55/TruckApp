import React, { useState } from "react";
import {Navbar, Button, Container, Row, Col} from 'react-bootstrap';
import EditCustomer from "./EditCustomer";

import './RegCustomer.css';
import ViewCustomer from "./ViewCustomer";



const ListCustomer = () => {

   

    return (
      <>

      <Container fluid> <Row > <Col className="liststnouterbody" > <Container  >

      <div  className="liststninnerbody">
        <div><h4>List Customers </h4></div>
      <div className="listempdata">
         <table>
              <thead>
                  <tr>
                    <th>Cust ID</th>
                    <th>Name</th>
                    <th>CNIC</th>
                    <th>Occupation</th>
                    <th>Type</th>
                    <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                
                  <tr>
                      <td>01</td>
                      <td>Karim</td>
                      <td>11111111111111 </td>
                      <td>Business</td>
                      <td>Visitor </td>
                      <td className="text-center"> 

                        <ViewCustomer/>
                        <EditCustomer/>
                        <Button>Delete</Button>
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
  
  export default ListCustomer;