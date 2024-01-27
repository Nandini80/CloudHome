const express = require('express');
const router  = express.Router();

const {createMessage , getAllChats , deleteMessage , editMessage  , fetchMessages} = require('../controllers/Message');
const { auth } = require('../middlewares/auth');

router.post('/createMessage' ,auth ,  createMessage);
router.get('/getAllChats',auth , getAllChats);
router.delete('/deleteMessage' ,auth ,  deleteMessage);
router.put('/editMessage' ,auth, editMessage);
router.get('/allMessages' ,auth, fetchMessages);

module.exports = router;