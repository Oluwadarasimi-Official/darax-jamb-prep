import { SubjectDef, Lesson } from "./types";

export const SUBJECT: SubjectDef = {
  id: "biology",
  name: "Biology",
  short: "BIO",
  colour: "#22c55e",
  tagline: "Life, from cells to ecosystems — explained clearly for JAMB.",
  description: "A complete JAMB Biology course covering cells, genetics, ecology, human physiology and plant biology, with worked examples, exam tips and original practice questions in every lesson.",
  topics: [
    "Cell Biology",
    "Genetics and Evolution",
    "Ecology",
    "Human Physiology",
    "Plant Biology and Classification",
  ],
};

export const LESSONS: Lesson[] = [
  {
    id: "biology-01",
    subjectId: "biology",
    topic: "Cell Biology",
    subtopic: "Cell structure and organisation",
    title: "Cell Structure and Organisation",
    order: 1,
    introduction: "The cell is the basic unit of life, and every living thing is made of one or more cells. This lesson explains the structures found in animal and plant cells, what each part does, and how cells are organised into tissues, organs and systems.",
    objectives: [
      "State the cell theory and describe the main features of cells",
      "Identify the structures in animal and plant cells and state their functions",
      "Compare plant and animal cells and explain their differences",
      "Describe the levels of organisation from cell to organism",
      "Explain the functions of specialised cells such as red blood cells and root hair cells"
    ],
    sections: [
      {
        heading: "The Cell Theory",
        body: "The cell theory states that all living organisms are made of cells, that the cell is the basic unit of life, and that all cells come from pre-existing cells by division. Cells were first seen by Robert Hooke in 1665 when he looked at cork under a microscope, and later work by Schleiden, Schwann and Virchow built the theory into its modern form. A typical animal cell is about 10 to 30 micrometres across, while a plant cell is usually larger, and both are far too small to see with the naked eye.",
      },
      {
        heading: "Structures in Animal and Plant Cells",
        body: "Both animal and plant cells have a nucleus, which contains the genetic material and controls the activities of the cell; cytoplasm, a jelly-like substance where most chemical reactions happen; and a cell membrane, which controls what enters and leaves the cell. The mitochondria release energy from glucose during respiration, and ribosomes are the sites of protein synthesis. Plant cells have three extra structures: a cellulose cell wall that gives support and shape, chloroplasts that contain chlorophyll for photosynthesis, and a large permanent vacuole filled with cell sap that keeps the cell firm.",
      },
      {
        heading: "Levels of Organisation",
        body: "In multicellular organisms, cells are organised into a hierarchy. Similar cells working together form a tissue, such as muscle tissue or xylem tissue in a plant. Different tissues working together form an organ, such as the heart or a leaf. Organs working together form a system, such as the digestive system or the transport system, and all the systems together make up the organism. This division of labour makes the organism more efficient: each type of cell is specialised for one job, so the whole body works better than a collection of unspecialised cells could.",
      },
      {
        heading: "Specialised Cells",
        body: "Specialised cells have adaptations that suit them to a particular function. Red blood cells have no nucleus, which leaves more room for haemoglobin, and their biconcave disc shape gives a large surface area for absorbing oxygen. Root hair cells have a long, thin extension that increases the surface area for absorbing water and mineral salts from the soil. Sperm cells have a tail for swimming and many mitochondria to provide the energy for movement. Palisade mesophyll cells in a leaf are packed with chloroplasts and are arranged near the top of the leaf to catch the maximum amount of light for photosynthesis.",
      },
    ],
    definitions: [
      { term: "Cell", meaning: "The smallest unit of living matter that can carry out all the processes of life." },
      { term: "Nucleus", meaning: "The part of a cell that contains genetic material and controls the activities of the cell." },
      { term: "Cytoplasm", meaning: "The jelly-like substance in a cell where most chemical reactions take place." },
      { term: "Mitochondrion", meaning: "The organelle where aerobic respiration takes place and energy is released." },
      { term: "Tissue", meaning: "A group of similar cells working together to perform a particular function." },
      
    ],
    formulas: [
      "Magnification = image size / actual size",
      "Actual size = image size / magnification",
      "Cell theory: all living things are made of cells; cells arise from pre-existing cells",
      "Levels of organisation: cell -> tissue -> organ -> system -> organism",
      "Plant cell extras: cell wall, chloroplasts, large permanent vacuole",
      "Specialisation: structure is adapted to function",
    ],
    examples: [
      {
        title: "Calculating magnification",
        problem: "A cell is 20 micrometres long in real life. Its image under a microscope is 40 mm long. Calculate the magnification.",
        steps: [
          "Convert the image size to micrometres: 40 mm = 40,000 micrometres.",
          "Use magnification = image size / actual size.",
          "Substitute: 40,000 / 20.",
          "Calculate: 40,000 / 20 = 2,000.",
          "The magnification is 2,000 times.",
        ],
        answer: "Magnification x2,000.",
      },
      {
        title: "Identifying a cell type",
        problem: "A cell is observed to have a cell wall, chloroplasts and a large vacuole. Is it a plant or animal cell? Give a reason.",
        steps: [
          "A cell wall made of cellulose is found only in plant cells.",
          "Chloroplasts are found only in plant cells, for photosynthesis.",
          "A large permanent vacuole is also a feature of plant cells.",
          "Animal cells have none of these three structures.",
          "The cell is therefore a plant cell.",
        ],
        answer: "A plant cell, because it has a cell wall, chloroplasts and a large vacuole.",
      },
    ],
    tips: [
      "Learn the plant-cell extras (cell wall, chloroplasts, large vacuole) — most cell comparison questions hinge on them.",
      "When calculating magnification, convert both sizes to the same unit first, usually micrometres.",
      "For specialised cells, always link the structure to the function — JAMB asks 'how is this cell adapted?' not just 'what is it?'",
      
    ],
    mistakes: [
      "Saying animal cells have a cell wall — only plant cells, fungi and bacteria have cell walls.",
      "Confusing the cell membrane with the cell wall — the membrane controls entry, the wall gives support.",
      "Forgetting to convert millimetres to micrometres in magnification calculations.",
      "Saying the vacuole is found in animal cells as a large permanent structure — animal vacuoles are small and temporary.",
    ],
    facts: [
      "Robert Hooke first observed cells in cork in 1665.",
      "The mitochondria are known as the powerhouse of the cell.",
      "Ribosomes are the sites of protein synthesis in the cell.",
      
      
    ],
    quiz: [
      {
        q: "Which structure controls the activities of the cell?",
        options: ["Cytoplasm", "Cell membrane", "Nucleus", "Mitochondrion"],
        answer: 2,
        explanation: "The nucleus contains the genetic material and controls cell activities.",
      },
      {
        q: "Which of these is found in a plant cell but NOT in an animal cell?",
        options: ["Nucleus", "Mitochondrion", "Chloroplast", "Ribosome"],
        answer: 2,
        explanation: "Chloroplasts, which carry out photosynthesis, are found only in plant cells.",
      },
      {
        q: "What is the function of the mitochondria?",
        options: ["Protein synthesis", "Photosynthesis", "Release of energy by respiration", "Control of substances entering the cell"],
        answer: 2,
        explanation: "Mitochondria are the site of aerobic respiration, where energy is released from glucose.",
      },
      {
        q: "Which level of organisation comes after tissue?",
        options: ["Cell", "Organ", "System", "Organism"],
        answer: 1,
        explanation: "Tissues combine to form organs, which combine to form systems.",
      },
      {
        q: "Why do red blood cells have no nucleus?",
        options: ["To make them smaller", "To leave more room for haemoglobin", "To help them divide", "To make them lighter"],
        answer: 1,
        explanation: "Losing the nucleus leaves more space for haemoglobin, so each cell can carry more oxygen.",
      },
    ],
    status: "published",
  },
  {
    id: "biology-02",
    subjectId: "biology",
    topic: "Cell Biology",
    subtopic: "Cell division and transport",
    title: "Cell Division and Transport Across Membranes",
    order: 2,
    introduction: "Cells divide so organisms can grow, repair themselves and reproduce, and substances move in and out of cells through the cell membrane. This lesson covers mitosis and meiosis, and the three ways substances cross membranes: diffusion, osmosis and active transport.",
    objectives: [
      "Describe the stages of mitosis and state its importance",
      "Describe meiosis and explain how it produces variation",
      "Compare mitosis and meiosis in terms of products and purpose",
      "Explain diffusion, osmosis and active transport with examples",
      "Describe the effects of osmosis on plant and animal cells"
    ],
    sections: [
      {
        heading: "Mitosis",
        body: "Mitosis is the division of a cell to produce two genetically identical daughter cells, each with the same number of chromosomes as the parent cell. Before division, the DNA is copied so that each daughter cell receives a full set of chromosomes. Mitosis is used for growth, for the repair of damaged tissues, and for asexual reproduction in organisms such as Amoeba. In humans, mitosis produces body cells with 46 chromosomes, the same number as the parent cell. Because the daughter cells are identical to the parent, mitosis does not produce variation, which is why it is not used in sexual reproduction.",
      },
      {
        heading: "Meiosis",
        body: "Meiosis is the division of a cell to produce four genetically different haploid cells, each with half the number of chromosomes of the parent cell. In humans, meiosis in the testes and ovaries produces gametes — sperm and eggs — with 23 chromosomes each, so that when fertilisation occurs the zygote has the normal 46 chromosomes. During meiosis, homologous chromosomes pair up and exchange sections of DNA in a process called crossing over, and the chromosomes are then assorted independently, which creates variation among the gametes.",
      },
      {
        heading: "Diffusion and Osmosis",
        body: "Diffusion is the movement of particles from a region of higher concentration to a region of lower concentration, down a concentration gradient, until they are evenly spread. It needs no energy and happens faster at higher temperatures and with smaller particles. Osmosis is the movement of water molecules from a region of higher water potential (a dilute solution) to a region of lower water potential (a concentrated solution) through a partially permeable membrane. In a dilute solution, a plant cell takes in water by osmosis, the vacuole swells and the cell becomes turgid, pressing against the cell wall; in a concentrated solution, water leaves the cell and it becomes flaccid, and in extreme cases the cytoplasm pulls away from the wall, a state called plasmolysis.",
      },
      {
        heading: "Active Transport",
        body: "Active transport is the movement of particles from a region of lower concentration to a region of higher concentration, against the concentration gradient, using energy from respiration. Unlike diffusion and osmosis, active transport needs energy in the form of ATP and uses carrier proteins in the cell membrane. Root hair cells use active transport to take up mineral salts such as nitrates from the soil, where the concentration of salts is lower than inside the root. In the human gut, glucose is absorbed into the blood by active transport after most of it has already been absorbed by diffusion.",
      },
    ],
    definitions: [
      { term: "Mitosis", meaning: "Cell division that produces two genetically identical diploid daughter cells, used for growth and repair." },
      { term: "Meiosis", meaning: "Cell division that produces four genetically different haploid cells, used to form gametes." },
      { term: "Diffusion", meaning: "The movement of particles from a region of higher concentration to a region of lower concentration." },
      { term: "Osmosis", meaning: "The movement of water molecules through a partially permeable membrane from a dilute to a more concentrated solution." },
      { term: "Active transport", meaning: "The movement of particles against a concentration gradient using energy from respiration." },
      
    ],
    formulas: [
      "Mitosis: 1 diploid cell -> 2 identical diploid cells",
      "Meiosis: 1 diploid cell -> 4 different haploid cells",
      "Human chromosome numbers: body cells 46 (diploid), gametes 23 (haploid)",
      "Diffusion: high concentration -> low concentration, no energy needed",
      "Osmosis: high water potential -> low water potential, through a partially permeable membrane",
      "Active transport: low concentration -> high concentration, energy (ATP) needed",
    ],
    examples: [
      {
        title: "Mitosis chromosome count",
        problem: "A body cell of an onion has 16 chromosomes. How many chromosomes will each daughter cell have after mitosis?",
        steps: [
          "Mitosis produces daughter cells that are genetically identical to the parent cell.",
          "The chromosome number does not change in mitosis.",
          "The parent cell has 16 chromosomes.",
          "Each daughter cell therefore receives 16 chromosomes.",
          "Both daughter cells are diploid, like the parent.",
        ],
        answer: "16 chromosomes in each daughter cell.",
      },
      {
        title: "Osmosis in a plant cell",
        problem: "A piece of potato is placed in a concentrated sugar solution. Predict what happens to its mass and explain why.",
        steps: [
          "The sugar solution is more concentrated than the cell sap, so it has a lower water potential.",
          "Water moves out of the potato cells by osmosis, through the partially permeable membrane.",
          "Water moves from the higher water potential inside the cells to the lower water potential outside.",
          "The cells lose water and become flaccid.",
          "The potato loses mass because water has left it.",
        ],
        answer: "The potato loses mass as water leaves its cells by osmosis.",
      },
    ],
    tips: [
      "Remember: mitosis = identical cells for growth and repair; meiosis = different cells for gametes.",
      "In osmosis questions, always state the direction of water movement and the water potential difference.",
      "A red blood cell in pure water swells and bursts (haemolysis) because it has no cell wall; a plant cell becomes turgid but does not burst.",
      
    ],
    mistakes: [
      "Saying meiosis produces two cells — it produces four haploid cells.",
      "Describing osmosis as the movement of water from low to high concentration — it is from dilute (high water potential) to concentrated (low water potential).",
      "Forgetting that diffusion needs no energy while active transport does.",
      "Saying a plant cell bursts in pure water — the cell wall prevents bursting; the cell becomes turgid.",
    ],
    facts: [
      "Human body cells have 46 chromosomes; human gametes have 23.",
      "Crossing over during meiosis creates new combinations of genes.",
      "Root hair cells absorb mineral salts by active transport.",
      
      
    ],
    quiz: [
      {
        q: "How many daughter cells are produced by meiosis?",
        options: ["One", "Two", "Three", "Four"],
        answer: 3,
        explanation: "Meiosis produces four haploid daughter cells that are genetically different.",
      },
      {
        q: "Which process needs energy from respiration?",
        options: ["Diffusion", "Osmosis", "Active transport", "Evaporation"],
        answer: 2,
        explanation: "Active transport moves substances against a concentration gradient, which requires energy.",
      },
      {
        q: "What happens to a red blood cell placed in pure water?",
        options: ["It shrinks", "It swells and bursts", "It stays the same", "It becomes turgid"],
        answer: 1,
        explanation: "Water enters by osmosis and, with no cell wall to resist it, the cell bursts.",
      },
      {
        q: "What is the main purpose of mitosis in a multicellular organism?",
        options: ["To produce gametes", "To produce variation", "Growth and repair", "To halve the chromosome number"],
        answer: 2,
        explanation: "Mitosis produces identical cells for growth, repair and replacement.",
      },
      {
        q: "In which direction does water move by osmosis?",
        options: ["From concentrated to dilute solution", "From dilute to concentrated solution", "From low to high water potential", "Equally in both directions"],
        answer: 1,
        explanation: "Water moves from a dilute solution (high water potential) to a concentrated solution (low water potential).",
      },
    ],
    status: "published",
  },
  {
    id: "biology-03",
    subjectId: "biology",
    topic: "Genetics and Evolution",
    subtopic: "Inheritance and Mendel",
    title: "Inheritance and Mendel's Laws",
    order: 3,
    introduction: "Why do children resemble their parents, yet differ from them? Gregor Mendel's experiments with pea plants revealed the rules of inheritance. This lesson explains genes, alleles, dominant and recessive traits, and how to use Punnett squares to predict the outcomes of crosses.",
    objectives: [
      "Define gene, allele, genotype, phenotype, dominant and recessive",
      "Explain Mendel's first and second laws of inheritance",
      "Use Punnett squares to predict the results of monohybrid crosses",
      "Explain incomplete dominance and codominance with examples",
      "Describe sex determination and sex-linked inheritance"
    ],
    sections: [
      {
        heading: "Genes and Alleles",
        body: "A gene is a section of DNA that controls a particular characteristic, such as eye colour, and it is found at a fixed position, called a locus, on a chromosome. Most characteristics are controlled by a pair of genes, one inherited from each parent, and the different forms of a gene are called alleles. An allele can be dominant, meaning it is expressed even when only one copy is present, or recessive, meaning it is only expressed when two copies are present.",
      },
      {
        heading: "Mendel's Laws",
        body: "Gregor Mendel worked with pea plants in the 1860s and discovered the basic laws of inheritance. His first law, the law of segregation, states that the two alleles for a characteristic separate during gamete formation, so each gamete carries only one allele. His second law, the law of independent assortment, states that alleles of different genes are assorted into gametes independently of each other, provided the genes are on different chromosomes. Mendel crossed pure-breeding tall plants with pure-breeding short plants and found that all the offspring were tall, showing that tallness is dominant; when he crossed these offspring, tall and short plants appeared in a ratio of 3 to 1, which is the classic monohybrid ratio.",
      },
      {
        heading: "Punnett Squares and Genetic Crosses",
        body: "A Punnett square is a grid used to predict the possible genotypes and phenotypes of offspring from a cross. To use it, write the alleles in the gametes of one parent along the top and those of the other parent down the side, then fill in the squares by combining the alleles. For a cross between two heterozygous tall plants (Tt x Tt), the possible offspring are TT, Tt, Tt and tt, giving a genotype ratio of 1:2:1 and a phenotype ratio of 3 tall to 1 short.",
      },
      {
        heading: "Beyond Simple Dominance",
        body: "Not all inheritance follows simple dominance. In incomplete dominance, the heterozygous phenotype is intermediate between the two parents, as in the snapdragon flower, where crossing red and white flowers gives pink offspring. In codominance, both alleles are expressed at the same time, as in human blood group AB, where both the A and B antigens appear on the red blood cells. Some characteristics are sex-linked, meaning the gene is carried on a sex chromosome: colour blindness and haemophilia are caused by recessive alleles on the X chromosome, so they are more common in males, who have only one X chromosome and therefore express the allele if they inherit it.",
      },
    ],
    definitions: [
      { term: "Gene", meaning: "A section of DNA that controls a particular characteristic." },
      { term: "Allele", meaning: "One of the different forms of a gene at a particular locus." },
      { term: "Genotype", meaning: "The combination of alleles an organism carries for a characteristic." },
      { term: "Phenotype", meaning: "The observable characteristic produced by the genotype and the environment." },
      { term: "Dominant allele", meaning: "An allele that is expressed in the phenotype even when only one copy is present." },
      
    ],
    formulas: [
      "Mendel's first law: law of segregation — alleles separate during gamete formation",
      "Mendel's second law: law of independent assortment — alleles of different genes assort independently",
      "Monohybrid cross (Tt x Tt): genotype ratio 1:2:1, phenotype ratio 3:1",
      "Test cross: unknown dominant phenotype x homozygous recessive (tt)",
      "Blood group inheritance: A and B alleles are codominant; O is recessive",
      "Sex determination: XX = female, XY = male; the father determines the sex of the child",
    ],
    examples: [
      {
        title: "Monohybrid cross",
        problem: "In pea plants, tall (T) is dominant over short (t). Two heterozygous tall plants are crossed. What is the probability of a short offspring?",
        steps: [
          "Each parent has the genotype Tt and produces two types of gamete: T and t.",
          "Draw a Punnett square with T and t across the top and T and t down the side.",
          "The four combinations are TT, Tt, Tt and tt.",
          "Only tt is short, because short is recessive and needs two copies.",
          "One out of four offspring is short, so the probability is 1/4 or 25%.",
        ],
        answer: "25% (1 in 4) of the offspring will be short.",
      },
      {
        title: "Blood group inheritance",
        problem: "A mother has blood group A (genotype AO) and a father has blood group B (genotype BO). What blood groups are possible for their children?",
        steps: [
          "The mother produces gametes A and O; the father produces gametes B and O.",
          "Combine them in a Punnett square: A with B gives AB; A with O gives AO (group A).",
          "O with B gives BO (group B); O with O gives OO (group O).",
          "The four possible genotypes are AB, AO, BO and OO.",
          "Each has a probability of 1 in 4, so all four blood groups are possible.",
        ],
        answer: "Blood groups A, B, AB and O are all possible, each with 25% probability.",
      },
    ],
    tips: [
      "Always write the genotypes of the parents before drawing the Punnett square — most errors come from skipping this step.",
      "Remember the monohybrid ratio 3:1 applies to the cross of two heterozygotes, not to every cross.",
      "Use capital letters for dominant alleles and the same letter in lower case for the recessive allele.",
      
    ],
    mistakes: [
      "Confusing genotype with phenotype — genotype is the alleles carried, phenotype is what is seen.",
      "Forgetting that the 3:1 ratio only applies when both parents are heterozygous.",
      "Saying a carrier mother always has affected sons — each son has a 50% chance.",
      "Writing blood group genotypes with the wrong letters, for example using 'a' instead of the allele symbols I^A, I^B and i.",
    ],
    facts: [
      "Gregor Mendel published his work on pea plants in 1866, but it was ignored until 1900.",
      "Humans have about 20,000 genes arranged on 46 chromosomes.",
      "Blood group O is the universal donor and group AB is the universal recipient.",
      
      
    ],
    quiz: [
      {
        q: "What is the genotype of a heterozygous tall pea plant if T = tall and t = short?",
        options: ["TT", "Tt", "tt", "tT"],
        answer: 1,
        explanation: "A heterozygote carries one dominant and one recessive allele, so its genotype is Tt.",
      },
      {
        q: "In a cross between two heterozygous tall plants (Tt x Tt), what is the phenotypic ratio?",
        options: ["1:1", "1:2:1", "3:1", "2:1"],
        answer: 2,
        explanation: "The offspring are TT, Tt, Tt and tt, giving 3 tall to 1 short.",
      },
      {
        q: "What does Mendel's law of segregation state?",
        options: ["Alleles assort independently", "Alleles separate during gamete formation", "Dominant alleles are always expressed", "Genes are on chromosomes"],
        answer: 1,
        explanation: "The law of segregation states that the two alleles for a characteristic separate when gametes are formed.",
      },
      {
        q: "A child has blood group O. Which genotypes could the parents have?",
        options: ["AA and BB", "AB and OO", "AO and BO", "AA and AB"],
        answer: 2,
        explanation: "A group O child (OO) needs an O allele from each parent, so AO and BO parents can each pass on O.",
      },
      {
        q: "Why is colour blindness more common in males than in females?",
        options: ["Males have two X chromosomes", "The gene is on the Y chromosome", "Males have only one X chromosome", "Females cannot inherit the allele"],
        answer: 2,
        explanation: "Males have only one X chromosome, so a single recessive allele on it is expressed.",
      },
    ],
    status: "published",
  },
  {
    id: "biology-04",
    subjectId: "biology",
    topic: "Genetics and Evolution",
    subtopic: "Variation and evolution",
    title: "Variation and Evolution",
    order: 4,
    introduction: "No two people are exactly alike, and that variation is the fuel of evolution. This lesson explains the causes of variation, the evidence for evolution, and how natural selection turns small differences into new species over time.",
    objectives: [
      "Distinguish continuous from discontinuous variation with examples",
      "Explain the causes of variation, including mutation and sexual reproduction",
      "Describe the evidence for evolution from fossils, anatomy and DNA",
      "Explain natural selection and the role of adaptation",
      "Describe the formation of new species through isolation"
    ],
    sections: [
      {
        heading: "Types and Causes of Variation",
        body: "Variation is the differences between individuals of the same species. Continuous variation, such as height or weight, shows a full range of values and is controlled by many genes and by the environment, producing a bell-shaped curve when plotted. Discontinuous variation, such as blood group or tongue rolling, falls into distinct categories and is controlled by one or a few genes, with little environmental influence. Variation arises from mutation, which is a random change in the DNA, and from sexual reproduction, where meiosis and fertilisation shuffle alleles into new combinations.",
      },
      {
        heading: "Natural Selection",
        body: "Natural selection is the process by which organisms that are better adapted to their environment survive and reproduce more successfully than others, passing their advantageous alleles to the next generation. Charles Darwin proposed the theory after observing finches on the Galapagos Islands, where different beak shapes suited different foods. For natural selection to work there must be variation in a population, an environmental pressure such as predators or food shortage, and inheritance of the advantageous traits. Over many generations, the frequency of advantageous alleles increases, and the population becomes better adapted.",
      },
      {
        heading: "Evidence for Evolution",
        body: "The fossil record provides the most direct evidence for evolution, showing how organisms have changed over millions of years; for example, the fossil Archaeopteryx has features of both reptiles and birds. Comparative anatomy shows that the forelimbs of humans, bats, whales and moles have the same basic bone structure, even though they are used differently, which suggests a common ancestor — these are homologous structures. The embryos of vertebrates look very similar in the early stages of development, which also points to a shared ancestry.",
      },
      {
        heading: "Speciation and Extinction",
        body: "A new species forms when a population becomes divided, usually by a geographical barrier such as a river or a mountain range, and the two groups evolve independently. Over time, differences in the environment select for different traits, and mutations accumulate, until the two groups can no longer interbreed to produce fertile offspring — at that point they are separate species. This process is called speciation. Evolution is not always a success story: more than 99% of all species that have ever lived are now extinct, often because their environment changed faster than they could adapt.",
      },
    ],
    definitions: [
      { term: "Variation", meaning: "The differences in characteristics between individuals of the same species." },
      { term: "Mutation", meaning: "A random change in the DNA of an organism, which may create a new allele." },
      { term: "Natural selection", meaning: "The process by which better-adapted organisms survive and reproduce more successfully, passing on their alleles." },
      { term: "Adaptation", meaning: "A feature that helps an organism survive and reproduce in its environment." },
      { term: "Homologous structures", meaning: "Structures with the same basic plan but different functions, indicating a common ancestor." },
      
    ],
    formulas: [
      "Continuous variation: many genes + environment, e.g. height, weight",
      "Discontinuous variation: one or few genes, distinct categories, e.g. blood group",
      "Natural selection requires variation, selection pressure and inheritance",
      "Speciation: isolation -> independent evolution -> reproductive isolation",
      "Fossils, homologous structures and DNA sequences are evidence for evolution",
      "Darwin's theory: variation + struggle for existence + survival of the fittest",
    ],
    examples: [
      {
        title: "The peppered moth",
        problem: "Explain how the peppered moth population changed during the Industrial Revolution in Britain.",
        steps: [
          "Before industrialisation, most peppered moths were light-coloured and camouflaged on lichen-covered trees.",
          "Pollution killed the lichens and covered trees with dark soot.",
          "Light moths were now easily seen and eaten by birds, while dark moths were camouflaged.",
          "Dark moths survived and reproduced more, passing on the dark allele.",
          "Over generations, dark moths became the majority in polluted areas — natural selection in action.",
        ],
        answer: "Pollution changed the selection pressure, so the dark form was favoured and became common.",
      },
      {
        title: "Continuous versus discontinuous variation",
        problem: "Classify these characteristics as continuous or discontinuous variation: height, blood group, weight, tongue rolling.",
        steps: [
          "Height shows a full range of values and is affected by many genes and diet, so it is continuous.",
          "Blood group falls into four distinct categories (A, B, AB, O), so it is discontinuous.",
          "Weight shows a full range of values and is affected by genes and diet, so it is continuous.",
          "Tongue rolling is either possible or not, with no intermediate, so it is discontinuous.",
          "Continuous traits give a bell-shaped curve; discontinuous traits give separate bars.",
        ],
        answer: "Continuous: height, weight. Discontinuous: blood group, tongue rolling.",
      },
    ],
    tips: [
      "For variation questions, remember: continuous = range of values (height), discontinuous = categories (blood group).",
      "Natural selection needs three ingredients — variation, a selection pressure and inheritance. Mention all three in your answer.",
      "Homologous structures have the same basic plan but different functions; analogous structures have different plans but similar functions.",
      "Always link an adaptation to a survival advantage — say how it helps the organism survive or reproduce.",
    ],
    mistakes: [
      "Saying that organisms evolve because they need to — evolution works through random variation and selection, not need.",
      "Confusing homologous with analogous structures — homologous structures show common ancestry.",
      "Claiming that acquired characteristics are inherited — only changes in the DNA are passed on.",
      "Saying that natural selection creates variation — mutation and sexual reproduction create it; selection only acts on it.",
    ],
    facts: [
      "Charles Darwin published On the Origin of Species in 1859.",
      "Humans share about 98% of their DNA with chimpanzees.",
      "More than 99% of all species that have ever lived are extinct.",
      
      
    ],
    quiz: [
      {
        q: "Which characteristic shows discontinuous variation?",
        options: ["Height", "Weight", "Blood group", "Skin colour"],
        answer: 2,
        explanation: "Blood group falls into distinct categories (A, B, AB, O) with no intermediate values.",
      },
      {
        q: "What is the main source of new alleles in a population?",
        options: ["Natural selection", "Mutation", "Migration", "Fertilisation"],
        answer: 1,
        explanation: "Mutation is a random change in DNA that creates new alleles.",
      },
      {
        q: "Which of these is evidence for evolution?",
        options: ["Homologous structures", "Analogous structures only", "Fossils of living species", "Identical twins"],
        answer: 0,
        explanation: "Homologous structures share the same basic plan, indicating descent from a common ancestor.",
      },
      {
        q: "What happens in speciation?",
        options: ["Two species merge into one", "A population splits and the groups can no longer interbreed", "An individual changes species", "A species becomes extinct"],
        answer: 1,
        explanation: "Speciation occurs when isolated populations evolve apart until they cannot interbreed to produce fertile offspring.",
      },
      {
        q: "Why did dark peppered moths become common in polluted areas?",
        options: ["They were stronger", "They were camouflaged against soot-covered trees", "They reproduced faster", "They ate more food"],
        answer: 1,
        explanation: "Dark moths were camouflaged on soot-covered trees, so birds ate fewer of them and they survived to reproduce.",
      },
    ],
    status: "published",
  },
  {
    id: "biology-05",
    subjectId: "biology",
    topic: "Ecology",
    subtopic: "Ecosystems and energy flow",
    title: "Ecosystems and Energy Flow",
    order: 5,
    introduction: "An ecosystem is a community of organisms interacting with their environment. This lesson explains food chains and food webs, how energy flows through an ecosystem, and the nutrient cycles that keep life going.",
    objectives: [
      "Define ecosystem, habitat, population, community and niche",
      "Describe biotic and abiotic factors and their effects on organisms",
      "Construct and interpret food chains, food webs and pyramids of numbers and energy",
      "Explain why energy is lost at each trophic level",
      "Describe the carbon and nitrogen cycles"
    ],
    sections: [
      {
        heading: "Ecosystems and Their Components",
        body: "An ecosystem is a community of living organisms together with the non-living parts of their environment, interacting as a system. A habitat is the place where an organism lives, a population is all the members of one species in a habitat, and a community is all the populations of different species living together. The niche of an organism is its role in the ecosystem, including what it eats and where it lives. Biotic factors are the living influences, such as competition, predation and disease, while abiotic factors are the non-living influences, such as temperature, light, water and soil pH.",
      },
      {
        heading: "Food Chains and Food Webs",
        body: "A food chain shows the feeding relationships in an ecosystem as a single line: grass is eaten by a grasshopper, which is eaten by a frog, which is eaten by a snake. Producers, usually green plants, make their own food by photosynthesis and form the first trophic level. Primary consumers (herbivores) eat the producers, secondary consumers (carnivores) eat the herbivores, and tertiary consumers eat the secondary consumers. In reality, organisms eat more than one type of food, so food chains join together into a food web, which is a more accurate picture of feeding relationships.",
      },
      {
        heading: "Pyramids and Energy Loss",
        body: "A pyramid of numbers shows how many organisms there are at each trophic level, and it is usually widest at the bottom because there are many producers and fewer top predators. A pyramid of energy shows the total energy at each level, and it is always pyramid-shaped because energy is lost at each step. Only about 10% of the energy at one level is transferred to the next: the rest is lost as heat through respiration, in undigested waste, and in movement.",
      },
      {
        heading: "The Carbon and Nitrogen Cycles",
        body: "The carbon cycle moves carbon between the atmosphere, living organisms and the soil. Plants take in carbon dioxide during photosynthesis and turn it into organic compounds; animals eat the plants, and carbon is returned to the air by respiration, decomposition and the combustion of fossil fuels. The nitrogen cycle is more complex because plants cannot use nitrogen gas directly. Nitrogen-fixing bacteria in the soil and in the root nodules of legumes convert nitrogen gas into nitrates, which plants absorb; animals obtain nitrogen by eating plants.",
      },
    ],
    definitions: [
      { term: "Ecosystem", meaning: "A community of organisms together with the non-living parts of their environment, interacting as a system." },
      { term: "Producer", meaning: "An organism that makes its own food by photosynthesis, forming the first trophic level." },
      { term: "Trophic level", meaning: "A feeding level in a food chain, such as producer, primary consumer or secondary consumer." },
      { term: "Decomposer", meaning: "An organism, such as a bacterium or fungus, that breaks down dead material and returns nutrients to the soil." },
      { term: "Food web", meaning: "A network of interconnected food chains in an ecosystem." },
      
    ],
    formulas: [
      "Food chain: producer -> primary consumer -> secondary consumer -> tertiary consumer",
      "Only about 10% of energy is transferred to the next trophic level",
      "Pyramid of energy is always pyramid-shaped because energy is lost at each level",
      "Carbon cycle: photosynthesis removes CO2; respiration, decomposition and combustion release it",
      "Nitrogen cycle: nitrogen fixation -> nitrification -> denitrification",
      "Decomposers return nutrients to the soil for producers to reuse",
    ],
    examples: [
      {
        title: "Building a food chain",
        problem: "Construct a food chain using: maize, grasshopper, lizard, hawk. Identify the producer and the trophic levels.",
        steps: [
          "The producer is the maize, because it makes its own food by photosynthesis.",
          "The grasshopper eats the maize, so it is the primary consumer (herbivore).",
          "The lizard eats the grasshopper, so it is the secondary consumer.",
          "The hawk eats the lizard, so it is the tertiary consumer.",
          "Food chain: maize -> grasshopper -> lizard -> hawk.",
        ],
        answer: "Maize (producer) -> grasshopper (primary consumer) -> lizard (secondary consumer) -> hawk (tertiary consumer).",
      },
      {
        title: "Energy transfer calculation",
        problem: "A producer captures 10,000 kJ of energy. Using the 10% rule, how much energy reaches the secondary consumer?",
        steps: [
          "About 10% of the energy is transferred at each trophic level.",
          "Primary consumer receives 10% of 10,000 = 1,000 kJ.",
          "Secondary consumer receives 10% of 1,000 = 100 kJ.",
          "The remaining energy is lost as heat, in waste and through movement.",
          "Only 100 kJ of the original 10,000 kJ reaches the secondary consumer.",
        ],
        answer: "100 kJ.",
      },
    ],
    tips: [
      "In food chain questions, arrows point in the direction energy flows — from the food to the feeder.",
      "Remember the 10% rule for energy transfer; it is the most common ecology calculation in JAMB.",
      "A pyramid of energy is always pyramid-shaped, but a pyramid of numbers can be inverted (for example, one tree with many insects).",
      "Leguminous plants have nitrogen-fixing bacteria in their root nodules — a favourite JAMB fact.",
    ],
    mistakes: [
      "Drawing food chain arrows backwards — the arrow points to the organism that eats, not the one that is eaten.",
      "Saying that energy is recycled in an ecosystem — energy flows through and is lost as heat; only nutrients are recycled.",
      "Confusing a food chain with a food web — a web is many interconnected chains.",
      "Forgetting decomposers when asked what returns nutrients to the soil.",
    ],
    facts: [
      "Only about 10% of energy passes from one trophic level to the next.",
      "Food chains rarely have more than four or five levels because of energy loss.",
      "Decomposers such as bacteria and fungi recycle nutrients back to the soil.",
      
      
    ],
    quiz: [
      {
        q: "Which organism is the producer in a grassland food chain?",
        options: ["Grasshopper", "Snake", "Grass", "Hawk"],
        answer: 2,
        explanation: "Grass makes its own food by photosynthesis, so it is the producer.",
      },
      {
        q: "What happens to most of the energy at each trophic level?",
        options: ["It is stored as fat", "It is lost as heat and in waste", "It is passed to the next level", "It is recycled to the producers"],
        answer: 1,
        explanation: "About 90% of the energy is lost through respiration, movement and undigested waste.",
      },
      {
        q: "Which organisms break down dead material and return nutrients to the soil?",
        options: ["Producers", "Herbivores", "Decomposers", "Carnivores"],
        answer: 2,
        explanation: "Decomposers such as bacteria and fungi break down dead organisms and release nutrients.",
      },
      {
        q: "In the nitrogen cycle, which bacteria convert nitrogen gas into nitrates?",
        options: ["Denitrifying bacteria", "Nitrogen-fixing bacteria", "Decomposers", "Nitrifying bacteria"],
        answer: 1,
        explanation: "Nitrogen-fixing bacteria convert nitrogen gas into compounds plants can use.",
      },
      {
        q: "What does a pyramid of energy show?",
        options: ["The number of organisms at each level", "The total energy at each trophic level", "The mass of organisms at each level", "The food eaten at each level"],
        answer: 1,
        explanation: "A pyramid of energy shows the total energy available at each trophic level.",
      },
    ],
    status: "published",
  },
  {
    id: "biology-06",
    subjectId: "biology",
    topic: "Ecology",
    subtopic: "Population, pollution and conservation",
    title: "Population, Pollution and Conservation",
    order: 6,
    introduction: "Populations grow, compete and change, and human activity now shapes ecosystems more than any other force. This lesson covers population dynamics, the main types of pollution, and the conservation strategies that protect biodiversity.",
    objectives: [
      "Define population and describe how populations are estimated",
      "Explain population growth and the factors that limit it",
      "Describe the effects of air, water and land pollution",
      "Explain the greenhouse effect and global warming",
      "Describe conservation methods including national parks and reserves"
    ],
    sections: [
      {
        heading: "Population Dynamics",
        body: "A population is all the members of one species living in a particular area at a particular time. Population size is estimated by sampling methods such as quadrats for plants and the capture-mark-recapture method for animals: a sample is caught, marked and released, and the proportion of marked animals in a second catch is used to estimate the total. Populations grow when the birth rate exceeds the death rate, and growth is fastest when resources are plentiful. As a population grows, limiting factors such as food shortage, disease, predation and competition slow the growth until it levels off at the carrying capacity — the maximum population the environment can support.",
      },
      {
        heading: "Pollution",
        body: "Pollution is the addition of harmful substances to the environment, and it takes several forms. Air pollution comes from burning fossil fuels, which releases carbon dioxide, sulfur dioxide and nitrogen oxides; sulfur dioxide and nitrogen oxides dissolve in rain to form acid rain, which damages forests and lakes. Water pollution comes from sewage, fertilisers and industrial waste, which cause eutrophication: excess nutrients make algae grow rapidly, and when the algae die, decomposers use up the oxygen in the water, killing fish.",
      },
      {
        heading: "Global Warming and the Greenhouse Effect",
        body: "The greenhouse effect is a natural process: gases such as carbon dioxide, methane and water vapour trap heat in the atmosphere and keep the Earth warm enough for life. Human activities, especially the burning of fossil fuels and deforestation, have increased the concentration of greenhouse gases, strengthening the effect and causing global warming. The consequences include rising sea levels as polar ice melts, changes in rainfall patterns, more frequent droughts and floods, and shifts in the ranges of plants and animals.",
      },
      {
        heading: "Conservation",
        body: "Conservation is the protection and careful management of natural resources so that they last for future generations. Methods include setting up national parks and game reserves where wildlife is protected, creating seed banks and gene banks to preserve genetic diversity, and passing laws against hunting endangered species and cutting down forests. Sustainable use means using resources at a rate that allows them to be replaced naturally, such as fishing below the maximum sustainable yield or replanting trees after logging. Nigeria has national parks such as Yankari and Cross River, which protect elephants, gorillas and other wildlife.",
      },
    ],
    definitions: [
      { term: "Population", meaning: "All the members of one species living in a particular area at a particular time." },
      { term: "Carrying capacity", meaning: "The maximum population size that an environment can support over a long period." },
      { term: "Pollution", meaning: "The addition of harmful substances to the environment." },
      { term: "Eutrophication", meaning: "The enrichment of water with nutrients, leading to algal blooms and oxygen depletion." },
      { term: "Greenhouse effect", meaning: "The trapping of heat in the atmosphere by gases such as carbon dioxide and methane." },
      
    ],
    formulas: [
      "Population estimate (capture-mark-recapture): total = (first catch x second catch) / marked recaptured",
      "Population growth: birth rate - death rate = growth rate",
      "Carrying capacity: the population levels off when limiting factors act",
      "Acid rain: sulfur dioxide + nitrogen oxides + water -> acidic rain",
      "Eutrophication: excess nitrates -> algal bloom -> oxygen depletion -> fish death",
      "Greenhouse gases: carbon dioxide, methane, water vapour, nitrous oxide",
    ],
    examples: [
      {
        title: "Capture-mark-recapture estimate",
        problem: "In a study of snails, 40 snails were caught, marked and released. Later, 50 snails were caught and 10 of them were marked. Estimate the total snail population.",
        steps: [
          "Use the formula: total population = (first catch x second catch) / marked recaptured.",
          "First catch = 40, second catch = 50, marked recaptured = 10.",
          "Substitute: (40 x 50) / 10.",
          "Calculate 40 x 50 = 2,000.",
          "Divide: 2,000 / 10 = 200 snails.",
        ],
        answer: "About 200 snails.",
      },
      {
        title: "Explaining eutrophication",
        problem: "Explain how fertiliser run-off from farms can kill fish in a lake.",
        steps: [
          "Rain washes nitrates and phosphates from fertilisers into the lake.",
          "The extra nutrients cause algae to grow rapidly — an algal bloom.",
          "The algae block light, so underwater plants die.",
          "When the algae die, decomposer bacteria break them down and use up the oxygen in the water.",
          "Fish die because there is not enough dissolved oxygen for respiration.",
        ],
        answer: "Fertiliser nutrients cause algal blooms; decomposition of the algae depletes oxygen and fish suffocate.",
      },
    ],
    tips: [
      "Learn the capture-mark-recapture formula — it is a common JAMB calculation.",
      "For pollution questions, always name the pollutant, its source and its effect on organisms.",
      "Eutrophication follows a fixed sequence: nutrients, algal bloom, death, decomposition, oxygen loss, fish death — learn it in order.",
      "Conservation questions often ask for methods — know national parks, reserves, seed banks and laws.",
    ],
    mistakes: [
      "Confusing the greenhouse effect with the ozone hole — they are different problems with different causes.",
      "Saying that global warming is caused by the ozone hole — it is caused by greenhouse gases trapping heat.",
      "Forgetting that decomposers use up the oxygen in eutrophication, not the algae themselves.",
      "Describing carrying capacity as the maximum number of organisms that can ever exist, rather than what the environment can support.",
    ],
    facts: [
      "Yankari National Park in Bauchi State is Nigeria's best-known game reserve.",
      "Carbon dioxide is the main greenhouse gas produced by burning fossil fuels.",
      "Acid rain is caused mainly by sulfur dioxide and nitrogen oxides.",
      
      
    ],
    quiz: [
      {
        q: "What is the carrying capacity of an environment?",
        options: ["The number of species present", "The maximum population the environment can support", "The number of births per year", "The size of the habitat"],
        answer: 1,
        explanation: "Carrying capacity is the largest population an environment can support over a long period.",
      },
      {
        q: "Which gas is mainly responsible for the greenhouse effect from human activity?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        answer: 2,
        explanation: "Carbon dioxide from burning fossil fuels is the main greenhouse gas increased by human activity.",
      },
      {
        q: "What is the main cause of eutrophication in lakes?",
        options: ["Oil spills", "Excess nutrients from fertilisers and sewage", "Acid rain", "Plastic waste"],
        answer: 1,
        explanation: "Excess nitrates and phosphates cause algal blooms that lead to oxygen depletion.",
      },
      {
        q: "Which of these is a conservation method?",
        options: ["Burning forests", "Creating national parks", "Overfishing", "Dumping waste in rivers"],
        answer: 1,
        explanation: "National parks protect wildlife and their habitats from destruction.",
      },
      {
        q: "In a capture-mark-recapture study, 30 animals were marked and released, and 20 were later caught of which 6 were marked. What is the estimated population?",
        options: ["100", "60", "50", "120"],
        answer: 0,
        explanation: "Population = (30 x 20) / 6 = 600 / 6 = 100.",
      },
    ],
    status: "published",
  },
  {
    id: "biology-07",
    subjectId: "biology",
    topic: "Human Physiology",
    subtopic: "Nutrition and digestion",
    title: "Nutrition and Digestion in Humans",
    order: 7,
    introduction: "Food provides the energy and materials the body needs to grow, repair itself and stay healthy. This lesson covers the classes of food, a balanced diet, and the journey of food through the human digestive system.",
    objectives: [
      "State the classes of food and the function of each",
      "Explain the importance of a balanced diet and the effects of deficiencies",
      "Describe the structure and functions of the parts of the alimentary canal",
      "Explain the roles of enzymes in digestion",
      "Describe the digestion of starch, protein and fat"
    ],
    sections: [
      {
        heading: "Classes of Food and a Balanced Diet",
        body: "Food contains six classes of nutrients: carbohydrates, proteins, fats, vitamins, mineral salts and water, and each has a specific role. Carbohydrates such as yam, rice and bread provide energy, while proteins from meat, fish, beans and eggs are needed for growth and repair. Fats provide energy and insulation, vitamins regulate body processes, mineral salts build strong bones and teeth, and water is needed for all chemical reactions and transport. A balanced diet contains all the nutrients in the right proportions for a person's age, activity and health.",
      },
      {
        heading: "The Alimentary Canal",
        body: "Digestion begins in the mouth, where teeth break food into smaller pieces and saliva, containing the enzyme amylase, starts to digest starch. The food is swallowed and passes down the oesophagus to the stomach, where it is churned and mixed with gastric juice containing hydrochloric acid and the enzyme pepsin, which begins the digestion of protein. The partly digested food, called chyme, passes into the small intestine, where most digestion and absorption take place. The large intestine absorbs water and mineral salts, and undigested food is stored in the rectum before being egested through the anus.",
      },
      {
        heading: "Enzymes in Digestion",
        body: "Enzymes are biological catalysts that speed up the chemical reactions of digestion, and each enzyme works on one type of food at a particular pH. Amylase in saliva and pancreatic juice digests starch to maltose, and maltase then digests maltose to glucose. Pepsin in the stomach digests proteins to peptides in acidic conditions, and trypsin in the small intestine continues protein digestion in alkaline conditions. Lipase, from the pancreas, digests fats into fatty acids and glycerol, and it works best when bile has first broken the fat into tiny droplets, increasing the surface area for the enzyme.",
      },
      {
        heading: "Absorption and Assimilation",
        body: "The small intestine is adapted for absorption: it is very long, it has a large surface area because of the villi, and each villus has a rich blood supply and a lacteal. The walls of the villi are only one cell thick, so digested food can pass through quickly into the blood. Glucose and amino acids are absorbed into the blood capillaries and carried to the liver by the hepatic portal vein, while fatty acids and glycerol enter the lacteals and are carried in the lymph.",
      },
    ],
    definitions: [
      { term: "Balanced diet", meaning: "A diet containing all the classes of food in the right proportions for the body's needs." },
      { term: "Enzyme", meaning: "A biological catalyst that speeds up a chemical reaction without being used up." },
      { term: "Digestion", meaning: "The breakdown of large, insoluble food molecules into small, soluble molecules that can be absorbed." },
      { term: "Absorption", meaning: "The movement of digested food molecules from the gut into the blood or lymph." },
      { term: "Villus", meaning: "A small finger-like projection in the small intestine that increases the surface area for absorption." },
      
    ],
    formulas: [
      "Starch --amylase--> maltose --maltase--> glucose",
      "Protein --pepsin/trypsin--> peptides --peptidase--> amino acids",
      "Fats --lipase--> fatty acids + glycerol",
      "Balanced diet: carbohydrates + proteins + fats + vitamins + minerals + water",
      "Vitamin C deficiency -> scurvy; vitamin D deficiency -> rickets; iron deficiency -> anaemia",
      "Absorption: glucose and amino acids -> blood; fatty acids and glycerol -> lacteals",
    ],
    examples: [
      {
        title: "Identifying a deficiency disease",
        problem: "A child who eats mainly starchy foods with very little protein develops a swollen belly, thin limbs and stunted growth. Identify the disease and the missing nutrient.",
        steps: [
          "The diet is high in carbohydrate but low in protein.",
          "Protein is needed for growth and repair of body tissues.",
          "A lack of protein in children causes kwashiorkor.",
          "The symptoms match: swollen belly (oedema), thin limbs and poor growth.",
          "The child needs protein-rich foods such as beans, eggs, fish or milk.",
        ],
        answer: "Kwashiorkor, caused by protein deficiency.",
      },
      {
        title: "Why the small intestine is adapted for absorption",
        problem: "Explain three adaptations of the small intestine that make absorption efficient.",
        steps: [
          "The small intestine is very long (about 6 metres), giving a large surface area and more time for absorption.",
          "Its inner wall is covered with villi, which greatly increase the surface area.",
          "Each villus has a rich blood supply, so absorbed food is carried away quickly, maintaining a concentration gradient.",
          "The wall of each villus is one cell thick, so food molecules diffuse across it quickly.",
          "Fatty acids and glycerol are absorbed into lacteals, while glucose and amino acids enter the blood.",
        ],
        answer: "Length, villi, rich blood supply and a thin wall all increase the rate of absorption.",
      },
    ],
    tips: [
      "Learn the enzyme-substrate pairs: amylase-starch, pepsin-protein, lipase-fat — JAMB asks them every year.",
      "Remember that the stomach is acidic (pepsin works there) and the small intestine is alkaline (trypsin and lipase work there).",
      "For absorption questions, always mention the villi, the large surface area and the rich blood supply.",
      "Kwashiorkor is protein deficiency; marasmus is deficiency of both protein and energy.",
    ],
    mistakes: [
      "Saying digestion happens in the large intestine — most digestion and absorption happen in the small intestine.",
      "Confusing ingestion with digestion — ingestion is taking food in, digestion is breaking it down.",
      "Saying bile contains enzymes — bile has no enzymes; it emulsifies fats to increase surface area.",
      "Forgetting that the liver stores excess glucose as glycogen, not as glucose.",
    ],
    facts: [
      "The human small intestine is about 6 metres long.",
      "Saliva contains the enzyme amylase, which starts starch digestion in the mouth.",
      "The liver is the largest organ in the human body.",
      
      
    ],
    quiz: [
      {
        q: "Which enzyme digests starch in the mouth?",
        options: ["Pepsin", "Lipase", "Amylase", "Trypsin"],
        answer: 2,
        explanation: "Salivary amylase begins the digestion of starch in the mouth.",
      },
      {
        q: "What is the function of bile in digestion?",
        options: ["It digests fats", "It emulsifies fats into small droplets", "It digests proteins", "It neutralises acid in the stomach"],
        answer: 1,
        explanation: "Bile emulsifies fats, breaking them into small droplets so lipase can work on them.",
      },
      {
        q: "Where does most absorption of digested food take place?",
        options: ["Stomach", "Large intestine", "Small intestine", "Oesophagus"],
        answer: 2,
        explanation: "The small intestine, with its villi, is adapted for absorption of digested food.",
      },
      {
        q: "Which deficiency disease is caused by lack of vitamin C?",
        options: ["Rickets", "Scurvy", "Anaemia", "Kwashiorkor"],
        answer: 1,
        explanation: "Lack of vitamin C causes scurvy, with bleeding gums and slow healing.",
      },
      {
        q: "What are the end products of fat digestion?",
        options: ["Glucose", "Amino acids", "Fatty acids and glycerol", "Maltose"],
        answer: 2,
        explanation: "Lipase digests fats into fatty acids and glycerol.",
      },
    ],
    status: "published",
  },
  {
    id: "biology-08",
    subjectId: "biology",
    topic: "Human Physiology",
    subtopic: "Transport, respiration and excretion",
    title: "Transport, Respiration and Excretion",
    order: 8,
    introduction: "The heart pumps blood around the body, the lungs take in oxygen, and the kidneys remove waste — three systems working together to keep the internal environment stable. This lesson explains circulation, gaseous exchange and excretion in humans.",
    objectives: [
      "Describe the structure and function of the heart and the double circulation",
      "Identify the components of blood and state the function of each",
      "Explain gaseous exchange in the lungs and the mechanism of breathing",
      "Describe aerobic and anaerobic respiration and their equations",
      "Explain the structure and function of the kidney and the formation of urine"
    ],
    sections: [
      {
        heading: "The Heart and Blood Circulation",
        body: "The heart is a muscular organ with four chambers: two atria at the top and two ventricles at the bottom. The right side of the heart pumps deoxygenated blood to the lungs, where it picks up oxygen, and the left side pumps oxygenated blood to the rest of the body — this is called double circulation. Blood travels in arteries, which carry blood away from the heart at high pressure and have thick, elastic walls; in veins, which return blood to the heart and have valves to prevent backflow; and in capillaries, which are one cell thick and allow exchange of substances with the tissues.",
      },
      {
        heading: "Blood and Its Components",
        body: "Blood is made of plasma, red blood cells, white blood cells and platelets. Plasma is a pale yellow liquid that carries dissolved food, hormones, carbon dioxide and waste products. Red blood cells contain haemoglobin, which binds to oxygen in the lungs and releases it in the tissues, and they have no nucleus so they can carry more haemoglobin. White blood cells defend the body: phagocytes engulf and digest germs, while lymphocytes produce antibodies. Platelets are tiny fragments that help the blood to clot when a vessel is damaged, preventing excessive blood loss.",
      },
      {
        heading: "Gaseous Exchange and Breathing",
        body: "Gaseous exchange takes place in the alveoli, tiny air sacs in the lungs with walls one cell thick and a rich blood supply. Oxygen diffuses from the air in the alveoli into the blood, and carbon dioxide diffuses from the blood into the alveoli, because of the concentration gradients. Breathing in (inspiration) happens when the diaphragm contracts and flattens and the intercostal muscles lift the ribs, increasing the volume of the chest and drawing air in. Breathing out (expiration) happens when these muscles relax, the chest volume decreases, and air is pushed out.",
      },
      {
        heading: "Respiration and Excretion",
        body: "Aerobic respiration is the release of energy from glucose using oxygen, and it takes place in the mitochondria: glucose + oxygen -> carbon dioxide + water + energy. When oxygen is scarce, such as during vigorous exercise, anaerobic respiration occurs in the muscles, producing lactic acid and less energy. The kidneys are the main excretory organs: each kidney contains about a million nephrons, which filter the blood and reabsorb useful substances such as glucose, water and salts, leaving urine to be stored in the bladder.",
      },
    ],
    definitions: [
      { term: "Double circulation", meaning: "The circulation of blood through the heart twice in one complete circuit: once to the lungs and once to the body." },
      { term: "Haemoglobin", meaning: "The red pigment in red blood cells that carries oxygen around the body." },
      { term: "Alveolus", meaning: "A tiny air sac in the lungs where gaseous exchange takes place." },
      { term: "Aerobic respiration", meaning: "The release of energy from glucose using oxygen, producing carbon dioxide and water." },
      { term: "Anaerobic respiration", meaning: "The release of energy from glucose without oxygen, producing lactic acid in animals." },
      
    ],
    formulas: [
      "Aerobic respiration: C6H12O6 + 6O2 -> 6CO2 + 6H2O + energy",
      "Anaerobic respiration in muscle: glucose -> lactic acid + energy",
      "Anaerobic respiration in yeast: glucose -> ethanol + carbon dioxide + energy",
      "Double circulation: heart -> lungs -> heart -> body -> heart",
      "Urine formation: filtration -> selective reabsorption -> secretion",
      "Excretion: removal of metabolic waste (urea, carbon dioxide, excess water and salts)",
    ],
    examples: [
      {
        title: "Why the left ventricle wall is thicker",
        problem: "Explain why the wall of the left ventricle is thicker than the wall of the right ventricle.",
        steps: [
          "The left ventricle pumps blood to the whole body, while the right ventricle pumps blood only to the lungs.",
          "Pumping blood around the body needs much more pressure than pumping it to the nearby lungs.",
          "A thicker, more muscular wall can contract more forcefully and generate the higher pressure needed.",
          "The right ventricle needs less force, so its wall is thinner.",
          "This is an example of structure being adapted to function.",
        ],
        answer: "The left ventricle needs more force to pump blood around the whole body, so it has a thicker muscular wall.",
      },
      {
        title: "Anaerobic respiration during exercise",
        problem: "Explain why an athlete's muscles ache after a sprint.",
        steps: [
          "During a sprint, the muscles need energy faster than oxygen can be supplied.",
          "The muscles carry out anaerobic respiration, breaking down glucose without oxygen.",
          "Anaerobic respiration produces lactic acid as a waste product.",
          "Lactic acid builds up in the muscles and causes pain and fatigue.",
          "After exercise, oxygen is needed to break down the lactic acid — this is the oxygen debt.",
        ],
        answer: "Lactic acid from anaerobic respiration accumulates in the muscles and causes aching.",
      },
    ],
    tips: [
      "Learn the aerobic respiration equation word for word — it appears in both Biology and Chemistry papers.",
      "For circulation questions, always state which side of the heart is which: right side = deoxygenated blood to lungs, left side = oxygenated blood to body.",
      "Arteries carry blood away from the heart; veins carry it back — remember A for Away.",
      "The kidney filters blood, reabsorbs useful substances, and the rest becomes urine — learn the sequence.",
    ],
    mistakes: [
      "Saying that arteries always carry oxygenated blood — the pulmonary artery carries deoxygenated blood to the lungs.",
      "Confusing respiration with breathing — breathing is the physical movement of air; respiration is the chemical release of energy.",
      "Saying excretion and egestion are the same — excretion removes metabolic waste; egestion removes undigested food.",
      "Forgetting that the liver makes urea from excess amino acids, which the kidney then removes in urine.",
    ],
    facts: [
      "The human heart beats about 100,000 times a day.",
      "Each kidney contains about one million nephrons.",
      "Red blood cells live for about 120 days.",
      
      
    ],
    quiz: [
      {
        q: "Which blood vessel carries blood away from the heart?",
        options: ["Vein", "Capillary", "Artery", "Vena cava"],
        answer: 2,
        explanation: "Arteries carry blood away from the heart to the body tissues.",
      },
      {
        q: "What are the products of aerobic respiration?",
        options: ["Lactic acid and energy", "Carbon dioxide, water and energy", "Ethanol and carbon dioxide", "Glucose and oxygen"],
        answer: 1,
        explanation: "Aerobic respiration breaks glucose down with oxygen to carbon dioxide, water and energy.",
      },
      {
        q: "Where does gaseous exchange take place in the lungs?",
        options: ["Bronchi", "Trachea", "Alveoli", "Diaphragm"],
        answer: 2,
        explanation: "Gaseous exchange occurs in the alveoli, which have thin walls and a rich blood supply.",
      },
      {
        q: "Which part of the blood carries oxygen?",
        options: ["Plasma", "White blood cells", "Platelets", "Red blood cells"],
        answer: 3,
        explanation: "Red blood cells contain haemoglobin, which binds and carries oxygen.",
      },
      {
        q: "What is the functional unit of the kidney?",
        options: ["Neuron", "Nephron", "Alveolus", "Villus"],
        answer: 1,
        explanation: "The nephron is the functional unit of the kidney; it filters blood and forms urine.",
      },
    ],
    status: "published",
  },
  {
    id: "biology-09",
    subjectId: "biology",
    topic: "Plant Biology and Classification",
    subtopic: "Photosynthesis and plant nutrition",
    title: "Photosynthesis and Plant Nutrition",
    order: 9,
    introduction: "Plants make their own food from sunlight, water and carbon dioxide — a process that feeds nearly all life on Earth. This lesson explains photosynthesis, the factors that affect its rate, and how plants take up water and minerals.",
    objectives: [
      "Write the word and chemical equations for photosynthesis",
      "Describe the structure of a leaf and how it is adapted for photosynthesis",
      "Explain the roles of light, carbon dioxide, water and chlorophyll",
      "Describe experiments to show that light and chlorophyll are needed for photosynthesis",
      "Explain the limiting factors of photosynthesis"
    ],
    sections: [
      {
        heading: "The Process of Photosynthesis",
        body: "Photosynthesis is the process by which green plants make glucose from carbon dioxide and water, using light energy trapped by chlorophyll: carbon dioxide + water -> glucose + oxygen. It takes place mainly in the leaves, inside organelles called chloroplasts, which contain the green pigment chlorophyll. The light energy is used to split water molecules, releasing oxygen as a by-product, and the hydrogen is combined with carbon dioxide to build glucose. The glucose is used for respiration, converted to starch for storage, or used to make cellulose, proteins and fats.",
      },
      {
        heading: "The Leaf Adapted for Photosynthesis",
        body: "The leaf is adapted for photosynthesis in several ways. Its broad, flat shape gives a large surface area for absorbing light, and it is thin so that carbon dioxide can diffuse quickly to the cells inside. The upper epidermis is transparent so light can pass through, and the palisade mesophyll cells just below it are packed with chloroplasts and arranged to catch the maximum light. The spongy mesophyll has air spaces that allow carbon dioxide to diffuse to the photosynthetic cells.",
      },
      {
        heading: "Factors Affecting the Rate of Photosynthesis",
        body: "The rate of photosynthesis is affected by light intensity, carbon dioxide concentration and temperature. Increasing the light intensity increases the rate, up to a point where another factor becomes limiting. Increasing the carbon dioxide concentration also increases the rate until a limit is reached. Temperature affects photosynthesis because the enzymes involved work best at an optimum temperature, usually around 25 to 35 degrees Celsius, and are denatured at high temperatures. A limiting factor is the factor that is in shortest supply and therefore controls the rate: for example, on a bright day with plenty of water, the rate may be limited by the low concentration of carbon dioxide in the air, which is only about 0.04%.",
      },
      {
        heading: "Water and Mineral Uptake",
        body: "Plants absorb water and mineral salts from the soil through their root hair cells, which have a large surface area and thin walls. Water is absorbed by osmosis, because the cell sap has a lower water potential than the soil water, while mineral salts are absorbed by active transport, because they often need to be taken up against a concentration gradient. Once inside the root, water and minerals travel up the plant in the xylem vessels, pulled up by transpiration — the loss of water vapour from the leaves.",
      },
    ],
    definitions: [
      { term: "Photosynthesis", meaning: "The process by which green plants make glucose from carbon dioxide and water using light energy." },
      { term: "Chlorophyll", meaning: "The green pigment in chloroplasts that traps light energy for photosynthesis." },
      { term: "Stoma", meaning: "A small pore in a leaf, controlled by guard cells, through which gases enter and leave." },
      { term: "Limiting factor", meaning: "The factor that is in shortest supply and therefore controls the rate of a process." },
      { term: "Transpiration", meaning: "The loss of water vapour from the leaves of a plant." },
      
    ],
    formulas: [
      "Photosynthesis: 6CO2 + 6H2O -> C6H12O6 + 6O2",
      "Word equation: carbon dioxide + water -> glucose + oxygen (in the presence of light and chlorophyll)",
      "Limiting factors: light intensity, carbon dioxide concentration, temperature",
      "Water uptake: osmosis through root hair cells",
      "Mineral uptake: active transport through root hair cells",
      "Transport: water and minerals in the xylem; food in the phloem",
    ],
    examples: [
      {
        title: "The starch test",
        problem: "Describe an experiment to show that light is necessary for photosynthesis.",
        steps: [
          "Take a potted plant and keep it in darkness for 48 hours to destarch its leaves.",
          "Cover part of one leaf with aluminium foil or black paper, leaving the rest exposed.",
          "Place the plant in bright light for several hours.",
          "Remove the leaf and test it for starch with iodine solution after boiling it in alcohol to remove the chlorophyll.",
          "The uncovered part turns blue-black (starch present) while the covered part stays brown, showing light is needed.",
        ],
        answer: "Only the part exposed to light produces starch, proving light is necessary for photosynthesis.",
      },
      {
        title: "Identifying the limiting factor",
        problem: "A plant is kept in bright light at 30 degrees Celsius, but the rate of photosynthesis is low. The carbon dioxide concentration is then increased and the rate rises sharply. What was the limiting factor?",
        steps: [
          "Light intensity is high, so light is not limiting.",
          "Temperature is 30 degrees Celsius, which is near the optimum, so temperature is not limiting.",
          "Increasing carbon dioxide increases the rate, which shows carbon dioxide was in short supply.",
          "The factor that controls the rate when it is in shortest supply is the limiting factor.",
          "Carbon dioxide concentration was the limiting factor.",
        ],
        answer: "Carbon dioxide concentration was the limiting factor.",
      },
    ],
    tips: [
      "Learn the photosynthesis equation in both word and chemical form — JAMB tests both.",
      "For leaf adaptation questions, always link the structure to the function, for example broad shape gives a large surface area for light absorption.",
      "Remember the destarching step in photosynthesis experiments — without it, starch from before would give a false result.",
      "Nitrate deficiency causes yellowing leaves and poor growth; magnesium deficiency also causes yellowing, because magnesium is needed for chlorophyll.",
    ],
    mistakes: [
      "Forgetting that oxygen is a by-product of photosynthesis, not the main product — the main product is glucose.",
      "Saying photosynthesis happens at night — it needs light, so it only happens during the day.",
      "Confusing transpiration with translocation — transpiration is water loss from leaves; translocation is food transport in the phloem.",
      "Saying water is absorbed by active transport — water is absorbed by osmosis; mineral salts are absorbed by active transport.",
    ],
    facts: [
      "Photosynthesis produces nearly all the oxygen in the atmosphere.",
      "The carbon dioxide concentration in the air is only about 0.04%.",
      "Chlorophyll is found in the chloroplasts of plant cells.",
      
      
    ],
    quiz: [
      {
        q: "What is the chemical equation for photosynthesis?",
        options: ["C6H12O6 + 6O2 -> 6CO2 + 6H2O", "6CO2 + 6H2O -> C6H12O6 + 6O2", "C6H12O6 -> 2C2H5OH + 2CO2", "6CO2 + 6H2O -> 6O2 + energy"],
        answer: 1,
        explanation: "Photosynthesis combines carbon dioxide and water to make glucose and oxygen.",
      },
      {
        q: "Where in the leaf is most photosynthesis carried out?",
        options: ["Upper epidermis", "Palisade mesophyll", "Spongy mesophyll", "Guard cells"],
        answer: 1,
        explanation: "Palisade mesophyll cells are packed with chloroplasts and receive the most light.",
      },
      {
        q: "Which mineral is needed to make chlorophyll?",
        options: ["Nitrate", "Phosphate", "Magnesium", "Potassium"],
        answer: 2,
        explanation: "Magnesium is a component of the chlorophyll molecule.",
      },
      {
        q: "How is water absorbed by root hair cells?",
        options: ["Active transport", "Diffusion", "Osmosis", "Transpiration"],
        answer: 2,
        explanation: "Water moves into root hair cells by osmosis, from the higher water potential of the soil to the lower water potential of the cell sap.",
      },
      {
        q: "Which tissue transports water up a plant?",
        options: ["Phloem", "Cambium", "Xylem", "Epidermis"],
        answer: 2,
        explanation: "Xylem vessels carry water and mineral salts from the roots to the leaves.",
      },
    ],
    status: "published",
  },
  {
    id: "biology-10",
    subjectId: "biology",
    topic: "Plant Biology and Classification",
    subtopic: "Classification and reproduction in plants",
    title: "Classification and Reproduction in Plants",
    order: 10,
    introduction: "Plants are classified by their structures, and flowering plants reproduce through pollination and fertilisation. This lesson covers the classification of living things, the differences between monocots and dicots, and the full story of plant reproduction and seed dispersal.",
    objectives: [
      "Explain the need for classification and name the main taxonomic groups",
      "Distinguish monocotyledonous from dicotyledonous plants",
      "Describe the structure of a flower and the functions of its parts",
      "Explain pollination, fertilisation and seed formation",
      "Compare wind and insect pollination"
    ],
    sections: [
      {
        heading: "Classification of Living Things",
        body: "Classification is the grouping of organisms according to their similarities and differences, which makes it easier to study them and to understand how they are related. The main taxonomic groups, from largest to smallest, are kingdom, phylum, class, order, family, genus and species, and the binomial system gives every organism a two-part scientific name, such as Homo sapiens for humans or Zea mays for maize. The five kingdoms are Monera (bacteria), Protista, Fungi, Plantae and Animalia. Plants are divided into groups such as algae, mosses, ferns, gymnosperms (cone-bearing plants) and angiosperms (flowering plants).",
      },
      {
        heading: "Monocots and Dicots",
        body: "Flowering plants are divided into two classes: monocotyledons (monocots) and dicotyledons (dicots). Monocots, such as maize, rice and yam, have one cotyledon (seed leaf) in the seed, parallel leaf veins, scattered vascular bundles in the stem, and flower parts in threes. Dicots, such as beans, groundnuts and mango, have two cotyledons, net-like leaf veins, vascular bundles arranged in a ring, and flower parts in fours or fives. Monocots usually have fibrous roots, while dicots have a tap root system. These differences are important in JAMB questions, which often ask you to identify a plant as a monocot or dicot from its features.",
      },
      {
        heading: "The Flower and Pollination",
        body: "The flower is the reproductive organ of an angiosperm. The sepals protect the flower bud, the petals attract insects, the stamens are the male parts, each made of an anther that produces pollen and a filament, and the carpel is the female part, made of a stigma that receives pollen, a style, and an ovary containing ovules. Pollination is the transfer of pollen from the anther to the stigma, and it can be carried out by wind or by insects.",
      },
      {
        heading: "Fertilisation, Seeds and Dispersal",
        body: "After pollination, a pollen grain germinates on the stigma and grows a pollen tube down the style to the ovule, where the male gamete fuses with the female gamete — this is fertilisation. The fertilised ovule becomes a seed, and the ovary becomes a fruit. Seeds need water, oxygen and a suitable temperature to germinate, and they contain a food store in the cotyledons or endosperm to feed the young plant until it can photosynthesise. Seeds are dispersed by wind (light seeds with wings or hairs, such as cotton), by water (floating fruits such as coconut), by animals (fleshy fruits that are eaten, or hooked fruits that cling to fur), and by explosive mechanisms (such as the pods of the flamboyant tree).",
      },
    ],
    definitions: [
      { term: "Classification", meaning: "The grouping of organisms according to their similarities and differences." },
      { term: "Species", meaning: "A group of organisms that can interbreed to produce fertile offspring." },
      { term: "Monocotyledon", meaning: "A flowering plant whose seed has one cotyledon, such as maize or rice." },
      { term: "Dicotyledon", meaning: "A flowering plant whose seed has two cotyledons, such as beans or groundnuts." },
      { term: "Pollination", meaning: "The transfer of pollen grains from the anther to the stigma of a flower." },
      
    ],
    formulas: [
      "Taxonomic order: kingdom -> phylum -> class -> order -> family -> genus -> species",
      "Binomial name: genus + species, e.g. Zea mays (maize)",
      "Monocot: 1 cotyledon, parallel veins, flower parts in 3s, fibrous roots",
      "Dicot: 2 cotyledons, net veins, flower parts in 4s or 5s, tap root",
      "Pollination: anther -> stigma; fertilisation: pollen tube -> ovule",
      "Seed dispersal: wind, water, animals, explosive mechanisms",
    ],
    examples: [
      {
        title: "Identifying a monocot or dicot",
        problem: "A plant has parallel leaf veins, flower parts in threes and fibrous roots. Is it a monocot or a dicot? Give reasons.",
        steps: [
          "Parallel leaf veins are a feature of monocots; dicots have net-like veins.",
          "Flower parts in threes are a monocot feature; dicots have parts in fours or fives.",
          "Fibrous roots are typical of monocots; dicots usually have a tap root.",
          "All three features point the same way.",
          "The plant is a monocotyledon.",
        ],
        answer: "A monocot, because of the parallel veins, flower parts in threes and fibrous roots.",
      },
      {
        title: "Wind versus insect pollination",
        problem: "A flower is small, dull green, has no scent and produces large amounts of light pollen. How is it pollinated, and why?",
        steps: [
          "Insect-pollinated flowers are usually bright, scented and produce nectar to attract insects.",
          "This flower is small, dull and scentless, so it does not attract insects.",
          "It produces large amounts of light pollen, which is easily carried by the wind.",
          "These features are typical of wind-pollinated flowers such as grasses and maize.",
          "The flower is wind-pollinated.",
        ],
        answer: "Wind-pollinated: small, dull, scentless flowers with light, abundant pollen.",
      },
    ],
    tips: [
      "Learn the monocot versus dicot table — it is one of the most tested topics in JAMB biology.",
      "Remember the taxonomic order with a mnemonic: King Philip Came Over For Good Soup (Kingdom, Phylum, Class, Order, Family, Genus, Species).",
      "For pollination questions, look at the flower's features: bright and scented means insect; small and dull with lots of light pollen means wind.",
      "Germination needs water, oxygen and warmth — all three, every time.",
    ],
    mistakes: [
      "Saying pollination and fertilisation are the same — pollination is the transfer of pollen; fertilisation is the fusion of gametes.",
      "Confusing monocots and dicots — check the number of cotyledons first.",
      "Forgetting that a fruit develops from the ovary and a seed from the ovule.",
      "Saying seeds need light to germinate — most seeds need water, oxygen and warmth, not light.",
    ],
    facts: [
      "Maize is a monocotyledon; beans are dicotyledons.",
      "The scientific name of humans is Homo sapiens.",
      "The five kingdoms are Monera, Protista, Fungi, Plantae and Animalia.",
      
      
    ],
    quiz: [
      {
        q: "Which of these is a monocotyledon?",
        options: ["Beans", "Groundnut", "Maize", "Mango"],
        answer: 2,
        explanation: "Maize has one cotyledon, parallel veins and flower parts in threes, so it is a monocot.",
      },
      {
        q: "What is pollination?",
        options: ["The fusion of gametes", "The transfer of pollen from anther to stigma", "The formation of seeds", "The opening of a flower"],
        answer: 1,
        explanation: "Pollination is the transfer of pollen grains from the anther to the stigma.",
      },
      {
        q: "Which part of the flower develops into a fruit?",
        options: ["Ovule", "Stigma", "Ovary", "Anther"],
        answer: 2,
        explanation: "After fertilisation, the ovary develops into the fruit and the ovules become seeds.",
      },
      {
        q: "What conditions are needed for a seed to germinate?",
        options: ["Light, water and oxygen", "Water, oxygen and a suitable temperature", "Light, carbon dioxide and water", "Oxygen, carbon dioxide and warmth"],
        answer: 1,
        explanation: "Germination needs water to activate enzymes, oxygen for respiration and a suitable temperature.",
      },
      {
        q: "Which of these is a feature of a wind-pollinated flower?",
        options: ["Brightly coloured petals", "Scented flowers", "Large amounts of light pollen", "Sticky pollen"],
        answer: 2,
        explanation: "Wind-pollinated flowers produce large amounts of light, smooth pollen that is easily carried by the wind.",
      },
    ],
    status: "published",
  },
];
