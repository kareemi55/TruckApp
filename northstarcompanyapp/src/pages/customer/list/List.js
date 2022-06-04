import React, { useState } from "react";
import {Navbar, Button, Container, Row, Col} from 'react-bootstrap';
import {Trash } from 'react-bootstrap-icons';
import Table from 'react-bootstrap/Table'
import EditCustomer from "../edit/Edit";

import './list.css';
import ViewCustomer from "../view/View";



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
                <th>Id</th>
                <th>Name</th>
                <th>CNIC</th>
                <th>Business/Company</th>
                <th>Type</th>
                <th >Action</th>
                
                
              </tr>
        </thead>
        <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>71502-5022511-1</td>
                <td>@mdo</td>
                <td>regular</td>
                <td><ViewCustomer/><EditCustomer/> <Button variant=""><Trash/></Button></td>
                
                
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