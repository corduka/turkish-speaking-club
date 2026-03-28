import React from 'react';
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  BookOpen, 
  CreditCard, 
  MessageCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import FAQItem from '../components/FAQItem';

const learningFAQs = [
  { q: "Is it beginner friendly?", a: "Absolutely. I have dedicated 'First Steps' groups starting from A1 level, designed to build your foundation through natural conversation from day one." },
  { q: "How many students in a group?", a: "To ensure the highest quality of interaction, I strictly cap sessions at 4–6 students. This boutique approach is what makes the progress so rapid." },
  { q: "What if I miss a session?", a: "Life happens. While live participation is best, you'll receive detailed logic-based notes and summary of the session to keep you on track." },
  { q: "Is there homework?", a: "We replace repetitive drills with Pre-Session Briefings. Instead of worksheets, you’ll receive curated insights, short videos, or thought-provoking prompts designed to prime your mind for the next conversation." }
];

const membershipFAQs = [
  { q: "How does the free trial work?", a: "Your first session is 100% free. It’s an opportunity to experience the logic-based method and see if the group dynamic fits your style. No credit card is required to join the trial." },
  { q: "Can I pause my membership?", a: "Yes. If you have a busy month or a vacation planned, you can pause your subscription anytime. We value flexibility as much as consistency." },
  { q: "How are groups formed?", a: "Groups are curated personally by Abdullah based on your level (A1-C2) and timezone. We ensure that every member in your circle is at a similar proficiency level." },
  { q: "What is the payment schedule?", a: "Payment is requested monthly via a subscription model, only after you complete your free trial and decide to move forward with the club." }
];

export default function FAQPage() {
  return (
    <main className="pt-40 pb-32 bg-white min-h-screen font-sans">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* 1. HERO SECTION */}
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/5 text-brand-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8"
          >
            <HelpCircle className="w-3.5 h-3.5" /> Support Center
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8"
          >
            Common <span className="text-brand-primary italic font-serif font-light">Questions.</span>
          </motion.h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about the method, the club, and your journey to Turkish fluency.
          </p>
        </div>

        {/* 2. CATEGORY: THE EXPERIENCE */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12 border-b border-slate-100 pb-6">
            <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center shadow-lg">
              <BookOpen className="text-white w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">The Learning Experience</h2>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Methodology & Dynamics</p>
            </div>
          </div>
          <FAQItem items={learningFAQs} />
        </section>

        {/* 3. CATEGORY: MEMBERSHIP */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12 border-b border-slate-100 pb-6">
            <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center shadow-lg shadow-brand-primary/20">
              <CreditCard className="text-white w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Membership & Logistics</h2>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Billing, Trials & Plans</p>
            </div>
          </div>
          <FAQItem items={membershipFAQs} />
        </section>

        {/* 4. FINAL CTA - Support Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-[3.5rem] p-12 md:p-16 text-center relative overflow-hidden"
        >
          {/* Dekoratif Işık Oyunu */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/10">
              <MessageCircle className="text-brand-primary w-8 h-8" />
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">Still have questions?</h3>
            <p className="text-slate-400 text-lg mb-10 max-w-md mx-auto font-medium">
              I'm here to help you find the perfect path for your Turkish goals. Let's talk directly.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <button className="w-full md:w-auto bg-brand-primary text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-2">
                <a href="https://wa.me/00573219372828" target="_blank" rel="noopener noreferrer">WhatsApp Support</a> <ArrowRight className="w-4 h-4" />
              </button>
              <button className="w-full md:w-auto bg-white/5 text-white border border-white/10 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all">
                Send an Email
              </button>
            </div>
          </div>
        </motion.div>

        {/* Alt Bilgi */}
        <div className="mt-20 text-center text-slate-300 text-[10px] font-bold uppercase tracking-[0.4em]">
          <Sparkles className="w-4 h-4 inline-block mr-2 opacity-50" /> Decoding Turkish Since 2014
        </div>
      </div>
    </main>
  );
}