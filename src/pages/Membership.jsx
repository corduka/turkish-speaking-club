import { motion } from 'framer-motion';
import { Check, Star, Crown, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Club Member',
    subtitle: 'Perfect for consistent practice',
    price: '99',
    period: '/month',
    features: [
      '8 Group Sessions per month',
      'Max 5 students per group',
      'Weekly curated materials',
      'Access to speaking community',
      'Progress tracking'
    ],
    buttonText: 'Join the Club',
    icon: <Star className="w-6 h-6 text-brand-primary" />,
    recommended: true
  },
  {
    name: 'Private 1:1',
    subtitle: 'Tailored for rapid progress',
    price: '240',
    period: '/8 sessions',
    features: [
      'Everything in Club Member',
      '100% personalized curriculum',
      'Flexible scheduling',
      'In-depth grammar & accent work',
      'Direct WhatsApp support'
    ],
    buttonText: 'Start Private Coaching',
    icon: <Crown className="w-6 h-6 text-amber-500" />,
    recommended: false
  }
];

export default function Membership() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <section className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Simple, Transparent <span className="text-brand-primary">Pricing</span>
          </motion.h2>
          <p className="text-slate-600 max-w-xl mx-auto text-lg">
            Choose the path that fits your learning style. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={`relative p-10 rounded-[2.5rem] border ${
                plan.recommended 
                ? 'border-brand-primary shadow-2xl shadow-brand-primary/10 bg-white' 
                : 'border-slate-200 bg-slate-50/50'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <Zap className="w-4 h-4 fill-current" /> Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-6">
                {plan.icon}
                <h3 className="text-2xl font-bold">{plan.name}</h3>
              </div>
              
              <p className="text-slate-500 mb-8">{plan.subtitle}</p>

              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-5xl font-extrabold">${plan.price}</span>
                <span className="text-slate-400 font-medium">{plan.period}</span>
              </div>

              <ul className="space-y-5 mb-12">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-1 bg-brand-secondary/20 p-0.5 rounded-full">
                      <Check className="w-4 h-4 text-brand-secondary" />
                    </div>
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${
                plan.recommended 
                ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/30 hover:scale-[1.02]' 
                : 'bg-white border-2 border-slate-200 text-brand-dark hover:border-brand-primary'
              }`}>
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Trust Note */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12 text-slate-400 text-sm"
        >
          All plans include a 14-day money-back guarantee. Questions? <a href="/contact" className="text-brand-primary underline underline-offset-4 font-medium">Chat with us</a>
        </motion.p>
      </section>
    </div>
  );
}