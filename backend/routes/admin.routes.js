const express = require('express');
const router = express.Router();
const { getAllEnrollments, exportEnrollments, getCourseStats } = require('../controllers/adminController');

/**
 * Admin Routes
 * Basic authentication middleware (replace with proper auth in production)
 */
const basicAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return res.status(401).json({
      success: false,
      message: 'Authentication required',
    });
  }

  const base64Credentials = authHeader.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
  const [username, password] = credentials.split(':');

  if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
    next();
  } else {
    res.status(401).json({
      success: false,
      message: 'Invalid credentials',
    });
  }
};

/**
 * Admin Routes (Protected)
 * GET /api/admin/enrollments - Get all enrollments
 * GET /api/admin/enrollments/export - Export enrollments as CSV
 * GET /api/admin/stats - Get course-wise statistics
 */
router.get('/enrollments', basicAuth, getAllEnrollments);
router.get('/enrollments/export', basicAuth, exportEnrollments);
router.get('/stats', basicAuth, getCourseStats);

module.exports = router;
