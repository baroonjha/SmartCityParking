import './App.css'
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar'
import Home from './components/Home';
import Cars from './components/Cars';
import Bikes from './components/Bikes';
import Login from './components/Login';
import Register from './components/Register';
import UserCard from './components/UserCard';
import NotFound from './components/NotFound';
import AdminDashboard from './components/Admin/AdminDashboard';
import Addlocation from './components/Admin/pages/Addlocation';
// import { ToastContainer } from 'react-toastify';



function App() {
 

  return (
    <>
    {/* <ToastContainer /> */}
      <Router>
        <Navbar />

          <Routes>
                <Route exact path='/' element={<Home/>}/>
            <Route exact path="/cars" element={<Cars/>}/>
            <Route exact path="/bikes" element={<Bikes/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/register" element={<Register/>}/>
            <Route exact path="/profile" element={<UserCard/>}/>
            <Route exact path="/admin" element={<AdminDashboard/>}/>
            <Route exact path="/admin/createlocation" element={<Addlocation/>}/>
            <Route exact path="*" element={<NotFound/>}/>
          </Routes>
        
      </Router>
      
  </>
  );
}

export default App
