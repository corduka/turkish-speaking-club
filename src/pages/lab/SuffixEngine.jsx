import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { roots, suffixGroups } from '../../data/lab/suffixEngineData';
import { ArrowLeft, Trash2, Plus, Info, Volume2, VolumeX, Layers, Zap, Heart, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import '../../styles/lab/suffixEngine.css';

export default function SuffixEngine() {
  const [selectedRoot, setSelectedRoot] = useState(roots[0]);
  const [activeSuffixes, setActiveSuffixes] = useState([]);
  const [isMuted, setIsMuted] = useState(false);

  const playClickSound = () => {
    if (isMuted) return;
    const audio = new Audio('/sounds/lego-click.mp3');
    audio.volume = 0.4;
    audio.play().catch(e => console.log("Audio play blocked:", e));
  };

  const getSuffixForm = (group, type = null) => {
    const vowel = selectedRoot.lastVowel.toLowerCase();
    const isVowelEnding = selectedRoot.endsWithVowel;
    const isHard = selectedRoot.isHardConsonant;

    // 1. Possessive Mantığı (Ünlüyle bitiyorsa sadece -m)
    if (group.id === "possessive") {
      return isVowelEnding ? group.vowelEnding[vowel] : group.consonantEnding[vowel];
    }

    // 2. Case Endings (Benzeşme ve Kaynaştırma Mantığı)
    if (group.id === "cases" && type) {
      let suffix = type[vowel];
      
      // Ünsüz Benzeşmesi (Fıstıkçı Şahap)
      if (isHard && type.hardVersion) {
         // Eğer locative ise 'da' yerine 'ta', ablative ise 'dan' yerine 'tan'
         suffix = suffix.replace('d', 't');
      }

      // Kaynaştırma Harfi "y" (Araba-y-a)
      if (isVowelEnding && type.buffer) {
        return type.buffer + suffix;
      }
      return suffix;
    }

    // 3. Standart Ekler (Plural/Question)
    if (type) return type[vowel];
    return group.options[vowel];
  };

  const addSuffix = (group, type = null) => {
    playClickSound();
    const label = type ? type.label : group.name;
    const value = getSuffixForm(group, type);
    setActiveSuffixes([...activeSuffixes, { id: Date.now(), groupId: group.id, label, value, color: group.color }]);
  };

  const removeSuffix = (id) => {
    playClickSound();
    setActiveSuffixes(activeSuffixes.filter(s => s.id !== id));
  };

  // Ünsüz Yumuşaması Kontrolü (Kitap -> Kitab-)
  const firstSuffix = activeSuffixes[0];
  const isVowelStart = firstSuffix && ["a", "e", "ı", "i", "u", "ü", "o", "ö"].includes(firstSuffix.value[0]);
  const displayRoot = (isVowelStart && selectedRoot.mutation) ? selectedRoot.mutation : selectedRoot.tr;

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50 relative overflow-x-hidden">
      <Helmet>
        <title>Suffix Engine | Interactive Turkish Suffix LEGO Builder</title>
        <meta name="description" content="Master Turkish vowel harmony, consonant mutation, and the Fıstıkçı Şahap rule with my interactive Suffix Engine." />
      </Helmet>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <Link to="/logic-lab" className="text-slate-400 font-black text-[10px] uppercase tracking-widest hover:text-slate-900 flex items-center gap-2">
            <ArrowLeft className="w-3 h-3" /> Back to Lab
          </Link>
          <div className="flex items-center gap-4">
            <button onClick={() => setIsMuted(!isMuted)} className="p-2 bg-white rounded-full border border-slate-200 text-slate-400 hover:text-brand-primary shadow-sm transition-all">
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <div className="bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm text-[10px] font-black uppercase tracking-widest text-slate-500">
               Suffix Engine v1.2
            </div>
          </div>
        </div>

{/* CONSTRUCTION RAIL - YENİLENEN KISIM */}
        <div className="bg-white p-6 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl shadow-black/5 border border-white mb-12 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <h3 className="text-[10px] font-black uppercase text-slate-300 tracking-[0.3em]">Word Construction</h3>
            <button onClick={() => { playClickSound(); setActiveSuffixes([]); }} className="ml-auto text-slate-300 hover:text-red-500 p-2 hover:bg-red-50 rounded-full transition-all">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2 py-8 px-6 suffix-rail">
            <motion.div layout className="lego-block bg-slate-900 px-8 py-6 text-3xl md:text-4xl min-w-[140px]">
              {displayRoot}
            </motion.div>

            <AnimatePresence>
              {activeSuffixes.map((s) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, x: -20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  onClick={() => removeSuffix(s.id)}
                  className={`lego-block ${s.color} px-6 py-6 text-2xl md:text-3xl cursor-pointer hover:brightness-110 active:scale-95 transition-all`}
                >
                  {s.groupId === "question" ? ` ${s.value}?` : `-${s.value}`}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          <div className="mt-10 flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
             <Info className="w-5 h-5 text-slate-400" />
             <p className="text-slate-500 text-sm font-medium italic">
               Grammar Profile: <span className="text-slate-900 font-bold not-italic">
                 {selectedRoot.en} {activeSuffixes.map(s => `+ ${s.label}`).join(' ')}
               </span>
             </p>
          </div>
        </div>

        {/* CONTROLS */}
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <h3 className="text-[10px] font-black uppercase text-slate-400 tracking-[0.3em] mb-6 text-center">Select Base Root</h3>
            <div className="grid grid-cols-2 gap-3">
              {roots.map((root) => (
                <button
                  key={root.tr}
                  onClick={() => { playClickSound(); setSelectedRoot(root); setActiveSuffixes([]); }}
                  className={`p-4 rounded-2xl border transition-all text-center ${
                    selectedRoot.tr === root.tr ? 'bg-slate-900 border-slate-900 shadow-lg text-white scale-105' : 'bg-white border-slate-100 hover:border-slate-300 text-slate-800'
                  }`}
                >
                  <div className="font-black text-lg">{root.tr}</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest opacity-50">{root.en}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8">
             {suffixGroups.map((group) => (
               <div key={group.id} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                  <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-[0.3em] mb-6">{group.name}</h4>
                  <div className="flex flex-wrap gap-4">
                    {group.types ? (
                      group.types.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => addSuffix(group, type)}
                          className={`group flex items-center gap-3 px-5 py-3 rounded-xl ${group.color} text-white shadow-sm hover:shadow-md active:scale-95 transition-all`}
                        >
                          <Plus className="w-4 h-4 opacity-50" />
                          <span className="font-black text-sm uppercase tracking-wider">
                             {type.label.split(' ')[0]} (-{getSuffixForm(group, type)})
                          </span>
                        </button>
                      ))
                    ) : (
                      <button
                        onClick={() => addSuffix(group)}
                        className={`group flex items-center gap-3 px-5 py-3 rounded-xl ${group.color} text-white shadow-sm hover:shadow-md active:scale-95 transition-all`}
                      >
                        <Plus className="w-4 h-4 opacity-50" />
                        <span className="font-black text-sm uppercase tracking-wider">
                          Add (-{getSuffixForm(group)})
                        </span>
                      </button>
                    )}
                  </div>
               </div>
             ))}
          </div>
        </div>

        {/* SEO & EDUCATIONAL CONTENT */}
        <div className="mt-32 pt-20 border-t border-slate-200/60 space-y-20 pb-20">
          
<section className="max-w-4xl">
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-8 flex items-center gap-4">
              <Layers className="w-10 h-10 text-emerald-500" /> Building Words with the Turkish Suffix Engine
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed font-medium">
              Turkish is famous for its "agglutinative" nature; the ability to build complex meanings by attaching 
              small, logical pieces to a central root. In my Suffix Engine, I've turned this grammatical 
              architecture into a visual playground. Think of suffixes not as abstract rules, but as LEGO blocks that click together to create a complete picture.
            </p>
          </section>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <Zap className="w-8 h-8 text-yellow-500 mb-6" />
              <h3 className="text-lg font-black mb-4 uppercase tracking-tighter">Fıstıkçı Şahap Rule</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Known as Consonant Assimilation. When a root ends in a hard consonant (like 'p' in Kitap), 
                suffixes starting with 'd' automatically harden to 't'. Watch how "Kitap-da" becomes 
                <strong> "Kitapta"</strong> instantly.
              </p>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <Layers className="w-8 h-8 text-emerald-500 mb-6" />
              <h3 className="text-lg font-black mb-4 uppercase tracking-tighter">Consonant Mutation</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                The p-ç-t-k change. When you add a vowel-starting suffix to a word like "Kitap", my engine 
                transforms it to <strong>"Kitab-"</strong>. This visual feedback makes the transition 
                intuitive for learners.
              </p>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <Heart className="w-8 h-8 text-red-500 mb-6" />
              <h3 className="text-lg font-black mb-4 uppercase tracking-tighter">Native Writing Rules</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Turkish question particles (mı/mi) are always written separately. Unlike other suffixes, 
                our LEGO builder respects this space and even adds the necessary question mark for 
                perfect grammar.
              </p>
            </div>
          </div>

<div className="bg-emerald-50 rounded-[3rem] p-10 md:p-14 border border-emerald-100">
             <h3 className="text-2xl font-black text-emerald-900 mb-6">Why Agglutination Matters?</h3>
             <div className="grid md:grid-cols-2 gap-10">
                <p className="text-emerald-800/80 font-medium leading-relaxed">
                   In many languages, you need multiple words to say "from my houses." In Turkish, this is just 
                   one word: <strong>"Evlerimden."</strong> By breaking this down into Ev (House) + ler (Plural) 
                   + im (My) + den (From), you unlock the DNA of the Turkish language.
                </p>
                <div className="flex items-center justify-center">
                   <div className="flex gap-1">
                      <div className="bg-slate-900 text-white px-3 py-2 rounded-lg text-xs font-black">EV</div>
                      <div className="bg-orange-500 text-white px-3 py-2 rounded-lg text-xs font-black">LER</div>
                      <div className="bg-emerald-500 text-white px-3 py-2 rounded-lg text-xs font-black">İM</div>
                      <div className="bg-blue-500 text-white px-3 py-2 rounded-lg text-xs font-black">DEN</div>
                   </div>
                </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}