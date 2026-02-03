import { Link, useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  const {
    _id,
    courseName,
    slug,
    shortDescription,
    category,
    plans,
    whatsappGroupLink
  } = course;

  const handleEnroll = (planType, planDetails) => {
    navigate('/enrollment', {
      state: {
        courseId: _id,
        courseName,
        planType,
        amount: planDetails.price,
        whatsappGroupLink,
      },
    });
  };

  return (
    <div className="group relative bg-white rounded-[2.5rem] border border-secondary-100/60 shadow-sm hover:shadow-2xl hover:shadow-primary-900/5 transition-all duration-500 overflow-hidden flex flex-col">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div className="flex flex-col lg:flex-row h-full">
        {/* Course Info Side */}
        <div className="lg:w-[38%] p-8 lg:p-10 flex flex-col relative z-10 border-b lg:border-b-0 lg:border-r border-secondary-50">
          <div className="flex items-start justify-between mb-8">
            <div className="inline-flex items-center px-4 py-1.5 bg-secondary-50 border border-secondary-100 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2 animate-pulse" />
              <span className="text-[10px] font-black text-secondary-600 uppercase tracking-widest">{category}</span>
            </div>
          </div>

          <h3 className="text-3xl font-black text-secondary-900 mb-6 leading-[1.1] tracking-tight group-hover:text-primary-700 transition-colors duration-300">
            {courseName}
          </h3>

          <p className="text-secondary-500 text-base leading-relaxed mb-8 flex-grow">
            {shortDescription}
          </p>

          <div className="mt-auto">
            <Link
              to={`/courses/${slug}`}
              className="inline-flex items-center space-x-2 text-primary-600 font-bold text-sm tracking-wide group/link py-2"
            >
              <span>View Curriculum</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Plans Selection Side */}
        <div className="lg:flex-1 p-6 lg:p-10 bg-secondary-50/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
            {['Basic', 'Pro', 'Elite'].map((tier) => {
              const plan = plans[tier];
              const isPro = tier === 'Pro';

              return (
                <div
                  key={tier}
                  className={`relative p-5 rounded-3xl border transition-all duration-300 flex flex-col h-full ${isPro
                      ? 'bg-white border-primary-100 shadow-xl shadow-primary-900/5 ring-1 ring-primary-50 scale-[1.02] z-10'
                      : 'bg-white/40 border-secondary-100 hover:bg-white hover:border-secondary-200'
                    }`}
                >
                  {isPro && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-[9px] font-black px-3 py-1 rounded-full shadow-lg tracking-widest uppercase">
                      Most Popular
                    </div>
                  )}

                  <div className="text-center mb-6 pt-2">
                    <span className={`text-[10px] font-black uppercase tracking-widest block mb-2 ${isPro ? 'text-primary-600' : 'text-secondary-400'}`}>
                      {tier}
                    </span>
                    <div className="flex items-center justify-center text-secondary-900">
                      <span className="text-sm font-bold mt-1 mr-0.5 opacity-60">₹</span>
                      <span className="text-2xl font-black tracking-tight">
                        {(plan.price / 1000).toFixed(1)}k
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6 flex-grow">
                    {plan.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-start">
                        <svg className={`w-3.5 h-3.5 mr-2 mt-0.5 flex-shrink-0 ${isPro ? 'text-primary-500' : 'text-secondary-300'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[10px] text-secondary-600 leading-tight font-medium">
                          {f}
                        </span>
                      </li>
                    ))}
                    {plan.features.length > 3 && (
                      <li className="text-[10px] text-secondary-400 font-bold text-center pt-2 border-t border-dashed border-secondary-100">
                        + {plan.features.length - 3} more
                      </li>
                    )}
                  </ul>

                  <button
                    onClick={() => handleEnroll(tier, plan)}
                    className={`w-full py-2.5 rounded-xl text-[11px] font-bold transition-all duration-300 active:scale-95 ${isPro
                        ? 'bg-secondary-900 text-white shadow-lg shadow-secondary-900/20 hover:bg-black'
                        : 'bg-secondary-100 text-secondary-600 hover:bg-secondary-200 hover:text-secondary-900'
                      }`}
                  >
                    Select {tier}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
