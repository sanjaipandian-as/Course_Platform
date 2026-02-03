import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-site-surface border-t border-secondary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand and Description */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">CP</span>
              </div>
              <span className="text-xl font-bold text-secondary-900 tracking-tight">
                Course<span className="text-primary-600">Platform</span>
              </span>
            </Link>
            <p className="text-secondary-500 text-sm leading-relaxed max-w-xs">
              Empowering the next generation of tech leaders with
              industry-vetted curriculums and practical project-based learning.
            </p>
            <div className="flex space-x-5">
              {["twitter", "linkedin", "instagram", "github"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-secondary-400 hover:text-primary-600 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current rounded-full opacity-20 hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold text-secondary-900 uppercase tracking-widest mb-6">
              Platform
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/courses"
                  className="text-sm text-secondary-600 hover:text-primary-600 transition-colors"
                >
                  Browse Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/admin"
                  className="text-sm text-secondary-600 hover:text-primary-600 transition-colors"
                >
                  Admin Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-xs font-bold text-secondary-900 uppercase tracking-widest mb-6">
              Support
            </h3>
            <ul className="space-y-4">
              {[
                "Privacy Policy",
                "Terms & Conditions",
                "Refund Policy",
                "Internship Disclaimer",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                    className="text-sm text-secondary-600 hover:text-primary-600 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xs font-bold text-secondary-900 uppercase tracking-widest mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm text-secondary-600">
              <li className="flex items-start space-x-3">
                <span className="text-lg opacity-70">📧</span>
                <a
                  href="mailto:knock@zippydigitalsolutions.in"
                  className="hover:text-primary-600 transition-colors"
                >
                  knock@zippydigitalsolutions.in
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-lg opacity-70">📞</span>
                <span>+91 9943517648</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-lg opacity-70">📍</span>
                <span>Madurai 625001, Tamil Nadu, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-secondary-200 flex flex-col md:flex-row justify-between items-center text-secondary-500 text-xs">
          <p>
            © {new Date().getFullYear()} CoursePlatform. Built for creators by
            creators.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="px-2 py-1 bg-secondary-50 rounded text-secondary-600">
              v1.2.0
            </span>
            <div className="flex items-center text-primary-600">
              <span className="w-2 h-2 bg-current rounded-full mr-2 animate-pulse" />
              Systems Operational
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
