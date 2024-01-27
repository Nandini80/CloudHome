import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/LandingPage/Login/Login';
<<<<<<< HEAD
import HostProfile from './components/Host/HostProfile/HostProfile';
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import Register from './components/LandingPage/Register/Register';
>>>>>>> e8349e0cf87ced01fdd3778893585b8fe2f13f5c

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
<<<<<<< HEAD
        <Route path='/hostprofile' element={ <HostProfile />}></Route>
=======
        <Route path = '/signup' element= {<Register/>}></Route>
>>>>>>> e8349e0cf87ced01fdd3778893585b8fe2f13f5c
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
