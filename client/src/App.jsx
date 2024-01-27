import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/LandingPage/Login/Login';
import HostProfile from './components/Host/HostProfile/HostProfile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/LandingPage/Register/Register';

// import Owner from './components/OwnerDashboard/Owner';
import UserDashboard from './components/User/Dashboard/userdash';
import ChatPage from './components/Chat/chat';
import UserProfile from './components/User/UserProfile/UserProfile';


import { useEffect, useState } from 'react';
import Landing from './components/LandingPage/LandPage/Landing';
import LandPage from './components/Host/LandPage/LandPage';


function App() {
  const [user, setUser] = useState({});
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      getUser();
    }
  }, []);

  const getUser = async () => {
    try {
        setUser(localStorage.getItem("accountType"));
    }
    catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
         <Route path="/login" element={<Login />} /> 
        <Route path='/signup' element={token ?<Navigate to={user=== "Owner" ? "/ownerDashboard":"/userdash"} /> :<Register />} />
        <Route path='/login' element={token ?<Navigate to={user === "Owner" ? "/ownerDashboard":"/userdash"} /> :<Login />} />
        {/* <Route path="/signup" element={<Register />} /> */}
        {/* <Route path='/ownerDashboard' element={<Owner />} /> */}
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/hostprofile" element={<HostProfile />}></Route>
        <Route path="/userdash" element={<UserDashboard />}></Route>
        <Route path="/chat" element={<ChatPage />}></Route>

        <Route path="/userprofile" element={<UserProfile/>}></Route>

        <Route path="/landPage" element={<LandPage />}></Route>

      </Routes>
    </>
  )
}

export default App