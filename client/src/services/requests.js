import publicReq from "./axios-config";

const SignupReq =(data)=>
{
    return publicReq.post("/auth/signup",data);
};

const Login =(data)=>
{
    return publicReq.post("/auth/login",data);
};

export {SignupReq,Login};