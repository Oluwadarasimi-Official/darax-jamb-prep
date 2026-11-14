import { SubjectDef, Lesson } from "./types";

export const SUBJECT: SubjectDef = {
  id: "chemistry",
  name: "Chemistry",
  short: "CHEM",
  colour: "#0ea5e9",
  tagline: "Master matter, reactions and the mole — the JAMB way.",
  description: "A complete JAMB Chemistry course covering atomic structure, stoichiometry, acids and bases, organic chemistry and electrochemistry, with worked calculations, exam tips and original practice questions in every lesson.",
  topics: [
    "Atomic Structure and Bonding",
    "Stoichiometry and the Mole Concept",
    "Acids, Bases and Salts",
    "Organic Chemistry",
    "Electrochemistry and Reaction Rates",
  ],
};

export const LESSONS: Lesson[] = [
  {
    id: "chemistry-01",
    subjectId: "chemistry",
    topic: "Atomic Structure and Bonding",
    subtopic: "Atomic structure and the periodic table",
    title: "Atomic Structure and the Periodic Table",
    order: 1,
    introduction: "Everything around you is made of atoms, and the periodic table is the map that organises them. This lesson explains protons, neutrons and electrons, electronic configuration, and how the position of an element in the table predicts its behaviour.",
    objectives: [
      "Describe the structure of the atom and state the charges and masses of its subatomic particles",
      "Write electronic configurations for elements up to calcium and for common ions",
      "Explain isotopes and calculate relative atomic mass from isotopic abundances",
      "Describe the layout of the periodic table in terms of groups, periods and blocks",
      "Relate an element's group and period to its electronic configuration and chemical behaviour"
    ],
    sections: [
      {
        heading: "The Structure of the Atom",
        body: "An atom is the smallest particle of an element that can take part in a chemical reaction. At its centre is a tiny, dense nucleus containing protons, which carry a positive charge, and neutrons, which carry no charge. Around the nucleus, electrons move in energy levels or shells; each electron carries a negative charge and has a mass about 1/1840 that of a proton. The atomic number (Z) of an element is the number of protons in its nucleus, and it is this number that identifies the element.",
      },
      {
        heading: "Electronic Configuration",
        body: "Electrons occupy shells in order of increasing energy, and each shell can hold a maximum number of electrons given by 2n squared, where n is the shell number. The first shell holds at most 2 electrons, the second 8 and the third 8 for the elements up to calcium in the JAMB syllabus. Sodium (atomic number 11) has the configuration 2,8,1, which means it has one electron in its outer shell and readily loses it to form a sodium ion, Na+.",
      },
      {
        heading: "Isotopes and Relative Atomic Mass",
        body: "Isotopes are atoms of the same element that have the same number of protons but different numbers of neutrons, so they have the same atomic number but different mass numbers. Chlorine, for example, exists as chlorine-35 and chlorine-37 in the ratio of about 3 to 1, which is why the relative atomic mass of chlorine is about 35.5 rather than a whole number. The relative atomic mass of an element is the weighted average of the masses of its isotopes, taking their abundances into account.",
      },
      {
        heading: "The Periodic Table and Its Trends",
        body: "The modern periodic table arranges elements in order of increasing atomic number. A group is a vertical column, and elements in the same group have the same number of outer-shell electrons, which gives them similar chemical properties. A period is a horizontal row, and elements in the same period have the same number of occupied electron shells. Across a period, atomic radius decreases because the increasing nuclear charge pulls the electrons in more strongly, while ionisation energy generally increases. Down a group, atomic radius increases as new shells are added, and ionisation energy decreases because the outer electrons are further from the nucleus and more shielded.",
      },
    ],
    definitions: [
      { term: "Atomic number (Z)", meaning: "The number of protons in the nucleus of an atom; it identifies the element." },
      { term: "Mass number (A)", meaning: "The total number of protons and neutrons in the nucleus of an atom." },
      { term: "Isotopes", meaning: "Atoms of the same element with the same atomic number but different mass numbers, due to different numbers of neutrons." },
      { term: "Valence electrons", meaning: "The electrons in the outermost shell of an atom, which take part in chemical reactions." },
      { term: "Ionisation energy", meaning: "The energy required to remove one mole of electrons from one mole of gaseous atoms to form one mole of gaseous ions." },
      
    ],
    formulas: [
      "Number of neutrons = mass number - atomic number (A - Z)",
      "Maximum electrons in a shell = 2n squared",
      "Relative atomic mass = (mass of isotope 1 x abundance 1 + mass of isotope 2 x abundance 2) / 100",
      "Group number = number of valence electrons (for main-group elements)",
      "Period number = number of occupied electron shells",
      "Atomic radius decreases across a period and increases down a group",
    ],
    examples: [
      {
        title: "Finding the number of neutrons",
        problem: "An atom of aluminium has atomic number 13 and mass number 27. How many protons, neutrons and electrons does it contain?",
        steps: [
          "The atomic number Z = 13, so the number of protons is 13.",
          "In a neutral atom, the number of electrons equals the number of protons, so electrons = 13.",
          "The mass number A = 27, so neutrons = A - Z = 27 - 13.",
          "Calculate: 27 - 13 = 14.",
          "The atom therefore has 13 protons, 14 neutrons and 13 electrons.",
        ],
        answer: "13 protons, 14 neutrons and 13 electrons.",
      },
      {
        title: "Calculating relative atomic mass",
        problem: "Chlorine has two isotopes: chlorine-35 with 75% abundance and chlorine-37 with 25% abundance. Calculate the relative atomic mass of chlorine.",
        steps: [
          "Relative atomic mass = (35 x 75 + 37 x 25) / 100.",
          "Calculate 35 x 75 = 2625.",
          "Calculate 37 x 25 = 925.",
          "Add: 2625 + 925 = 3550.",
          "Divide by 100: 3550 / 100 = 35.5.",
        ],
        answer: "The relative atomic mass of chlorine is 35.5.",
      },
    ],
    tips: [
      "Learn the first 20 elements and their electronic configurations by heart; most JAMB questions on this topic use them.",
      "Remember that the group number equals the number of valence electrons only for the main groups (Groups I to VIII).",
      "When calculating relative atomic mass, always multiply each isotope mass by its percentage abundance and divide by 100.",
      "Noble gases have a full outer shell, so they have the highest ionisation energies in their periods.",
    ],
    mistakes: [
      "Confusing atomic number with mass number when working out the number of neutrons.",
      "Writing the electronic configuration of an ion as if it were the neutral atom — remove or add electrons first.",
      "Forgetting that chlorine's relative atomic mass is 35.5 because it is a weighted average, not a single isotope mass.",
      "Assuming ionisation energy always increases across a period without exception — there are small dips at Groups III and VI.",
    ],
    facts: [
      "The nucleus contains over 99.9% of the mass of an atom but occupies a tiny fraction of its volume.",
      "Hydrogen is the lightest element and has only one proton and one electron.",
      "The periodic table contains 118 elements, of which 92 occur naturally.",
      
      
    ],
    quiz: [
      {
        q: "What is the number of neutrons in an atom of potassium-39 (atomic number 19)?",
        options: ["19", "20", "39", "58"],
        answer: 1,
        explanation: "Neutrons = mass number - atomic number = 39 - 19 = 20.",
      },
      {
        q: "Which electronic configuration belongs to an element in Group II?",
        options: ["2,8,1", "2,8,2", "2,8,7", "2,8,8"],
        answer: 1,
        explanation: "Group II elements have 2 valence electrons, so the configuration ends in 2.",
      },
      {
        q: "Which pair of atoms are isotopes of the same element?",
        options: ["Carbon-12 and nitrogen-14", "Oxygen-16 and oxygen-18", "Sodium-23 and magnesium-24", "Hydrogen-1 and helium-4"],
        answer: 1,
        explanation: "Isotopes have the same atomic number; oxygen-16 and oxygen-18 are both oxygen.",
      },
      {
        q: "Which trend is correct across a period from left to right?",
        options: ["Atomic radius increases", "Ionisation energy generally increases", "Number of shells increases", "Electronegativity decreases"],
        answer: 1,
        explanation: "Across a period, increasing nuclear charge pulls electrons closer, so ionisation energy generally increases.",
      },
      {
        q: "An element has the electronic configuration 2,8,5. Which group does it belong to?",
        options: ["Group III", "Group V", "Group VII", "Group VIII"],
        answer: 1,
        explanation: "The element has 5 valence electrons, so it is in Group V.",
      },
    ],
    status: "published",
  },
  {
    id: "chemistry-02",
    subjectId: "chemistry",
    topic: "Atomic Structure and Bonding",
    subtopic: "Chemical bonding",
    title: "Chemical Bonding",
    order: 2,
    introduction: "Atoms rarely exist alone — they bond to form the substances around us. This lesson covers ionic, covalent and metallic bonding, explains why different substances have such different properties, and introduces intermolecular forces and the shapes of simple molecules.",
    objectives: [
      "Explain why atoms form chemical bonds in terms of achieving a stable outer shell",
      "Describe ionic bonding and explain the properties of ionic compounds",
      "Describe covalent bonding and distinguish single, double and triple bonds",
      "Describe metallic bonding and relate it to the properties of metals",
      "Explain hydrogen bonding, van der Waals forces and their effects on boiling points"
    ],
    sections: [
      {
        heading: "Why Atoms Bond",
        body: "Atoms bond because doing so gives them a more stable electronic arrangement, usually a full outer shell of eight electrons, known as the octet rule. A metal atom with one or two outer electrons can achieve stability by losing them, while a non-metal atom can gain electrons or share them to complete its outer shell. The type of bond formed depends on the elements involved: metals reacting with non-metals usually form ionic bonds, non-metals reacting with each other usually form covalent bonds, and metal atoms bonded to each other form metallic bonds.",
      },
      {
        heading: "Ionic Bonding",
        body: "Ionic bonding occurs when electrons are transferred from a metal atom to a non-metal atom, producing oppositely charged ions that attract each other strongly. In sodium chloride, sodium loses one electron to form Na+ and chlorine gains one electron to form Cl-, and the ions arrange themselves in a regular giant lattice held together by strong electrostatic forces in all directions. Because of these strong forces, ionic compounds have high melting and boiling points, and they conduct electricity only when molten or dissolved in water, when the ions are free to move.",
      },
      {
        heading: "Covalent Bonding",
        body: "Covalent bonding occurs when two non-metal atoms share one or more pairs of electrons so that both achieve a full outer shell. A single covalent bond, as in hydrogen gas (H-H), shares one pair; a double bond, as in oxygen (O=O), shares two pairs; and a triple bond, as in nitrogen, shares three pairs. Simple covalent molecules such as water and carbon dioxide are held together by weak intermolecular forces, so they usually have low melting and boiling points and do not conduct electricity.",
      },
      {
        heading: "Metallic Bonding and Intermolecular Forces",
        body: "In metallic bonding, metal atoms lose their outer electrons to form a sea of delocalised electrons surrounding positive metal ions, and the strong attraction between the ions and the electron sea holds the metal together. This explains why metals conduct electricity and heat well, are malleable and ductile, and generally have high melting points. Between molecules there are weaker forces: van der Waals forces act between all molecules, and hydrogen bonding is a stronger force that occurs when hydrogen is bonded to nitrogen, oxygen or fluorine, as in water.",
      },
      {
        heading: "Shapes of Molecules",
        body: "The shape of a molecule is determined by the repulsion between pairs of electrons around the central atom, because electron pairs arrange themselves as far apart as possible. Methane (CH4) has four bonding pairs and no lone pairs, so it is tetrahedral with bond angles of 109.5 degrees. Ammonia (NH3) has three bonding pairs and one lone pair, giving a trigonal pyramidal shape, while water (H2O) has two bonding pairs and two lone pairs, giving a bent or V-shaped molecule.",
      },
    ],
    definitions: [
      { term: "Ionic bond", meaning: "The strong electrostatic attraction between oppositely charged ions formed by the transfer of electrons from a metal to a non-metal." },
      { term: "Covalent bond", meaning: "A bond formed when two atoms share a pair of electrons." },
      { term: "Metallic bond", meaning: "The attraction between positive metal ions and the sea of delocalised electrons around them." },
      { term: "Hydrogen bond", meaning: "A strong intermolecular force between a hydrogen atom bonded to nitrogen, oxygen or fluorine and a lone pair on a nearby nitrogen, oxygen or fluorine atom." },
      { term: "Lattice", meaning: "A regular, repeating three-dimensional arrangement of ions or atoms in a solid." },
      
    ],
    formulas: [
      "Ionic bond: metal loses electrons, non-metal gains electrons (e.g. Na + Cl -> Na+ Cl-)",
      "Covalent bond: shared electron pairs (single, double or triple)",
      "Octet rule: atoms bond to achieve eight electrons in the outer shell",
      "Hydrogen bonding occurs when H is bonded to N, O or F",
      "CH4 is tetrahedral; NH3 is trigonal pyramidal; H2O is bent",
      "Giant ionic lattice: strong forces in all directions, high melting point",
    ],
    examples: [
      {
        title: "Ionic or covalent?",
        problem: "Predict the type of bonding in (a) magnesium oxide, MgO, and (b) carbon dioxide, CO2. Give a reason in each case.",
        steps: [
          "Magnesium is a metal and oxygen is a non-metal.",
          "A metal reacting with a non-metal transfers electrons, so MgO is ionic.",
          "Carbon and oxygen are both non-metals.",
          "Two non-metals share electrons, so CO2 is covalent.",
          "In CO2 each oxygen shares two pairs of electrons with carbon, forming double bonds.",
        ],
        answer: "(a) MgO is ionic (metal + non-metal). (b) CO2 is covalent (two non-metals).",
      },
      {
        title: "Why does sodium chloride not conduct when solid?",
        problem: "Explain why solid sodium chloride does not conduct electricity but molten sodium chloride does.",
        steps: [
          "Electricity is conducted by the movement of charged particles.",
          "In solid sodium chloride the Na+ and Cl- ions are held in fixed positions in the lattice.",
          "The ions cannot move, so no current can flow through the solid.",
          "On melting, the lattice breaks down and the ions become free to move.",
          "The mobile ions carry charge, so molten sodium chloride conducts electricity.",
        ],
        answer: "The ions are fixed in the solid but free to move in the melt, so only the molten salt conducts.",
      },
    ],
    tips: [
      "If a question asks why ionic compounds have high melting points, mention the strong electrostatic forces in the giant lattice that need a lot of energy to break.",
      "Learn the three molecules with hydrogen bonding: water, ammonia and hydrogen fluoride — and that hydrogen bonding needs N, O or F.",
      "Graphite conducts electricity but diamond does not, because graphite has delocalised electrons and diamond does not.",
      "For molecule shapes, count the bonding pairs and lone pairs around the central atom first, then name the shape.",
    ],
    mistakes: [
      "Saying that covalent molecules have weak covalent bonds — the covalent bonds inside a molecule are strong; the weak forces are BETWEEN molecules.",
      "Claiming that ionic compounds conduct electricity when solid — they only conduct when molten or in solution.",
      "Forgetting that hydrogen bonding requires hydrogen attached to N, O or F — hydrogen bonded to carbon does not hydrogen bond.",
      "Confusing the shape of ammonia (trigonal pyramidal) with the shape of methane (tetrahedral).",
    ],
    facts: [
      "Diamond is the hardest naturally occurring substance because every carbon atom is bonded to four others.",
      "Water has an unusually high boiling point for its size because of hydrogen bonding.",
      "Metals are malleable because layers of ions can slide over each other without breaking the metallic bond.",
      
      
    ],
    quiz: [
      {
        q: "Which substance is held together by ionic bonding?",
        options: ["Carbon dioxide", "Sodium chloride", "Methane", "Oxygen gas"],
        answer: 1,
        explanation: "Sodium chloride is formed from a metal and a non-metal by electron transfer, so it is ionic.",
      },
      {
        q: "Why does graphite conduct electricity?",
        options: ["It has free ions", "It has delocalised electrons", "It has a giant ionic lattice", "It melts easily"],
        answer: 1,
        explanation: "Graphite has delocalised electrons between its layers that can move and carry charge.",
      },
      {
        q: "What is the shape of a water molecule?",
        options: ["Linear", "Tetrahedral", "Bent", "Trigonal planar"],
        answer: 2,
        explanation: "Water has two bonding pairs and two lone pairs, giving a bent shape.",
      },
      {
        q: "Which compound can form hydrogen bonds between its molecules?",
        options: ["CH4", "NH3", "CO2", "HCl"],
        answer: 1,
        explanation: "Ammonia has hydrogen bonded to nitrogen, which allows hydrogen bonding.",
      },
      {
        q: "Which property is typical of ionic compounds?",
        options: ["Low melting point", "Conduct electricity when solid", "High melting point", "Insoluble in water"],
        answer: 2,
        explanation: "Strong forces in the giant ionic lattice give ionic compounds high melting points.",
      },
    ],
    status: "published",
  },
  {
    id: "chemistry-03",
    subjectId: "chemistry",
    topic: "Stoichiometry and the Mole Concept",
    subtopic: "Mole, molar mass and concentration",
    title: "The Mole, Molar Mass and Concentration",
    order: 3,
    introduction: "Chemists count particles by the mole, because atoms are far too small to count one by one. This lesson explains the mole, molar mass, Avogadro's number and molar concentration, and shows how to use them in calculations that appear in almost every JAMB chemistry paper.",
    objectives: [
      "Define the mole and state Avogadro's number",
      "Calculate molar mass from relative atomic masses",
      "Convert between mass, number of moles and number of particles",
      "Calculate molar concentration and prepare standard solutions",
      "Use the dilution formula to calculate concentrations after dilution"
    ],
    sections: [
      {
        heading: "The Mole and Avogadro's Number",
        body: "One mole of any substance contains exactly 6.02 x 10^23 particles, a number known as Avogadro's constant. This means one mole of carbon atoms, one mole of water molecules and one mole of sodium ions all contain the same number of particles, even though their masses are different. The mole allows chemists to weigh out a known number of particles on an ordinary balance: the mass of one mole of a substance is its molar mass, expressed in grams per mole.",
      },
      {
        heading: "Molar Mass and Relative Molecular Mass",
        body: "The relative atomic mass of an element is the average mass of its atoms compared with one-twelfth of the mass of a carbon-12 atom, and the relative molecular mass of a compound is the sum of the relative atomic masses of all the atoms in its formula. Sodium chloride, NaCl, has a relative formula mass of 23 + 35.5 = 58.5, so one mole of NaCl has a mass of 58.5 g. For ionic compounds the term relative formula mass is used instead of relative molecular mass, because ionic compounds do not exist as separate molecules.",
      },
      {
        heading: "Molar Concentration",
        body: "Concentration tells us how much solute is dissolved in a given volume of solution, and the standard unit is moles per cubic decimetre (mol/dm3). The number of moles in a solution equals the concentration multiplied by the volume in cubic decimetres, so a 1 mol/dm3 solution contains one mole of solute in every cubic decimetre. Concentrations can also be expressed in grams per cubic decimetre, and you can convert between the two using the molar mass. A standard solution is one whose concentration is accurately known, and it is prepared by dissolving an exact mass of solute in a volumetric flask and making the solution up to the mark.",
      },
      {
        heading: "Dilution and Gas Volumes",
        body: "When a solution is diluted, the number of moles of solute stays the same while the volume increases, so the concentration falls. This gives the dilution relationship C1V1 = C2V2, where C is concentration and V is volume. One mole of any gas at standard temperature and pressure (0 degrees Celsius and 1 atmosphere) occupies 22.4 dm3, so the volume of a gas can be converted to moles by dividing by 22.4. At room temperature and pressure, one mole of gas occupies about 24 dm3.",
      },
    ],
    definitions: [
      { term: "Mole", meaning: "The amount of substance that contains 6.02 x 10^23 particles." },
      { term: "Avogadro's constant", meaning: "6.02 x 10^23, the number of particles in one mole of any substance." },
      { term: "Molar mass", meaning: "The mass of one mole of a substance, in grams per mole (g/mol)." },
      { term: "Relative molecular mass", meaning: "The sum of the relative atomic masses of all the atoms in a molecule." },
      { term: "Molar concentration", meaning: "The number of moles of solute dissolved in one cubic decimetre of solution (mol/dm3)." },
      
    ],
    formulas: [
      "n = m / M (number of moles = mass / molar mass)",
      "Number of particles = n x 6.02 x 10^23",
      "Concentration (mol/dm3) = number of moles / volume (dm3)",
      "C1V1 = C2V2 (dilution formula)",
      "Volume of gas at s.t.p. = n x 22.4 dm3",
      "Concentration (g/dm3) = concentration (mol/dm3) x molar mass",
      "Mass = n x M",
    ],
    examples: [
      {
        title: "Moles from mass",
        problem: "Calculate the number of moles in 20 g of calcium carbonate, CaCO3. (Ca = 40, C = 12, O = 16)",
        steps: [
          "Molar mass of CaCO3 = 40 + 12 + (3 x 16) = 100 g/mol.",
          "Use n = m / M.",
          "Substitute: n = 20 / 100.",
          "Calculate: 20 / 100 = 0.2.",
          "The sample contains 0.2 moles of CaCO3.",
        ],
        answer: "0.2 moles.",
      },
      {
        title: "Concentration of a solution",
        problem: "4.0 g of sodium hydroxide, NaOH, is dissolved in water and made up to 250 cm3 of solution. Calculate the concentration in mol/dm3. (Na = 23, O = 16, H = 1)",
        steps: [
          "Molar mass of NaOH = 23 + 16 + 1 = 40 g/mol.",
          "Number of moles = 4.0 / 40 = 0.1 mol.",
          "Convert volume: 250 cm3 = 0.25 dm3.",
          "Concentration = moles / volume = 0.1 / 0.25.",
          "Calculate: 0.1 / 0.25 = 0.4 mol/dm3.",
        ],
        answer: "0.4 mol/dm3.",
      },
    ],
    tips: [
      "Always convert cm3 to dm3 by dividing by 1000 before using the concentration formula.",
      "Write down the molar mass calculation step by step — most mole errors come from a wrong molar mass.",
      "For gas volume questions, check whether the question uses s.t.p. (22.4 dm3) or room temperature (24 dm3).",
      "In dilution questions, remember that the moles of solute do not change — only the volume does.",
    ],
    mistakes: [
      "Using the volume in cm3 directly in the formula concentration = moles / volume without converting to dm3.",
      "Using relative molecular mass where relative formula mass is needed for ionic compounds (the calculation is the same, but the name matters).",
      "Forgetting to multiply the relative atomic mass of oxygen by 3 in CaCO3.",
      "Mixing up mass and moles — the formula n = m / M gives moles, not mass.",
    ],
    facts: [
      "One mole of any gas at s.t.p. occupies 22.4 dm3.",
      "Avogadro's constant is 6.02 x 10^23 particles per mole.",
      "The relative atomic mass of carbon-12 is defined as exactly 12.",
      
      
    ],
    quiz: [
      {
        q: "How many moles are in 8 g of methane, CH4? (C = 12, H = 1)",
        options: ["0.25 mol", "0.5 mol", "1 mol", "2 mol"],
        answer: 1,
        explanation: "Molar mass of CH4 = 16 g/mol, so n = 8 / 16 = 0.5 mol.",
      },
      {
        q: "What is the concentration of a solution containing 0.2 mol of solute in 500 cm3 of solution?",
        options: ["0.1 mol/dm3", "0.4 mol/dm3", "1.0 mol/dm3", "2.5 mol/dm3"],
        answer: 1,
        explanation: "500 cm3 = 0.5 dm3, so concentration = 0.2 / 0.5 = 0.4 mol/dm3.",
      },
      {
        q: "How many particles are in 2 moles of oxygen molecules?",
        options: ["6.02 x 10^23", "1.204 x 10^24", "3.01 x 10^23", "2.408 x 10^24"],
        answer: 1,
        explanation: "Particles = 2 x 6.02 x 10^23 = 1.204 x 10^24.",
      },
      {
        q: "What volume does 0.5 mol of carbon dioxide occupy at s.t.p.?",
        options: ["5.6 dm3", "11.2 dm3", "22.4 dm3", "44.8 dm3"],
        answer: 1,
        explanation: "Volume = 0.5 x 22.4 = 11.2 dm3.",
      },
      {
        q: "What is the molar mass of sulfuric acid, H2SO4? (H = 1, S = 32, O = 16)",
        options: ["49 g/mol", "82 g/mol", "98 g/mol", "114 g/mol"],
        answer: 2,
        explanation: "Molar mass = (2 x 1) + 32 + (4 x 16) = 2 + 32 + 64 = 98 g/mol.",
      },
    ],
    status: "published",
  },
  {
    id: "chemistry-04",
    subjectId: "chemistry",
    topic: "Stoichiometry and the Mole Concept",
    subtopic: "Chemical equations and calculations",
    title: "Chemical Equations and Stoichiometric Calculations",
    order: 4,
    introduction: "A balanced chemical equation is a recipe: it tells you the exact mole ratio in which substances react and are produced. This lesson teaches you to balance equations and use them to calculate masses, volumes and percentage yields — the most calculation-heavy part of JAMB chemistry.",
    objectives: [
      "Write word equations and balanced symbol equations including state symbols",
      "Use the mole ratio from a balanced equation to calculate reacting masses",
      "Calculate the volume of gas produced or used in a reaction at s.t.p.",
      "Identify the limiting reactant in a reaction",
      "Calculate percentage yield and percentage purity"
    ],
    sections: [
      {
        heading: "Balancing Chemical Equations",
        body: "A chemical equation must be balanced so that the number of atoms of each element is the same on both sides, because atoms are neither created nor destroyed in a chemical reaction. To balance an equation, adjust the coefficients (the numbers in front of formulas) but never change the subscripts inside a formula, because that would change the substance. State symbols show the physical state of each substance: (s) for solid, (l) for liquid, (g) for gas and (aq) for aqueous solution.",
      },
      {
        heading: "Using Mole Ratios",
        body: "The coefficients in a balanced equation give the ratio of moles in which substances react. In the equation 2H2 + O2 -> 2H2O, two moles of hydrogen react with one mole of oxygen to produce two moles of water. To solve a calculation, first convert any given mass or volume to moles, then use the mole ratio from the equation to find the moles of the substance asked about, and finally convert back to mass or volume. This three-step method — moles, ratio, convert — works for every stoichiometric calculation, whether the question asks for a reacting mass, a gas volume or a concentration.",
      },
      {
        heading: "Limiting Reactant and Percentage Yield",
        body: "When two reactants are mixed, one of them usually runs out first, and that reactant is called the limiting reactant because it limits the amount of product that can form. To identify it, calculate the number of moles of each reactant and compare them with the mole ratio in the equation. The theoretical yield is the maximum mass of product expected from the calculation, while the actual yield is what is obtained in practice, which is usually less because of incomplete reactions or losses during separation.",
      },
      {
        heading: "The Law of Conservation of Mass",
        body: "The law of conservation of mass states that the total mass of the reactants equals the total mass of the products in a chemical reaction, because no atoms are created or destroyed. This is why equations must balance, and it provides a useful check on your calculations: if the mass of the products does not match the mass of the reactants, something has gone wrong. In a reaction that produces a gas, the mass of the reaction mixture decreases because the gas escapes, which can make it look as though mass has been lost.",
      },
    ],
    definitions: [
      { term: "Stoichiometry", meaning: "The study of the quantitative relationships between reactants and products in a chemical reaction." },
      { term: "Limiting reactant", meaning: "The reactant that is completely used up first in a reaction, limiting the amount of product formed." },
      { term: "Theoretical yield", meaning: "The maximum mass of product that could be formed from given amounts of reactants, calculated from the equation." },
      { term: "Percentage yield", meaning: "Actual yield divided by theoretical yield, multiplied by 100." },
      { term: "State symbol", meaning: "A symbol in brackets after a formula showing its physical state: (s), (l), (g) or (aq)." },
      
    ],
    formulas: [
      "Percentage yield = (actual yield / theoretical yield) x 100",
      "Percentage purity = (mass of pure substance / mass of impure sample) x 100",
      "Mole ratio from the balanced equation coefficients",
      "Mass of product = moles of product x molar mass of product",
      "Volume of gas at s.t.p. = moles x 22.4 dm3",
      "Total mass of reactants = total mass of products",
    ],
    examples: [
      {
        title: "Mass of product from a reacting mass",
        problem: "Calculate the mass of carbon dioxide produced when 10 g of calcium carbonate decomposes: CaCO3 -> CaO + CO2. (CaCO3 = 100 g/mol, CO2 = 44 g/mol)",
        steps: [
          "Moles of CaCO3 = 10 / 100 = 0.1 mol.",
          "From the equation, 1 mole of CaCO3 produces 1 mole of CO2.",
          "Moles of CO2 = 0.1 mol.",
          "Mass of CO2 = 0.1 x 44 = 4.4 g.",
          "The decomposition of 10 g of CaCO3 produces 4.4 g of CO2.",
        ],
        answer: "4.4 g of carbon dioxide.",
      },
      {
        title: "Gas volume from a reaction",
        problem: "What volume of hydrogen gas at s.t.p. is produced when 6.5 g of zinc reacts with excess dilute hydrochloric acid? Zn + 2HCl -> ZnCl2 + H2. (Zn = 65)",
        steps: [
          "Moles of zinc = 6.5 / 65 = 0.1 mol.",
          "From the equation, 1 mole of zinc produces 1 mole of hydrogen.",
          "Moles of hydrogen = 0.1 mol.",
          "Volume at s.t.p. = 0.1 x 22.4 = 2.24 dm3.",
          "The volume of hydrogen produced is 2.24 dm3.",
        ],
        answer: "2.24 dm3 of hydrogen at s.t.p.",
      },
    ],
    tips: [
      "Always balance the equation first — an unbalanced equation gives a wrong mole ratio and a wrong answer.",
      "Use the three-step method: convert to moles, apply the ratio, convert to the required unit.",
      "Check your answer with conservation of mass where possible — the masses should add up.",
      "For gas volumes, use 22.4 dm3 per mole at s.t.p. unless the question says otherwise.",
    ],
    mistakes: [
      "Changing subscripts in a formula to balance an equation — only coefficients may be changed.",
      "Forgetting state symbols in equations, which JAMB often asks for.",
      "Using the mass ratio instead of the mole ratio when comparing reactants.",
      "Calculating percentage yield as theoretical yield divided by actual yield — it is the other way round.",
    ],
    facts: [
      "The coefficients in a balanced equation give mole ratios, not mass ratios.",
      "A reaction can never give more product than the theoretical yield.",
      "Excess reactant is the reactant left over after the limiting reactant is used up.",
      
      
    ],
    quiz: [
      {
        q: "In the equation 2H2 + O2 -> 2H2O, how many moles of water are produced from 4 moles of hydrogen?",
        options: ["1 mol", "2 mol", "4 mol", "8 mol"],
        answer: 2,
        explanation: "The ratio is 2 moles of H2 to 2 moles of H2O, so 4 moles of H2 gives 4 moles of H2O.",
      },
      {
        q: "What is the percentage yield if the actual yield is 9 g and the theoretical yield is 12 g?",
        options: ["33%", "75%", "80%", "133%"],
        answer: 1,
        explanation: "Percentage yield = (9 / 12) x 100 = 75%.",
      },
      {
        q: "Which reactant determines the maximum amount of product formed?",
        options: ["The reactant in excess", "The limiting reactant", "The catalyst", "The solvent"],
        answer: 1,
        explanation: "The limiting reactant runs out first and so limits the amount of product.",
      },
      {
        q: "What does the state symbol (aq) mean in a chemical equation?",
        options: ["Solid", "Liquid", "Gas", "Dissolved in water"],
        answer: 3,
        explanation: "(aq) means aqueous, that is, dissolved in water.",
      },
      {
        q: "What mass of water is produced when 2 moles of hydrogen burn completely in oxygen? (H2O = 18 g/mol)",
        options: ["9 g", "18 g", "36 g", "72 g"],
        answer: 2,
        explanation: "2 moles of H2 produce 2 moles of H2O, so mass = 2 x 18 = 36 g.",
      },
    ],
    status: "published",
  },
  {
    id: "chemistry-05",
    subjectId: "chemistry",
    topic: "Acids, Bases and Salts",
    subtopic: "Properties and pH",
    title: "Acids, Bases and the pH Scale",
    order: 5,
    introduction: "Acids and bases are everywhere — in food, in cleaning products and in your own stomach. This lesson explains what makes a substance acidic or alkaline, how the pH scale works, and how strong and weak acids differ, with the calculations JAMB loves to test.",
    objectives: [
      "Define acids and bases using the Arrhenius and Bronsted-Lowry theories",
      "Identify common acids, bases and alkalis and state their properties",
      "Explain the pH scale and calculate pH from hydrogen ion concentration",
      "Distinguish strong acids from weak acids and strong bases from weak bases",
      "Describe the reactions of acids with metals, bases, carbonates and hydrogencarbonates"
    ],
    sections: [
      {
        heading: "What Are Acids and Bases?",
        body: "An acid is a substance that produces hydrogen ions (H+) when dissolved in water, according to the Arrhenius theory, while a base is a substance that neutralises an acid. The Bronsted-Lowry theory is more general: an acid is a proton donor and a base is a proton acceptor, so in the reaction HCl + NH3 -> NH4+ + Cl-, hydrogen chloride donates a proton and is the acid, while ammonia accepts it and is the base. Common acids include hydrochloric acid, sulfuric acid and nitric acid; common bases include sodium hydroxide, potassium hydroxide and ammonia.",
      },
      {
        heading: "The pH Scale",
        body: "The pH scale measures how acidic or alkaline a solution is, running from 0 to 14. A pH below 7 is acidic, a pH of 7 is neutral and a pH above 7 is alkaline. The pH is defined as the negative logarithm of the hydrogen ion concentration, pH = -log[H+], which means each whole-number change in pH represents a tenfold change in hydrogen ion concentration: a solution of pH 3 is ten times more acidic than one of pH 4.",
      },
      {
        heading: "Strong and Weak Acids and Bases",
        body: "A strong acid is one that ionises completely in water, so a 0.1 mol/dm3 solution of hydrochloric acid contains 0.1 mol/dm3 of hydrogen ions. A weak acid, such as ethanoic acid, ionises only partly, so most of the acid remains as un-ionised molecules and the hydrogen ion concentration is much lower than the acid concentration. The same distinction applies to bases: sodium hydroxide is a strong base because it dissociates completely, while ammonia is a weak base because it only partly reacts with water.",
      },
      {
        heading: "Reactions of Acids",
        body: "Acids react with metals to produce a salt and hydrogen gas, but only metals above hydrogen in the reactivity series react, so copper does not react with dilute hydrochloric acid. Acids react with bases in neutralisation reactions to produce a salt and water, and with metal carbonates to produce a salt, water and carbon dioxide — this effervescence is the classic test for a carbonate. Acids also react with hydrogencarbonates in the same way, producing carbon dioxide. These reactions are the basis of many laboratory preparations and of titration, where the volume of one solution needed to neutralise another is measured precisely.",
      },
    ],
    definitions: [
      { term: "Acid", meaning: "A substance that produces hydrogen ions in water (Arrhenius) or donates a proton (Bronsted-Lowry)." },
      { term: "Base", meaning: "A substance that neutralises an acid to form a salt and water." },
      { term: "Alkali", meaning: "A soluble base, such as sodium hydroxide or ammonia solution." },
      { term: "pH", meaning: "A measure of the hydrogen ion concentration of a solution, defined as -log[H+]." },
      { term: "Strong acid", meaning: "An acid that ionises completely in aqueous solution." },
      
    ],
    formulas: [
      "pH = -log[H+]",
      "[H+] = 10^(-pH)",
      "Acid + metal -> salt + hydrogen",
      "Acid + base -> salt + water (neutralisation)",
      "Acid + carbonate -> salt + water + carbon dioxide",
      "Ionic equation for neutralisation: H+ + OH- -> H2O",
      "pH < 7 acidic; pH = 7 neutral; pH > 7 alkaline",
    ],
    examples: [
      {
        title: "Calculating pH",
        problem: "Calculate the pH of a 0.01 mol/dm3 solution of hydrochloric acid, assuming complete ionisation.",
        steps: [
          "Hydrochloric acid is a strong acid, so it ionises completely.",
          "The hydrogen ion concentration [H+] = 0.01 mol/dm3.",
          "Use pH = -log[H+] = -log(0.01).",
          "Write 0.01 as 10^(-2), so -log(10^(-2)) = 2.",
          "The pH of the solution is 2.",
        ],
        answer: "pH = 2.",
      },
      {
        title: "Hydrogen ion concentration from pH",
        problem: "A solution has a pH of 4. What is its hydrogen ion concentration?",
        steps: [
          "Use [H+] = 10^(-pH).",
          "Substitute pH = 4: [H+] = 10^(-4).",
          "This equals 0.0001 mol/dm3.",
          "The solution is acidic because its pH is below 7.",
          "A pH of 4 means the solution is ten times more acidic than a solution of pH 5.",
        ],
        answer: "[H+] = 1 x 10^(-4) mol/dm3.",
      },
      {
        title: "Acid and carbonate reaction",
        problem: "Write the balanced equation for the reaction of dilute hydrochloric acid with calcium carbonate.",
        steps: [
          "The general reaction is: acid + carbonate -> salt + water + carbon dioxide.",
          "The salt formed is calcium chloride, CaCl2.",
          "Write the unbalanced equation: CaCO3 + HCl -> CaCl2 + H2O + CO2.",
          "Balance the hydrogen and chlorine: 2 HCl is needed.",
          "Balanced equation: CaCO3 + 2HCl -> CaCl2 + H2O + CO2.",
        ],
        answer: "CaCO3 + 2HCl -> CaCl2 + H2O + CO2.",
      },
    ],
    tips: [
      "Remember the pH formula pH = -log[H+] and that a change of 1 in pH means a tenfold change in [H+].",
      "For a strong acid, [H+] equals the acid concentration; for a weak acid it is much lower.",
      "Effervescence with dilute acid is the test for a carbonate — the gas is carbon dioxide, which turns limewater milky.",
      "All alkalis are bases, but not all bases are alkalis — check solubility before calling a base an alkali.",
    ],
    mistakes: [
      "Confusing acid strength with acid concentration — a dilute strong acid can have a higher pH than a concentrated weak acid.",
      "Saying a solution with pH 6 is alkaline — any pH below 7 is acidic.",
      "Forgetting that copper does not react with dilute hydrochloric acid because it is below hydrogen in the reactivity series.",
      "Writing the neutralisation ionic equation with the spectator ions included instead of the simplified H+ + OH- -> H2O.",
    ],
    facts: [
      "Hydrochloric acid in the stomach has a pH of about 1 to 2 and helps digest food.",
      "Pure water is neutral with a pH of 7 at 25 degrees Celsius.",
      "Sulfuric acid is a strong diprotic acid, meaning each molecule can donate two protons.",
      
      
    ],
    quiz: [
      {
        q: "What is the pH of a 0.001 mol/dm3 solution of a strong acid?",
        options: ["1", "2", "3", "4"],
        answer: 2,
        explanation: "pH = -log(0.001) = -log(10^-3) = 3.",
      },
      {
        q: "Which of these is an alkali?",
        options: ["Copper(II) oxide", "Sodium hydroxide", "Calcium carbonate", "Zinc oxide"],
        answer: 1,
        explanation: "Sodium hydroxide dissolves in water, so it is an alkali; the others are insoluble bases.",
      },
      {
        q: "What gas is produced when dilute hydrochloric acid reacts with calcium carbonate?",
        options: ["Hydrogen", "Oxygen", "Carbon dioxide", "Chlorine"],
        answer: 2,
        explanation: "Acid + carbonate -> salt + water + carbon dioxide.",
      },
      {
        q: "Which acid is a weak acid?",
        options: ["Hydrochloric acid", "Sulfuric acid", "Nitric acid", "Ethanoic acid"],
        answer: 3,
        explanation: "Ethanoic acid ionises only partially in water, so it is a weak acid.",
      },
      {
        q: "A solution has a pH of 9. How does its hydrogen ion concentration compare with a solution of pH 7?",
        options: ["100 times greater", "100 times smaller", "2 times smaller", "9 times smaller"],
        answer: 1,
        explanation: "A difference of 2 pH units means a 10^2 = 100-fold change, and the higher pH means fewer H+ ions.",
      },
    ],
    status: "published",
  },
  {
    id: "chemistry-06",
    subjectId: "chemistry",
    topic: "Acids, Bases and Salts",
    subtopic: "Salts, titration and neutralisation",
    title: "Salts, Titration and Neutralisation",
    order: 6,
    introduction: "Salts are the products of neutralisation, and they range from table salt to fertilisers and medicines. This lesson explains how salts are named and prepared, how titration measures concentrations precisely, and how to choose the right indicator for the job.",
    objectives: [
      "Define a salt and name salts formed from common acids",
      "Describe methods for preparing soluble and insoluble salts",
      "Explain the principle of titration and carry out titration calculations",
      "Choose a suitable indicator for different acid-base titrations",
      "Explain the formation of acidic, basic and neutral salts"
    ],
    sections: [
      {
        heading: "What Are Salts?",
        body: "A salt is a compound formed when the hydrogen ions of an acid are replaced by a metal ion or an ammonium ion. The name of a salt comes from the acid and the base that formed it: hydrochloric acid gives chlorides, sulfuric acid gives sulfates, nitric acid gives nitrates and ethanoic acid gives ethanoates. For example, sodium hydroxide reacting with hydrochloric acid gives sodium chloride, while zinc reacting with sulfuric acid gives zinc sulfate. Salts can be acidic, basic or neutral depending on the strength of the acid and base they came from: a salt of a strong acid and a strong base, such as sodium chloride, is neutral, while a salt of a weak acid and a strong base is alkaline in solution.",
      },
      {
        heading: "Preparing Salts",
        body: "Soluble salts are usually prepared by reacting an acid with a metal, an insoluble base or an alkali, then filtering off any excess solid and evaporating the filtrate to crystallisation. To prepare copper(II) sulfate, excess copper(II) oxide is added to warm dilute sulfuric acid, the mixture is filtered, and the filtrate is evaporated until crystals form on cooling. Insoluble salts cannot be made this way because they would not stay in solution; instead they are prepared by precipitation, mixing two soluble solutions so that the insoluble salt forms as a solid.",
      },
      {
        heading: "Titration",
        body: "Titration is a technique for finding the exact concentration of a solution by reacting it with a solution of known concentration. A pipette delivers an exact volume of one solution into a conical flask, a few drops of indicator are added, and the other solution is run in from a burette until the indicator just changes colour — this is the end point. The volume used is recorded and the titration is repeated until concordant results are obtained. The calculation uses the equation C1V1 / n1 = C2V2 / n2, where C is concentration, V is volume and n is the number of moles from the balanced equation.",
      },
      {
        heading: "Choosing an Indicator",
        body: "An indicator is a substance that changes colour at a particular pH, and the right indicator must change colour at the pH of the equivalence point of the titration. Methyl orange changes colour between pH 3.1 and 4.4, so it is suitable for strong acid against weak base titrations, while phenolphthalein changes between pH 8.3 and 10.0, so it suits weak acid against strong base titrations. For a strong acid against a strong base, the equivalence point is at pH 7 and either indicator works, because the pH changes very sharply at the end point.",
      },
    ],
    definitions: [
      { term: "Salt", meaning: "A compound formed when the hydrogen ions of an acid are replaced by a metal ion or an ammonium ion." },
      { term: "Neutralisation", meaning: "The reaction between an acid and a base to form a salt and water." },
      { term: "Titration", meaning: "A method of finding the concentration of a solution by reacting it with a solution of known concentration." },
      { term: "End point", meaning: "The point in a titration at which the indicator changes colour, showing the reaction is just complete." },
      { term: "Precipitation", meaning: "The formation of an insoluble solid when two solutions are mixed." },
      
    ],
    formulas: [
      "Acid + base -> salt + water",
      "C1V1 / n1 = C2V2 / n2 (titration formula)",
      "Hydrochloric acid -> chlorides; sulfuric acid -> sulfates; nitric acid -> nitrates",
      "Methyl orange: colour change at pH 3.1 - 4.4",
      "Phenolphthalein: colour change at pH 8.3 - 10.0",
      "Hydrated salt example: CuSO4.5H2O (copper(II) sulfate crystals)",
    ],
    examples: [
      {
        title: "Titration calculation",
        problem: "25.0 cm3 of sodium hydroxide solution is neutralised by 20.0 cm3 of 0.1 mol/dm3 hydrochloric acid. Calculate the concentration of the sodium hydroxide. NaOH + HCl -> NaCl + H2O.",
        steps: [
          "Use C1V1 / n1 = C2V2 / n2, with n1 = n2 = 1.",
          "Let C1 = concentration of NaOH, V1 = 25.0 cm3.",
          "C2 = 0.1 mol/dm3, V2 = 20.0 cm3.",
          "Substitute: (C1 x 25.0) / 1 = (0.1 x 20.0) / 1.",
          "Solve: C1 = 2.0 / 25.0 = 0.08 mol/dm3.",
        ],
        answer: "0.08 mol/dm3.",
      },
      {
        title: "Naming a salt",
        problem: "Name the salt formed when magnesium reacts with dilute sulfuric acid.",
        steps: [
          "Sulfuric acid always forms sulfates.",
          "The metal is magnesium, so the salt is a magnesium salt.",
          "The reaction is: Mg + H2SO4 -> MgSO4 + H2.",
          "The salt is magnesium sulfate.",
          "Its formula is MgSO4.",
        ],
        answer: "Magnesium sulfate, MgSO4.",
      },
      {
        title: "Preparing an insoluble salt",
        problem: "Describe how to prepare a pure sample of lead(II) chloride, an insoluble salt.",
        steps: [
          "Mix lead(II) nitrate solution with sodium chloride solution.",
          "Lead(II) chloride forms as a white precipitate.",
          "Filter the mixture to collect the precipitate.",
          "Wash the precipitate with distilled water to remove soluble impurities.",
          "Dry the solid between filter papers or in a warm oven.",
        ],
        answer: "Precipitation, filtration, washing and drying gives pure lead(II) chloride.",
      },
    ],
    tips: [
      "Learn the salt families: hydrochloric acid gives chlorides, sulfuric gives sulfates, nitric gives nitrates.",
      "In titration calculations, always write the balanced equation first so you know the mole ratio n1 and n2.",
      "Rinse the burette with the solution it will contain, and the pipette with the solution it will measure.",
      "Methyl orange is for strong acid with weak base; phenolphthalein is for weak acid with strong base.",
    ],
    mistakes: [
      "Using universal indicator in a titration instead of methyl orange or phenolphthalein.",
      "Forgetting that insoluble salts must be made by precipitation, not by reacting an acid with a base.",
      "Mixing up the volumes in the titration formula — V1 belongs with C1 of the same solution.",
      "Writing the formula of a salt with the wrong charges, for example writing NaCl2 instead of NaCl.",
    ],
    facts: [
      "Common salt, sodium chloride, is obtained by evaporating seawater or mining rock salt.",
      "Copper(II) sulfate crystals are blue because they contain water of crystallisation.",
      "Washing soda is sodium carbonate decahydrate, Na2CO3.10H2O.",
      
      
    ],
    quiz: [
      {
        q: "What is the salt formed when potassium hydroxide reacts with nitric acid?",
        options: ["Potassium chloride", "Potassium sulfate", "Potassium nitrate", "Potassium carbonate"],
        answer: 2,
        explanation: "Nitric acid forms nitrates, so the salt is potassium nitrate.",
      },
      {
        q: "Which method is used to prepare an insoluble salt?",
        options: ["Evaporation", "Titration", "Precipitation", "Distillation"],
        answer: 2,
        explanation: "Insoluble salts are prepared by precipitation from two soluble solutions.",
      },
      {
        q: "Which indicator is suitable for a weak acid against a strong base titration?",
        options: ["Methyl orange", "Phenolphthalein", "Universal indicator", "Litmus paper"],
        answer: 1,
        explanation: "Phenolphthalein changes colour at pH 8.3-10.0, which matches the alkaline end point of this titration.",
      },
      {
        q: "What is the end point of a titration?",
        options: ["When the burette is empty", "When the indicator changes colour", "When the flask is full", "When the solutions are mixed"],
        answer: 1,
        explanation: "The end point is when the indicator just changes colour, showing neutralisation is complete.",
      },
      {
        q: "What are the products of neutralisation?",
        options: ["Salt and hydrogen", "Salt and water", "Salt and carbon dioxide", "Acid and base"],
        answer: 1,
        explanation: "An acid reacting with a base produces a salt and water.",
      },
    ],
    status: "published",
  },
  {
    id: "chemistry-07",
    subjectId: "chemistry",
    topic: "Organic Chemistry",
    subtopic: "Hydrocarbons",
    title: "Hydrocarbons: Alkanes, Alkenes and Alkynes",
    order: 7,
    introduction: "Hydrocarbons are compounds of hydrogen and carbon only, and they include the fuels that power our world. This lesson covers the alkanes, alkenes and alkynes, their structures, properties and reactions, and the tests that tell them apart.",
    objectives: [
      "Define hydrocarbons and name the main homologous series",
      "Write general formulas and structures for alkanes, alkenes and alkynes",
      "Explain isomerism and draw isomers of simple alkanes",
      "Describe the properties and combustion of alkanes",
      "Describe addition reactions of alkenes and their uses"
    ],
    sections: [
      {
        heading: "Homologous Series",
        body: "A homologous series is a family of organic compounds with the same general formula, similar chemical properties, and a regular change in physical properties as the chain gets longer. The alkanes have the general formula CnH2n+2, the alkenes CnH2n and the alkynes CnH2n-2. Each member differs from the next by a -CH2- group, and the boiling points increase with molecular size because the intermolecular forces become stronger. Alkanes are saturated because they contain only single bonds, while alkenes and alkynes are unsaturated because they contain double and triple bonds.",
      },
      {
        heading: "Alkanes",
        body: "Alkanes are the simplest hydrocarbons, with each carbon atom bonded to four other atoms in a tetrahedral arrangement. Methane, CH4, is the first alkane, followed by ethane (C2H6), propane (C3H8) and butane (C4H10). Alkanes are relatively unreactive because their single bonds are strong, but they burn readily in oxygen to produce carbon dioxide and water, releasing a large amount of energy — this is why natural gas (mainly methane) and petrol are used as fuels. Incomplete combustion produces carbon monoxide, a poisonous gas, and soot.",
      },
      {
        heading: "Alkenes and Alkynes",
        body: "Alkenes contain at least one carbon-carbon double bond, which makes them much more reactive than alkanes. Ethene, C2H4, is the simplest alkene, and it is used to make polythene and to ripen fruit. The double bond allows addition reactions: hydrogen adds across the double bond to form an alkane, bromine adds to form a dibromoalkane, and water adds in the presence of a catalyst to form an alcohol. Alkynes contain a carbon-carbon triple bond; ethyne (acetylene), C2H2, is the simplest alkyne and burns with a very hot flame used in welding.",
      },
      {
        heading: "Isomerism",
        body: "Isomers are compounds with the same molecular formula but different structural arrangements of atoms, and therefore different properties. Butane, C4H10, has two isomers: normal butane, with a straight chain of four carbons, and methylpropane, with a branched chain. As the number of carbon atoms increases, the number of possible isomers grows rapidly — pentane has three isomers and hexane has five. Isomers have the same molecular formula but different boiling points, because branching reduces the surface area available for intermolecular forces and lowers the boiling point.",
      },
    ],
    definitions: [
      { term: "Hydrocarbon", meaning: "A compound containing hydrogen and carbon only." },
      { term: "Homologous series", meaning: "A family of compounds with the same general formula and similar chemical properties, differing by a -CH2- group." },
      { term: "Saturated hydrocarbon", meaning: "A hydrocarbon containing only single bonds between carbon atoms." },
      { term: "Unsaturated hydrocarbon", meaning: "A hydrocarbon containing one or more double or triple bonds between carbon atoms." },
      { term: "Isomers", meaning: "Compounds with the same molecular formula but different structural arrangements." },
      
    ],
    formulas: [
      "Alkanes: CnH2n+2",
      "Alkenes: CnH2n",
      "Alkynes: CnH2n-2",
      "Complete combustion: CH4 + 2O2 -> CO2 + 2H2O",
      "Hydrogenation of ethene: C2H4 + H2 -> C2H6",
      "Bromine water test: orange bromine water is decolourised by alkenes and alkynes",
    ],
    examples: [
      {
        title: "Identifying a hydrocarbon from its formula",
        problem: "A hydrocarbon has the molecular formula C3H6. Identify its family and draw its structure.",
        steps: [
          "Compare with the general formulas: for n = 3, an alkane would be C3H8.",
          "An alkene would be C3H6, which matches the given formula.",
          "The compound is therefore an alkene (propene).",
          "Propene has a double bond between the first and second carbon atoms.",
          "Structure: CH2=CH-CH3.",
        ],
        answer: "Propene, an alkene, CH2=CH-CH3.",
      },
      {
        title: "Combustion of propane",
        problem: "Write the balanced equation for the complete combustion of propane, C3H8.",
        steps: [
          "Combustion in excess oxygen produces carbon dioxide and water.",
          "Unbalanced: C3H8 + O2 -> CO2 + H2O.",
          "Balance carbon: 3 CO2 on the right.",
          "Balance hydrogen: 4 H2O on the right (8 hydrogen atoms).",
          "Balance oxygen: 3 x 2 + 4 = 10 oxygen atoms, so 5 O2 on the left.",
        ],
        answer: "C3H8 + 5O2 -> 3CO2 + 4H2O.",
      },
      {
        title: "Volume of carbon dioxide from combustion",
        problem: "What volume of carbon dioxide at s.t.p. is produced by the complete combustion of 11.2 dm3 of methane at s.t.p.?",
        steps: [
          "Equation: CH4 + 2O2 -> CO2 + 2H2O.",
          "From the equation, 1 volume of methane produces 1 volume of carbon dioxide.",
          "The mole ratio is 1:1, and equal volumes of gases contain equal numbers of moles.",
          "Volume of CO2 = 11.2 dm3.",
          "No extra calculation is needed because the ratio is 1:1.",
        ],
        answer: "11.2 dm3 of carbon dioxide.",
      },
    ],
    tips: [
      "Learn the general formulas CnH2n+2, CnH2n and CnH2n-2 — they let you identify any hydrocarbon family instantly.",
      "Bromine water is decolourised by alkenes and alkynes but not by alkanes — this is the standard test for unsaturation.",
      "For combustion equations, balance carbon first, then hydrogen, then oxygen last.",
      "Branched isomers have lower boiling points than straight-chain isomers of the same formula.",
    ],
    mistakes: [
      "Calling an alkene saturated — alkenes are unsaturated because of the double bond.",
      "Forgetting the products of incomplete combustion: carbon monoxide and soot, not just carbon dioxide.",
      "Writing the general formula of alkenes as CnH2n+2 — that is the alkane formula.",
      "Confusing substitution reactions (alkanes with chlorine) with addition reactions (alkenes with bromine).",
    ],
    facts: [
      "Methane is the main component of natural gas and biogas.",
      "Ethene is used to ripen fruit and to make polythene plastic.",
      "Petrol is a mixture of hydrocarbons, mainly alkanes with 5 to 12 carbon atoms.",
      
      
    ],
    quiz: [
      {
        q: "What is the general formula of the alkenes?",
        options: ["CnH2n+2", "CnH2n", "CnH2n-2", "CnH2n+1"],
        answer: 1,
        explanation: "Alkenes have one double bond, so their general formula is CnH2n.",
      },
      {
        q: "Which compound decolourises bromine water?",
        options: ["Methane", "Ethane", "Ethene", "Propane"],
        answer: 2,
        explanation: "Ethene is unsaturated, so it adds bromine across the double bond and decolourises the bromine water.",
      },
      {
        q: "What are the products of the complete combustion of an alkane?",
        options: ["Carbon monoxide and water", "Carbon dioxide and water", "Carbon and hydrogen", "Carbon dioxide and hydrogen"],
        answer: 1,
        explanation: "Complete combustion in excess oxygen produces carbon dioxide and water.",
      },
      {
        q: "How many isomers does butane, C4H10, have?",
        options: ["1", "2", "3", "4"],
        answer: 1,
        explanation: "Butane has two isomers: n-butane and methylpropane.",
      },
      {
        q: "What type of reaction occurs when chlorine reacts with methane in sunlight?",
        options: ["Addition", "Substitution", "Neutralisation", "Polymerisation"],
        answer: 1,
        explanation: "Chlorine replaces hydrogen atoms in methane one at a time — a substitution reaction.",
      },
    ],
    status: "published",
  },
  {
    id: "chemistry-08",
    subjectId: "chemistry",
    topic: "Organic Chemistry",
    subtopic: "Alcohols, acids and esters",
    title: "Alcohols, Carboxylic Acids and Esters",
    order: 8,
    introduction: "Alcohols, carboxylic acids and esters are the organic compounds behind drinks, vinegar, soaps and perfumes. This lesson covers their structures, properties and reactions, including fermentation, esterification and the tests that identify each family.",
    objectives: [
      "Identify the functional groups of alcohols, carboxylic acids and esters",
      "Describe the preparation of ethanol by fermentation and by hydration of ethene",
      "Describe the properties and uses of ethanol",
      "Explain the acidic properties of carboxylic acids and their reactions",
      "Describe esterification and the properties and uses of esters"
    ],
    sections: [
      {
        heading: "Alcohols",
        body: "Alcohols are organic compounds containing the hydroxyl functional group, -OH, attached to a carbon atom, and they have the general formula CnH2n+1OH. Ethanol, C2H5OH, is the best-known alcohol: it is a colourless liquid that burns with a clean blue flame, mixes completely with water, and is used as a fuel, a solvent and in alcoholic drinks. Ethanol is made by the fermentation of sugars using yeast, which works best at about 37 degrees Celsius and stops when the alcohol concentration reaches about 15% because the yeast dies.",
      },
      {
        heading: "Carboxylic Acids",
        body: "Carboxylic acids contain the carboxyl functional group, -COOH, and have the general formula CnH2n+1COOH. Ethanoic acid, CH3COOH, is the acid in vinegar and is a weak acid that ionises only partly in water. Carboxylic acids react like other acids: they react with metals to give a salt and hydrogen, with bases to give a salt and water, and with carbonates to give a salt, water and carbon dioxide. They are used in food preservation, in the manufacture of esters, and in making soaps.",
      },
      {
        heading: "Esters",
        body: "Esters are formed when a carboxylic acid reacts with an alcohol in the presence of concentrated sulfuric acid as a catalyst, in a reaction called esterification. The reaction is reversible and produces an ester and water: ethanoic acid plus ethanol gives ethyl ethanoate and water. Esters are sweet-smelling liquids used in perfumes, flavourings and solvents, and the smell of many fruits comes from esters. Esters are hydrolysed back to the acid and alcohol by heating with water or with an alkali; hydrolysis with an alkali is called saponification when it is used to make soap from fats, which are natural esters of glycerol and fatty acids.",
      },
      {
        heading: "Tests and Uses",
        body: "Alcohols, carboxylic acids and esters can be distinguished by simple tests. Ethanol burns with a blue flame and reacts with sodium to produce hydrogen gas, but it does not fizz with sodium carbonate. Ethanoic acid fizzes with sodium carbonate, producing carbon dioxide, which is the test for a carboxylic acid. Esters are recognised by their sweet, fruity smell and by the fact that they are neutral liquids that do not react with sodium or sodium carbonate. In industry, ethanol is used as a fuel additive and a solvent, ethanoic acid is used in vinegar and in making plastics, and esters are used as flavourings, fragrances and solvents for paints and nail varnish.",
      },
    ],
    definitions: [
      { term: "Functional group", meaning: "The atom or group of atoms in an organic molecule that determines its chemical properties." },
      { term: "Hydroxyl group", meaning: "The -OH group found in alcohols." },
      { term: "Carboxyl group", meaning: "The -COOH group found in carboxylic acids." },
      { term: "Esterification", meaning: "The reaction between a carboxylic acid and an alcohol to form an ester and water." },
      { term: "Fermentation", meaning: "The breakdown of sugars by yeast to produce ethanol and carbon dioxide." },
      
    ],
    formulas: [
      "Alcohols: CnH2n+1OH (functional group -OH)",
      "Carboxylic acids: CnH2n+1COOH (functional group -COOH)",
      "Fermentation: C6H12O6 -> 2C2H5OH + 2CO2",
      "Esterification: CH3COOH + C2H5OH -> CH3COOC2H5 + H2O",
      "Ethanol combustion: C2H5OH + 3O2 -> 2CO2 + 3H2O",
      "Acid + carbonate -> salt + water + carbon dioxide",
    ],
    examples: [
      {
        title: "Naming an ester",
        problem: "Name the ester formed from ethanoic acid and methanol.",
        steps: [
          "The ester name comes from the alcohol first, then the acid.",
          "The alcohol is methanol, so the first part is methyl.",
          "The acid is ethanoic acid, so the second part is ethanoate.",
          "The ester is therefore methyl ethanoate.",
          "Its formula is CH3COOCH3.",
        ],
        answer: "Methyl ethanoate, CH3COOCH3.",
      },
      {
        title: "Mass of ethanol from fermentation",
        problem: "Calculate the mass of ethanol produced by the fermentation of 180 g of glucose. (C6H12O6 = 180 g/mol, C2H5OH = 46 g/mol)",
        steps: [
          "Equation: C6H12O6 -> 2C2H5OH + 2CO2.",
          "Moles of glucose = 180 / 180 = 1 mol.",
          "From the equation, 1 mole of glucose gives 2 moles of ethanol.",
          "Mass of ethanol = 2 x 46 = 92 g.",
          "The fermentation produces 92 g of ethanol.",
        ],
        answer: "92 g of ethanol.",
      },
    ],
    tips: [
      "Learn the functional groups by heart: -OH for alcohols, -COOH for acids, -COO- for esters.",
      "Ester names come from the alcohol first (methyl, ethyl) then the acid (ethanoate, propanoate).",
      "Ethanoic acid fizzes with sodium carbonate but ethanol does not — this is the quickest way to tell them apart.",
      "Fermentation works best at about 37 degrees Celsius and stops at about 15% alcohol because the yeast dies.",
    ],
    mistakes: [
      "Confusing ethanol with ethanoic acid — ethanol is an alcohol, ethanoic acid is a carboxylic acid.",
      "Forgetting that esterification is reversible and needs concentrated sulfuric acid as a catalyst.",
      "Naming an ester from the acid first — the alcohol part comes first in the name.",
      "Saying ethanol is acidic — it is neutral, and it does not fizz with sodium carbonate.",
    ],
    facts: [
      "Ethanol is the alcohol in alcoholic drinks and is made by fermentation.",
      "Vinegar is a dilute solution of ethanoic acid, about 5% by volume.",
      "Esters give many fruits their characteristic smells and flavours.",
      
      
    ],
    quiz: [
      {
        q: "What is the functional group of an alcohol?",
        options: ["-COOH", "-OH", "-COO-", "-NH2"],
        answer: 1,
        explanation: "Alcohols contain the hydroxyl group, -OH.",
      },
      {
        q: "What are the products of the fermentation of glucose?",
        options: ["Ethanol and oxygen", "Ethanol and carbon dioxide", "Ethanoic acid and water", "Methanol and carbon dioxide"],
        answer: 1,
        explanation: "Yeast ferments glucose to ethanol and carbon dioxide.",
      },
      {
        q: "Which substance fizzes with sodium carbonate solution?",
        options: ["Ethanol", "Ethanoic acid", "Ethyl ethanoate", "Methane"],
        answer: 1,
        explanation: "Ethanoic acid is an acid, so it reacts with a carbonate to release carbon dioxide.",
      },
      {
        q: "What is the ester formed from ethanoic acid and ethanol called?",
        options: ["Methyl ethanoate", "Ethyl ethanoate", "Ethyl methanoate", "Methyl propanoate"],
        answer: 1,
        explanation: "The alcohol (ethanol) gives ethyl and the acid (ethanoic) gives ethanoate.",
      },
      {
        q: "What catalyst is used in the hydration of ethene to make ethanol?",
        options: ["Iron", "Phosphoric acid", "Nickel", "Concentrated sulfuric acid"],
        answer: 1,
        explanation: "Ethene is hydrated with steam over a phosphoric acid catalyst.",
      },
    ],
    status: "published",
  },
  {
    id: "chemistry-09",
    subjectId: "chemistry",
    topic: "Electrochemistry and Reaction Rates",
    subtopic: "Electrolysis and electrochemical cells",
    title: "Electrolysis and Electrochemical Cells",
    order: 9,
    introduction: "Electricity can split compounds apart, and chemical reactions can generate electricity — the two sides of electrochemistry. This lesson covers electrolysis, the electrochemical series, Faraday's laws and the cells that power everyday devices.",
    objectives: [
      "Define electrolysis and identify the anode, cathode and electrolyte",
      "Predict the products of electrolysis for molten and aqueous solutions",
      "Explain the electrochemical series and its use in predicting discharge",
      "Apply Faraday's first and second laws of electrolysis",
      "Describe the construction and working of a simple electrochemical cell"
    ],
    sections: [
      {
        heading: "What Is Electrolysis?",
        body: "Electrolysis is the decomposition of a compound by passing an electric current through its molten form or its aqueous solution. The compound is called the electrolyte, and it must contain mobile ions, because it is the movement of ions that carries the current. The electrodes are usually graphite or platinum, which do not react. The positive electrode is the anode, where negative ions lose electrons (oxidation), and the negative electrode is the cathode, where positive ions gain electrons (reduction). A useful memory aid is that oxidation occurs at the anode and reduction at the cathode, and that cations move to the cathode while anions move to the anode.",
      },
      {
        heading: "Predicting the Products of Electrolysis",
        body: "In the electrolysis of a molten ionic compound, the metal is discharged at the cathode and the non-metal at the anode: molten lead(II) bromide gives lead at the cathode and bromine at the anode. In aqueous solutions, water is also present, so there is competition. At the cathode, the ion that is discharged is the one lower in the electrochemical series — hydrogen is discharged in preference to reactive metals such as sodium, but copper is discharged in preference to hydrogen.",
      },
      {
        heading: "Faraday's Laws of Electrolysis",
        body: "Faraday's first law states that the mass of a substance liberated at an electrode is directly proportional to the quantity of electricity passed. The quantity of electricity, Q, equals the current multiplied by the time in seconds (Q = It), and is measured in coulombs. One mole of electrons carries 96,500 coulombs, a value called the Faraday constant, so the mass deposited can be calculated from the charge, the molar mass and the charge on the ion. Faraday's second law states that when the same quantity of electricity is passed through different electrolytes, the masses liberated are proportional to their chemical equivalents, that is, molar mass divided by the charge on the ion.",
      },
      {
        heading: "Electrochemical Cells",
        body: "An electrochemical cell converts chemical energy into electrical energy using a redox reaction. A simple cell can be made by placing zinc and copper rods in dilute sulfuric acid: zinc, the more reactive metal, loses electrons and becomes the negative terminal, while hydrogen ions gain electrons at the copper rod, which becomes the positive terminal. In a Daniell cell, zinc is placed in zinc sulfate solution and copper in copper sulfate solution, with a salt bridge connecting the two half-cells so that ions can move and the circuit is completed.",
      },
    ],
    definitions: [
      { term: "Electrolysis", meaning: "The decomposition of a compound by an electric current passing through its molten form or aqueous solution." },
      { term: "Electrolyte", meaning: "A compound that conducts electricity when molten or in aqueous solution because it contains mobile ions." },
      { term: "Anode", meaning: "The positive electrode in electrolysis, where oxidation (loss of electrons) occurs." },
      { term: "Cathode", meaning: "The negative electrode in electrolysis, where reduction (gain of electrons) occurs." },
      { term: "Electrochemical series", meaning: "A list of metals in order of their reactivity, used to predict which ion is discharged during electrolysis." },
      
    ],
    formulas: [
      "Q = I x t (quantity of electricity = current x time)",
      "Faraday constant: 1 mole of electrons = 96,500 C",
      "Mass deposited = (Q x M) / (n x 96,500), where n is the charge on the ion",
      "Oxidation at the anode: loss of electrons",
      "Reduction at the cathode: gain of electrons",
      "Electrolysis of molten PbBr2: Pb2+ + 2e- -> Pb (cathode); 2Br- -> Br2 + 2e- (anode)",
    ],
    examples: [
      {
        title: "Mass of copper deposited",
        problem: "Calculate the mass of copper deposited when a current of 2 A is passed through copper(II) sulfate solution for 965 seconds. (Cu = 64, Faraday constant = 96,500 C/mol)",
        steps: [
          "Quantity of electricity Q = I x t = 2 x 965 = 1930 C.",
          "Copper(II) ions need 2 moles of electrons per mole of copper: Cu2+ + 2e- -> Cu.",
          "1930 C corresponds to 1930 / 96,500 = 0.02 moles of electrons.",
          "Moles of copper = 0.02 / 2 = 0.01 mol.",
          "Mass of copper = 0.01 x 64 = 0.64 g.",
        ],
        answer: "0.64 g of copper.",
      },
      {
        title: "Products of electrolysis of brine",
        problem: "Predict the products of the electrolysis of concentrated sodium chloride solution (brine) using graphite electrodes.",
        steps: [
          "At the cathode, Na+ and H+ compete; hydrogen is lower in the series, so hydrogen is discharged.",
          "Cathode reaction: 2H+ + 2e- -> H2.",
          "At the anode, Cl- and OH- compete; in concentrated solution, chloride is discharged.",
          "Anode reaction: 2Cl- -> Cl2 + 2e-.",
          "Sodium hydroxide remains in the solution.",
        ],
        answer: "Hydrogen at the cathode, chlorine at the anode, sodium hydroxide left in solution.",
      },
    ],
    tips: [
      "Remember OIL RIG: Oxidation Is Loss of electrons, Reduction Is Gain — and oxidation happens at the anode.",
      "For aqueous electrolysis, always compare the ions with the electrochemical series to decide which is discharged.",
      "Convert time to seconds before using Q = It — minutes will give a wrong answer.",
      "In the Daniell cell, the more reactive metal is the negative terminal and it dissolves.",
    ],
    mistakes: [
      "Mixing up the anode and cathode — the anode is positive in electrolysis and oxidation happens there.",
      "Forgetting that water competes with the ions in aqueous electrolysis and predicting the wrong product.",
      "Using time in minutes in Q = It instead of seconds.",
      "Saying that electrolysis of molten lead(II) bromide gives hydrogen at the cathode — there is no water, so lead is discharged.",
    ],
    facts: [
      "Aluminium is extracted from bauxite by the electrolysis of molten aluminium oxide.",
      "Electroplating coats a metal object with a thin layer of another metal, such as chromium or silver.",
      "The Faraday constant is 96,500 coulombs per mole of electrons.",
      
      
    ],
    quiz: [
      {
        q: "At which electrode does oxidation occur during electrolysis?",
        options: ["Cathode", "Anode", "Both electrodes", "Neither electrode"],
        answer: 1,
        explanation: "Oxidation (loss of electrons) occurs at the anode, which is the positive electrode.",
      },
      {
        q: "What is the quantity of electricity passed by a current of 3 A for 100 seconds?",
        options: ["30 C", "300 C", "103 C", "3,000 C"],
        answer: 1,
        explanation: "Q = It = 3 x 100 = 300 C.",
      },
      {
        q: "In the electrolysis of molten lead(II) bromide, what is formed at the cathode?",
        options: ["Bromine", "Lead", "Oxygen", "Hydrogen"],
        answer: 1,
        explanation: "Lead(II) ions gain electrons at the cathode to form lead metal.",
      },
      {
        q: "Why is copper discharged in preference to hydrogen during the electrolysis of copper(II) sulfate solution?",
        options: ["Copper is more reactive", "Copper is lower in the electrochemical series", "Copper is less dense", "Copper ions are larger"],
        answer: 1,
        explanation: "Copper is lower (less reactive) in the electrochemical series, so Cu2+ is discharged before H+.",
      },
      {
        q: "What is the Faraday constant?",
        options: ["6.02 x 10^23 C", "22.4 C", "96,500 C per mole of electrons", "1,000 C"],
        answer: 2,
        explanation: "One mole of electrons carries 96,500 coulombs.",
      },
    ],
    status: "published",
  },
  {
    id: "chemistry-10",
    subjectId: "chemistry",
    topic: "Electrochemistry and Reaction Rates",
    subtopic: "Rates of reaction and equilibrium",
    title: "Rates of Reaction and Chemical Equilibrium",
    order: 10,
    introduction: "Some reactions finish in a flash while others take years, and many reactions never go to completion — they reach equilibrium instead. This lesson explains what controls reaction rates, how catalysts work, and how Le Chatelier's principle predicts the effect of changing conditions on an equilibrium.",
    objectives: [
      "Define rate of reaction and describe how it is measured",
      "Explain the collision theory of reaction rates",
      "Describe the effects of concentration, temperature, surface area and pressure on rate",
      "Explain how catalysts work and why enzymes are important",
      "Explain dynamic equilibrium and Le Chatelier's principle"
    ],
    sections: [
      {
        heading: "Measuring Rates of Reaction",
        body: "The rate of a reaction is the change in concentration of a reactant or product per unit time, and it is usually fastest at the start when the reactant concentrations are highest, then slows as the reactants are used up. Rates can be measured by following the volume of gas produced, the change in mass as a gas escapes, or the change in colour or cloudiness of the mixture. For example, the reaction of calcium carbonate with dilute hydrochloric acid can be followed by measuring the volume of carbon dioxide collected in a gas syringe, and a graph of volume against time gives a curve that flattens when the reaction is complete.",
      },
      {
        heading: "Collision Theory and Factors Affecting Rate",
        body: "Collision theory states that for a reaction to occur, particles must collide with enough energy and in the correct orientation; the minimum energy needed is called the activation energy. Increasing the concentration of a reactant increases the number of particles per unit volume, so collisions happen more often and the rate increases. Increasing the temperature makes particles move faster and collide more often, and a larger fraction of them have enough energy to react. Increasing the surface area of a solid, for example by using a powder instead of lumps, exposes more particles to the other reactant and speeds up the reaction.",
      },
      {
        heading: "Catalysts",
        body: "A catalyst is a substance that speeds up a chemical reaction without being used up in the reaction. It works by providing an alternative reaction pathway with a lower activation energy, so more particles have enough energy to react when they collide. Enzymes are biological catalysts that speed up reactions in living organisms, and they are specific to one reaction and work best at a particular temperature and pH. In industry, iron is used as the catalyst in the Haber process for making ammonia, and vanadium(V) oxide is used in the Contact process for making sulfuric acid.",
      },
      {
        heading: "Dynamic Equilibrium and Le Chatelier's Principle",
        body: "Many reactions are reversible, and when the forward and backward reactions occur at the same rate in a closed system, the system is in dynamic equilibrium — the concentrations stay constant even though the reactions continue. Le Chatelier's principle states that if a change is made to a system at equilibrium, the system responds to oppose the change. Increasing the concentration of a reactant shifts the equilibrium towards the products, and increasing the temperature shifts it towards the endothermic direction.",
      },
    ],
    definitions: [
      { term: "Rate of reaction", meaning: "The change in concentration of a reactant or product per unit time." },
      { term: "Activation energy", meaning: "The minimum energy that colliding particles must have for a reaction to occur." },
      { term: "Catalyst", meaning: "A substance that speeds up a reaction without being used up, by lowering the activation energy." },
      { term: "Dynamic equilibrium", meaning: "The state in a reversible reaction in a closed system where the forward and backward rates are equal and concentrations stay constant." },
      { term: "Le Chatelier's principle", meaning: "If a change is made to a system at equilibrium, the system responds to oppose the change." },
      
    ],
    formulas: [
      "Rate = change in concentration / time",
      "Increasing temperature increases the fraction of particles with energy above the activation energy",
      "Catalyst lowers the activation energy but does not change the equilibrium position",
      "Haber process: N2 + 3H2 <-> 2NH3 (exothermic, forward reaction favoured by low temperature and high pressure)",
      "Contact process: 2SO2 + O2 <-> 2SO3 (vanadium(V) oxide catalyst)",
      "Le Chatelier: increase in pressure shifts equilibrium towards fewer gas molecules",
    ],
    examples: [
      {
        title: "Calculating an average rate",
        problem: "In a reaction, 0.40 mol/dm3 of a reactant is used up in 20 seconds. Calculate the average rate of reaction.",
        steps: [
          "Rate = change in concentration / time.",
          "Change in concentration = 0.40 mol/dm3.",
          "Time = 20 seconds.",
          "Rate = 0.40 / 20 = 0.02 mol/dm3 per second.",
          "The average rate is 0.02 mol/dm3/s.",
        ],
        answer: "0.02 mol/dm3/s.",
      },
      {
        title: "Effect of temperature on equilibrium",
        problem: "The reaction N2 + 3H2 <-> 2NH3 is exothermic in the forward direction. Predict the effect of increasing the temperature on the yield of ammonia.",
        steps: [
          "Increasing the temperature shifts the equilibrium towards the endothermic direction (Le Chatelier's principle).",
          "The forward reaction is exothermic, so the backward reaction is endothermic.",
          "The equilibrium shifts to the left, towards nitrogen and hydrogen.",
          "Less ammonia is formed at equilibrium.",
          "The yield of ammonia decreases, although the reaction reaches equilibrium faster.",
        ],
        answer: "The yield of ammonia decreases.",
      },
      {
        title: "Effect of pressure on equilibrium",
        problem: "In the equilibrium 2SO2 + O2 <-> 2SO3, predict the effect of increasing the pressure.",
        steps: [
          "Count the gas molecules on each side: 3 on the left, 2 on the right.",
          "Increasing the pressure shifts the equilibrium towards the side with fewer gas molecules.",
          "The right side has fewer molecules (2 compared with 3).",
          "The equilibrium shifts to the right.",
          "More sulfur trioxide is formed.",
        ],
        answer: "The equilibrium shifts to the right; the yield of SO3 increases.",
      },
    ],
    tips: [
      "Learn collision theory first — every factor affecting rate can be explained by more frequent or more energetic collisions.",
      "A catalyst speeds up both the forward and backward reactions equally, so it does not change the equilibrium position.",
      "For Le Chatelier questions, always count the gas molecules on each side before deciding the effect of pressure.",
      "In the Haber process, remember the compromise conditions: 450 degrees Celsius, 200 atmospheres and an iron catalyst.",
    ],
    mistakes: [
      "Saying that increasing the temperature always increases the yield — for an exothermic reaction it decreases the equilibrium yield.",
      "Claiming a catalyst increases the yield of a reaction — it only increases the rate.",
      "Forgetting that a catalyst has no effect on the position of equilibrium.",
      "Confusing rate with yield — a fast reaction does not necessarily give a high yield.",
    ],
    facts: [
      "Enzymes are biological catalysts that are specific to one substrate.",
      "The Haber process makes ammonia from nitrogen and hydrogen using an iron catalyst.",
      "The Contact process makes sulfuric acid using a vanadium(V) oxide catalyst.",
      
      
    ],
    quiz: [
      {
        q: "Which change increases the rate of a reaction between a solid and a liquid?",
        options: ["Using larger lumps of the solid", "Decreasing the temperature", "Using a powder of the solid", "Decreasing the concentration"],
        answer: 2,
        explanation: "A powder has a larger surface area, so more particles are exposed and collisions are more frequent.",
      },
      {
        q: "How does a catalyst speed up a reaction?",
        options: ["It increases the temperature", "It lowers the activation energy", "It increases the concentration", "It is used up in the reaction"],
        answer: 1,
        explanation: "A catalyst provides an alternative pathway with a lower activation energy.",
      },
      {
        q: "For the equilibrium N2 + 3H2 <-> 2NH3, what is the effect of increasing the pressure?",
        options: ["Shifts left", "Shifts right", "No change", "Stops the reaction"],
        answer: 1,
        explanation: "The right side has fewer gas molecules (2 versus 4), so higher pressure shifts the equilibrium right.",
      },
      {
        q: "What is meant by dynamic equilibrium?",
        options: ["The reaction has stopped", "Forward and backward rates are equal", "All reactants are used up", "The temperature is constant"],
        answer: 1,
        explanation: "At dynamic equilibrium the forward and backward reactions continue at the same rate, so concentrations stay constant.",
      },
      {
        q: "Which factor increases the fraction of particles with energy above the activation energy?",
        options: ["Increasing concentration", "Increasing temperature", "Increasing surface area", "Adding a catalyst"],
        answer: 1,
        explanation: "Higher temperature makes particles move faster, so more of them exceed the activation energy.",
      },
    ],
    status: "published",
  },
];
