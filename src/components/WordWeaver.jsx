import React, { useState, useEffect } from 'react';
import { groups, colorMap } from '../data/wordGroups';
import '../styles/wordweaver.css';

export default function WordWeaver() {
  const [selectedWords, setSelectedWords] = useState([]);
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [isOverDropzone, setIsOverDropzone] = useState(false);
  const [justAddedId, setJustAddedId] = useState(null);
  const [story, setStory] = useState('');
  const [isStoryFlashing, setIsStoryFlashing] = useState(false);

  // Biriken hikâyelerden oluşan "Kitap" içeriği için state
  const [bookStories, setBookStories] = useState([]);

  // Scroll Reveal Etkisi
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Kelime Ekleme İşlevi
  const addWord = (tr, en) => {
    const newWord = { id: Date.now() + Math.random(), tr, en };
    setSelectedWords((prev) => [...prev, newWord]);
    setJustAddedId(newWord.id);
    setTimeout(() => setJustAddedId(null), 500);
  };

  // Kelime Çıkarma
  const removeWord = (id) => {
    setSelectedWords((prev) => prev.filter((item) => item.id !== id));
  };

  // Kartı Ters Çevirme (3D Flip)
  const toggleFlip = (index) => {
    setFlippedIndex((prev) => (prev === index ? null : index));
  };

  // Drag & Drop İşlemleri
  const handleDragStart = (e, tr, en) => {
    e.dataTransfer.setData('text/plain', JSON.stringify({ tr, en }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsOverDropzone(true);
  };

  const handleDragLeave = () => {
    setIsOverDropzone(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsOverDropzone(false);
    const data = e.dataTransfer.getData('text/plain');
    if (data) {
      try {
        const { tr, en } = JSON.parse(data);
        addWord(tr, en);
      } catch (err) {
        console.error('Drop verisi okunamadı:', err);
      }
    }
  };

  // Hikayeyi Atölyeden Oluştur (Metin kutusunun sonuna ekler)
  const buildStoryFromWords = () => {
    if (selectedWords.length === 0) return;
    const sentence = selectedWords.map((w) => w.tr).join(' ') + '.';
    setStory((prev) => (prev ? `${prev} ${sentence}` : sentence));
    setIsStoryFlashing(true);
    setTimeout(() => setIsStoryFlashing(false), 600);
  };

  // Hikâyeyi Kitaba Ekleme
  const addToBook = () => {
    if (!story.trim()) return;
    setBookStories((prev) => [...prev, story.trim()]);
    setStory(''); // Hikâye alanını bir sonraki paragraf için temizler
  };

  return (
    <div className="ww-root text-ink min-h-screen pb-20">
      {/* --- HERO SECTION --- */}
      <header className="relative overflow-hidden pt-12 pb-16 px-4 sm:px-8 border-b border-ink/10">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-[#1B2A4A] items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-gold/20 text-ink mb-4 drift">
            <span>✨ Kelimeden Hikâyeye Atölyesi</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight mb-4 text-ink">
            WordWeaver
          </h1>
          <p className="font-body text-base sm:text-lg text-ink/70 max-w-2xl mx-auto">
            Kelimeleri seçin, sürükleyin, birleştirin ve kendi Türkçe hikâyenizi ilmek ilmek dokuyun.
          </p>
        </div>

        {/* Arka Plan Süslemeleri (Floating SVG) */}
        <div className="absolute top-6 left-10 opacity-30 drift-slow pointer-events-none hidden md:block">
          <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="40" stroke="#178E82" strokeWidth="4" className="thread-line" />
          </svg>
        </div>
        <div className="absolute bottom-4 right-12 opacity-30 drift-rev pointer-events-none hidden md:block">
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none" className="tulip-sway">
            <path d="M50 20 C20 40 20 80 50 95 C80 80 80 40 50 20 Z" stroke="#E4572E" strokeWidth="3" />
          </svg>
        </div>
      </header>

      {/* --- MAIN WORKSPACE --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* SOL: Kelime Grupları (Kütüphane) */}
        <section className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-display text-2xl font-bold text-ink">Kelime Havuzu</h2>
            <span className="text-xs font-mono text-ink/60">Tıkla veya Sürükle</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {groups.map((group, gIdx) => {
              const theme = colorMap[group.color] || colorMap.turquoise;
              return (
                <div
                  key={gIdx}
                  className={`reveal bg-white/80 backdrop-blur-sm p-4 rounded-2xl border ${theme.border} card-hover shadow-sm flex flex-col h-64`}
                >
                  <div className="mb-3">
                    <span className={`inline-block px-2.5 py-0.5 rounded-md text-xs font-bold ${theme.soft} ${theme.text}`}>
                      {group.title}
                    </span>
                    <p className="text-xs text-ink/50 mt-1 font-body">{group.subtitle}</p>
                  </div>

                  {/* Kelime Listesi (Kaydırılabilir) */}
                  <div className="chip-scroll overflow-y-auto flex-1 pr-1 flex flex-wrap gap-2 content-start">
                    {group.words.map(([tr, en], wIdx) => (
                      <button
                        key={wIdx}
                        draggable
                        onDragStart={(e) => handleDragStart(e, tr, en)}
                        onClick={() => addWord(tr, en)}
                        className="chip bg-paper hover:bg-ink hover:text-paper text-ink text-xs font-medium px-2.5 py-1.5 rounded-lg border border-ink/10 flex items-center gap-1.5 group transition-all"
                        title={en}
                      >
                        <span>{tr}</span>
                        <span className="text-[10px] opacity-40 group-hover:opacity-70 font-mono">({en})</span>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SAĞ: Cümle Atölyesi, Hikaye & Kitap Alanı */}
        <section className="lg:col-span-5 space-y-6">
          
          {/* CÜMLE ATÖLYESİ (Dropzone) */}
          <div className="bg-white p-6 rounded-3xl border border-ink/10 shadow-sm sticky top-6 space-y-4">
            <div className="flex items-center justify-between border-b border-ink/5 pb-3">
              <div>
                <h3 className="font-display text-xl font-bold text-ink">Cümle Atölyesi</h3>
                <p className="text-xs text-ink/50 font-body">Kelimelere tıklayarak İngilizcelerini görün</p>
              </div>
              {selectedWords.length > 0 && (
                <button
                  onClick={() => setSelectedWords([])}
                  className="text-xs text-poppy font-semibold hover:underline"
                >
                  Temizle
                </button>
              )}
            </div>

            {/* Sürükleme Bırakma Alanı */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`dropzone min-h-[160px] p-4 rounded-2xl border-2 border-dashed transition-all flex flex-wrap gap-2 items-start content-start ${
                isOverDropzone ? 'over border-turquoise bg-turquoise/5' : 'border-ink/15 bg-paper/50'
              }`}
            >
              {selectedWords.length === 0 ? (
                <div className="w-full h-32 flex flex-col items-center justify-center text-center text-ink/40 space-y-1 pointer-events-none">
                  <span className="text-2xl">🧵</span>
                  <p className="text-xs font-medium">Sol taraftan kelime seçin veya buraya sürükleyin</p>
                </div>
              ) : (
                selectedWords.map((item, idx) => {
                  const isFlipped = flippedIndex === idx;
                  const isJustAdded = item.id === justAddedId;

                  return (
                    <div key={item.id} className="pill-flip">
                      <div
                        onClick={() => toggleFlip(idx)}
                        className={`pill-inner ${isFlipped ? 'flipped' : ''} ${isJustAdded ? 'just-added' : ''}`}
                      >
                        {/* Ön Yüz (Türkçe) */}
                        <div className="pill-face pill-front">
                          <span>{item.tr}</span>
                          <span className="flip-hint">🔄</span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeWord(item.id);
                            }}
                            className="pill-remove text-paper/60 hover:text-poppy ml-1 text-xs"
                          >
                            ✕
                          </button>
                        </div>

                        {/* Arka Yüz (İngilizce) */}
                        <div className="pill-face pill-back">
                          <span>{item.en}</span>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Cümleyi Hikayeye Ekle Butonu */}
            <button
              disabled={selectedWords.length === 0}
              onClick={buildStoryFromWords}
              className="w-full py-3 bg-turquoise text-paper font-semibold rounded-xl hover:bg-turquoise/90 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md shadow-turquoise/20 flex items-center justify-center gap-2 text-sm"
            >
              <span>✨ Cümleyi Dokumaya Ekle</span>
            </button>

            {/* 1. KUTUCUK: HİKÂYE PANOSU (Öğrenci Tarafından Düzenlenebilir) */}
            <div className={`story-glow mt-6 p-5 rounded-2xl bg-paper border border-ink/10 space-y-3 ${isStoryFlashing ? 'flash' : ''}`}>
              <div className="flex items-center justify-between border-b border-ink/10 pb-2">
                <h4 className="font-display font-bold text-ink text-sm flex items-center gap-1.5">
                  <span>📖</span> Hikâyeniz
                </h4>
                {story && (
                  <button
                    onClick={() => setStory('')}
                    className="text-[11px] font-mono text-ink/40 hover:text-poppy"
                  >
                    Hikâyeyi Sıfırla
                  </button>
                )}
              </div>

              {/* Elle Düzenlenebilir Textarea */}
              <textarea
                value={story}
                onChange={(e) => setStory(e.target.value)}
                placeholder="Oluşturduğunuz cümleler burada birleşecek. Dilerseniz buraya elle ekleme ve düzenleme yapabilirsiniz..."
                className="w-full min-h-[120px] p-2 bg-transparent font-display text-base leading-relaxed text-ink/90 focus:outline-none resize-y border border-transparent focus:border-ink/10 rounded-lg transition-all"
              />

              {/* Kitaba Ekle Butonu */}
              <button
                disabled={!story.trim()}
                onClick={addToBook}
                className="w-full py-2 bg-ink text-paper text-xs font-semibold rounded-lg hover:bg-ink/80 transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-1.5"
              >
                <span>📚 Kitaba Ekle</span>
              </button>
            </div>

            {/* 2. KUTUCUK: OLUŞTURULAN KİTAP (Toplanan Hikâyeler) */}
            <div className="p-5 rounded-2xl bg-paper/60 border border-ink/10 space-y-3">
              <div className="flex items-center justify-between border-b border-ink/10 pb-2">
                <h4 className="font-display font-bold text-ink text-sm flex items-center gap-1.5">
                  <span>📚</span> Kitabınız
                </h4>
                {bookStories.length > 0 && (
                  <button
                    onClick={() => setBookStories([])}
                    className="text-[11px] font-mono text-poppy hover:underline"
                  >
                    Kitabı Temizle
                  </button>
                )}
              </div>

              <div className="min-h-[80px] space-y-3 font-display text-sm leading-relaxed text-ink/80">
                {bookStories.length === 0 ? (
                  <p className="text-ink/30 italic text-xs font-body pt-2">
                    Henüz kitaba eklenmiş bir hikâye yok. Hikâyenizi tamamlayıp "Kitaba Ekle" butonuna basarak burada biriktirebilirsiniz.
                  </p>
                ) : (
                  bookStories.map((item, idx) => (
                    <div key={idx} className="p-3 bg-white rounded-xl border border-ink/5 shadow-2xl shadow-ink/5 relative group">
                      <span className="text-[10px] font-mono font-bold text-turquoise block mb-1">
                        Bölüm {idx + 1}
                      </span>
                      <p className="whitespace-pre-wrap">{item}</p>
                    </div>
                  ))
                )}
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}