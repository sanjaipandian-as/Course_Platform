const express = require('express');
const router = express.Router();
const { getAllCourses, getCourseBySlug, getStudentById } = require('../controllers/courseController');

/**
 * Course Routes
 * GET /api/courses - Get all courses
 * GET /api/courses/:slug - Get course by slug
 * GET /api/student/:id - Get student enrollment details
 */
router.get('/courses', getAllCourses);
router.get('/courses/:slug', getCourseBySlug);
router.get('/student/:id', getStudentById);

module.exports = router;
