const express = require('express');
const router = express.Router();
const { verifyPayment } = require('../controllers/paymentController');

/**
 * Payment Routes
 * POST /api/payment/verify - Verify Razorpay payment signature
 */
router.post('/verify', verifyPayment);

module.exports = router;
