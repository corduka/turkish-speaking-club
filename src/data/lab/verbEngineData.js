// EKSİK OLAN KISIM BURASIYDI:
export const verbs = [
  { tr: "Gel", en: "Come", type: "front", lastVowel: "e" },
  { tr: "Git", en: "Go", type: "front", lastVowel: "i", mutation: "Gid" },
  { tr: "Oku", en: "Read", type: "back", lastVowel: "u", endsWithVowel: true },
  { tr: "Yaz", en: "Write", type: "back", lastVowel: "a" },
  { tr: "Anla", en: "Understand", type: "back", lastVowel: "a", endsWithVowel: true, narrowing: "Anlı" },
  { tr: "Gör", en: "See", type: "front", lastVowel: "ö" },
  { tr: "Ye", en: "Eat", type: "front", lastVowel: "e", endsWithVowel: true, narrowing: "Yi" }
];

export const tenses = [
  { 
    id: "present", 
    label: "Continuous (-yor)", 
    back: "ıyor", front: "iyor", 
    aux: "is/are", 
    ing: true, 
    color: "bg-indigo-500" 
  },
  { 
    id: "future", 
    label: "Future (-(y)ecek)", 
    back: "acak", front: "ecek", 
    buffer: "y", 
    aux: "will", 
    ing: false, 
    color: "bg-cyan-500" 
  },
  { 
    id: "past", 
    label: "Past (-dı/-di)", 
    back: "dı", front: "di", 
    aux: "", 
    ing: false, 
    isPast: true, 
    color: "bg-rose-500" 
  },
  { 
    id: "aorist", 
    label: "Aorist (-r/-ar/-er)", 
    back: "ar", front: "er", 
    vowelSpecific: "r", 
    aux: "", 
    ing: false, 
    color: "bg-emerald-500" 
  }
];

export const persons = [
  { 
    id: "ben", label: "I (Ben)", 
    present: "um/üm",
    future: "im",    
    past: "m",       
    aorist: "im",    
    eng: "I"
  },
  { 
    id: "sen", label: "You (Sen)", 
    present: "sun/sün", 
    future: "sin", 
    past: "n", 
    aorist: "sin",
    eng: "You"
  },
  { 
    id: "o", label: "He/She (O)", 
    present: "", future: "", past: "", aorist: "", 
    eng: "He/She"
  },
  { 
    id: "biz", label: "We (Biz)", 
    present: "uz/üz", 
    future: "iz",    
    past: "k",       
    aorist: "iz",    
    eng: "We"
  }
];