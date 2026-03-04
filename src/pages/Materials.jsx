import { motion } from 'framer-motion';
import { FileText, Play, Lock } from 'lucide-react';

const resources = [
  { title: 'The 100 Most Used Turkish Verbs', type: 'PDF Guide', status: 'Available', icon: <FileText /> },
  { title: 'Turkish Idioms for Daily Life', type: 'PDF Guide', status: 'Available', icon: <FileText /> },
  { title: 'Grammar Cheat Sheet (B1)', type: 'PDF Guide', status: 'Coming Soon', icon: <Lock /> },
];

export default function Materials() {
  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Learning <span className="text-brand-primary">Resources</span></h2>
        <p className="text-slate-600">Free materials to support your journey outside of our sessions.</p>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((res, i) => (
          <motion.div key={i} whileHover={{ y: -5 }} className={`p-6 rounded-3xl border transition-all ${res.status === 'Available' ? 'bg-white border-slate-100 shadow-sm' : 'bg-slate-50 border-dashed border-slate-300 opacity-70'}`}>
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${res.status === 'Available' ? 'bg-brand-primary/10 text-brand-primary' : 'bg-slate-200 text-slate-400'}`}>
              {res.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{res.title}</h3>
            <p className="text-sm text-slate-500 mb-6">{res.type}</p>
            <button disabled={res.status !== 'Available'} className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${res.status === 'Available' ? 'bg-brand-primary text-white hover:bg-brand-primary/90' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}>
              {res.status === 'Available' ? 'Download PDF' : 'Coming Soon'}
            </button>
          </motion.div>
        ))}
      </section>

      {/* Games Section Teaser */}
      <section className="max-w-7xl mx-auto px-6 mt-24">
        <div className="bg-indigo-900 rounded-[3rem] p-12 text-white overflow-hidden relative">
          <div className="relative z-10 max-w-lg">
            <h3 className="text-3xl font-bold mb-4 flex items-center gap-3"><Play className="fill-current" /> Interactive Games</h3>
            <p className="text-indigo-200 mb-8 text-lg">We are building interactive word and grammar games to make your practice addictive. Stay tuned!</p>
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/20">Coming Early 2026</div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/20 to-transparent pointer-events-none" />
        </div>
      </section>
    </div>
  );
}