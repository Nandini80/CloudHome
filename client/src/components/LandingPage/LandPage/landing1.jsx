import React from 'react';
import '../../LandingPage/LandPage/style1.css';
import logo from "../../../assets/CloudHomeLogo.png";
import ukp from "../../../assets/Unknown_person.jpg"
import { useNavigate } from 'react-router-dom';

function Landing1() {
  const navigate = useNavigate();

  const doRegister=()=>{
    navigate("/signup");
  }

  const doLogin=()=>{
    navigate("/login");
  }
    return (
    <>
    <div style={{overflowY:"auto"}}>
      <header className="header">
        <div className="logo">
          <img src={logo} alt='logo' className='logopic'/>
          <span className='coname'>CloudHome</span>
        </div>
            <a href="#" className='opt'>Home</a>
            <a href="#" className='opt'>Reviews</a>
            {/* <a href="#" className='opt'>Lands</a> */}
            <a href="#" className='opt'>Contact Us</a>
        <div className="auth-buttons">
          <button className="register-button" onClick={doRegister}>Register</button>
          <button className="login-button" onClick={doLogin}>Login</button>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-text">
            <span className='mainname'>CloudHome</span>
            <h1>Give Your Stuff <br />The Space They Deserve! </h1>
            <button className='findspacebtn' onClick={doRegister}>Find Your Space!</button>
        </div>
        <div className="hero-images">
          <img src="/hero-image.png" alt="Not available" className='heropic1'/>
          <img src="/spacejoy.jpg" alt="Not available" className='heropic2'/>
        </div>
      </section>

      <section className="customer-reviews">
        <div className='review-head'>
            <h2>Reviews</h2>
            Dont believe us? Listen from our users.
        </div>
        <div className="review-cards">
          <div className="review-card">
            <div className='review-profile'>
                <img src={ukp} alt='profile pic' className='ukp' />
                <h3>Sonia Mittal</h3>
            </div>
            <br />
            <p>
              I've been using this service provider for a while now, and the reliability factor is what keeps me coming back.
              The vendors listed on the platform are consistently high-quality, and the job opportunities available are genuine.
              It's a trustworthy space for both clients and vendors.
            </p>
          </div>
          <div className="review-card">
            <div className='review-profile'>
                <img src={ukp} alt='profile pic' className='ukp' />
                <h3>Ajay Sharma</h3>
            </div>
            <br />
            <p>
              I've been using this service provider for a while now, and the reliability factor is what keeps me coming back.
              The vendors listed on the platform are consistently high-quality, and the job opportunities available are genuine.
              It's a trustworthy space for both clients and vendors.
            </p>
          </div>
          <div className="review-card">
            <div className='review-profile'>
                <img src={ukp} alt='profile pic' className='ukp' />
                <h3>Vinod Kumar</h3>
            </div>
            <br />
            <p>
              I've been using this service provider for a while now, and the reliability factor is what keeps me coming back.
              The vendors listed on the platform are consistently high-quality, and the job opportunities available are genuine.
              It's a trustworthy space for both clients and vendors.
            </p>
          </div>
          
          {/* Repeat similar structure for other review cards */}
        </div>
      </section>

      <footer className="footer" id="footer">
        <div className="connect-section">
          <h5>Connect with Us</h5>
          <p>Follow us on social media for updates and more.</p>
          {/* Add social media icons or links here */}
        </div>
        <div className="quick-links">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">User</a></li>
            <li><a href="#">Lands</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="partners">
          <h5>Our Partners</h5>
          <div className="partner-logos">
            <img src="/prologis.png" alt="Prologis" />
            <img src="/equinix.png" alt="Equinix" />
            <img src="/tower.png" alt="Tower" />
          </div>
        </div>
        <div className="footer-text">
          <p>&copy; {new Date().getFullYear()} CloudHome. All Rights Reserved.</p>
        </div>
      </footer>
      </div>
    </>
  );
}

export default Landing1;
