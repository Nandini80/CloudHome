import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { SaveProfileOwner } from '../../../services/requests';
import { useNavigate } from 'react-router-dom';

function HostProfile() 
{
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [obj, doSetObj] = useState({
    // id : "",
    email: "",
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

  // let userID;
  let eml;
  useEffect(() => {
     eml = localStorage.getItem("email");
    //  userID = localStorage.getItem("id");

     doSetObj({...obj,email : eml});
    //  doSetObj({...obj,id : userID});
  }, []);


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

 
  return (
    <div style={{overflowX:"hidden"}}>
      <center>
        <h1 style={{marginTop:"2rem"}}>Profile Page</h1>
      </center>
      <Form validated={validated} onSubmit={handleSubmit} method="post" >
        <Row className="mb-1 mt-1 offset-md-2">
          <Form.Group as={Col} md="5" className="me-3" >
            <Form.Label>Email id</Form.Label>
            <Form.Control
              required
              type="text"
              name="email"
              placeholder="email"
              onChange={doSetObjValue}
              value={eml}
              // readOnly
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="phone number"
              name="phoneNumber"
              maxLength={10}
              onChange={doSetObjValue}
              value={obj.phoneNumber}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3 offset-md-1 mt-3">
          <Form.Group as={Col} md="5" className="ms-5" controlId="validationCustom03">
            <Form.Label>Adderss</Form.Label>
            <Form.Control type="text" placeholder="Address" onChange={doSetObjValue} value={obj.address} name="address" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Address.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" onChange={doSetObjValue} value={obj.city} name="city" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>


        <Row className="mb-3 offset-md-3 mt-3">
          
          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" name="state" onChange={doSetObjValue} value={obj.state} placeholder="State" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>PinCode</Form.Label>
            <Form.Control type="text" placeholder="PinCode" onChange={doSetObjValue} value={obj.pinCode} name="pinCode" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>


       
        <center>
          <Button md="1" as={Col} className='mb-2' onClick={saveInfo}>Save</Button>
          <Button md="1" as={Col} className='ms-5 mb-2' onClick={saveInfo}>Update</Button>
        </center>
      </Form>
    </div>
  );
}

export default HostProfile;