const bcrypt = require('bcrypt');
const prisma = require('../config/prismaConfig');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const mailSender = require('../utils/mailSender');
const otpGenerator = require('otp-generator');
const emailVerificationTemplate = require('../mail/templates/emailVerificationTemplate');
const {passwordUpdated} = require('../mail/templates/passwordUpdate');

exports.sendotp = async(req, res)=>{
    try{

        const {email} = req.body;
        console.log(email);

        const checkUserPresent = await prisma.user.findUnique({
            where:{
                email,
            }
        });

        if(checkUserPresent){
            return res.status(401).json({
                success: false,
                message: "User already registered",
            });
        }

        var otp  = otpGenerator.generate(6 , {
            lowerCaseAlphabets: false,
            upperCaseAlphabets: false,
            specialChars: false,
        });

        mailResponse = await mailSender(email , "Verification mail from Cloud Home" , emailVerificationTemplate(otp));
        console.log("Mail sent successfully" , mailResponse);
    
        otpBody = await prisma.otp.create({
            data:{
                email,
                otp,
            }
        });



        res.status(200).json({
            success: true,
            message: "OTP sent successfully",
            otp,
        });

    } catch(error){
        return res.status(500).json({
            success: false,
            message: "Something went wrong while sending otp",
            error: error.message,
        });
    }
}
//validate phone Number by sending otp 
//convert state name to camel case so that we can get nearby locations and locations in each state
exports.signup = async(req, res)=>{
    try{
        //send otp on mail before creating in DB , prisma dont have any middleware like pre and post in mongoose 
        const {firstName , lastName , email , phoneNumber  =null, password , confirmPassword , otp , accountType , address =null , city =null , state =null , pinCode =null} = req.body;
        //*****add validation in payments if state address etc not found first enter those fields******
        if(!firstName || !lastName || !email || !password || !accountType || !confirmPassword || !otp){
            return res.status(401).json({
                success: false,
                message: "All fields are required",
            });
        }

        if(password != confirmPassword){
            return res.status(401).json({
                success: false,
                message: "Passwords do not match",
            });
        }

        const exisitingUser = await prisma.user.findUnique({
            where:{
                email,
            }
        });
        
        if(exisitingUser){
            return res.status(400).json({
                success: false,
                message: "User already exists",
            });
        }

        const recentOtp = await prisma.otp.findFirst({
            where:{
                otp
            },
            orderBy:{
                createdAt: "desc"
            },
        });

        if(!recentOtp){
            return res.status(401).json({
                success: false,
                message: "OTP is invalid",
            });
        }

        if(recentOtp.otp !== otp){
            return res.status(400).json({
                success: false,
                message: "Wrong OTP",
            });
        }

        const hashedPassword = await bcrypt.hash(password , 10);

        const createUser = await prisma.user.create({
            data:{
                firstName,
                lastName,
                email,
                password: hashedPassword,
                phoneNumber,
                image: `https://api.dicebear.com/7.x/initials/svg?seed=${firstName}`,
                accountType,
                address,
                state,
                city,
                pinCode,
            }
        });

        return res.status(200).json({
            success: true , 
            message: "Registered successfully",
            createUser,
        });

    } catch(error){
        return res.status(500).json({
            success: false,
            message:"Something went wrong while signing up",
            error: error.message,
        });
    }
}

exports.login = async(req , res)=>{
    try{

        const {email , password} = req.body;
        console.log(email +" "+ password);
        if(!email || !password){
            return res.status(401).json({
                success: false,
                message: "All fields are required",
            });
        }

        userFound = await prisma.user.findUnique({
            where:{
                email,
            }
        });

        if(!userFound){
            return res.status(401).json({
                success: false,
                message: "You are not registered , please sign up",
            });
        }

         if(await bcrypt.compare(password , userFound.password)){
            const payload = {
                email: userFound.email,
                id: userFound.id,
                accountType: userFound.accountType,
            }

            const token = jwt.sign(payload , process.env.JWT_SECRET , {
                expiresIn: '24h',
            });
            
            userFound.token = token;
            userFound.password = undefined;

            const options  = {
                httpOnly: true,
                expires: new Date(Date.now() + 1*24*60*60*100),
            }

            res.cookie("token" , token , options).status(200).json({
                success: true,
                token ,
                userFound , 
                message: "Logged in successfully",
            });
         }
         else{
            return res.status(401).json({
                success: false,
                message: "Password is incorrect",
            });
         }

    } catch(error){
        return res.status(500).json({
            success: false,
            message: "Something went wrong while logging in",
            error: error.message,
        });
    }
}

//change pass
exports.changePassword = async(req, res)=>{
    try{

        const {email , password  , newPassword , confirmPassword} = req.body;

        const user =await prisma.user.findUnique({
            where:{
                email,
            }
        });

        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        const isSame = await bcrypt.compare(password , user.password);

        if(!isSame){
            return res.status(401).json({
                success: false,
                message: " Old Password entered is incorrect",
            });
        }

        if(newPassword !== confirmPassword){
            return res.status(400).json({
                success: false,
                message: "Passwords do not match",
            });
        }

        hashedPassword = await bcrypt.hash(newPassword , 10);

        await prisma.user.update({
            where:{
                id: user.id,
            },
            data:{
                password: hashedPassword,
            },
        });

        mailSender(email , "Password Updated Successfully" , passwordUpdated(email , `Password updated successfully for ${user.firstName} ${user.lastName}`));

        return res.status(200).json({
            success: true,
            message: "Password changed successfully",
        });
        
    } catch(error){
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while changing the password. Please try again.",
            error: error.message,
        });
    }
}