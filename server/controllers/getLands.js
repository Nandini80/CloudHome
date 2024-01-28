const prisma = require("../config/prismaConfig");

//getlands nearby
exports.nearbyLand = async(req, res)=>{
    try{
        const userId = req.user.id;

        if(!userId){
            return res.status(400).json({
                success: false,
                message: "User id is missing",
            });
        }

        const userDetails = prisma.user.findUnique({
            where:{
                id: userId,
            }
        });

        if(!userDetails){
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        const nearbyLands = prisma.land.findMany({
            where:{
                state: userDetails.state,
            }
        });

        if(!nearbyLands){
            return res.status(404).json({
                success: false,
                message: "Lands not found for this region",
            });
        }
        
        return res.status(200).json({
            success: true,
            message: "Successfully fetched nearby lands",
            nearbyLands,
        });

    } catch(error){
        return res.status(500).json({
            success: true , 
            message: "Something went wrong while fetching nearby lands",
            error: error.message,
        });
    }
}

//getallrentedlands
exports.rentedLands = async(req, res)=>{
    try{

        const userId = req.user.id;

        if(!userId){
            return res.status(400).json({
                success: false,
                message: "User id is missing",
            });
        }

        const userDetails = await prisma.user.findUnique({
            where:{
                id: userId,
            }
        });

        if(!userDetails){
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        return res.status(200).json({
            success: true , 
            message: "Rented lands fetched successfully",
            lands: userDetails.landsRented,
        });

    } catch(error){
        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching rented lands",
            error: error.message
        })
    }
} 

//getAllUsers who has rented -- > add in arr when payment done
//for land owner showthem who has rented land
exports.getRentedUsers = async(req, res)=>{
    try{

        const {landId} = req.body;

        if(!landId){
            return res.status(400).json({
                success: false,
                message: "Land id is missing",
            });
        }

        const landDetails  = await prisma.land.findUnique({
            where:{
                id: landId,
            },
            include:{
                users:true,
            }
        });
        console.log(landDetails);
        landDetails.rentedUsers.password = undefined;

        if(!landDetails){
            return res.status(400).json({
                success: false,
                message: `Not able to find land for id ${landId}`,
            });
        }

        return res.status(200).json({
            success: true , 
            message: "Fetched land renters",
            landRenters: landDetails.rentedUsers,
        });

    } catch(error){
        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching rented users",
            error: error.message,
        })
    }
}

exports.getLandsByState = async(req, res)=>{
    try{

        const {state} = req.body;

        if(!state){
            return res.status(400).json({
                success: false,
                message: "Please enter state",
            });
        }

        landDetails  =await prisma.land.findMany({
            where:{
                state,
            },
        });

        if(!landDetails){
            return res.status(404).json({
                success: false,
                message: "Lands not found for this state",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Lands successfully fetched on basis of states",
            landsByState: landDetails,
        });

    } catch(error){
        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching lands on basis of states",
            error: error.message,
        })
    }
}

exports.getLandsByCity = async(req, res)=>{
    try{
        const {city} = req.body;

        if(!city){
            return res.status(400).json({
                success: false,
                message: "Please enter city",
            });
        }

        landDetails  =await prisma.land.findMany({
            where:{
                city,
            },
        });

        if(!landDetails){
            return res.status(404).json({
                success: false,
                message: "Lands not found for this city",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Lands successfully fetched on basis of cities",
            landsByState: landDetails,
        });

    } catch(error){
        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching lands on basis of cities",
            error: error.message,
        });
    }
}

exports.ownerCities = async(req, res)=>{
    try{

        const ownerDetails = await prisma.user.findMany({
            where:{
                accountType: "Owner",
            }
        });

        if(!ownerDetails){
            return res.status(404).json({
                success: false,
                message: "No registered owners",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Successfully fetched all owner's cities",
            data: ownerDetails,
        });


    } catch(error){
        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching owner cities",
            error: error.message,
        });
    }
}