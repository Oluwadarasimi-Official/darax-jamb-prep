import type { Lesson, SubjectDef } from "./types";

export const SUBJECT: SubjectDef = {
  id: "english",
  name: "English Language",
  short: "ENG",
  colour: "#3367c1",
  tagline: "Read smart, write clearly, speak confidently.",
  description: "Master comprehension, lexis and structure, oral English, grammar and vocabulary for JAMB Use of English. Every lesson builds the reading, listening and writing skills the exam rewards, with worked examples and original practice questions.",
  topics: ["Comprehension", "Lexis and Structure", "Oral English", "Grammar and Sentence Interpretation", "Vocabulary Development", "Summary Writing", "Reported Speech and Voice"],
};

export const LESSONS: Lesson[] = [
  {
    id: "english-01",
    subjectId: "english",
    topic: "Comprehension",
    subtopic: "Reading strategies and main ideas",
    title: "Reading Strategies and Main Ideas",
    order: 1,
    introduction: "Comprehension passages test how well you understand what you read, not how fast you can finish. This lesson teaches you to read with a purpose, find the main idea of a passage and of each paragraph, and separate important points from supporting details.",
    objectives: ["Read a passage actively using previewing, skimming and scanning", "Identify the main idea of a passage and of individual paragraphs", "Distinguish main ideas from supporting details and examples", "Use topic sentences and concluding sentences to guide understanding", "Answer comprehension questions by referring back to the passage"],
    sections: [
      {
        heading: "Reading with a Purpose",
        body: "Before you read a passage closely, spend a few seconds previewing it. Read the title, the first sentence of each paragraph and the last paragraph, and glance at the questions if you have time. This gives you a map of the passage so you know what to look for. Then read actively: ask yourself what the writer is trying to say, underline key words in your mind, and pause after each paragraph to summarise it in one short sentence. For example, after reading a paragraph about the benefits of reading, you might say to yourself, Reading improves vocabulary and imagination. Active reading keeps you focused and stops you from reaching the end without remembering anything."
      },
      {
        heading: "Finding the Main Idea",
        body: "The main idea is the central point a writer wants you to take away, and it is usually stated in a topic sentence. The topic sentence often comes first in a paragraph, but it can also appear at the end as a conclusion, or be implied by the whole paragraph. To find it, ask: What is this paragraph mostly about, and what does the writer say about it? For example, in a paragraph that lists how bicycles reduce traffic, save money and keep riders healthy, the main idea is that bicycles have many advantages. Supporting details such as the cost of fuel or the health benefits of exercise only prove that central point. If an option in a question is only one detail, it is not the main idea."
      },
      {
        heading: "Skimming, Scanning and Close Reading",
        body: "Skimming means reading quickly for the general sense, while scanning means searching for a specific piece of information such as a name, a date or a figure. Use skimming for your first pass and for main-idea questions, and scanning when a question asks for a stated fact. Close reading is the slow, careful reading you do when a question asks about meaning, attitude or implication. For example, to answer What does the writer mean by the phrase a double-edged sword, you must read the surrounding sentences carefully. In JAMB, combine the three: skim first, scan for facts, and read closely only where the question demands it, so you save time without losing accuracy."
      },
      {
        heading: "Supporting Details and Summarising",
        body: "Supporting details are the facts, examples, statistics and explanations that develop the main idea. A good reader can tell the difference between a detail and the point it supports. When a question asks for the best summary of a passage, choose the option that covers the main idea of the whole passage, not one paragraph or one striking example. For example, a passage about water pollution may describe a polluted river in detail, but its summary is about the causes and effects of water pollution generally. Practise summarising each paragraph in five words or fewer; if you can do that, you understand the passage well enough to answer most questions on it."
      }
    ],
    definitions: [
      { term: "Main idea", meaning: "The central point or message of a passage or paragraph." },
      { term: "Topic sentence", meaning: "The sentence that states the main idea of a paragraph." },
      { term: "Supporting detail", meaning: "A fact, example or explanation that develops or proves the main idea." },
      { term: "Skimming", meaning: "Reading quickly to get the general sense of a passage." },
      { term: "Scanning", meaning: "Searching a text quickly for a specific piece of information." },
      { term: "Summary", meaning: "A short restatement of the main points of a longer text." }
    ],
    formulas: ["Main idea = topic + what the writer says about the topic.", "Read the questions first, then read the passage with a purpose.", "A summary must cover the whole passage, not one paragraph.", "If an option is only a detail, it cannot be the main idea."],
    examples: [
      {
        title: "Finding the main idea of a paragraph",
        problem: "A paragraph explains that many young people now learn skills online, earn money from those skills, and teach others what they know. What is the main idea?",
        steps: ["Ask what the paragraph is mostly about: young people learning skills online.", "Ask what the writer says about it: it brings income and sharing.", "Combine topic and comment into one sentence.", "Check each option against that sentence and reject mere details.", "Choose the option that covers all three points, not just one."],
        answer: "The main idea is that learning skills online benefits young people by giving them income and a chance to teach others."
      },
      {
        title: "Choosing the best summary",
        problem: "A passage describes the causes of road accidents, gives accident figures, and suggests solutions. Which summary is best?",
        steps: ["List what the passage covers: causes, figures and solutions.", "Reject any option that mentions only the figures.", "Reject any option that mentions only one cause.", "Look for the option that mentions causes and solutions together.", "Confirm it covers the whole passage before choosing it."],
        answer: "The best summary states that road accidents have several causes and can be reduced by the solutions the writer suggests."
      }
    ],
    tips: ["Read the questions before the passage so you know what to look for.", "Answer main-idea questions only after reading the whole passage.", "When two options look close, pick the broader one that covers the whole passage.", "Never answer from memory alone; check the passage for fact questions."],
    mistakes: ["Choosing a striking detail instead of the main idea.", "Reading every word slowly and running out of time.", "Answering from general knowledge instead of what the passage says.", "Ignoring the last paragraph, which often holds the conclusion."],
    facts: ["The topic sentence is most often the first sentence of a paragraph.", "A passage usually has one main idea, developed across several paragraphs.", "Supporting details never replace the main idea in a summary.", "Skimming first saves time and improves accuracy on main-idea questions."],
    quiz: [
      { q: "What is the main idea of a passage?", options: ["The longest sentence in the passage", "The central point the writer wants to communicate", "The first example the writer gives", "The most difficult word in the passage"], answer: 1, explanation: "The main idea is the central point or message of the whole passage, not a single detail or sentence." },
      { q: "Which reading method is best for finding a specific date in a passage?", options: ["Skimming", "Scanning", "Memorising", "Summarising"], answer: 1, explanation: "Scanning is searching quickly for a specific piece of information such as a date, name or figure." },
      { q: "A paragraph lists three reasons why libraries matter. What is its main idea?", options: ["Libraries have three reasons to exist", "Libraries are important for several reasons", "The first reason is the most important", "Libraries contain many books"], answer: 1, explanation: "The main idea combines the topic, libraries, with the writer's point that they matter for several reasons." },
      { q: "What should a good summary of a passage do?", options: ["Repeat one paragraph in detail", "Cover the main idea of the whole passage", "Copy the first and last sentences", "List every example in the passage"], answer: 1, explanation: "A summary must capture the main points of the entire passage, not one part of it." },
      { q: "Where is the topic sentence most commonly found?", options: ["In the middle of the paragraph", "At the beginning of the paragraph", "Only in the final paragraph", "In the title of the passage"], answer: 1, explanation: "The topic sentence is most often the first sentence, though it can sometimes appear at the end." },
      { q: "What is the best first step before reading a passage closely?", options: ["Read every word slowly twice", "Preview the title and the first sentence of each paragraph", "Memorise all the questions first", "Skip straight to the last paragraph"], answer: 1, explanation: "Previewing gives you a map of the passage so you know what to look for when you read closely." },
      { q: "A paragraph has no sentence that states its central point directly. What should you do?", options: ["Conclude that it has no main idea", "Work out the main idea implied by the whole paragraph", "Choose the longest sentence as the main idea", "Use the first example as the main idea"], answer: 1, explanation: "A main idea can be implied by the whole paragraph even when no single sentence states it." },
      { q: "A passage explains that exercise strengthens the heart, improves mood and helps sleep. Which is the main idea?", options: ["Exercise strengthens the heart", "Exercise improves mood", "Exercise has several benefits", "Exercise helps sleep"], answer: 2, explanation: "The main idea covers all three benefits together; each benefit alone is only a supporting detail." },
      { q: "What is skimming most useful for?", options: ["Finding one exact figure", "Getting the general sense of a passage quickly", "Learning the meaning of a difficult word", "Checking the spelling of a name"], answer: 1, explanation: "Skimming is quick reading for the general sense, while scanning is used to find a specific fact." },
      { q: "What is the job of a concluding sentence in a paragraph?", options: ["To introduce a new topic", "To restate or round off the main idea", "To give the first example", "To ask the reader a question"], answer: 1, explanation: "A concluding sentence sums up or restates the paragraph's main idea and often points to the next paragraph." },
      { q: "A question asks what a passage is mainly about. What should you look for?", options: ["The most interesting example", "The point developed across the whole passage", "The hardest word in the passage", "The first detail in the first paragraph"], answer: 1, explanation: "What a passage is mainly about is its overall main idea, developed across all its paragraphs." },
      { q: "Why should you pause after reading each paragraph?", options: ["To count the words in it", "To summarise it in one short sentence", "To memorise it word for word", "To skip to the questions at once"], answer: 1, explanation: "Summarising each paragraph in your own words checks that you understood it before moving on." },
      { q: "Which of these is a supporting detail, not a main idea?", options: ["Reading improves vocabulary and imagination", "Reading is useful for many reasons", "The cost of fuel rose last year", "Bicycles have many advantages"], answer: 2, explanation: "The cost of fuel is one specific fact that supports a point, while the other options state broad central points." },
      { q: "A summary option mentions only the example in the second paragraph. Why is it wrong?", options: ["Because examples are never important", "Because a summary must cover the whole passage", "Because the second paragraph is always unimportant", "Because summaries must copy the title"], answer: 1, explanation: "A good summary covers the main idea of the whole passage, not one paragraph or one example." },
      { q: "When should you use close reading in a comprehension passage?", options: ["For every sentence in the passage", "Only where a question asks about meaning, attitude or implication", "Only for the first paragraph", "When you want to finish as fast as possible"], answer: 1, explanation: "Close reading is slow and careful, so save it for questions about meaning, attitude or implication, and skim or scan elsewhere." }
    ],
    status: "published"
  },
  {
    id: "english-02",
    subjectId: "english",
    topic: "Comprehension",
    subtopic: "Inference and tone",
    title: "Inference and Tone in Comprehension",
    order: 2,
    introduction: "Not everything a writer means is stated directly. This lesson teaches you to infer what is implied, recognise the writer's tone and attitude, and work out the meaning of words from context, so you can answer the deeper questions JAMB sets on passages.",
    objectives: ["Make logical inferences from stated information", "Identify a writer's tone and attitude from word choice", "Work out the meaning of unfamiliar words from context", "Distinguish fact from opinion in a passage", "Answer inference questions with evidence from the passage"],
    sections: [
      {
        heading: "What Inference Means",
        body: "An inference is a conclusion you reach by combining what the passage says with what you already know. The writer gives you clues, and you put them together. For example, if a passage says that Ada left home with an umbrella, a raincoat and boots, you can infer that it was raining or about to rain, even though the writer never says so. A good inference must be supported by the text; it is not a guess. When a question asks What can be inferred, look for the option that follows logically from the evidence, and reject options that go beyond what the passage supports, however sensible they may sound on their own."
      },
      {
        heading: "Recognising Tone and Attitude",
        body: "Tone is the writer's attitude towards the subject, shown through word choice, sentence style and emphasis. A writer who calls a policy a bold step forward sounds approving, while one who calls it a reckless gamble sounds critical. Common tones in JAMB passages include serious, humorous, ironic, sarcastic, sympathetic, critical and indifferent. For example, the sentence He generously arrived three hours late is ironic, because generously clashes with the lateness. To identify tone, collect the writer's loaded words, such as unfortunately, sadly, wisely or foolishly, and ask whether they praise, blame, mock or simply report. The overall feeling those words create is the tone."
      },
      {
        heading: "Meaning from Context",
        body: "When you meet an unfamiliar word, do not panic. Read the sentence before and after it for clues. The writer may define the word, give an example, or use a contrasting word. For example, in the sentence Unlike his timid brother, Musa was audacious and spoke boldly to the crowd, the contrast with timid and the phrase spoke boldly tell you that audacious means bold or fearless. Other clues include synonyms in the same sentence, such as The drought, a long period without rain, ruined the crops. Practise this skill deliberately: cover the word, read the context, guess the meaning, then check whether your guess fits the sentence."
      },
      {
        heading: "Fact, Opinion and the Writer's Purpose",
        body: "A fact can be checked or proved, while an opinion is what someone thinks or feels. For example, Lagos is in Nigeria is a fact, while Lagos is the best city in Nigeria is an opinion. JAMB questions often ask whether a statement is fact or opinion, or what the writer's purpose is: to inform, persuade, entertain, criticise or describe. To find the purpose, ask what the writer wants the reader to do or think after reading. A passage full of arguments and appeals wants to persuade; one full of facts and explanations wants to inform. Recognising purpose helps you predict the tone and the kind of questions that will follow."
      }
    ],
    definitions: [
      { term: "Inference", meaning: "A logical conclusion drawn from evidence in a text, rather than stated directly." },
      { term: "Tone", meaning: "The writer's attitude towards the subject, shown through word choice and style." },
      { term: "Irony", meaning: "Saying the opposite of what is meant, often for humour or criticism." },
      { term: "Context clue", meaning: "Words around an unfamiliar word that help you work out its meaning." },
      { term: "Fact", meaning: "A statement that can be checked and proved true or false." },
      { term: "Opinion", meaning: "A personal belief or judgement that cannot be proved true or false." }
    ],
    formulas: ["Inference = stated evidence + logical reasoning, never a wild guess.", "Tone is revealed by loaded words: praise, blame, mockery or neutrality.", "An unfamiliar word is usually explained by contrast, example or definition nearby.", "Fact can be verified; opinion expresses a judgement."],
    examples: [
      {
        title: "Making an inference",
        problem: "A passage says the hall was empty, the chairs were stacked, and the lights were off when the visitors arrived. What can be inferred?",
        steps: ["Collect the clues: empty hall, stacked chairs, lights off.", "Ask what situation explains all three clues together.", "Consider that the event had ended or had not started.", "Reject options that add facts the passage never suggests.", "Choose the inference that follows from all the clues."],
        answer: "It can be inferred that the event had already ended or had not yet begun, so the hall was not in use."
      },
      {
        title: "Identifying tone",
        problem: "A writer describes a new tax as a brilliant idea that will punish the poor and reward the careless. What is the tone?",
        steps: ["Note the word brilliant, which sounds like praise.", "Note punish the poor and reward the careless, which sound like blame.", "See that the praise clashes with the blame.", "Recognise this clash as irony or sarcasm.", "Conclude the tone is sarcastic and critical, not approving."],
        answer: "The tone is sarcastic and critical: the writer mocks the tax by calling it brilliant while showing its harm."
      }
    ],
    tips: ["For inference questions, eliminate options the passage does not support.", "Underline loaded words as you read; they reveal tone.", "If you cannot define a word, use the sentence around it before guessing.", "Tone questions ask about attitude, not about facts in the passage."],
    mistakes: ["Treating a guess as an inference when the text gives no evidence.", "Confusing the subject of a passage with the writer's tone.", "Choosing an extreme tone, such as furious, when the writer is only mildly critical.", "Ignoring contrast words like unlike, however and yet when guessing meanings."],
    facts: ["An inference must be supported by the passage, not by outside knowledge alone.", "Irony says the opposite of what is meant.", "Context clues include definitions, examples, synonyms and contrasts.", "A writer's purpose is usually to inform, persuade, entertain or describe."],
    quiz: [
      { q: "What is an inference?", options: ["A direct statement in the passage", "A conclusion drawn from evidence in the passage", "The title of the passage", "A summary of the first paragraph"], answer: 1, explanation: "An inference is a logical conclusion based on clues in the text, not something stated directly." },
      { q: "The writer calls a careless driver a genius of the road. What tone is this?", options: ["Admiring", "Ironic", "Neutral", "Sympathetic"], answer: 1, explanation: "Calling a careless driver a genius is the opposite of what is meant, which is irony." },
      { q: "In the sentence The arid land, dry and dusty, could grow nothing, what does arid mean?", options: ["Fertile", "Dry", "Wet", "Cold"], answer: 1, explanation: "The context clues dry and dusty and could grow nothing show that arid means dry." },
      { q: "Which of these is a fact?", options: ["Abuja is the finest city in Africa", "The River Niger flows through Nigeria", "Football is the most exciting sport", "Reading is better than travelling"], answer: 1, explanation: "The River Niger flowing through Nigeria can be checked and proved, while the others are opinions." },
      { q: "A passage argues strongly that plastic bags should be banned. What is the writer's purpose?", options: ["To entertain", "To persuade", "To describe a festival", "To tell a story"], answer: 1, explanation: "Strong argument in favour of a ban shows the writer wants to persuade readers to accept a position." },
      { q: "A passage says Tunde packed a torch, a blanket and food for the night. What can be inferred?", options: ["Tunde was going to a party in the morning", "Tunde expected to spend the night away from home", "Tunde disliked travelling", "Tunde had lost his house keys"], answer: 1, explanation: "A torch, blanket and food together suggest an overnight stay, which follows logically from the clues." },
      { q: "Which of these best shows a sympathetic tone?", options: ["The foolish man deserved his punishment", "The poor widow struggled bravely to feed her children", "The figures were listed in the report", "The meeting ended at noon"], answer: 1, explanation: "Poor and bravely show pity and admiration for the widow, which is a sympathetic tone." },
      { q: "In the sentence Unlike her generous sister, Ada was stingy with her money, what does stingy mean?", options: ["Kind and giving", "Unwilling to spend or share money", "Rich and famous", "Happy and cheerful"], answer: 1, explanation: "The contrast with generous shows that stingy means unwilling to spend or share money." },
      { q: "Which statement is an opinion?", options: ["Water boils at 100 degrees Celsius at sea level", "Abuja is the capital of Nigeria", "This is the most beautiful song ever written", "The River Benue flows into the River Niger"], answer: 2, explanation: "Most beautiful is a personal judgement that cannot be proved, while the others are checkable facts." },
      { q: "A writer describes a new road as a wasteful project that destroyed farmland. What is the writer's attitude?", options: ["Approving", "Critical", "Indifferent", "Humorous"], answer: 1, explanation: "Wasteful and destroyed farmland are loaded words showing disapproval, so the attitude is critical." },
      { q: "What makes an inference different from a guess?", options: ["An inference is always about the future", "An inference is supported by evidence in the text", "An inference needs no evidence at all", "An inference is always stated directly"], answer: 1, explanation: "A good inference follows logically from clues in the passage, while a guess has no textual support." },
      { q: "In the sentence The drought, a long period without rain, ruined the crops, how is the word drought explained?", options: ["By a contrast", "By a definition in the same sentence", "By an example from history", "By a synonym in the next paragraph"], answer: 1, explanation: "The phrase a long period without rain defines drought directly in the same sentence." },
      { q: "A passage lists facts about malaria and explains how to prevent it. What is the writer's purpose?", options: ["To inform", "To entertain", "To criticise a person", "To tell a joke"], answer: 0, explanation: "A passage full of facts and explanations aims to inform the reader, not to persuade or entertain." },
      { q: "The writer says The headmaster kindly fined the late students heavily. What tone is suggested?", options: ["Sincere praise", "Ironic", "Neutral reporting", "Sympathetic"], answer: 1, explanation: "Kindly clashes with fined heavily, so the praise is not sincere; the tone is ironic." },
      { q: "For an inference question, which option should you reject first?", options: ["The option that follows from the evidence", "The option the passage gives no evidence for", "The option that repeats a stated fact", "The option that matches the writer's purpose"], answer: 1, explanation: "An inference must be supported by the passage, so reject any option that goes beyond what the text supports." }
    ],
    status: "published"
  },
  {
    id: "english-03",
    subjectId: "english",
    topic: "Lexis and Structure",
    subtopic: "Word classes and sentence structure",
    title: "Word Classes and Sentence Structure",
    order: 3,
    introduction: "Every English sentence is built from word classes working together. This lesson teaches you to identify nouns, verbs, adjectives, adverbs, pronouns, prepositions, conjunctions and articles, and to see how they combine into phrases, clauses and complete sentences.",
    objectives: ["Identify the eight major word classes in sentences", "Distinguish nouns, pronouns, adjectives and adverbs by their functions", "Recognise phrases and clauses and their roles in a sentence", "Identify subjects, verbs, objects and complements", "Build and analyse simple, compound and complex sentences"],
    sections: [
      {
        heading: "The Major Word Classes",
        body: "Word classes, also called parts of speech, describe what a word does in a sentence. Nouns name people, places, things or ideas, such as teacher, Lagos and honesty. Verbs express actions or states, such as run, is and become. Adjectives describe nouns, as in a brave girl, while adverbs describe verbs, adjectives or other adverbs, as in run quickly or very brave. Pronouns stand in for nouns, such as she, they and it. Prepositions show relationships, such as in, on and under, conjunctions join words and clauses, such as and, but and because, and articles, a, an and the, introduce nouns. The same word can belong to different classes: light can be a noun, a verb or an adjective, so always judge a word by its job in the sentence."
      },
      {
        heading: "Subjects, Verbs and Objects",
        body: "The subject of a sentence is who or what performs the action, the verb is the action or state, and the object receives the action. In the sentence Ada wrote a letter, Ada is the subject, wrote is the verb and a letter is the object. Some verbs need no object: The baby slept. Others take an indirect object as well: The teacher gave the students books, where the students is the indirect object and books is the direct object. A complement completes the meaning of a linking verb: She is a doctor, where a doctor completes is. To analyse a sentence, first find the verb, then ask who or what does it for the subject, then ask what receives it for the object. This method works even in long, complicated sentences."
      },
      {
        heading: "Phrases and Clauses",
        body: "A phrase is a group of words without a subject and a finite verb, such as in the morning, a very tall man or to read books. A clause has a subject and a verb: a main clause can stand alone as a sentence, while a subordinate clause cannot. For example, in Because it rained, we stayed indoors, Because it rained is a subordinate clause and we stayed indoors is the main clause. Clauses can act as nouns, adjectives or adverbs: That he passed is a noun clause, the boy who won is an adjective clause, and When the bell rang is an adverbial clause. Recognising clauses matters because JAMB often asks you to identify the function of a clause or to choose the sentence with the same structure."
      },
      {
        heading: "Simple, Compound and Complex Sentences",
        body: "A simple sentence has one main clause: The rain fell. A compound sentence joins two main clauses with a conjunction or semicolon: The rain fell, and the streets flooded. A complex sentence has a main clause and at least one subordinate clause: When the rain fell, the streets flooded. A compound-complex sentence combines both. For example, When the rain fell, the streets flooded, and the traders closed their shops. Variety in sentence structure makes writing lively, and JAMB rewards candidates who can tell these types apart. To classify a sentence, count the main clauses and check for subordinate clauses; one main clause with no subordinate clause is simple, two main clauses is compound, and a subordinate clause makes it complex."
      }
    ],
    definitions: [
      { term: "Noun", meaning: "A word that names a person, place, thing or idea." },
      { term: "Adverb", meaning: "A word that modifies a verb, adjective or another adverb." },
      { term: "Phrase", meaning: "A group of words without a subject and a finite verb." },
      { term: "Clause", meaning: "A group of words with a subject and a verb." },
      { term: "Main clause", meaning: "A clause that can stand alone as a complete sentence." },
      { term: "Subordinate clause", meaning: "A clause that cannot stand alone and depends on a main clause." }
    ],
    formulas: ["Subject + verb + object is the basic pattern of most English sentences.", "A phrase has no subject and finite verb; a clause has both.", "One main clause = simple sentence; two main clauses = compound; main + subordinate = complex.", "Judge a word by its function in the sentence, not by its spelling."],
    examples: [
      {
        title: "Identifying word classes",
        problem: "In the sentence The brave soldiers marched quickly through the forest, identify the adjective, the adverb and the preposition.",
        steps: ["Find the noun soldiers and ask which word describes it: brave is the adjective.", "Find the verb marched and ask which word describes how: quickly is the adverb.", "Find the word showing the relationship between marched and forest: through is the preposition.", "Check that each word fits its function in this sentence.", "Confirm no other word fits those roles better."],
        answer: "Adjective: brave; adverb: quickly; preposition: through."
      },
      {
        title: "Classifying a sentence",
        problem: "Classify this sentence: Although she was tired, Amara finished her homework and submitted it early.",
        steps: ["Find the clauses: Although she was tired is subordinate, Amara finished her homework is main, and submitted it early shares the subject.", "Count the main clauses: there is one main clause with a compound verb.", "Note the subordinate clause beginning with Although.", "Apply the rule: main clause plus subordinate clause is complex.", "Reject compound, because there is only one main clause."],
        answer: "It is a complex sentence: one main clause plus the subordinate clause Although she was tired."
      }
    ],
    tips: ["Find the verb first when analysing any sentence.", "A word's class depends on its job in that sentence, not on the dictionary alone.", "Look for conjunctions like although, because and when to spot subordinate clauses.", "In structure questions, count main clauses before choosing simple, compound or complex."],
    mistakes: ["Calling every descriptive word an adjective, even when it modifies a verb.", "Confusing a phrase with a clause.", "Thinking a long sentence must be complex; length does not decide type.", "Forgetting that the subject can come after the verb in questions and inversions."],
    facts: ["English has eight major word classes.", "A sentence must have at least a subject and a finite verb.", "A subordinate clause cannot stand alone as a sentence.", "The same word can function as different word classes in different sentences."],
    quiz: [
      { q: "In the sentence She sings beautifully, what is beautifully?", options: ["Adjective", "Adverb", "Noun", "Preposition"], answer: 1, explanation: "Beautifully modifies the verb sings, telling how she sings, so it is an adverb." },
      { q: "Which group of words is a phrase?", options: ["When the bell rang", "In the morning", "She was reading", "Because it rained"], answer: 1, explanation: "In the morning has no subject and finite verb, so it is a phrase; the others are clauses." },
      { q: "What is the subject in the sentence The children in the garden are playing?", options: ["The garden", "Are playing", "The children", "Playing"], answer: 2, explanation: "The children performs the action of playing, so it is the subject; in the garden only modifies it." },
      { q: "Which sentence is complex?", options: ["The dog barked.", "The dog barked and the cat ran.", "When the dog barked, the cat ran.", "The dog barked loudly."], answer: 2, explanation: "When the dog barked is a subordinate clause attached to a main clause, making the sentence complex." },
      { q: "In the sentence He gave her a book, what is her?", options: ["Direct object", "Indirect object", "Subject", "Complement"], answer: 1, explanation: "Her receives the book indirectly, so it is the indirect object, while a book is the direct object." },
      { q: "In the sentence The dog barked loudly, what is loudly?", options: ["Adjective", "Adverb", "Noun", "Pronoun"], answer: 1, explanation: "Loudly modifies the verb barked, telling how the dog barked, so it is an adverb." },
      { q: "What is the subject in the sentence They visited us yesterday?", options: ["They", "Visited", "Us", "Yesterday"], answer: 0, explanation: "They performs the action of visiting, so it is the subject of the sentence." },
      { q: "In the sentence The book on the table is mine, what is on the table?", options: ["A clause", "A phrase", "A sentence", "A verb"], answer: 1, explanation: "On the table has no subject and finite verb, so it is a phrase, not a clause." },
      { q: "Which sentence is a simple sentence?", options: ["She sang and danced.", "She sang because she was happy.", "She sang.", "When she sang, we listened."], answer: 2, explanation: "She sang has one main clause and no subordinate clause, so it is a simple sentence." },
      { q: "What is the object in the sentence The farmer planted maize?", options: ["The farmer", "Planted", "Maize", "The"], answer: 2, explanation: "Maize receives the action of planting, so it is the direct object." },
      { q: "In the sentence She is a nurse, what is a nurse?", options: ["Object", "Subject", "Complement", "Adverb"], answer: 2, explanation: "A nurse completes the meaning of the linking verb is, so it is a complement." },
      { q: "Which word is a conjunction in the sentence I stayed home because it rained?", options: ["Stayed", "Home", "Because", "It"], answer: 2, explanation: "Because joins the main clause to the subordinate clause, so it is a conjunction." },
      { q: "Which sentence is compound?", options: ["The rain fell.", "The rain fell and the wind blew.", "When the rain fell, we stayed inside.", "The heavy rain fell."], answer: 1, explanation: "It joins two main clauses, The rain fell and the wind blew, so it is a compound sentence." },
      { q: "In the sentence The tall girl in red won the race, which word is an adjective?", options: ["Tall", "Girl", "Won", "Race"], answer: 0, explanation: "Tall describes the noun girl, so it is an adjective." },
      { q: "What does the word light show about word classes?", options: ["A word always belongs to one class", "The same word can belong to different classes", "Light is always a noun", "Light is never a verb"], answer: 1, explanation: "Light can be a noun, a verb or an adjective, so a word's class depends on its job in the sentence." }
    ],
    status: "published"
  },
  {
    id: "english-04",
    subjectId: "english",
    topic: "Lexis and Structure",
    subtopic: "Concord and tense consistency",
    title: "Concord and Tense Consistency",
    order: 4,
    introduction: "Concord is the agreement between a subject and its verb, and tense consistency is keeping the time of actions steady. These two topics appear in almost every JAMB Use of English paper, and this lesson gives you the rules that answer them confidently.",
    objectives: ["Apply subject-verb agreement in regular and tricky cases", "Use the correct verb form with collective nouns and indefinite pronouns", "Keep tenses consistent within sentences and passages", "Choose the correct tense for completed, ongoing and future actions", "Correct common concord and tense errors in sentences"],
    sections: [
      {
        heading: "The Basic Rule of Concord",
        body: "Concord, also called subject-verb agreement, means the verb must agree with its subject in number and person. A singular subject takes a singular verb: She writes every day, while a plural subject takes a plural verb: They write every day. The difficulty comes when words stand between the subject and the verb. For example, in The basket of oranges is on the table, the subject is basket, which is singular, so the verb is is, even though oranges is plural. Always find the true subject first and ignore intervening phrases. Similarly, in Neither the boys nor the girl has arrived, the verb agrees with the nearer subject, girl, so has is correct. Mastering this habit of finding the real subject first solves most concord questions."
      },
      {
        heading: "Tricky Subjects",
        body: "Some subjects confuse candidates because they look plural but are singular, or the reverse. Collective nouns such as team, family and committee take a singular verb when the group acts as one unit: The committee has decided. Indefinite pronouns such as each, everyone, somebody and nobody are singular: Everyone is welcome. However, subjects joined by and are plural: Musa and Ada are friends, unless they name one thing, as in Bread and butter is my breakfast. Either and neither take singular verbs when used alone, but with nor the verb agrees with the nearer subject. Amounts, distances and sums of money also take singular verbs: Ten thousand naira is a lot of money. Learn these patterns as a set, and test each one with example sentences until it feels natural."
      },
      {
        heading: "Tense Consistency",
        body: "Tenses show when an action happens, and a sentence or passage should stay in one time frame unless there is a good reason to change. For example, Yesterday she walked to school and bought a book is consistent in the past tense, but Yesterday she walked to school and buys a book is wrong, because buys jumps to the present. The present perfect connects the past to the present: I have lived here for ten years. The past perfect shows an earlier past action: She had finished before he arrived. In reported speech, tenses usually shift back: He said he was coming. When answering JAMB questions, read the whole sentence, note time words such as yesterday, since, already and tomorrow, and choose the verb form that matches that time."
      },
      {
        heading: "Common Errors and How to Fix Them",
        body: "Many concord errors come from proximity: the verb wrongly agrees with the nearest noun instead of the subject. For example, The quality of the mangoes are poor is wrong; quality is singular, so it should be is poor. Another common error is using a plural verb with each or every: Each of the students have a book should be has a book. With tenses, candidates often mix the simple past and the present perfect: I have saw him should be I have seen him, because the perfect tense needs the past participle. To fix errors, first identify the subject and its number, then check the time words, then choose the verb form that satisfies both. Practise by correcting ten sentences a day, and the patterns will become automatic."
      }
    ],
    definitions: [
      { term: "Concord", meaning: "Agreement between a subject and its verb in number and person." },
      { term: "Collective noun", meaning: "A noun naming a group, such as team, family or committee." },
      { term: "Indefinite pronoun", meaning: "A pronoun that does not refer to a specific person or thing, such as everyone or somebody." },
      { term: "Present perfect tense", meaning: "A tense formed with has or have plus the past participle, linking past action to the present." },
      { term: "Past participle", meaning: "The form of a verb used after has, have or had, such as seen, written or gone." },
      { term: "Tense consistency", meaning: "Keeping verb tenses in the same time frame unless a change is needed." }
    ],
    formulas: ["Singular subject takes a singular verb; plural subject takes a plural verb.", "The verb agrees with the true subject, not with a noun in between.", "Each, everyone, somebody and nobody are singular.", "With either-or and neither-nor, the verb agrees with the nearer subject.", "Present perfect = has or have + past participle."],
    examples: [
      {
        title: "Correcting a concord error",
        problem: "Correct this sentence: The group of dancers are performing tonight.",
        steps: ["Find the true subject: group, not dancers.", "Note that group is singular, a collective noun acting as one unit.", "Choose the singular verb is instead of are.", "Check the rest of the sentence for other errors.", "Rewrite the sentence with the correct verb."],
        answer: "The group of dancers is performing tonight."
      },
      {
        title: "Choosing the correct tense",
        problem: "Choose the correct form: By the time he arrived, she ___ (finish) her work.",
        steps: ["Note the time marker By the time he arrived, a past event.", "Her finishing happened before his arrival, so it is the earlier past.", "The earlier past is the past perfect, had + past participle.", "The past participle of finish is finished.", "Insert had finished into the sentence."],
        answer: "By the time he arrived, she had finished her work."
      }
    ],
    tips: ["Always find the true subject before choosing the verb.", "Watch out for of-phrases between subject and verb; they do not change the subject.", "Use time words like yesterday, since and already to fix the tense.", "With neither-nor, agree the verb with the subject nearest the verb."],
    mistakes: ["Making the verb agree with the nearest noun instead of the subject.", "Using have with each, every, everyone or somebody.", "Mixing past and present tenses in one sentence without reason.", "Using the simple past form after has or have instead of the past participle."],
    facts: ["Everyone, each and nobody always take singular verbs.", "A sum of money or a distance takes a singular verb.", "The past perfect describes an action completed before another past action.", "Concord questions are among the most frequent in JAMB Use of English."],
    quiz: [
      { q: "Choose the correct sentence.", options: ["The basket of fruits are heavy.", "The basket of fruits is heavy.", "The basket of fruits were heavy.", "The basket of fruits be heavy."], answer: 1, explanation: "The subject is basket, which is singular, so the verb must be is, not are." },
      { q: "Choose the correct sentence.", options: ["Each of the boys have a pen.", "Each of the boys has a pen.", "Each of the boys are having a pen.", "Each of the boys have pens."], answer: 1, explanation: "Each is singular, so it takes the singular verb has." },
      { q: "Neither the teacher nor the students ___ arrived.", options: ["has", "have", "is", "was"], answer: 1, explanation: "With neither-nor, the verb agrees with the nearer subject, students, which is plural, so have is correct." },
      { q: "She ___ here since 2020.", options: ["lives", "has lived", "lived", "is live"], answer: 1, explanation: "Since 2020 links a past start to the present, so the present perfect has lived is correct." },
      { q: "Choose the correct sentence.", options: ["I have saw the film.", "I have seen the film.", "I have see the film.", "I has seen the film."], answer: 1, explanation: "After have, the past participle seen is required, not the simple past saw." },
      { q: "Choose the correct sentence.", options: ["The team are playing well today.", "The team is playing well today.", "The team be playing well today.", "The team were playing well today as one unit."], answer: 1, explanation: "Team acts as one unit here, so the singular verb is is correct." },
      { q: "Choose the correct sentence.", options: ["Everybody are invited.", "Everybody is invited.", "Everybody were invited.", "Everybody have been invited."], answer: 1, explanation: "Everybody is an indefinite pronoun and takes a singular verb, is." },
      { q: "Musa and Ada ___ good friends.", options: ["is", "are", "was", "has been"], answer: 1, explanation: "Two subjects joined by and take a plural verb, are." },
      { q: "Choose the correct sentence.", options: ["Yesterday she walks to school.", "Yesterday she walked to school.", "Yesterday she walk to school.", "Yesterday she walking to school."], answer: 1, explanation: "Yesterday shows past time, so the simple past walked is required." },
      { q: "Ten thousand naira ___ a lot of money.", options: ["are", "were", "is", "have been"], answer: 2, explanation: "A sum of money takes a singular verb, so is is correct." },
      { q: "Choose the correct sentence.", options: ["Neither of the answers are correct.", "Neither of the answers is correct.", "Neither of the answers were correct.", "Neither of the answers have correct."], answer: 1, explanation: "Neither is singular, so it takes the singular verb is." },
      { q: "She ___ her homework before her mother arrived.", options: ["has finished", "had finished", "finishes", "is finishing"], answer: 1, explanation: "Her finishing happened before another past event, so the past perfect had finished is correct." },
      { q: "Choose the correct sentence.", options: ["The quality of the mangoes are poor.", "The quality of the mangoes is poor.", "The quality of the mangoes were poor.", "The quality of the mangoes be poor."], answer: 1, explanation: "The true subject is quality, which is singular, so the verb must be is, not are." },
      { q: "He said he ___ coming tomorrow.", options: ["is", "was", "are", "were"], answer: 1, explanation: "In reported speech the tense usually shifts back, so is becomes was." },
      { q: "Choose the correct sentence.", options: ["Each of the students have a book.", "Each of the students has a book.", "Each of the students have books.", "Each of the students are having a book."], answer: 1, explanation: "Each is singular, so it takes the singular verb has." }
    ],
    status: "published"
  },
  {
    id: "english-05",
    subjectId: "english",
    topic: "Oral English",
    subtopic: "Stress, intonation and rhythm",
    title: "Stress, Intonation and Rhythm",
    order: 5,
    introduction: "Spoken English has a music of its own. This lesson teaches you word stress, sentence stress, intonation patterns and rhythm, so you can recognise stressed syllables, understand how pitch changes meaning, and answer oral English questions with confidence.",
    objectives: ["Identify the stressed syllable in words of two or more syllables", "Explain how stress can change the meaning or class of a word", "Recognise rising and falling intonation patterns", "Use sentence stress to emphasise important words", "Describe the rhythm of English as a stress-timed language"],
    sections: [
      {
        heading: "Word Stress",
        body: "Word stress is the extra force given to one syllable in a word. In the word table, the first syllable is stressed: TA-ble. In the word begin, the second syllable is stressed: be-GIN. Stress matters because it can change meaning: the noun record is RE-cord, while the verb record is re-CORD. Similarly, present as a noun is PRE-sent, but as a verb it is pre-SENT. JAMB often asks which word has a different stress pattern from the others, or which syllable carries the main stress. To find stress, say the word aloud slowly and listen for the syllable that sounds louder, longer and higher. Most two-syllable nouns stress the first syllable, while most two-syllable verbs stress the second, though there are many exceptions to learn."
      },
      {
        heading: "Sentence Stress",
        body: "In a sentence, some words are stressed and others are not. Content words such as nouns, main verbs, adjectives and adverbs are usually stressed, while function words such as articles, prepositions and auxiliary verbs are usually weak. For example, in I went to the MARket to BUY some BREAD, the stressed words are market, buy and bread. Changing which word you stress changes the meaning: I bought the book emphasises who bought it, while I bought the BOOK emphasises what was bought. JAMB questions on sentence stress often ask which word is emphasised in a spoken sentence, so practise reading sentences aloud with different words stressed and notice how the meaning shifts each time."
      },
      {
        heading: "Intonation",
        body: "Intonation is the rise and fall of the voice in speaking. A falling tone usually marks statements and wh-questions: She is coming down. A rising tone usually marks yes-no questions and lists: Are you coming up? It can also show surprise, doubt or politeness. For example, the word Really can sound interested with a rising tone or doubtful with a falling-rising tone. In JAMB, intonation questions often give a sentence and ask which tune fits it: a statement takes a falling tune, a yes-no question takes a rising tune, and a question tag takes a rising tune when the speaker is unsure and a falling tune when the speaker is sure. Learn these patterns, and listen to how speakers use pitch in real conversation."
      },
      {
        heading: "Rhythm in English",
        body: "English is a stress-timed language, which means stressed syllables occur at roughly regular intervals, and unstressed syllables are squeezed between them. That is why English speakers say I am going to the market quickly, with to the almost disappearing, while in a syllable-timed language every syllable gets equal time. This rhythm explains why function words are often reduced: to becomes tuh, and becomes un, and of becomes uv in fast speech. When you practise oral English, tap the beat on stressed syllables and let the weak syllables fall between the beats. Good rhythm makes your speech sound natural and helps you recognise stressed syllables in JAMB listening-style questions."
      }
    ],
    definitions: [
      { term: "Stress", meaning: "Extra force or emphasis given to a syllable or word in speech." },
      { term: "Syllable", meaning: "A unit of sound in a word, usually containing a vowel sound." },
      { term: "Intonation", meaning: "The rise and fall of the voice in speaking." },
      { term: "Rhythm", meaning: "The regular pattern of stressed and unstressed syllables in speech." },
      { term: "Content word", meaning: "A word carrying meaning, such as a noun, verb, adjective or adverb." },
      { term: "Function word", meaning: "A grammatical word such as an article, preposition or auxiliary verb, usually unstressed." }
    ],
    formulas: ["Most two-syllable nouns stress the first syllable; most two-syllable verbs stress the second.", "Statements and wh-questions usually take a falling tone.", "Yes-no questions usually take a rising tone.", "Stress on a different word changes the emphasis, and sometimes the meaning, of a sentence."],
    examples: [
      {
        title: "Finding the stressed syllable",
        problem: "Which syllable is stressed in the word important?",
        steps: ["Divide the word into syllables: im-por-tant.", "Say the word aloud slowly and listen for the loudest syllable.", "Notice that por sounds louder and longer than im and tant.", "Check that the stress falls on the second syllable.", "Write the word with the stressed syllable in capitals: im-POR-tant."],
        answer: "The second syllable is stressed: im-POR-tant."
      },
      {
        title: "Stress changing word class",
        problem: "How does stress differ between the noun and the verb forms of record?",
        steps: ["Recall that record can be a noun, a disc, or a verb, to write down.", "Apply the noun pattern: stress the first syllable, RE-cord.", "Apply the verb pattern: stress the second syllable, re-CORD.", "Say both forms aloud to hear the difference.", "Note that the spelling is the same but the stress changes."],
        answer: "As a noun it is RE-cord, with stress on the first syllable; as a verb it is re-CORD, with stress on the second."
      }
    ],
    tips: ["Say words aloud when practising stress; silent reading hides the pattern.", "Learn the noun-first, verb-second pattern for pairs like record and present.", "A yes-no question almost always rises at the end.", "In stress questions, compare all options syllable by syllable."],
    mistakes: ["Stressing every syllable equally when reading aloud.", "Assuming stress always falls on the first syllable.", "Confusing intonation with stress; intonation is pitch movement, stress is force.", "Ignoring sentence stress and choosing the wrong emphasised word."],
    facts: ["English is a stress-timed language.", "Stress can change a word from a noun to a verb.", "Falling tone is used for statements and wh-questions.", "Function words are usually unstressed in connected speech."],
    quiz: [
      { q: "Which syllable is stressed in the word begin?", options: ["First syllable", "Second syllable", "Both syllables equally", "Neither syllable"], answer: 1, explanation: "Begin is pronounced be-GIN, with the stress on the second syllable." },
      { q: "How is the noun record stressed?", options: ["re-CORD", "RE-cord", "re-cord with equal stress", "RE-CORD"], answer: 1, explanation: "As a noun, record is stressed on the first syllable: RE-cord." },
      { q: "Which sentence would normally take a rising intonation?", options: ["She is coming home.", "Are you coming home?", "What is your name?", "Close the door."], answer: 1, explanation: "Yes-no questions such as Are you coming home normally take a rising tone." },
      { q: "Which word is most likely to be stressed in the sentence I bought a new CAR?", options: ["I", "bought", "a", "car"], answer: 3, explanation: "Car is a content word carrying the key information, so it receives the main stress." },
      { q: "What is rhythm in English speech?", options: ["The speed of reading", "The pattern of stressed and unstressed syllables", "The loudness of the voice", "The number of words in a sentence"], answer: 1, explanation: "Rhythm is the regular pattern created by stressed syllables occurring at intervals, with weak syllables between them." },
      { q: "Which syllable is stressed in the word table?", options: ["First syllable", "Second syllable", "Both syllables equally", "Neither syllable"], answer: 0, explanation: "Table is pronounced TA-ble, with the stress on the first syllable." },
      { q: "How is the verb present stressed?", options: ["PRE-sent", "pre-SENT", "pre-sent with equal stress", "PRE-SENT"], answer: 1, explanation: "As a verb, present is stressed on the second syllable: pre-SENT, while the noun is PRE-sent." },
      { q: "Which sentence would normally take a falling intonation?", options: ["Are you ready?", "She is ready.", "Do you understand?", "Is he coming?"], answer: 1, explanation: "Statements such as She is ready normally take a falling tone, while yes-no questions rise." },
      { q: "Which question would normally take a rising intonation?", options: ["What is your name?", "Where do you live?", "Did you eat?", "Who is there?"], answer: 2, explanation: "Did you eat is a yes-no question, which normally takes a rising tone, while wh-questions fall." },
      { q: "In the sentence I bought the BOOK, which word is emphasised?", options: ["I", "Bought", "The", "Book"], answer: 3, explanation: "The stress on book emphasises what was bought, not who bought it." },
      { q: "Which words are usually unstressed in a sentence?", options: ["Nouns and main verbs", "Articles and prepositions", "Adjectives and adverbs", "Names of people"], answer: 1, explanation: "Function words such as articles and prepositions are usually weak and unstressed, while content words carry the stress." },
      { q: "What does stress-timed mean about English?", options: ["Every syllable gets equal time", "Stressed syllables occur at roughly regular intervals", "Every word is stressed equally", "Speech has no rhythm at all"], answer: 1, explanation: "English is stress-timed, so stressed syllables fall at roughly regular intervals and weak syllables are squeezed between them." },
      { q: "Which word has a different stress pattern from the others?", options: ["Begin", "Record as a verb", "Table", "Present as a verb"], answer: 2, explanation: "Table stresses the first syllable, while begin, re-CORD and pre-SENT stress the second syllable." },
      { q: "What is the main difference between stress and intonation?", options: ["Stress is pitch movement and intonation is force", "Stress is force on a syllable and intonation is the rise and fall of the voice", "They mean exactly the same thing", "Stress applies only to sentences"], answer: 1, explanation: "Stress is extra force on a syllable or word, while intonation is the rise and fall of pitch across an utterance." },
      { q: "A question tag takes a rising tune when the speaker is what?", options: ["Sure of the answer", "Unsure and really asking", "Angry", "Reading a statement"], answer: 1, explanation: "A question tag rises when the speaker is unsure and genuinely asking, and falls when the speaker is sure." }
    ],
    status: "published"
  },
  {
    id: "english-06",
    subjectId: "english",
    topic: "Oral English",
    subtopic: "Vowel and consonant sounds and homophones",
    title: "Vowel and Consonant Sounds and Homophones",
    order: 6,
    introduction: "English spelling often hides the real sounds of words. This lesson teaches you the vowel and consonant sounds of English, how to recognise them in JAMB oral questions, and how to handle homophones, words that sound alike but differ in spelling and meaning.",
    objectives: ["Distinguish the vowel sounds of English", "Distinguish the consonant sounds of English", "Identify words with the same vowel or consonant sound", "Recognise silent letters in words", "Use homophones correctly in sentences"],
    sections: [
      {
        heading: "Vowel Sounds",
        body: "English has about twenty vowel sounds, although it has only five vowel letters. A vowel sound is made with an open vocal tract, and the tongue position decides which vowel you hear. For example, the vowel in seat is a long ee sound, while the vowel in sit is a short i sound, and the vowel in set is a short e sound. JAMB often asks which word has the same vowel sound as a given word, so you must listen to the sound, not the spelling. For example, the words key, sea and people all share the ee sound despite different spellings. Learn the common vowel sounds by grouping words that rhyme, and practise saying minimal pairs such as ship and sheep, full and fool, and cot and caught until the differences are clear."
      },
      {
        heading: "Consonant Sounds",
        body: "Consonant sounds are made by obstructing the airflow, and English has about twenty-four of them. Some are voiced, made with vibrating vocal cords, such as b, d, g, v, z and m, while others are voiceless, such as p, t, k, f and s. Pairs such as p and b, t and d, and s and z differ only in voicing, so feel your throat as you say them to tell them apart. Other important consonants include the th sounds in think and this, the sh sound in shop, the ch sound in church, and the ng sound in sing. JAMB questions often ask which word has the same consonant sound as another. Always focus on the sound, because spelling misleads: the letter c can sound like k in cat or s in city."
      },
      {
        heading: "Silent Letters and Sound Patterns",
        body: "Many English words contain silent letters that are written but not pronounced. The k in knife and know is silent, the b in debt and doubt is silent, the l in walk and calm is silent, and the p in psychology is silent. Some letters change their sound with their neighbours: the letter g is soft before e and i, as in gentle, but hard before a, o and u, as in goat. The letters gh are silent in night and through, but pronounced as f in enough. To master these patterns, build a personal list of words with silent letters and revise it weekly. In the exam, say each option word aloud in your head and compare the sounds, not the letters, before choosing your answer."
      },
      {
        heading: "Homophones",
        body: "Homophones are words that sound the same but have different spellings and meanings, such as their, there and they are, or to, too and two. Others include bare and bear, principal and principle, and stationary and stationery. JAMB tests homophones by asking you to choose the correct word to complete a sentence. For example, The ___ of the school addressed the students needs principal, not principle, because principal means the head of a school while principle means a rule or belief. The best way to learn homophones is in pairs with example sentences: I will meet you there, not their, and This is their house. Always check the meaning the sentence needs before you pick the spelling."
      }
    ],
    definitions: [
      { term: "Vowel sound", meaning: "A speech sound made with an open vocal tract, such as the sounds in seat, sit and set." },
      { term: "Consonant sound", meaning: "A speech sound made by obstructing airflow, such as p, b, t or sh." },
      { term: "Voiced sound", meaning: "A sound made with vibrating vocal cords, such as b, d, v and z." },
      { term: "Voiceless sound", meaning: "A sound made without vocal cord vibration, such as p, t, f and s." },
      { term: "Silent letter", meaning: "A letter that is written but not pronounced, such as k in knife." },
      { term: "Homophone", meaning: "A word that sounds the same as another word but differs in spelling and meaning." }
    ],
    formulas: ["Judge sounds by pronunciation, never by spelling.", "Voiced and voiceless pairs differ only in vocal cord vibration: p and b, t and d, s and z.", "A silent letter is written but never pronounced.", "Homophones sound alike; only the meaning in the sentence tells them apart."],
    examples: [
      {
        title: "Matching a vowel sound",
        problem: "Which word has the same vowel sound as seat?",
        steps: ["Say seat aloud and identify its vowel: the long ee sound.", "Test each option by saying it aloud: sit has a short i, set has a short e.", "Test the word key: it has the same long ee sound.", "Check the spelling does not mislead you: key and seat look different.", "Choose the word with the matching sound, not the matching letters."],
        answer: "Key has the same vowel sound as seat: both contain the long ee sound."
      },
      {
        title: "Choosing the correct homophone",
        problem: "Choose the correct word: The ___ of the school welcomed the visitors.",
        steps: ["Read the sentence and find the meaning needed: the head of the school.", "Recall the pair: principal means head of a school, principle means a rule.", "Check the spelling for each meaning.", "Insert principal and read the sentence again.", "Confirm the sentence now makes sense."],
        answer: "The principal of the school welcomed the visitors."
      }
    ],
    tips: ["Say each option aloud in your head before choosing in oral questions.", "Group words by sound, not by spelling, when you revise.", "Learn homophones in pairs with a sentence for each.", "Feel your throat to tell voiced sounds from voiceless ones."],
    mistakes: ["Choosing a word because its spelling looks similar, not because its sound matches.", "Pronouncing silent letters such as the k in know.", "Confusing their, there and they are in writing.", "Mixing up the short i in sit with the long ee in seat."],
    facts: ["English has about twenty vowel sounds but only five vowel letters.", "The letters p and b differ only in voicing.", "The k in knife, know and knee is silent.", "Their, there and they are are homophones with different meanings."],
    quiz: [
      { q: "Which word has the same vowel sound as seat?", options: ["Sit", "Set", "Key", "Sat"], answer: 2, explanation: "Seat and key both contain the long ee vowel sound, while sit, set and sat have different vowels." },
      { q: "Which letter is silent in the word knife?", options: ["K", "N", "F", "E"], answer: 0, explanation: "The k in knife is written but not pronounced." },
      { q: "Which pair are homophones?", options: ["Cat and cut", "Bare and bear", "Hot and hat", "Pen and pan"], answer: 1, explanation: "Bare and bear sound exactly the same but have different spellings and meanings." },
      { q: "Which sound is voiced?", options: ["P", "T", "B", "F"], answer: 2, explanation: "B is made with vibrating vocal cords, while p, t and f are voiceless." },
      { q: "Choose the correct sentence.", options: ["This is there house.", "This is their house.", "This is they are house.", "This is thier house."], answer: 1, explanation: "Their shows possession, so This is their house is correct; there refers to a place." },
      { q: "Which word has the same vowel sound as sheep?", options: ["Ship", "Seat", "Set", "Sat"], answer: 1, explanation: "Sheep and seat both contain the long ee vowel sound, while ship, set and sat have different vowels." },
      { q: "Which letter is silent in the word know?", options: ["K", "N", "O", "W"], answer: 0, explanation: "The k in know is written but not pronounced." },
      { q: "Which pair of sounds differ only in voicing?", options: ["P and b", "P and t", "S and sh", "M and n"], answer: 0, explanation: "P and b are made in the same place and differ only in that b is voiced and p is voiceless." },
      { q: "Choose the correct word: I will meet you ___ at the gate.", options: ["Their", "There", "They are", "Thier"], answer: 1, explanation: "There refers to a place, so I will meet you there is correct." },
      { q: "Which word contains the sh sound?", options: ["Church", "Shop", "Sing", "Think"], answer: 1, explanation: "Shop begins with the sh sound, while church has ch, sing has ng, and think has th." },
      { q: "Which of these is a homophone pair?", options: ["Principal and principle", "Hot and cold", "Big and large", "Run and walk"], answer: 0, explanation: "Principal and principle sound the same but differ in spelling and meaning, so they are homophones." },
      { q: "Choose the correct word: We must follow the ___ of honesty in all we do.", options: ["Principle", "Principal", "Principals", "Principles"], answer: 0, explanation: "Principle means a rule or belief, so the principle of honesty is correct; principal means the head of a school." },
      { q: "Which letter is silent in the word psychology?", options: ["P", "S", "Y", "G"], answer: 0, explanation: "The p in psychology is written but not pronounced." },
      { q: "Which sound is voiceless?", options: ["B", "D", "S", "Z"], answer: 2, explanation: "S is made without vocal cord vibration, while b, d and z are voiced." },
      { q: "Choose the correct word: The books are ___ on the table.", options: ["Stationary", "Stationery", "Stationeries", "Stationarys"], answer: 1, explanation: "Stationery means writing materials such as books and pens, while stationary means not moving." }
    ],
    status: "published"
  },
  {
    id: "english-07",
    subjectId: "english",
    topic: "Grammar and Sentence Interpretation",
    subtopic: "Clauses, phrases and punctuation",
    title: "Clauses, Phrases and Punctuation",
    order: 7,
    introduction: "Punctuation and clause structure decide how a sentence is read and understood. This lesson teaches you the main types of clauses and phrases, the jobs they do, and the punctuation marks that hold them together, so you can write and interpret sentences accurately.",
    objectives: ["Identify noun, adjective and adverbial clauses", "Identify common phrase types and their functions", "Use commas, semicolons, colons and apostrophes correctly", "Correct run-on sentences and sentence fragments", "Choose the correct punctuation for a given sentence"],
    sections: [
      {
        heading: "Types of Clauses",
        body: "A clause has a subject and a verb. A noun clause acts as a noun: What she said surprised everyone, where What she said is the subject. An adjective clause, also called a relative clause, describes a noun: The girl who won the prize is my friend. An adverbial clause tells when, where, why or how: We stayed indoors because it rained. JAMB often asks for the function of an underlined clause, so learn to test it: if the clause can replace a noun, it is a noun clause; if it describes a noun, it is an adjective clause; if it answers when, where or why, it is adverbial. The conjunction is a useful clue: that and what often introduce noun clauses, who and which introduce adjective clauses, and because and when introduce adverbial clauses."
      },
      {
        heading: "Types of Phrases",
        body: "A phrase is a group of words without a subject and a finite verb, and phrases do the jobs of single words. A noun phrase names something: the tall man in the blue shirt. A verb phrase contains the main verb and its helpers: has been reading. An adjectival phrase describes a noun: a dress with red flowers. An adverbial phrase tells when, where or how: in the morning, with great care. A prepositional phrase begins with a preposition: under the table, after the meeting. For example, in the sentence She arrived in the morning, in the morning is an adverbial phrase of time. To identify a phrase, first check that it has no finite verb, then ask what job it does in the sentence: naming, describing or modifying."
      },
      {
        heading: "Commas and Semicolons",
        body: "Commas separate items in a list, mark off introductory words, and separate clauses in a sentence. For example, I bought rice, beans, yam and garri needs commas between the items, while After the rain, we went out needs a comma after the introductory phrase. A comma must not join two main clauses on its own: that error is called a comma splice. Use a semicolon instead: The rain fell heavily; the streets flooded. A semicolon also separates items in a complex list. A colon introduces a list, an explanation or a quotation: He brought three things: a pen, a book and a bag. Practise by reading your own sentences aloud: where you naturally pause briefly, a comma often belongs, and where you pause longer between two complete thoughts, a semicolon may be right."
      },
      {
        heading: "Apostrophes, Quotation Marks and Sentence Errors",
        body: "The apostrophe shows possession and contraction: Ada's book means the book of Ada, while it is shortens to it is. Do not confuse its, the possessive, with it is, the contraction. Quotation marks enclose direct speech: She said, I am coming tomorrow. A run-on sentence joins two main clauses without punctuation or a conjunction: The bell rang the students ran out. Fix it with a full stop, a semicolon or a conjunction: The bell rang, and the students ran out. A fragment is an incomplete sentence, such as Because it rained. Fix it by joining it to a main clause: Because it rained, we stayed indoors. JAMB tests these errors directly, so learn to spot a sentence with no finite verb or no complete thought."
      }
    ],
    definitions: [
      { term: "Noun clause", meaning: "A clause that acts as a noun in a sentence." },
      { term: "Adjective clause", meaning: "A clause that describes a noun, also called a relative clause." },
      { term: "Adverbial clause", meaning: "A clause that tells when, where, why or how an action happens." },
      { term: "Prepositional phrase", meaning: "A phrase beginning with a preposition, such as under the table." },
      { term: "Comma splice", meaning: "The error of joining two main clauses with only a comma." },
      { term: "Run-on sentence", meaning: "Two main clauses joined without punctuation or a conjunction." }
    ],
    formulas: ["A clause has a subject and a verb; a phrase does not.", "Noun clause = acts as a noun; adjective clause = describes a noun; adverbial clause = tells when, where or why.", "Use a semicolon, not a comma, to join two main clauses.", "Its is possessive; it is is a contraction of it is."],
    examples: [
      {
        title: "Identifying a clause function",
        problem: "What is the function of the underlined clause in this sentence: The boy who won the race is my brother?",
        steps: ["Find the clause: who won the race.", "Ask what it does: it describes the noun boy.", "Recall that a clause describing a noun is an adjective clause.", "Check the introducer: who is a relative pronoun.", "Confirm it cannot stand alone, so it is subordinate."],
        answer: "It is an adjective clause, also called a relative clause, describing the boy."
      },
      {
        title: "Fixing a run-on sentence",
        problem: "Correct this sentence: The rain stopped the children went outside to play.",
        steps: ["Find the two main clauses: The rain stopped and the children went outside to play.", "Note they are joined with no punctuation or conjunction.", "Choose a fix: a full stop, a semicolon or a conjunction.", "Add and with a comma for a natural compound sentence.", "Read the corrected sentence to check it is complete."],
        answer: "The rain stopped, and the children went outside to play."
      }
    ],
    tips: ["Test a clause by asking what job it does: noun, adjective or adverb.", "Never join two main clauses with a comma alone.", "Use a colon to introduce a list or an explanation.", "Check every sentence for a subject and a finite verb."],
    mistakes: ["Calling a phrase a clause because it is long.", "Using a comma splice instead of a semicolon or conjunction.", "Confusing its with it is.", "Leaving a subordinate clause alone as a fragment."],
    facts: ["A noun clause can be the subject or object of a sentence.", "A semicolon joins two closely related main clauses.", "The apostrophe shows possession and contraction.", "A fragment is an incomplete sentence with no main clause."],
    quiz: [
      { q: "What is the function of the clause in the sentence What she said was true?", options: ["Adjective clause", "Adverbial clause", "Noun clause", "Prepositional phrase"], answer: 2, explanation: "What she said acts as the subject of the sentence, so it is a noun clause." },
      { q: "Which sentence is a run-on?", options: ["The bell rang, and we left.", "The bell rang. We left.", "The bell rang we left.", "When the bell rang, we left."], answer: 2, explanation: "The bell rang we left joins two main clauses with no punctuation or conjunction, so it is a run-on." },
      { q: "Choose the correct punctuation.", options: ["Its raining today.", "It's raining today.", "Its' raining today.", "It is raining today,"], answer: 1, explanation: "It is is contracted to it is, with an apostrophe; its without an apostrophe is possessive." },
      { q: "In the sentence She arrived in the morning, what is in the morning?", options: ["Noun clause", "Adverbial phrase", "Adjective clause", "Main clause"], answer: 1, explanation: "In the morning has no finite verb and tells when she arrived, so it is an adverbial phrase." },
      { q: "Which mark introduces a list?", options: ["Semicolon", "Comma", "Colon", "Full stop"], answer: 2, explanation: "A colon introduces a list, an explanation or a quotation." },
      { q: "What is the function of the clause in the sentence I know that he is honest?", options: ["Adjective clause", "Adverbial clause", "Noun clause", "Main clause"], answer: 2, explanation: "That he is honest acts as the object of know, so it is a noun clause." },
      { q: "In the sentence The man in the blue shirt is my uncle, what is in the blue shirt?", options: ["Adverbial clause", "Adjectival phrase", "Noun clause", "Main clause"], answer: 1, explanation: "In the blue shirt has no finite verb and describes the noun man, so it is an adjectival phrase." },
      { q: "Which sentence contains an adverbial clause?", options: ["The girl who sang is my sister.", "We left because it was late.", "What he said was true.", "The tall man arrived."], answer: 1, explanation: "Because it was late tells why we left, so it is an adverbial clause." },
      { q: "Choose the correct sentence.", options: ["Ada's book is on the table.", "Adas' book is on the table.", "Adas book is on the table.", "Ada book's is on the table."], answer: 0, explanation: "Ada's shows possession, with the apostrophe before the s for a singular owner." },
      { q: "Which sentence is a fragment?", options: ["Because it rained.", "Because it rained, we stayed indoors.", "It rained heavily.", "We stayed indoors."], answer: 0, explanation: "Because it rained is a subordinate clause alone, with no main clause, so it is a fragment." },
      { q: "Choose the correct punctuation for a list: I bought rice, beans ___ yam.", options: ["rice, beans, yam", "rice; beans; yam", "rice: beans: yam", "rice beans yam"], answer: 0, explanation: "Commas separate items in a simple list, with and before the last item." },
      { q: "What is the function of the clause in the sentence The book that I borrowed is interesting?", options: ["Noun clause", "Adverbial clause", "Adjective clause", "Prepositional phrase"], answer: 2, explanation: "That I borrowed describes the noun book, so it is an adjective clause." },
      { q: "Which sentence joins two main clauses with a semicolon?", options: ["The rain fell, the streets flooded.", "The rain fell; the streets flooded.", "The rain fell the streets flooded.", "The rain fell, and the streets flooded."], answer: 1, explanation: "A semicolon correctly joins two closely related main clauses; a comma alone would be a comma splice." },
      { q: "In the sentence She has been reading all day, what is has been reading?", options: ["Noun phrase", "Verb phrase", "Adjectival phrase", "Prepositional phrase"], answer: 1, explanation: "Has been reading contains the main verb reading with its helpers, so it is a verb phrase." },
      { q: "Choose the correct sentence.", options: ["She said, I am coming tomorrow.", "She said, 'I am coming tomorrow.'", "She said I am coming tomorrow.", "She said: I am coming tomorrow"], answer: 1, explanation: "Direct speech is enclosed in quotation marks, so the quoted words need opening and closing marks." }
    ],
    status: "published"
  },
  {
    id: "english-08",
    subjectId: "english",
    topic: "Grammar and Sentence Interpretation",
    subtopic: "Sentence interpretation and ambiguity",
    title: "Sentence Interpretation and Ambiguity",
    order: 8,
    introduction: "Some sentences can be understood in more than one way, and JAMB often asks you to choose the correct interpretation. This lesson teaches you to read sentences carefully, spot ambiguity, work out implied meaning, and choose the option that matches what the sentence really says.",
    objectives: ["Interpret sentences accurately from their grammar and context", "Recognise structural and lexical ambiguity", "Work out implied and figurative meaning", "Distinguish what a sentence says from what it suggests", "Choose the correct interpretation among close options"],
    sections: [
      {
        heading: "Reading Sentences Carefully",
        body: "Sentence interpretation begins with grammar: find the subject, the verb and the object, and check which words modify which. For example, in the sentence Only Ada passed the test, the word only changes the meaning depending on its position: Only Ada passed means nobody else passed, while Ada only passed the test means she did nothing more than pass. Negatives also need care: All that glitters is not gold does not mean nothing that glitters is gold; it means some glittering things are not gold. When a JAMB question asks what a sentence means, read it slowly, note the position of only, even, almost and not, and test each option against the exact wording before choosing."
      },
      {
        heading: "Ambiguity in Sentences",
        body: "A sentence is ambiguous when it can be understood in two or more ways. Lexical ambiguity comes from a word with more than one meaning: The bank is near the river could mean a financial bank or the side of a river. Structural ambiguity comes from grammar: Visiting relatives can be boring can mean the relatives who visit are boring, or the act of visiting them is boring. Another example is I saw the man with the telescope: either I used the telescope or the man had it. To resolve ambiguity, use context: the surrounding sentences usually show which meaning is intended. JAMB may ask you to identify the ambiguous sentence or to choose the correct interpretation, so practise rewriting ambiguous sentences in two ways to see both meanings clearly."
      },
      {
        heading: "Implied and Figurative Meaning",
        body: "Writers often mean more than they say directly. Implied meaning is suggested rather than stated: when a teacher says The exam is tomorrow, the implication may be that students should revise tonight. Figurative language also needs interpretation: He is a lion in battle does not mean he is an animal; it means he is brave. A metaphor compares directly, a simile uses like or as, and personification gives human qualities to things, as in The wind whispered. For example, the sentence Time is money implies that time is valuable and should not be wasted. In interpretation questions, ask what the writer intends you to understand, not what the words literally say, and choose the option that captures that intended meaning."
      },
      {
        heading: "Choosing the Correct Interpretation",
        body: "JAMB interpretation questions usually give one sentence and four possible meanings, and only one matches exactly. Start by eliminating options that add information the sentence never gives, and options that contradict it. Then compare the remaining options word by word with the sentence. For example, if the sentence says She hardly ever visits, the correct interpretation is that she visits very rarely, not that she never visits and not that she visits often. Watch for quantifiers such as all, some, few, many, hardly and almost, because they change the meaning completely. If two options seem close, choose the one that is true in every part; a partly true option is wrong. Finally, check that your chosen interpretation would still be true if the sentence were read by someone else."
      }
    ],
    definitions: [
      { term: "Ambiguity", meaning: "A sentence or word that can be understood in more than one way." },
      { term: "Lexical ambiguity", meaning: "Ambiguity caused by a word with more than one meaning." },
      { term: "Structural ambiguity", meaning: "Ambiguity caused by the grammar or structure of a sentence." },
      { term: "Implied meaning", meaning: "Meaning suggested by a sentence but not stated directly." },
      { term: "Metaphor", meaning: "A direct comparison between two unlike things without like or as." },
      { term: "Simile", meaning: "A comparison using like or as." }
    ],
    formulas: ["Only changes meaning according to its position in the sentence.", "Ambiguity = one sentence, two or more possible meanings.", "Context usually resolves ambiguity: use the surrounding sentences.", "A correct interpretation must be true in every part, not only in part."],
    examples: [
      {
        title: "Interpreting a sentence with only",
        problem: "What does this sentence mean: Only Musa scored above ninety?",
        steps: ["Find the word only and note its position before Musa.", "Only before Musa means nobody else did what Musa did.", "Test the option Nobody else scored above ninety: it matches.", "Test the option Musa did nothing else: it does not match, because only does not modify scored.", "Choose the interpretation that matches the position of only."],
        answer: "It means nobody else scored above ninety; Musa alone achieved that score."
      },
      {
        title: "Resolving ambiguity",
        problem: "Explain the two meanings of this sentence: I saw the man with the telescope.",
        steps: ["Identify the ambiguous phrase: with the telescope.", "Read it one way: the telescope belongs to the man.", "Read it the other way: I used the telescope to see the man.", "Note that the grammar allows both readings.", "Conclude the sentence is structurally ambiguous without more context."],
        answer: "It can mean the man had the telescope, or that I used the telescope to see the man."
      }
    ],
    tips: ["Note the position of only, even, almost and not; they change meaning.", "Eliminate options that add facts the sentence never states.", "Use context to resolve ambiguous words and structures.", "Check quantifiers like all, some and hardly carefully."],
    mistakes: ["Reading hardly ever as never.", "Choosing a partly true interpretation instead of a fully true one.", "Ignoring the position of only in a sentence.", "Taking figurative language literally."],
    facts: ["Only can change a sentence's meaning by its position.", "Visiting relatives can be boring is structurally ambiguous.", "A metaphor compares without like or as; a simile uses like or as.", "Implied meaning is suggested, not stated directly."],
    quiz: [
      { q: "What does the sentence Only Ada passed the test mean?", options: ["Ada did nothing but pass the test", "Nobody else passed the test", "Ada passed only one test", "The test was easy"], answer: 1, explanation: "Only before Ada means Ada alone passed; nobody else did." },
      { q: "Which sentence is ambiguous?", options: ["Ada is a student.", "I saw the man with the telescope.", "The sun rises in the east.", "She bought a red dress."], answer: 1, explanation: "With the telescope can describe the man or the act of seeing, so the sentence has two meanings." },
      { q: "He is a lion in battle is an example of what?", options: ["Simile", "Metaphor", "Irony", "Literal statement"], answer: 1, explanation: "It directly compares the man to a lion without like or as, which is a metaphor." },
      { q: "What does She hardly ever visits mean?", options: ["She never visits", "She visits very rarely", "She visits often", "She visits every day"], answer: 1, explanation: "Hardly ever means very rarely, not never and not often." },
      { q: "The word bank in The bank is near the river shows what kind of ambiguity?", options: ["Structural ambiguity", "Lexical ambiguity", "Punctuation error", "Tense error"], answer: 1, explanation: "Bank has more than one meaning, a financial institution or a river side, so the ambiguity is lexical." },
      { q: "What does the sentence Ada only passed the test mean, compared with Only Ada passed the test?", options: ["Nobody else passed", "Ada did nothing more than pass", "Ada failed the test", "The test was very hard"], answer: 1, explanation: "Only before passed limits the verb, so Ada did nothing more than pass, while only before Ada limits the person." },
      { q: "Which sentence contains a simile?", options: ["He is a lion in battle.", "She is as brave as a lion.", "Time is money.", "The wind whispered through the trees."], answer: 1, explanation: "As brave as a lion uses as to compare, which is a simile; the others are metaphor or personification." },
      { q: "What does the sentence All that glitters is not gold mean?", options: ["Nothing that glitters is gold", "Some glittering things are not gold", "Gold never glitters", "All gold glitters"], answer: 1, explanation: "The sentence means not everything that glitters is gold; some glittering things are not gold." },
      { q: "The wind whispered through the trees is an example of what?", options: ["Simile", "Metaphor", "Personification", "Irony"], answer: 2, explanation: "Whispered gives the wind a human quality, which is personification." },
      { q: "What does She almost finished the work mean?", options: ["She finished the work completely", "She nearly finished it but did not complete it", "She never started the work", "She finished it easily"], answer: 1, explanation: "Almost means nearly but not completely, so she did not finish the work." },
      { q: "Which sentence is structurally ambiguous?", options: ["The cat sat on the mat.", "Visiting relatives can be boring.", "She drank a glass of water.", "He opened the door slowly."], answer: 1, explanation: "Visiting relatives can mean the relatives who visit, or the act of visiting them, so the structure allows two meanings." },
      { q: "A teacher says The examination is tomorrow. What is the likely implied meaning?", options: ["The examination has been cancelled", "Students should revise tonight", "Tomorrow is a holiday", "The teacher likes examinations"], answer: 1, explanation: "The statement implies that students should prepare, even though it does not say so directly." },
      { q: "What does Time is money imply?", options: ["Time can be spent in a shop", "Time is valuable and should not be wasted", "Money is made of time", "Time and money are the same thing"], answer: 1, explanation: "The metaphor implies that time, like money, is valuable and should be used wisely." },
      { q: "Which interpretation of Few students passed is correct?", options: ["No student passed", "Almost all students passed", "Only a small number of students passed", "All students passed"], answer: 2, explanation: "Few means only a small number, not none and not many." },
      { q: "When choosing between two close interpretations, what should you do?", options: ["Choose the one that sounds most interesting", "Choose the one that is true in every part", "Choose the longest option", "Choose the first option"], answer: 1, explanation: "A correct interpretation must be true in every part; a partly true option is wrong." }
    ],
    status: "published"
  },
  {
    id: "english-09",
    subjectId: "english",
    topic: "Vocabulary Development",
    subtopic: "Synonyms, antonyms and word formation",
    title: "Synonyms, Antonyms and Word Formation",
    order: 9,
    introduction: "A wide vocabulary is one of the fastest ways to raise your JAMB English score. This lesson teaches you synonyms and antonyms, how new words are formed with prefixes, suffixes and roots, and how to work out the meaning of unfamiliar words from their parts.",
    objectives: ["Identify synonyms and antonyms of common words", "Use prefixes and suffixes to build and decode words", "Recognise common Latin and Greek roots", "Form nouns, verbs, adjectives and adverbs from base words", "Choose the nearest in meaning and the opposite in meaning in exam questions"],
    sections: [
      {
        heading: "Synonyms and Antonyms",
        body: "A synonym is a word with the same or nearly the same meaning as another word: happy and joyful, begin and start, brave and courageous. An antonym is a word with the opposite meaning: hot and cold, rich and poor, love and hate. JAMB often asks for the word nearest in meaning to an underlined word, or the word opposite in meaning. For example, the nearest in meaning to abundant is plentiful, and the opposite of scarce is abundant. True synonyms are rare: words usually differ in strength or use. For instance, slim and skinny both mean thin, but skinny sounds negative while slim sounds positive. Learn words in pairs and groups, with an example sentence for each, so you remember the shade of meaning as well as the definition."
      },
      {
        heading: "Prefixes",
        body: "A prefix is added to the beginning of a word to change its meaning. Common prefixes include un-, meaning not, as in unhappy; re-, meaning again, as in rewrite; pre-, meaning before, as in preview; dis-, meaning not or opposite, as in disagree; mis-, meaning wrongly, as in misunderstand; and anti-, meaning against, as in anticlockwise. For example, if you know that bio- means life, you can guess that biology is the study of life. JAMB tests prefixes by asking for the word that means the opposite of a given word, or by asking you to complete a word. Learn each prefix with two examples, and practise breaking unfamiliar words into prefix plus base to guess their meaning before you check a dictionary."
      },
      {
        heading: "Suffixes and Word Formation",
        body: "A suffix is added to the end of a word and often changes its word class. For example, -ness turns an adjective into a noun: kind becomes kindness. The suffix -tion turns a verb into a noun: educate becomes education. The suffix -ly turns an adjective into an adverb: quick becomes quickly. The suffix -er turns a verb into a noun naming a person: teach becomes teacher. Other useful suffixes are -ful, meaning full of, as in careful; -less, meaning without, as in careless; and -able, meaning can be done, as in readable. To form a new word, identify the base, choose the suffix that gives the word class you need, and check the spelling: happy becomes happiness, with y changing to i before -ness. This skill helps you answer word-formation questions and build vocabulary fast."
      },
      {
        heading: "Roots and Compound Words",
        body: "Many English words are built from Latin and Greek roots. The root port means carry, so transport, import and portable all involve carrying. The root scrib means write, so describe, prescribe and manuscript all involve writing. The root dict means say, so predict, dictionary and contradict all involve saying. Compound words join two words into one: football, classroom, sunflower and bookshelf. Some compounds are written as one word, some with a hyphen, such as mother-in-law, and some as two words, such as post office. When you meet an unfamiliar word, split it into its parts: a root you know plus a prefix or suffix often reveals the meaning. Keep a notebook of roots with three examples each, and review it until the patterns become familiar."
      }
    ],
    definitions: [
      { term: "Synonym", meaning: "A word with the same or nearly the same meaning as another word." },
      { term: "Antonym", meaning: "A word with the opposite meaning to another word." },
      { term: "Prefix", meaning: "A group of letters added to the beginning of a word to change its meaning." },
      { term: "Suffix", meaning: "A group of letters added to the end of a word, often changing its word class." },
      { term: "Root", meaning: "The basic part of a word that carries its core meaning." },
      { term: "Compound word", meaning: "A word formed by joining two or more words, such as football." }
    ],
    formulas: ["Synonym = same or nearly the same meaning; antonym = opposite meaning.", "Un- means not; re- means again; pre- means before; dis- means opposite.", "-ness, -tion and -ment turn words into nouns; -ly turns adjectives into adverbs.", "Split an unfamiliar word into prefix + root + suffix to guess its meaning."],
    examples: [
      {
        title: "Finding the nearest in meaning",
        problem: "Choose the word nearest in meaning to abundant.",
        steps: ["Recall the meaning of abundant: existing in large quantities.", "Test plentiful: it means existing in large quantities, a close match.", "Test scarce: it means the opposite, in short supply.", "Test tiny: it describes size, not quantity.", "Choose plentiful as the nearest synonym."],
        answer: "Plentiful is nearest in meaning to abundant."
      },
      {
        title: "Using a prefix to decode a word",
        problem: "Work out the meaning of misunderstanding using its prefix.",
        steps: ["Split the word: mis- + understanding.", "Recall that mis- means wrongly.", "Combine the parts: wrongly understanding.", "Check with a sentence: A misunderstanding caused the quarrel.", "Confirm the meaning fits the sentence."],
        answer: "Misunderstanding means a wrong or incorrect understanding of something."
      }
    ],
    tips: ["Learn synonyms in groups with example sentences, not alone.", "Memorise the common prefixes un-, re-, pre-, dis-, mis- and anti-.", "When a word is unfamiliar, split it into prefix, root and suffix.", "For opposite-in-meaning questions, first find the meaning, then reverse it."],
    mistakes: ["Choosing a word that is related but not the nearest in meaning.", "Confusing -ful and -less, which are opposites.", "Forgetting that y changes to i before -ness and -ful.", "Treating a synonym as exact when it differs in strength or use."],
    facts: ["Happy and joyful are synonyms; hot and cold are antonyms.", "The prefix re- means again, as in rewrite.", "The suffix -tion turns verbs into nouns, as in educate to education.", "The root port means carry, as in transport and import."],
    quiz: [
      { q: "Which word is nearest in meaning to brave?", options: ["Cowardly", "Courageous", "Weak", "Frightened"], answer: 1, explanation: "Courageous means brave, while cowardly, weak and frightened are opposites or unrelated." },
      { q: "Which word is opposite in meaning to scarce?", options: ["Rare", "Abundant", "Little", "Few"], answer: 1, explanation: "Scarce means in short supply, and abundant means existing in large quantities, its opposite." },
      { q: "What does the prefix mis- mean in misunderstand?", options: ["Again", "Before", "Wrongly", "Against"], answer: 2, explanation: "Mis- means wrongly, so misunderstand means to understand wrongly." },
      { q: "Which word is formed by adding -ness to kind?", options: ["Kindly", "Kindness", "Kinder", "Kindful"], answer: 1, explanation: "Adding -ness to the adjective kind forms the noun kindness." },
      { q: "The root dict means say. Which word contains it?", options: ["Predict", "Portable", "Describe", "Biology"], answer: 0, explanation: "Predict contains dict, meaning say, as in saying before something happens." },
      { q: "Which word is nearest in meaning to joyful?", options: ["Sad", "Happy", "Angry", "Tired"], answer: 1, explanation: "Joyful means very happy, so happy is nearest in meaning." },
      { q: "Which word is opposite in meaning to love?", options: ["Like", "Adore", "Hate", "Cherish"], answer: 2, explanation: "Hate is the opposite of love, while like, adore and cherish are similar in meaning." },
      { q: "What does the prefix re- mean in rewrite?", options: ["Not", "Before", "Again", "Against"], answer: 2, explanation: "Re- means again, so rewrite means to write again." },
      { q: "What does the prefix un- mean in unhappy?", options: ["Again", "Not", "Before", "Wrongly"], answer: 1, explanation: "Un- means not, so unhappy means not happy." },
      { q: "Which word is formed by adding -ly to quick?", options: ["Quickness", "Quicker", "Quickly", "Quickful"], answer: 2, explanation: "Adding -ly to the adjective quick forms the adverb quickly." },
      { q: "Which word is formed by adding -tion to educate?", options: ["Educated", "Education", "Educator", "Educating"], answer: 1, explanation: "Adding -tion to educate forms the noun education." },
      { q: "The root port means carry. Which word contains it?", options: ["Transport", "Biology", "Describe", "Predict"], answer: 0, explanation: "Transport contains port, meaning carry, as in carrying across." },
      { q: "Which word is opposite in meaning to careful?", options: ["Cautious", "Careless", "Watchful", "Attentive"], answer: 1, explanation: "Careless means without care, the opposite of careful; cautious, watchful and attentive are similar to careful." },
      { q: "Which is a compound word?", options: ["Classroom", "Happiness", "Rewrite", "Teacher"], answer: 0, explanation: "Classroom joins class and room into one word, so it is a compound word." },
      { q: "What does the suffix -less mean in careless?", options: ["Full of", "Without", "Able to be", "Again"], answer: 1, explanation: "-Less means without, so careless means without care, the opposite of careful." }
    ],
    status: "published"
  },
  {
    id: "english-10",
    subjectId: "english",
    topic: "Vocabulary Development",
    subtopic: "Idioms, phrasal verbs and register",
    title: "Idioms, Phrasal Verbs and Register",
    order: 10,
    introduction: "Idioms and phrasal verbs give English its colour, and register decides which words suit each situation. This lesson teaches you the common idioms and phrasal verbs JAMB tests, and how to choose formal or informal language for the right context.",
    objectives: ["Explain the meaning of common English idioms", "Use phrasal verbs correctly in sentences", "Distinguish formal, informal and technical register", "Choose the appropriate word for a given context", "Interpret idioms and phrasal verbs in exam questions"],
    sections: [
      {
        heading: "What Idioms Are",
        body: "An idiom is a fixed expression whose meaning cannot be worked out from the individual words. For example, to break the ice means to ease tension at the start of a meeting, not to smash frozen water. To hit the nail on the head means to say exactly the right thing. To spill the beans means to reveal a secret. JAMB often asks for the meaning of an underlined idiom in a sentence, so you must learn idioms as whole units, not word by word. For example, in the sentence After months of saving, she finally bit the bullet and bought the laptop, bit the bullet means she forced herself to do something difficult. Learn ten idioms a week with a sentence for each, and group them by theme, such as money, time or emotions, to remember them better."
      },
      {
        heading: "Common Idioms in the Exam",
        body: "Some idioms appear again and again in JAMB papers. To be in hot water means to be in trouble. To let the cat out of the bag means to reveal a secret. To burn the midnight oil means to work late into the night. To be under the weather means to feel slightly ill. To cost an arm and a leg means to be very expensive. To see eye to eye means to agree with someone. For example, the sentence They finally saw eye to eye after the long meeting means they finally agreed. When you meet an idiom in a question, read the whole sentence for clues: the situation usually hints at the meaning. If you know the idiom, answer at once; if you do not, eliminate options that take the words literally, because idioms are never literal."
      },
      {
        heading: "Phrasal Verbs",
        body: "A phrasal verb is a verb plus a particle, usually a preposition or adverb, that together have a new meaning. For example, look up can mean to search for information, look after means to take care of, look forward to means to expect with pleasure, and give up means to stop trying. The particle changes the verb completely: turn on means to switch on, turn off means to switch off, and turn up means to arrive or to increase. JAMB tests phrasal verbs by asking you to choose the correct particle or the correct meaning. For example, in the sentence The meeting was called off, called off means cancelled. Learn phrasal verbs in families around one verb, such as put on, put off, put out and put up with, with a sentence for each meaning."
      },
      {
        heading: "Register",
        body: "Register is the level of formality of language used in a particular situation. Formal register suits exams, official letters and academic writing: I would be grateful if you could assist me. Informal register suits friends and family: Can you help me out? Technical register uses the special vocabulary of a subject: the patient presented with hypertension. Slang is very informal and suits only close friends. JAMB asks you to choose the word or expression appropriate to a given context, such as a formal letter or a conversation. For example, in a formal letter you write I wish to apply, not I wanna apply. To choose correctly, ask who is speaking, to whom, and in what situation, then pick the language that fits that relationship."
      }
    ],
    definitions: [
      { term: "Idiom", meaning: "A fixed expression whose meaning cannot be worked out from its individual words." },
      { term: "Phrasal verb", meaning: "A verb plus a particle that together have a new meaning, such as give up." },
      { term: "Register", meaning: "The level of formality of language used in a particular situation." },
      { term: "Formal register", meaning: "Polite, careful language used in official and academic contexts." },
      { term: "Informal register", meaning: "Relaxed language used with friends and family." },
      { term: "Slang", meaning: "Very informal words used by a particular group, not suitable for formal writing." }
    ],
    formulas: ["An idiom is never literal: learn its meaning as a whole.", "A phrasal verb = verb + particle, with a new meaning together.", "Formal situations need formal language; informal situations allow informal language.", "When unsure of an idiom, eliminate the literal options first."],
    examples: [
      {
        title: "Interpreting an idiom",
        problem: "What does the idiom mean in this sentence: After the long argument, they finally saw eye to eye?",
        steps: ["Identify the idiom: saw eye to eye.", "Note the context: after a long argument, they finally agreed.", "Recall the idiom: to see eye to eye means to agree.", "Reject literal readings about eyes or seeing.", "Choose the meaning that fits the context of agreement."],
        answer: "It means they finally agreed with each other."
      },
      {
        title: "Choosing the correct phrasal verb",
        problem: "Choose the correct phrasal verb: The match was ___ because of the rain.",
        steps: ["Read the sentence: the match did not happen because of rain.", "Recall phrasal verbs for cancelling: call off means cancel.", "Test called off: The match was called off fits the meaning.", "Test called on: it means to visit, which does not fit.", "Choose called off as the correct phrasal verb."],
        answer: "The match was called off because of the rain."
      }
    ],
    tips: ["Learn idioms as whole units with a sentence for each.", "Group phrasal verbs by their main verb, such as look, put and turn.", "For register questions, ask who is speaking and to whom.", "Never choose a literal meaning for an idiom."],
    mistakes: ["Interpreting an idiom word by word.", "Using slang or informal language in a formal letter.", "Confusing look after with look for; they mean different things.", "Choosing a phrasal verb by the verb alone and ignoring the particle."],
    facts: ["To break the ice means to ease tension at the start of a meeting.", "To burn the midnight oil means to work late into the night.", "Look after means to take care of; look for means to search for.", "Formal register suits official letters and academic writing."],
    quiz: [
      { q: "What does the idiom to spill the beans mean?", options: ["To cook beans", "To reveal a secret", "To drop food", "To plant beans"], answer: 1, explanation: "To spill the beans means to reveal a secret, not anything to do with cooking." },
      { q: "What does the phrasal verb give up mean?", options: ["To hand something over", "To stop trying", "To lift something", "To donate money"], answer: 1, explanation: "Give up means to stop trying or to surrender, as in She refused to give up." },
      { q: "Which expression suits a formal letter?", options: ["I wanna apply for the job.", "I wish to apply for the post.", "Gimme the job, please.", "I dey apply for the job."], answer: 1, explanation: "I wish to apply for the post is formal and polite, suitable for an official letter." },
      { q: "What does to be under the weather mean?", options: ["To be outside in the rain", "To feel slightly ill", "To check the forecast", "To be very happy"], answer: 1, explanation: "To be under the weather is an idiom meaning to feel slightly unwell." },
      { q: "What does look after mean?", options: ["To search for", "To take care of", "To look behind", "To admire"], answer: 1, explanation: "Look after means to take care of someone or something, as in She looks after her younger brother." },
      { q: "What does the idiom to break the ice mean?", options: ["To smash frozen water", "To ease tension at the start of a meeting", "To fall on ice", "To make a drink cold"], answer: 1, explanation: "To break the ice means to ease tension and help people relax at the start of a meeting." },
      { q: "What does to burn the midnight oil mean?", options: ["To cook at night", "To work late into the night", "To waste oil", "To light a lamp"], answer: 1, explanation: "To burn the midnight oil means to work or study late into the night." },
      { q: "What does look for mean?", options: ["To take care of", "To search for", "To look behind", "To expect with pleasure"], answer: 1, explanation: "Look for means to search for something, which is different from look after, to take care of." },
      { q: "What does to be in hot water mean?", options: ["To be in a bath", "To be in trouble", "To be very warm", "To cook food"], answer: 1, explanation: "To be in hot water is an idiom meaning to be in trouble." },
      { q: "What does turn up mean in the sentence He turned up late for the meeting?", options: ["To switch on", "To arrive", "To increase the volume", "To turn around"], answer: 1, explanation: "Turn up can mean to arrive, so he turned up late means he arrived late." },
      { q: "Which expression suits an informal chat with a friend?", options: ["I would be grateful if you could assist me.", "I wish to apply for the post.", "Can you help me out?", "I hereby request your assistance."], answer: 2, explanation: "Can you help me out is relaxed and informal, suitable for a friend, while the others are formal." },
      { q: "What does to cost an arm and a leg mean?", options: ["To be very cheap", "To be very expensive", "To cause an injury", "To pay in parts"], answer: 1, explanation: "To cost an arm and a leg means to be very expensive." },
      { q: "What does put off mean in the sentence They put off the match?", options: ["To cancel it at once", "To postpone it to a later time", "To switch it off", "To wear it"], answer: 1, explanation: "Put off means to postpone, so they put off the match means they moved it to a later time." },
      { q: "What does to let the cat out of the bag mean?", options: ["To free a pet", "To reveal a secret", "To buy a cat", "To open a bag"], answer: 1, explanation: "To let the cat out of the bag means to reveal a secret that was meant to stay hidden." },
      { q: "Which word best fits a formal letter: I ___ to inform you that the meeting is cancelled?", options: ["wanna", "dey", "wish", "gonna"], answer: 2, explanation: "Wish is formal and polite, as in I wish to inform you, while wanna, dey and gonna are informal." }
    ],
    status: "published"
  },
  {
    id: "english-11",
    subjectId: "english",
    topic: "Summary Writing",
    subtopic: "Principles and techniques of summary writing",
    title: "Principles and Techniques of Summary Writing",
    order: 11,
    introduction: "A summary is a short, clear restatement of the main points of a longer passage, written in your own words. JAMB tests summary writing by asking you to reduce a passage to a set number of words while keeping only what matters. This lesson teaches you the principles of a good summary and the techniques that keep it short, accurate and complete.",
    objectives: ["Explain what a summary is and what it is not", "Identify the main points of a passage for a summary", "Distinguish main points from examples and minor details", "Paraphrase ideas in your own words without changing the meaning", "Write a summary within a given word limit in clear, connected sentences"],
    sections: [
      {
        heading: "What a Summary Is",
        body: "A summary gives the main points of a passage in far fewer words, in your own words, and in the same order as the original. It is not a copy of sentences lifted from the passage, and it is not a personal opinion about the passage. For example, a summary of a passage about the causes of road accidents would state the main causes and the suggested solutions, but it would leave out long examples, statistics and repeated explanations. A good summary is shorter than the original, usually about one-third of its length, and it can be understood on its own without reading the original. It keeps the writer's meaning and tone, but it uses your own sentence patterns and vocabulary wherever possible."
      },
      {
        heading: "Finding the Main Points",
        body: "Before you write a summary, read the whole passage carefully and underline the main idea of each paragraph. The question often tells you exactly what to summarise, for example the causes of water pollution, so use that instruction as your guide and ignore points that do not answer it. Ask of every sentence: does this state a main point, or does it only explain, illustrate or repeat a main point? Main points are usually stated in topic sentences, while examples, figures and anecdotes are supporting details. For example, in a passage about reading, the statement Reading improves vocabulary is a main point, while the story of a boy who read fifty books in a year is an example that supports it. List the main points in order, and check that your list covers the whole passage, not only the first half."
      },
      {
        heading: "Paraphrasing in Your Own Words",
        body: "Paraphrasing means restating an idea with different words and a different sentence structure, without changing its meaning. For example, the sentence The government introduced a new policy to reduce the cost of transport can be paraphrased as A new government policy was introduced to make transport cheaper. To paraphrase well, read the sentence, close the passage in your mind, and say the idea aloud in your own words before writing it down. Change key words to synonyms where you can, and change the sentence structure, for example by turning an active sentence into a passive one, or by joining two short sentences into one. Do not copy long phrases from the original, and do not add your own ideas, examples or opinions to the summary."
      },
      {
        heading: "Word Limit, Order and Presentation",
        body: "JAMB summary questions usually give a word limit, such as in not more than 80 words, and you must respect it. Count your words carefully and cut any repetition, unnecessary adjectives and extra examples until you fit the limit. Keep the points in the same order as they appear in the passage, and join them with linking words such as firstly, in addition, however and finally so the summary reads as one connected piece, not as a list of separate sentences. Write in clear, complete sentences, and avoid abbreviations, contractions and note form. Finally, read your summary again and check three things: does it answer the question asked, does it contain only main points, and is it within the word limit? If any answer is no, revise it before you finish."
      }
    ],
    definitions: [
      { term: "Summary", meaning: "A short restatement of the main points of a longer text, in your own words." },
      { term: "Main point", meaning: "An important idea in a passage that a summary must keep." },
      { term: "Paraphrase", meaning: "Restating an idea in different words without changing its meaning." },
      { term: "Supporting detail", meaning: "An example, figure or explanation that develops a main point but is left out of a summary." },
      { term: "Word limit", meaning: "The maximum number of words allowed for a summary." },
      { term: "Linking word", meaning: "A word such as however or in addition that connects ideas in a text." }
    ],
    formulas: ["A summary is about one-third of the original length.", "Keep main points only; leave out examples, figures and repetition.", "Use your own words and the same order as the original.", "A summary must answer the question asked and stay within the word limit."],
    examples: [
      {
        title: "Picking the main points",
        problem: "A passage about exercise gives three benefits, a story about a runner, and accident figures. Which points belong in a summary of the benefits of exercise?",
        steps: ["Read the question: it asks for the benefits of exercise only.", "List the three benefits stated in the passage.", "Note that the runner's story is an example, not a benefit.", "Note that the accident figures do not describe benefits.", "Keep only the three benefits, in the order given."],
        answer: "The summary should keep the three benefits of exercise and leave out the runner's story and the accident figures."
      },
      {
        title: "Paraphrasing a sentence",
        problem: "Paraphrase this sentence: The government introduced a new policy to reduce the cost of transport.",
        steps: ["Identify the idea: a new policy made transport cheaper.", "Replace key words: introduced can become brought in, reduce can become lower.", "Change the structure: use a passive form if helpful.", "Write the idea in your own words.", "Check that the meaning is unchanged and no new idea was added."],
        answer: "A new government policy was introduced to make transport cheaper."
      }
    ],
    tips: ["Read the summary question first, so you know which points to look for.", "Underline the main idea of each paragraph before you write.", "Paraphrase by saying the idea aloud in your own words first.", "Count your words and cut repetition until you fit the limit."],
    mistakes: ["Copying whole sentences from the passage instead of paraphrasing.", "Including striking examples while leaving out a main point.", "Adding your own opinion or new examples to the summary.", "Ignoring the word limit or the exact question asked."],
    facts: ["A summary is usually about one-third of the length of the original.", "A summary keeps the points in the same order as the original passage.", "Examples, statistics and repetition are left out of a summary.", "A summary must be understandable on its own, without the original passage."],
    quiz: [
      { q: "What is a summary?", options: ["A copy of the longest sentences in a passage", "A short restatement of the main points in your own words", "Your personal opinion about a passage", "A list of every example in a passage"], answer: 1, explanation: "A summary gives the main points of a passage in far fewer words, in your own words." },
      { q: "Which of these should be left out of a summary?", options: ["A main point", "A topic sentence", "A long example that illustrates a point", "The central idea of the passage"], answer: 2, explanation: "Examples illustrate main points but are supporting details, so they are left out of a summary." },
      { q: "How long is a good summary usually?", options: ["Longer than the original", "About the same length as the original", "About one-third of the original", "Exactly half of every paragraph"], answer: 2, explanation: "A summary is much shorter than the original, usually about one-third of its length." },
      { q: "What does paraphrasing mean?", options: ["Copying a sentence word for word", "Restating an idea in different words without changing its meaning", "Adding your own opinion to a passage", "Translating a passage into another language"], answer: 1, explanation: "Paraphrasing means saying the same idea with different words and a different structure." },
      { q: "A summary question asks for the causes of water pollution. What should you do?", options: ["Summarise the whole passage including its effects", "Include only the points about causes", "Write about your own views on pollution", "Copy the first paragraph only"], answer: 1, explanation: "A summary must answer the exact question asked, so include only the points about causes." },
      { q: "In what order should points appear in a summary?", options: ["In the order of importance to you", "In the same order as in the original passage", "In alphabetical order", "In reverse order"], answer: 1, explanation: "A summary keeps the main points in the same order as they appear in the original passage." },
      { q: "Which sentence is a good paraphrase of The rain destroyed many farms?", options: ["The rain destroyed many farms.", "Many farms were destroyed by the rain.", "Rain is bad for farmers.", "Farms are destroyed every year."], answer: 1, explanation: "Many farms were destroyed by the rain restates the idea with a different structure and keeps the meaning." },
      { q: "What should you do if your summary is over the word limit?", options: ["Write smaller", "Cut repetition and unnecessary words", "Remove a main point", "Change the word limit"], answer: 1, explanation: "Cut repetition, extra adjectives and examples, but keep every main point." },
      { q: "Which of these is a main point, not a supporting detail?", options: ["The story of a boy who read fifty books", "Reading improves vocabulary", "The figure of 200 books sold last year", "A quotation from a famous writer"], answer: 1, explanation: "Reading improves vocabulary states a central idea, while the others are examples, figures or quotations." },
      { q: "Why should a summary use linking words?", options: ["To make it longer", "To join the points into one connected piece", "To copy the original exactly", "To add new ideas"], answer: 1, explanation: "Linking words such as in addition and however connect the points so the summary reads smoothly." },
      { q: "What is the first step before writing a summary?", options: ["Write the first sentence at once", "Read the whole passage and find the main idea of each paragraph", "Count the words in the passage", "Copy the topic sentences"], answer: 1, explanation: "Read the whole passage first and identify the main points before you begin to write." },
      { q: "Which of these must a summary NOT contain?", options: ["Main points", "Your own opinion", "Paraphrased ideas", "The order of the original"], answer: 1, explanation: "A summary restates the writer's points; it must not add your own opinion or new ideas." },
      { q: "What does a topic sentence help you to find when summarising?", options: ["The hardest word in a paragraph", "The main point of a paragraph", "The number of words in a paragraph", "The author's name"], answer: 1, explanation: "Topic sentences usually state the main point of each paragraph, which a summary must keep." },
      { q: "Which presentation is correct for a summary?", options: ["Note form with abbreviations", "Clear, complete sentences", "A list of bullet points copied from the passage", "Contractions and slang"], answer: 1, explanation: "A summary is written in clear, complete sentences, not in note form or with slang." },
      { q: "After writing a summary, what should you check last?", options: ["Whether it answers the question, keeps only main points and fits the word limit", "Whether it is longer than the original", "Whether it contains every example", "Whether it uses the writer's exact words"], answer: 0, explanation: "A final check must confirm that the summary answers the question, keeps only main points and stays within the word limit." }
    ],
    status: "published"
  },
  {
    id: "english-12",
    subjectId: "english",
    topic: "Summary Writing",
    subtopic: "Summary writing in practice",
    title: "Summary Writing in Practice",
    order: 12,
    introduction: "Knowing the principles of summary writing is only the first step; you must also practise applying them under exam conditions. This lesson works through the full process, from reading the question to counting your words, so you can produce a short, accurate summary of any passage JAMB gives you.",
    objectives: ["Follow the full summary process from question to final draft", "Select points that answer a specific summary question", "Combine related points into single sentences", "Use linking words to join points smoothly", "Check a summary for accuracy, completeness and word count"],
    sections: [
      {
        heading: "The Full Summary Process",
        body: "Start by reading the summary question, then read the whole passage once for understanding. On a second reading, underline or note every sentence that answers the question, and number the points in the order they appear. For example, if the question asks for the effects of deforestation, underline each effect as you find it, and ignore causes and solutions, even if they are interesting. Next, write a rough draft in your own words, joining related points where you can. Then count the words, cut what is unnecessary, and write a neat final version. Finally, read your summary once more against the question and the passage to be sure nothing important is missing and nothing extra has crept in. Practising this process on several passages will make it fast and automatic in the exam."
      },
      {
        heading: "Selecting Points That Answer the Question",
        body: "JAMB summary questions are specific: they may ask for the reasons for a problem, the qualities of a person, or the steps in a process. Only points that answer that exact question earn marks, so be strict with yourself. For example, in a passage about a successful farmer, a question asking for the reasons for his success wants points such as hard work, use of modern methods and good planning; it does not want a description of his farm or his family. A point may appear in several sentences, so collect it once and move on. If two sentences say the same thing in different words, they are one point, not two. Write your selected points as a short numbered list before you draft, and check each one against the question: if it does not answer the question, cross it out."
      },
      {
        heading: "Combining Points and Using Linking Words",
        body: "A summary should not read like a list of separate sentences. Combine related points into single sentences with and, because, so and but, and use linking words to show the relationship between points. For example, instead of writing The soil became dry. The crops failed. The farmers lost money, you can write The soil became dry, so the crops failed and the farmers lost money. Words such as firstly, secondly, in addition, however, therefore and finally show order, addition, contrast and conclusion. Do not overuse them: one linking word per sentence is usually enough. The aim is a smooth paragraph that a reader can follow without going back to the original passage."
      },
      {
        heading: "Checking Accuracy and Word Count",
        body: "Accuracy matters more than style in a summary. Every point in your summary must be true to the passage: do not exaggerate, soften or reverse what the writer said. For example, if the passage says many farmers lost money, do not write all farmers lost money. Check names, figures and quantities carefully, and leave out figures unless the question asks for them. Count your words by counting every word, including small words such as a, the and of, and write the total at the end if the exam asks for it. If you are over the limit, cut adjectives, combine sentences, and remove any repeated point; if you are well under the limit, check whether you missed a main point. A summary that is accurate, complete and within the limit is a strong summary, even if its sentences are simple."
      }
    ],
    definitions: [
      { term: "Rough draft", meaning: "A first version of a summary, written before counting words and correcting it." },
      { term: "Final version", meaning: "The neat, corrected version of a summary handed in for marking." },
      { term: "Point", meaning: "One distinct idea that answers the summary question." },
      { term: "Linking word", meaning: "A word such as therefore or however that shows the relationship between ideas." },
      { term: "Accuracy", meaning: "Saying exactly what the passage says, without exaggeration or change." }
    ],
    formulas: ["Read the question, read the passage, list the points, draft, count, check.", "One point in the passage, stated twice, counts as one point in the summary.", "Combine related points with and, so, because and but.", "Every word counts, including a, the and of."],
    examples: [
      {
        title: "Selecting points for a question",
        problem: "A passage about a farmer describes his farm, his family, and three reasons for his success. The question asks for the reasons for his success. Which points should the summary keep?",
        steps: ["Read the question again: it asks for reasons for success only.", "List the three reasons given in the passage.", "Note that the description of the farm does not answer the question.", "Note that the description of his family does not answer the question.", "Keep only the three reasons, in the order they appear."],
        answer: "The summary should keep only the three reasons for his success and leave out the descriptions of his farm and family."
      },
      {
        title: "Combining points into one sentence",
        problem: "Combine these points into one smooth sentence: The soil became dry. The crops failed. The farmers lost money.",
        steps: ["Find the relationship: the dry soil caused the crops to fail.", "Use so to show the result.", "Join the last two points with and.", "Write one sentence with all three points.", "Check that no point was lost and no new idea was added."],
        answer: "The soil became dry, so the crops failed and the farmers lost money."
      }
    ],
    tips: ["Make a numbered list of points before you write your draft.", "If two sentences say the same thing, count them as one point.", "Combine short points into one sentence to save words.", "Read your final summary against the question, not only against the passage."],
    mistakes: ["Including points that do not answer the exact question asked.", "Counting the same point twice because it appears in two sentences.", "Writing a list of separate sentences with no linking words.", "Changing many to all or some to every when paraphrasing."],
    facts: ["Only points that answer the summary question earn marks.", "A point repeated in different words is still one point.", "Small words such as a, the and of count in the word total.", "A summary should be accurate even if its sentences are simple."],
    quiz: [
      { q: "What is the first step in the summary process?", options: ["Write the final version at once", "Read the summary question, then read the whole passage", "Count the words in the passage", "Copy the first paragraph"], answer: 1, explanation: "Start by reading the question, then read the whole passage for understanding before selecting points." },
      { q: "A question asks for the effects of deforestation. Which points should you include?", options: ["Only the effects", "The causes and the effects", "The solutions only", "Everything in the passage"], answer: 0, explanation: "Only points that answer the exact question earn marks, so include only the effects." },
      { q: "Two sentences in a passage say the same thing in different words. How many points is that?", options: ["Two points", "One point", "No point", "Three points"], answer: 1, explanation: "A point stated twice is still one point, so count it once in your summary." },
      { q: "Which sentence best combines these points: The soil became dry. The crops failed.?", options: ["The soil became dry. The crops failed.", "The soil became dry, so the crops failed.", "The soil became dry and the rain fell.", "The crops failed because of the farmers."], answer: 1, explanation: "So shows that the dry soil caused the crops to fail, joining the points into one smooth sentence." },
      { q: "Which linking word shows a result?", options: ["However", "Firstly", "Therefore", "In addition"], answer: 2, explanation: "Therefore shows that what follows is a result or conclusion of what came before." },
      { q: "The passage says many farmers lost money. What must your summary NOT say?", options: ["Many farmers lost money", "Some farmers lost money", "All farmers lost money", "Farmers lost money"], answer: 2, explanation: "Changing many to all exaggerates the passage, so the summary would be inaccurate." },
      { q: "What is a rough draft in summary writing?", options: ["The final neat version", "A first version written before counting words and correcting it", "A copy of the original passage", "A list of difficult words"], answer: 1, explanation: "A rough draft is the first version, which you then count, cut and correct into a final version." },
      { q: "Why should you make a numbered list of points before drafting?", options: ["To make the summary longer", "To check each point against the question and keep them in order", "To copy the passage exactly", "To avoid using linking words"], answer: 1, explanation: "A numbered list lets you check that every point answers the question and that the order matches the passage." },
      { q: "Which words count in a summary word total?", options: ["Only nouns and verbs", "Every word, including a, the and of", "Only the main points", "Only words longer than three letters"], answer: 1, explanation: "Every word counts in the total, including small words such as a, the and of." },
      { q: "If your summary is over the word limit, what should you cut first?", options: ["A main point", "Repetition and unnecessary adjectives", "A linking word that joins two points", "The first point in the passage"], answer: 1, explanation: "Cut repetition and unnecessary words, but keep every main point." },
      { q: "Which linking word shows contrast?", options: ["In addition", "Therefore", "However", "Firstly"], answer: 2, explanation: "However introduces a contrast with what came before it." },
      { q: "What should you do after writing your final summary?", options: ["Hand it in without reading it", "Read it once more against the question and the passage", "Add an extra example", "Copy a sentence from the passage"], answer: 1, explanation: "A final check against the question and the passage confirms nothing important is missing and nothing extra has crept in." },
      { q: "A summary question asks for the steps in a process. What should the summary contain?", options: ["Only the steps, in order", "The steps and your opinion of them", "The steps and a long example", "Only the first step"], answer: 0, explanation: "The summary should contain only the steps, in the order given in the passage." },
      { q: "Which is the best way to save words in a summary?", options: ["Use abbreviations and note form", "Combine related points into single sentences", "Leave out a main point", "Write in very long sentences"], answer: 1, explanation: "Combining related points into one sentence saves words while keeping all the points." },
      { q: "What makes a summary strong, even if its sentences are simple?", options: ["Long, difficult words", "Accuracy, completeness and staying within the word limit", "Copying the writer's exact words", "Adding extra examples"], answer: 1, explanation: "A summary that is accurate, complete and within the limit is strong, even with simple sentences." }
    ],
    status: "published"
  },
  {
    id: "english-13",
    subjectId: "english",
    topic: "Reported Speech and Voice",
    subtopic: "Direct and indirect speech",
    title: "Direct and Indirect Speech",
    order: 13,
    introduction: "Direct speech reports a person's exact words, while indirect speech, also called reported speech, reports what was said without repeating the exact words. JAMB regularly tests the changes in tense, pronouns and time words that happen when direct speech becomes indirect speech. This lesson teaches you those changes for statements, questions and commands.",
    objectives: ["Distinguish direct speech from indirect speech", "Change direct statements into indirect speech with the correct tense shift", "Report questions and commands correctly", "Change pronouns, time words and place words in reported speech", "Choose the correct reporting verb for the situation"],
    sections: [
      {
        heading: "Direct and Indirect Speech",
        body: "Direct speech gives the speaker's exact words inside quotation marks: Ada said, I am coming tomorrow. Indirect speech reports the meaning without quotation marks: Ada said that she was coming the next day. Notice three changes: the pronoun I becomes she, the present tense am coming becomes the past tense was coming, and the time word tomorrow becomes the next day. These changes happen because the report is made later, from a different point of view. The reporting verb, such as said, told, asked or ordered, introduces the reported words, and the word that often joins a reported statement to the reporting verb, although it can be left out: She said she was coming is also correct."
      },
      {
        heading: "Reporting Statements",
        body: "When the reporting verb is in the past tense, the verb in the reported statement usually shifts one step back in time. The present simple becomes the past simple: I like rice becomes He said that he liked rice. The present continuous becomes the past continuous: I am reading becomes She said that she was reading. The present perfect becomes the past perfect: I have finished becomes He said that he had finished. The past simple becomes the past perfect: I saw him becomes She said that she had seen him. The future with will becomes would: I will come becomes He said that he would come. If the reporting verb is in the present tense, as in He says, or if the statement is a general truth, such as Water boils at 100 degrees, the tense often stays the same. Learn the shift as a table and practise it until it is automatic."
      },
      {
        heading: "Reporting Questions and Commands",
        body: "Reported questions do not use question word order or a question mark. A yes-no question is reported with if or whether: Are you coming? becomes He asked if I was coming. A wh-question keeps its question word but uses statement word order: Where do you live? becomes She asked where I lived. Note that the auxiliary verb do disappears and the tense shifts back as in statements. Commands and requests are reported with an infinitive: Close the door becomes He told me to close the door, and Do not shout becomes She asked us not to shout. The reporting verbs change too: ask, tell, order, command, request and advise are common, and the listener is named after tell and ask: He told me, not He told that I. Practise each type separately before mixing them."
      },
      {
        heading: "Pronouns, Time and Place Words",
        body: "Pronouns change to match the new point of view. I becomes he or she, my becomes his or her, we becomes they, and you becomes I, he, she or they, depending on who is spoken to. For example, Ada said, I will bring my book becomes Ada said that she would bring her book. Time words also change: today becomes that day, tomorrow becomes the next day, yesterday becomes the day before, now becomes then, and this becomes that. Place words change too: here becomes there. For example, He said, I met her here yesterday becomes He said that he had met her there the day before. These changes follow one idea: reported speech is told from the reporter's time and place, not from the speaker's original moment."
      }
    ],
    definitions: [
      { term: "Direct speech", meaning: "The exact words of a speaker, given inside quotation marks." },
      { term: "Indirect speech", meaning: "Reported speech: what was said, reported without the exact words." },
      { term: "Reporting verb", meaning: "A verb such as said, told or asked that introduces reported speech." },
      { term: "Tense shift", meaning: "Moving a verb one step back in time when reporting past speech." },
      { term: "Reported question", meaning: "A question reported in indirect speech, using statement word order." },
      { term: "Reported command", meaning: "A command reported in indirect speech, using to plus the verb." }
    ],
    formulas: ["Present simple becomes past simple; present perfect becomes past perfect; will becomes would.", "Yes-no questions are reported with if or whether.", "Wh-questions keep the question word but use statement word order.", "Today becomes that day; tomorrow becomes the next day; yesterday becomes the day before."],
    examples: [
      {
        title: "Reporting a statement",
        problem: "Change to indirect speech: Ada said, I am reading a book.",
        steps: ["Identify the reporting verb: said, in the past tense, so the tense must shift.", "Change the pronoun I to she, matching Ada.", "Shift the present continuous am reading to the past continuous was reading.", "Remove the quotation marks and join with that.", "Write the reported sentence and check the meaning."],
        answer: "Ada said that she was reading a book."
      },
      {
        title: "Reporting a question and a command",
        problem: "Change to indirect speech: The teacher asked, Are you ready? Then she said, Close your books.",
        steps: ["For the question, use if and statement word order: He asked if we were ready.", "Note that are you ready becomes we were ready, with the tense shifted.", "For the command, use told plus to plus the verb.", "Write: She told us to close our books.", "Check that neither reported sentence uses a question mark."],
        answer: "The teacher asked if we were ready. Then she told us to close our books."
      }
    ],
    tips: ["When the reporting verb is past, shift the reported verb one step back.", "Reported questions use statement word order, never question word order.", "Use if or whether for yes-no questions.", "Change pronouns, time words and place words to the reporter's point of view."],
    mistakes: ["Keeping question word order in a reported question.", "Forgetting to shift the tense after a past reporting verb.", "Keeping tomorrow and yesterday unchanged in reported speech.", "Using told without naming the listener, as in He told that."],
    facts: ["Direct speech uses quotation marks; indirect speech does not.", "Will becomes would in reported speech after a past reporting verb.", "A reported command uses to plus the verb.", "General truths often keep their tense in reported speech."],
    quiz: [
      { q: "What is indirect speech?", options: ["The exact words of a speaker in quotation marks", "What was said, reported without the exact words", "A question asked directly", "A command given in the present tense"], answer: 1, explanation: "Indirect speech reports what was said without repeating the speaker's exact words or using quotation marks." },
      { q: "Change to indirect speech: He said, I like rice.", options: ["He said that he likes rice.", "He said that he liked rice.", "He said that he like rice.", "He said that he is liking rice."], answer: 1, explanation: "After the past reporting verb said, the present simple like shifts to the past simple liked." },
      { q: "Change to indirect speech: She said, I have finished my work.", options: ["She said that she has finished her work.", "She said that she had finished her work.", "She said that she finishes her work.", "She said that she will finish her work."], answer: 1, explanation: "The present perfect have finished shifts to the past perfect had finished in reported speech." },
      { q: "Change to indirect speech: He said, I will come tomorrow.", options: ["He said that he will come tomorrow.", "He said that he would come the next day.", "He said that he would come tomorrow.", "He said that he comes the next day."], answer: 1, explanation: "Will becomes would, and tomorrow becomes the next day in reported speech." },
      { q: "How is a yes-no question reported?", options: ["With that and a question mark", "With if or whether and statement word order", "With question word order", "With an exclamation mark"], answer: 1, explanation: "A yes-no question is reported with if or whether, using statement word order and no question mark." },
      { q: "Change to indirect speech: She asked, Where do you live?", options: ["She asked where do I live?", "She asked where I lived.", "She asked where did I live?", "She asked that where I live."], answer: 1, explanation: "The wh-word is kept, but the word order becomes statement order and the tense shifts to lived." },
      { q: "Change to indirect speech: He told me, Close the door.", options: ["He told me close the door.", "He told me to close the door.", "He told me that close the door.", "He told me closing the door."], answer: 1, explanation: "A reported command uses told plus to plus the verb: told me to close the door." },
      { q: "In reported speech, what does yesterday become?", options: ["Tomorrow", "The next day", "The day before", "That day"], answer: 2, explanation: "Yesterday becomes the day before when speech is reported from a later point in time." },
      { q: "Change to indirect speech: Ada said, I will bring my book.", options: ["Ada said that she will bring my book.", "Ada said that she would bring her book.", "Ada said that I would bring her book.", "Ada said that she would bring my book."], answer: 1, explanation: "I becomes she, my becomes her, and will becomes would in reported speech." },
      { q: "Which sentence is correct reported speech?", options: ["He asked did I come?", "He asked if I had come.", "He asked that I come?", "He asked do I come?"], answer: 1, explanation: "He asked if I had come uses if and statement word order with the tense shifted, which is correct." },
      { q: "Change to indirect speech: She said, Do not shout.", options: ["She said to not shout.", "She told us not to shout.", "She said that do not shout.", "She told us to not shout."], answer: 1, explanation: "A negative command is reported as told us not to shout, with not before to." },
      { q: "What does today become in reported speech?", options: ["Tomorrow", "That day", "The next day", "Yesterday"], answer: 1, explanation: "Today becomes that day when speech is reported from a later time." },
      { q: "When does the tense usually stay the same in reported speech?", options: ["When the reporting verb is in the past tense", "When the statement is a general truth", "When the sentence is a question", "When the speaker is angry"], answer: 1, explanation: "A general truth, such as Water boils at 100 degrees, often keeps its tense in reported speech." },
      { q: "Change to indirect speech: He said, I saw him yesterday.", options: ["He said that he saw him yesterday.", "He said that he had seen him the day before.", "He said that he has seen him the day before.", "He said that he sees him yesterday."], answer: 1, explanation: "The past simple saw shifts to the past perfect had seen, and yesterday becomes the day before." },
      { q: "Which reporting verb fits a command?", options: ["Wondered", "Ordered", "Knew", "Believed"], answer: 1, explanation: "Ordered is a reporting verb for commands, as in He ordered us to leave." }
    ],
    status: "published"
  },
  {
    id: "english-14",
    subjectId: "english",
    topic: "Reported Speech and Voice",
    subtopic: "Active and passive voice",
    title: "Active and Passive Voice",
    order: 14,
    introduction: "In the active voice the subject does the action, while in the passive voice the subject receives the action. JAMB tests your ability to change active sentences into passive ones, to choose the correct passive form for each tense, and to know when the passive is the better choice. This lesson teaches you the full transformation step by step.",
    objectives: ["Distinguish active voice from passive voice", "Change active sentences into passive sentences in all major tenses", "Use the correct form of be plus the past participle", "Decide when to include or leave out the agent with by", "Choose active or passive voice for the right situation"],
    sections: [
      {
        heading: "Active and Passive Voice",
        body: "In the active voice, the subject performs the action: The boy kicked the ball. In the passive voice, the subject receives the action: The ball was kicked by the boy. The object of the active sentence becomes the subject of the passive sentence, the verb becomes a form of be plus the past participle, and the active subject becomes the agent, introduced by by, if it is mentioned at all. For example, The teacher praised Ada becomes Ada was praised by the teacher. The passive is useful when the doer is unknown or unimportant, as in The window was broken, or when the receiver of the action matters more than the doer. It is also common in formal and scientific writing, where the action matters more than the person who performed it."
      },
      {
        heading: "Forming the Passive in Different Tenses",
        body: "The passive is always formed with a form of be plus the past participle of the main verb, and the form of be carries the tense. In the present simple, The boy kicks the ball becomes The ball is kicked by the boy. In the past simple, it becomes The ball was kicked by the boy. In the present continuous, it becomes The ball is being kicked by the boy. In the present perfect, it becomes The ball has been kicked by the boy. In the future, it becomes The ball will be kicked by the boy. To change a sentence, first find the object and make it the new subject, then choose the correct form of be for the tense, then add the past participle, and finally add by plus the agent if it is needed. Practise each tense separately, because JAMB often asks for the passive form of a sentence in a particular tense."
      },
      {
        heading: "The Agent and When to Leave It Out",
        body: "The agent is the person or thing that performs the action, introduced by by in the passive: The letter was written by Ada. Often the agent is left out because it is unknown, obvious or unimportant. For example, My bicycle was stolen does not name the thief, because the thief is unknown, and The house was built in 1990 does not name the builders, because they do not matter. The agent is kept when it is important or surprising, as in The novel was written by a twelve-year-old girl. A common error is to use by with the wrong pronoun: say by me, by him and by her, not by I, by he or by she. Another error is to forget that some verbs, such as intransitive verbs like sleep, arrive and die, have no object and therefore cannot be made passive."
      },
      {
        heading: "Choosing Active or Passive Voice",
        body: "Active voice is usually clearer, shorter and more direct, so it is the better choice in most writing: The committee approved the plan is stronger than The plan was approved by the committee. Use the passive when the receiver of the action is more important than the doer, when the doer is unknown, or when you want to be formal and impersonal, as in scientific reports: The samples were tested twice. In JAMB questions, first identify the voice of the given sentence, then work out the transformation carefully, checking the tense, the subject and the past participle. Watch out for sentences with two objects: The teacher gave Ada a book can become Ada was given a book or A book was given to Ada, and both are correct. Choose the form the question asks for, and check that your answer keeps the original meaning."
      }
    ],
    definitions: [
      { term: "Active voice", meaning: "A sentence form in which the subject performs the action." },
      { term: "Passive voice", meaning: "A sentence form in which the subject receives the action." },
      { term: "Past participle", meaning: "The form of a verb used after be in the passive, such as kicked or written." },
      { term: "Agent", meaning: "The person or thing that performs the action, introduced by by in the passive." },
      { term: "Intransitive verb", meaning: "A verb that takes no object, such as sleep or arrive, and cannot be made passive." }
    ],
    formulas: ["Passive = a form of be + past participle.", "The object of the active sentence becomes the subject of the passive sentence.", "Present simple passive uses is or are; past simple passive uses was or were.", "Leave out the agent when the doer is unknown or unimportant."],
    examples: [
      {
        title: "Changing a sentence to the passive",
        problem: "Change to the passive voice: The boy kicked the ball.",
        steps: ["Find the object of the active sentence: the ball.", "Make the ball the new subject.", "Find the tense: past simple, so use was.", "Add the past participle of kick: kicked.", "Add the agent: by the boy."],
        answer: "The ball was kicked by the boy."
      },
      {
        title: "Changing a present perfect sentence",
        problem: "Change to the passive voice: The workers have finished the job.",
        steps: ["Find the object: the job, and make it the new subject.", "Find the tense: present perfect, so use has been.", "Add the past participle of finish: finished.", "Add the agent if needed: by the workers.", "Write the full passive sentence and check the tense."],
        answer: "The job has been finished by the workers."
      }
    ],
    tips: ["First find the object; it becomes the new subject in the passive.", "The form of be carries the tense, so choose it carefully.", "Use the past participle, not the simple past, after be.", "Leave out the agent when the doer is unknown or unimportant."],
    mistakes: ["Using the simple past instead of the past participle after be.", "Keeping the active subject as the subject of the passive sentence.", "Using by I or by he instead of by me or by him.", "Trying to make an intransitive verb passive."],
    facts: ["The passive is formed with be plus the past participle.", "The ball was kicked by the boy is the passive of The boy kicked the ball.", "Intransitive verbs cannot be made passive because they have no object.", "The passive is common in formal and scientific writing."],
    quiz: [
      { q: "Which sentence is in the passive voice?", options: ["The boy kicked the ball.", "The ball was kicked by the boy.", "The boy is kicking the ball.", "The boy kicks the ball."], answer: 1, explanation: "The ball was kicked by the boy has the subject receiving the action, so it is passive." },
      { q: "Change to the passive: The teacher praised Ada.", options: ["Ada praised the teacher.", "Ada was praised by the teacher.", "Ada is praising the teacher.", "The teacher was praised by Ada."], answer: 1, explanation: "Ada becomes the subject, was carries the past tense, and praised is the past participle." },
      { q: "What is the passive form of The boy kicks the ball?", options: ["The ball is kicked by the boy.", "The ball was kicked by the boy.", "The ball has been kicked by the boy.", "The ball is being kicked by the boy."], answer: 0, explanation: "The present simple passive uses is plus the past participle: is kicked." },
      { q: "Change to the passive: The workers are building the house.", options: ["The house is built by the workers.", "The house is being built by the workers.", "The house was built by the workers.", "The house has been built by the workers."], answer: 1, explanation: "The present continuous passive uses is being plus the past participle: is being built." },
      { q: "What is the agent in the sentence The letter was written by Ada?", options: ["The letter", "Was written", "Ada", "By"], answer: 2, explanation: "Ada is the person who performed the action, introduced by by, so she is the agent." },
      { q: "Change to the passive: The cat has eaten the fish.", options: ["The fish has eaten the cat.", "The fish has been eaten by the cat.", "The fish is eaten by the cat.", "The fish was eaten by the cat."], answer: 1, explanation: "The present perfect passive uses has been plus the past participle: has been eaten." },
      { q: "Which verb cannot be made passive?", options: ["Kick", "Write", "Sleep", "Break"], answer: 2, explanation: "Sleep is intransitive and takes no object, so it cannot be made passive." },
      { q: "Change to the passive: She will finish the work.", options: ["The work will finish.", "The work will be finished by her.", "The work is finished by her.", "The work was finished by her."], answer: 1, explanation: "The future passive uses will be plus the past participle: will be finished." },
      { q: "Why is the agent left out in My bicycle was stolen?", options: ["Because the bicycle is the agent", "Because the thief is unknown", "Because stolen is not a verb", "Because the sentence is active"], answer: 1, explanation: "The agent is left out when the doer is unknown, as the thief is here." },
      { q: "Which sentence is in the active voice?", options: ["The window was broken.", "The house was built in 1990.", "The committee approved the plan.", "The plan was approved."], answer: 2, explanation: "The committee performs the action of approving, so the sentence is active." },
      { q: "Change to the passive: The teacher gave Ada a book.", options: ["Ada was given a book by the teacher.", "Ada gave the teacher a book.", "A book gave Ada to the teacher.", "The teacher was given a book by Ada."], answer: 0, explanation: "With two objects, the indirect object Ada can become the subject: Ada was given a book." },
      { q: "What is wrong with the sentence The ball was kick by the boy?", options: ["The tense is wrong", "Kick should be the past participle kicked", "The agent is wrong", "The subject is wrong"], answer: 1, explanation: "After was, the past participle kicked is required, not the base form kick." },
      { q: "Which is the correct passive with the right pronoun?", options: ["The letter was written by I.", "The letter was written by me.", "The letter was written by he.", "The letter was written by she."], answer: 1, explanation: "After by, the object pronoun me is required, not the subject pronoun I." },
      { q: "When is the passive voice the better choice?", options: ["When you want the shortest, most direct sentence", "When the doer is unknown or the receiver matters more", "When the verb is intransitive", "When the subject is the doer"], answer: 1, explanation: "The passive is better when the doer is unknown or unimportant, or when the receiver of the action matters more." },
      { q: "Change to the passive: They have tested the samples twice.", options: ["The samples have tested twice.", "The samples have been tested twice.", "The samples are tested twice.", "The samples were tested twice."], answer: 1, explanation: "The present perfect passive uses have been plus the past participle: have been tested." }
    ],
    status: "published"
  }
];
