// Footer.js

import React from 'react';
import '../Footer/Footer.css';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = (props) => {
  return (
    <div>
      <footer >
        <div className="foot_content" style={{ top: `${props.bn}px` }}>
          <div className="footer-element">
            <h2>CLOUDHOME</h2>
            <p>ALL RIGHTS RESERVED</p>
            <p>© Copyright 2023</p>
            <a href="#">Privacy Policy</a>
          </div>

          <div className="footer-element">
            <h2>EMAIL</h2>
            <div className="id">
              <a href="#">xyz@gmail.com</a>
            </div>
          </div>

          <div className="footer-element">
            <h2>MENU</h2>
            <div className="menu_contents">
              <a href="#">ABOUT US</a>
              <a href="#">REVIEWS</a>
              <a href="#">CONTACTS</a>
            </div>
          </div>
          <div className="footer-element">
            <h2>SERVICES</h2>
            <div className="footer-element">
              <a href="#">TERMS OF USE</a>
              <a href="#">REFUND & CANCELLATION</a>
            </div>
          </div>

          <div className="footer-element">
            <h2 className="social-head">OUR SOCIALS</h2>
            <div>
            <FaInstagram style={{scale: '2', margin: '1rem'}} />
            <FaFacebook style={{scale: '2', margin: '1rem'}} />
            <FaXTwitter style={{scale: '2', margin: '1rem'}} />
            </div>
            
            <div className="social_img">
              <a href="https://www.linkedin.com/in/rishab-kumar-jha-863914275">
                <i className="fa-brands fa-linkedin fa-2x icon"></i>
              </a>
              <a href="https://twitter.com/rishabkrjha">
                <i className="fa-brands fa-x-twitter fa-2x icon"></i>
              </a>
              <a href="https://github.com/Rishab87">
                <i className="fa-brands fa-github fa-2x icon"></i>
              </a>
              <a href="https://www.instagram.com/rishabkumar.jha/">
                <i className="fa-brands fa-instagram fa-2x icon"></i>
              </a>
              <a href="mailto:kumarjharishab@gmail.com">
                <i className="fa-regular fa-envelope fa-2x icon"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
