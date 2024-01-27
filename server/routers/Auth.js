const express = require("express")
const router = express.Router()

const {login , signup , sendotp , changePassword} = require('../controllers/Auth');
const {resetPassword , resetPasswordToken} = require('../controllers/resetPassword');

const {auth ,isAdmin , isCustomer , isOwner} = require('../middlewares/auth');
const { message } = require("../config/prismaConfig");

//can we return if token is missing then will login work with auth?
router.post('/login' ,  login); //add auth middleware
router.post('/signup' , signup);
router.post('/sendotp' , sendotp);
router.post('/changePassword' ,changePassword);

router.post("/reset-password-token", resetPasswordToken);
router.post("/reset-password", resetPassword);

router.get('/isCustomer' , auth , isCustomer , (req , res)=>{
    res.send({
        success: true ,
        message: "Customer route",
    });
});

router.get('/isOwner' , auth , isOwner , (req , res)=>{
    res.send({
        success: true ,
        message: "Owner route",
    });
});

router.get('/isAdmin' , auth , isAdmin , (req,res)=>{
    res.send({
        success: true ,
        message: "Admin route",
    });
});

module.exports = router;