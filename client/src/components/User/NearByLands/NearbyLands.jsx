import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { fetchClient } from '../services/user';
import Card2 from './CardClientInfo';
import { NearbyCites } from '../../../services/requests';
//Cards

function NearbyLands() 
{
    var c1="";
    const [jsonCity,setCity] = useState([]); 
    const [jsonAry,setAry] = useState([]);

    useEffect(()=>{
        doFetchCity();
    },[]); 


    const doFetchCity=async()=>{
        const res = await DistinctCities();
        setCity(res.data.user);
       };

       const doSearch=async()=>
       {
        if(c1==="")
        {
          alert("Please select the city");
        }
        else 
        {
          const resp = await NearbyCites({c1});
          // alert(JSON.stringify(resp));
          setAry(resp.data);
        }
       }

  return (
    <div>
       <center>
       <h1 className='mt-3'>Find the Jobs available</h1>
       </center>
       <Form method="post">
        <Row className='offset-md-4'>
       <Form.Group as={Col} md="4" style={{ margin: "40px" }}>
            <Form.Label>City</Form.Label>
            <select name="city" required onChange={(e)=>c1= e.target.value}>
              <option value="" disabled selected> Select </option>
              {
                jsonCity.map((obj)=> <option value={obj}>{obj}</option>)
              }
            </select>
          </Form.Group>

          </Row>

          <Row>
          {
            jsonAry.map((obj)=>{
                return(
                    <Card2 Name={obj.name} Email={obj.email} Mobile={obj.mobile} City={obj.city} address={obj.address}></Card2>
                )
            })
          }
          </Row>
          <Button md="1" as={Col} className='offset-md-5' variant="primary" onClick={doSearch}>Search</Button>
       </Form>
    </div>
  )
}

export default NearbyLands;