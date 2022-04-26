import './App.css';
import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Switch from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddEmployeeA from './pages/Admin/EmployeeRegistration';
import ListEmployeeA from './pages/Admin/ListEmployeeA';
import AddStation from './pages/Admin/AddStation';
import AddDesignation from './pages/Admin/AddDesignation';
import EmployeeRegistration from './pages/Admin/EmployeeRegistration';
import NewBillty from './pages/BookingOfficer/NewBillty';
import EmpLogin from './pages/login/EmpLogin';
import AdminLogin from './pages/login/AdminLogin';
import Sidebar from './components/Sidebar';
import ListStation from './pages/Admin/ListStation';
import ListDesignation from './pages/Admin/ListDesignation';
import AddNewCustomer from './pages/BookingOfficer/AddNewCustomer';


function App() {
  // const [user, setLoginUser] = useState({})
  return (
    <Router>
    <Routes>
     
       <Route path='/' element={<EmpLogin/>} />
       <Route path='/AdminLogin' element={<AdminLogin/>} /> 
        <Route path='/sidebar' element={<Sidebar />} /> 
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/employeeregistration' exact element ={<EmployeeRegistration/>} />
        <Route path='/listEmployees' exact element ={<ListEmployeeA/>} />
        <Route path='/addstation' exact element ={<AddStation/>} />
        <Route path='/adddesignation' exact element ={<AddDesignation/>} />
        <Route path='/liststation' exact element ={<ListStation/>} />
        <Route path='/listdesignation' exact element ={<ListDesignation/>} />
        <Route path='/addnewcustomer' exact element ={<AddNewCustomer/>} />
        <Route path='/addnewbillty' exact element ={<NewBillty/>} />
    
        </Routes>
        
        
        </Router>
  );
}

export default App;
