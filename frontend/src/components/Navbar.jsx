import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ease-in-out ${scrolled
          ? 'bg-white/90 backdrop-blur-2xl border-b border-secondary-900/5 py-4 shadow-sm'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link to="/" className="group flex items-center gap-3">
                <div className="relative w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center shadow-xl shadow-primary-600/20 overflow-hidden transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-white font-bold text-sm tracking-tighter relative z-10">CP</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight text-secondary-900 leading-none">
                    Course<span className="text-primary-600">Platform</span>
                  </span>
                  <span className="text-[10px] font-bold text-secondary-400 uppercase tracking-[0.2em] leading-none mt-1">
                    Pure Mastery
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              <div className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="relative group py-2"
                  >
                    <span
                      className={`text-sm font-semibold tracking-wide transition-colors duration-300 ${location.pathname === link.path
                        ? 'text-primary-600'
                        : 'text-secondary-500 group-hover:text-secondary-900'
                        }`}
                    >
                      {link.name}
                    </span>
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[2px] bg-primary-500 rounded-full transition-transform duration-300 origin-left ${location.pathname === link.path
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                    />
                  </Link>
                ))}
              </div>

              <Link
                to="/courses"
                className="relative overflow-hidden bg-secondary-900 text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-black transition-all shadow-lg hover:shadow-xl active:scale-95 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center gap-2">
                  Enroll Now
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`relative z-[70] p-3 rounded-xl transition-colors ${isOpen ? 'text-secondary-900' : 'text-secondary-900'
                  }`}
                aria-label="Toggle menu"
              >
                <div className="flex flex-col justify-between w-6 h-5">
                  <span
                    className={`block h-0.5 bg-current rounded-full transition-all duration-300 ease-out origin-left ${isOpen ? 'rotate-45 w-6 translate-x-[2px]' : 'w-6'
                      }`}
                  />
                  <span
                    className={`block h-0.5 bg-current rounded-full transition-all duration-300 ease-out ${isOpen ? 'opacity-0 translate-x-3' : 'w-4 ml-auto'
                      }`}
                  />
                  <span
                    className={`block h-0.5 bg-current rounded-full transition-all duration-300 ease-out origin-left ${isOpen ? '-rotate-45 w-6 translate-x-[2px]' : 'w-6'
                      }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[55] bg-secondary-900/20 backdrop-blur-sm transition-opacity duration-500 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 z-[56] w-full max-w-sm bg-white shadow-2xl transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) transform md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full relative overflow-hidden">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

          <div className="flex-grow pt-32 px-10 relative z-10">
            <div className="space-y-8">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block text-4xl font-bold tracking-tight transition-all duration-500 transform ${isOpen
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-10 opacity-0'
                    } ${location.pathname === link.path
                      ? 'text-primary-600'
                      : 'text-secondary-900 hover:text-primary-600'
                    }`}
                  style={{ transitionDelay: `${150 + (idx * 100)}ms` }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="p-10 relative z-10 bg-white/50 backdrop-blur-md">
            <Link
              to="/courses"
              className="group block w-full relative overflow-hidden bg-primary-600 text-white py-5 rounded-2xl font-bold text-xl text-center shadow-xl shadow-primary-600/30 active:scale-95 transition-transform"
            >
              <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 flex items-center justify-center gap-3">
                Start Learning
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>

            <div className="mt-8 text-center">
              <p className="text-secondary-400 text-xs font-bold uppercase tracking-widest">
                Professional Education
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
