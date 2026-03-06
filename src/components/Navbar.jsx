import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'How it Works?', path: '/how-it-works' },
  { name: 'Membership', path: '/membership' },
  { name: 'Private 1:1', path: '/private' },
  { name: 'Materials', path: '/materials' },
  { name: 'About Me', path: '/about' },
];

export default function Navbar() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Sayfa değiştiğinde menüyü otomatik kapat
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Menü açıkken sayfanın kaymasını engelle
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
<>
{/* Tally Modal UI */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-3xl h-[85vh] rounded-[2.5rem] relative overflow-hidden shadow-2xl shadow-black/20"
            >
{/* Üstte şık bir kapatma barı */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
              <button 
                onClick={() => setIsFormOpen(false)}
                className="absolute top-6 right-6 z-10 p-2 bg-slate-100/50 hover:bg-slate-200 transition-colors rounded-full"
              >
                <X className="w-6 h-6 text-slate-600" />
              </button>
              
{/* Tally Embed - Loader ekleyerek daha profesyonel yapalım */}
        <div className="w-full h-full bg-[#F8FAFC]">
          <iframe 
            src="https://tally.so/r/kdAaGd?hideTitle=1&transparentBackground=1" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            title="Boutique Club Application"
            className="w-full h-full"
          />
        </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


    <nav className="fixed top-0 w-full z-[100] bg-white/70 backdrop-blur-lg border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-extrabold tracking-tighter text-brand-primary"
          >
            {logo1 && <img src={logo1} alt="logo" className="h-16 object-cover" loading="lazy" />}
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={item.path} className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors">
                {item.name}
              </Link>
            </motion.div>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsFormOpen(true)}
            className="bg-brand-primary text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md shadow-brand-primary/20"
          >
            Try Free
          </motion.button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden z-[110]">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-600 hover:text-brand-primary transition-colors"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
{/* Mobile Menu Overlay */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // z-[999] ile her şeyin en üstüne çıkmasını sağlıyoruz. 
      // bg-white kullanarak arka planı tamamen kapatıyoruz (yazılar görünmez).
className="fixed inset-0 h-[100dvh] w-full bg-[#F8FAFC] z-[999] md:hidden flex flex-col"
    >
{/* 1. Header: Logo ve Kapat */}
      <div className="flex-none h-20 px-6 flex items-center justify-between border-b border-slate-100 bg-white">
        <div className="text-xl font-extrabold tracking-tighter text-brand-primary">
          {logo2 && <img src={logo2} alt="logo" className="h-16 object-contain" />}
        </div>
        {/* Butonu buraya tekrar ekledik çünkü overlay nav'ın üstünde kalıyor */}
        <button 
          onClick={() => setIsOpen(false)}
          className="p-2 text-slate-600"
        >
          <X className="w-8 h-8" />
        </button>
      </div>

      {/* Menü Linkleri */}
      <div className="flex-1 flex flex-col items-center justify-center gap-6 px-10">
        {navItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="w-full text-center"
          >
            <Link 
              to={item.path} 
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold text-slate-800 active:text-brand-primary block py-2"
            >
              {item.name}
            </Link>
          </motion.div>
        ))}
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="w-full pt-6"
        >
          <button 
          onClick={() => setIsFormOpen(true)}
          className="w-full bg-brand-primary text-white py-5 rounded-2xl text-xl font-bold shadow-xl shadow-brand-primary/20">
            Try Free
          </button>
        </motion.div>
      </div>

      {/* Alt Bilgi */}
      <div className="flex-none p-10 text-center text-slate-400 border-t border-slate-50 bg-[#F8FAFC]">
        <p className="text-sm font-medium">Join the club, start talking.</p>
        <p className="text-xs mt-1">info@turkishspeakingclub.com</p>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </nav>
    </>
  );
}