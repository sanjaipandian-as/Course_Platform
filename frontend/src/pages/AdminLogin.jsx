import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [key, setKey] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const SECURE_KEY = 'Z9@mL4#tQ8!vP2$rH6^yW3%Bn7*Kd';

    const handleSubmit = (e) => {
        e.preventDefault();
        if (key === SECURE_KEY) {
            sessionStorage.setItem('admin_auth', 'true');
            navigate('/admin');
        } else {
            setError(true);
            setTimeout(() => setError(false), 2000);
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6 selection:bg-primary-500/30">
            {/* Abstract Security Background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-900/20 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            </div>

            <div className="w-full max-w-md relative z-10">
                <div className={`glass-dark rounded-[2.5rem] p-12 border border-white/5 transition-all duration-500 ${error ? 'border-red-500/50 shake' : 'hover:border-primary-500/30'}`}>
                    <div className="flex flex-col items-center text-center mb-10">
                        <div className="w-20 h-20 bg-primary-600/10 rounded-3xl flex items-center justify-center mb-6 group">
                            <svg className={`w-10 h-10 transition-colors duration-300 ${error ? 'text-red-500' : 'text-primary-500 group-hover:text-primary-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-black text-white tracking-tight mb-2 uppercase">Secure Access</h1>
                        <p className="text-secondary-400 text-sm font-medium">Restricted Administrative Vault</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative group">
                            <input
                                type="password"
                                value={key}
                                onChange={(e) => setKey(e.target.value)}
                                placeholder="Enter Access Key"
                                className={`w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-secondary-600 focus:outline-none focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500/50 transition-all duration-300 font-mono text-center tracking-[0.5em] ${error ? 'border-red-500/50' : ''}`}
                                autoFocus
                            />
                            <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500" />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-5 bg-primary-600 text-white font-black rounded-2xl shadow-xl shadow-primary-900/20 hover:bg-primary-500 hover:shadow-primary-500/20 transition-all duration-300 active:scale-[0.98] uppercase tracking-widest text-sm"
                        >
                            Authorize Access
                        </button>
                    </form>

                    {error && (
                        <p className="mt-6 text-center text-red-500 text-xs font-bold uppercase tracking-widest animate-fade-in">
                            Access Denied: Invalid Key
                        </p>
                    )}
                </div>

                <div className="mt-8 text-center">
                    <button
                        onClick={() => navigate('/')}
                        className="text-secondary-500 hover:text-white text-xs font-bold uppercase tracking-[0.2em] transition-colors"
                    >
                        ← Return to Surface
                    </button>
                </div>
            </div>

            <style>{`
        .shake {
          animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
        }
        @keyframes shake {
          10%, 90% { transform: translate3d(-1px, 0, 0); }
          20%, 80% { transform: translate3d(2px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
          40%, 60% { transform: translate3d(4px, 0, 0); }
        }
      `}</style>
        </div>
    );
};

export default AdminLogin;
