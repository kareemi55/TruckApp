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
          <Form.Label>Billty No</Form.Label>
          <Form.Control
          required
          type="text"
          placeholder="Billty No"
      
          />
          </Form.Group>  </Col>
   
          <Col> <Form.Group  >
          <Form.Label>Item Name </Form.Label>
          <Form.Control
          required
          type="text"
          placeholder="Name"
      
          />
          </Form.Group> </Col>
{/* Row  contain Name and Father Name Colums */}
          <Col> <Form.Group  >
          <Form.Label>Item Quantity</Form.Label>
          <Form.Control
          required
          type="text"
          placeholder="Quantity"
      
          />
          </Form.Group>  </Col></Row>

          <Row><Col> <Form.Group  >
          <Form.Label>Stn to Stn Charge</Form.Label>
          <Form.Control
          required
          type="text"
          placeholder="Amount"
      
          />
           </Form.Group> </Col>

{/* Row  contain Name and Father Name Colums */}
          <Col> <Form.Group  >
          <Form.Label>Local Transport Charge</Form.Label>
          <Form.Control
          required
          type="text"
          placeholder="Amount"
      
          />
          </Form.Group>  </Col>

          <Col> <Form.Group  >
          <Form.Label>Droper Charge </Form.Label>
          <Form.Control
          required
          type="text"
          placeholder="Amount"
      
          />
          </Form.Group> </Col>

          <Col> <Form.Group  >
          <Form.Label>Total Charge</Form.Label>
          <Form.Control
          required
          type="text"
          placeholder="Amount"
      
          />
          </Form.Group> </Col></Row>  
          

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