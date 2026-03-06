import React from 'react';
import { motion } from 'framer-motion';

const TermsAndPrivacy = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-40 px-6 sm:px-12 lg:px-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
      >
        <header className="mb-12 border-b border-slate-100 pb-8">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Terms of Service & Privacy Policy</h1>
          <p className="mt-4 text-slate-500 font-medium">Last Updated: March 2026</p>
        </header>

        <article className="prose prose-slate lg:prose-lg max-w-none">
          {/* Section 1: Introduction */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800">1. Acceptance of Terms</h2>
            <p>
              By accessing and using our platform for language learning services, you agree to be bound by these Terms and Conditions. Our services include group conversation classes, 1-on-1 sessions, and digital educational materials.
            </p>
          </section>

          {/* Section 2: Booking & Cancellation - Sana özel madde */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800">2. Booking & Cancellation Policy</h2>
            <p>
              To ensure the best experience for all students, the following rules apply to our scheduling:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Cancellations made <strong>24 hours or more</strong> before the scheduled class time are eligible for rescheduling.</li>
              <li>Cancellations made within less than 24 hours of the session start time will be considered a "Late Cancel" and the session fee will not be refunded.</li>
              <li>In case of a technical issue on our end, a full makeup session or refund will be provided.</li>
            </ul>
          </section>

          {/* Section 3: Privacy & Data Protection */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800">3. Privacy & Data Protection</h2>
            <p>
              We value your privacy. Your personal information (name, email, and learning progress) is used solely to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Manage your class bookings and payments.</li>
              <li>Provide personalized feedback on your language progress.</li>
              <li>Send occasional updates about new course materials or club events.</li>
            </ul>
            <p className="italic text-sm text-slate-500 mt-4">
              Note: We do not sell or share your personal data with third-party marketing companies.
            </p>
          </section>

          {/* Section 4: Intellectual Property */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800">4. Educational Materials</h2>
            <p>
              All digital materials provided during lessons (PDFs, slides, recordings) are for your personal use only. Distribution or reproduction of these materials without written consent is strictly prohibited.
            </p>
          </section>

          {/* Section 5: Contact */}
          <section className="mt-16 p-8 bg-blue-50 rounded-2xl border border-blue-100">
            <h2 className="text-xl font-bold text-blue-900 mt-0">Questions?</h2>
            <p className="text-blue-800 mb-0">
              If you have any questions regarding these terms, please contact us directly through the dashboard or email us at support@yourdomain.com.
            </p>
          </section>
        </article>
      </motion.div>
    </div>
  );
};

export default TermsAndPrivacy;