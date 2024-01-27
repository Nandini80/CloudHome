const prisma = require('../config/prismaConfig');
const mailSender = require('../utils/mailSender');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const {passwordUpdated} = require('../mail/templates/passwordUpdate');

exports.resetPasswordToken = async(req , res)=>{
    try{

        const email = req.body.email;

        const user = await prisma.user.findUnique({
            where:{
                email,
            }
        });

        if(!user){
            return res.json({
                success: false,
                message: "Your email is not registered with us",
            });
        }

        const token = crypto.randomUUID();

        const expiresIn = new Date(Date.now() + 5*60*1000);
        const updatedDetails = await prisma.user.update({
            where:{
                email,
            },
            data:{
                token, 
                resetPasswordExpires: expiresIn,
            }
        });

        const url = `http://localhost:3000/update-password/${token}`;

        await mailSender(email , "Password Reset Link" , `Password Reset Link: ${url}`);

        return res.json({
            success:  true,
            message: "Email sent successfully",
            token,
        });

    } catch(error){
        return res.status(500).json({
            success: false,
            message: "Something went wrong while sending reset password mail",
            error: error.message,
        });
    }
}

exports.resetPassword = async(req , res)=>{
    try{

        const {password    , confirmPassword , token} = req.body;

        if(password !== confirmPassword){
            return res.json({
                success: false,
                message: "Passwords do not match",
            });
        }

        const userDetails = await prisma.user.findFirst({
            where:{
                token,
            }
        });

        if(!userDetails){
            return res.json({
                success: false,
                message: "Token invalid",
            });
        }

        if(userDetails.resetPasswordExpires < Date.now()){ 
            return res.status({
                success: false,
                message: "Token is expired , please regenerate your token"
            });
        }

        const hashedPassword = await bcrypt.hash(password , 10);

        await prisma.user.update({
            where:{
                token,
            },
            data:{
                password: hashedPassword,
            }
        });

        await mailSender(userDetails.email , "Password Updated Successfully" , passwordUpdated(userDetails.email , `Password updated successfully for ${userDetails.firstName} ${userDetails.lastName}`));

        return res.status(200).json({
            success: true,
            message: "Password reset successful"
        });

    } catch(error){
        return res.status(500).json({
            success: false,
            message: "Something went wrong while changing password in database",
            error: error.message,
        });
    }
}