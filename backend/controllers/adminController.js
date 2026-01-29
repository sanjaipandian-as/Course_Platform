const Student = require('../models/Student');
const Course = require('../models/Course');

/**
 * Admin Controller
 * Handles admin operations like viewing enrollments and exporting data
 */

/**
 * GET /api/admin/enrollments
 * Get all enrollments with optional filters
 */
exports.getAllEnrollments = async (req, res) => {
  try {
    const { course, paymentStatus, plan } = req.query;
    
    // Build filter query
    const filter = {};
    if (course) filter.course = course;
    if (paymentStatus) filter.paymentStatus = paymentStatus;
    if (plan) filter.plan = plan;

    const enrollments = await Student.find(filter)
      .sort({ createdAt: -1 })
      .select('-__v');

    // Calculate statistics
    const stats = {
      total: enrollments.length,
      successful: enrollments.filter(e => e.paymentStatus === 'success').length,
      pending: enrollments.filter(e => e.paymentStatus === 'pending').length,
      failed: enrollments.filter(e => e.paymentStatus === 'failed').length,
      totalRevenue: enrollments
        .filter(e => e.paymentStatus === 'success')
        .reduce((sum, e) => sum + e.amount, 0),
    };

    res.status(200).json({
      success: true,
      stats,
      count: enrollments.length,
      data: enrollments,
    });
  } catch (error) {
    console.error('Get enrollments error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch enrollments',
      error: error.message,
    });
  }
};

/**
 * GET /api/admin/enrollments/export
 * Export enrollments as CSV
 */
exports.exportEnrollments = async (req, res) => {
  try {
    const enrollments = await Student.find({ paymentStatus: 'success' })
      .sort({ createdAt: -1 })
      .select('-__v -razorpaySignature');

    // Create CSV content
    const headers = [
      'Enrollment ID',
      'Name',
      'Email',
      'Phone',
      'Course',
      'Plan',
      'Amount',
      'Payment ID',
      'Enrollment Date',
    ];

    const rows = enrollments.map(e => [
      e.enrollmentId || 'N/A',
      e.name,
      e.email,
      e.phone,
      e.course,
      e.plan,
      e.amount,
      e.paymentId || 'N/A',
      new Date(e.createdAt).toLocaleDateString(),
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(',')),
    ].join('\n');

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=enrollments.csv');
    res.status(200).send(csvContent);
  } catch (error) {
    console.error('Export error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to export enrollments',
      error: error.message,
    });
  }
};

/**
 * GET /api/admin/stats
 * Get course-wise enrollment statistics
 */
exports.getCourseStats = async (req, res) => {
  try {
    const courses = await Course.find({ isActive: true });
    
    const stats = await Promise.all(
      courses.map(async (course) => {
        const enrollments = await Student.find({
          course: course.courseName,
          paymentStatus: 'success',
        });

        const planBreakdown = {
          Basic: enrollments.filter(e => e.plan === 'Basic').length,
          Pro: enrollments.filter(e => e.plan === 'Pro').length,
          Elite: enrollments.filter(e => e.plan === 'Elite').length,
        };

        return {
          courseName: course.courseName,
          totalEnrollments: enrollments.length,
          planBreakdown,
          totalRevenue: enrollments.reduce((sum, e) => sum + e.amount, 0),
        };
      })
    );

    res.status(200).json({
      success: true,
      data: stats,
    });
  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch statistics',
      error: error.message,
    });
  }
};
