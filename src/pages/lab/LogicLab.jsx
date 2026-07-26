import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Box, ArrowRight, Sparkles, Zap, Layers, Activity, Feather } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function LogicLab() {
  return (
    <main className="pt-40 pb-32 px-6 max-w-7xl mx-auto min-h-screen">
        <Helmet>
            <title>Logic Lab | Interactive Turkish Grammar & LEGO Suffix Builder</title>
            <meta name="description" content="Build Turkish words like LEGO blocks! Explore the Verb Engine, Suffix Engine, Word Weaver, and Sentence Builder to master Turkish conjugation and logic visually." />
            <meta property="og:title" content="Logic Lab: Visualizing Turkish Grammar" />
            <meta property="og:image" content="/images/logic-lab-preview.jpg" /> 
        </Helmet>

      <div className="text-center mb-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8"
        >
          <Zap className="w-3 h-3" /> Interactive Playground
        </motion.div>
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter mb-8">
          The Logic <span className="text-brand-primary italic font-serif font-light">Lab.</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
          Master the mechanics of Turkish through experimental, logic-based interactive tools.
        </p>
      </div>

      {/* Grid yapısı: 4 kart için md:grid-cols-2 lg:grid-cols-2 veya responsive flex/grid */}
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* 1. VERB ENGINE */}
        <Link to="/logic-lab/verb-engine">
          <motion.div 
            whileHover={{ y: -10 }}
            className="group bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-2xl shadow-slate-100/50 relative overflow-hidden h-full flex flex-col"
          >
            <div className="bg-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-600 transition-colors duration-500">
              <Activity className="text-white w-8 h-8" />
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-4">Verb Engine</h3>
            <p className="text-slate-500 text-base mb-10 font-medium flex-grow">
              The ultimate conjugation machine. Master tenses, negative forms, and person mutations with zero errors.
            </p>
            <div className="flex items-center gap-2 text-orange-600 font-black uppercase text-xs tracking-[0.2em]">
              Run the Engine <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700">
               <Activity className="w-32 h-32 text-slate-900" />
            </div>
          </motion.div>
        </Link>

        {/* 2. SUFFIX ENGINE */}
        <Link to="/logic-lab/suffix-engine">
          <motion.div 
            whileHover={{ y: -10 }}
            className="group bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-2xl shadow-slate-100/50 relative overflow-hidden h-full flex flex-col"
          >
            <div className="bg-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-500 transition-colors duration-500">
              <Layers className="text-white w-8 h-8" />
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-4">Suffix Engine</h3>
            <p className="text-slate-500 text-base mb-10 font-medium flex-grow">
              Attach suffixes like LEGO blocks. Watch vowel harmony and consonant mutation work their magic in real-time.
            </p>
            <div className="flex items-center gap-2 text-emerald-600 font-black uppercase text-xs tracking-[0.2em]">
              Build Words <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700">
               <Layers className="w-32 h-32 text-slate-900" />
            </div>
          </motion.div>
        </Link>

        {/* 3. SENTENCE BUILDER */}
        <Link to="/logic-lab/sentence-builder">
          <motion.div 
            whileHover={{ y: -10 }}
            className="group bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-2xl shadow-slate-100/50 relative overflow-hidden h-full flex flex-col"
          >
            <div className="bg-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary transition-colors duration-500">
              <Box className="text-white w-8 h-8" />
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-4">Sentence Builder</h3>
            <p className="text-slate-500 text-base mb-10 font-medium flex-grow">
              Connect verbs, adverbs, and objects. Construct complex sentences through a dynamic, visual dashboard.
            </p>
            <div className="flex items-center gap-2 text-brand-primary font-black uppercase text-xs tracking-[0.2em]">
              Start Experimenting <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700">
               <Sparkles className="w-32 h-32 text-slate-900" />
            </div>
          </motion.div>
        </Link>

        {/* 4. WORD WEAVER (YENİ UYGULAMA) */}
        <Link to="/word-weaver">
          <motion.div 
            whileHover={{ y: -10 }}
            className="group bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-2xl shadow-slate-100/50 relative overflow-hidden h-full flex flex-col"
          >
            <div className="bg-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-teal-600 transition-colors duration-500">
              <Feather className="text-white w-8 h-8" />
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-4">Word Weaver</h3>
            <p className="text-slate-500 text-base mb-10 font-medium flex-grow">
              Drag, combine, and weave Turkish vocabulary blocks into rich stories and interactive sentences.
            </p>
            <div className="flex items-center gap-2 text-teal-600 font-black uppercase text-xs tracking-[0.2em]">
              Weave Stories <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700">
               <Feather className="w-32 h-32 text-slate-900" />
            </div>
          </motion.div>
        </Link>

      </div>
    </main>
  );
}