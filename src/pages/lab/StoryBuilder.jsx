import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { groups } from '../../data/lab/storyBuilderData';
import { ArrowLeft, Plus, Trash2, BookOpen, Clock, Sparkles, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function StoryBuilder() {
  const [tense, setTense] = useState('past'); // 'past' | 'present'
  const [rows, setRows] = useState([
    { id: Date.now(), words: [], customText: '' }
  ]);

  const addWordToRow = (rowIndex, wordObj) => {
    setRows(prevRows => {
      const updated = [...prevRows];
      const targetRow = updated[rowIndex];
      if (!targetRow.words.some(w => w.tr === wordObj.tr)) {
        targetRow.words = [...targetRow.words, wordObj];
      }
      return updated;
    });
  };

  const removeWordFromRow = (rowIndex, wordTr) => {
    setRows(prevRows => {
      const updated = [...prevRows];
      updated[rowIndex].words = updated[rowIndex].words.filter(w => w.tr !== wordTr);
      return updated;
    });
  };

  const handleCustomTextChange = (rowIndex, text) => {
    setRows(prevRows => {
      const updated = [...prevRows];
      updated[rowIndex].customText = text;
      return updated;
    });
  };

  const addNewRow = () => {
    setRows(prev => [...prev, { id: Date.now(), words: [], customText: '' }]);
  };

  const removeRow = (rowIndex) => {
    if (rows.length === 1) return;
    setRows(prev => prev.filter((_, idx) => idx !== rowIndex));
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50 relative overflow-x-hidden">
      <Helmet>
        <title>Build Your Story | Interactive Turkish Story Generator</title>
      </Helmet>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/logic-lab" className="text-slate-400 font-black text-[10px] uppercase tracking-widest hover:text-slate-900 flex items-center gap-2">
            <ArrowLeft className="w-3 h-3" /> Back to Lab
          </Link>
          <div className="bg-white px-4 py-2 rounded-full border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-500">
             Build Your Story v1.0
          </div>
        </div>

        {/* Hero Banner */}
        <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl mb-12 relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <span className="text-emerald-400 text-xs font-black uppercase tracking-widest flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4" /> Sentence & Story Workshop
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Select Words, Build Your Story.
            </h1>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Pick vocabulary blocks from different functional categories below, combine them into customized sentences, and weave your own narrative.
            </p>
          </div>
        </div>

        {/* 1. WORD GROUPS SECTION */}
        <div className="mb-16">
          <h2 className="text-xs font-black uppercase text-slate-400 tracking-widest mb-6 ml-2">
            1. Word Palette (Click to Add to Active Row)
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {groups.map((group, groupIdx) => (
              <div key={groupIdx} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-3 h-3 rounded-full ${group.color}`}></div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">{group.title}</h3>
                    <p className="text-slate-400 text-xs">{group.subtitle}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto pr-1 no-scrollbar">
                  {group.words.map(([tr, en], wIdx) => (
                    <button
                      key={wIdx}
                      onClick={() => addWordToRow(rows.length - 1, { tr, en, color: group.color })}
                      className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/60 hover:bg-slate-900 hover:text-white transition-all text-xs font-medium text-slate-700 flex items-center gap-1.5 group"
                    >
                      <span>{tr}</span>
                      <span className="text-[10px] text-slate-400 group-hover:text-slate-300">({en})</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. WORKSHOP SECTION */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <h2 className="text-xs font-black uppercase text-slate-400 tracking-widest ml-2">
              2. Sentence Workshop
            </h2>

            {/* Tense Selector */}
            <div className="bg-white p-1 rounded-2xl border border-slate-200 flex items-center gap-1">
              <button
                onClick={() => setTense('past')}
                className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                  tense === 'past' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Geçmiş Zaman (-di)
              </button>
              <button
                onClick={() => setTense('present')}
                className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                  tense === 'present' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Şimdiki Zaman (-yor)
              </button>
            </div>
          </div>

          {/* Sentence Rows */}
          <div className="space-y-6">
            {rows.map((row, idx) => (
              <div key={row.id} className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-200/80 shadow-sm relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                    Sentence #{idx + 1}
                  </span>
                  {rows.length > 1 && (
                    <button
                      onClick={() => removeRow(idx)}
                      className="text-slate-300 hover:text-red-500 transition-colors p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Selected Word Chips */}
                <div className="flex flex-wrap gap-2 mb-4 min-h-[44px] p-2 bg-slate-50 rounded-2xl border border-slate-100 items-center">
                  {row.words.length === 0 ? (
                    <span className="text-xs text-slate-400 italic px-2">
                      Click words from palette above to attach them here...
                    </span>
                  ) : (
                    row.words.map((w) => (
                      <span
                        key={w.tr}
                        onClick={() => removeWordFromRow(idx, w.tr)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold text-white ${w.color} cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-2`}
                      >
                        {w.tr}
                        <span className="text-[10px] opacity-75">✕</span>
                      </span>
                    ))
                  )}
                </div>

                {/* Custom Output Input */}
                <input
                  type="text"
                  value={row.customText}
                  onChange={(e) => handleCustomTextChange(idx, e.target.value)}
                  placeholder="Conjugate & complete your full Turkish sentence here..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-sm font-medium focus:outline-none focus:border-slate-900 transition-all text-slate-800 placeholder:text-slate-400"
                />
              </div>
            ))}
          </div>

          <button
            onClick={addNewRow}
            className="mt-6 flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold text-xs hover:border-slate-900 transition-all"
          >
            <Plus className="w-4 h-4" /> Add Another Sentence
          </button>
        </div>

        {/* 3. FINAL STORY OUTPUT */}
        <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-emerald-400" />
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Your Complete Story</h3>
          </div>

          <div className="min-h-[100px] text-lg md:text-2xl font-serif leading-relaxed text-slate-100 italic">
            {rows.some(r => r.customText.trim()) ? (
              rows.map(r => r.customText).filter(Boolean).join(' ')
            ) : (
              <span className="text-slate-600 not-italic text-base font-sans">
                As you type completed sentences into the workshop fields above, your full story will appear combined here...
              </span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}