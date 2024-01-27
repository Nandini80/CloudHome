import React from 'react'
import logo from '../../../assets/CloudHomeLogo.png'
import { LuLogOut } from "react-icons/lu";
import './userNav.css';

const UserNavbar = () => {
  return (
    <div className='wrapper'>
      <div className='nav-first'>
      <img src={logo} className='logo'/>
      <p className='nav-element'>CloudHome</p>
      </div>

        <div className='sub-nav'>
            <p className='nav-element'>Help</p>
            <p className='nav-element'>Profile</p>
            <p className='nav-element'><LuLogOut className='logout'/></p>
        </div>  

    </div>
  )
}

export default UserNavbar