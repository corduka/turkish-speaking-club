import { motion } from 'framer-motion';
import { UserPlus, Calendar, MessageSquare, CheckCircle2 } from 'lucide-react';
import { useForm } from '../context/FormContext'; // Hook'u ekle

const steps = [
  {
    id: '01',
    title: 'Submit Your Application',
    description: 'Fill out the brief entry form. Tell me about your current level and preferred availability. No accounts, no passwords—just a direct connection to the club.',
    icon: <UserPlus className="w-8 h-8 text-brand-primary" />,
  },
  {
    id: '02',
    title: 'Personal Placement',
    description: 'I review every application to ensure you are matched with the right boutique group (A1-A2, B1-B2, or C1-C2) that fits your professional pace.',
    icon: <Calendar className="w-8 h-8 text-brand-primary" />,
  },
  {
    id: '03',
    title: 'Join the Circle',
    description: 'Once a slot opens in your designated group, you’ll receive an invitation via email with your session details and Google Meet link. Your first trial is on me.',
    icon: <MessageSquare className="w-8 h-8 text-brand-primary" />,
  },
];

export default function HowItWorks() {
  const { openForm } = useForm(); // Fonksiyonu tanımla
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <section className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-slate-900"
          >
            How it <span className="text-brand-primary italic font-serif font-light">Works</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            We’ve designed a seamless experience to get you from "understanding" to "speaking" Turkish as fast as possible.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="absolute -top-6 left-8 bg-brand-primary text-white w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg shadow-brand-primary/30">
                {step.id}
              </div>
              <div className="mb-6 mt-4">{step.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* What to Expect Section (Sleek Info Box) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-brand-dark text-white rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-10"
        >
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-6">What to expect in every session?</h3>
            <ul className="space-y-4">
              {[
                "Max 6 students for personal attention",
                "Curated weekly conversation topics",
                "Post-session feedback and vocabulary notes",
                "A friendly, judgment-free atmosphere"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-secondary w-6 h-6" />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 text-center">
            <p className="text-slate-400 mb-8 italic">"The best way to learn is to make mistakes in a safe, guided environment."</p>
            <button 
              onClick={() => openForm('how_it_works_page')} // Hangi sayfadan açıldığını belirten bir parametre gönderebilirsin
              className="bg-brand-secondary text-brand-dark px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform">
              Book Your Free Trial
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}