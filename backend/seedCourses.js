const mongoose = require('mongoose');
const Course = require('./models/Course');
require('dotenv').config();

/**
 * Seed script to populate database with sample courses
 * Run: node seedCourses.js
 */

const sampleCourses = [
  {
    courseName: 'SEO & AI for Beginners',
    slug: 'seo-ai-beginners',
    description: 'Master the art of search engine optimization combined with cutting-edge AI tools. Learn to automate content creation, perform deep keyword research, and drive organic growth using modern marketing automation techniques.',
    shortDescription: 'Master SEO and AI Content Tools for modern digital marketing',
    category: 'Marketing',
    thumbnail: '/images/seo-ai.jpg',
    demoVideoUrl: 'https://www.youtube.com/embed/demo-seo-ai',
    brochureUrl: '/brochures/seo-ai-brochure.pdf',
    syllabus: [
      {
        module: 'SEO Fundamentals',
        topics: ['Search Engine Basics', 'Keyword Research', 'On-Page SEO', 'Technical SEO'],
        duration: '2 weeks'
      },
      {
        module: 'AI Content Strategy',
        topics: ['AI Writing Tools', 'Prompt Engineering', 'Content Automation', 'Visual AI Tools'],
        duration: '2 weeks'
      },
      {
        module: 'Marketing Automation',
        topics: ['Email Marketing', 'Google Analytics 4', 'Campaign Reports', 'Growth Hacking'],
        duration: '2 weeks'
      },
      {
        module: 'Live Project & Portfolio',
        topics: ['Real Website SEO Campaign', 'AI Content Generation', 'Portfolio Building'],
        duration: '2 weeks'
      }
    ],
    plans: {
      Basic: {
        price: 2999,
        duration: '4 Weeks Training',
        features: [
          '4 Weeks Comprehensive Training',
          'Search Engine Fundamentals',
          'AI Content Basics',
          'Certificate of Completion',
          'Lifetime Access to Materials'
        ],
        internship: false,
        certificate: true
      },
      Pro: {
        price: 3999,
        duration: '8 Weeks (Training + Internship)',
        features: [
          'Everything in Basic',
          '4 Weeks Practical Internship',
          'Industry Performance Report',
          'Internship Completion Certificate',
          'Direct Mentor Support'
        ],
        internship: true,
        certificate: true
      },
      Elite: {
        price: 4999,
        duration: '8 Weeks (Full Support)',
        features: [
          'Everything in Pro',
          'Live SEO Campaign Access',
          'Experience Letter from Agency',
          'Portfolio Support',
          'AI Marketing Tool Stack Access',
          '1-on-1 Career Guidance'
        ],
        internship: true,
        certificate: true
      }
    },
    whatsappGroupLink: 'https://chat.whatsapp.com/seo-ai-group',
    isActive: true
  },
  {
    courseName: 'Full Stack Web Development',
    slug: 'full-stack-web-development',
    description: 'A comprehensive 24-week journey from zero to professional developer. Master the MERN stack, build scalable applications, and learn industry-standard deployment practices while working on real-world projects.',
    shortDescription: 'Zero to Pro: Complete MERN stack development bootcamp',
    category: 'Web Development',
    thumbnail: '/images/fullstack.jpg',
    demoVideoUrl: 'https://www.youtube.com/embed/demo-fullstack',
    brochureUrl: '/brochures/fullstack-brochure.pdf',
    syllabus: [
      {
        module: 'Frontend Foundation',
        topics: ['HTML5 & Modern CSS', 'JavaScript (ES6+)', 'Tailwind CSS', 'Responsive Layouts'],
        duration: '4 weeks'
      },
      {
        module: 'React Ecosystem',
        topics: ['React Hooks', 'Context API', 'React Router', 'State Management'],
        duration: '4 weeks'
      },
      {
        module: 'Backend & Databases',
        topics: ['Node.js', 'Express.js', 'MongoDB', 'JWT Authentication', 'REST APIs'],
        duration: '4 weeks'
      },
      {
        module: 'Advanced Full Stack',
        topics: ['Deployment', 'Blogging System', 'E-commerce Logic', 'Security Best Practices'],
        duration: '4 weeks'
      }
    ],
    plans: {
      Basic: {
        price: 5999,
        duration: '16 Weeks Training',
        features: [
          '16 Weeks Intensive Training',
          'Full Frontend & Backend Curriculum',
          'Blogging System Project',
          'Certificate of Completion',
          'Source Code Access'
        ],
        internship: false,
        certificate: true
      },
      Pro: {
        price: 7999,
        duration: '24 Weeks (Training + Internship)',
        features: [
          'Everything in Basic',
          '8 Weeks Industry Internship',
          'Capstone Project Guidance',
          'Internship Certificate',
          'Code Review Sessions'
        ],
        internship: true,
        certificate: true
      },
      Elite: {
        price: 9999,
        duration: '24 Weeks (Career Support)',
        features: [
          'Everything in Pro',
          'Live Enterprise Level Projects',
          'Experience Letter',
          'GitHub Profile Building',
          'Portfolio Development',
          'Interview Coaching',
          'Priority Job Support'
        ],
        internship: true,
        certificate: true
      }
    },
    whatsappGroupLink: 'https://chat.whatsapp.com/fullstack-group',
    isActive: true
  },
  {
    courseName: 'Backend APIs with Python (FastAPI)',
    slug: 'backend-apis-python-fastapi',
    description: 'Learn to build ultra-fast, modern backend systems using Python and FastAPI. Focus on high-performance microservices, secure authentication, Docker containerization, and cloud deployment strategies.',
    shortDescription: 'High-performance Python backends and microservices development',
    category: 'Backend',
    thumbnail: '/images/python-backend.jpg',
    demoVideoUrl: 'https://www.youtube.com/embed/demo-python-backend',
    brochureUrl: '/brochures/python-backend-brochure.pdf',
    syllabus: [
      {
        module: 'Python & FastAPI Core',
        topics: ['Advanced Python', 'FastAPI Fundamentals', 'Pydantic Models', 'Type Hinting'],
        duration: '3 weeks'
      },
      {
        module: 'Databases & Security',
        topics: ['PostgreSQL & SQLAlchemy', 'JWT Auth', 'OAuth2', 'API Security'],
        duration: '3 weeks'
      },
      {
        module: 'DevOps & Deployment',
        topics: ['Docker Containerization', 'Unit Testing', 'GitHub Actions', 'Cloud Deployment'],
        duration: '3 weeks'
      },
      {
        module: 'Microservices Architecture',
        topics: ['Service Communication', 'Redis Caching', 'API Gateway', 'Swagger Docs'],
        duration: '3 weeks'
      }
    ],
    plans: {
      Basic: {
        price: 4999,
        duration: '6 Weeks Training',
        features: [
          '6 Weeks Core Backend Training',
          'Python & FastAPI Deep Dive',
          'Secure API Building',
          'Certificate of Completion',
          'Swagger Documentation Guide'
        ],
        internship: false,
        certificate: true
      },
      Pro: {
        price: 5999,
        duration: '12 Weeks (Training + Internship)',
        features: [
          'Everything in Basic',
          '6 Weeks Specialized Internship',
          'API Performance Testing',
          'Internship Certificate',
          'Technical Assessment Prep'
        ],
        internship: true,
        certificate: true
      },
      Elite: {
        price: 7499,
        duration: '12 Weeks (Full Projects)',
        features: [
          'Everything in Pro',
          'Live API Microservices Projects',
          'Experience Letter',
          'Portfolio of Secure APIs',
          'Docker & Cloud Focus',
          'Resume building for Backend Roles'
        ],
        internship: true,
        certificate: true
      }
    },
    whatsappGroupLink: 'https://chat.whatsapp.com/python-backend-group',
    isActive: true
  }
];

const seedCourses = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing courses
    await Course.deleteMany({});
    console.log('🗑️  Cleared existing courses');

    // Insert sample courses
    await Course.insertMany(sampleCourses);
    console.log('✅ Sample courses inserted successfully');

    console.log('\n📚 Courses added:');
    sampleCourses.forEach((course, index) => {
      console.log(`${index + 1}. ${course.courseName} (${course.slug})`);
    });

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding courses:', error);
    process.exit(1);
  }
};

seedCourses();
