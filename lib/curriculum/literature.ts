import type { Lesson, SubjectDef } from "./types";

export const SUBJECT: SubjectDef = {
  id: "literature",
  name: "Literature in English",
  short: "LIT",
  colour: "#4a6fd4",
  tagline: "African and world literature, drama, poetry and prose.",
  description: "Master African prose, poetry and drama, literary devices, unseen passages and oral literature for JAMB, with close reading of set texts and original practice questions.",
  topics: ["African Prose", "African Poetry", "African Drama", "Literary Devices and Appreciation", "Unseen Prose and Poetry", "World Literature", "Oral Literature"],
};

export const LESSONS: Lesson[] = [
  {
    id: "literature-01",
    subjectId: "literature",
    topic: "African Prose",
    subtopic: "The African novel: form and themes",
    title: "The African Novel: Form and Themes",
    order: 1,
    introduction: "The African novel tells the story of a continent in change, from pre-colonial village life to independence and modern city life. This lesson introduces the form of the novel and the great themes that run through African prose.",
    objectives: ["Define the novel and identify its main elements", "Trace the development of the African novel", "Identify the major themes of African prose", "Explain how African novelists use setting, plot and character", "Relate named African novels to their themes"],
    sections: [
      {
        heading: "What a Novel Is",
        body: "A novel is a long work of prose fiction that tells a story through characters, plot and setting. Unlike a short story, which focuses on a single incident, a novel has room for many characters, several interwoven plots and a wide sweep of time and place. The novel is divided into chapters, and it is usually narrated in the past tense by a narrator who may be a character in the story or an outside observer. African novelists adopted the novel form from Europe but filled it with African life: village customs, family quarrels, colonial encounters, market days, and the struggle for independence. The result is a form that is both familiar to world readers and deeply African in its material."
      },
      {
        heading: "The Growth of the African Novel",
        body: "African prose in English grew out of the colonial experience. Early African writers used the novel to answer European misrepresentations of Africa and to record a way of life that was changing fast. Chinua Achebe's Things Fall Apart, published in 1958, is the landmark: it presents a pre-colonial Igbo community from the inside, with its gods, customs and laws, and then shows how colonial rule disrupts it. Later novelists widened the canvas. Ngugi wa Thiong'o wrote about land, Mau Mau and the struggle for freedom in Kenya. Buchi Emecheta and Flora Nwapa wrote about the lives of African women. Cyprian Ekwensi wrote about city life in Lagos, while Elechi Amadi wrote about the Niger Delta. In more recent times, Chimamanda Ngozi Adichie has written about the Nigerian Civil War, migration and modern identity. Each generation has used the novel to ask what it means to be African in a changing world."
      },
      {
        heading: "Major Themes of African Prose",
        body: "Certain themes recur across African novels. The clash of cultures is one of the greatest: the meeting of African tradition and European colonialism, and the painful choices it forces on individuals. The theme of disillusionment follows independence, when the promises of freedom are betrayed by corrupt leaders. The position of women is another major theme, explored in novels that show women's strength under patriarchal custom. Other themes include the search for identity, the pull between village and city, the importance of the community, and the power of tradition and the ancestors. JAMB questions often ask you to identify the theme of a passage or a novel, so you must learn to recognise these themes in action rather than memorising a list. A good habit is to ask, after reading a chapter: what has changed for the character, and what does the change mean?"
      },
      {
        heading: "Setting, Plot and Character in the African Novel",
        body: "Setting in the African novel is rarely just a background. The village, with its market square, shrine and meeting place, is a living world with rules and spirits, while the city stands for ambition, money and moral danger. Plot in African prose often follows the rise and fall of a central figure: a man who climbs high through strength and pride, then falls when his pride or the new order defeats him. This pattern, borrowed partly from classical tragedy, is at the heart of Things Fall Apart. Characters are often drawn as types as well as individuals: the stubborn hero, the wise elder, the missionary, the corrupt politician, the suffering mother. When you answer questions, always support your point with an event from the novel: name what the character did, what followed, and what it shows about the theme."
      }
    ],
    definitions: [
      { term: "Novel", meaning: "A long work of prose fiction, divided into chapters, telling a story through character, plot and setting." },
      { term: "Theme", meaning: "The central idea or message of a literary work, such as the clash of cultures or disillusionment." },
      { term: "Setting", meaning: "The time and place in which a story happens, including its social and cultural background." },
      { term: "Plot", meaning: "The sequence of events in a story, linked by cause and effect." },
      { term: "Protagonist", meaning: "The main character of a story, around whom the plot turns." },
      { term: "Disillusionment", meaning: "The loss of faith in an ideal, such as independence, when reality fails to match the promise." }
    ],
    examples: [
      {
        title: "Identifying a theme from an event",
        problem: "In a novel, a village elder warns a young man against abandoning the customs of his fathers, but the young man joins the new religion and the village splits. What theme is shown?",
        steps: ["Identify the two forces in conflict: African tradition and the new religion.", "Note the result: the village is divided.", "Recall the major themes of African prose.", "Match the conflict to the clash of cultures.", "State the theme and support it with the event."],
        answer: "The clash of cultures: traditional African life comes into conflict with the new colonial order, and the community is divided."
      },
      {
        title: "Linking a novelist to a theme",
        problem: "A novel shows a minister who fought for independence but now steals public money while the people suffer. Which theme and which generation of African writing does this belong to?",
        steps: ["Note the key facts: a freedom fighter turned corrupt minister.", "Recall the theme of disillusionment after independence.", "Recall that post-independence novels often attack corrupt leadership.", "Link the theme to the post-independence generation of novelists.", "Answer with the theme and the period."],
        answer: "The theme is disillusionment: the post-independence generation of African novelists exposes leaders who betrayed the hopes of freedom."
      }
    ],
    tips: ["Learn one major novel per theme: Things Fall Apart for the clash of cultures, and a post-independence novel for disillusionment.", "Always support a theme with an event from the novel, not with a general claim.", "Know the leading African novelists and what each is known for.", "Read the set texts yourself; summaries alone will not carry you through passage questions."],
    mistakes: ["Calling every African novel a protest novel without showing what it protests.", "Confusing theme with plot: plot is what happens, theme is what it means.", "Naming a novelist without knowing any of their works.", "Answering theme questions with a moral lesson instead of the literary theme."],
    facts: ["Things Fall Apart by Chinua Achebe was published in 1958.", "Ngugi wa Thiong'o wrote about land and freedom in Kenya.", "Buchi Emecheta and Flora Nwapa are leading women novelists of Africa.", "The clash of cultures and disillusionment are two central themes of African prose."],
    quiz: [
      { q: "A novel differs from a short story mainly in what way?", options: ["It is written in verse", "It is longer and covers more characters and events", "It has no plot", "It is always about history"], answer: 1, explanation: "A novel is a long prose fiction with many characters and interwoven plots, while a short story focuses on a single incident." },
      { q: "Who wrote Things Fall Apart?", options: ["Ngugi wa Thiong'o", "Chinua Achebe", "Wole Soyinka", "Cyprian Ekwensi"], answer: 1, explanation: "Chinua Achebe wrote Things Fall Apart, published in 1958, the landmark African novel." },
      { q: "The clash of cultures in African prose usually refers to the meeting of what two forces?", options: ["Village and city", "African tradition and European colonialism", "Rich and poor", "Old and young"], answer: 1, explanation: "The clash of cultures is the conflict between African tradition and the colonial order that came with Europe." },
      { q: "Which theme is shown when a leader who fought for independence becomes corrupt?", options: ["The clash of cultures", "Disillusionment", "The search for identity", "The power of the ancestors"], answer: 1, explanation: "Disillusionment is the loss of faith when the promises of independence are betrayed by corrupt leaders." },
      { q: "Ngugi wa Thiong'o is best known for writing about which country?", options: ["Nigeria", "Ghana", "Kenya", "South Africa"], answer: 2, explanation: "Ngugi wrote about land, Mau Mau and the struggle for freedom in Kenya." },
      { q: "In a novel, the time and place of the story is called what?", options: ["Plot", "Theme", "Setting", "Style"], answer: 2, explanation: "Setting is the time and place, including the social and cultural background, in which a story happens." },
      { q: "Which of these is a leading woman novelist of Africa?", options: ["Buchi Emecheta", "Elechi Amadi", "Ayi Kwei Armah", "Cyprian Ekwensi"], answer: 0, explanation: "Buchi Emecheta is a leading African woman novelist, known for writing about the lives of African women." },
      { q: "The sequence of events in a story, linked by cause and effect, is called what?", options: ["Setting", "Plot", "Theme", "Mood"], answer: 1, explanation: "Plot is the sequence of events in a story, linked by cause and effect." },
      { q: "The main character of a novel, around whom the plot turns, is called what?", options: ["Antagonist", "Protagonist", "Narrator", "Foil"], answer: 1, explanation: "The protagonist is the main character of a story, around whom the plot turns." },
      { q: "Which novelist wrote about city life in Lagos?", options: ["Cyprian Ekwensi", "Elechi Amadi", "Chinua Achebe", "Flora Nwapa"], answer: 0, explanation: "Cyprian Ekwensi is known for writing about city life in Lagos." },
      { q: "A novel divided into chapters is usually narrated in which tense?", options: ["Future tense only", "Present tense only", "Past tense, usually", "No tense at all"], answer: 2, explanation: "Novels are usually narrated in the past tense, though modern novels may use the present tense." },
      { q: "Which of these is a major theme of African prose?", options: ["The search for identity", "The life of bees", "The history of Europe", "The rules of football"], answer: 0, explanation: "The search for identity is a major theme of African prose, alongside the clash of cultures and disillusionment." },
      { q: "Chimamanda Ngozi Adichie has written about which of these subjects?", options: ["The Nigerian Civil War and migration", "The Roman Empire", "Space travel", "Ancient Egypt"], answer: 0, explanation: "Adichie has written about the Nigerian Civil War, migration and modern identity." },
      { q: "In Things Fall Apart, the village setting is best described as what?", options: ["A mere background", "A living world with rules, customs and spirits", "A European city", "A desert with no people"], answer: 1, explanation: "The Igbo village in Things Fall Apart is a living world with its gods, customs and laws." },
      { q: "When a question asks for the theme of a passage, what should you do?", options: ["Retell the plot", "Name the central idea and support it with an event", "Name the author only", "Count the characters"], answer: 1, explanation: "A theme answer needs the central idea plus evidence from the passage, such as an event that shows it." }
    ],
    status: "published"
  },
  {
    id: "literature-02",
    subjectId: "literature",
    topic: "African Prose",
    subtopic: "Characterisation and narrative technique",
    title: "Characterisation and Narrative Technique in African Prose",
    order: 2,
    introduction: "Great novels live through their characters and the way their stories are told. This lesson explains how African novelists create characters and use point of view, flashback, irony and other narrative techniques.",
    objectives: ["Explain direct and indirect characterisation", "Identify flat and round characters", "Describe the main points of view in prose", "Explain flashback, foreshadowing and irony", "Analyse how a character changes in a novel"],
    sections: [
      {
        heading: "How Characters Are Created",
        body: "Characterisation is the art of creating characters. In direct characterisation, the narrator tells the reader plainly what a character is like: brave, proud, generous or cruel. In indirect characterisation, the reader judges the character from what he does, what he says, and what others say about him. African novelists often use both. A hero may be introduced as a great wrestler and a man of action, and the reader then watches his actions confirm or contradict that picture. A character may also be revealed through his thoughts, through his speech, and through the way other characters react to him. When you analyse a character, always gather evidence from all of these sources before you conclude."
      },
      {
        heading: "Flat and Round Characters",
        body: "A flat character is simple and does not change: he embodies one quality, such as greed or loyalty, and remains the same from the beginning to the end of the novel. Flat characters are useful as foils, characters who contrast with the hero and throw his qualities into relief. A round character is complex and develops: he has conflicting qualities, makes mistakes, learns, and changes. The hero of a great African novel is usually round: he may be brave and hardworking, yet proud and violent, and his pride leads to his downfall. Minor characters are often flat, while major characters are round. JAMB questions often ask whether a character is flat or round, or ask for the role of a particular character, so learn to describe characters with precise terms and with examples of their behaviour."
      },
      {
        heading: "Point of View",
        body: "Point of view is the angle from which a story is told. In the first-person point of view, a character tells the story as I, so the reader knows only what that character knows and feels. In the third-person omniscient point of view, an all-knowing narrator tells the story, entering the minds of several characters and commenting on events. In the third-person limited point of view, the narrator follows one character closely and knows only that character's thoughts. African novelists often use the omniscient narrator, because it allows them to present a whole community, its customs and its history, and to move freely between characters. The choice of point of view shapes what the reader can know and how the reader judges the characters, so always notice who is telling the story."
      },
      {
        heading: "Flashback, Foreshadowing and Irony",
        body: "Flashback is a scene that takes the reader back to an earlier time, often to explain why a character behaves as he does: a childhood shame, for instance, may explain a man's lifelong fear. Foreshadowing is a hint of what will happen later: a warning, a dream or an omen that prepares the reader for the end. Irony is a contrast between appearance and reality, or between what is expected and what happens: a man who fights to save his village may be the one who destroys it, or a character who seeks honour may die in disgrace. African novels are rich in irony, because the colonial encounter itself was full of ironies: the new religion promised peace and brought division. Learn to spot these techniques in a passage and to explain what they add to the meaning of the story."
      }
    ],
    definitions: [
      { term: "Characterisation", meaning: "The art of creating and presenting characters in a literary work." },
      { term: "Round character", meaning: "A complex character who develops and changes in the course of a story." },
      { term: "Flat character", meaning: "A simple character who embodies one quality and does not change." },
      { term: "Foil", meaning: "A character who contrasts with another character and throws his qualities into relief." },
      { term: "Flashback", meaning: "A scene that takes the reader back to an earlier time in the story." },
      { term: "Foreshadowing", meaning: "A hint of what will happen later in a story." },
      { term: "Irony", meaning: "A contrast between appearance and reality, or between what is expected and what happens." }
    ],
    examples: [
      {
        title: "Judging a character by his actions",
        problem: "A character is described as a generous man, but in the story he refuses food to a hungry stranger and cheats his brother over land. What can the reader conclude?",
        steps: ["Note the direct description: the narrator calls him generous.", "Gather the indirect evidence: his actions show selfishness and dishonesty.", "Recall that actions reveal character more reliably than labels.", "Conclude that the character is not truly generous.", "Name the technique: indirect characterisation contradicts the direct description."],
        answer: "The reader concludes the man is selfish and dishonest, because his actions contradict the label of generosity; this is indirect characterisation."
      },
      {
        title: "Spotting irony in a passage",
        problem: "A chief bans the new religion to protect his village, but his harsh punishment of converts drives the whole village to the new religion. What technique is at work?",
        steps: ["Identify what the chief intended: to protect the village from the new religion.", "Identify the result: the village turns to the new religion.", "Note the contrast between intention and result.", "Recall that this contrast is irony.", "Explain the effect: it shows the chief's blindness and the power of the new order."],
        answer: "The technique is irony: the chief's action produces the opposite of what he intended, and his effort to save the village hastens its change."
      }
    ],
    tips: ["Always support a character judgement with an action or a speech, not with a vague impression.", "Learn the terms flat, round, foil, protagonist and antagonist and use them correctly.", "Ask who is telling the story before you judge what the narrator says.", "Watch for hints and omens: they are usually foreshadowing."],
    mistakes: ["Calling a character round just because he is important; round means complex and changing.", "Confusing flashback with foreshadowing: flashback looks back, foreshadowing looks forward.", "Saying the narrator is the author; the narrator is a voice the author creates.", "Judging a character from one incident only."],
    facts: ["Direct characterisation tells the reader what a character is like; indirect characterisation shows it.", "The omniscient narrator knows the thoughts of several characters.", "A foil contrasts with the hero and highlights his qualities.", "Foreshadowing prepares the reader for what will happen later."],
    quiz: [
      { q: "When the narrator tells the reader plainly that a character is brave, what is this called?", options: ["Indirect characterisation", "Direct characterisation", "Foreshadowing", "Irony"], answer: 1, explanation: "Direct characterisation is when the narrator states plainly what a character is like." },
      { q: "A character who is complex, develops and changes is called what?", options: ["Flat character", "Round character", "Foil", "Antagonist"], answer: 1, explanation: "A round character is complex and develops in the course of the story." },
      { q: "A character who contrasts with the hero and throws his qualities into relief is called what?", options: ["Protagonist", "Foil", "Narrator", "Heroine"], answer: 1, explanation: "A foil is a character who contrasts with another character, usually the hero." },
      { q: "In the first-person point of view, the story is told by whom?", options: ["An all-knowing narrator", "A character using I", "The author in person", "Several narrators at once"], answer: 1, explanation: "In the first-person point of view, a character tells the story as I." },
      { q: "A scene that takes the reader back to an earlier time is called what?", options: ["Flashback", "Foreshadowing", "Climax", "Suspense"], answer: 0, explanation: "A flashback returns to an earlier time, often to explain a character's behaviour." },
      { q: "A hint of what will happen later in a story is called what?", options: ["Flashback", "Foreshadowing", "Irony", "Setting"], answer: 1, explanation: "Foreshadowing is a hint, such as a warning or an omen, of what will happen later." },
      { q: "Irony is best defined as what?", options: ["A long description of a place", "A contrast between appearance and reality", "A happy ending", "A speech by a character"], answer: 1, explanation: "Irony is a contrast between appearance and reality, or between what is expected and what happens." },
      { q: "The omniscient narrator is best described as what?", options: ["A narrator who knows only one character's thoughts", "An all-knowing narrator who can enter several minds", "A character who tells his own story", "A narrator who knows nothing"], answer: 1, explanation: "The omniscient narrator is all-knowing and can enter the minds of several characters." },
      { q: "Which of these is an example of indirect characterisation?", options: ["The narrator says the man is honest", "The man returns a lost purse to its owner", "The author writes the man's name", "The chapter ends"], answer: 1, explanation: "Indirect characterisation shows character through action, so returning the purse shows honesty." },
      { q: "The opponent of the hero in a story is called what?", options: ["Protagonist", "Antagonist", "Foil", "Narrator"], answer: 1, explanation: "The antagonist is the character who opposes the hero or protagonist." },
      { q: "A flat character is best described as what?", options: ["A character who changes greatly", "A simple character who embodies one quality and does not change", "The main character", "A character with no name"], answer: 1, explanation: "A flat character is simple, embodies one quality, and does not change." },
      { q: "Why do African novelists often use the omniscient narrator?", options: ["To hide the story", "To present a whole community and move between characters", "To make the novel shorter", "To avoid describing setting"], answer: 1, explanation: "The omniscient narrator allows the novelist to present a whole community, its customs and history." },
      { q: "A childhood shame that explains a man's lifelong fear is most likely presented through what?", options: ["Foreshadowing", "Flashback", "Irony", "Setting"], answer: 1, explanation: "A flashback returns to the past to explain present behaviour, such as a childhood event." },
      { q: "When judging a character, what is the most reliable evidence?", options: ["One single incident", "What the character does and says over the story", "The character's name", "The title of the novel"], answer: 1, explanation: "Character should be judged from a pattern of actions and speech across the story, not one incident." },
      { q: "The narrator is best described as what?", options: ["The author himself", "The voice that tells the story", "The main character", "The reader"], answer: 1, explanation: "The narrator is the voice the author creates to tell the story; it is not the author in person." }
    ],
    status: "published"
  },
  {
    id: "literature-03",
    subjectId: "literature",
    topic: "African Poetry",
    subtopic: "African poetry: form, voice and theme",
    title: "African Poetry: Form, Voice and Theme",
    order: 3,
    introduction: "African poetry speaks in many voices: praise, protest, lament and celebration. This lesson introduces the forms of African poetry and the themes that African poets return to again and again.",
    objectives: ["Define poetry and identify its main features", "Distinguish lyric, narrative and dramatic poetry", "Identify the major themes of African poetry", "Explain how African poets use the oral tradition", "Relate named African poets to their work"],
    sections: [
      {
        heading: "What Poetry Is",
        body: "Poetry is language used with special care for sound, image and feeling. Unlike prose, which follows the patterns of ordinary speech, poetry is arranged in lines and stanzas, and it uses rhythm, rhyme, imagery and figurative language to compress meaning. A poem may be short, yet it can carry a whole history, a grief or a hope. African poetry draws on two streams: the written tradition in English, French and Portuguese, and the older oral tradition of praise songs, dirges and chants. The best African poems combine both: they use the forms of written poetry while keeping the rhythms, images and voices of African speech."
      },
      {
        heading: "Forms of Poetry",
        body: "Poetry is often divided into three kinds. Lyric poetry expresses the personal feelings of the poet, as in a love poem or an elegy for the dead. Narrative poetry tells a story, often in a long sequence of stanzas. Dramatic poetry presents a character speaking, as in a dramatic monologue, where the speaker addresses a silent listener. Other forms include the sonnet, a fourteen-line poem with a strict rhyme scheme; the ode, a formal poem of praise; the elegy, a poem of mourning; and the ballad, a song-like narrative poem. African poets have used all of these forms, but they have also created freer forms, using short lines, repetition and refrains borrowed from oral performance. When you meet a poem in the examination, first ask what kind it is, then what the speaker feels, and then what the poem is about."
      },
      {
        heading: "Themes of African Poetry",
        body: "African poetry returns to certain great themes. The first is the African past: praise of the ancestors, the beauty of the village, and the dignity of pre-colonial life. The second is colonialism and its wounds: the loss of land, language and freedom. The third is protest against injustice, whether colonial rule, apartheid in South Africa, or corrupt government after independence. The fourth is the theme of identity: the African torn between two worlds, seeking to know who he is. Love, death and the beauty of nature are also common. The South African poet Dennis Brutus wrote protest poetry against apartheid, while Leopold Senghor of Senegal celebrated negritude, the pride of black identity and culture. David Diop, also of Senegal, wrote bitterly of colonial exploitation. In Nigeria, Christopher Okigbo, J.P. Clark and Wole Soyinka are among the leading poets, and Gabriel Okara is known for his poem about the search for identity. Learn the poet with the theme, not the theme alone."
      },
      {
        heading: "Voice and the Oral Tradition",
        body: "Voice in poetry is the personality speaking in the poem, and in African poetry the voice is often communal rather than private: the poet speaks for his people. African poets borrow heavily from the oral tradition: repetition, call and response, proverbs, and the rhythms of drums and market cries. A praise poem, for example, piles up titles and images to honour a chief or a hero, just as a traditional praise singer would. A dirge laments the dead with repeated cries. This oral quality makes African poetry musical when read aloud, and it is why JAMB questions often ask about the tone and mood of a poem. Tone is the poet's attitude, such as bitter, hopeful or mocking; mood is the feeling the poem creates in the reader, such as sorrow or joy. Always read a poem aloud in your mind and listen for its music."
      }
    ],
    definitions: [
      { term: "Poetry", meaning: "Language arranged in lines and stanzas, using rhythm, rhyme and imagery to express feeling and meaning." },
      { term: "Lyric poetry", meaning: "Poetry that expresses the personal feelings of the poet or speaker." },
      { term: "Elegy", meaning: "A poem of mourning for the dead." },
      { term: "Ode", meaning: "A formal poem of praise, often addressed to a person or thing." },
      { term: "Negritude", meaning: "The celebration of black identity, culture and pride, associated with Leopold Senghor." },
      { term: "Tone", meaning: "The attitude of the poet or speaker towards the subject of a poem." },
      { term: "Mood", meaning: "The feeling a poem creates in the reader." }
    ],
    examples: [
      {
        title: "Identifying the form of a poem",
        problem: "A poem of fourteen lines mourns a dead friend in a formal, measured tone. What form is it, and what kind of poem is it?",
        steps: ["Count the lines: fourteen lines point to a sonnet.", "Note the subject: mourning the dead points to an elegy.", "Recall that a sonnet is a form and an elegy is a kind defined by subject.", "Combine both facts.", "Answer with the form and the kind."],
        answer: "It is a sonnet in form and an elegy in kind: a fourteen-line poem of mourning."
      },
      {
        title: "Linking a poet to a theme",
        problem: "A poem bitterly attacks the rulers who lock up innocent people and praises the dignity of black people. Which tradition and which poets does this suggest?",
        steps: ["Note the two elements: protest against injustice and pride in black identity.", "Recall that protest poetry attacked apartheid and colonial rule.", "Recall that negritude celebrated black pride.", "Link protest to poets such as Dennis Brutus.", "Link negritude to Leopold Senghor."],
        answer: "It suggests the protest tradition of Dennis Brutus and the negritude of Leopold Senghor: protest against injustice joined to pride in black identity."
      }
    ],
    tips: ["Learn each African poet with one theme and one well-known work or subject.", "Read every poem aloud in your mind to catch its rhythm and tone.", "Ask first: who is speaking, to whom, and about what?", "Do not confuse tone (the poet's attitude) with mood (the reader's feeling)."],
    mistakes: ["Calling every African poem a protest poem.", "Confusing the poet with the speaker of the poem.", "Confusing tone with mood.", "Naming a form, such as sonnet, when the question asks for a kind, such as elegy."],
    facts: ["Leopold Senghor of Senegal is associated with negritude.", "Dennis Brutus wrote protest poetry against apartheid in South Africa.", "Christopher Okigbo, J.P. Clark and Wole Soyinka are leading Nigerian poets.", "The elegy is a poem of mourning for the dead."],
    quiz: [
      { q: "Poetry differs from prose mainly because it is arranged in what?", options: ["Chapters", "Lines and stanzas", "Paragraphs only", "Dialogues only"], answer: 1, explanation: "Poetry is arranged in lines and stanzas, using rhythm, rhyme and imagery." },
      { q: "A poem that expresses the personal feelings of the poet is called what?", options: ["Narrative poetry", "Dramatic poetry", "Lyric poetry", "Epic poetry"], answer: 2, explanation: "Lyric poetry expresses the personal feelings of the poet or speaker." },
      { q: "An elegy is a poem about what?", options: ["Praise of a hero", "Mourning for the dead", "A funny story", "A journey"], answer: 1, explanation: "An elegy is a poem of mourning for the dead." },
      { q: "How many lines does a sonnet have?", options: ["Ten", "Twelve", "Fourteen", "Sixteen"], answer: 2, explanation: "A sonnet is a fourteen-line poem with a strict rhyme scheme." },
      { q: "Negritude is best described as what?", options: ["Hatred of African culture", "The celebration of black identity and culture", "A form of colonial rule", "A type of novel"], answer: 1, explanation: "Negritude is the celebration of black identity, culture and pride, associated with Leopold Senghor." },
      { q: "Which poet is associated with negritude?", options: ["Dennis Brutus", "Leopold Senghor", "David Diop", "Gabriel Okara"], answer: 1, explanation: "Leopold Senghor of Senegal is the leading poet of negritude." },
      { q: "Dennis Brutus wrote protest poetry against what?", options: ["Colonial rule in Kenya", "Apartheid in South Africa", "The slave trade in America", "War in Europe"], answer: 1, explanation: "Dennis Brutus wrote protest poetry against apartheid in South Africa." },
      { q: "An ode is best described as what?", options: ["A formal poem of praise", "A poem of mourning", "A funny poem", "A short story in verse"], answer: 0, explanation: "An ode is a formal poem of praise, often addressed to a person or thing." },
      { q: "The attitude of the poet towards the subject of a poem is called what?", options: ["Mood", "Tone", "Rhythm", "Theme"], answer: 1, explanation: "Tone is the poet's attitude, such as bitter, hopeful or mocking." },
      { q: "The feeling a poem creates in the reader is called what?", options: ["Tone", "Mood", "Form", "Style"], answer: 1, explanation: "Mood is the feeling the poem creates in the reader, such as sorrow or joy." },
      { q: "Which of these is a leading Nigerian poet?", options: ["Christopher Okigbo", "Leopold Senghor", "David Diop", "Dennis Brutus"], answer: 0, explanation: "Christopher Okigbo is a leading Nigerian poet, along with J.P. Clark and Wole Soyinka." },
      { q: "A dramatic monologue is a poem in which what happens?", options: ["Many speakers argue", "One character speaks to a silent listener", "The poet describes a battle", "A chorus sings"], answer: 1, explanation: "A dramatic monologue presents one character speaking to a silent listener." },
      { q: "David Diop is known for writing bitterly about what?", options: ["Colonial exploitation", "The beauty of Paris", "Ancient Rome", "Space travel"], answer: 0, explanation: "David Diop of Senegal wrote bitterly of colonial exploitation." },
      { q: "African poetry borrows from the oral tradition in which of these ways?", options: ["Repetition and refrains", "Long chapters", "Footnotes", "Stage directions"], answer: 0, explanation: "African poets borrow repetition, call and response, proverbs and refrains from oral performance." },
      { q: "When you first meet a poem in the examination, what should you ask first?", options: ["How many words it has", "What kind it is, who speaks, and what it is about", "When the poet was born", "How much the book costs"], answer: 1, explanation: "First identify the kind of poem, the speaker and the subject; that guides every other answer." }
    ],
    status: "published"
  },
  {
    id: "literature-04",
    subjectId: "literature",
    topic: "African Poetry",
    subtopic: "Sound, imagery and style in African poetry",
    title: "Sound, Imagery and Style in African Poetry",
    order: 4,
    introduction: "A poem works through sound and image as much as through meaning. This lesson teaches you the devices African poets use: imagery, metaphor, alliteration, rhythm, rhyme and symbolism, and how to analyse them in a passage.",
    objectives: ["Define imagery, metaphor and simile", "Identify alliteration, assonance and onomatopoeia", "Explain rhyme, rhythm and metre", "Explain symbolism and personification", "Analyse the style of a poem from its devices"],
    sections: [
      {
        heading: "Imagery: Seeing with Words",
        body: "Imagery is language that appeals to the senses: sight, sound, smell, taste and touch. A poet may describe the sun as a red wound in the sky, and the reader sees the colour and feels the heat. Imagery is built from figures of speech. A simile compares one thing to another using like or as: as brave as a lion. A metaphor compares directly, without like or as: the chief is a lion. Personification gives human qualities to a non-human thing: the wind whispered through the trees. Hyperbole is deliberate exaggeration: I have told you a thousand times. When you analyse a poem, name the image, say what it compares, and explain what feeling or idea it creates. Never just list devices; always explain their effect."
      },
      {
        heading: "Sound Devices",
        body: "Poetry is meant to be heard, and African poetry is especially musical. Alliteration is the repetition of the same consonant sound at the beginning of words: the silent snake slid through the sand. Assonance is the repetition of vowel sounds: the rain in Spain. Onomatopoeia is a word that imitates the sound it names: buzz, hiss, bang, the thud of a drum. Repetition is the deliberate repeating of a word, line or phrase for emphasis, and it is very common in African poetry because it comes from oral performance. A refrain is a line or group of lines repeated at intervals, like the chorus of a song. Rhythm is the pattern of stressed and unstressed syllables, and rhyme is the repetition of similar sounds at the ends of lines. Together these devices give a poem its music and its power to move the listener."
      },
      {
        heading: "Symbolism and Other Devices",
        body: "A symbol is an object that stands for something beyond itself: a river may stand for life or for change, a road for a journey through life, and night for ignorance or death. Symbolism is central to African poetry, where the sun, the moon, the baobab and the drum all carry deep meanings. Irony in poetry works as in prose: the poet says one thing and means the opposite, often to mock a ruler or a custom. Paradox is a statement that seems contradictory but contains a truth: the more we learn, the less we know. Euphemism is a mild way of saying something harsh, as when death is called sleep. Enjambment is the running of a sentence over the end of a line without a pause, which speeds the poem up, while end-stopped lines, which finish at the line end, slow it down. Learn these terms precisely, because JAMB questions test them directly."
      },
      {
        heading: "Analysing Style in a Poem",
        body: "Style is the poet's individual way of using language, and it is judged by diction, imagery, sound and structure. Diction is the choice of words: simple or difficult, African or European, concrete or abstract. A poet who uses many local words, proverbs and images of the village has an African diction; a poet who uses formal, classical words has a different style. Structure matters too: short lines and many stanzas create urgency, while long, flowing lines create calm. To analyse style in the examination, follow a simple method: first state the subject and the tone, then pick two or three devices, quote the words (using the lines given in the question), and explain the effect of each. A good analysis always ends with what the devices do for the poem's meaning, not with a list of names."
      }
    ],
    definitions: [
      { term: "Imagery", meaning: "Language that appeals to the senses, creating pictures in the reader's mind." },
      { term: "Simile", meaning: "A comparison using like or as, for example as brave as a lion." },
      { term: "Metaphor", meaning: "A direct comparison without like or as, for example the chief is a lion." },
      { term: "Alliteration", meaning: "The repetition of the same consonant sound at the beginning of words." },
      { term: "Onomatopoeia", meaning: "A word that imitates the sound it names, such as buzz or bang." },
      { term: "Symbol", meaning: "An object that stands for something beyond itself, such as a river for life." },
      { term: "Enjambment", meaning: "The running of a sentence over the end of a line without a pause." }
    ],
    examples: [
      {
        title: "Identifying a simile and a metaphor",
        problem: "A poem says: The warrior fought like a wounded lion, and his anger was a fire in the dry grass. Identify the two devices.",
        steps: ["Look at the first comparison: fought like a wounded lion.", "Note the word like, which marks a simile.", "Look at the second comparison: his anger was a fire.", "Note there is no like or as, so it is a direct comparison.", "Name both devices and explain the effect: both show fierce, dangerous anger."],
        answer: "Like a wounded lion is a simile, and his anger was a fire is a metaphor; both images show fierce and dangerous anger."
      },
      {
        title: "Explaining the effect of alliteration",
        problem: "A line reads: The silent snake slid through the sand. What device is used, and what is its effect?",
        steps: ["Note the repeated sound: silent, snake, slid, sand all begin with the s sound.", "Name the device: alliteration.", "Note the sound itself: the hissing s sound imitates a snake.", "Explain the effect: it makes the line musical and helps the reader hear the snake.", "Conclude with the effect on meaning: it makes the image vivid and frightening."],
        answer: "The device is alliteration; the repeated s sound imitates the hiss of the snake and makes the image vivid and musical."
      }
    ],
    tips: ["Always explain the effect of a device, never just name it.", "Simile uses like or as; metaphor does not.", "Read the line aloud to hear alliteration, assonance and onomatopoeia.", "Learn symbols: river, road, night, sun and drum are common in African poetry."],
    mistakes: ["Calling a metaphor a simile because both compare two things.", "Listing devices without explaining their effect.", "Confusing alliteration with rhyme.", "Saying a symbol means only one fixed thing; symbols can carry several meanings."],
    facts: ["A simile uses like or as; a metaphor does not.", "Alliteration repeats consonant sounds at the beginnings of words.", "A refrain is a line or group of lines repeated at intervals in a poem.", "Enjambment runs a sentence over the end of a line without a pause."],
    quiz: [
      { q: "Language that appeals to the senses is called what?", options: ["Imagery", "Irony", "Rhyme", "Metre"], answer: 0, explanation: "Imagery is language that appeals to the senses, creating pictures in the reader's mind." },
      { q: "Which of these is a simile?", options: ["The chief is a lion", "As brave as a lion", "The lion roared", "A lion in the bush"], answer: 1, explanation: "A simile compares using like or as, so as brave as a lion is a simile." },
      { q: "Which of these is a metaphor?", options: ["As brave as a lion", "Like a lion", "The chief is a lion", "The lion is like a chief"], answer: 2, explanation: "A metaphor compares directly without like or as, so the chief is a lion is a metaphor." },
      { q: "Personification is best defined as what?", options: ["Giving human qualities to a non-human thing", "Comparing with like or as", "Exaggerating for effect", "Repeating a sound"], answer: 0, explanation: "Personification gives human qualities to a non-human thing, such as the wind whispered." },
      { q: "The repetition of the same consonant sound at the beginning of words is called what?", options: ["Assonance", "Alliteration", "Rhyme", "Refrain"], answer: 1, explanation: "Alliteration is the repetition of the same consonant sound at the beginning of words." },
      { q: "A word that imitates the sound it names, such as buzz, is called what?", options: ["Metaphor", "Onomatopoeia", "Irony", "Symbol"], answer: 1, explanation: "Onomatopoeia is a word that imitates the sound it names." },
      { q: "Hyperbole is best defined as what?", options: ["A mild way of saying something harsh", "Deliberate exaggeration", "A comparison using like", "A repeated line"], answer: 1, explanation: "Hyperbole is deliberate exaggeration for effect, such as I have told you a thousand times." },
      { q: "A line or group of lines repeated at intervals in a poem is called what?", options: ["Stanza", "Refrain", "Metre", "Diction"], answer: 1, explanation: "A refrain is a line or group of lines repeated at intervals, like the chorus of a song." },
      { q: "In African poetry, a river is often used as a symbol of what?", options: ["Life or change", "A building", "A weapon", "A book"], answer: 0, explanation: "A river is a common symbol of life, journey or change in African poetry." },
      { q: "Enjambment is best described as what?", options: ["A line that ends with a full stop", "A sentence running over the end of a line without a pause", "A rhyming pair of lines", "A poem with fourteen lines"], answer: 1, explanation: "Enjambment is the running of a sentence over the end of a line without a pause." },
      { q: "Diction in poetry refers to what?", options: ["The choice of words", "The number of stanzas", "The rhyme scheme", "The poet's birthplace"], answer: 0, explanation: "Diction is the poet's choice of words: simple or difficult, concrete or abstract." },
      { q: "Assonance is the repetition of what?", options: ["Consonant sounds", "Vowel sounds", "Whole lines", "Rhyming words"], answer: 1, explanation: "Assonance is the repetition of vowel sounds within words." },
      { q: "A statement that seems contradictory but contains a truth is called what?", options: ["Irony", "Paradox", "Euphemism", "Hyperbole"], answer: 1, explanation: "A paradox is a statement that seems contradictory but contains a truth." },
      { q: "When a poet calls death sleep, what device is used?", options: ["Metaphor", "Euphemism", "Alliteration", "Onomatopoeia"], answer: 1, explanation: "Euphemism is a mild way of saying something harsh, such as calling death sleep." },
      { q: "In analysing a poem, what should you do after naming a device?", options: ["Stop and move on", "Explain its effect on meaning and feeling", "Count the words", "Guess the poet's age"], answer: 1, explanation: "A good analysis explains the effect of each device on the poem's meaning, not just its name." }
    ],
    status: "published"
  },
  {
    id: "literature-05",
    subjectId: "literature",
    topic: "African Drama",
    subtopic: "African drama: form and performance",
    title: "African Drama: Form and Performance",
    order: 5,
    introduction: "Drama is literature meant to be performed, and African drama grows from both traditional performance and the modern stage. This lesson explains the forms of drama, its structure, and how African playwrights use the stage.",
    objectives: ["Define drama and identify its main features", "Distinguish tragedy, comedy and tragicomedy", "Describe the structure of a play", "Explain the elements of stagecraft", "Relate African drama to traditional performance"],
    sections: [
      {
        heading: "What Drama Is",
        body: "Drama is a literary work written to be performed by actors on a stage before an audience. Unlike a novel, which is read in private, a play lives in speech, movement, costume and scenery. The playwright writes dialogue, the words the characters speak, and stage directions, the instructions for entrances, exits, gestures and the setting. African drama has two roots: the traditional performances of the village, such as masquerades, dances, storytelling and festivals, and the modern theatre introduced through schools and colonial culture. Great African playwrights, such as Wole Soyinka, Ola Rotimi and J.P. Clark, combine both: they use the modern stage while keeping the music, dance, ritual and communal spirit of African performance."
      },
      {
        heading: "Tragedy, Comedy and Tragicomedy",
        body: "Tragedy is a serious play in which a hero of high standing falls from greatness through a flaw or through fate, and the end is death or disaster. Aristotle, the Greek critic, said tragedy arouses pity and fear and purges them through catharsis. The hero of tragedy, such as a king, is noble but has a tragic flaw, or hamartia, such as pride or stubbornness, which brings his fall. Comedy is a light play that ends happily, often with a marriage or a reconciliation, and it corrects folly through laughter. Tragicomedy mixes the serious and the comic: it treats grave matters but ends without the death of the hero. Many African plays are tragicomedies in spirit, because African life itself mixes laughter and sorrow. When you classify a play, look at the hero, the ending, and the feeling it leaves: pity and fear point to tragedy, laughter and a happy ending point to comedy."
      },
      {
        heading: "The Structure of a Play",
        body: "A play is divided into acts and scenes. An act is a major division, and a scene is a smaller division within an act, usually marked by a change of place or the entrance of new characters. The plot of a play follows a familiar shape: exposition, in which the characters and situation are introduced; rising action, in which conflict grows; climax, the turning point of highest tension; falling action, in which the consequences unfold; and resolution or denouement, in which the conflict is settled. Conflict is the heart of drama: it may be between two characters, between a character and society, or within a character himself. In African drama, conflict often takes the form of tradition against change, or the individual against the community. Soliloquy is a speech in which a character speaks his thoughts aloud while alone on stage, and aside is a short remark to the audience that other characters do not hear."
      },
      {
        heading: "Stagecraft and Performance",
        body: "Stagecraft is everything that makes a play work on stage: the set, the costumes, the lighting, the music, the props and the movement of the actors. In traditional African performance, there is often no separate stage: the performance happens in a village square, the audience surrounds the actors, and the audience joins in with songs and responses. Modern African playwrights keep this communal spirit: they use songs, dances, drums and masquerade figures on the modern stage. The playwright also uses dramatic irony, where the audience knows something the characters do not, and this creates suspense. When you study a play, imagine it on stage: who enters, who speaks, who listens, and what the audience sees and hears. JAMB questions often ask about the function of a song, a dance or a character's entrance, so always think in terms of performance."
      }
    ],
    definitions: [
      { term: "Drama", meaning: "A literary work written to be performed by actors on a stage before an audience." },
      { term: "Tragedy", meaning: "A serious play in which a hero falls from greatness, ending in death or disaster." },
      { term: "Tragic flaw", meaning: "A weakness in the hero, such as pride, that brings about his downfall." },
      { term: "Comedy", meaning: "A light play that ends happily, often with marriage or reconciliation." },
      { term: "Soliloquy", meaning: "A speech in which a character speaks his thoughts aloud while alone on stage." },
      { term: "Aside", meaning: "A short remark to the audience that other characters on stage do not hear." },
      { term: "Stage directions", meaning: "The playwright's instructions for entrances, exits, gestures and setting." }
    ],
    examples: [
      {
        title: "Classifying a play",
        problem: "A play shows a noble king whose pride makes him defy the gods; he dies at the end and the audience feels pity and fear. What kind of play is it?",
        steps: ["Note the hero: a noble king of high standing.", "Note the flaw: pride, which brings his fall.", "Note the ending: death and disaster.", "Note the feeling: pity and fear.", "Match these features to tragedy."],
        answer: "It is a tragedy: a noble hero falls through his tragic flaw, and the end arouses pity and fear."
      },
      {
        title: "Identifying the climax",
        problem: "In a play, the hero publicly defies the king's messenger and refuses to perform the ritual. After this, events move steadily towards his death. What is this moment in the plot?",
        steps: ["Recall the shape of plot: exposition, rising action, climax, falling action, resolution.", "Note that the defiance is the point of highest tension.", "Note that after it, events move towards the end.", "Identify this turning point as the climax.", "Explain that the climax is where the hero's fate is sealed."],
        answer: "It is the climax: the turning point of highest tension, after which the hero's fate moves towards its end."
      }
    ],
    tips: ["Learn the five parts of plot: exposition, rising action, climax, falling action, resolution.", "Classify a play by its hero, its ending and the feeling it leaves.", "Imagine every scene on stage: who enters, who speaks, what the audience sees.", "Know the leading African playwrights and one play each."],
    mistakes: ["Calling every serious play a tragedy; tragedy needs a noble hero and a fall.", "Confusing soliloquy with aside: a soliloquy is a long speech alone, an aside is a short remark.", "Forgetting that stage directions are part of the play.", "Describing a play as if it were a novel."],
    facts: ["Wole Soyinka, Ola Rotimi and J.P. Clark are leading African playwrights.", "A play is divided into acts and scenes.", "The tragic flaw is called hamartia.", "Tragedy arouses pity and fear, leading to catharsis."],
    quiz: [
      { q: "Drama is best defined as what?", options: ["A story read in private", "A literary work written to be performed on stage", "A poem of fourteen lines", "A long prose story"], answer: 1, explanation: "Drama is written to be performed by actors on a stage before an audience." },
      { q: "A tragedy is best described as what?", options: ["A light play ending happily", "A serious play in which a hero falls and dies", "A play with only songs", "A play with no characters"], answer: 1, explanation: "Tragedy is a serious play in which a hero of high standing falls, ending in death or disaster." },
      { q: "The tragic flaw of a hero is also called what?", options: ["Catharsis", "Hamartia", "Aside", "Denouement"], answer: 1, explanation: "Hamartia is the tragic flaw, such as pride, that brings about the hero's fall." },
      { q: "Catharsis in tragedy refers to what?", options: ["The purging of pity and fear", "The first scene", "The hero's costume", "The stage set"], answer: 0, explanation: "Catharsis is the purging or release of pity and fear that tragedy arouses in the audience." },
      { q: "A play that ends happily, often with a marriage, is called what?", options: ["Tragedy", "Comedy", "Epic", "Elegy"], answer: 1, explanation: "Comedy is a light play that ends happily, often with marriage or reconciliation." },
      { q: "The turning point of highest tension in a play is called what?", options: ["Exposition", "Climax", "Resolution", "Aside"], answer: 1, explanation: "The climax is the turning point of highest tension in the plot." },
      { q: "A speech in which a character speaks his thoughts aloud while alone on stage is called what?", options: ["Aside", "Soliloquy", "Dialogue", "Chorus"], answer: 1, explanation: "A soliloquy is a speech by a character alone on stage, speaking his thoughts aloud." },
      { q: "An aside differs from a soliloquy because it is what?", options: ["Longer", "A short remark to the audience that other characters do not hear", "Spoken by the whole cast", "Written in verse only"], answer: 1, explanation: "An aside is a short remark addressed to the audience, unheard by the other characters." },
      { q: "The part of a play where characters and situation are introduced is called what?", options: ["Climax", "Exposition", "Falling action", "Resolution"], answer: 1, explanation: "Exposition introduces the characters and the situation at the start of the play." },
      { q: "Which of these is a leading African playwright?", options: ["Wole Soyinka", "Chinua Achebe", "Ngugi wa Thiong'o", "Buchi Emecheta"], answer: 0, explanation: "Wole Soyinka is a leading African playwright, as are Ola Rotimi and J.P. Clark." },
      { q: "Stage directions tell the actors what?", options: ["What to think", "When to enter and exit, and how to move and speak", "What the audience thinks", "The price of tickets"], answer: 1, explanation: "Stage directions give instructions for entrances, exits, gestures and setting." },
      { q: "Dramatic irony is created when what happens?", options: ["The audience knows something the characters do not", "The play has no plot", "The hero tells a joke", "The play ends happily"], answer: 0, explanation: "Dramatic irony occurs when the audience knows something the characters on stage do not know." },
      { q: "The final settling of the conflict in a play is called what?", options: ["Rising action", "Climax", "Resolution or denouement", "Exposition"], answer: 2, explanation: "The resolution, or denouement, is where the conflict is settled at the end of the play." },
      { q: "Traditional African performance often takes place where?", options: ["In a cinema", "In a village square with the audience around the actors", "In a library", "On radio only"], answer: 1, explanation: "Traditional African performance happens in a village square, with the audience surrounding and joining the actors." },
      { q: "Conflict in African drama often takes which form?", options: ["Tradition against change", "Man against the weather only", "Animals against humans", "No conflict at all"], answer: 0, explanation: "In African drama, conflict often takes the form of tradition against change, or the individual against the community." }
    ],
    status: "published"
  },
  {
    id: "literature-06",
    subjectId: "literature",
    topic: "African Drama",
    subtopic: "Themes and characterisation in African drama",
    title: "Themes and Characterisation in African Drama",
    order: 6,
    introduction: "African plays are built on great conflicts: the old order against the new, the individual against the community, and the ruler against the ruled. This lesson studies the themes and characters of African drama through its leading playwrights and plays.",
    objectives: ["Identify the major themes of African drama", "Explain the role of the hero in African tragedy", "Describe character types in African plays", "Explain the use of the chorus, songs and ritual", "Relate named African plays to their themes"],
    sections: [
      {
        heading: "Major Themes of African Drama",
        body: "African drama returns to a few great themes. The clash between tradition and modernity is central: in Wole Soyinka's Death and the King's Horseman, a king's horseman must follow his dead king in ritual suicide, but colonial rule interrupts the rite, and the community is thrown into crisis. The conflict between the individual and the community is another theme: a man who follows his own will against the custom of his people brings disaster on himself and on others. The abuse of power is a third theme: rulers who use tradition or office to oppress the people. Other themes include the place of the gods and the ancestors, the role of women, and the struggle for freedom. Ola Rotimi's The Gods Are Not to Blame retells the Greek story of Oedipus in a Yoruba setting, showing how fate, pride and the gods shape human life. When you study a play, always ask: what is at stake, who wants what, and what does the ending say about the theme?"
      },
      {
        heading: "The Hero in African Drama",
        body: "The hero of African tragedy is often a man of high standing: a king, a king's horseman, a chief or a priest. He is noble and brave, but he carries a flaw, usually pride or stubbornness, and that flaw brings his fall. In Death and the King's Horseman, Elesin, the king's horseman, is a man of honour and appetite: he delays his ritual death to enjoy life, and the delay destroys him and his community. In J.P. Clark's Song of a Goat, the hero's weakness and the curse on his family lead to tragedy. The hero's fall is not just personal: it shakes the whole community, because in African thought the individual and the community are bound together. The audience feels pity for the hero, because he is noble, and fear, because his fate could be theirs. Learn to describe a hero with both his greatness and his flaw, and to show how the flaw works through the plot."
      },
      {
        heading: "Character Types and the Chorus",
        body: "African plays use a range of character types. Besides the hero, there is the antagonist, who opposes him; the wise elder or priest, who speaks for tradition; the colonial officer, who stands for the new order; and the women, who often see the truth the men miss. The chorus is a group of characters who comment on the action, sing, and speak for the community, a device borrowed from Greek tragedy and close to the African tradition of communal song. In many African plays, women form a chorus that questions the men and exposes their folly. Songs and dances in a play are not decoration: they carry the theme, mark ritual moments, and involve the audience. When a question asks about the function of a song or a chorus, answer in terms of theme and community, not just entertainment."
      },
      {
        heading: "Language, Ritual and Symbol in African Drama",
        body: "The language of African drama is rich with proverbs, praise names, riddles and images drawn from village life. A proverb in a play often carries the moral of a whole scene, and a character who speaks in proverbs shows wisdom and authority. Ritual is central: a sacrifice, a burial or a coronation is not just a ceremony but a moment when the human world meets the world of the gods, and the fate of the community hangs on it. Symbols carry deep meaning: the horse of the king's horseman stands for honour and duty, the market place stands for the life of the community, and the drum stands for communication with the ancestors. The playwright also uses dramatic irony and suspense: the audience often knows the hero is doomed before he does. Study a play by following its symbols and rituals, and you will find its meaning."
      }
    ],
    definitions: [
      { term: "Chorus", meaning: "A group of characters who comment on the action, sing, and speak for the community." },
      { term: "Ritual", meaning: "A solemn ceremony, such as a sacrifice or burial, with religious meaning." },
      { term: "Antagonist", meaning: "The character who opposes the hero." },
      { term: "Proverb", meaning: "A short wise saying that carries the moral of a situation." },
      { term: "Hubris", meaning: "Excessive pride, a common tragic flaw of heroes." },
      { term: "Fate", meaning: "A power believed to decide human life, which characters cannot escape." }
    ],
    examples: [
      {
        title: "Analysing a tragic hero",
        problem: "Elesin, the king's horseman, is a man of honour, but he delays his ritual death to enjoy life, and his community is destroyed. Analyse him as a tragic hero.",
        steps: ["Identify his standing: the king's horseman, a man of honour.", "Identify his flaw: appetite and delay, a form of pride.", "Show how the flaw works: the delay breaks the ritual.", "Show the result: disaster for himself and the community.", "Conclude with pity and fear: he is noble, yet his flaw destroys him."],
        answer: "Elesin is a tragic hero: a noble man whose flaw, the love of life that makes him delay his duty, brings his fall and the ruin of his community."
      },
      {
        title: "Explaining the function of a song",
        problem: "In a play, the women sing a song mocking the men while the hero prepares for a ritual. What is the function of the song?",
        steps: ["Note who sings: the women, acting as a chorus.", "Note the tone: mockery, which questions the men.", "Recall that songs in African drama carry theme, not just entertainment.", "Link the mockery to the theme: the men's blindness.", "Answer with the function: comment, warning and theme."],
        answer: "The song functions as a chorus: it comments on the action, warns of the men's blindness, and carries the theme of the play."
      }
    ],
    tips: ["Know one play per playwright: Soyinka, Rotimi and J.P. Clark at least.", "Describe a hero with both greatness and flaw, with events to prove each.", "Answer song and chorus questions in terms of theme and community.", "Learn the proverbs and symbols of each set play."],
    mistakes: ["Describing the hero as wholly good or wholly bad.", "Saying songs in African drama are only for entertainment.", "Confusing the chorus with the main characters.", "Forgetting that the hero's fall affects the whole community."],
    facts: ["Death and the King's Horseman is by Wole Soyinka.", "The Gods Are Not to Blame by Ola Rotimi retells the Oedipus story in a Yoruba setting.", "Song of a Goat is by J.P. Clark.", "The chorus comments on the action and speaks for the community."],
    quiz: [
      { q: "Death and the King's Horseman was written by whom?", options: ["Ola Rotimi", "Wole Soyinka", "J.P. Clark", "Femi Osofisan"], answer: 1, explanation: "Death and the King's Horseman is by Wole Soyinka." },
      { q: "In Death and the King's Horseman, what is Elesin's duty?", options: ["To become king", "To follow his dead king in ritual suicide", "To lead the army", "To build a palace"], answer: 1, explanation: "Elesin, the king's horseman, must follow his dead king in ritual suicide, but colonial rule interrupts the rite." },
      { q: "The Gods Are Not to Blame retells which story in a Yoruba setting?", options: ["The story of Oedipus", "The story of Hamlet", "The story of Macbeth", "The story of Romeo and Juliet"], answer: 0, explanation: "Ola Rotimi's The Gods Are Not to Blame retells the Greek story of Oedipus in a Yoruba setting." },
      { q: "Who wrote The Gods Are Not to Blame?", options: ["Wole Soyinka", "Ola Rotimi", "J.P. Clark", "Zulu Sofola"], answer: 1, explanation: "The Gods Are Not to Blame is by Ola Rotimi." },
      { q: "Song of a Goat was written by whom?", options: ["J.P. Clark", "Wole Soyinka", "Ola Rotimi", "Efua Sutherland"], answer: 0, explanation: "Song of a Goat is by J.P. Clark." },
      { q: "The chorus in a play is best described as what?", options: ["The main hero", "A group that comments on the action and speaks for the community", "The stage set", "The playwright"], answer: 1, explanation: "The chorus comments on the action, sings, and speaks for the community." },
      { q: "Excessive pride, a common tragic flaw, is called what?", options: ["Hamartia", "Hubris", "Catharsis", "Irony"], answer: 1, explanation: "Hubris is excessive pride, a common tragic flaw of heroes." },
      { q: "A central theme of African drama is the clash between what?", options: ["Rich and poor only", "Tradition and modernity", "Day and night", "Land and sea"], answer: 1, explanation: "The clash between tradition and modernity is central to African drama." },
      { q: "In African drama, songs and dances mainly do what?", options: ["Fill time", "Carry the theme and mark ritual moments", "Show off costumes", "Confuse the audience"], answer: 1, explanation: "Songs and dances carry the theme, mark ritual moments, and involve the audience." },
      { q: "Elesin's flaw in Death and the King's Horseman is best described as what?", options: ["Cowardice", "Love of life that makes him delay his duty", "Hatred of his king", "Ignorance of custom"], answer: 1, explanation: "Elesin delays his ritual death to enjoy life, and the delay destroys him and his community." },
      { q: "The character who opposes the hero is called what?", options: ["Protagonist", "Antagonist", "Chorus", "Foil"], answer: 1, explanation: "The antagonist is the character who opposes the hero." },
      { q: "A short wise saying that carries the moral of a situation is called what?", options: ["A riddle", "A proverb", "A song", "A curse"], answer: 1, explanation: "A proverb is a short wise saying that carries the moral of a situation." },
      { q: "In African thought, the hero's fall affects whom?", options: ["Only himself", "Himself and the whole community", "Only his enemies", "Nobody"], answer: 1, explanation: "In African thought the individual and the community are bound together, so the hero's fall shakes the whole community." },
      { q: "Ritual in African drama is important because it does what?", options: ["Wastes time", "Joins the human world to the world of the gods", "Makes the play longer", "Hides the plot"], answer: 1, explanation: "Ritual is a moment when the human world meets the world of the gods, and the fate of the community hangs on it." },
      { q: "When studying a play, what should you ask about its theme?", options: ["What is at stake, who wants what, and what does the ending say", "How many pages it has", "What the tickets cost", "Where the author was born"], answer: 0, explanation: "Ask what is at stake, who wants what, and what the ending says about the theme." }
    ],
    status: "published"
  },
  {
    id: "literature-07",
    subjectId: "literature",
    topic: "Literary Devices and Appreciation",
    subtopic: "Figures of speech",
    title: "Literary Devices: Figures of Speech",
    order: 7,
    introduction: "Figures of speech are the tools writers use to make language vivid, musical and memorable. This lesson gathers the figures JAMB tests most often, with clear definitions and examples you can recognise in any passage.",
    objectives: ["Define and identify simile, metaphor and personification", "Identify irony, sarcasm, hyperbole and understatement", "Identify oxymoron, paradox and antithesis", "Identify euphemism, pun and rhetorical question", "Apply figures of speech to unseen passages"],
    sections: [
      {
        heading: "Comparison: Simile, Metaphor and Personification",
        body: "Comparison is the most common figure of speech. A simile compares two unlike things using like or as: her voice was like honey, or he stood as firm as a rock. A metaphor compares directly, without like or as: her voice was honey, or he was a rock in the storm. Personification gives human qualities to animals, objects or ideas: the sun smiled on the village, or fear gripped his heart. Synecdoche uses a part to stand for the whole, as when hands means workers, and metonymy uses a related thing to stand for another, as when the crown means the king. The test in the examination is simple: if you see like or as joining two things, it is a simile; if the comparison is direct, it is a metaphor; if a non-human thing acts like a person, it is personification."
      },
      {
        heading: "Irony, Sarcasm and Exaggeration",
        body: "Irony says one thing and means the opposite, or shows a contrast between expectation and reality. Verbal irony is saying the opposite of what is meant: calling a heavy rain a lovely day. Situational irony is when events turn out the opposite of what was expected: a fire station burns down. Dramatic irony is when the audience knows what the characters do not. Sarcasm is bitter irony used to mock or wound: a teacher might say well done to a student who has failed badly. Hyperbole is deliberate exaggeration for effect: I have waited for a million years. Understatement, also called litotes, is the opposite: it says less than the truth, as when a man who has won a fortune says things are not too bad. Learn to tell irony from a simple lie: irony is meant to be understood as the opposite of what is said."
      },
      {
        heading: "Contrast: Oxymoron, Paradox and Antithesis",
        body: "Some figures work by joining opposites. An oxymoron joins two contradictory words: bitter sweet, living dead, deafening silence. A paradox is a statement that seems contradictory but contains a truth: the child is father of the man, or to save your life you must lose it. Antithesis places two opposite ideas side by side in a balanced sentence: to err is human, to forgive divine, or love is not a feeling but a decision. These figures are powerful because they force the reader to think: the contradiction is not a mistake but a way of expressing a deep truth. In the examination, if you see two opposite words joined together, think oxymoron; if you see a whole sentence that seems impossible yet true, think paradox; if you see a balanced pair of opposites, think antithesis."
      },
      {
        heading: "Sound, Wordplay and Questions",
        body: "Other figures work through sound and wordplay. Alliteration repeats consonant sounds at the beginnings of words; assonance repeats vowel sounds; onomatopoeia imitates sounds. A pun is a play on words with two meanings: a fisherman might say he is hooked on fishing. A rhetorical question is a question asked for effect, not for an answer: who does not love his mother? Apostrophe is an address to an absent person or thing, as when a poet speaks to death or to the moon. Euphemism softens a harsh truth: the old man has passed away instead of the old man has died. Repetition and parallelism repeat words and structures for emphasis. When you meet a device in a passage, name it, quote the words, and explain the effect: what does it make the reader feel or understand?"
      }
    ],
    definitions: [
      { term: "Simile", meaning: "A comparison using like or as." },
      { term: "Metaphor", meaning: "A direct comparison without like or as." },
      { term: "Oxymoron", meaning: "Two contradictory words joined together, such as deafening silence." },
      { term: "Paradox", meaning: "A statement that seems contradictory but contains a truth." },
      { term: "Antithesis", meaning: "Two opposite ideas placed side by side in a balanced sentence." },
      { term: "Pun", meaning: "A play on words with two meanings." },
      { term: "Rhetorical question", meaning: "A question asked for effect, not for an answer." }
    ],
    examples: [
      {
        title: "Telling simile, metaphor and personification apart",
        problem: "Three lines are given: (a) The wind howled through the trees. (b) Her smile was like the morning sun. (c) Her smile was the morning sun. Identify each device.",
        steps: ["Read line (a): the wind howls, a human action, so it is personification.", "Read line (b): like joins smile and sun, so it is a simile.", "Read line (c): was joins smile and sun directly, with no like, so it is a metaphor.", "Check each answer against the definitions.", "State all three answers."],
        answer: "(a) Personification, (b) simile, (c) metaphor."
      },
      {
        title: "Identifying oxymoron and paradox",
        problem: "A passage says: It was a deafening silence, and the more he spoke, the less we understood. Identify the two devices.",
        steps: ["Look at deafening silence: two opposite words joined together.", "Name it: oxymoron.", "Look at the second sentence: speaking more leads to understanding less.", "Note it seems contradictory yet contains a truth.", "Name it: paradox."],
        answer: "Deafening silence is an oxymoron; the more he spoke, the less we understood is a paradox."
      }
    ],
    tips: ["Like or as means simile; no like or as means metaphor.", "Two opposite words together means oxymoron; a contradictory sentence means paradox.", "Always quote the words that show the device.", "Explain the effect after naming the device."],
    mistakes: ["Calling every comparison a metaphor.", "Confusing oxymoron with paradox.", "Calling sarcasm plain rudeness without noting the irony.", "Naming a device without quoting the words that prove it."],
    facts: ["A simile uses like or as; a metaphor does not.", "Irony is saying or showing the opposite of what is expected.", "Hyperbole is deliberate exaggeration.", "A rhetorical question is asked for effect, not for an answer."],
    quiz: [
      { q: "Which of these is a simile?", options: ["He is a lion", "He roars like a lion", "The lion roared", "A lion in the forest"], answer: 1, explanation: "A simile uses like or as, so he roars like a lion is a simile." },
      { q: "Which of these is a metaphor?", options: ["As brave as a lion", "Like a lion", "He is a lion", "The lion is brave"], answer: 2, explanation: "A metaphor compares directly without like or as, so he is a lion is a metaphor." },
      { q: "The sun smiled on the village is an example of what?", options: ["Simile", "Metaphor", "Personification", "Hyperbole"], answer: 2, explanation: "Giving the sun the human action of smiling is personification." },
      { q: "Calling a heavy rain a lovely day is an example of what?", options: ["Verbal irony", "Simile", "Metaphor", "Alliteration"], answer: 0, explanation: "Verbal irony says the opposite of what is meant." },
      { q: "Deafening silence is an example of what?", options: ["Paradox", "Oxymoron", "Antithesis", "Pun"], answer: 1, explanation: "An oxymoron joins two contradictory words, such as deafening and silence." },
      { q: "To err is human, to forgive divine is an example of what?", options: ["Oxymoron", "Paradox", "Antithesis", "Pun"], answer: 2, explanation: "Antithesis places two opposite ideas side by side in a balanced sentence." },
      { q: "I have waited for a million years is an example of what?", options: ["Understatement", "Hyperbole", "Euphemism", "Irony"], answer: 1, explanation: "Hyperbole is deliberate exaggeration for effect." },
      { q: "A play on words with two meanings is called what?", options: ["Pun", "Paradox", "Simile", "Metaphor"], answer: 0, explanation: "A pun is a play on words with two meanings." },
      { q: "A question asked for effect, not for an answer, is called what?", options: ["Rhetorical question", "Irony", "Apostrophe", "Oxymoron"], answer: 0, explanation: "A rhetorical question is asked for effect, not for an answer." },
      { q: "Saying the old man has passed away instead of has died is an example of what?", options: ["Hyperbole", "Euphemism", "Irony", "Pun"], answer: 1, explanation: "Euphemism is a mild way of saying something harsh." },
      { q: "When the audience knows something the characters do not, it is called what?", options: ["Verbal irony", "Situational irony", "Dramatic irony", "Sarcasm"], answer: 2, explanation: "Dramatic irony occurs when the audience knows what the characters on stage do not." },
      { q: "The crown means the king is an example of what?", options: ["Simile", "Metonymy", "Oxymoron", "Pun"], answer: 1, explanation: "Metonymy uses a related thing, the crown, to stand for another, the king." },
      { q: "Hands means workers is an example of what?", options: ["Synecdoche", "Metaphor", "Irony", "Hyperbole"], answer: 0, explanation: "Synecdoche uses a part, hands, to stand for the whole, workers." },
      { q: "A statement that seems contradictory but contains a truth is called what?", options: ["Oxymoron", "Paradox", "Antithesis", "Irony"], answer: 1, explanation: "A paradox seems contradictory but contains a truth." },
      { q: "Bitter irony used to mock or wound is called what?", options: ["Sarcasm", "Euphemism", "Hyperbole", "Pun"], answer: 0, explanation: "Sarcasm is bitter irony used to mock or wound." }
    ],
    status: "published"
  },
  {
    id: "literature-08",
    subjectId: "literature",
    topic: "Literary Devices and Appreciation",
    subtopic: "Literary appreciation: plot, setting and point of view",
    title: "Literary Appreciation: Plot, Setting and Point of View",
    order: 8,
    introduction: "Literary appreciation is the skill of reading a work closely and explaining how it works. This lesson brings together plot, setting, point of view, theme and style, and shows you how to write a good appreciation answer.",
    objectives: ["Explain the elements of plot: exposition, climax and resolution", "Explain the functions of setting", "Distinguish the main points of view", "Explain theme, style and diction", "Write a structured appreciation of a passage"],
    sections: [
      {
        heading: "Plot: How Stories Are Built",
        body: "Plot is the arrangement of events in a story. The exposition introduces the characters, the setting and the situation. The rising action builds the conflict through a series of events, each raising the tension. The climax is the turning point, the moment of highest tension, after which the outcome becomes clear. The falling action shows the consequences, and the resolution settles the conflict. Some plots are linear, moving straight from beginning to end; others use flashback, or begin in the middle of the action, which is called in medias res. Suspense is the tension that makes the reader want to know what happens next, and it is created by withholding information, by danger, or by a question left unanswered. When you analyse a plot, trace the conflict: who wants what, what stands in the way, and how it is resolved."
      },
      {
        heading: "Setting and Atmosphere",
        body: "Setting is the time and place of a story, and it does more than provide a background. A setting can reveal character: a man who lives in a palace is judged differently from a man who lives in a hut. A setting can create atmosphere or mood: a dark forest at night creates fear, while a market at noon creates life and noise. A setting can symbolise a theme: the village can stand for tradition, the city for change. Setting can also drive the plot: a drought may force a family to move, or a war may divide a community. In African literature, setting is often deeply social: the compound, the market, the shrine and the school are places with rules, and breaking those rules has consequences. When you write about setting, always say what it is, what feeling it creates, and what it shows about the theme."
      },
      {
        heading: "Point of View and Narrative Voice",
        body: "Point of view decides what the reader can know. In first-person narration, the narrator is a character who says I, and the reader sees only what that character sees; such a narrator may be unreliable, hiding or misunderstanding the truth. In third-person omniscient narration, the narrator knows everything, enters every mind, and comments freely. In third-person limited narration, the narrator follows one character closely. In the objective point of view, the narrator reports only what can be seen and heard, like a camera, without entering any mind. African novelists often choose the omniscient narrator to present a whole community, while modern writers may use first-person to give an intimate, personal voice. Always ask: who is telling this story, what can they know, and what can they not know?"
      },
      {
        heading: "Theme, Style and How to Appreciate a Passage",
        body: "Theme is the central idea of a work; style is the way the writer expresses it, through diction, imagery, sentence length and rhythm. Diction may be simple or elaborate, formal or colloquial, and it reveals the writer's world: a writer who uses proverbs and local images writes in an African voice. To appreciate a passage in the examination, use a clear method. First, read the passage twice and state its subject in one sentence. Second, identify its theme. Third, pick two or three devices or features, such as imagery, setting or point of view, quote the words, and explain their effect. Fourth, comment on the tone and mood. Finally, sum up what the passage shows about the work as a whole. A good appreciation is short, precise and always tied to the words on the page."
      }
    ],
    definitions: [
      { term: "Exposition", meaning: "The opening of a story, introducing characters, setting and situation." },
      { term: "Climax", meaning: "The turning point of highest tension in a plot." },
      { term: "Resolution", meaning: "The settling of the conflict at the end of a story." },
      { term: "Suspense", meaning: "The tension that makes the reader want to know what happens next." },
      { term: "Atmosphere", meaning: "The feeling or mood created by a setting or description." },
      { term: "In medias res", meaning: "Beginning a story in the middle of the action." },
      { term: "Unreliable narrator", meaning: "A first-person narrator who hides or misunderstands the truth." }
    ],
    examples: [
      {
        title: "Analysing setting and mood",
        problem: "A passage describes a village at dusk: the drums are silent, the market is empty, and a lone dog barks at the moon. What does the setting do?",
        steps: ["Identify the setting: a village at dusk, empty and silent.", "Note the details: silent drums, empty market, lone dog.", "Ask what feeling these create: fear, loneliness, foreboding.", "Link the setting to the story: something bad is about to happen.", "Answer with setting, mood and function."],
        answer: "The setting creates a mood of fear and foreboding: the silent, empty village warns the reader that danger is near."
      },
      {
        title: "Writing a short appreciation",
        problem: "A short passage shows a mother hiding food for her children during a war. How would you appreciate it?",
        steps: ["State the subject: a mother's love in wartime.", "Identify the theme: love and sacrifice.", "Pick a feature: the act of hiding food shows care and danger.", "Note the tone: tender and anxious.", "Sum up: the passage shows how war tests love."],
        answer: "The passage shows a mother's love and sacrifice in war: hiding food reveals both her care and the danger around her, in a tender, anxious tone."
      }
    ],
    tips: ["Trace plot through conflict: who wants what, what blocks them, how it ends.", "Always link setting to mood and theme.", "Ask who is telling the story before you trust the narrator.", "Use the method: subject, theme, devices with quotes, tone, summary."],
    mistakes: ["Retelling the story instead of appreciating it.", "Confusing theme with plot.", "Calling every narrator omniscient.", "Writing about setting without saying what feeling it creates."],
    facts: ["Plot moves from exposition through rising action to climax and resolution.", "The omniscient narrator knows everything and enters every mind.", "Setting can reveal character, create mood and drive plot.", "A good appreciation is tied to the words on the page."],
    quiz: [
      { q: "The opening of a story, introducing characters and situation, is called what?", options: ["Climax", "Exposition", "Resolution", "Falling action"], answer: 1, explanation: "Exposition introduces the characters, the setting and the situation." },
      { q: "The turning point of highest tension in a plot is called what?", options: ["Exposition", "Rising action", "Climax", "Resolution"], answer: 2, explanation: "The climax is the turning point of highest tension." },
      { q: "Beginning a story in the middle of the action is called what?", options: ["Flashback", "In medias res", "Suspense", "Exposition"], answer: 1, explanation: "In medias res means beginning in the middle of the action." },
      { q: "Suspense is best defined as what?", options: ["The end of a story", "The tension that makes the reader want to know what happens next", "A description of a place", "A character's speech"], answer: 1, explanation: "Suspense is the tension that makes the reader want to know what happens next." },
      { q: "Setting can do all of the following except what?", options: ["Reveal character", "Create mood", "Drive the plot", "Remove the need for a theme"], answer: 3, explanation: "Setting reveals character, creates mood and drives plot, but it does not remove the need for a theme." },
      { q: "A first-person narrator who hides or misunderstands the truth is called what?", options: ["Omniscient narrator", "Unreliable narrator", "Objective narrator", "Chorus"], answer: 1, explanation: "An unreliable narrator is a first-person narrator who hides or misunderstands the truth." },
      { q: "In the objective point of view, the narrator does what?", options: ["Enters every mind", "Reports only what can be seen and heard", "Tells his own story", "Comments freely"], answer: 1, explanation: "The objective narrator reports only what can be seen and heard, like a camera." },
      { q: "The feeling created by a setting or description is called what?", options: ["Plot", "Atmosphere", "Diction", "Theme"], answer: 1, explanation: "Atmosphere is the feeling or mood created by a setting or description." },
      { q: "Theme differs from plot because theme is what?", options: ["What happens", "What the story means", "Where the story happens", "Who tells the story"], answer: 1, explanation: "Plot is what happens; theme is what the story means." },
      { q: "Diction refers to what?", options: ["The choice of words", "The number of chapters", "The setting", "The climax"], answer: 0, explanation: "Diction is the writer's choice of words." },
      { q: "In a good appreciation, what should you do after naming a device?", options: ["Quote the words and explain its effect", "Stop immediately", "Retell the whole story", "Guess the author's age"], answer: 0, explanation: "A good appreciation quotes the words and explains the effect of each device." },
      { q: "Which point of view allows the narrator to enter every character's mind?", options: ["First-person", "Third-person limited", "Third-person omniscient", "Objective"], answer: 2, explanation: "The omniscient narrator knows everything and can enter every mind." },
      { q: "A village setting in African literature often stands for what?", options: ["Tradition", "Space travel", "Modern industry", "The sea"], answer: 0, explanation: "The village often stands for tradition, while the city stands for change." },
      { q: "The falling action of a plot comes when?", options: ["Before the exposition", "After the climax", "Before the rising action", "At the very start"], answer: 1, explanation: "The falling action follows the climax and shows its consequences." },
      { q: "What is the first step in appreciating a passage?", options: ["Write about the author", "Read it twice and state its subject in one sentence", "Count the words", "Memorise it"], answer: 1, explanation: "First read the passage twice and state its subject in one sentence, then find its theme." }
    ],
    status: "published"
  },
  {
    id: "literature-09",
    subjectId: "literature",
    topic: "Unseen Prose and Poetry",
    subtopic: "Reading unseen prose passages",
    title: "Reading Unseen Prose Passages",
    order: 9,
    introduction: "In the examination you will meet prose passages you have never seen before. This lesson teaches you a reliable method for reading them: finding the subject, the theme, the tone and the devices, and answering questions from the words on the page.",
    objectives: ["Read an unseen passage twice with a purpose", "Identify the subject, theme and tone of a passage", "Find the meaning of words from context", "Identify devices and their effects in a passage", "Answer inference and summary questions accurately"],
    sections: [
      {
        heading: "A Method for Unseen Prose",
        body: "Never read an unseen passage once and rush to the questions. Read it first quickly to get the general sense: who is involved, where it happens, and what changes. Read it a second time slowly, underlining the key words: names, strong verbs, repeated words, and any image or comparison. Then ask four questions: what is the subject, what is the theme, what is the tone, and what is the writer's purpose? The subject is what the passage is about, in one sentence. The theme is what it means. The tone is the writer's attitude: angry, sad, mocking, hopeful. The purpose may be to inform, to persuade, to entertain or to criticise. Keep your answers tied to the passage: if you cannot point to a word or a sentence that supports your answer, do not choose it."
      },
      {
        heading: "Words in Context",
        body: "Many questions ask for the meaning of a word as used in the passage. Do not give the dictionary meaning; give the meaning the word has in that sentence. Read the sentence around the word, and look for clues: a word that follows it, an example, or a contrast. If a word is described as stubborn, and the sentence contrasts it with obedient, the meaning is clear from the contrast. If a word is unfamiliar, break it into parts, or replace it with a simpler word and see if the sentence still makes sense. Watch out for words used ironically: a writer may call a cruel man kind, and the context will show the opposite is meant. Always test your answer by putting it back into the sentence."
      },
      {
        heading: "Inference and Evidence",
        body: "Inference is reading between the lines: drawing a conclusion that the passage suggests but does not state directly. If a passage says a man locked his door, drew his curtains and sat in the dark, you may infer that he was afraid or hiding, even though the word afraid never appears. Inference questions are common in JAMB, and they are the ones students get wrong most often, because they answer from what they think, not from what the passage shows. The rule is simple: an inference must be supported by evidence in the passage. Gather two or three details that point the same way before you conclude. Also learn to spot what a passage does NOT say: if the question asks which statement is true according to the passage, eliminate every option that the passage contradicts or never mentions."
      },
      {
        heading: "Summary and Main Idea Questions",
        body: "Some questions ask for the main idea of a passage or of a paragraph. The main idea is usually found in the first or last sentence of a paragraph, or in the sentence that all the other sentences support. A summary question asks you to choose the sentence that best captures the whole passage: it must be broad enough to cover the passage, but not so broad that it could fit any passage. Avoid options that cover only one detail, and avoid options that add ideas the passage never mentions. A useful habit is to write the main idea in your own words, in one sentence, before you look at the options; then choose the option closest to your sentence. This protects you from being pulled towards an attractive but wrong option."
      }
    ],
    definitions: [
      { term: "Unseen passage", meaning: "A passage in the examination that the candidate has not studied before." },
      { term: "Inference", meaning: "A conclusion drawn from evidence in a passage, though not stated directly." },
      { term: "Tone", meaning: "The writer's attitude towards the subject, such as angry, sad or mocking." },
      { term: "Main idea", meaning: "The central point of a passage or paragraph." },
      { term: "Context", meaning: "The words and sentences around a word, which show its meaning." },
      { term: "Purpose", meaning: "What the writer aims to do, such as inform, persuade, entertain or criticise." }
    ],
    examples: [
      {
        title: "Finding a word's meaning from context",
        problem: "A passage says: The old chief was obstinate; he refused every plea, even from his own sons. What does obstinate mean here?",
        steps: ["Read the sentence around the word.", "Note the clue: he refused every plea, even from his sons.", "Replace obstinate with a simpler word: stubborn.", "Test it: the old chief was stubborn fits the sentence.", "Answer with the contextual meaning."],
        answer: "Obstinate means stubborn: the chief refused every plea, even from his own sons."
      },
      {
        title: "Making a supported inference",
        problem: "A passage says: Ada locked her door, drew her curtains, and sat in the dark until morning. What can be inferred about Ada?",
        steps: ["Gather the details: locked door, drawn curtains, sitting in the dark.", "Ask what these details point to: fear, hiding, or sorrow.", "Check that the word afraid never appears, so this is an inference.", "Choose the inference the details support: she was afraid or hiding.", "State the inference with its evidence."],
        answer: "Ada was afraid or hiding: locking the door, drawing the curtains and sitting in the dark all point to fear."
      }
    ],
    tips: ["Read every unseen passage twice before looking at the questions.", "Write the main idea in your own words before choosing an option.", "Test a word's meaning by putting your answer back into the sentence.", "An inference must have evidence in the passage."],
    mistakes: ["Answering from general knowledge instead of from the passage.", "Giving the dictionary meaning instead of the contextual meaning.", "Choosing an option that covers only one detail as the main idea.", "Making an inference with no evidence in the passage."],
    facts: ["Read an unseen passage twice: first for the general sense, then slowly for detail.", "The main idea is often in the first or last sentence of a paragraph.", "Tone is the writer's attitude; mood is the reader's feeling.", "Eliminate options the passage contradicts or never mentions."],
    quiz: [
      { q: "What is the first step in tackling an unseen prose passage?", options: ["Answer the questions at once", "Read the passage quickly for the general sense", "Memorise the passage", "Look up every word"], answer: 1, explanation: "Read the passage first quickly to get the general sense, then slowly for detail." },
      { q: "The subject of a passage is best described as what?", options: ["What the passage means", "What the passage is about, in one sentence", "The writer's attitude", "The last sentence"], answer: 1, explanation: "The subject is what the passage is about, in one sentence." },
      { q: "When a question asks for a word's meaning as used in the passage, you should give what?", options: ["The dictionary meaning", "The meaning the word has in that sentence", "The longest meaning", "The first meaning you think of"], answer: 1, explanation: "Give the contextual meaning, the meaning the word has in that sentence." },
      { q: "Inference means what?", options: ["Copying a sentence from the passage", "Drawing a conclusion the passage suggests but does not state", "Guessing without evidence", "Counting the words"], answer: 1, explanation: "Inference is drawing a conclusion that the passage suggests but does not state directly." },
      { q: "A good inference must have what?", options: ["No evidence", "Evidence in the passage", "A long explanation", "The writer's name"], answer: 1, explanation: "An inference must be supported by evidence in the passage." },
      { q: "The writer's attitude towards the subject is called what?", options: ["Mood", "Tone", "Theme", "Plot"], answer: 1, explanation: "Tone is the writer's attitude, such as angry, sad or mocking." },
      { q: "The main idea of a paragraph is often found where?", options: ["In the middle word", "In the first or last sentence", "In the title only", "Nowhere"], answer: 1, explanation: "The main idea is usually in the first or last sentence, or in the sentence the others support." },
      { q: "When choosing a summary option, you should avoid an option that does what?", options: ["Covers the whole passage", "Covers only one detail", "Uses simple words", "Is short"], answer: 1, explanation: "A summary must cover the whole passage, not just one detail." },
      { q: "A useful habit before choosing a main-idea option is to do what?", options: ["Write the main idea in your own words first", "Choose the longest option", "Choose the first option", "Skip the question"], answer: 0, explanation: "Writing the main idea in your own words first protects you from attractive wrong options." },
      { q: "If a passage says a man locked his door and sat in the dark, what can be inferred?", options: ["He was happy", "He was afraid or hiding", "He was cooking", "He was travelling"], answer: 1, explanation: "Locking the door and sitting in the dark point to fear or hiding." },
      { q: "Which of these is a possible purpose of a passage?", options: ["To inform", "To count words", "To hide the theme", "To confuse the reader"], answer: 0, explanation: "A writer's purpose may be to inform, persuade, entertain or criticise." },
      { q: "When a word is used ironically, what should you do?", options: ["Take it literally", "Let the context show the opposite is meant", "Ignore the sentence", "Look it up in a dictionary only"], answer: 1, explanation: "Irony means the opposite is intended, and the context shows this." },
      { q: "To answer a which statement is true question, you should do what?", options: ["Choose the option that sounds true", "Eliminate options the passage contradicts or never mentions", "Choose the longest option", "Guess at random"], answer: 1, explanation: "Eliminate every option that the passage contradicts or never mentions, then choose what remains." },
      { q: "Context means what?", options: ["The words and sentences around a word", "The title of the book", "The writer's birthplace", "The number of pages"], answer: 0, explanation: "Context is the words and sentences around a word, which show its meaning." },
      { q: "Why should you underline key words on the second reading?", options: ["To make the page look busy", "To mark names, strong verbs and repeated words for the questions", "To waste time", "To memorise the passage"], answer: 1, explanation: "Underlining key words marks the details you will need for the questions." }
    ],
    status: "published"
  },
  {
    id: "literature-10",
    subjectId: "literature",
    topic: "Unseen Prose and Poetry",
    subtopic: "Reading unseen poetry",
    title: "Reading Unseen Poetry",
    order: 10,
    introduction: "An unseen poem can look frightening, but every poem can be opened with the same keys: speaker, subject, tone, imagery and form. This lesson teaches you to read an unseen poem step by step and to answer questions on it with confidence.",
    objectives: ["Identify the speaker and the subject of an unseen poem", "Describe the tone and mood of a poem", "Identify devices in an unseen poem", "Explain the theme of an unseen poem", "Answer questions on form, rhyme and structure"],
    sections: [
      {
        heading: "Opening an Unseen Poem",
        body: "Begin by reading the poem aloud in your mind, slowly, from start to finish. Do not stop at a difficult word: keep going and let the whole poem sink in. Then read it again, and ask the basic questions: who is speaking, to whom, and about what? The speaker may be the poet, a lover, a mother, a soldier, or a voice speaking for a whole people. The subject is what the poem is about, in one sentence. The theme is what the poem means. Many students fail unseen poetry because they try to understand every word before they understand the whole poem; the whole poem is the key to the parts, not the other way round. Once you know the speaker and the subject, the difficult words become easier, because you know what they must mean."
      },
      {
        heading: "Tone, Mood and Theme in a Poem",
        body: "Tone is the poet's attitude: bitter, hopeful, mocking, tender, angry or calm. You can hear tone in the words the poet chooses: harsh words suggest anger, soft words suggest tenderness, and words of praise suggest admiration. Mood is the feeling the poem creates in you: sorrow, joy, fear or peace. A poem about a funeral will usually have a sorrowful mood, while a poem about a wedding will have a joyful one. Theme is the central idea: love, death, freedom, injustice, nature or identity. To find the theme, ask what the poem keeps returning to, and what the last lines say. The last lines of a poem often carry its message, just as the last scene of a play carries its meaning. When you answer a tone question, name the tone and quote a word that proves it."
      },
      {
        heading: "Devices in Unseen Poetry",
        body: "Questions on unseen poetry often ask you to identify a device in a line. Work through the devices you know: is there a comparison with like or as, which would be a simile? Is there a direct comparison, which would be a metaphor? Does a non-human thing act like a person, which would be personification? Is there a repeated sound, which would be alliteration or assonance? Is there an image that appeals to the senses, which would be imagery? Is there a word that stands for something larger, which would be a symbol? Always quote the words and explain the effect: what does the device make the reader see, hear or feel? A device question that is answered with a name only, without a quotation and an effect, is only half answered."
      },
      {
        heading: "Form, Rhyme and Structure",
        body: "Form questions ask about the shape of the poem: how many stanzas it has, how many lines each stanza has, and what rhyme scheme it follows. A stanza is a group of lines, like a paragraph in prose. A couplet is two lines, a tercet is three, a quatrain is four, and a sonnet has fourteen lines. Rhyme scheme is the pattern of rhymes at the ends of lines, written with letters: abab means the first and third lines rhyme and the second and fourth rhyme. Rhythm is the beat of the poem, and enjambment is the running of a sentence over a line end. Free verse has no regular rhyme or metre, while a ballad has a regular rhythm and a story. When a question asks about form, count the lines, mark the rhymes, and describe the pattern you see."
      }
    ],
    definitions: [
      { term: "Stanza", meaning: "A group of lines in a poem, like a paragraph in prose." },
      { term: "Couplet", meaning: "Two lines of verse, usually rhyming." },
      { term: "Quatrain", meaning: "A stanza of four lines." },
      { term: "Rhyme scheme", meaning: "The pattern of rhymes at the ends of lines, written with letters such as abab." },
      { term: "Free verse", meaning: "Poetry with no regular rhyme or metre." },
      { term: "Speaker", meaning: "The voice speaking in a poem, who may not be the poet." },
      { term: "Ballad", meaning: "A song-like narrative poem with a regular rhythm." }
    ],
    examples: [
      {
        title: "Finding tone from word choice",
        problem: "A poem about a dead soldier uses the words cold, silent, empty and dark. What is the tone and mood?",
        steps: ["Gather the key words: cold, silent, empty, dark.", "Ask what attitude they show: sorrow and grief.", "Name the tone: sorrowful or mournful.", "Ask what feeling they create in the reader: sorrow.", "Name the mood: sorrowful."],
        answer: "The tone is sorrowful and mournful, and the mood is sorrowful: the cold, silent, empty and dark words create grief."
      },
      {
        title: "Working out a rhyme scheme",
        problem: "A four-line stanza ends with the words day, night, play, light. What is the rhyme scheme?",
        steps: ["List the end words: day, night, play, light.", "Note that day rhymes with play, so mark them a.", "Note that night rhymes with light, so mark them b.", "Write the pattern in order: a, b, a, b.", "State the rhyme scheme."],
        answer: "The rhyme scheme is abab: day rhymes with play, and night rhymes with light."
      }
    ],
    tips: ["Read the whole poem before worrying about difficult words.", "The last lines often carry the poem's message.", "Name the tone and quote a word that proves it.", "Count lines and mark rhymes before answering form questions."],
    mistakes: ["Confusing the poet with the speaker of the poem.", "Confusing tone with mood.", "Naming a device without quoting the words.", "Trying to understand every word before understanding the whole poem."],
    facts: ["A quatrain is a stanza of four lines.", "A sonnet has fourteen lines.", "Rhyme scheme abab means lines 1 and 3 rhyme, and lines 2 and 4 rhyme.", "Free verse has no regular rhyme or metre."],
    quiz: [
      { q: "What should you do first with an unseen poem?", options: ["Look up every word", "Read it slowly from start to finish", "Answer the questions first", "Count the words"], answer: 1, explanation: "Read the poem aloud in your mind, slowly, from start to finish, before worrying about difficult words." },
      { q: "The voice speaking in a poem is called what?", options: ["The poet", "The speaker", "The reader", "The chorus"], answer: 1, explanation: "The speaker is the voice speaking in a poem, who may not be the poet." },
      { q: "Tone in a poem refers to what?", options: ["The reader's feeling", "The poet's attitude", "The number of lines", "The rhyme scheme"], answer: 1, explanation: "Tone is the poet's attitude, such as bitter, hopeful or mocking." },
      { q: "A stanza of four lines is called what?", options: ["Couplet", "Tercet", "Quatrain", "Sonnet"], answer: 2, explanation: "A quatrain is a stanza of four lines." },
      { q: "A couplet is made up of how many lines?", options: ["One", "Two", "Three", "Four"], answer: 1, explanation: "A couplet is two lines of verse, usually rhyming." },
      { q: "The rhyme scheme abab means what?", options: ["All lines rhyme", "Lines 1 and 3 rhyme, and lines 2 and 4 rhyme", "No lines rhyme", "Only the last lines rhyme"], answer: 1, explanation: "In abab, the first and third lines rhyme and the second and fourth rhyme." },
      { q: "Free verse is best described as poetry with what?", options: ["Strict rhyme and metre", "No regular rhyme or metre", "Fourteen lines", "A chorus"], answer: 1, explanation: "Free verse has no regular rhyme or metre." },
      { q: "Where is the message of a poem often found?", options: ["In the first word", "In the last lines", "In the title only", "In the middle word"], answer: 1, explanation: "The last lines of a poem often carry its message." },
      { q: "A ballad is best described as what?", options: ["A song-like narrative poem with a regular rhythm", "A poem of fourteen lines", "A poem with no rhyme", "A play in verse"], answer: 0, explanation: "A ballad is a song-like narrative poem with a regular rhythm." },
      { q: "How many lines does a sonnet have?", options: ["Four", "Eight", "Twelve", "Fourteen"], answer: 3, explanation: "A sonnet has fourteen lines." },
      { q: "When answering a device question on a poem, what should you do?", options: ["Name the device only", "Quote the words and explain the effect", "Guess the poet's name", "Count the stanzas"], answer: 1, explanation: "Quote the words that show the device and explain what it makes the reader see, hear or feel." },
      { q: "Harsh words in a poem usually suggest which tone?", options: ["Tender", "Angry", "Joyful", "Calm"], answer: 1, explanation: "Harsh words suggest an angry tone, while soft words suggest tenderness." },
      { q: "A tercet is a stanza of how many lines?", options: ["Two", "Three", "Four", "Five"], answer: 1, explanation: "A tercet is a stanza of three lines." },
      { q: "To find the theme of a poem, you should ask what?", options: ["What the poem keeps returning to", "How many words it has", "When the poet was born", "What the book costs"], answer: 0, explanation: "To find the theme, ask what the poem keeps returning to and what its last lines say." },
      { q: "Enjambment in a poem is what?", options: ["A rhyme at the end of a line", "A sentence running over the end of a line", "A stanza of four lines", "A repeated line"], answer: 1, explanation: "Enjambment is the running of a sentence over the end of a line without a pause." }
    ],
    status: "published"
  },
  {
    id: "literature-11",
    subjectId: "literature",
    topic: "World Literature",
    subtopic: "World literature: the novel and short story",
    title: "World Literature: The Novel and Short Story",
    order: 11,
    introduction: "World literature opens the door beyond Africa, to the great novels and short stories of Europe, America and Asia. This lesson introduces the leading world novelists, the short story form, and the universal themes they share with African writing.",
    objectives: ["Define world literature and its scope", "Identify leading world novelists and their works", "Explain the form of the short story", "Compare African and world themes", "Analyse character and theme in a world novel"],
    sections: [
      {
        heading: "What World Literature Means",
        body: "World literature is the body of great writing from all countries and cultures, read beyond its place of origin. For JAMB, it means chiefly the literature of Europe and America, especially the English novel, but it also includes writing from Asia and the rest of the world. World literature shares the same elements as African literature: character, plot, setting, theme and style. The difference is in the material: the English novel grew out of the life of England, with its classes, its cities and its empire, while the African novel grew out of the life of Africa. Yet the themes are often the same: love, ambition, justice, betrayal, freedom and the search for identity. Reading world literature widens your sense of what a novel can do, and it helps you to see African literature as part of a larger human conversation."
      },
      {
        heading: "Leading World Novelists",
        body: "Certain names recur in the JAMB syllabus. Charles Dickens wrote about the poor and the cruel in Victorian England, in novels such as Oliver Twist and Great Expectations. Jane Austen wrote about love, marriage and manners in Pride and Prejudice. Charlotte Bronte wrote Jane Eyre, a novel about a poor orphan who keeps her dignity and independence. Thomas Hardy wrote about fate and the countryside in Tess of the D'Urbervilles. In America, Mark Twain wrote about boyhood and the river in The Adventures of Huckleberry Finn, and Ernest Hemingway wrote in a plain, hard style about war and courage. In Russia, Leo Tolstoy wrote the great epic War and Peace. You do not need to know every novel, but you should know each writer with one work and one theme, so that a question about the writer can be answered from the work you know."
      },
      {
        heading: "The Short Story",
        body: "The short story is a brief work of prose fiction, usually read in one sitting, that focuses on a single incident or a single moment of change. Unlike the novel, it has few characters, one plot line, and a single setting. The great short story often ends with a twist, a sudden reversal that changes the meaning of everything that went before. Writers such as Anton Chekhov, Guy de Maupassant and O. Henry are masters of the form, and African writers such as Chinua Achebe have also written fine short stories. The short story teaches economy: every word must count. When you analyse a short story, ask what the single incident is, what changes for the character, and what the ending reveals. JAMB questions on the short story often ask about the theme, the twist, or the character's change."
      },
      {
        heading: "Universal Themes",
        body: "The themes of world literature are universal because they belong to all human beings. The theme of ambition appears in Macbeth and in African novels alike: a man who wants power and destroys himself to get it. The theme of love appears in Jane Austen and in African romance alike. The theme of justice appears in Dickens and in African protest writing alike. The theme of fate appears in Hardy and in African tragedy alike. When you compare African and world literature, do not look for sameness only: look for difference too. An African novelist may treat fate through the gods and the ancestors, while a European novelist treats it through chance and society. The comparison sharpens your understanding of both, and it is a favourite area for JAMB questions that ask you to relate a theme to more than one work."
      }
    ],
    definitions: [
      { term: "World literature", meaning: "Great writing from all countries and cultures, read beyond its place of origin." },
      { term: "Short story", meaning: "A brief work of prose fiction, read in one sitting, focused on a single incident." },
      { term: "Twist", meaning: "A sudden reversal at the end of a story that changes its meaning." },
      { term: "Epic", meaning: "A long narrative work about heroic deeds and a whole people." },
      { term: "Universal theme", meaning: "A theme that belongs to all human beings, such as love, ambition or justice." },
      { term: "Manners", meaning: "The social customs and behaviour of a class or society, as in Jane Austen's novels." }
    ],
    examples: [
      {
        title: "Linking a writer to a work and a theme",
        problem: "A novel shows a poor orphan boy who is treated cruelly in a workhouse and then finds kindness. Which writer and novel is this, and what is the theme?",
        steps: ["Note the clues: poor orphan, cruel workhouse, kindness found.", "Recall Dickens's Oliver Twist, about a poor orphan.", "Recall Dickens's theme: the suffering of the poor in Victorian England.", "Match the clues to the writer and the work.", "Answer with writer, novel and theme."],
        answer: "It is Charles Dickens's Oliver Twist; the theme is the suffering of the poor and the need for kindness and justice."
      },
      {
        title: "Identifying a short story twist",
        problem: "A story shows a woman who sacrifices her hair to buy her husband a gift, while he sells his watch to buy her a comb. What is the twist?",
        steps: ["Note the two sacrifices: her hair for his gift, his watch for her gift.", "Note the result: each gift is now useless.", "Recall that a twist is a sudden reversal at the end.", "Explain the meaning: their love is shown by the sacrifice, not the gift.", "Answer with the twist and its meaning."],
        answer: "The twist is that each gift is useless because of the other's sacrifice; the story shows love through sacrifice, not through the gifts."
      }
    ],
    tips: ["Know each world writer with one work and one theme.", "A short story has one incident, few characters and often a twist.", "Compare African and world themes: look for sameness and difference.", "Universal themes include love, ambition, justice and fate."],
    mistakes: ["Naming a writer without knowing any of their works.", "Treating a short story like a novel with many plots.", "Saying world literature has nothing to do with African literature.", "Confusing the twist with the climax."],
    facts: ["Oliver Twist and Great Expectations are by Charles Dickens.", "Pride and Prejudice is by Jane Austen.", "Jane Eyre is by Charlotte Bronte.", "A short story focuses on a single incident and is read in one sitting."],
    quiz: [
      { q: "World literature means what?", options: ["Only African writing", "Great writing from all countries and cultures", "Only English writing", "Only modern writing"], answer: 1, explanation: "World literature is great writing from all countries and cultures, read beyond its place of origin." },
      { q: "Who wrote Oliver Twist?", options: ["Jane Austen", "Charles Dickens", "Thomas Hardy", "Mark Twain"], answer: 1, explanation: "Oliver Twist is by Charles Dickens, who wrote about the poor in Victorian England." },
      { q: "Who wrote Pride and Prejudice?", options: ["Charlotte Bronte", "Jane Austen", "Charles Dickens", "Leo Tolstoy"], answer: 1, explanation: "Pride and Prejudice is by Jane Austen, about love, marriage and manners." },
      { q: "Who wrote Jane Eyre?", options: ["Jane Austen", "Charlotte Bronte", "Charles Dickens", "Thomas Hardy"], answer: 1, explanation: "Jane Eyre is by Charlotte Bronte, about a poor orphan who keeps her dignity." },
      { q: "A short story differs from a novel because it does what?", options: ["Has many plots", "Focuses on a single incident with few characters", "Is written in verse", "Has no theme"], answer: 1, explanation: "A short story focuses on a single incident, with few characters and one plot line." },
      { q: "A sudden reversal at the end of a story is called what?", options: ["Climax", "Twist", "Exposition", "Setting"], answer: 1, explanation: "A twist is a sudden reversal at the end that changes the meaning of the story." },
      { q: "Who wrote The Adventures of Huckleberry Finn?", options: ["Ernest Hemingway", "Mark Twain", "Charles Dickens", "Leo Tolstoy"], answer: 1, explanation: "The Adventures of Huckleberry Finn is by Mark Twain, about boyhood and the river." },
      { q: "War and Peace was written by whom?", options: ["Anton Chekhov", "Leo Tolstoy", "Guy de Maupassant", "O. Henry"], answer: 1, explanation: "War and Peace is the great epic novel by Leo Tolstoy of Russia." },
      { q: "Which of these is a universal theme?", options: ["Love", "The rules of cricket", "The price of rice", "The history of one town only"], answer: 0, explanation: "Love is a universal theme, belonging to all human beings." },
      { q: "Thomas Hardy is known for writing about what?", options: ["Fate and the countryside", "City crime in London", "Space travel", "The sea in Africa"], answer: 0, explanation: "Thomas Hardy wrote about fate and the countryside, as in Tess of the D'Urbervilles." },
      { q: "Which writers are masters of the short story?", options: ["Chekhov, Maupassant and O. Henry", "Dickens and Austen only", "Shakespeare and Milton only", "Tolstoy and Hardy only"], answer: 0, explanation: "Anton Chekhov, Guy de Maupassant and O. Henry are masters of the short story form." },
      { q: "The theme of ambition appears in which world play?", options: ["Macbeth", "Pride and Prejudice", "Oliver Twist", "Jane Eyre"], answer: 0, explanation: "Macbeth shows ambition: a man who wants power and destroys himself to get it." },
      { q: "A long narrative work about heroic deeds and a whole people is called what?", options: ["Short story", "Epic", "Elegy", "Sonnet"], answer: 1, explanation: "An epic is a long narrative work about heroic deeds and a whole people." },
      { q: "Why is world literature useful for a student of African literature?", options: ["It replaces African literature", "It widens the sense of what a novel can do and shows shared themes", "It has no themes", "It is easier to memorise"], answer: 1, explanation: "World literature widens your sense of the novel and shows that African and world writing share universal themes." },
      { q: "When analysing a short story, what should you ask first?", options: ["What is the single incident and what changes for the character", "How many pages it has", "What the author ate", "How much the book costs"], answer: 0, explanation: "Ask what the single incident is, what changes for the character, and what the ending reveals." }
    ],
    status: "published"
  },
  {
    id: "literature-12",
    subjectId: "literature",
    topic: "World Literature",
    subtopic: "World drama and poetry",
    title: "World Drama and Poetry",
    order: 12,
    introduction: "The world's greatest plays and poems belong to every reader. This lesson introduces Shakespeare, the leading world dramatist, and the great traditions of world poetry, from the sonnet to the modern lyric.",
    objectives: ["Identify Shakespeare and his major plays", "Explain Shakespearean tragedy and comedy", "Identify leading world poets and their forms", "Explain the sonnet, the ode and the ballad", "Compare world and African drama and poetry"],
    sections: [
      {
        heading: "Shakespeare: The Greatest Dramatist",
        body: "William Shakespeare, who lived from 1564 to 1616, is the greatest dramatist in the English language. He wrote about thirty-seven plays, including tragedies, comedies and histories, and he wrote sonnets that are still read today. His tragedies include Hamlet, Macbeth, King Lear, Othello and Julius Caesar. His comedies include A Midsummer Night's Dream, As You Like It and Twelfth Night. His histories include Henry IV and Richard III. Shakespeare's greatness lies in his language, his characters and his understanding of human nature: his heroes are noble yet flawed, his villains are complex, and his speeches, or soliloquies, explore the mind as no writer before him had done. For JAMB, you should know his major plays, their heroes, and their themes."
      },
      {
        heading: "Shakespearean Tragedy and Comedy",
        body: "A Shakespearean tragedy shows a noble hero who falls through a flaw or through fate. Macbeth is a brave soldier whose ambition, stirred by the witches and by his wife, drives him to murder and to ruin. Hamlet is a prince who cannot decide, and his delay brings death to himself and to those around him. Othello is a noble general destroyed by jealousy. Julius Caesar shows the assassination of Caesar and its consequences for Rome. In comedy, the pattern is different: young lovers face obstacles, often with the help of disguise and mistaken identity, and the play ends in marriage and reconciliation. A Midsummer Night's Dream mixes lovers, fairies and foolish actors in a forest, and ends happily. The difference between tragedy and comedy in Shakespeare is the ending and the feeling: tragedy ends in death and leaves pity and fear, while comedy ends in marriage and leaves joy."
      },
      {
        heading: "World Poetry: Forms and Voices",
        body: "World poetry offers forms that African poets have also used. The sonnet, perfected by Shakespeare and by the Italian poet Petrarch, is fourteen lines long. The ode is a formal poem of praise, used by the English poet John Keats to praise a nightingale and an urn. The ballad is a song-like narrative poem, and the epic is a long poem about a hero, such as Homer's Iliad and Odyssey, or John Milton's Paradise Lost. The Romantic poets, including William Wordsworth, Samuel Taylor Coleridge, John Keats and Percy Bysshe Shelley, celebrated nature, feeling and imagination. Later poets, such as W.B. Yeats and T.S. Eliot, wrote about modern life and its troubles. Learn the form with the poet: sonnet with Shakespeare, ode with Keats, nature poetry with Wordsworth."
      },
      {
        heading: "Comparing World and African Drama and Poetry",
        body: "World and African drama share the same roots: both grew from ritual and communal performance. Greek tragedy, with its chorus and its noble hero, is the ancestor of both Shakespearean tragedy and African tragedy: Ola Rotimi's The Gods Are Not to Blame deliberately retells a Greek story in a Yoruba setting, showing the kinship. World poetry and African poetry also share forms, such as the sonnet, the ode and the elegy, but African poets fill those forms with African images, rhythms and voices. The comparison matters for the examination: a question may ask how a theme, such as ambition or fate, is treated in a Shakespeare play and in an African play. Answer by naming the theme in each work, with an event to prove it, and then state what is similar and what is different."
      }
    ],
    definitions: [
      { term: "Soliloquy", meaning: "A speech in which a character alone on stage speaks his thoughts aloud." },
      { term: "Blank verse", meaning: "Unrhymed verse in iambic pentameter, used by Shakespeare in his plays." },
      { term: "Romantic poetry", meaning: "Poetry that celebrates nature, feeling and imagination, as in Wordsworth and Keats." },
      { term: "Epic poem", meaning: "A long poem about a hero and a whole people, such as the Iliad." },
      { term: "Petrarchan sonnet", meaning: "A sonnet of an octave of eight lines and a sestet of six lines." },
      { term: "Shakespearean sonnet", meaning: "A sonnet of three quatrains and a final couplet." }
    ],
    examples: [
      {
        title: "Identifying a Shakespearean tragedy",
        problem: "A play shows a brave soldier who murders his king to gain the throne, and then falls into ruin and death. Which play is it, and what is the hero's flaw?",
        steps: ["Note the clues: brave soldier, murder of a king, ruin and death.", "Recall Macbeth, the soldier who murders Duncan.", "Recall the flaw: ambition.", "Match the clues to the play.", "Answer with the play and the flaw."],
        answer: "It is Macbeth; the hero's flaw is ambition, stirred by the witches and by his wife."
      },
      {
        title: "Comparing a theme across two traditions",
        problem: "How is the theme of fate treated in Julius Caesar and in an African play such as The Gods Are Not to Blame?",
        steps: ["State the theme: fate, a power that decides human life.", "In Julius Caesar, fate works through omens, warnings and the assassination.", "In The Gods Are Not to Blame, fate works through the gods and a prophecy.", "Note the similarity: in both, men cannot escape what is foretold.", "Note the difference: Roman fate is political, Yoruba fate is divine."],
        answer: "In both plays fate cannot be escaped, but in Julius Caesar it works through politics and omens, while in The Gods Are Not to Blame it works through the gods and prophecy."
      }
    ],
    tips: ["Know Shakespeare's tragedies: Hamlet, Macbeth, King Lear, Othello, Julius Caesar.", "Know his comedies: A Midsummer Night's Dream, As You Like It, Twelfth Night.", "Learn each world poet with one form and one theme.", "Compare themes across traditions with an event from each work."],
    mistakes: ["Calling every Shakespeare play a tragedy.", "Confusing Hamlet's flaw (delay) with Macbeth's flaw (ambition).", "Saying Shakespeare wrote novels.", "Comparing works without naming an event from each."],
    facts: ["Shakespeare lived from 1564 to 1616 and wrote about thirty-seven plays.", "Macbeth's flaw is ambition; Hamlet's flaw is delay; Othello's flaw is jealousy.", "A Shakespearean sonnet has three quatrains and a final couplet.", "The Gods Are Not to Blame retells a Greek story in a Yoruba setting."],
    quiz: [
      { q: "William Shakespeare lived in which years?", options: ["1464 to 1516", "1564 to 1616", "1664 to 1716", "1764 to 1816"], answer: 1, explanation: "Shakespeare lived from 1564 to 1616." },
      { q: "Which of these is a Shakespearean tragedy?", options: ["A Midsummer Night's Dream", "Macbeth", "As You Like It", "Twelfth Night"], answer: 1, explanation: "Macbeth is a Shakespearean tragedy, about a soldier destroyed by ambition." },
      { q: "Which of these is a Shakespearean comedy?", options: ["Hamlet", "King Lear", "A Midsummer Night's Dream", "Othello"], answer: 2, explanation: "A Midsummer Night's Dream is a comedy, ending happily with lovers united." },
      { q: "Macbeth's tragic flaw is what?", options: ["Jealousy", "Delay", "Ambition", "Cowardice"], answer: 2, explanation: "Macbeth's flaw is ambition, stirred by the witches and by his wife." },
      { q: "Hamlet's tragic flaw is best described as what?", options: ["Ambition", "Delay and indecision", "Jealousy", "Greed"], answer: 1, explanation: "Hamlet is a prince who cannot decide, and his delay brings death to himself and others." },
      { q: "Othello is destroyed by which flaw?", options: ["Ambition", "Jealousy", "Pride", "Fear"], answer: 1, explanation: "Othello, a noble general, is destroyed by jealousy." },
      { q: "Julius Caesar is about what?", options: ["The assassination of Caesar and its consequences", "A love story in Verona", "A forest of fairies", "A shipwreck"], answer: 0, explanation: "Julius Caesar shows the assassination of Caesar and its consequences for Rome." },
      { q: "A Shakespearean sonnet is made up of what?", options: ["Two quatrains and a couplet", "Three quatrains and a final couplet", "An octave and a sestet", "Fourteen couplets"], answer: 1, explanation: "A Shakespearean sonnet has three quatrains and a final couplet." },
      { q: "The ode is best associated with which poet?", options: ["John Keats", "William Shakespeare", "Charles Dickens", "Mark Twain"], answer: 0, explanation: "John Keats wrote famous odes, praising a nightingale and an urn." },
      { q: "William Wordsworth is best known for poetry about what?", options: ["Nature", "War", "City crime", "Science"], answer: 0, explanation: "Wordsworth, a Romantic poet, celebrated nature, feeling and imagination." },
      { q: "The Iliad and the Odyssey are examples of what?", options: ["Sonnet", "Epic poem", "Ballad", "Elegy"], answer: 1, explanation: "The Iliad and Odyssey are epic poems by Homer, about heroes and a whole people." },
      { q: "Blank verse is best described as what?", options: ["Rhymed verse in couplets", "Unrhymed verse in iambic pentameter", "Free verse with no metre", "A poem with no lines"], answer: 1, explanation: "Blank verse is unrhymed verse in iambic pentameter, used by Shakespeare in his plays." },
      { q: "A Petrarchan sonnet is divided into what?", options: ["Three quatrains and a couplet", "An octave of eight lines and a sestet of six lines", "Seven couplets", "Two stanzas of seven lines"], answer: 1, explanation: "A Petrarchan sonnet has an octave of eight lines and a sestet of six lines." },
      { q: "The Romantic poets celebrated what?", options: ["Nature, feeling and imagination", "Industry and machines", "War and empire", "Science and logic only"], answer: 0, explanation: "The Romantic poets, including Wordsworth, Coleridge, Keats and Shelley, celebrated nature, feeling and imagination." },
      { q: "Greek tragedy is related to African tragedy because both use what?", options: ["A chorus and a noble hero", "No characters", "Only songs", "Modern cities"], answer: 0, explanation: "Greek tragedy, with its chorus and noble hero, is the ancestor of both Shakespearean and African tragedy." }
    ],
    status: "published"
  },
  {
    id: "literature-13",
    subjectId: "literature",
    topic: "Oral Literature",
    subtopic: "Oral literature: folktales, myths and legends",
    title: "Oral Literature: Folktales, Myths and Legends",
    order: 13,
    introduction: "Before books came to Africa, literature lived in the voice: in stories told by the fireside, in myths about the gods, and in legends about heroes. This lesson introduces the forms of oral literature and their place in African culture.",
    objectives: ["Define oral literature and its features", "Distinguish folktales, myths and legends", "Explain the role of the storyteller", "Identify the functions of oral literature", "Relate oral forms to written African literature"],
    sections: [
      {
        heading: "What Oral Literature Is",
        body: "Oral literature is literature spoken, sung or performed, rather than written down. It is the oldest literature in the world, and in Africa it was the main way of preserving history, law, religion and values before writing came. Oral literature is performed: a storyteller tells a tale to an audience that listens, responds, laughs and sometimes joins in. Because it lives in performance, it changes a little with each telling, yet its core stays the same. Its forms include folktales, myths, legends, proverbs, riddles, songs and praise poetry. Written African literature grew out of oral literature: novelists, poets and playwrights borrow its stories, its characters and its ways of telling."
      },
      {
        heading: "Folktales",
        body: "A folktale is a short story passed down by word of mouth, usually about animals, humans or spirits, with a moral at the end. Animal tales are common in Africa: the tortoise is clever but greedy, the hare is cunning, and the lion is strong but often foolish. In one well-known type of tale, the tortoise tricks the birds to get food, and his greed brings his fall, teaching that greed is punished. Folktales often begin with a formula, such as once upon a time, and end with a moral stated plainly or left for the listener to find. They entertain children, teach values, and explain why things are as they are: why the tortoise has a cracked shell, or why the bat flies at night. JAMB questions often ask for the moral of a folktale, or for the character of an animal in it."
      },
      {
        heading: "Myths and Legends",
        body: "A myth is a sacred story about the gods, the creation of the world, or the origin of a people. Myths explain what cannot be explained by ordinary knowledge: how the world began, why the sun rises, or why death came into the world. In Yoruba myth, for example, the gods, or orishas, shape the world and the lives of men. A legend is a story about a hero or a king who may have lived, but whose deeds have been exaggerated over time: a great hunter, a warrior who founded a town, or a king who performed wonders. Legends are told as if they were true history, while myths are told as sacred truth. Both forms carry the values of a people: courage, loyalty, respect for the gods, and the duty to the community. Learn to tell them apart: myth is about gods and creation, legend is about heroes and history."
      },
      {
        heading: "The Storyteller and the Functions of Oral Literature",
        body: "The storyteller is a central figure in African life. He is not just an entertainer: he is a historian, a teacher and a keeper of the community's memory. He uses his voice, his gestures, songs and repetition to hold his audience, and the audience answers with responses, laughter and questions. Oral literature has many functions: it entertains, it teaches morals, it preserves history, it explains the world, it praises heroes and it criticises wrongdoing. A tale told in the evening may warn children against greed, while a praise song at a festival may honour a chief and remind him of his duty. Because oral literature belongs to the whole community, it is also a way of holding the community together. When you study a folktale or a myth, always ask what it teaches and whom it teaches."
      }
    ],
    definitions: [
      { term: "Oral literature", meaning: "Literature spoken, sung or performed, rather than written down." },
      { term: "Folktale", meaning: "A short story passed down by word of mouth, often with a moral." },
      { term: "Myth", meaning: "A sacred story about the gods, creation, or the origin of a people." },
      { term: "Legend", meaning: "A story about a hero or king, told as if it were true history." },
      { term: "Storyteller", meaning: "A person who tells stories to an audience, preserving history and values." },
      { term: "Moral", meaning: "The lesson taught by a story." },
      { term: "Orisha", meaning: "A god in Yoruba belief, who shapes the world and human life." }
    ],
    examples: [
      {
        title: "Finding the moral of a folktale",
        problem: "A tortoise tricks the birds to get food, eats it all himself, and falls from the sky, cracking his shell. What is the moral?",
        steps: ["Identify the hero's act: trickery and greed.", "Identify the result: a fall and a cracked shell.", "Ask what the story punishes: greed and selfishness.", "State the moral plainly.", "Link the moral to the tale's function: teaching values."],
        answer: "The moral is that greed is punished: the tortoise's selfish trickery brings his fall."
      },
      {
        title: "Telling myth from legend",
        problem: "One story tells how the gods created the world; another tells of a warrior who founded a town and performed great deeds. Which is myth and which is legend?",
        steps: ["Note the first story: gods and creation.", "Recall that myths are sacred stories about gods and creation.", "Note the second story: a hero who founded a town.", "Recall that legends are about heroes and history.", "Answer with both labels."],
        answer: "The story of the gods creating the world is a myth; the story of the warrior who founded a town is a legend."
      }
    ],
    tips: ["Myth is about gods and creation; legend is about heroes and history.", "Always state the moral of a folktale plainly.", "The tortoise is clever but greedy; the hare is cunning.", "Ask what a tale teaches and whom it teaches."],
    mistakes: ["Calling every old story a myth.", "Forgetting the moral when asked about a folktale.", "Saying oral literature is only entertainment.", "Confusing the storyteller with the author of a written book."],
    facts: ["Oral literature is the oldest literature in the world.", "The tortoise in African folktales is clever but greedy.", "Myths explain creation and the gods; legends tell of heroes.", "The storyteller is a historian, teacher and keeper of memory."],
    quiz: [
      { q: "Oral literature is best defined as what?", options: ["Literature written in books", "Literature spoken, sung or performed", "Literature in a foreign language", "Literature with no meaning"], answer: 1, explanation: "Oral literature is spoken, sung or performed, rather than written down." },
      { q: "A folktale is best described as what?", options: ["A sacred story about the gods", "A short story passed down by word of mouth, often with a moral", "A history book", "A poem of fourteen lines"], answer: 1, explanation: "A folktale is a short story passed down by word of mouth, often about animals or humans, with a moral." },
      { q: "A myth is a story about what?", options: ["A hero who founded a town", "The gods, creation, or the origin of a people", "A modern city", "A school"], answer: 1, explanation: "A myth is a sacred story about the gods, the creation of the world, or the origin of a people." },
      { q: "A legend is a story about what?", options: ["The gods creating the world", "A hero or king, told as if it were true history", "Animals only", "The future"], answer: 1, explanation: "A legend is a story about a hero or king, told as if it were true history." },
      { q: "In African folktales, the tortoise is usually shown as what?", options: ["Strong and honest", "Clever but greedy", "Slow and kind", "Brave and loyal"], answer: 1, explanation: "The tortoise in African folktales is clever but greedy, and his greed often brings his fall." },
      { q: "The lesson taught by a story is called what?", options: ["Theme", "Moral", "Plot", "Setting"], answer: 1, explanation: "The moral is the lesson taught by a story." },
      { q: "The storyteller in African life is best described as what?", options: ["An entertainer only", "A historian, teacher and keeper of memory", "A king", "A trader"], answer: 1, explanation: "The storyteller is a historian, a teacher and a keeper of the community's memory." },
      { q: "Which of these is a function of oral literature?", options: ["Teaching morals", "Making paper", "Building houses", "Counting money"], answer: 0, explanation: "Oral literature entertains, teaches morals, preserves history and explains the world." },
      { q: "In Yoruba belief, a god is called what?", options: ["Orisha", "Chief", "Elder", "King"], answer: 0, explanation: "An orisha is a god in Yoruba belief, who shapes the world and human life." },
      { q: "Folktales often end with what?", options: ["A riddle", "A moral", "A song about war", "A list of names"], answer: 1, explanation: "Folktales often end with a moral, stated plainly or left for the listener to find." },
      { q: "Oral literature changes a little with each telling because it does what?", options: ["Lives in performance", "Is printed in books", "Is written in stone", "Is never told twice"], answer: 0, explanation: "Because oral literature lives in performance, it changes a little with each telling, yet its core stays the same." },
      { q: "A tale explaining why the tortoise has a cracked shell is an example of what?", options: ["A myth", "A folktale", "A legend", "A sonnet"], answer: 1, explanation: "A tale explaining why things are as they are, with a moral, is a folktale." },
      { q: "Written African literature grew out of what?", options: ["European newspapers", "Oral literature", "Radio plays", "School textbooks only"], answer: 1, explanation: "Written African literature grew out of oral literature, borrowing its stories and ways of telling." },
      { q: "The hare in African folktales is usually shown as what?", options: ["Cunning", "Slow", "Strong", "Silent"], answer: 0, explanation: "The hare in African folktales is cunning." },
      { q: "When studying a folktale, what should you always ask?", options: ["What it teaches and whom it teaches", "How long it is", "Who printed it", "What it costs"], answer: 0, explanation: "Always ask what a tale teaches and whom it teaches." }
    ],
    status: "published"
  },
  {
    id: "literature-14",
    subjectId: "literature",
    topic: "Oral Literature",
    subtopic: "Proverbs, songs and oral performance",
    title: "Proverbs, Songs and Oral Performance",
    order: 14,
    introduction: "Proverbs, riddles and songs are the smallest and sharpest forms of oral literature. This lesson explains how they work, how they are used in daily life and in written literature, and how to answer questions on them.",
    objectives: ["Define proverb, riddle and praise poetry", "Explain the functions of proverbs", "Identify types of oral songs", "Explain call and response and performance features", "Use proverbs and songs to analyse written literature"],
    sections: [
      {
        heading: "Proverbs",
        body: "A proverb is a short, wise saying that carries the wisdom of a people in a few words. African proverbs are famous for their imagery: they speak of the tortoise, the palm tree, the river and the market to teach lessons about life. A proverb may warn against haste, praise patience, or remind a ruler of his duty. In daily life, proverbs settle arguments, advise the young, and soften a rebuke: it is easier to quote a proverb than to accuse a person directly. In written literature, proverbs do the same work: a character who speaks in proverbs shows wisdom and authority, and a proverb in a novel or a play often carries the moral of a whole scene. Chinua Achebe wrote that proverbs are the palm oil with which words are eaten, meaning that they make speech rich and pleasing. Learn to explain a proverb in plain words: say what image it uses and what lesson it teaches."
      },
      {
        heading: "Riddles and Wordplay",
        body: "A riddle is a puzzle in words, asked as a question, with an answer that must be guessed. Riddles are a game and a lesson: they sharpen the mind, teach children to think in images, and pass on knowledge about the world. A riddle may describe a familiar thing in a strange way, and the listener must find the thing from the clues. Riddles are often asked in the evening, after the day's work, and they are answered with laughter and applause. Wordplay is also found in tongue twisters, which test the tongue, and in jokes, which test wit. In the examination, a riddle question usually asks for the answer to a riddle, or for the function of riddles: to teach, to entertain, and to sharpen the mind. Learn to read a riddle by its clues: what does it describe, and what familiar thing fits the description?"
      },
      {
        heading: "Songs and Praise Poetry",
        body: "Songs are a central part of oral literature. There are work songs, sung to lighten labour; lullabies, sung to put children to sleep; dirges, sung to mourn the dead; and praise songs, sung to honour a chief, a hero or a god. Praise poetry, known in Yoruba as oriki, piles up the titles, deeds and family history of the person praised, and it is performed with drumming and dancing. A praise singer, or griot in West Africa, is a professional who keeps the history of a family or a kingdom in song. Songs are not decoration: they carry history, they teach values, and they move the audience to joy or to tears. In written African literature, songs in a play or a novel often carry the theme, mark a ritual, or speak for the community. When a question asks about a song, answer in terms of its function."
      },
      {
        heading: "Performance: Call and Response",
        body: "Oral literature is performed, not just recited, and its most important feature is call and response: the performer calls out a line, and the audience answers. This pattern is found in songs, in storytelling, and in praise poetry, and it makes the audience part of the performance. Other features of performance are repetition, which helps the audience to remember and to join in; gestures and dance, which act out the story; and the use of music, especially drums, which set the rhythm and the mood. The audience is not passive: it laughs, cries, answers and judges. This communal spirit is carried into written African literature: a novel may use repetition and proverbs, and a play may use songs and a chorus, because the writer is writing for a community, not just for a single reader. To appreciate oral performance, imagine it happening: who speaks, who answers, and what the audience feels."
      }
    ],
    definitions: [
      { term: "Proverb", meaning: "A short, wise saying that carries the wisdom of a people." },
      { term: "Riddle", meaning: "A puzzle in words, asked as a question, with an answer to be guessed." },
      { term: "Oriki", meaning: "Yoruba praise poetry, piling up the titles and deeds of the person praised." },
      { term: "Griot", meaning: "A West African professional praise singer and keeper of history." },
      { term: "Dirge", meaning: "A song of mourning for the dead." },
      { term: "Lullaby", meaning: "A song sung to put a child to sleep." },
      { term: "Call and response", meaning: "A pattern in which the performer calls out a line and the audience answers." }
    ],
    examples: [
      {
        title: "Explaining a proverb",
        problem: "A proverb says: A child who is carried on the back does not know how far the journey is. Explain it in plain words.",
        steps: ["Identify the image: a child carried on the back.", "Ask what the image means: the child does no work on the journey.", "State the lesson: those who are helped do not know the effort involved.", "Apply it: it warns against taking help for granted.", "Answer with the image and the lesson."],
        answer: "The proverb means that those who are helped do not know the effort involved; it warns against taking help for granted."
      },
      {
        title: "Identifying the function of a praise song",
        problem: "At a festival, a singer praises a chief, listing his titles, his father's deeds and his victories. What is the function of the song?",
        steps: ["Note the form: praise poetry, or oriki.", "Note the content: titles, family history and deeds.", "Recall the functions of praise songs: to honour and to record history.", "Note the effect: it reminds the chief of his duty.", "Answer with the functions."],
        answer: "The song honours the chief, records his family history, and reminds him of the duty that goes with his titles."
      }
    ],
    tips: ["Explain a proverb by its image and its lesson.", "Read a riddle by its clues.", "Answer song questions in terms of function, not entertainment.", "Call and response makes the audience part of the performance."],
    mistakes: ["Quoting a proverb without explaining it.", "Calling every song a dirge.", "Forgetting that praise poetry records history.", "Treating oral performance as if it were silent reading."],
    facts: ["Proverbs are the palm oil with which words are eaten, in Achebe's phrase.", "Oriki is Yoruba praise poetry.", "A griot is a West African praise singer and keeper of history.", "Call and response is the pattern of performer and audience answering each other."],
    quiz: [
      { q: "A proverb is best defined as what?", options: ["A long story", "A short, wise saying", "A song for the dead", "A puzzle in words"], answer: 1, explanation: "A proverb is a short, wise saying that carries the wisdom of a people." },
      { q: "A riddle is best defined as what?", options: ["A praise song", "A puzzle in words with an answer to be guessed", "A story about the gods", "A dance"], answer: 1, explanation: "A riddle is a puzzle in words, asked as a question, with an answer to be guessed." },
      { q: "Yoruba praise poetry is known as what?", options: ["Oriki", "Griot", "Dirge", "Lullaby"], answer: 0, explanation: "Oriki is Yoruba praise poetry, piling up the titles and deeds of the person praised." },
      { q: "A griot is best described as what?", options: ["A king", "A West African praise singer and keeper of history", "A farmer", "A trader"], answer: 1, explanation: "A griot is a professional praise singer who keeps the history of a family or kingdom in song." },
      { q: "A dirge is a song for what?", options: ["Putting a child to sleep", "Mourning the dead", "Lightening work", "Praising a chief"], answer: 1, explanation: "A dirge is a song of mourning for the dead." },
      { q: "A lullaby is a song for what?", options: ["Mourning the dead", "Putting a child to sleep", "Praising a hero", "Starting a war"], answer: 1, explanation: "A lullaby is a song sung to put a child to sleep." },
      { q: "Call and response is best described as what?", options: ["A performer calling and the audience answering", "Two singers arguing", "A silent performance", "A written poem"], answer: 0, explanation: "Call and response is the pattern in which the performer calls out a line and the audience answers." },
      { q: "Proverbs in a novel or play often do what?", options: ["Fill space", "Carry the moral of a scene and show wisdom", "Confuse the reader", "End the story"], answer: 1, explanation: "A proverb in literature carries the moral of a scene, and a character who speaks in proverbs shows wisdom." },
      { q: "Riddles are used to do what?", options: ["Teach, entertain and sharpen the mind", "Build houses", "Count money", "Cook food"], answer: 0, explanation: "Riddles sharpen the mind, teach children to think in images, and pass on knowledge." },
      { q: "Work songs are sung to do what?", options: ["Put children to sleep", "Lighten labour", "Mourn the dead", "Praise a god"], answer: 1, explanation: "Work songs are sung to lighten labour." },
      { q: "Achebe's phrase about proverbs says they are what?", options: ["The palm oil with which words are eaten", "The salt of the earth", "The bread of life", "The water of the river"], answer: 0, explanation: "Achebe wrote that proverbs are the palm oil with which words are eaten." },
      { q: "Praise poetry records what?", options: ["The weather", "Titles, deeds and family history", "The price of goods", "The rules of a game"], answer: 1, explanation: "Praise poetry piles up titles, deeds and family history of the person praised." },
      { q: "Repetition in oral performance helps the audience to do what?", options: ["Sleep", "Remember and join in", "Leave early", "Forget the story"], answer: 1, explanation: "Repetition helps the audience to remember the words and to join in the performance." },
      { q: "In oral performance, the audience is best described as what?", options: ["Passive and silent", "Part of the performance, answering and judging", "Absent", "Asleep"], answer: 1, explanation: "The audience is not passive: it laughs, cries, answers and judges." },
      { q: "To explain a proverb, you should state what?", options: ["Its image and its lesson", "Its length only", "Who first said it", "When it was written"], answer: 0, explanation: "Explain a proverb by saying what image it uses and what lesson it teaches." }
    ],
    status: "published"
  },
];
