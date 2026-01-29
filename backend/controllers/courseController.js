const Course = require('../models/Course');
const Student = require('../models/Student');

/**
 * Course Controller
 * Handles course and student data retrieval
 */

/**
 * GET /api/courses
 * Fetch all active courses
 */
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({ isActive: true }).select('-__v');

    res.status(200).json({
      success: true,
      count: courses.length,
      data: courses,
    });
  } catch (error) {
    console.error('Get courses error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch courses',
      error: error.message,
    });
  }
};

/**
 * GET /api/courses/:slug
 * Fetch single course by slug
 */
exports.getCourseBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const course = await Course.findOne({ slug, isActive: true }).select('-__v');

    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found',
      });
    }

    res.status(200).json({
      success: true,
      data: course,
    });
  } catch (error) {
    console.error('Get course error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch course',
      error: error.message,
    });
  }
};

/**
 * GET /api/student/:id
 * Fetch student enrollment details
 */
exports.getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id).select('-__v');

    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found',
      });
    }

    res.status(200).json({
      success: true,
      data: student,
    });
  } catch (error) {
    console.error('Get student error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch student details',
      error: error.message,
    });
  }
};
