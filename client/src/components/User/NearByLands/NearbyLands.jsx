import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { DistinctCities, NearbyCites } from '../../../services/requests';
import CityCard from './CityCard';

function NearbyLands() 
{
    var c1="";
    const [jsonCity,setCity] = useState([]); 
    const [jsonAry,setAry] = useState([]);
    const [obj,setObj] = useState({});

    useEffect(()=>{
        doFetchCity();
    },[]); 


    const doFetchCity = async () => {
      try {
        const res = await DistinctCities();
        // alert(JSON.stringify(res.data.data));
        const cities = res.data.data.map((cityObj) => cityObj.city);
        setCity(cities);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };
    

       const doSearch=async()=>
       {
        if(c1==="")
        {
          alert("Please select the city");
        }
        else 
        {
          // alert(JSON.stringify({city : c1}));
          const updatedObj = { city: c1 }; 
          setObj((prevObj) => ({ ...prevObj, city: c1 }));
          const resp = await NearbyCites(JSON.stringify({city : c1}));
          // alert(JSON.stringify(resp));
          setAry(resp.data.landsByState);
        }
       }

  return (
    <div style={{overflowX:"hidden"}}>
       <center>
       <h1 className='mt-3'>Land Available Near You</h1>
       </center>
       <Form method="post">
        <Row className='offset-md-4'>
       <Form.Group as={Col} md="4" style={{ margin: "40px" }}>
        <center>
        <h3>Select City</h3>

            <select name="city" required onChange={(e)=>c1= e.target.value}>
              <option value="" disabled selected> Select </option>
              {
                jsonCity.map((obj)=> <option value={obj}>{obj}</option>)
              }
            </select>
            </center>
          </Form.Group>

          </Row>

          <Row>
          {
            jsonAry.map((obj)=>{
                return(
                    <CityCard LandName={obj.landName} landAddress={obj.landAddress} State={obj.state} appointmentRequired={obj.appointmentRequired} Price={obj.price} image={obj.image} Description={obj.description} Access={obj.Access}></CityCard>
                )
            })
          }
          </Row>
          <center>
            <input type="button" style={{marginLeft:"-3rem"}} variant="primary" value="Search" onClick={doSearch}/>
          </center>
       </Form>
    </div>
  )
}

export default NearbyLands;