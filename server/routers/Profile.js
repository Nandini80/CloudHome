const express = require('express');
const router  = express.Router();

const {getAllDetails , updateProfile , deleteAccount ,updateDisplayPicture} = require('../controllers/Profile');
const {auth} = require('../middlewares/auth');

router.get('/profileDetails',auth , getAllDetails);
router.put('/updateProfile' , updateProfile);
router.delete('/deleteProfile' , deleteAccount);
router.put('/updateProfilePicture' , updateDisplayPicture);

module.exports = router;