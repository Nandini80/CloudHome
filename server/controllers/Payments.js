const {instance} = require('../config/razorpay');
const prisma = require('../config/prismaConfig');
const mailSender = require('../utils/mailSender');
const landRentEmail = require("../mail/templates/landRentEmail");

exports.capturePayment = async(req ,res)=>{
    const {landId} = req.body;
    const userId = req.user.id;

    if(!landId){
        return res.json({
            success: false,
            message: "Please provide valid land Id",
        });
    }

    userDetails = await prisma.user.findUnique({
        where:{
            id: userId,
        }
    });

    if(userDetails.address == null || userDetails.city == null || userDetails.state == null){
        return res.status(400).json({
            success: false,
            message: "Please enter your state address and city first",
        });
    }

    let land;

    try{
        land  = await  prisma.land.findUnique({
            where:{
                id: landId,
            }
        });

        if(!land){
            return res.json({
                success: false,
                message: "Could not find the land",
            });
        }

        if(land.rentedUsers.includes(userId)){
            return res.status(200).json({
                success: false,
                message: "You have already rented the land",
            });
        }
    } catch(error){
        return res.status(500).json({
            success: true , 
            message: error.message,
        });
    }

    const amount  = land.price;
    const currency = "INR";

    const options = {
        amount: amount*100,
        currency,
        receipt: Math.random(Date.now()).toString(),
        notes: {
            landId,
            userId,
        }
    };

    try{
        const paymentResponse = await instance.orders.create(options);
        console.log(paymentResponse);

        return res.status(200).json({
            success: true,
            landName: land.landName,
            landDescription: land.description,
            thumbnail: land.image,
            orderId: paymentResponse.id,
            currency: paymentResponse.currency,
            amount: paymentResponse.amount
        });

    } catch(error){
        return res.json({
            success: false,
            message: "Could not initiate order",
        });
    }
};

exports.verifySignature = async(req, res)=>{
    const webhookSecret = '12345678';

    const signature = req.headers['x-razorpay-signature'];

    const shasum = crypto.createHmac("sha256" , webhookSecret);

    shasum.update(JSON.stringify(req.body));
    const digest  = shasum.digest("hex");

    if(signature === digest){
        console.log("Payment is Authorized");

        const {landId , userId} = req.body.payload.payment.entity.notes;
        
        try{
            const landRented = await prisma.user.update({
                where:{
                    id: userId,
                },
                data:{
                    landsRented:{
                        push: landId,
                    }
                }
            });

            if(!landRented){
                return res.status(500).json({
                    success: false,
                    message: "User not found"
                });
            }

            const userAdded = await prisma.land.update({
                where: {
                    id: landId,
                },
                data:{
                    rentedUsers:{
                        push: userId,
                    }
                }
            });

            if(!userAdded){
                return res.status(500).json({
                    success: false,
                    message: "Land not found",
                });
            }

            await mailSender(landRented.email , "Congratulations from Cloud Home" , landRentEmail(userAdded.landName , landRented.firstName));
            return res.status(200).json({
                success: true,
                message: "Signature Verified and Land Rented",
            });

        }  catch(error){
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
    else{
        return res.status(400).json({
            success: false,
            message: "Invalid request",
        });
    }
}

//to send payment to land owner direclty implement payouts later after completing required backend 
