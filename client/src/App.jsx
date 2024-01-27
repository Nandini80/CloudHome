import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/LandingPage/Login/Login';
<<<<<<< HEAD
=======
import HostProfile from './components/Host/HostProfile/HostProfile';
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> 843b5211660df98380abff13bacc574dbe86fdd9

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/login" element={<Login />}></Route>
=======
        <Route path="/login" element={<Login />}></Route>\
        <Route path="/hostprofile" element={<HostProfile />}></Route>

>>>>>>> 843b5211660df98380abff13bacc574dbe86fdd9
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
