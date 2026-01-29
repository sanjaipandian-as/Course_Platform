import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCourseBySlug } from '../services/api';
import Loading from '../components/Loading';
import PlanCard from '../components/PlanCard';

const CourseDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeModule, setActiveModule] = useState(0);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        setLoading(true);
        const response = await getCourseBySlug(slug);
        setCourse(response.data);
        setError(null);
      } catch (err) {
        setError('Course not found or failed to load.');
        console.error('Error fetching course:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourseData();
  }, [slug]);

  const handleEnroll = (planType, planDetails) => {
    navigate('/enrollment', {
      state: {
        courseId: course._id,
        courseName: course.courseName,
        planType,
        amount: planDetails.price,
        whatsappGroupLink: course.whatsappGroupLink,
      },
    });
  };

  if (loading) return <Loading message="Loading course curriculum..." />;
  if (error || !course) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Oops! {error}</h1>
          <button onClick={() => navigate('/courses')} className="btn-primary">
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-site-bg">
      {/* Hero Section */}
      <section className="bg-secondary-900 text-white pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-400 rounded-full blur-3xl -ml-32 -mb-32" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl animate-fade-in font-sans">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary-900/50 border border-primary-500/30 rounded-full text-xs font-bold text-primary-400 mb-6 tracking-wide">
              <span>{course.category}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              {course.courseName}
            </h1>
            <p className="text-lg md:text-xl text-secondary-100 leading-relaxed max-w-2xl mb-10">
              {course.description}
            </p>
            <div className="flex flex-wrap gap-6 mb-8">
              {[
                { label: 'Rating', value: '4.9/5 ⭐' },
                { label: 'Students', value: '1.2k+' },
                { label: 'Level', value: 'Beginner to Advanced' }
              ].map(item => (
                <div key={item.label}>
                  <div className="text-secondary-400 text-xs font-bold uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="font-bold">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Syllabus & Info (8 cols) */}
            <div className="lg:col-span-8">
              <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-black text-secondary-900 mb-8 flex items-center">
                  <span className="w-10 h-10 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mr-4">📚</span>
                  Course Curriculum
                </h2>
                
                <div className="space-y-4">
                  {course.syllabus.map((item, index) => (
                    <div key={index} className="border border-secondary-100 rounded-2xl overflow-hidden transition-all duration-300">
                      <button
                        onClick={() => setActiveModule(activeModule === index ? -1 : index)}
                        className={`w-full flex items-center justify-between p-6 text-left transition-colors ${
                          activeModule === index ? 'bg-primary-50/50' : 'bg-site-surface hover:bg-secondary-50'
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                            activeModule === index ? 'bg-primary-600 text-white' : 'bg-secondary-100 text-secondary-500'
                          }`}>
                            {index + 1}
                          </span>
                          <div>
                            <h3 className="font-bold text-secondary-900">{item.module}</h3>
                            <p className="text-xs text-secondary-500 mt-1">{item.duration}</p>
                          </div>
                        </div>
                        <span className={`text-xl transition-transform duration-300 ${activeModule === index ? 'rotate-180' : ''}`}>
                          {activeModule === index ? '−' : '+'}
                        </span>
                      </button>
                      
                      <div className={`overflow-hidden transition-all duration-300 ${
                        activeModule === index ? 'max-auto opacity-100 py-6 px-12 md:px-20' : 'max-h-0 opacity-0'
                      }`}>
                        <ul className="space-y-3">
                          {item.topics.map((topic, idx) => (
                            <li key={idx} className="text-sm text-secondary-600 flex items-center">
                              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcomes Section */}
              <div className="mb-16">
                 <h2 className="text-2xl md:text-3xl font-black text-secondary-900 mb-8 flex items-center">
                  <span className="w-10 h-10 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mr-4">🚀</span>
                  What You'll Achieve
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    'Master industry-standard tools and frameworks',
                    'Complete 10+ hands-on capstone projects',
                    'Prepare for professional certifications',
                    'Build a job-ready developer portfolio',
                    'Learn best practices for clean scalable code',
                    'Gain confidence for global tech interviews'
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start p-4 bg-white/50 rounded-xl border border-secondary-100">
                       <span className="mr-3 mt-1">✅</span>
                       <span className="text-sm text-secondary-700 font-medium leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Demo Video Section */}
              <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 flex items-center">
                  <span className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mr-4">🎬</span>
                  Course Preview
                </h2>
                <div className="aspect-video bg-site-surface rounded-3xl overflow-hidden shadow-2xl border-4 border-site-surface">
                  <iframe
                    className="w-full h-full"
                    src={course.demoVideoUrl}
                    title="Course Demo"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Sidebar (4 cols) */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <div className="bg-secondary-900 text-white rounded-[2rem] p-8 shadow-2xl overflow-hidden relative">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-600/20 rounded-full blur-2xl" />
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <span className="mr-2">📁</span> Resource Center
                </h3>
                <div className="space-y-4 mb-8">
                  <a
                    href={course.brochureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 w-full py-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl transition-all font-bold group"
                  >
                    <span>Download Brochure</span>
                    <span className="group-hover:translate-y-1 transition-transform">⬇️</span>
                  </a>
                  <p className="text-xs text-secondary-400 text-center italic">
                    Get detailed course insights and career roadmap in PDF.
                  </p>
                </div>
                
                <div className="p-6 bg-primary-600/10 border border-primary-500/20 rounded-2xl">
                   <h4 className="text-sm font-bold text-primary-300 uppercase tracking-widest mb-3">Next Batch</h4>
                   <p className="text-lg font-bold mb-4 text-white">Starts coming Monday!</p>
                   <div className="flex items-center text-xs text-primary-200 font-medium space-x-2">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                      <span>Limited Seats (Only 8 left)</span>
                   </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                 <div className="p-4 border border-secondary-200 bg-site-surface rounded-xl text-center">
                    <div className="text-2xl mb-1">🎓</div>
                    <div className="text-[10px] font-bold text-secondary-400 uppercase tracking-widest">Certified</div>
                 </div>
                 <div className="p-4 border border-secondary-200 bg-site-surface rounded-xl text-center">
                    <div className="text-2xl mb-1">💻</div>
                    <div className="text-[10px] font-bold text-secondary-400 uppercase tracking-widest">Self-Paced</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 md:py-32 bg-site-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-6 tracking-tight">Investment Plans</h2>
            <p className="text-secondary-500 text-lg">
              Select a plan that fits your career goals. All plans include lifetime access to our developer community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PlanCard
              type="Basic"
              plan={course.plans.Basic}
              onSelect={handleEnroll}
            />
            <PlanCard
              type="Pro"
              plan={course.plans.Pro}
              onSelect={handleEnroll}
              isPopular={true}
            />
            <PlanCard
              type="Elite"
              plan={course.plans.Elite}
              onSelect={handleEnroll}
            />
          </div>

          {/* Internship Disclaimer */}
          <div className="mt-16 max-w-4xl mx-auto p-8 bg-emerald-50 border border-emerald-100 rounded-[2rem] text-center">
            <h4 className="text-emerald-800 font-black text-xl mb-3 flex items-center justify-center">
               <span className="mr-2">📜</span> Internship & Placement Support
            </h4>
            <p className="text-emerald-700/80 leading-relaxed text-sm md:text-base font-medium italic">
              "Industry internship opportunities are available exclusively with Pro and Elite plans. 
              Each student must complete the qualifying assessment to be eligible for placement assistance."
            </p>
            <div className="mt-6">
               <button 
                 onClick={() => navigate('/internship-disclaimer')}
                 className="text-emerald-800 text-xs font-bold uppercase tracking-widest hover:underline"
               >
                 Read Full Disclaimer →
               </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;
