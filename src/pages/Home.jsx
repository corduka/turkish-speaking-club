import { motion } from 'framer-motion';
import ContactSection from '../components/ContactSection'; // Yol, bileşenin konumuna göre değişebilir

export default function Home() {
  return (
    <main className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6"
            >
              Master Turkish <br /> 
              <span className="text-brand-primary">Through Conversation.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Join expert-led boutique groups of 5. Learn naturally, speak fluently, and build confidence. Your first 2 sessions are on us!
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="bg-brand-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all">
                Join The Club
              </button>
              <button className="bg-white border-2 border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:border-brand-primary transition-all">
                See How it Works
              </button>
            </motion.div>
          </div>

          {/* Hero Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex-1 w-full max-w-[600px] aspect-video bg-white rounded-3xl shadow-2xl border border-slate-100 flex items-center justify-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent" />
            <p className="text-slate-400 font-medium italic">Place your Google Meet UI / Student photo here</p>
          </motion.div>
        </div>
      </section>
      <ContactSection />
    </main>
  );
}