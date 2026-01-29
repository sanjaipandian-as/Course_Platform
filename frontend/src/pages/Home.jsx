import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Professional Refined SVG Icons
  const Icons = {
    Expert: () => (
      <svg className="w-8 h-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    Projects: () => (
      <svg className="w-8 h-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 10H18C15 10 14 9 14 6V2L22 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    Assistance: () => (
      <svg className="w-8 h-8 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 7V19C16 20.66 14.66 22 13 22H11C9.34 22 8 20.66 8 19V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 2C13.66 2 15 3.34 15 5V7H9V5C9 3.34 10.34 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    Mentorship: () => (
      <svg className="w-8 h-8 group-hover:bounce transition-transform duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525L2.58188 21.2326C2.47952 21.8213 3.00133 22.3333 3.58852 22.2198L7.12741 21.5358" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    Access: () => (
      <svg className="w-8 h-8 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 21V10C7 6.69 9.69 4 13 4C16.31 4 19 6.69 19 10V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 11V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  };

  return (
    <div className="bg-site-bg min-h-screen selection:bg-indigo-100 selection:text-indigo-900 font-sans relative overflow-x-hidden">
      {/* Premium Texture Overlay (Ultra-Low Opacity) */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.012] mix-blend-multiply"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center pt-32 pb-20">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute w-[800px] h-[800px] bg-primary-200/20 rounded-full blur-[140px] transition-all duration-300 ease-out sm:opacity-100 opacity-60"
            style={{
              left: mousePos.x - 400,
              top: mousePos.y - 400
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-6xl sm:text-8xl lg:text-[10rem] font-bold text-secondary-900 leading-[0.82] tracking-[-0.04em] mb-12 animate-fade-in max-w-7xl">
              Professional <br className="hidden md:block" />
              <span className="text-primary-600">Pure Mastery.</span>
            </h1>

            <p className="max-w-2xl text-lg md:text-xl text-secondary-600 mb-16 animate-fade-in [animation-delay:200ms] leading-relaxed font-normal">
              Elite education for those who build the infrastructure of tomorrow. Skip the theory, embrace the context, and launch your next high-impact move.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-8 animate-fade-in [animation-delay:400ms]">
              <Link to="/courses" className="bg-primary-600 text-white px-16 py-6 rounded-2xl font-bold text-lg hover:bg-primary-700 transition-all shadow-2xl shadow-primary-200/50 hover:scale-[1.02] active:scale-95">
                Launch Catalog
              </Link>
              <Link to="/methodology" className="flex items-center space-x-3 text-secondary-600 font-bold text-lg hover:text-primary-600 transition-colors py-2 group">
                <span className="border-b-2 border-transparent group-hover:border-primary-600 transition-all">The Methodology</span>
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* Minimalist Buffer */}
            <div className="mt-40 w-full animate-fade-in [animation-delay:600ms]">
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary-50/50 py-24 border-y border-primary-100/50 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20">
            {[
              { label: 'Active Learners', value: '15.2k', suffix: '+' },
              { label: 'Elite Modules', value: '45', suffix: '+' },
              { label: 'Senior Leads', value: '120', suffix: '+' },
              { label: 'Placement Vel.', value: '92', suffix: '%' },
            ].map((stat, idx) => (
              <div key={idx} className="group">
                <div className="text-5xl md:text-7xl font-bold text-secondary-900 mb-2 tabular-nums tracking-tighter">
                  {stat.value}<span className="text-primary-600 text-2xl font-black ml-1 uppercase">{stat.suffix}</span>
                </div>
                <div className="text-[10px] font-bold text-secondary-400 uppercase tracking-[0.4em] group-hover:text-primary-400 transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Perfect Bento Grid with High Contrast */}
      <section id="features" className="py-32 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-secondary-900 mb-8 tracking-tighter leading-none">Structured for <br />Peak Results.</h2>
            <p className="text-secondary-600 text-xl font-normal leading-relaxed max-w-3xl">
              We design pedagogies that simulate the intensity of high-growth technical environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[320px] md:auto-rows-[360px]">
            {/* Card 1: Direct Access (Teal Background - White Text) */}
            <div className="md:col-span-8 bg-[#1B4B4E] p-12 rounded-[3.5rem] flex flex-col justify-between text-white relative overflow-hidden group shadow-2xl shadow-secondary-100/50">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-12 backdrop-blur-xl border border-white/5">
                  <Icons.Expert />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-none">Direct Access <br />to the Engineers.</h3>
                <p className="text-secondary-100 text-xl font-normal max-w-md">Learn from architects and seniors building the world's most performant systems.</p>
              </div>
              <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-white opacity-[0.03] rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-1000" />
            </div>

            {/* Card 2: Proof of Work (White Background - Dark Text) */}
            <div className="md:col-span-4 bg-white border border-secondary-100 p-12 rounded-[3.5rem] flex flex-col justify-between group hover:border-primary-500/20 hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shadow-inner">
                <Icons.Projects />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-secondary-900 mb-4 tracking-tighter">Proof of Work.</h3>
                <p className="text-secondary-600 text-base font-normal leading-relaxed">Build industry-grade products for your portfolio and get verified.</p>
              </div>
            </div>

            {/* Card 3: Infinite Access (Deep Navy - HIGH CONTRAST) */}
            <div className="md:col-span-4 bg-secondary-900 p-12 rounded-[3.5rem] flex flex-col justify-between text-white group relative overflow-hidden shadow-2xl">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/5 backdrop-blur-md">
                <Icons.Access />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4 tracking-tighter leading-tight">Infinite <br />Access.</h3>
                <p className="text-secondary-300 text-base font-normal leading-relaxed">Lifetime updates to all modules and an alumni network of 50k+ leads.</p>
              </div>
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary-500 opacity-10 rounded-full blur-[80px]" />
            </div>

            {/* Card 4: Career Velocity (Clean Dashboard UI) */}
            <div className="md:col-span-8 bg-white p-12 rounded-[3.5rem] flex flex-col md:flex-row gap-12 items-center justify-between overflow-hidden group border border-secondary-100/50 hover:shadow-xl transition-all duration-500">
              <div className="max-w-xs shrink-0">
                <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-10 border border-primary-100/20">
                  <Icons.Mentorship />
                </div>
                <h3 className="text-3xl font-bold text-secondary-900 mb-4 tracking-tighter">Career Velocity.</h3>
                <p className="text-secondary-600 text-base font-normal leading-relaxed">Dedicated coaches and internal hiring lanes at top engineering firms.</p>
              </div>

              {/* Enhanced Dashboard UI Mockup */}
              <div className="w-full bg-slate-50 flex-grow rounded-[2.5rem] p-10 shadow-inner border border-secondary-50 relative overflow-hidden flex flex-col justify-center">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                      <div className="absolute inset-0 w-3 h-3 rounded-full bg-emerald-500 animate-ping opacity-75" />
                    </div>
                    <span className="text-[10px] font-bold text-secondary-400 uppercase tracking-[0.3em]">Session Live</span>
                  </div>
                  <div className="flex -space-x-3">
                    {[
                      'bg-indigo-300',
                      'bg-emerald-300',
                      'bg-amber-300',
                      'bg-rose-300'
                    ].map((color, i) => (
                      <div key={i} className={`w-8 h-8 rounded-full border-4 border-slate-50 ${color} shadow-sm`} />
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="text-[10px] font-black text-primary-500 uppercase tracking-widest mb-2 leading-none">Current Topic</div>
                    <div className="text-base font-bold text-secondary-900 tracking-tight leading-tight">System Design: Scaling to 10M+ Users</div>
                  </div>

                  <div className="h-5 w-full bg-secondary-100/50 rounded-full overflow-hidden p-1 shadow-inner relative">
                    <div className="h-full w-2/3 bg-primary-600 rounded-full shadow-lg shadow-primary-200/50 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-full animate-pulse opacity-50" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-secondary-100/50">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-md bg-secondary-900 flex items-center justify-center text-[10px] text-white font-black">AM</div>
                      <span className="text-[10px] font-bold text-secondary-500">Alex Miller (Senior Lead)</span>
                    </div>
                    <span className="text-[10px] font-bold text-secondary-400">42m / 60m</span>
                  </div>
                </div>

                {/* Subtle light effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100/20 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Outcomes - Modern Premium Redesign */}
      <section className="py-32 md:py-48 bg-gradient-to-b from-white via-white to-primary-50/30 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-40 left-0 w-80 h-80 bg-secondary-200/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header Section */}
          <div className="flex flex-col items-center text-center mb-24">


            <h2 className="text-6xl sm:text-7xl md:text-8xl font-black text-secondary-900 tracking-tight leading-[0.9] mb-6">
              Alumni<br />
              <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-700 bg-clip-text text-transparent">Success Stories</span>
            </h2>

            <p className="text-secondary-600 text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed">
              Meet the engineers who transformed their careers. Real impact, verified outcomes, global opportunities.
            </p>
          </div>

          {/* Testimonials Grid - Staggered Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                name: 'Karan Sharma',
                role: 'Senior Lead',
                brand: 'Elite Tech',
                salary: '₹150L+',
                color: 'from-blue-500 to-cyan-500',
                text: 'The structural depth was exceptional. I went from developer to architect in 6 months. Real systems, real challenges.',
                growth: '+120% Growth'
              },
              {
                name: 'Priya Verma',
                role: 'Data Architect',
                brand: 'Cloud Native',
                salary: '₹140L+',
                color: 'from-orange-500 to-yellow-500',
                text: 'This course fundamentally changed how I approach problems. From syntax to systems architecture—exactly what I needed.',
                growth: '+95% Growth'
              },
              {
                name: 'Ankit Gupta',
                role: 'Product Lead',
                brand: 'Streaming Systems',
                salary: '₹135L+',
                color: 'from-red-500 to-pink-500',
                text: 'Professional, intense, and incredibly practical. The modules prepare you for high-pressure environments perfectly.',
                growth: '+110% Growth'
              },
              {
                name: 'Siddharth Jain',
                role: 'Lead Developer',
                brand: 'Core Infra',
                salary: '₹145L+',
                color: 'from-blue-600 to-indigo-600',
                text: 'The intensity forced me to level up faster than ever. Best investment in my engineering career.',
                growth: '+105% Growth'
              },
              {
                name: 'Neha Kapoor',
                role: 'Staff Engineer',
                brand: 'Devices & OS',
                salary: '₹160L+',
                color: 'from-gray-600 to-slate-600',
                text: 'Verified skills are gold. This credential opened doors at tier-1 companies. Worth every moment.',
                growth: '+130% Growth'
              },
              {
                name: 'Rahul Mehta',
                role: 'CTO',
                brand: 'FinTech Hub',
                salary: '₹200L+',
                color: 'from-purple-500 to-fuchsia-500',
                text: 'I hire graduates directly. Their baseline skills are lightyears ahead. This is the talent I look for.',
                growth: '+200% Growth'
              }
            ].map((t, idx) => (
              <div key={idx} className="group h-full">
                <div className="relative h-full">
                  {/* Card Background with Gradient Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-secondary-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative h-full p-8 bg-white/70 backdrop-blur-xl border border-secondary-100/60 group-hover:border-primary-300/40 rounded-3xl shadow-lg shadow-secondary-900/5 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-500 overflow-hidden flex flex-col">

                    {/* Gradient Accent Line */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${t.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    {/* Top Section with Badge */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                        {t.name[0]}
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-bold text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-1">
                          {t.salary}
                        </div>
                        <div className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                          {t.growth}
                        </div>
                      </div>
                    </div>

                    {/* Quote Mark */}
                    <div className="text-4xl text-primary-200 font-serif mb-3 group-hover:text-primary-400 transition-colors">"</div>

                    {/* Testimonial Text */}
                    <p className="text-secondary-700 text-base leading-relaxed font-normal mb-8 flex-grow line-clamp-4">
                      {t.text}
                    </p>

                    {/* Divider */}
                    <div className="border-t border-secondary-100 group-hover:border-primary-200 transition-colors pt-6 mt-auto" />

                    {/* Footer with Name, Role, Brand */}
                    <div className="flex items-center justify-between mt-6">
                      <div>
                        <div className="font-bold text-secondary-900 text-sm">{t.name}</div>
                        <div className="text-xs font-semibold text-primary-600 mt-1 uppercase tracking-wide">{t.role}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-black text-secondary-900 tracking-tighter">{t.brand}</div>
                        <div className="w-12 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 mt-2 rounded-full group-hover:w-16 transition-all duration-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section Below Testimonials */}
          <div className="mt-32 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { stat: '10,000+', label: 'Graduates Worldwide' },
              { stat: '95%', label: 'Placed in FAANG' },
              { stat: '₹120L+', label: 'Avg Salary Bump' },
              { stat: '6 Months', label: 'Avg Career Jump' }
            ].map((item, idx) => (
              <div key={idx} className="group text-center p-8 rounded-2xl border border-secondary-100/40 hover:border-primary-300/40 bg-white/50 hover:bg-white transition-all duration-500">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-500">
                  {item.stat}
                </div>
                <p className="text-secondary-600 font-medium text-sm uppercase tracking-wide">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Grid Section (Previously detached) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 max-w-7xl mx-auto">
        {[
          {
            name: 'Karan Sharma',
            role: 'Senior Lead',
            brand: 'Elite Tech',
            theme: 'dark',
            skill: 'Distrubuted Systems',
            color: 'bg-gradient-to-br from-blue-600 to-cyan-500',
            text: 'The structural depth of the curriculum was exceptional. It wasn\'t just about learning the syntax; it was about building resilient systems at scale.'
          },
          {
            name: 'Priya Verma',
            role: 'Data Architect',
            brand: 'Cloud Native',
            theme: 'light',
            skill: 'Big Data',
            color: 'bg-gradient-to-br from-orange-500 to-yellow-500',
            text: 'From context to application, CoursePlatform is in a league of its own. The emphasis on real data and engineering reality changed how I approach architecture.'
          },
          {
            name: 'Ankit Gupta',
            role: 'Product Lead',
            brand: 'Streaming Systems',
            theme: 'light',
            skill: 'Microservices',
            color: 'bg-gradient-to-br from-red-600 to-rose-500',
            text: 'A truly professional environment. The focus on architecture helped me transition from a builder to an architect. Highly recommended for seniors.'
          },
          {
            name: 'Siddharth Jain',
            role: 'Lead Developer',
            brand: 'Core Infra',
            theme: 'light',
            skill: 'Frontend Infra',
            color: 'bg-gradient-to-br from-indigo-600 to-blue-600',
            text: 'The intensity of the modules simulate high-pressure environments. It forced me to level up faster than ever.'
          },
          {
            name: 'Neha Kapoor',
            role: 'Staff Engineer',
            brand: 'Devices & OS',
            theme: 'dark',
            skill: 'Hardware Integration',
            color: 'bg-gradient-to-br from-gray-700 to-slate-600',
            text: 'Verified skills are the currency of the future. CoursePlatform gave me the portfolio to prove my mastery at the highest levels.'
          },
          {
            name: 'Rahul Mehta',
            role: 'CTO',
            brand: 'FinTech Hub',
            theme: 'light',
            skill: 'Team Building',
            color: 'bg-gradient-to-br from-purple-600 to-fuchsia-600',
            text: 'I hire directly from this network because I know the baseline of their skills is already lightyears ahead of typical candidates.'
          }
        ].map((t, idx) => (
          <div key={idx} className="break-inside-avoid group relative">
            <div className="p-10 bg-white/60 backdrop-blur-xl border border-secondary-100 rounded-[3rem] shadow-xl shadow-secondary-900/5 hover:bg-white hover:border-primary-500/20 transition-all duration-500 relative overflow-hidden">
              {/* Skill Badge Reveal */}
              <div className="absolute top-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-3 py-1 bg-primary-50 text-[10px] font-black text-primary-600 rounded-full border border-primary-100 uppercase tracking-widest whitespace-nowrap">
                  {t.skill}
                </span>
              </div>

              <div className="text-5xl text-primary-200 font-serif leading-none mb-8 group-hover:text-primary-400 transition-colors">“</div>
              <p className="text-secondary-700 text-xl leading-[1.5] font-normal italic mb-12 tracking-tight">
                {t.text}
              </p>

              <div className="pt-8 border-t border-secondary-50 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${t.color} rounded-2xl flex items-center justify-center font-black text-white text-base shadow-lg group-hover:scale-110 transition-transform`}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-secondary-900 text-sm tracking-tight">{t.name}</div>
                    <div className="text-[10px] font-bold text-primary-500 uppercase tracking-widest mt-1 leading-none">{t.role}</div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="text-[10px] font-black text-secondary-200 tracking-tighter group-hover:text-secondary-900 transition-colors leading-none mb-1">{t.brand}</div>
                  <div className="w-8 h-[2px] bg-secondary-100 group-hover:bg-primary-500 transition-all duration-500" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="py-32 md:py-56 bg-white relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative group rounded-[4rem] bg-secondary-950 p-12 md:p-32 text-center text-white shadow-3xl shadow-secondary-900/40 overflow-hidden border border-white/5">
            {/* Mesh Background Effects */}
            <div className="absolute inset-0 opacity-40">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-800/40 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/2" />
            </div>

            {/* CTA Mouse Dynamic Spotlight */}
            <div
              className="absolute w-[1000px] h-[1000px] bg-primary-500/15 rounded-full blur-[180px] transition-all duration-700 ease-out pointer-events-none"
              style={{
                left: mousePos.x - 500 - (window.innerWidth / 2) + 400,
                top: mousePos.y - 500 - (window.innerHeight / 2) + 400
              }}
            />

            <div className="relative z-10">
              <div className="inline-flex items-center space-x-3 px-6 py-2 bg-white/5 border border-white/10 rounded-full mb-12 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
                <span className="text-[10px] font-black text-primary-400 uppercase tracking-[0.4em]">Next Cohort: March 2024</span>
              </div>

              <h2 className="text-6xl md:text-[9rem] font-black mb-12 tracking-tighter leading-[0.8] animate-fade-in">
                Secure Your <br />
                <span className="bg-gradient-to-r from-primary-400 via-primary-200 to-primary-400 bg-clip-text text-transparent">Velocity.</span>
              </h2>

              <p className="text-secondary-200 text-xl md:text-2xl mb-20 max-w-2xl mx-auto font-normal opacity-70 leading-relaxed tracking-tight">
                Join the exclusive cohort of 50,000+ professionals who benchmark their growth against global engineering standards.
              </p>

              <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
                <Link
                  to="/courses"
                  className="relative group/btn overflow-hidden bg-primary-600 text-white px-20 py-8 rounded-2xl font-black text-2xl transition-all shadow-[0_0_60px_-15px_rgba(8,145,178,0.6)] hover:shadow-[0_0_80px_-10px_rgba(8,145,178,0.8)] hover:scale-[1.05] active:scale-95 w-full sm:w-auto"
                >
                  <span className="relative z-10">Join the Next Cohort</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                </Link>

                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="flex -space-x-3 mb-4">
                    {[
                      'bg-primary-400',
                      'bg-secondary-700',
                      'bg-indigo-400',
                      'bg-emerald-400',
                      'bg-rose-400'
                    ].map((color, i) => (
                      <div key={i} className={`w-11 h-11 rounded-full border-4 border-secondary-950 ${color} shadow-lg`} />
                    ))}
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="px-3 py-1 bg-rose-500/20 border border-rose-500/30 rounded-md">
                      <span className="text-xs font-black text-rose-400 animate-pulse">ONLY 12 SEATS LEFT</span>
                    </div>
                    <span className="text-xs font-bold text-secondary-400 uppercase tracking-widest">Enrolling Now</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Atmospheric Decors */}
            <div className="absolute top-20 left-20 w-1 h-1 bg-primary-400 rounded-full animate-ping opacity-40" />
            <div className="absolute bottom-40 right-40 w-1 h-1 bg-white rounded-full animate-ping opacity-20 [animation-delay:1s]" />
            <div className="absolute top-1/2 right-10 w-[2px] h-[2px] bg-primary-200 rounded-full animate-pulse opacity-30" />
          </div>
        </div>
      </section>

      {/* Final Page Buffer */}
      <div className="h-32 bg-white" />
    </div>
  );
};

export default Home;
