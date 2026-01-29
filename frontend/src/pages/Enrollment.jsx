import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { createEnrollment, verifyPayment } from '../services/api';

const Enrollment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const enrollmentData = location.state;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!enrollmentData) {
      navigate('/courses');
    }
  }, [enrollmentData, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // 1. Load Razorpay Script
      const res = await loadRazorpayScript();
      if (!res) {
        throw new Error('Razorpay SDK failed to load. Are you online?');
      }

      // 2. Create order on backend
      const orderRes = await createEnrollment({
        ...formData,
        course: enrollmentData.courseName, // Fixed: send 'course' instead of 'courseId'
        plan: enrollmentData.planType,
      });

      const { orderId, amount: orderAmount, currency, studentId, razorpayKeyId } = orderRes.data;

      // 3. Configure Razorpay options
      const options = {
        key: razorpayKeyId || import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: orderAmount,
        currency: currency,
        name: 'CoursePlatform',
        description: `Enrollment for ${enrollmentData.courseName} - ${enrollmentData.planType} Plan`,
        order_id: orderId,
        handler: async function (response) {
          try {
            // 4. Verify payment on backend
            const verifyRes = await verifyPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              studentId: studentId,
            });

            if (verifyRes.success) {
              navigate('/payment-success', {
                state: {
                  student: verifyRes.data,
                },
              });
            }
          } catch (err) {
            setError('Payment verification failed. Please contact support.');
            console.error('Verification error:', err);
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: '#4f46e5', // Brand Indigo
        },
        modal: {
          ondismiss: function() {
            setLoading(false);
          }
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Something went wrong. Please try again.');
      console.error('Enrollment error:', err);
      setLoading(false);
    }
  };

  if (!enrollmentData) return null;

  return (
    <div className="min-h-screen bg-site-bg pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Summary Column (Left) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
             <div className="bg-secondary-900 text-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/20 rounded-full blur-3xl -mr-32 -mt-32" />
                
                <h2 className="text-2xl font-bold mb-8 flex items-center">
                   <span className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mr-4">🛒</span>
                   Order Summary
                </h2>

                 <div className="space-y-6 mb-10">
                   <div className="pb-6 border-b border-white/10">
                      <div className="text-xs font-bold text-secondary-400 uppercase tracking-widest mb-2">Course</div>
                      <div className="text-xl font-bold">{enrollmentData.courseName}</div>
                   </div>
                   
                   <div className="pb-6 border-b border-white/10 flex justify-between items-end">
                      <div>
                        <div className="text-xs font-bold text-secondary-400 uppercase tracking-widest mb-2">Plan</div>
                        <div className="text-lg font-bold text-primary-400">{enrollmentData.planType}</div>
                      </div>
                      <div className="text-right">
                         <div className="text-xs font-bold text-secondary-400 uppercase tracking-widest mb-2">Price</div>
                         <div className="text-2xl font-black">₹{enrollmentData.amount.toLocaleString()}</div>
                      </div>
                   </div>

                   <div className="flex justify-between items-center text-sm">
                      <span className="text-secondary-400 font-medium">Platform Fee</span>
                      <span className="text-primary-400 font-bold">Included</span>
                   </div>
                   <div className="flex justify-between items-center text-sm">
                      <span className="text-secondary-400 font-medium">GST (18%)</span>
                      <span className="text-primary-400 font-bold">Included</span>
                   </div>
                </div>

                <div className="pt-8 border-t border-white/20">
                   <div className="flex justify-between items-center mb-6">
                      <span className="text-lg font-bold">Total Amount</span>
                      <span className="text-3xl font-black text-white">₹{enrollmentData.amount.toLocaleString()}</span>
                   </div>
                   
                   <div className="p-4 bg-primary-600/20 border border-primary-500/30 rounded-2xl flex items-start space-x-3">
                      <span className="text-xl mt-1">🛡️</span>
                      <div className="text-xs text-primary-200 leading-relaxed font-medium">
                         Your payment is secured with 256-bit encryption. Join the cohort and start learning instantly.
                      </div>
                   </div>
                </div>
             </div>

             <div className="mt-8 px-6">
                <div className="text-secondary-400 text-sm font-medium mb-4 flex items-center">
                   <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                   Trusted by 10,000+ Students Worldwide
                </div>
                <div className="flex space-x-4 grayscale opacity-30">
                   {/* Just placeholders for trust icons */}
                   <div className="h-6 w-12 bg-slate-300 rounded" />
                   <div className="h-6 w-16 bg-slate-300 rounded" />
                   <div className="h-6 w-14 bg-slate-300 rounded" />
                </div>
             </div>
          </div>

          {/* Form Column (Right) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-site-surface rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-secondary-100">
              <div className="mb-10">
                <h1 className="text-3xl md:text-4xl font-black text-secondary-900 mb-4 tracking-tight">Complete Your Details</h1>
                <p className="text-secondary-500 font-medium">Enter your information exactly as you want it on your certificate.</p>
              </div>

              {error && (
                <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center text-red-700 text-sm animate-fade-in font-bold">
                  <span className="mr-3 text-lg">⚠️</span>
                  {error}
                </div>
              )}

              <form onSubmit={handlePayment} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-secondary-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field py-4 text-lg font-medium"
                    placeholder="e.g. Rahul Sharma"
                    disabled={loading}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-secondary-500 uppercase tracking-widest ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="input-field py-4 font-medium"
                      placeholder="rahul@example.com"
                      disabled={loading}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-secondary-500 uppercase tracking-widest ml-1">Phone Number</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400 font-bold border-r border-secondary-200 pr-3">+91</span>
                      <input
                        type="tel"
                        name="phone"
                        required
                        pattern="[0-9]{10}"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input-field py-4 pl-16 font-medium"
                        placeholder="9876543210"
                        disabled={loading}
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`btn-primary w-full py-5 text-xl font-bold flex items-center justify-center space-x-3 transition-all duration-500 ${
                      loading ? 'opacity-70 scale-95 shadow-none ring-0' : 'hover:scale-[1.02] shadow-xl'
                    }`}
                  >
                    {loading ? (
                      <>
                        <div className="spinner border-2 w-6 h-6 mr-3" />
                        <span>Processing Order...</span>
                      </>
                    ) : (
                      <>
                        <span>Pay ₹{enrollmentData.amount.toLocaleString()}</span>
                        <span className="text-2xl">⚡</span>
                      </>
                    )}
                  </button>
                  
                   <div className="mt-8 flex items-center justify-center space-y-2 md:space-y-0 md:space-x-8 flex-col md:flex-row text-[10px] font-bold text-secondary-400 uppercase tracking-widest">
                     <div className="flex items-center">
                        <span className="mr-2 text-primary-500">🔒</span>
                        Secure Checkout
                     </div>
                     <div className="flex items-center">
                        <span className="mr-2 text-primary-500">💳</span>
                        UPI / Cards / Net Banking
                     </div>
                     <div className="flex items-center">
                        <span className="mr-2 text-secondary-500">📧</span>
                        Instant Confirmation
                     </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enrollment;
