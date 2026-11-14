import type { Lesson, SubjectDef } from "./types";

export const SUBJECT: SubjectDef = {
  id: "english",
  name: "English Language",
  short: "ENG",
  colour: "#2563eb",
  tagline: "Read smart, write clearly, speak confidently.",
  description: "Master comprehension, lexis and structure, oral English, grammar and vocabulary for JAMB Use of English. Every lesson builds the reading, listening and writing skills the exam rewards, with worked examples and original practice questions.",
  topics: ["Comprehension", "Lexis and Structure", "Oral English", "Grammar and Sentence Interpretation", "Vocabulary Development"],
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
      { q: "Where is the topic sentence most commonly found?", options: ["In the middle of the paragraph", "At the beginning of the paragraph", "Only in the final paragraph", "In the title of the passage"], answer: 1, explanation: "The topic sentence is most often the first sentence, though it can sometimes appear at the end." }
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
      { q: "A passage argues strongly that plastic bags should be banned. What is the writer's purpose?", options: ["To entertain", "To persuade", "To describe a festival", "To tell a story"], answer: 1, explanation: "Strong argument in favour of a ban shows the writer wants to persuade readers to accept a position." }
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
      { q: "In the sentence He gave her a book, what is her?", options: ["Direct object", "Indirect object", "Subject", "Complement"], answer: 1, explanation: "Her receives the book indirectly, so it is the indirect object, while a book is the direct object." }
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
      { q: "Choose the correct sentence.", options: ["I have saw the film.", "I have seen the film.", "I have see the film.", "I has seen the film."], answer: 1, explanation: "After have, the past participle seen is required, not the simple past saw." }
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
      { q: "What is rhythm in English speech?", options: ["The speed of reading", "The pattern of stressed and unstressed syllables", "The loudness of the voice", "The number of words in a sentence"], answer: 1, explanation: "Rhythm is the regular pattern created by stressed syllables occurring at intervals, with weak syllables between them." }
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
      { q: "Choose the correct sentence.", options: ["This is there house.", "This is their house.", "This is they are house.", "This is thier house."], answer: 1, explanation: "Their shows possession, so This is their house is correct; there refers to a place." }
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
      { q: "Which mark introduces a list?", options: ["Semicolon", "Comma", "Colon", "Full stop"], answer: 2, explanation: "A colon introduces a list, an explanation or a quotation." }
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
      { q: "The word bank in The bank is near the river shows what kind of ambiguity?", options: ["Structural ambiguity", "Lexical ambiguity", "Punctuation error", "Tense error"], answer: 1, explanation: "Bank has more than one meaning, a financial institution or a river side, so the ambiguity is lexical." }
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
      { q: "The root dict means say. Which word contains it?", options: ["Predict", "Portable", "Describe", "Biology"], answer: 0, explanation: "Predict contains dict, meaning say, as in saying before something happens." }
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
      { q: "What does look after mean?", options: ["To search for", "To take care of", "To look behind", "To admire"], answer: 1, explanation: "Look after means to take care of someone or something, as in She looks after her younger brother." }
    ],
    status: "published"
  }
];
