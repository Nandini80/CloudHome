import React from 'react'
import { Link } from 'react-router-dom'
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const LandPage = ({image , phoneNumber}) => {
  return (
    <div className='land-container'>
        <div className='contacts'>
            <img className='land-img' src={image}/>
            <Link to={'/chat'}><IoChatbubbleEllipsesOutline/></Link>
            <a href="tel:"></a>
        </div>

        <div className='land-details'>

        </div>
    </div>
  )
}

export default LandPage