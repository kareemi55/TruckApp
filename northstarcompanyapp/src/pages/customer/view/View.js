import {Navbar, Modal, Form, Button, Container, Row, Col} from 'react-bootstrap';
import React, {useState} from 'react';
import { Binoculars } from 'react-bootstrap-icons';
import './view.css';


const View = () =>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
    
        <>
        <Button variant="" onClick={handleShow}>
          <Binoculars/>
        </Button>{''}
  
        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>View Customer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          
          <Container fluid> <Row className="viewcustouterbody fluid" > <Col > <Container >

<div  className="viewcustinnerbody">

<Form > 


{/* Row  contain Name and Father Name Colums */}
<Row> <Col> <Form.Group  >
          <Form.Label>Customer Name</Form.Label>
          <Form.Control
          required
          type="text"
          placeholder="Name"
      
          />
          </Form.Group>  </Col>

    <Col> <Form.Group  >
          <Form.Label>CNIC</Form.Label>
          <Form.Control
          required
          type="text"
          placeholder="CNIC Number"
      
          />
</Form.Group> </Col></Row>

{/* Row  contain Name and Father Name Colums */}
<Row> <Col> <Form.Group  >
          <Form.Label>Occupation</Form.Label>
          <Form.Control
          required
          type="text"
          placeholder="Customer Occupation"
      
          />
          </Form.Group>  </Col>

    <Col> <Form.Group  >
          <Form.Label>Customer Type</Form.Label>
          <Form.Control
          required
          type="text"
          placeholder="Regular or Visitor"
      
          />
</Form.Group> </Col></Row>


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
              Print
            </Button>
          </Modal.Footer>
        </Modal>
      </>

    );

}
export default View;