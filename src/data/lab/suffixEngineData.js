export const roots = [
  { tr: "Araba", en: "Car", lastVowel: "a", endsWithVowel: true, isHardConsonant: false },
  { tr: "Ev", en: "House", lastVowel: "e", endsWithVowel: false, isHardConsonant: false },
  { tr: "Kitap", en: "Book", lastVowel: "a", endsWithVowel: false, isHardConsonant: true, mutation: "Kitab" },
  { tr: "Kedi", en: "Cat", lastVowel: "i", endsWithVowel: true, isHardConsonant: false },
  { tr: "Okul", en: "School", lastVowel: "u", endsWithVowel: false, isHardConsonant: false },
  { tr: "Göz", en: "Eye", lastVowel: "ö", endsWithVowel: false, isHardConsonant: false },
  { tr: "Mutfak", en: "Kitchen", lastVowel: "a", endsWithVowel: false, isHardConsonant: true, mutation: "Mutfağ" }
];

export const suffixGroups = [
  {
    id: "plural",
    name: "Plural (-lar/-ler)",
    color: "bg-orange-500",
    options: { a: "lar", e: "ler", i: "ler", o: "lar", u: "lar", ö: "ler", ü: "ler", ı: "lar" }
  },
  {
    id: "cases",
    name: "Case Endings",
    color: "bg-blue-500",
    types: [
      { id: "acc", label: "Accusative", a: "ı", e: "i", i: "i", o: "u", u: "u", ö: "ü", ü: "ü", ı: "ı", buffer: "y" },
      { id: "dat", label: "Dative", a: "a", e: "e", i: "e", o: "a", u: "a", ö: "e", ü: "e", ı: "a", buffer: "y" },
      { id: "loc", label: "Locative", a: "da", e: "de", i: "de", o: "da", u: "da", ö: "de", ü: "de", ı: "da", hardVersion: "ta" },
      { id: "abl", label: "Ablative", a: "dan", e: "den", i: "den", o: "dan", u: "dan", ö: "den", ü: "den", ı: "dan", hardVersion: "tan" }
    ]
  },
  {
    id: "possessive",
    name: "Possessive (My)",
    color: "bg-emerald-500",
    vowelEnding: { a: "m", e: "m", i: "m", o: "m", u: "m", ö: "m", ü: "m", ı: "m" },
    consonantEnding: { a: "ım", e: "im", i: "im", o: "um", u: "um", ö: "üm", ü: "üm", ı: "ım" }
  },
  {
    id: "question",
    name: "Question",
    color: "bg-purple-500",
    options: { a: "mı", e: "mi", i: "mi", o: "mu", u: "mu", ö: "mü", ü: "mü", ı: "mı" }
  }
];