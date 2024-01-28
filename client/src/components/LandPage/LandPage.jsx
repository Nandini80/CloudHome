import React from 'react'
import { Link } from 'react-router-dom'
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const LandPage = ({image , phoneNumber , landName , description , price ,appointmentRequired , Access , state , city}) => {
  return (
    <div className='land-container'>
        <div className='contacts'>
            <img className='land-img' src={image}/>
            <Link to={'/chat'}><IoChatbubbleEllipsesOutline/></Link>
            {phoneNumber &&
                <a href={`tel:${phoneNumber}`}></a>
            }
        </div>


        <div className='land-details'>
            <h1>{land}</h1>
        </div>
    </div>
  )
}

export default LandPage