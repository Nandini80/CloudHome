import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer>
            <div class="foot_content">
                <div class="footer-element">
                    <h2>CHANAKYA</h2>
                    <p>ALL RIGHTS RESERVED</p>
                    <p>© Copyright 2023</p>
                    <a href="#">Privacy Policy</a>
                </div>

                <div class="footer-element">
                    <h2>EMAIL</h2>
                    <div class="id">
                        <a href="#">xyz@gmail.com</a>
                    </div>
                </div>

                <div class="footer-element">
                    <h2>MENU</h2>
                    <div class="menu_contents">
                        <a href="#">ABOUT US</a>
                        <a href="#">COURSES</a>
                        <a href="#">CONTACTS</a>
                    </div>
                </div>
                <div class="footer-element">
                    <h2>SERVICES</h2>
                    <div class="footer-element">
                        <a href="#">TERMS OF USE</a>
                        <a href="#">REFUND & CANCELLATION</a>
                    </div>
                </div>

                <div class="footer-element">
                    <h2 class="social-head">OUR SOCIALS</h2>
                    <div class="social_img">
                        <a href="https://www.linkedin.com/in/rishab-kumar-jha-863914275"><i class="fa-brands fa-linkedin fa-2x icon"></i></a>
                        <a href="https://twitter.com/rishabkrjha"><i class="fa-brands fa-x-twitter fa-2x icon"></i></a>
                        <a href="https://github.com/Rishab87"><i class="fa-brands fa-github fa-2x icon"></i></a>
                        <a href="https://www.instagram.com/rishabkumar.jha/"><i class="fa-brands fa-instagram fa-2x icon"></i></a>
                        <a href="mailto:kumarjharishab@gmail.com"><i class="fa-regular fa-envelope fa-2x icon"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer