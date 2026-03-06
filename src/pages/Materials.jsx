import { motion } from 'framer-motion';
import { FileText, Play, Lock, Download, Star } from 'lucide-react';

const resources = [
    { 
    title: 'Şimdiki Zaman PDF Guide (Present Continuos Tense)', 
    type: 'PDF Guide', 
    status: 'Available', 
    icon: <FileText />,
    fileName: 'simdiki-zaman.pdf', // Dosya adını buraya ekledik
    description: 'Present continuos tense, formula for positive and negative forms, and 20 example sentences to practice.'
  },
  { 
    title: 'The 100 Most Used Turkish Verbs', 
    type: 'PDF Guide', 
    status: 'Available', 
    icon: <FileText />,
    fileName: 'simdiki-zaman.pdf', // Dosya adını buraya ekledik
    description: 'Master the core of Turkish sentences with these 100 essential verbs.'
  },
  { 
    title: 'Turkish Idioms for Daily Life', 
    type: 'PDF Guide', 
    status: 'Available', 
    icon: <FileText />,
    description: 'Learn how Turks actually speak with these common metaphors.'
  },
  { 
    title: 'Weekly Practice Checklist', 
    type: 'Track-sheet', 
    status: 'Available', 
    icon: <Star />, 
    fileName: 'weekly-checklist.pdf',
    description: 'A simple habit tracker to stay consistent with your Turkish studies.'
  },
  { 
    title: 'Grammar Cheat Sheet (B1)', 
    type: 'PDF Guide', 
    status: 'Coming Soon', 
    icon: <Lock />,
    description: 'A comprehensive summary of B1 level tenses and suffixes.'
  },
  { 
    title: 'The "Mistake" Log', 
    type: 'Study Template', 
    status: 'Available', 
    icon: <FileText />,
    description: 'Don’t just make mistakes, learn from them. Use this template to note down and review your common errors.',
    fileName: 'mistake-log.pdf'
  },
];

export default function Materials() {
  return (
    <div className="pt-32 pb-20 bg-white">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 text-center mb-16">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <span className="px-4 py-1.5 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-bold tracking-wide uppercase">
            Library
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-slate-900">
            Learning <span className="text-brand-primary">Resources</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Curated materials designed to bridge the gap between sessions. Download, practice, and level up.
          </p>
        </motion.div>
      </section>

      {/* Resource Grid */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((res, i) => (
          <motion.div 
            key={i} 
            whileHover={{ y: -8 }} 
            className={`p-8 rounded-[2.5rem] border transition-all duration-300 ${
              res.status === 'Available' 
              ? 'bg-white border-slate-100 shadow-xl shadow-slate-200/40' 
              : 'bg-slate-50 border-dashed border-slate-200 opacity-80'
            }`}
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
              res.status === 'Available' ? 'bg-brand-primary/10 text-brand-primary' : 'bg-slate-200 text-slate-400'
            }`}>
              {res.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">{res.title}</h3>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
              {res.description}
            </p>
            
            {res.status === 'Available' ? (
              <a 
                href={`/materials/${res.fileName}`} // /public yazmıyoruz, direkt /materials
                download 
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold text-sm bg-slate-900 text-white hover:bg-brand-primary transition-all active:scale-95"
              >
                Download PDF <Download className="w-4 h-4" />
              </a>
            ) : (
              <div className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold text-sm bg-slate-200 text-slate-500 cursor-not-allowed">
                Coming Soon <Lock className="w-4 h-4" />
              </div>
            )}
          </motion.div>
        ))}
      </section>

      {/* Interactive Games Teaser */}
      <section className="max-w-7xl mx-auto px-6 mt-24">
        <motion.div 
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          className="bg-brand-dark rounded-[3.5rem] p-10 md:p-16 text-white overflow-hidden relative group"
        >
          <div className="relative z-10 max-w-xl">
            <div className="flex items-center gap-2 text-brand-primary mb-6">
              <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              <span className="text-sm font-bold uppercase tracking-widest">In Development</span>
            </div>
            <h3 className="text-4xl font-bold mb-6 flex items-center gap-4">
              <Play className="fill-current w-8 h-8" /> Interactive Practice
            </h3>
            <p className="text-slate-300 mb-10 text-lg leading-relaxed">
              Say goodbye to boring flashcards. We're building word games and grammar challenges to make your practice sessions addictive.
            </p>
            <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl text-sm font-bold border border-white/20">
              Launching April 2026
            </div>
          </div>
          
          {/* Arka plan dekorasyonu */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-primary/10 to-transparent pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl" />
        </motion.div>
      </section>
    </div>
  );
}