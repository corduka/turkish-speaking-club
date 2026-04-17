import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { verbs, tenses, persons } from '../../data/lab/verbEngineData';
import { ArrowLeft, Volume2, VolumeX, Zap, Info, RotateCcw, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function VerbEngine() {
  const [selectedVerb, setSelectedVerb] = useState(verbs[0]);
  const [isNegative, setIsNegative] = useState(false);
  const [selectedTense, setSelectedTense] = useState(tenses[0]);
  const [selectedPerson, setSelectedPerson] = useState(persons[0]);
  const [isMuted, setIsMuted] = useState(false);
  const [finalVerb, setFinalVerb] = useState("");
  const [meaningText, setMeaningText] = useState("");

  const playClick = () => { if (!isMuted) new Audio('/sounds/lego-click.mp3').play().catch(() => {}); };

  useEffect(() => {
    let root = selectedVerb.tr;
    let tenseSuffix = "";
    let personSuffix = "";
    let engSentence = "";

    // 1. ZAMAN EKİ VE ÜNLÜ DARALMASI MANTIĞI
    if (selectedTense.id === "present") {
      if (selectedVerb.narrowing && !isNegative) {
        root = selectedVerb.narrowing;
        tenseSuffix = "yor";
      } else if (isNegative) {
        tenseSuffix = selectedVerb.type === "back" ? "mıyor" : "miyor";
      } else {
        tenseSuffix = selectedVerb.endsWithVowel ? "yor" : selectedTense[selectedVerb.type];
      }
    } else {
      const neg = isNegative ? (selectedVerb.type === "back" ? "ma" : "me") : "";
      tenseSuffix = neg + (selectedVerb.endsWithVowel && !isNegative && selectedTense.buffer ? selectedTense.buffer + selectedTense[selectedVerb.type] : selectedTense[selectedVerb.type]);
      
      // Git -> Gid (Ünlüyle başlayan zaman eklerinde yumuşama)
      if (selectedVerb.mutation && (selectedTense.id === "future" || selectedTense.id === "aorist") && !isNegative) {
        root = selectedVerb.mutation;
      }
    }

// 2. ŞAHIS EKİ MANTIĞI
let pSuffix = selectedPerson[selectedTense.id] || "";

if (pSuffix.includes('/')) {
    // ÖZEL DURUM: Şimdiki zaman (-yor) varsa, ek her zaman 'um' / 'uz' (kalın) olur.
    if (selectedTense.id === "present") {
        pSuffix = pSuffix.split('/')[0]; // Her zaman 'um', 'uz' vb. seçer
    } else {
        // Diğer zamanlarda fiilin tipine (front/back) bakmaya devam eder
        pSuffix = selectedVerb.type === "back" ? pSuffix.split('/')[0] : pSuffix.split('/')[1];
    }
}

    personSuffix = pSuffix;

    // 3. DINAMIK INGILIZCE ANLAM (Meaning)
    const subj = selectedPerson.eng || selectedPerson.label.split(' ')[0];
    const verbEn = selectedVerb.en;

    if (selectedTense.id === "present") {
        engSentence = `${subj} ${selectedTense.aux} ${isNegative ? "not " : ""}${verbEn.toLowerCase()}ing`;
    } else if (selectedTense.id === "future") {
        engSentence = `${subj} will ${isNegative ? "not " : ""}${verbEn.toLowerCase()}`;
    } else if (selectedTense.id === "past") {
        // Basit geçmiş zaman mapping (Go -> went / Come -> came)
        const pastVerbs = { "Go": "went", "Come": "came", "Read": "read", "Write": "wrote", "Understand": "understood", "See": "saw" };
        const pastForm = pastVerbs[verbEn] || `${verbEn.toLowerCase()}ed`;
        engSentence = isNegative ? `${subj} did not ${verbEn.toLowerCase()}` : `${subj} ${pastForm}`;
    } else if (selectedTense.id === "aorist") {
        const s = (!isNegative && (subj === "He/She" || subj === "O")) ? "s" : "";
        engSentence = isNegative ? `${subj} ${subj === "He/She" ? "doesn't" : "don't"} ${verbEn.toLowerCase()}` : `${subj} ${verbEn.toLowerCase()}${s}`;
    }

    setFinalVerb(`${root}${tenseSuffix}${personSuffix}`);
    setMeaningText(engSentence);
  }, [selectedVerb, isNegative, selectedTense, selectedPerson]);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50 relative overflow-x-hidden">
      <Helmet>
        <title>Verb Engine | Logic Lab - Visual Turkish Verb Conjugator</title>
      </Helmet>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="flex justify-between items-center mb-12">
          <Link to="/logic-lab" className="text-slate-400 font-black text-[10px] uppercase tracking-widest hover:text-slate-900 flex items-center gap-2">
            <ArrowLeft className="w-3 h-3" /> Back to Lab
          </Link>
          <div className="flex gap-4">
             <button onClick={() => setIsMuted(!isMuted)} className="p-2 bg-white rounded-full border border-slate-200">
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
             </button>
             <div className="bg-slate-900 text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">Verb Engine v1.1</div>
          </div>
        </div>

        {/* OUTPUT AREA */}
        <div className="bg-white rounded-[4rem] p-12 shadow-2xl shadow-slate-200 border border-white mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
                <Activity className="w-64 h-64 text-slate-900" />
            </div>

            <h3 className="text-[10px] font-black uppercase text-slate-300 tracking-[0.4em] mb-12">Live Conjugation</h3>
            
            <div className="flex flex-wrap items-center gap-4 mb-16">
                <motion.div layout className="bg-slate-900 text-white px-10 py-8 rounded-[2rem] text-4xl md:text-6xl font-black shadow-xl">
                    {finalVerb}
                </motion.div>
                <div className="bg-slate-100 p-6 rounded-[2rem] border border-slate-200 min-w-[240px]">
                    <span className="text-slate-400 text-[10px] font-black uppercase block mb-1 tracking-widest">Meaning</span>
                    <span className="text-2xl font-black text-brand-primary italic">
                        {meaningText}
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Root</span>
                    <p className="font-bold text-slate-700">{selectedVerb.tr}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Tense</span>
                    <p className="font-bold text-slate-700">{selectedTense.label.split(' ')[0]}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Negative</span>
                    <p className="font-bold text-slate-700">{isNegative ? "Active" : "None"}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Person</span>
                    <p className="font-bold text-slate-700">{selectedPerson.label}</p>
                </div>
            </div>
        </div>

        {/* CONTROLS */}
        <div className="grid lg:grid-cols-3 gap-8">
            <div className="space-y-4">
                <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-4">1. Choose Verb</h4>
                <div className="grid grid-cols-2 gap-2">
                    {verbs.map(v => (
                        <button 
                            key={v.tr} 
                            onClick={() => { playClick(); setSelectedVerb(v); }}
                            className={`p-4 rounded-3xl border-2 transition-all font-black ${selectedVerb.tr === v.tr ? 'bg-slate-900 border-slate-900 text-white shadow-lg scale-105' : 'bg-white border-transparent hover:border-slate-200 text-slate-600'}`}
                        >
                            {v.tr}
                        </button>
                    ))}
                </div>
                <button 
                    onClick={() => { playClick(); setIsNegative(!isNegative); }}
                    className={`w-full p-4 rounded-3xl border-2 transition-all font-black flex items-center justify-center gap-2 ${isNegative ? 'bg-red-500 border-red-500 text-white shadow-inner' : 'bg-white border-slate-100 text-slate-400'}`}
                >
                    <RotateCcw className={`w-4 h-4 ${isNegative ? 'rotate-180' : ''} transition-transform`} />
                    Negative: {isNegative ? "Active" : "None"}
                </button>
            </div>

            <div className="space-y-4">
                <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-4">2. Select Tense</h4>
                <div className="flex flex-col gap-2">
                    {tenses.map(t => (
                        <button 
                            key={t.id} 
                            onClick={() => { playClick(); setSelectedTense(t); }}
                            className={`p-5 rounded-3xl border-2 transition-all font-black text-left flex justify-between items-center ${selectedTense.id === t.id ? `${t.color} border-transparent text-white shadow-lg translate-x-2` : 'bg-white border-transparent text-slate-600 hover:border-slate-200'}`}
                        >
                            {t.label}
                            {selectedTense.id === t.id && <Zap className="w-4 h-4 fill-current" />}
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-4">
                <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-4">3. Assign Person</h4>
                <div className="grid grid-cols-2 gap-2">
                    {persons.map(p => (
                        <button 
                            key={p.id} 
                            onClick={() => { playClick(); setSelectedPerson(p); }}
                            className={`p-4 rounded-3xl border-2 transition-all font-black ${selectedPerson.id === p.id ? 'bg-amber-500 border-transparent text-white shadow-lg' : 'bg-white border-transparent text-slate-600 hover:border-slate-200'}`}
                        >
                            {p.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>

        {/* SEO SECTION */}
        <div className="mt-32 pt-20 border-t border-slate-200 space-y-16">
            <section className="max-w-3xl">
                <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-6">Turkish Verb Conjugation: The Mathematical Logic</h2>
                <p className="text-xl text-slate-500 leading-relaxed font-medium">
                    In Turkish, a single word like <span className="text-brand-primary font-bold">"Geleceğiz"</span> (We will come) contains a root, a tense, and a person. But it's not just addition; it's transformation. Notice how the 'k' in 'Gelecek' turns into a 'ğ' when we add the 'We' suffix. This is called 'Consonant Mutation,' and my Verb Engine calculates these shifts in real-time.
                </p>
            </section>
        </div>
      </div>
    </div>
  );
}