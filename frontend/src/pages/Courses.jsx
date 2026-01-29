import { useState, useEffect } from 'react';
import { getAllCourses } from '../services/api';
import CourseCard from '../components/CourseCard';
import Loading from '../components/Loading';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const response = await getAllCourses();
      setCourses(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to load courses. Please try again later.');
      console.error('Error fetching courses:', err);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['All', ...new Set(courses.map((course) => course.category))];

  const filteredCourses =
    filter === 'All'
      ? courses
      : courses.filter((course) => course.category === filter);

  if (loading) return <Loading message="Finding your next career-defining course..." />;

  return (
    <div className="min-h-screen bg-site-bg pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold text-secondary-900 mb-6 tracking-tight">
            Our Industry-vetted <span className="text-primary-600">Courses</span>
          </h1>
          <p className="text-secondary-500 text-lg leading-relaxed">
            Gain the skills that top employers are looking for. Every course includes hands-on projects, expert mentorship, and career support.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 animate-fade-in [animation-delay:200ms]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                filter === cat
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-200 ring-2 ring-primary-600 ring-offset-2'
                  : 'bg-site-surface text-secondary-600 hover:bg-secondary-50 border border-secondary-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid -> Now a Vertical List for Showcase */}
        {error ? (
          <div className="text-center py-20 bg-site-surface rounded-3xl border border-red-100 shadow-sm animate-fade-in">
            <div className="text-5xl mb-6">⚠️</div>
            <p className="text-red-600 font-bold text-xl mb-4">{error}</p>
            <button onClick={fetchCourses} className="btn-primary">
              Try Refreshing
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-12 md:gap-16 animate-fade-in [animation-delay:400ms]">
            {filteredCourses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        )}

        {filteredCourses.length === 0 && !loading && !error && (
          <div className="text-center py-32 bg-site-surface rounded-3xl border border-secondary-100 shadow-sm animate-fade-in">
            <div className="text-6xl mb-6 grayscale opacity-20">🔍</div>
            <p className="text-secondary-500 text-xl font-medium">No courses found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
