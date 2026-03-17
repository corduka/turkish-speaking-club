import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-32 pb-12 relative overflow-hidden">
      {/* Premium Depth: Arka plandaki derin gradyanlar */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-primary/5 blur-[120px] rounded-full -z-10 opacity-60" />

      <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 md:gap-16 mb-24">
          
          {/* Brand Identity */}
          <div className="md:col-span-5 lg:col-span-4 space-y-8">
            <Link to="/" className="inline-block group">
              <div className="text-2xl font-black tracking-tighter text-white">
                TURKISH <span className="text-brand-primary italic font-serif font-light tracking-normal">SPEAKING CLUB.</span>
              </div>
            </Link>
            <p className="text-slate-500 text-base leading-relaxed max-w-sm mx-auto md:mx-0 font-medium">
              Master Turkish through immersive, logic-based conversation. A boutique club designed for those who value structure and fluency.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-6 pt-4">
              {[
                { icon: <Instagram className="w-5 h-5 cursor-not-allowed" />, href: "#" },
                { icon: <Linkedin className="w-5 h-5 cursor-not-allowed" />, href: "#" },
                { icon: <Youtube className="w-5 h-5" />, href: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="w-10 h-10 rounded-xl border border-white/5 flex items-center justify-center text-slate-500 hover:text-brand-primary hover:border-brand-primary/30 hover:bg-brand-primary/5 transition-all duration-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Grouping - Mobilde grid-cols-1 yaparak alt alta dizeceğiz */}
          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            
            {/* Column: Resources */}
            <div className="space-y-8">
              <h4 className="font-black text-white uppercase tracking-[0.2em] text-[10px] opacity-50">Resources</h4>
              <ul className="space-y-5 text-[13px] font-bold tracking-tight">
                <li><Link to="/blog" className="hover:text-brand-primary transition-colors flex items-center justify-center md:justify-start gap-1 group">Blog <ArrowUpRight className="w-3 h-3 text-slate-700 group-hover:text-brand-primary transition-colors" /></Link></li>
                <li><Link to="/materials" className="hover:text-brand-primary transition-colors">Free Materials</Link></li>
                <li><span className="text-slate-700 italic font-medium">Interactive Games</span></li>
              </ul>
            </div>

            {/* Column: The Club */}
            <div className="space-y-8">
              <h4 className="font-black text-white uppercase tracking-[0.2em] text-[10px] opacity-50">The Club</h4>
              <ul className="space-y-5 text-[13px] font-bold tracking-tight">
                <li><Link to="/membership" className="hover:text-brand-primary transition-colors">Membership Plans</Link></li>
                <li><Link to="/private" className="hover:text-brand-primary transition-colors">1:1 Coaching</Link></li>
                <li><Link to="/how-it-works" className="hover:text-brand-primary transition-colors">How it Works</Link></li>
              </ul>
            </div>

            {/* Column: Support */}
            <div className="space-y-8">
              <h4 className="font-black text-white uppercase tracking-[0.2em] text-[10px] opacity-50">Support</h4>
              <ul className="space-y-5 text-[13px] font-bold tracking-tight text-center md:text-left">
                <li><Link to="/about" className="hover:text-brand-primary transition-colors">Meet Abdullah</Link></li>
                <li><Link to="/frequently-asked-questions" className="hover:text-brand-primary transition-colors">FAQs</Link></li>
                <li className="flex justify-center md:justify-start">
                  <a href="https://wa.me/00573219372828" className="hover:text-brand-primary transition-colors">WhatsApp Support</a>
                </li>
                <li><Link to="/terms-and-privacy" className="text-slate-700 hover:text-slate-500 transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar: Clean & Minimalist */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] uppercase tracking-[0.3em] font-black text-slate-700">
          <p>© {currentYear} Turkish Speaking Club.</p>
          <p className="flex items-center gap-1">
            Designed with <span className="text-brand-primary mx-1">♥</span> for Turkish learners.
          </p>
        </div>
      </div>
    </footer>
  );
}