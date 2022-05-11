import './App.css';
import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Switch from 'react-router-dom';

import Sidebar from './components/Sidebar'; 
import RegEmployee from './pages/Admin/employee/RegEmployee';
import EmpLogin from './pages/login/EmpLogin';
import AdminLogin from './pages/login/AdminLogin';
import AddStation from './pages/Admin/station/AddStation';
import RegCustomer from './pages/stationbranch/customer/RegCustomer';
import ListBillties from './pages/stationbranch/billty/ListBillties';
import Billty from './pages/stationbranch/billty/Billty';
import Item from './pages/stationbranch/Items/Item';



function App() {
  // const [user, setLoginUser] = useState({})
  return (
    <Router>
    <Routes>
     
          <Route path='/' element={<EmpLogin/>} />
          <Route path='/AdminLogin' element={<AdminLogin/>} /> 
          <Route path='/sidebar' element={<Sidebar />} /> 
          <Route path='/RegEmployee' element={<RegEmployee/>} />
          <Route path='/Station' element={<AddStation/>} />
          <Route path='/Customer' element={<RegCustomer/>} />
          <Route path='/listbillties' element={<ListBillties/>} />
          <Route path='/billty' element={<Billty/>} />
          <Route path='/item' element={<Item/>} />
    </Routes>
        
        
        </Router>
  );
}

export default App;
