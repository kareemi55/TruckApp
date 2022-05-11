
import {Navbar, Modal, Form, Button, Container, Row, Col} from 'react-bootstrap';
import React, {useState} from 'react';
import './EditStation.css';

const EditStation = () =>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
    
        <>
        <Button variant="primary" onClick={handleShow}>
          Update
        </Button>
  
        <Modal size="xl" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Station</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Container fluid> <Row className="editstationouterbody fluid" > <Col > <Container >

<div className="editstationinnerbody"> <Form > 


{/* Row  conttain station name and contact Colums */}

<Row> <Col> <Form.Group  >
          <Form.Label>Station</Form.Label>
          <Form.Control
          required
          type="text"
          placeholder="Name"
      
          />
          </Form.Group>  </Col>

    <Col> <Form.Group  >
          <Form.Label>Contact No</Form.Label>
          <Form.Control
          required
          type="text"
          placeholder="Landline No"
      
          />
</Form.Group> </Col></Row>

{/* Row  contain Address  Colums */}

<Row> <Col> <Form.Group  >
          <Form.Label>Address</Form.Label>
          <Form.Control
          required
          type="text"
          placeholder="Station Address"
      
          />
          </Form.Group>  </Col></Row>


{/*Row contains  form buttons   */}

  {/* <Row className="pt-3"><Col >

     <Button type="button" variant="secondary " >
       Reset
     </Button>{' '}
    
     <Button type="button" variant="secondary" >
       Register
     </Button>
     
  </Col></Row> */}
  

</Form> 

</div>
</Container> </Col> </Row> </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Update
            </Button>
          </Modal.Footer>
        </Modal>
      </>

    );

}
export default EditStation;