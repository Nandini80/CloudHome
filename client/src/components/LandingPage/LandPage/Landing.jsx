import React from 'react';
import { Row, Card, Col, Image, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

import '../../LandingPage/LandPage/Landing.css';

function Landing() {
 
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg bg-light text-dark p-4 text-center">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/logo.png" alt="Your Logo" style={{ height: '80px', width: 'auto' }} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{ color: 'black' }}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: 'black' }}>User</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: 'black' }}>Lands</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: 'black' }}>Contact Us</a>
              </li>
            </ul>
            <span className="navbar-text" style={{ color: 'black' }}>
              <button className="btn btn-primary mx-2">Register</button>
              <button className="btn btn-primary">Login</button>
            </span>
          </div>
        </div>
      </nav> */}

      <Row className="w-100 justify-content-center align-items-center" style={{ height: "35rem" }}>
        <Col xs={12} md={6}>
          <Card.Body style={{ width: '35rem', height: '35rem', textAlign: 'center' }}>
            <Card.Title style={{ fontFamily: "os_semi_bold", marginTop: '3rem', marginBottom: '2rem' }}>
              <h1>Smart Solutions <br /> Compact Spaces</h1>
            </Card.Title>
            <Card.Text style={{ fontSize: "larger", fontFamily: "os_semi_bold" }}>
              Find, Discover the space that you need
            </Card.Text>
          </Card.Body>
        </Col>
        <Col xs={12} md={6}>
          <div className="hero-div d-flex justify-content-between" style={{ height: "100%", marginTop: "2rem" }}>
            <Image src="/hero-image.png" width={310} height={355} alt='not available' rounded />
            <Image src="/spacejoy.jpg" width={280} height={275} rounded />
          </div>
        </Col>
      </Row>

      <Row className="w-100 justify-content-center mt-5 mb-5">
        <div style={{ fontFamily: "os_semi_bold", marginBottom: "20px", textAlign: "center" }}>
          <h1>Reviews</h1>
        </div>
        <div style={{ width: "30%", display: "flex", justifyContent: "center" }}>
          <Image src="/prologis.png" style={{ width: '25rem', height: '14rem' }} rounded />
        </div>
        <div style={{ width: "30%", display: "flex", justifyContent: "center" }}>
          <Image src="/equinix.png" style={{ width: '25rem', height: '14rem' }} rounded />
        </div>
        <div style={{ width: "30%", display: "flex", justifyContent: "center" }}>
          <Image src="/tower.png"  style={{ width: '25rem', height: '14rem' }} rounded />
        </div>
      </Row>


      <Row className='w-100 mt-5 mb-5'>
        <div style={{ fontFamily: "os_semi_bold", marginTop: '2rem', marginBottom: "20px", display: "flex", justifyContent: "center" }}>
          <h1>Reviews</h1>
        </div>
        <div className='cards'>
          <div className='cards1'>
            <Card style={{ width: '18rem', marginLeft: "3rem" }}>
              <Card.Body>
                <Card.Title>Sonia Mittal</Card.Title>
                <Card.Text>
                  I've been using this service provider for a while now, and the reliability factor is what keeps me coming back.
                  The vendors listed on the platform are consistently high-quality, and the job opportunities available are genuine.
                  It's a trustworthy space for both clients and vendors.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='cards2'>
            <Card style={{ width: '18rem', marginLeft: "1rem" }}>
              <Card.Body>
                <Card.Title>Harry Josh</Card.Title>
                <Card.Text>
                  I recently utilized this website and was impressed with their seamless system for connecting vendors with the clients in need.
                  The platform made it easy to find services that perfectly matched my needs.
                  A definite go-to for anyone in search of reliable and diverse services.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='cards3'>
            <Card style={{ width: '18rem', marginLeft: "1rem" }}>
              <Card.Body>
                <Card.Title>Raman Roy</Card.Title>
                <Card.Text>
                  As a vendor, I registered on this platform to explore job opportunities, and I must say, it exceeded my expectations.
                  The variety of jobs available allowed me to find the perfect job for me according to my skills.
                  A fantastic resource for job-seeking vendors.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='cards4'>
            <Card style={{ width: '18rem', marginLeft: "1rem" }}>
              <Card.Body>
                <Card.Title>Kiara Garg</Card.Title>
                <Card.Text>
                  This site has created a thriving community for vendors, offering a centralized hub for job seekers.
                  The platform not only helps vendors find opportunities but also fosters a sense of community among service providers.
                  It's a valuable resource for anyone looking for jobs.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Row>

      <div><br /></div>

      <Row className="w-100" style={{ marginTop: "10rem", marginLeft: "12rem" }} id="footer">
        <footer id="footer" className="bg-dark text-light p-4">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h5>Connect with Us</h5>
                <p>Follow us on social media for updates and more.</p>
                {/* Add social media icons or links here */}
              </div>
              <div className="col-md-4">
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                  <li><a href="#" style={{ color: 'white' }}>Home</a></li>
                  <li><a href="#" style={{ color: 'white' }}>User</a></li>
                  <li><a href="#" style={{ color: 'white' }}>Lands</a></li>
                  <li><a href="#" style={{ color: 'white' }}>Contact Us</a></li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5>Our Partners</h5>
                <div className="d-flex justify-content-around">
                  <Image src="/prologis.png"  style={{ width: '6rem', height: '3.5rem' }} rounded />
                  <Image src="/equinix.png"  style={{ width: '6rem', height: '3.5rem' }} rounded />
                  <Image src="/tower.png"  style={{ width: '6rem', height: '3.5rem' }} rounded />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-3">
            <p>&copy; {new Date().getFullYear()} CloudHome. All Rights Reserved.</p>
          </div>
        </footer>
      </Row>
    </>
  );
}

export default Landing;
