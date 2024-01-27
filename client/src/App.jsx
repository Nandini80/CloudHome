import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/LandingPage/Login/Login';
import UserDashboard from './userdash.jsx';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/userdash" element={<UserDashboard />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
