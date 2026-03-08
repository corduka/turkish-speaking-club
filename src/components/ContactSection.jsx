import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageSquare, Send, CheckCircle2, Loader2, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const [status, setStatus] = useState(null); 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const formData = new FormData(e.target);
    formData.append("access_key", "fb5fe84c-8f1b-42ea-ae49-1ecb5f4accdd"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setStatus('success');
        e.target.reset(); 
        setTimeout(() => setStatus(null), 5000); 
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Arka plan dekoratif dokunuş */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-primary/5 blur-[100px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#F8FAFC] rounded-[4rem] p-8 md:p-20 flex flex-col lg:flex-row gap-20 items-center border border-slate-100 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.02)]">
          
          {/* Sol Taraf: Branding & Info */}
          <div className="flex-1 text-center lg:text-left space-y-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                <Sparkles className="w-3 h-3" /> Direct Connection
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter leading-none">
                Let’s <span className="text-brand-primary italic font-serif font-light">Talk.</span>
              </h2>
              <p className="text-slate-500 text-lg mb-12 max-w-md mx-auto lg:mx-0 leading-relaxed font-medium">
                Have a question about your level or want to discuss a custom schedule? I’m here to help you navigate your journey.
              </p>
              
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                  <div className="flex items-center gap-4 bg-white px-8 py-5 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-50 group hover:border-brand-primary/20 transition-colors">
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Response Time</p>
                      <p className="font-bold text-slate-900 leading-tight">Within 2 hours</p>
                    </div>
                  </div>
                </div>
                
                <a href="mailto:cordukabdullah@gmail.com" className="inline-flex items-center gap-3 text-slate-400 hover:text-brand-primary transition-all font-bold tracking-tight text-lg group">
                  <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-brand-primary transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  cordukabdullah@gmail.com
                </a>
              </div>
            </motion.div>
          </div>

          {/* Sağ Taraf: Premium Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full bg-white p-10 md:p-14 rounded-[3.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)] border border-slate-50 relative"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="py-20 flex flex-col items-center justify-center text-center"
                >
                  <div className="w-24 h-24 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center mb-8 animate-bounce">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight">Message Received!</h3>
                  <p className="text-slate-500 mt-4 font-medium italic font-serif">I'll get back to you shortly, Abdullah.</p>
                </motion.div>
              ) : (
                <form key="form" className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative group">
                      <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-3 block ml-1 group-focus-within:text-brand-primary transition-colors">Your Name</label>
                      <input required name="name" type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-slate-50/50 border border-slate-100 rounded-[1.5rem] focus:outline-none focus:ring-4 focus:ring-brand-primary/5 focus:bg-white focus:border-brand-primary transition-all font-medium text-slate-900" />
                    </div>
                    <div className="relative group">
                      <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-3 block ml-1 group-focus-within:text-brand-primary transition-colors">Email Address</label>
                      <input required name="email" type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-slate-50/50 border border-slate-100 rounded-[1.5rem] focus:outline-none focus:ring-4 focus:ring-brand-primary/5 focus:bg-white focus:border-brand-primary transition-all font-medium text-slate-900" />
                    </div>
                  </div>
                  <div className="relative group">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-3 block ml-1 group-focus-within:text-brand-primary transition-colors">Message</label>
                    <textarea required name="message" rows="4" placeholder="Tell me about your Turkish goals..." className="w-full px-6 py-4 bg-slate-50/50 border border-slate-100 rounded-[1.5rem] focus:outline-none focus:ring-4 focus:ring-brand-primary/5 focus:bg-white focus:border-brand-primary transition-all font-medium text-slate-900 resize-none"></textarea>
                  </div>
                  
                  <button 
                    disabled={status === 'sending'}
                    className="w-full bg-slate-900 text-white py-6 rounded-[1.5rem] font-black text-lg tracking-tight flex items-center justify-center gap-3 hover:bg-brand-primary hover:shadow-[0_20px_40px_rgba(var(--brand-primary-rgb),0.2)] transition-all duration-500 active:scale-[0.98] disabled:opacity-70 group"
                  >
                    {status === 'sending' ? (
                      <><Loader2 className="w-6 h-6 animate-spin" /> Transmitting...</>
                    ) : (
                      <>Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}