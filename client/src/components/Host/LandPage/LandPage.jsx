import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { SaveProfileOwner } from '../../../services/requests';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function HostProfile() 
{
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [obj, doSetObj] = useState({
    landName:"",
    description:"",
    price:"",
    access:"",
    appointmentRequired:false,
    city:"",
    landAddress:""
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

  async function saveInfo() {
    var url = "http://localhost:3000/api/v1/land/createLand";
    var formData = new FormData();
    for (var x in obj) {
      formData.append(x, obj[x]);
    }
    var response = await axios.post(url, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
    alert(JSON.stringify(response.data));
  }

  const doSetObjValue = (event) => {
    const { name, value } = event.target;
    doSetObj({ ...obj, [name]: value });
  }

  // const saveInfo=async ()=>{
  // alert(JSON.stringify(obj));
  // const resp = await SaveProfileOwner(obj);
  // alert(JSON.stringify(resp.data));
  // navigate("/ownerDashboard");
  // }

 
  return (
    <div style={{overflowX:"hidden"}}>
      <center>
        <h1 style={{marginTop:"2rem"}}>Storage Information</h1>
      </center>
      <Form validated={validated} onSubmit={handleSubmit} method="post" >
        <Row className="mb-1 mt-1 offset-md-2">
          <Form.Group as={Col} md="5" className="me-3" >
            <Form.Label>Area / Land Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="landName"
              placeholder="LandName"
              onChange={doSetObjValue}
              value={obj.landName}
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Price of the Land</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Price"
              name="price"
              maxLength={10}
              onChange={doSetObjValue}
              value={obj.price}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3 offset-md-1 mt-3">
          <Form.Group as={Col} md="5" className="ms-5" controlId="validationCustom03">
            <Form.Label>Land Adderss</Form.Label>
            <Form.Control type="text" placeholder="Address" onChange={doSetObjValue} value={obj.address} name="address" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Address.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Land City</Form.Label>
            <Form.Control type="text" placeholder="City" onChange={doSetObjValue} value={obj.city} name="city" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>


        <Row className="mb-3 offset-md-3 mt-3">
          
          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label>Appointment Required</Form.Label>
            <Form.Control type="text" name="appointmentRequired" onChange={doSetObjValue} value={obj.appointmentRequired} placeholder="Appointment?" required />
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