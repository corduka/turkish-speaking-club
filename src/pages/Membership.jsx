import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from '../context/FormContext';
import { Check, Wallet, ShieldCheck, Zap, ArrowRight, ArrowUpRight, MessageCircle } from 'lucide-react';
import FAQItem from '../components/FAQItem';
import { Link } from 'react-router-dom';

const pricingDetails = {
  name: "Boutique Club Membership",
  price: "80",
  period: "/ month",
  description: "Perfect for professionals seeking consistent growth through logical immersion.",
  features: [
    "8 Sessions Per Month (2 Hours Weekly)",
    "Intimate Groups (Strictly Max 5 Members)",
    "Structured Monthly Learning Plan",
    "Personal Post-Session Digest & Feedback",
    "Direct WhatsApp Support for Questions",
    "Cancel or Pause Anytime"
  ]
};

const paymentMethods = [
  { name: "Global", icons: "PayPal / Stripe / Wise", desc: "Fast international transfers" },
  { name: "Latin America", icons: "Nequi / Bancolombia", desc: "Local options for LatAm" },
  { name: "Turkey", icons: "All Major Banks", desc: "Direct EFT/Havale (TL/USD)" },
  { name: "Professional", icons: "Payoneer", desc: "Ideal for business transfers" }
];

const membershipFAQs = [
  { q: "How does the free trial work?", a: "Your first session is 100% free. It’s an opportunity to experience the logic-based method and see if the group dynamic fits your style. No credit card is required to join the trial." },
  { q: "Can I pause my membership?", a: "Yes. If you have a busy month or a vacation planned, you can pause your subscription anytime. We value flexibility as much as consistency." },
  { q: "How are groups formed?", a: "Groups are curated personally by Abdullah based on your level (A1-C2) and timezone. We ensure that every member in your circle is at a similar proficiency level." },
  { q: "What is the payment schedule?", a: "Payment is requested monthly via a subscription model, only after you complete your free trial and decide to move forward with the club." }
];

export default function Membership() {
  const { openForm } = useForm();

  return (
    <main className="pt-32 pb-20 px-6 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-slate-900"
          >
            Simple, Transparent <span className="text-brand-primary italic font-serif font-light">Pricing.</span>
          </motion.h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            No hidden fees. No complicated contracts. Just a clear path to Turkish fluency with a boutique method that works.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* 1. Main Pricing Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-brand-primary text-white px-8 py-2 rounded-bl-3xl font-bold text-xs uppercase tracking-widest">
              Most Popular
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
              <div>
                <h2 className="text-3xl font-black text-slate-900 leading-tight">{pricingDetails.name}</h2>
                <p className="text-slate-500 mt-2 font-medium">{pricingDetails.description}</p>
              </div>
              <div className="text-left md:text-right">
                <span className="text-6xl font-black text-slate-900 tracking-tighter">${pricingDetails.price}</span>
                <span className="text-slate-400 font-bold text-lg">{pricingDetails.period}</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-y-4 gap-x-8 mb-12">
              {pricingDetails.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-emerald-50 p-1 rounded-full">
                    <Check className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-slate-600 font-semibold text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => openForm('membership_main')}
              className="w-full bg-brand-primary text-white py-6 rounded-2xl font-bold text-xl hover:shadow-[0_20px_40px_rgba(0,173,181,0.25)] transition-all flex items-center justify-center gap-3 group"
            >
              <Zap className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" /> 
              Claim Your Free Trial Session
            </button>
            <p className="text-slate-400 text-xs mt-6 text-center italic font-medium">
              Risk-free start. Payment only begins after your successful trial session.
            </p>
          </motion.div>

          {/* 2. Side Panel: Payments & Security */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Payment Methods */}
            <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 shadow-2xl">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <Wallet className="w-5 h-5 text-brand-secondary" /> Flexible Payment
              </h3>
              <div className="space-y-6">
                {paymentMethods.map((method, i) => (
                  <div key={i} className="group border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <p className="text-brand-secondary text-[10px] font-black uppercase tracking-widest mb-1 opacity-80">{method.name}</p>
                    <p className="font-bold text-sm text-slate-100 tracking-tight">{method.icons}</p>
                    <p className="text-slate-500 text-xs mt-1 font-medium">{method.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Security & Pause Feature */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full -mr-12 -mt-12 group-hover:scale-110 transition-transform" />
              <ShieldCheck className="w-10 h-10 text-emerald-500 mb-4" />
              <h4 className="font-bold text-lg mb-2 text-slate-900">Secure & Flexible</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                I believe in the quality of my logic-based method. No payment is required upfront.
              </p>
              <div className="pt-4 border-t border-slate-50">
                <p className="text-xs font-bold text-slate-900 uppercase tracking-tighter mb-1 italic">Pause Anytime:</p>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Have a busy month ahead? You can pause your subscription whenever you need. I value flexibility.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

{/* 3. Membership FAQ Section */}
<section className="mt-32 border-t border-slate-200 pt-32">
  <div className="max-w-4xl mx-auto">
    {/* Başlık Grubu */}
    <div className="text-center mb-20">
      <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
        Membership <span className="text-brand-primary italic font-serif font-light">Essentials</span>
      </h3>
      <p className="mt-4 text-slate-400 font-bold tracking-[0.25em] uppercase text-[10px]">
        Everything you need to know
      </p>
    </div>
    
    {/* İşte buraya ekliyoruz! Artık döngü ve link bu bileşenin içinde */}
    <FAQItem items={membershipFAQs} />
          {/* İstediğin "View All" Linki */}
      <div className="mt-20 text-center">
        <Link 
          to="/FAQ" 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-primary font-bold text-xs uppercase tracking-[0.2em] transition-all group"
        >
          <span>View All Frequently Asked Questions</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
  </div>
</section>

        {/* Bottom Support */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-6 px-8 py-4 bg-white rounded-full border border-slate-100 shadow-sm">
            <span className="text-slate-500 font-medium">Still have questions?</span>
            <a 
              href="https://wa.me/00573219372828" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-brand-primary font-black uppercase text-xs tracking-widest hover:opacity-80 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" /> Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}