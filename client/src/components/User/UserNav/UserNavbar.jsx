import React from 'react'
import logo from '../../../assets/CloudHomeLogo.png'
import { LuLogOut } from "react-icons/lu";
import './userNav.css';

const UserNavbar = () => {
  return (
    <div className='container'>
        <img src={logo} className='logo'/>

        <div className='sub-nav'>
            <p className='nav-element'>Help</p>
            <p className='nav-element'>Profile</p>
            <p className='nav-element'><LuLogOut className='logout'/></p>
        </div>  

    </div>
  )
}

export default UserNavbar