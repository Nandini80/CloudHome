const prisma = require('../config/prismaConfig');

exports.createReview = async(req , res)=>{
    try{

        const {stars , review , landId} = req.body;
        const userId = req.user.id;

        if(!stars || !review){
            return res.status(400).json({
                success: false,
                message: "All fields are requried",
            });
        }

        existsReview = await prisma.RatingsAndReviews.findUnique({
            where:{
                userId,
                landId,
            }
        });

        if(existsReview){
            return res.status(400).json({
                success: false,
                message: "Can't create new review , review already exists"
            })
        }

        createReview = await prisma.RatingsAndReviews.create({
            data:{
                userId,
                stars,
                review,
                landId,
            }
        });

        return res.status(200).json({
            success: true,
            message: "Review created successfully",
        });

    } catch(error){
        return res.status(500).json({
            success: false,
            message: "Something went wrong while creating a review",
            error: error.message,
        });
    }
}

exports.editReview = async(req, res)=>{
    try{

        const {reviewId , stars , review} = req.body;

        if(!stars || !review){
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        if(!reviewId){
            return res.status(400).json({
                success: false,
                message: "Review id not found",
            });
        }

        const updatedReview = await prisma.RatingsAndReviews.update({
            where:{
                id: reviewId,
            },
            data:{
                stars,
                review,
            }
        });

        if(!updatedReview){
            return res.status(404).json({
                success: false,
                message: `Can't find review for id : ${reviewId}`,
            });
        }

        return res.status(200).json({
            success: true,
            message: "Review updated successfully",
            updatedReview,
        });

    } catch(error){
        return res.status(500).json({
            success: false,
            message: "Something went wrong while editing review",
            error: error.message,
        });
    }
}

exports.deleteReview = async(req, res)=>{
    try{

        const {reviewId} = req.body;

        if(!reviewId){
            return res.status(400).json({
                success: false,
                message: "Review id not found",
            });
        }

        const deletedReview = await prisma.RatingsAndReviews.delete({
            where:{
                id: reviewId,
            }
        });

        if(!deletedReview){
            return res.status(400).json({

                success: false,
                message: `Not able to find review for id: ${reviewId}`,
            });
        }

        res.status(200).json({
            success: true,
            message: "Review deleted successfully",
        });

    } catch(error){
        return res.status(500).json({
            success: false,
            message: "something went wrong while deleting the review",
            error: error.message,
        });
    }
}

//for a particular land
exports.fetchReviewsForLand = async(req , res)=>{
    try{

        const {landId} = req.body;

        if(!landId){
            return res.status(400).json({
                success: false,
                message: "Land id not found",
            });
        }

        reviewForALand = await prisma.RatingsAndReviews.findMany({
            where:{
                landId,
            }
        });

        if(!reviewForALand){
            return res.status(404).json({
                success: false ,
                message: `Reviews not found for land id: ${landId}`,
            });
        }

        return res.status(200).json({
            success: true,
            message: "Reviews successfully fetched for a land",
            reviews: reviewForALand,
        });

    } catch(error){

        return res.status(500).json({
            success: false,
            message: "something went wrong while fetching reviews for a land",
            error: error.message,
        });

    }
}

//to show on home testimonials section
exports.fetchAllReviews = async(req, res)=>{
    try{
        
        allReviews = await prisma.RatingsAndReviews.findMany({
            orderBy:{
                stars: "desc",
            }
        });

        return res.status(200).json({
            success: true , 
            message: "All reviews fetched successfully",
            Reviews: allReviews
        })

    } catch(error){
        return res.status(500).json({
            success: false,
            message: "something went wrong while fetching reviews",
            error: error.message,
        });
    }
}

//for a particular land
exports.getAvgRating = async(req, res)=>{
    try{

        const {landId} = req.body;

        if(!landId){
            return res.status(400).json({
                success: false,
                message: "Land id not found",
            });
        }

        const avg = prisma.RatingsAndReviews.aggregate({
            where:{
                landId,
            },
            _avg:{
                stars: true,
            }
        });

        if(!avg){
            return res.status(404).json({
                success: false,
                message: `Ratings not found for landId L ${landId}`,
            });
        }

        return res.status(200).json({
            success: true,
            message: "Average rating fetched successfully for a land",
            avgRating: avg,
        });

    } catch(error){
        return res.status(500).json({
            success: false,
            message: "something went wrong while getting the average rating",
            error: error.message,
        });
    }
}