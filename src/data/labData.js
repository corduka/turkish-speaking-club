export const tenses = {
  present: {
    id: 'present',
    title: 'Şimdiki Zaman',
    english: 'Present Continuous',
    formula: "Fiil Kökü + -yor + Kişi Eki",
    example: "Gidiyorum (I am going)",
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    adverbs: [
      { tr: "Şimdi", en: "Now" },
      { tr: "Şu an", en: "Right now" },
      { tr: "Bugünlerde", en: "Nowadays" },
      { tr: "Her gün", en: "Every day" },
      { tr: "Hala", en: "Still" }
    ]
  },
  past: {
    id: 'past',
    title: 'Bilinen Geçmiş Zaman',
    english: 'Past Tense (-di)',
    formula: "Fiil Kökü + -di + Kişi Eki",
    example: "Gittim (I went)",
    color: 'bg-amber-500',
    lightColor: 'bg-amber-50',
    textColor: 'text-amber-600',
    adverbs: [
      { tr: "Dün", en: "Yesterday" },
      { tr: "Geçen hafta", en: "Last week" },
      { tr: "Az önce", en: "Just now" },
      { tr: "Eskiden", en: "In the past" },
      { tr: "Dün gece", en: "Last night" }
    ]
  },
  future: {
    id: 'future',
    title: 'Gelecek Zaman',
    english: 'Future Tense',
    formula: "Fiil Kökü + -ecek / -acak + Kişi Eki",
    example: "Gideceğim (I will go)",
    color: 'bg-emerald-500',
    lightColor: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    adverbs: [
      { tr: "Yarın", en: "Tomorrow" },
      { tr: "Gelecek yıl", en: "Next year" },
      { tr: "Sonra", en: "Later" },
      { tr: "Birazdan", en: "In a bit" },
      { tr: "Haftaya", en: "Next week" }
    ]
  }
};

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