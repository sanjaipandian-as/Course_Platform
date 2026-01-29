const InternshipDisclaimer = () => {
  return (
    <div className="min-h-screen bg-site-bg py-12 px-4">
      <div className="max-w-4xl mx-auto bg-site-surface rounded-xl shadow-lg p-8 border border-secondary-100">
        <h1 className="text-4xl font-bold text-secondary-900 mb-6">Internship Disclaimer</h1>
        <p className="text-secondary-500 mb-8">Last updated: January 2026</p>

        <div className="space-y-6 text-secondary-700">
          <section>
            <h2 className="text-2xl font-bold text-secondary-900 mb-3">1. Internship Availability</h2>
            <p>
              Internship opportunities are available only with Pro and Elite plans. The availability
              of internships is subject to partner company requirements and student performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-900 mb-3">2. Eligibility Criteria</h2>
            <p>To be eligible for internship placement, students must:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Complete at least 80% of the course curriculum</li>
              <li>Maintain a minimum performance score of 70%</li>
              <li>Submit all required assignments and projects</li>
              <li>Participate actively in live sessions and discussions</li>
              <li>Pass the final assessment or interview</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-900 mb-3">3. Guaranteed Internship (Elite Plan)</h2>
            <p>
              The Elite plan includes a guaranteed internship placement for eligible students.
              "Guaranteed" means we will provide at least one internship opportunity that matches
              your skills and course completion. However, final selection is at the discretion of
              the partner company.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-900 mb-3">4. Internship Duration & Stipend</h2>
            <p>
              Internship duration typically ranges from 1-3 months. Stipend amounts vary by company
              and role, and some internships may be unpaid. We do not guarantee specific stipend amounts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-900 mb-3">5. No Employment Guarantee</h2>
            <p>
              While we provide internship opportunities and job placement assistance, we do not
              guarantee employment or job offers. Final hiring decisions are made by the respective
              companies based on their requirements and your performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-900 mb-3">6. Student Responsibilities</h2>
            <p>Students are responsible for:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Maintaining professional conduct during internships</li>
              <li>Completing internship tasks and assignments</li>
              <li>Adhering to company policies and guidelines</li>
              <li>Providing feedback on the internship experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-900 mb-3">7. Disclaimer</h2>
            <p>
              Course Platform acts as a facilitator between students and partner companies. We are
              not responsible for the internship experience, work environment, or any disputes that
              may arise during the internship period.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-900 mb-3">8. Contact Us</h2>
            <p>
              For internship-related queries, contact{' '}
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

export default InternshipDisclaimer;
