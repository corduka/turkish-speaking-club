import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { tenses, commonVerbs, conjunctions, subjects } from '../../data/lab/sentenceBuilderData'; 
import { ArrowLeft, PenTool, Trash2, CheckCircle2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../../styles/lab/sentenceBuilder.css';

export default function SentenceBuilder() {
  const [activeTense, setActiveTense] = useState('present');
  const [userSentence, setUserSentence] = useState('');
  const current = tenses[activeTense];

  const dynamicStyle = {
    '--tense-color': current.id === 'present' ? '#3B82F6' : current.id === 'past' ? '#F59E0B' : '#10B981',
  };

  // Kelime ekleme fonksiyonu
  const addWord = (word) => setUserSentence(prev => prev + (prev ? ' ' : '') + word);

  return (
    <div style={dynamicStyle} className={`pt-32 pb-20 min-h-screen transition-all duration-1000 ${current.lightColor} relative overflow-x-hidden`}>
      <div className="bg-glow-effect -top-20 -right-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* 1. TOP NAV & SELECTOR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <Link to="/logic-lab" className="text-slate-400 font-black text-[10px] uppercase tracking-widest hover:text-slate-900 flex items-center gap-2">
            <ArrowLeft className="w-3 h-3" /> Back to Lab
          </Link>
          <div className="flex bg-white/70 backdrop-blur-md p-1.5 rounded-3xl border border-white shadow-sm">
            {Object.keys(tenses).map((key) => (
              <button
                key={key}
                onClick={() => { setActiveTense(key); setUserSentence(''); }}
                className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-500 ${
                  activeTense === key ? `${tenses[key].color} text-white shadow-md` : 'text-slate-400'
                }`}
              >
                {tenses[key].title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* 2. FORMULA (ALWAYS ON TOP) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTense}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl shadow-black/5 border border-white mb-10 text-center relative overflow-hidden"
          >
             <div className="relative z-10">
                <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white ${current.color} mb-6 inline-block`}>
                  {current.english} Formula
                </span>
                <h2 className={`text-4xl md:text-6xl font-black ${current.textColor} tracking-tighter`}>
                  {current.formula}
                </h2>
                <p className="mt-4 text-slate-400 font-bold italic text-sm">E.g. {current.example}</p>
             </div>
          </motion.div>
        </AnimatePresence>

        {/* LOGIC TIP */}
        <div className="mt-16 mb-5 text-center">
           <p className="text-slate-400 text-xs font-bold flex items-center justify-center gap-2">
             <Zap className="w-3 h-3 text-brand-primary" /> Sentence Order: Subject + Object + Verb
           </p>
        </div>

        {/* 3. DRAFTING AREA (INPUT) */}
        <div className="bg-white p-8 rounded-[3rem] shadow-xl border-t-8 mb-10" style={{ borderColor: dynamicStyle['--tense-color'] }}>
          <div className="flex justify-between mb-4 px-2">
            <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest flex items-center gap-2">
              <PenTool className="w-3 h-3" /> Drafting Space
            </span>
            <button onClick={() => setUserSentence('')} className="text-slate-300 hover:text-red-500 transition-colors">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
          <textarea
            value={userSentence}
            onChange={(e) => setUserSentence(e.target.value)}
            placeholder="Build your sentence by clicking the blocks below..."
            className="w-full h-24 bg-transparent text-2xl md:text-3xl font-black text-slate-800 placeholder:text-slate-100 resize-none focus:outline-none"
          />
        </div>

        {/* 4. THE MATERIALS (BUILDING BLOCKS) */}
        <div className="space-y-10">
          
          {/* A. SUBJECTS */}
          <section>
            <h3 className="text-[10px] font-black uppercase text-slate-400 tracking-[0.3em] mb-4 ml-4">1. Subjects & Personal Endings</h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
              {subjects.map((sub) => (
                <button key={sub.tr} onClick={() => addWord(sub.tr)} className="relative group overflow-hidden bg-white p-4 rounded-2xl border border-white shadow-sm hover:shadow-md transition-all">
                  <div className="flex flex-col items-center">
                    <span className="font-black text-slate-800 text-lg">{sub.tr}</span>
                    <span className={`text-[10px] font-bold ${current.textColor}`}>{sub.suffix}</span>
                  </div>
                  <div className="absolute inset-0 bg-slate-900 text-white flex items-center justify-center text-xs font-black opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                    {sub.en}
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* B. VERBS */}
          <section>
            <h3 className="text-[10px] font-black uppercase text-slate-400 tracking-[0.3em] mb-4 ml-4">2. Verbs (Infinitive)</h3>
            <div className="flex flex-wrap gap-3">
              {commonVerbs.map((verb) => (
                <button key={verb.tr} onClick={() => addWord(verb.tr)} className="relative group bg-white px-6 py-3 rounded-2xl border border-white shadow-sm hover:border-brand-primary/20 transition-all overflow-hidden">
                  <span className="font-bold text-slate-700">{verb.tr}</span>
                  <div className="absolute inset-0 bg-brand-primary text-white flex items-center justify-center text-[10px] font-black opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                    {verb.en}
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* C. TIME ADVERBS & CONJUNCTIONS (COMBINED ROW) */}
          <div className="grid md:grid-cols-2 gap-8">
             <section>
                <h3 className="text-[10px] font-black uppercase text-slate-400 tracking-[0.3em] mb-4 ml-4">3. Time Expressions</h3>
                <div className="grid grid-cols-2 gap-3">
                  {current.adverbs.map((adv) => (
                    <button key={adv.tr} onClick={() => addWord(adv.tr)} className="relative group bg-white p-4 rounded-2xl border border-white shadow-sm transition-all overflow-hidden text-left">
                      <span className={`font-black ${current.textColor}`}>{adv.tr}</span>
                      <div className="absolute inset-0 bg-slate-800 text-white flex items-center justify-center text-[10px] font-black opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                        {adv.en}
                      </div>
                    </button>
                  ))}
                </div>
             </section>

             <section>
                <h3 className="text-[10px] font-black uppercase text-slate-400 tracking-[0.3em] mb-4 ml-4">4. Conjunctions</h3>
                <div className="flex flex-wrap gap-3">
                  {conjunctions.map((conj) => (
                    <button key={conj.tr} onClick={() => addWord(conj.tr)} className="relative group bg-red-50 px-6 py-3 rounded-2xl border border-red-100 transition-all overflow-hidden">
                      <span className="font-bold text-red-600">{conj.tr}</span>
                      <div className="absolute inset-0 bg-red-600 text-white flex items-center justify-center text-[10px] font-black opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                        {conj.en}
                      </div>
                    </button>
                  ))}
                </div>
             </section>
          </div>
        </div>
      </div>
    </div>
  );
}