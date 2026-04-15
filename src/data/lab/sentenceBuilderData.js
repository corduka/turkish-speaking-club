export const tenses = {
  present: {
    id: 'present',
    title: 'Şimdiki Zaman',
    english: 'Present Continuous',
    formula: "verb root + -yor + personal suffix",
    example: "Gidiyorum (I am going)",
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    adverbs: [
      { tr: "şimdi", en: "Now" },
      { tr: "şu an", en: "Right now" },
      { tr: "bugünlerde", en: "Nowadays" },
      { tr: "her gün", en: "Every day" },
      { tr: "hâlâ", en: "Still" }
    ]
  },
  past: {
    id: 'past',
    title: 'Bilinen-Geçmiş Zaman',
    english: 'Known Past Tense (-di)',
    formula: "verb root + -di + personal suffix",
    example: "Gittim (I went)",
    color: 'bg-amber-500',
    lightColor: 'bg-amber-50',
    textColor: 'text-amber-600',
    adverbs: [
      { tr: "dün", en: "Yesterday" },
      { tr: "geçen hafta", en: "Last week" },
      { tr: "az önce", en: "Just now" },
      { tr: "eskiden", en: "In the past" },
      { tr: "dün gece", en: "Last night" }
    ]
  },
  future: {
    id: 'future',
    title: 'Gelecek Zaman',
    english: 'Future Tense',
    formula: "verb root + -ecek / -acak + personal suffix",
    example: "Gideceğim (I will go)",
    color: 'bg-emerald-500',
    lightColor: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    adverbs: [
      { tr: "yarın", en: "Tomorrow" },
      { tr: "gelecek yıl", en: "Next year" },
      { tr: "sonra", en: "Later" },
      { tr: "birazdan", en: "In a bit" },
      { tr: "haftaya", en: "Next week" }
    ]
  }
};

export const subjects = [
  { tr: "Ben", en: "I", suffix: "-(y)im / -m" },
  { tr: "Sen", en: "You (sing.)", suffix: "-sin / -n" },
  { tr: "O", en: "He/She/It", suffix: "ø (No suffix)" },
  { tr: "Biz", en: "We", suffix: "-(y)iz / -k" },
  { tr: "Siz", en: "You (plur.)", suffix: "-siniz / -niz" },
  { tr: "Onlar", en: "They", suffix: "-lar / -ler" }
];

export const commonVerbs = [
  { tr: "Gitmek", en: "To go" },
  { tr: "Gelmek", en: "To come" },
  { tr: "Yemek", en: "To eat" },
  { tr: "İçmek", en: "To drink" },
  { tr: "Okumak", en: "To read" },
  { tr: "Yazmak", en: "To write" },
  { tr: "Öğrenmek", en: "To learn" },
  { tr: "Konuşmak", en: "To speak" }
];

export const conjunctions = [
  { tr: "Çünkü", en: "Because" },
  { tr: "Ama", en: "But" },
  { tr: "Veya", en: "Or" },
  { tr: "Fakat", en: "However" },
  { tr: "Belki", en: "Maybe" }
];