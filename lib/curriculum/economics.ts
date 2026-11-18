import type { Lesson, SubjectDef } from "./types";

export const SUBJECT: SubjectDef = {
  id: "economics",
  name: "Economics",
  short: "ECO",
  colour: "#0f2a5c",
  tagline: "Demand, national income, money and markets.",
  description: "Master demand and supply, national income, money and banking, and market structures for JAMB, with real calculations, Nigerian examples and original practice questions.",
  topics: ["Demand and Supply", "National Income and Measurement", "Money, Banking and Finance", "Market Structures", "Production and Cost Theory", "Public Finance and Taxation", "International Trade and Development"],
};

export const LESSONS: Lesson[] = [
  {
    id: "economics-01",
    subjectId: "economics",
    topic: "Demand and Supply",
    subtopic: "Demand and its determinants",
    title: "Demand and Its Determinants",
    order: 1,
    introduction: "Demand is the foundation of every market decision, from the price of garri in Bodija market to the cost of petrol across Nigeria. This lesson explains what demand means, why the demand curve slopes downwards, and the factors that shift demand.",
    objectives: ["Define demand, effective demand and quantity demanded", "Explain the law of demand and why the demand curve slopes downwards", "Distinguish a movement along the demand curve from a shift of the curve", "Identify the determinants of demand", "Explain types of demand and the exceptions to the law of demand"],
    sections: [
      {
        heading: "What Demand Means",
        body: "Demand is the quantity of a good or service that consumers are willing and able to buy at a given price over a given period of time. Willingness alone is not demand: a student may want a car, but without the money to buy it, there is no effective demand. Quantity demanded is the amount bought at one specific price, while demand is the whole relationship between price and quantity, shown by a demand schedule or a demand curve. Economists use the Latin phrase ceteris paribus, meaning all other things being equal, when they describe this relationship, because many other factors also affect how much people buy. In Nigeria, the demand for rice, fuel, cement and data bundles all follow this same basic logic."
      },
      {
        heading: "The Law of Demand",
        body: "The law of demand states that, all other things being equal, the higher the price of a good, the lower the quantity demanded, and the lower the price, the higher the quantity demanded. This is why the demand curve slopes downwards from left to right. Three reasons explain it. The income effect: a fall in price raises the real purchasing power of consumers, so they can buy more. The substitution effect: when the price of a good falls, it becomes cheaper relative to substitutes, so consumers switch to it; when the price of bread rises, some buyers switch to yam or garri. The law of diminishing marginal utility: each extra unit consumed gives less satisfaction than the one before, so consumers will only buy more units at a lower price. Together these explain the normal downward slope."
      },
      {
        heading: "Movements Along the Curve and Shifts of the Curve",
        body: "A change in the price of the good itself causes a movement along the demand curve: a rise in price causes a contraction of demand, and a fall in price causes an expansion of demand. A change in any other factor causes the whole curve to shift. An increase in demand shifts the curve to the right, and a decrease shifts it to the left. The main determinants that shift demand are the price of related goods, consumer income, tastes and fashion, population size, expectations of future prices, and the distribution of income. For example, if the price of petrol rises, demand for cars falls because they are complements; if the price of beef rises, demand for chicken rises because they are substitutes. A JAMB question that asks about a shift is testing these non-price factors, not price itself."
      },
      {
        heading: "Types of Demand and Exceptions to the Law",
        body: "Economists distinguish several types of demand. Direct demand is demand for a good for its own sake, such as demand for food. Derived demand is demand for a factor of production because of the demand for the product it makes, such as demand for flour because of the demand for bread. Joint demand is demand for goods used together, such as cars and petrol, while competitive demand is demand for goods that are alternatives, such as tea and coffee. Composite demand is demand for a good with many uses, such as palm oil used for cooking, soap and fuel. There are exceptions to the law of demand: Veblen goods, such as luxury cars and designer clothes, are bought more when their price rises because the high price itself is the attraction; Giffen goods, such as a staple food for very poor consumers, may be bought more when the price rises because buyers can no longer afford better foods. These exceptions are popular JAMB questions, so know them by name."
      }
    ],
    definitions: [
      { term: "Demand", meaning: "The quantity of a good or service consumers are willing and able to buy at a given price over a given period." },
      { term: "Effective demand", meaning: "Demand backed by the ability and willingness to pay, as opposed to a mere desire for a good." },
      { term: "Ceteris paribus", meaning: "All other things being equal; the assumption used when studying the effect of one variable." },
      { term: "Derived demand", meaning: "Demand for a factor of production arising from the demand for the product it helps to make." },
      { term: "Joint demand", meaning: "Demand for two or more goods that are used together, such as cars and petrol." },
      { term: "Veblen good", meaning: "A luxury good whose quantity demanded rises as its price rises, because the high price signals status." }
    ],
    formulas: ["Law of demand: price up, quantity demanded down; price down, quantity demanded up (ceteris paribus).", "Price elasticity of demand = percentage change in quantity demanded / percentage change in price.", "Income elasticity of demand = percentage change in quantity demanded / percentage change in income.", "Cross elasticity of demand = percentage change in quantity demanded of good X / percentage change in price of good Y."],
    examples: [
      {
        title: "Price elasticity of demand",
        problem: "The price of a bag of rice rises from ₦80,000 to ₦96,000, and the quantity demanded falls from 500 bags to 400 bags per week. Calculate the price elasticity of demand.",
        steps: ["Find the percentage change in price: (96,000 - 80,000) / 80,000 x 100 = 20%.", "Find the percentage change in quantity demanded: (400 - 500) / 500 x 100 = -20%.", "Apply the formula: elasticity = percentage change in quantity / percentage change in price.", "Divide -20 by 20 to get -1.", "Ignore the negative sign when stating the value: the elasticity is 1, which is unitary elastic."],
        answer: "The price elasticity of demand is 1 (unitary elastic)."
      },
      {
        title: "Income elasticity of demand",
        problem: "A worker's monthly income rises from ₦200,000 to ₦220,000, and her demand for chicken rises from 10 kg to 11.5 kg per month. Calculate the income elasticity of demand and say what kind of good chicken is.",
        steps: ["Find the percentage change in income: (220,000 - 200,000) / 200,000 x 100 = 10%.", "Find the percentage change in quantity demanded: (11.5 - 10) / 10 x 100 = 15%.", "Apply the formula: income elasticity = 15 / 10 = 1.5.", "Note that the value is positive, so the good is a normal good.", "Note that the value is greater than 1, so it is a luxury good."],
        answer: "The income elasticity is 1.5, so chicken is a normal luxury good for this consumer."
      }
    ],
    tips: ["Price change alone moves you along the curve; every other factor shifts the whole curve.", "Learn the five elasticity values: perfectly elastic, elastic, unitary, inelastic, perfectly inelastic.", "Substitutes have positive cross elasticity; complements have negative cross elasticity.", "For Giffen and Veblen goods, say the name and the reason the law fails, not just that demand rises."],
    mistakes: ["Confusing demand with quantity demanded in exam answers.", "Saying a price rise shifts the demand curve; it only moves along it.", "Forgetting the negative sign convention in price elasticity.", "Calling every staple a Giffen good; a Giffen good must be an inferior good with no close substitute."],
    facts: ["The demand curve normally slopes downwards from left to right.", "A fall in the price of a substitute reduces the demand for the good.", "Income elasticity is positive for normal goods and negative for inferior goods.", "Composite demand applies to goods with many uses, such as palm oil."],
    quiz: [
      { q: "Which of these best defines demand?", options: ["The desire for a good", "The quantity consumers are willing and able to buy at a price over a period", "The quantity supplied at a price", "The total goods produced in a country"], answer: 1, explanation: "Demand requires both willingness and ability to pay at a given price over a period, not mere desire." },
      { q: "The law of demand states that, ceteris paribus, as price rises, quantity demanded does what?", options: ["Rises", "Falls", "Stays the same", "Becomes zero"], answer: 1, explanation: "The law of demand says price and quantity demanded move in opposite directions." },
      { q: "Which effect explains why a fall in price lets consumers buy more with the same money?", options: ["Substitution effect", "Income effect", "Price effect", "Wealth effect"], answer: 1, explanation: "The income effect is the rise in real purchasing power when price falls." },
      { q: "A rise in the price of beef is most likely to do what to the demand for chicken?", options: ["Reduce it", "Increase it", "Leave it unchanged", "Make it zero"], answer: 1, explanation: "Beef and chicken are substitutes, so a dearer beef pushes buyers towards chicken." },
      { q: "A fall in the price of petrol is most likely to do what to the demand for cars?", options: ["Increase it", "Reduce it", "Leave it unchanged", "Make cars inferior"], answer: 0, explanation: "Petrol and cars are complements used together, so cheaper petrol raises the demand for cars." },
      { q: "Which of these causes a movement along the demand curve?", options: ["A change in income", "A change in taste", "A change in the price of the good itself", "A change in population"], answer: 2, explanation: "Only a change in the price of the good itself moves you along the curve; other factors shift it." },
      { q: "An increase in consumer income will increase the demand for which type of good?", options: ["Inferior good", "Normal good", "Giffen good", "Free good"], answer: 1, explanation: "For a normal good, demand rises when income rises." },
      { q: "Demand for flour by a bakery is an example of what type of demand?", options: ["Direct demand", "Derived demand", "Joint demand", "Composite demand"], answer: 1, explanation: "Flour is demanded because bread is demanded, so it is derived demand." },
      { q: "Which of these is a Veblen good?", options: ["Garri", "A luxury wristwatch", "Salt", "Water"], answer: 1, explanation: "A luxury wristwatch is bought partly for status, so a higher price can raise its demand." },
      { q: "If price elasticity of demand is 0, demand is described as what?", options: ["Perfectly elastic", "Unitary elastic", "Perfectly inelastic", "Elastic"], answer: 2, explanation: "An elasticity of 0 means quantity demanded does not change at all when price changes." },
      { q: "Cross elasticity of demand between two substitutes is normally what?", options: ["Negative", "Positive", "Zero", "Infinite"], answer: 1, explanation: "For substitutes, a rise in the price of one raises the demand for the other, giving a positive value." },
      { q: "Which factor would shift the demand curve for data bundles to the right?", options: ["A fall in the price of data bundles", "A rise in the number of smartphone users", "A rise in the price of data bundles", "A fall in income"], answer: 1, explanation: "More smartphone users means more buyers at every price, shifting demand to the right." },
      { q: "The law of diminishing marginal utility helps explain why the demand curve slopes how?", options: ["Upwards", "Downwards", "Vertically", "Horizontally"], answer: 1, explanation: "Extra units give less satisfaction, so consumers buy more only at a lower price, giving a downward slope." },
      { q: "Demand for palm oil for cooking, soap making and fuel is an example of what?", options: ["Joint demand", "Competitive demand", "Composite demand", "Derived demand"], answer: 2, explanation: "A good with many different uses has composite demand." },
      { q: "If the price of a good falls by 10% and quantity demanded rises by 25%, the price elasticity is what?", options: ["0.4", "2.5", "1", "10"], answer: 1, explanation: "Elasticity is 25 divided by 10, which is 2.5, so demand is elastic." }
    ],
    status: "published"
  },
  {
    id: "economics-02",
    subjectId: "economics",
    topic: "Demand and Supply",
    subtopic: "Supply and market equilibrium",
    title: "Supply and Market Equilibrium",
    order: 2,
    introduction: "Supply is the other half of the market. This lesson explains the law of supply, the factors that shift supply, how demand and supply together fix the market price, and what happens when government controls prices.",
    objectives: ["Define supply and distinguish it from quantity supplied", "Explain the law of supply and why the supply curve slopes upwards", "Identify the determinants of supply", "Determine equilibrium price and quantity from demand and supply", "Explain price ceilings, price floors and their effects"],
    sections: [
      {
        heading: "The Law of Supply",
        body: "Supply is the quantity of a good or service that producers are willing and able to offer for sale at a given price over a given period. The law of supply states that, all other things being equal, the higher the price, the greater the quantity supplied, and the lower the price, the smaller the quantity supplied. This is why the supply curve slopes upwards from left to right. The main reason is profit: a higher price raises the reward for producing, so firms expand output and new firms enter the industry. For example, when the price of yam rises in the market, farmers plant more yam and traders bring more to the market. As with demand, a change in the price of the good itself causes a movement along the supply curve, while a change in any other factor shifts the whole curve."
      },
      {
        heading: "Determinants of Supply",
        body: "Several factors shift the supply curve. The cost of production is the most important: if fertiliser, fuel or wages become dearer, supply falls and the curve shifts left; if costs fall, supply rises. Technology matters too: better seeds, tractors or machines raise output at every price. The price of other goods matters because a farmer may switch from maize to cassava if cassava pays better. Government policy shifts supply: a subsidy raises supply, while a tax lowers it. Natural factors, such as weather and disease, matter greatly in Nigeria: a good rainy season raises the supply of food crops, while drought or flooding reduces it. The number of producers and expectations about future prices also shift supply. In JAMB questions, check whether the factor named is price, which moves along the curve, or one of these, which shifts it."
      },
      {
        heading: "Market Equilibrium",
        body: "Equilibrium is reached where quantity demanded equals quantity supplied. At the equilibrium price, there is neither a shortage nor a surplus, and the market clears. If the price is set above equilibrium, quantity supplied exceeds quantity demanded and there is a surplus, so sellers cut prices until the surplus disappears. If the price is set below equilibrium, quantity demanded exceeds quantity supplied and there is a shortage, so buyers bid the price up. This is why the market price tends to return to equilibrium. A rise in demand, with supply unchanged, raises both the equilibrium price and quantity; a rise in supply, with demand unchanged, lowers the equilibrium price and raises the equilibrium quantity. You can find equilibrium from equations by setting the demand function equal to the supply function and solving for price."
      },
      {
        heading: "Price Controls: Ceilings and Floors",
        body: "Governments sometimes fix prices. A price ceiling is a maximum price set below the equilibrium price, intended to make a good affordable, such as a controlled price for petrol or kerosene. Because the ceiling price is below equilibrium, quantity demanded exceeds quantity supplied, creating a persistent shortage, queues and often a black market where the good sells above the legal price. A price floor is a minimum price set above equilibrium, intended to protect producers, such as a minimum wage for labour or a guaranteed price for farm produce. Because the floor price is above equilibrium, quantity supplied exceeds quantity demanded, creating a surplus: with a minimum wage, the surplus is unemployment. A price control set exactly at equilibrium has no effect, and a ceiling set above equilibrium or a floor set below equilibrium is also ineffective. JAMB often tests which control causes a shortage and which causes a surplus."
      }
    ],
    definitions: [
      { term: "Supply", meaning: "The quantity of a good producers are willing and able to offer for sale at a given price over a given period." },
      { term: "Equilibrium price", meaning: "The price at which quantity demanded equals quantity supplied." },
      { term: "Surplus", meaning: "The excess of quantity supplied over quantity demanded when price is above equilibrium." },
      { term: "Shortage", meaning: "The excess of quantity demanded over quantity supplied when price is below equilibrium." },
      { term: "Price ceiling", meaning: "A legal maximum price, set below equilibrium, above which a good may not be sold." },
      { term: "Price floor", meaning: "A legal minimum price, set above equilibrium, below which a good may not be sold." }
    ],
    formulas: ["Law of supply: price up, quantity supplied up; price down, quantity supplied down (ceteris paribus).", "Equilibrium condition: quantity demanded = quantity supplied.", "Price elasticity of supply = percentage change in quantity supplied / percentage change in price.", "Surplus = quantity supplied - quantity demanded at a price above equilibrium; shortage = quantity demanded - quantity supplied at a price below equilibrium."],
    examples: [
      {
        title: "Finding equilibrium price and quantity",
        problem: "In a market, quantity demanded is Qd = 100 - 2P and quantity supplied is Qs = 20 + 3P. Find the equilibrium price and quantity.",
        steps: ["Set quantity demanded equal to quantity supplied: 100 - 2P = 20 + 3P.", "Collect the price terms on one side: 100 - 20 = 3P + 2P.", "Simplify: 80 = 5P.", "Divide both sides by 5: P = 16.", "Find quantity: Q = 100 - 2(16) = 100 - 32 = 68."],
        answer: "The equilibrium price is ₦16 and the equilibrium quantity is 68 units."
      },
      {
        title: "Price elasticity of supply",
        problem: "The price of cement rises from ₦5,000 to ₦6,000 per bag, and the quantity supplied rises from 1,000 bags to 1,300 bags per day. Calculate the price elasticity of supply.",
        steps: ["Find the percentage change in price: (6,000 - 5,000) / 5,000 x 100 = 20%.", "Find the percentage change in quantity supplied: (1,300 - 1,000) / 1,000 x 100 = 30%.", "Apply the formula: elasticity = 30 / 20 = 1.5.", "Note that the value is greater than 1, so supply is elastic.", "Note that supply elasticity is normally positive because price and quantity supplied move together."],
        answer: "The price elasticity of supply is 1.5, so supply is elastic."
      }
    ],
    tips: ["Equilibrium is where the two curves cross, or where Qd equals Qs.", "A price ceiling below equilibrium causes a shortage; a price floor above equilibrium causes a surplus.", "A subsidy shifts supply right; a tax on producers shifts supply left.", "When both curves shift, work out each shift separately before combining them."],
    mistakes: ["Confusing a movement along the supply curve with a shift of it.", "Saying a price ceiling causes a surplus; it causes a shortage.", "Forgetting that supply elasticity is normally positive.", "Setting Qd equal to Qs but solving the algebra wrongly; check by putting P back into both functions."],
    facts: ["The supply curve normally slopes upwards from left to right.", "At equilibrium there is neither a shortage nor a surplus.", "A minimum wage is a price floor in the labour market.", "A good rainy season shifts the supply of food crops to the right."],
    quiz: [
      { q: "The law of supply states that, ceteris paribus, as price rises, quantity supplied does what?", options: ["Falls", "Rises", "Stays the same", "Becomes zero"], answer: 1, explanation: "Higher prices raise the reward for producing, so quantity supplied rises." },
      { q: "Which of these shifts the supply curve to the left?", options: ["A fall in the cost of raw materials", "A subsidy to producers", "A rise in wages", "Better technology"], answer: 2, explanation: "Higher wages raise production costs, so firms supply less at every price." },
      { q: "At the equilibrium price, which is true?", options: ["Quantity demanded exceeds quantity supplied", "Quantity supplied exceeds quantity demanded", "Quantity demanded equals quantity supplied", "There is no demand"], answer: 2, explanation: "Equilibrium is defined as the price where quantity demanded equals quantity supplied." },
      { q: "If price is above equilibrium, what results?", options: ["A shortage", "A surplus", "Equilibrium", "A black market"], answer: 1, explanation: "Above equilibrium, quantity supplied exceeds quantity demanded, leaving a surplus." },
      { q: "A price ceiling set below the equilibrium price causes what?", options: ["A surplus", "A shortage", "Equilibrium", "Higher supply"], answer: 1, explanation: "At the low ceiling price, buyers want more than sellers offer, so there is a shortage." },
      { q: "A minimum wage is an example of what?", options: ["A price ceiling", "A price floor", "A subsidy", "A tax"], answer: 1, explanation: "A minimum wage is a legal minimum price for labour, set above the market wage." },
      { q: "If Qd = 120 - 4P and Qs = 20 + 6P, what is the equilibrium price?", options: ["₦5", "₦10", "₦15", "₦20"], answer: 1, explanation: "Setting 120 - 4P = 20 + 6P gives 100 = 10P, so P = 10." },
      { q: "A rise in demand, with supply unchanged, does what to equilibrium price and quantity?", options: ["Price falls, quantity falls", "Price rises, quantity rises", "Price rises, quantity falls", "Price falls, quantity rises"], answer: 1, explanation: "More demand at every price pushes the price up and raises the quantity traded." },
      { q: "A rise in supply, with demand unchanged, does what to equilibrium price and quantity?", options: ["Price rises, quantity rises", "Price falls, quantity falls", "Price falls, quantity rises", "Price rises, quantity falls"], answer: 2, explanation: "More supply pushes the price down while the quantity traded rises." },
      { q: "Which of these is a determinant of supply?", options: ["Consumer taste", "Price of a substitute in consumption", "Cost of production", "Population size"], answer: 2, explanation: "Cost of production affects producers and shifts supply; the others affect demand." },
      { q: "A subsidy paid to farmers will shift the supply curve of maize in which direction?", options: ["To the left", "To the right", "It will not shift it", "It will make it vertical"], answer: 1, explanation: "A subsidy lowers costs, so farmers supply more at every price, shifting supply right." },
      { q: "Price elasticity of supply is normally what sign?", options: ["Negative", "Positive", "Zero", "Always infinite"], answer: 1, explanation: "Price and quantity supplied move in the same direction, so the elasticity is positive." },
      { q: "A persistent black market is most likely to appear under which control?", options: ["A price floor", "A price ceiling", "A tax", "A subsidy"], answer: 1, explanation: "A price ceiling creates a shortage, and some sellers sell illegally above the ceiling price." },
      { q: "If the price of a good falls by 20% and quantity supplied falls by 10%, the elasticity of supply is what?", options: ["2", "0.5", "1", "0.2"], answer: 1, explanation: "Elasticity is 10 divided by 20, which is 0.5, so supply is inelastic." },
      { q: "Drought in the northern states would do what to the supply of millet?", options: ["Increase it", "Decrease it", "Leave it unchanged", "Make it perfectly elastic"], answer: 1, explanation: "Drought reduces harvests, so the supply of millet falls and the curve shifts left." }
    ],
    status: "published"
  },
  {
    id: "economics-03",
    subjectId: "economics",
    topic: "National Income and Measurement",
    subtopic: "National income concepts",
    title: "National Income Concepts",
    order: 3,
    introduction: "National income is the total value of all goods and services produced in a country in a year. This lesson explains GDP, GNP, NNP and national income itself, and shows how they are linked by simple identities you must be able to use in calculations.",
    objectives: ["Define national income and explain its importance", "Distinguish GDP, GNP, NNP and national income", "Explain the difference between nominal and real GDP", "Calculate GDP per capita", "Explain the circular flow of income"],
    sections: [
      {
        heading: "What National Income Is",
        body: "National income is the total money value of all final goods and services produced by the residents of a country in a year. Only final goods are counted, to avoid double counting: the flour sold to a bakery is an intermediate good, while the bread sold to a customer is the final good, and counting both would overstate output. National income is important because it measures the size of an economy, shows whether the economy is growing, guides government policy, and allows comparison between countries. In Nigeria, the National Bureau of Statistics publishes GDP figures every quarter, and the news reports whether the economy grew or shrank. A rising national income usually means more jobs, more goods and higher living standards, although it does not by itself show how income is shared."
      },
      {
        heading: "GDP, GNP and NNP",
        body: "Gross Domestic Product, GDP, is the total value of goods and services produced within the geographical boundaries of a country in a year, whoever produces them. Gross National Product, GNP, is the total value produced by the residents of a country, wherever they are: it equals GDP plus net factor income from abroad, which is income earned by residents abroad minus income earned by foreigners in the country. Net National Product, NNP, equals GNP minus depreciation, also called capital consumption, which is the wear and tear of machines and buildings. National income, strictly, equals NNP at factor cost, which is NNP at market prices minus net indirect taxes. The chain is GDP, then GNP, then NNP, then national income, and JAMB questions often ask you to move one step along this chain, so learn the order and the item added or removed at each step."
      },
      {
        heading: "Nominal and Real GDP",
        body: "Nominal GDP is output valued at current market prices, while real GDP is output valued at the prices of a base year, so it removes the effect of inflation. If prices double but the quantity of goods stays the same, nominal GDP doubles while real GDP is unchanged, which is why economists use real GDP to judge true growth. Real GDP equals nominal GDP divided by the price index, multiplied by 100. GDP per capita is GDP divided by the population, and it is a rough measure of the average income and living standard of the people. Nigeria has a large GDP because of its large population and oil output, but its GDP per capita is modest compared with smaller, richer countries. A country can also have a high GDP per capita while many of its people remain poor, because the average hides inequality."
      },
      {
        heading: "The Circular Flow of Income",
        body: "The circular flow shows how money moves between households and firms. Households supply factors of production, land, labour, capital and entrepreneurship, to firms, and firms pay them rent, wages, interest and profit. Households then spend their income buying goods and services from firms, and the money flows back. In a simple two-sector economy there are only households and firms, but in reality there are leakages and injections. Leakages are money leaving the flow: savings, taxes and imports. Injections are money entering the flow: investment, government spending and exports. The economy is in equilibrium when total leakages equal total injections. If injections exceed leakages, national income rises; if leakages exceed injections, it falls. This model explains why government spending and exports can raise national income, while higher savings and taxes can reduce it in the short run."
      }
    ],
    definitions: [
      { term: "Gross Domestic Product (GDP)", meaning: "The total value of goods and services produced within a country's borders in a year." },
      { term: "Gross National Product (GNP)", meaning: "GDP plus net factor income from abroad." },
      { term: "Net National Product (NNP)", meaning: "GNP minus depreciation, or capital consumption." },
      { term: "Depreciation", meaning: "The fall in the value of capital goods through wear and tear and obsolescence." },
      { term: "Real GDP", meaning: "GDP measured at base-year prices, removing the effect of inflation." },
      { term: "Leakage", meaning: "A flow of money out of the circular flow, such as savings, taxes or imports." }
    ],
    formulas: ["GNP = GDP + net factor income from abroad.", "NNP = GNP - depreciation.", "National income = NNP at factor cost = NNP at market prices - net indirect taxes.", "Real GDP = (nominal GDP / price index) x 100.", "GDP per capita = GDP / population.", "Circular flow equilibrium: total leakages = total injections (S + T + M = I + G + X)."],
    examples: [
      {
        title: "GDP by the expenditure method",
        problem: "In a year, consumption is ₦500 billion, investment ₦200 billion, government spending ₦150 billion, exports ₦120 billion and imports ₦80 billion. Calculate GDP.",
        steps: ["Write the expenditure formula: GDP = C + I + G + (X - M).", "Insert the values: GDP = 500 + 200 + 150 + (120 - 80).", "Work out net exports: 120 - 80 = 40.", "Add the figures: 500 + 200 = 700, plus 150 = 850, plus 40 = 890.", "State the answer with the unit, billions of naira."],
        answer: "GDP is ₦890 billion."
      },
      {
        title: "From GDP to national income",
        problem: "GDP is ₦890 billion, net factor income from abroad is ₦30 billion, depreciation is ₦40 billion, and net indirect taxes are ₦50 billion. Find GNP, NNP and national income.",
        steps: ["GNP = GDP + net factor income from abroad = 890 + 30 = 920.", "NNP = GNP - depreciation = 920 - 40 = 880.", "National income = NNP at factor cost = NNP at market prices - net indirect taxes = 880 - 50 = 830.", "Check each step follows the chain GDP, GNP, NNP, national income.", "State all three answers."],
        answer: "GNP is ₦920 billion, NNP is ₦880 billion, and national income is ₦830 billion."
      }
    ],
    tips: ["Learn the chain in order: GDP, GNP, NNP, national income.", "Net factor income from abroad can be negative if foreigners earn more in the country than residents earn abroad.", "Real GDP is the one to use for comparing growth over time.", "Only final goods are counted, to avoid double counting."],
    mistakes: ["Confusing GDP with GNP; GDP is about where production happens, GNP is about who owns it.", "Adding depreciation instead of subtracting it to get NNP.", "Using nominal GDP to judge growth when prices have changed.", "Counting intermediate goods as well as final goods."],
    facts: ["Nigeria's GDP figures are published by the National Bureau of Statistics.", "GNP equals GDP plus net factor income from abroad.", "GDP per capita is GDP divided by population.", "In equilibrium, total leakages equal total injections."],
    quiz: [
      { q: "What is GDP?", options: ["Total income of government", "Total value of goods and services produced within a country's borders in a year", "Total exports of a country", "Total money in circulation"], answer: 1, explanation: "GDP measures all production within the country's geographical boundaries in a year." },
      { q: "GNP equals GDP plus what?", options: ["Depreciation", "Net indirect taxes", "Net factor income from abroad", "Government spending"], answer: 2, explanation: "GNP adds the net income residents earn abroad to GDP." },
      { q: "NNP is obtained from GNP by doing what?", options: ["Adding depreciation", "Subtracting depreciation", "Adding net exports", "Subtracting government spending"], answer: 1, explanation: "NNP equals GNP minus depreciation, the wear and tear of capital goods." },
      { q: "If C = 500, I = 200, G = 150, X = 120 and M = 80, what is GDP?", options: ["₦890 billion", "₦970 billion", "₦850 billion", "₦810 billion"], answer: 0, explanation: "GDP = 500 + 200 + 150 + (120 - 80) = 890." },
      { q: "Which of these is an intermediate good?", options: ["Bread sold to a customer", "Flour sold to a bakery", "A shirt bought in a shop", "A taxi ride"], answer: 1, explanation: "Flour bought by a bakery is used to make bread, so it is an intermediate good." },
      { q: "Real GDP differs from nominal GDP because real GDP does what?", options: ["Includes inflation", "Removes the effect of price changes", "Counts only services", "Counts only exports"], answer: 1, explanation: "Real GDP values output at base-year prices, so price changes do not distort it." },
      { q: "Nominal GDP is ₦1,200 billion and the price index is 150. What is real GDP?", options: ["₦800 billion", "₦1,800 billion", "₦1,050 billion", "₦600 billion"], answer: 0, explanation: "Real GDP = 1,200 / 150 x 100 = 800." },
      { q: "GDP per capita is calculated by dividing GDP by what?", options: ["Exports", "Population", "Government spending", "Investment"], answer: 1, explanation: "GDP per capita is total GDP divided by the population." },
      { q: "Which of these is a leakage from the circular flow?", options: ["Investment", "Government spending", "Exports", "Savings"], answer: 3, explanation: "Savings, taxes and imports leak money out of the circular flow." },
      { q: "Which of these is an injection into the circular flow?", options: ["Savings", "Taxes", "Imports", "Government spending"], answer: 3, explanation: "Government spending, investment and exports inject money into the flow." },
      { q: "The circular flow is in equilibrium when what is true?", options: ["Savings exceed investment", "Leakages equal injections", "Exports exceed imports", "Taxes exceed spending"], answer: 1, explanation: "Equilibrium requires total leakages to equal total injections." },
      { q: "National income at factor cost equals NNP at market prices minus what?", options: ["Depreciation", "Net indirect taxes", "Net factor income", "Subsidies only"], answer: 1, explanation: "Removing net indirect taxes from NNP at market prices gives NNP at factor cost, which is national income." },
      { q: "If GDP is ₦890 billion and net factor income from abroad is ₦30 billion, what is GNP?", options: ["₦860 billion", "₦920 billion", "₦890 billion", "₦950 billion"], answer: 1, explanation: "GNP = 890 + 30 = 920." },
      { q: "Households supply factors of production to firms and receive what in return?", options: ["Goods and services", "Rent, wages, interest and profit", "Taxes", "Subsidies"], answer: 1, explanation: "Firms pay households factor incomes: rent for land, wages for labour, interest for capital and profit for entrepreneurship." },
      { q: "Why is a rising national income not proof that everyone is better off?", options: ["It counts only exports", "It does not show how income is shared", "It excludes government spending", "It is always wrong"], answer: 1, explanation: "National income is a total; it hides the distribution of income between rich and poor." }
    ],
    status: "published"
  },
  {
    id: "economics-04",
    subjectId: "economics",
    topic: "National Income and Measurement",
    subtopic: "Measuring national income and its problems",
    title: "Measuring National Income and Its Problems",
    order: 4,
    introduction: "Counting a whole economy is hard work, and the figures are never perfect. This lesson explains the three methods of measuring national income, the problems of measurement in Nigeria, and what national income figures can and cannot tell us about welfare.",
    objectives: ["Explain the output, income and expenditure methods of measuring national income", "Identify the problems of measuring national income in Nigeria", "Explain the uses and limitations of national income statistics", "Calculate the rate of economic growth", "Distinguish economic growth from economic development"],
    sections: [
      {
        heading: "The Three Methods of Measurement",
        body: "National income can be measured in three ways, and in theory all three give the same answer. The output method adds up the value added by each sector of the economy: agriculture, industry and services. Value added is the value of output minus the cost of intermediate goods, so double counting is avoided. The income method adds up all factor incomes earned in producing output: rent, wages, interest and profit, plus allowances for depreciation and net indirect taxes. The expenditure method adds up spending on final goods and services: consumption plus investment plus government spending plus exports minus imports. In practice the three methods rarely agree exactly, because of missing data and different coverage, so statisticians publish the figure they trust most and revise it later. JAMB questions often ask which items belong to which method."
      },
      {
        heading: "Problems of Measurement in Nigeria",
        body: "Measuring national income in Nigeria faces serious problems. Much economic activity is in the informal sector: street traders, roadside mechanics and small farmers keep no records, so their output is guessed rather than counted. Subsistence production, such as food a farmer grows and eats with his family, never passes through a market and has no price, so it is hard to value. There is a shortage of trained statisticians and poor record keeping by firms and households. Double counting can occur when intermediate goods are wrongly included. Illegal activities, such as smuggling, are deliberately hidden. Price changes make comparisons over time difficult unless figures are converted to real terms. Depreciation is hard to estimate accurately. Because of these problems, Nigeria's GDP figures are estimates, and the National Bureau of Statistics rebases GDP from time to time, updating the base year and the sectors counted, which can change the reported size of the economy sharply."
      },
      {
        heading: "Uses and Limitations of National Income Statistics",
        body: "National income statistics are used to measure economic growth, compare living standards between countries, guide government planning and budgeting, and judge the success of economic policies. They help the government decide how much to spend and where, and they help investors judge the size of a market. But they have clear limitations. They do not show income distribution: a country can have a high GDP per capita while most people are poor. They exclude unpaid work, such as housework and childcare, and leisure, which both add to welfare. They ignore the quality of goods and the damage done to the environment by production, such as oil pollution in the Niger Delta. They do not count the informal sector well. They also ignore differences in the cost of living between countries. For these reasons, economists now use other measures, such as the Human Development Index, alongside GDP to judge welfare."
      },
      {
        heading: "Economic Growth and Development",
        body: "Economic growth is an increase in real GDP or real GDP per capita over time, and it is measured as a percentage: the growth rate equals the change in real GDP divided by the previous year's real GDP, multiplied by 100. Economic development is wider: it means growth plus improvements in living standards, health, education, employment and the reduction of poverty and inequality. A country can grow without developing, for example if oil revenue rises but schools and hospitals do not improve. Development is measured by indicators such as life expectancy, literacy rate, infant mortality, access to clean water and the Human Development Index. In Nigeria, growth has often come from oil, while development has lagged because of unemployment, poverty and weak infrastructure. JAMB often asks you to distinguish the two terms, so remember: growth is about size, development is about size plus welfare."
      }
    ],
    definitions: [
      { term: "Value added", meaning: "The value of a firm's output minus the cost of the intermediate goods it used." },
      { term: "Informal sector", meaning: "Economic activity not recorded in official statistics, such as street trading and small-scale farming." },
      { term: "Subsistence production", meaning: "Production for the producer's own consumption, not for sale in the market." },
      { term: "Economic growth", meaning: "An increase in real GDP or real GDP per capita over time." },
      { term: "Economic development", meaning: "Growth plus improvements in living standards, health, education and the reduction of poverty." },
      { term: "Human Development Index (HDI)", meaning: "A composite measure of development based on life expectancy, education and income per capita." }
    ],
    formulas: ["GDP (expenditure) = C + I + G + (X - M).", "GDP (income) = rent + wages + interest + profit + depreciation + net indirect taxes.", "Growth rate = (real GDP this year - real GDP last year) / real GDP last year x 100.", "Value added = value of output - cost of intermediate goods."],
    examples: [
      {
        title: "Calculating the growth rate",
        problem: "Nigeria's real GDP was ₦80,000 billion in 2024 and ₦88,000 billion in 2025. Calculate the rate of economic growth in 2025.",
        steps: ["Find the change in real GDP: 88,000 - 80,000 = 8,000.", "Divide the change by the previous year's GDP: 8,000 / 80,000 = 0.1.", "Multiply by 100 to get a percentage: 0.1 x 100 = 10%.", "Note that real GDP is used, so the growth is real, not caused by inflation.", "State the answer."],
        answer: "The rate of economic growth is 10%."
      },
      {
        title: "Value added in the output method",
        problem: "A bakery buys flour worth ₦400,000 and sells bread worth ₦1,000,000. What is the bakery's value added?",
        steps: ["Recall that value added equals the value of output minus the cost of intermediate goods.", "The value of output is ₦1,000,000.", "The cost of intermediate goods is ₦400,000.", "Subtract: 1,000,000 - 400,000 = 600,000.", "State the answer."],
        answer: "The bakery's value added is ₦600,000."
      }
    ],
    tips: ["The three methods should agree in theory; in practice they differ because of missing data.", "Growth is a percentage change in real GDP; development is growth plus welfare.", "For measurement problems, think of Nigeria's informal sector and subsistence farming first.", "GDP rebasing updates the base year and can change reported GDP sharply."],
    mistakes: ["Calling economic growth the same as economic development.", "Using nominal GDP to calculate the growth rate.", "Counting the full value of intermediate goods in the output method.", "Saying GDP per capita measures welfare exactly; it hides distribution."],
    facts: ["The output, income and expenditure methods should give the same national income figure.", "Nigeria's GDP is rebased from time to time by the National Bureau of Statistics.", "The Human Development Index combines health, education and income.", "Subsistence production is hard to value because it has no market price."],
    quiz: [
      { q: "Which method adds up consumption, investment, government spending and net exports?", options: ["Income method", "Output method", "Expenditure method", "Value added method"], answer: 2, explanation: "The expenditure method sums spending on final goods: C + I + G + (X - M)." },
      { q: "Value added equals what?", options: ["Output plus intermediate costs", "Output minus intermediate costs", "Profit plus wages", "Exports minus imports"], answer: 1, explanation: "Value added is the value of output less the cost of intermediate goods used." },
      { q: "Which of these is a problem of measuring national income in Nigeria?", options: ["Too many statisticians", "A large informal sector with no records", "Too much oil revenue", "Too few goods produced"], answer: 1, explanation: "Informal activity is not recorded, so much output is guessed or missed." },
      { q: "Real GDP was ₦80,000 billion in 2024 and ₦88,000 billion in 2025. What is the growth rate?", options: ["8%", "10%", "12%", "20%"], answer: 1, explanation: "Growth = (88,000 - 80,000) / 80,000 x 100 = 10%." },
      { q: "Which of these is a limitation of GDP as a measure of welfare?", options: ["It is too easy to calculate", "It does not show how income is shared", "It counts only exports", "It ignores government spending"], answer: 1, explanation: "GDP is a total and says nothing about distribution between rich and poor." },
      { q: "The income method of measuring national income adds up which of these?", options: ["Consumption and investment", "Rent, wages, interest and profit", "Exports and imports", "Output of each sector"], answer: 1, explanation: "The income method sums the factor incomes earned in production." },
      { q: "Food a farmer grows and eats with his family is called what?", options: ["Informal trade", "Subsistence production", "Double counting", "Value added"], answer: 1, explanation: "Subsistence production is for the producer's own use and never reaches the market." },
      { q: "Economic development differs from economic growth because development includes what?", options: ["Only GDP", "Improvements in living standards and welfare", "Only exports", "Only population growth"], answer: 1, explanation: "Development is growth plus better health, education, jobs and less poverty." },
      { q: "A bakery buys flour for ₦400,000 and sells bread for ₦1,000,000. Its value added is what?", options: ["₦400,000", "₦600,000", "₦1,000,000", "₦1,400,000"], answer: 1, explanation: "Value added = 1,000,000 - 400,000 = 600,000." },
      { q: "Which organisation publishes Nigeria's GDP figures?", options: ["Central Bank of Nigeria", "National Bureau of Statistics", "Federal Inland Revenue Service", "Nigerian Stock Exchange"], answer: 1, explanation: "The National Bureau of Statistics is responsible for Nigeria's official statistics, including GDP." },
      { q: "GDP rebasing means what?", options: ["Lowering GDP", "Updating the base year and sectors counted", "Changing the currency", "Taxing GDP"], answer: 1, explanation: "Rebasing updates the base year and the coverage of the economy, which can change reported GDP." },
      { q: "Which of these is NOT counted in GDP?", options: ["Housework done unpaid at home", "Bread sold in a shop", "Cars made in a factory", "Haircuts paid for in a salon"], answer: 0, explanation: "Unpaid housework has no market price and is excluded from GDP." },
      { q: "Which indicator combines life expectancy, education and income?", options: ["GDP per capita", "Human Development Index", "Inflation rate", "Unemployment rate"], answer: 1, explanation: "The Human Development Index combines health, education and income per capita." },
      { q: "If real GDP falls from ₦50,000 billion to ₦48,000 billion, the growth rate is what?", options: ["4%", "-4%", "2%", "-2%"], answer: 1, explanation: "Growth = (48,000 - 50,000) / 50,000 x 100 = -4%, a recession." },
      { q: "Oil pollution in the Niger Delta is a cost of production that GDP does what with?", options: ["Counts it as a benefit", "Subtracts it", "Ignores it", "Adds it twice"], answer: 2, explanation: "GDP ignores environmental damage, which is one of its limitations as a welfare measure." }
    ],
    status: "published"
  },
  {
    id: "economics-05",
    subjectId: "economics",
    topic: "Money, Banking and Finance",
    subtopic: "Money and its functions",
    title: "Money and Its Functions",
    order: 5,
    introduction: "Money is far more than notes and coins: it is the tool that lets a modern economy trade, save and measure value. This lesson explains what money is, its functions and qualities, the types of money, and the demand for and supply of money.",
    objectives: ["Define money and explain its origin from barter", "Describe the four functions of money", "Identify the qualities of good money", "Explain the types of money in a modern economy", "Explain the motives for holding money"],
    sections: [
      {
        heading: "From Barter to Money",
        body: "Before money, people traded by barter, exchanging goods directly for other goods. Barter had serious problems: it needed a double coincidence of wants, meaning each person had to want what the other offered; it was hard to divide some goods, such as a cow, into small amounts; it was hard to store wealth, because yams and fish rot; and there was no common measure of value, so comparing the worth of different goods was difficult. Money solved these problems by acting as a generally accepted medium of exchange. Cowries, salt, iron bars and manilas were used as money in old Nigeria, and today the naira serves the same purpose. Anything can serve as money if people generally accept it in payment for goods and services and in settling debts."
      },
      {
        heading: "The Functions of Money",
        body: "Money has four main functions. As a medium of exchange, it removes the need for barter: a farmer sells yam for naira and uses the naira to buy cloth. As a measure of value, or unit of account, it gives a common standard for pricing goods: a bag of rice costs ₦80,000 and a phone costs ₦150,000, so their relative values are clear. As a store of value, it lets people save purchasing power for the future, although inflation reduces the value of money kept idle. As a standard of deferred payment, it allows debts to be stated and repaid later in money, which makes lending, borrowing and hire purchase possible. In addition, money serves as a means of transferring value and as a basis for the price mechanism that guides the whole economy. JAMB often asks which function is involved in a given example, so link each example to its function."
      },
      {
        heading: "Qualities and Types of Money",
        body: "Good money must be generally acceptable, portable, durable, divisible, homogeneous, recognisable and relatively stable in value, and its supply should be limited so that it keeps its value. Modern money takes several forms. Currency is notes and coins issued by the central bank. Bank deposits, also called demand deposits, are money held in current accounts that can be transferred by cheque or electronic transfer. Near money includes assets that can quickly be turned into money, such as savings deposits, treasury bills and fixed deposits. Token money is money whose face value is greater than the value of the metal in it, which is true of modern coins. Commodity money is money made of a useful commodity, such as cowries or salt, while fiat money, such as the naira, has value because the government says so and people accept it. The total money supply is usually measured as narrow money, M1, which is currency plus demand deposits, and broad money, M2, which adds savings and time deposits."
      },
      {
        heading: "The Demand for and Supply of Money",
        body: "People hold money for three motives, explained by Keynes. The transactions motive is holding money for everyday buying and selling. The precautionary motive is holding money for unexpected expenses, such as illness or a car repair. The speculative motive is holding money to take advantage of future changes in the prices of bonds and shares: when interest rates are expected to rise, bond prices will fall, so people hold cash instead of bonds. The demand for money therefore falls as the interest rate rises, because holding cash means giving up the interest that could be earned. The supply of money is controlled by the central bank, which can change it through the cash reserve ratio, the bank rate and open market operations. The price of money is the interest rate, and the money market is in equilibrium where the demand for money equals the supply of money. Inflation reduces the value of money, so the real value of savings falls when prices rise."
      }
    ],
    definitions: [
      { term: "Money", meaning: "Anything generally accepted as a medium of exchange and in settlement of debts." },
      { term: "Barter", meaning: "The direct exchange of goods for goods without the use of money." },
      { term: "Double coincidence of wants", meaning: "The situation where each trader wants what the other offers, which barter requires." },
      { term: "Fiat money", meaning: "Money that has value because the government declares it legal tender and people accept it." },
      { term: "Near money", meaning: "Assets that can quickly and easily be converted into money, such as savings deposits and treasury bills." },
      { term: "Legal tender", meaning: "Money that must by law be accepted in payment of a debt." }
    ],
    formulas: ["Money supply (M1) = currency in circulation + demand deposits.", "Money supply (M2) = M1 + savings deposits + time deposits.", "Quantity theory of money: MV = PT, where M is money supply, V is velocity, P is price level and T is transactions.", "Real value of money = 1 / price level; as prices rise, the value of money falls."],
    examples: [
      {
        title: "Velocity of money",
        problem: "In an economy, the money supply is ₦200 billion, the price level is 2, and the volume of transactions is 500 billion units. Calculate the velocity of circulation.",
        steps: ["Write the quantity theory formula: MV = PT.", "Insert the known values: 200 x V = 2 x 500.", "Work out the right side: 2 x 500 = 1,000.", "Solve for V: V = 1,000 / 200 = 5.", "State the answer: money changes hands 5 times in the period."],
        answer: "The velocity of circulation is 5."
      },
      {
        title: "Real value of money and inflation",
        problem: "A basket of goods costs ₦50,000 this year. If prices rise by 25% next year, how much will the same basket cost, and what happens to the value of ₦50,000 kept in cash?",
        steps: ["Find the rise in price: 25% of 50,000 = 12,500.", "Add it to the old price: 50,000 + 12,500 = 62,500.", "Note that ₦50,000 in cash still buys only part of the basket next year.", "Divide 50,000 by 62,500 to find the fraction it now buys: 0.8, or four-fifths.", "Conclude that inflation has reduced the purchasing power of the cash."],
        answer: "The basket will cost ₦62,500, and ₦50,000 kept in cash will buy only four-fifths of it."
      }
    ],
    tips: ["Link each example to one of the four functions of money.", "The speculative motive is the one that depends on the interest rate.", "M1 is narrow money; M2 is broad money and includes savings deposits.", "Inflation reduces the value of money, so savers lose when prices rise."],
    mistakes: ["Calling money only notes and coins; bank deposits are money too.", "Confusing the store of value function with the standard of deferred payment.", "Saying the demand for money rises with the interest rate; it falls.", "Forgetting that barter needs a double coincidence of wants."],
    facts: ["The naira is fiat money and legal tender in Nigeria.", "Cowries and manilas were used as money in old Nigeria.", "Money as a medium of exchange removes the need for barter.", "Keynes gave three motives for holding money: transactions, precautionary and speculative."],
    quiz: [
      { q: "Which of these is the main problem of barter?", options: ["It needs a double coincidence of wants", "It uses money", "It is too fast", "It needs banks"], answer: 0, explanation: "Barter requires each trader to want what the other offers, which is often hard to find." },
      { q: "Which function of money is involved when a trader states that a bag of rice costs ₦80,000?", options: ["Medium of exchange", "Store of value", "Measure of value", "Standard of deferred payment"], answer: 2, explanation: "Stating a price uses money as a measure of value, or unit of account." },
      { q: "Which function of money allows a loan to be repaid in instalments later?", options: ["Medium of exchange", "Store of value", "Measure of value", "Standard of deferred payment"], answer: 3, explanation: "Debts stated and settled later in money use the standard of deferred payment function." },
      { q: "Which of these is a quality of good money?", options: ["It must be perishable", "It must be divisible", "It must be very heavy", "It must be unlimited in supply"], answer: 1, explanation: "Good money must be divisible into small units so that small purchases are possible." },
      { q: "Which of these is near money?", options: ["A ₦1,000 note", "A fixed deposit", "A cow used in barter", "A cheque book"], answer: 1, explanation: "A fixed deposit is not money itself but can quickly be converted into money, so it is near money." },
      { q: "Narrow money, M1, consists of what?", options: ["Currency plus demand deposits", "Currency plus savings deposits only", "All bank deposits", "Currency only"], answer: 0, explanation: "M1 is currency in circulation plus demand deposits that can be spent at once." },
      { q: "The precautionary motive for holding money is holding money for what?", options: ["Daily shopping", "Unexpected expenses", "Buying bonds", "Paying taxes"], answer: 1, explanation: "The precautionary motive is keeping cash for unforeseen events such as illness." },
      { q: "As the interest rate rises, the demand for money for speculative purposes does what?", options: ["Rises", "Falls", "Stays the same", "Becomes infinite"], answer: 1, explanation: "A higher interest rate raises the cost of holding idle cash, so speculative demand falls." },
      { q: "Which of these was used as money in old Nigeria?", options: ["Cowries", "Plastic cards", "Cheques", "Treasury bills"], answer: 0, explanation: "Cowries were widely used as money in old Nigeria before modern currency." },
      { q: "If the money supply is ₦200 billion, velocity is 5, and transactions are 500 billion units, what is the price level?", options: ["1", "2", "4", "5"], answer: 1, explanation: "From MV = PT, 200 x 5 = P x 500, so P = 1,000 / 500 = 2." },
      { q: "Inflation does what to the value of money?", options: ["Raises it", "Reduces it", "Leaves it unchanged", "Doubles it"], answer: 1, explanation: "When prices rise, each naira buys less, so the value of money falls." },
      { q: "Which of these is fiat money?", options: ["Gold coins", "The naira", "Cowries", "Salt"], answer: 1, explanation: "The naira has value because the government declares it legal tender and people accept it." },
      { q: "Saving money in a bank to spend next year uses money as what?", options: ["A medium of exchange", "A store of value", "A measure of value", "A standard of deferred payment"], answer: 1, explanation: "Keeping purchasing power for the future is the store of value function." },
      { q: "Who controls the supply of money in Nigeria?", options: ["Commercial banks alone", "The Central Bank of Nigeria", "The Ministry of Finance alone", "The stock exchange"], answer: 1, explanation: "The Central Bank of Nigeria controls the money supply through its monetary policy tools." },
      { q: "A basket costing ₦50,000 rises in price by 25%. What is its new price?", options: ["₦52,500", "₦60,000", "₦62,500", "₦75,000"], answer: 2, explanation: "25% of 50,000 is 12,500, and 50,000 + 12,500 = 62,500." }
    ],
    status: "published"
  },
  {
    id: "economics-06",
    subjectId: "economics",
    topic: "Money, Banking and Finance",
    subtopic: "Banks and the Central Bank of Nigeria",
    title: "Banks and the Central Bank of Nigeria",
    order: 6,
    introduction: "Banks keep the money system working: they take deposits, lend to businesses, and create credit. This lesson explains commercial banks, how they create credit, the role of the Central Bank of Nigeria, and the tools of monetary policy.",
    objectives: ["Explain the functions of commercial banks", "Describe how commercial banks create credit", "Explain the functions of the Central Bank of Nigeria", "Identify the instruments of monetary policy", "Distinguish monetary policy from fiscal policy"],
    sections: [
      {
        heading: "Commercial Banks",
        body: "Commercial banks, such as First Bank, GTBank, Access Bank and Zenith Bank in Nigeria, are financial institutions that accept deposits and lend money for profit. Their main functions are accepting deposits in current, savings and fixed deposit accounts; lending to individuals and businesses through loans and overdrafts; transferring money by cheque, electronic transfer and standing orders; providing safe custody of valuables; offering foreign exchange services; and advising customers. Banks earn profit from the difference between the interest they pay on deposits and the higher interest they charge on loans. They must keep part of their deposits as reserves and can lend the rest. Because banks lend money that is then redeposited in the banking system, they create credit: an initial deposit can support several rounds of lending."
      },
      {
        heading: "Credit Creation by Banks",
        body: "Credit creation works through the cash reserve ratio, the fraction of deposits a bank must keep as reserves. If the cash reserve ratio is 20%, a bank that receives a deposit of ₦100,000 keeps ₦20,000 and lends ₦80,000. The borrower spends the ₦80,000, and it is deposited in another bank, which keeps 20%, or ₦16,000, and lends ₦64,000. The process continues in smaller and smaller rounds until the total deposits created equal the initial deposit multiplied by the money multiplier, which is 1 divided by the cash reserve ratio. With a ratio of 20%, the multiplier is 5, so ₦100,000 can create ₦500,000 of total deposits. The actual amount created is less when people hold cash instead of depositing it, when banks keep excess reserves, or when borrowers do not spend all their loans. JAMB often asks you to calculate the multiplier and the total credit created."
      },
      {
        heading: "The Central Bank of Nigeria",
        body: "The Central Bank of Nigeria, CBN, is the apex bank, established in 1958 and operating from Abuja. It is the sole issuer of currency in Nigeria: only the CBN can print naira notes and mint coins. It is the banker to the government, keeping government accounts and managing public debt, and the banker to the commercial banks, keeping their reserves. It is the lender of last resort, lending to commercial banks when they cannot borrow elsewhere. It manages the country's external reserves and the exchange rate of the naira. It supervises and regulates banks and other financial institutions, and it implements monetary policy to control inflation and promote economic stability. The CBN also runs development finance programmes, such as loans to agriculture and small businesses, and it operates the clearing house through which cheques and transfers between banks are settled."
      },
      {
        heading: "Monetary Policy Instruments",
        body: "Monetary policy is the use of the money supply and interest rates to achieve economic goals, mainly price stability. The CBN's main instruments are the cash reserve ratio, the monetary policy rate, which is the interest rate at which the CBN lends to banks, and open market operations, the buying and selling of government securities. To reduce inflation, the CBN uses contractionary policy: it raises the cash reserve ratio, raises the monetary policy rate, and sells securities to take money out of circulation. To fight unemployment and recession, it uses expansionary policy: it lowers the ratio and the rate, and buys securities to put money into circulation. Other instruments include the liquidity ratio, special deposits, moral suasion, which is persuading banks to follow CBN guidance, and direct control of credit. Monetary policy differs from fiscal policy, which uses government spending and taxation and is run by the government, not the central bank."
      }
    ],
    definitions: [
      { term: "Commercial bank", meaning: "A financial institution that accepts deposits and lends money for profit." },
      { term: "Cash reserve ratio", meaning: "The fraction of deposits a bank must keep as reserves and not lend out." },
      { term: "Money multiplier", meaning: "The number by which an initial deposit is multiplied through credit creation, equal to 1 divided by the cash reserve ratio." },
      { term: "Lender of last resort", meaning: "The central bank's role of lending to commercial banks when they cannot borrow elsewhere." },
      { term: "Monetary policy", meaning: "The control of the money supply and interest rates by the central bank to achieve economic goals." },
      { term: "Open market operations", meaning: "The buying and selling of government securities by the central bank to control the money supply." }
    ],
    formulas: ["Money multiplier = 1 / cash reserve ratio.", "Total deposits created = initial deposit x money multiplier.", "Total credit created = total deposits created - initial deposit.", "Bank profit = interest earned on loans - interest paid on deposits (before other costs)."],
    examples: [
      {
        title: "Credit creation with a 20% reserve ratio",
        problem: "A customer deposits ₦100,000 in a bank. The cash reserve ratio is 20%. Calculate the money multiplier and the total deposits that can be created.",
        steps: ["Write the multiplier formula: multiplier = 1 / cash reserve ratio.", "Insert the ratio as a decimal: 1 / 0.20 = 5.", "Multiply the initial deposit by the multiplier: 100,000 x 5 = 500,000.", "Note that the total deposits of ₦500,000 include the original ₦100,000.", "Find the credit created if needed: 500,000 - 100,000 = 400,000."],
        answer: "The money multiplier is 5 and total deposits created are ₦500,000."
      },
      {
        title: "Credit creation with a 25% reserve ratio",
        problem: "A bank receives a fresh deposit of ₦200,000 and the cash reserve ratio is 25%. How much can the bank lend from this deposit, and what is the total deposit the banking system can create?",
        steps: ["Find the reserve to keep: 25% of 200,000 = 50,000.", "Find the amount the bank can lend: 200,000 - 50,000 = 150,000.", "Find the multiplier: 1 / 0.25 = 4.", "Find total deposits: 200,000 x 4 = 800,000.", "State both answers."],
        answer: "The bank can lend ₦150,000, and the banking system can create total deposits of ₦800,000."
      }
    ],
    tips: ["The multiplier is 1 divided by the reserve ratio as a decimal, not as a percentage.", "Total deposits include the original deposit; subtract it to get credit created.", "To fight inflation, the CBN tightens: raise the rate and the reserve ratio, sell securities.", "The CBN is the only issuer of currency in Nigeria."],
    mistakes: ["Using 20 instead of 0.20 in the multiplier formula.", "Calling the total deposits the credit created without subtracting the initial deposit.", "Saying commercial banks print money; only the central bank issues currency.", "Confusing monetary policy with fiscal policy."],
    facts: ["The Central Bank of Nigeria was established in 1958.", "The CBN is the sole issuer of the naira.", "The monetary policy rate is the rate at which the CBN lends to banks.", "Banks create credit by lending deposits that are redeposited in the system."],
    quiz: [
      { q: "Which of these is a function of a commercial bank?", options: ["Printing currency", "Accepting deposits and lending", "Setting tax rates", "Making laws"], answer: 1, explanation: "Commercial banks accept deposits and lend money for profit." },
      { q: "If the cash reserve ratio is 20%, what is the money multiplier?", options: ["2", "4", "5", "20"], answer: 2, explanation: "The multiplier is 1 / 0.20 = 5." },
      { q: "A deposit of ₦100,000 with a reserve ratio of 20% can create total deposits of what?", options: ["₦100,000", "₦200,000", "₦400,000", "₦500,000"], answer: 3, explanation: "Total deposits = 100,000 x 5 = 500,000." },
      { q: "Which institution is the sole issuer of currency in Nigeria?", options: ["First Bank", "Central Bank of Nigeria", "Ministry of Finance", "Nigerian Stock Exchange"], answer: 1, explanation: "Only the Central Bank of Nigeria can issue naira notes and coins." },
      { q: "The lender of last resort is which institution?", options: ["A commercial bank", "The central bank", "A microfinance bank", "The World Bank"], answer: 1, explanation: "The central bank lends to commercial banks when they cannot borrow elsewhere." },
      { q: "To reduce inflation, the central bank should do what?", options: ["Lower the monetary policy rate", "Raise the cash reserve ratio", "Buy government securities", "Lower the liquidity ratio"], answer: 1, explanation: "Raising the reserve ratio reduces the money banks can lend, tightening the money supply." },
      { q: "Open market operations involve the central bank doing what?", options: ["Buying and selling government securities", "Printing new notes", "Fixing tax rates", "Lending to farmers directly"], answer: 0, explanation: "Open market operations are the buying and selling of government securities to control the money supply." },
      { q: "A bank receives ₦200,000 with a 25% reserve ratio. How much can it lend?", options: ["₦50,000", "₦100,000", "₦150,000", "₦200,000"], answer: 2, explanation: "It keeps 25% of 200,000, which is 50,000, and can lend 150,000." },
      { q: "Which of these is an expansionary monetary policy action?", options: ["Raising the monetary policy rate", "Selling government securities", "Lowering the cash reserve ratio", "Raising the liquidity ratio"], answer: 2, explanation: "Lowering the reserve ratio lets banks lend more, expanding the money supply." },
      { q: "Monetary policy differs from fiscal policy because monetary policy uses what?", options: ["Government spending and taxation", "Money supply and interest rates", "Tariffs and quotas", "Price controls"], answer: 1, explanation: "Monetary policy uses the money supply and interest rates, run by the central bank." },
      { q: "Which of these limits credit creation by banks?", options: ["People holding cash instead of depositing it", "A lower reserve ratio", "More bank branches", "Higher bank profits"], answer: 0, explanation: "Cash held by the public does not enter the banking system, so it breaks the chain of redepositing." },
      { q: "The Central Bank of Nigeria was established in which year?", options: ["1950", "1958", "1960", "1970"], answer: 1, explanation: "The Central Bank of Nigeria was established in 1958." },
      { q: "If the reserve ratio is 10%, a deposit of ₦50,000 creates total deposits of what?", options: ["₦50,000", "₦250,000", "₦500,000", "₦5,000,000"], answer: 2, explanation: "The multiplier is 1 / 0.10 = 10, so total deposits = 50,000 x 10 = 500,000." },
      { q: "Moral suasion as a monetary policy tool means what?", options: ["Forcing banks by law", "Persuading banks to follow central bank guidance", "Printing more money", "Closing banks"], answer: 1, explanation: "Moral suasion is the central bank persuading banks to act in line with its policy." },
      { q: "Which account allows a customer to withdraw by cheque?", options: ["Fixed deposit account", "Savings account", "Current account", "Domiciliary account only"], answer: 2, explanation: "A current account is a demand deposit account operated by cheque and electronic transfer." }
    ],
    status: "published"
  },
  {
    id: "economics-07",
    subjectId: "economics",
    topic: "Market Structures",
    subtopic: "Perfect competition and monopoly",
    title: "Perfect Competition and Monopoly",
    order: 7,
    introduction: "Not all markets work the same way: a yam seller in a crowded market faces very different conditions from the only electricity supplier in a town. This lesson compares perfect competition and monopoly, the two opposite ends of market structure.",
    objectives: ["Define a market structure and list its types", "Describe the features of perfect competition", "Explain how a firm maximises profit where MR equals MC", "Describe the features of monopoly", "Compare perfect competition and monopoly"],
    sections: [
      {
        heading: "What a Market Structure Is",
        body: "A market structure describes how a market is organised: how many firms there are, whether products are identical or different, how easy it is for new firms to enter, and how much control firms have over price. The four main structures are perfect competition, monopolistic competition, oligopoly and monopoly. In perfect competition there are many small firms selling identical products, while in monopoly there is only one firm selling a product with no close substitute. Oligopoly has a few large firms, and monopolistic competition has many firms selling similar but different products. The structure of a market decides how prices are set, how much is produced, and how much profit firms can make, so JAMB questions often ask you to match a real market, such as the market for garri or for cement, to its structure."
      },
      {
        heading: "Perfect Competition",
        body: "Perfect competition has many buyers and sellers, so no single buyer or seller can influence the price. The product is homogeneous, meaning identical in every way, so buyers do not prefer one seller's product to another's. There is free entry and exit of firms, perfect knowledge of prices, and no transport costs or government interference. Each firm is a price taker: it accepts the market price and can sell any quantity at that price, so its demand curve is perfectly elastic, a horizontal line at the market price. In the short run a firm can make abnormal profit or a loss, but in the long run, free entry and exit remove abnormal profit: new firms enter when profits are high, driving the price down, and firms leave when there are losses, driving the price up. In the long run, therefore, firms in perfect competition earn only normal profit. A real market is never perfectly competitive, but the market for farm produce such as yam and garri comes close."
      },
      {
        heading: "Profit Maximisation: MR Equals MC",
        body: "A firm maximises profit where marginal revenue equals marginal cost, MR = MC. Marginal revenue is the extra revenue from selling one more unit, and marginal cost is the extra cost of producing one more unit. If MR is greater than MC, producing one more unit adds more to revenue than to cost, so the firm should expand. If MC is greater than MR, the last unit cost more than it earned, so the firm should cut back. At the point where they are equal, profit is at its maximum. In perfect competition, price equals marginal revenue, because the firm can sell extra units at the same market price, so the rule becomes price equals marginal cost. Total revenue is price times quantity, and profit is total revenue minus total cost. Normal profit is the minimum profit needed to keep a firm in business and is counted as part of cost, while abnormal profit is profit above normal profit."
      },
      {
        heading: "Monopoly",
        body: "A monopoly is a market with a single seller of a product that has no close substitute, and with barriers that prevent other firms from entering. Barriers include legal protection, such as a patent or a government licence, control of an essential raw material, very large capital requirements, and economies of scale that make one large firm cheaper than several small ones. Unlike the competitive firm, the monopolist is a price maker: it faces the downward-sloping market demand curve, so to sell more it must cut its price. A monopolist can make abnormal profit even in the long run, because entry is blocked. Monopoly can be harmful: the monopolist charges a higher price and produces less than a competitive industry, so consumers lose. But monopoly can also bring benefits: a large firm can afford research, exploit economies of scale, and provide a service, such as water or electricity supply, that would be wasteful to duplicate. Governments therefore regulate monopolies, for example through the Nigerian Electricity Regulatory Commission, or break them up."
      }
    ],
    definitions: [
      { term: "Market structure", meaning: "The organisation of a market in terms of the number of firms, the nature of the product, entry conditions and control over price." },
      { term: "Price taker", meaning: "A firm that must accept the market price and cannot influence it." },
      { term: "Price maker", meaning: "A firm that can set its own price because it faces little or no competition." },
      { term: "Normal profit", meaning: "The minimum profit needed to keep a firm in business, counted as part of cost." },
      { term: "Abnormal profit", meaning: "Profit above normal profit, earned when total revenue exceeds total cost including normal profit." },
      { term: "Barrier to entry", meaning: "An obstacle that prevents new firms from entering an industry, such as a patent or huge capital needs." }
    ],
    formulas: ["Profit maximisation: MR = MC.", "Total revenue = price x quantity.", "Profit = total revenue - total cost.", "In perfect competition: price = marginal revenue = average revenue.", "In monopoly: price is greater than marginal revenue, because the demand curve slopes downwards."],
    examples: [
      {
        title: "Total revenue and profit",
        problem: "A firm sells 100 units of a product at ₦50 each. Its total cost of producing them is ₦4,000, including normal profit of ₦500. Calculate total revenue, profit, and abnormal profit.",
        steps: ["Total revenue = price x quantity = 50 x 100 = 5,000.", "Profit = total revenue - total cost = 5,000 - 4,000 = 1,000.", "Normal profit is already included in total cost, so the ₦1,000 is profit above normal profit.", "Abnormal profit is therefore ₦1,000.", "State the answers."],
        answer: "Total revenue is ₦5,000, profit is ₦1,000, and abnormal profit is ₦1,000."
      },
      {
        title: "Applying MR equals MC",
        problem: "A firm produces 10 units where MR is ₦80 and MC is ₦50. It produces 11 units where MR is ₦70 and MC is ₦70, and 12 units where MR is ₦60 and MC is ₦90. What output maximises profit?",
        steps: ["At 10 units, MR is greater than MC (80 > 50), so producing more adds to profit.", "At 11 units, MR equals MC (70 = 70), so profit is at its maximum.", "At 12 units, MC is greater than MR (90 > 60), so the extra unit reduces profit.", "The firm should therefore produce 11 units.", "State the answer."],
        answer: "Profit is maximised at 11 units, where MR equals MC."
      }
    ],
    tips: ["Perfect competition: many firms, identical product, free entry, price taker.", "Monopoly: one firm, no close substitute, blocked entry, price maker.", "In the long run, perfect competition gives only normal profit.", "MR = MC is the profit maximisation rule in every market structure."],
    mistakes: ["Saying a monopolist can charge any price; it is limited by the demand curve.", "Confusing normal profit with zero profit; normal profit is included in cost.", "Forgetting that a competitive firm's demand curve is horizontal.", "Saying monopoly always harms consumers; it can bring economies of scale."],
    facts: ["In perfect competition, price equals marginal revenue.", "A monopolist can earn abnormal profit in the long run.", "The market for farm produce is close to perfect competition.", "A patent is a legal barrier to entry that can create a monopoly."],
    quiz: [
      { q: "Which market structure has many firms selling identical products?", options: ["Monopoly", "Perfect competition", "Oligopoly", "Monopolistic competition"], answer: 1, explanation: "Perfect competition has many small firms selling a homogeneous product." },
      { q: "A firm in perfect competition is described as what?", options: ["A price maker", "A price taker", "A monopolist", "A price setter"], answer: 1, explanation: "The competitive firm is too small to influence the market price, so it takes the price." },
      { q: "A firm maximises profit where what is true?", options: ["Price equals average cost", "Marginal revenue equals marginal cost", "Total revenue is highest", "Average cost is lowest"], answer: 1, explanation: "Profit is maximised where MR = MC." },
      { q: "Which of these is a feature of monopoly?", options: ["Many sellers", "Free entry", "One seller with no close substitute", "Identical products"], answer: 2, explanation: "A monopoly has a single seller of a product with no close substitute." },
      { q: "In the long run, a firm in perfect competition earns what?", options: ["Abnormal profit", "Only normal profit", "A loss", "Infinite profit"], answer: 1, explanation: "Free entry and exit remove abnormal profit in the long run." },
      { q: "Which of these is a barrier to entry?", options: ["A patent", "Free entry", "Many sellers", "Identical products"], answer: 0, explanation: "A patent legally prevents other firms from producing the product." },
      { q: "Total revenue is calculated as what?", options: ["Price plus quantity", "Price times quantity", "Price divided by quantity", "Cost times quantity"], answer: 1, explanation: "Total revenue equals price multiplied by quantity sold." },
      { q: "A firm sells 100 units at ₦50 each and total cost is ₦4,000. What is its profit?", options: ["₦500", "₦1,000", "₦5,000", "₦9,000"], answer: 1, explanation: "Total revenue is 5,000 and profit is 5,000 - 4,000 = 1,000." },
      { q: "Why is the demand curve of a competitive firm horizontal?", options: ["It is a monopolist", "It can sell any quantity at the market price", "Its product is unique", "It sets the price"], answer: 1, explanation: "The firm is a price taker, so it faces a perfectly elastic demand at the market price." },
      { q: "A monopolist is a price maker because it does what?", options: ["Faces many rivals", "Faces the downward-sloping market demand curve", "Sells an identical product", "Has free entry"], answer: 1, explanation: "As the only seller, the monopolist faces the whole market demand curve and chooses its price." },
      { q: "Which of these is closest to perfect competition in Nigeria?", options: ["Electricity supply", "The market for yam and garri", "Cement production", "Mobile phone networks"], answer: 1, explanation: "Farm produce markets have many small sellers of a similar product, close to perfect competition." },
      { q: "Normal profit is best described as what?", options: ["Profit above cost", "The minimum profit needed to keep a firm in business", "Zero revenue", "A loss"], answer: 1, explanation: "Normal profit is the minimum return that keeps the entrepreneur in the industry." },
      { q: "At 10 units MR is ₦80 and MC is ₦50. What should the firm do?", options: ["Cut output", "Expand output", "Shut down", "Raise price"], answer: 1, explanation: "Since MR exceeds MC, an extra unit adds more to revenue than to cost, so output should expand." },
      { q: "A monopoly charging a higher price and producing less than a competitive industry causes what?", options: ["More consumer choice", "A loss of consumer welfare", "Lower prices", "Free entry"], answer: 1, explanation: "The monopolist restricts output and raises price, reducing consumer welfare." },
      { q: "Which body regulates electricity supply in Nigeria?", options: ["Central Bank of Nigeria", "Nigerian Electricity Regulatory Commission", "Federal Inland Revenue Service", "National Bureau of Statistics"], answer: 1, explanation: "The Nigerian Electricity Regulatory Commission regulates the electricity industry." }
    ],
    status: "published"
  },
  {
    id: "economics-08",
    subjectId: "economics",
    topic: "Market Structures",
    subtopic: "Monopolistic competition and oligopoly",
    title: "Monopolistic Competition and Oligopoly",
    order: 8,
    introduction: "Most real markets sit between perfect competition and monopoly: many sellers of slightly different products, or a few big firms watching each other closely. This lesson explains monopolistic competition and oligopoly, including advertising, branding and the kinked demand curve.",
    objectives: ["Describe the features of monopolistic competition", "Explain the role of product differentiation and advertising", "Describe the features of oligopoly", "Explain the kinked demand curve", "Compare the four market structures"],
    sections: [
      {
        heading: "Monopolistic Competition",
        body: "Monopolistic competition has many firms, free entry and exit, and products that are similar but differentiated: they are substitutes, but not identical. Examples in Nigeria include restaurants, hair salons, clothing shops, sachet water brands and private schools. Each firm has a small monopoly over its own brand, so it faces a downward-sloping demand curve and can set its own price within limits. Firms compete through product differentiation, which is making a product seem different by branding, packaging, quality, design or location, and through advertising and sales promotion. In the short run a firm can earn abnormal profit, but in the long run new firms enter, take some of its customers, and profit falls to normal. Unlike perfect competition, monopolistic competition wastes resources on advertising and produces many similar varieties, but consumers benefit from choice."
      },
      {
        heading: "Oligopoly",
        body: "Oligopoly is a market dominated by a few large firms, such as the cement industry, the mobile phone networks and the commercial banks in Nigeria. The products may be identical, as with cement, or differentiated, as with mobile phone services. Entry is difficult because of huge capital needs, control of raw materials and brand loyalty. The key feature of oligopoly is interdependence: each firm knows that its price and output decisions affect its rivals, and that rivals will react. This leads to non-price competition, such as advertising, branding and better service, rather than price wars, because a price cut by one firm is quickly matched by the others. Firms may also collude, agreeing to fix prices or share the market, which is usually illegal because it harms consumers. In Nigeria, the Federal Competition and Consumer Protection Commission works against such anti-competitive behaviour."
      },
      {
        heading: "The Kinked Demand Curve",
        body: "The kinked demand curve explains why prices in oligopoly are often rigid, or sticky. It assumes that if one firm raises its price, its rivals will not follow, so it loses many customers: demand above the current price is elastic. But if the firm cuts its price, its rivals will follow, so it gains few extra customers: demand below the current price is inelastic. The demand curve therefore has a kink at the current price, elastic above and inelastic below, and the marginal revenue curve has a vertical gap at that point. As long as marginal cost stays within that gap, the firm keeps its price unchanged even when costs change. This explains why the prices of cement, petrol and mobile data can stay fixed for long periods and then jump suddenly. The model is useful for explaining price rigidity, but it does not explain how the original price was set."
      },
      {
        heading: "Comparing the Four Market Structures",
        body: "The four structures differ in the number of firms, the nature of the product, entry conditions, control over price and the level of profit. Perfect competition has many firms, identical products, free entry, no control over price and only normal profit in the long run. Monopolistic competition has many firms, differentiated products, free entry, some control over price and only normal profit in the long run. Oligopoly has a few firms, identical or differentiated products, difficult entry, considerable control over price and possible abnormal profit. Monopoly has one firm, a unique product, blocked entry, full control over price and possible abnormal profit in the long run. When a JAMB question describes a market, pick out the clues: the number of firms and the nature of the product usually give the answer. A market with many sellers of different brands of soap is monopolistic competition; a market with three big cement makers is oligopoly."
      }
    ],
    definitions: [
      { term: "Monopolistic competition", meaning: "A market with many firms selling similar but differentiated products, with free entry and exit." },
      { term: "Oligopoly", meaning: "A market dominated by a few large firms that are interdependent in their decisions." },
      { term: "Product differentiation", meaning: "Making a product seem different from rivals' products through branding, quality, design or packaging." },
      { term: "Collusion", meaning: "An agreement between firms to fix prices or share a market instead of competing." },
      { term: "Kinked demand curve", meaning: "A demand curve in oligopoly that is elastic above the current price and inelastic below it, with a kink at the current price." },
      { term: "Price rigidity", meaning: "The tendency of prices in oligopoly to stay unchanged for long periods." }
    ],
    formulas: ["Monopolistic competition: many firms, differentiated products, free entry, some price control.", "Oligopoly: few firms, interdependence, difficult entry, non-price competition.", "Kinked demand: demand elastic above current price, inelastic below it.", "Long-run profit in monopolistic competition: normal profit only, because of free entry."],
    examples: [
      {
        title: "Identifying a market structure",
        problem: "In a town there are many hair salons. Each offers a similar service, but they differ in name, decoration, location and price. New salons open easily. What market structure is this?",
        steps: ["Count the firms: there are many, so it is not monopoly or oligopoly.", "Check the product: the service is similar but differentiated by name and location.", "Check entry: new salons open easily, so entry is free.", "Match these features to monopolistic competition.", "Conclude the market is monopolistic competition."],
        answer: "This is monopolistic competition: many firms, differentiated products and free entry."
      },
      {
        title: "Why a cement firm does not cut its price",
        problem: "A cement maker considers cutting its price to win more customers. Why might this fail, according to the kinked demand curve?",
        steps: ["Recall that in oligopoly firms are interdependent.", "Note that if one firm cuts its price, rivals will follow to protect their sales.", "Note that demand below the current price is therefore inelastic.", "Conclude the firm gains few extra customers from the cut.", "Conclude it will probably keep its price unchanged instead."],
        answer: "Rivals will match the price cut, so the firm gains few extra sales and is better off keeping its price."
      }
    ],
    tips: ["Many firms plus different brands means monopolistic competition.", "Few firms plus watching each other means oligopoly.", "The kinked demand curve explains sticky prices, not how the price was first set.", "Free entry means only normal profit in the long run."],
    mistakes: ["Calling every market with many sellers perfect competition; if products differ, it is monopolistic competition.", "Forgetting that oligopolists are interdependent.", "Saying the kinked demand curve explains how prices are set.", "Confusing collusion with competition."],
    facts: ["Restaurants and hair salons are examples of monopolistic competition.", "Cement and mobile networks are examples of oligopoly in Nigeria.", "Firms in oligopoly compete mainly on advertising and branding, not price.", "The kinked demand curve has a gap in the marginal revenue curve."],
    quiz: [
      { q: "Which market has many firms selling differentiated products?", options: ["Perfect competition", "Monopoly", "Monopolistic competition", "Oligopoly"], answer: 2, explanation: "Monopolistic competition has many firms whose products are similar but differentiated." },
      { q: "Product differentiation is best shown by what?", options: ["Identical products", "Branding and packaging that make a product seem different", "Free entry", "A single seller"], answer: 1, explanation: "Differentiation makes a product seem different through branding, quality, design or packaging." },
      { q: "Oligopoly is best described as a market with what?", options: ["One firm", "Many small firms", "A few large interdependent firms", "No barriers to entry"], answer: 2, explanation: "Oligopoly is dominated by a few large firms whose decisions affect each other." },
      { q: "Which Nigerian industry is an example of oligopoly?", options: ["Yam markets", "Cement production", "Street hawking", "Hair salons"], answer: 1, explanation: "Cement production is dominated by a few large firms, which is oligopoly." },
      { q: "In the kinked demand curve, demand above the current price is what?", options: ["Inelastic", "Elastic", "Perfectly inelastic", "Unitary"], answer: 1, explanation: "Above the current price, rivals do not follow a price rise, so the firm loses many customers." },
      { q: "Price rigidity in oligopoly means what?", options: ["Prices change daily", "Prices stay unchanged for long periods", "Prices are set by government", "Prices are always low"], answer: 1, explanation: "Oligopoly prices tend to stay fixed because firms fear rivals' reactions to a change." },
      { q: "Collusion between firms means what?", options: ["Competing on price", "Agreeing to fix prices or share the market", "Advertising heavily", "Entering the market freely"], answer: 1, explanation: "Collusion is an agreement to fix prices or divide the market instead of competing." },
      { q: "In the long run, a firm in monopolistic competition earns what?", options: ["Abnormal profit", "Only normal profit", "A permanent loss", "Monopoly profit"], answer: 1, explanation: "Free entry brings in new firms that take customers, removing abnormal profit." },
      { q: "Which of these is an example of non-price competition?", options: ["Cutting price", "Advertising and branding", "Raising output", "Lowering wages"], answer: 1, explanation: "Advertising and branding compete without changing price, which is common in oligopoly." },
      { q: "Many hair salons with different names and prices best fit which structure?", options: ["Monopoly", "Oligopoly", "Monopolistic competition", "Perfect competition"], answer: 2, explanation: "Many firms, differentiated services and free entry are the marks of monopolistic competition." },
      { q: "The marginal revenue curve in the kinked demand model has what feature?", options: ["No gap", "A vertical gap at the kink", "A horizontal shape", "A positive slope"], answer: 1, explanation: "The change in elasticity at the kink creates a vertical gap in the marginal revenue curve." },
      { q: "Which body works against anti-competitive behaviour in Nigeria?", options: ["Central Bank of Nigeria", "Federal Competition and Consumer Protection Commission", "National Bureau of Statistics", "Federal Inland Revenue Service"], answer: 1, explanation: "The Federal Competition and Consumer Protection Commission handles competition and consumer protection." },
      { q: "A market with three big mobile phone networks is an example of what?", options: ["Perfect competition", "Monopoly", "Oligopoly", "Monopolistic competition"], answer: 2, explanation: "A few large firms dominating a market is oligopoly." },
      { q: "Why do oligopolists avoid price wars?", options: ["They are illegal", "A price cut is quickly matched by rivals", "They have no costs", "Consumers dislike low prices"], answer: 1, explanation: "Rivals match a price cut, so no firm gains and all earn less." },
      { q: "Which structure gives consumers the most choice of varieties?", options: ["Monopoly", "Perfect competition", "Monopolistic competition", "Oligopoly"], answer: 2, explanation: "Monopolistic competition offers many differentiated varieties of a product." }
    ],
    status: "published"
  },
  {
    id: "economics-09",
    subjectId: "economics",
    topic: "Production and Cost Theory",
    subtopic: "Production and factors of production",
    title: "Production and Factors of Production",
    order: 9,
    introduction: "Production is the creation of goods and services that satisfy human wants. This lesson explains the factors of production, the stages of production, and the law of diminishing returns, with Nigerian farming and factory examples.",
    objectives: ["Define production and explain its stages", "Identify and describe the four factors of production", "Explain the reward of each factor", "Distinguish total, average and marginal product", "Explain the law of diminishing returns"],
    sections: [
      {
        heading: "What Production Is",
        body: "Production is the creation of utility, the making of goods and the provision of services that satisfy human wants. It covers primary production, such as farming, fishing and mining; secondary production, such as manufacturing and construction, where raw materials are turned into finished goods; and tertiary production, or services, such as transport, banking, teaching and trading. A farmer growing yam is in primary production, a mill turning cassava into garri is in secondary production, and a trader selling the garri in the market is in tertiary production. Production is not complete until goods reach the final consumer, so transport, storage and marketing are part of production. The aim of production is to satisfy wants, and the level of production in a country decides its national income and living standards."
      },
      {
        heading: "The Factors of Production",
        body: "Production needs four factors. Land is all natural resources: farmland, forests, rivers, minerals and the site of a factory. Its reward is rent. Labour is the human effort, physical and mental, used in production, and its reward is wages or salary. Capital is man-made wealth used to produce more wealth: machines, tools, buildings and money for investment. Its reward is interest. The entrepreneur organises the other factors, takes risks, makes decisions and innovates; the reward is profit. Land and labour are sometimes called primary factors, while capital is a produced factor. In Nigeria, land is abundant but often poorly used, labour is plentiful but often unskilled, capital is scarce and expensive, and entrepreneurship is growing, especially among young people running small businesses. The combination of factors a firm uses depends on their relative prices: where labour is cheap, firms use labour-intensive methods, and where capital is cheap, they use capital-intensive methods."
      },
      {
        heading: "Total, Average and Marginal Product",
        body: "When a firm varies one factor, usually labour, while holding the others fixed, output changes in a pattern described by total product, average product and marginal product. Total product is the total output produced. Average product is total product divided by the number of workers, and it shows output per worker. Marginal product is the extra output from adding one more worker, found by dividing the change in total product by the change in labour. For example, if 5 workers produce 100 bags and 6 workers produce 118 bags, the marginal product of the sixth worker is 18 bags, and the average product with 6 workers is 118 divided by 6, about 19.7 bags. As more workers are added to fixed land or machines, marginal product first rises, because of specialisation, and then falls. The point where marginal product is highest marks the end of increasing returns, and where marginal product becomes negative, total product falls."
      },
      {
        heading: "The Law of Diminishing Returns",
        body: "The law of diminishing returns, also called the law of variable proportions, states that if one factor of production is increased while the others are held fixed, the extra output from each additional unit of the variable factor will eventually fall. The law has three stages. In stage one, total product rises at an increasing rate and marginal product rises, because the fixed factor is underused. In stage two, total product rises at a decreasing rate, marginal product falls but stays positive, and average product falls; this is the rational stage, where a firm should produce. In stage three, total product falls and marginal product becomes negative, because too many workers crowd the fixed factor, for example too many workers on a small farm get in each other's way. The law explains why a farmer cannot keep raising output simply by adding more workers to the same plot, and why firms must balance their factors. It applies in the short run, when at least one factor is fixed."
      }
    ],
    definitions: [
      { term: "Production", meaning: "The creation of goods and services that satisfy human wants." },
      { term: "Land", meaning: "All natural resources used in production, rewarded with rent." },
      { term: "Labour", meaning: "Human effort, physical and mental, used in production, rewarded with wages." },
      { term: "Capital", meaning: "Man-made wealth used to produce more wealth, rewarded with interest." },
      { term: "Entrepreneur", meaning: "The person who organises the other factors, takes risks and makes decisions, rewarded with profit." },
      { term: "Marginal product", meaning: "The extra output produced by adding one more unit of a variable factor." }
    ],
    formulas: ["Average product = total product / number of units of the variable factor.", "Marginal product = change in total product / change in the variable factor.", "Law of diminishing returns: as the variable factor rises with fixed factors, marginal product eventually falls.", "Production function: output = f(land, labour, capital, entrepreneurship)."],
    examples: [
      {
        title: "Average and marginal product",
        problem: "A farm with fixed land produces 100 bags of maize with 5 workers and 118 bags with 6 workers. Calculate the average product with 6 workers and the marginal product of the sixth worker.",
        steps: ["Average product = total product / number of workers = 118 / 6.", "Divide 118 by 6 to get about 19.7 bags per worker.", "Marginal product = change in total product / change in workers = (118 - 100) / (6 - 5).", "The change in output is 18 bags and the change in workers is 1.", "Marginal product is therefore 18 bags."],
        answer: "The average product is about 19.7 bags per worker and the marginal product of the sixth worker is 18 bags."
      },
      {
        title: "Identifying the stages of production",
        problem: "On a small farm, adding workers raises total output, but each new worker adds less than the one before, and average product is falling. Which stage of production is this?",
        steps: ["Note that total product is still rising, so marginal product is positive.", "Note that marginal product is falling, so the firm is past stage one.", "Note that average product is falling, which happens in stage two.", "Recall that stage two is the rational stage of production.", "Conclude the farm is in stage two."],
        answer: "The farm is in stage two, the stage of diminishing returns, where the firm should produce."
      }
    ],
    tips: ["Match each factor to its reward: land-rent, labour-wages, capital-interest, entrepreneur-profit.", "Marginal product is a change, average product is a division.", "Stage two is the rational stage; stage three has negative marginal product.", "The law of diminishing returns applies in the short run with a fixed factor."],
    mistakes: ["Saying capital is money only; capital is machines, tools and buildings too.", "Confusing total product with average product.", "Forgetting that marginal product can become negative.", "Applying the law of diminishing returns to the long run."],
    facts: ["Primary production includes farming, fishing and mining.", "The entrepreneur's reward is profit.", "Average product is total product divided by the number of workers.", "In stage three, total product falls because marginal product is negative."],
    quiz: [
      { q: "Production is best defined as what?", options: ["Making money", "The creation of goods and services that satisfy wants", "Buying and selling", "Saving money"], answer: 1, explanation: "Production creates utility by making goods and providing services that satisfy human wants." },
      { q: "Which of these is primary production?", options: ["Banking", "Farming", "Teaching", "Trading"], answer: 1, explanation: "Farming extracts from nature, so it is primary production." },
      { q: "The reward for land is what?", options: ["Wages", "Interest", "Rent", "Profit"], answer: 2, explanation: "Land earns rent for its owner." },
      { q: "The reward for entrepreneurship is what?", options: ["Wages", "Interest", "Rent", "Profit"], answer: 3, explanation: "The entrepreneur organises production and takes risks, earning profit." },
      { q: "Which of these is capital?", options: ["Farmland", "A tractor", "A worker", "Rainfall"], answer: 1, explanation: "A tractor is man-made wealth used to produce more wealth, so it is capital." },
      { q: "If 5 workers produce 100 bags and 6 workers produce 118 bags, what is the marginal product of the sixth worker?", options: ["18 bags", "20 bags", "19.7 bags", "118 bags"], answer: 0, explanation: "Marginal product is the change in output, 118 - 100 = 18 bags." },
      { q: "Average product is calculated as what?", options: ["Change in output divided by change in workers", "Total product divided by the number of workers", "Total product times workers", "Marginal product times workers"], answer: 1, explanation: "Average product is total product divided by the units of the variable factor." },
      { q: "The law of diminishing returns applies when what is true?", options: ["All factors increase together", "One factor increases while others are fixed", "All factors are fixed", "There is no production"], answer: 1, explanation: "The law applies in the short run, when one factor varies and the others are fixed." },
      { q: "In which stage is marginal product negative?", options: ["Stage one", "Stage two", "Stage three", "No stage"], answer: 2, explanation: "In stage three, too much of the variable factor makes marginal product negative and total product falls." },
      { q: "Which stage of production is the rational stage for a firm?", options: ["Stage one", "Stage two", "Stage three", "Stage four"], answer: 1, explanation: "Stage two, where marginal product is falling but positive, is the rational stage." },
      { q: "Turning cassava into garri in a mill is which type of production?", options: ["Primary", "Secondary", "Tertiary", "Quaternary"], answer: 1, explanation: "Manufacturing raw materials into finished goods is secondary production." },
      { q: "A firm uses labour-intensive methods when what is true?", options: ["Labour is expensive", "Labour is cheap relative to capital", "Capital is free", "There are no workers"], answer: 1, explanation: "Firms use more of the cheaper factor, so cheap labour leads to labour-intensive production." },
      { q: "Which factor organises the other factors of production?", options: ["Land", "Labour", "Capital", "Entrepreneur"], answer: 3, explanation: "The entrepreneur organises land, labour and capital, takes risks and makes decisions." },
      { q: "If total product rises at a decreasing rate, marginal product is doing what?", options: ["Rising", "Falling but positive", "Negative", "Zero"], answer: 1, explanation: "When total product rises more slowly, each extra unit adds less, so marginal product is falling but still positive." },
      { q: "Transport and trading are part of which type of production?", options: ["Primary", "Secondary", "Tertiary", "Extractive"], answer: 2, explanation: "Services such as transport and trading are tertiary production." }
    ],
    status: "published"
  },
  {
    id: "economics-10",
    subjectId: "economics",
    topic: "Production and Cost Theory",
    subtopic: "Cost and revenue theory",
    title: "Cost and Revenue Theory",
    order: 10,
    introduction: "Every firm must watch its costs: the difference between revenue and cost is profit. This lesson explains fixed and variable costs, total, average and marginal cost, revenue, break-even output and economies of scale.",
    objectives: ["Distinguish fixed costs from variable costs", "Calculate total, average and marginal cost", "Explain total, average and marginal revenue", "Calculate break-even output", "Explain economies and diseconomies of scale"],
    sections: [
      {
        heading: "Fixed and Variable Costs",
        body: "Total cost is the sum of fixed cost and variable cost. Fixed costs do not change with output in the short run: rent on a factory, salaries of permanent staff, and insurance are paid even if nothing is produced. Variable costs change with output: raw materials, wages of casual workers, fuel and packaging rise as output rises and fall as it falls. In the long run, all costs are variable, because a firm can change its factory size and its workforce. The distinction matters because a firm that cannot cover its variable costs in the short run should shut down, while a firm that covers its variable costs but not its fixed costs can keep going in the short run and hope for better times. A bakery's oven rent is a fixed cost, while the flour it buys is a variable cost."
      },
      {
        heading: "Total, Average and Marginal Cost",
        body: "Total cost equals fixed cost plus variable cost. Average cost, also called unit cost, is total cost divided by output, and it shows the cost of producing one unit on average. Marginal cost is the extra cost of producing one more unit, found by dividing the change in total cost by the change in output. The average cost curve is U-shaped in the short run: it first falls as fixed costs are spread over more units and workers specialise, then rises as diminishing returns set in and extra workers add less output. The marginal cost curve cuts the average cost curve at its lowest point: when marginal cost is below average cost, average cost falls, and when marginal cost is above average cost, average cost rises. This relationship is a favourite JAMB question, so learn it as a rule rather than a picture."
      },
      {
        heading: "Revenue and Break-Even Output",
        body: "Total revenue is price times quantity sold. Average revenue is total revenue divided by quantity, which equals price. Marginal revenue is the extra revenue from selling one more unit. In perfect competition, price, average revenue and marginal revenue are all equal, because the firm sells every unit at the same market price. Break-even output is the level of output where total revenue equals total cost, so the firm makes neither profit nor loss. It is calculated as fixed cost divided by the difference between price and variable cost per unit. For example, if fixed cost is ₦10,000, price is ₦200 and variable cost per unit is ₦120, the contribution per unit is ₦80, and break-even output is 10,000 divided by 80, which is 125 units. Below 125 units the firm makes a loss, and above it the firm makes a profit. Break-even analysis helps a small business decide how much it must sell to survive."
      },
      {
        heading: "Economies and Diseconomies of Scale",
        body: "Economies of scale are the cost advantages a firm gains as it grows larger, which lower its average cost. Internal economies come from within the firm: technical economies from bigger machines, marketing economies from buying in bulk and advertising widely, financial economies from cheaper loans, managerial economies from specialist managers, and risk-bearing economies from producing many products. External economies come from the growth of the whole industry, such as a pool of skilled workers, better roads and shared research. After a point, further growth brings diseconomies of scale: management becomes hard to control, communication breaks down, workers feel distant from decisions, and average cost begins to rise. The long-run average cost curve is therefore U-shaped, falling while economies dominate and rising when diseconomies take over. The lowest point is the optimum firm size, and JAMB often asks for examples of internal and external economies."
      }
    ],
    definitions: [
      { term: "Fixed cost", meaning: "A cost that does not change with output in the short run, such as rent." },
      { term: "Variable cost", meaning: "A cost that changes with output, such as raw materials." },
      { term: "Average cost", meaning: "Total cost divided by output; the cost per unit." },
      { term: "Marginal cost", meaning: "The extra cost of producing one more unit of output." },
      { term: "Break-even output", meaning: "The output where total revenue equals total cost, so profit is zero." },
      { term: "Economies of scale", meaning: "Cost advantages from producing on a larger scale, which lower average cost." }
    ],
    formulas: ["Total cost = fixed cost + variable cost.", "Average cost = total cost / output.", "Marginal cost = change in total cost / change in output.", "Total revenue = price x quantity; average revenue = total revenue / quantity.", "Break-even output = fixed cost / (price - variable cost per unit)."],
    examples: [
      {
        title: "Total and average cost",
        problem: "A firm has fixed costs of ₦1,000. At an output of 50 units, its variable cost is ₦2,000. Calculate total cost and average cost.",
        steps: ["Total cost = fixed cost + variable cost = 1,000 + 2,000 = 3,000.", "Average cost = total cost / output = 3,000 / 50.", "Divide 3,000 by 50 to get 60.", "State the answers with the currency unit.", "Note that average cost is the cost per unit."],
        answer: "Total cost is ₦3,000 and average cost is ₦60 per unit."
      },
      {
        title: "Break-even output",
        problem: "A small business has fixed costs of ₦10,000 per month. It sells each unit for ₦200 and its variable cost per unit is ₦120. How many units must it sell to break even?",
        steps: ["Find the contribution per unit: price minus variable cost per unit = 200 - 120 = 80.", "Apply the break-even formula: fixed cost / contribution per unit.", "Divide 10,000 by 80 to get 125.", "Check: at 125 units, total revenue is 125 x 200 = 25,000 and total cost is 10,000 + (125 x 120) = 25,000.", "State the answer."],
        answer: "The business must sell 125 units per month to break even."
      }
    ],
    tips: ["Marginal cost cuts average cost at its lowest point.", "In the short run, shut down if price is below average variable cost.", "Break-even uses contribution per unit, not price alone.", "Internal economies come from the firm; external economies come from the industry."],
    mistakes: ["Saying fixed costs change with output.", "Confusing average cost with marginal cost.", "Forgetting to subtract variable cost per unit in the break-even formula.", "Calling diseconomies of scale the same as economies of scale."],
    facts: ["Total cost equals fixed cost plus variable cost.", "The average cost curve is U-shaped in the short run.", "A bakery's oven rent is a fixed cost and its flour is a variable cost.", "Buying raw materials in bulk is a marketing economy of scale."],
    quiz: [
      { q: "Which of these is a fixed cost?", options: ["Raw materials", "Rent on a factory", "Fuel for machines", "Packaging"], answer: 1, explanation: "Rent is paid even when nothing is produced, so it is a fixed cost." },
      { q: "Total cost equals what?", options: ["Fixed cost minus variable cost", "Fixed cost plus variable cost", "Average cost times price", "Revenue minus profit"], answer: 1, explanation: "Total cost is the sum of fixed cost and variable cost." },
      { q: "A firm has fixed cost ₦1,000 and variable cost ₦2,000 at 50 units. What is its average cost?", options: ["₦20", "₦40", "₦60", "₦100"], answer: 2, explanation: "Total cost is 3,000 and average cost is 3,000 / 50 = 60." },
      { q: "Marginal cost is defined as what?", options: ["Total cost divided by output", "The extra cost of one more unit", "Fixed cost divided by output", "Revenue minus cost"], answer: 1, explanation: "Marginal cost is the change in total cost from producing one more unit." },
      { q: "When marginal cost is below average cost, average cost does what?", options: ["Rises", "Falls", "Stays the same", "Becomes zero"], answer: 1, explanation: "If the extra unit costs less than the average, it pulls the average down." },
      { q: "Break-even output is where what is true?", options: ["Total revenue exceeds total cost", "Total revenue equals total cost", "Total cost is zero", "Profit is highest"], answer: 1, explanation: "At break-even, revenue covers all costs and profit is zero." },
      { q: "Fixed cost is ₦10,000, price is ₦200 and variable cost per unit is ₦120. What is break-even output?", options: ["50 units", "80 units", "125 units", "200 units"], answer: 2, explanation: "Contribution per unit is 80, so break-even is 10,000 / 80 = 125 units." },
      { q: "Which of these is an internal economy of scale?", options: ["A pool of skilled workers in the industry", "Buying raw materials in bulk", "Better roads in the area", "Shared research by the industry"], answer: 1, explanation: "Bulk buying is a marketing economy inside the firm, so it is internal." },
      { q: "In the long run, all costs are what?", options: ["Fixed", "Variable", "Zero", "Sunk"], answer: 1, explanation: "In the long run a firm can change all its inputs, so all costs are variable." },
      { q: "Average revenue equals what?", options: ["Total revenue divided by quantity", "Total cost divided by quantity", "Price times cost", "Marginal revenue times quantity"], answer: 0, explanation: "Average revenue is total revenue divided by quantity, which equals price." },
      { q: "In perfect competition, price, average revenue and marginal revenue are how related?", options: ["All equal", "All different", "Price is highest", "Marginal revenue is highest"], answer: 0, explanation: "The competitive firm sells every unit at the market price, so price equals average and marginal revenue." },
      { q: "A firm should shut down in the short run if price falls below what?", options: ["Average total cost", "Average variable cost", "Marginal cost", "Fixed cost"], answer: 1, explanation: "If price cannot cover average variable cost, the firm loses less by shutting down." },
      { q: "Which of these is a diseconomy of scale?", options: ["Cheaper loans for a large firm", "Management becoming hard to control as the firm grows", "Buying in bulk", "Specialist managers"], answer: 1, explanation: "As a firm grows very large, control and communication problems raise average cost." },
      { q: "If total cost rises from ₦3,000 to ₦3,400 when output rises from 50 to 60 units, what is marginal cost?", options: ["₦40", "₦60", "₦400", "₦34"], answer: 0, explanation: "Marginal cost is the change in cost, 400, divided by the change in output, 10, which is 40." },
      { q: "The long-run average cost curve is U-shaped because of what?", options: ["Fixed costs only", "Economies then diseconomies of scale", "Government policy only", "Price changes"], answer: 1, explanation: "Average cost falls while economies of scale dominate and rises when diseconomies take over." }
    ],
    status: "published"
  },
  {
    id: "economics-11",
    subjectId: "economics",
    topic: "Public Finance and Taxation",
    subtopic: "Public finance and government budgets",
    title: "Public Finance and Government Budgets",
    order: 11,
    introduction: "Public finance is how government raises money and spends it. This lesson explains government revenue and expenditure, the national budget, budget deficits and surpluses, and public debt, with Nigeria's federal budget as the leading example.",
    objectives: ["Define public finance", "Identify sources of government revenue", "Identify the main items of government expenditure", "Explain the types of budget", "Explain budget deficits, surpluses and public debt"],
    sections: [
      {
        heading: "What Public Finance Is",
        body: "Public finance is the study of how government raises revenue and spends it to achieve economic and social goals. The government needs money to provide roads, schools, hospitals, security, courts and other public goods that private firms will not provide because they cannot charge each user. Government revenue in Nigeria comes mainly from oil revenue, taxes, customs duties, fees, fines, licences, and borrowing. Government expenditure covers recurrent spending, such as salaries of civil servants and running costs, and capital spending, such as building roads, bridges, schools and power plants. Public finance also covers how the government manages the national debt and how it uses its budget to influence the economy. The Federal Government presents its budget to the National Assembly every year, and each state government presents its own budget."
      },
      {
        heading: "The National Budget",
        body: "A budget is a government's plan of expected revenue and planned expenditure for a year. A balanced budget is one where revenue equals expenditure. A surplus budget is one where revenue exceeds expenditure, and a deficit budget is one where expenditure exceeds revenue. Nigeria usually runs a deficit budget, because the government spends more than it collects, and the gap is filled by borrowing. The budget has two main parts: recurrent expenditure, which is spending on day-to-day running, such as salaries and maintenance, and capital expenditure, which is spending on projects that last, such as roads and hospitals. A good budget should promote growth, reduce poverty and keep inflation low. The budget is also a tool of fiscal policy: the government can raise spending or cut taxes to fight unemployment, and cut spending or raise taxes to fight inflation."
      },
      {
        heading: "Budget Deficits and Public Debt",
        body: "A budget deficit must be financed, and the usual methods are borrowing from the public through treasury bills and bonds, borrowing from the central bank, and borrowing from abroad. Borrowing adds to the public debt, also called the national debt, which is the total amount the government owes. Nigeria's public debt includes domestic debt owed to Nigerians and external debt owed to foreign lenders such as the World Bank and Eurobond holders. Public debt can be useful if the borrowed money builds roads, power and schools that raise future income. But heavy debt is dangerous: a large share of revenue goes to paying interest, leaving less for services, and the debt burden falls on future generations. Debt servicing, the payment of interest and repayment of principal, is now one of the largest items in Nigeria's budget. The Debt Management Office manages Nigeria's public debt."
      },
      {
        heading: "Fiscal Policy",
        body: "Fiscal policy is the use of government spending and taxation to influence the economy, and it is run by the government, not the central bank. Expansionary fiscal policy means raising government spending or cutting taxes to increase demand, create jobs and fight recession; for example, building roads employs workers and raises incomes. Contractionary fiscal policy means cutting spending or raising taxes to reduce demand and fight inflation. Fiscal policy has limits: government revenue is uncertain, especially oil revenue, borrowing is costly, and there are delays between deciding a policy and its effect. Fiscal policy also interacts with monetary policy: if the government borrows heavily, interest rates can rise, which discourages private investment, a problem called crowding out. In Nigeria, fiscal policy must also deal with the sharing of revenue between the federal, state and local governments through the Federation Account."
      }
    ],
    definitions: [
      { term: "Public finance", meaning: "The study of how government raises revenue and spends it." },
      { term: "Budget", meaning: "A government's plan of expected revenue and planned expenditure for a year." },
      { term: "Recurrent expenditure", meaning: "Government spending on day-to-day running, such as salaries and maintenance." },
      { term: "Capital expenditure", meaning: "Government spending on lasting projects, such as roads, schools and hospitals." },
      { term: "Budget deficit", meaning: "The amount by which government expenditure exceeds government revenue in a year." },
      { term: "Public debt", meaning: "The total amount owed by the government to lenders at home and abroad." }
    ],
    formulas: ["Budget balance = government revenue - government expenditure.", "Deficit budget: expenditure > revenue; surplus budget: revenue > expenditure; balanced budget: revenue = expenditure.", "Public debt this year = public debt last year + this year's deficit (if financed by borrowing).", "Fiscal policy: expansionary = higher spending or lower taxes; contractionary = lower spending or higher taxes."],
    examples: [
      {
        title: "Working out a budget balance",
        problem: "In a year, a government collects revenue of ₦15 trillion and spends ₦17 trillion. What is the budget balance, and what type of budget is it?",
        steps: ["Budget balance = revenue - expenditure = 15 - 17 = -2.", "The negative sign shows expenditure exceeds revenue by ₦2 trillion.", "A budget where expenditure exceeds revenue is a deficit budget.", "The deficit of ₦2 trillion must be financed by borrowing.", "State the answers."],
        answer: "The budget has a deficit of ₦2 trillion; it is a deficit budget."
      },
      {
        title: "Classifying government spending",
        problem: "A state government pays ₦5 billion in teachers' salaries and spends ₦8 billion building new classroom blocks. Classify each item as recurrent or capital expenditure.",
        steps: ["Recall that recurrent expenditure is day-to-day running costs.", "Teachers' salaries are paid every month to keep schools running, so they are recurrent.", "Recall that capital expenditure is spending on lasting projects.", "Building classroom blocks creates lasting assets, so it is capital expenditure.", "State the answers."],
        answer: "Teachers' salaries of ₦5 billion are recurrent expenditure; building classrooms of ₦8 billion is capital expenditure."
      }
    ],
    tips: ["Deficit means spending is more than revenue; surplus means revenue is more than spending.", "Salaries are recurrent; building roads is capital.", "Fiscal policy is government spending and tax; monetary policy is money and interest rates.", "Debt servicing is paying interest and repaying principal on public debt."],
    mistakes: ["Calling a deficit budget a surplus budget.", "Classifying road building as recurrent expenditure.", "Saying the central bank runs fiscal policy; the government does.", "Forgetting that borrowing to finance a deficit adds to public debt."],
    facts: ["Nigeria's budget is presented to the National Assembly every year.", "Oil revenue is a major source of government revenue in Nigeria.", "The Debt Management Office manages Nigeria's public debt.", "Revenue is shared between federal, state and local governments through the Federation Account."],
    quiz: [
      { q: "Public finance is concerned with what?", options: ["Private company profits", "How government raises and spends money", "Bank lending", "Foreign trade only"], answer: 1, explanation: "Public finance studies government revenue and expenditure." },
      { q: "Which of these is a source of government revenue in Nigeria?", options: ["Oil revenue", "Workers' savings", "Bank deposits", "Private school fees"], answer: 0, explanation: "Oil revenue is a major source of revenue for the Nigerian government." },
      { q: "Teachers' salaries paid by government are what type of expenditure?", options: ["Capital expenditure", "Recurrent expenditure", "Private expenditure", "Investment expenditure"], answer: 1, explanation: "Salaries are day-to-day running costs, so they are recurrent expenditure." },
      { q: "Building a new bridge is what type of expenditure?", options: ["Recurrent expenditure", "Capital expenditure", "Transfer payment", "Debt servicing"], answer: 1, explanation: "A bridge is a lasting asset, so building it is capital expenditure." },
      { q: "A budget where expenditure exceeds revenue is called what?", options: ["Surplus budget", "Balanced budget", "Deficit budget", "Capital budget"], answer: 2, explanation: "When spending is greater than revenue, the budget is in deficit." },
      { q: "Government revenue is ₦15 trillion and expenditure is ₦17 trillion. What is the budget balance?", options: ["Surplus of ₦2 trillion", "Deficit of ₦2 trillion", "Balanced", "Surplus of ₦32 trillion"], answer: 1, explanation: "Revenue minus expenditure is 15 - 17 = -2, a deficit of ₦2 trillion." },
      { q: "Public debt is best defined as what?", options: ["Money owed by private firms", "The total amount owed by the government", "Money owed by banks", "Taxes not yet collected"], answer: 1, explanation: "Public debt is the total amount the government owes to lenders." },
      { q: "Debt servicing means what?", options: ["Borrowing more money", "Paying interest and repaying principal on debt", "Cancelling all debt", "Printing money"], answer: 1, explanation: "Debt servicing is the payment of interest and the repayment of borrowed money." },
      { q: "Expansionary fiscal policy involves what?", options: ["Cutting spending and raising taxes", "Raising spending or cutting taxes", "Raising interest rates", "Selling government securities"], answer: 1, explanation: "Expansionary fiscal policy raises demand by spending more or taxing less." },
      { q: "Which body manages Nigeria's public debt?", options: ["Central Bank of Nigeria", "Debt Management Office", "Federal Inland Revenue Service", "National Bureau of Statistics"], answer: 1, explanation: "The Debt Management Office manages Nigeria's public debt." },
      { q: "Fiscal policy is run by whom?", options: ["The central bank", "The government", "Commercial banks", "The stock exchange"], answer: 1, explanation: "Fiscal policy uses government spending and taxation, so it is run by the government." },
      { q: "Which of these is a contractionary fiscal policy action?", options: ["Raising government spending", "Cutting taxes", "Raising taxes", "Building more roads"], answer: 2, explanation: "Raising taxes reduces demand, which is contractionary and fights inflation." },
      { q: "Revenue is shared between the federal, state and local governments through what?", options: ["The Central Bank", "The Federation Account", "The stock exchange", "The Debt Management Office"], answer: 1, explanation: "Federally collected revenue is shared through the Federation Account." },
      { q: "Heavy public debt is dangerous mainly because what?", options: ["It raises exports", "Debt servicing takes revenue away from services", "It lowers taxes", "It creates jobs"], answer: 1, explanation: "A large share of revenue spent on interest leaves less for schools, hospitals and roads." },
      { q: "Crowding out occurs when government borrowing does what?", options: ["Lowers interest rates", "Raises interest rates and discourages private investment", "Raises exports", "Reduces the money supply"], answer: 1, explanation: "Heavy government borrowing pushes up interest rates, making private borrowing dearer." }
    ],
    status: "published"
  },
  {
    id: "economics-12",
    subjectId: "economics",
    topic: "Public Finance and Taxation",
    subtopic: "Taxation",
    title: "Taxation",
    order: 12,
    introduction: "Taxation is the main way government raises revenue from its citizens. This lesson explains what tax is, the types and systems of taxation, the canons of a good tax, and the effects of taxation on the Nigerian economy.",
    objectives: ["Define taxation and explain its purposes", "Distinguish direct from indirect taxes", "Explain progressive, proportional and regressive tax systems", "State the canons of taxation", "Explain the effects of taxation and the problem of tax evasion"],
    sections: [
      {
        heading: "What Taxation Is and Why Government Taxes",
        body: "A tax is a compulsory payment made by individuals and firms to the government, with no direct benefit promised in return. It differs from a fee, which is paid for a specific service, and from a fine, which is a punishment. Government taxes for several reasons: to raise revenue to pay for roads, schools, hospitals and security; to redistribute income from the rich to the poor through progressive taxes and welfare spending; to discourage the consumption of harmful goods, such as tobacco and alcohol, through high excise duties; to protect local industries by taxing imports; and to control inflation by reducing the money people have to spend. In Nigeria, the Federal Inland Revenue Service collects federal taxes such as company income tax and value added tax, while state governments collect personal income tax through their internal revenue services."
      },
      {
        heading: "Direct and Indirect Taxes",
        body: "Direct taxes are paid directly by the person or firm on whom they are imposed, and they cannot be shifted to someone else. Examples are personal income tax, company income tax, capital gains tax and petroleum profit tax. Indirect taxes are imposed on goods and services and can be shifted to the consumer in the form of higher prices. Examples are value added tax, VAT, customs duties on imports, and excise duties on goods such as beer and cigarettes. Nigeria's VAT rate is 7.5%, charged on most goods and services. Direct taxes are usually fairer, because they can be related to ability to pay, but they are easier to evade. Indirect taxes are easier to collect and harder to evade, but they fall more heavily on the poor, because the poor spend a larger share of their income on taxed goods. JAMB often asks you to classify a named tax as direct or indirect."
      },
      {
        heading: "Systems of Taxation",
        body: "There are three systems of taxation. In a progressive tax system, the rate of tax rises as income rises, so the rich pay a higher proportion of their income than the poor; personal income tax in Nigeria is progressive. In a proportional tax system, everyone pays the same rate, whatever their income; for example, a flat 10% on all incomes. In a regressive tax system, the rate falls as income rises, so the poor pay a higher proportion of their income than the rich; indirect taxes on basic goods are often regressive in effect. The average tax rate is total tax paid divided by total income, and the marginal tax rate is the tax on one extra naira of income. A good tax system should be fair, and most economists favour progressive taxation because it follows the ability-to-pay principle: those who earn more should contribute more."
      },
      {
        heading: "Canons of Taxation and Tax Problems",
        body: "Adam Smith set out four canons, or principles, of a good tax system: equity, the tax should be fair and based on ability to pay; certainty, the taxpayer should know how much, when and how to pay; convenience, payment should be easy and at a suitable time; and economy, the cost of collecting the tax should be small compared with the revenue. Modern writers add others, such as flexibility, the tax should adjust to changing conditions, and simplicity. Taxation affects the economy in several ways: it reduces the disposable income of consumers, it can discourage work and investment if rates are very high, and it can reduce the profits of firms. The main problems of taxation in Nigeria are tax evasion, which is illegally avoiding tax, tax avoidance, which is legally reducing tax through loopholes, a narrow tax base with many people outside the tax net, and corruption in collection. The government is widening the tax net and using technology to improve collection."
      }
    ],
    definitions: [
      { term: "Tax", meaning: "A compulsory payment to the government, with no direct benefit promised in return." },
      { term: "Direct tax", meaning: "A tax paid directly by the person on whom it is imposed and which cannot be shifted." },
      { term: "Indirect tax", meaning: "A tax on goods and services that can be shifted to the consumer through higher prices." },
      { term: "Progressive tax", meaning: "A tax system where the rate rises as income rises." },
      { term: "Value added tax (VAT)", meaning: "An indirect tax charged on the value added at each stage of production and sale." },
      { term: "Tax evasion", meaning: "Illegally avoiding the payment of tax." }
    ],
    formulas: ["Average tax rate = total tax paid / total income x 100.", "VAT payable = VAT rate x value of goods or services (Nigeria: 7.5%).", "Disposable income = income - direct taxes.", "Progressive tax: tax rate rises with income; proportional tax: same rate for all; regressive tax: rate falls as income rises."],
    examples: [
      {
        title: "Calculating VAT",
        problem: "A shop sells a television for ₦40,000 before VAT. Nigeria's VAT rate is 7.5%. How much VAT is charged and what is the total price the customer pays?",
        steps: ["VAT = 7.5% of 40,000 = 0.075 x 40,000 = 3,000.", "Total price = price before VAT + VAT = 40,000 + 3,000 = 43,000.", "Note that VAT is an indirect tax, shifted to the consumer in the price.", "State both answers."],
        answer: "VAT is ₦3,000 and the customer pays ₦43,000 in total."
      },
      {
        title: "Average and marginal tax rates",
        problem: "A worker earns ₦1,000,000 in a year and pays ₦150,000 in income tax. When her income rises by ₦100,000, she pays an extra ₦25,000 in tax. Calculate her average tax rate and her marginal tax rate.",
        steps: ["Average tax rate = total tax / total income x 100 = 150,000 / 1,000,000 x 100 = 15%.", "Marginal tax rate = extra tax / extra income x 100 = 25,000 / 100,000 x 100 = 25%.", "Note that the marginal rate is higher than the average rate, which is typical of a progressive tax.", "State both answers."],
        answer: "Her average tax rate is 15% and her marginal tax rate is 25%."
      }
    ],
    tips: ["Direct taxes fall on people; indirect taxes fall on goods and services.", "VAT at 7.5% is the most tested indirect tax in Nigeria.", "Progressive: rate rises with income; regressive: rate falls with income.", "Learn Adam Smith's four canons: equity, certainty, convenience, economy."],
    mistakes: ["Calling VAT a direct tax; it is indirect.", "Confusing tax evasion with tax avoidance; evasion is illegal, avoidance is legal.", "Saying a proportional tax is the same as a progressive tax.", "Forgetting that a tax is compulsory with no direct benefit in return."],
    facts: ["Nigeria's VAT rate is 7.5%.", "The Federal Inland Revenue Service collects federal taxes.", "Personal income tax in Nigeria is progressive.", "Adam Smith set out four canons of taxation."],
    quiz: [
      { q: "A tax is best defined as what?", options: ["A voluntary gift to government", "A compulsory payment to government with no direct benefit in return", "A payment for a specific service", "A fine for breaking the law"], answer: 1, explanation: "A tax is compulsory and gives no direct benefit in return, unlike a fee." },
      { q: "Which of these is a direct tax?", options: ["Value added tax", "Customs duty", "Personal income tax", "Excise duty"], answer: 2, explanation: "Personal income tax is paid directly by the earner and cannot be shifted." },
      { q: "Which of these is an indirect tax?", options: ["Company income tax", "Capital gains tax", "Value added tax", "Petroleum profit tax"], answer: 2, explanation: "VAT is charged on goods and services and is passed to the consumer in the price." },
      { q: "Nigeria's VAT rate is what?", options: ["5%", "7.5%", "10%", "15%"], answer: 1, explanation: "The value added tax rate in Nigeria is 7.5%." },
      { q: "A television costs ₦40,000 before VAT at 7.5%. How much VAT is charged?", options: ["₦2,000", "₦3,000", "₦4,000", "₦7,500"], answer: 1, explanation: "VAT is 0.075 x 40,000 = 3,000." },
      { q: "In a progressive tax system, the tax rate does what as income rises?", options: ["Falls", "Stays the same", "Rises", "Becomes zero"], answer: 2, explanation: "In a progressive system, higher incomes are taxed at higher rates." },
      { q: "A worker earns ₦1,000,000 and pays ₦150,000 tax. What is her average tax rate?", options: ["10%", "15%", "20%", "25%"], answer: 1, explanation: "Average rate is 150,000 / 1,000,000 x 100 = 15%." },
      { q: "Which of these is a canon of taxation?", options: ["Equity", "Profit", "Scarcity", "Inflation"], answer: 0, explanation: "Equity, certainty, convenience and economy are Adam Smith's four canons." },
      { q: "Tax evasion differs from tax avoidance because evasion is what?", options: ["Legal", "Illegal", "Cheaper", "Voluntary"], answer: 1, explanation: "Tax evasion is illegally avoiding tax, while avoidance uses legal loopholes." },
      { q: "Which body collects federal taxes in Nigeria?", options: ["Central Bank of Nigeria", "Federal Inland Revenue Service", "Debt Management Office", "National Bureau of Statistics"], answer: 1, explanation: "The Federal Inland Revenue Service collects federal taxes such as company income tax and VAT." },
      { q: "A tax on cigarettes that raises their price is an example of what?", options: ["A direct tax", "An excise duty", "A personal income tax", "A capital gains tax"], answer: 1, explanation: "Excise duties are indirect taxes on goods such as beer and cigarettes." },
      { q: "Which tax system makes the poor pay a higher proportion of their income than the rich?", options: ["Progressive", "Proportional", "Regressive", "Direct"], answer: 2, explanation: "In a regressive system, the rate falls as income rises, so the poor pay a larger share." },
      { q: "The marginal tax rate is defined as what?", options: ["Total tax divided by total income", "Tax on one extra naira of income", "Total tax divided by VAT", "Tax on imports"], answer: 1, explanation: "The marginal rate is the tax paid on an additional unit of income." },
      { q: "One purpose of taxing tobacco heavily is to do what?", options: ["Raise exports", "Discourage its consumption", "Encourage smoking", "Lower its price"], answer: 1, explanation: "High taxes on harmful goods discourage their consumption." },
      { q: "Disposable income equals income minus what?", options: ["Savings", "Direct taxes", "Imports", "Investment"], answer: 1, explanation: "Disposable income is what remains after direct taxes are paid." }
    ],
    status: "published"
  },
  {
    id: "economics-13",
    subjectId: "economics",
    topic: "International Trade and Development",
    subtopic: "International trade and balance of payments",
    title: "International Trade and Balance of Payments",
    order: 13,
    introduction: "No country produces everything it needs: Nigeria sells crude oil abroad and buys machinery, vehicles and wheat in return. This lesson explains why countries trade, comparative advantage, trade protection, the balance of payments and the exchange rate.",
    objectives: ["Explain why countries engage in international trade", "Distinguish absolute from comparative advantage", "Explain the terms of trade", "Describe the balance of payments and its parts", "Explain tariffs, quotas and other trade barriers"],
    sections: [
      {
        heading: "Why Countries Trade",
        body: "International trade is the exchange of goods and services between countries. Countries trade because no country has all the resources it needs: Nigeria has oil but little heavy machinery, while Japan has machinery but little oil. Trade allows countries to specialise in what they produce best and to enjoy a wider variety of goods. It increases total world output, lowers prices through competition, and brings in foreign exchange. Trade also transfers technology and ideas between countries. Nigeria's main exports are crude oil, gas, cocoa, sesame seeds and solid minerals, while its main imports are machinery, vehicles, refined fuel, wheat, rice and medicines. The main trading partners of Nigeria include China, India, the United States, the Netherlands and Spain. Trade is not always equal: a country that depends on one export, such as oil, is badly hurt when the world price of that export falls."
      },
      {
        heading: "Absolute and Comparative Advantage",
        body: "A country has an absolute advantage when it can produce a good using fewer resources than another country. But trade is explained better by comparative advantage: a country should specialise in the good it can produce at the lowest opportunity cost, even if another country is better at producing everything. For example, suppose Nigeria can produce 10 units of cocoa or 5 units of cloth with the same resources, while Ghana can produce 6 units of cocoa or 4 units of cloth. Nigeria's opportunity cost of 1 unit of cocoa is half a unit of cloth, while Ghana's is two-thirds of a unit of cloth, so Nigeria has the comparative advantage in cocoa. Ghana's opportunity cost of 1 unit of cloth is 1.5 units of cocoa, while Nigeria's is 2 units of cocoa, so Ghana has the comparative advantage in cloth. If each specialises and trades, both countries gain. This theory, first explained by David Ricardo, is the main reason economists support free trade, and JAMB often tests it with numbers."
      },
      {
        heading: "The Balance of Payments",
        body: "The balance of payments is a record of all the money flowing into and out of a country in a year. It has two main parts. The current account records trade in goods, called visible trade, trade in services, called invisible trade, such as transport, insurance and tourism, and transfers, such as gifts and remittances from Nigerians abroad. The capital and financial account records investment flows, such as foreign companies building factories in Nigeria and Nigerians investing abroad. A current account deficit means a country is spending more abroad than it earns, while a surplus means it earns more than it spends. Nigeria's balance of payments depends heavily on oil prices: when oil prices are high, export earnings rise and the balance improves; when they fall, the balance worsens and the naira comes under pressure. A persistent deficit must be financed by borrowing or by running down the country's external reserves."
      },
      {
        heading: "Trade Protection and the Exchange Rate",
        body: "Free trade means trade without barriers, but governments often protect local industries. A tariff is a tax on imports, which raises the price of foreign goods and makes local goods more competitive. A quota is a physical limit on the quantity of a good that may be imported. An embargo is a total ban on trade in a good, and a subsidy to local producers lowers their costs. Nigeria has banned the import of some goods, such as rice at certain times, to protect local farmers. Protection can save jobs and help infant industries grow, but it also raises prices for consumers and can make local firms lazy. The exchange rate is the price of one currency in terms of another: for example, 1 US dollar may exchange for ₦1,500. If the naira depreciates, it takes more naira to buy a dollar, so imports become dearer and exports become cheaper abroad. The Central Bank of Nigeria manages the exchange rate and holds the external reserves used to support the naira."
      }
    ],
    definitions: [
      { term: "International trade", meaning: "The exchange of goods and services between countries." },
      { term: "Comparative advantage", meaning: "The ability to produce a good at a lower opportunity cost than another country." },
      { term: "Terms of trade", meaning: "The ratio of the price of a country's exports to the price of its imports." },
      { term: "Balance of payments", meaning: "A record of all money flowing into and out of a country in a year." },
      { term: "Tariff", meaning: "A tax imposed on imported goods." },
      { term: "Exchange rate", meaning: "The price of one currency in terms of another currency." }
    ],
    formulas: ["Terms of trade = (export price index / import price index) x 100.", "Opportunity cost of good X = units of good Y given up / units of good X gained.", "Balance of payments: current account + capital and financial account + reserves = 0.", "Depreciation of the naira: more naira are needed to buy one unit of foreign currency."],
    examples: [
      {
        title: "Terms of trade",
        problem: "A country's export price index is 120 and its import price index is 80. Calculate the terms of trade and say whether they are favourable.",
        steps: ["Write the formula: terms of trade = (export price index / import price index) x 100.", "Insert the values: (120 / 80) x 100.", "Divide 120 by 80 to get 1.5.", "Multiply by 100 to get 150.", "Note that the value is above 100, so the terms of trade are favourable."],
        answer: "The terms of trade are 150, which is favourable."
      },
      {
        title: "Comparative advantage",
        problem: "Nigeria can produce 10 units of cocoa or 5 units of cloth with the same resources. Ghana can produce 6 units of cocoa or 4 units of cloth. Which country has the comparative advantage in cocoa?",
        steps: ["Find Nigeria's opportunity cost of 1 unit of cocoa: 5 / 10 = 0.5 units of cloth.", "Find Ghana's opportunity cost of 1 unit of cocoa: 4 / 6 = 0.67 units of cloth.", "Compare the two: 0.5 is less than 0.67.", "The country with the lower opportunity cost has the comparative advantage.", "Conclude Nigeria has the comparative advantage in cocoa."],
        answer: "Nigeria has the comparative advantage in cocoa, with an opportunity cost of 0.5 units of cloth against Ghana's 0.67."
      }
    ],
    tips: ["Comparative advantage is about opportunity cost, not about being better at everything.", "Terms of trade above 100 are favourable; below 100 are unfavourable.", "A tariff is a tax on imports; a quota is a limit on quantity.", "When the naira depreciates, imports become dearer and exports cheaper abroad."],
    mistakes: ["Confusing absolute advantage with comparative advantage.", "Saying a tariff is a limit on quantity; that is a quota.", "Forgetting that the balance of payments includes services and transfers, not just goods.", "Saying depreciation of the naira makes imports cheaper; it makes them dearer."],
    facts: ["Nigeria's main export is crude oil.", "David Ricardo explained the theory of comparative advantage.", "The current account records visible trade, invisible trade and transfers.", "The Central Bank of Nigeria manages the exchange rate."],
    quiz: [
      { q: "International trade is best defined as what?", options: ["Trade within a country", "The exchange of goods and services between countries", "Trade in one good only", "Trade without money"], answer: 1, explanation: "International trade is trade across national borders." },
      { q: "Nigeria's main export is what?", options: ["Cocoa", "Crude oil", "Rice", "Machinery"], answer: 1, explanation: "Crude oil is by far Nigeria's largest export and source of foreign exchange." },
      { q: "Comparative advantage means producing a good at what?", options: ["The lowest money cost", "The lowest opportunity cost", "The highest quality", "The fastest speed"], answer: 1, explanation: "Comparative advantage is about the lowest opportunity cost, not the lowest money cost." },
      { q: "If the export price index is 120 and the import price index is 80, what are the terms of trade?", options: ["40", "66.7", "150", "200"], answer: 2, explanation: "Terms of trade = 120 / 80 x 100 = 150." },
      { q: "A terms of trade figure above 100 is described as what?", options: ["Unfavourable", "Favourable", "Balanced", "Zero"], answer: 1, explanation: "Above 100 means export prices have risen relative to import prices, which is favourable." },
      { q: "Which of these is part of the current account?", options: ["Foreign direct investment", "Trade in goods", "Borrowing from the World Bank", "Building a factory abroad"], answer: 1, explanation: "Trade in goods, or visible trade, is recorded in the current account." },
      { q: "A tariff is best defined as what?", options: ["A limit on import quantity", "A tax on imported goods", "A ban on trade", "A subsidy to exporters"], answer: 1, explanation: "A tariff is a tax charged on goods coming into a country." },
      { q: "A quota is best defined as what?", options: ["A tax on imports", "A physical limit on the quantity of imports", "A total ban on trade", "A subsidy to local firms"], answer: 1, explanation: "A quota limits how much of a good may be imported." },
      { q: "If the naira depreciates against the dollar, what happens to imports?", options: ["They become cheaper", "They become dearer", "They stop completely", "They are unaffected"], answer: 1, explanation: "Depreciation means more naira are needed per dollar, so imports cost more in naira." },
      { q: "Nigeria can produce 10 cocoa or 5 cloth; Ghana can produce 6 cocoa or 4 cloth. Who has the comparative advantage in cocoa?", options: ["Ghana", "Nigeria", "Neither", "Both equally"], answer: 1, explanation: "Nigeria's opportunity cost of cocoa is 0.5 cloth, below Ghana's 0.67, so Nigeria has the advantage." },
      { q: "Invisible trade refers to trade in what?", options: ["Goods", "Services", "Oil only", "Weapons"], answer: 1, explanation: "Invisible trade is trade in services such as transport, insurance, banking and tourism." },
      { q: "A current account deficit means what?", options: ["The country earns more abroad than it spends", "The country spends more abroad than it earns", "Exports equal imports", "There is no trade"], answer: 1, explanation: "A deficit means payments abroad exceed receipts from abroad." },
      { q: "Who first explained the theory of comparative advantage?", options: ["Adam Smith", "David Ricardo", "John Maynard Keynes", "Alfred Marshall"], answer: 1, explanation: "David Ricardo explained comparative advantage in the theory of international trade." },
      { q: "Remittances from Nigerians abroad are recorded in which part of the balance of payments?", options: ["Capital account", "Current account transfers", "Visible trade", "External reserves only"], answer: 1, explanation: "Transfers such as remittances are recorded in the current account." },
      { q: "If $1 exchanges for ₦1,500, how many naira does $2,000 cost?", options: ["₦300,000", "₦1,500,000", "₦3,000,000", "₦30,000,000"], answer: 2, explanation: "2,000 x 1,500 = 3,000,000 naira." }
    ],
    status: "published"
  },
  {
    id: "economics-14",
    subjectId: "economics",
    topic: "International Trade and Development",
    subtopic: "Economic development and growth in Nigeria",
    title: "Economic Development and Growth in Nigeria",
    order: 14,
    introduction: "Nigeria is rich in people and resources, yet development has been slow. This final lesson explains the features of a developing economy, the obstacles to development in Nigeria, and the policies that can raise growth and living standards.",
    objectives: ["Describe the features of a developing economy", "Identify the obstacles to development in Nigeria", "Explain the roles of agriculture, industry and services in development", "Describe policies that promote development", "Explain the roles of international organisations in development"],
    sections: [
      {
        heading: "Features of a Developing Economy",
        body: "A developing economy, such as Nigeria's, has a low GDP per capita, a high share of agriculture in employment, low levels of industrialisation, high unemployment and underemployment, a high rate of population growth, low literacy and poor health, inadequate infrastructure such as roads, power and water, and heavy dependence on a few primary exports. Most workers are in the informal sector, and many people live below the poverty line. Savings are low because incomes are low, so investment is low, and low investment keeps incomes low: this is the vicious circle of poverty. Developing economies also have a dual structure: a small modern sector, such as oil, banking and telecoms, exists alongside a large traditional sector of subsistence farming and small trading. Development means breaking out of this circle by raising productivity, building infrastructure, educating people and diversifying the economy."
      },
      {
        heading: "Obstacles to Development in Nigeria",
        body: "Nigeria faces many obstacles to development. Poor infrastructure is a major one: unreliable electricity raises the cost of doing business, bad roads raise transport costs, and poor water supply harms health. Corruption diverts public money from schools, hospitals and roads. Over-dependence on oil makes the economy vulnerable to world oil prices and discourages farming and manufacturing, a problem sometimes called the Dutch disease. Unemployment is high, especially among young people, and many graduates cannot find work. The population grows fast, so schools, hospitals and jobs struggle to keep up. Insecurity in some regions disrupts farming and trade. Low savings and limited access to credit hold back small businesses. Weak institutions, poor policy implementation and a large informal sector that pays little tax also limit the government's ability to fund development. Each of these obstacles is a possible JAMB question, so learn them with a Nigerian example."
      },
      {
        heading: "Agriculture, Industry and Services",
        body: "Development requires all three sectors to grow together. Agriculture employs most Nigerians and produces food and raw materials, but it is held back by small farm sizes, poor seeds, little mechanisation and poor storage, so much food is lost after harvest. Industrialisation turns raw materials into finished goods, creates jobs and earns foreign exchange, but Nigerian industry is held back by high power costs, expensive credit and competition from cheap imports. The services sector, including banking, telecoms, trade, transport and entertainment, has grown fast in Nigeria, with mobile phones and Nollywood as success stories, but services alone cannot develop a country without farming and manufacturing. The government has tried policies such as the Anchor Borrowers' Programme for farmers, import bans to protect local industry, and special economic zones. Diversification, reducing dependence on oil by growing agriculture, manufacturing and services, is the central aim of Nigerian development policy."
      },
      {
        heading: "Policies and Institutions for Development",
        body: "Development policies include investing in education and health to build human capital, building infrastructure such as power, roads and rail, giving credit to small businesses, using fiscal and monetary policy to keep prices stable, and diversifying exports. Population policy matters too: slower population growth makes it easier to raise living standards. International organisations also play a role. The World Bank lends for development projects, the International Monetary Fund gives advice and short-term loans, the African Development Bank funds African projects, and the World Trade Organization sets the rules of world trade. Nigeria is a member of ECOWAS, which promotes trade between West African countries, and of OPEC, which coordinates the oil policies of oil-exporting countries. Development is slow work: it needs honest government, stable policies, investment in people and patience, and the gains must reach ordinary Nigerians, not only the rich."
      }
    ],
    definitions: [
      { term: "Developing economy", meaning: "An economy with low income per head, low industrialisation and poor living standards." },
      { term: "Vicious circle of poverty", meaning: "Low income leads to low savings, low investment and low income again." },
      { term: "Diversification", meaning: "Reducing dependence on one product or sector by developing others." },
      { term: "Human capital", meaning: "The skills, knowledge and health of the workforce." },
      { term: "Dutch disease", meaning: "The harm done to other sectors when a boom in one export, such as oil, makes the currency strong and other exports uncompetitive." },
      { term: "Infant industry", meaning: "A new local industry that needs temporary protection until it can compete with foreign firms." }
    ],
    formulas: ["GDP per capita = GDP / population.", "Growth rate = (real GDP this year - real GDP last year) / real GDP last year x 100.", "Development = economic growth + improvements in health, education, employment and equality.", "Diversification reduces risk: income from many sectors is more stable than income from one export."],
    examples: [
      {
        title: "GDP per capita",
        problem: "Nigeria's GDP is ₦200 trillion and its population is 200 million. Calculate GDP per capita.",
        steps: ["Write the formula: GDP per capita = GDP / population.", "Insert the values: 200 trillion / 200 million.", "Convert to the same units: 200,000,000,000,000 / 200,000,000.", "Divide: 200 trillion divided by 200 million equals 1,000,000.", "State the answer in naira."],
        answer: "GDP per capita is ₦1,000,000."
      },
      {
        title: "The vicious circle of poverty",
        problem: "A farming village earns very little income. Explain, step by step, how the vicious circle of poverty keeps the village poor.",
        steps: ["Start with low income: the farmers earn little from their small harvests.", "Low income means low savings: almost everything earned is spent on food.", "Low savings means low investment: the farmers cannot buy better seeds or a tractor.", "Low investment means low productivity: output stays low.", "Low output means low income again, completing the circle."],
        answer: "Low income leads to low savings, low investment and low productivity, which keeps income low."
      }
    ],
    tips: ["Development is growth plus welfare; growth alone is not development.", "Oil dependence is Nigeria's biggest structural weakness.", "The vicious circle of poverty starts with low income and ends with low income.", "ECOWAS promotes West African trade; OPEC coordinates oil policy."],
    mistakes: ["Saying development and growth are the same thing.", "Forgetting that services alone cannot develop a country.", "Calling the vicious circle a government policy; it is a trap to escape.", "Confusing the World Bank with the International Monetary Fund."],
    facts: ["Agriculture employs most Nigerians.", "Nigeria is a member of ECOWAS and OPEC.", "The Anchor Borrowers' Programme supports farmers with credit.", "Low savings and low investment keep incomes low in poor economies."],
    quiz: [
      { q: "Which of these is a feature of a developing economy?", options: ["High GDP per capita", "High dependence on a few primary exports", "Low population growth", "Full industrialisation"], answer: 1, explanation: "Developing economies often depend on one or a few primary exports, such as oil." },
      { q: "The vicious circle of poverty starts and ends with what?", options: ["High savings", "Low income", "High investment", "High exports"], answer: 1, explanation: "Low income means low savings and low investment, which keeps income low." },
      { q: "Nigeria's GDP is ₦200 trillion and its population is 200 million. What is GDP per capita?", options: ["₦100,000", "₦1,000,000", "₦10,000,000", "₦200,000"], answer: 1, explanation: "200 trillion divided by 200 million equals 1,000,000 naira." },
      { q: "Dutch disease in Nigeria refers to what?", options: ["A health epidemic", "Harm to other sectors from the oil boom", "A drought", "A banking crisis"], answer: 1, explanation: "The oil boom can make other sectors, such as farming and manufacturing, uncompetitive." },
      { q: "Diversification means what?", options: ["Depending only on oil", "Developing many sectors to reduce dependence on one", "Banning all imports", "Printing more money"], answer: 1, explanation: "Diversification spreads the economy across agriculture, industry and services." },
      { q: "Which sector employs most Nigerians?", options: ["Banking", "Agriculture", "Oil and gas", "Telecoms"], answer: 1, explanation: "Agriculture employs the largest share of Nigeria's workforce." },
      { q: "Human capital refers to what?", options: ["Money in banks", "The skills, knowledge and health of workers", "Machines and factories", "Natural resources"], answer: 1, explanation: "Human capital is the productive quality of the people, built by education and health." },
      { q: "Which organisation lends for long-term development projects?", options: ["World Bank", "OPEC", "ECOWAS", "Central Bank of Nigeria"], answer: 0, explanation: "The World Bank lends to countries for development projects such as roads and schools." },
      { q: "Nigeria is a member of OPEC, which coordinates what?", options: ["West African trade", "Oil policies of oil-exporting countries", "World health", "Education"], answer: 1, explanation: "OPEC is the organisation of oil-exporting countries, coordinating their oil policies." },
      { q: "ECOWAS promotes what?", options: ["Oil prices", "Trade between West African countries", "World banking", "Military rule"], answer: 1, explanation: "ECOWAS is the Economic Community of West African States, promoting regional trade and cooperation." },
      { q: "Which of these is an obstacle to development in Nigeria?", options: ["Reliable electricity", "Corruption", "High literacy", "Good roads"], answer: 1, explanation: "Corruption diverts public money from development projects." },
      { q: "The Anchor Borrowers' Programme supports which group?", options: ["Bankers", "Farmers", "Oil companies", "Civil servants"], answer: 1, explanation: "The Anchor Borrowers' Programme gives credit to farmers to raise agricultural output." },
      { q: "An infant industry is best described as what?", options: ["A very old industry", "A new local industry needing temporary protection", "A foreign company", "A closed industry"], answer: 1, explanation: "Infant industries are new and need protection until they can compete." },
      { q: "Which of these best shows economic development rather than just growth?", options: ["GDP rises but schools do not improve", "GDP rises and literacy and health improve", "Oil exports rise", "Population rises"], answer: 1, explanation: "Development is growth plus better living standards, such as literacy and health." },
      { q: "Low savings in a poor country lead to what?", options: ["High investment", "Low investment", "High exports", "Low population"], answer: 1, explanation: "With little saved, there is little money to invest in farms, factories and infrastructure." }
    ],
    status: "published"
  },
];
