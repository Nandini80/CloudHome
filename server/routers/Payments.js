const express =  require('express');
const router = express.Router();

const {capturePayment , verifySignature} = require('../controllers/Payments');
const {auth , isCustomer} = require('../middlewares/auth');

router.post('/capturePayment' , auth , isCustomer , capturePayment);
router.post('/verifySignature' , verifySignature);

module.exports = router;

