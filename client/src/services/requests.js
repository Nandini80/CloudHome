import publicReq from "./axios-config";

const SignupReq =(data)=>
{
    return publicReq.post("/api/v1/auth/signup",data);
};

const Login =(data)=>
{
    return publicReq.post("/api/v1/auth/login",data);
};

const OTPReq=(data)=>{
    return publicReq.post("/api/v1/auth/sendotp",data);
}

export {SignupReq,Login,OTPReq};