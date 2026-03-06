import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-light flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-[12rem] font-black text-slate-200 leading-none mb-4 select-none"
        >
          404
        </motion.div>
        
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Oops! Yolunu mu kaybettin?</h1>
        <p className="text-lg text-slate-500 mb-12 leading-relaxed font-medium">
          Aradığın sayfa göç etmiş olabilir veya linkte bir yanlışlık var. Endişelenme, 
          ana sayfamız seni bekliyor.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/" 
            className="flex items-center gap-2 bg-brand-primary text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-indigo-100 hover:scale-105 transition-all w-full sm:w-auto"
          >
            <Home className="w-5 h-5" /> Go Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-white text-slate-600 px-10 py-4 rounded-2xl font-bold border border-slate-200 hover:bg-slate-50 transition-all w-full sm:w-auto"
          >
            <ArrowLeft className="w-5 h-5" /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
}