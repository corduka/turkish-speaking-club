import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Tıklanabilirlik için gerekli
import { blogPosts, categories } from '../../data/blogData'; // Güncel veriyi çekiyoruz

export default function BlogList() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">
          Journal & <span className="text-brand-primary">Insights</span>
        </h1>
        <p className="text-lg text-slate-500 font-medium">
          Discover the intersection of Turkish language, culture, and a developer's lifestyle.
        </p>
      </div>
      
      {/* Kategori Filtreleri */}
      <div className="flex flex-wrap gap-3 mb-16">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all border ${
              activeCategory === cat 
              ? "bg-brand-primary text-white border-brand-primary shadow-lg shadow-indigo-200" 
              : "bg-white text-slate-500 border-slate-200 hover:border-brand-primary hover:text-brand-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredPosts.map((post) => (
          <motion.article 
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            key={post.id} 
            className="group"
          >
            {/* Tıklanabilir Alan: Link Bileşeni */}
            <Link to={`/blog/${post.slug}`}>
              <div className="relative h-72 mb-6 overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] text-brand-primary shadow-sm">
                  {post.category}
                </span>
              </div>

              <h2 className="text-2xl font-bold mb-3 group-hover:text-brand-primary transition-colors leading-snug">
                {post.title}
              </h2>
              
              <p className="text-slate-500 text-sm mb-6 line-clamp-2 font-medium leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{post.date}</span>
                <span className="text-[11px] font-bold text-brand-primary uppercase tracking-widest group-hover:translate-x-1 transition-transform">Read Story →</span>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
}