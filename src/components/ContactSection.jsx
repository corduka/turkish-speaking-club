import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageSquare, Send, CheckCircle2, Loader2 } from 'lucide-react';

export default function ContactSection() {
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.target);
    // Buraya Web3Forms'tan alacağın Access Key'i koymalısın
    formData.append("access_key", "fb5fe84c-8f1b-42ea-ae49-1ecb5f4accdd"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.target.reset(); // Formu temizle
        setTimeout(() => setStatus(null), 5000); // 5 sn sonra başarı mesajını kapat
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row gap-16 items-center border border-slate-100">
          
          {/* Sol Taraf: Metin */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Let's <span className="text-brand-primary">Talk.</span></h2>
              <p className="text-slate-600 text-lg mb-8">
                Have a question about your level? Want to request a specific time slot? Drop a message below.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-slate-500 font-medium">Fast Response</p>
                    <p className="font-bold text-slate-800">Usually within 2 hours</p>
                  </div>
                </div>
                
                <a href="mailto:cordukabdullah@gmail.com" className="flex items-center gap-2 text-slate-500 hover:text-brand-primary transition-colors font-medium">
                  <Mail className="w-5 h-5" /> cordukabdullah@gmail.com
                </a>
              </div>
            </motion.div>
          </div>

          {/* Sağ Taraf: Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="h-[400px] flex flex-col items-center justify-center text-center"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Message Sent!</h3>
                  <p className="text-slate-500 mt-2">I'll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form key="form" className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                      <input required name="name" type="text" placeholder="John Doe" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                      <input required name="email" type="email" placeholder="john@example.com" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <textarea required name="message" rows="4" placeholder="How can I help you?" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all resize-none"></textarea>
                  </div>
                  <button 
                    disabled={status === 'sending'}
                    className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all active:scale-[0.98] disabled:opacity-70"
                  >
                    {status === 'sending' ? (
                      <>Sending... <Loader2 className="w-4 h-4 animate-spin" /></>
                    ) : (
                      <>Send Message <Send className="w-4 h-4" /></>
                    )}
                  </button>
                  {status === 'error' && (
                    <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
                  )}
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}