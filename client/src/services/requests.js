import publicReq from "./axios-config";

const SignupReq =(data)=>
{
    return publicReq.post("/api/v1/auth/signup",data);
};

const loginReq =(data)=>
{
    return publicReq.post("/api/v1/auth/login",data);
};

const OTPReq=(data)=>{
    return publicReq.post("/api/v1/auth/sendotp",data);
}


const nearbyLands = ()=>
{
    return publicReq.get('/land/nearbyLands');
}

const createLand = (data)=>{
    return publicReq.post('/land/createLand');
}

const deleteLand = ()=>{
    return publicReq.delete('/land/deleteLand');
}

const editLand = ()=>{
    return publicReq.put('/land/editLand');
}

//for customers
const rentedLands = ()=>{
    return publicReq.get('/land/rentedLands');
}

//for owners
const rentedUsers = ()=>{
    return publicReq.get('/land/getRentedUsers');
}

export {SignupReq,loginReq ,OTPReq, nearbyLands , createLand , editLand , deleteLand , rentedLands , rentedUsers};
