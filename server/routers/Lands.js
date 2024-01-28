const express = require('express');
const router = express.Router();

const {createLand , deleteLand , editLand ,LandDetails} = require('../controllers/Lands');
const {nearbyLand , rentedLands , getRentedUsers} = require('../controllers/getLands');
const { auth ,isOwner , isCustomer} = require('../middlewares/auth');

router.post('/createLand'  ,  createLand);
router.delete('/deleteLand' , auth , isOwner , deleteLand);
router.put('/editLand' ,auth , isOwner ,  editLand);
router.get('/landDetails' , auth , LandDetails);
router.get('/nearbyLands' ,auth ,  nearbyLand);
router.get('/rentedLands' , auth , isCustomer , rentedLands);
router.get('/getRentedUsers' ,auth , isOwner, getRentedUsers);

module.exports = router;