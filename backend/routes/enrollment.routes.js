const express = require('express');
const router = express.Router();
const { createEnrollment } = require('../controllers/enrollmentController');

/**
 * Enrollment Routes
 * POST /api/enroll - Create enrollment and Razorpay order
 */
router.post('/enroll', createEnrollment);

module.exports = router;
