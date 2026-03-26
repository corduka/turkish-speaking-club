import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from '../context/FormContext';
import { Check, Globe, Wallet, ShieldCheck, Zap } from 'lucide-react';

const pricingDetails = [
  {
    name: "Boutique Club Membership",
    price: "80", // Örnektir, dilediğin gibi güncelleyebilirsin
    period: "/ month",
    description: "Ideal for heritage learners and partners looking for consistent practice.",
    features: [
      "8 Sessions Per Month (2 Hours Weekly)",
      "Intimate Groups (Strictly Max 6 Members)",
      "Structured Monthly Learning Plan",
      "Personal Post-Session Digest & Feedback",
      "Direct WhatsApp Support for Questions",
      "Cancel Anytime - No Commitment"
    ],
    highlight: true
  }
];

const paymentMethods = [
  { name: "Global", icons: "PayPal / Stripe / Wise", desc: "Easy international transfers" },
  { name: "Latin America", icons: "Nequi (Colombia)", desc: "Local payment for LatAm students" },
  { name: "Professional", icons: "Payoneer", desc: "Flexible for business transfers" },
  { name: "Turkey", icons: "All Major Bank Accounts", desc: "Direct EFT/Havale options" }
];

export default function Membership() {
  const { openForm } = useForm();

  return (
    <main className="pt-32 pb-20 px-6 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Başlık */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Simple, Transparent <span className="text-brand-primary">Pricing.</span>
          </motion.h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            No hidden fees. No complicated contracts. Just a clear path to Turkish fluency with a method that works.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          {/* 1. PAKET TABLOSU (2/3 Genişlik) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
              <div>
                <span className="bg-brand-secondary/10 text-brand-secondary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
                  Most Popular
                </span>
                <h2 className="text-3xl font-bold mt-4">{pricingDetails[0].name}</h2>
                <p className="text-slate-500 mt-2">{pricingDetails[0].description}</p>
              </div>
              <div className="text-left md:text-right">
                <span className="text-5xl font-black text-slate-900">${pricingDetails[0].price}</span>
                <span className="text-slate-400 font-medium">{pricingDetails[0].period}</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {pricingDetails[0].features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-emerald-100 p-1 rounded-full">
                    <Check className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-slate-600 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => openForm('membership_page_main')}
              className="w-full bg-brand-primary text-white py-6 rounded-2xl font-bold text-xl hover:bg-brand-dark transition-all shadow-lg shadow-brand-primary/20 flex items-center justify-center gap-3 group"
            >
              <Zap className="w-6 h-6 fill-current" /> Claim Your Free Trial Session
            </button>
                          <p className="text-slate-500 text-xs mt-5 px-1 italic">
                Payment only begins if you decide to continue after your first experience.
              </p>
          </motion.div>

          {/* 2. ÖDEME YÖNTEMLERİ (1/3 Genişlik) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-brand-dark text-white rounded-[2.5rem] p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Wallet className="w-5 h-5 text-brand-secondary" /> Flexible Payment
              </h3>
              <div className="space-y-6">
                {paymentMethods.map((method, i) => (
                  <div key={i} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <p className="text-brand-secondary text-xs font-bold uppercase tracking-widest mb-1">{method.name}</p>
                    <p className="font-semibold text-sm">{method.icons}</p>
                    <p className="text-white/50 text-xs mt-1">{method.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm">
              <ShieldCheck className="w-10 h-10 text-emerald-500 mb-4" />
              <h4 className="font-bold text-lg mb-2">Secure Enrollment</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                I believe in the quality of my logic-based method. Your journey starts with a 100% free trial session. No payment is required upfront. You only subscribe once you see the results for yourself.
              </p>
            </div>
          </motion.div>

        </div>

        {/* FAQ Seksiyonuna Link veya Küçük Not */}
        <div className="mt-20 text-center">
          <p className="text-slate-400">
            Have a specific question about payments or group hours? 
            <a href="https://wa.me/00573219372828" target="_blank" className="text-brand-primary font-bold ml-1 hover:underline">Contact me directly.</a>
          </p>
        </div>
      </div>
    </main>
  );
}