import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Check, ArrowRight, Minus, Plus, MessageCircle, 
  Users2, LineChart, X, Star, Sparkles 
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// Bileşenler ve Assetler
import ContactSection from '../components/ContactSection';
import deneme1 from "../assets/deneme-1.png";
import profile2 from "../assets/profile2.jpg";
import testimonial1 from "../assets/testimonial1-matthew.jpg";
import testimonial2 from "../assets/testimonial2.jpg";
import testimonial3 from "../assets/testimonial3.jpeg";

// Merkezi Form Hook'u
import { useForm } from '../context/FormContext';

const testimonials = [
  { id: 1, name: "Matthew P.", text: "Abdullah is a fantastic teacher. He's very engaging and meets you at your skill level while also challenging you to meet your goals.", status: "Verified Review", img: testimonial1 },
  { id: 2, name: "Karina G.", text: "The boutique group sessions are exactly what I needed. Abdullah explains the 'why' behind the language, not just the 'how'.", status: "Verified Review", img: testimonial2 },
  { id: 3, name: "Valentina R.", text: "The classes are super clear and organized. Something I love is that he also knows Spanish, which adds a huge plus for me.", status: "Verified Review", img: testimonial3 }
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-brand-primary transition-colors group"
      >
        <span className="font-bold text-slate-800 text-lg group-hover:text-brand-primary">{question}</span>
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
            <div className="pb-6 text-slate-500 leading-relaxed text-base">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Home() {
  const { openForm } = useForm();

  return (
    <>
      <Helmet>
        <title>Home | Turkish Speaking Club - Master Turkish Naturally</title>
        <link rel="canonical" href="https://turkishspeakingclub.com/" />
      </Helmet>

      <main className="bg-white overflow-x-hidden">
        
        {/* 1. HERO SECTION (Premium Style) */}
        <section className="relative pt-48 pb-32 px-6">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-primary/5 via-transparent to-transparent -z-10" />
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-8 text-slate-900"
              >
                Master Turkish <br /> 
                <span className="text-brand-primary italic font-serif">Naturally.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-slate-500 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                Join expert-led boutique groups of 5. Learn naturally, speak fluently, and build confidence. Your first 2 sessions are on us!
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
              >
                <button 
                  onClick={() => openForm('hero_main')}
                  className="bg-brand-primary text-white px-10 py-5 rounded-[2rem] font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95"
                >
                  Join The Club
                </button>
                <Link 
                  to="/how-it-works"
                  className="bg-white border-2 border-slate-100 px-10 py-5 rounded-[2rem] font-bold text-lg hover:border-brand-primary hover:text-brand-primary transition-all flex items-center justify-center gap-2 group"
                >
                  See How it Works <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex-1 w-full max-w-[650px] relative"
            >
              <div className="absolute -inset-4 bg-brand-primary/10 rounded-[4rem] rotate-3 blur-2xl -z-10" />
              <div className="aspect-[4/3] bg-slate-100 rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-white relative group">
                <img src={deneme1} alt="Turkish speaking club" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
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

        {/* 3. PROBLEM SECTION (Deciphering Code Style) */}
        <section className="py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center text-center lg:text-left">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                  Learning Turkish shouldn't <br /> feel like <span className="text-brand-primary italic font-serif">deciphering code.</span>
                </h2>
                <p className="text-lg text-slate-500">
                  Most courses focus on rules you'll never use. We focus on the confidence you need to actually connect with people.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "I translate in my head",
                  "Nervous when speaking",
                  "I understand but can't reply",
                  "Lack of regular practice"
                ].map((item, i) => (
                  <div key={i} className="bg-slate-50 p-8 rounded-[2.5rem] flex flex-col gap-4 border border-transparent hover:border-brand-primary/10 hover:bg-white transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                      <X className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-slate-700 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. HOW IT WORKS */}
        <section className="py-40 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
              <div className="h-1.5 w-16 bg-brand-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10 mb-20">
              {[
                { t: "Small groups", d: "Practice in intimate circles of max 4–6 students." },
                { t: "Real-life topics", d: "No boring textbooks. We discuss culture and daily life." },
                { t: "Guided feedback", d: "Get real-time corrections and personalized notes." }
              ].map((step, i) => (
                <div key={i} className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-brand-primary font-serif italic mb-6 text-3xl font-bold">0{i+1}</div>
                  <h3 className="text-2xl font-bold mb-4">{step.t}</h3>
                  <p className="text-slate-500 leading-relaxed text-lg">{step.d}</p>
                </div>
              ))}
            </div>

            {/* 5. WHY SMALL GROUPS MATTER */}
            <div className="max-w-3xl mx-auto p-12 rounded-[3.5rem] border border-brand-primary/20 bg-brand-primary/[0.02] text-center shadow-inner">
              <h4 className="text-2xl font-bold mb-10 italic">Why Small Groups Matter</h4>
              <div className="flex flex-wrap justify-center gap-10">
                {["More speaking time", "Personalized correction", "Safe environment"].map((adv, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-700 font-bold text-lg">
                    <div className="bg-brand-secondary/20 p-1 rounded-full">
                      <Check className="w-5 h-5 text-brand-secondary" /> 
                    </div>
                    {adv}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. THE BOUTIQUE CLUB DIFFERENCE (Premium Grid) */}
        <section className="py-40 bg-slate-900 text-white rounded-[4rem] mx-4 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 blur-[120px] -z-10" />
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 italic font-serif">The Boutique Club Difference</h2>
              <p className="text-slate-400 text-xl max-w-xl mx-auto">Structured like a masterclass, feels like a conversation with friends.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { t: "Speaking > Grammar", d: "We prioritize actual usage over dry, isolated rules. Every session is 100% active speaking.", icon: <MessageCircle className="w-8 h-8 text-brand-secondary" /> },
                { t: "Real Interaction", d: "Small, curated groups of 4-6 students. You're never just a number here.", icon: <Users2 className="w-8 h-8 text-brand-secondary" /> },
                { t: "The Developer Logic", d: "Using my tech background to explain Turkish grammar as a logical, beautiful system.", icon: <LineChart className="w-8 h-8 text-brand-secondary" /> }
              ].map((val, i) => (
                <div key={i} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group">
                  <div className="mb-8 p-4 bg-white/5 rounded-2xl inline-block group-hover:scale-110 transition-transform">{val.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{val.t}</h3>
                  <p className="text-slate-400 leading-relaxed text-base">{val.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. TRUSTED BY LEARNERS GLOBALLY */}
        <section className="py-40">
          <div className="max-w-7xl mx-auto px-6 text-center mb-20">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-brand-secondary text-brand-secondary" />)}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Trusted by Learners Globally</h2>
          </div>
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
            {testimonials.map((item) => (
              <div key={item.id} className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all">
                <p className="text-slate-600 italic mb-10 leading-relaxed font-medium">"{item.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={item.img} alt={item.name} className="w-14 h-14 rounded-2xl object-cover" loading="lazy" />
                  <div className="text-left">
                    <span className="block font-bold text-slate-900">{item.name}</span>
                    <span className="text-[10px] text-brand-primary font-bold uppercase tracking-widest">{item.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. THE MEMBERSHIP SNAPSHOT */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-extrabold mb-12">The Membership</h2>
            <div className="space-y-6 mb-12 text-left bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
              {["First month free trial", "Weekly speaking sessions", "Small group interaction", "Affordable monthly plan"].map((item, i) => (
                <div key={i} className="flex items-center gap-4 font-bold text-slate-800 text-lg">
                  <div className="bg-emerald-100 p-1 rounded-full">
                    <Check className="text-emerald-600 w-5 h-5" /> 
                  </div>
                  {item}
                </div>
              ))}
            </div>
            <button 
              onClick={() => openForm('center_cta')}
              className="w-full bg-brand-primary text-white py-7 rounded-2xl font-bold text-2xl shadow-xl shadow-brand-primary/20 hover:scale-[1.02] transition-all active:scale-95"
            >
              Join the Free Session
            </button>
          </div>
        </section>

        {/* 9. MEET ABDULLAH */}
        <section className="py-40 border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-20">
            <div className="flex-1 space-y-8 text-center md:text-left">
              <h2 className="text-5xl font-bold font-serif italic">Meet Abdullah</h2>
              <p className="text-slate-600 leading-relaxed text-xl font-medium">
                 "As an <span className="text-brand-primary font-bold">Economics</span> graduate and <span className="text-brand-secondary font-bold">Front-End Developer</span>, I don't just teach Turkish—I explain its logic. My method is built for those who value structure."
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-brand-primary font-bold hover:gap-4 transition-all text-xl group underline decoration-brand-primary/30 underline-offset-8">
                 Learn More About My Method <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
            <div className="w-80 h-[450px] bg-slate-100 rounded-[4rem] -rotate-2 border-[12px] border-white shadow-2xl relative group overflow-hidden shrink-0">
               <img src={profile2} alt="Turkish tutor Abdullah" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
            </div>
          </div>
        </section>

        {/* 10. COMMON QUESTIONS */}
        <section className="py-40 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Common Questions</h2>
            <div className="border-t border-slate-100">
              <FAQItem question="Is it beginner friendly?" answer="Yes, we have dedicated groups starting from A1 level to build your foundation through speaking." />
              <FAQItem question="How many students in a group?" answer="To ensure quality, we cap sessions at 4–6 students. This is my premium positioning." />
              <FAQItem question="What if I miss a session?" answer="Life happens! You can access the session notes and catch up in the next meeting." />
              <FAQItem question="Is there homework?" answer="No boring drills. We give you interesting topics to think about before our sessions." />
            </div>
          </div>
        </section>

        {/* 11. FINAL CTA (Premium Style) */}
        <section className="py-60 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-slate-50/50 -z-10" />
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto px-6"
          >
            <h2 className="text-6xl md:text-8xl font-black mb-12 tracking-tight">Ready to <span className="text-brand-primary italic font-serif text-shadow-sm">Speak?</span></h2>
            <p className="text-2xl text-slate-500 mb-12 max-w-xl mx-auto">Your journey to confidence starts with a single conversation. Your first 2 sessions are 100% on us.</p>
            <button 
              onClick={() => openForm('close_footer_cta')}
              className="bg-brand-primary text-white px-20 py-8 rounded-full font-bold text-3xl shadow-[0_25px_50px_-12px_rgba(var(--brand-primary-rgb),0.5)] hover:bg-brand-dark hover:scale-105 transition-all"
            >
              Claim Your Free Trial
            </button>
          </motion.div>
        </section>

        {/* 12. CONTACT SECTION */}
        <ContactSection />
      </main>
    </>
  );
}