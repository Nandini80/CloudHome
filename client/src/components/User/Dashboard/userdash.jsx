// UserDashboard.js

import React from 'react';
import './userdash.css';
import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import logo from './assets/CloudHomeLogo.png';
import img1 from './assets/Unknown_person.jpg';

const UserDashboard = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div className="company-info" style={{paddingLeft:'1rem'}} >
          <img src={logo} className="logo" />
          <span className="company-name">CloudHome</span>
        </div>
        <div style={{paddingRight:'2rem'}} >
          <CiSettings className="icon" />
          <CiLogout className="icon" />
          <IoIosHelpCircleOutline className="icon" />
        </div>
      </div>
      {/* Body */}
      <div className="body-container">
        <div className="left-half">
          <h1 style={{marginLeft: '3rem'}}>Your Dashboard</h1>
          <br />
          <button className="find-land-button">Find land nearby</button>
          <button className="prev-land-button">Previous Lands rented</button>
        </div>
        <img src={img1} alt="Landscape" className="landscape-pic" />
      </div>

      
      {/* Footer */}
      <div className="footer">
        <p>&copy; 2024 CloudHome. All rights reserved.</p>
      </div>
    </div>
  );
};

export default UserDashboard;