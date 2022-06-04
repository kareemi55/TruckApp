import React, { useState } from "react";
import {Navbar, Button, Container, Row, Col} from 'react-bootstrap';
import {Trash } from 'react-bootstrap-icons';
import Table from 'react-bootstrap/Table'
import EditItem from "../edit/Edit";

import './list.css';
import ViewItem from "../view/View";



const List = () => {

   

    return (
      <>

      <Container fluid> <Row > <Col className="listouterbody" > <Container  >

      <div  className="listinnerbody">
        <div><h5>List Customers </h5></div>
      <div className="listempdata">
      <Table striped bordered hover>
        <thead className="text-center">
              <tr className="text-align-center">
                <th>Billty no</th>
                <th>Sender</th>
                <th>Customer</th>
                <th>Depart Stn</th>
                <th>Arrival stn</th>
                <th >Action</th>
                
                
              </tr>
        </thead>
        <tbody>
              <tr>
                <td>1111</td>
                <td>karim</td>
                <td>Kamran</td>
                <td>Rawalpindi</td>
                <td>Hunza</td>
                <td><ViewItem/><EditItem/> <Button variant=""><Trash/></Button></td>
                
                
              </tr>
    
         </tbody>
         </Table>
      </div>

      </div>
      </Container>
      </Col>
      </Row>

      </Container>

      </>
    );
  };
  
  export default List;