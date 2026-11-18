import type { Lesson, SubjectDef } from "./types";

export const SUBJECT: SubjectDef = {
  id: "yoruba",
  name: "Yoruba",
  short: "YOR",
  colour: "#6d9de0",
  tagline: "Phonology, grammar, literature and culture.",
  description: "Master Yoruba phonology and tones, orthography, grammar, oral and written literature, and Yoruba culture and customs for JAMB, with original practice questions.",
  topics: ["Phonology and Tones", "Orthography", "Grammar and Syntax", "Oral Literature", "Written Literature — Prose", "Written Literature — Poetry and Drama", "Yoruba Culture, Customs and Comprehension"],
};

export const LESSONS: Lesson[] = [
  {
    id: "yoruba-01",
    subjectId: "yoruba",
    topic: "Phonology and Tones",
    subtopic: "Vowels, consonants and syllables",
    title: "Sounds of Yoruba: Vowels and Consonants",
    order: 1,
    introduction: "Yoruba is a tonal language in which every syllable carries a vowel and a tone. This lesson introduces the vowel and consonant sounds of Yoruba and the syllable patterns on which all Yoruba words are built.",
    objectives: ["Identify the seven oral vowels and five nasal vowels of Yoruba", "Distinguish the consonants of Yoruba, including gb, kp and ṣ", "Explain the syllable structure of Yoruba words", "Pronounce Yoruba words correctly using their sounds", "Recognise how sounds change meaning in Yoruba"],
    sections: [
      {
        heading: "The Vowels of Yoruba",
        body: "Yoruba has seven oral vowels: a, e, ẹ, i, o, ọ, u. The vowels ẹ (as in ẹ̀kọ́, lesson) and ọ (as in ọmọ, child) are open vowels, while e and o are close vowels; confusing them changes the word. Yoruba also has five nasal vowels: an, ẹn, in, ọn, un, as in ọ̀rọ̀ (word), ìrìn (journey) and ẹ̀yìn (back). A nasal vowel is written with n after the vowel, but the n is not pronounced as a separate consonant — the vowel itself is nasalised. Vowels are the heart of every Yoruba syllable: no syllable exists without a vowel, and vowel harmony keeps the vowels of a word in agreement. For example, the verb prefix ì- combines with roots to give ìjọ (dance) and ìkọ̀ (writing), where the vowel quality is consistent."
      },
      {
        heading: "The Consonants of Yoruba",
        body: "Yoruba has eighteen consonants: b, d, f, g, gb, h, j, k, kp, l, m, n, p, r, s, ṣ, t, w, y. Two are double sounds made at once: gb (as in gbà, take) is a labial-velar sound, and kp (as in kpa, kill) is its voiceless partner. The letter ṣ is pronounced like the English sh, as in ṣe (do) and ẹ̀ṣẹ́ (sin), while s is a plain s, as in sí (open). The letter j is pronounced like the y in yes in some words and like the j in joy in others, depending on dialect, but in standard Yoruba it is usually a palatal sound. Yoruba has no consonant clusters: two consonants never stand together at the start of a syllable, and no Yoruba word ends in a consonant except for the nasal n in words like ìrìn (journey)."
      },
      {
        heading: "Syllable Structure",
        body: "A Yoruba syllable is either a single vowel (V), as in the first syllable of a-bẹ̀ (a type of leaf), or a consonant followed by a vowel (CV), as in ọ-mọ (child) and ì-lé (house). Most Yoruba words are made of CV syllables: ba-bá (father), ì-yá (mother), ẹ́-rẹ̀ (play). A syllabic nasal also occurs, as in the m of ń (I am) and ńlọ (I am going). Because every syllable ends in a vowel or a nasal, Yoruba words sound open and musical, and this open structure is why borrowed words are reshaped when they enter Yoruba: for example, the English word school becomes sùkúùlù, with vowels added so that no two consonants stand together and no word ends in a consonant."
      },
      {
        heading: "Sounds and Meaning",
        body: "In Yoruba, changing one sound can change the whole meaning of a word. The pair ọ̀rọ̀ (word, matter) and òrò (a type of deity or custom) differ only in their vowels. Likewise, ẹ̀kọ́ (lesson) and ẹkọ (a type of food, corn pap) differ in vowel quality and tone. The consonants also make minimal pairs: bá (meet) and gbá (take) differ only in b and gb, while ṣe (do) and se (cook) differ only in ṣ and s. This is why careful pronunciation and careful spelling matter so much in Yoruba: a small slip of the tongue or the pen can produce a different word entirely. JAMB often tests this by asking which word is different in sound, or which pair of words differ only in one sound."
      }
    ],
    definitions: [
      { term: "Oral vowel", meaning: "A vowel pronounced with air passing through the mouth only, such as a, e, ẹ, i, o, ọ, u." },
      { term: "Nasal vowel", meaning: "A vowel pronounced with air passing through the nose as well as the mouth, written with n after the vowel." },
      { term: "Labial-velar consonant", meaning: "A consonant made with the lips and the back of the tongue at the same time, such as gb and kp." },
      { term: "Syllable", meaning: "A unit of sound built around one vowel, either V or CV in Yoruba." },
      { term: "Minimal pair", meaning: "Two words that differ in only one sound but have different meanings." },
      { term: "Vowel harmony", meaning: "The tendency for the vowels of a Yoruba word to agree in quality." }
    ],
    examples: [
      {
        title: "Identifying a nasal vowel",
        problem: "Which word contains a nasal vowel: ìlé (house), ìrìn (journey) or ọmọ (child)?",
        steps: ["Look at the spelling of each word for a vowel followed by n.", "In ìrìn, the vowel i is followed by n in the second syllable.", "Recall that a vowel plus n in Yoruba spelling marks a nasal vowel.", "Check ìlé and ọmọ: neither has a vowel followed by n.", "Conclude that ìrìn contains the nasal vowel in."],
        answer: "ìrìn (journey) contains the nasal vowel in."
      },
      {
        title: "Explaining a minimal pair",
        problem: "Explain why bá (meet) and gbá (take) are a minimal pair.",
        steps: ["Compare the two words sound by sound.", "Both have the same vowel a and the same tone.", "The only difference is the first consonant: b in bá and gb in gbá.", "Recall that words differing in only one sound are minimal pairs.", "Note that their meanings are completely different."],
        answer: "They differ only in the first consonant, b versus gb, yet mean different things, so they are a minimal pair."
      }
    ],
    tips: ["Learn the seven oral vowels in pairs: e/ẹ and o/ọ are the ones most often confused.", "Remember gb and kp are single sounds, not two consonants together.", "Every Yoruba syllable ends in a vowel or a nasal — use this to check spellings.", "Practise minimal pairs aloud: ṣe/se, bá/gbá, ọ̀rọ̀/òrò."],
    mistakes: ["Writing e for ẹ or o for ọ, which changes the word.", "Treating gb as g plus b, or splitting it across syllables.", "Pronouncing the n in a nasal vowel as a separate consonant.", "Allowing consonant clusters from English into Yoruba words."],
    facts: ["Yoruba has seven oral vowels and five nasal vowels.", "Yoruba has no consonant clusters and no word ends in a consonant except nasal n.", "gb and kp are labial-velar consonants made with lips and tongue together.", "ṣ is pronounced like sh in English."],
    quiz: [
      { q: "How many oral vowels does Yoruba have?", options: ["Five", "Six", "Seven", "Eight"], answer: 2, explanation: "Yoruba has seven oral vowels: a, e, ẹ, i, o, ọ, u." },
      { q: "Which of these is an open vowel in Yoruba?", options: ["e", "ẹ", "i", "u"], answer: 1, explanation: "ẹ is an open vowel, while e is its close counterpart." },
      { q: "Which word contains a nasal vowel?", options: ["ìlé", "ọmọ", "ìrìn", "bàbá"], answer: 2, explanation: "ìrìn contains the nasal vowel in, written as i followed by n." },
      { q: "The consonant gb is best described as what?", options: ["A vowel", "A labial-velar consonant", "A nasal vowel", "A tone"], answer: 1, explanation: "gb is a labial-velar sound made with the lips and the back of the tongue at once." },
      { q: "How is the Yoruba letter ṣ pronounced?", options: ["Like s", "Like sh", "Like z", "Like ch"], answer: 1, explanation: "ṣ is pronounced like the English sh, as in ṣe (do)." },
      { q: "Which syllable pattern is NOT found in Yoruba?", options: ["V", "CV", "CVC", "Syllabic nasal"], answer: 2, explanation: "Yoruba syllables are V or CV; a CVC syllable ending in a consonant does not occur." },
      { q: "In the word ọmọ (child), how many syllables are there?", options: ["One", "Two", "Three", "Four"], answer: 1, explanation: "ọmọ has two syllables: ọ and mọ." },
      { q: "Which pair is a minimal pair?", options: ["bá and gbá", "ilé and ilé", "ọmọ and ọmọ", "ẹkọ and ẹkọ"], answer: 0, explanation: "bá and gbá differ only in the first consonant, b versus gb, but have different meanings." },
      { q: "The English word school becomes sùkúùlù in Yoruba mainly because Yoruba does what?", options: ["Has no vowels", "Has no consonant clusters", "Has no tones", "Has no nasal vowels"], answer: 1, explanation: "Yoruba has no consonant clusters, so vowels are added to break up the clusters in school." },
      { q: "Which of these is a nasal vowel?", options: ["a", "an", "ẹ", "o"], answer: 1, explanation: "an is a nasal vowel; the n after the vowel marks nasalisation." },
      { q: "The word ẹ̀kọ́ (lesson) differs from ẹkọ (corn pap) in what?", options: ["Only the consonant", "Vowel quality and tone", "Only the number of syllables", "Only the spelling of k"], answer: 1, explanation: "They differ in vowel quality (ọ versus o) and in tone." },
      { q: "Which consonant is the voiceless partner of gb?", options: ["k", "kp", "b", "p"], answer: 1, explanation: "kp is the voiceless labial-velar, while gb is its voiced partner." },
      { q: "A Yoruba word normally ends in what?", options: ["A consonant", "A vowel or a nasal", "Two consonants", "A tone mark"], answer: 1, explanation: "Yoruba words end in a vowel or, rarely, a nasal n; they do not end in other consonants." },
      { q: "Which word shows vowel harmony in its prefix?", options: ["ìjọ", "gbà", "ṣe", "sí"], answer: 0, explanation: "ìjọ uses the prefix ì-, which harmonises with the vowel of the root." },
      { q: "The n in a nasal vowel is pronounced as what?", options: ["A separate consonant", "Part of the nasal vowel", "A silent letter", "A tone"], answer: 1, explanation: "The n marks nasalisation of the vowel itself; it is not pronounced as a separate consonant." }
    ],
    status: "published"
  },
  {
    id: "yoruba-02",
    subjectId: "yoruba",
    topic: "Phonology and Tones",
    subtopic: "Tone: high, mid and low",
    title: "Tones in Yoruba: High, Mid and Low",
    order: 2,
    introduction: "Tone is meaning in Yoruba: the same sequence of sounds can mean different things depending on whether the pitch is high, mid or low. This lesson explains the three tones, how they are marked, and how they change meaning.",
    objectives: ["Identify the three tones of Yoruba: high, mid and low", "Mark tones correctly using acute, macron and grave accents", "Explain how tone distinguishes words with the same sounds", "Describe tone changes in connected speech", "Use tone correctly when reading and writing Yoruba"],
    sections: [
      {
        heading: "The Three Tones",
        body: "Yoruba has three tones: high, mid and low. In the standard system, high tone is marked with an acute accent (´), as in bá (meet); mid tone is marked with a macron (¯) or left unmarked in some writing, as in bā or ba (in some conventions); and low tone is marked with a grave accent (`), as in bà (count or take). In everyday writing, the mid tone is often left unmarked, so a vowel with no mark is usually read as mid tone, while high and low tones are always marked. The sol-fa names do, re, mi are often used in schools to teach tones: low is do, mid is re and high is mi. Tone is carried by the vowel of each syllable, and every syllable in a Yoruba word has its own tone, so a two-syllable word has a tone pattern such as high-low, low-high or mid-mid."
      },
      {
        heading: "Tone Changes Meaning",
        body: "Tone alone can change the meaning of a word. The classic example is ìgbà (calabash) with a low-high pattern, ìgbá (garden egg) with low-high on a different vowel, and igbá (a calabash container) — but the clearest school example is the word oko: ọkọ̀ (husband) has a mid-low pattern, ọ̀kọ́ (hoe or vehicle) has a low-high pattern, and òkò (a type of stone) differs again. Another set is ìlú (town) with low-high, ìlù (drum) with low-low, and ìlú (pestle) is distinguished by tone and vowel length in context. Because of this, reading Yoruba without tone marks is like reading English without vowels: you may guess the word, but you cannot be sure. JAMB questions often give a word without tone marks and ask for the word with the correct tone pattern for a given meaning."
      },
      {
        heading: "Tone in Connected Speech",
        body: "Tones do not stay fixed when words join together in sentences. A high tone after a low tone may rise, a low tone may be raised before a high tone, and some tones are dropped or changed at word boundaries — this is called tone assimilation or tone sandhi. For example, the pronoun mo (I) with a mid tone may change its tone when it joins a verb, and the verb itself may change. The negative marker kò (not) carries a low tone that can affect the tone of the following verb. The most important rule for learners is that the dictionary tone of a word is its tone in isolation, while in a sentence the tones interact. When you write Yoruba, mark the tones of the words as they are pronounced in the sentence, not only as they appear alone in a dictionary."
      },
      {
        heading: "Tone and the Verb",
        body: "Tone also marks grammar in Yoruba. The verb itself may change tone to show tense or aspect: for instance, a verb in the present may carry a different tone pattern from the same verb in the past, and the difference is often only tonal. The pronouns also carry tones that show person: mo (I), o (you), ó (he or she), a (we), ẹ (you, plural), wọ́n (they). The third-person singular pronoun ó carries a high tone, which distinguishes it from the second-person singular o, which carries a mid tone. In speech, these tonal differences are the only thing that separates I from he or you from he in some sentences, so listening for tone is as important as listening for the sounds themselves."
      }
    ],
    definitions: [
      { term: "Tone", meaning: "The pitch level (high, mid or low) at which a syllable is pronounced." },
      { term: "High tone", meaning: "The highest pitch level, marked with an acute accent (´), as in bá." },
      { term: "Mid tone", meaning: "The middle pitch level, often left unmarked, as in ba." },
      { term: "Low tone", meaning: "The lowest pitch level, marked with a grave accent (`), as in bà." },
      { term: "Tone pattern", meaning: "The sequence of tones across the syllables of a word, such as low-high." },
      { term: "Tone assimilation", meaning: "The change of a tone when it comes into contact with a neighbouring tone in speech." }
    ],
    examples: [
      {
        title: "Identifying a tone pattern",
        problem: "The word ọkọ̀ (husband) has two syllables. What is its tone pattern?",
        steps: ["Split the word into syllables: ọ and kọ̀.", "Look at the tone mark on the first vowel ọ: it has no mark, so it is mid tone.", "Look at the tone mark on the second vowel ọ̀: it has a grave accent, so it is low tone.", "Combine the two tones in order.", "State the pattern as mid-low."],
        answer: "The tone pattern of ọkọ̀ is mid-low."
      },
      {
        title: "Distinguishing words by tone",
        problem: "Explain how tone distinguishes ìlú (town) from ìlù (drum).",
        steps: ["Write both words with their tone marks: ìlú and ìlù.", "Note that both have the same sounds: i, l, u.", "Compare the first syllable: both are low tone (ì).", "Compare the second syllable: ú is high tone, ù is low tone.", "Conclude that the tone of the second syllable is the only difference."],
        answer: "ìlú has a low-high pattern and ìlù has a low-low pattern; the tone of the second syllable separates town from drum."
      }
    ],
    tips: ["Learn the sol-fa link: low is do, mid is re, high is mi.", "A vowel with no mark is usually mid tone — do not call it toneless.", "Always mark high and low tones; they are never optional.", "When two words look alike, check the tones first."],
    mistakes: ["Leaving high and low tones unmarked in writing.", "Calling an unmarked vowel toneless instead of mid tone.", "Confusing ọkọ̀ (husband) with ọ̀kọ́ (hoe) by ignoring tone.", "Using the dictionary tone of a word in a sentence where tones have changed."],
    facts: ["Yoruba has three tones: high, mid and low.", "High tone is marked with an acute accent; low tone with a grave accent.", "Tone can change the meaning of a word completely.", "Every syllable in a Yoruba word carries its own tone."],
    quiz: [
      { q: "How many tones does Yoruba have?", options: ["Two", "Three", "Four", "Five"], answer: 1, explanation: "Yoruba has three tones: high, mid and low." },
      { q: "Which accent marks a high tone?", options: ["Grave accent (`)", "Acute accent (´)", "Macron (¯)", "Circumflex (^)"], answer: 1, explanation: "High tone is marked with an acute accent, as in bá." },
      { q: "Which accent marks a low tone?", options: ["Acute accent (´)", "Macron (¯)", "Grave accent (`)", "Tilde (~)"], answer: 2, explanation: "Low tone is marked with a grave accent, as in bà." },
      { q: "In the sol-fa system, low tone is called what?", options: ["Mi", "Re", "Do", "Fa"], answer: 2, explanation: "Low is do, mid is re and high is mi." },
      { q: "In the sol-fa system, high tone is called what?", options: ["Do", "Re", "Mi", "Sol"], answer: 2, explanation: "High is mi, mid is re and low is do." },
      { q: "A vowel with no tone mark is usually read as what tone?", options: ["High", "Low", "Mid", "No tone"], answer: 2, explanation: "An unmarked vowel is usually mid tone in everyday Yoruba writing." },
      { q: "What is the tone pattern of ọkọ̀ (husband)?", options: ["High-high", "Low-high", "Mid-low", "High-low"], answer: 2, explanation: "ọ is mid tone and kọ̀ is low tone, so the pattern is mid-low." },
      { q: "ìlú (town) and ìlù (drum) differ in what?", options: ["Their consonants", "The tone of the second syllable", "Their vowels", "The number of syllables"], answer: 1, explanation: "Both have the same sounds; only the tone of the second syllable differs: high in ìlú, low in ìlù." },
      { q: "What is a tone pattern?", options: ["The spelling of a word", "The sequence of tones across a word's syllables", "The number of vowels in a word", "The meaning of a proverb"], answer: 1, explanation: "A tone pattern is the sequence of tones across the syllables of a word, such as low-high." },
      { q: "Tone assimilation is best described as what?", options: ["A tone changing when it meets a neighbouring tone", "A tone disappearing from a dictionary", "A vowel changing into a consonant", "A word losing its meaning"], answer: 0, explanation: "Tone assimilation is the change of a tone in contact with a neighbouring tone in connected speech." },
      { q: "Which pronoun carries a high tone?", options: ["mo (I)", "o (you)", "ó (he or she)", "a (we)"], answer: 2, explanation: "The third-person singular pronoun ó carries a high tone, unlike o (you), which is mid." },
      { q: "Why is it important to mark tones in Yoruba writing?", options: ["To make the writing look neat", "Because tone can change the meaning of a word", "Because tones are optional", "To show the number of syllables"], answer: 1, explanation: "Tone distinguishes words with the same sounds, so unmarked tones can change or hide the meaning." },
      { q: "The word bà (count) carries which tone?", options: ["High", "Mid", "Low", "Rising"], answer: 2, explanation: "bà has a grave accent, which marks low tone." },
      { q: "Which of these is a low-high tone pattern?", options: ["ìlù", "ìlú", "bá", "bà"], answer: 1, explanation: "ìlú is low on the first syllable and high on the second, so it is low-high." },
      { q: "Tone in Yoruba is carried by what?", options: ["The consonant", "The vowel of each syllable", "The last letter only", "The first letter only"], answer: 1, explanation: "Tone is carried by the vowel of each syllable, so every syllable has its own tone." }
    ],
    status: "published"
  },
  {
    id: "yoruba-03",
    subjectId: "yoruba",
    topic: "Orthography",
    subtopic: "The Yoruba alphabet and spelling",
    title: "The Yoruba Alphabet and Spelling",
    order: 3,
    introduction: "Yoruba is written with the Roman alphabet plus three special letters and tone marks. This lesson explains the alphabet, the underdot letters, and the spelling rules that guide correct Yoruba writing.",
    objectives: ["List the letters of the Yoruba alphabet in order", "Explain the use of the underdot letters ẹ, ọ and ṣ", "Apply the basic spelling rules of Yoruba", "Distinguish words that differ only in spelling", "Write Yoruba words correctly with their diacritics"],
    sections: [
      {
        heading: "The Yoruba Alphabet",
        body: "The Yoruba alphabet has 25 letters: a, b, d, e, ẹ, f, g, gb, h, i, j, k, kp, l, m, n, o, ọ, p, r, s, ṣ, t, u, w, y. Note what is missing: there is no c, q, v, x or z in standard Yoruba, and the letters gb and kp count as single letters even though they are written with two symbols. The order of the alphabet matters for dictionaries and for JAMB questions that ask which word comes first: ẹ comes after e, ọ comes after o, and ṣ comes after s. The alphabet was standardised so that Yoruba could be written consistently, and the standard orthography is the one JAMB uses. When you write Yoruba, use the standard letters and do not import English letters such as c or z."
      },
      {
        heading: "The Underdot Letters",
        body: "Three letters carry a dot below the letter, called an underdot: ẹ, ọ and ṣ. The underdot is not decoration; it marks a different sound. The letter ẹ is an open e, different from the close e, as in ẹ̀kọ́ (lesson) and eko (a type of food). The letter ọ is an open o, different from the close o, as in ọmọ (child) and omo (a different word in some contexts). The letter ṣ is pronounced sh, different from the plain s, as in ṣe (do) and se (cook). Omitting the underdot is a spelling error in Yoruba, just as omitting a letter is an error in English. In handwriting and in print, make the dot clear, and in examinations, write ẹ, ọ and ṣ exactly, because a missing dot can make your word wrong."
      },
      {
        heading: "Spelling Rules",
        body: "Yoruba spelling follows the sounds of the words. Each syllable is written as it is pronounced, with its vowel and its tone mark. Words are written as single units, but some words are written with a hyphen or as separate words when they are compounds or phrases: for example, ìlú (town) and ilé (house) are separate words, while a compound such as ọmọdé (child) is written as one word. The nasal vowels are written with n after the vowel, as in ìrìn and ọ̀rọ̀. Long vowels, which occur in some words and in borrowed words, are written by doubling the vowel, as in sùkúùlù (school). The most important rule is to spell what you hear, including the underdots and the tone marks, and to check the spelling against the standard orthography when you are unsure."
      },
      {
        heading: "Common Spelling Traps",
        body: "Several Yoruba words look alike but are spelled differently, and JAMB tests these. The words ẹ̀kọ́ (lesson), ẹkọ (corn pap) and èkó (a type of food) differ in vowel and tone. The words ọ̀rọ̀ (word), òrò (custom) and ọrọ̀ (a different word) differ in the same way. The words ìlú (town), ìlù (drum) and ìlú (pestle) are separated by tone. The words ṣe (do) and se (cook) differ only in ṣ and s. The best defence is to learn each word with its spelling, its tone pattern and its meaning together, as one unit, rather than learning the meaning alone. When you revise, write the word, say it aloud with its tones, and use it in a sentence, so that the spelling, the sound and the meaning are linked in your memory."
      }
    ],
    definitions: [
      { term: "Orthography", meaning: "The standard system of spelling and writing a language." },
      { term: "Underdot", meaning: "A dot written below a letter, as in ẹ, ọ and ṣ, marking a different sound." },
      { term: "Alphabet", meaning: "The set of letters used to write a language, in a fixed order." },
      { term: "Long vowel", meaning: "A vowel held for a longer time, written by doubling the vowel." },
      { term: "Compound word", meaning: "A word formed by joining two or more words, such as ọmọdé." },
      { term: "Standard orthography", meaning: "The officially accepted spelling system for a language, used in examinations." }
    ],
    examples: [
      {
        title: "Choosing the correct spelling",
        problem: "Which spelling is correct for the Yoruba word for child: omo, ọmọ or ọ̀mọ́?",
        steps: ["Recall the meaning: child is ọmọ.", "Check the vowels: the first vowel is the open ọ, not the close o.", "Check the second vowel: it is also ọ, not o.", "Check the tones: ọmọ is mid-mid in isolation, not low-high.", "Choose the spelling with both underdots and no wrong tone marks."],
        answer: "ọmọ is the correct spelling for child."
      },
      {
        title: "Alphabetical order",
        problem: "Arrange these words in Yoruba alphabetical order: ṣe, se, ẹ̀kọ́, eko.",
        steps: ["Recall the Yoruba alphabet order: e comes before ẹ, and s comes before ṣ.", "Compare eko and ẹ̀kọ́: e comes before ẹ, so eko comes first.", "Compare se and ṣe: s comes before ṣ, so se comes before ṣe.", "Combine the groups: the e words come before the s words.", "Give the order: eko, ẹ̀kọ́, se, ṣe."],
        answer: "The order is eko, ẹ̀kọ́, se, ṣe."
      }
    ],
    tips: ["Learn the alphabet order: ẹ after e, ọ after o, ṣ after s.", "Never omit an underdot — it changes the sound and the word.", "Spell what you hear, including the tone marks.", "Learn each word with its spelling, tone and meaning together."],
    mistakes: ["Writing e for ẹ, o for ọ, or s for ṣ.", "Using English letters such as c, q, v, x or z in Yoruba words.", "Writing a compound word as two words, or two words as one.", "Forgetting to double a long vowel in borrowed words."],
    facts: ["The Yoruba alphabet has 25 letters, including gb and kp.", "There is no c, q, v, x or z in standard Yoruba.", "ẹ, ọ and ṣ carry an underdot that marks a different sound.", "Nasal vowels are written with n after the vowel."],
    quiz: [
      { q: "How many letters are in the Yoruba alphabet?", options: ["23", "24", "25", "26"], answer: 2, explanation: "The Yoruba alphabet has 25 letters, including gb and kp as single letters." },
      { q: "Which letter is NOT in the standard Yoruba alphabet?", options: ["ṣ", "gb", "c", "kp"], answer: 2, explanation: "There is no c in standard Yoruba; the alphabet has no c, q, v, x or z." },
      { q: "In Yoruba alphabetical order, where does ẹ come?", options: ["Before e", "After e", "After f", "Before d"], answer: 1, explanation: "ẹ comes immediately after e in the Yoruba alphabet." },
      { q: "In Yoruba alphabetical order, where does ṣ come?", options: ["Before s", "After s", "After t", "Before r"], answer: 1, explanation: "ṣ comes immediately after s in the Yoruba alphabet." },
      { q: "What does the underdot in ẹ mark?", options: ["A tone", "A different vowel sound", "A long vowel", "A nasal vowel"], answer: 1, explanation: "The underdot marks the open vowel ẹ, different from the close vowel e." },
      { q: "Which is the correct spelling for the Yoruba word for child?", options: ["omo", "ọmọ", "ọ̀mọ́", "omọ"], answer: 1, explanation: "Child is ọmọ, with the open vowel ọ in both syllables." },
      { q: "How is ṣ different from s?", options: ["ṣ is silent", "ṣ is pronounced like sh", "ṣ is a vowel", "ṣ is a tone"], answer: 1, explanation: "ṣ is pronounced like sh, while s is a plain s." },
      { q: "How are nasal vowels written in Yoruba?", options: ["With a dot below", "With n after the vowel", "With a doubled vowel", "With an acute accent"], answer: 1, explanation: "Nasal vowels are written with n after the vowel, as in ìrìn." },
      { q: "How is a long vowel written in Yoruba?", options: ["With an underdot", "By doubling the vowel", "With a grave accent", "With n after it"], answer: 1, explanation: "A long vowel is written by doubling the vowel, as in sùkúùlù." },
      { q: "Which pair differs only in the underdot?", options: ["ṣe and se", "bá and bà", "ilé and ilé", "ọmọ and ọmọ"], answer: 0, explanation: "ṣe (do) and se (cook) differ only in ṣ versus s." },
      { q: "What is orthography?", options: ["The study of tones", "The standard system of spelling a language", "The study of proverbs", "The history of a language"], answer: 1, explanation: "Orthography is the standard system of spelling and writing a language." },
      { q: "Which of these is a compound word?", options: ["ọmọdé", "ṣe", "bá", "sí"], answer: 0, explanation: "ọmọdé (child) is a compound formed from ọmọ (child) and dé (arrive or become)." },
      { q: "Which letter comes first in Yoruba alphabetical order?", options: ["ẹ̀kọ́", "eko", "ṣe", "se"], answer: 1, explanation: "e comes before ẹ, so eko comes before ẹ̀kọ́." },
      { q: "The Yoruba alphabet includes gb and kp as what?", options: ["Two separate letters each", "Single letters", "Vowels", "Tone marks"], answer: 1, explanation: "gb and kp each count as a single letter, even though they are written with two symbols." },
      { q: "Omitting the underdot in ẹ̀kọ́ is best described as what?", options: ["A spelling error", "A tone error only", "Correct in informal writing", "A punctuation error"], answer: 0, explanation: "Omitting the underdot changes the sound and the word, so it is a spelling error." }
    ],
    status: "published"
  },
  {
    id: "yoruba-04",
    subjectId: "yoruba",
    topic: "Orthography",
    subtopic: "Tone marking, elision and punctuation",
    title: "Tone Marking, Elision and Punctuation",
    order: 4,
    introduction: "Correct Yoruba writing is more than spelling the letters: tones must be marked, sounds that disappear in speech must be handled, and punctuation must follow Yoruba rules. This lesson covers tone marking, elision, contraction and punctuation.",
    objectives: ["Mark high, mid and low tones correctly in sentences", "Explain elision and contraction in Yoruba", "Use punctuation correctly in Yoruba writing", "Apply the rules for writing compound words and phrases", "Correct common errors in Yoruba written work"],
    sections: [
      {
        heading: "Tone Marking in Sentences",
        body: "In Yoruba writing, high tone is marked with an acute accent (´) and low tone with a grave accent (`), while mid tone is usually left unmarked. In a sentence, mark the tone of every vowel that carries a high or low tone: for example, Mo lọ sí ilé (I went home) is written with the low tone on lọ̀ and the high tone on sí. The mid tone of Mo and ilé is left unmarked. Tone marks are written above the vowel, and for a nasal vowel they are written above the vowel, not above the n. When a word is written in isolation in a dictionary, its tones are marked fully, but in a sentence the tones may change because of assimilation, and you should mark the tones as pronounced in that sentence. JAMB often asks you to choose the correctly tone-marked form of a sentence, so practise marking tones in whole sentences, not only in single words."
      },
      {
        heading: "Elision and Contraction",
        body: "Elision is the dropping of a vowel when two words join together. In Yoruba, when a word ending in a vowel is followed by a word beginning with a vowel, one vowel is often dropped: for example, ní ilé (in the house) becomes nílẹ́, and kò ì (not) may become kò. Contraction is the joining of two words into a shorter form, often with an apostrophe or a hyphen in older writing, but in modern standard orthography the contracted form is written as one word without an apostrophe. For example, mo ń lọ (I am going) is written ńlọ, and wá ì (come) may become wá. The dropped vowel is usually the first vowel of the second word, and the tone of the remaining vowel may change. When you write Yoruba, use the standard contracted forms, and do not write the full uncontracted form where the standard spelling is contracted."
      },
      {
        heading: "Word Division and Hyphens",
        body: "Yoruba words are written as units, but some expressions are written as separate words. A noun and its qualifier are usually written as separate words, as in ọmọ rere (good child), while a true compound is written as one word, as in ọmọdé (child). A verb and its object are written as separate words, as in jẹun (eat food) is written jẹ oúnjẹ in full, though the contracted form jẹun is common. The hyphen is used in some compound words and in reduplicated words, such as kọ̀-kọ̀ (a knock) or tẹ́tẹ́ (quickly), where the same syllable is repeated. Reduplication is common in Yoruba and often changes the meaning: for example, lọ (go) becomes lọlọ (going repeatedly). Learn the standard spelling of each compound and reduplicated word, because the hyphen and the word division are part of the spelling."
      },
      {
        heading: "Punctuation in Yoruba",
        body: "Yoruba uses the same punctuation marks as English: full stop (.), comma (,), question mark (?), exclamation mark (!), colon (:) and quotation marks (\" \"). A full stop ends a statement, as in Mo lọ sí ilé. (I went home.) A question mark ends a question, as in Nibo ni o lọ? (Where did you go?) An exclamation mark shows surprise or a command, as in Wá! (Come!) A comma separates items in a list or clauses in a sentence, as in Mo ra ìyá, ọmọ, àti bàbá. (I bought yam, child, and father — in context, items.) Quotation marks enclose direct speech, as in Ó ní, \"Mo lọ.\" (He said, \"I went.\") Capital letters are used at the start of a sentence and for proper names, as in Ìbàdàn (Ibadan) and Ọlọ́run (God). The rules are the same as in English, but the words and tones inside the punctuation are Yoruba."
      }
    ],
    definitions: [
      { term: "Elision", meaning: "The dropping of a vowel when two words join together in speech or writing." },
      { term: "Contraction", meaning: "The joining of two words into a shorter single form." },
      { term: "Reduplication", meaning: "The repetition of a syllable or word, often changing its meaning." },
      { term: "Tone marking", meaning: "Writing the acute and grave accents that show high and low tones." },
      { term: "Word division", meaning: "The rules for writing words as one word or as separate words." },
      { term: "Punctuation", meaning: "The marks, such as full stops and commas, that organise written sentences." }
    ],
    examples: [
      {
        title: "Marking tones in a sentence",
        problem: "Write the sentence meaning I went home with correct tone marks: Mo lo si ile.",
        steps: ["Identify each word: Mo (I), lọ (go), sí (to), ilé (house).", "Mark the low tone on lọ̀ with a grave accent.", "Mark the high tone on sí with an acute accent.", "Mark the high tone on ilé with an acute accent on the final é.", "Leave Mo unmarked, as it is mid tone."],
        answer: "Mo lọ̀ sí ilé."
      },
      {
        title: "Explaining an elision",
        problem: "Explain the elision in ní ilé becoming nílẹ́.",
        steps: ["Write the two words: ní (in) and ilé (house).", "Note that ní ends in the vowel í and ilé begins with the vowel i.", "Recall that when two vowels meet, one is dropped.", "The first vowel of ilé is dropped, leaving lé.", "The two words join as nílẹ́, meaning in the house."],
        answer: "The vowel i of ilé is dropped when it follows ní, giving the contracted form nílẹ́."
      }
    ],
    tips: ["Mark high and low tones in every sentence, not only in single words.", "Learn the standard contracted forms such as nílẹ́ and ńlọ.", "Use a hyphen only where the standard spelling uses one.", "Capitalise proper names and the first word of a sentence."],
    mistakes: ["Leaving tone marks off in sentences.", "Writing the full uncontracted form where the standard spelling is contracted.", "Writing a compound word as two words, or two words as one.", "Putting a tone mark above the n of a nasal vowel instead of above the vowel."],
    facts: ["Mid tone is usually left unmarked in Yoruba writing.", "Elision drops a vowel when two words join.", "Reduplication repeats a syllable and often changes meaning.", "Yoruba uses the same punctuation marks as English."],
    quiz: [
      { q: "In Yoruba writing, mid tone is usually what?", options: ["Marked with an acute accent", "Marked with a grave accent", "Left unmarked", "Marked with a macron"], answer: 2, explanation: "Mid tone is usually left unmarked, while high and low tones are marked." },
      { q: "What is elision?", options: ["Adding a vowel", "Dropping a vowel when two words join", "Doubling a consonant", "Changing a tone to high"], answer: 1, explanation: "Elision is the dropping of a vowel when two words join together." },
      { q: "ní ilé becomes nílẹ́ by what process?", options: ["Contraction", "Elision", "Reduplication", "Nasalisation"], answer: 1, explanation: "The vowel i of ilé is dropped when it follows ní, which is elision." },
      { q: "Where is a tone mark written in a nasal vowel?", options: ["Above the n", "Above the vowel", "Below the vowel", "After the word"], answer: 1, explanation: "The tone mark is written above the vowel, not above the n." },
      { q: "Which punctuation mark ends a question in Yoruba?", options: ["Full stop", "Comma", "Question mark", "Colon"], answer: 2, explanation: "A question mark ends a question, as in Nibo ni o lọ?" },
      { q: "Which is a reduplicated word?", options: ["ọmọ", "kọ̀-kọ̀", "ilé", "ṣe"], answer: 1, explanation: "kọ̀-kọ̀ repeats a syllable, which is reduplication." },
      { q: "What does reduplication often do in Yoruba?", options: ["Changes the meaning", "Removes the tone", "Adds a consonant", "Makes the word shorter"], answer: 0, explanation: "Reduplication repeats a syllable and often changes or intensifies the meaning." },
      { q: "Which is written as one word in standard Yoruba?", options: ["ọmọ rere", "ọmọdé", "Mo lọ", "sí ilé"], answer: 1, explanation: "ọmọdé is a true compound and is written as one word." },
      { q: "Which sentence has correct tone marks?", options: ["Mo lo si ile", "Mo lọ̀ sí ilé", "Mo lọ sí ilé", "Mo lọ̀ si ilé"], answer: 1, explanation: "Mo lọ̀ sí ilé marks the low tone on lọ̀ and the high tones on sí and ilé." },
      { q: "What does an exclamation mark show?", options: ["A question", "Surprise or a command", "A list", "Direct speech"], answer: 1, explanation: "An exclamation mark shows surprise or a command, as in Wá! (Come!)" },
      { q: "What is a contraction in Yoruba?", options: ["A word split in two", "Two words joined into a shorter form", "A vowel doubled", "A tone dropped"], answer: 1, explanation: "A contraction joins two words into a shorter single form, such as ńlọ from mo ń lọ." },
      { q: "Which mark is used to enclose direct speech?", options: ["Comma", "Colon", "Quotation marks", "Full stop"], answer: 2, explanation: "Quotation marks enclose direct speech, as in Ó ní, \"Mo lọ.\"" },
      { q: "Capital letters in Yoruba are used for what?", options: ["Every noun", "The start of a sentence and proper names", "Every verb", "Tones"], answer: 1, explanation: "Capital letters are used at the start of a sentence and for proper names such as Ìbàdàn." },
      { q: "When two vowels meet in Yoruba, which vowel is usually dropped?", options: ["The last vowel of the first word", "The first vowel of the second word", "Both vowels", "Neither vowel"], answer: 1, explanation: "The first vowel of the second word is usually dropped in elision." },
      { q: "Why should tone marks be written in sentences as well as in single words?", options: ["Because tones may change in connected speech", "Because sentences have no tones", "Because dictionaries require it", "Because punctuation needs it"], answer: 0, explanation: "Tones interact in connected speech, so they should be marked as pronounced in the sentence." }
    ],
    status: "published"
  },
  {
    id: "yoruba-05",
    subjectId: "yoruba",
    topic: "Grammar and Syntax",
    subtopic: "Nouns, pronouns and adjectives",
    title: "Nouns, Pronouns and Adjectives",
    order: 5,
    introduction: "Yoruba nouns name people, places and things, pronouns stand in for nouns, and adjectives describe them. This lesson explains how nouns are formed, the pronoun system, and how adjectives and numbers work in Yoruba.",
    objectives: ["Identify nouns and their classes in Yoruba", "Use the personal pronouns correctly", "Explain how adjectives qualify nouns", "Describe how numbers and quantifiers work", "Form nouns from verbs using prefixes"],
    sections: [
      {
        heading: "Nouns in Yoruba",
        body: "A noun in Yoruba names a person, place, thing or idea: ọmọ (child), ìlú (town), ilé (house), ìfẹ́ (love). Yoruba nouns do not change for gender or number in the way English nouns do: ọmọ can mean child or children, depending on the context, and the plural is shown by adding àwọn (the, plural) or a number, as in àwọn ọmọ (the children) or ọmọ méjì (two children). Many nouns are formed from verbs by adding a prefix: from jẹ (eat) comes oúnjẹ (food), from kọ (write) comes ìkọ̀ (writing), and from ṣe (do) comes ìṣe (work). The prefixes ì-, ẹ-, a- and o- are common in noun formation. Proper nouns name particular people and places, such as Adé (a name), Ìbàdàn (Ibadan) and Ọ̀yọ́ (Oyo), and they begin with a capital letter."
      },
      {
        heading: "Personal Pronouns",
        body: "Yoruba personal pronouns are: mo (I), o (you, singular), ó (he, she or it), a (we), ẹ (you, plural), wọ́n (they). Note that ó (he or she) and o (you) differ only in tone: ó is high, o is mid. The pronouns are also used as possessives: ilé mi (my house), ilé rẹ (your house), ilé rẹ̀ (his or her house), ilé wa (our house), ilé yín (your house, plural), ilé wọn (their house). The possessive forms mi, rẹ, rẹ̀, wa, yín and wọn follow the noun they possess. Yoruba has no separate masculine and feminine pronouns: ó can mean he, she or it, and the meaning is clear from the context. The pronoun ẹ is also used as a respectful singular you, and wọ́n can be used respectfully for a single elder."
      },
      {
        heading: "Adjectives and Qualifiers",
        body: "Adjectives in Yoruba usually follow the noun they describe: ọmọ rere (good child), ilé ńlá (big house), aṣọ funfun (white cloth). Some adjectives are formed from verbs: rere (good) comes from a verb root, and ńlá (big) is an adjective in its own right. Adjectives do not change for number or gender, and they do not take a plural form. A noun can be qualified by more than one adjective, as in ọmọ rere ńlá (a good big child), though the order is usually quality before size. Demonstratives also follow the noun: ọmọ yìí (this child), ọmọ náà (that child), ọmọ yẹn (that child over there). The qualifier náà (the, that) is very common and marks a noun as already known: ilé náà means the house (that we know about)."
      },
      {
        heading: "Numbers and Quantifiers",
        body: "Yoruba numbers are: ọ̀kan (one), méjì (two), mẹ́ta (three), mẹ́rin (four), márùn-ún (five), mẹ́fà (six), méje (seven), mẹ́jọ (eight), mẹ́sàn-án (nine), mẹ́wàá (ten). Numbers follow the noun they count, as in ọmọ méjì (two children) and ilé mẹ́ta (three houses). The number twenty is ogún, and larger numbers are built from twenty: ogójì (forty) is two twenties, ọgọ́ta (sixty) is three twenties. Quantifiers such as gbogbo (all), díẹ̀ (a little), púpọ̀ (many) and kò sí (none) also follow the noun: gbogbo ọmọ (all children) is an exception, as gbogbo usually comes before the noun. JAMB often tests numbers by asking for the Yoruba for a figure, or by asking which number follows a noun correctly."
      }
    ],
    definitions: [
      { term: "Noun", meaning: "A word that names a person, place, thing or idea." },
      { term: "Pronoun", meaning: "A word that stands in for a noun, such as mo (I) or ó (he)." },
      { term: "Adjective", meaning: "A word that describes or qualifies a noun." },
      { term: "Possessive pronoun", meaning: "A pronoun showing ownership, such as mi (my) or wa (our)." },
      { term: "Demonstrative", meaning: "A word pointing to a noun, such as yìí (this) or náà (that)." },
      { term: "Prefix", meaning: "A syllable added to the front of a word, such as ì- in ìkọ̀." }
    ],
    examples: [
      {
        title: "Forming a noun from a verb",
        problem: "Form a noun from the verb kọ (write) and give its meaning.",
        steps: ["Identify the verb: kọ means write.", "Recall that nouns are formed from verbs by adding a prefix.", "Add the prefix ì- to the verb root kọ.", "The result is ìkọ̀, with a low tone on the second syllable.", "Give the meaning: ìkọ̀ means writing."],
        answer: "ìkọ̀ means writing, formed from kọ (write) with the prefix ì-."
      },
      {
        title: "Using a possessive pronoun",
        problem: "Translate my house into Yoruba.",
        steps: ["Identify the noun: house is ilé.", "Identify the possessor: my is mi.", "Recall that possessive pronouns follow the noun in Yoruba.", "Place mi after ilé.", "Write the phrase with correct tones: ilé mi."],
        answer: "My house is ilé mi."
      }
    ],
    tips: ["Remember ó (he) is high tone and o (you) is mid tone — the tone is the difference.", "Adjectives and numbers follow the noun in Yoruba, unlike in English.", "Use àwọn or a number to show plural; the noun itself does not change.", "Learn numbers in groups: 1-10 first, then 20, 40 and 60."],
    mistakes: ["Putting the adjective before the noun, as in English.", "Using o for he and ó for you — the tones are reversed.", "Adding an English plural s to a Yoruba noun.", "Putting the possessive pronoun before the noun."],
    facts: ["Yoruba nouns do not change for gender or number.", "ó means he, she or it — there is no separate masculine or feminine pronoun.", "Many nouns are formed from verbs with prefixes such as ì- and ẹ-.", "Yoruba numbers follow the noun they count."],
    quiz: [
      { q: "Which word is a noun?", options: ["jẹ", "ọmọ", "rere", "méjì"], answer: 1, explanation: "ọmọ (child) is a noun; jẹ is a verb, rere is an adjective and méjì is a number." },
      { q: "How is the plural of ọmọ (child) shown?", options: ["By adding s", "By adding àwọn or a number", "By changing the tone", "By doubling the word"], answer: 1, explanation: "Yoruba nouns do not change for plural; the plural is shown by àwọn or a number, as in àwọn ọmọ." },
      { q: "Which pronoun means I in Yoruba?", options: ["o", "ó", "mo", "a"], answer: 2, explanation: "mo means I; o means you, ó means he or she, and a means we." },
      { q: "Which pronoun means he or she?", options: ["o", "ó", "mo", "ẹ"], answer: 1, explanation: "ó with a high tone means he, she or it." },
      { q: "How do you say my house in Yoruba?", options: ["mi ilé", "ilé mi", "ilé mo", "mo ilé"], answer: 1, explanation: "Possessive pronouns follow the noun, so my house is ilé mi." },
      { q: "Where does an adjective usually come in Yoruba?", options: ["Before the noun", "After the noun", "At the start of the sentence", "After the verb"], answer: 1, explanation: "Adjectives usually follow the noun, as in ọmọ rere (good child)." },
      { q: "What does ọmọ rere mean?", options: ["Big child", "Good child", "White child", "Two children"], answer: 1, explanation: "rere means good, so ọmọ rere is a good child." },
      { q: "Which prefix forms the noun ìkọ̀ (writing) from kọ (write)?", options: ["ẹ-", "ì-", "a-", "o-"], answer: 1, explanation: "The prefix ì- added to kọ gives ìkọ̀ (writing)." },
      { q: "What is the Yoruba word for two?", options: ["ọ̀kan", "méjì", "mẹ́ta", "mẹ́wàá"], answer: 1, explanation: "méjì means two; ọ̀kan is one, mẹ́ta is three and mẹ́wàá is ten." },
      { q: "What is the Yoruba word for ten?", options: ["mẹ́ta", "mẹ́rin", "márùn-ún", "mẹ́wàá"], answer: 3, explanation: "mẹ́wàá means ten." },
      { q: "How do you say two children in Yoruba?", options: ["méjì ọmọ", "ọmọ méjì", "ọmọ méjìs", "àwọn méjì"], answer: 1, explanation: "Numbers follow the noun, so two children is ọmọ méjì." },
      { q: "Which word means this child?", options: ["ọmọ náà", "ọmọ yìí", "ọmọ yẹn", "ọmọ rere"], answer: 1, explanation: "yìí means this, so ọmọ yìí is this child." },
      { q: "What does gbogbo mean?", options: ["A little", "Many", "All", "None"], answer: 2, explanation: "gbogbo means all, as in gbogbo ọmọ (all children)." },
      { q: "Which word is a proper noun?", options: ["ọmọ", "ilé", "Ìbàdàn", "rere"], answer: 2, explanation: "Ìbàdàn (Ibadan) is a proper noun naming a particular place." },
      { q: "Yoruba has no separate masculine and feminine pronouns. What does this mean?", options: ["ó can mean he, she or it", "Yoruba has no pronouns", "All pronouns are plural", "Pronouns change with gender"], answer: 0, explanation: "ó can mean he, she or it, and the meaning is clear from the context." }
    ],
    status: "published"
  },
  {
    id: "yoruba-06",
    subjectId: "yoruba",
    topic: "Grammar and Syntax",
    subtopic: "Verbs, tenses and sentence types",
    title: "Verbs, Tenses and Sentence Types",
    order: 6,
    introduction: "Yoruba verbs do not change their form for person or number, but tone and helper words show tense and aspect. This lesson explains verbs, tense and aspect, and the main sentence types in Yoruba.",
    objectives: ["Identify verbs and their objects in Yoruba sentences", "Explain how tense and aspect are shown in Yoruba", "Form negative sentences correctly", "Distinguish statements, questions and commands", "Analyse a Yoruba sentence into subject, verb and object"],
    sections: [
      {
        heading: "Verbs in Yoruba",
        body: "A Yoruba verb is the action word in a sentence: lọ (go), jẹ (eat), kọ (write), ṣe (do), wá (come). Yoruba verbs do not change for person or number: mo lọ (I go), o lọ (you go), ó lọ (he goes) and wọ́n lọ (they go) all use the same verb form lọ. The verb usually comes after the subject and before the object: Mo jẹ oúnjẹ (I ate food). Some verbs take two objects, as in Mo fún ọmọ ní oúnjẹ (I gave the child food). Yoruba verbs can be grouped into simple verbs, such as lọ and jẹ, and compound verbs, such as bẹ̀rẹ̀ (begin) and padà (return). The meaning of a verb is often completed by a following word: for example, gbà means take, but gbàgbọ́ means believe, and gbàdúrà means pray. Learn verbs with their common combinations, not alone."
      },
      {
        heading: "Tense and Aspect",
        body: "Yoruba does not mark tense on the verb itself in the way English does. Instead, tense and aspect are shown by helper words and by tone. The present or habitual is shown by the bare verb: Mo lọ sí ilé (I go home, or I am going home). The continuous is shown by ń before the verb: Mo ń lọ (I am going). The past is often shown by the context or by a time word such as lánàá (yesterday): Mo lọ sí ilé lánàá (I went home yesterday). The future is shown by yóò or máa before the verb: Mo yóò lọ (I will go) and Mo máa lọ (I will go, or I shall go). The perfect, showing a completed action, is shown by ti: Mo ti lọ (I have gone). The tone of the verb may also change to show aspect, so listen for the tone as well as the helper word when you read a sentence."
      },
      {
        heading: "Negation",
        body: "Negative sentences in Yoruba are formed with kò (not) or má (do not). The word kò comes before the verb: Mo lọ (I go) becomes Mo kò lọ (I do not go), and Ó jẹ oúnjẹ (He ate food) becomes Ó kò jẹ oúnjẹ (He did not eat food). The word má is used in commands: Má lọ (Do not go) and Má jẹun (Do not eat). The negative marker kò carries a low tone, and it can affect the tone of the verb that follows it. In some dialects and in older writing, the negative is shown by a change in the verb tone alone, but in standard Yoruba the marker kò is the normal form. To form a negative, place kò before the verb and keep the rest of the sentence the same; do not change the subject or the object."
      },
      {
        heading: "Sentence Types",
        body: "Yoruba has four main sentence types. A statement gives information: Mo lọ sí ilé. (I went home.) A question asks for information: Nibo ni o lọ? (Where did you go?) Questions are often formed with question words such as ta (who), kí (what), nibo (where), nígbà (when) and báwo (how), or with the question particle ní, as in Ṣé o lọ? (Did you go?) A command gives an order: Wá! (Come!) or Jẹun! (Eat!) An exclamation shows strong feeling: Ó dára gan! (It is very good!) The basic word order in Yoruba is subject-verb-object (SVO), as in Mo (subject) jẹ (verb) oúnjẹ (object). Complex sentences join two clauses with words such as ṣùgbọ́n (but), nítorí (because) and bí (if): Mo fẹ́ lọ, ṣùgbọ́n mo kò lè (I want to go, but I cannot)."
      }
    ],
    definitions: [
      { term: "Verb", meaning: "A word expressing an action or a state, such as lọ (go) or jẹ (eat)." },
      { term: "Tense", meaning: "The time of an action: past, present or future." },
      { term: "Aspect", meaning: "Whether an action is complete, continuing or habitual." },
      { term: "Negation", meaning: "Making a sentence negative, usually with kò (not) in Yoruba." },
      { term: "Subject", meaning: "The person or thing that performs the action in a sentence." },
      { term: "Object", meaning: "The person or thing that receives the action of the verb." }
    ],
    examples: [
      {
        title: "Parsing a sentence",
        problem: "Parse the sentence Mo jẹ oúnjẹ into subject, verb and object.",
        steps: ["Find the verb: jẹ (eat) is the action word.", "Ask who eats: Mo (I) performs the action, so Mo is the subject.", "Ask what is eaten: oúnjẹ (food) receives the action, so it is the object.", "Check the order: subject, verb, object.", "State the analysis: Mo is the subject, jẹ is the verb, oúnjẹ is the object."],
        answer: "Mo is the subject, jẹ is the verb, and oúnjẹ is the object."
      },
      {
        title: "Forming the future tense",
        problem: "Change Mo lọ (I go) into the future tense.",
        steps: ["Identify the verb: lọ (go).", "Recall that the future is shown by yóò or máa before the verb.", "Place yóò before lọ.", "Keep the subject Mo in place.", "Write the sentence: Mo yóò lọ (I will go)."],
        answer: "Mo yóò lọ (I will go)."
      }
    ],
    tips: ["Yoruba word order is subject-verb-object — find the verb first when parsing.", "Learn tense markers: ń for continuous, ti for perfect, yóò/máa for future.", "Use kò before the verb for negatives and má for negative commands.", "Question words: ta (who), kí (what), nibo (where), nígbà (when), báwo (how)."],
    mistakes: ["Changing the verb form for person or number, as in English.", "Forgetting the tense marker and relying on the verb alone.", "Placing kò after the verb instead of before it.", "Using o for he and ó for you — check the tone."],
    facts: ["Yoruba verbs do not change for person or number.", "The continuous is shown by ń before the verb.", "The future is shown by yóò or máa before the verb.", "The basic Yoruba word order is subject-verb-object."],
    quiz: [
      { q: "What is the basic word order in Yoruba?", options: ["Verb-subject-object", "Subject-verb-object", "Object-verb-subject", "Subject-object-verb"], answer: 1, explanation: "Yoruba word order is subject-verb-object, as in Mo jẹ oúnjẹ." },
      { q: "In Mo jẹ oúnjẹ, what is the subject?", options: ["jẹ", "oúnjẹ", "Mo", "None"], answer: 2, explanation: "Mo (I) performs the action, so Mo is the subject." },
      { q: "In Mo jẹ oúnjẹ, what is the object?", options: ["Mo", "jẹ", "oúnjẹ", "None"], answer: 2, explanation: "oúnjẹ (food) receives the action, so it is the object." },
      { q: "How is the continuous aspect shown in Yoruba?", options: ["By ti before the verb", "By ń before the verb", "By yóò before the verb", "By changing the verb ending"], answer: 1, explanation: "The continuous is shown by ń before the verb, as in Mo ń lọ (I am going)." },
      { q: "How is the future tense shown in Yoruba?", options: ["By ń", "By ti", "By yóò or máa", "By kò"], answer: 2, explanation: "The future is shown by yóò or máa before the verb, as in Mo yóò lọ." },
      { q: "What does Mo ti lọ mean?", options: ["I am going", "I will go", "I have gone", "I do not go"], answer: 2, explanation: "ti marks the perfect, so Mo ti lọ means I have gone." },
      { q: "How do you make Mo lọ negative?", options: ["Mo lọ kò", "Mo kò lọ", "Kò Mo lọ", "Mo má lọ"], answer: 1, explanation: "kò comes before the verb, so the negative is Mo kò lọ (I do not go)." },
      { q: "Which word is used for a negative command?", options: ["kò", "má", "ti", "ń"], answer: 1, explanation: "má is used in negative commands, as in Má lọ (Do not go)." },
      { q: "What does the question word nibo mean?", options: ["Who", "What", "Where", "When"], answer: 2, explanation: "nibo means where, as in Nibo ni o lọ? (Where did you go?)" },
      { q: "What does the question word ta mean?", options: ["Who", "What", "Where", "How"], answer: 0, explanation: "ta means who." },
      { q: "Which sentence is a command?", options: ["Mo lọ sí ilé.", "Nibo ni o lọ?", "Wá!", "Ó dára gan!"], answer: 2, explanation: "Wá! (Come!) is a command." },
      { q: "Which word joins two clauses to mean but?", options: ["nítorí", "ṣùgbọ́n", "bí", "ti"], answer: 1, explanation: "ṣùgbọ́n means but; nítorí means because and bí means if." },
      { q: "Do Yoruba verbs change for person or number?", options: ["Yes, always", "Yes, for plural only", "No, the verb form stays the same", "No, Yoruba has no verbs"], answer: 2, explanation: "Yoruba verbs do not change for person or number; mo lọ, o lọ and wọ́n lọ all use lọ." },
      { q: "What does lánàá mean?", options: ["Today", "Tomorrow", "Yesterday", "Now"], answer: 2, explanation: "lánàá means yesterday, and it can show past time in a sentence." },
      { q: "Which sentence is a question?", options: ["Mo lọ sí ilé.", "Ṣé o lọ?", "Wá!", "Mo jẹ oúnjẹ."], answer: 1, explanation: "Ṣé o lọ? (Did you go?) is a question, formed with the particle Ṣé." }
    ],
    status: "published"
  },
  {
    id: "yoruba-07",
    subjectId: "yoruba",
    topic: "Oral Literature",
    subtopic: "Ewi, ijala and oriki",
    title: "Oral Poetry: Ewi, Ijala and Oriki",
    order: 7,
    introduction: "Before writing, Yoruba literature lived in the voice: praise poetry, hunters' chants and family praise names. This lesson introduces ewi, ijala and oriki, the great oral poetic forms of the Yoruba.",
    objectives: ["Define oral literature and its features", "Describe ewi and its uses", "Explain ijala as the poetry of hunters", "Describe oriki and its social functions", "Compare ewi, ijala and oriki"],
    sections: [
      {
        heading: "What Oral Literature Is",
        body: "Oral literature is literature spoken, sung or chanted rather than written down. In Yoruba culture it includes poetry, proverbs, riddles, folktales and songs, passed from one generation to the next by word of mouth. It is performed, not read silently: the performer uses voice, gesture, music and audience response, and the audience may join in with refrains and clapping. Oral literature teaches history, morals and social values, and it preserves the language itself. Because it is not written, it changes a little with each performance, but its core stories, lines and formulas remain. JAMB tests oral literature by asking for the features, forms and functions of each type, and by asking you to identify a form from a short example."
      },
      {
        heading: "Ewi (Poetry)",
        body: "Ewi is Yoruba oral poetry, chanted or sung, often with musical accompaniment. It covers many subjects: praise of a person or town, satire of a wrongdoer, lament for the dead, and celebration at festivals and weddings. Ewi uses imagery, metaphor, repetition and proverbs, and its language is rich and figurative. Ewi is distinct from ijala, though both are chanted poetry. Ewi is performed by specialists and by ordinary people at ceremonies, and it can be improvised: a skilled performer composes lines on the spot to fit the occasion. The Yoruba saying Ẹni tó bá ń kọ ewi, ó ń kọ ìtàn (He who chants poetry is writing history) shows that ewi preserves memory. In examinations, ewi is often contrasted with written poetry, which is composed on paper rather than performed."
      },
      {
        heading: "Ijala (Hunters' Poetry)",
        body: "Ijala is the chant of Yoruba hunters, performed to praise the hunter, the hunt and the animals, and to honour the god of hunting, Ògún. It is a loud, rhythmic, boastful poetry, full of animal names, hunting terms and praise of courage. The ijala performer, the akígbe, chants the lineage of the hunter, the animals he has killed, and the dangers he has faced. Ijala is performed at hunters' festivals, funerals of hunters, and celebrations, and it is accompanied by drums and by the audience's responses. Its language is specialised: it uses hunting vocabulary and metaphors that only hunters fully understand. Ijala is therefore both entertainment and a record of hunting life, and it is one of the most distinctive oral forms in Yoruba literature."
      },
      {
        heading: "Oriki (Praise Poetry)",
        body: "Oriki is praise poetry: a set of praise names and lines attached to a person, a family, a town or a god. Every Yoruba child has an oriki, given at birth, which praises the child's lineage and destiny: for example, the oriki of a child of the Ògún lineage praises Ògún, god of iron. Oriki is chanted at naming ceremonies, weddings, funerals and festivals, and it is also used to greet and honour a person: to chant a person's oriki is to show respect. Oriki uses metaphor and hyperbole: a person may be called a lion (kìnìún) or a great tree. The oriki of a town praises its history and its heroes. Oriki is personal and social: it tells you who a person is, where they come from, and what is expected of them."
      }
    ],
    definitions: [
      { term: "Oral literature", meaning: "Literature spoken, sung or chanted, passed on by word of mouth." },
      { term: "Ewi", meaning: "Yoruba oral poetry, chanted or sung on many subjects." },
      { term: "Ijala", meaning: "The chant of Yoruba hunters, praising the hunt and the god Ògún." },
      { term: "Oriki", meaning: "Praise poetry: praise names and lines attached to a person, family or town." },
      { term: "Akígbe", meaning: "A performer of ijala, the hunters' chant." },
      { term: "Performance", meaning: "The live delivery of oral literature before an audience." }
    ],
    examples: [
      {
        title: "Identifying oriki",
        problem: "A performer chants praise names of a newborn child and its family lineage at a naming ceremony. Which oral form is this?",
        steps: ["Note the occasion: a naming ceremony.", "Note the content: praise names of the child and its lineage.", "Recall that oriki is praise poetry attached to a person and family.", "Check the other forms: ewi is general poetry, ijala is hunters' chant.", "Conclude the form is oriki."],
        answer: "This is oriki, praise poetry for the child and its family."
      },
      {
        title: "Identifying ijala",
        problem: "A chant praises a hunter, lists the animals he has killed, and honours Ògún, god of hunting. Which form is it?",
        steps: ["Note the subject: a hunter and his kills.", "Note the god honoured: Ògún, god of hunting.", "Recall that ijala is the chant of hunters, honouring Ògún.", "Check ewi and oriki: neither is specific to hunters.", "Conclude the form is ijala."],
        answer: "This is ijala, the hunters' chant."
      }
    ],
    tips: ["Link each form to its performer and occasion: ijala-hunters, oriki-naming, ewi-general.", "Remember Ògún is the god of hunting and iron, honoured in ijala.", "Oral literature is performed, not read silently — use performance features in answers.", "Learn one example line or feature for each form."],
    mistakes: ["Confusing ewi with ijala — ewi is general poetry, ijala is hunters' poetry.", "Saying oriki is only for kings — every child has an oriki.", "Calling oral literature written literature.", "Forgetting that the audience joins in oral performance."],
    facts: ["Oral literature is passed on by word of mouth.", "Ijala honours Ògún, god of hunting.", "Every Yoruba child has an oriki.", "Ewi can be improvised for the occasion."],
    quiz: [
      { q: "What is oral literature?", options: ["Literature written in books", "Literature spoken, sung or chanted", "Literature in English only", "Literature about kings only"], answer: 1, explanation: "Oral literature is spoken, sung or chanted, passed on by word of mouth." },
      { q: "Which form is the chant of Yoruba hunters?", options: ["Ewi", "Ijala", "Oriki", "Alo"], answer: 1, explanation: "Ijala is the chant of Yoruba hunters, praising the hunt and Ògún." },
      { q: "Which god is honoured in ijala?", options: ["Ṣàngó", "Ògún", "Ọbàtálá", "Yẹmọja"], answer: 1, explanation: "Ijala honours Ògún, god of hunting and iron." },
      { q: "What is oriki?", options: ["A riddle", "Praise poetry for a person, family or town", "A folktale", "A hunters' chant"], answer: 1, explanation: "Oriki is praise poetry: praise names and lines attached to a person, family or town." },
      { q: "When is oriki chanted?", options: ["Only at funerals", "At naming ceremonies, weddings and festivals", "Only in the forest", "Only by hunters"], answer: 1, explanation: "Oriki is chanted at naming ceremonies, weddings, funerals and festivals." },
      { q: "What is ewi?", options: ["A hunters' chant", "Yoruba oral poetry on many subjects", "A proverb", "A riddle"], answer: 1, explanation: "Ewi is Yoruba oral poetry, chanted or sung on praise, satire, lament and celebration." },
      { q: "Who is the akígbe?", options: ["A praise singer of oriki", "A performer of ijala", "A storyteller of alo", "A drummer only"], answer: 1, explanation: "The akígbe is the performer of ijala, the hunters' chant." },
      { q: "Which feature is typical of oral literature?", options: ["It is read silently", "It is performed before an audience", "It never changes", "It is always written"], answer: 1, explanation: "Oral literature is performed live, with voice, gesture, music and audience response." },
      { q: "In oriki, a person may be called a lion to show what?", options: ["Fear", "Courage and strength", "Weakness", "Poverty"], answer: 1, explanation: "Oriki uses metaphor and hyperbole; calling a person a lion (kìnìún) praises courage and strength." },
      { q: "Which of these is a function of oral literature?", options: ["Teaching history and morals", "Replacing writing", "Stopping festivals", "Ending storytelling"], answer: 0, explanation: "Oral literature teaches history, morals and social values and preserves the language." },
      { q: "Ewi can be improvised. What does this mean?", options: ["It is always written first", "The performer composes lines on the spot", "It is never performed", "It has no words"], answer: 1, explanation: "A skilled ewi performer composes lines on the spot to fit the occasion." },
      { q: "Which form praises a town's history and heroes?", options: ["Ijala", "Oriki of a town", "Alo", "Riddle"], answer: 1, explanation: "The oriki of a town praises its history and its heroes." },
      { q: "Ijala is accompanied by what?", options: ["Silence only", "Drums and audience responses", "Written texts", "English songs"], answer: 1, explanation: "Ijala is performed with drums and with the audience's responses." },
      { q: "Which statement about oriki is true?", options: ["Only kings have oriki", "Every Yoruba child has an oriki", "Oriki is only for hunters", "Oriki is written, not chanted"], answer: 1, explanation: "Every Yoruba child has an oriki, given at birth." },
      { q: "The Yoruba saying that he who chants poetry is writing history refers to which form?", options: ["Alo", "Ewi", "Riddle", "Proverb"], answer: 1, explanation: "Ewi preserves memory and history, so chanting ewi is like writing history." }
    ],
    status: "published"
  },
  {
    id: "yoruba-08",
    subjectId: "yoruba",
    topic: "Oral Literature",
    subtopic: "Proverbs, riddles, folktales and songs",
    title: "Proverbs, Riddles, Folktales and Songs",
    order: 8,
    introduction: "Proverbs carry Yoruba wisdom in a single sentence, riddles test the mind, folktales teach through story, and songs carry feeling. This lesson explains òwe, àlọ́, ìtàn and orin, and how to analyse them.",
    objectives: ["Define and explain the Yoruba proverb (òwe)", "Analyse the meaning and use of a proverb", "Describe riddles and how they are solved", "Explain folktales (àlọ́) and their lessons", "Describe the role of songs in Yoruba oral literature"],
    sections: [
      {
        heading: "Proverbs (Òwe)",
        body: "A proverb, òwe, is a short, wise saying that carries the experience of the community: for example, Ẹni tó ń bẹ̀rù kò ní rí ọ̀rọ̀ (He who is afraid will not see the matter through) teaches courage, and Bí a bá ń ṣe rere, a ó rí rere (If we do good, we shall see good) teaches that good deeds bring good results. Proverbs are used in conversation, in speeches and in literature to make a point briefly and memorably, and a person who uses proverbs well is respected as wise. The Yoruba say Òwe lẹ́ṣin ọ̀rọ̀, bí ọ̀rọ̀ bá sọnù, òwe la fi ń wá a (Proverbs are the horse of speech; when speech is lost, proverbs are used to find it), meaning that proverbs carry speech forward. To analyse a proverb, give its literal meaning, its deeper meaning, and the situation in which it is used. JAMB often gives a proverb and asks for its meaning or for the situation it fits."
      },
      {
        heading: "Riddles (Àlọ́ Ìkọ̀)",
        body: "A riddle, àlọ́ ìkọ̀, is a puzzling question or statement that must be solved: for example, Mo ní ẹyẹ kan, ó ń fò ní òkè, kò ní ẹsẹ̀ (I have a bird, it flies above, it has no legs) — the answer is the wind, or in some versions, a kite. Riddles are usually a game between two people: one asks, the other answers, and if the answer is wrong, the asker gives a clue. Riddles test intelligence, observation and knowledge of the world, and they are a favourite pastime for children in the evening. A riddle has two parts: the puzzle and the answer, and the puzzle often describes the thing in a strange or misleading way. In examinations, you may be given a riddle and asked for its answer, or given an answer and asked which riddle fits it."
      },
      {
        heading: "Folktales (Àlọ́)",
        body: "A folktale, àlọ́, is a story told in the evening, often beginning with the call Àlọ́ o! (Story!) and the response Àlọ̀! (Story!). The most famous Yoruba folktale character is the tortoise, Ìjàpá, who is clever but greedy and selfish, and whose tricks usually end in disgrace. Folktales teach morals: the story of Ìjàpá and the birds, in which the tortoise tricks the birds and falls from the sky, teaches that greed and deceit bring shame. Folktales also explain nature: why the tortoise has a cracked shell, why the bat flies at night, or why the spider lives in corners. The storyteller uses songs, repetition and audience participation, and the story ends with a moral or a song. To analyse a folktale, identify the characters, the plot, the moral, and the features of oral performance in it."
      },
      {
        heading: "Songs (Orin)",
        body: "Songs, orin, are part of almost every Yoruba ceremony: birth, naming, marriage, festivals and funerals all have their songs. Work songs lighten labour on the farm, lullabies (orin ìtọ́jú) soothe children to sleep, and praise songs honour people and gods. A song often has a leader and a chorus: the leader sings a line and the chorus answers, as in call and response. Songs carry history and feeling, and they are a way of teaching children the language and the values of the community. In oral literature, songs are not separate from the other forms: a folktale may include a song, a proverb may be sung, and an oriki may be chanted to music. When you analyse a song, note its occasion, its theme, its call-and-response pattern, and the feeling it creates."
      }
    ],
    definitions: [
      { term: "Òwe", meaning: "A proverb: a short, wise saying carrying the experience of the community." },
      { term: "Àlọ́ ìkọ̀", meaning: "A riddle: a puzzling question or statement to be solved." },
      { term: "Àlọ́", meaning: "A folktale: a story told in the evening, often with a moral." },
      { term: "Orin", meaning: "A song, used in ceremonies, work, lullabies and praise." },
      { term: "Ìjàpá", meaning: "The tortoise, the clever but greedy hero of many Yoruba folktales." },
      { term: "Call and response", meaning: "A pattern in which a leader sings a line and the chorus answers." }
    ],
    examples: [
      {
        title: "Analysing a proverb",
        problem: "Analyse the proverb Bí a bá ń ṣe rere, a ó rí rere.",
        steps: ["Give the literal translation: If we do good, we shall see good.", "Explain the deeper meaning: good deeds bring good results.", "Note the lesson: be kind and honest in your dealings.", "Give a situation: it is used to encourage a person to do good.", "State the theme: the reward of goodness."],
        answer: "It means good deeds bring good results, and it is used to encourage goodness."
      },
      {
        title: "Analysing a folktale",
        problem: "What is the moral of the folktale of Ìjàpá and the birds?",
        steps: ["Recall the story: Ìjàpá tricks the birds, borrows their feathers, and falls from the sky.", "Note Ìjàpá's fault: greed and deceit.", "Note the result: he falls and his shell cracks.", "Identify the lesson: greed and deceit bring shame and harm.", "State the moral clearly."],
        answer: "The moral is that greed and deceit bring shame and harm to the deceiver."
      }
    ],
    tips: ["For a proverb, give literal meaning, deeper meaning and situation of use.", "Learn the call Àlọ́ o! and the response Àlọ̀! for folktales.", "Remember Ìjàpá is clever but greedy — his tricks end in disgrace.", "Link a riddle to its answer by the clues in the puzzle."],
    mistakes: ["Giving only the literal meaning of a proverb and stopping there.", "Confusing àlọ́ (folktale) with àlọ́ ìkọ̀ (riddle).", "Saying Ìjàpá is a hero to copy — he is a warning, not a model.", "Forgetting the moral when analysing a folktale."],
    facts: ["Òwe lẹ́ṣin ọ̀rọ̀: proverbs are the horse of speech.", "Ìjàpá is the tortoise hero of Yoruba folktales.", "A folktale often begins with Àlọ́ o! and the response Àlọ̀!", "Songs use call and response: leader and chorus."],
    quiz: [
      { q: "What is òwe in Yoruba?", options: ["A riddle", "A proverb", "A folktale", "A song"], answer: 1, explanation: "Òwe is a proverb: a short, wise saying." },
      { q: "What does the proverb Bí a bá ń ṣe rere, a ó rí rere mean?", options: ["Good deeds bring good results", "Fear brings success", "Greed is good", "Silence is golden"], answer: 0, explanation: "It means if we do good, we shall see good — good deeds bring good results." },
      { q: "What does Òwe lẹ́ṣin ọ̀rọ̀ mean?", options: ["Proverbs are useless", "Proverbs are the horse of speech", "Proverbs are for children", "Proverbs are songs"], answer: 1, explanation: "It means proverbs are the horse of speech; when speech is lost, proverbs find it." },
      { q: "What is àlọ́ ìkọ̀?", options: ["A proverb", "A riddle", "A folktale", "A praise poem"], answer: 1, explanation: "Àlọ́ ìkọ̀ is a riddle: a puzzling question or statement to be solved." },
      { q: "What is àlọ́?", options: ["A riddle", "A folktale", "A song", "A proverb"], answer: 1, explanation: "Àlọ́ is a folktale, a story told in the evening, often with a moral." },
      { q: "How does a Yoruba folktale often begin?", options: ["With a song only", "With the call Àlọ́ o! and the response Àlọ̀!", "With a proverb only", "With silence"], answer: 1, explanation: "A folktale often begins with the call Àlọ́ o! and the response Àlọ̀!" },
      { q: "Who is Ìjàpá in Yoruba folktales?", options: ["A lion", "The tortoise", "A bird", "A hunter"], answer: 1, explanation: "Ìjàpá is the tortoise, clever but greedy, hero of many folktales." },
      { q: "What is the moral of the tale of Ìjàpá and the birds?", options: ["Greed brings reward", "Greed and deceit bring shame", "Trickery is wise", "Birds are foolish"], answer: 1, explanation: "Ìjàpá tricks the birds and falls, teaching that greed and deceit bring shame." },
      { q: "What is call and response in Yoruba songs?", options: ["A leader sings and the chorus answers", "Two people argue", "A song with no words", "A song sung alone"], answer: 0, explanation: "In call and response, the leader sings a line and the chorus answers it." },
      { q: "What is orin ìtọ́jú?", options: ["A work song", "A lullaby", "A praise song", "A funeral song"], answer: 1, explanation: "Orin ìtọ́jú is a lullaby, sung to soothe children to sleep." },
      { q: "To analyse a proverb well, you should give what?", options: ["Only the literal meaning", "Literal meaning, deeper meaning and situation of use", "Only the Yoruba words", "Only the English translation"], answer: 1, explanation: "A full analysis gives the literal meaning, the deeper meaning and the situation in which it is used." },
      { q: "Riddles in Yoruba are mainly a test of what?", options: ["Strength", "Intelligence and observation", "Wealth", "Age"], answer: 1, explanation: "Riddles test intelligence, observation and knowledge of the world." },
      { q: "Folktales also explain nature. Which is an example?", options: ["Why the tortoise has a cracked shell", "Why the sun is hot", "Why English is spoken", "Why towns are big"], answer: 0, explanation: "Folktales explain nature, such as why the tortoise has a cracked shell." },
      { q: "A person who uses proverbs well is respected as what?", options: ["Rich", "Wise", "Strong", "Old"], answer: 1, explanation: "A person who uses proverbs well is respected as wise." },
      { q: "Which of these is a song used at work?", options: ["Orin ìtọ́jú", "Work song", "Oriki", "Àlọ́ ìkọ̀"], answer: 1, explanation: "Work songs lighten labour on the farm." }
    ],
    status: "published"
  },
  {
    id: "yoruba-09",
    subjectId: "yoruba",
    topic: "Written Literature — Prose",
    subtopic: "The Yoruba novel and short story",
    title: "Yoruba Prose: The Novel and Short Story",
    order: 9,
    introduction: "Yoruba written prose began with early novels and has grown into a rich tradition of novels and short stories. This lesson explains the features of Yoruba prose fiction and how to analyse a novel or story.",
    objectives: ["Describe the development of Yoruba written prose", "Explain the features of the Yoruba novel", "Distinguish the novel from the short story", "Analyse plot, character, setting and theme in prose", "Discuss the role of D. O. Fagunwa in Yoruba literature"],
    sections: [
      {
        heading: "The Birth of Yoruba Prose",
        body: "Yoruba written prose began in the twentieth century, when Yoruba writers began to write novels in Yoruba rather than only in English. The founding work is Ògbójú Ọdẹ Nínú Igbó Irúnmọlẹ̀ (The Brave Hunter in the Forest of Spirits) by D. O. Fagunwa, published in 1938. It tells the story of Akara-ogun, a brave hunter who enters the forest of spirits and meets strange creatures, and it blends folktale, adventure and moral teaching. Fagunwa wrote other novels, including Ìrèké Oníbùdó (The Sugarcane of the Owner of the Well), Ìgbó Olódùmarè (The Forest of the Almighty) and Àdììtú Olódùmarè (The Secret of the Almighty). His language is rich in proverbs, songs and oral forms, and his stories draw on Yoruba beliefs about spirits, the forest and the supernatural. Fagunwa is therefore called the father of Yoruba literature, and JAMB often asks about his works and their themes."
      },
      {
        heading: "Features of the Yoruba Novel",
        body: "A Yoruba novel is a long prose story with a plot, characters, setting, theme and style. The plot is the sequence of events: for example, in Ògbójú Ọdẹ, the hunter enters the forest, faces trials, and returns home wiser. The characters include the hero, his helpers and his enemies, and they are often drawn from Yoruba life and belief. The setting is usually a Yoruba town, village or forest, with Yoruba customs, food, dress and religion. The theme is the main idea: courage, greed, love, fate, or the struggle between good and evil. The style is the writer's use of language: Fagunwa's style is rich in proverbs and songs, while later writers use simpler, modern language. The novel is written to entertain and to teach, and it often ends with a moral."
      },
      {
        heading: "The Short Story",
        body: "A short story is a brief prose narrative, shorter than a novel, with fewer characters and a single main event or theme. Yoruba short stories are often published in collections or in newspapers and magazines, and they deal with everyday life: family, school, market, love, poverty and ambition. A short story usually has one plot, one main character, and a single setting, and it ends with a twist or a moral. For example, a story may show a greedy trader who loses everything, or a kind student who is rewarded. The short story is a good form for new writers, and it is often used in examinations because it can be read and analysed in a short time. To analyse a short story, identify the plot, the main character, the setting, the theme and the lesson."
      },
      {
        heading: "Analysing Prose Fiction",
        body: "To analyse a Yoruba novel or short story, work through five elements. First, summarise the plot in a few sentences: what happens, in order. Second, describe the main characters and their traits: is the hero brave, greedy, kind or foolish? Third, describe the setting: where and when does the story take place, and how does it affect the story? Fourth, state the theme: what is the writer saying about life, society or Yoruba culture? Fifth, comment on the style: does the writer use proverbs, songs, dialogue, humour or suspense? Use evidence from the text: quote a short line or describe a scene to support each point. A good analysis does not only retell the story; it explains what the story means and how the writer creates that meaning."
      }
    ],
    definitions: [
      { term: "Prose", meaning: "Written language in sentences and paragraphs, as in novels and stories." },
      { term: "Novel", meaning: "A long prose story with plot, characters, setting and theme." },
      { term: "Short story", meaning: "A brief prose narrative with one main event and few characters." },
      { term: "Plot", meaning: "The sequence of events in a story." },
      { term: "Theme", meaning: "The main idea or message of a literary work." },
      { term: "Setting", meaning: "The place and time in which a story takes place." }
    ],
    examples: [
      {
        title: "Identifying the father of Yoruba literature",
        problem: "Who is called the father of Yoruba literature, and what was his first novel?",
        steps: ["Recall the founding work of Yoruba prose: Ògbójú Ọdẹ Nínú Igbó Irúnmọlẹ̀, published in 1938.", "Recall its author: D. O. Fagunwa.", "Note that Fagunwa wrote other novels, including Ìgbó Olódùmarè.", "Recall that he is called the father of Yoruba literature.", "Give the answer with author and title."],
        answer: "D. O. Fagunwa is the father of Yoruba literature; his first novel is Ògbójú Ọdẹ Nínú Igbó Irúnmọlẹ̀ (1938)."
      },
      {
        title: "Analysing a story's theme",
        problem: "A short story shows a greedy trader who loses everything. What is its likely theme?",
        steps: ["Identify the main character's fault: greed.", "Note the result: he loses everything.", "Recall that a theme is the main idea or message.", "Link the fault and the result: greed leads to loss.", "State the theme: greed brings ruin."],
        answer: "The theme is that greed brings ruin."
      }
    ],
    tips: ["Learn Fagunwa's first novel and its year: Ògbójú Ọdẹ, 1938.", "Analyse prose by plot, character, setting, theme and style — in that order.", "Use evidence from the text to support every point.", "A short story has one plot and few characters; a novel has many."],
    mistakes: ["Retelling the story instead of analysing it.", "Confusing plot with theme — plot is what happens, theme is what it means.", "Calling Fagunwa's work a folktale — it is a written novel drawing on folktale.", "Forgetting the setting when analysing a story."],
    facts: ["D. O. Fagunwa published Ògbójú Ọdẹ in 1938.", "Fagunwa is called the father of Yoruba literature.", "His novels blend folktale, adventure and moral teaching.", "A short story has one main event and few characters."],
    quiz: [
      { q: "Who is called the father of Yoruba literature?", options: ["Wole Soyinka", "D. O. Fagunwa", "Chinua Achebe", "Amos Tutuola"], answer: 1, explanation: "D. O. Fagunwa is called the father of Yoruba literature." },
      { q: "What was Fagunwa's first novel?", options: ["Ìgbó Olódùmarè", "Ògbójú Ọdẹ Nínú Igbó Irúnmọlẹ̀", "Ìrèké Oníbùdó", "Àdììtú Olódùmarè"], answer: 1, explanation: "His first novel was Ògbójú Ọdẹ Nínú Igbó Irúnmọlẹ̀, published in 1938." },
      { q: "In which year was Ògbójú Ọdẹ published?", options: ["1928", "1938", "1948", "1958"], answer: 1, explanation: "Ògbójú Ọdẹ Nínú Igbó Irúnmọlẹ̀ was published in 1938." },
      { q: "Who is the hero of Ògbójú Ọdẹ?", options: ["Ìjàpá", "Akara-ogun", "Ògún", "Ṣàngó"], answer: 1, explanation: "Akara-ogun is the brave hunter who enters the forest of spirits." },
      { q: "What is the plot of a story?", options: ["The main idea", "The sequence of events", "The place of the story", "The writer's language"], answer: 1, explanation: "Plot is the sequence of events in a story." },
      { q: "What is the theme of a story?", options: ["The sequence of events", "The main idea or message", "The place of the story", "The hero's name"], answer: 1, explanation: "Theme is the main idea or message of a literary work." },
      { q: "What is the setting of a story?", options: ["The hero", "The place and time of the story", "The moral", "The title"], answer: 1, explanation: "Setting is the place and time in which a story takes place." },
      { q: "How does a short story differ from a novel?", options: ["It is longer", "It has one main event and few characters", "It has no theme", "It is always about hunters"], answer: 1, explanation: "A short story is brief, with one main event and few characters, while a novel is long with many." },
      { q: "Fagunwa's language is rich in what?", options: ["English idioms", "Proverbs and songs", "Scientific terms", "French words"], answer: 1, explanation: "Fagunwa's style is rich in proverbs, songs and oral forms." },
      { q: "Which of these is a novel by Fagunwa?", options: ["Ìgbó Olódùmarè", "Things Fall Apart", "The Lion and the Jewel", "Purple Hibiscus"], answer: 0, explanation: "Ìgbó Olódùmarè is a novel by D. O. Fagunwa." },
      { q: "What does Fagunwa's Ògbójú Ọdẹ blend?", options: ["Folktale, adventure and moral teaching", "Science and history", "Poetry and drama only", "English and French"], answer: 0, explanation: "It blends folktale, adventure and moral teaching." },
      { q: "A good analysis of prose should do what?", options: ["Only retell the story", "Explain what the story means and how the writer creates it", "List the characters only", "Give the title only"], answer: 1, explanation: "A good analysis explains what the story means and how the writer creates that meaning, with evidence." },
      { q: "Which element is about the writer's use of language?", options: ["Plot", "Setting", "Style", "Character"], answer: 2, explanation: "Style is the writer's use of language, such as proverbs, dialogue and humour." },
      { q: "Yoruba short stories often deal with what?", options: ["Everyday life: family, school, market and love", "Space travel only", "Ancient Rome", "English kings"], answer: 0, explanation: "Yoruba short stories often deal with everyday life: family, school, market, love, poverty and ambition." },
      { q: "Where is a Yoruba novel usually set?", options: ["In a Yoruba town, village or forest", "In London only", "In the sea", "In space"], answer: 0, explanation: "The setting is usually a Yoruba town, village or forest, with Yoruba customs and beliefs." }
    ],
    status: "published"
  },
  {
    id: "yoruba-10",
    subjectId: "yoruba",
    topic: "Written Literature — Prose",
    subtopic: "Essays, biography and non-fiction prose",
    title: "Essays, Biography and Non-Fiction Prose",
    order: 10,
    introduction: "Not all Yoruba prose is fiction: essays argue a point, biographies tell a life, and other non-fiction explains the world. This lesson explains Yoruba non-fiction prose and how to write and analyse an essay in Yoruba.",
    objectives: ["Distinguish fiction from non-fiction prose", "Describe the features of a Yoruba essay", "Explain biography and autobiography", "Plan and write a short essay in Yoruba", "Analyse a non-fiction passage for its main idea"],
    sections: [
      {
        heading: "Fiction and Non-Fiction",
        body: "Fiction is prose that tells an invented story, such as a novel or a short story. Non-fiction is prose that deals with real people, real events and real ideas: essays, biographies, histories, letters and speeches. In Yoruba, both kinds are written, but they have different purposes: fiction entertains and teaches through story, while non-fiction informs, argues or records. A biography tells the life of a real person, such as a king, a teacher or a hero, while an autobiography is a life story written by the person themselves. A history records the past of a town or a people. An essay argues a point or explains a topic. In examinations, you must know which kind a passage is, because the questions asked about fiction and non-fiction are different."
      },
      {
        heading: "The Yoruba Essay",
        body: "An essay in Yoruba, called àròkọ, is a short piece of writing on a topic, such as Ìlú mi (My town), Ìṣẹ́ mi (My work) or Ìdáàbòbò (Protection). A good essay has an introduction, a body and a conclusion. The introduction states the topic and the writer's view. The body develops the topic in paragraphs, each with one main idea and examples. The conclusion sums up the writer's view. Yoruba essays use clear, correct language, with proper tones and spelling, and they often use proverbs to make a point: for example, an essay on hard work may use the proverb Iṣẹ́ ni ògùn ìṣẹ́ (Work is the medicine for poverty). Essays are also used in examinations to test writing skill, so practise writing short essays on common topics such as my school, my town, farming, and the importance of education."
      },
      {
        heading: "Biography and History",
        body: "A biography in Yoruba tells the life of a person from birth to death or to the present, in order. It gives the person's birth, family, education, work, achievements and character. For example, a biography of a Yoruba king would tell of his birth, his crowning, his reign and his deeds. An autobiography is the same, but written by the person themselves, using I. A history tells the story of a town, a kingdom or a people: for example, the history of Ọ̀yọ́ tells of its founding, its kings (the Aláàfin), its wars and its fall. Both biography and history use facts, dates and names, and they must be accurate. When you analyse a biography, note the person's life stages and what made them important; when you analyse a history, note the events in order and their causes and results."
      },
      {
        heading: "Analysing Non-Fiction",
        body: "To analyse a non-fiction passage, first find its main idea: what is the writer saying? Then find the supporting points: what examples, facts or arguments does the writer use? Then note the writer's purpose: to inform, to persuade, or to record? Then comment on the language: is it formal or informal, does it use proverbs, and is it clear? For an essay question, plan before you write: write the topic, list three points, and give an example for each. Write in paragraphs, one idea per paragraph, and end with a conclusion that restates your view. Check your tones, your underdots and your punctuation before you finish. A clear, well-planned essay in correct Yoruba scores more than a long, confused one."
      }
    ],
    definitions: [
      { term: "Fiction", meaning: "Prose telling an invented story, such as a novel or short story." },
      { term: "Non-fiction", meaning: "Prose dealing with real people, events and ideas." },
      { term: "Àròkọ", meaning: "An essay: a short piece of writing on a topic." },
      { term: "Biography", meaning: "The life story of a real person, written by someone else." },
      { term: "Autobiography", meaning: "A life story written by the person themselves." },
      { term: "History", meaning: "A record of the past of a town, kingdom or people." }
    ],
    examples: [
      {
        title: "Planning an essay",
        problem: "Plan a short essay on the topic Ìlú mi (My town).",
        steps: ["Write the introduction: name your town and say one good thing about it.", "Choose three body points: its people, its market, and its festivals.", "Give an example for each point: a festival, a market day, a kind neighbour.", "Write the conclusion: say why you love your town.", "Check that each paragraph has one main idea."],
        answer: "Introduction: name and praise the town; body: people, market, festivals with examples; conclusion: why you love it."
      },
      {
        title: "Identifying non-fiction",
        problem: "A passage tells the life of a Yoruba king from birth to crowning. What kind of prose is it?",
        steps: ["Note the subject: a real person, a Yoruba king.", "Note the content: his life from birth to crowning.", "Recall that a life story of a real person is a biography.", "Check fiction: fiction tells an invented story, not a real life.", "Conclude the passage is a biography, which is non-fiction."],
        answer: "It is a biography, a form of non-fiction prose."
      }
    ],
    tips: ["Plan an essay before writing: three points, one example each.", "Use a proverb to strengthen a point, but do not overuse proverbs.", "In a biography, keep events in order from birth onwards.", "Check tones, underdots and punctuation before finishing."],
    mistakes: ["Writing fiction when the question asks for an essay.", "Putting all ideas in one paragraph.", "Writing a biography out of order.", "Forgetting a conclusion in an essay."],
    facts: ["Àròkọ means essay in Yoruba.", "A biography is written by someone else; an autobiography by the person themselves.", "Iṣẹ́ ni ògùn ìṣẹ́ means work is the medicine for poverty.", "Non-fiction deals with real people, events and ideas."],
    quiz: [
      { q: "What is àròkọ in Yoruba?", options: ["A novel", "An essay", "A poem", "A play"], answer: 1, explanation: "Àròkọ is an essay: a short piece of writing on a topic." },
      { q: "What is the difference between fiction and non-fiction?", options: ["Fiction is invented; non-fiction deals with real people and events", "Fiction is longer", "Non-fiction is always poetry", "There is no difference"], answer: 0, explanation: "Fiction tells an invented story; non-fiction deals with real people, events and ideas." },
      { q: "What is a biography?", options: ["A life story written by the person themselves", "The life story of a real person, written by someone else", "A history of a town", "A short story"], answer: 1, explanation: "A biography is the life story of a real person, written by someone else." },
      { q: "What is an autobiography?", options: ["A life story written by the person themselves", "A novel", "A history of a kingdom", "An essay"], answer: 0, explanation: "An autobiography is a life story written by the person themselves." },
      { q: "What are the three parts of an essay?", options: ["Plot, character, setting", "Introduction, body, conclusion", "Beginning, middle, end of a story", "Title, author, date"], answer: 1, explanation: "A good essay has an introduction, a body and a conclusion." },
      { q: "What does the proverb Iṣẹ́ ni ògùn ìṣẹ́ mean?", options: ["Work is the medicine for poverty", "Work is useless", "Poverty is good", "Work is for kings"], answer: 0, explanation: "It means work is the medicine for poverty — hard work cures poverty." },
      { q: "A history of Ọ̀yọ́ would tell about what?", options: ["The Aláàfin and the kings of Ọ̀yọ́", "A tortoise", "English kings", "The sea"], answer: 0, explanation: "The history of Ọ̀yọ́ tells of its founding, its kings (the Aláàfin), its wars and its fall." },
      { q: "How many main ideas should a paragraph in an essay have?", options: ["Three", "One", "Five", "As many as possible"], answer: 1, explanation: "Each paragraph should have one main idea, with examples." },
      { q: "Which of these is non-fiction?", options: ["A novel", "A biography", "A short story", "A folktale"], answer: 1, explanation: "A biography is non-fiction; a novel, a short story and a folktale are fiction." },
      { q: "When analysing non-fiction, what should you find first?", options: ["The hero's name", "The main idea", "The rhyme", "The moral of a tortoise"], answer: 1, explanation: "First find the main idea: what is the writer saying?" },
      { q: "In a biography, events should be told in what order?", options: ["Random order", "From birth onwards, in order", "Backwards", "By importance only"], answer: 1, explanation: "A biography tells a life from birth onwards, in order." },
      { q: "Which essay topic is common in Yoruba examinations?", options: ["Ìlú mi (My town)", "Space travel", "Ancient Rome", "The moon"], answer: 0, explanation: "Common topics include my town, my school, farming and the importance of education." },
      { q: "What is the purpose of a conclusion in an essay?", options: ["To introduce a new topic", "To sum up the writer's view", "To list characters", "To tell a story"], answer: 1, explanation: "The conclusion sums up the writer's view." },
      { q: "Which of these is a history?", options: ["The life of one king", "The story of a town or kingdom over time", "A love poem", "A riddle"], answer: 1, explanation: "A history tells the story of a town, a kingdom or a people over time." },
      { q: "A clear, well-planned essay scores more than what?", options: ["A short essay", "A long, confused essay", "An essay with proverbs", "An essay in Yoruba"], answer: 1, explanation: "A clear, well-planned essay in correct Yoruba scores more than a long, confused one." }
    ],
    status: "published"
  },
  {
    id: "yoruba-11",
    subjectId: "yoruba",
    topic: "Written Literature — Poetry and Drama",
    subtopic: "Written Yoruba poetry",
    title: "Written Yoruba Poetry",
    order: 11,
    introduction: "Yoruba poetry moved from the voice to the page, keeping its music while gaining new forms. This lesson explains written Yoruba poetry, its devices, and how to analyse a poem.",
    objectives: ["Distinguish oral poetry from written poetry", "Identify poetic devices in Yoruba poems", "Explain imagery, metaphor, simile and personification", "Analyse a Yoruba poem for theme and mood", "Describe the work of Yoruba written poets"],
    sections: [
      {
        heading: "From Oral to Written Poetry",
        body: "Written Yoruba poetry is poetry composed on paper, unlike ewi, ijala and oriki, which are performed. It began when Yoruba writers started to write poems in books and newspapers, and it has grown into a tradition of its own. Written poets use the same Yoruba language and imagery as oral poets, but they can revise their lines, use punctuation, and arrange their poems in stanzas on the page. A stanza is a group of lines, like a paragraph in prose. Written poetry covers love, nature, town life, politics, religion and the Yoruba past. Some written poems are short lyrics, expressing a single feeling, while others are longer narrative poems telling a story. JAMB may give a short Yoruba poem and ask for its theme, its devices, or the meaning of a line."
      },
      {
        heading: "Poetic Devices",
        body: "Poets use devices to make language vivid. Imagery is language that appeals to the senses: the smell of rain, the sound of drums, the sight of a market at dawn. A metaphor says one thing is another: Ìfẹ́ ni iná (Love is fire) means love burns like fire, without using like. A simile compares two things with bí (like) or gẹ́gẹ́ bí (just as): Ó yára bí ìmọ̀lẹ̀ (He is fast like lightning). Personification gives human qualities to a non-human thing: Òjò ń sọ̀rọ̀ (The rain is talking) gives the rain a voice. Repetition repeats a word or line for emphasis, and rhyme and rhythm give the poem music. Alliteration repeats the same sound at the start of words. When you analyse a poem, name the device, quote the line, and explain what it does."
      },
      {
        heading: "Theme and Mood in Poetry",
        body: "The theme of a poem is its main idea: love, death, nature, patriotism, or the beauty of a town. The mood is the feeling the poem creates: joy, sadness, anger, peace or longing. A poem about a mother's love may have a theme of love and a mood of tenderness, while a poem about war may have a theme of suffering and a mood of sorrow. The poet creates mood through word choice, imagery and rhythm: soft words and slow lines create calm, while sharp words and short lines create tension. To analyse a poem, first read it twice: once for the general feeling, and once for the details. Then state the theme in one sentence, describe the mood, and support both with lines from the poem."
      },
      {
        heading: "Analysing a Poem",
        body: "To analyse a Yoruba poem, work in four steps. First, give the title and the poet, if known, and summarise what the poem is about. Second, state the theme and the mood, with evidence. Third, identify two or three poetic devices, quote the lines, and explain their effect. Fourth, comment on the language: is it simple or rich, does it use proverbs, and does it sound like spoken Yoruba? For example, in a poem that says Ìlú mi, ìlú ìfẹ́ (My town, town of love), the repetition of ìlú emphasises love for the town, and the metaphor ìlú ìfẹ́ presents the town as love itself. A good analysis is short, clear and supported by the poem itself, not by guessing what the poet meant."
      }
    ],
    definitions: [
      { term: "Stanza", meaning: "A group of lines in a poem, like a paragraph in prose." },
      { term: "Imagery", meaning: "Language that appeals to the senses: sight, sound, smell, taste or touch." },
      { term: "Metaphor", meaning: "Saying one thing is another, without using like or as." },
      { term: "Simile", meaning: "Comparing two things with bí (like) or gẹ́gẹ́ bí (just as)." },
      { term: "Personification", meaning: "Giving human qualities to a non-human thing." },
      { term: "Mood", meaning: "The feeling a poem creates in the reader." }
    ],
    examples: [
      {
        title: "Identifying a simile",
        problem: "Identify the device in the line Ó yára bí ìmọ̀lẹ̀ (He is fast like lightning).",
        steps: ["Look for a comparison word: bí means like.", "Note the two things compared: he and lightning.", "Recall that a comparison with like is a simile.", "Check metaphor: a metaphor would not use like.", "Conclude the device is a simile."],
        answer: "It is a simile, comparing his speed to lightning with bí (like)."
      },
      {
        title: "Identifying personification",
        problem: "Identify the device in the line Òjò ń sọ̀rọ̀ (The rain is talking).",
        steps: ["Note the subject: òjò (rain), which is not human.", "Note the verb: sọ̀rọ̀ (talking), which is a human action.", "Recall that giving human qualities to a non-human thing is personification.", "Check the other devices: it is not a simile, as there is no like.", "Conclude the device is personification."],
        answer: "It is personification: the rain is given the human action of talking."
      }
    ],
    tips: ["A simile uses bí or gẹ́gẹ́ bí; a metaphor does not.", "For every device, quote the line and explain its effect.", "Read a poem twice: once for feeling, once for details.", "Theme is what the poem is about; mood is how it makes you feel."],
    mistakes: ["Calling a simile a metaphor, or a metaphor a simile.", "Stating a theme without evidence from the poem.", "Confusing theme with mood.", "Guessing the poet's intention instead of using the text."],
    facts: ["Written poetry is composed on paper; oral poetry is performed.", "A stanza is a group of lines in a poem.", "A simile uses bí (like); a metaphor does not.", "Imagery appeals to the senses."],
    quiz: [
      { q: "How does written poetry differ from oral poetry?", options: ["Written poetry is composed on paper; oral poetry is performed", "Written poetry has no theme", "Oral poetry is in English", "Written poetry is never read"], answer: 0, explanation: "Written poetry is composed on paper, while oral poetry is performed live." },
      { q: "What is a stanza?", options: ["A type of proverb", "A group of lines in a poem", "A character in a play", "A Yoruba town"], answer: 1, explanation: "A stanza is a group of lines in a poem, like a paragraph in prose." },
      { q: "Which line is a metaphor?", options: ["Ó yára bí ìmọ̀lẹ̀", "Ìfẹ́ ni iná", "Òjò ń sọ̀rọ̀", "Mo lọ sí ilé"], answer: 1, explanation: "Ìfẹ́ ni iná (Love is fire) says love is fire without using like, so it is a metaphor." },
      { q: "Which line is a simile?", options: ["Ìfẹ́ ni iná", "Ó yára bí ìmọ̀lẹ̀", "Òjò ń sọ̀rọ̀", "Ìlú mi"], answer: 1, explanation: "Ó yára bí ìmọ̀lẹ̀ uses bí (like) to compare speed to lightning, so it is a simile." },
      { q: "Which line is personification?", options: ["Ìfẹ́ ni iná", "Ó yára bí ìmọ̀lẹ̀", "Òjò ń sọ̀rọ̀", "Mo jẹ oúnjẹ"], answer: 2, explanation: "Òjò ń sọ̀rọ̀ (The rain is talking) gives the rain a human action, so it is personification." },
      { q: "What is imagery?", options: ["Language that appeals to the senses", "A type of rhyme", "A stanza", "A proverb"], answer: 0, explanation: "Imagery is language that appeals to the senses: sight, sound, smell, taste or touch." },
      { q: "What is the theme of a poem?", options: ["Its main idea", "Its feeling", "Its rhyme", "Its title"], answer: 0, explanation: "Theme is the main idea of a poem, such as love or nature." },
      { q: "What is the mood of a poem?", options: ["Its main idea", "The feeling it creates in the reader", "Its number of lines", "Its poet"], answer: 1, explanation: "Mood is the feeling a poem creates: joy, sadness, peace or longing." },
      { q: "Which word means like in a Yoruba simile?", options: ["ni", "bí", "ti", "kò"], answer: 1, explanation: "bí means like, and it marks a simile." },
      { q: "What does repetition do in a poem?", options: ["Removes meaning", "Emphasises a word or line", "Ends the poem", "Changes the language"], answer: 1, explanation: "Repetition repeats a word or line for emphasis." },
      { q: "A poem about a mother's love is likely to have what mood?", options: ["Anger", "Tenderness", "Fear", "Hatred"], answer: 1, explanation: "A poem about a mother's love is likely to create a mood of tenderness." },
      { q: "When analysing a poem, what should you do for each device?", options: ["Name it, quote the line, explain its effect", "Guess the poet's age", "Count the words", "Translate it into English only"], answer: 0, explanation: "Name the device, quote the line, and explain what it does." },
      { q: "Which of these is a poetic device?", options: ["Alliteration", "Plural", "Tense", "Alphabet"], answer: 0, explanation: "Alliteration repeats the same sound at the start of words." },
      { q: "Written Yoruba poetry often covers what subjects?", options: ["Love, nature, town life and politics", "Only hunting", "Only kings", "Only English life"], answer: 0, explanation: "Written poetry covers love, nature, town life, politics, religion and the Yoruba past." },
      { q: "What is a short lyric poem?", options: ["A poem expressing a single feeling", "A long story in verse", "A play", "A proverb"], answer: 0, explanation: "A short lyric expresses a single feeling, while a narrative poem tells a story." }
    ],
    status: "published"
  },
  {
    id: "yoruba-12",
    subjectId: "yoruba",
    topic: "Written Literature — Poetry and Drama",
    subtopic: "Yoruba drama",
    title: "Yoruba Drama: Plays and Performance",
    order: 12,
    introduction: "Yoruba drama brings stories to life on stage, with dialogue, action and conflict. This lesson explains the features of Yoruba plays, their types, and how to analyse a drama.",
    objectives: ["Define drama and its features", "Describe the types of Yoruba drama", "Explain plot, character, dialogue and conflict in drama", "Discuss the role of Hubert Ogunde in Yoruba theatre", "Analyse a Yoruba play for theme and lesson"],
    sections: [
      {
        heading: "What Drama Is",
        body: "Drama is a story told through dialogue and action on a stage, rather than through narration. A play is written in acts and scenes: an act is a large division, and a scene is a smaller division within an act. The actors speak dialogue, which is the conversation between characters, and they perform actions that show the story. Stage directions, written in brackets, tell the actors what to do and how to say their lines. Yoruba drama grew from traditional performances — masquerade, festivals and folk theatre — and from the travelling theatre of the twentieth century. It is meant to be watched and heard, not only read, and its power lies in what the audience sees and hears on stage."
      },
      {
        heading: "Types of Yoruba Drama",
        body: "Yoruba drama has several types. Tragedy is a serious play in which the hero falls because of a flaw or fate, and the audience feels pity and fear. Comedy is a funny play that ends happily, often mocking foolishness. Tragicomedy mixes serious and funny elements. Historical drama tells the story of a real king, war or event, such as the history of Ọ̀yọ́ or the life of a hero. Social drama deals with modern problems: poverty, corruption, family conflict, or the clash between tradition and modern life. Yoruba plays often include songs, dance and proverbs, and they may be performed in Yoruba, in English, or in a mixture of both. The type of a play is judged by its ending and its mood: a play that ends in death is usually a tragedy, while one that ends in marriage or reconciliation is usually a comedy."
      },
      {
        heading: "Hubert Ogunde and the Travelling Theatre",
        body: "Hubert Ogunde (1916-1990) is the father of modern Yoruba theatre. He founded the Ogunde Concert Party, a travelling theatre troupe that performed Yoruba plays in towns across Nigeria. His plays, such as Yoruba Ronu (Yoruba, Think!) and Aiye (Life), combined drama, music, dance and satire, and they spoke to the Yoruba people about politics, unity and social change. Yoruba Ronu, first performed in 1964, urged the Yoruba to think and unite, and it was so powerful that it was banned for a time. Ogunde's theatre used Yoruba language, Yoruba music and Yoruba stories, and it brought drama to people who had never been to a theatre. Later playwrights, including Wole Soyinka, who wrote in English but drew on Yoruba culture, and Duro Ladipo, who wrote in Yoruba, built on Ogunde's work. JAMB often asks about Ogunde as the founder of modern Yoruba theatre."
      },
      {
        heading: "Analysing a Play",
        body: "To analyse a Yoruba play, work through its elements. First, summarise the plot: what happens, act by act. Second, describe the main characters and their roles: the hero, the villain, the helper, and the fool. Third, identify the conflict: the struggle between characters, or between a character and society, fate or tradition. Fourth, state the theme: what is the play saying about life or Yoruba society? Fifth, comment on the dialogue and the stagecraft: does the playwright use proverbs, songs, humour or suspense, and how would the play look on stage? Use evidence: quote a line of dialogue or describe a scene. A good analysis shows that you understand the play as a performance, not only as a text to be read."
      }
    ],
    definitions: [
      { term: "Drama", meaning: "A story told through dialogue and action on a stage." },
      { term: "Dialogue", meaning: "The conversation between characters in a play." },
      { term: "Act", meaning: "A large division of a play." },
      { term: "Scene", meaning: "A smaller division within an act of a play." },
      { term: "Tragedy", meaning: "A serious play in which the hero falls, often ending in death." },
      { term: "Conflict", meaning: "The struggle between characters, or between a character and society or fate." }
    ],
    examples: [
      {
        title: "Identifying the type of a play",
        problem: "A play ends with the hero's death after a fatal flaw leads him to ruin. What type is it?",
        steps: ["Note the ending: the hero dies.", "Note the cause: a fatal flaw leads to ruin.", "Recall that a serious play ending in death is a tragedy.", "Check comedy: a comedy ends happily, not in death.", "Conclude the play is a tragedy."],
        answer: "It is a tragedy."
      },
      {
        title: "Identifying Ogunde's role",
        problem: "Why is Hubert Ogunde called the father of modern Yoruba theatre?",
        steps: ["Recall that Ogunde founded the Ogunde Concert Party.", "Note that it was a travelling theatre performing Yoruba plays.", "Recall his famous play Yoruba Ronu (1964).", "Note that he combined drama, music, dance and satire in Yoruba.", "Conclude he founded modern Yoruba theatre."],
        answer: "He founded the Ogunde Concert Party travelling theatre and pioneered modern Yoruba drama."
      }
    ],
    tips: ["Judge a play's type by its ending and mood: death is tragedy, happy ending is comedy.", "Learn Ogunde: father of modern Yoruba theatre, Yoruba Ronu, 1964.", "Analyse drama as performance, not only as text.", "Identify the conflict first — it drives the plot."],
    mistakes: ["Calling every serious play a tragedy — check the ending.", "Forgetting stage directions when analysing a play.", "Confusing an act with a scene.", "Saying Ogunde wrote in English only — his theatre was Yoruba."],
    facts: ["Hubert Ogunde founded the Ogunde Concert Party.", "Yoruba Ronu was first performed in 1964.", "Drama is told through dialogue and action on stage.", "Yoruba plays often include songs, dance and proverbs."],
    quiz: [
      { q: "What is drama?", options: ["A story told through dialogue and action on stage", "A poem", "A folktale", "An essay"], answer: 0, explanation: "Drama is a story told through dialogue and action on a stage." },
      { q: "What is dialogue in a play?", options: ["The music", "The conversation between characters", "The stage", "The title"], answer: 1, explanation: "Dialogue is the conversation between characters in a play." },
      { q: "What is an act in a play?", options: ["A small division", "A large division of a play", "A character", "A song"], answer: 1, explanation: "An act is a large division of a play; a scene is a smaller division within an act." },
      { q: "What is a scene in a play?", options: ["A large division", "A smaller division within an act", "The audience", "The title"], answer: 1, explanation: "A scene is a smaller division within an act." },
      { q: "Which type of play ends with the hero's death?", options: ["Comedy", "Tragedy", "Farce", "Musical"], answer: 1, explanation: "A tragedy is a serious play in which the hero falls, often ending in death." },
      { q: "Which type of play ends happily, often mocking foolishness?", options: ["Tragedy", "Comedy", "History", "Tragicomedy"], answer: 1, explanation: "A comedy is a funny play that ends happily, often mocking foolishness." },
      { q: "Who is called the father of modern Yoruba theatre?", options: ["Wole Soyinka", "Hubert Ogunde", "D. O. Fagunwa", "Duro Ladipo"], answer: 1, explanation: "Hubert Ogunde is the father of modern Yoruba theatre." },
      { q: "What was Ogunde's travelling theatre called?", options: ["The National Theatre", "Ogunde Concert Party", "Yoruba Theatre Group", "Lagos Theatre"], answer: 1, explanation: "Ogunde founded the Ogunde Concert Party, a travelling theatre troupe." },
      { q: "Which play by Ogunde urged the Yoruba to think and unite?", options: ["Aiye", "Yoruba Ronu", "The Lion and the Jewel", "Ògbójú Ọdẹ"], answer: 1, explanation: "Yoruba Ronu (Yoruba, Think!), first performed in 1964, urged the Yoruba to think and unite." },
      { q: "In which year was Yoruba Ronu first performed?", options: ["1954", "1964", "1974", "1984"], answer: 1, explanation: "Yoruba Ronu was first performed in 1964." },
      { q: "What is conflict in a play?", options: ["The title", "The struggle between characters or with society or fate", "The music", "The stage"], answer: 1, explanation: "Conflict is the struggle between characters, or between a character and society, fate or tradition." },
      { q: "What are stage directions?", options: ["Lines spoken by actors", "Instructions in brackets telling actors what to do", "The title of the play", "The audience's seats"], answer: 1, explanation: "Stage directions, written in brackets, tell actors what to do and how to say their lines." },
      { q: "Yoruba plays often include what?", options: ["Songs, dance and proverbs", "Only silence", "Only English", "No dialogue"], answer: 0, explanation: "Yoruba plays often include songs, dance and proverbs." },
      { q: "Which playwright wrote in English but drew on Yoruba culture?", options: ["Hubert Ogunde", "Wole Soyinka", "D. O. Fagunwa", "Chinua Achebe"], answer: 1, explanation: "Wole Soyinka wrote in English but drew on Yoruba culture." },
      { q: "A play that mixes serious and funny elements is called what?", options: ["Tragedy", "Comedy", "Tragicomedy", "History"], answer: 2, explanation: "Tragicomedy mixes serious and funny elements." }
    ],
    status: "published"
  },
  {
    id: "yoruba-13",
    subjectId: "yoruba",
    topic: "Yoruba Culture, Customs and Comprehension",
    subtopic: "Greetings, kinship and festivals",
    title: "Greetings, Kinship and Festivals",
    order: 13,
    introduction: "Yoruba culture is expressed in greetings, family ties, festivals and religion. This lesson explains the greeting system, kinship, major festivals, and traditional religion in Yoruba life.",
    objectives: ["Use Yoruba greetings correctly for time, occasion and person", "Explain the Yoruba kinship system", "Describe major Yoruba festivals", "Explain traditional Yoruba religion and its gods", "Show how culture is reflected in Yoruba language"],
    sections: [
      {
        heading: "Greetings in Yoruba Culture",
        body: "Greeting is very important in Yoruba culture: a person who does not greet is seen as rude. Greetings change with the time of day: Ẹ n lẹ (Good morning) is used in the morning, Ẹ ku iṣẹ́ (Well done for the work) greets a worker, and Ẹ ku abọ̀ (Welcome back) greets a traveller. Greetings also change with the occasion: Ẹ ku ayẹyẹ (Happy celebration) at a festival, Ẹ ku ìyá (Well done, mother) to a mother, and Ẹ ku ọjọ́ ìbí (Happy birthday) on a birthday. The younger person greets the elder first, and the elder replies. A boy prostrates (dọ̀bálẹ̀) and a girl kneels (kúnlẹ̀) when greeting an elder, showing respect. In speech, the greeting Ẹ n lẹ is answered with Ẹ n lẹ o, and the respectful pronoun ẹ is used for elders. JAMB often asks for the correct greeting for a time, an occasion or a person."
      },
      {
        heading: "Kinship and Family",
        body: "The Yoruba family is extended: it includes parents, children, grandparents, uncles, aunts, cousins and in-laws, all living together or near each other. The father is bàbá, the mother is ìyá, the elder brother is ẹ̀gbọ́n, the younger brother or sister is àbúrò, and the child is ọmọ. Respect for elders is central: an elder is called bàbá or ìyá even if they are not one's parent, and a younger person does not call an elder by name alone. Marriage joins two families, not only two people, and the families meet, agree and celebrate together. The first child, àkọ́bí, has a special place, and twins, ìbejì, are honoured and celebrated. Family names, orúkọ ìdílé, link a person to their lineage, and oriki praises that lineage. The family is the first school of Yoruba culture: children learn language, greetings, proverbs and customs at home."
      },
      {
        heading: "Festivals",
        body: "Yoruba festivals celebrate gods, ancestors, harvests and kings. The Ògún festival honours Ògún, god of iron and war, and it is celebrated by hunters, blacksmiths and drivers. The Ṣàngó festival honours Ṣàngó, god of thunder and lightning, in Ọ̀yọ́, his ancient home. The Ọ̀ṣun-Òṣogbo festival honours Ọ̀ṣun, goddess of the river, at the sacred grove in Òṣogbo, and it draws thousands of people every August. The Ẹyọ̀ festival in Lagos is a masquerade festival, with white-clad Ẹyọ̀ figures parading through the streets. The new yam festival celebrates the harvest. Festivals include music, dance, masquerade, sacrifice and feasting, and they bring the whole town together. They also teach history: each festival retells the story of its god or hero."
      },
      {
        heading: "Traditional Religion",
        body: "Traditional Yoruba religion believes in one supreme God, Olódùmarè (also called Ọlọ́run), who created the world, and in the òrìṣà, gods and goddesses who serve as intermediaries. The main òrìṣà include Ògún (iron and war), Ṣàngó (thunder and lightning), Ọbàtálá (creation and purity), Yẹmọja (motherhood and the sea), Ọ̀ṣun (river and fertility), and Èṣù (messenger and trickster). Ancestors are also honoured, and the Ẹgúngún masquerade represents the returning ancestors. Worship takes place at shrines, groves and festivals, with offerings, prayers and songs. The Ifá divination system, using palm nuts and verses, guides decisions and preserves Yoruba wisdom. Many Yoruba people today are Christians or Muslims, but traditional religion remains part of Yoruba culture, language and literature."
      }
    ],
    definitions: [
      { term: "Dọ̀bálẹ̀", meaning: "Prostrating: a boy's respectful greeting to an elder." },
      { term: "Kúnlẹ̀", meaning: "Kneeling: a girl's respectful greeting to an elder." },
      { term: "Ẹ̀gbọ́n", meaning: "An elder brother or sister." },
      { term: "Àbúrò", meaning: "A younger brother or sister." },
      { term: "Òrìṣà", meaning: "A Yoruba god or goddess, such as Ògún or Ṣàngó." },
      { term: "Olódùmarè", meaning: "The supreme God in Yoruba religion, also called Ọlọ́run." }
    ],
    examples: [
      {
        title: "Choosing the correct greeting",
        problem: "Which greeting is correct for a worker in the morning?",
        steps: ["Note the person: a worker.", "Note the time: morning.", "Recall the greeting for work: Ẹ ku iṣẹ́ (Well done for the work).", "Check the morning greeting: Ẹ n lẹ is for the morning in general.", "Choose the greeting that fits the work: Ẹ ku iṣẹ́."],
        answer: "Ẹ ku iṣẹ́ (Well done for the work) is the correct greeting for a worker."
      },
      {
        title: "Identifying an òrìṣà",
        problem: "Which òrìṣà is the god of thunder and lightning?",
        steps: ["List the main òrìṣà: Ògún, Ṣàngó, Ọbàtálá, Yẹmọja, Ọ̀ṣun, Èṣù.", "Recall their domains: Ògún is iron and war.", "Recall Ṣàngó: he is the god of thunder and lightning.", "Check the others: Ọ̀ṣun is the river, Yẹmọja is motherhood.", "Conclude the answer is Ṣàngó."],
        answer: "Ṣàngó is the god of thunder and lightning."
      }
    ],
    tips: ["Learn greetings by time and occasion, not only by translation.", "Respect for elders is central — learn dọ̀bálẹ̀ and kúnlẹ̀.", "Link each festival to its god: Ògún-iron, Ṣàngó-thunder, Ọ̀ṣun-river.", "Olódùmarè is supreme; the òrìṣà are intermediaries."],
    mistakes: ["Using the same greeting for every time and occasion.", "Calling an elder by name alone.", "Confusing Ògún with Ṣàngó — Ògún is iron, Ṣàngó is thunder.", "Saying the òrìṣà are the supreme God — Olódùmarè is supreme."],
    facts: ["A boy prostrates (dọ̀bálẹ̀) and a girl kneels (kúnlẹ̀) to greet an elder.", "The Ọ̀ṣun-Òṣogbo festival is held every August in Òṣogbo.", "Ṣàngó is the god of thunder and lightning.", "Ifá divination uses palm nuts and verses."],
    quiz: [
      { q: "Which greeting is used in the morning?", options: ["Ẹ ku iṣẹ́", "Ẹ n lẹ", "Ẹ ku abọ̀", "Ẹ ku ayẹyẹ"], answer: 1, explanation: "Ẹ n lẹ (Good morning) is used in the morning." },
      { q: "Which greeting is for a worker?", options: ["Ẹ n lẹ", "Ẹ ku iṣẹ́", "Ẹ ku ọjọ́ ìbí", "Ẹ ku abọ̀"], answer: 1, explanation: "Ẹ ku iṣẹ́ (Well done for the work) greets a worker." },
      { q: "Which greeting is for a traveller who has returned?", options: ["Ẹ ku abọ̀", "Ẹ ku iṣẹ́", "Ẹ n lẹ", "Ẹ ku ayẹyẹ"], answer: 0, explanation: "Ẹ ku abọ̀ (Welcome back) greets a traveller who has returned." },
      { q: "How does a boy greet an elder in Yoruba culture?", options: ["By kneeling", "By prostrating (dọ̀bálẹ̀)", "By shaking hands only", "By waving"], answer: 1, explanation: "A boy prostrates (dọ̀bálẹ̀) when greeting an elder." },
      { q: "How does a girl greet an elder in Yoruba culture?", options: ["By prostrating", "By kneeling (kúnlẹ̀)", "By bowing only", "By waving"], answer: 1, explanation: "A girl kneels (kúnlẹ̀) when greeting an elder." },
      { q: "What does ẹ̀gbọ́n mean?", options: ["Younger brother or sister", "Elder brother or sister", "Father", "Mother"], answer: 1, explanation: "Ẹ̀gbọ́n means an elder brother or sister." },
      { q: "What does àbúrò mean?", options: ["Father", "Mother", "Younger brother or sister", "Elder brother"], answer: 2, explanation: "Àbúrò means a younger brother or sister." },
      { q: "What are twins called in Yoruba?", options: ["Àkọ́bí", "Ìbejì", "Ọmọ", "Ẹ̀gbọ́n"], answer: 1, explanation: "Twins are ìbejì, and they are honoured and celebrated." },
      { q: "Which god is honoured at the Ọ̀ṣun-Òṣogbo festival?", options: ["Ògún", "Ṣàngó", "Ọ̀ṣun", "Èṣù"], answer: 2, explanation: "The Ọ̀ṣun-Òṣogbo festival honours Ọ̀ṣun, goddess of the river." },
      { q: "Where is the Ọ̀ṣun-Òṣogbo festival held?", options: ["Ọ̀yọ́", "Òṣogbo", "Lagos", "Ìbàdàn"], answer: 1, explanation: "It is held at the sacred grove in Òṣogbo, every August." },
      { q: "Which god is the god of iron and war?", options: ["Ṣàngó", "Ògún", "Ọbàtálá", "Yẹmọja"], answer: 1, explanation: "Ògún is the god of iron and war, honoured by hunters, blacksmiths and drivers." },
      { q: "Which god is the god of thunder and lightning?", options: ["Ògún", "Ṣàngó", "Ọ̀ṣun", "Èṣù"], answer: 1, explanation: "Ṣàngó is the god of thunder and lightning, honoured in Ọ̀yọ́." },
      { q: "Who is Olódùmarè?", options: ["A river goddess", "The supreme God in Yoruba religion", "A hunter", "A masquerade"], answer: 1, explanation: "Olódùmarè, also called Ọlọ́run, is the supreme God who created the world." },
      { q: "What is the Ẹyọ̀ festival?", options: ["A river festival in Òṣogbo", "A masquerade festival in Lagos", "A harvest festival", "A naming ceremony"], answer: 1, explanation: "The Ẹyọ̀ festival in Lagos is a masquerade festival, with white-clad Ẹyọ̀ figures parading." },
      { q: "What is Ifá?", options: ["A Yoruba town", "A divination system using palm nuts and verses", "A type of song", "A festival"], answer: 1, explanation: "The Ifá divination system, using palm nuts and verses, guides decisions and preserves Yoruba wisdom." }
    ],
    status: "published"
  },
  {
    id: "yoruba-14",
    subjectId: "yoruba",
    topic: "Yoruba Culture, Customs and Comprehension",
    subtopic: "Customs, marriage and reading comprehension",
    title: "Customs, Marriage and Comprehension",
    order: 14,
    introduction: "Yoruba customs govern birth, marriage and death, and they appear in the comprehension passages JAMB sets. This lesson explains naming, marriage and burial customs, and how to answer comprehension questions in Yoruba.",
    objectives: ["Describe naming, marriage and burial customs in Yoruba culture", "Explain the stages of a Yoruba traditional marriage", "Read a Yoruba passage and find its main idea", "Answer comprehension questions using evidence from a passage", "Explain the meaning of unfamiliar words from context"],
    sections: [
      {
        heading: "Naming and Birth Customs",
        body: "When a Yoruba child is born, the naming ceremony, ìsọmọlórúkọ, is held on the eighth day. The child is given several names: the orúkọ àbísọ (given name), such as Adé or Ọlá, the orúkọ àmútọ̀runwá (name brought from heaven, based on the circumstances of birth), such as Ìbejì for twins or Àìná for a child born with the cord around the neck, and the oríkì (praise name). The ceremony is led by elders, with prayers, kola nut, honey, salt and water, each with a meaning: honey for sweetness, salt for preservation, water for coolness. The child's oriki is chanted, and the family and friends celebrate with food and music. The naming ceremony shows that a Yoruba name is not only a label: it carries history, hope and identity."
      },
      {
        heading: "Marriage Customs",
        body: "Yoruba traditional marriage, ìgbéyàwó, joins two families. It begins with the introduction, when the man's family visits the woman's family to declare interest. Then comes the engagement, ìfẹ́ṣọ́, when the bride price and gifts are presented: yam, kola nut, drinks, cloth and money. The bride price is not a purchase: it is a token of appreciation and a seal of the agreement between families. The wedding itself is a celebration with music, dance, food and the blessing of elders. The bride is welcomed into her husband's family, and the two families become one. In modern times, many Yoruba couples also have a church or mosque wedding and a court wedding, but the traditional marriage remains the foundation. JAMB may ask for the stages of marriage or the meaning of the bride price."
      },
      {
        heading: "Burial and Ancestor Customs",
        body: "Death in Yoruba culture is not the end: the dead become ancestors who watch over the living. Burial, ìsìnkú, is a solemn ceremony, with prayers, songs and the Ẹgúngún masquerade, in which the ancestors are believed to return to bless the family. An elder who has lived a full life is buried with celebration, while the death of a young person is mourned with sorrow. The family observes mourning, and the widow or widower follows customs of respect. The ancestors are honoured with offerings and remembrance, and their names are kept alive in oriki and in family history. These customs show the Yoruba belief in the continuity of life: the living, the dead and the unborn are one family."
      },
      {
        heading: "Reading Comprehension in Yoruba",
        body: "Comprehension in Yoruba tests your ability to read a passage and understand it. Read the passage twice: first for the general idea, then for the details. Find the main idea of each paragraph: what is it about? Then read the questions and find the answer in the passage — do not guess from outside knowledge. For a question asking for the meaning of a word, use the context: the words around it will hint at the meaning. For a question asking for the writer's view, look for words that show opinion, such as ó dára (it is good) or ó burú (it is bad). For a question asking for the best title, choose the title that covers the whole passage, not only one part. Answer in your own words where possible, and quote the passage only when the question asks for it. Practise with short Yoruba passages on everyday topics: school, farming, market, family and festivals."
      }
    ],
    definitions: [
      { term: "Ìsọmọlórúkọ", meaning: "The naming ceremony, held on the eighth day after birth." },
      { term: "Orúkọ àbísọ", meaning: "The given name of a child, such as Adé or Ọlá." },
      { term: "Orúkọ àmútọ̀runwá", meaning: "A name brought from heaven, based on the circumstances of birth." },
      { term: "Ìgbéyàwó", meaning: "Traditional marriage in Yoruba culture." },
      { term: "Ìsìnkú", meaning: "Burial in Yoruba culture." },
      { term: "Ẹgúngún", meaning: "The masquerade representing the returning ancestors." }
    ],
    examples: [
      {
        title: "Explaining the bride price",
        problem: "Explain the meaning of the bride price in Yoruba traditional marriage.",
        steps: ["Recall the stage: the engagement, when gifts and money are presented.", "Note what the bride price is: yam, kola nut, drinks, cloth and money.", "Recall its meaning: it is not a purchase of the bride.", "Explain its true meaning: a token of appreciation and a seal between families.", "State the conclusion clearly."],
        answer: "The bride price is a token of appreciation and a seal of agreement between families, not a purchase."
      },
      {
        title: "Answering a comprehension question",
        problem: "A passage says honey is used at a naming ceremony for sweetness. What does honey symbolise?",
        steps: ["Find the sentence in the passage about honey.", "Note what it says: honey is for sweetness.", "Recall that a symbol stands for an idea.", "Link honey to sweetness in the child's life.", "Answer: honey symbolises a sweet life for the child."],
        answer: "Honey symbolises sweetness — a sweet life for the child."
      }
    ],
    tips: ["Read a comprehension passage twice: once for the idea, once for the details.", "Find answers in the passage, not from outside knowledge.", "For word meaning, use the words around it — the context.", "For the best title, choose one that covers the whole passage."],
    mistakes: ["Guessing a comprehension answer without checking the passage.", "Choosing a title that covers only one paragraph.", "Saying the bride price is a purchase.", "Forgetting that the naming ceremony is on the eighth day."],
    facts: ["The naming ceremony is held on the eighth day after birth.", "The bride price is a token, not a purchase.", "The Ẹgúngún masquerade represents the returning ancestors.", "Honey at a naming ceremony symbolises sweetness."],
    quiz: [
      { q: "On which day is the Yoruba naming ceremony held?", options: ["Third day", "Seventh day", "Eighth day", "Fourteenth day"], answer: 2, explanation: "The naming ceremony, ìsọmọlórúkọ, is held on the eighth day after birth." },
      { q: "What is ìsọmọlórúkọ?", options: ["A marriage", "The naming ceremony", "A burial", "A festival"], answer: 1, explanation: "Ìsọmọlórúkọ is the naming ceremony, held on the eighth day." },
      { q: "What does honey symbolise at a naming ceremony?", options: ["Preservation", "Sweetness", "Coolness", "Strength"], answer: 1, explanation: "Honey is used for sweetness — a sweet life for the child." },
      { q: "What does salt symbolise at a naming ceremony?", options: ["Sweetness", "Preservation", "Coolness", "Wealth"], answer: 1, explanation: "Salt is used for preservation." },
      { q: "What is orúkọ àmútọ̀runwá?", options: ["A given name", "A name based on the circumstances of birth", "A praise name", "A family name"], answer: 1, explanation: "Orúkọ àmútọ̀runwá is a name brought from heaven, based on the circumstances of birth." },
      { q: "What is ìgbéyàwó?", options: ["Naming", "Traditional marriage", "Burial", "Festival"], answer: 1, explanation: "Ìgbéyàwó is traditional marriage in Yoruba culture." },
      { q: "What is the bride price in Yoruba marriage?", options: ["A purchase of the bride", "A token of appreciation and a seal between families", "A fine", "A loan"], answer: 1, explanation: "The bride price is a token of appreciation and a seal of agreement, not a purchase." },
      { q: "What is presented at the engagement?", options: ["Only money", "Yam, kola nut, drinks, cloth and money", "Only cloth", "Only yam"], answer: 1, explanation: "At the engagement, the bride price and gifts — yam, kola nut, drinks, cloth and money — are presented." },
      { q: "What is ìsìnkú?", options: ["Naming", "Marriage", "Burial", "Festival"], answer: 2, explanation: "Ìsìnkú is burial in Yoruba culture." },
      { q: "What does the Ẹgúngún masquerade represent?", options: ["The river goddess", "The returning ancestors", "The hunters", "The king"], answer: 1, explanation: "The Ẹgúngún masquerade represents the returning ancestors." },
      { q: "How should you read a comprehension passage first?", options: ["Once, quickly", "Twice: once for the general idea, then for details", "Only the questions", "Only the title"], answer: 1, explanation: "Read twice: first for the general idea, then for the details." },
      { q: "Where should you find the answer to a comprehension question?", options: ["From outside knowledge", "In the passage", "From a dictionary only", "By guessing"], answer: 1, explanation: "Find the answer in the passage; do not guess from outside knowledge." },
      { q: "How do you find the meaning of an unfamiliar word in a passage?", options: ["Skip it", "Use the context — the words around it", "Guess the spelling", "Ask the teacher"], answer: 1, explanation: "Use the context: the words around the unfamiliar word hint at its meaning." },
      { q: "How do you choose the best title for a passage?", options: ["Choose one covering only one paragraph", "Choose one covering the whole passage", "Choose the longest title", "Choose the first words"], answer: 1, explanation: "Choose the title that covers the whole passage, not only one part." },
      { q: "What does water symbolise at a naming ceremony?", options: ["Sweetness", "Preservation", "Coolness", "Wealth"], answer: 2, explanation: "Water is used for coolness at the naming ceremony." }
    ],
    status: "published"
  }
];
