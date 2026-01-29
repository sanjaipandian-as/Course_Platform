import { useEffect, useState } from 'react';

const Loading = ({ message = 'Initializing Environment...' }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-site-bg relative overflow-hidden">
      {/* Background Mesh (Subtle) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-200/30 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo/Icon Placeholder */}
        <div className="mb-12 relative">
          <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-primary-600/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent animate-pulse" />
            <span className="text-white font-bold text-2xl tracking-tight">CP</span>
          </div>
          {/* Orbital Ring */}
          <div className="absolute -inset-4 border border-primary-200/50 rounded-3xl animate-spin [animation-duration:10s]" />
          <div className="absolute -inset-4 border border-primary-600/20 rounded-3xl animate-spin [animation-duration:10s] rotate-45" />
        </div>

        {/* Loading Text */}
        <h2 className="text-3xl font-black text-secondary-900 tracking-tighter mb-4 animate-fade-in">
          System <span className="text-primary-600">Loading</span>
        </h2>

        <p className="text-secondary-500 font-medium text-sm letter-spacing-wide uppercase tracking-widest mb-10 animate-fade-in [animation-delay:200ms]">
          {message}
        </p>

        {/* Progress Bar */}
        <div className="w-64 h-1.5 bg-secondary-100 rounded-full overflow-hidden relative">
          <div
            className="absolute top-0 left-0 h-full bg-primary-600 transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" />
        </div>

        <div className="mt-4 font-mono text-xs text-secondary-400">
          {Math.min(Math.round(progress), 100)}% COMPLETE
        </div>
      </div>
    </div>
  );
};

export default Loading;
