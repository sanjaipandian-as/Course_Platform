const Student = require('../models/Student');
const Course = require('../models/Course');
const Razorpay = require('razorpay');

/**
 * Enrollment Controller
 * Handles student enrollment and Razorpay order creation
 */

// Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

/**
 * POST /api/enroll
 * Create enrollment and generate Razorpay order
 */
exports.createEnrollment = async (req, res) => {
  try {
    const { name, email, phone, course, plan } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !course || !plan) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      });
    }

    // Find course and get pricing
    const courseData = await Course.findOne({ courseName: course });
    if (!courseData) {
      return res.status(404).json({
        success: false,
        message: 'Course not found',
      });
    }

    // Get plan pricing
    const planData = courseData.plans[plan];
    if (!planData) {
      return res.status(400).json({
        success: false,
        message: 'Invalid plan selected',
      });
    }

    const amount = planData.price;

    // Create Razorpay order
    const razorpayOrder = await razorpay.orders.create({
      amount: amount * 100, // Razorpay expects amount in paise
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
      notes: {
        course,
        plan,
        studentName: name,
      },
    });

    // Create student record with pending payment
    const student = new Student({
      name,
      email,
      phone,
      course,
      plan,
      amount,
      paymentStatus: 'pending',
      razorpayOrderId: razorpayOrder.id,
    });

    await student.save();

    res.status(201).json({
      success: true,
      message: 'Enrollment created successfully',
      data: {
        studentId: student._id,
        orderId: razorpayOrder.id,
        amount: razorpayOrder.amount,
        currency: razorpayOrder.currency,
        razorpayKeyId: process.env.RAZORPAY_KEY_ID,
      },
    });
  } catch (error) {
    console.error('Enrollment error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create enrollment',
      error: error.message,
    });
  }
};
