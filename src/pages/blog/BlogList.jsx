import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts, categories } from '../../data/blogData';
import { ArrowUpRight } from 'lucide-react';

export default function BlogList() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="pt-40 pb-32 px-6 max-w-7xl mx-auto bg-[#FDFDFD]">
      {/* Header */}
      <div className="max-w-3xl mb-20">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-brand-primary font-black uppercase tracking-[0.3em] text-[11px] mb-4 block"
        >
          Our Journal
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-7xl font-bold mb-8 tracking-tighter text-slate-900"
        >
          Stories from <br/> <span className="text-slate-400">the Heart of Turkey.</span>
        </motion.h1>
      </div>
      
      {/* Premium Filter Bar */}
      <div className="flex flex-wrap gap-2 mb-20 border-b border-slate-100 pb-8">
        {categories.map((cat, index) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`relative px-8 py-3 rounded-full text-sm font-bold transition-all duration-500 ${
              activeCategory === cat ? "text-white" : "text-slate-500 hover:text-slate-900"
            }`}
          >
            {activeCategory === cat && (
              <motion.div 
                layoutId="activeTab"
                className="absolute inset-0 bg-brand-primary rounded-full shadow-lg shadow-indigo-200"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{cat}</span>
          </button>
        ))}
      </div>

      {/* Animated Blog Grid */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((post) => (
            <motion.article 
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={post.id} 
              className="group relative"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                {/* Image Container with Hover Effect */}
                <div className="relative h-[400px] mb-8 overflow-hidden rounded-[2.5rem] bg-slate-200 shadow-2xl shadow-slate-200/50 transition-all duration-700 group-hover:shadow-indigo-100 group-hover:-translate-y-2">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 overflow-hidden rounded-full">
                    <div className="bg-white/80 backdrop-blur-md px-5 py-2 text-[10px] font-black uppercase tracking-widest text-brand-primary">
                      {post.category}
                    </div>
                  </div>

                  {/* Hover Arrow Button */}
                  <div className="absolute bottom-8 right-8 translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl">
                      <ArrowUpRight className="w-6 h-6 text-brand-primary" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="px-2">
                   <div className="flex items-center gap-3 mb-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-slate-200 rounded-full" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-4 leading-[1.2] group-hover:text-brand-primary transition-colors tracking-tight">
                    {post.title}
                  </h2>
                  
                  <p className="text-slate-500 text-base line-clamp-2 font-medium leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}