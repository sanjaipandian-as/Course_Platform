const mongoose = require('mongoose');

/**
 * Course Schema
 * Stores course information, plans, pricing, and WhatsApp group links
 */
const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: [true, 'Course name is required'],
    unique: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  shortDescription: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    default: '/images/default-course.jpg'
  },
  demoVideoUrl: {
    type: String,
    default: null
  },
  brochureUrl: {
    type: String,
    default: null
  },
  syllabus: [{
    module: String,
    topics: [String],
    duration: String
  }],
  plans: {
    Basic: {
      price: Number,
      duration: String,
      features: [String],
      internship: Boolean,
      certificate: Boolean
    },
    Pro: {
      price: Number,
      duration: String,
      features: [String],
      internship: Boolean,
      certificate: Boolean
    },
    Elite: {
      price: Number,
      duration: String,
      features: [String],
      internship: Boolean,
      certificate: Boolean
    }
  },
  whatsappGroupLink: {
    type: String,
    required: [true, 'WhatsApp group link is required']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Course', courseSchema);
