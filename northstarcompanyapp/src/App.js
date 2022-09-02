import './App.css';
import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Switch from 'react-router-dom';

import Test from './components/test/Test'; 
import RegEmployee from './pages/Admin/employee/RegEmployee';
import EmpLogin from './pages/login/EmpLogin';
import AdminLogin from './pages/login/AdminLogin';
import AddStation from './pages/Admin/station/AddStation';
import Customer from './pages/customer/new/New';
import Billty from './pages/billty/new/New'
import Item from './pages//item/new/New';
import Payment from './pages/payment/new/New';
import PrintBillty from './pages/payment/invoice/PrintBillty';
import Sidebar from './components/sidebar/Sidebar';


function App() {
  // const [user, setLoginUser] = useState({})
  return (
    <Router>
    <Routes>
     
          <Route path='/' element={<EmpLogin/>} />
          <Route path='/AdminLogin' element={<AdminLogin/>} /> 
          <Route path='/test' element={<Test />} /> 
          <Route path='/RegEmployee' element={<RegEmployee/>} />
          <Route path='/Station' element={<AddStation/>} />
          <Route path='/customer' element={<Customer/>} />
         
          <Route path='/billty' element={<Billty/>} />
          <Route path='/item' element={<Item/>} />
          <Route path='/payment' element={<Payment/>} />
          <Route path='/print' element={<PrintBillty/>} />
          
          
    </Routes>
        
        
        </Router>
  );
}

export default App;
