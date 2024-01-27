// UserDashboard.js

import React from 'react';
import './userdash.css';
import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import logo from './assets/logo.png';

const UserDashboard = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div className="company-info">
          <img src={logo} className="logo" />
          {/* <span className="company-name">CloudHome</span> */}
        </div>
        <div>
          <CiSettings className="icon" />
          <CiLogout className="icon" />
          <IoIosHelpCircleOutline className="icon" />
        </div>
      </div>
      {/* Body */}
      <div className="body-container">
        <div className="left-half">
          <h1>Give your stuff the space they need</h1>
          <button className="find-land-button">Find land nearby</button>
        </div>
        <img src="landscape-pic.jpg" alt="Landscape" className="landscape-pic" />
      </div>

      {/* Previous Lands */}
      <div className="previous-lands">
        <h2>Previous Lands Rented</h2>
        {/* Example Fields */}
        <div className="land-item">Land A - Location A</div>
        <div className="land-item">Land B - Location B</div>
        <div className="land-item">Land C - Location C</div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>&copy; 2024 CloudHome. All rights reserved.</p>
      </div>
    </div>
  );
};

export default UserDashboard;
