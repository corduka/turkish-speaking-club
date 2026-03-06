import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Minus, Plus, MessageCircle, Users2, LineChart } from 'lucide-react';
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
  {
    id: 1,
    name: "Matthew P.",
    text: "Abdullah is a fantastic teacher. He's very engaging and meets you at your skill level while also challenging you to meet your goals. He approaches learning Turkish with a structured plan with measurable and achievable goals. I would highly recommend him!",
    status: "Verified Review",
    img: testimonial1
  },
  {
    id: 2,
    name: "Karina G.",
    text: "The boutique group sessions are exactly what I needed. Abdullah explains the 'why' behind the language, not just the 'how'. It feels more like a club than a boring classroom. My confidence has skyrocketed!",
    status: "Verified Review",
    img: testimonial2
  },
  {
    id: 3,
    name: "Valentina R.",
    text: "The classes are super clear and organized, which makes learning much more manageable. Something I love is that, in addition to Turkish, he also knows Spanish, and that adds a huge plus because he understands my doubts from another perspective and can explain them in a much clearer way for me.",
    status: "Verified Review",
    img: testimonial3
  }
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-brand-primary transition-colors group"
      >
        <span className="font-semibold text-slate-800 group-hover:text-brand-primary">{question}</span>
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
            <div className="pb-6 text-slate-500 leading-relaxed text-sm md:text-base">
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
        
        {/* 1. HERO SECTION */}
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
                <button 
                  onClick={() => openForm('hero_main')}
                  className="bg-brand-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all active:scale-95"
                >
                  Join The Club
                </button>
                <Link 
                  to="/how-it-works"
                  className="bg-white border-2 border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:border-brand-primary transition-all text-center flex items-center justify-center"
                >
                  See How it Works
                </Link>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex-1 w-full max-w-[600px] aspect-video bg-white rounded-[3rem] shadow-2xl border border-slate-100 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-transparent" />
              <img src={deneme1} alt="Turkish speaking club" className="w-full h-full object-cover" loading="lazy" />
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
                  <span className="text-rose-400 font-bold text-xl">✕</span>
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4 & 5. HOW IT WORKS */}
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
                { t: "Speaking > Grammar", d: "We prioritize actual usage over dry, isolated rules.", icon: <MessageCircle className="w-6 h-6 text-brand-primary" /> },
                { t: "Real Interaction", d: "Natural flow and real-world cultural context.", icon: <Users2 className="w-6 h-6 text-brand-primary" /> },
                { t: "Structured Feedback", d: "Analytical approach to track your linguistic progress.", icon: <LineChart className="w-6 h-6 text-brand-primary" /> }
              ].map((val, i) => (
                <div key={i} className="text-center group">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-primary/10 transition-all duration-300 group-hover:scale-110">
                    {val.icon}
                  </div>
                  <h3 className="font-bold mb-3 text-lg text-slate-800">{val.t}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-[250px] mx-auto">{val.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. TESTIMONIALS */}
        <section className="py-32 bg-brand-dark text-white rounded-[4rem] mx-4 mb-32 shadow-2xl">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((item) => (
                <div key={item.id} className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-md flex flex-col justify-between hover:bg-white/10 transition-colors">
                  <p className="text-indigo-100 italic mb-8 leading-relaxed">"{item.text}"</p>
                  <div className="flex items-center gap-4">
                    {item.img && <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full object-cover border border-brand-secondary/30" loading="lazy" />}
                    <div>
                      <span className="block font-bold">{item.name}</span>
                      <span className="text-xs text-indigo-300 uppercase tracking-widest">{item.status}</span>
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
            <button 
              onClick={() => openForm('center_cta')}
              className="w-full bg-brand-primary text-white py-6 rounded-2xl font-bold text-xl shadow-xl shadow-brand-primary/20 hover:scale-[1.02] transition-all active:scale-95"
            >
              Join the Free Session
            </button>
          </div>
        </section>

        {/* 9. ABOUT ABDULLAH */}
        <section className="py-32 border-t border-slate-100">
          <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8 text-center md:text-left">
              <h2 className="text-4xl font-bold">Meet Abdullah</h2>
              <p className="text-slate-600 leading-relaxed text-lg italic">
                 "As an **Economics** graduate and **Front-End Developer**, I don't just teach Turkish—I explain its logic. My method is built for those who value structure."
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-brand-primary font-bold hover:gap-4 transition-all text-lg group">
                 Learn More About My Method <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="w-72 h-72 bg-slate-100 rounded-[3rem] -rotate-2 border-8 border-white shadow-2xl relative group overflow-hidden shrink-0">
               <img src={profile2} alt="Turkish tutor Abdullah" className="w-full h-full object-cover transition-transform group-hover:scale-110" loading="lazy" />
            </div>
          </div>
        </section>

        {/* 10. FAQ */}
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

        {/* 11. FINAL CTA */}
        <section className="py-48 text-center">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto px-6"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold mb-10 leading-tight">Ready to Finally Speak Turkish <br/> Confidently?</h2>
            <button 
              onClick={() => openForm('close_footer_cta')}
              className="bg-brand-primary text-white px-14 py-7 rounded-full font-bold text-2xl shadow-2xl hover:bg-brand-dark hover:scale-105 transition-all active:scale-95"
            >
              Join the Free Session
            </button>
          </motion.div>
        </section>

        <ContactSection />
      </main>
    </>
  );
}