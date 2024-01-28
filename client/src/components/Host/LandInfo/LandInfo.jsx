import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { SaveProfileOwner } from '../../../services/requests';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LandInfo() 
{
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [obj, doSetObj] = useState({
    id:"",
    landName:"",
    description:"",
    price:"",
    access:"",
    appointmentRequired:false,
    city:"",
    landAddress:"",
    state:"",
    image:null,
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
  let userID;
  useEffect(() => {
    //  eml = localStorage.getItem("email");
     userID = localStorage.getItem("Userid");

    //  doSetObj({...obj,email : eml});
     doSetObj({...obj,id : userID});
  }, []);

  async function saveInfo() 
  {
    alert(JSON.stringify(obj));
    var url = "http://localhost:3000/api/v1/land/createLand";
    var formData = new FormData();
    for (var x in obj) {
      formData.append(x, obj[x]);
    }
    var response = await axios.post(url, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
    // alert(JSON.stringify(response.data));
    alert("Information Savedd");

    navigate("/ownerDashboard");
  }

  const doSetObjValue = (event) => {
    const { name, value } = event.target;
    doSetObj({ ...obj, [name]: value });
  }


  const [profile,setProfile] = useState();
  function changeImage(pimg)
  {
    const reader = new FileReader();
    reader.onload=()=>{
      setProfile(reader.result);
    };
    reader.readAsDataURL(pimg);
  }

  function SetPic(event) {
    var value = event.target.files[0];
    var { name } = event.target;
    doSetObj({ ...obj, [name]: value });
    changeImage(value);
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
            <Form.Label>Area / Land Type</Form.Label>
            <Form.Control
              required
              type="text"
              name="landName"
              placeholder="Eg house, warehouse etc."
              onChange={doSetObjValue}
              value={obj.landName}
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Price of the Land</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="In rupees"
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
            <Form.Control type="text" placeholder="Address" onChange={doSetObjValue} value={obj.landAddress} name="landAddress" required />
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

          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Land State</Form.Label>
            <Form.Control type="text" placeholder="State" onChange={doSetObjValue} value={obj.state} name="state" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>


        <Row className="mb-3 offset-md-3 mt-3">
          
        <label>Appointment Required : </label>
          <select name="appointmentRequired" onChange={doSetObjValue} required>
            <option value="" disabled selected>
              {" "}
              Select{" "}
            </option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>

          <label>Access : </label>
          <select name="access" onChange={doSetObjValue} required>
            <option value="" disabled selected>
              {" "}
              Select{" "}
            </option>
            <option value="Yearly">Yearly</option>
            <option value="Monthy">Monthy</option>
            <option value="Weekly">Weekly</option>
            <option value="Daily">Daily</option>
          </select>
        

          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Description</Form.Label>
            <textarea name="description" cols="30" rows="10" onChange={doSetObjValue} value={obj.description} ></textarea>
            </Form.Group>
        </Row>

        <Row className="mb-3">
        <Form.Group as={Col} md="4" style={{ margin: "40px" }}>
            <Form.Label>Land Image</Form.Label>
            <Form.Control
              required
              type="file"
              name="image"
              onChange={SetPic}
              // value={JSON.stringify(obj.image)}
            />
          </Form.Group>

          <Form.Group as={Col} md="4" style={{ marginLeft: "40px" }}>
            <img src={profile} name="ppic" alt="" height="100px" width="100px"></img>
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

export default LandInfo;