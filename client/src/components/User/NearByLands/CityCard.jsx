import React from "react";
import "./CityCard.css";


const CityCard=(objProp)=>{
return(
    <>
 <div className="outter">
    {/* <img src={`http://localhost:2000/uploads/${objProp.image}`}  width="100%" height="200" /> */}
      <div className="ms-4 mt-4">
      LandName : {objProp.LandName}
        <br />
        landAddress : {objProp.landAddress}
     <br />
     State : {objProp.State}
     {/* <br />
     appointmentRequired : {objProp.appointmentRequired} */}
    <br />
    Price : {objProp.Price}
     <br />
     Description : {objProp.Description}
     <br />
     Access : {objProp.Access}
     </div>
 </div>
 </>
)};

export default CityCard;