import React from 'react';
import './UserProfile.css';  
import { Navbar, Nav } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const UserProfile = () => {
  return (
    <><><Navbar bg="light" expand="lg">
      <img
        src="/logo.png"
        width="80"
        height="80"
        className="d-inline-block align-top"
        alt="Logo" />
      <Navbar.Brand href="#">CloudHome</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Land</Nav.Link>
          <Nav.Link href="#">Owner</Nav.Link>
          <Nav.Link href="#">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    </>
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
  <Form className="w-50 mx-auto light-blue-form">
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextId">
      <Form.Label column sm="2">
        ID
      </Form.Label>
      <Col sm="10">
        <Form.Control type="text" placeholder="Enter ID" style={{ width: '100%' }} />
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3" controlId="formPlaintextCity">
      <Form.Label column sm="2">
        City
      </Form.Label>
      <Col sm="10">
        <Form.Control type="text" placeholder="Enter City" style={{ width: '100%' }} />
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPincode">
      <Form.Label column sm="2">
        Pincode
      </Form.Label>
      <Col sm="10">
        <Form.Control type="text" placeholder="Enter Pincode" style={{ width: '100%' }} />
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPincode">
      <Form.Label column sm="2">
        Email
      </Form.Label>
      <Col sm="10">
        <Form.Control type="text" placeholder="Enter Email" style={{ width: '100%' }} />
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3" controlId="formPlaintextState">
      <Form.Label column sm="2">
        State
      </Form.Label>
      <Col sm="10">
        <Form.Control type="text" placeholder="Enter State" style={{ width: '100%' }} />
      </Col>
    </Form.Group>
    <Button variant="primary" type="submit">
        Save
      </Button>

      <Button variant="success" style={{ marginLeft: '1rem' }} type="button">
        Update
      </Button>
  </Form>
</div>

</>
  );

}

export default UserProfile;
