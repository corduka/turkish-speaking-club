import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row gap-16 items-center border border-slate-100">
          
          {/* Sol Taraf: Metin ve Güven */}
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
                
                <a href="mailto:info@turkishspeakingclub.com" className="flex items-center gap-2 text-slate-500 hover:text-brand-primary transition-colors font-medium">
                  <Mail className="w-5 h-5" /> info@turkishspeakingclub.com
                </a>
              </div>
            </motion.div>
          </div>

          {/* Sağ Taraf: Minimalist Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
          >
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea rows="4" placeholder="How can I help you?" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all resize-none"></textarea>
              </div>
              <button className="w-full bg-brand-dark text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}