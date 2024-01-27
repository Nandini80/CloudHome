import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/LandingPage/Login/Login';
import HostProfile from './components/Host/HostProfile/HostProfile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/LandingPage/Register/Register';
import Owner from './components/OwnerDashboard/Owner';
import UserDashboard from './components/User/Dashboard/userdash';
import ChatPage from './components/Chat/chat';
import UserProfile from './components/User/UserProfile/UserProfile';

function App() {

  return (
    <>
      <Routes>

        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Register />}/>
        <Route path="/hostprofile" element={<HostProfile />}/>
        <Route path='/ownerDashboard' element={<Owner/>}/>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/hostprofile" element={<HostProfile />}></Route>
        <Route path="/userdash" element={<UserDashboard />}></Route>
        <Route path="/chat" element={<ChatPage />}></Route>
        <Route path="/userprofile" element={<UserProfile/>}></Route>
      </Routes>
    </>
  )
}

export default App