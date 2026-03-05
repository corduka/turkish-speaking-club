import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, X, ArrowRight, Minus, Plus } from 'lucide-react';
import ContactSection from '../components/ContactSection';
import deneme1 from "../assets/deneme-1.png";
import profile2 from "../assets/profile2.jpg";


// --- Alt Bileşen: FAQ Akordiyon ---
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-brand-primary transition-colors"
      >
        <span className="font-semibold text-slate-800">{question}</span>
        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-slate-500 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Home() {
  return (
    <main className="bg-white overflow-x-hidden">
      
      {/* 1. HERO SECTION (Orijinal yapın korundu) */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6"
            >
              Master Turkish <br /> 
              <span className="text-brand-primary italic font-light tracking-normal">Through Conversation.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Join expert-led boutique groups of 5. Learn naturally, speak fluently, and build confidence. Your first 2 sessions are on us!
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="bg-brand-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all">
                Join The Club
              </button>
              <button className="bg-white border-2 border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:border-brand-primary transition-all">
                See How it Works
              </button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex-1 w-full max-w-[600px] aspect-video bg-white rounded-[3rem] shadow-2xl border border-slate-100 flex items-center justify-center relative overflow-hidden group"
          >
      
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-transparent" />
      <img src={deneme1} alt="Turkish speaking club" />
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <div className="border-y border-slate-100 py-8 bg-white/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-16 gap-y-6 text-[12px] md:text-[13px] uppercase tracking-[0.25em] text-slate-400 font-bold">
          <span>500+ Students Trained</span>
          <span>25+ Countries</span>
          <span>10+ Years Teaching</span>
        </div>
      </div>

      {/* 3. PROBLEM SECTION */}
      <section className="py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-12 leading-tight">
            Learning Turkish shouldn't feel like <br /> 
            <span className="font-semibold italic">deciphering code.</span>
          </h2>
          <div className="space-y-6 text-left max-w-sm mx-auto">
            {[
              "I understand, but I can’t speak fast",
              "I translate everything in my head",
              "I feel nervous in conversations",
              "I don’t practice enough"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-slate-500">
                <X className="w-4 h-4 text-rose-300 shrink-0" />
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 & 5. HOW IT WORKS + BOUTIQUE ADVANTAGE */}
      <section className="py-32 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <div className="h-1.5 w-16 bg-brand-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 mb-20">
            {[
              { t: "Small groups", d: "Practice in intimate circles of max 4–6 students." },
              { t: "Real-life topics", d: "No boring textbooks. We discuss culture and daily life." },
              { t: "Guided feedback", d: "Get real-time corrections and personalized notes." }
            ].map((step, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-brand-primary font-mono mb-4 text-xl font-bold">0{i+1}</div>
                <h3 className="text-xl font-bold mb-4">{step.t}</h3>
                <p className="text-slate-500 leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto p-10 rounded-[3rem] border border-brand-primary/20 bg-brand-primary/[0.02] text-center">
            <h4 className="text-xl font-bold mb-8 italic">Why Small Groups Matter</h4>
            <div className="flex flex-wrap justify-center gap-8">
              {["More speaking time", "Personalized correction", "Safe environment"].map((adv, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-700 font-semibold">
                  <Check className="w-5 h-5 text-brand-secondary" /> {adv}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY DIFFERENT */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Why This Club Is Different</h2>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { t: "Speaking > Grammar", d: "We prioritize actual usage over dry, isolated rules." },
              { t: "Real Interaction", d: "Natural flow and real-world cultural context." },
              { t: "Structured Feedback", d: "Analytical approach to track your linguistic progress." }
            ].map((val, i) => (
              <div key={i} className="text-center group">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-primary/10 transition-colors">
                  <Minus className="text-brand-primary" />
                </div>
                <h3 className="font-bold mb-3 text-lg">{val.t}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[250px] mx-auto">{val.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS (Premium Card Design) */}
      <section className="py-32 bg-brand-dark text-white rounded-[4rem] mx-4 mb-32 shadow-2xl shadow-indigo-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-md">
                <p className="text-indigo-100 italic mb-8 leading-relaxed">
                  "The logic-based approach completely changed how I see Turkish grammar. It finally clicked and I can speak with confidence now."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-secondary/40 rounded-full border border-brand-secondary/30" />
                  <div>
                    <span className="block font-bold">Turkish Learner</span>
                    <span className="text-xs text-indigo-300 uppercase tracking-tighter">Verified Review</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. MEMBERSHIP SNAPSHOT */}
      <section className="py-24">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">The Membership</h2>
          <div className="space-y-6 mb-12 text-left bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
            {["First month free trial", "Weekly speaking sessions", "Small group interaction", "Affordable monthly plan"].map((item, i) => (
              <div key={i} className="flex items-center gap-4 font-bold text-slate-700">
                <Check className="text-brand-secondary w-6 h-6" /> {item}
              </div>
            ))}
          </div>
          <button className="w-full bg-brand-primary text-white py-6 rounded-2xl font-bold text-xl shadow-xl shadow-brand-primary/20 hover:scale-[1.02] transition-all">
            Join the Free Session
          </button>
        </div>
      </section>

      {/* 9. ABOUT ABDULLAH (Prestige Bio) */}
      <section className="py-32 border-t border-slate-100 bg-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-bold">Meet Abdullah</h2>
            <p className="text-slate-600 leading-relaxed text-lg italic">
               "As an **Economics** graduate and **Front-End Developer**, I don't just teach Turkish—I explain its logic. My method is built for those who value structure."
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-brand-primary font-bold hover:gap-4 transition-all text-lg group">
               Learn More About My Method <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="w-72 h-72 bg-slate-100 rounded-[3rem] -rotate-2 border-8 border-white shadow-2xl relative group overflow-hidden shrink-0">
             <div className="absolute inset-0 bg-brand-primary/5 group-hover:bg-transparent transition-colors"></div>
             <p className="flex h-full items-center justify-center text-slate-400 italic">{profile2 && <img src={profile2} alt="Instructor" className="w-full h-full object-cover" />}</p>
          </div>
        </div>
      </section>

      {/* 10. FAQ (Minimal Accordion) */}
      <section className="py-32 bg-slate-50/50">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>
          <div className="border-t border-slate-200">
            <FAQItem question="Is it beginner friendly?" answer="Yes, we have dedicated groups starting from A1 level to build your foundation through speaking." />
            <FAQItem question="How many students in a group?" answer="To ensure quality, we cap sessions at 4–6 students. This is my premium positioning." />
            <FAQItem question="What if I miss a session?" answer="Life happens! You can access the session notes and catch up in the next meeting." />
            <FAQItem question="Is there homework?" answer="No boring drills. We give you interesting topics to think about before our sessions." />
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA (Emotional Close) */}
      <section className="py-48 bg-white text-center">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-10 leading-tight">Ready to Finally Speak Turkish <br/> Confidently?</h2>
          <button className="bg-brand-primary text-white px-14 py-7 rounded-full font-bold text-2xl shadow-2xl hover:bg-brand-dark hover:scale-105 transition-all">
            Join the Free Session
          </button>
        </motion.div>
      </section>

      {/* 12. CONTACT SECTION (Orijinal yapın korundu) */}
      <ContactSection />

    </main>
  );
}