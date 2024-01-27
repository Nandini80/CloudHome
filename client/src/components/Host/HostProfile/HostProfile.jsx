import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function HostProfile() 
{
  const [validated, setValidated] = useState(false);
  const [obj, doSetObj] = useState({
    email: "",
    mobile: "",
    name: "",
    state: "",
    city: "",
    address: "",
    pp: null,
    idProof: null
  });
  const [proof,setProof] = useState();
  const [profile,setProfile] = useState();

  // Bootstrap validation
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  //For prev of profile picture
  function changePic(pimg)
  {
    const reader = new FileReader();
    reader.onload=()=>{
      setProfile(reader.result);
    };
    reader.readAsDataURL(pimg);
  }

  //For prev of proof picture
  function changeProof(imgId)
  {
    const reader = new FileReader();
    reader.onload=()=>{
      setProof(reader.result);
    };
    reader.readAsDataURL(imgId);
  }

  const doSetObjValue = (event) => {
    const { name, value } = event.target;
    doSetObj({ ...obj, [name]: value });
  };

  function SetPic(event)
  {
    var value = event.target.files[0];
    var {name} = event.target;
    doSetObj({ ...obj, [name]: value });

    if(name==="pp")
    {
      changePic(value);
    }
    else
    {
      changeProof(value);
    }
  }

  return (
    <div style={{overflowX:"hidden"}}>
      <center>
        <h1 style={{marginTop:"2rem"}}>Land Details</h1>
      </center>
      <Form validated={validated} onSubmit={handleSubmit} method="post" >
        <Row className="mb-1">
          <Form.Group as={Col} md="4" className="mt-1 me-3" style={{ marginLeft: "29%" }}>
            <Form.Label>Email id</Form.Label>
            <Form.Control
              required
              type="text"
              name="email"
              placeholder="email"
              onChange={doSetObjValue}
              value={obj.email}
            />
          </Form.Group>
          <Form.Group as={Col} className="ms-5" style={{marginTop:"2.3rem"}}>
            <Button type="button" as={Col}>Fetch</Button>
          </Form.Group>
        </Row>

        <Row className="mb-3 offset-md-1">
          <Form.Group as={Col} md="4" style={{ margin: "40px" }}>
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Full name"
              name="name"
              onChange={doSetObjValue} 
              value={obj.name}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" style={{ margin: "40px" }} controlId="validationCustom02">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="phone number"
              name="mobile"
              onChange={doSetObjValue}
              value={obj.mobile}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3 offset-md-1">
          <Form.Group as={Col} md="5" className="ms-5" controlId="validationCustom03">
            <Form.Label>Adderss</Form.Label>
            <Form.Control type="text" placeholder="Address" onChange={doSetObjValue} value={obj.address} name="address" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Address.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" onChange={doSetObjValue} value={obj.city} name="city" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" name="state" onChange={doSetObjValue} value={obj.state} placeholder="State" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>


        <Row className="mb-3 offset-md-1">
          <Form.Group as={Col} md="4" style={{ margin: "40px" }}>
            <Form.Label>Land Picture</Form.Label>
            <Form.Control
              required
              type="file"
              name="pp"
              onChange={SetPic}
              // value={JSON.stringify(obj.pp)}
            />
          </Form.Group>
          <Form.Group as={Col} md="4" style={{ margin: "40px" }}>
            <Form.Label>Id proof picture</Form.Label>
            <Form.Control
              required
              type="file"
              name="idProof"
              onChange={SetPic}
              // value={obj.idProof}
            />
          </Form.Group>

          <Form.Group as={Col} md="4" style={{ marginLeft: "40px" }}>
            <img src={profile} name="ppic" alt="" height="100px"></img>
          </Form.Group>
          <Form.Group as={Col} md="4" style={{ marginLeft: "80px" }}> 
            <img src={proof} name="idpic" alt="" height="100px" ></img>
          </Form.Group>

        </Row>
        <center>
          <Button md="1" as={Col} className='mb-2'>Save</Button>
          <Button md="1" as={Col} className='ms-5 mb-2'>Update</Button>
        </center>
      </Form>
    </div>
  );
}

export default HostProfile;