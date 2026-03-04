import { motion } from 'framer-motion';
import { GraduationCap, Code, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-20">
      <section className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center text-center mb-20">
          <div className="w-32 h-32 bg-slate-200 rounded-full mb-8 overflow-hidden">
             {/* Profil Fotoğrafın Buraya */}
          </div>
          <h1 className="text-4xl font-bold mb-4">Merhaba, I'm your instructor.</h1>
          <p className="text-xl text-brand-primary font-medium italic">Combining analytical discipline with linguistic passion.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <p>
              I graduated from **Istanbul University** with a degree in Economics, which gave me a logical and structured approach to everything I do.
            </p>
            <p>
              Life took me from the historical streets of Istanbul to the vibrant energy of **Colombia**. This transition taught me the beauty of being a "perpetual student" and the challenges of immersive language learning.
            </p>
            <p>
              As a **Front-End Developer**, I believe in systems that work seamlessly. I apply this same logic to teaching Turkish: I break down complex grammar into clear, functional blocks.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-primary shrink-0"><GraduationCap /></div>
              <div>
                <h4 className="font-bold text-brand-dark">Economics Background</h4>
                <p className="text-sm text-slate-500">Istanbul University, Class of 2013</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-primary shrink-0"><Code /></div>
              <div>
                <h4 className="font-bold text-brand-dark">Developer Mindset</h4>
                <p className="text-sm text-slate-500">React & Modern UI Expert</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-primary shrink-0"><Globe /></div>
              <div>
                <h4 className="font-bold text-brand-dark">Global Perspective</h4>
                <p className="text-sm text-slate-500">Based in Colombia, Teaching Worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}