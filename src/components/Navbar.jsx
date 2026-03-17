import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Instagram, Linkedin, Mail } from 'lucide-react';
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import { useForm } from '../context/FormContext';

const navItems = [
  { id: '01', name: 'Home', path: '/' },
  { id: '02', name: 'How it Works?', path: '/how-it-works' },
  { id: '03', name: 'Membership', path: '/membership' },
  { id: '04', name: 'Private 1:1', path: '/private' },
  { id: '05', name: 'Materials', path: '/materials' },
  { id: '06', name: 'Meet Abdullah', path: '/about' },
];

export default function Navbar() {
  const { openForm } = useForm();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  // Framer Motion Variants
  const menuVariants = {
    closed: { opacity: 0, y: "-100%", transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } },
    open: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + i * 0.1, duration: 0.5, ease: "easeOut" }
    })
  };

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link to="/" className="z-[110]">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <img src={logo1} alt="logo" className="h-12 md:h-14 object-contain" />
          </motion.div>
        </Link>

{/* Desktop Nav - Refined Version */}
<div className="hidden md:flex items-center gap-10">
  {navItems.map((item, index) => (
    <motion.div
      key={item.name}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative group"
    >
      <Link 
        to={item.path} 
        className={`text-[11px] font-black uppercase tracking-[0.25em] transition-all duration-300 ${
          location.pathname === item.path ? 'text-brand-primary' : 'text-slate-500 hover:text-slate-900'
        }`}
      >
        {item.name}
      </Link>
      
      {/* Active Indicator: Zarif bir alt nokta */}
      {location.pathname === item.path && (
        <motion.div 
          layoutId="nav-dot"
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-primary rounded-full"
        />
      )}
    </motion.div>
  ))}

  {/* CTA Button: Sophisticated & Strong */}
  <motion.button
    whileHover={{ scale: 1.02, y: -2 }}
    whileTap={{ scale: 0.98 }}
    onClick={() => openForm('navbar')}
    className="ml-4 bg-slate-900 text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl shadow-slate-200 hover:bg-brand-primary hover:shadow-brand-primary/20 transition-all duration-500"
  >
    Try Free
  </motion.button>
</div>

        {/* Custom Premium Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-[110] relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle Menu"
        >
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            className="w-7 h-0.5 bg-slate-900 rounded-full block"
          />
          <motion.span 
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-7 h-0.5 bg-slate-900 rounded-full block"
          />
          <motion.span 
            animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            className="w-7 h-0.5 bg-slate-900 rounded-full block"
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 h-[100dvh] w-full bg-white z-[105] flex flex-col"
          >
            {/* Background Decorative Element */}
            <div className="absolute top-[-10%] right-[-10%] w-80 h-80 bg-brand-primary/5 blur-[100px] rounded-full -z-10" />

            <div className="flex-1 flex flex-col pt-32 px-10">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-10">Navigation</p>
              
              <div className="space-y-6">
                {navItems.map((item, i) => (
                  <motion.div key={item.name} custom={i} variants={itemVariants} initial="closed" animate="open">
                    <Link 
                      to={item.path} 
                      className="group flex items-end gap-4"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-[12px] font-serif italic text-brand-primary mb-2 opacity-50">{item.id}</span>
                      <span className={`text-4xl font-black tracking-tighter ${location.pathname === item.path ? 'text-brand-primary' : 'text-slate-900'}`}>
                        {item.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.8 }}
                className="mt-12"
              >
                <button 
                  onClick={() => openForm('navbar')}
                  className="w-full bg-slate-900 text-white py-6 rounded-2xl text-lg font-black tracking-tight flex items-center justify-center gap-3 active:scale-[0.98]"
                >
                  Start Your Journey <ArrowUpRight className="w-5 h-5" />
                </button>
              </motion.div>
            </div>

            {/* Footer of Mobile Menu */}
            <div className="p-10 border-t border-slate-50 flex justify-between items-center">
              <div className="flex gap-6">
                <Instagram className="w-5 h-5 text-slate-400" />
                <Linkedin className="w-5 h-5 text-slate-400" />
                <Mail className="w-5 h-5 text-slate-400" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-300 italic font-serif">
                Boutique Turkish Learning
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}