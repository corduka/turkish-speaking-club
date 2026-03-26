import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from '../context/FormContext';
import { 
  GraduationCap, 
  Globe2, 
  Languages, 
  ArrowRight,
  Sparkles,
  Heart,
  Anchor,
  CloudLightning
} from 'lucide-react';
import mainProfile from "../assets/main-profile.webp";

export default function About() {
  const { openForm } = useForm();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <main className="pt-40 pb-20 px-6 bg-white min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. HERO SECTION - Editorial Style */}
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8"
          >
            <Anchor className="w-3 h-3" /> From Izmir, Türkiye to Bogotá, Colombia
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-slate-900"
          >
            Meet <span className="text-brand-primary italic font-serif font-light text-7xl md:text-9xl">Abdullah.</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
            A linguist by heart, a polyglot by choice, and a mentor by mission. <br />
            <span className="text-slate-900 italic font-serif">"I don't just teach a language; I build bridges between lives."</span>
          </p>
        </div>

        {/* 2. BENTO GRID - Premium Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 h-full md:h-[1000px]"
        >
          
          {/* A. PERSONAL JOURNEY (2x2) - The Emotional Core */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 md:row-span-2 bg-slate-900 rounded-[3.5rem] p-12 flex flex-col justify-end relative overflow-hidden group shadow-2xl shadow-slate-200"
          >
             {/* Arka plan görseli veya çok hafif bir degrade */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10" />
            <img 
              src={mainProfile} 
              alt="Abdullah in Colombia" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            
            <div className="relative z-20">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="text-brand-primary w-6 h-6 fill-brand-primary" />
                <span className="text-brand-primary font-black uppercase tracking-[0.2em] text-xs">The Human Connection</span>
              </div>
              <h3 className="text-4xl font-black text-white mb-6 leading-tight">Living the <br /> Immigrant Story.</h3>
              <p className="text-slate-300 text-lg leading-relaxed font-medium">
                Living in Colombia and being married to a foreigner taught me one thing: language isn't about grammar; it's about survival and belonging. I know the frustration of silence and the joy of finally being understood.
              </p>
            </div>
          </motion.div>

          {/* B. ACADEMIC EXCELLENCE (1x1) */}
          <motion.div 
            variants={itemVariants}
            className="bg-brand-primary/5 border border-brand-primary/10 rounded-[3rem] p-10 flex flex-col justify-between group hover:bg-brand-primary transition-all duration-500"
          >
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 group-hover:rotate-12 transition-transform">
              <GraduationCap className="text-brand-primary w-7 h-7" />
            </div>
            <div>
              <h3 className="font-black text-2xl mb-3 group-hover:text-white transition-colors">Academic Honor</h3>
              <p className="text-slate-500 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                Bachelor's in Turkish Language and Literature with Honors. My expertise is rooted in the soul of the language.
              </p>
            </div>
          </motion.div>

          {/* C. THE POLYGLOT (1x1) */}
          <motion.div 
            variants={itemVariants}
            className="bg-slate-50 border border-slate-100 rounded-[3rem] p-10 flex flex-col justify-between hover:border-brand-primary/30 transition-all"
          >
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4">
              <Languages className="text-brand-secondary w-7 h-7" />
            </div>
            <div>
              <h3 className="font-black text-2xl mb-3 text-slate-900">Multilingual Mind</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Fluent in English, Spanish, and Portuguese. I decode Turkish using patterns you already know in your own tongue.
              </p>
            </div>
          </motion.div>

          {/* D. 10+ YEARS EXPERIENCE (2x1) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 bg-white border-2 border-slate-50 rounded-[3.5rem] p-12 flex items-center justify-between relative overflow-hidden"
          >
            <div className="relative z-10 flex-1">
              <div className="flex items-center gap-2 text-brand-primary font-black mb-6">
                <CloudLightning className="w-5 h-5 fill-brand-primary" /> 
                <span className="uppercase tracking-[0.2em] text-[10px]">A Decade of Excellence</span>
              </div>
              <h3 className="text-3xl font-black mb-4 text-slate-900 tracking-tight">10+ Years of Mastery.</h3>
              <p className="text-slate-500 text-base leading-relaxed max-w-sm">
                From classroom intensity to 100% online mentorship since 2020. I've refined a digital-first method that works anywhere in the world.
              </p>
            </div>
            <div className="text-[12rem] font-black text-slate-50 absolute -right-4 -bottom-10 select-none">
              10
            </div>
          </motion.div>

          {/* E. EXPERIENCE STATS (1x1) */}
          <motion.div 
            variants={itemVariants}
            className="bg-brand-secondary text-white rounded-[3rem] p-10 flex flex-col justify-center items-center text-center shadow-xl shadow-brand-secondary/20"
          >
            <div className="text-5xl font-black mb-2 tracking-tighter">500+</div>
            <div className="text-white/60 uppercase tracking-[0.2em] text-[10px] font-black">Success Stories</div>
            <div className="h-px w-12 bg-white/20 my-6"></div>
            <div className="text-sm font-bold italic font-serif">Global Reach</div>
          </motion.div>

          {/* F. CTA KUTUSU (1x1) */}
          <motion.div 
            variants={itemVariants}
            className="bg-slate-900 rounded-[3rem] p-8 flex flex-col justify-between relative overflow-hidden group"
          >
             <div className="relative z-10">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary mb-2 block">Next Step</span>
                <h4 className="text-white font-black text-lg leading-tight">Ready to start your Turkish journey?</h4>
             </div>
             <button 
              onClick={() => openForm('about_page_cta')}
              className="w-full bg-brand-primary text-white py-5 rounded-[1.5rem] font-black text-xs uppercase tracking-widest shadow-lg hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-2 group/btn relative z-10"
             >
                Book Your Call <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
             </button>
          </motion.div>

        </motion.div>

        {/* 3. VIZYON / QUOTE */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-40 max-w-4xl mx-auto text-center"
        >
          <Sparkles className="w-10 h-10 text-brand-primary mx-auto mb-10 opacity-30" />
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tighter">
            Teaching is an Art, <br /> 
            <span className="text-brand-primary italic font-serif font-light">Belonging is the Strategy.</span>
          </h2>
          <p className="text-slate-500 leading-relaxed text-xl font-medium">
            "My mission is to eliminate the 'outsider' feeling. Whether it's for your spouse, your new life in Turkey, or your career, I provide the linguistic keys to a world you've already started to build. Let's make it official."
          </p>
        </motion.div>

      </div>
    </main>
  );
}