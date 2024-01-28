require('dotenv').config();
const jwt = require('jsonwebtoken');

exports.auth = async(req, res , next)=>{
    try{
        console.log("in the auth"); 
        const token = req.header("Authorization").replace("Bearer " , "");

        if(!token){
            return res.status(401).json({
                success: false,
                message: "Token is missing",
            });
        }

        try{
            const decode = jwt.verify(token , process.env.JWT_SECRET);
            console.log(decode);
            req.user = decode;
        } catch(error){
            return res.status(401).json({
                success: false,
                message: "Something went wrong while verifying the token",
                error: error.message,
            });
        }      
        
        next();

    } catch(error){
        return res.status(500).json({
            success: false,
            message: "Something went wrong while validating token",
            error: error.message,
        });
    }
}

exports.isCustomer = async(req, res , next)=>{
    try{
        if(req.user.accountType !== "Customer"){
            return res.status(401).json({
                success:false,
                message: "This is a protected route for customers only",
            })
        }
        next();

    } catch(error){
        return res.status(500).json({
            success: false,
            message: "User role cannot be verified , please try again",
        });
    }
}

exports.isOwner = async(req, res , next)=>{
    try{
        if(req.user.accountType !== "Owner"){
            return res.status(401).json({
                success:false,
                message: "This is a protected route for Owners only",
            })
        }
        next();

    } catch(error){
        return res.status(500).json({
            success: false,
            message: "User role cannot be verified , please try again",
        });
    }
}

exports.isAdmin = async(req, res , next)=>{
    try{
        if(req.user.accountType !== "Admin"){
            return res.status(401).json({
                success:false,
                message: "This is a protected route for admin only",
            })
        }
        next();

    } catch(error){
        return res.status(500).json({
            success: false,
            message: "User role cannot be verified , please try again",
        });
    }
}

