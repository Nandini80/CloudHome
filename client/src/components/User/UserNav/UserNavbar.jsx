import React from 'react'
import logo from '../../../assets/CloudHomeLogo.png'
import { LuLogOut } from "react-icons/lu";
import './userNav.css';
import { useNavigate } from 'react-router-dom';

const UserNavbar = () => {

  const navigate = useNavigate();
  const doLogout = ()=>{
    localStorage.removeItem("user_email");
    localStorage.removeItem("token");
    navigate("/");
  }

  const OpenProfile=()=>{
    navigate("/hostprofile");
  }
  return (
    <div className='wrapper'>
      <div className='nav-first'>
      <img src={logo} className='logo'/>
      <p className='nav-element'>CloudHome</p>
      </div>

        <div className='sub-nav'>
            <p className='nav-element'>Help</p>
            <p className='nav-element' onClick={OpenProfile}>Profile</p>
            <p className='nav-element'><LuLogOut className='logout' onClick={doLogout}/></p>
        </div>  

    </div>
  )
}

export default UserNavbar