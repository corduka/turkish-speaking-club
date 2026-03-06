import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Star, Crown } from 'lucide-react';

const plans = [
  {
    name: "Starter Club",
    price: "49",
    description: "Perfect for building consistency and overcoming speaking anxiety.",
    features: ["2 Group Sessions / week", "Access to Materials Hub", "Weekly Checklist PDF", "Community Chat Access"],
    icon: <Zap className="w-6 h-6" />,
    popular: false,
  },
  {
    name: "Pro Speaker",
    price: "89",
    description: "The most efficient way to reach fluency with intensive practice.",
    features: ["Unlimited Group Sessions", "1-on-1 Monthly Coaching", "Personalized Mistake Log", "Priority Support", "All Premium Materials"],
    icon: <Star className="w-6 h-6" />,
    popular: true,
  },
  {
    name: "Elite 1:1",
    price: "149",
    description: "Fully customized experience for rapid professional growth.",
    features: ["Exclusive 1-on-1 Sessions", "Custom Curriculum", "24/7 WhatsApp Support", "Business Turkish Focus", "Lifetime Material Access"],
    icon: <Crown className="w-6 h-6" />,
    popular: false,
  }
];

export default function Membership() {
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Choose Your <span className="text-brand-primary">Growth Path</span>
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Join the club and start speaking Turkish with confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-[3rem] transition-all duration-500 ${
                plan.popular 
                ? 'bg-slate-900 text-white shadow-2xl shadow-blue-900/20 scale-105 z-10' 
                : 'bg-white text-slate-800 border border-slate-100 shadow-xl shadow-slate-200/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-primary text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg animate-pulse">
                  Most Popular
                </div>
              )}

              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${
                plan.popular ? 'bg-white/10 text-brand-primary' : 'bg-brand-primary/10 text-brand-primary'
              }`}>
                {plan.icon}
              </div>

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline justify-center gap-1 mb-4">
                <span className="text-4xl font-extrabold">${plan.price}</span>
                <span className={plan.popular ? 'text-slate-400' : 'text-slate-500'}>/month</span>
              </div>
              <p className={`text-sm mb-8 leading-relaxed ${plan.popular ? 'text-slate-300' : 'text-slate-500'}`}>
                {plan.description}
              </p>

              <div className="space-y-4 mb-10 text-left">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className={`mt-1 p-0.5 rounded-full ${plan.popular ? 'bg-brand-primary text-white' : 'bg-green-100 text-green-600'}`}>
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-2xl font-bold transition-all active:scale-95 ${
                plan.popular 
                ? 'bg-brand-primary text-white hover:bg-white hover:text-slate-900 shadow-lg shadow-brand-primary/20' 
                : 'bg-slate-100 text-slate-800 hover:bg-slate-900 hover:text-white'
              }`}>
                Get Started Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}