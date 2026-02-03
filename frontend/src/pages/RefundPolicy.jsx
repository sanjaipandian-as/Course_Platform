const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-site-bg py-12 px-4">
      <div className="max-w-4xl mx-auto bg-site-surface rounded-xl shadow-lg p-8 border border-secondary-100">
        <h1 className="text-4xl font-bold text-secondary-900 mb-6">
          Refund Policy
        </h1>
        <p className="text-secondary-500 mb-8">Last updated: January 2026</p>

        <div className="space-y-6 text-secondary-700">
          <section>
            <h2 className="text-2xl font-bold text-secondary-900 mb-3">
              1. Refund Eligibility
            </h2>
            <p>
              We offer a 7-day money-back guarantee from the date of enrollment.
              If you are not satisfied with the course, you may request a full
              refund within this period.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-900 mb-3">
              2. Refund Conditions
            </h2>
            <p>To be eligible for a refund, you must:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Request the refund within 7 days of enrollment</li>
              <li>Have completed less than 20% of the course content</li>
              <li>Provide a valid reason for the refund request</li>
              <li>Not have downloaded or shared course materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-900 mb-3">
              3. Non-Refundable Items
            </h2>
            <p>The following are not eligible for refunds:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Courses completed beyond 20% of the content</li>
              <li>Refund requests made after the 7-day period</li>
              <li>
                Promotional or discounted course fees (unless required by law)
              </li>
              <li>Internship placement fees (if applicable)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-900 mb-3">
              4. Refund Process
            </h2>
            <p>
              To request a refund, email us at{" "}
              <a
                href="mailto:knock@zippydigitalsolutions.in"
                className="text-primary-600 underline"
              >
                knock@zippydigitalsolutions.in
              </a>{" "}
              with your enrollment ID and reason for the refund. Approved
              refunds will be processed within 7-10 business days to the
              original payment method.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-900 mb-3">
              5. Cancellation by Course Platform
            </h2>
            <p>
              If we cancel a course before it starts, you will receive a full
              refund or the option to transfer to another course of equal value.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-900 mb-3">
              6. Contact Us
            </h2>
            <p>
              For refund inquiries, please contact:
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

export default RefundPolicy;
