import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { GetItems, SaveProfileOwner } from '../../../services/requests';
import { useNavigate } from 'react-router-dom';
import { grey } from '@mui/material/colors';

function HostProfile() 
{
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [obj, doSetObj] = useState({
    phoneNumber: "",
    pinCode:"",
    state: "",
    city: "",
    address: "",
  });

  // Bootstrap validation
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };


  const doSetObjValue = (event) => {
    const { name, value } = event.target;
    doSetObj({ ...obj, [name]: value });
  };

  const saveInfo=async ()=>{
  alert(JSON.stringify(obj));
  const resp = await SaveProfileOwner(obj);
  alert(JSON.stringify(resp.data));
  navigate("/ownerDashboard");
  }

  useEffect(() => {
    var obj = GetItems();
    alert(JSON.stringify(obj));
  }, []);
 
  return (
      <div style={{ overflowX: 'hidden', padding: '20px' }}>
        <center>
          <h1 style={{ marginTop: '2rem' , marginBottom: '2rem', color: '#0066cc', fontFamily: 'Arial, sans-serif' , fontWeight: '900' }}>
            Profile Page
          </h1>
        </center>
        <Row className="mb-3">
          <Col md={4}>
            <center>
              <img
                src="/path/to/default/profile/image"
                alt="Profile"
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  marginBottom: '1rem',
                }}
              />
            </center>
          </Col>
          <Col md={8}>
            <Form validated={validated} onSubmit={handleSubmit} method="post">
              <Form.Group as={Row} className="mb-3">
                <Form.Label column md={2}>
                  Mobile
                </Form.Label>
                <Col md={8}>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Phone number"
                    name="phoneNumber"
                    maxLength={10}
                    onChange={doSetObjValue}
                    value={obj.phoneNumber}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Col>
              </Form.Group>
  
              <Form.Group as={Row} className="mb-3">
                <Form.Label column md={2}>
                  Address
                </Form.Label>
                <Col md={8}>
                  <Form.Control
                    type="text"
                    placeholder="Address"
                    onChange={doSetObjValue}
                    value={obj.address}
                    name="address"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid address.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
  
              <Form.Group as={Row} className="mb-3">
                <Form.Label column md={2}>
                  City
                </Form.Label>
                <Col md={8}>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    onChange={doSetObjValue}
                    value={obj.city}
                    name="city"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
  
              <Form.Group as={Row} className="mb-3">
                <Form.Label column md={2}>
                  State
                </Form.Label>
                <Col md={8}>
                  <Form.Control
                    type="text"
                    name="state"
                    onChange={doSetObjValue}
                    value={obj.state}
                    placeholder="State"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
  
              <Form.Group as={Row} className="mb-3">
                <Form.Label column md={2}>
                  PinCode
                </Form.Label>
                <Col md={8}>
                  <Form.Control
                    type="text"
                    placeholder="PinCode"
                    onChange={doSetObjValue}
                    value={obj.pinCode}
                    name="pinCode"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid pin code.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
  
              <center>
                {/* <Button
                  className="mb-2"
                  style={{
                    backgroundColor: '#0066cc',
                    color: 'white',
                    borderRadius: '9999px',
                    fontWeight: 'bold',
                    transition: 'all 0.2s',
                  }}
                  onClick={saveInfo}
                >
                  Save
                </Button> */}
                <Button
                  className="ms-1 mb-2"
                  style={{
                    backgroundColor: '#0066cc',
                    color: 'white',
                    borderRadius: '9999px',
                    fontWeight: 'bold',
                    transition: 'all 0.2s',
                    width: "25%"
                  }}
                  onClick={saveInfo}
                >
                  Update
                </Button>
              </center>
            </Form>
          </Col>
        </Row>
      </div>
  );
}

export default HostProfile;