const express = require('express');
const router  = express.Router();

const {getAllDetails , updateProfile , deleteAccount ,updateDisplayPicture} = require('../controllers/Profile');
const {auth} = require('../middlewares/auth');

router.post('/profileDetails', getAllDetails);
router.put('/updateProfile' , updateProfile);
router.delete('/deleteProfile' , deleteAccount);
router.put('/updateProfilePicture' , updateDisplayPicture);

module.exports = router;