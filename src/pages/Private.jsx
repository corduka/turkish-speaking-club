import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Zap, Check, Crown, Star, MessageCircle, ShieldCheck, Sparkles, Heart, MapPin, Quote, ExternalLink
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
    id: 1, 
    text: "Abdullah is fantastic and dedicated tutor who is patient while also challenging me to learn more. His lessons have been adapting to my needs in a very productive way. He uses a indexed lesson plan with flashcards, annotations and also examples from my own mother tongue so that I grasp concepts better. Recommend him a lot.",
    name: "Daniel G.",
    status: "Expat in Istanbul",
    img: "../src/assets/daniel-testimonial.webp"
  },
  {
    id: 2,
    text: "Abdullah is incredibly attentive and supportive. He created a personalized learning pathway based on my goals and learning style, which has really helped me stay motivated and focused. Abdullah explains everything very clearly, going into detail when needed, so nothing feels confusing or rushed.",
    name: "Arina P.",
    status: "Tech Executive",
    img: "../src/assets/arina-testimonial.webp"
  },
  {
    id: 3,
    text: "The lessons with Abdullah are very well structured, he has prepared excellently and teaches in a way that motivates you to want to learn more Turkish. I would recommend anyone who wants to learn Turkish to take lessons with Abdullah! Bravo!",
    name: "Fabienne R.",
    status: "Language Learner",
    img: "../src/assets/fabienne-testimonial.webp"
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

        {/* 2. NIŞ SENARYOLAR */}
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

        {/* 3. THE METHOD SECTION (Marcus Resim Eklendi) */}
        <section className="py-40 bg-slate-50">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-24 items-center">
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                  Stop Memorizing. <br />
                  <span className="text-brand-primary italic font-serif font-light">Start Coding.</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
                  Traditional methods focus on grammar rules. I focus on the   <motion.span 
    initial={{ backgroundPosition: "200% 0" }}
    animate={{ backgroundPosition: "-200% 0" }}
    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
    className="inline-block py-2 bg-gradient-to-r from-white via-slate-900 to-white bg-[length:200%_auto] bg-clip-text text-transparent"
  >logic of the Turkish mind.
  </motion.span>  You will learn the mathematical structure of suffixes so you can build sentences like a native.
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
                    <p className="text-xl italic font-serif text-white/90 leading-relaxed mb-10">
                      "Abdullah's method is like finding the cheat code for Turkish. It's fast, logical, and actually sticks."
                    </p>
                    <div className="flex items-center gap-4 border-t border-white/10 pt-8">
                       <img 
                         src="../src/assets/tolga.webp" 
                         className="w-14 h-14 rounded-2xl object-cover border-2 border-slate-700" 
                         alt="Marcus" 
                       />
                       <div>
                          <p className="text-xs font-black uppercase tracking-widest text-brand-primary leading-none mb-1">MARCUS</p>
                          <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Expat in Istanbul</p>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>


        {/* 4. INSIDE THE CLUB - TESTIMONIALS (Verified Preply Badge Eklendi) */}
        <section className="py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-brand-secondary text-brand-secondary" />)}
              </motion.div>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
                Inside <span className="text-brand-primary italic font-serif">The Club</span>
              </motion.h2>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto">
                Voices from our global community of lifelong learners.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {testimonials.map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="relative p-10 bg-white rounded-[3rem] border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all duration-500 group overflow-hidden"
                >
                  <div className="absolute -inset-px bg-gradient-to-br from-brand-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  
                  <div className="absolute top-8 right-10 text-slate-100 group-hover:text-brand-primary/10 transition-colors duration-500">
                    <MessageCircle className="w-16 h-16 fill-current" />
                  </div>

                  <div className="relative z-10">
                    {/* VERIFIED PREPLY BADGE */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[9px] font-black uppercase tracking-wider mb-6 border border-emerald-100/50">
                        <Check className="w-3 h-3" /> Verified Preply Review
                    </div>

                    <p className="text-slate-600 text-lg italic leading-[1.8] mb-12 group-hover:text-slate-900 transition-colors duration-300">
                      "{item.text}"
                    </p>

                    <div className="flex items-center gap-4 border-t border-slate-50 pt-8">
                      <div className="relative">
                        <img 
                          src={item.img} 
                          alt={item.name} 
                          className="w-14 h-14 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500 rotate-3 group-hover:rotate-0 shadow-sm" 
                        />
                      </div>
                      <div className="text-left">
                        <span className="block font-bold text-slate-900 text-lg leading-none mb-1">
                          {item.name}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[10px] text-brand-primary font-black uppercase tracking-[0.15em] py-1 px-2 bg-brand-primary/5 rounded-full">
                          <ShieldCheck className="w-3 h-3" /> {item.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. PRICING SECTION */}
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
                   {["Custom-Built Curriculum", "Flexible Rescheduling", "Direct WhatsApp Access", "Cultural Coaching", "All Digital Materials", "Logic Map Hub Access"].map((f, i) => (
                       <div key={i} className="flex items-center gap-4">
                           <div className="w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                               <Check className="w-3 text-brand-primary" strokeWidth={4} />
                           </div>
                           <span className="font-bold text-slate-800 text-sm">{f}</span>
                       </div>
                   ))}
                </div>
                <button onClick={() => setIsCalendlyOpen(true)} className="w-full bg-slate-900 text-white py-8 rounded-[2rem] font-bold text-xl hover:bg-brand-primary transition-all flex items-center justify-center gap-4 group">
                  Apply for Private Coaching <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
            </div>
          </div>
        </section>

        {/* 6. FAQ SECTION */}
        <section className="py-40 max-w-4xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Common <span className="text-brand-primary italic font-serif font-light">Questions</span></h2>
            <p className="mt-4 text-slate-400 font-black tracking-widest uppercase text-[10px]">Private Coaching Details</p>
          </div>
          <FAQItem 
            items={[
              { q: "How flexible is the scheduling?", a: "Extremely. I work with students across all timezones. We set a consistent weekly slot, but you can reschedule with 12-hour notice." },
              { q: "Do I need to buy any books?", a: "No. I provide all custom-built digital materials, logic maps, and session notes. You only need a laptop or phone and a desire to speak." },
              { q: "What is a '4-Session Block'?", a: "To ensure progress, we book lessons in blocks of 4. This creates a rhythm and allows us to track your growth effectively month by month." },
              { q: "Can I switch to a Group Session later?", a: "Yes. Many private students eventually join the Club once they build their confidence in 1:1 sessions." }
            ]}
          />
        </section>
      </div>
    </>
  );
}