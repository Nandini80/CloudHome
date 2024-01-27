const { stat } = require('fs');
const prisma = require('../config/prismaConfig');
const {uploadImageToCloudinary} = require('../utils/imageUploader');
require('dotenv').config();

uploadAdditionalImages = async(additionalImages)=>{
    return additionalImages = await Promise.all(
        additionalImages.map(async (element) => {
          const img = await uploadImageToCloudinary(element, process.env.FOLDER_NAME);
          return img.secure_url;
        })
    );
}

//create  , delete , edit land ,add land image , getDetials for a land
//remove land after 30 days from array
exports.createLand = async(req , res)=>{
    try{

        const {landName , description , price  , appointmentRequired = 0 , access , state , landAddress} = req.body;
        const userId = req.user.id;
        
        const image = req.files.imageFile;
        const additionalImages = req.files.additionalImages //we need array of images then upload each image to cloudinary and store their secure_url in additional images array then pass that in create

        if(!userId || !landName || !description || !price || !access || !state || !landAddress){
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        mainImg = await uploadImageToCloudinary(image , process.env.FOLDER_NAME);

        additionalImagesUrl = await uploadAdditionalImages(additionalImages);

        land = await prisma.land.create({
            data:{
                landName ,
                ownedId: userId,
                description , 
                price: parseInt(price) , 
                appointmentRequired: Boolean(appointmentRequired) ,
                Access: access , 
                state , 
                landAddress,
                image: mainImg.secure_url,
                additionalImages: additionalImagesUrl,
            }
        });


        return res.status(200).json({
            success: true,
            message: "Created land successfully",
            land,
        });

    } catch(error){
        return res.status(500).json({
            success: false,
            message: "something went wrong while creating the land",
            error: error.message,
        });
    }
}

exports.editLand = async(req, res)=>{
    try{

        const {landId , landName , description , price  , appointmentRequired , access =0 , state , landAddress} = req.body;

        if(!landId){
            return res.status(400).json({
                success: false,
                message: "Land Id not found",
            });
        }

        if(!landName || !description || !price || !access || !state || !landAddress){
            return res.status(404).json({
                success: false,
                message: "All fields are required",
            });
        }

        updatedLand = await prisma.land.update({
            where:{
                id: landId
            },
            data:{
                landName,
                description,
                price: parseInt(price),
                appointmentRequired: Boolean(appointmentRequired),
                Access: access,
                state,
                landAddress,
            }
        });

        if(!updatedLand){
            return res.status(404).json({
                success: false,
                message: `Land not found for land id ${landId}`,
            });
        }

        res.status(200).json({
            success: true,
            message: "Land updated successfully",
            updatedLand: updatedLand,
        });

    } catch(error){
        return res.status(500).json({
            success: false,
            message: "something went wrong while updating the land",
            error: error.message,
        });
    }
}

exports.deleteLand = async(req, res)=>{
    try{

        const {landId}  =req.body;

        if(!landId){
            return res.status(400).json({
                success: false,
                message: "Land Id not found",
            });
        }

        deletedLand = await prisma.land.delete({
            where:{
                id: landId,
            }
        });

        if(!deletedLand){
            return res.status(404).json({
                success: false,
                message: `land not found for land id: ${landId}`
            });
        }

        res.status(200).json({
            success: true,
            message: "Land deleted successfully",
        });

    } catch(error){

        return res.status(500).json({
            success: false,
            message: "something went wrong while deleting the land",
            error: error.message,
        });

    }
}

exports.LandDetails = async(req , res)=>{
    try{

        const {landId} = req.body;

        if(!landId){
            return res.status(400).json({
                success: false,
                message: "Land Id not found",
            });
        }

        landDetails = await prisma.land.findUnique({
            where:{
                id: landId,
            },
            include:{
                owner: true,
            }
        });

        if(!landDetails){
            return res.status(404).json({
                success: false,
                message: `Land details not found for land id: ${landId}`,
            });
        }

        return res.status(200).json({
            success: true ,
            message: "All details fetched successfully for a land",
            landDetails,
        });

    } catch(error){
        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching details of a land",
            error: error.message,
        });
    }
}

//add a secruity check to refund money to users if removing land later

//update land img
