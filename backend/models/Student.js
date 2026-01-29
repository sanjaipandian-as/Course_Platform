const mongoose = require('mongoose');

/**
 * Student Schema
 * Stores student enrollment and payment information
 */
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    match: [/^[0-9]{10}$/, 'Please enter a valid 10-digit phone number']
  },
  course: {
    type: String,
    required: [true, 'Course is required']
  },
  plan: {
    type: String,
    required: [true, 'Plan is required'],
    enum: ['Basic', 'Pro', 'Elite']
  },
  amount: {
    type: Number,
    required: [true, 'Amount is required']
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'success', 'failed'],
    default: 'pending'
  },
  paymentId: {
    type: String,
    default: null
  },
  razorpayOrderId: {
    type: String,
    default: null
  },
  razorpaySignature: {
    type: String,
    default: null
  },
  enrollmentId: {
    type: String,
    unique: true,
    sparse: true // Allows null values while maintaining uniqueness
  },
  whatsappGroupLink: {
    type: String,
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Generate enrollment ID after successful payment
studentSchema.methods.generateEnrollmentId = function() {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  this.enrollmentId = `ENR-${timestamp}-${random}`;
  return this.enrollmentId;
};

module.exports = mongoose.model('Student', studentSchema);
