import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Clock, MessageCircle, ArrowRight, Zap, 
  Check, Star, Crown, ShieldCheck, Sparkles, Globe 
} from 'lucide-react';
import { PopupModal } from 'react-calendly';
import mainProfile from "../assets/main-profile.webp"; // Profil fotoğrafın

const plans = [
  {
    name: "Starter Club",
    price: "49",
    description: "Perfect for building consistency and overcoming speaking anxiety.",
    features: ["2 Group Sessions / week", "Access to Materials Hub", "Weekly Checklist PDF", "Community Chat Access"],
    icon: <Zap className="w-6 h-6" />,
    popular: false,
    source: "private_starter"
  },
  {
    name: "Pro Speaker",
    price: "89",
    description: "The most efficient way to reach fluency with intensive practice.",
    features: ["Unlimited Group Sessions", "1-on-1 Monthly Coaching", "Personalized Mistake Log", "Priority Support", "All Premium Materials"],
    icon: <Star className="w-6 h-6" />,
    popular: true,
    source: "private_pro"
  },
  {
    name: "Elite 1:1",
    price: "149",
    description: "Fully customized experience for rapid professional growth.",
    features: ["Exclusive 1-on-1 Sessions", "Custom Curriculum", "24/7 WhatsApp Support", "Business Turkish Focus", "Lifetime Material Access"],
    icon: <Crown className="w-6 h-6" />,
    popular: false,
    source: "private_elite"
  }
];

const features = [
  { title: 'Personalized Roadmap', desc: 'No generic lessons. We build a curriculum based on your career, travels, or personal interests.', icon: <Target className="w-6 h-6" /> },
  { title: 'Flexible Scheduling', desc: 'Life is busy. Book, reschedule, or pause your lessons with ease to fit your lifestyle.', icon: <Clock className="w-6 h-6" /> },
  { title: 'Direct Access', desc: 'Get 24/7 WhatsApp support for your quick grammar questions or Turkish culture tips.', icon: <MessageCircle className="w-6 h-6" /> },
];

export default function Private() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <>
      <PopupModal
        url="https://calendly.com/abdullah-corduk/30min"
        onModalClose={() => setIsCalendlyOpen(false)}
        open={isCalendlyOpen}
        rootElement={document.getElementById('root')}
      />

      <div className="pt-32 pb-20 bg-white overflow-x-hidden">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              className="flex-1"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-bold mb-8">
                <Sparkles className="w-4 h-4 fill-current" /> Premium Coaching
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 leading-[1.1]">
                Your Turkish Journey, <br /> 
                <span className="text-brand-primary italic font-light">Accelerated.</span>
              </h1>
              <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-xl">
                Private coaching is for those who want more than just conversation. It's a deep dive into the Turkish language, tailored specifically to your pace, logic, and life goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsCalendlyOpen(true)}
                  className="bg-brand-dark text-white px-10 py-5 rounded-[2rem] font-bold text-lg flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200"
                >
                  Book a Strategy Call <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              className="flex-1 relative"
            >
              <div className="absolute -inset-4 bg-brand-primary/5 rounded-[4rem] -rotate-3"></div>
              <div className="relative bg-white rounded-[3.5rem] overflow-hidden border-8 border-white shadow-2xl aspect-[4/5]">
                <img src={mainProfile} alt="Abdullah - Turkish Coach" className="w-full h-full object-cover" />
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-3xl border border-white/50">
                   <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-bold text-slate-800 tracking-tight">Accepting 2 new students for March</span>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="max-w-7xl mx-auto px-6 mb-40">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }} 
                className="p-10 bg-slate-50/50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-primary mb-8 shadow-sm group-hover:scale-110 transition-transform">{f.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                <p className="text-slate-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* GROWTH PATHS - FİYAT TABLOLARI */}
        <section className="py-32 bg-slate-900 rounded-[4rem] mx-4 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 blur-[100px] -z-10"></div>
          
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Choose Your <span className="text-brand-primary italic">Growth Path</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Whether you prefer the energy of a boutique group or the intensity of private coaching, we have a path for you.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative p-10 rounded-[3rem] flex flex-col transition-all duration-500 ${
                    plan.popular 
                    ? 'bg-white text-slate-900 shadow-2xl scale-105 z-10' 
                    : 'bg-white/5 text-white border border-white/10 backdrop-blur-sm'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-primary text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                      Most Popular
                    </div>
                  )}

                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${
                    plan.popular ? 'bg-brand-primary/10 text-brand-primary' : 'bg-white/10 text-brand-secondary'
                  }`}>
                    {plan.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-left">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-black">${plan.price}</span>
                    <span className={plan.popular ? 'text-slate-400' : 'text-white/40'}>/month</span>
                  </div>
                  <p className={`text-sm mb-8 text-left leading-relaxed ${plan.popular ? 'text-slate-500' : 'text-white/60'}`}>
                    {plan.description}
                  </p>

                  <div className="space-y-4 mb-12 text-left flex-grow">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-brand-primary' : 'text-brand-secondary'}`} />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => setIsCalendlyOpen(true)}
                    className={`w-full py-5 rounded-2xl font-bold transition-all active:scale-95 flex items-center justify-center gap-2 group ${
                      plan.popular 
                      ? 'bg-brand-primary text-white hover:bg-brand-dark' 
                      : 'bg-white/10 text-white hover:bg-white hover:text-slate-900'
                    }`}
                  >
                    Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="mt-20 flex flex-wrap justify-center gap-8 text-white/40 text-sm font-medium">
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5" /> Secure Payments</div>
              <div className="flex items-center gap-2"><Globe className="w-5 h-5" /> Global Timezones</div>
              <div className="flex items-center gap-2 text-brand-secondary"><Star className="w-5 h-5 fill-current" /> 100% Satisfaction Rate</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}