const crypto = require('crypto');
const Student = require('../models/Student');
const Course = require('../models/Course');
const { sendEnrollmentConfirmation } = require('../utils/emailService');

/**
 * Payment Controller
 * Handles Razorpay payment verification and post-payment actions
 */

/**
 * POST /api/payment/verify
 * Verify Razorpay payment signature and update enrollment
 */
exports.verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      studentId,
    } = req.body;

    // Validate required fields
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !studentId) {
      return res.status(400).json({
        success: false,
        message: 'Missing payment verification data',
      });
    }

    // Find student record
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student record not found',
      });
    }

    // Verify payment signature
    const generatedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    if (generatedSignature !== razorpay_signature) {
      // Payment verification failed
      student.paymentStatus = 'failed';
      await student.save();

      return res.status(400).json({
        success: false,
        message: 'Payment verification failed',
      });
    }

    // Payment verified successfully
    // Get course WhatsApp link
    const course = await Course.findOne({ courseName: student.course });
    const whatsappGroupLink = course ? course.whatsappGroupLink : null;

    // Generate enrollment ID
    student.generateEnrollmentId();
    student.paymentStatus = 'success';
    student.paymentId = razorpay_payment_id;
    student.razorpaySignature = razorpay_signature;
    student.whatsappGroupLink = whatsappGroupLink;

    await student.save();

    // Send confirmation email (async, don't wait)
    sendEnrollmentConfirmation({
      name: student.name,
      email: student.email,
      course: student.course,
      plan: student.plan,
      amount: student.amount,
      paymentId: student.paymentId,
      enrollmentId: student.enrollmentId,
      whatsappGroupLink: student.whatsappGroupLink,
    }).catch(err => console.error('Email sending error:', err));

    res.status(200).json({
      success: true,
      message: 'Payment verified successfully',
      data: {
        enrollmentId: student.enrollmentId,
        studentId: student._id,
        course: student.course,
        plan: student.plan,
        amount: student.amount,
        whatsappGroupLink: student.whatsappGroupLink,
      },
    });
  } catch (error) {
    console.error('Payment verification error:', error);
    res.status(500).json({
      success: false,
      message: 'Payment verification failed',
      error: error.message,
    });
  }
};
