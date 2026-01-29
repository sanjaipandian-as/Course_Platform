const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-site-bg py-12 px-4">
      <div className="max-w-4xl mx-auto bg-site-surface rounded-xl shadow-lg p-8 border border-secondary-100">
        <h1 className="text-4xl font-bold text-secondary-900 mb-6">Terms & Conditions</h1>
        <p className="text-secondary-500 mb-8">Last updated: January 2026</p>

        <div className="space-y-6 text-secondary-700">
          <section>
            <h2 className="text-2xl font-bold text-secondary-900 mb-3">1. Acceptance of Terms</h2>
            <p>
              By enrolling in our courses, you agree to be bound by these Terms and Conditions.
              Please read them carefully before proceeding with enrollment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-900 mb-3">2. Course Access</h2>
            <p>
              Upon successful payment, you will receive lifetime access to the course materials,
              including all updates and additions made during the course period.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-900 mb-3">3. Payment Terms</h2>
            <p>
              All course fees must be paid in full before accessing course materials. We accept
              payments through Razorpay and other specified payment methods.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-900 mb-3">4. User Responsibilities</h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Provide accurate and complete information during enrollment</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Not share course materials with unauthorized individuals</li>
              <li>Engage respectfully with instructors and fellow students</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-900 mb-3">5. Intellectual Property</h2>
            <p>
              All course materials, including videos, documents, and assignments, are the intellectual
              property of Course Platform and are protected by copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-900 mb-3">6. Limitation of Liability</h2>
            <p>
              Course Platform shall not be liable for any indirect, incidental, or consequential
              damages arising from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-900 mb-3">7. Contact Information</h2>
            <p>
              For questions regarding these terms, contact us at{' '}
              <a href="mailto:support@courseplatform.com" className="text-primary-600 underline">
                support@courseplatform.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
