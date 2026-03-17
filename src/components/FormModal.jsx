import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck } from 'lucide-react';
import { useForm } from '../context/FormContext';

export default function FormModal() {
  const { isFormOpen, closeForm, formUrl } = useForm();

  return (
    <AnimatePresence>
      {isFormOpen && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={closeForm}
        >
          <motion.div 
            initial={{ scale: 0.9, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 40, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-4xl h-[90vh] md:h-[85vh] rounded-[2rem] md:rounded-[3rem] relative overflow-hidden shadow-[0_32px_64px_-15px_rgba(0,0,0,0.3)] border border-white/20"
          >
            {/* 1. Header Detail: Üstte çok ince bir marka çizgisi */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent" />

            {/* 2. Floating Close Button: Daha şık ve ulaşılabilir */}
            <button 
              onClick={closeForm}
              className="absolute top-6 right-6 z-50 group flex items-center gap-2 bg-slate-50/80 backdrop-blur-md p-2 md:pl-4 md:pr-2 py-2 rounded-full border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500"
            >
              <span className="hidden md:block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-brand-primary transition-colors">Close</span>
              <div className="bg-slate-900 rounded-full p-1 group-hover:bg-brand-primary transition-colors">
                <X className="w-4 h-4 text-white" />
              </div>
            </button>

            {/* 3. Form Content */}
            <div className="relative w-full h-full pb-4">
              {/* Iframe Loading State Shadow (İsteğe bağlı) */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-slate-50/50 to-transparent pointer-events-none" />
              
              <iframe 
                src={formUrl}
                width="100%" 
                height="100%" 
                frameBorder="0" 
                title="Boutique Club Application"
                className="w-full h-full relative z-10"
              />
            </div>

            {/* 4. Footer Trust Badge: Formun altındaki lüks detay */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-20 pointer-events-none whitespace-nowrap">
              <ShieldCheck className="w-3 h-3 text-slate-900" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-900">
                Secure Boutique Application System
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}