const mongoose = require("mongoose");
const Course = require("./models/Course");
require("dotenv").config();

/**
 * Seed script to populate database with provided courses
 * Run: node seedCourses.js
 */

const sampleCourses = [
  {
    courseName: "SEO & AI for Beginners",
    slug: "seo-ai-beginners",
    description:
      "Master the art of search engine optimization combined with cutting-edge AI tools. Learn to automate content creation, perform deep keyword research, and drive organic growth using modern marketing automation techniques.",
    shortDescription:
      "Master SEO and AI Content Tools for modern digital marketing",
    category: "Marketing",
    thumbnail: "/images/seo-ai.jpg",
    demoVideoUrl: "https://www.youtube.com/embed/demo-seo-ai",
    brochureUrl: "/brochures/seo-ai-brochure.pdf",
    syllabus: [
      {
        module: "SEO Fundamentals",
        topics: [
          "Search Engine Basics",
          "Keyword Research",
          "On-Page SEO",
          "Technical SEO",
        ],
        duration: "2 weeks",
      },
      {
        module: "AI Content Strategy",
        topics: [
          "AI Writing Tools",
          "Prompt Engineering",
          "Content Automation",
          "Visual AI Tools",
        ],
        duration: "2 weeks",
      },
    ],
    plans: {
      Basic: {
        price: 2999,
        duration: "4 Weeks Training",
        features: ["Training", "Certificate of Completion"],
        internship: false,
        certificate: true,
      },
      Pro: {
        price: 3999,
        duration: "8 Weeks (Training + Internship)",
        features: ["Training", "Internship", "Certificate of Completion"],
        internship: true,
        certificate: true,
      },
      Elite: {
        price: 4999,
        duration: "12 Weeks (Full Support)",
        features: [
          "Training",
          "Internship",
          "Live Project",
          "Experience Letter",
          "Portfolio Support",
        ],
        internship: true,
        certificate: true,
      },
    },
    whatsappGroupLink: "https://chat.whatsapp.com/seo-ai-group",
    isActive: true,
  },
  {
    courseName: "Full Stack Web Development",
    slug: "full-stack-web-development",
    description:
      "A comprehensive journey from zero to professional developer. Master the MERN stack, build scalable applications, and learn industry-standard deployment practices while working on real-world projects.",
    shortDescription: "Complete MERN stack development bootcamp",
    category: "Web Development",
    thumbnail: "/images/fullstack.jpg",
    demoVideoUrl: "https://www.youtube.com/embed/demo-fullstack",
    brochureUrl: "/brochures/fullstack-brochure.pdf",
    syllabus: [
      {
        module: "Frontend Foundation",
        topics: [
          "HTML5 & Modern CSS",
          "JavaScript (ES6+)",
          "React Fundamentals",
        ],
        duration: "8 weeks",
      },
      {
        module: "Backend & Databases",
        topics: ["Node.js", "Express.js", "MongoDB"],
        duration: "8 weeks",
      },
    ],
    plans: {
      Basic: {
        price: 5999,
        duration: "16 Weeks Training",
        features: ["16 Weeks Training", "Certificate of Completion"],
        internship: false,
        certificate: true,
      },
      Pro: {
        price: 7999,
        duration: "24 Weeks (Training + Internship)",
        features: ["Training", "Internship", "Certificate of Completion"],
        internship: true,
        certificate: true,
      },
      Elite: {
        price: 9999,
        duration: "24 Weeks (Career Support)",
        features: [
          "Training",
          "Internship",
          "Live Projects",
          "Experience Letter",
          "GitHub Profile Building",
          "Portfolio Development",
        ],
        internship: true,
        certificate: true,
      },
    },
    whatsappGroupLink: "https://chat.whatsapp.com/fullstack-group",
    isActive: true,
  },
  {
    courseName: "Backend APIs with Python (FastAPI)",
    slug: "backend-apis-python-fastapi",
    description:
      "Learn to build ultra-fast, modern backend systems using Python and FastAPI. Focus on high-performance microservices, secure authentication, and cloud deployment strategies.",
    shortDescription:
      "High-performance Python backends and microservices development",
    category: "Backend",
    thumbnail: "/images/python-backend.jpg",
    demoVideoUrl: "https://www.youtube.com/embed/demo-python-backend",
    brochureUrl: "/brochures/python-backend-brochure.pdf",
    syllabus: [
      {
        module: "FastAPI Core",
        topics: ["Advanced Python", "FastAPI Fundamentals", "Pydantic Models"],
        duration: "6 weeks",
      },
    ],
    plans: {
      Basic: {
        price: 4999,
        duration: "6 Weeks Training",
        features: ["Training", "Certificate of Completion"],
        internship: false,
        certificate: true,
      },
      Pro: {
        price: 5999,
        duration: "12 Weeks (Training + Internship)",
        features: ["Training", "Internship", "Certificate of Completion"],
        internship: true,
        certificate: true,
      },
      Elite: {
        price: 7499,
        duration: "12 Weeks (Full Projects)",
        features: [
          "Training",
          "Internship",
          "Live API Projects",
          "Experience Letter",
        ],
        internship: true,
        certificate: true,
      },
    },
    whatsappGroupLink: "https://chat.whatsapp.com/python-backend-group",
    isActive: true,
  },
  {
    courseName: "Java Full Course",
    slug: "java-full-course",
    description:
      "Master Java from basics to advanced enterprise-level development. Cover Core Java, Advanced Java features, and building full-stack applications with Spring Boot.",
    shortDescription: "Master Java from Core to Advanced for Enterprise Apps",
    category: "Programming",
    thumbnail: "/images/java.jpg",
    demoVideoUrl: "https://www.youtube.com/embed/demo-java",
    brochureUrl: "/brochures/java-brochure.pdf",
    syllabus: [
      {
        module: "Core Java",
        topics: ["Java Syntax", "OOPS Concepts", "Collections Framework"],
        duration: "4 weeks",
      },
    ],
    plans: {
      Basic: {
        price: 3999,
        duration: "4 Weeks Training",
        features: ["Core Java Training", "Certificate of Completion"],
        internship: false,
        certificate: true,
      },
      Pro: {
        price: 5999,
        duration: "8 Weeks (Training + Internship)",
        features: [
          "Core + Advanced Java Training",
          "Internship",
          "Certificate of Completion",
        ],
        internship: true,
        certificate: true,
      },
      Elite: {
        price: 7999,
        duration: "12 Weeks (Full Projects)",
        features: [
          "Java Full Stack Basics",
          "Live Projects",
          "Experience Letter",
          "Portfolio Support",
        ],
        internship: true,
        certificate: true,
      },
    },
    whatsappGroupLink: "https://chat.whatsapp.com/java-group",
    isActive: true,
  },
  {
    courseName: "Python Programming",
    slug: "python-programming",
    description:
      "Comprehensive Python training covering everything from syntax to advanced automation and OOP. Perfect for beginners and aspiring data scientists or automation engineers.",
    shortDescription: "Comprehensive Python from basics to advanced automation",
    category: "Programming",
    thumbnail: "/images/python.jpg",
    demoVideoUrl: "https://www.youtube.com/embed/demo-python",
    brochureUrl: "/brochures/python-brochure.pdf",
    syllabus: [
      {
        module: "Python Basics",
        topics: ["Syntax", "Data Types", "Control Flow"],
        duration: "4 weeks",
      },
    ],
    plans: {
      Basic: {
        price: 3499,
        duration: "4 Weeks Training",
        features: ["Python Basics", "Certificate of Completion"],
        internship: false,
        certificate: true,
      },
      Pro: {
        price: 5499,
        duration: "8 Weeks (Training + Internship)",
        features: [
          "Python + OOP Training",
          "Internship",
          "Certificate of Completion",
        ],
        internship: true,
        certificate: true,
      },
      Elite: {
        price: 7499,
        duration: "12 Weeks (Full Projects)",
        features: [
          "Advanced Python + Automation",
          "Live Projects",
          "Experience Letter",
          "Portfolio Support",
        ],
        internship: true,
        certificate: true,
      },
    },
    whatsappGroupLink: "https://chat.whatsapp.com/python-group",
    isActive: true,
  },
  {
    courseName: "Game Development",
    slug: "game-development",
    description:
      "Learn to build stunning 2D and 3D games using Unity and C#. From fundamentals to publishing your own game on industry-standard platforms.",
    shortDescription: "Build stunning games with Unity and C#",
    category: "Game Design",
    thumbnail: "/images/gamedev.jpg",
    demoVideoUrl: "https://www.youtube.com/embed/demo-gamedev",
    brochureUrl: "/brochures/gamedev-brochure.pdf",
    syllabus: [
      {
        module: "Unity Fundamentals",
        topics: ["Editor Basics", "2D/3D Assets", "Physics"],
        duration: "4 weeks",
      },
    ],
    plans: {
      Basic: {
        price: 4999,
        duration: "4 Weeks Training",
        features: [
          "Game Dev Fundamentals (Unity)",
          "Certificate of Completion",
        ],
        internship: false,
        certificate: true,
      },
      Pro: {
        price: 6999,
        duration: "8 Weeks (Training + Internship)",
        features: [
          "Unity + C# Training",
          "Internship",
          "Certificate of Completion",
        ],
        internship: true,
        certificate: true,
      },
      Elite: {
        price: 9499,
        duration: "12 Weeks (Full Projects)",
        features: [
          "Complete Game Development",
          "Live Games",
          "Experience Letter",
          "Portfolio Support",
        ],
        internship: true,
        certificate: true,
      },
    },
    whatsappGroupLink: "https://chat.whatsapp.com/gamedev-group",
    isActive: true,
  },
];

const seedCourses = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB");

    await Course.deleteMany({});
    console.log("🗑️  Cleared existing courses");

    await Course.insertMany(sampleCourses);
    console.log("✅ Sample courses inserted successfully");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding courses:", error);
    process.exit(1);
  }
};

seedCourses();
