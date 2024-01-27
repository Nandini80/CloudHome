const express = require("express")
const router = express.Router()

const {createReview , editReview , deleteReview , fetchAllReviews , fetchReviewsForLand , getAvgRating} = require('../controllers/RatingsAndReviews');
const { isCustomer , auth } = require("../middlewares/auth");

router.post('/createReview' ,auth , isCustomer ,createReview);
router.put('/editReview' , auth , isCustomer ,editReview);
router.delete('/deleteReview' ,auth , isCustomer , deleteReview);
router.get('/allReviews'  , fetchAllReviews);
router.get('/reviewsForLand' , fetchReviewsForLand);
router.get('/avgRating' , getAvgRating);

module.exports = router;