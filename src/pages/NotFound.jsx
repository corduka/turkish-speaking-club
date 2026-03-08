import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 relative overflow-hidden">
      {/* Dekoratif Arka Plan Elemanları */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-brand-primary/5 via-transparent to-transparent -z-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-secondary/5 blur-[120px] rounded-full" />
      
      <div className="text-center max-w-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Numaradan ziyade sanatsal bir yaklaşım */}
          <div className="relative inline-block mb-12">
            <span className="text-[12rem] md:text-[16rem] font-black text-slate-100/80 leading-none select-none italic font-serif">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="px-6 py-2 bg-white/80 backdrop-blur-md border border-slate-100 rounded-full shadow-xl">
                <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-[10px] flex items-center gap-2">
                  <Sparkles className="w-3 h-3" /> Page Not Found
                </span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">
            Lost in <span className="text-brand-primary italic font-serif font-light">Translation?</span>
          </h1>
          
          <p className="text-xl text-slate-500 mb-16 leading-relaxed max-w-md mx-auto font-medium">
            The page you are looking for might have migrated or simply doesn't exist in our logical system.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link 
              to="/" 
              className="flex items-center gap-3 bg-slate-900 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-brand-primary hover:shadow-[0_20px_40px_rgba(var(--brand-primary-rgb),0.3)] transition-all duration-500 w-full md:w-auto group"
            >
              <Home className="w-5 h-5 group-hover:-translate-y-1 transition-transform" /> 
              Back to Home
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="flex items-center gap-3 bg-white text-slate-900 px-12 py-5 rounded-2xl font-bold text-lg border border-slate-200 hover:border-brand-primary/30 hover:bg-slate-50 transition-all w-full md:w-auto group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
              Go Back
            </button>
          </div>
        </motion.div>
        
        {/* Alt kısımda şık bir detay */}
        <div className="mt-24 pt-8 border-t border-slate-100 inline-block">
          <p className="text-[10px] uppercase tracking-[0.4em] text-slate-300 font-black">
            Turkish Speaking Club — Boutique Excellence
          </p>
        </div>
      </div>
    </div>
  );
}