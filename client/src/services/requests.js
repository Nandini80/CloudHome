import publicReq from "./axios-config";

const SignupReq =(data)=>
{
    return publicReq.post("/auth/signup",data);
};

const Login =(data)=>
{
    return publicReq.post("/auth/login",data);
};

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

export {SignupReq,Login , nearbyLands , createLand , editLand , deleteLand , rentedLands , rentedUsers};