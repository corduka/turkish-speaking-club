import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

// 1. Tekil Satır Bileşeni (Daha önce yaptığın yapı)
const Item = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left transition-colors group"
      >
        <span className={`text-lg font-bold transition-colors duration-300 ${
          isOpen ? 'text-brand-primary' : 'text-slate-800 group-hover:text-brand-primary'
        }`}>
          {question}
        </span>
        <div className={`transition-colors duration-300 ${isOpen ? 'text-brand-primary' : 'text-slate-300'}`}>
          {isOpen ? <Minus className="w-4 h-4" strokeWidth={3} /> : <Plus className="w-4 h-4" strokeWidth={3} />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-500 leading-relaxed text-base">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// 2. Esas Kullanacağın Bileşen (Liste + Link + "Biri açılınca diğeri kapansın" mantığı)
const FAQItem = ({ items = [] }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="w-full">
      {/* Liste Döngüsü */}
      <div className="space-y-2">
        {items.map((item, i) => (
          <Item 
            key={i}
            question={item.q}
            answer={item.a}
            isOpen={activeIndex === i}
            onToggle={() => setActiveIndex(activeIndex === i ? null : i)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQItem;