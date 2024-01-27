import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/LandingPage/Login/Login';
import Register from './components/LandingPage/Register/Register';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path = '/signup' element= {<Register/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
