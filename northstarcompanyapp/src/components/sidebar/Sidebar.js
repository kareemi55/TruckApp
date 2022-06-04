import React from 'react';
import {Button,Nav,Row, Container,Navbar, ListGroup,Col,ButtonGroup} from 'react-bootstrap';
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import './sidebar.css';
import { ArrowRight, Speedometer2, PeopleFill,FileCheck, CardList, CreditCard } from 'react-bootstrap-icons';



const Sidebar = () => {
  
  
  return (
    <>
    <Row className="">

    </Row>
    <Row >

       {/* <div className='text-center'>
                <img
         alt="logo"
         src={logo}
         width="50"
         height="50"
         className="d-inline-block align-top"
       />
       </div> */}

       <div className="profile">
                {/* <img src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg" alt="profile_picture"> */}
                <img
         alt="logo"
         src={logo}
         width="50"
         height="50"
         className="d-inline-block align-top"
       />
                <h3>North Star</h3>
                <p>Company Pvt Ltd</p> 
       </div>
    </Row>
    <Row >
              <ul className='unorderl'>
                <li>
                    <Link to="/">
                        <span className="icon"><Speedometer2 /></span>
                        <span className="item">Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/customer">
                        <span className="icon"><PeopleFill /></span>
                        <span className="item">Customer</span>
                    </Link>
                </li>
                <li>
                    <Link to="/billty">
                        <span className="icon"><FileCheck /></span>
                        <span className="item">Billty</span>
                    </Link>
                </li>
                <li>
                    <Link to="/item">
                        <span className="icon"><CardList /></span>
                        <span className="item">Items</span>
                    </Link>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><CreditCard/></span>
                        <span className="item">Payment</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><i className="fas fa-chart-line"></i></span>
                        <span className="item">Reports</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><i className="fas fa-user-shield"></i></span>
                        <span className="item">Admin</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><i className="fas fa-cog"></i></span>
                        <span className="item">Settings</span>
                    </a>
                </li>
            </ul>
    </Row>
    </> 
  );
};

export default Sidebar;