import { useState } from 'react';
import { useEffect, useRef } from 'react';
import { useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Check, ArrowRight, Minus, Plus, MessageCircle, 
  Users2, LineChart, X, Star, Sparkles,ShieldCheck, Brain, ZapOff, MessageSquareOff, Timer, Globe, ArrowUpRight 
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// Bileşenler ve Assetler
import ContactSection from '../components/ContactSection';
import heroImg from "../assets/hero-image.webp";
import mainProfile from "../assets/main-profile.webp";
import testimonial1 from "../assets/testimonial-1.webp";
import testimonial2 from "../assets/testimonial-2.webp";
import testimonial3 from "../assets/testimonial-3.webp";

//Section 2: hareketli rakamlar
const AnimatedNumber = ({ value }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  // Rakamın içindeki "+" veya benzeri karakterleri ayıklayıp sadece sayıyı alıyoruz
  const numericValue = parseInt(value);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, {
        duration: 2, // 2 saniye içinde tamamlanır
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, numericValue]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};


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
                Join expert-led boutique groups of 5. Learn naturally, speak fluently, and build confidence. Your first session is free!
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
                <img src={heroImg} alt="Turkish speaking club" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
            </motion.div>
          </div>
        </section>

{/* 2. TRUST BAR - PREMIUM REDESIGN */}
<section className="relative z-20 -mt-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.04)] rounded-[2.5rem] py-10 px-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 blur-3xl -z-10" />
          
          <div className="flex flex-col md:flex-row justify-around items-center gap-12 md:gap-6">
            {[
              { label: "Happy Students", val: "500+", icon: <Users2 className="w-5 h-5" /> },
              { label: "Global Reach", val: "25+", icon: <Globe className="w-5 h-5" /> },
              { label: "Years Experience", val: "10+", icon: <Star className="w-5 h-5" /> }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center group cursor-default"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-brand-primary opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                    {stat.icon}
                  </div>
                  <span className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter italic font-serif">
                    <AnimatedNumber value={stat.val} />+
                  </span>
                </div>
                <div className="h-[1px] w-8 bg-brand-secondary/30 mb-2 group-hover:w-12 transition-all duration-500" />
                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-slate-400 font-bold">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

{/* 3. PROBLEM SECTION - RE-DESIGNED */}
        <section className="py-40 bg-white relative overflow-hidden">
          {/* Arka planda çok hafif, dekoratif bir 'kod' deseni veya grid */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none font-mono text-[10px] leading-none overflow-hidden select-none">
            {Array(20).fill("010110 fluency_not_found error_translation_loop ").map((t, i) => (
              <div key={i} className="whitespace-nowrap mb-2">{t.repeat(10)}</div>
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
                    Learning Turkish <br /> 
                    shouldn't feel like <br />
                    <span className="relative inline-block">
                      <span className="text-brand-primary italic font-serif">deciphering code.</span>
                      <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 20" fill="none">
                        <path d="M5 15C50 5 150 5 295 15" stroke="#FFD700" strokeWidth="4" strokeLinecap="round" opacity="0.3" />
                      </svg>
                    </span>
                  </h2>
                  <p className="text-xl text-slate-500 leading-relaxed max-w-lg">
                    Traditional methods treat language like a set of static rules. I treat it as a <span className="text-slate-900 font-bold">living connection. </span> 
                    Stop decoding, start speaking.
                  </p>
                </motion.div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { 
                    t: "I translate in my head", 
                    d: "The mental loop that slows you down.", 
                    icon: <Brain className="w-6 h-6" />,
                    color: "bg-blue-500" 
                  },
                  { 
                    t: "Nervous when speaking", 
                    d: "That 'blank' feeling in real conversations.", 
                    icon: <ZapOff className="w-6 h-6" />,
                    color: "bg-amber-500" 
                  },
                  { 
                    t: "I understand, but no reply", 
                    d: "The bridge between listening and speaking is broken.", 
                    icon: <MessageSquareOff className="w-6 h-6" />,
                    color: "bg-rose-500" 
                  },
                  { 
                    t: "Lack of regular practice", 
                    d: "Progress lost due to inconsistent habits.", 
                    icon: <Timer className="w-6 h-6" />,
                    color: "bg-indigo-500" 
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative bg-white p-8 rounded-[3rem] border border-slate-100 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                  >
                    {/* Kartın içindeki dekoratif gradient parlaması */}
                    <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-[0.03] group-hover:opacity-[0.08] transition-opacity ${item.color}`} />
                    
                    <div className="mb-6 relative">
                      <div className={`w-14 h-14 rounded-2xl ${item.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                        {item.icon}
                      </div>
                    </div>

                    <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-brand-primary transition-colors">
                      {item.t}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.d}
                    </p>

                    {/* Alt köşede küçük bir 'status' göstergesi */}
                    <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
                      <span className="text-[10px] font-bold text-rose-400 uppercase tracking-widest">Pain Point Detected</span>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </section>

{/* 4. HOW IT WORKS */}
        <section className="py-40 bg-[#FCFCFD]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
              <div className="max-w-2xl">
                <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Step by Step</span>
                <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">
                  How It <span className="text-brand-primary italic font-serif font-light text-6xl">Works</span>
                </h2>
              </div>
              <p className="text-slate-400 max-w-xs text-sm font-medium border-l border-slate-200 pl-6">A streamlined process designed for results.</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-16">
              {[
                { t: "Small Groups", d: "Practice in intimate circles of max 4–6 students.", icon: <Users2 className="w-5 h-5" /> },
                { t: "Real-Life Topics", d: "No boring textbooks. We discuss culture and daily life.", icon: <MessageCircle className="w-5 h-5" /> },
                { t: "Guided Feedback", d: "Receive real-time corrections and personalized notes.", icon: <LineChart className="w-5 h-5" /> }
              ].map((step, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -top-10 -left-4 text-9xl font-black text-slate-100/50 select-none pointer-events-none group-hover:text-brand-primary/5 transition-colors font-serif italic">{i + 1}</div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:border-brand-primary/30 transition-all">
                      <div className="text-brand-primary">{step.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.t}</h3>
                    <p className="text-slate-500 leading-relaxed text-base">{step.d}</p>
                    <div className="mt-8 h-[2px] w-0 bg-brand-primary group-hover:w-full transition-all duration-700" />
                  </div>
                </div>
              ))}
            </div>

{/* 5. WHY SMALL GROUPS MATTER - RE-ENVISIONED */}
            <div className="max-w-4xl mx-auto mt-32 relative group">
              {/* Dekoratif Arka Plan Parıltısı */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary/20 via-brand-secondary/20 to-brand-primary/20 rounded-[4rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative bg-white/80 backdrop-blur-xl border border-white p-12 md:p-16 rounded-[4rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden">
                {/* Sol üstte şık bir detay */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-brand-primary/5 rounded-br-[4rem] -z-10" />

                <div className="text-center relative z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="inline-block px-4 py-1.5 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
                  >
                    The Boutique Standard
                  </motion.div>
                  
                  <h4 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 tracking-tight">
                    Why <span className="text-brand-primary italic font-serif">Small Groups</span> Matter
                  </h4>

                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      { t: "More Speaking Time", d: "80% more talk-time per student compared to standard classes." },
                      { t: "Personalized Correction", d: "Individual attention to your specific accent and logic." },
                      { t: "Safe Environment", d: "A curated circle where making mistakes is part of the growth." }
                    ].map((adv, i) => (
                      <div key={i} className="flex flex-col items-center text-center px-4">
                        <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-6 text-brand-primary group-hover:scale-110 transition-transform">
                          <Check className="w-6 h-6 stroke-[3px]" />
                        </div>
                        <h5 className="font-bold text-slate-900 text-lg mb-2">{adv.t}</h5>
                        <p className="text-slate-500 text-sm leading-relaxed font-medium">{adv.d}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Alt Sağ Köşe Süsü */}
                <div className="absolute bottom-6 right-10 opacity-10">
                   <Sparkles className="w-12 h-12 text-brand-primary" />
                </div>
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
                { t: "The Architecture of Fluency", d: "Turkish is a beautifully logical system. I deconstruct complex grammar into clear frameworks for effortless fluency.", icon: <LineChart className="w-8 h-8 text-brand-secondary" /> }
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

{/* 7. INSIDE THE CLUB - TESTIMONIALS */}
<section className="py-40 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-24">
      {/* Üstteki Yıldızlar */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center gap-1 mb-6"
      >
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-brand-secondary text-brand-secondary" />
        ))}
      </motion.div>

      {/* Yeni Başlık */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4"
      >
        Inside <span className="text-brand-primary italic font-serif">The Club</span>
      </motion.h2>

      {/* Yeni Alt Başlık */}
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto"
      >
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
          {/* Hover'da parlayan arka plan efekti */}
          <div className="absolute -inset-px bg-gradient-to-br from-brand-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          
          {/* Dekoratif Tırnak İkonu */}
          <div className="absolute top-8 right-10 text-slate-100 group-hover:text-brand-primary/10 transition-colors duration-500">
            <MessageCircle className="w-16 h-16 fill-current" />
          </div>

          <div className="relative z-10">
            {/* Yıldızlar (Hover'da görünen) */}
            <div className="flex gap-0.5 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-brand-secondary text-brand-secondary" />
              ))}
            </div>

            <p className="text-slate-600 text-lg italic leading-[1.8] mb-12 group-hover:text-slate-900 transition-colors duration-300">
              "{item.text}"
            </p>

            <div className="flex items-center gap-4 border-t border-slate-50 pt-8">
              <div className="relative">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-14 h-14 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500 rotate-3 group-hover:rotate-0" 
                  loading="lazy" 
                />
                <div className="absolute -bottom-1 -right-1 bg-brand-primary text-white p-1 rounded-lg scale-0 group-hover:scale-110 transition-transform duration-500">
                  <Check className="w-3 h-3" />
                </div>
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

{/* 8. THE MEMBERSHIP - LUXURY EDITION */}
        <section className="py-40 bg-[#FAFBFC] relative overflow-hidden">
          {/* Dekoratif Arka Plan Elemanı */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,_var(--tw-gradient-stops))] from-brand-primary/5 via-transparent to-transparent pointer-events-none" />

          <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block"
            >
              Exclusive Access
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-16 tracking-tighter">
              The <span className="text-brand-primary italic font-serif font-light">Membership</span>
            </h2>

            <div className="relative group">
              {/* Kartın arkasındaki soft glow */}
              <div className="absolute -inset-4 bg-gradient-to-b from-slate-200/50 to-transparent blur-2xl rounded-[4rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="bg-white p-10 md:p-16 rounded-[4rem] border border-slate-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)] text-left relative overflow-hidden">
                {/* Premium Detay: Üstte ince bir renk şeridi */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary opacity-20" />
                
                <div className="space-y-8 mb-16">
                  {[
                    { t: "First Lesson Free Trial", d: "Zero risk. Experience the logic of the club before you join the circle." },
                    { t: "Weekly Speaking Sessions", d: "Dynamic conversations led by an expert inguist." },
                    { t: "Boutique Group Interaction", d: "Never more than 6 students. High-bandwidth learning." },
                    { t: "Tailored Study Assets", d: "Logic-based notes sent directly to your inbox." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-5 group/item">
                      <div className="mt-1 bg-brand-primary/10 p-1.5 rounded-xl group-hover/item:bg-brand-primary group-hover/item:text-white transition-colors duration-300">
                        <Check className="w-4 h-4 stroke-[3px]" /> 
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-lg leading-none mb-2">{item.t}</h4>
                        <p className="text-slate-400 text-sm font-medium">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => openForm('membership_cta')}
                  className="w-full bg-slate-900 text-white py-6 rounded-[2rem] font-bold text-xl hover:bg-brand-primary hover:shadow-[0_20px_40px_rgba(var(--brand-primary-rgb),0.3)] transition-all duration-500 flex items-center justify-center gap-3 group/btn"
                >
                  Start Free Trial 
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
                
                <p className="text-center mt-6 text-slate-400 text-[11px] font-bold uppercase tracking-widest">
                   No credit card required to start
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. MEET ABDULLAH - EDITORIAL DESIGN */}
        <section className="py-48 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-24">
              
              {/* Image Side with Decorative Elements */}
              <div className="relative shrink-0 order-2 lg:order-1">
                {/* Arka plandaki büyük dekoratif 'A' harfi veya şekil */}
                <div className="absolute -top-20 -left-20 text-[20rem] font-serif italic text-slate-50 select-none -z-10 opacity-50">
                  A
                </div>
                
                <div className="relative">
                  <div className="w-72 h-[480px] md:w-80 md:h-[520px] bg-slate-100 rounded-[5rem] rotate-2 border-[1px] border-slate-200 shadow-[40px_40px_80px_-20px_rgba(0,0,0,0.1)] overflow-hidden group">
                    <img 
                      src={mainProfile} 
                      alt="Tutor Abdullah" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-[-2deg]" 
                    />
                  </div>
                  
                  {/* Floating Badge on Image */}
                  <div className="absolute -bottom-6 -right-10 bg-white p-6 rounded-[2.5rem] shadow-2xl border border-slate-50 hidden md:block">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary">
                        <Sparkles className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Expertise</p>
                        <p className="text-sm font-black text-slate-900 italic font-serif underline decoration-brand-secondary/30">Logic-Based Turkish</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="flex-1 space-y-10 order-1 lg:order-2 text-center lg:text-left">
                <div className="space-y-4">
                  <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
                    Meet <br /> 
                    <span className="text-brand-primary italic font-serif font-light">Abdullah.</span>
                  </h2>
                  <div className="h-1 w-20 bg-brand-secondary mx-auto lg:mx-0 rounded-full" />
                </div>
                
                <div className="space-y-6">
                  <p className="text-2xl md:text-3xl text-slate-800 font-medium leading-tight tracking-tight">
                    "I don't just teach Turkish— <br className="hidden md:block" />
                    <span className="text-brand-primary">I deconstruct its logic.</span>"
                  </p>
                  <p className="text-slate-500 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                    Graduated with <span className="text-slate-900 font-bold">Honors in Turkish Language and Literature</span> and backed by <span className="text-slate-900 font-bold">10+ years </span>of professional experience, I view Turkish as a masterpiece of logic.
                  </p>
                </div>

                <div className="pt-4">
                  <Link 
                    to="/about" 
                    className="inline-flex items-center gap-4 text-slate-900 font-bold text-xl group relative pb-2 overflow-hidden"
                  >
                    <span>Learn More About My Method</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 text-brand-primary" />
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-primary/20 group-hover:bg-brand-primary transition-colors duration-300" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

{/* 10. COMMON QUESTIONS - REFINED & ELEGANT */}
        <section className="py-40 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                Common <span className="text-brand-primary italic font-serif font-light">Questions</span>
              </h2>
              <p className="mt-4 text-slate-400 font-medium tracking-widest uppercase text-[10px]">Everything you need to know</p>
            </div>
            
            <div className="space-y-4">
              {[
                { q: "Is it beginner friendly?", a: "Absolutely. I have dedicated 'First Steps' groups starting from A1 level, designed to build your foundation through natural conversation from day one." },
                { q: "How many students in a group?", a: "To ensure the highest quality of interaction, I strictly cap sessions at 4–6 students. This boutique approach is what makes the progress so rapid." },
                { q: "What if I miss a session?", a: "Life happens. While live participation is best, you'll receive detailed logic-based notes and summary of the session to keep you on track." },
                { q: "Is there homework?", a: "We replace repetitive drills with Pre-Session Briefings. Instead of worksheets, you’ll receive curated insights, short videos, or thought-provoking prompts designed to prime your mind for the next conversation." }
              ].map((item, i) => (
                <div key={i} className="group border-b border-slate-100 last:border-0">
                  <FAQItem question={item.q} answer={item.a} />
                </div>
              ))}
            </div>
            {/* FAQ Listesinin hemen altına, boşluktan sonra ekle */}
            <div className="mt-20 text-center">
              <Link 
                to="/faq" 
                className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-primary font-bold text-xs uppercase tracking-[0.2em] transition-all group"
              >
                <span>View All Frequently Asked Questions</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

{/* 11. FINAL CTA - THE MASTERCLASS FINISH */}
        <section className="py-60 relative overflow-hidden">
          {/* Arka Plan Sanatı: Dinamik Gradyan ve Işık Oyunları */}
          <div className="absolute inset-0 bg-slate-950 -z-10" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-primary/20 blur-[120px] rounded-full -z-10 opacity-50" />
          
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto px-6 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-brand-primary text-xs font-bold uppercase tracking-[0.3em] mb-12">
              <Sparkles className="w-4 h-4" /> 
              <span>Unlock the Logic</span>
            </div>

<h2 className="text-7xl md:text-9xl font-black mb-12 tracking-tighter leading-[0.85] overflow-visible">
  {/* "Ready to" - Kesilme sorunu için px-4 ve py-2 eklendi */}
  <motion.span 
    initial={{ backgroundPosition: "-200% 0" }}
    animate={{ backgroundPosition: "200% 0" }}
    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    className="inline-block px-4 py-2 bg-gradient-to-r from-white via-slate-400 to-white bg-[length:200%_auto] bg-clip-text text-transparent"
  >
    Ready to
  </motion.span> 
  <br /> 
  {/* "Speak?" */}
  <span className="text-brand-primary italic font-serif font-light drop-shadow-[0_0_30px_rgba(0,173,181,0.3)]">
    Speak?
  </span>
</h2>
<p className="text-xl md:text-2xl text-slate-500 mb-20 max-w-3xl mx-auto leading-relaxed font-medium">
  Your journey to confidence starts with a single conversation. <br className="hidden md:block" />
  <span className="inline-flex items-center flex-wrap justify-center gap-x-3">
    Your first boutique session is{/* 100% on me - Ready to ile aynı animasyon ve stil */}
  <motion.span 
    initial={{ backgroundPosition: "200% 0" }}
    animate={{ backgroundPosition: "-200% 0" }}
    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    className="inline-block py-2 bg-gradient-to-r from-white via-slate-500 to-white bg-[length:200%_auto] bg-clip-text text-transparent"
  >100% on me.
  </motion.span> 
  </span>
</p>

            <div className="flex flex-col items-center gap-8">
              <button 
                onClick={() => openForm('final_cta')}
                className="group relative bg-brand-primary text-white px-16 py-8 rounded-full font-bold text-2xl md:text-3xl shadow-[0_20px_50px_rgba(var(--brand-primary-rgb),0.3)] hover:shadow-[0_30px_70px_rgba(var(--brand-primary-rgb),0.5)] transition-all duration-500 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-4">
                  Reserve Your Seat<ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                {/* Buton içi parlama efekti */}
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
              
              <div className="flex items-center gap-6 text-slate-500 text-sm font-bold uppercase tracking-widest">
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-primary" /> No Credit Card</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-primary" /> Cancel Anytime</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 12. CONTACT SECTION */}
        <ContactSection />
      </main>
    </>
  );
}