import React, {Fragment, useState} from "react";
import {Form, Modal, Button, Container, Row, Col, Navbar} from 'react-bootstrap';
import "./EditEmployee.css";


const ViewEmployee = () =>{
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
      <Button variant="primary" onClick={handleShow}>
        view
      </Button>

      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Container fluid> <Row className="empupdateouterbody" > <Col ><Container  >

       <div  className="empupdateinnerbody"> <Form > 

      

{/* Row  contain Name and Father Name Colums */}

    <Row> <Col> <Form.Group  >
                <Form.Label>Name</Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Name"
                name="ename"
                // value={ename}
                // onChange={e => onInputChange(e)}
            
                />
                </Form.Group>  </Col>

          <Col> <Form.Group  >
                <Form.Label>Father Name</Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Father Name"
                name="fname"
                // value={fname}
                // onChange={e => onInputChange(e)}
                />
      </Form.Group> </Col></Row>

{/* Row  contain CNIC and Mobile No Colums */}

<Row> <Col> <Form.Group  >
                <Form.Label>CNIC</Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Correct CNIC"
                name="cnic"
                // value={cnic}
                // onChange={e => onInputChange(e)}
            
                />
                </Form.Group>  </Col>

          <Col> <Form.Group  >
                <Form.Label>Mobile </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Current Mobile No"
                name="mobile"
                // value={mobile}
                // onChange={e => onInputChange(e)}
            
                />
      </Form.Group> </Col></Row>

{/* Row  contain Email and Date Colums */}

<Row> <Col> <Form.Group  >
                <Form.Label>Email</Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Current Email"
                name="email"
                // value={email}
                // onChange={e => onInputChange(e)}
            
                />
                </Form.Group>  </Col>

          <Col> <Form.Group  >
                <Form.Label>Date </Form.Label>
                <Form.Control
                required
                type="date"
                placeholder="Current Date "
                name="date"
                // value={date}
                // onChange={e => onInputChange(e)}
                />
      </Form.Group> </Col></Row>

{/* Row caintains Designation and Station    */}

      <Row> <Col> <Form.Group  >
                <Form.Label>Designation </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="select"
                name= "designation"
                // value={designation}
                // onChange={e => onInputChange(e)}
            
                />
                </Form.Group>  </Col>

          <Col> <Form.Group  >
                <Form.Label>Station </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="select  "
                name= "station"
                // value={station}
                // onChange={e => onInputChange(e)}
            
                />
      </Form.Group> </Col></Row>

{/* Row Caintain Current Address  */}

      <Row> <Col> <Form.Group  >
                <Form.Label>Current Address </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Current Address"
                name= "caddress"
                // value={caddress}
                // onChange={e => onInputChange(e)}
            
                />
             
      </Form.Group> </Col></Row>

      <Row> <Col> <Form.Group  >
                <Form.Label>Perment Address </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Permenent Address"
                name= "paddress"
                // value={paddress}
                // onChange={e => onInputChange(e)}
            
                />
             
      </Form.Group> </Col></Row>

{/* Row contains Password and Conform Password    */}
{/* 
  <Row> <Col> <Form.Group  >
                <Form.Label>Password </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Password"
                name= "password"
                // value={password}
                // onChange={e => onInputChange(e)}
            
                />
                </Form.Group>  </Col>

          <Col> <Form.Group  >
                <Form.Label>Confirm Password </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Confirm Password  "
            
                />
      </Form.Group> </Col></Row> */}

  {/*Row contains  form buttons   */}
  
        {/* <Row className="pt-3"><Col >

           <Button type="button" variant="secondary " >
             Reset
           </Button>{' '}
          
           <Button type="button" variant="secondary" >
             Register
           </Button>
           
        </Col></Row>
         */}
      
      </Form> </div>
      </Container></Col></Row></Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Print
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ViewEmployee;