import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Box, ArrowRight, Sparkles, Zap } from 'lucide-react';

export default function LogicLab() {
  return (
    <main className="pt-40 pb-32 px-6 max-w-7xl mx-auto min-h-screen">
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

      <div className="grid md:grid-cols-2 gap-8">
        {/* Sentence Builder Kartı */}
        <Link to="/logic-lab/sentence-builder">
          <motion.div 
            whileHover={{ y: -10 }}
            className="group bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-2xl shadow-slate-100/50 relative overflow-hidden"
          >
            <div className="bg-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary transition-colors duration-500">
              <Box className="text-white w-8 h-8" />
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-4">Sentence Builder</h3>
            <p className="text-slate-500 text-lg mb-10 font-medium">Master tenses, verbs, and adverbs in one dynamic dashboard. Build your logic visually.</p>
            <div className="flex items-center gap-2 text-brand-primary font-black uppercase text-xs tracking-[0.2em]">
              Start Experimenting <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700">
               <Sparkles className="w-32 h-32 text-slate-900" />
            </div>
          </motion.div>
        </Link>

        {/* Placeholder: Gelecek Uygulamalar */}
        <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-dashed border-slate-200 flex flex-col justify-center items-center text-center">
          <span className="bg-slate-200 text-slate-500 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">Under Development</span>
          <h3 className="text-2xl font-black text-slate-400">Suffix Engine</h3>
          <p className="text-slate-400 mt-2 max-w-xs">Soon you'll be able to attach suffixes like LEGO blocks.</p>
        </div>
      </div>
    </main>
  );
}