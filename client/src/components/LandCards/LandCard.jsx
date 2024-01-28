import React from 'react';
import "../LandCard.css";

const LandCard = ({landName , description , image , price , appointmentRequired , Access , state , city}) => {
  return (
    <div className='card-container'>
        <img src={image} className='land-img'/>

        <div className='land-info'>
            <h2 className='land-head'>{landName}</h2>
            <p className='land-desc'>{description}</p>
            <p className='address'>{state}</p>
            <p className='address'>{city}</p>
            <p className='address'>{Access}</p>
            <p className='appointment'>Appointment Required: {(appointmentRequired)? <span className='yes-no'>Yes</span>:<span className='yes-no'>No</span>}</p>
            <p className='price'>₹{price}</p>
        </div>
    </div>
  )
}

export default LandCard