import publicReq from "./axios-config";

const Signup =(data)=>
{
    return publicReq.post("/user/signup",data);
};

const Login =(data)=>
{
    return publicReq.post("/user/login",data);
};

export {Signup,Login};