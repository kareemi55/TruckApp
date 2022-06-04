import React, { useState, useEffect } from "react";
import MockData from "./MOCK_DATA.json";
import {Navbar, Button, Container, Row, Col} from 'react-bootstrap';
import {Trash } from 'react-bootstrap-icons';
// import BootstraoTable from "react-bootstrap-table-next";
// import paginationFactory  from "react-bootstrap-table2-paginator";
// import filterFactory, {textFilter} from "react-bootstrap-table2-filter";
// import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import EditBillty from "../edit/Edit";
import axios from "axios";

import './list.css';
import ViewBillty from "../view/View";



const List = () => {
     
      
const [searchTerm, setsearchTerm] = useState("");


  //  const [data, setData]= useState([]);
  //  useEffect(()=>{
  //   getData()

  //  },[])
  //  const getData=()=>{
  //    axios("https://jsonplaceholder.typicode.com/comments").then((res) =>
  //    {setData(res.data)}
  //    );
  //  };
  // const emailFormater = (data, row) => {
  //    return <span onClick ={() => alert("you clicked Here")}>Email = {data}</span>;
  // };

  //  const { SearchBar } = Search;
  //  const columns=[ {
  //    dataField: "email",
  //    text: "Email",
  //    sort: true, 
  //    formatter: emailFormater,
  //  },
  //  {
  //   dataField: "postId",
  //   text: "Product ID",   
  //  },
  //  {
  //   dataField: "name",
  //   text: "Name",
  //   filter: textFilter()
  //  },
  //  {
  //  dataField: "",
  //   text: "Action",   
  //  },
 
  // ]
    return (
      <>

      <Container fluid> <Row > <Col className="listouterbody" > <Container  >

      <div  className="listinnerbody">
        <div><h5>List Customers </h5></div>
        <div className="mb-2  ">< input
          type= "text"
          placeholder="Search"
          className="form-control"
          style={{marginTop: 10, marginBotton: 10, with: "40%"}}
          onChange = {(e)=>{
            setsearchTerm(e.target.value);
          }}
          /></div>
        <table >
        <thead className="text-center">
              <tr className="text-align-center">
                <th>First Name </th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th >Action</th>   
              </tr>
        </thead>
        <tbody>
              {/* <tr>
                <td>1111</td>
                <td>karim</td>
                <td>Kamran</td>
                <td>Rawalpindi</td>
                <td><ViewBillty/><EditBillty/> <Button variant=""><Trash/></Button></td>
               </tr> */}
               
                {MockData.filter((val)=> {
                  if (searchTerm === ""){
                    return val;

                  } else if(
                       val.first_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       val.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       val.email.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }

                }).map((m) => (
                <tr key= {m.id}>
                <td>{m.first_name}</td>
                <td>{m.last_name}</td>
                <td>{m.email}</td>
                <td>{m.gender}</td>
                <td><ViewBillty/><EditBillty/> <Button variant=""><Trash/></Button></td>
                </tr>
                
                ))}    
          
         </tbody>
         </table>

      {/* <div className="listempdata">
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
                <td><ViewBillty/><EditBillty/> <Button variant=""><Trash/></Button></td>
                
                
              </tr>
    
         </tbody>
         </Table>
      </div> */}
             
          

           {/* <BootstraoTable 
           keyField="id" 
           data={data} 
           columns = {columns} 
           striped 
           hover
           condensed
           pagination={paginationFactory()}

           filter = {filterFactory()}
           /> */}

      </div>
      </Container>
      </Col>
      </Row>

      </Container>

      </>
    );
  };
  
  export default List;