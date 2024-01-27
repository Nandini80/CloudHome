import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/LandingPage/Login/Login';
import HostProfile from './components/Host/HostProfile/HostProfile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/LandingPage/Register/Register';
import UserDashboard from './components/User/Dashboard/userdash';
import ChatPage from './components/Chat/chat';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/hostprofile" element={<HostProfile />}></Route>
        <Route path="/userdash" element={<UserDashboard />}></Route>
        <Route path="/chat" element={<ChatPage />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App