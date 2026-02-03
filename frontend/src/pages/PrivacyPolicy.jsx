const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-site-bg py-12 px-4">
      <div className="max-w-4xl mx-auto bg-site-surface rounded-xl shadow-lg p-8 border border-secondary-100">
        <h1 className="text-4xl font-bold text-secondary-900 mb-6">
          Privacy Policy
        </h1>
        <p className="text-secondary-500 mb-8">Last updated: January 2026</p>

        <div className="space-y-6 text-secondary-700">
          <section>
            <h2 className="text-2xl font-bold text-secondary-900 mb-3">
              1. Information We Collect
            </h2>
            <p>
              We collect information that you provide directly to us, including
              your name, email address, phone number, and payment information
              when you enroll in our courses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-900 mb-3">
              2. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Process your enrollment and payments</li>
              <li>Provide course materials and support</li>
              <li>Send you important updates about your courses</li>
              <li>Improve our services and user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-900 mb-3">
              3. Information Sharing
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share information with service providers who
              assist us in operating our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-900 mb-3">
              4. Data Security
            </h2>
            <p>
              We implement appropriate security measures to protect your
              personal information from unauthorized access, alteration, or
              disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-900 mb-3">
              5. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
              <br />
              Email:{" "}
              <a
                href="mailto:knock@zippydigitalsolutions.in"
                className="text-primary-600 underline"
              >
                knock@zippydigitalsolutions.in
              </a>
              <br />
              Phone: +91 9943517648
              <br />
              Address: Madurai 625001, Tamil Nadu, India
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
