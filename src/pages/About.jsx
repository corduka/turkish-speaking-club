import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from '../context/FormContext';
import { 
  Code2, 
  LineChart, 
  GraduationCap, 
  Globe2, 
  Languages, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import mainProfile from "../assets/main-profile.webp"; // Mevcut profil fotoğrafın

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
    <main className="pt-32 pb-20 px-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Başlık Bölümü */}
        <div className="mb-16 text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Meet the <span className="text-brand-primary italic">Architect</span> <br /> 
            Behind the Method.
          </motion.h1>
          <p className="text-slate-500 text-lg max-w-2xl">
            I don't just teach Turkish; I decode it. Combining my background in Economics and Software Engineering to offer a structured, logical approach to language.
          </p>
        </div>

        {/* BENTO GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-full md:h-[900px]"
        >
          
          {/* 1. VİDEO KUTUSU (Büyük - 2x2) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 md:row-span-2 bg-slate-900 rounded-[2.5rem] overflow-hidden relative group shadow-2xl"
          >
            <iframe 
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              src="https://www.youtube.com/embed/Qt9UWVsWeyI?si=5s-xAMMtdW_rSJ0l" 
              title="About Abdullah"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </motion.div>

          {/* 2. EKONOMİ & ANALİTİK (1x1) */}
          <motion.div 
            variants={itemVariants}
            className="bg-brand-primary/5 border border-brand-primary/10 rounded-[2.5rem] p-8 flex flex-col justify-between hover:bg-brand-primary/10 transition-colors"
          >
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4">
              <LineChart className="text-brand-primary w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Economics Mindset</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Applying structural analysis to grammar. I prioritize efficiency and clear patterns over rote memorization.
              </p>
            </div>
          </motion.div>

          {/* 3. SOFTWARE DEV (1x1) */}
          <motion.div 
            variants={itemVariants}
            className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 flex flex-col justify-between hover:border-brand-primary/30 transition-all"
          >
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4">
              <Code2 className="text-brand-secondary w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Dev Logic</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Think of Turkish as a perfectly designed system. I help you understand the 'code' so you can build your own sentences.
              </p>
            </div>
          </motion.div>

          {/* 4. İSPANYOLCA KÖPRÜSÜ (Büyük Yatay - 2x1) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 bg-brand-dark text-white rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group"
          >
            <div className="relative z-10 flex-1">
              <div className="flex items-center gap-2 text-brand-secondary font-bold mb-4">
                <Languages className="w-5 h-5" /> 
                <span>Hablas Español?</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">A Bridge Between Cultures</h3>
              <p className="text-indigo-100/70 text-sm leading-relaxed">
                Knowing Spanish allows me to explain Turkish nuances through a lens you already understand. No more "lost in translation" moments.
              </p>
            </div>
            <div className="text-6xl md:text-8xl font-black text-white/5 absolute -right-4 -bottom-4 rotate-12 group-hover:rotate-0 transition-transform duration-700">
              HOLA
            </div>
          </motion.div>

          {/* 5. İSTATİSTİKLER (1x1) */}
          <motion.div 
            variants={itemVariants}
            className="bg-white border-2 border-slate-50 rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center shadow-sm"
          >
            <div className="text-4xl font-black text-brand-primary mb-2">10+</div>
            <div className="text-slate-400 uppercase tracking-widest text-[10px] font-bold">Years of Experience</div>
            <div className="h-px w-12 bg-slate-100 my-4"></div>
            <div className="text-4xl font-black text-brand-primary mb-2">500+</div>
            <div className="text-slate-400 uppercase tracking-widest text-[10px] font-bold">Global Students</div>
          </motion.div>

          {/* 6. FOTOĞRAF VE CTA (1x1) */}
          <motion.div 
            variants={itemVariants}
            className="bg-brand-secondary/10 rounded-[2.5rem] p-6 flex flex-col justify-between relative overflow-hidden group"
          >
             <div className="flex items-center gap-3">
                <img src={mainProfile} alt="Abdullah" className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md" />
                <span className="font-bold text-slate-800 text-sm tracking-tight">Let's start your journey.</span>
             </div>
             <button 
              onClick={() => openForm('about_page_bento')}
              className="w-full bg-white text-brand-primary py-4 rounded-2xl font-bold text-sm shadow-sm hover:bg-brand-primary hover:text-white transition-all flex items-center justify-center gap-2 group/btn"
             >
                Apply Now <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
             </button>
          </motion.div>

        </motion.div>

        {/* ALT METİN / VİZYON */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 max-w-3xl mx-auto text-center"
        >
          <Sparkles className="w-8 h-8 text-brand-secondary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Teaching is an Art, Learning is a Strategy.</h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            "My goal isn't just to help you 'survive' in Turkish. I want you to feel the rhythm of the language, understand its structural beauty, and express your true self without hesitation. Join us, and let's build your fluency together."
          </p>
        </motion.div>

      </div>
    </main>
  );
}