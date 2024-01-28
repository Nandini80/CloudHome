import React from "react";
import cstyle from  "../Styling/card2.module.css";


const CityCard=(objProp)=>{
return(
    <>
 <div className={cstyle.outter}>
    {/* <img src={`http://localhost:2000/uploads/${objProp.img}`}  width="100%" height="200" /> */}
      <div className="ms-4 mt-4">
        Name : {objProp.Name}
        <br />
        Email : {objProp.Email}
     <br />
        Contact : {objProp.Mobile}
     <br />
        City : {objProp.City}
    <br />
        Address : {objProp.address}
     <br />
     </div>
 </div>
 </>
)};

export default CityCard;