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

      {/* Spotify Playlist Section */}
<section className="max-w-7xl mx-auto px-6 mt-16">
  <motion.div 
    whileHover={{ scale: 1.01 }}
    className="bg-gradient-to-r from-[#1DB954]/10 to-transparent border border-[#1DB954]/20 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
  >
    <div className="flex items-center gap-6">
      <div className="w-20 h-20 bg-[#1DB954] rounded-2xl flex items-center justify-center shadow-lg shadow-[#1DB954]/20">
        <svg viewBox="0 0 24 24" width="40" height="40" fill="white">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.491 17.306c-.215.353-.674.463-1.026.249-2.846-1.738-6.429-2.13-10.648-1.167-.404.093-.811-.161-.904-.565-.094-.403.161-.81.565-.904 4.614-1.054 8.566-.607 11.765 1.348.351.214.462.674.248 1.039zm1.465-3.264c-.269.439-.844.579-1.282.31-3.259-1.999-8.228-2.583-12.083-1.412-.494.15-1.019-.129-1.168-.623-.15-.494.129-1.02.623-1.168 4.412-1.339 9.904-.686 13.62 1.597.438.27.579.844.31 1.282zm.128-3.411c-.323.53-1.014.697-1.544.375-3.808-2.261-10.091-2.469-13.708-1.371-.606.184-1.25-.164-1.434-.77-.184-.606.164-1.25.77-1.434 4.298-1.305 11.233-1.055 15.655 1.571.53.322.697 1.014.375 1.544z"/>
        </svg>
      </div>
      <div className="text-left">
        <h3 className="text-2xl font-bold text-slate-800">Turkish Learning Vibe</h3>
        <p className="text-slate-500">Carefully curated Turkish songs to improve your listening skills.</p>
      </div>
    </div>
    
    <a 
      href="https://open.spotify.com/playlist/7icpTHIIScVUmxJkHHFdXa?si=789bb18becfe4ce4" 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-[#1DB954] text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-[#1ed760] transition-all hover:shadow-xl hover:shadow-[#1DB954]/20 active:scale-95 whitespace-nowrap"
    >
      Listen to our official playlist
    </a>
  </motion.div>
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
              Say goodbye to boring flashcards. I'm building word games and grammar challenges to make your practice sessions addictive.
            </p>
            <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl text-sm font-bold border border-white/20 cursor-not-allowed">
              Launching July 2026
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