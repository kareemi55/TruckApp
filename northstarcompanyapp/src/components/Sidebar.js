import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { getUser, removeUserSession } from '../pages/Utils/common';
import { Navigate } from 'react-router-dom';
import './styleOne.css';


const Nav = styled.div`
background:#789395;
height:50px;
align-items:center;`;

const Sidebar = () => {
  
  const navigate = useNavigate();
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    navigate('/');
  }

  return (
    <>
    <div>
         <Nav>
             <div></div>
             <Button className="btn pull-right logout-btn"
             onClick={handleLogout}
             value="Logout">Logout</Button>
         </Nav>
     </div>

     <nav className='nav-main'>
            <label for="btn" className="button">Dashboard
            <span className="fa fa-caret-down">  
            </span>
            </label>
            <input type="checkbox" id="btn"/>

            <ul className="menu">
                {/* <li><a></a>Home</li> */}
                <li>
                    <label for="btn-2">Administrator
                    {/* <span for="btn-2" className="fa fa-caret-down"></span> */}
                    </label>
                    <input type="checkbox" id="btn-2"/>
                    <ul>
                      <Link to='/EmployeeRegistration'>
                        <li><a>Employee Registration</a></li></Link>
                        <Link to='/ListEmployees'>
                        <li><a>List Employee</a></li>
                        </Link>
                        <Link to='/addstation'>
                        <li><a>Add Station</a></li>
                        </Link>

                        <Link to='/AddDesignation'>
                        <li><a>Add Designation</a></li>
                        </Link>
                    </ul>
                </li>

                <li>
                    <label for="btn-3">Station Incharge
                    <span className="fa fa-caret-down"></span>
                    </label>
                    <input type="checkbox" id="btn-3"/>
                    <ul>
                        <li><a>List Bilities</a></li>
                        <li><a>List Challans</a></li>
                        <li><a>List Expenses</a></li>
                        <li><a>List Claims</a></li>
                    </ul>
                </li>

                <li>
                    <label for="btn-5">Booking Officer
                        <span className="fa fa-caret-down"></span>
                    </label>
                    <input type="checkbox" id="btn-5" />
                    <ul>
                    <Link to='/addnewcustomer'>
                        <li><a>Add Customer</a></li>
                    </Link>    
                    <Link to='/addnewbillty'>
                        <li><a>New Bilty</a></li>
                    </Link>    
                        <li><a>List Bilties</a></li>
                        <li><a>New Challan</a></li>
                        <li><a>List Challan</a></li>
                        <li><a>Expenses</a></li>
                        <li><a>List Expenses</a></li>
                    </ul>
                </li>

                <li>
                    <label for="btn-4">Delivery Officer
                        <span className="fa fa-caret-down"></span>
                    </label>
                    <input type="checkbox" id="btn-4" />
                    <ul>
                        <li><a>Receive Challan</a></li>
                        <li><a>Delivery</a></li>
                        <li><a>Add Claim</a></li>
                        <li><a>List claims</a></li>
                    </ul>
                </li>

                <li><a>Support</a></li>
            </ul>
        </nav>
    </> 
  );
};

export default Sidebar;
