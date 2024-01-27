const prisma = require("../config/prismaConfig");
const { user } = require("../config/prismaConfig");

//update delete profile
exports.updateProfile = async(req, res)=>{
    try {
        const { id, image, address =null, state =null, pinCode = null, city=null } = req.body;
    
        if (!id) {
          return res.status(400).json({ error: 'User ID is required for updating the profile.' });
        }
        const userId = req.params.id;
        const updatedUser = await prisma.User.update({
          where: { id:userId },  
          data: {
            image,
            address,
            state,
            pinCode,
            city,
          },
        });
    
        res.status(200).json({
            success: true,
            message: "profile updated successfully",
            updatedUser,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
};

//add cronjob in future and feature to recover account deletion 
exports.deleteAccount = async(req, res)=>{
    try {
        const userId = req.params.id;
    
        const existingUser = await prisma.User.findUnique({
          where: { id: userId },
        });
    
        if (!existingUser) {
          return res.status(404).json({ error: 'User not found' });
        }
    
        // Delete the user
        const deletedUser = await prisma.user.delete({
          where: { id: userId },
        });
    
        res.status(200).json({
            success: true ,
            message: "Account deleted successfully",
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
};

//get all details
exports.getAllDetails = async(req, res)=>{
  try{

    const userId = req.user.id;

    if(!userId){
      return res.status(400).json({
        success: false,
        message: "User id is missing",
      });
    }

    userDetails = await prisma.user.findUnique({
      where:{
        id: userId,
      },
    });

    if(!userDetails){
      return res.status(404).json({
        success: false,
        message: "User not found for this id",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User details fetched successfully",
      data: userDetails,
    });

  } catch(error){
    return res.status(500).json({
      success: false,
      message: "Something went wrong while fetching user details",
      error: error.message
    })
  }
} 

//update profile picture 
exports.updateDisplayPicture = async (req, res) => {
  try {
    const displayPicture = req.files.imageFile
    const userId = req.user.id
    const image = await uploadImageToCloudinary(
      displayPicture,
      process.env.FOLDER_NAME,
      1000,
      1000
    )
    //delete already existing profile img from cloudinary

    const updatedProfile = await prisma.user.update({
      where:{
        id: userId,
      },
      data:{
        image: image.secure_url,
      }
    })

    res.send({
      success: true,
      message: `Image Updated successfully`,
      data: updatedProfile,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};