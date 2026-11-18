import type { Lesson, SubjectDef } from "./types";

export const SUBJECT: SubjectDef = {
  id: "irs",
  name: "Islamic Religious Studies",
  short: "IRS",
  colour: "#2563eb",
  tagline: "The Qur'an, Hadith, beliefs, history and Shariah.",
  description: "Master the Qur'an and Hadith, Islamic beliefs and practices, the life of the Prophet Muhammad, the Caliphate and the spread of Islam, Shariah and Islamic ethics for JAMB, with accurate references and original practice questions.",
  topics: ["The Qur'an: Revelation, Compilation and Selected Surahs", "Hadith: Collections and Importance", "Islamic Beliefs and Practices", "The Life of the Prophet Muhammad", "The Caliphate and the Spread of Islam", "Islamic Jurisprudence (Shariah)", "Islamic Ethics, Morality and Contemporary Issues"],
};

export const LESSONS: Lesson[] = [
{
    id: "irs-01",
    subjectId: "irs",
    topic: "The Qur'an: Revelation, Compilation and Selected Surahs",
    subtopic: "The revelation of the Qur'an",
    title: "The Revelation of the Qur'an",
    order: 1,
    introduction: "The Qur'an is the holy book of Islam, believed by Muslims to be the word of Allah revealed to the Prophet Muhammad. This lesson traces how the revelation began in the Cave of Hira in 610 CE, how it continued for twenty-three years in Makkah and Madinah, and the central roles of the Prophet Muhammad and the Angel Jibril in receiving and delivering the message.",
    objectives: ["Describe the first revelation of the Qur'an in the Cave of Hira in 610 CE", "Explain the content of Surah al-Alaq 96:1-5, the first revealed verses", "Distinguish between Makkan and Madinan revelations", "Describe the role of the Angel Jibril in the revelation", "Explain the role of the Prophet Muhammad as the recipient of the revelation"],
    sections: [
      {
        heading: "The First Revelation in the Cave of Hira",
        body: "In 610 CE, when the Prophet Muhammad was forty years old, he often withdrew to the Cave of Hira on the mountain of Nur near Makkah to pray and reflect. During the month of Ramadan, the Angel Jibril appeared to him and commanded him to read. The Prophet replied that he could not read, and Jibril embraced him and repeated the command. The first verses revealed were the opening five verses of Surah al-Alaq (96:1-5): Read, in the name of your Lord who created; created man from a clinging clot; read, and your Lord is the Most Generous, who taught by the pen, taught man what he did not know. The Prophet returned home trembling and asked his wife Khadijah to cover him. She comforted him and took him to her cousin Waraqah ibn Nawfal, who confirmed that the angel who had come to Moses had come to Muhammad and that he was the Prophet of this nation. The first revelation marks the beginning of Muhammad's prophethood and the beginning of the Qur'an."
      },
      {
        heading: "The Prophet Muhammad as Recipient of the Revelation",
        body: "The Prophet Muhammad was the human recipient of the Qur'an. Muslims believe he did not compose the Qur'an himself; he received it as revelation from Allah and conveyed it exactly as it was revealed to him. He memorised each portion as it came, recited it to his companions, and had it written down by scribes. His character before prophethood was already known in Makkah: he was called al-Amin, the trustworthy one, because of his honesty and integrity. The Qur'an itself describes him as the Messenger of Allah and the seal of the Prophets. Because the revelation came to an unlettered man who could neither read nor write, Muslims see this as a sign that the Qur'an is not his own composition but the word of Allah. The Prophet's task was threefold: to receive the revelation, to convey it to the people, and to explain and live by it, so that his life became a practical example of the Qur'an in action."
      },
      {
        heading: "The Role of the Angel Jibril",
        body: "The Angel Jibril, also known as Gabriel, was the intermediary through whom Allah revealed the Qur'an to the Prophet Muhammad. Jibril brought the revelation to the Prophet, sometimes appearing in human form and sometimes in his true angelic form, and sometimes the revelation came like the ringing of a bell. The Qur'an calls Jibril the trustworthy spirit who brought the revelation down upon the heart of the Prophet so that he might be a warner to mankind. Jibril also reviewed the whole Qur'an with the Prophet every Ramadan, and twice in the Prophet's final Ramadan, a practice that helped to preserve the exact order of the verses and Surahs. Muslims therefore regard Jibril as the angel of revelation, the link between Allah and His Messenger in the delivery of the final message to mankind."
      },
      {
        heading: "Makkan and Madinan Revelations",
        body: "The revelation of the Qur'an lasted about twenty-three years, from 610 CE until the Prophet's death in 632 CE, and it is divided into two periods: the Makkan period and the Madinan period. The Makkan revelations came during the thirteen years the Prophet spent in Makkah before the Hijrah in 622 CE. They are generally shorter Surahs, and their main themes are the Oneness of Allah (Tawhid), the reality of the Day of Judgement, the stories of earlier prophets, and moral reform. The Madinan revelations came during the ten years after the Hijrah, when the Prophet lived in Madinah. They are generally longer Surahs and deal with law and the organisation of society: prayer, fasting, Zakat, marriage, inheritance, trade, warfare and relations with other communities. About eighty-six Surahs are classified as Makkan and twenty-eight as Madinan. Knowing whether a Surah is Makkan or Madinan helps a reader understand its theme and the circumstances in which it was revealed."
      }
    ],
    definitions: [
      { term: "Revelation (Wahy)", meaning: "The communication of Allah's word to a prophet, in this case the Qur'an revealed to the Prophet Muhammad." },
      { term: "Surah al-Alaq", meaning: "Chapter 96 of the Qur'an, whose first five verses were the first revelation to the Prophet Muhammad." },
      { term: "Cave of Hira", meaning: "The cave on Mount Nur near Makkah where the Prophet Muhammad received the first revelation in 610 CE." },
      { term: "Jibril", meaning: "The Angel Gabriel, who brought the revelation of the Qur'an from Allah to the Prophet Muhammad." },
      { term: "Makkan revelations", meaning: "Verses and Surahs revealed in Makkah before the Hijrah in 622 CE, mainly on belief, the Day of Judgement and moral reform." },
      { term: "Madinan revelations", meaning: "Verses and Surahs revealed in Madinah after the Hijrah, mainly on law, worship and the organisation of Muslim society." }
    ],
    examples: [
      {
        title: "Explaining the first revelation",
        problem: "A question asks for the first five verses revealed to the Prophet Muhammad. How would you answer?",
        steps: ["Recall that the first revelation came in the Cave of Hira in 610 CE.", "Recall that the Angel Jibril commanded the Prophet to read.", "Identify the Surah as al-Alaq, chapter 96.", "State the verses as 96:1-5, beginning with the command to read in the name of your Lord who created.", "Add that the verses mention the pen and teaching man what he did not know, showing the importance of knowledge."],
        answer: "The first revelation was Surah al-Alaq 96:1-5, revealed in the Cave of Hira in 610 CE, beginning with the command to read in the name of your Lord who created."
      },
      {
        title: "Distinguishing Makkan from Madinan revelations",
        problem: "A passage deals with the rules of inheritance. Is it likely to be Makkan or Madinan, and why?",
        steps: ["Recall that Makkan revelations focus on belief, the Oneness of Allah and the Day of Judgement.", "Recall that Madinan revelations deal with law and social organisation.", "Note that inheritance is a matter of law and social organisation.", "Conclude that the passage is likely Madinan.", "Support this with the fact that detailed laws were revealed after the Muslim community was established in Madinah."],
        answer: "The passage is likely Madinan, because Madinan revelations deal with law and social organisation, including inheritance."
      }
    ],
    tips: ["Memorise the first revelation facts together: Cave of Hira, 610 CE, Jibril, Surah al-Alaq 96:1-5.", "Remember that the revelation lasted twenty-three years, from 610 CE to 632 CE.", "Makkan means belief and the Hereafter; Madinan means law and society.", "The Hijrah in 622 CE is the dividing line between Makkan and Madinan revelations."],
    mistakes: ["Saying the first revelation was Surah al-Fatihah; the first revealed verses were Surah al-Alaq 96:1-5.", "Confusing the roles of Jibril and the Prophet: Jibril delivered the revelation, the Prophet received and conveyed it.", "Saying the whole Qur'an was revealed at once; it was revealed gradually over twenty-three years.", "Placing the first revelation in Madinah; it happened in Makkah, in the Cave of Hira."],
    facts: ["The first revelation came in the Cave of Hira in 610 CE.", "The first revealed verses are Surah al-Alaq 96:1-5, beginning with the command to read.", "The Angel Jibril brought the revelation to the Prophet Muhammad.", "The Qur'an was revealed over about twenty-three years, from 610 CE to 632 CE.", "The Hijrah to Madinah took place in 622 CE, dividing the Makkan and Madinan periods."],
    quiz: [
      { q: "In which year did the first revelation of the Qur'an take place?", options: ["570 CE", "610 CE", "622 CE", "632 CE"], answer: 1, explanation: "The first revelation came in 610 CE, when the Prophet Muhammad was forty years old." },
      { q: "In which cave did the Prophet Muhammad receive the first revelation?", options: ["Cave of Thawr", "Cave of Hira", "Cave of Uhud", "Cave of Badr"], answer: 1, explanation: "The first revelation came in the Cave of Hira on Mount Nur near Makkah." },
      { q: "Which Surah contains the first verses revealed to the Prophet Muhammad?", options: ["Surah al-Fatihah", "Surah al-Baqarah", "Surah al-Alaq", "Surah al-Ikhlas"], answer: 2, explanation: "The first revealed verses are the opening five verses of Surah al-Alaq, chapter 96." },
      { q: "What were the first five verses revealed numbered as?", options: ["Surah 1:1-5", "Surah 96:1-5", "Surah 112:1-5", "Surah 2:1-5"], answer: 1, explanation: "The first revelation was Surah al-Alaq 96:1-5, beginning with the command to read." },
      { q: "What was the first word of the revelation commanded to the Prophet?", options: ["Pray", "Read", "Write", "Listen"], answer: 1, explanation: "Jibril commanded the Prophet to read, and the first word of Surah al-Alaq is the command to read, Iqra." },
      { q: "Who brought the revelation of the Qur'an to the Prophet Muhammad?", options: ["Angel Mikael", "Angel Jibril", "Angel Israfil", "Angel Malik"], answer: 1, explanation: "The Angel Jibril brought the revelation from Allah to the Prophet Muhammad." },
      { q: "How old was the Prophet Muhammad when he received the first revelation?", options: ["Twenty-five", "Thirty", "Forty", "Fifty"], answer: 2, explanation: "The Prophet was forty years old when the first revelation came in 610 CE." },
      { q: "How long did the revelation of the Qur'an last in total?", options: ["Ten years", "Thirteen years", "Twenty-three years", "Thirty years"], answer: 2, explanation: "The Qur'an was revealed gradually over about twenty-three years, from 610 CE to 632 CE." },
      { q: "In which month did the first revelation take place?", options: ["Shawwal", "Dhul-Hijjah", "Ramadan", "Muharram"], answer: 2, explanation: "The first revelation came during the month of Ramadan, in the Cave of Hira." },
      { q: "Which of these is a main theme of the Makkan revelations?", options: ["Rules of inheritance", "The Oneness of Allah and the Day of Judgement", "The laws of trade", "Relations with other communities"], answer: 1, explanation: "Makkan revelations focus mainly on Tawhid, the Day of Judgement, the stories of earlier prophets and moral reform." },
      { q: "Which of these is a main theme of the Madinan revelations?", options: ["The stories of earlier prophets only", "Law and the organisation of society", "The Oneness of Allah only", "Short verses on the Hereafter"], answer: 1, explanation: "Madinan revelations deal mainly with law and social organisation, such as prayer, Zakat, marriage and inheritance." },
      { q: "In which year did the Hijrah to Madinah take place?", options: ["610 CE", "615 CE", "622 CE", "632 CE"], answer: 2, explanation: "The Hijrah, the migration of the Prophet from Makkah to Madinah, took place in 622 CE." },
      { q: "Who was the Prophet's wife who comforted him after the first revelation?", options: ["Aisha", "Hafsah", "Khadijah", "Sawdah"], answer: 2, explanation: "Khadijah comforted the Prophet after the first revelation and took him to her cousin Waraqah ibn Nawfal." },
      { q: "What title was the Prophet Muhammad known by in Makkah before prophethood?", options: ["Al-Amin, the trustworthy one", "Al-Faruq, the distinguisher", "As-Siddiq, the truthful one", "Dhun-Nurayn, possessor of two lights"], answer: 0, explanation: "Before prophethood the Prophet was known as al-Amin, the trustworthy one, because of his honesty and integrity." },
      { q: "What did Jibril do with the Prophet every Ramadan concerning the Qur'an?", options: ["He taught him a new language", "He reviewed the whole Qur'an revealed so far with him", "He took him to Makkah", "He gave him the Hadith collections"], answer: 1, explanation: "Jibril reviewed the whole Qur'an with the Prophet every Ramadan, and twice in his final Ramadan, helping to preserve its exact order." }
    ],
    status: "published"
  },
  {
    id: "irs-02",
    subjectId: "irs",
    topic: "The Qur'an: Revelation, Compilation and Selected Surahs",
    subtopic: "Compilation, preservation and selected Surahs",
    title: "Compilation and Preservation of the Qur'an",
    order: 2,
    introduction: "The Qur'an was revealed over twenty-three years and preserved both in the memories of the companions and in writing. This lesson explains how it was compiled into a single book under Caliph Abu Bakr, standardised under Caliph Uthman, and how selected short Surahs such as al-Fatihah, al-Ikhlas, al-Falaq and an-Nas express the central themes of the faith.",
    objectives: ["Describe the compilation of the Qur'an under Caliph Abu Bakr", "Explain the standardisation of the Qur'an under Caliph Uthman", "Explain the role of memorisation and the Huffaz in preserving the Qur'an", "Describe the written preservation of the Qur'an by the scribes", "Explain the themes of Surahs al-Fatihah, al-Ikhlas, al-Falaq and an-Nas"],
    sections: [
      {
        heading: "Compilation under Caliph Abu Bakr",
        body: "During the lifetime of the Prophet Muhammad, the Qur'an was preserved mainly by memorisation, and parts of it were also written down by scribes on palm leaves, parchment, bones and stones. It was not yet gathered into a single bound book, because revelation was still coming and the order of the verses was being fixed. After the Prophet's death in 632 CE, Abu Bakr became the first Caliph. At the Battle of Yamama in 633 CE, many of those who had memorised the whole Qur'an were killed, and Umar ibn al-Khattab urged Abu Bakr to collect the Qur'an into one book before more of its memorisers died. Abu Bakr appointed Zayd ibn Thabit, a young companion who had been one of the Prophet's scribes, to lead the work. Zayd gathered the written fragments and cross-checked them against the memories of the companions, accepting a verse only when it was confirmed by written material and by at least two witnesses who had heard it from the Prophet. The completed copy was kept first with Abu Bakr, then with Umar, and then with Umar's daughter Hafsah, the widow of the Prophet."
      },
      {
        heading: "Standardisation under Caliph Uthman",
        body: "Under Caliph Uthman, who ruled from 644 to 656 CE, Islam had spread across Arabia, Persia, Syria and Egypt, and Muslims in different regions were reciting the Qur'an with different dialects and readings. When disputes arose about the correct recitation, Uthman acted to preserve a single standard text. He borrowed the copy kept with Hafsah and appointed a committee, again led by Zayd ibn Thabit, to produce copies in the dialect of the Quraysh, the tribe of the Prophet, since the Qur'an had been revealed in that dialect. Several standard copies were made and sent to the major cities of the Muslim world, together with a reciter to teach each city the correct reading, and other copies were ordered to be destroyed so that differences would not multiply. This standard text, known as the Uthmanic codex, is the text of the Qur'an used by Muslims throughout the world to this day. Uthman's work did not change the Qur'an; it fixed one authoritative written form of the text that had already been memorised and recited by the community."
      },
      {
        heading: "Memorisation and Written Preservation",
        body: "The Qur'an has been preserved by two means working together: memorisation and writing. From the time of the Prophet, many companions memorised the whole Qur'an, and they taught it to others, so that in every generation there have been thousands of Huffaz, people who have memorised the entire Qur'an by heart. Because the Qur'an is recited in prayer every day, including the whole Qur'an during the night prayers of Ramadan, errors in recitation are quickly noticed and corrected by the community. Alongside memorisation, the Qur'an was written down from the beginning: the Prophet had scribes who recorded each revelation, and the companions kept their own written copies. The combination of a memorised text and a written text, constantly checked against each other in public recitation, is the reason Muslims believe the Qur'an has been preserved without change from the time of the Prophet to the present day."
      },
      {
        heading: "Selected Surahs: al-Fatihah, al-Ikhlas, al-Falaq and an-Nas",
        body: "Four short Surahs are among the most frequently recited in the daily life of a Muslim. Surah al-Fatihah, chapter 1, is called the Opening. It has seven verses and is recited in every unit of prayer. It praises Allah as Lord of all the worlds, the Most Gracious, the Most Merciful, Master of the Day of Judgement, and asks Allah alone for help and for guidance to the straight path. Surah al-Ikhlas, chapter 112, has four verses and declares the pure Oneness of Allah: He is Allah, the One, the Eternal, who neither begets nor is born, and there is none like Him. The Prophet described it as equal to a third of the Qur'an because of the importance of its theme. Surah al-Falaq, chapter 113, and Surah an-Nas, chapter 114, are the two Surahs of seeking refuge. In al-Falaq, the believer seeks refuge in the Lord of the daybreak from the evil of what He has created, from darkness, and from envy. In an-Nas, the believer seeks refuge in the Lord, King and God of mankind from the whisperings of the tempter. Together these two Surahs are called al-Muawwidhatayn, the two Surahs of refuge, and Muslims recite them for protection morning and evening."
      }
    ],
    definitions: [
      { term: "Compilation", meaning: "The gathering of the revealed verses of the Qur'an into a single written book." },
      { term: "Huffaz", meaning: "People who have memorised the whole Qur'an by heart; the singular is Hafiz." },
      { term: "Uthmanic codex", meaning: "The standard written text of the Qur'an produced under Caliph Uthman and used ever since." },
      { term: "Surah al-Fatihah", meaning: "Chapter 1 of the Qur'an, the Opening, recited in every unit of prayer." },
      { term: "Surah al-Ikhlas", meaning: "Chapter 112 of the Qur'an, declaring the pure Oneness of Allah in four verses." },
      { term: "Al-Muawwidhatayn", meaning: "The two Surahs of refuge, al-Falaq (113) and an-Nas (114), recited for protection." }
    ],
    examples: [
      {
        title: "Explaining why the Qur'an was compiled under Abu Bakr",
        problem: "Why did Caliph Abu Bakr order the Qur'an to be collected into one book?",
        steps: ["Recall that the Qur'an was preserved by memorisation and on scattered written materials.", "Note that many memorisers of the Qur'an were killed at the Battle of Yamama in 633 CE.", "Recall that Umar urged Abu Bakr to collect the text before more memorisers died.", "Note that Zayd ibn Thabit cross-checked written fragments against the memories of companions.", "Conclude that the compilation preserved the text in a single authoritative copy."],
        answer: "Abu Bakr ordered the compilation after many memorisers died at Yamama, so that the Qur'an would be preserved in a single written copy."
      },
      {
        title: "Identifying a Surah by its theme",
        problem: "A Surah of four verses declares that Allah is One, Eternal, and that there is none like Him. Which Surah is it?",
        steps: ["Recall the short Surahs studied: al-Fatihah, al-Ikhlas, al-Falaq and an-Nas.", "Note that the theme is the pure Oneness of Allah.", "Recall that al-Ikhlas, chapter 112, has four verses on this theme.", "Check the other options: al-Fatihah is about praise and guidance, al-Falaq and an-Nas are about seeking refuge.", "Conclude that the Surah is al-Ikhlas."],
        answer: "The Surah is al-Ikhlas, chapter 112, which declares the Oneness of Allah in four verses."
      }
    ],
    tips: ["Link each Caliph to his task: Abu Bakr compiled, Uthman standardised.", "Remember Zayd ibn Thabit led the compilation work under both Abu Bakr and Uthman.", "Learn the four selected Surahs by number and verse count: Fatihah 1 (7 verses), Ikhlas 112 (4), Falaq 113 (5), Nas 114 (6).", "The Battle of Yamama in 633 CE is the trigger for the compilation under Abu Bakr."],
    mistakes: ["Saying Uthman compiled the Qur'an first; Abu Bakr compiled it, Uthman standardised it.", "Saying the Qur'an was only written down after the Prophet's death; scribes wrote it during his lifetime.", "Confusing al-Falaq and an-Nas: al-Falaq seeks refuge from created evils, an-Nas from the whisperer.", "Saying al-Ikhlas is chapter 1; it is chapter 112, while al-Fatihah is chapter 1."],
    facts: ["The Qur'an was compiled into a single book under Caliph Abu Bakr after the Battle of Yamama in 633 CE.", "Zayd ibn Thabit led the compilation work and cross-checked verses against written material and witnesses.", "Caliph Uthman standardised the Qur'an in the dialect of the Quraysh and sent copies to the major cities.", "Surah al-Fatihah has seven verses and is recited in every unit of prayer.", "Surah al-Ikhlas, chapter 112, has four verses and declares the Oneness of Allah."],
    quiz: [
      { q: "Under which Caliph was the Qur'an first compiled into a single book?", options: ["Umar", "Abu Bakr", "Uthman", "Ali"], answer: 1, explanation: "The Qur'an was first compiled into a single book under Caliph Abu Bakr, the first Caliph." },
      { q: "Which battle led to the decision to compile the Qur'an?", options: ["Battle of Badr", "Battle of Uhud", "Battle of Yamama", "Battle of the Trench"], answer: 2, explanation: "Many memorisers of the Qur'an were killed at the Battle of Yamama in 633 CE, prompting the compilation." },
      { q: "Who led the work of compiling the Qur'an under Abu Bakr?", options: ["Umar ibn al-Khattab", "Zayd ibn Thabit", "Bilal ibn Rabah", "Abu Hurayrah"], answer: 1, explanation: "Zayd ibn Thabit, one of the Prophet's scribes, was appointed to lead the compilation." },
      { q: "Who urged Abu Bakr to collect the Qur'an into one book?", options: ["Ali ibn Abi Talib", "Umar ibn al-Khattab", "Uthman ibn Affan", "Abu Sufyan"], answer: 1, explanation: "Umar ibn al-Khattab urged Abu Bakr to collect the Qur'an after the deaths of many memorisers at Yamama." },
      { q: "With whom was the compiled copy of the Qur'an kept after Umar's death?", options: ["Aisha", "Hafsah", "Khadijah", "Fatimah"], answer: 1, explanation: "The compiled copy was kept with Hafsah, the daughter of Umar and widow of the Prophet." },
      { q: "Under which Caliph was the Qur'an standardised into one authoritative text?", options: ["Abu Bakr", "Umar", "Uthman", "Ali"], answer: 2, explanation: "Caliph Uthman standardised the Qur'an, producing copies in the dialect of the Quraysh." },
      { q: "In which dialect was the standard Uthmanic text written?", options: ["The dialect of the Quraysh", "The dialect of Medina", "The dialect of Yemen", "The dialect of Persia"], answer: 0, explanation: "The standard copies were written in the dialect of the Quraysh, the tribe of the Prophet." },
      { q: "What is a person who has memorised the whole Qur'an called?", options: ["Qari", "Hafiz", "Mufti", "Imam"], answer: 1, explanation: "A person who has memorised the whole Qur'an is called a Hafiz; the plural is Huffaz." },
      { q: "Which Surah is known as the Opening and is recited in every unit of prayer?", options: ["Surah al-Ikhlas", "Surah al-Fatihah", "Surah an-Nas", "Surah al-Falaq"], answer: 1, explanation: "Surah al-Fatihah, chapter 1, is the Opening and is recited in every unit of prayer." },
      { q: "How many verses does Surah al-Fatihah contain?", options: ["Four", "Five", "Six", "Seven"], answer: 3, explanation: "Surah al-Fatihah contains seven verses." },
      { q: "Which Surah declares the pure Oneness of Allah in four verses?", options: ["Surah al-Fatihah", "Surah al-Ikhlas", "Surah al-Falaq", "Surah an-Nas"], answer: 1, explanation: "Surah al-Ikhlas, chapter 112, declares the Oneness of Allah in four verses." },
      { q: "What is the chapter number of Surah al-Ikhlas?", options: ["1", "96", "112", "114"], answer: 2, explanation: "Surah al-Ikhlas is chapter 112 of the Qur'an." },
      { q: "Which two Surahs are together called al-Muawwidhatayn, the two Surahs of refuge?", options: ["al-Fatihah and al-Ikhlas", "al-Falaq and an-Nas", "al-Alaq and al-Ikhlas", "al-Baqarah and al-Fatihah"], answer: 1, explanation: "Surah al-Falaq (113) and Surah an-Nas (114) are the two Surahs of refuge, recited for protection." },
      { q: "What is the chapter number of Surah an-Nas, the last Surah of the Qur'an?", options: ["112", "113", "114", "110"], answer: 2, explanation: "Surah an-Nas is chapter 114, the last Surah of the Qur'an." },
      { q: "How many chapters, or Surahs, does the Qur'an contain in total?", options: ["100", "110", "114", "120"], answer: 2, explanation: "The Qur'an contains 114 Surahs in total, from al-Fatihah (1) to an-Nas (114)." }
    ],
    status: "published"
  },
  {
    id: "irs-03",
    subjectId: "irs",
    topic: "Hadith: Collections and Importance",
    subtopic: "Meaning, types and compilation of Hadith",
    title: "The Meaning and Compilation of Hadith",
    order: 3,
    introduction: "The Hadith are the recorded sayings, actions and approvals of the Prophet Muhammad, and they are the second source of Islamic teaching after the Qur'an. This lesson explains what Hadith and Sunnah mean, the two parts of a Hadith, how Hadith are classified as Sahih, Hasan or Da'if, and how scholars collected and tested them.",
    objectives: ["Explain the meaning of Hadith and how it differs from Sunnah", "Identify the two components of a Hadith: Isnad and Matn", "Classify Hadith as Sahih, Hasan or Da'if", "Describe how Hadith were compiled", "Explain the science of Hadith criticism and the study of narrators"],
    sections: [
      {
        heading: "Hadith and Sunnah",
        body: "The word Hadith means a report or narration, and in Islamic usage it refers to a report of what the Prophet Muhammad said, did, or approved by his silence. The Sunnah is the Prophet's way of life: his example in worship, character and daily conduct. The two terms are closely related, and scholars often use them together, but there is a difference of emphasis. Hadith is the report that conveys the Sunnah to us; the Sunnah is the living practice itself. For example, the Prophet's saying that prayer is the pillar of religion is a Hadith, while the way he actually performed the prayer, with its bowing and prostration, is his Sunnah. Muslims need the Hadith because the Qur'an gives many commands in general terms, such as the command to pray and to give Zakat, while the Hadith explains how those commands are to be carried out in practice."
      },
      {
        heading: "The Two Components of a Hadith: Isnad and Matn",
        body: "Every Hadith has two parts: the Isnad and the Matn. The Isnad is the chain of narrators who passed the report from one generation to the next, back to the Prophet Muhammad or to one of his companions. A typical Isnad reads like a list of names: so-and-so told us, on the authority of so-and-so, on the authority of the companion, who heard the Prophet say. The Matn is the actual text of the report, the words spoken by the Prophet or the description of what he did. Scholars of Hadith examine both parts. The Isnad must be unbroken, with each narrator reliable and known to have met the person he reports from. The Matn must agree with the Qur'an and with other established Hadith, and it must not contain anything contrary to reason or to known history. A report is accepted only when both its chain and its text pass these tests."
      },
      {
        heading: "Classification of Hadith: Sahih, Hasan and Da'if",
        body: "Hadith are classified according to the strength of their chain and text. A Sahih Hadith is an authentic one: its chain is continuous, every narrator is trustworthy and precise in memory, and its text is free from irregularity and hidden defects. A Hasan Hadith is a good one: it meets the conditions of authenticity except that one or more of its narrators is slightly less precise in memory than those of a Sahih Hadith, though still reliable. A Da'if Hadith is a weak one: its chain has a break, or one of its narrators is unreliable, forgetful or unknown, or its text contradicts stronger evidence. Scholars also use other terms: a Mawdu Hadith is a fabricated one, falsely attributed to the Prophet, and it must never be quoted as his teaching. This classification matters in practice, because Islamic law and belief are built on Sahih and Hasan Hadith, while Da'if Hadith are not used to establish rulings, and fabricated Hadith are rejected entirely."
      },
      {
        heading: "Compilation and the Science of Hadith Criticism",
        body: "In the lifetime of the Prophet, Hadith were mostly memorised and passed on by word of mouth, though some companions wrote down sayings they heard. After the Prophet's death, as Islam spread and the companions died, scholars began to collect Hadith systematically so that nothing would be lost and false reports would not be mixed with true ones. Caliph Umar ibn Abd al-Aziz, who ruled from 717 to 720 CE, ordered the collection of Hadith, and scholars such as al-Zuhri began to gather them in writing. In the following two centuries, great collectors travelled widely to hear Hadith from narrators, checked each report against other versions, and recorded their judgements on every narrator. This gave rise to the science of Hadith criticism, including Ilm al-Rijal, the study of the men who narrated Hadith, in which scholars recorded the biography, character, memory and teachers of every narrator. Through this careful work, the authentic Hadith were separated from the weak and the fabricated, and the great collections of Hadith were produced."
      }
    ],
    definitions: [
      { term: "Hadith", meaning: "A report of what the Prophet Muhammad said, did, or approved, transmitted through a chain of narrators." },
      { term: "Sunnah", meaning: "The way of life and practical example of the Prophet Muhammad, conveyed to us through Hadith." },
      { term: "Isnad", meaning: "The chain of narrators through whom a Hadith was transmitted back to the Prophet or a companion." },
      { term: "Matn", meaning: "The actual text or content of a Hadith, as distinct from its chain of narrators." },
      { term: "Sahih", meaning: "An authentic Hadith whose chain is continuous, whose narrators are trustworthy and precise, and whose text is free from defect." },
      { term: "Da'if", meaning: "A weak Hadith whose chain is broken or whose narrators are unreliable, so it cannot establish a ruling." }
    ],
    examples: [
      {
        title: "Identifying the parts of a Hadith",
        problem: "A Hadith is given with a list of narrators followed by the words: Actions are judged only by intentions. Identify the Isnad and the Matn.",
        steps: ["Recall that a Hadith has two parts: the Isnad and the Matn.", "Identify the list of narrators as the Isnad, the chain of transmission.", "Identify the words Actions are judged only by intentions as the Matn, the text of the report.", "Note that scholars check the Isnad for reliability and the Matn for agreement with the Qur'an.", "Conclude that the narrators are the Isnad and the quoted words are the Matn."],
        answer: "The list of narrators is the Isnad, and the words Actions are judged only by intentions are the Matn."
      },
      {
        title: "Classifying a Hadith by its chain",
        problem: "A Hadith has a narrator in its chain who is known to be forgetful and unreliable. How should it be classified?",
        steps: ["Recall the three main grades: Sahih, Hasan and Da'if.", "Note that Sahih requires trustworthy and precise narrators.", "Note that Hasan allows a narrator who is slightly less precise but still reliable.", "Note that an unreliable or forgetful narrator makes a Hadith weak.", "Conclude that the Hadith is Da'if and cannot be used to establish a ruling."],
        answer: "The Hadith is Da'if, weak, because one of its narrators is unreliable and forgetful."
      }
    ],
    tips: ["Hadith is the report, Sunnah is the practice it conveys; learn the difference.", "Isnad is the chain of narrators, Matn is the text; the first letter of Isnad can remind you of the chain of names.", "Sahih is authentic, Hasan is good, Da'if is weak; Mawdu is fabricated.", "Umar ibn Abd al-Aziz ordered the collection of Hadith in the early eighth century CE."],
    mistakes: ["Saying Hadith and Sunnah are exactly the same; Hadith is the report, Sunnah is the Prophet's way of life.", "Confusing Isnad and Matn: the Isnad is the chain, the Matn is the text.", "Using a Da'if Hadith to prove a ruling; weak Hadith do not establish rulings.", "Saying Hadith were first written down in the time of the Prophet as complete books; systematic compilation came later, after his death."],
    facts: ["A Hadith has two parts: the Isnad, the chain of narrators, and the Matn, the text.", "A Sahih Hadith is authentic, a Hasan Hadith is good, and a Da'if Hadith is weak.", "A Mawdu Hadith is fabricated and falsely attributed to the Prophet.", "Caliph Umar ibn Abd al-Aziz ordered the collection of Hadith in the early eighth century CE.", "Ilm al-Rijal is the science of studying the narrators of Hadith, their character and memory."],
    quiz: [
      { q: "What is a Hadith?", options: ["A verse of the Qur'an", "A report of what the Prophet Muhammad said, did, or approved", "A chapter of the Qur'an", "A commentary on Islamic law"], answer: 1, explanation: "A Hadith is a report of the sayings, actions or approvals of the Prophet Muhammad." },
      { q: "What is the Sunnah?", options: ["The chain of narrators of a Hadith", "The way of life and practical example of the Prophet Muhammad", "A collection of Qur'anic verses", "The biography of a Caliph"], answer: 1, explanation: "The Sunnah is the Prophet's way of life and practical example, conveyed to us through Hadith." },
      { q: "What is the Isnad of a Hadith?", options: ["The text of the report", "The chain of narrators who transmitted it", "The book in which it is found", "The ruling derived from it"], answer: 1, explanation: "The Isnad is the chain of narrators through whom a Hadith was passed back to the Prophet or a companion." },
      { q: "What is the Matn of a Hadith?", options: ["The chain of narrators", "The actual text or content of the report", "The date of the report", "The name of the collector"], answer: 1, explanation: "The Matn is the actual text of the Hadith, as distinct from its chain of narrators." },
      { q: "Which grade of Hadith is authentic, with a continuous chain and trustworthy narrators?", options: ["Da'if", "Hasan", "Sahih", "Mawdu"], answer: 2, explanation: "A Sahih Hadith is authentic: its chain is continuous, its narrators are trustworthy and precise, and its text is free from defect." },
      { q: "Which grade of Hadith is good but has a narrator slightly less precise in memory?", options: ["Sahih", "Hasan", "Da'if", "Mawdu"], answer: 1, explanation: "A Hasan Hadith is good; it meets the conditions of authenticity except that a narrator is slightly less precise in memory." },
      { q: "Which grade of Hadith is weak and cannot be used to establish a ruling?", options: ["Sahih", "Hasan", "Da'if", "Mutawatir"], answer: 2, explanation: "A Da'if Hadith is weak, because its chain is broken or a narrator is unreliable, so it cannot establish a ruling." },
      { q: "What is a Mawdu Hadith?", options: ["An authentic Hadith", "A good Hadith", "A fabricated Hadith falsely attributed to the Prophet", "A Hadith with many narrators"], answer: 2, explanation: "A Mawdu Hadith is fabricated, falsely attributed to the Prophet, and must never be quoted as his teaching." },
      { q: "Who ordered the collection of Hadith in the early eighth century CE?", options: ["Caliph Abu Bakr", "Caliph Umar ibn al-Khattab", "Caliph Umar ibn Abd al-Aziz", "Caliph Uthman"], answer: 2, explanation: "Caliph Umar ibn Abd al-Aziz, who ruled from 717 to 720 CE, ordered the collection of Hadith." },
      { q: "What is Ilm al-Rijal?", options: ["The study of the Qur'an's chapters", "The science of studying the narrators of Hadith", "The study of Islamic law", "The study of Arabic grammar"], answer: 1, explanation: "Ilm al-Rijal is the science of studying the narrators of Hadith, recording their biography, character, memory and teachers." },
      { q: "Why do Muslims need Hadith in addition to the Qur'an?", options: ["Because the Qur'an is incomplete", "Because Hadith explain in practice how Qur'anic commands are carried out", "Because the Qur'an has no laws", "Because Hadith replace the Qur'an"], answer: 1, explanation: "The Qur'an gives many commands in general terms, such as prayer and Zakat, and the Hadith explain how they are to be carried out." },
      { q: "Which of these would make a Hadith weak?", options: ["A continuous chain of trustworthy narrators", "A narrator who is known to be forgetful", "Agreement of the text with the Qur'an", "A text reported by many companions"], answer: 1, explanation: "A narrator who is forgetful or unreliable makes the chain weak, so the Hadith is classified as Da'if." },
      { q: "Which of these is a saying of the Prophet reported in Hadith?", options: ["Actions are judged only by intentions", "The Qur'an has 114 chapters", "The Hijrah was in 622 CE", "Zakat is 2.5 percent"], answer: 0, explanation: "Actions are judged only by intentions is a well-known Hadith, reported at the start of Sahih al-Bukhari." },
      { q: "What must scholars check when they examine the Matn of a Hadith?", options: ["Only the age of the narrators", "Whether it agrees with the Qur'an and established Hadith", "Only the length of the text", "Only the place where it was reported"], answer: 1, explanation: "Scholars check that the Matn agrees with the Qur'an and with other established Hadith and contains nothing contrary to reason or known history." },
      { q: "In the lifetime of the Prophet, how were Hadith mainly preserved?", options: ["In printed books", "By memorisation and word of mouth", "On the internet", "In the Qur'an itself"], answer: 1, explanation: "During the Prophet's lifetime Hadith were mostly memorised and passed on by word of mouth, though some companions wrote sayings down." }
    ],
    status: "published"
  },
  {
    id: "irs-04",
    subjectId: "irs",
    topic: "Hadith: Collections and Importance",
    subtopic: "The six canonical collections and the importance of Hadith",
    title: "The Six Canonical Collections and the Importance of Hadith",
    order: 4,
    introduction: "After two centuries of careful collection and criticism, the Hadith were gathered into great books that Muslims still use today. This lesson introduces the six canonical collections, known as the Kutub al-Sittah, and explains why Hadith are the second source of Islamic law and an everyday guide for Muslim life.",
    objectives: ["Name the six canonical collections of Hadith, the Kutub al-Sittah", "Identify the authors of the six collections", "Explain why Sahih al-Bukhari and Sahih Muslim are regarded as the most authentic", "Describe the contents and character of each of the six collections", "Explain the importance of Hadith as the second source of Islamic law and guidance for daily life"],
    sections: [
      {
        heading: "The Two Sahihs: al-Bukhari and Muslim",
        body: "The two most highly regarded collections are Sahih al-Bukhari and Sahih Muslim, known together as the Two Sahihs. Sahih al-Bukhari was compiled by Muhammad ibn Ismail al-Bukhari, who died in 870 CE. He is said to have collected about six hundred thousand reports and selected only the most authentic, about seven thousand five hundred and sixty-three reports including repetitions, arranged by topic. Before recording a Hadith, he would pray and seek guidance, and he applied the strictest conditions for acceptance. Sahih Muslim was compiled by Muslim ibn al-Hajjaj, who died in 875 CE. He also applied strict conditions, and his collection contains about seven thousand five hundred reports including repetitions. Scholars regard these two books as the most authentic books after the Qur'an, and a Hadith found in both of them is said to be agreed upon, which is the highest degree of authenticity a Hadith can have."
      },
      {
        heading: "The Four Sunan: Abu Dawud, at-Tirmidhi, an-Nasa'i and Ibn Majah",
        body: "The other four collections are known as the Sunan. The Sunan of Abu Dawud was compiled by Abu Dawud as-Sijistani, who died in 889 CE. It focuses on Hadith that deal with law and practice, and it includes Sahih, Hasan and some Da'if reports, which Abu Dawud usually identified. The Jami of at-Tirmidhi was compiled by Muhammad ibn Isa at-Tirmidhi, who died in 892 CE. It is noted for its comments on the grade of each Hadith and for recording the opinions of the jurists on the questions discussed. The Sunan of an-Nasa'i was compiled by Ahmad ibn Shuayb an-Nasa'i, who died in 915 CE, and it is valued for its careful selection and its arrangement by legal topics. The Sunan of Ibn Majah was compiled by Muhammad ibn Yazid Ibn Majah, who died in 887 CE. It contains a number of weak reports, which is why some scholars rank it below the other five, but it is still counted among the six canonical collections. Together these six books are called the Kutub al-Sittah, the Six Books."
      },
      {
        heading: "Hadith as the Second Source of Islamic Law",
        body: "After the Qur'an, Hadith are the second source of Islamic law, known as the Shariah. The Qur'an gives the great principles and many commands, but it often states them briefly, and the Hadith supply the detail. The Qur'an commands prayer, and the Hadith show how the Prophet prayed, how many units each prayer has, and what is said in each position. The Qur'an commands Zakat, and the Hadith give the rates, the minimum amounts and the kinds of wealth on which Zakat is due. The Qur'an commands the pilgrimage, and the Hadith describe the rites of Hajj step by step. The Qur'an forbids certain foods and transactions in general terms, and the Hadith give the details. Because the Qur'an itself commands Muslims to obey the Messenger, scholars hold that a ruling established by an authentic Hadith has the authority of divine law. Without Hadith, much of Islamic law could not be practised at all."
      },
      {
        heading: "Hadith as Guidance for Daily Life",
        body: "Beyond law, Hadith guide the whole of Muslim life. They teach manners and character: kindness to parents, honesty in trade, generosity to neighbours, mercy to children, and respect for elders. They teach the etiquette of eating, greeting, visiting the sick and attending funerals. They give the words of remembrance and supplication for waking, sleeping, entering the home and beginning a journey. They describe the Prophet's character, so that Muslims can take him as a model: his patience, his humility, his forgiveness of those who wronged him, and his care for the poor. The Qur'an itself says that in the Messenger of Allah there is a beautiful example for whoever hopes for Allah and the Last Day. For this reason, the study of Hadith is not only a legal exercise; it is a way of learning how to live as a Muslim in every part of life, from worship to work, from family to community."
      }
    ],
    definitions: [
      { term: "Kutub al-Sittah", meaning: "The Six Books, the six canonical collections of Hadith: Bukhari, Muslim, Abu Dawud, at-Tirmidhi, an-Nasa'i and Ibn Majah." },
      { term: "Sahih al-Bukhari", meaning: "The collection of authentic Hadith compiled by al-Bukhari, regarded as the most authentic book after the Qur'an." },
      { term: "Sahih Muslim", meaning: "The collection of authentic Hadith compiled by Muslim ibn al-Hajjaj, second only to Sahih al-Bukhari." },
      { term: "Sunan", meaning: "Collections of Hadith arranged by legal topics, especially the four Sunan of Abu Dawud, at-Tirmidhi, an-Nasa'i and Ibn Majah." },
      { term: "Shariah", meaning: "Islamic law, derived first from the Qur'an and second from the Hadith." },
      { term: "Agreed upon", meaning: "A Hadith found in both Sahih al-Bukhari and Sahih Muslim, regarded as having the highest authenticity." }
    ],
    examples: [
      {
        title: "Naming the Six Books",
        problem: "A question asks you to list the Kutub al-Sittah. How would you answer?",
        steps: ["Recall that the Six Books are two Sahihs and four Sunan.", "Name the two Sahihs: Sahih al-Bukhari and Sahih Muslim.", "Name the four Sunan: Abu Dawud, at-Tirmidhi, an-Nasa'i and Ibn Majah.", "Give the authors where asked: al-Bukhari, Muslim, Abu Dawud, at-Tirmidhi, an-Nasa'i and Ibn Majah.", "Conclude with the term Kutub al-Sittah, the Six Books."],
        answer: "The Kutub al-Sittah are Sahih al-Bukhari, Sahih Muslim, Sunan Abu Dawud, Jami at-Tirmidhi, Sunan an-Nasa'i and Sunan Ibn Majah."
      },
      {
        title: "Using Hadith to explain a Qur'anic command",
        problem: "The Qur'an commands prayer but does not state the number of units in each prayer. Where does a Muslim find that detail?",
        steps: ["Recall that the Qur'an gives the command to pray in general terms.", "Recall that Hadith are the second source of Islamic law after the Qur'an.", "Note that the Hadith describe how the Prophet prayed, including the number of units.", "Conclude that the detail comes from the Hadith and the Sunnah of the Prophet.", "Add that this is why Hadith are essential for practising Islam."],
        answer: "The detail comes from the Hadith, which show how the Prophet prayed and how many units each prayer has."
      }
    ],
    tips: ["Learn the Six Books in order: Bukhari, Muslim, Abu Dawud, Tirmidhi, Nasa'i, Ibn Majah.", "Remember the deaths: Bukhari 870 CE, Muslim 875 CE, Ibn Majah 887 CE, Abu Dawud 889 CE, Tirmidhi 892 CE, Nasa'i 915 CE.", "A Hadith in both Bukhari and Muslim is agreed upon, the highest authenticity.", "Hadith are the second source of law after the Qur'an; they explain the Qur'an in practice."],
    mistakes: ["Saying there are five canonical collections; there are six, the Kutub al-Sittah.", "Confusing the authors: Muslim compiled Sahih Muslim, al-Bukhari compiled Sahih al-Bukhari.", "Saying Hadith are equal to the Qur'an; the Qur'an is the first source, Hadith the second.", "Forgetting that Ibn Majah is one of the six, even though his collection contains some weak reports."],
    facts: ["The Kutub al-Sittah are the six canonical collections of Hadith.", "Sahih al-Bukhari was compiled by al-Bukhari, who died in 870 CE.", "Sahih Muslim was compiled by Muslim ibn al-Hajjaj, who died in 875 CE.", "A Hadith found in both Sahih al-Bukhari and Sahih Muslim is described as agreed upon.", "Hadith are the second source of Islamic law after the Qur'an."],
    quiz: [
      { q: "How many books make up the Kutub al-Sittah?", options: ["Four", "Five", "Six", "Seven"], answer: 2, explanation: "The Kutub al-Sittah, the Six Books, are the six canonical collections of Hadith." },
      { q: "Who compiled Sahih al-Bukhari?", options: ["Muslim ibn al-Hajjaj", "Muhammad ibn Ismail al-Bukhari", "Abu Dawud as-Sijistani", "Ahmad ibn Shuayb an-Nasa'i"], answer: 1, explanation: "Sahih al-Bukhari was compiled by Muhammad ibn Ismail al-Bukhari, who died in 870 CE." },
      { q: "Who compiled Sahih Muslim?", options: ["Al-Bukhari", "Muslim ibn al-Hajjaj", "At-Tirmidhi", "Ibn Majah"], answer: 1, explanation: "Sahih Muslim was compiled by Muslim ibn al-Hajjaj, who died in 875 CE." },
      { q: "Which two collections are known together as the Two Sahihs?", options: ["Bukhari and Muslim", "Abu Dawud and Tirmidhi", "Nasa'i and Ibn Majah", "Bukhari and Abu Dawud"], answer: 0, explanation: "Sahih al-Bukhari and Sahih Muslim are the Two Sahihs, the most authentic collections after the Qur'an." },
      { q: "What is a Hadith found in both Sahih al-Bukhari and Sahih Muslim called?", options: ["Da'if", "Mawdu", "Agreed upon", "Hasan only"], answer: 2, explanation: "A Hadith in both Sahih al-Bukhari and Sahih Muslim is described as agreed upon, the highest degree of authenticity." },
      { q: "Who compiled the Sunan Abu Dawud?", options: ["Abu Dawud as-Sijistani", "At-Tirmidhi", "An-Nasa'i", "Ibn Majah"], answer: 0, explanation: "The Sunan Abu Dawud was compiled by Abu Dawud as-Sijistani, who died in 889 CE." },
      { q: "Which collection is noted for grading each Hadith and recording the opinions of jurists?", options: ["Sahih al-Bukhari", "Sahih Muslim", "Jami at-Tirmidhi", "Sunan an-Nasa'i"], answer: 2, explanation: "The Jami of at-Tirmidhi is noted for its comments on the grade of each Hadith and for recording jurists' opinions." },
      { q: "Who compiled the Sunan an-Nasa'i?", options: ["Abu Dawud", "Ibn Majah", "Ahmad ibn Shuayb an-Nasa'i", "Al-Bukhari"], answer: 2, explanation: "The Sunan an-Nasa'i was compiled by Ahmad ibn Shuayb an-Nasa'i, who died in 915 CE." },
      { q: "Who compiled the Sunan Ibn Majah?", options: ["Muhammad ibn Yazid Ibn Majah", "Muslim ibn al-Hajjaj", "At-Tirmidhi", "Abu Dawud"], answer: 0, explanation: "The Sunan Ibn Majah was compiled by Muhammad ibn Yazid Ibn Majah, who died in 887 CE." },
      { q: "In which year did Imam al-Bukhari die?", options: ["850 CE", "870 CE", "889 CE", "915 CE"], answer: 1, explanation: "Imam al-Bukhari died in 870 CE." },
      { q: "Which collection focuses especially on Hadith dealing with law and practice?", options: ["Sunan Abu Dawud", "Sunan Ibn Majah", "Sahih Muslim", "Jami at-Tirmidhi"], answer: 0, explanation: "The Sunan Abu Dawud focuses on Hadith that deal with law and practice." },
      { q: "What is the second source of Islamic law after the Qur'an?", options: ["The opinions of poets", "Hadith", "Custom alone", "The history of kings"], answer: 1, explanation: "Hadith are the second source of Islamic law, the Shariah, after the Qur'an." },
      { q: "How do Hadith help a Muslim to perform the prayer?", options: ["They give the number of units and describe how the Prophet prayed", "They cancel the prayer", "They replace the Qur'an", "They forbid prayer"], answer: 0, explanation: "The Qur'an commands prayer in general terms, and the Hadith show how the Prophet prayed, including the number of units in each prayer." },
      { q: "What does the Qur'an say about the Prophet Muhammad as an example?", options: ["He is only a teacher of history", "In the Messenger of Allah there is a beautiful example", "He is not to be followed", "His example is only for Arabs"], answer: 1, explanation: "The Qur'an says that in the Messenger of Allah there is a beautiful example for whoever hopes for Allah and the Last Day." },
      { q: "Which of the six collections is sometimes ranked below the other five because it contains some weak reports?", options: ["Sahih al-Bukhari", "Sahih Muslim", "Sunan Ibn Majah", "Sunan an-Nasa'i"], answer: 2, explanation: "The Sunan Ibn Majah contains a number of weak reports, so some scholars rank it below the other five, though it is still one of the six." }
    ],
    status: "published"
  },
  {
    id: "irs-05",
    subjectId: "irs",
    topic: "Islamic Beliefs and Practices",
    subtopic: "Tawhid and the articles of faith",
    title: "Tawhid and the Articles of Faith",
    order: 5,
    introduction: "At the heart of Islam is Tawhid, the Oneness of Allah, and the six articles of faith that every Muslim believes. This lesson explains the meaning of Tawhid, its three aspects, the six articles of faith, and Shirk, the sin of associating partners with Allah, with its forms and dangers.",
    objectives: ["Explain the meaning and importance of Tawhid", "Describe the three aspects of Tawhid", "List and explain the six articles of faith", "Explain the meaning of Shirk and its forms", "Distinguish between major and minor Shirk"],
    sections: [
      {
        heading: "The Meaning and Importance of Tawhid",
        body: "Tawhid is the central belief of Islam: the Oneness of Allah. It means that Allah alone is God, that He alone is worthy of worship, and that He has no partner, no equal and no rival. The word Tawhid comes from the Arabic root meaning to make one, and the belief is summed up in Surah al-Ikhlas (112): Allah is One, Eternal, and there is none like Him. Tawhid is the first thing the Prophet Muhammad called people to in Makkah, and it is the first part of the Shahadah, the declaration that there is no god but Allah. It is the foundation of all Islamic belief and practice: every act of worship, every moral rule and every hope of the Hereafter rests on the truth that Allah alone is God. The Qur'an says that Allah does not forgive the association of partners with Him, though He forgives lesser sins for whom He wills, which shows how serious the opposite of Tawhid is."
      },
      {
        heading: "The Three Aspects of Tawhid",
        body: "Scholars explain Tawhid in three aspects, which together cover the whole of the belief. Tawhid ar-Rububiyyah is the Oneness of Allah in His Lordship: Allah alone creates, sustains, provides for and governs the universe. He alone gives life and causes death, sends rain and provides sustenance, and nothing happens except by His will and permission. Tawhid al-Uluhiyyah is the Oneness of Allah in worship: all worship, including prayer, fasting, supplication, sacrifice and hope, must be directed to Allah alone. This is the aspect that was most disputed in Makkah, because the idol-worshippers accepted that Allah was the Creator yet worshipped others alongside Him. Tawhid al-Asma wa as-Sifat is the Oneness of Allah in His names and attributes: Allah is to be described only by the names and attributes He has given Himself in the Qur'an and Hadith, such as the Most Merciful and the All-Knowing, without likening Him to His creation and without denying or distorting His attributes. Together these three aspects keep a Muslim's belief about Allah pure in Lordship, in worship and in description."
      },
      {
        heading: "The Six Articles of Faith",
        body: "The six articles of faith, known as Iman, are the beliefs every Muslim holds. The first is belief in Allah, His Oneness, His Lordship and His right to be worshipped alone. The second is belief in His angels, beings created from light who obey Allah, carry out His commands, record human deeds and bring revelation. The chief of the angels is Jibril, who brought the Qur'an to the Prophet. The third is belief in the revealed books: the Tawrat given to Musa, the Zabur given to Dawud, the Injil given to Isa, and the Qur'an given to Muhammad, which is the final revelation and is preserved from change. The fourth is belief in the prophets and messengers, from Adam to Muhammad, who is the seal of the Prophets, sent to guide mankind. The fifth is belief in the Day of Judgement, when all people will be raised, judged for their deeds and sent to Paradise or Hell. The sixth is belief in divine decree, al-Qadar, that Allah knows and has decreed all things, both good and bad, and that nothing happens outside His knowledge and will, while human beings still choose their actions and are responsible for them."
      },
      {
        heading: "Shirk and Its Forms",
        body: "Shirk is the opposite of Tawhid: it is associating partners with Allah in His Lordship, in worship, or in His names and attributes. Major Shirk, Shirk al-Akbar, takes a person out of Islam. Its forms include worshipping idols, praying to the dead or to saints for help, believing that another being can create, provide or control the universe, and making sacrifices or vows to other than Allah. Minor Shirk, Shirk al-Asghar, does not take a person out of Islam but is still a serious sin. Its forms include showing off in worship, known as riyaa, so that good deeds are done to be seen by people rather than for Allah, and swearing by other than Allah. The Prophet warned that showing off is a hidden form of Shirk. The Qur'an warns that Shirk is the greatest wrongdoing, because it gives to a created being the honour that belongs to the Creator alone, and it is the one sin Allah says He does not forgive if a person dies upon it without repentance. For this reason, protecting Tawhid from every form of Shirk is the most important duty of a Muslim."
      }
    ],
    definitions: [
      { term: "Tawhid", meaning: "The Oneness of Allah: that He alone is God and alone is worthy of worship, with no partner or equal." },
      { term: "Tawhid ar-Rububiyyah", meaning: "The Oneness of Allah in His Lordship: He alone creates, sustains, provides and governs the universe." },
      { term: "Tawhid al-Uluhiyyah", meaning: "The Oneness of Allah in worship: all worship must be directed to Allah alone." },
      { term: "Iman", meaning: "Faith: belief in Allah, His angels, His books, His messengers, the Day of Judgement and divine decree." },
      { term: "Shirk", meaning: "Associating partners with Allah in His Lordship, worship, or names and attributes." },
      { term: "Al-Qadar", meaning: "Divine decree: the belief that Allah knows and has decreed all things, while human beings remain responsible for their actions." }
    ],
    examples: [
      {
        title: "Identifying an article of faith",
        problem: "A Muslim says he believes in the angels who record human deeds. Which article of faith is this?",
        steps: ["Recall the six articles of faith: Allah, angels, books, prophets, the Day of Judgement and divine decree.", "Note that the statement is about angels.", "Identify this as the second article of faith, belief in the angels.", "Recall that angels are created from light and obey Allah.", "Conclude that the statement expresses belief in the angels."],
        answer: "It is the second article of faith: belief in the angels of Allah."
      },
      {
        title: "Distinguishing major from minor Shirk",
        problem: "One person prays to a saint for help, another prays to Allah but shows off so people will praise him. Which is major Shirk and which is minor?",
        steps: ["Recall that major Shirk takes a person out of Islam, while minor Shirk does not.", "Note that praying to a saint for help directs worship to other than Allah.", "Identify this as major Shirk.", "Note that showing off in worship, riyaa, is done for people rather than for Allah.", "Identify this as minor Shirk, though still a serious sin."],
        answer: "Praying to a saint for help is major Shirk; showing off in worship is minor Shirk."
      }
    ],
    tips: ["Tawhid is the Oneness of Allah; learn its three aspects: Lordship, worship, and names and attributes.", "The six articles of faith are Allah, angels, books, prophets, the Day of Judgement and divine decree.", "Shirk is the opposite of Tawhid; major Shirk takes a person out of Islam, minor Shirk does not.", "Surah al-Ikhlas (112) is the key text for Tawhid; memorise its meaning."],
    mistakes: ["Saying Tawhid means only that Allah created the world; it also means He alone is to be worshipped.", "Leaving out an article of faith, especially belief in divine decree.", "Saying all Shirk takes a person out of Islam; only major Shirk does so, minor Shirk is still a grave sin.", "Confusing belief in the books with belief in the prophets; they are separate articles of faith."],
    facts: ["Tawhid is the central belief of Islam: Allah alone is God and alone is worthy of worship.", "The three aspects of Tawhid are Lordship, worship, and names and attributes.", "There are six articles of faith: Allah, angels, books, prophets, the Day of Judgement and divine decree.", "The chief of the angels is Jibril, who brought the Qur'an to the Prophet Muhammad.", "Shirk is the opposite of Tawhid and is described in the Qur'an as the greatest wrongdoing."],
    quiz: [
      { q: "What does Tawhid mean?", options: ["The Oneness of Allah", "The unity of Muslims", "The five pillars", "The Day of Judgement"], answer: 0, explanation: "Tawhid is the Oneness of Allah: He alone is God and alone is worthy of worship." },
      { q: "Which Surah best sums up the belief of Tawhid?", options: ["Surah al-Fatihah", "Surah al-Ikhlas", "Surah al-Falaq", "Surah an-Nas"], answer: 1, explanation: "Surah al-Ikhlas (112) declares that Allah is One, Eternal, and that there is none like Him." },
      { q: "What is Tawhid ar-Rububiyyah?", options: ["Oneness of Allah in worship", "Oneness of Allah in His Lordship", "Oneness of Allah in His names", "Oneness of the Muslim community"], answer: 1, explanation: "Tawhid ar-Rububiyyah is the Oneness of Allah in His Lordship: He alone creates, sustains and governs the universe." },
      { q: "What is Tawhid al-Uluhiyyah?", options: ["Oneness of Allah in His Lordship", "Oneness of Allah in worship", "Oneness of Allah in His names", "Belief in the angels"], answer: 1, explanation: "Tawhid al-Uluhiyyah is the Oneness of Allah in worship: all worship must be directed to Allah alone." },
      { q: "How many articles of faith are there in Islam?", options: ["Four", "Five", "Six", "Seven"], answer: 2, explanation: "There are six articles of faith: Allah, angels, books, prophets, the Day of Judgement and divine decree." },
      { q: "Which of these is the first article of faith?", options: ["Belief in the angels", "Belief in Allah", "Belief in the prophets", "Belief in the Day of Judgement"], answer: 1, explanation: "The first article of faith is belief in Allah, His Oneness, His Lordship and His right to be worshipped alone." },
      { q: "According to Islamic belief, from what were the angels created?", options: ["Fire", "Light", "Clay", "Water"], answer: 1, explanation: "Angels are beings created from light who obey Allah and carry out His commands." },
      { q: "Which angel brought the Qur'an to the Prophet Muhammad?", options: ["Mikael", "Jibril", "Israfil", "Malik"], answer: 1, explanation: "Jibril, the chief of the angels, brought the revelation of the Qur'an to the Prophet Muhammad." },
      { q: "Which of these is one of the revealed books Muslims believe in?", options: ["The Tawrat given to Musa", "The Vedas", "The book of the Psalms of David only", "The writings of the philosophers"], answer: 0, explanation: "Muslims believe in the revealed books, including the Tawrat given to Musa, the Zabur given to Dawud, the Injil given to Isa, and the Qur'an." },
      { q: "Who is the seal of the Prophets in Islamic belief?", options: ["Musa", "Isa", "Muhammad", "Ibrahim"], answer: 2, explanation: "The Prophet Muhammad is the seal of the Prophets, the last of the messengers sent to guide mankind." },
      { q: "What is the fifth article of faith?", options: ["Belief in divine decree", "Belief in the Day of Judgement", "Belief in the angels", "Belief in the books"], answer: 1, explanation: "The fifth article of faith is belief in the Day of Judgement, when all people will be raised and judged for their deeds." },
      { q: "What does belief in al-Qadar, divine decree, mean?", options: ["That human beings have no choice at all", "That Allah knows and has decreed all things, while human beings remain responsible for their actions", "That only good things are decreed", "That the future is unknown to Allah"], answer: 1, explanation: "Belief in al-Qadar means Allah knows and has decreed all things, while human beings still choose their actions and are responsible for them." },
      { q: "What is Shirk?", options: ["Worshipping Allah alone", "Associating partners with Allah", "Praying five times a day", "Giving Zakat"], answer: 1, explanation: "Shirk is associating partners with Allah in His Lordship, worship, or names and attributes." },
      { q: "Which of these is an example of major Shirk?", options: ["Showing off in worship", "Praying to a saint for help", "Swearing by other than Allah", "Forgetting a prayer"], answer: 1, explanation: "Praying to a saint for help directs worship to other than Allah, which is major Shirk." },
      { q: "What is riyaa, showing off in worship, classified as?", options: ["Major Shirk", "Minor Shirk", "Not a sin at all", "A pillar of Islam"], answer: 1, explanation: "Showing off in worship, riyaa, is minor Shirk: it does not take a person out of Islam but is still a serious sin." }
    ],
    status: "published"
  },
  {
    id: "irs-06",
    subjectId: "irs",
    topic: "Islamic Beliefs and Practices",
    subtopic: "The five pillars of Islam",
    title: "The Five Pillars of Islam",
    order: 6,
    introduction: "The Five Pillars are the five duties that form the foundation of Muslim life: the declaration of faith, prayer, Zakat, fasting and pilgrimage. This lesson explains the meaning, conditions and significance of each pillar, and how together they shape a Muslim's relationship with Allah and with other people.",
    objectives: ["List the Five Pillars of Islam in order", "Explain the meaning and conditions of the Shahadah", "Describe the five daily prayers and their times", "Explain Zakat, its rate and who receives it", "Explain Sawm in Ramadan and Hajj, with their conditions and significance"],
    sections: [
      {
        heading: "The Shahadah: The Declaration of Faith",
        body: "The first pillar is the Shahadah, the declaration of faith: There is no god but Allah, and Muhammad is the Messenger of Allah. To become a Muslim, a person declares this sincerely, believing it in the heart and stating it with the tongue. The first part affirms Tawhid, that Allah alone is worthy of worship; the second part affirms that Muhammad is Allah's Messenger and the seal of the Prophets, whose teaching and example must be followed. The Shahadah is not a mere form of words. Its conditions include knowledge of its meaning, certainty without doubt, sincerity, truthfulness, love for Allah and His Messenger, acceptance of what it requires, and submission to it in practice. The Shahadah is whispered into the ear of a newborn child, it is repeated in the call to prayer and in every prayer, and it is the last words a Muslim hopes to say before death. It is the foundation on which all the other pillars rest."
      },
      {
        heading: "Salat: The Five Daily Prayers",
        body: "The second pillar is Salat, the ritual prayer performed five times each day. The five prayers are Fajr, the dawn prayer of two units; Zuhr, the midday prayer of four units; Asr, the afternoon prayer of four units; Maghrib, the sunset prayer of three units; and Isha, the night prayer of four units, making seventeen obligatory units in total. Each prayer is performed after ritual ablution, Wudu, facing the Kaabah in Makkah, and it includes standing, recitation of the Qur'an, bowing, prostration and sitting. Prayer was made obligatory during the Prophet's Night Journey, and the Qur'an describes prayer as preventing indecency and wrongdoing. Congregational prayer in the mosque is rewarded more than prayer alone, and the Friday midday prayer, Jumuah, is obligatory for men. Prayer keeps a Muslim in regular contact with Allah through the day, disciplines time, and reminds the believer of the purpose of life."
      },
      {
        heading: "Zakat: The Obligatory Charity",
        body: "The third pillar is Zakat, the obligatory charity paid by Muslims who own wealth above a minimum amount, known as the Nisab. The standard rate is two and a half percent of one's savings and trade goods each lunar year, once the wealth has been held for a full year. Zakat is not a voluntary gift; it is a right of the poor in the wealth of the rich, and the Qur'an names those who may receive it, including the poor, the needy, those employed to collect it, those whose hearts are to be reconciled, those in debt, and travellers in need. By paying Zakat, a Muslim purifies his wealth and his heart from greed, shares with those who have less, and helps to reduce poverty in the community. Refusing to pay Zakat while denying that it is obligatory is a serious matter, because Zakat is one of the pillars of the faith. Voluntary charity beyond Zakat is called Sadaqah, and it is rewarded but not obligatory."
      },
      {
        heading: "Sawm and Hajj: Fasting and Pilgrimage",
        body: "The fourth pillar is Sawm, fasting during the month of Ramadan, the ninth month of the Islamic lunar calendar. From dawn until sunset, an adult Muslim abstains from food, drink and marital relations, with the intention of fasting for Allah. The fast is obligatory for every adult Muslim who is healthy and resident, while children, the sick, travellers, pregnant and nursing women, and women in their monthly period are excused or may make up the fast later. Ramadan is the month in which the Qur'an was first revealed, and the fast teaches self-control, sympathy for the poor, gratitude for Allah's blessings, and closeness to Allah through prayer and recitation of the Qur'an. The fifth pillar is Hajj, the pilgrimage to Makkah, which is obligatory once in a lifetime for every Muslim who is physically and financially able to undertake it. Hajj takes place in the month of Dhul-Hijjah, the twelfth month, and its rites include wearing the white garments of Ihram, circling the Kaabah, walking between the hills of Safa and Marwah, standing on the plain of Arafat, and the symbolic stoning at Mina. Hajj gathers Muslims of every nation in one place, equal before Allah, and it commemorates the faith of the Prophet Ibrahim and his family."
      }
    ],
    definitions: [
      { term: "Shahadah", meaning: "The declaration of faith: There is no god but Allah, and Muhammad is the Messenger of Allah." },
      { term: "Salat", meaning: "The ritual prayer performed five times a day, facing the Kaabah in Makkah." },
      { term: "Zakat", meaning: "The obligatory charity of two and a half percent of qualifying wealth, paid yearly to those entitled to receive it." },
      { term: "Nisab", meaning: "The minimum amount of wealth above which Zakat becomes obligatory." },
      { term: "Sawm", meaning: "Fasting, especially the obligatory fast of the month of Ramadan from dawn to sunset." },
      { term: "Hajj", meaning: "The pilgrimage to Makkah in the month of Dhul-Hijjah, obligatory once in a lifetime for those who are able." }
    ],
    examples: [
      {
        title: "Working out Zakat on savings",
        problem: "A Muslim has savings of 400,000 naira held for a full lunar year, well above the Nisab. How much Zakat does he owe?",
        steps: ["Recall that the standard rate of Zakat on savings is two and a half percent.", "Note that the savings have been held for a full lunar year and are above the Nisab.", "Calculate two and a half percent of 400,000 naira.", "Two and a half percent means 2.5 divided by 100, multiplied by 400,000.", "Conclude that the Zakat due is 10,000 naira."],
        answer: "The Zakat due is 10,000 naira, which is two and a half percent of 400,000 naira."
      },
      {
        title: "Deciding who must fast in Ramadan",
        problem: "A healthy adult Muslim is at home during Ramadan. A traveller is on a long journey. Who must fast, and who is excused?",
        steps: ["Recall that fasting in Ramadan is obligatory for every adult Muslim who is healthy and resident.", "Note that the healthy adult at home meets these conditions.", "Recall that travellers are excused from fasting while travelling.", "Note that the traveller must make up the missed days later.", "Conclude that the resident adult must fast, while the traveller is excused but must make up the fast."],
        answer: "The healthy resident adult must fast; the traveller is excused during the journey but must make up the missed days later."
      }
    ],
    tips: ["Learn the pillars in order: Shahadah, Salat, Zakat, Sawm, Hajj.", "Know the prayer units: Fajr 2, Zuhr 4, Asr 4, Maghrib 3, Isha 4, seventeen in total.", "Zakat is 2.5 percent of qualifying wealth held for a full lunar year above the Nisab.", "Hajj is once in a lifetime, only for those who are physically and financially able."],
    mistakes: ["Saying there are six pillars of Islam; there are five, while the articles of faith are six.", "Saying Zakat is voluntary; Zakat is obligatory, while Sadaqah is voluntary charity.", "Saying Hajj is obligatory for every Muslim regardless of ability; it is only for those who are able.", "Confusing the months: Ramadan is the ninth month for fasting, Dhul-Hijjah is the twelfth month for Hajj."],
    facts: ["The Five Pillars are Shahadah, Salat, Zakat, Sawm and Hajj.", "The five daily prayers total seventeen obligatory units: Fajr 2, Zuhr 4, Asr 4, Maghrib 3, Isha 4.", "The standard rate of Zakat is two and a half percent of qualifying wealth.", "Ramadan is the ninth month of the Islamic calendar, and the Qur'an was first revealed in it.", "Hajj takes place in Makkah in the month of Dhul-Hijjah and is obligatory once in a lifetime for those who are able."],
    quiz: [
      { q: "How many pillars of Islam are there?", options: ["Four", "Five", "Six", "Seven"], answer: 1, explanation: "There are five pillars of Islam: Shahadah, Salat, Zakat, Sawm and Hajj." },
      { q: "What is the first pillar of Islam?", options: ["Salat", "Zakat", "Shahadah", "Hajj"], answer: 2, explanation: "The first pillar is the Shahadah, the declaration that there is no god but Allah and Muhammad is the Messenger of Allah." },
      { q: "What does the Shahadah declare?", options: ["That there are many gods", "That there is no god but Allah, and Muhammad is the Messenger of Allah", "That prayer is five times a day", "That fasting is in Ramadan"], answer: 1, explanation: "The Shahadah declares that there is no god but Allah, and Muhammad is the Messenger of Allah." },
      { q: "How many times a day must a Muslim perform the obligatory prayer?", options: ["Three", "Four", "Five", "Seven"], answer: 2, explanation: "Salat, the ritual prayer, is performed five times each day: Fajr, Zuhr, Asr, Maghrib and Isha." },
      { q: "How many units does the Fajr prayer have?", options: ["Two", "Three", "Four", "Five"], answer: 0, explanation: "Fajr, the dawn prayer, has two units." },
      { q: "How many units does the Maghrib prayer have?", options: ["Two", "Three", "Four", "Five"], answer: 1, explanation: "Maghrib, the sunset prayer, has three units." },
      { q: "How many obligatory units of prayer are there in total each day?", options: ["Twelve", "Fifteen", "Seventeen", "Twenty"], answer: 2, explanation: "The five daily prayers total seventeen obligatory units: Fajr 2, Zuhr 4, Asr 4, Maghrib 3 and Isha 4." },
      { q: "What is the standard rate of Zakat on savings?", options: ["One percent", "Two and a half percent", "Five percent", "Ten percent"], answer: 1, explanation: "The standard rate of Zakat is two and a half percent of qualifying wealth held for a full lunar year." },
      { q: "What is the minimum amount of wealth above which Zakat becomes due called?", options: ["Sadaqah", "Nisab", "Ihram", "Wudu"], answer: 1, explanation: "The minimum amount of wealth above which Zakat is obligatory is called the Nisab." },
      { q: "In which month do Muslims fast from dawn to sunset?", options: ["Shawwal", "Dhul-Hijjah", "Ramadan", "Muharram"], answer: 2, explanation: "Sawm, the obligatory fast, is observed during Ramadan, the ninth month of the Islamic calendar." },
      { q: "Which month of the Islamic calendar is Ramadan?", options: ["The seventh month", "The eighth month", "The ninth month", "The twelfth month"], answer: 2, explanation: "Ramadan is the ninth month of the Islamic lunar calendar." },
      { q: "Who is excused from fasting while travelling in Ramadan?", options: ["No one is excused", "Travellers, who make up the fast later", "Only children", "Only the elderly"], answer: 1, explanation: "Travellers are excused from fasting while travelling, but they must make up the missed days later." },
      { q: "To which city do Muslims travel for Hajj?", options: ["Madinah", "Jerusalem", "Makkah", "Cairo"], answer: 2, explanation: "Hajj, the pilgrimage, is made to Makkah, where the Kaabah stands." },
      { q: "In which month does Hajj take place?", options: ["Ramadan", "Shawwal", "Dhul-Hijjah", "Muharram"], answer: 2, explanation: "Hajj takes place in the month of Dhul-Hijjah, the twelfth month of the Islamic calendar." },
      { q: "How often is Hajj obligatory for a Muslim who is able to perform it?", options: ["Every year", "Once in a lifetime", "Once every five years", "Only in old age"], answer: 1, explanation: "Hajj is obligatory once in a lifetime for every Muslim who is physically and financially able to undertake it." }
    ],
    status: "published"
  },
{
    id: "irs-07",
    subjectId: "irs",
    topic: "The Life of the Prophet Muhammad",
    subtopic: "Birth, early life and the call to prophethood",
    title: "The Early Life and Call of the Prophet Muhammad",
    order: 7,
    introduction: "The Prophet Muhammad was born in Makkah in 570 CE, in the Year of the Elephant, into the noble Quraysh tribe. His early life was marked by loss, hard work and a reputation for honesty, and his marriage to Khadijah gave him stability and support. At the age of forty, in 610 CE, he received the first revelation in Cave Hira, and his mission as the final Messenger of Allah began. This lesson traces his birth, upbringing, character and the first years of his call.",
    objectives: ["Describe the birth of the Prophet Muhammad in 570 CE and his lineage", "Explain his early life as an orphan, shepherd and trader", "Describe his marriage to Khadijah and its importance", "Explain the first revelation in Cave Hira in 610 CE", "Identify the first converts and describe the early preaching in Makkah"],
    sections: [
      {
        heading: "Birth in the Year of the Elephant",
        body: "The Prophet Muhammad was born in Makkah in 570 CE, a year remembered in Arab history as the Year of the Elephant, because in that year Abraha, the ruler of Yemen, marched on Makkah with an army that included elephants, intending to destroy the Ka'bah. According to the Qur'an (Surah Al-Fil, chapter 105), Allah sent flocks of birds that pelted the army with stones, and the invasion failed. The Prophet was born into the clan of Banu Hashim, a respected branch of the Quraysh tribe, which was the custodian of the Ka'bah. His father, Abdullah, died before he was born, and his mother, Aminah, died when he was about six years old, so he grew up as an orphan. He was first nursed by Halimah of the Banu Sa'd tribe in the desert, as was the custom among the Quraysh, and was later cared for by his grandfather Abdul Muttalib and then by his uncle Abu Talib. His orphanhood is mentioned in the Qur'an: 'Did He not find you an orphan and give you shelter?' (Qur'an 93:6)."
      },
      {
        heading: "Early Life: Shepherd, Trader and Al-Amin",
        body: "As a young man, the Prophet worked as a shepherd, a humble occupation that taught him patience, responsibility and care for others; many prophets before him had also tended flocks. He later joined the trading caravans of Makkah, travelling to Syria and Yemen, and became known throughout Makkah for his honesty, trustworthiness and fair dealing. The people of Makkah gave him the title Al-Amin, meaning 'the Trustworthy', and they entrusted him with their goods and valuables for safekeeping. He took part in the trade of the wealthy widow Khadijah, managing her caravans with such skill and honesty that she was deeply impressed. He never worshipped idols, never drank wine and never took part in the immoral practices common in Makkah at the time, and his character was so upright that even his enemies later admitted they could find no fault in his honesty. His early life shows that prophethood was given to a man already known for truthfulness and integrity."
      },
      {
        heading: "Marriage to Khadijah",
        body: "At the age of twenty-five, the Prophet married Khadijah bint Khuwaylid, a respected and wealthy businesswoman of Makkah who was fifteen years older than him. Khadijah had been impressed by his honesty in managing her trade and by the reports of her servant Maysarah about his character on the journey to Syria, and she proposed marriage to him. Their marriage lasted twenty-five years until her death, and it was a happy and faithful union: the Prophet did not marry any other woman while Khadijah was alive. Khadijah bore him children, including his daughters Zaynab, Ruqayyah, Umm Kulthum and Fatimah, and his sons Qasim and Abdullah, both of whom died in infancy. Khadijah was his greatest source of emotional and financial support: her wealth freed him from the need to trade constantly and gave him time for reflection and worship, and her belief in him at the moment of the first revelation gave him the courage to carry on. She is honoured in Islam as the first person to accept Islam and as one of the greatest women in history."
      },
      {
        heading: "The Call at Cave Hira and the First Revelation",
        body: "In the month of Ramadan in 610 CE, when the Prophet was forty years old, he was meditating in Cave Hira on Mount Nur outside Makkah, as was his habit, when the Angel Jibril appeared to him and commanded him to 'Read!' (Iqra). The Prophet replied that he could not read, and the angel embraced him and repeated the command, and then the first verses of the Qur'an were revealed: 'Read, in the name of your Lord who created. Created man from a clinging clot. Read, and your Lord is the Most Generous, who taught by the pen, taught man what he did not know' (Qur'an 96:1-5). He returned home trembling and asked Khadijah to cover him, and she comforted him and took him to her cousin Waraqah ibn Nawfal, a Christian scholar, who told him that the angel was the same one who had come to Moses and that he would be the prophet of his people. After a pause, revelation continued, and the Prophet began his mission. The first revelation shows that Islam begins with knowledge and reading, and that the Qur'an is the word of Allah revealed to the Prophet, not his own composition."
      },
      {
        heading: "The First Converts and Early Preaching",
        body: "The first person to accept Islam was Khadijah, followed by the Prophet's cousin Ali ibn Abi Talib, his close friend Abu Bakr, his freed slave Zayd ibn Harithah, and the young Bilal, an Abyssinian slave. For the first three years the Prophet preached secretly, gathering a small group of believers in the house of Al-Arqam, teaching them about the oneness of Allah, prayer, charity and good character. Then Allah commanded him to preach openly: 'And warn your closest kindred' (Qur'an 26:214), and he climbed Mount Safa and called the people of Makkah to abandon idolatry and worship Allah alone. Most of the Quraysh rejected the message because it threatened their idols, their traditions and their profits from pilgrims, and his uncle Abu Lahab was among the fiercest opponents. But a growing number of people, especially the poor, the young and the slaves, accepted Islam, including Bilal, who was tortured by his master Umayyah for his faith but refused to give it up, and Sumayyah, the first martyr of Islam. The early preaching established the foundations of the Muslim community: faith in one God, prayer, patience under persecution and loyalty to the Prophet."
      }
    ],
    definitions: [
      { term: "Year of the Elephant", meaning: "The year 570 CE, when Abraha marched on Makkah with elephants to destroy the Ka'bah and was defeated; the year the Prophet was born." },
      { term: "Quraysh", meaning: "The leading tribe of Makkah, custodians of the Ka'bah, to which the Prophet belonged through the clan of Banu Hashim." },
      { term: "Al-Amin", meaning: "The Trustworthy, the title given to the Prophet by the people of Makkah because of his honesty." },
      { term: "Cave Hira", meaning: "The cave on Mount Nur near Makkah where the Prophet received the first revelation in 610 CE." },
      { term: "Wahy", meaning: "Divine revelation, the communication of Allah's message to the Prophet through the Angel Jibril." },
      { term: "Iqra", meaning: "Read, the first word of the first revelation (Qur'an 96:1)." }
    ],
    examples: [
      {
        title: "Why the Prophet was called Al-Amin",
        problem: "A question asks what the title Al-Amin tells us about the Prophet before his call. How would you answer?",
        steps: ["Recall that Al-Amin means 'the Trustworthy'.", "Recall that the people of Makkah entrusted him with their goods and valuables.", "Note that he managed Khadijah's trade honestly and was known for fair dealing.", "Note that he never worshipped idols or took part in immoral practices.", "Conclude that his reputation for honesty prepared people to trust his message."],
        answer: "Al-Amin shows that before prophethood the Prophet was already known throughout Makkah for honesty and trustworthiness, which made his message credible."
      },
      {
        title: "The significance of the first revelation",
        problem: "Explain why the first revealed word, 'Read', is significant for Muslims.",
        steps: ["Identify the first revealed verses as Qur'an 96:1-5, beginning with 'Read'.", "Note that the Prophet was unlettered, so the revelation was clearly from Allah.", "Note that the verses link reading, the pen and knowledge with the Creator.", "Conclude that Islam places knowledge and learning at the centre of faith."],
        answer: "The first word 'Read' shows that Islam begins with knowledge and learning, and that the Qur'an is Allah's revelation, not the Prophet's own words."
      }
    ],
    tips: ["Memorise the key dates: birth 570 CE, first revelation 610 CE, Hijrah 622 CE, death 632 CE.", "Link each early event to a person: Halimah the nurse, Abu Talib the uncle, Khadijah the wife, Waraqah the scholar.", "Know the first converts in order of importance: Khadijah, Ali, Abu Bakr, Zayd and Bilal.", "The first revealed verses are Qur'an 96:1-5, beginning with 'Iqra' (Read)."],
    mistakes: ["Saying the Prophet was born in 622 CE; 622 CE is the Hijrah, while his birth was in 570 CE.", "Saying the first revelation came at the age of 25; he was 40 years old in 610 CE.", "Confusing Khadijah with Aisha; Khadijah was his first wife, married when he was 25.", "Saying the Prophet preached openly from the start; the first three years were secret preaching."],
    facts: ["The Prophet was born in Makkah in 570 CE, the Year of the Elephant.", "He belonged to the clan of Banu Hashim of the Quraysh tribe.", "The first revelation came in Cave Hira in Ramadan 610 CE, when he was 40.", "The first revealed verses are Qur'an 96:1-5, beginning with 'Read'.", "Khadijah was the first person to accept Islam."],
    quiz: [
      { q: "In which year was the Prophet Muhammad born?", options: ["570 CE", "610 CE", "622 CE", "632 CE"], answer: 0, explanation: "The Prophet was born in Makkah in 570 CE, known as the Year of the Elephant." },
      { q: "Why is the year 570 CE called the Year of the Elephant?", options: ["Elephants were first brought to Arabia", "Abraha marched on Makkah with elephants to destroy the Ka'bah", "The Prophet was born on an elephant", "The Ka'bah was built that year"], answer: 1, explanation: "In 570 CE Abraha, ruler of Yemen, marched on Makkah with an army including elephants to destroy the Ka'bah, but Allah defeated the army." },
      { q: "To which clan of the Quraysh did the Prophet belong?", options: ["Banu Umayyah", "Banu Hashim", "Banu Makhzum", "Banu Zuhrah"], answer: 1, explanation: "The Prophet belonged to the clan of Banu Hashim, a respected branch of the Quraysh tribe." },
      { q: "Who nursed the Prophet in the desert when he was a baby?", options: ["Aminah", "Halimah", "Khadijah", "Fatimah"], answer: 1, explanation: "The Prophet was nursed by Halimah of the Banu Sa'd tribe in the desert, following the Quraysh custom." },
      { q: "Who cared for the Prophet after the death of his grandfather Abdul Muttalib?", options: ["Abu Lahab", "Abu Talib", "Abbas", "Hamzah"], answer: 1, explanation: "After Abdul Muttalib died, the Prophet was cared for by his uncle Abu Talib." },
      { q: "What does the title Al-Amin mean?", options: ["The Brave", "The Trustworthy", "The Wise", "The Generous"], answer: 1, explanation: "Al-Amin means 'the Trustworthy'; the people of Makkah gave the Prophet this title because of his honesty." },
      { q: "At what age did the Prophet marry Khadijah?", options: ["20", "25", "30", "40"], answer: 1, explanation: "The Prophet married Khadijah when he was 25 years old; she was 40." },
      { q: "Which of these was a daughter of the Prophet and Khadijah?", options: ["Fatimah", "Aisha", "Hafsah", "Sawdah"], answer: 0, explanation: "Fatimah was a daughter of the Prophet and Khadijah; Aisha and Hafsah were later wives of the Prophet." },
      { q: "In which cave did the Prophet receive the first revelation?", options: ["Cave Thawr", "Cave Hira", "Cave Uhud", "Cave Badr"], answer: 1, explanation: "The first revelation came to the Prophet in Cave Hira on Mount Nur near Makkah." },
      { q: "In which year did the Prophet receive the first revelation?", options: ["570 CE", "595 CE", "610 CE", "622 CE"], answer: 2, explanation: "The first revelation came in Ramadan 610 CE, when the Prophet was 40 years old." },
      { q: "What is the first word of the first revelation?", options: ["Pray", "Read", "Believe", "Proclaim"], answer: 1, explanation: "The first revealed word is 'Iqra', meaning 'Read' (Qur'an 96:1)." },
      { q: "Who was the first person to accept Islam?", options: ["Abu Bakr", "Ali", "Khadijah", "Bilal"], answer: 2, explanation: "Khadijah, the Prophet's wife, was the first person to accept Islam and to believe in his message." },
      { q: "Who told the Prophet that the angel who visited him was the same one who came to Moses?", options: ["Abu Talib", "Waraqah ibn Nawfal", "Abu Bakr", "Zayd ibn Harithah"], answer: 1, explanation: "Waraqah ibn Nawfal, Khadijah's cousin and a Christian scholar, recognised the angel as the one who had come to Moses." },
      { q: "Where did the early Muslims meet secretly during the first years of preaching?", options: ["The house of Al-Arqam", "The Ka'bah", "The house of Abu Bakr", "Mount Safa"], answer: 0, explanation: "During the first three years of secret preaching, the early Muslims gathered in the house of Al-Arqam." },
      { q: "Who was the first martyr of Islam?", options: ["Bilal", "Sumayyah", "Hamzah", "Yasir"], answer: 1, explanation: "Sumayyah, the mother of Ammar, was tortured and killed for her faith and is regarded as the first martyr of Islam." }
    ],
    status: "published"
  },
  {
    id: "irs-08",
    subjectId: "irs",
    topic: "The Life of the Prophet Muhammad",
    subtopic: "The Hijrah, Madinah and the Prophet's leadership",
    title: "The Hijrah and the Prophet's Leadership in Madinah",
    order: 8,
    introduction: "After thirteen years of preaching in Makkah, the Prophet faced growing persecution, and in 622 CE he and his followers migrated to Madinah in the event known as the Hijrah. In Madinah he became both a prophet and a statesman: he built a mosque, united the Muhajirun and the Ansar in brotherhood, drew up the Constitution of Madinah, and led the Muslim community through battles, treaties and finally the peaceful conquest of Makkah. This lesson covers the Hijrah, his leadership in Madinah, the major battles and his Farewell Sermon.",
    objectives: ["Explain the causes of the Hijrah and the events of 622 CE", "Describe the Prophet's arrival in Madinah and the building of the mosque", "Explain the Constitution of Madinah and the brotherhood of Muhajirun and Ansar", "Describe the battles of Badr, Uhud and the Trench", "Explain the conquest of Makkah, the Farewell Sermon and the death of the Prophet in 632 CE"],
    sections: [
      {
        heading: "Persecution in Makkah and the Hijrah",
        body: "By the tenth year of prophethood, the Prophet had lost his two greatest protectors: his uncle Abu Talib and his wife Khadijah both died in 619 CE, a year known as the Year of Sorrow. The Quraysh then increased their persecution of the Muslims: they boycotted the Banu Hashim for three years, tortured slaves like Bilal, and plotted to kill the Prophet himself. The Prophet first sent some Muslims to Abyssinia, where the Christian king, the Negus, gave them refuge. He then visited Ta'if seeking support, but its people drove him away and pelted him with stones. Meanwhile, pilgrims from Yathrib (later Madinah) accepted Islam at Aqabah and invited the Prophet to their city, pledging to protect him. When the Quraysh learned of the plan, they plotted his assassination, but the Prophet left Makkah secretly with Abu Bakr in 622 CE, hiding in Cave Thawr for three days before travelling to Madinah. This migration, the Hijrah, marks the beginning of the Islamic calendar, because in Madinah Islam moved from a persecuted faith to an organised community and state."
      },
      {
        heading: "Madinah: Mosque, Brotherhood and Constitution",
        body: "On arriving in Madinah, the Prophet's first act was to build a mosque, the Masjid Nabawi, which served as a place of worship, a school, a court and a centre of government. He then established the Mu'akhah, the brotherhood between the Muhajirun, the emigrants from Makkah who had left their homes and property behind, and the Ansar, the helpers of Madinah who welcomed them. Each Ansar took a Muhajir as a brother, sharing his home, his wealth and even his inheritance, a bond so strong that the Qur'an praises the Ansar for preferring the emigrants over themselves (Qur'an 59:9). The Prophet also drew up the Constitution of Madinah, a written agreement binding the Muslim tribes, the Jewish tribes and other groups of the city into one community (ummah), with freedom of religion for the Jews, mutual defence of the city, and the Prophet as the final arbiter in disputes. It was the first written constitution in history and it shows the Prophet's skill as a statesman: he built a plural society held together by law and shared responsibility rather than by force alone."
      },
      {
        heading: "The Battles of Badr, Uhud and the Trench",
        body: "The Quraysh of Makkah, determined to destroy the new Muslim community, sent an army of about a thousand men against Madinah in 624 CE. The Muslims, only about 313 in number, met them at Badr and won a decisive victory, which the Qur'an describes as a day of divine help (Qur'an 8:17). A year later, in 625 CE, the Quraysh returned with three thousand men and defeated the Muslims at Uhud, after some Muslim archers left their post on the hill to collect booty, allowing Khalid ibn Walid to attack from behind; the Prophet was wounded and his uncle Hamzah was killed. The lesson of Uhud was the danger of disobeying the Prophet's orders and of love of worldly gain. In 627 CE the Quraysh, allied with several tribes, besieged Madinah with ten thousand men, but on the advice of Salman the Persian the Muslims dug a trench around the city, which the enemy's cavalry could not cross, and after a month the alliance broke up and withdrew. These battles established the Muslims as a power in Arabia and taught the community discipline, patience and trust in Allah in both victory and defeat."
      },
      {
        heading: "The Treaty of Hudaybiyyah and the Conquest of Makkah",
        body: "In 628 CE the Prophet set out with about 1,400 Muslims to perform the lesser pilgrimage (Umrah) in Makkah, but the Quraysh stopped them at Hudaybiyyah and a treaty was signed instead. The terms seemed unfavourable to the Muslims: they would return that year without entering Makkah, and any Makkan who joined them would be returned, while any Muslim who returned to Makkah would not be sent back. Yet the treaty brought ten years of peace, during which Islam spread rapidly across Arabia, and the Qur'an called it a clear victory (Qur'an 48:1). When the Quraysh broke the treaty by attacking an ally of the Muslims, the Prophet marched on Makkah in 630 CE with ten thousand men, and the city surrendered almost without bloodshed. The Prophet entered the Ka'bah, destroyed the idols, and declared: 'Truth has come and falsehood has vanished' (Qur'an 17:81). He then granted a general amnesty to the people of Makkah, including those who had persecuted him, saying, 'Go, for you are free.' The conquest of Makkah completed the Prophet's mission in Arabia and showed his mercy in victory."
      },
      {
        heading: "The Farewell Sermon and the Death of the Prophet",
        body: "In 632 CE, in the tenth year after the Hijrah, the Prophet performed his Farewell Pilgrimage (Hajj) with more than a hundred thousand Muslims, and on the plain of Arafat he delivered his Farewell Sermon. In it he declared that all Muslims are brothers, that no Arab is superior to a non-Arab and no white person to a black person except by piety and good deeds, that the blood and property of every person are sacred, that interest (riba) is abolished, that women must be treated with kindness, and that he was leaving behind two things, the Qur'an and his Sunnah, by which the Muslims would never go astray. Shortly after his return to Madinah, he fell ill, and on 12 Rabi al-Awwal in the year 11 AH (8 June 632 CE) he died in the house of his wife Aisha, at the age of sixty-three. His death shocked the community, and Abu Bakr calmed the people with the words: 'Whoever worshipped Muhammad, Muhammad has died; whoever worshipped Allah, Allah is alive and never dies.' The Prophet left no wealth and named no successor, and the community chose Abu Bakr as the first Caliph. His life remains the perfect example (uswah hasanah) for Muslims in faith, character and leadership."
      }
    ],
    definitions: [
      { term: "Hijrah", meaning: "The migration of the Prophet and his followers from Makkah to Madinah in 622 CE; the start of the Islamic calendar." },
      { term: "Muhajirun", meaning: "The emigrants who left Makkah for Madinah for the sake of Islam." },
      { term: "Ansar", meaning: "The helpers, the Muslims of Madinah who welcomed and supported the emigrants." },
      { term: "Mu'akhah", meaning: "The brotherhood established by the Prophet between the Muhajirun and the Ansar." },
      { term: "Constitution of Madinah", meaning: "The written agreement drawn up by the Prophet binding the tribes of Madinah into one community with mutual rights and duties." },
      { term: "Farewell Sermon", meaning: "The Prophet's final sermon on the plain of Arafat in 632 CE, summarising the principles of Islam." }
    ],
    examples: [
      {
        title: "Why the Hijrah marks the start of the Islamic calendar",
        problem: "Explain why the Islamic calendar begins in 622 CE rather than in the year of the Prophet's birth.",
        steps: ["Recall that the Prophet was born in 570 CE but the calendar starts in 622 CE.", "Note that the Hijrah in 622 CE was the move from Makkah to Madinah.", "Explain that in Madinah Islam became an organised community with a mosque, a constitution and a state.", "Conclude that the Hijrah, not the birth, was the turning point from a persecuted group to a community, so Umar chose it as the start of the calendar."],
        answer: "The Islamic calendar begins with the Hijrah in 622 CE because it was the turning point when Islam became an organised community and state in Madinah."
      },
      {
        title: "The lesson of the Battle of Uhud",
        problem: "A question asks what caused the Muslim defeat at Uhud. How would you answer?",
        steps: ["Recall that the Muslims were winning at first and the Quraysh began to retreat.", "Recall that the archers posted on the hill left their position to collect booty.", "Recall that Khalid ibn Walid then attacked the Muslims from behind.", "Conclude that the defeat was caused by disobedience to the Prophet's orders and love of worldly gain."],
        answer: "The defeat at Uhud was caused by the archers disobeying the Prophet's order to stay on the hill, allowing the enemy to attack from behind."
      }
    ],
    tips: ["Memorise the battle dates: Badr 624 CE, Uhud 625 CE, Trench 627 CE, conquest of Makkah 630 CE.", "Know the two groups in Madinah: Muhajirun (emigrants from Makkah) and Ansar (helpers of Madinah).", "The Treaty of Hudaybiyyah was signed in 628 CE and called a clear victory in Qur'an 48:1.", "The Farewell Sermon was delivered on the plain of Arafat in 632 CE."],
    mistakes: ["Saying the Hijrah happened in 610 CE; the Hijrah was in 622 CE, twelve years after the first revelation.", "Confusing Badr and Uhud; the Muslims won at Badr (624 CE) and lost at Uhud (625 CE).", "Saying the Prophet conquered Makkah by force and bloodshed; the conquest in 630 CE was almost bloodless and ended in a general amnesty.", "Saying the Prophet died in Makkah; he died in Madinah in 632 CE."],
    facts: ["The Hijrah took place in 622 CE and marks the beginning of the Islamic calendar (1 AH).", "The Prophet's first act in Madinah was to build the mosque, Masjid Nabawi.", "The Muslims numbered about 313 at the Battle of Badr in 624 CE.", "The Treaty of Hudaybiyyah was signed in 628 CE and brought ten years of peace.", "The Prophet died in Madinah in 632 CE at the age of 63."],
    quiz: [
      { q: "In which year did the Hijrah take place?", options: ["610 CE", "619 CE", "622 CE", "630 CE"], answer: 2, explanation: "The Prophet migrated from Makkah to Madinah in 622 CE, which is year 1 AH in the Islamic calendar." },
      { q: "Which year is known as the Year of Sorrow?", options: ["610 CE", "619 CE", "622 CE", "632 CE"], answer: 1, explanation: "619 CE is the Year of Sorrow, when both Abu Talib and Khadijah died." },
      { q: "To which country did the Prophet first send some Muslims for refuge?", options: ["Yemen", "Abyssinia", "Syria", "Egypt"], answer: 1, explanation: "The Prophet sent a group of Muslims to Abyssinia, where the Christian king, the Negus, gave them refuge." },
      { q: "Who accompanied the Prophet on the Hijrah to Madinah?", options: ["Umar", "Ali", "Abu Bakr", "Uthman"], answer: 2, explanation: "Abu Bakr accompanied the Prophet on the Hijrah; they hid together in Cave Thawr for three days." },
      { q: "What was the Prophet's first act on arriving in Madinah?", options: ["Drawing up the Constitution", "Building the mosque", "Fighting the Battle of Badr", "Appointing a governor"], answer: 1, explanation: "The Prophet's first act in Madinah was to build the mosque, Masjid Nabawi." },
      { q: "Who were the Muhajirun?", options: ["The Muslims of Madinah", "The emigrants from Makkah", "The Jewish tribes", "The traders of Syria"], answer: 1, explanation: "The Muhajirun were the Muslims who emigrated from Makkah to Madinah for the sake of Islam." },
      { q: "What was the Mu'akhah?", options: ["A battle", "The brotherhood between Muhajirun and Ansar", "A treaty with the Quraysh", "The first mosque"], answer: 1, explanation: "The Mu'akhah was the brotherhood the Prophet established between the Muhajirun and the Ansar of Madinah." },
      { q: "What did the Constitution of Madinah guarantee the Jewish tribes?", options: ["Freedom of religion", "Control of the mosque", "Exemption from all taxes", "Leadership of the city"], answer: 0, explanation: "The Constitution of Madinah guaranteed the Jewish tribes freedom of religion and bound all groups to the mutual defence of the city." },
      { q: "In which year was the Battle of Badr fought?", options: ["622 CE", "624 CE", "625 CE", "627 CE"], answer: 1, explanation: "The Battle of Badr was fought in 624 CE; about 313 Muslims defeated a Quraysh army of about a thousand." },
      { q: "What caused the Muslim defeat at the Battle of Uhud?", options: ["Lack of weapons", "The archers leaving their post", "A sandstorm", "Betrayal by the Ansar"], answer: 1, explanation: "At Uhud in 625 CE, archers left their post on the hill to collect booty, allowing Khalid ibn Walid to attack from behind." },
      { q: "Whose advice led to the digging of the trench around Madinah?", options: ["Bilal", "Salman the Persian", "Ali", "Umar"], answer: 1, explanation: "Salman the Persian advised digging a trench around Madinah, which stopped the enemy cavalry in 627 CE." },
      { q: "In which year was the Treaty of Hudaybiyyah signed?", options: ["624 CE", "626 CE", "628 CE", "630 CE"], answer: 2, explanation: "The Treaty of Hudaybiyyah was signed in 628 CE; the Qur'an calls it a clear victory (Qur'an 48:1)." },
      { q: "In which year was Makkah conquered?", options: ["627 CE", "628 CE", "630 CE", "632 CE"], answer: 2, explanation: "The Prophet conquered Makkah in 630 CE, entering the city almost without bloodshed and granting a general amnesty." },
      { q: "Where did the Prophet deliver his Farewell Sermon?", options: ["Mount Uhud", "The plain of Arafat", "Cave Hira", "The Ka'bah"], answer: 1, explanation: "The Farewell Sermon was delivered on the plain of Arafat during the Farewell Pilgrimage in 632 CE." },
      { q: "In which year did the Prophet die?", options: ["622 CE", "628 CE", "630 CE", "632 CE"], answer: 3, explanation: "The Prophet died in Madinah in 632 CE, at the age of sixty-three, shortly after the Farewell Pilgrimage." }
    ],
    status: "published"
  },
  {
    id: "irs-09",
    subjectId: "irs",
    topic: "The Caliphate and the Spread of Islam",
    subtopic: "The Rightly Guided Caliphs",
    title: "The Rightly Guided Caliphs",
    order: 9,
    introduction: "After the death of the Prophet in 632 CE, the Muslim community was led by four close companions known as the Rightly Guided Caliphs (Al-Khulafa ar-Rashidun): Abu Bakr, Umar, Uthman and Ali. In less than thirty years they preserved the unity of the community, compiled and standardised the Qur'an, and carried Islam from Arabia to Persia, the Levant, Egypt and North Africa. This lesson examines the achievements and the lessons of each Caliph.",
    objectives: ["Identify the four Rightly Guided Caliphs and their order", "Explain Abu Bakr's role in the Ridda wars and the compilation of the Qur'an", "Describe Umar's conquests, administration and the Hijri calendar", "Explain Uthman's standardisation of the Qur'an and the expansion of Islam", "Describe the challenges faced by Ali and the lessons of the period"],
    sections: [
      {
        heading: "Abu Bakr (632-634 CE): Holding the Community Together",
        body: "When the Prophet died in 632 CE, some tribes refused to pay zakat and others followed false prophets, threatening to break the young Muslim state apart. Abu Bakr, the Prophet's closest friend and the first adult male to accept Islam, was chosen as the first Caliph at Saqifah. He firmly refused to compromise, declaring that he would fight those who withheld zakat, and he sent armies under Khalid ibn Walid in the Ridda wars (wars of apostasy) to bring the rebellious tribes back into the community and to defeat the false prophets, including Musaylimah at the Battle of Yamamah. At Yamamah many memorisers of the Qur'an (huffaz) were killed, and Umar urged Abu Bakr to collect the Qur'an into one written volume so that it would not be lost. Abu Bakr appointed Zayd ibn Thabit, who had been a scribe of the Prophet, to gather the written fragments and the memories of the companions into a single manuscript, which was kept with Abu Bakr and later with Umar and his daughter Hafsah. Abu Bakr also began the conquest of Persia and Syria, sending armies to Iraq and the Levant before his death in 634 CE, after a reign of only two years. His lesson is firmness in crisis: he saved the unity of Islam when it seemed about to fall apart."
      },
      {
        heading: "Umar (634-644 CE): Expansion and Administration",
        body: "Umar ibn al-Khattab, the second Caliph, presided over the greatest expansion in early Islamic history. Under his leadership the Muslims defeated the Persian Empire at Qadisiyyah in 636 CE and Nahawand in 642 CE, and defeated the Byzantine Empire at Yarmuk in 636 CE, bringing Syria, Egypt, Iraq and Persia under Muslim rule. Jerusalem surrendered peacefully in 638 CE, and Umar himself travelled there to receive the city, granting its Christian inhabitants a covenant of protection (the Pact of Umar) that guaranteed their lives, property and churches. But Umar's greatness was not only in conquest: he was a brilliant administrator who organised the conquered lands into provinces with appointed governors, set up the diwan (register) for paying soldiers and officials, established the public treasury (bayt al-mal), built new garrison cities such as Kufa and Basra, and introduced the Hijri calendar, dating it from the Prophet's Hijrah in 622 CE. He walked the streets of Madinah at night to check on the people's welfare, and he famously said that if a dog died of hunger on the banks of the Euphrates, he would be responsible before Allah. He was assassinated in 644 CE by a Persian slave, Abu Lu'lu'ah. His lesson is that conquest without just administration is worthless."
      },
      {
        heading: "Uthman (644-656 CE): Standardisation of the Qur'an and Further Expansion",
        body: "Uthman ibn Affan, the third Caliph, was a wealthy merchant of Makkah, one of the earliest converts, and the son-in-law of the Prophet, married to two of his daughters in succession, which earned him the title Dhun-Nurayn, 'the Possessor of Two Lights'. Under Uthman, Islam spread further into North Africa, Cyprus and Central Asia, and he built the first Muslim navy, which defeated the Byzantines at the Battle of the Masts in 655 CE. His greatest achievement was the standardisation of the Qur'an. As Islam spread, Muslims in different regions began to recite the Qur'an with different readings, and disputes arose; at the urging of Hudhayfah ibn al-Yaman, Uthman appointed a committee under Zayd ibn Thabit to produce a single standard text based on the manuscript kept by Hafsah, written in the Quraysh dialect. Copies of this standard text (the Uthmanic codex) were sent to the major cities, and all other copies were ordered to be destroyed, so that the Qur'an has remained in one text ever since. In his later years Uthman was criticised for appointing relatives to office and for his handling of the treasury, and rebels from Egypt and Iraq besieged his house in Madinah and assassinated him in 656 CE while he was reading the Qur'an. His lesson is the importance of preserving the scripture and of accountability in leadership."
      },
      {
        heading: "Ali (656-661 CE): Challenges, Arbitration and the Khawarij",
        body: "Ali ibn Abi Talib, the Prophet's cousin and son-in-law, was the fourth and last Rightly Guided Caliph. He was the first male child to accept Islam, was known for his knowledge, courage and justice, and had been raised in the Prophet's own household. His caliphate was the most troubled of the four: he faced the demand that Uthman's killers be punished immediately, which led to the Battle of the Camel in 656 CE against a force led by Talhah, Zubayr and Aisha, and then to the long conflict with Mu'awiyah, the governor of Syria, which reached its climax at the Battle of Siffin in 657 CE. At Siffin, when Mu'awiyah's army raised copies of the Qur'an on their spears calling for arbitration, Ali accepted, but a group of his own supporters rejected arbitration, declaring 'judgement belongs to Allah alone', and left his camp: these were the Khawarij, who later assassinated him in 661 CE as he went to prayer in Kufa. Despite the civil strife, Ali is remembered for his scholarship, his sermons and sayings collected in Nahj al-Balaghah, and his uncompromising justice: he refused to use public funds for personal gain and treated friend and enemy alike before the law. His lesson is that unity and justice are the hardest tests of leadership, and that even the best leaders can be overwhelmed by division."
      },
      {
        heading: "The Legacy of the Rightly Guided Caliphs",
        body: "The period of the Rightly Guided Caliphs lasted only twenty-nine years, from 632 to 661 CE, yet it shaped Islam for all time. The four Caliphs were chosen by consultation (shura) rather than by inheritance, and each was a close companion of the Prophet who had lived the Qur'an and the Sunnah. Under them the Qur'an was collected and standardised, the Islamic state was built with provinces, treasuries and calendars, and Islam spread from Arabia across the Middle East and North Africa. The Prophet had said that his Sunnah and the Sunnah of the Rightly Guided Caliphs should be followed, and Muslims regard their period as the model of Islamic leadership: a leader is chosen by the community, is accountable to it, and rules by the Qur'an and the Sunnah. The tragic end of the period, with the assassination of three of the four Caliphs, also teaches that power must be held with humility and that the community must guard its unity. After Ali's death, Mu'awiyah founded the Umayyad dynasty, and the caliphate became hereditary, a change that marks the end of the Rightly Guided era."
      }
    ],
    definitions: [
      { term: "Caliph", meaning: "Successor to the Prophet as leader of the Muslim community; from the Arabic khalifah, meaning successor or deputy." },
      { term: "Al-Khulafa ar-Rashidun", meaning: "The Rightly Guided Caliphs, the first four Caliphs: Abu Bakr, Umar, Uthman and Ali." },
      { term: "Ridda wars", meaning: "The wars of apostasy fought under Abu Bakr to bring back tribes that refused zakat or followed false prophets." },
      { term: "Diwan", meaning: "The register set up by Umar for paying soldiers and officials of the Islamic state." },
      { term: "Bayt al-mal", meaning: "The public treasury of the Islamic state, established under Umar." },
      { term: "Khawarij", meaning: "The group that broke away from Ali after the arbitration at Siffin, declaring that judgement belongs to Allah alone." }
    ],
    examples: [
      {
        title: "Why Abu Bakr ordered the compilation of the Qur'an",
        problem: "Explain the link between the Battle of Yamamah and the compilation of the Qur'an.",
        steps: ["Recall that many memorisers of the Qur'an were killed at Yamamah during the Ridda wars.", "Note that Umar feared the Qur'an might be lost if more memorisers died.", "Recall that Abu Bakr appointed Zayd ibn Thabit to collect the written fragments and the memories of the companions.", "Conclude that the compilation preserved the Qur'an in one written volume."],
        answer: "The deaths of many memorisers at Yamamah showed the Qur'an could be lost, so Abu Bakr had Zayd ibn Thabit compile it into one written volume."
      },
      {
        title: "Umar's administrative reforms",
        problem: "A question asks for two ways Umar organised the Islamic state. How would you answer?",
        steps: ["Recall that the empire grew rapidly under Umar, covering Persia, Syria and Egypt.", "Name the diwan, the register for paying soldiers and officials.", "Name the bayt al-mal, the public treasury.", "Add the provinces with appointed governors and the Hijri calendar as further reforms."],
        answer: "Umar set up the diwan to pay soldiers and officials, established the bayt al-mal (public treasury), and organised the empire into provinces with governors."
      }
    ],
    tips: ["Memorise the order and dates: Abu Bakr 632-634, Umar 634-644, Uthman 644-656, Ali 656-661.", "Link each Caliph to one great act: Abu Bakr the compilation, Umar the administration, Uthman the standardisation, Ali the struggle for justice.", "Know the battles: Yamamah (Ridda wars), Qadisiyyah and Yarmuk (Umar), Siffin (Ali).", "Three of the four Caliphs were assassinated: Umar, Uthman and Ali; only Abu Bakr died a natural death."],
    mistakes: ["Saying Uthman compiled the Qur'an; Abu Bakr ordered the first compilation, Uthman produced the standard text.", "Confusing the Ridda wars with the battles against Persia; the Ridda wars were against rebellious Arab tribes.", "Saying the Hijri calendar was introduced by the Prophet; it was introduced by Umar, dated from the Hijrah.", "Saying Ali was the second Caliph; the order is Abu Bakr, Umar, Uthman, Ali."],
    facts: ["Abu Bakr reigned from 632 to 634 CE and fought the Ridda wars.", "Umar introduced the Hijri calendar, dated from the Hijrah in 622 CE.", "Uthman's standard text of the Qur'an is the text used by Muslims today.", "Ali was assassinated in 661 CE by a Kharijite in Kufa.", "The Rightly Guided Caliphate lasted from 632 to 661 CE."],
    quiz: [
      { q: "Who was the first Rightly Guided Caliph?", options: ["Umar", "Abu Bakr", "Uthman", "Ali"], answer: 1, explanation: "Abu Bakr was chosen as the first Caliph after the death of the Prophet in 632 CE." },
      { q: "What were the Ridda wars?", options: ["Wars against Persia", "Wars to bring back tribes that refused zakat or followed false prophets", "Wars against the Byzantines", "Wars over the succession"], answer: 1, explanation: "The Ridda wars were fought under Abu Bakr against tribes that refused to pay zakat or followed false prophets after the Prophet's death." },
      { q: "Who was appointed by Abu Bakr to compile the Qur'an?", options: ["Umar", "Uthman", "Zayd ibn Thabit", "Ali"], answer: 2, explanation: "Abu Bakr appointed Zayd ibn Thabit, a scribe of the Prophet, to gather the Qur'an into one written volume." },
      { q: "At which battle were many memorisers of the Qur'an killed, prompting its compilation?", options: ["Badr", "Yamamah", "Uhud", "Yarmuk"], answer: 1, explanation: "Many memorisers were killed at the Battle of Yamamah against Musaylimah, which led Umar to urge Abu Bakr to compile the Qur'an." },
      { q: "In which years did Umar reign as Caliph?", options: ["632-634 CE", "634-644 CE", "644-656 CE", "656-661 CE"], answer: 1, explanation: "Umar reigned from 634 to 644 CE, the period of the greatest early expansion of Islam." },
      { q: "Which battle in 636 CE opened Persia to the Muslims under Umar?", options: ["Yarmuk", "Qadisiyyah", "Siffin", "Nahawand"], answer: 1, explanation: "The Muslims defeated the Persians at Qadisiyyah in 636 CE, opening Iraq and Persia to Islam." },
      { q: "What is the diwan set up by Umar?", options: ["A mosque", "A register for paying soldiers and officials", "A law court", "A market"], answer: 1, explanation: "The diwan was the register Umar set up to record and pay the soldiers and officials of the Islamic state." },
      { q: "Who introduced the Hijri calendar?", options: ["The Prophet", "Abu Bakr", "Umar", "Uthman"], answer: 2, explanation: "Umar introduced the Hijri calendar, dating it from the Prophet's Hijrah in 622 CE." },
      { q: "What title was given to Uthman because he married two daughters of the Prophet?", options: ["Al-Amin", "Dhun-Nurayn", "Al-Faruq", "Asadullah"], answer: 1, explanation: "Uthman was called Dhun-Nurayn, 'the Possessor of Two Lights', because he married Ruqayyah and then Umm Kulthum, two daughters of the Prophet." },
      { q: "What was Uthman's greatest achievement for the Qur'an?", options: ["Writing the first verses", "Producing a single standard text sent to all cities", "Translating it into Persian", "Memorising it first"], answer: 1, explanation: "Uthman produced a single standard text of the Qur'an and sent copies to the major cities, ending disputes over different readings." },
      { q: "In which year was Uthman assassinated?", options: ["644 CE", "656 CE", "661 CE", "632 CE"], answer: 1, explanation: "Uthman was assassinated in 656 CE by rebels who besieged his house in Madinah." },
      { q: "Who was the fourth Rightly Guided Caliph?", options: ["Mu'awiyah", "Ali", "Hasan", "Umar"], answer: 1, explanation: "Ali ibn Abi Talib was the fourth Rightly Guided Caliph, reigning from 656 to 661 CE." },
      { q: "At which battle did Mu'awiyah's army raise copies of the Qur'an on spears, calling for arbitration?", options: ["The Camel", "Siffin", "Yarmuk", "Qadisiyyah"], answer: 1, explanation: "At the Battle of Siffin in 657 CE, Mu'awiyah's army raised Qur'ans on spears and called for arbitration." },
      { q: "Who were the Khawarij?", options: ["The governors of Syria", "The group that broke away from Ali after the arbitration at Siffin", "The scribes of the Qur'an", "The traders of Makkah"], answer: 1, explanation: "The Khawarij were the group that left Ali's camp after Siffin, rejecting arbitration and declaring that judgement belongs to Allah alone." },
      { q: "Which Caliph died a natural death rather than by assassination?", options: ["Umar", "Uthman", "Ali", "Abu Bakr"], answer: 3, explanation: "Abu Bakr died a natural death in 634 CE; Umar, Uthman and Ali were all assassinated." }
    ],
    status: "published"
  },
  {
    id: "irs-10",
    subjectId: "irs",
    topic: "The Caliphate and the Spread of Islam",
    subtopic: "The spread of Islam in West Africa and Nigeria",
    title: "The Spread of Islam in West Africa and Nigeria",
    order: 10,
    introduction: "Islam reached West Africa through the trans-Saharan trade routes, carried by Muslim traders and scholars from North Africa from about the 8th century onwards. It took root in the great empires of Mali and Songhai, spread through Hausaland and Kanem-Bornu, and was renewed in the 19th century by the Sokoto jihad of Usman dan Fodio. From the north it spread into Yorubaland, shaping the religion, education, law and culture of Nigeria to this day. This lesson traces that long journey.",
    objectives: ["Explain how trans-Saharan trade brought Islam to West Africa", "Describe the role of Mansa Musa and Askia Muhammad in the Mali and Songhai empires", "Explain the spread of Islam in Hausaland and Kanem-Bornu", "Describe the Sokoto jihad of Usman dan Fodio in 1804 and the Sokoto Caliphate", "Explain the spread of Islam in Yorubaland and its influence on Nigerian society"],
    sections: [
      {
        heading: "Trans-Saharan Trade and the Arrival of Islam",
        body: "Islam first reached West Africa not by conquest but by trade. From the 8th century onwards, Muslim traders from North Africa crossed the Sahara in camel caravans, carrying salt, cloth and goods from the north and returning with gold from the mines of West Africa. The great trade routes linked Sijilmasa and other North African towns with the trading cities of the Sudan, such as Ghana, Timbuktu and Gao. The traders were often devout Muslims, and as they settled in trading towns they built mosques, taught the Qur'an and set an example of honest dealing. Local rulers welcomed them because they brought wealth and literacy: Muslim scholars could read and write Arabic, keep records and advise kings. The rulers of the ancient Ghana Empire tolerated Islam, and by the 11th century some rulers, such as the kings of Takrur, had accepted it. Islam spread peacefully, town by town, following the trade routes, and it was the traders and the scholars, rather than armies, who first planted the faith in West Africa."
      },
      {
        heading: "Mali and Songhai: Mansa Musa and Askia Muhammad",
        body: "Islam reached its first great height in West Africa in the Mali Empire. Its most famous ruler, Mansa Musa, reigned from 1312 to 1337 CE and was a devout Muslim. In 1324 he made the pilgrimage to Makkah with a huge entourage, carrying so much gold that his spending in Cairo caused the price of gold to fall for years; his journey made Mali famous across the Muslim world and attracted scholars and traders to his capital. He built mosques, including the great mosque of Timbuktu, and made Timbuktu and Gao centres of Islamic learning. After Mali declined, the Songhai Empire rose under Askia Muhammad, who reigned from 1493 to 1528 CE. He too made the pilgrimage to Makkah, where the Sharif of Makkah recognised him as Caliph of the Sudan, and he returned with the scholar Al-Maghili, who advised him on Islamic government. Askia organised his empire on Islamic lines, appointed qadis (judges) to administer Shariah, built mosques and schools, and supported the scholars of Timbuktu, whose university, Sankore, became one of the great centres of learning in the world. Under Mansa Musa and Askia Muhammad, Islam in West Africa was not only a religion but a civilisation of learning, law and trade."
      },
      {
        heading: "Islam in Hausaland and Kanem-Bornu",
        body: "Islam spread eastwards from Mali and Songhai into Hausaland and the Kanem-Bornu Empire, carried by traders, scholars and pilgrims. In Hausaland, Islam arrived through the trade routes from the north and west, and by the 14th and 15th centuries it had taken root in the city-states of Kano, Katsina, Zaria and Gobir. The rulers of Kano, such as Muhammad Rumfa (1463-1499), welcomed Muslim scholars, built mosques, introduced Shariah courts and made Islam the religion of the court, although many ordinary people continued to practise traditional religion alongside it. Katsina became a famous centre of Islamic scholarship, attracting students from across the Sudan. In Kanem-Bornu, to the east of Hausaland, Islam had arrived even earlier, by the 11th century, under Mai Hume, and it was strengthened under Mai Idris Alooma (1571-1603), who built mosques, employed Muslim scholars and used Islam to unify his empire. The Wangarawa traders from Mali and the scholars who travelled between Timbuktu, Kano and Borno created a network of learning across the region, and by the 18th century Islam was firmly established in the north, even though its practice was often mixed with local customs, a mixture that later reformers would challenge."
      },
      {
        heading: "The Sokoto Jihad and the Sokoto Caliphate",
        body: "By the end of the 18th century, many Muslims in Hausaland believed that Islam had become mixed with un-Islamic practices and that the Hausa rulers, though Muslim in name, were unjust and oppressive. The reformer Usman dan Fodio, a Fulani scholar born in Gobir in 1754, preached a return to pure Islam, taught in Hausa and Fulfulde, and gathered a large following of scholars, students and the poor. When the ruler of Gobir, Yunfa, tried to suppress his movement, Usman dan Fodio declared a jihad in 1804, and his followers, the jihadists, defeated the Hausa states one after another. By 1808 they had taken Gobir, Kano, Katsina, Zaria and other city-states, and Usman dan Fodio founded the Sokoto Caliphate, with its capital at Sokoto, the largest empire in West Africa at the time. The Caliphate was organised into emirates, each under an emir, with Shariah law, Islamic schools, a system of taxation based on zakat, and a flourishing scholarly tradition led by Usman dan Fodio, his brother Abdullahi and his son Muhammad Bello, who succeeded him as Sultan in 1817. The Sokoto Caliphate united the north under one Islamic government and is the foundation of Islam in northern Nigeria today; the Sultan of Sokoto remains the spiritual leader of Nigerian Muslims."
      },
      {
        heading: "Islam in Yorubaland and Its Influence on Nigeria",
        body: "Islam reached Yorubaland from the north, through Hausa and Nupe traders and scholars, and from the 17th and 18th centuries it spread into the Yoruba towns of Oyo, Ilorin, Ijebu and Lagos. Ilorin became an important centre: it was founded as a Yoruba town but came under the influence of the Sokoto Caliphate in the early 19th century, and its emirs ruled under the Sultan of Sokoto, making it a bridge between the north and the south-west. In Yorubaland, Islam spread peacefully through trade, intermarriage and the work of scholars, and Yoruba Muslims kept much of their Yoruba culture and language while adopting Islamic worship, dress and education. The first mosques were built in towns like Iwo and Lagos, and Qur'anic schools (ile kewu) taught children to read the Qur'an. Islam's influence on Nigerian society has been deep: it brought literacy in Arabic and the Ajami script, in which Hausa and Yoruba were written in Arabic letters; it introduced Shariah courts and Islamic law; it shaped trade, dress, naming and festivals, including the Eid celebrations; and it built a tradition of scholarship that continues in the Islamic schools and universities of Nigeria today. Nigeria is now home to one of the largest Muslim populations in the world, and the history of Islam in West Africa explains how that came to be."
      }
    ],
    definitions: [
      { term: "Trans-Saharan trade", meaning: "The trade across the Sahara Desert linking North Africa with West Africa, carrying salt north to south and gold south to north, along which Islam spread." },
      { term: "Mansa", meaning: "King or emperor in the Mali Empire; Mansa Musa was its most famous ruler." },
      { term: "Qadi", meaning: "A judge who administers Islamic law (Shariah) in a Muslim community." },
      { term: "Jihad", meaning: "Struggle in the way of Allah; in this lesson, Usman dan Fodio's 1804 campaign to reform Islam and establish just Islamic rule." },
      { term: "Sokoto Caliphate", meaning: "The Islamic empire founded by Usman dan Fodio in 1804, with its capital at Sokoto, uniting much of northern Nigeria under Shariah." },
      { term: "Ile kewu", meaning: "A Qur'anic school in Yorubaland where children learn to read and memorise the Qur'an." }
    ],
    examples: [
      {
        title: "How trade spread Islam to West Africa",
        problem: "Explain why Islam first reached West Africa through traders rather than armies.",
        steps: ["Recall that Muslim traders crossed the Sahara in caravans carrying salt and goods.", "Note that they settled in trading towns, built mosques and taught the Qur'an.", "Note that rulers welcomed them for their wealth, literacy and honest dealing.", "Conclude that Islam spread peacefully along the trade routes, town by town."],
        answer: "Islam reached West Africa through Muslim traders who settled in trading towns, built mosques, taught the Qur'an and impressed rulers with their honesty and literacy."
      },
      {
        title: "The causes of the Sokoto jihad",
        problem: "A question asks why Usman dan Fodio declared jihad in 1804. How would you answer?",
        steps: ["Recall that many Hausa rulers were Muslim in name but unjust and oppressive.", "Note that Islamic practice had become mixed with un-Islamic customs.", "Recall that Usman dan Fodio preached a return to pure Islam and gathered a large following.", "Note that the ruler of Gobir, Yunfa, tried to suppress his movement.", "Conclude that the jihad aimed to reform Islam and establish just Islamic rule."],
        answer: "Usman dan Fodio declared jihad in 1804 to reform Islam, which had become mixed with un-Islamic practices, and to replace unjust Hausa rulers with just Islamic government."
      }
    ],
    tips: ["Memorise the key dates: Mansa Musa's pilgrimage 1324, Askia Muhammad 1493-1528, Sokoto jihad 1804.", "Link each empire to its ruler: Mali to Mansa Musa, Songhai to Askia Muhammad, Sokoto to Usman dan Fodio.", "Know the trade goods: salt from the north, gold from the south.", "Remember that Islam came to West Africa by trade and scholarship, not by conquest."],
    mistakes: ["Saying Islam came to West Africa by military conquest; it came mainly through trade and scholars.", "Confusing Mansa Musa with Askia Muhammad; Mansa Musa ruled Mali (1312-1337), Askia Muhammad ruled Songhai (1493-1528).", "Saying the Sokoto jihad was in 1808; the jihad was declared in 1804, and the Hausa states were taken by 1808.", "Saying Ilorin was always a northern emirate; it began as a Yoruba town and came under Sokoto's influence in the 19th century."],
    facts: ["Muslim traders brought Islam to West Africa along the trans-Saharan trade routes from the 8th century onwards.", "Mansa Musa made his famous pilgrimage to Makkah in 1324.", "Askia Muhammad ruled Songhai from 1493 to 1528 and made Timbuktu a centre of learning.", "Usman dan Fodio declared the Sokoto jihad in 1804.", "The Sultan of Sokoto remains the spiritual leader of Nigerian Muslims today."],
    quiz: [
      { q: "How did Islam first reach West Africa?", options: ["By military conquest", "Through trans-Saharan trade", "Through European missionaries", "Through the Atlantic slave trade"], answer: 1, explanation: "Islam first reached West Africa through Muslim traders crossing the Sahara in caravans from North Africa from about the 8th century onwards." },
      { q: "Which goods did the trans-Saharan traders carry from the north?", options: ["Gold", "Salt and cloth", "Ivory", "Kola nuts"], answer: 1, explanation: "Traders carried salt, cloth and other goods from North Africa southwards, and returned with gold from West Africa." },
      { q: "Which empire did Mansa Musa rule?", options: ["Songhai", "Ghana", "Mali", "Kanem-Bornu"], answer: 2, explanation: "Mansa Musa ruled the Mali Empire from 1312 to 1337 CE." },
      { q: "In which year did Mansa Musa make his famous pilgrimage to Makkah?", options: ["1312", "1324", "1493", "1804"], answer: 1, explanation: "Mansa Musa made his pilgrimage to Makkah in 1324, carrying so much gold that his spending in Cairo lowered the price of gold." },
      { q: "Which city became a great centre of Islamic learning under Mansa Musa?", options: ["Kano", "Timbuktu", "Sokoto", "Ilorin"], answer: 1, explanation: "Mansa Musa built mosques in Timbuktu and made it, with Gao, a centre of Islamic learning." },
      { q: "Who ruled the Songhai Empire from 1493 to 1528?", options: ["Mansa Musa", "Askia Muhammad", "Usman dan Fodio", "Mai Idris Alooma"], answer: 1, explanation: "Askia Muhammad ruled Songhai from 1493 to 1528, organising it on Islamic lines and supporting the scholars of Timbuktu." },
      { q: "What did Askia Muhammad bring back from his pilgrimage to Makkah?", options: ["Gold", "The scholar Al-Maghili", "An army", "A new mosque"], answer: 1, explanation: "Askia Muhammad returned from Makkah with the scholar Al-Maghili, who advised him on Islamic government." },
      { q: "Which Hausa ruler welcomed Muslim scholars and built mosques in Kano?", options: ["Muhammad Rumfa", "Yunfa", "Mai Hume", "Usman dan Fodio"], answer: 0, explanation: "Muhammad Rumfa, who ruled Kano from 1463 to 1499, welcomed Muslim scholars, built mosques and introduced Shariah courts." },
      { q: "Under which ruler was Islam strengthened in Kanem-Bornu?", options: ["Mansa Musa", "Mai Idris Alooma", "Askia Muhammad", "Muhammad Bello"], answer: 1, explanation: "Mai Idris Alooma (1571-1603) built mosques, employed Muslim scholars and used Islam to unify Kanem-Bornu." },
      { q: "In which year did Usman dan Fodio declare the Sokoto jihad?", options: ["1754", "1804", "1808", "1817"], answer: 1, explanation: "Usman dan Fodio declared the jihad in 1804, after the ruler of Gobir, Yunfa, tried to suppress his reform movement." },
      { q: "Who succeeded Usman dan Fodio as Sultan of Sokoto?", options: ["Abdullahi", "Yunfa", "Muhammad Bello", "Mai Idris Alooma"], answer: 2, explanation: "Muhammad Bello, Usman dan Fodio's son, succeeded him as Sultan of Sokoto in 1817." },
      { q: "What was the capital of the Sokoto Caliphate?", options: ["Kano", "Gobir", "Sokoto", "Katsina"], answer: 2, explanation: "The Sokoto Caliphate had its capital at Sokoto, and it united much of northern Nigeria under Islamic rule." },
      { q: "How did Islam mainly spread in Yorubaland?", options: ["By the Sokoto army conquering Yoruba towns", "Peacefully through trade, intermarriage and scholars", "Through British missionaries", "Through the Atlantic trade"], answer: 1, explanation: "Islam spread in Yorubaland peacefully through Hausa and Nupe traders and scholars, trade, intermarriage and Qur'anic schools." },
      { q: "What is an ile kewu?", options: ["A market in Lagos", "A Qur'anic school in Yorubaland", "A palace in Oyo", "A mosque in Kano"], answer: 1, explanation: "An ile kewu is a Qur'anic school in Yorubaland where children learn to read and memorise the Qur'an." },
      { q: "Who remains the spiritual leader of Nigerian Muslims today?", options: ["The Emir of Kano", "The Ooni of Ife", "The Sultan of Sokoto", "The Emir of Ilorin"], answer: 2, explanation: "The Sultan of Sokoto, successor to Usman dan Fodio's Caliphate, remains the spiritual leader of Nigerian Muslims." }
    ],
    status: "published"
  },
{
    id: "irs-11",
    subjectId: "irs",
    topic: "Islamic Jurisprudence (Shariah)",
    subtopic: "Sources of Shariah",
    title: "The Sources of Islamic Law",
    order: 11,
    introduction: "Shariah is the Islamic legal and moral framework that guides the life of a Muslim. It is not a single book of laws but a system built on revealed sources and the reasoning of qualified scholars. This lesson explains the sources of Shariah, their order of authority, and how rulings are derived when a new question arises.",
    objectives: ["Identify the primary and secondary sources of Shariah", "Explain the authority of the Qur'an as the first source of Islamic law", "Describe the role of the Sunnah and Hadith in explaining the Qur'an", "Explain Ijma (consensus) and Qiyas (analogical reasoning)", "Explain Ijtihad and how a ruling is derived from the sources in order", "State the hierarchy of the sources of Shariah"],
    sections: [
      {
        heading: "What Shariah Is",
        body: "Shariah means the path or the way, and in Islamic usage it is the body of guidance from Allah that covers worship, personal conduct, family life, business and public affairs. It is wider than what a modern court calls law, because it also includes moral and spiritual duties. The two revealed sources are the Qur'an and the Sunnah. When a question is not answered directly in either, scholars turn to the secondary sources: Ijma, the consensus of qualified scholars, and Qiyas, reasoning by analogy. Ijtihad is the disciplined effort a qualified scholar makes to reach a ruling from these sources. No scholar's opinion ranks above the Qur'an or the authentic Sunnah, and a ruling that clearly contradicts a text of the Qur'an or an authentic Hadith is not accepted."
      },
      {
        heading: "The Qur'an: The Primary Source",
        body: "The Qur'an is the first and highest source of Shariah because Muslims believe it is the direct word of Allah revealed to Prophet Muhammad (SAW). Its legal verses cover worship such as prayer, fasting, Zakat and Hajj, family matters such as marriage, divorce and inheritance, commercial dealings such as the prohibition of Riba (interest), and crimes and their punishments. However, most Qur'anic verses give general principles rather than every detail. For example, the Qur'an commands prayer and Zakat but does not spell out the number of units of each prayer or the exact rates of Zakat in full detail. That is why the Qur'an is always read together with the Sunnah, which explains and applies it. Where the Qur'an gives a clear ruling, that ruling is final and cannot be set aside by consensus, analogy or personal opinion."
      },
      {
        heading: "The Sunnah and Hadith: The Second Source",
        body: "The Sunnah is the practice, teaching and approved example of Prophet Muhammad (SAW), preserved mainly through Hadith reports. It is the second source of Shariah and the living explanation of the Qur'an. The Prophet showed Muslims how to pray, how to fast, how to perform Hajj, how to pay Zakat and how to conduct trade and family life. The Qur'an itself commands Muslims to obey the Messenger, so the Sunnah carries divine authority in matters of law. Scholars of Hadith grade reports by the reliability of their chains of transmission and their texts, and only authentic reports are used as a basis for law. A weak or fabricated report cannot establish a ruling. The Sunnah can explain a Qur'anic verse, give details it leaves out, and in some cases give rulings on matters the Qur'an does not mention directly, as long as they do not contradict the Qur'an."
      },
      {
        heading: "Ijma and Qiyas: Consensus and Analogy",
        body: "Ijma is the agreement of the qualified scholars (mujtahidun) of the Muslim community on a legal ruling in a particular age. It is accepted as a source because the Prophet is reported to have said that his community would not agree upon error, and because consensus protects the community from divided and unstable rulings. A famous early example is the consensus of the Companions on compiling the Qur'an into a single written text under Abu Bakr and later under Uthman. Qiyas is analogical reasoning: a ruling for a new case is reached by comparing it with a case already ruled on in the Qur'an or Sunnah, because both share the same effective cause, called the illah. The classic example is the prohibition of intoxicants: the Qur'an forbids wine (khamr) because it intoxicates, so by Qiyas other intoxicating substances are also forbidden, since they share the same cause. Qiyas is used only when no direct text and no consensus covers the new case, and the analogy must be sound and based on a clear shared cause."
      },
      {
        heading: "Ijtihad and the Hierarchy of Sources",
        body: "Ijtihad is the sincere, qualified effort of a scholar to derive a ruling from the sources, using knowledge of the Qur'an, the Sunnah, Arabic, consensus and analogy. It is needed because new situations constantly arise that the earliest generations never faced, such as modern banking, organ transplants and digital contracts. The hierarchy of sources is fixed: first the Qur'an, then the Sunnah, then Ijma, then Qiyas, and Ijtihad is the method used to work through them in that order. A scholar must never begin with personal opinion or with analogy when a clear text exists. Because scholars may differ in their understanding, the different schools of thought (madhahib) sometimes reach different rulings on the same question, and these differences are respected as long as each view is based on evidence from the sources. For JAMB, learn the names, definitions and order of the sources, not the details of disputed rulings."
      }
    ],
    definitions: [
      { term: "Shariah", meaning: "The Islamic legal and moral framework derived from the Qur'an, the Sunnah and the reasoning of qualified scholars." },
      { term: "Sunnah", meaning: "The practice, teachings and approved example of Prophet Muhammad (SAW), preserved mainly through Hadith." },
      { term: "Hadith", meaning: "A report of what the Prophet Muhammad (SAW) said, did or approved, transmitted through a chain of narrators." },
      { term: "Ijma", meaning: "The consensus or agreement of the qualified scholars of the Muslim community on a legal ruling in a particular age." },
      { term: "Qiyas", meaning: "Analogical reasoning: applying the ruling of a known case to a new case that shares the same effective cause (illah)." },
      { term: "Ijtihad", meaning: "The disciplined effort of a qualified scholar to derive a ruling from the sources of Shariah." }
    ],
    examples: [
      {
        title: "Deriving a ruling by Qiyas",
        problem: "The Qur'an forbids wine because it intoxicates. A new intoxicating drink appears that is not named in the Qur'an. How is its ruling derived?",
        steps: ["Identify the original case: wine (khamr) is forbidden in the Qur'an.", "Find the effective cause (illah): intoxication.", "Check the new case: the new drink also intoxicates.", "Apply the same ruling by analogy (Qiyas), since the cause is the same.", "Conclude that the new drink is also forbidden."],
        answer: "By Qiyas, the new intoxicating drink is forbidden because it shares the same cause, intoxication, as wine."
      },
      {
        title: "Applying the hierarchy of sources",
        problem: "A scholar is asked whether a certain business practice is lawful. In what order should he consult the sources?",
        steps: ["First, look for a ruling in the Qur'an.", "If the Qur'an does not settle it, look to the Sunnah and authentic Hadith.", "If there is no direct text, check whether the scholars have reached a consensus (Ijma).", "If there is no consensus, use Qiyas by comparing it with a similar case ruled on in the texts.", "Use Ijtihad throughout as the method of working through the sources in this order."],
        answer: "The order is Qur'an, then Sunnah, then Ijma, then Qiyas, with Ijtihad as the method of deriving the ruling."
      }
    ],
    tips: ["Learn the hierarchy in order: Qur'an, Sunnah, Ijma, Qiyas — and remember Ijtihad is the method, not a separate text.", "Link Qiyas to its classic example: wine is forbidden because it intoxicates, so other intoxicants are forbidden too.", "Do not confuse Ijma (consensus of scholars) with Ijtihad (a scholar's effort to derive a ruling).", "Remember the Qur'an is the primary source because it is the direct word of Allah."],
    mistakes: ["Saying the Sunnah ranks above the Qur'an; the Qur'an is the first and highest source.", "Confusing Ijma and Qiyas: Ijma is agreement, Qiyas is reasoning by analogy.", "Thinking Ijtihad means personal opinion; it is disciplined reasoning by a qualified scholar from the sources.", "Using Qiyas when a clear Qur'anic text already answers the question."],
    facts: ["The Qur'an is the primary source of Shariah.", "The Sunnah explains and applies the Qur'an.", "Ijma is the consensus of qualified scholars in a particular age.", "Qiyas applies a ruling to a new case that shares the same effective cause (illah).", "The hierarchy of sources is Qur'an, Sunnah, Ijma, then Qiyas."],
    quiz: [
      { q: "Which is the primary source of Shariah?", options: ["The Qur'an", "Ijma", "Qiyas", "The opinion of a judge"], answer: 0, explanation: "The Qur'an is the first and highest source of Shariah because it is the word of Allah." },
      { q: "What does the term Sunnah mean?", options: ["The practice and teachings of Prophet Muhammad (SAW)", "The consensus of scholars", "Analogical reasoning", "A book of poetry"], answer: 0, explanation: "The Sunnah is the practice, teaching and approved example of Prophet Muhammad (SAW)." },
      { q: "Through what are the teachings of the Prophet mainly preserved?", options: ["Hadith reports", "Folk tales", "Royal decrees", "Newspaper records"], answer: 0, explanation: "The Sunnah is preserved mainly through Hadith reports transmitted through chains of narrators." },
      { q: "What is Ijma?", options: ["The consensus of qualified scholars on a ruling", "A single scholar's opinion", "A type of prayer", "A commercial contract"], answer: 0, explanation: "Ijma is the agreement of the qualified scholars of the Muslim community on a legal ruling in a particular age." },
      { q: "What is Qiyas?", options: ["Analogical reasoning from a known case to a new case", "The compilation of the Qur'an", "A form of charity", "A pilgrimage rite"], answer: 0, explanation: "Qiyas is reasoning by analogy: a ruling is applied to a new case that shares the same effective cause as a case already ruled on." },
      { q: "In Qiyas, what is the illah?", options: ["The effective cause shared by the old and new cases", "The name of a scholar", "The punishment for a crime", "A type of consensus"], answer: 0, explanation: "The illah is the effective cause, such as intoxication, that links the new case to the case already ruled on." },
      { q: "Why is wine forbidden in Islam, according to the reasoning used in Qiyas?", options: ["Because it intoxicates", "Because it is expensive", "Because it is imported", "Because it is red in colour"], answer: 0, explanation: "Wine is forbidden because it intoxicates, so by Qiyas other intoxicating substances are also forbidden." },
      { q: "What is Ijtihad?", options: ["The disciplined effort of a qualified scholar to derive a ruling", "The blind following of custom", "A government decree", "A form of worship"], answer: 0, explanation: "Ijtihad is the sincere, qualified effort of a scholar to derive a ruling from the sources of Shariah." },
      { q: "What is the correct order of the sources of Shariah?", options: ["Qur'an, Sunnah, Ijma, Qiyas", "Sunnah, Qur'an, Qiyas, Ijma", "Ijma, Qiyas, Qur'an, Sunnah", "Qiyas, Ijma, Sunnah, Qur'an"], answer: 0, explanation: "The hierarchy is the Qur'an first, then the Sunnah, then Ijma, then Qiyas." },
      { q: "Why does the Sunnah rank second after the Qur'an?", options: ["Because it explains and applies the Qur'an", "Because it is older than the Qur'an", "Because it replaces the Qur'an", "Because scholars prefer it"], answer: 0, explanation: "The Sunnah is the living explanation of the Qur'an, showing how its commands are carried out." },
      { q: "Which of these is an example of Ijma?", options: ["The Companions agreeing to compile the Qur'an into one text", "A trader fixing his own price", "A scholar writing a poem", "A king issuing a tax"], answer: 0, explanation: "The consensus of the Companions on compiling the Qur'an into a single written text is a classic example of Ijma." },
      { q: "When is Qiyas used?", options: ["When no direct text or consensus covers the new case", "Before consulting the Qur'an", "To replace a clear Qur'anic ruling", "Only for matters of worship"], answer: 0, explanation: "Qiyas is used only when no direct text in the Qur'an or Sunnah and no consensus covers the new case." },
      { q: "Which type of Hadith may be used as a basis for law?", options: ["An authentic Hadith", "A fabricated Hadith", "A weak Hadith with no support", "A report with no chain of narrators"], answer: 0, explanation: "Only authentic Hadith reports are used as a basis for law; weak or fabricated reports cannot establish a ruling." },
      { q: "Why do the different schools of thought sometimes give different rulings?", options: ["Because scholars may differ in their understanding of the evidence", "Because they use different Qur'ans", "Because they reject the Sunnah", "Because they do not know the sources"], answer: 0, explanation: "Scholars may differ in interpreting the evidence, so the schools of thought sometimes reach different rulings, which are respected when based on evidence." },
      { q: "A ruling that clearly contradicts a text of the Qur'an should be treated how?", options: ["It is not accepted", "It is accepted if a scholar said it", "It is accepted if it is popular", "It is accepted if it is old"], answer: 0, explanation: "A ruling that clearly contradicts the Qur'an or an authentic Hadith is not accepted, whatever its source." }
    ],
    status: "published"
  },
  {
    id: "irs-12",
    subjectId: "irs",
    topic: "Islamic Jurisprudence (Shariah)",
    subtopic: "Shariah in daily life",
    title: "Shariah in Daily Life",
    order: 12,
    introduction: "Shariah is not only a subject for scholars and courts; it guides the everyday life of a Muslim, from prayer and fasting to marriage, business and dealings with neighbours. This lesson outlines how Shariah applies to worship, family life, commerce and crime, and explains the objectives of Shariah, the Maqasid, which lie behind all its rulings.",
    objectives: ["Explain how Shariah guides worship (Ibadah)", "Describe the main rulings of Islamic family law", "Explain the prohibition of Riba and the rules of halal trade", "Outline the categories of criminal law: Hudud, Qisas and Ta'zir", "Explain the five objectives of Shariah (Maqasid)", "Relate the Maqasid to everyday rulings"],
    sections: [
      {
        heading: "Worship (Ibadah)",
        body: "Ibadah is worship, and its rulings cover the five pillars of Islam: the declaration of faith (Shahadah), the five daily prayers (Salah), Zakat, fasting in Ramadan (Sawm) and Hajj. Shariah fixes the conditions, times and methods of worship: for example, prayer requires ritual purity (wudu), facing the Qiblah, and praying at the prescribed times, while fasting requires abstaining from food, drink and marital relations from dawn to sunset in Ramadan. These rulings are not arbitrary; they train discipline, humility and constant remembrance of Allah. Acts of worship are judged by intention as well as by outward correctness, so a Muslim performs them sincerely for Allah alone. Where a person is unable to perform an act as prescribed, for example because of sickness or travel, Shariah provides concessions, such as shortening prayers while travelling or breaking the fast when ill."
      },
      {
        heading: "Family Law: Marriage, Divorce and Inheritance",
        body: "Family law is one of the most detailed areas of Shariah. Marriage (Nikah) is a contract between a man and a woman, made with the consent of both parties, in the presence of witnesses, and with a dower (mahr) given by the husband to the wife. Polygamy is permitted, with a limit of four wives, on the strict condition of justice between them. Divorce (Talaq) is permitted but described in Hadith as the most disliked of lawful things, and Shariah sets out procedures, waiting periods (iddah) and the rights of both parties. After divorce, the wife's rights, including maintenance during the waiting period, are protected. Inheritance (Mirath) is fixed in detail in the Qur'an, notably in Surah an-Nisa, with set shares for spouses, children, parents and other relatives, and a will (wasiyyah) may dispose of up to one-third of the estate. These rules protect the family, the rights of women and children, and the fair distribution of wealth."
      },
      {
        heading: "Commercial Transactions and the Prohibition of Riba",
        body: "Shariah encourages honest trade and forbids exploitation in business. A lawful sale requires mutual consent, a lawful item, a clear price and a known subject of sale; uncertainty (gharar) and cheating are forbidden. Riba, usually understood as interest or usury, is strictly prohibited in the Qur'an, because it allows one party to profit without sharing risk and can exploit the borrower. That is why Islamic finance uses profit-sharing, leasing and cost-plus sales instead of interest-bearing loans. Hoarding goods to raise prices, false oaths in selling, and giving short measure are all condemned. Trade must be halal in both the goods sold and the way the deal is done: selling alcohol, pork or other forbidden items is not lawful, and neither is a deal built on gambling or deception. These rules aim to make the market fair and trustworthy."
      },
      {
        heading: "Criminal Law: Hudud, Qisas and Ta'zir",
        body: "Islamic criminal law is divided into three categories. Hudud are offences with punishments fixed in the Qur'an or Sunnah, such as theft, adultery, false accusation of adultery, drinking intoxicants, apostasy and highway robbery. Because the punishments are severe, the evidence required is very strict, and doubt prevents the fixed punishment from being applied. Qisas is the law of retaliation for murder and bodily injury, where the victim or the victim's family may demand equal retaliation, accept compensation (diyyah, blood money), or forgive the offender. Ta'zir covers offences for which no fixed punishment is stated; the judge decides a suitable discretionary punishment according to the offence and the circumstances. Together these categories aim to deter crime, protect life and property, and preserve justice, while leaving room for mercy and forgiveness."
      },
      {
        heading: "The Objectives of Shariah (Maqasid)",
        body: "The Maqasid are the higher objectives that Shariah seeks to protect, and scholars identify five: the preservation of religion (din), life (nafs), intellect (aql), lineage or progeny (nasl), and property or wealth (mal). Every ruling of Shariah can be understood as serving one or more of these objectives. The prohibition of intoxicants protects the intellect; the punishment for murder protects life; the rules of marriage protect lineage; the prohibition of theft protects property; and the commands of worship protect religion. When scholars face a new question, they consider which of these objectives is at stake. The Maqasid also explain why Shariah allows concessions in necessity: for example, a starving person may eat forbidden food to save life, because preserving life is a higher objective. Knowing the Maqasid helps a student see Shariah as a coherent system aimed at human welfare, not a list of unrelated rules."
      }
    ],
    definitions: [
      { term: "Ibadah", meaning: "Worship: acts such as prayer, fasting, Zakat and Hajj performed for Allah." },
      { term: "Nikah", meaning: "The Islamic marriage contract, made with consent, witnesses and a dower (mahr)." },
      { term: "Mahr", meaning: "The dower given by the husband to the wife as part of the marriage contract." },
      { term: "Riba", meaning: "Interest or usury: an increase charged on a loan, which is prohibited in Islam." },
      { term: "Hudud", meaning: "Offences with punishments fixed in the Qur'an or Sunnah." },
      { term: "Maqasid", meaning: "The higher objectives of Shariah: preserving religion, life, intellect, lineage and property." }
    ],
    examples: [
      {
        title: "Applying the Maqasid to a ruling",
        problem: "Why does Islam forbid intoxicating drinks? Answer using the Maqasid.",
        steps: ["Recall the five Maqasid: religion, life, intellect, lineage and property.", "Identify which objective is harmed: intoxicants damage the intellect and cloud judgement.", "Note that a damaged intellect also endangers life, property and family life.", "Conclude that the prohibition protects the intellect, one of the five objectives.", "Add that this is why, by Qiyas, other intoxicants are also forbidden."],
        answer: "Intoxicants are forbidden because they harm the intellect, which is one of the five objectives (Maqasid) of Shariah."
      },
      {
        title: "Distinguishing the three categories of criminal law",
        problem: "A student is asked to place theft, murder and a minor public offence into the categories Hudud, Qisas and Ta'zir. How?",
        steps: ["Recall that Hudud are offences with fixed punishments in the texts: theft belongs here.", "Recall that Qisas covers murder and bodily injury, with retaliation, compensation or forgiveness: murder belongs here.", "Recall that Ta'zir covers offences with no fixed punishment, left to the judge: a minor public offence belongs here.", "Check each placement against the definition before answering."],
        answer: "Theft is a Hudud offence, murder falls under Qisas, and a minor offence with no fixed punishment is Ta'zir."
      }
    ],
    tips: ["Learn the five Maqasid in order: religion, life, intellect, lineage, property.", "Riba means interest or usury — link it to the Qur'anic prohibition and to Islamic finance.", "Do not mix up Hudud (fixed punishment), Qisas (retaliation or compensation) and Ta'zir (judge's discretion).", "Remember the marriage essentials: consent, witnesses and mahr."],
    mistakes: ["Saying Riba is only a small interest charge; all interest on loans is prohibited in Shariah.", "Claiming polygamy has no conditions; it is limited to four wives and requires justice.", "Thinking Hudud punishments are applied on suspicion; they require very strict evidence and doubt prevents them.", "Forgetting that inheritance shares are fixed in the Qur'an, not decided by the deceased's wishes alone."],
    facts: ["The five pillars of Islam are Shahadah, Salah, Zakat, Sawm and Hajj.", "Marriage requires the consent of both parties, witnesses and a mahr.", "Riba (interest) is prohibited in the Qur'an.", "The three categories of Islamic criminal law are Hudud, Qisas and Ta'zir.", "The five Maqasid are religion, life, intellect, lineage and property."],
    quiz: [
      { q: "What does Ibadah mean?", options: ["Worship", "Trade", "Marriage", "Punishment"], answer: 0, explanation: "Ibadah means worship, such as prayer, fasting, Zakat and Hajj." },
      { q: "Which of these is a concession in Shariah for a traveller?", options: ["Shortening the prayers", "Abandoning prayer entirely", "Paying no Zakat ever", "Skipping Hajj without reason"], answer: 0, explanation: "A traveller may shorten the prayers; Shariah provides concessions for sickness and travel rather than cancelling worship." },
      { q: "What is Nikah?", options: ["The Islamic marriage contract", "A divorce procedure", "A type of inheritance", "A business partnership"], answer: 0, explanation: "Nikah is the marriage contract, made with consent, witnesses and a mahr." },
      { q: "What is mahr?", options: ["The dower given by the husband to the wife", "The wedding feast", "A divorce payment ordered by a court", "The bride's family gift to the groom"], answer: 0, explanation: "Mahr is the dower given by the husband to the wife as part of the marriage contract." },
      { q: "What is the maximum number of wives permitted in Islam?", options: ["Two", "Three", "Four", "No limit"], answer: 2, explanation: "Polygamy is permitted up to four wives, on the strict condition of justice between them." },
      { q: "What is the waiting period after divorce called?", options: ["Iddah", "Mahr", "Zakat", "Nikah"], answer: 0, explanation: "Iddah is the waiting period observed by a woman after divorce or the death of her husband." },
      { q: "Where are the fixed shares of inheritance mainly set out?", options: ["In the Qur'an, notably Surah an-Nisa", "In local custom only", "In a will written by anyone", "In a trade agreement"], answer: 0, explanation: "The fixed shares of inheritance are set out in the Qur'an, notably in Surah an-Nisa (chapter 4)." },
      { q: "What is Riba?", options: ["Interest or usury charged on a loan", "A lawful profit from trade", "A form of Zakat", "A marriage gift"], answer: 0, explanation: "Riba is interest or usury, which is prohibited in the Qur'an." },
      { q: "Which of these is forbidden in Islamic trade?", options: ["Giving short measure", "Mutual consent", "A clear price", "Honest description of goods"], answer: 0, explanation: "Giving short measure and cheating are forbidden; lawful trade requires consent, a clear price and honesty." },
      { q: "What are Hudud offences?", options: ["Offences with punishments fixed in the Qur'an or Sunnah", "Offences punished only by a fine", "Offences with no punishment at all", "Offences decided by custom alone"], answer: 0, explanation: "Hudud are offences such as theft and adultery whose punishments are fixed in the Qur'an or Sunnah." },
      { q: "What is Qisas?", options: ["Retaliation for murder or injury, or compensation, or forgiveness", "A fixed punishment for theft", "A tax on trade", "A type of fasting"], answer: 0, explanation: "Qisas is the law of retaliation for murder and injury, where the victim's family may demand retaliation, accept diyyah, or forgive." },
      { q: "What is diyyah?", options: ["Blood money paid as compensation", "A marriage dower", "A yearly tax", "A prayer offering"], answer: 0, explanation: "Diyyah is blood money, compensation paid to the victim's family in place of retaliation." },
      { q: "What is Ta'zir?", options: ["A discretionary punishment decided by the judge", "A fixed punishment in the Qur'an", "A form of Zakat", "A marriage contract"], answer: 0, explanation: "Ta'zir covers offences with no fixed punishment stated, so the judge decides a suitable punishment." },
      { q: "Which of these is one of the five Maqasid?", options: ["Preservation of intellect", "Preservation of trade routes", "Preservation of poetry", "Preservation of palaces"], answer: 0, explanation: "The five Maqasid are the preservation of religion, life, intellect, lineage and property." },
      { q: "Why may a starving person eat forbidden food in necessity?", options: ["Because preserving life is a higher objective of Shariah", "Because forbidden food becomes lawful always", "Because hunger cancels all rules", "Because the Maqasid do not apply to food"], answer: 0, explanation: "In necessity, preserving life, one of the Maqasid, allows what is normally forbidden, only as far as needed to save life." }
    ],
    status: "published"
  },
  {
    id: "irs-13",
    subjectId: "irs",
    topic: "Islamic Ethics, Morality and Contemporary Issues",
    subtopic: "Islamic ethics and morality",
    title: "Islamic Ethics and Morality",
    order: 13,
    introduction: "Islam teaches that belief and worship must show in character. A Muslim's manners, honesty, justice and kindness are part of the faith itself, and the Prophet Muhammad (SAW) said he was sent to perfect good character. This lesson explains the core Islamic virtues and how they guide a Muslim's dealings with family, neighbours, work and wealth.",
    objectives: ["Explain the Islamic virtue of honesty (Sidq)", "Explain justice (Adl) and its place in Islamic ethics", "Describe kindness, charity and good treatment of others", "Explain respect for parents and neighbours, and modesty for men and women", "Describe the Islamic view of work and wealth", "Explain moral accountability in Islam"],
    sections: [
      {
        heading: "Honesty (Sidq) and Trustworthiness",
        body: "Sidq means truthfulness, and it is one of the most praised virtues in the Qur'an. Allah commands believers to be with the truthful, and the Prophet Muhammad (SAW) was known as al-Amin, the trustworthy, even before his prophethood. Honesty covers speech, promises, business dealings and testimony: a Muslim must not lie, cheat, break a promise or give false witness. Lying is condemned because it destroys trust, and a society built on lies cannot be just or peaceful. Truthfulness also means being honest with oneself and with Allah, not only with other people. In examinations, in trade and in everyday speech, Sidq requires a Muslim to say what is true and to act as he says he will."
      },
      {
        heading: "Justice (Adl) and Fairness",
        body: "Adl means justice, and the Qur'an commands Muslims to stand firm for justice even if it is against themselves, their parents or their relatives. Justice applies in the home, where parents must treat their children fairly; in business, where buyers and sellers must be fair; in leadership, where rulers must govern without favouritism; and in the courts, where judgements must not be bought or swayed by wealth or tribe. The opposite of justice is zulm, oppression, which the Qur'an strongly condemns. A Muslim must not take what belongs to another, must pay workers their due promptly, and must judge disputes impartially. Justice also means giving each person his or her rights: the rights of Allah, the rights of parents, the rights of spouses and children, and the rights of neighbours and the wider community."
      },
      {
        heading: "Kindness, Charity and Good Neighbourliness",
        body: "Kindness (ihsan) and charity are central to Islamic ethics. Zakat is an obligatory payment from wealth for the poor, and voluntary charity (sadaqah) is encouraged at all times, even in small amounts, such as a smile or removing harm from the road. The Qur'an repeatedly joins the command to worship Allah with the command to be kind to parents, relatives, orphans, the needy, neighbours and travellers. The Prophet said that the best of neighbours in the sight of Allah is the one who is best to his neighbour, and a Muslim must not harm his neighbour or let him go hungry while he himself is full. Kindness extends beyond human beings: the Prophet taught mercy to animals and forbade cruelty to them. Charity is not only money; helping a person in need, teaching useful knowledge and speaking a kind word are all forms of sadaqah."
      },
      {
        heading: "Respect for Parents, Modesty and Moral Conduct",
        body: "Respect for parents is placed next to the worship of Allah in the Qur'an: a Muslim must not even say uff, a word of impatience, to his parents, but must speak to them with honour and care for them, especially in old age. Modesty (haya) is a branch of faith in Islam: it means shyness from wrongdoing, decency in speech and dress, and lowering the gaze. Both men and women are commanded to dress modestly and behave with dignity; the details of dress differ between men and women, and scholars differ on some details, but the principle of modesty applies to both. A Muslim avoids backbiting, slander, mockery, envy and arrogance, and guards the tongue, because speech can wound as deeply as any action. Clean conduct, patience in difficulty, forgiveness of others and control of anger are all marks of Islamic character."
      },
      {
        heading: "Work, Wealth and Moral Accountability",
        body: "Islam honours lawful work: the Prophet said that the best earnings are those a person earns with his own hands, and work done honestly is itself a form of worship when done with the right intention. Wealth is a trust from Allah, not a sign of His favour by itself; a Muslim earns it lawfully, spends it wisely, avoids waste and extravagance, and pays Zakat on it. Hoarding wealth, earning through forbidden means such as Riba or gambling, and refusing to help the needy are all condemned. Behind all of this lies moral accountability: Muslims believe that every deed, good or bad, is recorded, and that on the Day of Judgement each person will answer for his actions. This belief is meant to guide conduct even when no one is watching, because Allah sees all. A Muslim therefore acts rightly not only to please people or to avoid punishment in this world, but because he will answer to Allah."
      }
    ],
    definitions: [
      { term: "Sidq", meaning: "Truthfulness and honesty in speech, promises and dealings." },
      { term: "Adl", meaning: "Justice: giving each person his or her due rights fairly and without favouritism." },
      { term: "Ihsan", meaning: "Excellence and kindness in worship and in dealings with others." },
      { term: "Sadaqah", meaning: "Voluntary charity given for the sake of Allah, in money, help or kind words." },
      { term: "Haya", meaning: "Modesty and shyness from wrongdoing, in speech, conduct and dress." },
      { term: "Zulm", meaning: "Oppression or injustice: taking what belongs to another or denying a right." }
    ],
    examples: [
      {
        title: "Honesty in trade",
        problem: "A trader discovers a fault in the goods he is selling. What does Islamic ethics require him to do?",
        steps: ["Recall Sidq: a Muslim must be truthful in business.", "Note that hiding a fault is cheating, which the Prophet condemned.", "Explain that the trader must disclose the fault and let the buyer decide.", "Note that honest trade is blessed, while cheating removes blessing.", "Conclude with the practical action: disclose the fault and adjust the price fairly."],
        answer: "The trader must disclose the fault honestly; hiding it is cheating and is forbidden."
      },
      {
        title: "Justice against self-interest",
        problem: "A Muslim is asked to give evidence in a dispute between his own brother and a stranger, and his brother is in the wrong. What should he do?",
        steps: ["Recall Adl: the Qur'an commands standing firm for justice even against relatives.", "Note that favouring a relative is injustice (zulm).", "Explain that true testimony must be given whatever the cost.", "Conclude that he must testify truthfully in favour of the stranger."],
        answer: "He must testify truthfully, even though his brother is in the wrong, because justice comes before kinship."
      }
    ],
    tips: ["Link Sidq to the Prophet's title al-Amin, the trustworthy.", "Remember Adl with the Qur'anic command to stand firm for justice even against relatives.", "Charity is not only money: sadaqah includes kind words, help and useful knowledge.", "Connect modesty (haya) to both men and women, not to women alone."],
    mistakes: ["Saying charity is only Zakat; Zakat is obligatory, but sadaqah is voluntary and wider.", "Thinking modesty applies only to women; Islam commands modesty for men and women.", "Confusing Adl (justice) with kindness; justice is giving each person his due right, even when it is strict.", "Saying work is only for earning money; lawful work done with good intention is itself rewarded."],
    facts: ["Sidq means truthfulness; the Prophet was known as al-Amin, the trustworthy.", "Adl means justice, commanded even against oneself and one's relatives.", "Zakat is obligatory charity; sadaqah is voluntary charity.", "The Qur'an places kindness to parents next to the worship of Allah.", "Muslims believe every deed is recorded and will be accounted for on the Day of Judgement."],
    quiz: [
      { q: "What does Sidq mean?", options: ["Truthfulness", "Patience", "Wealth", "Fasting"], answer: 0, explanation: "Sidq means truthfulness and honesty in speech, promises and dealings." },
      { q: "What title was Prophet Muhammad (SAW) known by before his prophethood?", options: ["Al-Amin, the trustworthy", "Al-Malik, the king", "Al-Ghani, the rich", "Al-Qadi, the judge"], answer: 0, explanation: "The Prophet was known as al-Amin, the trustworthy, because of his honesty." },
      { q: "What does Adl mean?", options: ["Justice", "Charity", "Prayer", "Patience"], answer: 0, explanation: "Adl means justice: giving each person his or her due rights fairly." },
      { q: "According to the Qur'an, a Muslim should stand firm for justice even if it is against whom?", options: ["Himself, his parents or his relatives", "Only strangers", "Only the poor", "Only his enemies"], answer: 0, explanation: "The Qur'an commands Muslims to stand firm for justice even if it is against themselves, their parents or their relatives." },
      { q: "What is the opposite of justice in Islamic ethics?", options: ["Zulm (oppression)", "Sidq", "Sadaqah", "Ihsan"], answer: 0, explanation: "Zulm, oppression or injustice, is the opposite of Adl." },
      { q: "What is sadaqah?", options: ["Voluntary charity given for the sake of Allah", "The obligatory yearly tax", "A marriage dower", "A type of prayer"], answer: 0, explanation: "Sadaqah is voluntary charity, which may be money, help, knowledge or a kind word." },
      { q: "How does Zakat differ from sadaqah?", options: ["Zakat is obligatory, sadaqah is voluntary", "Sadaqah is obligatory, Zakat is voluntary", "They are exactly the same", "Zakat is only for men"], answer: 0, explanation: "Zakat is an obligatory payment from wealth, while sadaqah is voluntary charity." },
      { q: "What did the Prophet say about the best neighbour?", options: ["The best neighbour is the one who is best to his neighbour", "The richest neighbour", "The oldest neighbour", "The nearest neighbour by distance only"], answer: 0, explanation: "The Prophet said the best of neighbours in the sight of Allah is the one who is best to his neighbour." },
      { q: "How does the Qur'an speak about parents?", options: ["Kindness to parents is joined to the worship of Allah", "Parents have no rights in Islam", "Only fathers must be obeyed", "Parents are obeyed only when young"], answer: 0, explanation: "The Qur'an repeatedly joins the command to worship Allah with kindness to parents." },
      { q: "What word of impatience must a Muslim not say to his parents?", options: ["Uff", "No", "Please", "Wait"], answer: 0, explanation: "The Qur'an says a Muslim must not even say uff, a word of impatience, to his parents." },
      { q: "What does haya mean?", options: ["Modesty and shyness from wrongdoing", "Wealth and luxury", "Anger and pride", "Loud speech"], answer: 0, explanation: "Haya is modesty: decency in speech, conduct and dress, and shyness from wrongdoing." },
      { q: "To whom does the principle of modesty apply in Islam?", options: ["To both men and women", "To women only", "To children only", "To scholars only"], answer: 0, explanation: "Both men and women are commanded to dress modestly and behave with dignity, though the details differ." },
      { q: "What is the Islamic view of lawful work?", options: ["It is honoured, and honest earnings are among the best earnings", "It is discouraged for believers", "It is only for the poor", "It has no reward"], answer: 0, explanation: "Islam honours lawful work; the Prophet said the best earnings are those a person earns with his own hands." },
      { q: "How should a Muslim regard wealth?", options: ["As a trust from Allah, to be earned lawfully and spent wisely", "As proof of Allah's favour by itself", "As something to hoard", "As unimportant and to be thrown away"], answer: 0, explanation: "Wealth is a trust from Allah: it must be earned lawfully, spent wisely, and shared through Zakat and charity." },
      { q: "What is the basis of moral accountability in Islam?", options: ["Belief that every deed is recorded and will be answered for on the Day of Judgement", "Fear of the police only", "The opinion of neighbours", "The laws of the state only"], answer: 0, explanation: "Muslims believe every deed is recorded and that each person will answer for his actions on the Day of Judgement." }
    ],
    status: "published"
  },
  {
    id: "irs-14",
    subjectId: "irs",
    topic: "Islamic Ethics, Morality and Contemporary Issues",
    subtopic: "Islam and contemporary issues",
    title: "Islam and Contemporary Issues",
    order: 14,
    introduction: "Islam is a living faith, and Muslims today face questions the earliest generations never met: modern education, science and technology, life in religiously mixed societies, and the place of Muslims in a modern state. This lesson looks at how Islamic teachings guide Muslims on these contemporary questions, with particular attention to Muslims in Nigeria today.",
    objectives: ["Explain the Islamic attitude to education and the seeking of knowledge", "Describe the relationship between Islam and science and technology", "Explain interfaith relations, tolerance and peaceful coexistence in Islam", "Describe the role and rights of women in Islam", "Explain Islam and the modern state", "Describe the life and contributions of Muslims in Nigeria today"],
    sections: [
      {
        heading: "Islam and Education",
        body: "The first revealed word of the Qur'an was Iqra, read, and the Prophet said that seeking knowledge is an obligation upon every Muslim, male and female. In Islam, knowledge is of two kinds: religious knowledge, which guides worship and conduct, and worldly knowledge, such as medicine, agriculture, mathematics and technology, which benefits society. The early Muslim civilisation built libraries, schools and hospitals, and Muslim scholars made lasting contributions to algebra, medicine, astronomy and philosophy. For a Muslim student today, education is both a religious duty and a means of serving the community. A good education must combine knowledge with character: a learned person who is dishonest or arrogant has missed the purpose of learning. Parents are encouraged to educate their children, girls as well as boys, and teachers are honoured as guides."
      },
      {
        heading: "Islam, Science and Technology",
        body: "Islam does not oppose science; the Qur'an repeatedly invites people to reflect on the creation, the heavens, the earth and the human body as signs of Allah. Muslim scholars of the past, such as al-Khwarizmi in mathematics and Ibn Sina in medicine, advanced science while remaining devout believers. Modern technology, from medicine to the internet, is judged by its use: it is good when it serves health, learning and honest livelihood, and harmful when it spreads falsehood, immorality or injustice. New questions, such as organ transplants, medical ethics and digital finance, are answered through Ijtihad, using the sources of Shariah and the Maqasid, and scholars may differ on the details. A Muslim scientist or engineer is expected to use knowledge responsibly, to avoid harm, and to remember that knowledge is a trust. Science answers how the world works; Islam answers why it matters and how it should be used."
      },
      {
        heading: "Interfaith Relations and Tolerance",
        body: "Muslims live alongside people of other faiths in many countries, including Nigeria, and Islam teaches peaceful coexistence. The Qur'an says there is no compulsion in religion, and it permits Muslims to deal justly and kindly with those who do not fight them for their faith. The Prophet's treaty with the Jews of Madinah and his protection of Christian communities show that agreements with other faiths are honoured. Tolerance in Islam does not mean abandoning one's own beliefs; it means respecting the rights of others to hold theirs, protecting their lives and property, and settling differences by dialogue and justice rather than force. Muslims are forbidden to insult the beliefs of others, and they are commanded to argue in the best manner. In a mixed society, Muslims cooperate with others in works of common good, such as charity, health and community development, while keeping their own religious identity."
      },
      {
        heading: "The Role of Women in Islam",
        body: "Islam gave women rights that were new in seventh-century Arabia: the right to own property, to inherit, to earn, to be educated, and to accept or refuse a marriage. The Qur'an states that men and women are equal before Allah in reward for their deeds, and the Prophet said that the best of men are those who are best to their wives. A woman may work, trade and take part in public life, within the bounds of modesty and family responsibility, and her earnings belong to her. At the same time, Islam assigns different roles in the family: the husband is responsible for providing for the household, while the wife's primary role in the home is honoured as a trust. Practices that oppress women, such as denying girls education, forced marriage or denying a woman her inheritance, contradict Islamic teaching, even when they are defended in the name of custom. Where scholars differ on the details of women's dress or public roles, those differences should be noted rather than presented as if only one view exists."
      },
      {
        heading: "Islam, the Modern State and Muslims in Nigeria",
        body: "Muslims in a modern state are expected to obey just laws, pay taxes, vote, and take part in public life, while practising their religion freely. In countries where Muslims are a minority or one of several faiths, Islamic personal law may apply to family matters, while criminal and commercial matters follow the law of the state; in Nigeria, for example, Shariah courts operate in some northern states for personal and civil matters among Muslims, alongside the federal legal system. Muslims in Nigeria are a large and diverse community, spread across the north and present in every part of the country. They have contributed to education, trade, politics, scholarship and public service, and organisations such as the Nigerian Supreme Council for Islamic Affairs (NSCIA) represent Muslim interests nationally. The challenges facing Nigerian Muslims today include access to quality education, youth unemployment, and peaceful coexistence with Christians and other groups. Islam's answer to these challenges is the same as ever: sound knowledge, honest work, justice, tolerance and service to the community."
      }
    ],
    definitions: [
      { term: "Iqra", meaning: "Read: the first revealed word of the Qur'an, showing the importance of knowledge in Islam." },
      { term: "Tolerance", meaning: "Respecting the rights of people of other faiths to hold their beliefs and live in peace." },
      { term: "NSCIA", meaning: "The Nigerian Supreme Council for Islamic Affairs, the body representing Muslim interests in Nigeria." },
      { term: "Shariah court", meaning: "A court applying Islamic law, in Nigeria mainly to personal and civil matters among Muslims in some states." },
      { term: "Modesty", meaning: "Decency in speech, conduct and dress, required of both men and women in Islam." },
      { term: "Iqra and knowledge", meaning: "The Islamic teaching that seeking knowledge is an obligation upon every Muslim, male and female." }
    ],
    examples: [
      {
        title: "Seeking knowledge as a duty",
        problem: "A student asks whether learning science is a religious duty or only a worldly matter. How should the question be answered?",
        steps: ["Recall the first revealed word, Iqra (read), and the Hadith that seeking knowledge is an obligation on every Muslim.", "Note that Islam values both religious and useful worldly knowledge.", "Explain that science which benefits society, such as medicine, is rewarded when done with good intention.", "Conclude that learning science is both a worldly benefit and a religiously encouraged act."],
        answer: "Learning useful science is encouraged in Islam as part of the obligation to seek knowledge, for men and women alike."
      },
      {
        title: "Tolerance in a mixed community",
        problem: "A Muslim lives in a town with Christians and followers of other religions. How should he relate to them?",
        steps: ["Recall that the Qur'an says there is no compulsion in religion.", "Recall the Prophet's treaties and protection of other communities.", "Note that tolerance means respecting their rights, lives and property, not abandoning one's own faith.", "Conclude with practical conduct: kindness, fairness, honest dealings and cooperation in common good."],
        answer: "He should deal with them justly and kindly, respect their rights, and cooperate in works of common good while keeping his own faith."
      }
    ],
    tips: ["Start every answer on education with Iqra and the Hadith on seeking knowledge being an obligation.", "Remember: Islam encourages science — the Qur'an invites reflection on creation as signs of Allah.", "Tolerance does not mean giving up one's beliefs; it means respecting the rights of others.", "For Nigeria, know that Shariah courts in some northern states handle personal and civil matters among Muslims."],
    mistakes: ["Saying Islam opposes science; early Muslim scholars advanced mathematics, medicine and astronomy.", "Saying tolerance means all religions are the same; Islam teaches respect for others while keeping its own beliefs.", "Claiming Islam denies women property or education; Islam gave women rights to own property, inherit and be educated.", "Saying Shariah courts run all law in Nigeria; they apply mainly to personal and civil matters among Muslims in some states."],
    facts: ["The first revealed word of the Qur'an was Iqra, meaning read.", "Seeking knowledge is an obligation upon every Muslim, male and female.", "The Qur'an says there is no compulsion in religion.", "Muslim women have the right to own property, inherit and be educated in Islam.", "The NSCIA is the Nigerian Supreme Council for Islamic Affairs."],
    quiz: [
      { q: "What was the first revealed word of the Qur'an?", options: ["Iqra (Read)", "Salah (Prayer)", "Sawm (Fasting)", "Zakat (Charity)"], answer: 0, explanation: "The first revealed word was Iqra, meaning read, showing the importance of knowledge in Islam." },
      { q: "According to a Hadith, seeking knowledge is what for every Muslim?", options: ["An obligation", "Forbidden", "Only for scholars", "Only for men"], answer: 0, explanation: "The Prophet said seeking knowledge is an obligation upon every Muslim, male and female." },
      { q: "Which Muslim scholar is famous for contributions to mathematics?", options: ["Al-Khwarizmi", "Ibn Sina in poetry only", "A modern novelist", "A trade merchant"], answer: 0, explanation: "Al-Khwarizmi made lasting contributions to mathematics, including algebra." },
      { q: "How does Islam view useful science and technology?", options: ["They are encouraged when they serve good and avoid harm", "They are forbidden entirely", "They are only for non-Muslims", "They have no value in Islam"], answer: 0, explanation: "Islam encourages science and technology; they are judged by their use and must serve good and avoid harm." },
      { q: "How are new questions such as organ transplants answered in Islam?", options: ["Through Ijtihad using the sources of Shariah and the Maqasid", "By ignoring them", "By popular vote alone", "By copying other religions"], answer: 0, explanation: "New questions are answered through Ijtihad, using the sources of Shariah and the objectives (Maqasid); scholars may differ on details." },
      { q: "What does the Qur'an say about compulsion in religion?", options: ["There is no compulsion in religion", "All people must be forced to convert", "Only Muslims may live in a town", "Religion must be imposed by law"], answer: 0, explanation: "The Qur'an says there is no compulsion in religion." },
      { q: "What did the Prophet's treaty with the Jews of Madinah show?", options: ["That agreements with people of other faiths are honoured", "That other faiths must be expelled", "That treaties are not binding", "That only Muslims have rights"], answer: 0, explanation: "The Prophet's treaty with the Jews of Madinah shows that agreements with other faiths are honoured." },
      { q: "What does tolerance mean in Islam?", options: ["Respecting the rights of others to hold their beliefs and live in peace", "Abandoning one's own beliefs", "Agreeing that all religions are the same", "Avoiding all contact with non-Muslims"], answer: 0, explanation: "Tolerance means respecting the rights of others to hold their beliefs while keeping one's own faith." },
      { q: "Which right did Islam give women in seventh-century Arabia?", options: ["The right to own property and inherit", "The right to be denied education", "The right to be forced into marriage", "No rights at all"], answer: 0, explanation: "Islam gave women the right to own property, to inherit, to earn, to be educated and to accept or refuse marriage." },
      { q: "Who is responsible for providing for the household in Islamic family teaching?", options: ["The husband", "The wife alone", "The neighbours", "The state alone"], answer: 0, explanation: "In Islamic family teaching the husband is responsible for providing for the household." },
      { q: "What does Islam say about forced marriage?", options: ["It contradicts Islamic teaching, which requires consent", "It is required by Islam", "It is allowed for girls only", "It is the normal practice"], answer: 0, explanation: "Forced marriage contradicts Islamic teaching; marriage requires the consent of both parties." },
      { q: "In Nigeria, what matters do Shariah courts mainly handle?", options: ["Personal and civil matters among Muslims in some states", "All criminal cases nationwide", "All cases for all Nigerians", "Only trade disputes between states"], answer: 0, explanation: "In Nigeria, Shariah courts in some northern states handle personal and civil matters among Muslims, alongside the federal legal system." },
      { q: "What does NSCIA stand for?", options: ["Nigerian Supreme Council for Islamic Affairs", "Nigerian Society for Christian and Islamic Arts", "National Council for Science and Islamic Agriculture", "Nigerian Supreme Court of Islamic Appeals"], answer: 0, explanation: "NSCIA is the Nigerian Supreme Council for Islamic Affairs, representing Muslim interests nationally." },
      { q: "Which of these is a challenge facing Nigerian Muslims today, as noted in this lesson?", options: ["Access to quality education and youth unemployment", "A ban on all trade", "A lack of mosques in the north", "No Muslims in public service"], answer: 0, explanation: "The lesson notes access to quality education, youth unemployment and peaceful coexistence as challenges facing Nigerian Muslims today." },
      { q: "What is Islam's answer to modern challenges, according to this lesson?", options: ["Sound knowledge, honest work, justice, tolerance and service to the community", "Withdrawing from public life entirely", "Rejecting all modern education", "Forcing others to accept Islam"], answer: 0, explanation: "Islam's answer is sound knowledge, honest work, justice, tolerance and service to the community." }
    ],
    status: "published"
  }
];
