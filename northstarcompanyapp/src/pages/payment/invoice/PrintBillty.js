import './printbillty.css';
import {Row,Col, Container, Table} from 'react-bootstrap';
export default function PrintBillty() {


  return (
    <>
    <Container fluid>
    <Row>
    
    {/* Header of billty */}
    <div className="header-title">
    <h2 >North Star Company Private limited </h2>
    </div>
    {/* End Header of billty */}
    
    </Row>

    <Row className="billty-title">

    {/* billty-title */}
    <div >
    <h5 >Billty</h5>
    </div>
    {/* End billty-title */}
    </Row>
   
   <Row className="billty-info-row"><Col >
       <ul>
          <li> Billty Number :</li>
          <li> Staff Name :</li>
          <li> Sender className :</li>
          <li> Sender Cell No :</li>
          <li> Departure Station :</li>
          <li> Arrival Station :</li>
          
        </ul>
    
        </Col>

        <Col>
           <ul>
              <li> Customer/Billty Owner :</li>
              <li> Customer CNIC :</li>
              <li> Customer Cell No :</li>
              <li> </li>
              
              
           </ul>
        </Col>
    </Row>
    
    <Row className="billty-title">

    {/* billty-title */}
    <div >
    <h5 >Item Details</h5>
    </div>
    {/* End billty-title */}
    </Row>
    
    <Row className='itemtable'>
     
    <Table striped bordered hover>
        <thead className="text-center">
              <tr className="text-align-center">
                <th>Item</th>
                <th>Quantity</th>
                <th>Stn-Stn-Chrg</th>
                <th>Local Chrg</th>
                <th>Total</th>    
              </tr>
        </thead>
        <tbody>
              <tr>
                <td>Box</td>
                <td>25</td>
                <td>1000</td>
                <td>500</td>
                <td>1500</td>
              </tr>
    
         </tbody>
         </Table>
    </Row>
    
    <Row className="billty-title">

    {/* billty-title */}
    <div >
    <h5 >Payment</h5>
    </div>
    {/* End billty-title */}
    </Row>

    <Row className='itemtable'>
     
    <Table striped bordered hover>
        <thead className="text-center">
              <tr className="text-align-center">
                <th>Billty No</th>
                <th>Date</th>
                <th>Total </th>
                <th>Paid </th>
                <th>Due</th>
              </tr>
        </thead>
        <tbody>
              <tr>
                <td>112255</td>
                <td>01/jun/2022</td>
                <td>15000</td>
                <td>5000</td>
                <td>10000</td>
              </tr>
    
         </tbody>
         </Table>
    </Row>

    <Row className="billty-title">

    {/* billty-title */}
    <div >
    <h5 >Instruction</h5>
    </div>
    {/* End billty-title */}
    </Row>

    <Row className="billty-title">

    {/* billty-title */}
    <div >
    <p>we are not responsible for any kind of demage</p>
    <p>we are not responsible for any kind of demage</p>
    <p>we are not responsible for any kind of demage</p>
    <p>we are not responsible for any kind of demage</p>
    <p>we are not responsible for any kind of demage</p>
    </div>
    {/* End billty-title */}
    </Row>
    
    
  
    </Container>
    </>
  )
}