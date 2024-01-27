import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/LandingPage/Login/Login';
import HostProfile from './components/Host/HostProfile/HostProfile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/LandingPage/Register/Register';
import Owner from './components/OwnerDashboard/Owner';

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Register />}/>
        <Route path="/hostprofile" element={<HostProfile />}/>
        <Route path='/ownerDashboard' element={<Owner/>}/>
      </Routes>
    </>
  )
}

export default App