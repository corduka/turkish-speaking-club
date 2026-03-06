import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Kolon 1: Marka */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <div className="text-xl font-extrabold tracking-tighter text-brand-primary">
                       TURKISH<span className="text-slate-400 uppercase">SpeakingClub</span>
              </div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Master Turkish through immersive conversation. Boutique groups, personalized coaching, and a supportive community.
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              <a href="#" className="hover:text-brand-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-primary transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Kolon 2: Kaynaklar */}
          <div>
            <h4 className="font-bold text-slate-800 mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/blog" className="hover:text-brand-primary transition-colors flex items-center gap-1">Blog <ArrowUpRight className="w-3 h-3" /></Link></li>
              <li><Link to="/materials" className="hover:text-brand-primary transition-colors">Free Materials</Link></li>
              <li><span className="cursor-not-allowed opacity-70">Interactive Games (Soon)</span></li>
            </ul>
          </div>

          {/* Kolon 3: Kulüp */}
          <div>
            <h4 className="font-bold text-slate-800 mb-6">The Club</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/membership" className="hover:text-brand-primary transition-colors">Membership Plans</Link></li>
              <li><Link to="/private" className="hover:text-brand-primary transition-colors">Private 1:1 Coaching</Link></li>
              <li><Link to="/how-it-works" className="hover:text-brand-primary transition-colors">How it Works?</Link></li>
            </ul>
          </div>

          {/* Kolon 4: Destek */}
          <div>
            <h4 className="font-bold text-slate-800 mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/about" className="hover:text-brand-primary transition-colors">About Me</Link></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Terms & Privacy</a></li>
            </ul>
          </div>
        </div>

        {/* Alt Çizgi ve Telif */}
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} Turkish Speaking Club. All rights reserved.</p>
          <p>Designed with <span className="text-brand-primary">♥</span> for Turkish learners.</p>
        </div>
      </div>
    </footer>
  );
}