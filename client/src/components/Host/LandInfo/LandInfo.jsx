import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { SaveProfileOwner } from '../../../services/requests';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../LandInfo/LandInfo.css'
import pic1 from '../../../assets/boxes.webp'

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
        <b><h1 style={{marginTop:"2rem", fontFamily:'roboto-regular', color: 'rgb(41, 98, 253)'}}>Storage Information</h1></b><br />
      </center>
      <Form validated={validated} onSubmit={handleSubmit} method="post" style={{display: 'flex', flexDirection: 'column', fontFamily:'roboto-regular'}}>
        <Row className="mb-1 mt-1 offset-md-2" style={{display: 'flex', flexDirection: 'column'}}>
          <Form.Group as={Col} md="5" className="me-3" style={{display: 'flex', alignItems:'center'}}>
            <Form.Label style={{width: '15rem'}}>Area / Land Type</Form.Label>
            <Form.Control
              required
              type="text"
              name="landName"
              placeholder="Eg house, warehouse etc."
              onChange={doSetObjValue}
              value={obj.landName}
              style={{width: '70%', marginRight:'6.5rem' }}
            />
          </Form.Group>
          <br />
          <Form.Group as={Col} md="4" controlId="validationCustom02" style={{display: 'flex', alignItems:'center'}}>
            <Form.Label style={{width: '15rem'}}>Price of the Land</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="In rupees"
              name="price"
              maxLength={10}
              onChange={doSetObjValue}
              value={obj.price}
              style={{width: '100%', marginLeft:'1.2rem' }}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3 offset-md-1 mt-3" style={{display: 'flex', flexDirection: 'column'}}>
          <Form.Group as={Col} md="5" className="ms-5" controlId="validationCustom03" style={{display:"flex"}}>
            <Form.Label style={{width: '15rem', marginLeft: '6.3rem'}}>Land Adderss</Form.Label>
            <Form.Control type="text" placeholder="Address" onChange={doSetObjValue} value={obj.landAddress} name="landAddress" style={{width: '100%' }} required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Address.
            </Form.Control.Feedback>
          </Form.Group>
          <br />
          <Form.Group as={Col} md="4" controlId="validationCustom03" style={{display: 'flex', alignItems:'center', marginLeft:'11rem'}}>
            <Form.Label style={{width: '15rem'}}>Land City</Form.Label>
            <Form.Control type="text" placeholder="City" onChange={doSetObjValue} value={obj.city} name="city" style={{width: '100%', marginRight:'7.5rem' }} required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <br />
          <Form.Group as={Col} md="4" controlId="validationCustom03" style={{display: 'flex'}}>
            <Form.Label style={{width: '15rem', marginLeft: '10.5rem'}}>Land State</Form.Label>
            <Form.Control type="text" placeholder="State" onChange={doSetObjValue} value={obj.state} name="state" style={{width: '100%', marginLeft:'2.4rem'}} required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>


        <Row className="mb-3 offset-md-3 mt-3" style={{position: 'relative', right: '11rem'}}>
          
        <label style={{width:'15rem', display:'flex'}}>Appointment Required : </label><br />
          <select name="appointmentRequired" onChange={doSetObjValue} style={{borderRadius:'5px', width: '7rem'}} required>
            <option value="" disabled selected>
              {" "}
              Select{" "}
            </option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
          <label>
            <br />
          <span>Access : </span>
          <select name="access" onChange={doSetObjValue} style={{borderRadius:'5px', height: '1.5rem', width: '7rem', marginLeft:'10.2rem'}} required>
            <option value="" disabled selected>
              {" "}
              Select{" "}
            </option>
            <option value="Yearly">Yearly</option>
            <option value="Monthy">Monthy</option>
            <option value="Weekly">Weekly</option>
            <option value="Daily">Daily</option>
          </select>
          </label>
          <br />
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Description</Form.Label><br />
            <textarea name="description" cols="30" rows="10" onChange={doSetObjValue} value={obj.description} ></textarea>
            </Form.Group>
        </Row>
        <div style={{display: 'flex'}}>
        <Row className="mb-3" style={{display:'flex', alignItems:'center', flexDirection: 'column', marginLeft:'13rem'}}>
          <div>
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
          </div>
        
          <br />
          <Form.Group as={Col} md="4" style={{ marginLeft: "40px"}}>
            <img src={profile} name="ppic" alt="" height="100px" width="100px" style={{position:'relative', right: '27rem', borderWidth:'0px'}}></img>
          </Form.Group>
        </Row>

        <center style={{display:'flex', marginLeft: '7rem'}}>
          <Button md="1" as={Col} className='mb-2' onClick={saveInfo} style={{borderRadius:'25px',paddingLeft:'5rem', paddingRight:'5rem', padding: '2rem', marginBottom: '4rem', marginLeft:'12rem', display: 'flex', justifyContent: 'center', alignItems:'center'}}>Save</Button>
          <Button md="1" as={Col} className='ms-5 mb-2' onClick={saveInfo} style={{borderRadius:'25px',paddingLeft:'5rem', paddingRight:'5rem', padding: '2rem', marginBottom: '4rem', display: 'flex', justifyContent: 'center', alignItems:'center'}}>Update</Button>
        </center>
        </div>
      </Form>
      <img src={pic1} alt='pic1' style={{width: '40vw', position: 'absolute', top:'12rem', right:'5rem', borderRadius:'20px'}} />
    </div>
  );
}

export default LandInfo;