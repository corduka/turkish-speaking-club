import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, Tag, Share2 } from 'lucide-react';
import { blogPosts } from '../../data/blogData';

export default function BlogDetail() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  // URL'deki slug ile eşleşen meta veriyi (başlık, resim vb.) buluyoruz
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    // Markdown dosyasını çekiyoruz
    fetch(`/content/blog/${slug}.md`)
      .then((res) => {
        if (!res.ok) throw new Error("Yazı içeriği (.md) bulunamadı");
        return res.text();
      })
      .then((text) => {
        setContent(text);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  if (!post) {
    return <div className="pt-40 text-center text-2xl font-bold">Post metadata not found in blogData.js</div>;
  }

  if (loading) {
    return (
      <div className="pt-40 text-center flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
        <p className="text-slate-500 font-medium">Loading story...</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>{post.title} | Turkish Speaking Club</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      {/* 1. Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-50"
        style={{ scaleX: 0, transformOrigin: "0%" }}
        whileInView={{ scaleX: 1 }}
      />

      {/* 2. Hero Section */}
      <header className="pt-32 pb-16 px-6 max-w-4xl mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-primary mb-12 transition-colors font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Journal
        </Link>
        
        <div className="flex items-center gap-4 mb-6">
          <span className="bg-slate-100 text-brand-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            {post.category}
          </span>
          <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
            <Clock className="w-4 h-4" /> 5 min read
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-8 text-slate-900 tracking-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 border-b border-slate-100 pb-12">
          <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden border-2 border-slate-50">
             <img src="/images/blog/common/abdullah.webp" alt="Abdullah" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="block font-bold text-slate-800">Abdullah Corduk</span>
            <span className="text-sm text-slate-400 font-medium">{post.date}</span>
          </div>
        </div>
      </header>

      {/* 3. Featured Image */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-[50vh] md:h-[70vh] object-cover rounded-[2.5rem] md:rounded-[4rem] shadow-2xl shadow-indigo-100"
        />
      </div>

      {/* 4. Article Content (Markdown Render) */}
      <article className="max-w-3xl mx-auto px-6 mb-32">
        <div className="prose prose-lg prose-slate prose-headings:text-slate-900 prose-headings:font-bold prose-a:text-brand-primary max-w-none">
          {/* Markdown İçeriği Burada Basılıyor */}
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>

        {/* 5. Post Footer */}
        <div className="mt-20 pt-10 border-t border-slate-100 flex flex-wrap justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-slate-400" />
            <span className="text-sm text-slate-500 font-bold uppercase tracking-wider">#TurkishCulture #Learning</span>
          </div>
          <button className="flex items-center gap-2 bg-slate-50 hover:bg-slate-100 px-6 py-2 rounded-full text-sm font-bold transition-all text-slate-600">
            <Share2 className="w-4 h-4" /> Share
          </button>
        </div>
      </article>

      {/* 6. Blog CTA */}
      <section className="bg-brand-dark py-20 px-6 mx-4 mb-12 rounded-[3rem] md:rounded-[5rem] text-center text-white shadow-2xl shadow-slate-200">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">Want to speak like a local?</h3>
        <p className="text-indigo-200 mb-10 max-w-xl mx-auto text-lg">
          Don't just read about it. Join our sessions and put your knowledge into practice today.
        </p>
        <Link to="/" className="inline-block bg-brand-primary text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-indigo-500/20">
          Join the Club
        </Link>
      </section>
    </div>
  );
}