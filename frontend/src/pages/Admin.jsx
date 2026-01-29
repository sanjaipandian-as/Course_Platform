import { useState, useEffect } from 'react';
import { getEnrollments, getCourseStats } from '../services/api';
import Loading from '../components/Loading';

const Admin = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('');
  const [sortField, setSortField] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState('desc');

  useEffect(() => {
    fetchAdminData();
  }, []);

  const fetchAdminData = async () => {
    try {
      setLoading(true);
      const [enrollRes, statsRes] = await Promise.all([
        getEnrollments(),
        getCourseStats()
      ]);
      setEnrollments(enrollRes.data);
      setStats(statsRes.data);
      setError(null);
    } catch (err) {
      setError('Unauthorized or server error. Please check admin credentials in .env');
      console.error('Error fetching admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleExport = () => {
    window.open(`${import.meta.env.VITE_API_URL}/admin/enrollments/export`, '_blank');
  };

  const filteredEnrollments = enrollments.filter(e =>
    e.name.toLowerCase().includes(filter.toLowerCase()) ||
    e.email.toLowerCase().includes(filter.toLowerCase()) ||
    e.enrollmentId?.toLowerCase().includes(filter.toLowerCase())
  ).sort((a, b) => {
    const fieldA = a[sortField];
    const fieldB = b[sortField];
    if (sortOrder === 'asc') return fieldA > fieldB ? 1 : -1;
    return fieldA < fieldB ? 1 : -1;
  });

  if (loading) return <Loading message="Accessing Secure Vault..." />;

  // Safely calculate revenue
  const totalRevenue = enrollments.reduce((sum, e) => sum + (e.paymentStatus === 'success' ? (e.amount || 0) : 0), 0);

  return (
    <div className="min-h-screen bg-site-bg selection:bg-primary-100 selection:text-primary-900 pb-32">
      {/* Cinematic Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary-200/30 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary-200/30 rounded-full blur-[100px] animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-32">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20 animate-fade-in">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 bg-primary-600 rounded-full animate-pulse" />
              Administrator Access
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-secondary-900 tracking-tighter mb-4 leading-tight">
              Command <span className="text-primary-600">Center</span>
            </h1>
            <p className="text-secondary-500 font-medium text-lg max-w-lg leading-relaxed">
              Real-time intelligence on course performance, student engagement, and revenue streams.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={fetchAdminData}
              className="btn-secondary flex items-center gap-2 group"
            >
              <svg className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh Data
            </button>
            <button
              onClick={handleExport}
              className="btn-primary flex items-center gap-2 group"
            >
              <svg className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export Analytics
            </button>
          </div>
        </div>

        {error ? (
          <div className="glass rounded-[3rem] p-12 text-center mb-12 animate-slide-up">
            <div className="w-20 h-20 bg-red-100 text-red-600 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-6">🔐</div>
            <h2 className="text-2xl font-black text-secondary-900 mb-3">{error}</h2>
            <p className="text-secondary-500 font-medium max-w-md mx-auto">
              Please verify your administrative credentials in the backend configuration to unlock the vault.
            </p>
          </div>
        ) : (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 animate-slide-up" style={{ animationDelay: '100ms' }}>
              {/* Total Revenue Card */}
              <div className="glass-dark rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary-400 rounded-full blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md">
                      <svg className="w-6 h-6 text-primary-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-lg text-[10px] font-black uppercase tracking-widest border border-emerald-500/30">
                      +12.5%
                    </div>
                  </div>
                  <div className="text-xs font-bold text-white/60 uppercase tracking-[0.2em] mb-2">Total Revenue</div>
                  <div className="text-5xl lg:text-6xl font-black tracking-tighter">
                    ₹{(totalRevenue / 1000).toFixed(1)}<span className="text-2xl opacity-50 ml-1">k</span>
                  </div>
                </div>
              </div>

              {/* Verified Students Card */}
              <div className="card-glass group">
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 bg-primary-50 rounded-2xl">
                    <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="text-[10px] font-black text-primary-600 uppercase tracking-widest">Growth Velocity</div>
                </div>
                <div className="text-xs font-bold text-secondary-400 uppercase tracking-[0.2em] mb-2">Verified Students</div>
                <div className="text-5xl font-black text-secondary-900 tracking-tighter flex items-baseline gap-2">
                  {enrollments.filter(e => e.paymentStatus === 'success').length}
                  <span className="text-2xl text-secondary-300 font-bold">/ {enrollments.length}</span>
                </div>
                <div className="w-full bg-secondary-100 h-2 rounded-full mt-8 overflow-hidden">
                  <div
                    className="bg-primary-500 h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_12px_rgba(44,118,121,0.4)]"
                    style={{ width: `${(enrollments.filter(e => e.paymentStatus === 'success').length / Math.max(enrollments.length, 1)) * 100}%` }}
                  />
                </div>
              </div>

              {/* Pending Trials Card */}
              <div className="card-glass group border-amber-50">
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 bg-amber-50 rounded-2xl">
                    <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="px-3 py-1 bg-amber-100 text-amber-700 rounded-lg text-[10px] font-black uppercase tracking-widest">Action Required</div>
                </div>
                <div className="text-xs font-bold text-secondary-400 uppercase tracking-[0.2em] mb-2">Pending Pipeline</div>
                <div className="text-5xl font-black text-secondary-900 tracking-tighter">
                  {enrollments.filter(e => e.paymentStatus === 'pending').length}
                </div>
                <p className="mt-6 text-sm font-medium text-secondary-500">
                  Students awaiting secure payment verification.
                </p>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 mb-20">
              {/* Sidebar: Performance Rankings */}
              <div className="xl:col-span-1 space-y-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-black text-secondary-900">Course <span className="text-primary-600">Sync</span></h2>
                  <span className="px-2 py-0.5 bg-secondary-100 text-secondary-600 text-[10px] font-black rounded-md">{stats.length} Active</span>
                </div>

                <div className="space-y-4">
                  {stats.map((s, idx) => (
                    <div key={s._id} className="p-6 bg-white border border-secondary-100 rounded-3xl hover:border-primary-200 hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-300 group cursor-default">
                      <div className="flex justify-between items-start mb-4">
                        <div className="text-[10px] font-black text-secondary-400 uppercase tracking-widest group-hover:text-primary-500 transition-colors">Course Segment</div>
                        <div className={`text-[10px] font-black w-6 h-6 rounded-lg flex items-center justify-center ${idx === 0 ? 'bg-amber-100 text-amber-600' : 'bg-secondary-50 text-secondary-400'}`}>
                          0{idx + 1}
                        </div>
                      </div>
                      <div className="font-black text-secondary-900 mb-4 line-clamp-1">{s._id}</div>
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-[10px] font-bold text-secondary-400 uppercase mb-1">Students</div>
                          <div className="text-2xl font-black text-secondary-900">{s.count}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] font-bold text-primary-500 uppercase mb-1">Revenue</div>
                          <div className="text-lg font-black text-primary-600">₹{((s.revenue || 0) / 1000).toFixed(1)}k</div>
                        </div>
                      </div>
                      <div className="w-full bg-secondary-50 h-1.5 rounded-full mt-6 overflow-hidden">
                        <div
                          className="bg-primary-500 h-full rounded-full opacity-30"
                          style={{ width: `${(s.count / Math.max(...stats.map(x => x.count), 1)) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Data Table: Recent Activity */}
              <div className="xl:col-span-3 animate-slide-up" style={{ animationDelay: '300ms' }}>
                <div className="glass rounded-[3rem] overflow-hidden">
                  {/* Table Header / Toolbar */}
                  <div className="p-10 border-b border-secondary-100 flex flex-col lg:flex-row lg:items-center justify-between gap-8 bg-white/40">
                    <div>
                      <h2 className="text-2xl font-black text-secondary-900 mb-1">Live Enrollments</h2>
                      <p className="text-sm font-medium text-secondary-500">Monitor and manage recent learner acquisitions.</p>
                    </div>

                    <div className="relative group min-w-[300px]">
                      <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-secondary-400 group-focus-within:text-primary-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        className="input-field pl-14"
                        placeholder="Search by name, email or ID..."
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Table Content */}
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="bg-secondary-50/50">
                          <th className="px-10 py-6 text-left text-[11px] font-black text-secondary-400 uppercase tracking-[0.2em]">Learner Intelligence</th>
                          <th className="px-10 py-6 text-left text-[11px] font-black text-secondary-400 uppercase tracking-[0.2em]">Product Details</th>
                          <th className="px-10 py-6 text-left text-[11px] font-black text-secondary-400 uppercase tracking-[0.2em]">Transaction</th>
                          <th className="px-10 py-6 text-left text-[11px] font-black text-secondary-400 uppercase tracking-[0.2em]">Timeline</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-secondary-100">
                        {filteredEnrollments.length > 0 ? (
                          filteredEnrollments.map((en) => (
                            <tr key={en._id} className="group hover:bg-white/60 transition-colors">
                              <td className="px-10 py-8 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform duration-300">
                                    {en.name.charAt(0)}
                                  </div>
                                  <div className="ml-5">
                                    <div className="text-base font-black text-secondary-900 group-hover:text-primary-600 transition-colors">{en.name}</div>
                                    <div className="text-xs text-secondary-500 font-bold">{en.email}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-10 py-8 whitespace-nowrap">
                                <div className="text-sm font-black text-secondary-900 mb-1">{en.course}</div>
                                <div className="inline-flex px-2 py-0.5 bg-primary-50 text-primary-600 text-[10px] font-black uppercase tracking-wider rounded">
                                  {en.plan}
                                </div>
                              </td>
                              <td className="px-10 py-8 whitespace-nowrap">
                                <div className="mb-2">
                                  <span className={`inline-flex px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full items-center gap-2 ${en.paymentStatus === 'success'
                                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                                    : 'bg-amber-50 text-amber-700 border border-amber-100'
                                    }`}>
                                    <span className={`w-1.5 h-1.5 rounded-full ${en.paymentStatus === 'success' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                                    {en.paymentStatus}
                                  </span>
                                </div>
                                <div className="text-sm font-black text-secondary-900">₹{(en.amount || 0).toLocaleString()}</div>
                              </td>
                              <td className="px-10 py-8 whitespace-nowrap">
                                <div className="text-sm font-black text-secondary-900">
                                  {new Date(en.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                                </div>
                                <div className="text-[10px] font-bold text-secondary-400 mt-1 uppercase">
                                  {new Date(en.createdAt).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="4" className="px-10 py-32 text-center">
                              <div className="w-24 h-24 bg-secondary-50 text-secondary-200 rounded-[2rem] flex items-center justify-center text-5xl mx-auto mb-8 animate-pulse">
                                🛸
                              </div>
                              <h3 className="text-xl font-black text-secondary-900 mb-2">No data entities found</h3>
                              <p className="text-secondary-500 font-medium">Try adjusting your filters to find existing records.</p>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Admin;
