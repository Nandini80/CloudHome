import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/LandingPage/Login/Login';
<<<<<<< HEAD
import Register from './components/LandingPage/Register/Register';
import { useState } from 'react';
=======
import HostProfile from './components/Host/HostProfile/HostProfile';
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> 5bca92d00d5073b57f60c2da31fa3f62e163f48b

function App() {

  const [user , setUser] = useState({});
  const token = localStorage.getItem("token");

   
  return (
    <>
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>\
        <Route path="/hostprofile" element={<HostProfile />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
