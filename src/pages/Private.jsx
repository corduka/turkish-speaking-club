import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Zap, Check, Crown, Sparkles, Heart, MapPin, Quote
} from 'lucide-react';
import { PopupModal } from 'react-calendly';
import mainProfile from "../assets/main-profile.webp";
import FAQItem from '../components/FAQItem';

const nicheScenarios = [
  {
    title: "The Family Connector",
    desc: "Stop smiling awkwardly at family dinners. Learn to connect with your Turkish in-laws in their own language and culture.",
    icon: <Heart className="w-6 h-6 text-rose-500" />,
    tag: "For Expats & Spouses"
  },
  {
    title: "The Local Explorer",
    desc: "Planning to live in Turkey? Go beyond 'Merhaba'. Master bargaining and navigating daily life like a true Istanbulite.",
    icon: <MapPin className="w-6 h-6 text-emerald-500" />,
    tag: "For Future Residents"
  },
  {
    title: "The Logic Master",
    desc: "Zero Turkish? We decode the mathematical logic of the language so you can build your own sentences from Day 1.",
    icon: <Zap className="w-6 h-6 text-amber-500" />,
    tag: "Fast-Track Beginners"
  }
];

const testimonials = [
  {
    quote: "After 3 months with Abdullah, I finally understood the logic behind suffixes that 3 apps couldn't explain in a year.",
    author: "Sarah J.",
    role: "Expat in Istanbul"
  },
  {
    quote: "The personalized focus on my business needs allowed me to lead my first meeting in Turkish much sooner than expected.",
    author: "James L.",
    role: "Tech Executive"
  },
  {
    quote: "I no longer feel like a stranger at my husband's family gatherings. The cultural tips are as valuable as the language.",
    author: "Elena R.",
    role: "Language Learner"
  }
];

export default function Private() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <>
      <PopupModal
        url="https://calendly.com/abdullah-corduk/30min"
        onModalClose={() => setIsCalendlyOpen(false)}
        open={isCalendlyOpen}
        rootElement={document.getElementById('root')}
      />

      <div className="pt-32 pb-20 bg-white overflow-x-hidden font-sans">
        {/* 1. HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 mb-40">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                <Sparkles className="w-3.5 h-3.5 fill-current" /> 1:1 Private Mentorship
              </div>
              <h1 className="text-6xl lg:text-8xl font-black leading-[0.95] tracking-tighter mb-8 text-slate-900">
                Don't Just Learn. <br /> 
                <span className="text-brand-primary italic font-serif font-light">Belong.</span>
              </h1>
              <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-xl font-medium">
                My 1:1 coaching is a bespoke experience designed for <span className="text-slate-900 border-b-2 border-brand-primary/20">real-life connection</span>. We don't follow books; we follow your life.
              </p>
              <button 
                onClick={() => setIsCalendlyOpen(true)}
                className="bg-brand-dark text-white px-12 py-6 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-brand-primary transition-all shadow-xl hover:shadow-brand-primary/20"
              >
                Book Strategy Call <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex-1 relative">
                <div className="absolute -inset-6 bg-brand-primary/5 rounded-[5rem] -rotate-2"></div>
                <div className="relative bg-white rounded-[4rem] overflow-hidden border-[12px] border-white shadow-2xl">
                    <img src={mainProfile} alt="Abdullah - Turkish Coach" className="w-full h-auto grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
                    <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/80 backdrop-blur-xl rounded-3xl border border-white/50">
                        <div className="flex items-center gap-3">
                            <div className="w-2.5 h-2.5 bg-brand-primary rounded-full animate-pulse"></div>
                            <span className="text-xs font-black text-slate-800 uppercase tracking-widest">Only 2 Private Slots for March</span>
                        </div>
                    </div>
                </div>
            </motion.div>
          </div>
        </section>

        {/* 2. NIŞ SENARYOLAR (Kutucuklar daha premium) */}
        <section className="max-w-7xl mx-auto px-6 mb-40">
          <div className="grid md:grid-cols-3 gap-12">
            {nicheScenarios.map((s, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="p-12 bg-slate-50/50 rounded-[4rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 relative group"
              >
                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-sm mb-10 group-hover:scale-110 transition-transform">{s.icon}</div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary mb-4 block">{s.tag}</span>
                <h3 className="text-2xl font-black mb-4 text-slate-900">{s.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. THE METHOD SECTION */}
        <section className="py-40 bg-slate-50">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-24 items-center">
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                  Stop Memorizing. <br />
                  <span className="text-brand-primary italic font-serif font-light">Start Coding.</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
                  Traditional methods focus on grammar rules. I focus on the **Logic of the Turkish Mind**. You will learn the mathematical structure of suffixes so you can build sentences like a native.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {["Digital Logic Maps", "Zero Textbook Drills", "WhatsApp Support"].map((text, i) => (
                    <div key={i} className="flex items-center gap-4 text-slate-900 font-bold">
                      <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-brand-primary" strokeWidth={4} />
                      </div>
                      {text}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 relative">
                 <div className="absolute -inset-4 bg-brand-primary/10 rounded-full blur-3xl"></div>
                 <div className="relative bg-slate-900 p-12 rounded-[4rem] shadow-3xl transform md:rotate-2">
                    <Quote className="text-brand-primary w-12 h-12 mb-6 opacity-50" />
                    <p className="text-xl italic font-serif text-white/90 leading-relaxed">
                      "Abdullah's method is like finding the cheat code for Turkish. It's fast, logical, and actually sticks."
                    </p>
                    <p className="mt-8 text-xs font-black uppercase tracking-widest text-brand-primary">— MARCUS, EXECUTIVE</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. TESTIMONIAL GRID (3'lü Estetik Grid) */}
        <section className="py-40 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-10 border-l border-slate-100 flex flex-col justify-between">
                <p className="text-lg text-slate-700 font-medium italic mb-8">"{t.quote}"</p>
                <div>
                  <h4 className="font-black text-slate-900">{t.author}</h4>
                  <p className="text-xs font-bold text-brand-primary uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. PRICING SECTION (Platinum Choice) */}
        <section className="py-32 bg-slate-900 rounded-[5rem] mx-6 relative overflow-hidden">
          <div className="max-w-3xl mx-auto px-6 text-center text-white relative z-10">
            <h2 className="text-5xl font-black mb-16 leading-tight">
              A Bespoke Experience <br />
              <span className="text-brand-primary italic font-serif font-light">Just for You.</span>
            </h2>
            
            <div className="bg-white text-slate-900 p-12 md:p-20 rounded-[4rem] shadow-2xl text-left relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-brand-primary text-white px-10 py-4 rounded-full text-xs font-black uppercase tracking-[0.3em] shadow-xl">
                   The Platinum Choice
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-slate-100 pb-12">
                    <div>
                        <h3 className="text-3xl font-black tracking-tight mb-2">Full Private Immersion</h3>
                        <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">Boutique 1:1 Coaching</p>
                    </div>
                    <div className="mt-6 md:mt-0 text-right">
                        <span className="text-6xl font-black">$149</span>
                        <p className="text-slate-400 text-[10px] font-black uppercase tracking-tighter">Per 4-Session Block</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                   {[
                     "Custom-Built Curriculum", "Flexible Rescheduling", "Direct WhatsApp Access", 
                     "Cultural Coaching", "All Digital Materials", "Logic Map Hub Access"
                   ].map((f, i) => (
                       <div key={i} className="flex items-center gap-4">
                           <div className="w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                               <Check className="w-3 text-brand-primary" strokeWidth={4} />
                           </div>
                           <span className="font-bold text-slate-800 text-sm">{f}</span>
                       </div>
                   ))}
                </div>

                <button 
                  onClick={() => setIsCalendlyOpen(true)}
                  className="w-full bg-slate-900 text-white py-8 rounded-[2rem] font-bold text-xl hover:bg-brand-primary transition-all flex items-center justify-center gap-4 group"
                >
                  Apply for Private Coaching <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
            </div>
          </div>
        </section>

        {/* 6. FAQ SECTION (Using FAQItem Component) */}
        <section className="py-40 max-w-4xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Common <span className="text-brand-primary italic font-serif font-light">Questions</span></h2>
            <p className="mt-4 text-slate-400 font-black tracking-widest uppercase text-[10px]">Private Coaching Details</p>
          </div>
          
          <FAQItem 
            items={[
              { q: "How flexible is the scheduling?", a: "Extremely. I work with students across all timezones. We set a consistent weekly slot, but you can reschedule with 24-hour notice." },
              { q: "Do I need to buy any books?", a: "No. I provide all custom-built digital materials, logic maps, and session notes. You only need a laptop and a desire to speak." },
              { q: "What is a '4-Session Block'?", a: "To ensure progress, we book lessons in blocks of 4. This creates a rhythm and allows us to track your growth effectively month by month." },
              { q: "Can I switch to a Group Session later?", a: "Yes. Many private students eventually join the Club once they build their confidence in 1:1 sessions." }
            ]}
          />
        </section>
      </div>
    </>
  );
}