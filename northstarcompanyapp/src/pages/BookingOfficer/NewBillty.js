import React from "react";
import {Form,Navbar, Button, Container, Row, Col} from 'react-bootstrap';
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import './NewBillty.css';



const NewBillty = () => {
    return (
      <>
      <Navbar className="loginscreennavbarclr"  variant="dark"> <Container fluid>
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

      </Container> </Navbar>

      {/* Main body of page */}

      <Container fluid> <Row className="billtyouterbody" > <Col >
      <Container  >

      <div  className="billtyinnerbody"> <Form > 

      <div className="empregheader"> <h4 >New Billty Booking  </h4> </div> 

      <div className="">
        <p>* Please insert correct information of Billty in given fields. </p>
      </div> 

{/* Row  contain Name of Staff who Colums */}

    <Row> <Col> </Col>
                {/* <Form.Group  >
                <Form.Label>Name</Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Name"
            
                />
                </Form.Group>   */}

          <Col> <Form.Group  >
                <Form.Label>Staff Name</Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Name of Current staff"
            
                />
      </Form.Group> </Col></Row>

{/* Row  contain sender customer cnic and Mobile No Colums */}

<Row> <Col> <Form.Group  >
                <Form.Label>Sender Customer CNIC </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Correct CNIC"
            
                />
                </Form.Group>  </Col>

          <Col> <Form.Group  >
                <Form.Label>Sender Customer Mobile No</Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Current Mobile No"
            
                />
      </Form.Group> </Col></Row>

{/* Row  contain reciver customer cnic and mobile no */}

<Row> <Col> <Form.Group  >
                <Form.Label>Sender Customer CNIC</Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Correct CNIC"
            
                />
                </Form.Group>  </Col>

          <Col> <Form.Group  >
                <Form.Label>Reciver Customer Mobile No </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Current Mobile No "
            
                />
      </Form.Group> </Col></Row>

{/* Row caintains sender station and Reciver Station    */}

      <Row> <Col> <Form.Group  >
                <Form.Label>Sender Customer Station</Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="select"
            
                />
                </Form.Group>  </Col>

          <Col> <Form.Group  >
                <Form.Label>Reciver Customer station </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="select  "
            
                />
      </Form.Group> </Col></Row>

{/* Row Caintain Current Address  */}

      <Row> <Col> <Form.Group  >
                <Form.Label>Reciver Full Address </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Shop or other place"
            
                />
             
      </Form.Group> </Col></Row>

      {/* <Row> <Col> <Form.Group  >
                <Form.Label>Perment Address </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Permenent Address"
            
                />
             
      </Form.Group> </Col></Row> */}

{/* Row contains Item Details     */}

       <Row> 

     {/*item heading and descroption  */}
       <div className="itemdetailsheader"> <h5 >Item Details  </h5> </div> 
       <div className=""><p>* Please insert correct information of booking item in given fields. </p></div> 

         <Col> <Form.Group  >
                <Form.Label>Category</Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="select"
            
                />
                </Form.Group>  </Col>

          <Col> <Form.Group  >
                <Form.Label>Description </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Item Description  "
            
                />
      </Form.Group> </Col>
      
      <Col> <Form.Group  >
                <Form.Label>Item Measurement Unit </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Confirm Password  "
            
                />
      </Form.Group> </Col></Row>

{/*Row contain Item charge or bill details  */}
      <Row> 

{/*item heading and descroption  */}
  <div className="itemdetailsheader"> <h5 >Item Billing Details  </h5> </div> 
  <div className=""><p>* Please insert correct amount and quantity in given fields. </p></div> 

    <Col> <Form.Group  >
           <Form.Label>Quantity</Form.Label>
           <Form.Control
           required
           type="number"
           placeholder="Qty No"
       
           />
           </Form.Group>  </Col>

     <Col> <Form.Group  >
           <Form.Label>stn to stn chrg </Form.Label>
           <Form.Control
           required
           type="text"
           placeholder="Per Item Amount"
       
           />
 </Form.Group> </Col>
 
 <Col> <Form.Group  >
           <Form.Label>Load/unload chrg  </Form.Label>
           <Form.Control
           required
           type="text"
           placeholder="Per Item Amount"
       
           />
 </Form.Group> </Col>
 <Col> <Form.Group  >
                <Form.Label>Service chrg </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Per Item Amount"
            
                />
      </Form.Group> </Col>
      <Col> <Form.Group  >
                <Form.Label>Local transport chrg</Form.Label>
                <Form.Control
                required
                type="real"
                placeholder="Per item amount"
            
                />
      </Form.Group> </Col></Row>

      

{/*item heading and descroption  */}
  

     <Row> <Col> <Form.Group  >
           <Form.Label>Total peritem chrg</Form.Label>
           <Form.Control
           required
           type="real"
           placeholder="Amount"
       
           />
           </Form.Group>  </Col>

     <Col> <Form.Group  >
           <Form.Label>Total Chrg </Form.Label>
           <Form.Control
           required
           type="text"
           placeholder="Amount"
       
           />
 </Form.Group> </Col>
 
 <Col> <Form.Group  >
           <Form.Label>Droper Chrg </Form.Label>
           <Form.Control
           required
           type="text"
           placeholder="Confirm Password  "
       
           />
 </Form.Group> </Col>
 <Col> <Form.Group  >
                <Form.Label>Discount </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Select percent  "
            
                />
      </Form.Group> </Col>
      <Col> <Form.Group  >
                <Form.Label>Total billty chrg</Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Confirm Password  "
            
                />
      </Form.Group> </Col></Row>

  {/*Row contains  form buttons   */}
  
        <Row className="pt-3"><Col >

           <Button type="button" variant="secondary " >
             Reset
           </Button>{' '}
          
           <Button type="button" variant="secondary" >
             Register
           </Button>
           
        </Col></Row>
        
      
      </Form> </div>
      </Container></Col></Row></Container>

      </>
    );
  };
  
  export default NewBillty;