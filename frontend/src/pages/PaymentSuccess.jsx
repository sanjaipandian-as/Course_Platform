import { useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const student = location.state?.student;

  useEffect(() => {
    if (!student) {
      navigate('/');
    }
  }, [student, navigate]);

  if (!student) return null;

  return (
    <div className="min-h-screen bg-site-bg pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-site-surface rounded-[3rem] shadow-2xl overflow-hidden animate-fade-in border border-secondary-100">
          
          {/* Success Header */}
          <div className="bg-secondary-900 text-white p-12 text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-600 rounded-full blur-[100px]" />
             </div>
             
             <div className="relative">
                <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-primary-600/20 transform scale-110 animate-slide-up">
                   <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                   </svg>
                </div>
                <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Payment Successful!</h1>
                <p className="text-slate-400 text-lg md:text-xl font-medium max-w-xl mx-auto leading-relaxed">
                   Welcome to the community, <span className="text-white font-bold">{student.name}</span>! Your journey to mastery begins today.
                </p>
             </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Enrollment Details */}
               <div className="space-y-8">
                <div>
                   <h2 className="text-xs font-black text-secondary-400 uppercase tracking-[0.2em] mb-6">Enrollment Details</h2>
                   <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-secondary-50">
                         <span className="text-secondary-500 font-medium">Course</span>
                         <span className="text-secondary-900 font-bold">{student.course}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-secondary-50">
                         <span className="text-secondary-500 font-medium">Plan</span>
                         <span className="text-primary-600 font-black">{student.plan}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-secondary-50">
                         <span className="text-secondary-500 font-medium">Enrollment ID</span>
                         <span className="font-mono bg-secondary-50 px-3 py-1 rounded text-secondary-700 font-bold">{student.enrollmentId}</span>
                      </div>
                      <div className="flex justify-between items-center py-3">
                         <span className="text-secondary-500 font-medium">Amount Paid</span>
                         <span className="text-secondary-900 font-black text-lg">₹{student.amount.toLocaleString()}</span>
                      </div>
                   </div>
                </div>

                <div className="p-6 bg-primary-50 border border-primary-100 rounded-3xl">
                   <h3 className="text-primary-900 font-bold flex items-center mb-3">
                      <span className="mr-2 text-lg">📧</span> Confirmation Sent
                   </h3>
                   <p className="text-primary-700 text-sm leading-relaxed font-medium">
                      We've sent a detailed receipt and next steps to <span className="underline font-bold">{student.email}</span>. Please check your inbox (and spam folder).
                   </p>
                </div>
              </div>

              {/* Next Steps / WhatsApp */}
              <div className="bg-secondary-50 rounded-[2rem] p-8 md:p-10 border border-secondary-100 flex flex-col items-center text-center justify-center">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center text-3xl mb-6">
                   📱
                </div>
                <h3 className="text-2xl font-black text-secondary-900 mb-4">Join Your Peer Group</h3>
                <p className="text-secondary-500 font-medium mb-8 leading-relaxed max-w-xs">
                   Get instant updates, network with mentors, and start your first module in our official WhatsApp group.
                </p>
                
                <a
                  href={student.whatsappGroupLink || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-emerald-500/20 transition-all hover:scale-[1.03] flex items-center justify-center space-x-3 text-lg"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>Join WhatsApp Group</span>
                </a>
              </div>
            </div>

            <div className="mt-16 text-center">
               <Link 
                 to="/courses" 
                 className="text-primary-600 font-black uppercase tracking-widest text-sm hover:underline flex items-center justify-center space-x-2"
               >
                 <span>Explore More Courses</span>
                 <span>→</span>
               </Link>
            </div>
          </div>
        </div>

        {/* Success Confetti Animation Placeholder */}
        <div className="mt-12 text-center text-secondary-400 font-medium animate-bounce-slow">
           🎉 Enrollment confirmation has been sent to your email.
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
