import React, { useState } from "react";
import {Navbar, Button, Container, Row, Col} from 'react-bootstrap';

import './ListStation.css';
import EditStation from "./EditStation";
import ViewStation from "./ViewStation";


const ListStation = () => {

   

    return (
      <>

      <Container fluid> <Row > <Col className="liststnouterbody" > <Container  >

      <div  className="liststninnerbody">
        <div><h4>List of all Stations</h4></div>
      <div className="listempdata">
         <table>
              <thead>
                  <tr>
                    <th>Stn ID</th>
                    <th>Station Name</th>
                    <th>Contact No</th>
                    <th>Address</th>
                    <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                
                  <tr>
                      <td>01</td>
                      <td>Hunza</td>
                      <td>05802585858 </td>
                      <td>Near police station, Aliabad Hunza </td>
                      <td> 
                        <ViewStation/>
                        <EditStation/>
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
  
  export default ListStation;