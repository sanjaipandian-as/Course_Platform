import axios from 'axios';

// API base URL from environment variable
const API_URL = import.meta.env.VITE_API_URL || 'https://course-platform-r6nb.onrender.com/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * API Service Functions
 */

// Get all courses
export const getAllCourses = async () => {
  try {
    const response = await api.get('/courses');
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Get course by slug
export const getCourseBySlug = async (slug) => {
  try {
    const response = await api.get(`/courses/${slug}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Create enrollment and get Razorpay order
export const createEnrollment = async (enrollmentData) => {
  try {
    const response = await api.post('/enroll', enrollmentData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Verify payment
export const verifyPayment = async (paymentData) => {
  try {
    const response = await api.post('/payment/verify', paymentData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Get student details by ID
export const getStudentById = async (studentId) => {
  try {
    const response = await api.get(`/student/${studentId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Admin: Get all enrollments
export const getEnrollments = async (filters = {}) => {
  try {
    const response = await api.get('/admin/enrollments', {
      params: filters,
      auth: {
        username: 'admin',
        password: 'admin123',
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Admin: Get course statistics
export const getCourseStats = async () => {
  try {
    const response = await api.get('/admin/stats', {
      auth: {
        username: 'admin',
        password: 'admin123',
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export default api;
