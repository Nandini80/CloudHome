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

const SaveProfileOwner=(data)=>{
    return publicReq.put("/api/v1/profile/updateProfile",data);
}

const GetItems=(data)=>{
    return publicReq.post("/api/v1/profile/profileDetails",data);
}

const NearbyCites = ()=>
{
    return publicReq.post('/api/v1/land/getLandsByCity');
}

const DistinctCities = ()=>
{
    return publicReq.get('/api/v1/land/ownerCities');
}


const createLand = ()=>{
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

export {SignupReq,loginReq,GetItems ,OTPReq,SaveProfileOwner, NearbyCites,DistinctCities , createLand , editLand , deleteLand , rentedLands , rentedUsers};
