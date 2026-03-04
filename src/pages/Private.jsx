import { motion } from 'framer-motion';
import { Target, Clock, MessageCircle, ArrowRight, Zap } from 'lucide-react';

const features = [
  { title: 'Personalized Roadmap', desc: 'No generic lessons. We build a curriculum based on your career, travels, or personal interests.', icon: <Target className="w-6 h-6" /> },
  { title: 'Flexible Scheduling', desc: 'Life is busy. Book, reschedule, or pause your lessons with ease to fit your lifestyle.', icon: <Clock className="w-6 h-6" /> },
  { title: 'Direct Access', desc: 'Get 24/7 WhatsApp support for your quick grammar questions or Turkish culture tips.', icon: <MessageCircle className="w-6 h-6" /> },
];

export default function Private() {
  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-600 text-sm font-bold mb-6">
              <Zap className="w-4 h-4 fill-current" /> Premium Learning
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">Your Turkish Journey, <br /> <span className="text-brand-primary">Accelerated.</span></h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Private coaching is for those who want more than just a conversation. It's a deep dive into the Turkish language, tailored specifically to your pace and goals.
            </p>
            <button className="bg-brand-dark text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-slate-800 transition-all">
              Book a Strategy Call <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex-1 bg-slate-100 rounded-[3rem] aspect-square flex items-center justify-center border-8 border-white shadow-xl">
             <span className="text-slate-400 italic">Portrait or Action Photo Placeholder</span>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-8 bg-white rounded-3xl border border-slate-100">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary mb-6">{f.icon}</div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}