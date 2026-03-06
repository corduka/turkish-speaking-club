import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "How do the group conversation classes work?",
    answer: "Our classes are held via Zoom or Google Meet. Each session focuses on a specific daily topic, allowing everyone to speak and practice their Turkish in a supportive environment led by a professional tutor."
  },
  {
    question: "Which level of Turkish is required to join?",
    answer: "We have groups for all levels! From A1 (Beginner) to C1 (Advanced). During your first orientation, we'll help you find the group that best fits your current speaking ability."
  },
  {
    question: "How can I book a session?",
    answer: "You can easily book your spot through our integrated Calendly system. Once you choose a time slot, you'll receive a confirmation email with the meeting link."
  },
  {
    question: "Are there any study materials provided?",
    answer: "Yes! After every session, we share a digital summary of the vocabulary and phrases covered during the class so you can review them anytime."
  }
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-blue-600 transition-colors"
      >
        <span className="text-lg font-semibold text-slate-800">{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-40 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Common Questions</h2>
          <p className="mt-4 text-slate-500">Everything you need to know about the Turkish Speaking Club.</p>
        </div>
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100">
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;