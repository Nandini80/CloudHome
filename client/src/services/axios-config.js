import axios from "axios";

let baseURL = "http://localhost:3000";

const publicReq  = axios.create({
    baseURL,
});

const privateReq = axios.create({
    baseURL,
});

//interceptors 
privateReq.interceptors.request.use((config)=>{
    const token  = localStorage.getItem("token");
    if(token)
    {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export {privateReq};
export default publicReq;