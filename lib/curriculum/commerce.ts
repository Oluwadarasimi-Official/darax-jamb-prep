import type { Lesson, SubjectDef } from "./types";

export const SUBJECT: SubjectDef = {
  id: "commerce",
  name: "Commerce",
  short: "COM",
  colour: "#2f6fd0",
  tagline: "Trade, business, insurance and marketing.",
  description: "Master trade, business organisations, insurance, marketing and banking for JAMB, with Nigerian business examples and original practice questions.",
  topics: ["Trade and the Channels of Distribution", "Business Organisations", "Insurance", "Marketing and Advertising", "Money, Banking and Credit", "Warehousing and Transportation", "Consumer Protection and Business Law"],
};

export const LESSONS: Lesson[] = [
  {
    id: "commerce-01",
    subjectId: "commerce",
    topic: "Trade and the Channels of Distribution",
    subtopic: "Meaning, types and importance of trade",
    title: "Trade: Meaning, Types and Importance",
    order: 1,
    introduction: "Trade is the buying and selling of goods and services, and it is the heart of commerce. This lesson explains what trade is, the difference between home and foreign trade, and why trade matters to Nigeria and the world.",
    objectives: ["Define trade and commerce and explain their relationship", "Distinguish between home trade and foreign trade", "Explain the differences between wholesale and retail trade", "Describe the importance of trade to producers, consumers and the nation", "Identify the aids to trade and their functions"],
    sections: [
      {
        heading: "What Trade and Commerce Mean",
        body: "Trade is the buying and selling of goods and services for money, usually with the aim of making a profit. A trader buys goods from a producer or a wholesaler and sells them to someone else at a higher price. Commerce is wider than trade: it covers trade itself plus all the activities that help trade to happen, which are called the aids to trade. These aids include banking, insurance, transport, warehousing, communication and advertising. Without them, goods could not move from producers to consumers. In short, trade is the exchange of goods, while commerce is trade plus the services that make exchange possible. This is why commerce is often described as the distribution side of business, while industry is the production side."
      },
      {
        heading: "Home Trade and Foreign Trade",
        body: "Home trade, also called internal trade, is trade carried on within the borders of one country. In Nigeria, a trader in Onitsha who sells rice to a buyer in Kano is engaged in home trade. Home trade is divided into wholesale trade, where goods are bought in large quantities and sold to retailers, and retail trade, where goods are sold in small quantities to the final consumer. Foreign trade, also called international trade, is trade between two or more countries. It is divided into import trade, buying goods from other countries, and export trade, selling goods to other countries. Nigeria exports crude oil, cocoa, rubber and solid minerals, and imports machinery, vehicles, electronics and refined fuel. Foreign trade earns foreign exchange, widens the choice of goods available, and allows a country to specialise in what it produces best."
      },
      {
        heading: "Wholesale and Retail Trade",
        body: "The wholesaler buys in bulk from manufacturers, breaks the bulk into smaller quantities, stores the goods, and sells them to retailers. Because the wholesaler buys in large quantities, he often enjoys trade discounts and can offer credit to retailers. The retailer is the last link in the chain of distribution: he buys from the wholesaler and sells in small quantities to the final consumer. Retailers are found in markets, shops and supermarkets, and in Nigeria they include market women, kiosks, supermarkets such as Shoprite and local provision stores. The retailer also offers services such as home delivery, after-sales service and credit to trusted customers. Both wholesalers and retailers add value by making goods available in the right place, at the right time and in the right quantity."
      },
      {
        heading: "Importance of Trade and the Aids to Trade",
        body: "Trade links producers and consumers, so goods produced in one place can reach people who need them elsewhere. It creates employment for millions of Nigerians: traders, drivers, porters, bankers and insurers all depend on trade. Trade also encourages production, because producers make more when they know there is a market, and it raises the standard of living by widening the choice of goods. The aids to trade make all this possible: banking provides money and credit, transport moves goods, warehousing stores them until needed, insurance covers the risk of loss, communication passes information, and advertising informs buyers. Without any one of these aids, trade would be slower, riskier and more expensive. In the modern Nigerian economy, e-commerce platforms such as Jumia and Konga show how communication and transport have made trade faster than ever."
      }
    ],
    definitions: [
      { term: "Trade", meaning: "The buying and selling of goods and services for money, usually to make a profit." },
      { term: "Commerce", meaning: "Trade plus all the activities that aid trade, such as banking, transport, insurance and advertising." },
      { term: "Home trade", meaning: "Trade carried on within the borders of one country." },
      { term: "Foreign trade", meaning: "Trade between two or more countries, covering imports and exports." },
      { term: "Wholesaler", meaning: "A trader who buys goods in large quantities from manufacturers and sells them to retailers." },
      { term: "Retailer", meaning: "A trader who buys from wholesalers and sells in small quantities to the final consumer." }
    ],
    formulas: ["Commerce = Trade + Aids to trade.", "Aids to trade: banking, insurance, transport, warehousing, communication, advertising.", "Home trade = wholesale trade + retail trade.", "Foreign trade = import trade + export trade."],
    examples: [
      {
        title: "Classifying a trade transaction",
        problem: "A trader in Lagos buys 500 bags of rice from a mill in Thailand and sells them to wholesalers in Nigeria. What type of trade is each part of this transaction?",
        steps: ["Note the rice crosses an international border, from Thailand to Nigeria.", "Buying goods from another country is import trade, a form of foreign trade.", "Selling the rice to Nigerian wholesalers takes place within Nigeria.", "Selling within one country is home trade, specifically wholesale trade.", "Conclude that the transaction combines foreign trade (import) and home trade (wholesale)."],
        answer: "Buying from Thailand is import trade (foreign trade); selling to Nigerian wholesalers is home trade (wholesale trade)."
      },
      {
        title: "Wholesaler or retailer?",
        problem: "Mama Nkechi buys 200 cartons of noodles from a distributor and sells them in packs of five to families in her neighbourhood. Is she a wholesaler or a retailer?",
        steps: ["Recall that a wholesaler sells in large quantities to other traders.", "Recall that a retailer sells in small quantities to the final consumer.", "Mama Nkechi sells small packs to families who will eat the noodles themselves.", "Her customers are final consumers, not other traders.", "Conclude that she is a retailer."],
        answer: "Mama Nkechi is a retailer because she sells in small quantities to final consumers."
      }
    ],
    tips: ["Remember: commerce is wider than trade — commerce is trade plus the aids to trade.", "Link every aid to trade to its function: banking gives money, transport moves goods, insurance covers risk.", "For Nigerian examples, use Onitsha Main Market, Balogun Market and e-commerce platforms such as Jumia.", "Import is buying from abroad; export is selling abroad — do not mix them up."],
    mistakes: ["Saying trade and commerce are the same thing; commerce includes the aids to trade.", "Calling a retailer a wholesaler; the retailer sells to the final consumer.", "Confusing import and export.", "Forgetting that the wholesaler buys in bulk and breaks the bulk for retailers."],
    facts: ["Nigeria's main export is crude oil.", "The wholesaler breaks the bulk for the retailer.", "Banking, insurance, transport, warehousing, communication and advertising are the aids to trade.", "Home trade is divided into wholesale and retail trade."],
    quiz: [
      { q: "What is trade?", options: ["The production of goods in a factory", "The buying and selling of goods and services", "The storage of goods in a warehouse", "The movement of goods by road"], answer: 1, explanation: "Trade is the buying and selling of goods and services, usually to make a profit." },
      { q: "Commerce is best described as what?", options: ["Trade only", "Trade plus the aids to trade", "Banking only", "Production only"], answer: 1, explanation: "Commerce covers trade itself plus the aids to trade, such as banking, transport, insurance and advertising." },
      { q: "A trader in Onitsha sells yams to a buyer in Kano. This is an example of what?", options: ["Foreign trade", "Home trade", "Export trade", "Barter trade"], answer: 1, explanation: "Both buyer and seller are in Nigeria, so the trade takes place within one country: home trade." },
      { q: "Nigeria selling crude oil to India is an example of what?", options: ["Import trade", "Home trade", "Export trade", "Retail trade"], answer: 2, explanation: "Selling goods to another country is export trade, a form of foreign trade." },
      { q: "Which of these is an aid to trade?", options: ["Farming", "Insurance", "Mining", "Fishing"], answer: 1, explanation: "Insurance is one of the aids to trade because it covers the risk of loss in trading." },
      { q: "A wholesaler is a trader who does what?", options: ["Sells in small quantities to final consumers", "Buys in bulk and sells to retailers", "Produces the goods he sells", "Transports goods across borders"], answer: 1, explanation: "The wholesaler buys in large quantities from manufacturers and sells to retailers." },
      { q: "The last link in the chain of distribution is the what?", options: ["Manufacturer", "Wholesaler", "Retailer", "Importer"], answer: 2, explanation: "The retailer sells in small quantities to the final consumer, so he is the last link in the chain." },
      { q: "Which of these is a benefit of foreign trade to Nigeria?", options: ["It earns foreign exchange", "It stops all local production", "It removes the need for transport", "It makes goods scarcer"], answer: 0, explanation: "Foreign trade, especially exporting crude oil, earns foreign exchange for Nigeria." },
      { q: "Breaking the bulk means what?", options: ["Buying goods in large quantities and dividing them into smaller quantities", "Destroying damaged goods", "Selling goods abroad", "Storing goods for a long time"], answer: 0, explanation: "The wholesaler buys in bulk and breaks the bulk into smaller quantities that retailers can buy." },
      { q: "Which of these is NOT an aid to trade?", options: ["Banking", "Advertising", "Warehousing", "Manufacturing"], answer: 3, explanation: "Manufacturing is production, not an aid to trade; the aids are banking, insurance, transport, warehousing, communication and advertising." },
      { q: "A supermarket that sells rice in small bags to families is engaged in what?", options: ["Wholesale trade", "Retail trade", "Import trade", "Entrepot trade"], answer: 1, explanation: "Selling in small quantities to final consumers is retail trade." },
      { q: "Which of these is an example of an import into Nigeria?", options: ["Cocoa sold to the Netherlands", "Machinery bought from China", "Yams sold from Benue to Lagos", "Rubber sold to Malaysia"], answer: 1, explanation: "Buying machinery from China means goods enter Nigeria from abroad, which is an import." },
      { q: "Trade links producers and consumers mainly by doing what?", options: ["Making goods available where they are needed", "Reducing the number of goods produced", "Stopping the movement of goods", "Raising the price of all goods"], answer: 0, explanation: "Trade moves goods from where they are produced to where consumers need them." },
      { q: "Which aid to trade helps a trader to store goods until they are needed?", options: ["Banking", "Warehousing", "Advertising", "Communication"], answer: 1, explanation: "Warehousing stores goods safely until buyers need them, bridging the gap between production and consumption." },
      { q: "E-commerce platforms such as Jumia make trade faster mainly through which aids to trade?", options: ["Communication and transport", "Mining and fishing", "Farming and forestry", "Insurance and warehousing only"], answer: 0, explanation: "E-commerce relies on communication for ordering and payment, and on transport for delivery to buyers." }
    ],
    status: "published"
  },
  {
    id: "commerce-02",
    subjectId: "commerce",
    topic: "Trade and the Channels of Distribution",
    subtopic: "Channels of distribution and middlemen",
    title: "Channels of Distribution and Middlemen",
    order: 2,
    introduction: "Goods do not reach consumers by magic; they travel through a channel of distribution made up of middlemen. This lesson explains the channels goods follow, the work of each middleman, and the factors that decide which channel a producer should use.",
    objectives: ["Explain the meaning of a channel of distribution", "Describe the main channels of distribution", "Explain the functions of wholesalers, retailers and agents", "Discuss the advantages and disadvantages of middlemen", "Identify the factors that influence the choice of a distribution channel"],
    sections: [
      {
        heading: "What a Channel of Distribution Is",
        body: "A channel of distribution is the route or path that goods follow from the producer to the final consumer. The shortest channel is direct: the producer sells straight to the consumer, as when a farmer sells vegetables at the farm gate or a tailor sells a dress directly to the customer who ordered it. Longer channels add middlemen: the producer sells to a wholesaler, who sells to a retailer, who sells to the consumer. Some channels also include agents, such as brokers and commission agents, who help buy and sell without owning the goods. Each middleman performs a service, such as transport, storage, breaking bulk or giving credit, and each adds a little to the price. A good channel is one that delivers goods to consumers quickly, cheaply and in good condition."
      },
      {
        heading: "Functions of the Middlemen",
        body: "Wholesalers perform several important functions. They buy in bulk and break the bulk, store goods, bear the risk of price falls and damage, transport goods to retailers, give credit to retailers, and pass information about demand back to manufacturers. Retailers also perform key functions: they stock a wide range of goods in one place, sell in small quantities, give credit to trusted customers, offer after-sales service, and advise customers. Agents, such as brokers and factors, bring buyers and sellers together and earn a commission; a factor may also sell goods on behalf of a principal. Without middlemen, a manufacturer in Lagos would have to find and serve thousands of individual buyers across Nigeria, which would be slow and costly. Middlemen therefore make distribution possible, even though they add to the final price."
      },
      {
        heading: "Advantages and Disadvantages of Middlemen",
        body: "Middlemen bring real benefits: they make goods available in many places, they store goods so supply is steady, they finance trade by giving credit, they bear risks such as damage and price changes, and they give producers useful information about what consumers want. However, middlemen also have disadvantages. Each middleman adds a margin to the price, so the consumer pays more than the factory price. Too many middlemen can make goods unnecessarily expensive, which is a common complaint in Nigerian food markets, where yams may pass through several hands between the farm and the city. Middlemen can also hoard goods to force prices up, and a dishonest middleman may adulterate goods or give the producer wrong information about demand. For these reasons, some producers try to shorten the channel, for example by selling online or opening their own shops."
      },
      {
        heading: "Choosing a Channel of Distribution",
        body: "Several factors influence the channel a producer chooses. The nature of the product matters: perishable goods such as fresh fish and bread need a short, fast channel, while durable goods such as cement can travel through a long channel. The size of the market matters too: a producer selling nationwide needs wholesalers, while one selling locally can sell directly. The financial strength of the producer matters: a small producer cannot afford its own shops and must use middlemen. The number of customers and how widely they are spread also matters, as does the price of the product: expensive goods such as cars are often sold directly by the manufacturer or through a few appointed dealers. Finally, the producer's desire for control matters: direct selling gives control over price and presentation, while using middlemen means giving up some control. In JAMB questions, always link the factor to a concrete product example."
      }
    ],
    definitions: [
      { term: "Channel of distribution", meaning: "The route goods follow from the producer to the final consumer." },
      { term: "Middleman", meaning: "A person or firm between the producer and the consumer who helps goods reach the buyer." },
      { term: "Broker", meaning: "An agent who brings buyers and sellers together and earns a commission." },
      { term: "Commission agent", meaning: "An agent who sells goods on behalf of a principal and is paid a commission." },
      { term: "Breaking the bulk", meaning: "Dividing large quantities of goods into smaller quantities for sale." },
      { term: "Direct selling", meaning: "Selling goods straight from the producer to the consumer without middlemen." }
    ],
    formulas: ["Shortest channel: Producer -> Consumer.", "Common channel: Producer -> Wholesaler -> Retailer -> Consumer.", "Long channel: Producer -> Agent -> Wholesaler -> Retailer -> Consumer.", "Each middleman adds a margin, so more middlemen usually mean a higher final price."],
    examples: [
      {
        title: "Choosing a channel for bread",
        problem: "A bakery in Ibadan produces fresh bread daily. Which channel of distribution should it use, and why?",
        steps: ["Note that bread is perishable: it goes stale within a day or two.", "Recall that perishable goods need a short, fast channel.", "Consider the local market: bread is sold daily to nearby customers.", "A long channel through many middlemen would delay delivery and spoil the bread.", "Conclude that a short channel, direct to retailers or consumers, is best."],
        answer: "The bakery should use a short channel, selling directly to nearby retailers or consumers, because bread is perishable and must reach buyers quickly."
      },
      {
        title: "Tracing a channel",
        problem: "A farmer in Benue sells yams to a trader, who sells them to a wholesaler in Lagos, who sells them to a market woman, who sells them to a family. Identify each person in the channel.",
        steps: ["The farmer is the producer of the yams.", "The first trader buys from the producer and sells on, acting as an assembler or agent.", "The Lagos buyer who sells to the market woman is the wholesaler.", "The market woman sells small quantities to the family, so she is the retailer.", "The family that eats the yams is the final consumer."],
        answer: "Producer: farmer; middlemen: trader, wholesaler, retailer (market woman); final consumer: the family."
      }
    ],
    tips: ["Draw the channel as a chain: Producer -> Wholesaler -> Retailer -> Consumer.", "Always give a product example when explaining a factor, e.g. bread for perishability.", "Remember that middlemen add value (storage, credit, breaking bulk) as well as cost.", "Direct selling gives the producer control; middlemen give reach."],
    mistakes: ["Saying middlemen are useless; they perform real functions such as storage and credit.", "Confusing a broker with a wholesaler; a broker does not own the goods.", "Forgetting that perishable goods need short channels.", "Listing channels without explaining the role of each middleman."],
    facts: ["The shortest channel is producer to consumer.", "A broker earns commission and does not own the goods he sells.", "Each middleman adds a margin to the final price.", "Perishable goods such as fresh fish need short, fast channels."],
    quiz: [
      { q: "What is a channel of distribution?", options: ["A river used to transport goods", "The route goods follow from producer to final consumer", "A bank account for traders", "A type of warehouse"], answer: 1, explanation: "A channel of distribution is the path goods take from the producer to the final consumer." },
      { q: "Which is the shortest channel of distribution?", options: ["Producer -> Wholesaler -> Retailer -> Consumer", "Producer -> Agent -> Wholesaler -> Retailer -> Consumer", "Producer -> Consumer", "Producer -> Retailer -> Wholesaler -> Consumer"], answer: 2, explanation: "Producer to consumer has no middlemen, so it is the shortest possible channel." },
      { q: "A broker earns his income mainly through what?", options: ["Profit on goods he owns", "Commission for bringing buyers and sellers together", "Interest on loans", "Rent from a warehouse"], answer: 1, explanation: "A broker does not own the goods; he is paid a commission for arranging a sale." },
      { q: "Which of these is a function of the wholesaler?", options: ["Selling in small quantities to final consumers", "Breaking the bulk for retailers", "Producing the goods", "Advertising to final consumers only"], answer: 1, explanation: "The wholesaler buys in bulk and breaks the bulk into smaller quantities for retailers." },
      { q: "Why do middlemen make goods more expensive for consumers?", options: ["They pay no tax", "Each middleman adds a margin to the price", "They reduce the quality of goods", "They buy goods directly from farms"], answer: 1, explanation: "Each middleman takes a profit margin, so the final price rises with every link in the chain." },
      { q: "Fresh fish is best distributed through which type of channel?", options: ["A long channel with many middlemen", "A short, fast channel", "A channel with no transport", "A channel that stores goods for months"], answer: 1, explanation: "Fresh fish is perishable, so it needs a short, fast channel to reach buyers before it spoils." },
      { q: "Which of these is a disadvantage of middlemen?", options: ["They store goods for steady supply", "They may hoard goods to force prices up", "They give credit to retailers", "They pass information to producers"], answer: 1, explanation: "Some middlemen hoard goods to create scarcity and raise prices, which harms consumers." },
      { q: "A manufacturer selling cars nationwide is most likely to use what?", options: ["Only direct sales to every buyer", "Appointed dealers or agents", "No channel at all", "Street hawkers"], answer: 1, explanation: "Expensive, durable goods such as cars are usually sold through a few appointed dealers." },
      { q: "Which factor most affects the choice of channel for bread?", options: ["The colour of the packaging", "Its perishable nature", "The name of the bakery", "The number of staff"], answer: 1, explanation: "Bread goes stale quickly, so its perishable nature demands a short, fast channel." },
      { q: "A market woman who sells tomatoes in small heaps to families is a what?", options: ["Wholesaler", "Broker", "Retailer", "Manufacturer"], answer: 2, explanation: "She sells in small quantities to final consumers, which is retail trade." },
      { q: "Which of these is an advantage of using middlemen?", options: ["Goods become cheaper at every stage", "Goods are made available in many places", "Producers keep full control of prices", "No storage is ever needed"], answer: 1, explanation: "Middlemen spread goods to many places, making them available to consumers far from the producer." },
      { q: "A commission agent is paid by what?", options: ["Salary from the government", "Commission on goods sold for a principal", "Profit from goods he owns", "Rent from his shop"], answer: 1, explanation: "A commission agent sells on behalf of a principal and is paid a commission on sales." },
      { q: "Why would a small producer use middlemen rather than selling directly?", options: ["He has too much money", "He cannot afford his own shops and distribution network", "He dislikes his customers", "He produces too little to sell"], answer: 1, explanation: "A small producer lacks the funds to reach all customers directly, so middlemen provide the reach." },
      { q: "Direct selling gives the producer mainly what?", options: ["Less control over price", "More control over price and presentation", "Higher transport costs always", "No contact with customers"], answer: 1, explanation: "Selling directly lets the producer control the price and how the product is presented." },
      { q: "In the chain Producer -> Wholesaler -> Retailer -> Consumer, who buys from the wholesaler?", options: ["The producer", "The retailer", "The final consumer", "The broker"], answer: 1, explanation: "In this channel the wholesaler sells to the retailer, who then sells to the final consumer." }
    ],
    status: "published"
  },
  {
    id: "commerce-03",
    subjectId: "commerce",
    topic: "Business Organisations",
    subtopic: "Sole proprietorship and partnership",
    title: "Sole Proprietorship and Partnership",
    order: 3,
    introduction: "Many Nigerian businesses start as one-person or two-person ventures. This lesson explains the sole proprietorship and the partnership, how they are formed, and their advantages and disadvantages.",
    objectives: ["Define a sole proprietorship and a partnership", "Explain how a sole proprietorship is formed and managed", "Describe the types of partners and the partnership deed", "Compare the advantages and disadvantages of both forms", "Explain unlimited liability and its effects on owners"],
    sections: [
      {
        heading: "The Sole Proprietorship",
        body: "A sole proprietorship, also called a one-man business, is owned and controlled by one person. The owner provides the capital, makes all the decisions, manages the business himself or with a few employees, and keeps all the profit. Many small Nigerian businesses are sole proprietorships: a provision store, a barber's shop, a roadside food seller, or a phone repairer. Formation is very easy: the owner simply starts trading, though he must register the business name with the Corporate Affairs Commission (CAC) if he trades under a name other than his own. The sole proprietor has unlimited liability, which means that if the business fails and its debts are more than its assets, the owner's personal property, such as his house or car, can be sold to pay the debts. The business also ends when the owner dies or decides to close it, because the business has no separate legal existence from its owner."
      },
      {
        heading: "Advantages and Disadvantages of Sole Proprietorship",
        body: "The sole proprietorship has clear advantages. It is easy and cheap to start, decisions are taken quickly because one person decides, all profits belong to the owner, and the owner has close contact with customers. Because the business is small, it can give personal attention and change quickly when customers' tastes change. The disadvantages are equally clear. Capital is limited to what one person can raise, so the business may find it hard to expand. The owner bears all the losses alone, and his liability is unlimited. The business depends on one person's health, skill and judgement: if the owner falls ill, the business may stop. Continuity is uncertain, since the business usually ends with the owner. Finally, the owner may lack the time and skill to handle every part of the business, such as accounting and marketing, on his own."
      },
      {
        heading: "The Partnership",
        body: "A partnership is a business owned by two or more people, usually between two and twenty partners, who agree to run a business together and share its profits. The maximum number of partners is twenty, except for professional partnerships such as law and accountancy firms, which may have more. Partners contribute capital, share management, and share profits and losses according to their agreement. A partnership is formed by an agreement, usually written in a document called the partnership deed, which states the amount of capital each partner contributes, how profits and losses are shared, the duties of each partner, and what happens if a partner dies or leaves. In Nigeria, a partnership is registered with the Corporate Affairs Commission under the Companies and Allied Matters Act. Like the sole proprietor, ordinary partners have unlimited liability for the debts of the firm."
      },
      {
        heading: "Types of Partners and Partnership Problems",
        body: "There are several types of partners. An active partner takes part in the day-to-day running of the business. A sleeping or dormant partner contributes capital and shares profits but does not take part in management. A nominal partner lends his name and reputation to the firm but contributes no capital and takes no part in management. A limited partner's liability is limited to the capital he contributed, but he cannot take part in management. Partnerships have real advantages: more capital can be raised than by one person, partners bring different skills, decisions are shared, and losses are shared too. But partnerships also have problems: disagreements between partners can paralyse the business, profit is shared, decisions are slower than in a one-man business, and the death or withdrawal of a partner can dissolve the firm. A written partnership deed reduces these problems by settling the rules before trading begins."
      }
    ],
    definitions: [
      { term: "Sole proprietorship", meaning: "A business owned and controlled by one person." },
      { term: "Partnership", meaning: "A business owned by two or more people who share profits, losses and management." },
      { term: "Partnership deed", meaning: "A written agreement stating the terms of a partnership, including capital, profit sharing and duties." },
      { term: "Unlimited liability", meaning: "The owner's personal property can be used to pay the business's debts." },
      { term: "Sleeping partner", meaning: "A partner who contributes capital and shares profits but does not manage the business." },
      { term: "Limited partner", meaning: "A partner whose liability is limited to the capital he contributed." }
    ],
    formulas: ["Maximum number of partners: 20 (except professional firms).", "Unlimited liability: business debts can be paid from the owner's personal property.", "Partnership deed covers: capital, profit sharing, duties, admission and withdrawal of partners.", "Sole proprietor: one owner, all profit, all risk, quick decisions."],
    examples: [
      {
        title: "Sharing partnership profits",
        problem: "Ada and Bola form a partnership. Ada contributes N600,000 and Bola contributes N400,000. They agree to share profits in the ratio of their capital. The firm makes a profit of N500,000. How much does each partner receive?",
        steps: ["Add the capital: N600,000 plus N400,000 equals N1,000,000.", "Find Ada's share of the capital: 600,000 divided by 1,000,000 equals 3/5.", "Find Bola's share: 400,000 divided by 1,000,000 equals 2/5.", "Ada's profit is 3/5 of N500,000, which is N300,000.", "Bola's profit is 2/5 of N500,000, which is N200,000."],
        answer: "Ada receives N300,000 and Bola receives N200,000."
      },
      {
        title: "Unlimited liability in practice",
        problem: "Chidi runs a sole proprietorship. His business owes N2,000,000 to suppliers, but the business assets are worth only N1,200,000. What happens to the remaining debt?",
        steps: ["Find the shortfall: N2,000,000 minus N1,200,000 equals N800,000.", "Recall that a sole proprietor has unlimited liability.", "This means his personal property can be used to pay business debts.", "The creditors can therefore claim N800,000 from his personal assets.", "Conclude that sole proprietorship exposes the owner's personal wealth to business risk."],
        answer: "Chidi must pay the remaining N800,000 from his personal property, because his liability is unlimited."
      }
    ],
    tips: ["Remember the 20-partner limit; professional firms are the exception.", "Unlimited liability is the key weakness of both sole proprietorship and ordinary partnership.", "The partnership deed is the written agreement — JAMB often asks what it contains.", "Sole proprietor: quick decisions, all profit, all risk."],
    mistakes: ["Saying a sole proprietor has limited liability; it is unlimited.", "Forgetting that a partnership needs at least two people.", "Confusing a sleeping partner with a nominal partner; the sleeping partner contributes capital, the nominal partner only lends his name.", "Saying a partnership can have unlimited partners; the limit is 20."],
    facts: ["The maximum number of partners in an ordinary partnership is 20.", "The Corporate Affairs Commission (CAC) registers business names in Nigeria.", "A sole proprietorship has no separate legal existence from its owner.", "A sleeping partner contributes capital but does not manage the business."],
    quiz: [
      { q: "A sole proprietorship is owned by how many people?", options: ["One person", "Two people", "Twenty people", "Shareholders"], answer: 0, explanation: "A sole proprietorship is owned and controlled by one person." },
      { q: "The main disadvantage of unlimited liability is that what can happen?", options: ["The owner pays no tax", "The owner's personal property can be used to pay business debts", "The business can never make a profit", "The owner cannot employ workers"], answer: 1, explanation: "With unlimited liability, creditors can claim the owner's personal property if business assets cannot pay the debts." },
      { q: "A partnership must have at least how many people?", options: ["One", "Two", "Five", "Ten"], answer: 1, explanation: "A partnership is formed by two or more people agreeing to run a business together." },
      { q: "What is the maximum number of partners in an ordinary partnership?", options: ["2", "7", "20", "50"], answer: 2, explanation: "An ordinary partnership is limited to 20 partners, except for professional firms such as lawyers and accountants." },
      { q: "The written agreement of a partnership is called what?", options: ["Memorandum of association", "Partnership deed", "Certificate of incorporation", "Prospectus"], answer: 1, explanation: "The partnership deed states the capital, profit sharing, duties and other terms agreed by the partners." },
      { q: "A sleeping partner is one who does what?", options: ["Manages the business daily", "Contributes capital but does not manage the business", "Lends only his name to the firm", "Works only at night"], answer: 1, explanation: "A sleeping or dormant partner provides capital and shares profits but takes no part in management." },
      { q: "Which partner lends only his name and reputation to the firm?", options: ["Active partner", "Sleeping partner", "Nominal partner", "Limited partner"], answer: 2, explanation: "A nominal partner contributes no capital and does not manage the business; he only lends his name." },
      { q: "In Nigeria, business names are registered with which body?", options: ["Central Bank of Nigeria", "Corporate Affairs Commission", "Nigerian Stock Exchange", "Federal Inland Revenue Service"], answer: 1, explanation: "The Corporate Affairs Commission (CAC) registers business names, partnerships and companies in Nigeria." },
      { q: "Which of these is an advantage of a sole proprietorship?", options: ["Unlimited capital", "Quick decision making", "Limited liability", "Continuity after the owner's death"], answer: 1, explanation: "One person decides, so decisions are taken quickly, unlike in larger organisations." },
      { q: "A limited partner's liability is limited to what?", options: ["Nothing at all", "The capital he contributed", "His personal house", "The firm's total debts"], answer: 1, explanation: "A limited partner can lose only the capital he put into the firm, but he cannot take part in management." },
      { q: "Which of these is a disadvantage of a partnership?", options: ["More capital can be raised", "Partners bring different skills", "Disagreements can paralyse the business", "Losses are shared"], answer: 2, explanation: "Disagreements between partners can stop decisions and harm the business, unlike the quick decisions of a sole proprietor." },
      { q: "Why does a sole proprietorship usually end when the owner dies?", options: ["The government closes it", "It has no separate legal existence from the owner", "It owes too much tax", "Customers stop buying"], answer: 1, explanation: "The business and the owner are one in law, so the business ends with the owner." },
      { q: "Ada contributes N600,000 and Bola N400,000 to a partnership. Profits are shared by capital. If profit is N500,000, what is Ada's share?", options: ["N200,000", "N250,000", "N300,000", "N400,000"], answer: 2, explanation: "Ada contributed 3/5 of the capital, so she receives 3/5 of N500,000, which is N300,000." },
      { q: "Which of these is an advantage of a partnership over a sole proprietorship?", options: ["Only one person decides", "More capital and more skills are available", "Liability is always limited", "The business never ends"], answer: 1, explanation: "Several partners can contribute more capital and bring different skills than one person alone." },
      { q: "An active partner is one who does what?", options: ["Takes part in the day-to-day running of the business", "Only lends his name", "Contributes no capital", "Cannot share in losses"], answer: 0, explanation: "An active partner manages the business day to day, unlike a sleeping or nominal partner." }
    ],
    status: "published"
  },
  {
    id: "commerce-04",
    subjectId: "commerce",
    topic: "Business Organisations",
    subtopic: "Companies, cooperatives and public enterprises",
    title: "Companies, Cooperatives and Public Enterprises",
    order: 4,
    introduction: "Large businesses need a form that can raise big capital and survive its owners. This lesson explains companies, cooperative societies and public enterprises, and how each is owned, managed and financed in Nigeria.",
    objectives: ["Distinguish between private and public limited companies", "Explain the documents needed to form a company", "Describe the features of cooperative societies", "Explain the role of public enterprises in Nigeria", "Compare the advantages and disadvantages of a limited company"],
    sections: [
      {
        heading: "Private and Public Limited Companies",
        body: "A limited company is a business with a separate legal existence from its owners, and the liability of its owners, the shareholders, is limited to the amount they invested. A private limited company, marked Ltd, cannot invite the public to buy its shares, its shares cannot be freely transferred, and it must have at least two members. A public limited company, marked Plc, can invite the public to buy its shares through a prospectus, its shares can be traded on the Nigerian Exchange, and it must have at least seven members. In both cases the owners are the shareholders, the company is managed by a board of directors, and profits are shared as dividends. Because a company is a separate legal person, it can own property, sue and be sued, and it continues to exist even if a shareholder dies. Large Nigerian firms such as Dangote Cement Plc and Nestle Nigeria Plc are public limited companies."
      },
      {
        heading: "Forming a Company: The Key Documents",
        body: "Forming a company in Nigeria involves the Corporate Affairs Commission under the Companies and Allied Matters Act. The promoters prepare two main documents. The memorandum of association states the company's name, its registered office, its objects or purposes, and that the liability of members is limited. The articles of association state the internal rules: how directors are appointed, how meetings are held, and how shares are transferred. The promoters also file the list of directors and the statement of share capital. When the CAC is satisfied, it issues a certificate of incorporation, and the company becomes a legal person. A public company must also issue a prospectus, a document inviting the public to buy shares, which gives full information about the company so that investors can decide. Without a certificate of incorporation, a company cannot legally trade as a company."
      },
      {
        heading: "Cooperative Societies",
        body: "A cooperative society is a voluntary association of people who come together to promote their common economic interest. Members contribute capital, usually through shares, and each member has one vote, whatever the number of shares he holds. The main types are consumer cooperatives, which buy goods in bulk and sell them cheaply to members; producer cooperatives, which help farmers and craftsmen to produce and market their goods; and thrift and credit cooperatives, which encourage members to save and lend to one another. Cooperatives are guided by principles such as open membership, democratic control, limited interest on capital, and distribution of surplus in proportion to patronage. In Nigeria, farmers' cooperatives help members buy fertiliser cheaply and sell crops at better prices. Cooperatives are democratic and cheap to run, but they often suffer from limited capital and poor management."
      },
      {
        heading: "Public Enterprises and Privatisation",
        body: "A public enterprise, also called a public corporation, is a business owned and controlled by the government to provide essential goods and services. Examples in Nigeria include the Nigerian National Petroleum Company Limited (NNPC Ltd), the Nigerian Railway Corporation, and the former Nigerian Postal Service (NIPOST). Public enterprises are set up by an Act of Parliament, are managed by a board appointed by the government, and are funded mainly from government money. They are meant to provide services that private firms might not provide, such as railways to remote areas, and to control key sectors of the economy. However, they often suffer from inefficiency, political interference and losses. For this reason, Nigeria has privatised many of them, selling government shares to private investors, as happened with parts of the power sector and NITEL. Privatisation aims to improve efficiency, reduce the burden on government, and raise revenue."
      }
    ],
    definitions: [
      { term: "Limited liability", meaning: "The shareholders can lose only the money they invested in the company." },
      { term: "Shareholder", meaning: "A person who owns shares in a company." },
      { term: "Memorandum of association", meaning: "The document that states a company's name, objects and limited liability." },
      { term: "Articles of association", meaning: "The document that states a company's internal rules." },
      { term: "Cooperative society", meaning: "A voluntary association of people formed to promote their common economic interest." },
      { term: "Public enterprise", meaning: "A business owned and controlled by the government to provide essential services." }
    ],
    formulas: ["Private company (Ltd): at least 2 members; cannot invite the public to buy shares.", "Public company (Plc): at least 7 members; can invite the public through a prospectus.", "Cooperative principle: one member, one vote.", "Limited liability: maximum loss = amount invested in shares."],
    examples: [
      {
        title: "Choosing between Ltd and Plc",
        problem: "A growing Nigerian food company wants to raise N500 million from the general public to build a new factory. Should it be a private or a public limited company?",
        steps: ["Note that the company wants to raise money from the general public.", "Recall that a private company cannot invite the public to buy its shares.", "Recall that a public company can invite the public through a prospectus.", "The company therefore needs public company status.", "Conclude it should register as a public limited company (Plc)."],
        answer: "It should be a public limited company (Plc), because only a public company can invite the general public to buy its shares."
      },
      {
        title: "Cooperative surplus sharing",
        problem: "A consumer cooperative makes a surplus of N200,000. It decides to share the surplus in proportion to members' purchases. Amina bought goods worth N50,000 and total member purchases were N500,000. How much surplus does Amina receive?",
        steps: ["Find Amina's share of total purchases: 50,000 divided by 500,000 equals 1/10.", "Recall that cooperative surplus is shared in proportion to patronage.", "Multiply the surplus by her share: 1/10 of N200,000.", "Calculate: N200,000 divided by 10 equals N20,000.", "Conclude Amina receives N20,000."],
        answer: "Amina receives N20,000, which is one-tenth of the surplus, matching her share of purchases."
      }
    ],
    tips: ["Ltd cannot invite the public; Plc can — this is the most-tested difference.", "Memorandum = outside matters (name, objects); articles = inside rules.", "Cooperative: one member, one vote, whatever the shares held.", "Public enterprises are set up by an Act of Parliament."],
    mistakes: ["Saying a private company can sell shares to the public.", "Confusing the memorandum with the articles of association.", "Thinking cooperative members vote by number of shares; each member has one vote.", "Saying shareholders manage the company daily; directors manage it."],
    facts: ["A public limited company must have at least seven members.", "The certificate of incorporation makes a company a legal person.", "Dangote Cement Plc is a public limited company in Nigeria.", "NNPC Ltd is a public enterprise owned by the government."],
    quiz: [
      { q: "What does limited liability mean for a shareholder?", options: ["He can lose all his personal property", "He can lose only the money he invested", "He never loses any money", "He must pay all the company's debts"], answer: 1, explanation: "Limited liability means a shareholder's loss is limited to the amount he invested in shares." },
      { q: "A private limited company is marked with which letters?", options: ["Plc", "Ltd", "Inc", "Co"], answer: 1, explanation: "Private limited companies use Ltd, while public limited companies use Plc." },
      { q: "How many members must a public limited company have at least?", options: ["2", "5", "7", "20"], answer: 2, explanation: "A public limited company must have at least seven members; a private company needs at least two." },
      { q: "Which document invites the public to buy shares in a company?", options: ["Memorandum of association", "Articles of association", "Prospectus", "Certificate of incorporation"], answer: 2, explanation: "A prospectus is the document by which a public company invites the public to subscribe for its shares." },
      { q: "The memorandum of association states which of these?", options: ["How directors are appointed", "The company's name, objects and limited liability", "How meetings are held", "The price of shares"], answer: 1, explanation: "The memorandum covers the company's name, registered office, objects and limited liability." },
      { q: "Which body issues the certificate of incorporation in Nigeria?", options: ["Central Bank of Nigeria", "Corporate Affairs Commission", "Nigerian Exchange", "Federal Ministry of Trade"], answer: 1, explanation: "The Corporate Affairs Commission (CAC) registers companies and issues the certificate of incorporation." },
      { q: "In a cooperative society, how many votes does each member have?", options: ["One vote", "Votes according to shares held", "No vote at all", "Ten votes"], answer: 0, explanation: "Cooperatives follow democratic control: one member, one vote, whatever the number of shares held." },
      { q: "Which of these is a consumer cooperative?", options: ["A group that buys goods in bulk and sells them cheaply to members", "A company that sells shares to the public", "A government railway", "A sole trader's shop"], answer: 0, explanation: "A consumer cooperative buys goods in bulk for its members and sells them at low prices." },
      { q: "Which of these is a public enterprise in Nigeria?", options: ["Dangote Cement Plc", "Nigerian Railway Corporation", "A market woman's stall", "A thrift cooperative"], answer: 1, explanation: "The Nigerian Railway Corporation is owned and controlled by the government, so it is a public enterprise." },
      { q: "Who manages a limited company day to day?", options: ["The shareholders directly", "The board of directors", "The customers", "The Corporate Affairs Commission"], answer: 1, explanation: "Shareholders own the company, but the board of directors manages it on their behalf." },
      { q: "Profits of a limited company are shared to shareholders as what?", options: ["Salaries", "Dividends", "Interest", "Commission"], answer: 1, explanation: "Shareholders receive their share of company profits as dividends." },
      { q: "A company continues to exist even if a shareholder dies because it has what?", options: ["Unlimited liability", "Separate legal existence", "No directors", "Government ownership"], answer: 1, explanation: "A company is a separate legal person from its owners, so it has perpetual succession." },
      { q: "Privatisation means what?", options: ["Government taking over private firms", "Government selling its shares in public enterprises to private investors", "Closing all public enterprises", "Making a company a cooperative"], answer: 1, explanation: "Privatisation is the transfer of government-owned enterprises to private ownership." },
      { q: "Which of these is a problem of public enterprises in Nigeria?", options: ["Too much profit", "Political interference and inefficiency", "No government funding", "Too few employees"], answer: 1, explanation: "Public enterprises often suffer from political interference, poor management and losses." },
      { q: "A thrift and credit cooperative mainly helps members to do what?", options: ["Buy shares on the stock exchange", "Save money and borrow from one another", "Import goods from abroad", "Build railways"], answer: 1, explanation: "Thrift and credit cooperatives encourage members to save and lend to one another at low cost." }
    ],
    status: "published"
  },
  {
    id: "commerce-05",
    subjectId: "commerce",
    topic: "Insurance",
    subtopic: "Meaning, principles and terms of insurance",
    title: "Principles of Insurance",
    order: 5,
    introduction: "Every business faces risk: fire can destroy a shop, goods can be stolen in transit, and a key worker can fall ill. This lesson explains insurance, the principles that govern it, and the terms every JAMB candidate must know.",
    objectives: ["Define insurance and explain its purpose", "Explain the principles of insurance", "Define key insurance terms such as premium, policy and insurable interest", "Distinguish between insurance and assurance", "Explain the functions of insurance in business"],
    sections: [
      {
        heading: "What Insurance Is",
        body: "Insurance is a contract in which a person or business, the insured, pays a regular sum of money, the premium, to an insurance company, the insurer, in exchange for compensation if a specified loss occurs. Insurance does not prevent the loss; it spreads the financial effect of the loss over many people. The insurer collects premiums from thousands of policy holders, and uses the pool of money to pay the few who suffer losses. In this way, a trader whose shop burns down can rebuild, because the loss is shared by all the insured. The written contract is called the policy, and it states what is covered, the amount of the premium, and the sum insured. In Nigeria, insurance companies are regulated by the National Insurance Commission (NAICOM), and motor vehicle third-party insurance is compulsory by law."
      },
      {
        heading: "The Principles of Insurance",
        body: "Insurance rests on several principles. Insurable interest means the insured must stand to lose financially if the insured event happens and gain if it does not; you cannot insure your neighbour's house because you have no insurable interest in it. Utmost good faith means both parties must disclose all material facts honestly; hiding a fact, such as a previous fire, can make the policy void. Indemnity means the insured is restored to the financial position he was in before the loss, neither better nor worse; you cannot profit from a loss. Contribution applies when the same risk is insured with two or more insurers: they share the claim in proportion to the sums insured. Subrogation means that after the insurer has paid a claim, it can take over the insured's right to recover the loss from a third party who caused it. Proximate cause means the insurer pays only if the loss was caused by the insured risk, not by an excluded cause. Finally, the principle of mitigation requires the insured to take reasonable steps to reduce the loss."
      },
      {
        heading: "Insurance and Assurance",
        body: "Insurance and assurance are often confused, but they differ. Insurance covers an event that may or may not happen, such as a fire or an accident; if the event never happens, no payment is made. Assurance covers an event that is certain to happen, only the time is uncertain, such as death; a life assurance policy will certainly pay out one day. This is why life cover is properly called life assurance, while fire and motor cover are called insurance. Both are contracts of utmost good faith, and both require a premium. The person who takes out the policy is the insured or policy holder, the company is the insurer, and the person who receives the money when a life policy pays out is the beneficiary. The document showing that a premium has been paid is the cover note, and the full contract is the policy."
      },
      {
        heading: "Functions of Insurance in Business",
        body: "Insurance performs vital functions for businesses and for the economy. It gives financial protection, so a business can recover after fire, theft or accident instead of closing down. It encourages investment, because banks and investors are more willing to lend to a business whose assets are insured. It provides a source of funds for investment: insurers invest premiums in government securities, shares and property, which helps the economy. Insurance also provides employment for agents, brokers, underwriters and loss adjusters, and it helps to spread risk across the whole community. For the individual, life assurance provides for dependants after death and can serve as a form of saving. Without insurance, traders would be afraid to take risks, and trade would be much smaller and slower."
      }
    ],
    definitions: [
      { term: "Insurance", meaning: "A contract in which the insured pays a premium to the insurer for compensation if a specified loss occurs." },
      { term: "Premium", meaning: "The regular sum paid by the insured to the insurer for cover." },
      { term: "Insurable interest", meaning: "The financial interest the insured has in the subject of insurance." },
      { term: "Indemnity", meaning: "Restoring the insured to the financial position he was in before the loss, without profit." },
      { term: "Utmost good faith", meaning: "The duty of both parties to disclose all material facts honestly." },
      { term: "Policy", meaning: "The written contract of insurance between the insurer and the insured." }
    ],
    formulas: ["Indemnity: compensation = actual loss, never more than the loss.", "Contribution: each insurer pays in proportion to the sum it insured.", "Under-insurance: claim = (sum insured / value at risk) x loss.", "Average clause: claim paid = (sum insured / value of property) x loss suffered."],
    examples: [
      {
        title: "Applying the average clause",
        problem: "A trader insures his shop goods worth N2,000,000 for only N1,000,000. Fire destroys goods worth N800,000. How much will the insurer pay under the average clause?",
        steps: ["Note the value at risk is N2,000,000 and the sum insured is N1,000,000.", "The trader is under-insured by half, so he bears half the loss himself.", "Apply the average clause: claim equals (sum insured divided by value at risk) times the loss.", "Calculate: (1,000,000 / 2,000,000) times N800,000 equals 1/2 times N800,000.", "The claim is N400,000."],
        answer: "The insurer pays N400,000; the trader bears the other N400,000 because he under-insured the goods."
      },
      {
        title: "Applying contribution",
        problem: "A warehouse worth N6,000,000 is insured with insurer A for N4,000,000 and with insurer B for N2,000,000. Fire causes a loss of N3,000,000. How much does each insurer pay?",
        steps: ["Add the sums insured: N4,000,000 plus N2,000,000 equals N6,000,000.", "Insurer A's share is 4,000,000 divided by 6,000,000, which is 2/3.", "Insurer B's share is 2,000,000 divided by 6,000,000, which is 1/3.", "A pays 2/3 of N3,000,000, which is N2,000,000.", "B pays 1/3 of N3,000,000, which is N1,000,000."],
        answer: "Insurer A pays N2,000,000 and insurer B pays N1,000,000, sharing the loss in proportion to the sums insured."
      }
    ],
    tips: ["Indemnity = no profit from a loss; remember this for every calculation question.", "The average clause punishes under-insurance — always check sum insured against value at risk.", "Insurable interest: you must lose financially if the event happens.", "Life cover is assurance (death is certain); fire and motor cover are insurance (loss may not happen)."],
    mistakes: ["Saying insurance prevents loss; it only compensates for loss.", "Confusing insurance with assurance.", "Forgetting the average clause when a property is under-insured.", "Thinking anyone can insure anything; insurable interest is required."],
    facts: ["Insurance in Nigeria is regulated by the National Insurance Commission (NAICOM).", "Motor third-party insurance is compulsory in Nigeria.", "The premium is the price paid for insurance cover.", "Indemnity restores the insured without profit."],
    quiz: [
      { q: "What is insurance?", options: ["A way to prevent all losses", "A contract where a premium is paid for compensation if a specified loss occurs", "A type of bank loan", "A government tax on traders"], answer: 1, explanation: "Insurance is a contract: the insured pays a premium and the insurer compensates him if a specified loss occurs." },
      { q: "The regular sum paid by the insured to the insurer is called what?", options: ["Dividend", "Premium", "Commission", "Interest"], answer: 1, explanation: "The premium is the price the insured pays for insurance cover." },
      { q: "Insurable interest means what?", options: ["The insured likes the property", "The insured would lose financially if the insured event happened", "The insurer owns the property", "The property is very expensive"], answer: 1, explanation: "Insurable interest means the insured stands to lose financially if the event happens." },
      { q: "The principle of indemnity means the insured is restored to what position?", options: ["A better position than before the loss", "The same financial position as before the loss", "A worse position than before the loss", "Any position the insurer chooses"], answer: 1, explanation: "Indemnity restores the insured to the position he was in before the loss, without profit." },
      { q: "Utmost good faith requires both parties to do what?", options: ["Pay the premium in cash", "Disclose all material facts honestly", "Insure with two companies", "Avoid making claims"], answer: 1, explanation: "Utmost good faith means full and honest disclosure of all facts that affect the risk." },
      { q: "Why is life cover properly called assurance rather than insurance?", options: ["Because death is certain, only the time is uncertain", "Because it is cheaper", "Because it covers fire", "Because it is compulsory"], answer: 0, explanation: "Assurance covers an event certain to happen, such as death; insurance covers an event that may not happen." },
      { q: "Under the principle of contribution, when the same risk is insured with two insurers, they do what?", options: ["Each pays the full loss", "They share the claim in proportion to the sums insured", "Only the first insurer pays", "Neither insurer pays"], answer: 1, explanation: "Contribution means the insurers share the loss in proportion to the sums they insured." },
      { q: "A trader insures goods worth N2,000,000 for N1,000,000. Fire destroys N800,000 of goods. Under the average clause, how much is paid?", options: ["N800,000", "N400,000", "N1,000,000", "N2,000,000"], answer: 1, explanation: "Claim equals (1,000,000 / 2,000,000) times N800,000, which is N400,000; the trader bears the rest for under-insuring." },
      { q: "Which body regulates insurance companies in Nigeria?", options: ["Central Bank of Nigeria", "National Insurance Commission (NAICOM)", "Corporate Affairs Commission", "Securities and Exchange Commission"], answer: 1, explanation: "NAICOM regulates the insurance industry in Nigeria." },
      { q: "Subrogation means that after paying a claim, the insurer can do what?", options: ["Cancel the policy", "Take over the insured's right to recover the loss from a third party", "Double the premium", "Refuse future claims"], answer: 1, explanation: "Subrogation lets the insurer step into the insured's shoes and recover the loss from whoever caused it." },
      { q: "The written contract of insurance is called what?", options: ["Cover note", "Policy", "Prospectus", "Deed"], answer: 1, explanation: "The policy is the full written contract between the insurer and the insured." },
      { q: "Which of these is a function of insurance in business?", options: ["It prevents fire from happening", "It encourages investment by protecting assets", "It removes the need for banking", "It makes goods cheaper to produce"], answer: 1, explanation: "Banks and investors are more willing to lend when business assets are insured against loss." },
      { q: "Which type of insurance is compulsory for motor vehicles in Nigeria?", options: ["Comprehensive insurance", "Third-party insurance", "Life assurance", "Marine insurance"], answer: 1, explanation: "Third-party motor insurance is compulsory by law in Nigeria." },
      { q: "Proximate cause means the insurer pays only if the loss was caused by what?", options: ["Any cause at all", "The insured risk itself", "The insured's carelessness", "A natural disaster only"], answer: 1, explanation: "The loss must be caused by the risk covered by the policy, not by an excluded cause." },
      { q: "A person who receives the money when a life assurance policy pays out is called the what?", options: ["Insurer", "Beneficiary", "Broker", "Underwriter"], answer: 1, explanation: "The beneficiary is the person named to receive the sum assured when the policy pays out." }
    ],
    status: "published"
  },
  {
    id: "commerce-06",
    subjectId: "commerce",
    topic: "Insurance",
    subtopic: "Types of insurance and making a claim",
    title: "Types of Insurance and Making a Claim",
    order: 6,
    introduction: "Not all insurance is the same: a shop needs fire cover, a ship needs marine cover, and a family needs life cover. This lesson explains the main types of insurance, the people who work in insurance, and how a claim is made.",
    objectives: ["Identify the main types of insurance", "Explain the difference between life and non-life insurance", "Describe the roles of the underwriter, broker and loss adjuster", "Explain the steps in making an insurance claim", "Distinguish between fidelity guarantee and burglary insurance"],
    sections: [
      {
        heading: "Life and Non-Life Insurance",
        body: "Insurance is divided into life insurance, properly called life assurance, and non-life or general insurance. Life assurance pays a sum of money on the death of the insured or at the end of a fixed period; it can be whole life, which pays on death whenever it occurs, term assurance, which pays only if death occurs within a stated period, or an endowment policy, which pays on death or at maturity if the insured survives. Non-life insurance covers property and liability: fire insurance covers loss by fire, burglary insurance covers loss by theft, motor insurance covers vehicles, marine insurance covers ships and cargo at sea, aviation insurance covers aircraft, and accident insurance covers personal injury. Employers' liability insurance covers injury to workers, and public liability insurance covers injury to members of the public. Each type covers a named risk, and the policy states exactly what is covered and what is excluded."
      },
      {
        heading: "Fire, Motor, Marine and Burglary Insurance",
        body: "Fire insurance compensates for loss or damage to property caused by fire, and it is essential for shops, factories and warehouses. Motor insurance has two main forms: third-party cover, which pays for injury or damage caused to other people and their property, and comprehensive cover, which also pays for damage to the insured's own vehicle. Marine insurance covers ships, cargo and freight against the perils of the sea, such as storms, sinking and collision; it is vital for Nigeria's import and export trade. Burglary insurance covers loss by theft involving forcible entry, while fidelity guarantee insurance covers loss caused by the dishonesty of an employee, such as a cashier stealing money. A business that handles cash, such as a bank or a supermarket, needs fidelity guarantee cover. Accident insurance covers bodily injury from accidents, and consequential loss insurance covers the loss of profit that follows a fire or other insured event."
      },
      {
        heading: "People Who Work in Insurance",
        body: "Several specialists work in insurance. The underwriter is the person in the insurance company who decides whether to accept a risk, and on what terms and premium. The insurance broker is an independent agent who advises clients, arranges cover with the best insurer, and earns a commission; the broker works for the client, not the insurer. The insurance agent sells policies for one insurer and earns commission. The loss adjuster is an independent expert called in after a loss to investigate and assess the amount of the claim. The actuary uses statistics to calculate premiums and to work out how long people are likely to live, which is essential for life assurance. The insured is the policy holder, and the insurer is the company that provides the cover. Knowing who does what helps you answer JAMB questions about the insurance market."
      },
      {
        heading: "Making a Claim",
        body: "When a loss occurs, the insured must follow the steps in the policy. First, he must notify the insurer promptly, usually within a stated number of days, and must take reasonable steps to reduce further loss, for example by calling the fire service. Second, he completes a claim form, giving full details of the loss. Third, the insurer sends a loss adjuster to inspect the damage and verify the claim. Fourth, the insurer checks that the policy was in force, that the premium was paid, and that the loss was caused by an insured risk. If the claim is valid, the insurer pays compensation, or, for property, may repair or replace the item. The claim may be reduced if the property was under-insured, under the average clause, or if the policy has an excess, which is the first part of any loss the insured must bear himself. A false claim is fraud and can make the policy void."
      }
    ],
    definitions: [
      { term: "Life assurance", meaning: "Cover that pays a sum on the death of the insured or at the end of a fixed period." },
      { term: "Fire insurance", meaning: "Cover against loss or damage to property caused by fire." },
      { term: "Marine insurance", meaning: "Cover for ships, cargo and freight against the perils of the sea." },
      { term: "Underwriter", meaning: "The person who decides whether to accept a risk and on what terms." },
      { term: "Loss adjuster", meaning: "An independent expert who investigates a loss and assesses the claim." },
      { term: "Excess", meaning: "The first part of any loss that the insured must bear himself." }
    ],
    formulas: ["Life assurance types: whole life, term assurance, endowment policy.", "Motor insurance: third-party (compulsory) and comprehensive.", "Claim steps: notify insurer -> complete claim form -> loss adjuster inspects -> insurer verifies -> payment.", "Fidelity guarantee: covers employee dishonesty; burglary: covers theft with forcible entry."],
    examples: [
      {
        title: "Choosing the right cover",
        problem: "A Lagos importer brings electronics from China by sea. His goods may be damaged by a storm during the voyage. Which type of insurance should he take, and why?",
        steps: ["Note the goods travel by sea and face the perils of the sea.", "Recall that marine insurance covers ships, cargo and freight against sea risks.", "Fire or motor insurance would not cover goods at sea.", "The importer should therefore take marine cargo insurance.", "Conclude that marine insurance matches the risk exactly."],
        answer: "He should take marine cargo insurance, because it covers goods against the perils of the sea during the voyage."
      },
      {
        title: "Working out a claim with an excess",
        problem: "A shopkeeper's burglary policy has an excess of N50,000. Thieves steal goods worth N350,000. How much will the insurer pay?",
        steps: ["Recall that the excess is the first part of the loss borne by the insured.", "The total loss is N350,000 and the excess is N50,000.", "Subtract the excess from the loss: N350,000 minus N50,000 equals N300,000.", "The insurer pays the balance after the excess.", "Conclude the insurer pays N300,000."],
        answer: "The insurer pays N300,000; the shopkeeper bears the first N50,000 as the excess."
      }
    ],
    tips: ["Marine = sea; aviation = air; motor = vehicles; fire = fire — match the cover to the risk.", "Third-party motor insurance is compulsory; comprehensive adds cover for your own vehicle.", "The underwriter accepts the risk; the loss adjuster assesses the claim.", "Fidelity guarantee covers employee dishonesty; burglary covers theft with forcible entry."],
    mistakes: ["Calling all life cover insurance; life cover is assurance.", "Confusing the broker with the agent; the broker works for the client, the agent for one insurer.", "Forgetting to subtract the excess when working out a claim.", "Saying burglary insurance covers employee theft; that is fidelity guarantee."],
    facts: ["An endowment policy pays on death or at maturity if the insured survives.", "Marine insurance is vital for Nigeria's import and export trade.", "The loss adjuster assesses the amount of a claim after a loss.", "A false insurance claim is fraud and can make the policy void."],
    quiz: [
      { q: "Life assurance differs from general insurance mainly because it covers what?", options: ["An event certain to happen, only the time being uncertain", "An event that may never happen", "Only property", "Only vehicles"], answer: 0, explanation: "Life assurance covers death, which is certain to happen; only the time is uncertain." },
      { q: "An endowment policy pays out in which situation?", options: ["Only on the death of the insured", "On death or at maturity if the insured survives", "Only if a fire occurs", "Only after an accident"], answer: 1, explanation: "An endowment policy pays the sum assured on death or at the end of the term if the insured is still alive." },
      { q: "Which type of insurance covers goods carried by sea?", options: ["Fire insurance", "Marine insurance", "Burglary insurance", "Accident insurance"], answer: 1, explanation: "Marine insurance covers ships, cargo and freight against the perils of the sea." },
      { q: "Third-party motor insurance covers what?", options: ["Damage to the insured's own car only", "Injury or damage caused to other people and their property", "Theft of the car by the owner", "Fire in the owner's house"], answer: 1, explanation: "Third-party cover pays for injury or damage the insured causes to other people and their property." },
      { q: "Comprehensive motor insurance differs from third-party cover because it also covers what?", options: ["Other people's property only", "Damage to the insured's own vehicle", "The driver's house", "Goods in transit by sea"], answer: 1, explanation: "Comprehensive cover adds protection for the insured's own vehicle to the third-party cover." },
      { q: "Fidelity guarantee insurance covers loss caused by what?", options: ["Fire", "The dishonesty of an employee", "Storms at sea", "Road accidents"], answer: 1, explanation: "Fidelity guarantee covers loss from an employee's dishonesty, such as a cashier stealing money." },
      { q: "The person who decides whether to accept an insurance risk is called the what?", options: ["Loss adjuster", "Underwriter", "Broker", "Actuary"], answer: 1, explanation: "The underwriter assesses the risk and decides the terms and premium." },
      { q: "An insurance broker works mainly for whom?", options: ["The insurer only", "The client, advising on the best cover", "The government", "The loss adjuster"], answer: 1, explanation: "A broker is an independent adviser who works for the client and arranges cover with insurers." },
      { q: "After a loss, who investigates and assesses the amount of the claim?", options: ["The underwriter", "The loss adjuster", "The actuary", "The agent"], answer: 1, explanation: "The loss adjuster is the independent expert who inspects the damage and assesses the claim." },
      { q: "A shopkeeper's policy has an excess of N50,000. Thieves steal N350,000 of goods. How much does the insurer pay?", options: ["N350,000", "N300,000", "N50,000", "N400,000"], answer: 1, explanation: "The insurer pays the loss minus the excess: N350,000 minus N50,000 equals N300,000." },
      { q: "Which of these is the first step when a loss occurs?", options: ["Wait for the insurer to call", "Notify the insurer promptly and reduce further loss", "Sell the damaged property", "Stop paying premiums"], answer: 1, explanation: "The insured must notify the insurer promptly and take reasonable steps to reduce further loss." },
      { q: "Burglary insurance covers theft involving what?", options: ["Forcible entry", "Employee dishonesty", "Fire damage", "Flood damage"], answer: 0, explanation: "Burglary insurance covers loss by theft involving forcible entry into the premises." },
      { q: "The actuary in an insurance company mainly does what?", options: ["Sells policies", "Uses statistics to calculate premiums and life expectancy", "Inspects damaged property", "Collects premiums"], answer: 1, explanation: "Actuaries use statistics to work out premiums and how long people are likely to live." },
      { q: "Consequential loss insurance covers what?", options: ["The fire itself", "The loss of profit that follows an insured event", "Theft by employees", "Damage to vehicles"], answer: 1, explanation: "Consequential loss cover pays for lost profit after an insured event such as a fire stops trading." },
      { q: "A false insurance claim is treated as what?", options: ["A minor mistake", "Fraud, which can make the policy void", "A reason to increase cover", "A normal part of business"], answer: 1, explanation: "Making a false claim is fraud, and it can make the policy void and lead to prosecution." }
    ],
    status: "published"
  },
  {
    id: "commerce-07",
    subjectId: "commerce",
    topic: "Marketing and Advertising",
    subtopic: "Marketing: meaning, functions and the marketing mix",
    title: "Marketing: Functions and the Marketing Mix",
    order: 7,
    introduction: "Marketing is much more than selling: it starts before a product is made and continues after it is sold. This lesson explains what marketing is, its functions, and the marketing mix that every business must get right.",
    objectives: ["Define marketing and distinguish it from selling", "Explain the functions of marketing", "Describe the four elements of the marketing mix", "Explain market research and its uses", "Describe the product life cycle"],
    sections: [
      {
        heading: "What Marketing Means",
        body: "Marketing is the process of identifying, anticipating and satisfying the needs and wants of consumers at a profit. It begins with finding out what customers want, through market research, and continues through designing the product, setting its price, promoting it and making it available. Selling is only one part of marketing: selling focuses on persuading the customer to buy what the firm has already made, while marketing focuses on making what the customer wants. A firm that follows the marketing concept puts the customer first, because satisfied customers come back and recommend the firm to others. In Nigeria, successful brands such as Dangote, Indomie and Dettol stay popular because they keep studying what consumers want and adapt their products to it. Marketing therefore links the producer and the consumer, just as trade does, but at a deeper level."
      },
      {
        heading: "Functions of Marketing",
        body: "Marketing performs several functions. Market research finds out what consumers want, how much they will pay, and who the competitors are. Product planning and development designs goods that meet those wants, including decisions on quality, size, packaging and branding. Pricing sets a price that covers costs, earns a profit and is acceptable to buyers. Promotion informs and persuades buyers through advertising, personal selling, sales promotion and public relations. Distribution makes the product available in the right place at the right time, through wholesalers and retailers. Marketing also includes storage and warehousing, transport, financing of sales, and after-sales service, such as guarantees and repairs. Finally, marketing gathers feedback from customers, which helps the firm to improve its products. A firm that neglects any of these functions risks producing goods nobody wants, at the wrong price, in the wrong place."
      },
      {
        heading: "The Marketing Mix: The Four Ps",
        body: "The marketing mix is the combination of four elements a firm controls to satisfy its target market, known as the four Ps. Product is the good or service itself, including its quality, design, brand name, packaging and after-sales service. Price is the amount charged, and it must cover costs, match competitors and reflect the value buyers place on the product. Place is how the product reaches the buyer: the channels of distribution, the location of shops, and the transport used. Promotion is how the firm communicates with buyers, through advertising, personal selling, sales promotion and public relations. A good marketing mix balances all four: a fine product at the wrong price will not sell, and a well-advertised product that is never in the shops will not sell either. Some marketers add three more Ps for services: people, process and physical evidence, but JAMB questions focus on the four Ps."
      },
      {
        heading: "Market Research and the Product Life Cycle",
        body: "Market research is the systematic gathering and analysis of information about a market. It can be primary research, collecting new information through questionnaires, interviews and observation, or secondary research, using information already available, such as government statistics and trade journals. Firms use market research to test a new product, to find the best price, and to learn why sales are falling. The product life cycle describes the stages a product passes through: introduction, when sales are low and promotion is heavy; growth, when sales rise fast; maturity, when sales level off and competition is strong; and decline, when sales fall and the product may be withdrawn. Indomie noodles in Nigeria went through introduction in the 1980s and are now in maturity, with many competitors. Understanding the life cycle helps a firm decide when to promote, when to cut prices, and when to launch a new product."
      }
    ],
    definitions: [
      { term: "Marketing", meaning: "Identifying, anticipating and satisfying consumer needs and wants at a profit." },
      { term: "Marketing mix", meaning: "The combination of product, price, place and promotion used to satisfy a target market." },
      { term: "Market research", meaning: "The systematic gathering and analysis of information about a market." },
      { term: "Branding", meaning: "Giving a product a distinctive name, sign or symbol to identify it." },
      { term: "Product life cycle", meaning: "The stages a product passes through: introduction, growth, maturity and decline." },
      { term: "Target market", meaning: "The group of consumers a firm aims its products at." }
    ],
    formulas: ["Marketing mix: Product + Price + Place + Promotion (the four Ps).", "Product life cycle: Introduction -> Growth -> Maturity -> Decline.", "Market research: primary (new data) or secondary (existing data).", "Marketing concept: put the customer's needs first; selling concept: persuade the customer to buy."],
    examples: [
      {
        title: "Applying the marketing mix",
        problem: "A Nigerian company launches a new brand of bottled water. It is sold in supermarkets at N200 a bottle and advertised on radio. Identify the four Ps in this case.",
        steps: ["Product: the bottled water itself, including its brand, packaging and quality.", "Price: N200 a bottle, the amount charged to buyers.", "Place: supermarkets, the channel through which it reaches buyers.", "Promotion: radio advertising, which informs and persuades buyers.", "Conclude that all four Ps are present and must work together."],
        answer: "Product is the bottled water, price is N200, place is the supermarkets, and promotion is the radio advertising."
      },
      {
        title: "Reading the product life cycle",
        problem: "Sales of a particular phone model rose fast for two years, then levelled off as many rival models appeared. Which stage of the product life cycle has it reached, and what should the firm do?",
        steps: ["Note the pattern: fast growth followed by levelling off and strong competition.", "Recall the stages: introduction, growth, maturity, decline.", "Levelling sales with strong competition matches the maturity stage.", "In maturity, firms often cut prices, improve the product or promote more.", "Conclude the phone is in maturity and needs a new push to stay competitive."],
        answer: "The phone is in the maturity stage; the firm should promote more, improve the product, or cut prices to hold its sales."
      }
    ],
    tips: ["Marketing is wider than selling — selling is only one part of marketing.", "Learn the four Ps with a Nigerian example for each.", "Product life cycle order: introduction, growth, maturity, decline.", "Primary research collects new data; secondary research uses existing data."],
    mistakes: ["Saying marketing is the same as selling.", "Forgetting one of the four Ps, usually place or promotion.", "Mixing up the order of the product life cycle stages.", "Confusing primary with secondary market research."],
    facts: ["The four Ps are product, price, place and promotion.", "Marketing starts with finding out what customers want.", "A brand name helps buyers identify and remember a product.", "In the maturity stage, sales level off and competition is strong."],
    quiz: [
      { q: "What is marketing?", options: ["Persuading customers to buy what a firm has made", "Identifying, anticipating and satisfying consumer needs at a profit", "Producing goods in a factory", "Transporting goods to shops"], answer: 1, explanation: "Marketing starts with finding out what customers want and satisfying those wants at a profit." },
      { q: "How does marketing differ from selling?", options: ["They are exactly the same", "Marketing focuses on making what customers want; selling focuses on persuading them to buy what is made", "Selling is wider than marketing", "Marketing never involves selling"], answer: 1, explanation: "Selling is only one part of marketing; marketing begins with the customer's needs, while selling begins with the product." },
      { q: "Which of these is NOT one of the four Ps?", options: ["Product", "Price", "Place", "People"], answer: 3, explanation: "The four Ps are product, price, place and promotion; people is an extra P used mainly for services." },
      { q: "In the marketing mix, place refers to what?", options: ["The price charged", "How the product reaches the buyer", "The brand name", "The advertising message"], answer: 1, explanation: "Place covers the channels of distribution and the location where buyers can get the product." },
      { q: "Which of these is a function of marketing?", options: ["Mining raw materials", "Market research", "Smelting iron", "Drilling oil"], answer: 1, explanation: "Market research finds out what consumers want and is a key function of marketing." },
      { q: "Collecting new information through questionnaires is an example of what?", options: ["Secondary research", "Primary research", "Product pricing", "After-sales service"], answer: 1, explanation: "Primary research collects new, first-hand information, such as through questionnaires and interviews." },
      { q: "Using government statistics that already exist is an example of what?", options: ["Primary research", "Secondary research", "Personal selling", "Branding"], answer: 1, explanation: "Secondary research uses information that has already been collected by others." },
      { q: "Which is the correct order of the product life cycle?", options: ["Growth, introduction, maturity, decline", "Introduction, growth, maturity, decline", "Maturity, growth, introduction, decline", "Introduction, maturity, growth, decline"], answer: 1, explanation: "A product passes through introduction, then growth, then maturity, then decline." },
      { q: "In which stage of the product life cycle are sales low and promotion heavy?", options: ["Growth", "Maturity", "Introduction", "Decline"], answer: 2, explanation: "At introduction, few people know the product, so sales are low and the firm must promote heavily." },
      { q: "In the maturity stage, sales do what?", options: ["Rise very fast", "Level off and competition is strong", "Fall to zero at once", "Double every month"], answer: 1, explanation: "In maturity, sales level off, many competitors appear, and the firm must work hard to hold its market." },
      { q: "Branding helps a product mainly by doing what?", options: ["Making it heavier", "Giving it a distinctive name buyers can identify", "Reducing its price to zero", "Removing the need for advertising"], answer: 1, explanation: "A brand name or symbol lets buyers recognise the product and remember it." },
      { q: "Which of these is an example of after-sales service?", options: ["A guarantee and free repairs", "A higher price", "A smaller packet", "A new factory"], answer: 0, explanation: "After-sales service includes guarantees, repairs and help given to buyers after they have bought the product." },
      { q: "A firm that puts the customer's needs first is following which concept?", options: ["Production concept", "Selling concept", "Marketing concept", "Product concept"], answer: 2, explanation: "The marketing concept holds that a firm should identify and satisfy customer needs at a profit." },
      { q: "Which element of the marketing mix is the amount charged to buyers?", options: ["Product", "Price", "Place", "Promotion"], answer: 1, explanation: "Price is the amount the buyer pays for the product." },
      { q: "Why does a firm carry out market research before launching a new product?", options: ["To find out what consumers want and whether the product will sell", "To avoid paying tax", "To close down competitors", "To increase production costs"], answer: 0, explanation: "Market research tells the firm what consumers want, what they will pay, and who the competitors are." }
    ],
    status: "published"
  },
  {
    id: "commerce-08",
    subjectId: "commerce",
    topic: "Marketing and Advertising",
    subtopic: "Advertising, sales promotion and personal selling",
    title: "Advertising and Sales Promotion",
    order: 8,
    introduction: "Even the best product will not sell if buyers never hear about it. This lesson explains advertising, its media and its effects, and the other ways firms promote their goods, from sales promotion to public relations.",
    objectives: ["Define advertising and explain its purposes", "Describe the main advertising media and their advantages", "Explain the functions and criticisms of advertising", "Distinguish advertising from sales promotion and personal selling", "Explain the role of public relations"],
    sections: [
      {
        heading: "What Advertising Is and Why Firms Advertise",
        body: "Advertising is a paid form of communication, through the mass media, that informs and persuades people about a product, service or idea. The firm pays for space or time in a newspaper, on radio or television, on a billboard, or on the internet, and the message is presented to a large audience. Firms advertise to inform buyers about a new product, to persuade them to buy, to remind them of a product they already know, to build a brand image, and to increase sales. Advertising also informs the public about prices, new features and where to buy. In Nigeria, advertising is a large industry: firms advertise on television, radio, newspapers, billboards along major roads, and increasingly on social media. The body that regulates advertising practice in Nigeria is the Advertising Regulatory Council of Nigeria (ARCON), formerly the Advertising Practitioners Council of Nigeria (APCON)."
      },
      {
        heading: "Advertising Media and Their Advantages",
        body: "Each advertising medium has its strengths. Television reaches a large audience with sound, pictures and movement, and it is good for showing how a product works, but it is expensive. Radio is cheaper, reaches people in rural areas and in vehicles, and can use local languages, but it has no pictures. Newspapers reach educated readers, can carry detailed information and coupons, and can be kept and re-read, but they are soon out of date. Billboards are large and visible day and night, especially on busy roads in Lagos, Abuja and Onitsha, but they carry only a short message. The internet and social media allow firms to target particular groups, measure responses, and interact with buyers, and they are now the fastest-growing medium in Nigeria. A firm chooses its medium by considering its budget, its target audience, and the nature of the product: a new soft drink may use television, while a local school may use radio and handbills."
      },
      {
        heading: "Functions and Criticisms of Advertising",
        body: "Advertising performs useful functions. It informs consumers about new products and prices, which widens their choice. It helps firms to sell more, which can lead to large-scale production and lower prices. It supports the mass media, because newspapers and television stations earn most of their income from advertising. It creates jobs for copywriters, artists, actors and media workers. It also encourages competition, since firms must improve their products to win buyers. But advertising is also criticised. It can mislead buyers with exaggerated claims, it can encourage wasteful spending, and it can raise prices, because the cost of advertising is added to the price of the product. It can also create demand for goods people do not need. JAMB questions often ask you to weigh these advantages and disadvantages, so learn both sides and give a balanced answer."
      },
      {
        heading: "Sales Promotion, Personal Selling and Public Relations",
        body: "Advertising is only one method of promotion. Sales promotion covers short-term incentives that encourage quick buying: free samples, price reductions, buy-one-get-one-free offers, competitions, coupons and free gifts. In Nigerian supermarkets, buy-one-get-one-free and price cuts are common sales promotions. Personal selling is face-to-face selling by a salesperson, who can explain the product, answer questions and persuade the buyer; it is used for expensive or technical goods such as cars, insurance and industrial machines. Public relations is the work of building a good image for the firm through press releases, sponsorship, community projects and good handling of complaints. The combination of advertising, sales promotion, personal selling and public relations is called the promotional mix. A wise firm chooses the mix that fits its product, its budget and its customers."
      }
    ],
    definitions: [
      { term: "Advertising", meaning: "A paid form of communication through the mass media that informs and persuades people about a product." },
      { term: "Sales promotion", meaning: "Short-term incentives, such as free samples and price cuts, that encourage quick buying." },
      { term: "Personal selling", meaning: "Face-to-face selling by a salesperson who explains and persuades the buyer." },
      { term: "Public relations", meaning: "Building and keeping a good public image for a firm." },
      { term: "Promotional mix", meaning: "The combination of advertising, sales promotion, personal selling and public relations." },
      { term: "Advertising medium", meaning: "The channel used to carry an advertisement, such as television, radio or a billboard." }
    ],
    formulas: ["Promotional mix: advertising + sales promotion + personal selling + public relations.", "Advertising is paid and impersonal; personal selling is face-to-face and personal.", "Medium choice depends on: budget, target audience, nature of the product.", "Advertising aims: inform, persuade, remind, build brand image, increase sales."],
    examples: [
      {
        title: "Choosing an advertising medium",
        problem: "A small bakery in Ilorin wants to tell people in its neighbourhood about its new bread. It has a small budget. Which medium should it choose, and why?",
        steps: ["Note the audience: people in one neighbourhood, a local audience.", "Note the budget: small, so television and national newspapers are too expensive.", "Consider radio: it is cheap, reaches local people, and can use the local language.", "Consider handbills and local radio together for the best local reach.", "Conclude that local radio and handbills fit the budget and the audience."],
        answer: "Local radio and handbills are best: they are cheap, reach the local audience, and fit the small budget."
      },
      {
        title: "Advertising or sales promotion?",
        problem: "A supermarket offers buy-one-get-one-free on a brand of soap for two weeks. Is this advertising or sales promotion, and why?",
        steps: ["Recall that advertising is paid communication through the media to inform and persuade.", "Recall that sales promotion is a short-term incentive to encourage quick buying.", "The offer lasts only two weeks and gives an immediate incentive to buy.", "It is therefore a short-term incentive, not a media advertisement.", "Conclude it is sales promotion."],
        answer: "It is sales promotion, because it is a short-term incentive (buy-one-get-one-free) meant to encourage immediate buying."
      }
    ],
    tips: ["Advertising is paid and goes through the media; personal selling is face-to-face.", "Learn one advantage and one disadvantage for each medium: TV, radio, newspaper, billboard, internet.", "Sales promotion is short-term; advertising builds the brand over time.", "ARCON regulates advertising in Nigeria."],
    mistakes: ["Calling every promotion advertising; free samples and price cuts are sales promotion.", "Saying advertising is free; it is a paid form of communication.", "Forgetting that advertising costs are added to the price of goods.", "Confusing public relations with advertising; PR builds the firm's image, not a single product's sales."],
    facts: ["Advertising is a paid form of communication through the mass media.", "The Advertising Regulatory Council of Nigeria (ARCON) regulates advertising in Nigeria.", "Television is the most expensive advertising medium.", "Buy-one-get-one-free is a form of sales promotion."],
    quiz: [
      { q: "What is advertising?", options: ["Free publicity for a product", "A paid form of communication through the mass media that informs and persuades", "Face-to-face selling", "A price reduction in a shop"], answer: 1, explanation: "Advertising is paid communication through the media, aimed at informing and persuading a large audience." },
      { q: "Which of these is a purpose of advertising?", options: ["To hide the price of goods", "To inform buyers about a new product", "To stop competition", "To reduce the number of buyers"], answer: 1, explanation: "Advertising informs buyers about new products, prices and features, and persuades them to buy." },
      { q: "Which advertising medium reaches a large audience with sound, pictures and movement but is expensive?", options: ["Radio", "Television", "Newspaper", "Handbill"], answer: 1, explanation: "Television combines sound, pictures and movement and reaches many people, but it costs more than other media." },
      { q: "Which medium is cheap, reaches rural areas, and can use local languages?", options: ["Television", "Radio", "Billboard", "Cinema"], answer: 1, explanation: "Radio is cheap, reaches people in rural areas and in vehicles, and can broadcast in local languages." },
      { q: "Which body regulates advertising practice in Nigeria?", options: ["Central Bank of Nigeria", "Advertising Regulatory Council of Nigeria (ARCON)", "Nigerian Stock Exchange", "Corporate Affairs Commission"], answer: 1, explanation: "ARCON, formerly APCON, regulates advertising practice in Nigeria." },
      { q: "A billboard is best suited for which kind of message?", options: ["A long, detailed message", "A short, bold message seen by many road users", "A private letter", "A radio jingle"], answer: 1, explanation: "Billboards carry short, bold messages that drivers and pedestrians can read quickly." },
      { q: "Which of these is a criticism of advertising?", options: ["It informs consumers", "It can mislead buyers with exaggerated claims", "It supports the mass media", "It creates jobs"], answer: 1, explanation: "Advertising is criticised for misleading buyers with exaggerated or false claims." },
      { q: "Buy-one-get-one-free is an example of what?", options: ["Advertising", "Sales promotion", "Personal selling", "Public relations"], answer: 1, explanation: "Buy-one-get-one-free is a short-term incentive to encourage quick buying, which is sales promotion." },
      { q: "Free samples given to customers are an example of what?", options: ["Advertising", "Sales promotion", "Branding", "Market research"], answer: 1, explanation: "Free samples are a short-term incentive that lets buyers try a product, so they are sales promotion." },
      { q: "Personal selling is best used for which type of goods?", options: ["Cheap everyday goods", "Expensive or technical goods such as cars and insurance", "Goods sold by hawkers", "Goods that need no explanation"], answer: 1, explanation: "Personal selling suits expensive or technical goods, where the buyer needs explanation and persuasion." },
      { q: "Public relations is mainly concerned with what?", options: ["Selling one product", "Building a good public image for the firm", "Reducing prices", "Delivering goods"], answer: 1, explanation: "Public relations builds and protects the firm's reputation through press releases, sponsorship and good handling of complaints." },
      { q: "Which of these is NOT part of the promotional mix?", options: ["Advertising", "Sales promotion", "Personal selling", "Warehousing"], answer: 3, explanation: "The promotional mix is advertising, sales promotion, personal selling and public relations; warehousing is a distribution function." },
      { q: "Advertising can lead to lower prices for consumers mainly because it does what?", options: ["Increases the cost of production", "Helps firms sell more and produce on a large scale", "Reduces the number of buyers", "Stops all competition"], answer: 1, explanation: "Advertising helps firms to sell more, which can lead to large-scale production and lower unit costs." },
      { q: "A firm with a small budget advertising to a local audience should most likely choose what?", options: ["National television", "Local radio and handbills", "A cinema in another city", "An international magazine"], answer: 1, explanation: "Local radio and handbills are cheap and reach the local audience, fitting a small budget." },
      { q: "Which of these is an advantage of newspaper advertising?", options: ["It has sound and movement", "It can carry detailed information and be kept and re-read", "It is the cheapest medium of all", "It reaches illiterate audiences easily"], answer: 1, explanation: "Newspapers can carry detailed information, coupons and prices, and readers can keep and re-read them." }
    ],
    status: "published"
  },
  {
    id: "commerce-09",
    subjectId: "commerce",
    topic: "Money, Banking and Credit",
    subtopic: "Money and the banking system",
    title: "Money and the Banking System",
    order: 9,
    introduction: "Money is the lifeblood of trade: without it, buyers and sellers would have to barter. This lesson explains what money is, its functions and qualities, and how the banking system, led by the Central Bank of Nigeria, works.",
    objectives: ["Define money and explain its functions", "Describe the qualities of good money", "Explain the types of money in use", "Describe the functions of the Central Bank of Nigeria", "Explain the functions of commercial banks"],
    sections: [
      {
        heading: "What Money Is and Its Functions",
        body: "Money is anything that is generally accepted as a medium of exchange and for the payment of debts. In the past, Nigerians used cowries, salt and other items as money, but today money is mainly coins and banknotes issued by the Central Bank of Nigeria, plus bank deposits that can be transferred by cheque or electronically. Money has four main functions. As a medium of exchange, it removes the need for barter, so a yam farmer can sell yams for money and use the money to buy cloth. As a measure of value, it lets us compare the prices of different goods in naira. As a store of value, it lets us keep wealth for future use, though inflation can reduce its value. As a standard of deferred payment, it lets debts and contracts be stated in money and paid later. Money also serves as a unit of account, the unit in which prices and accounts are recorded."
      },
      {
        heading: "Qualities of Good Money",
        body: "Good money must have certain qualities. It must be generally acceptable, so that everyone will take it in payment. It must be portable, easy to carry about. It must be durable, so that it does not wear out quickly; this is why Nigerian coins are made of metal and notes of strong paper or polymer. It must be divisible, so that it can be broken into small units for small purchases: the naira is divided into 100 kobo. It must be homogeneous, meaning that one N100 note is the same as another. It must be scarce, but not too scarce: if money is too plentiful, its value falls. It must be recognisable, so that people can tell real money from counterfeit, and it must be stable in value, so that people trust it as a store of value. The naira meets these qualities better than cowries did, which is why it replaced them."
      },
      {
        heading: "The Central Bank of Nigeria",
        body: "The Central Bank of Nigeria (CBN), established in 1958 and based in Abuja, is the apex bank of the country. It issues the naira, the legal tender, and controls the supply of money. It acts as banker to the government, keeping government accounts and managing public debt. It acts as banker to the commercial banks, keeping their reserves and clearing cheques between them. It is the lender of last resort, lending to banks that cannot borrow elsewhere. It manages the country's foreign exchange reserves and the exchange rate of the naira. It supervises and regulates banks and other financial institutions, and it carries out monetary policy, using tools such as the monetary policy rate, open market operations and the cash reserve ratio to control inflation and support economic growth. The Governor of the CBN leads the bank, and its decisions affect every trader, borrower and saver in Nigeria."
      },
      {
        heading: "Commercial Banks and Their Functions",
        body: "Commercial banks, such as First Bank, Zenith Bank, Access Bank and GTBank, are profit-making banks that serve the public. They accept deposits in current, savings and fixed deposit accounts. They lend money to traders, farmers and firms as loans and overdrafts. They provide means of payment, such as cheques, debit cards, bank drafts and electronic transfers. They keep valuables in safe custody, give financial advice, and help customers to buy and sell foreign exchange. They also discount bills of exchange, act as agents for their customers, and provide standing order and direct debit services. Commercial banks create credit: when they lend, they increase the amount of money in circulation. Their main source of income is the difference between the interest they charge on loans and the interest they pay on deposits. In recent years, Nigerian commercial banks have expanded mobile and internet banking, so customers can transfer money without visiting a branch."
      }
    ],
    definitions: [
      { term: "Money", meaning: "Anything generally accepted as a medium of exchange and for the payment of debts." },
      { term: "Legal tender", meaning: "Money that must by law be accepted in payment of a debt." },
      { term: "Central Bank", meaning: "The apex bank that issues currency and controls the banking system of a country." },
      { term: "Commercial bank", meaning: "A profit-making bank that accepts deposits from and lends to the public." },
      { term: "Monetary policy", meaning: "The control of the supply of money and interest rates by the central bank." },
      { term: "Lender of last resort", meaning: "The central bank lending to commercial banks that cannot borrow elsewhere." }
    ],
    formulas: ["Functions of money: medium of exchange, measure of value, store of value, standard of deferred payment.", "Qualities of good money: acceptability, portability, durability, divisibility, homogeneity, scarcity, recognisability, stability.", "N1 = 100 kobo.", "Bank profit: interest charged on loans minus interest paid on deposits."],
    examples: [
      {
        title: "Money as a medium of exchange",
        problem: "A farmer wants cloth, a weaver wants yams, and a trader wants both. Explain how money solves their problem.",
        steps: ["Note the problem: barter needs a double coincidence of wants, which is hard to find.", "The farmer sells his yams for money to anyone who wants yams.", "He then uses the money to buy cloth from the weaver.", "The weaver uses the money to buy yams or anything else she wants.", "Conclude that money breaks barter into two separate exchanges, sale and purchase."],
        answer: "Money lets each person sell what he has and buy what he wants separately, removing the need for a double coincidence of wants."
      },
      {
        title: "Central bank or commercial bank?",
        problem: "A trader wants to open a savings account and borrow N500,000 to stock his shop. Which type of bank should he go to, and why?",
        steps: ["Recall that the Central Bank does not deal directly with the public.", "Recall that commercial banks accept deposits from and lend to the public.", "A savings account is a deposit service offered by commercial banks.", "A loan to a trader is also a commercial bank service.", "Conclude the trader should go to a commercial bank."],
        answer: "He should go to a commercial bank, because only commercial banks accept deposits from and lend money to the public."
      }
    ],
    tips: ["Learn the four functions of money and give a Nigerian example for each.", "CBN = issues currency, banker to government, banker to banks, lender of last resort.", "The Central Bank does not deal directly with the public — commercial banks do.", "Divisibility: N1 = 100 kobo."],
    mistakes: ["Saying the Central Bank accepts deposits from the public; that is a commercial bank's job.", "Confusing the functions of money with the qualities of money.", "Forgetting that money is a store of value as well as a medium of exchange.", "Saying the CBN prints money for profit; it issues currency and controls the money supply."],
    facts: ["The Central Bank of Nigeria was established in 1958.", "The naira is the legal tender of Nigeria.", "The CBN is the lender of last resort to commercial banks.", "One naira is divided into 100 kobo."],
    quiz: [
      { q: "What is money?", options: ["Only coins and banknotes", "Anything generally accepted as a medium of exchange and for the payment of debts", "Gold kept in a bank vault", "A cheque book"], answer: 1, explanation: "Money is anything generally accepted as a medium of exchange and for paying debts." },
      { q: "Which function of money removes the need for barter?", options: ["Store of value", "Medium of exchange", "Standard of deferred payment", "Unit of account"], answer: 1, explanation: "As a medium of exchange, money lets people sell and buy separately, removing the need for barter." },
      { q: "Money as a measure of value lets us do what?", options: ["Keep wealth for the future", "Compare the prices of different goods in naira", "Pay debts later", "Carry wealth easily"], answer: 1, explanation: "As a measure of value, money gives a common unit for comparing the worth of different goods." },
      { q: "Which of these is a quality of good money?", options: ["It must be very plentiful", "It must be divisible into small units", "It must wear out quickly", "It must be different in every unit"], answer: 1, explanation: "Good money must be divisible, so it can be used for small purchases; the naira divides into 100 kobo." },
      { q: "How many kobo make one naira?", options: ["10", "50", "100", "1000"], answer: 2, explanation: "One naira is divided into 100 kobo." },
      { q: "Which body issues the naira in Nigeria?", options: ["First Bank", "Central Bank of Nigeria", "Federal Ministry of Finance", "Nigerian Stock Exchange"], answer: 1, explanation: "The Central Bank of Nigeria is the only body authorised to issue the naira." },
      { q: "The Central Bank acts as lender of last resort to whom?", options: ["The general public", "Commercial banks that cannot borrow elsewhere", "Foreign governments", "Market traders"], answer: 1, explanation: "The lender of last resort lends to commercial banks that cannot obtain funds from other sources." },
      { q: "Which of these is a function of a commercial bank?", options: ["Issuing the naira", "Accepting deposits from the public", "Controlling the exchange rate", "Supervising all banks"], answer: 1, explanation: "Commercial banks accept deposits from the public; issuing currency and supervising banks are CBN functions." },
      { q: "A bank's main source of income is the difference between what?", options: ["Deposits and withdrawals", "Interest charged on loans and interest paid on deposits", "Cheques and drafts", "Assets and liabilities"], answer: 1, explanation: "Banks earn mainly from the margin between the interest they charge borrowers and the interest they pay depositors." },
      { q: "Which account allows a trader to withdraw money by cheque?", options: ["Savings account", "Current account", "Fixed deposit account", "Domiciliary account"], answer: 1, explanation: "A current account is used for day-to-day business payments and allows withdrawals by cheque." },
      { q: "Monetary policy is carried out by which institution in Nigeria?", options: ["Commercial banks", "Central Bank of Nigeria", "Corporate Affairs Commission", "National Insurance Commission"], answer: 1, explanation: "The Central Bank of Nigeria controls the money supply and interest rates through monetary policy." },
      { q: "Which of these is a tool of monetary policy?", options: ["The cash reserve ratio", "The price of yams", "The number of shops", "The rate of income tax"], answer: 0, explanation: "The cash reserve ratio is a monetary policy tool the CBN uses to control how much banks can lend." },
      { q: "Why is money said to be a store of value?", options: ["It can be kept and used in the future", "It is made of metal", "It is printed in Abuja", "It is accepted only in Nigeria"], answer: 0, explanation: "As a store of value, money lets people keep wealth now and spend it later." },
      { q: "Which of these did Nigerians use as money in the past?", options: ["Cowries", "Cheques", "Debit cards", "Bank drafts"], answer: 0, explanation: "Cowries were used as money in Nigeria before coins and banknotes replaced them." },
      { q: "A trader who wants a loan to stock his shop should go to which bank?", options: ["The Central Bank", "A commercial bank", "The World Bank", "A cooperative society only"], answer: 1, explanation: "Commercial banks lend to the public; the Central Bank does not deal directly with the public." }
    ],
    status: "published"
  },
  {
    id: "commerce-10",
    subjectId: "commerce",
    topic: "Money, Banking and Credit",
    subtopic: "Credit, cheques and electronic banking",
    title: "Credit, Cheques and Electronic Banking",
    order: 10,
    introduction: "Much of modern trade runs on credit: goods are bought now and paid for later. This lesson explains credit and its instruments, how cheques work, and how electronic banking has changed the way Nigerians pay.",
    objectives: ["Define credit and explain its advantages and disadvantages", "Explain the types of credit available to traders", "Describe the parts of a cheque and how it is used", "Explain the difference between a crossed and an open cheque", "Describe electronic payment methods used in Nigeria"],
    sections: [
      {
        heading: "Credit: Meaning, Types and Uses",
        body: "Credit is the ability to buy goods or services now and pay for them later, or to borrow money and repay it later with interest. Credit helps trade in many ways: a retailer can stock his shop before he has the cash, a manufacturer can buy raw materials and pay after production, and a consumer can buy a refrigerator and pay in instalments. The main types of credit are bank loans, overdrafts, trade credit from suppliers, hire purchase, and credit cards. A bank loan is a fixed sum repaid over a period with interest. An overdraft lets a current account holder withdraw more than his balance up to an agreed limit, paying interest only on the amount used. Trade credit is given by a supplier who allows a buyer time, often 30 days, to pay. Hire purchase lets a buyer take goods now and pay in instalments, becoming the owner only after the last payment. Credit increases sales and helps businesses to grow, but it also has dangers: buyers may fail to pay, and interest can make goods more expensive."
      },
      {
        heading: "Cheques and How They Work",
        body: "A cheque is a written order by an account holder, the drawer, instructing his bank, the drawee, to pay a stated sum to a named person, the payee, or to the bearer. A cheque must show the date, the amount in figures and in words, the name of the payee, and the signature of the drawer. When a cheque is paid into a bank, it goes through clearing: the banks exchange cheques and settle the amounts, usually within a day or two in Nigeria. A cheque can be dishonoured, that is, refused by the bank, if there is not enough money in the account, if the signature does not match, if the cheque is stale, meaning more than six months old, or if the drawer has stopped payment. A crossed cheque has two parallel lines across its face, which means it must be paid into a bank account and cannot be cashed over the counter. An open cheque has no crossing and can be cashed across the counter. Crossing makes a cheque safer, because a thief cannot easily cash it."
      },
      {
        heading: "Other Credit Instruments",
        body: "Besides cheques, traders use other credit instruments. A bill of exchange is a written order by one person, the drawer, instructing another person, the drawee, to pay a stated sum at a future date to a named person; it is widely used in foreign trade. A promissory note is a written promise by one person to pay a stated sum to another person at a future date. A bank draft is a cheque drawn by a bank on itself, and it is safer than a personal cheque because the bank guarantees payment. A standing order is an instruction to a bank to pay a fixed sum regularly, such as monthly rent, while a direct debit lets a firm collect varying sums from a customer's account with his permission. A credit card lets the holder buy goods on credit up to a limit and pay later, while a debit card takes money directly from the holder's account. Each instrument fits a different need, and JAMB questions often ask you to match the instrument to its use."
      },
      {
        heading: "Electronic Banking in Nigeria",
        body: "Electronic banking, or e-banking, lets customers use banking services through phones, computers and machines. In Nigeria, the main channels are Automated Teller Machines (ATMs), Point of Sale (POS) terminals in shops, mobile banking apps, internet banking, and USSD codes that work on any phone. Transfers can be made instantly through the Nigeria Inter-Bank Settlement System (NIBSS) Instant Payment, known as NIP, and the Central Bank's cashless policy encourages electronic payments. Mobile money operators and fintech firms such as OPay, PalmPay and Moniepoint have spread banking to people without bank branches nearby. E-banking is fast, convenient and reduces the risk of carrying cash, but it also brings risks: fraud, failed transfers, network problems and the need for a charged phone. Traders must therefore keep records of electronic payments and confirm that money has been received before releasing goods."
      }
    ],
    definitions: [
      { term: "Credit", meaning: "The ability to buy goods or services now and pay for them later." },
      { term: "Overdraft", meaning: "An arrangement letting a current account holder withdraw more than his balance up to an agreed limit." },
      { term: "Cheque", meaning: "A written order by an account holder instructing his bank to pay a stated sum to a named person." },
      { term: "Crossed cheque", meaning: "A cheque with two parallel lines across it, which must be paid into a bank account." },
      { term: "Hire purchase", meaning: "Buying goods by instalments, becoming the owner only after the last payment." },
      { term: "Bill of exchange", meaning: "A written order instructing a person to pay a stated sum at a future date." }
    ],
    formulas: ["Cheque parties: drawer (account holder) -> drawee (bank) -> payee (receiver).", "Crossed cheque: must be paid into an account; open cheque: can be cashed over the counter.", "Overdraft interest is charged only on the amount actually used.", "Hire purchase: ownership passes only after the final instalment is paid."],
    examples: [
      {
        title: "Working out hire purchase cost",
        problem: "A trader buys a generator on hire purchase. The cash price is N200,000. He pays a deposit of N50,000 and 10 monthly instalments of N20,000. How much extra does he pay compared with the cash price?",
        steps: ["Add the deposit and the instalments: N50,000 plus 10 times N20,000.", "Calculate the instalments: 10 times N20,000 equals N200,000.", "Add the deposit: N50,000 plus N200,000 equals N250,000 total paid.", "Subtract the cash price: N250,000 minus N200,000 equals N50,000.", "Conclude the extra cost of credit is N50,000."],
        answer: "He pays N250,000 in total, which is N50,000 more than the cash price of N200,000."
      },
      {
        title: "Crossed or open cheque?",
        problem: "A company pays a supplier N500,000 by cheque and wants to make sure the money goes into the supplier's bank account, not into the hands of a thief. Should it cross the cheque, and why?",
        steps: ["Recall that an open cheque can be cashed over the counter by anyone holding it.", "Recall that a crossed cheque must be paid into a bank account.", "Crossing therefore makes the cheque safer against theft.", "The company wants the money to reach the supplier's account.", "Conclude the cheque should be crossed."],
        answer: "Yes, it should be crossed, because a crossed cheque can only be paid into a bank account and cannot be cashed over the counter."
      }
    ],
    tips: ["Drawer = account holder; drawee = bank; payee = receiver — learn the three parties.", "Crossed cheque = into an account only; open cheque = cash over the counter.", "Hire purchase: you own the goods only after the last instalment.", "A cheque more than six months old is stale and will be dishonoured."],
    mistakes: ["Saying a crossed cheque can be cashed over the counter; it cannot.", "Confusing a bill of exchange with a promissory note; the bill is an order to pay, the note is a promise to pay.", "Thinking a credit card takes money from your account at once; that is a debit card.", "Forgetting that an overdraft is only for current account holders."],
    facts: ["A cheque must show the date, amount in figures and words, payee and signature.", "NIBSS Instant Payment (NIP) allows instant transfers between Nigerian banks.", "Trade credit often allows a buyer 30 days to pay a supplier.", "A bank draft is safer than a personal cheque because the bank guarantees payment."],
    quiz: [
      { q: "What is credit?", options: ["Paying cash at once", "Buying goods or services now and paying later", "Saving money in a bank", "Exchanging goods for goods"], answer: 1, explanation: "Credit means buying now and paying later, or borrowing money and repaying it later with interest." },
      { q: "An overdraft is available to which type of account holder?", options: ["Savings account holder", "Current account holder", "Fixed deposit holder", "Anybody at all"], answer: 1, explanation: "An overdraft is an arrangement for current account holders to withdraw more than their balance up to an agreed limit." },
      { q: "On an overdraft, interest is charged on what?", options: ["The full agreed limit", "Only the amount actually used", "The account balance", "Nothing at all"], answer: 1, explanation: "Overdraft interest is charged only on the amount the customer actually withdraws beyond his balance." },
      { q: "In hire purchase, when does the buyer become the owner of the goods?", options: ["When he pays the deposit", "After the last instalment is paid", "When he takes the goods home", "Never"], answer: 1, explanation: "Under hire purchase, ownership passes to the buyer only after the final instalment has been paid." },
      { q: "On a cheque, the drawer is who?", options: ["The bank", "The account holder who writes the cheque", "The person who receives the money", "The bank manager"], answer: 1, explanation: "The drawer is the account holder who writes and signs the cheque." },
      { q: "On a cheque, the drawee is who?", options: ["The account holder", "The bank instructed to pay", "The person receiving the money", "The clearing house"], answer: 1, explanation: "The drawee is the bank on which the cheque is drawn and which is instructed to pay." },
      { q: "A crossed cheque must be paid in what way?", options: ["Cashed over the counter", "Paid into a bank account", "Paid in cash by the drawer", "Sent by post only"], answer: 1, explanation: "A crossed cheque, marked with two parallel lines, must be paid into a bank account." },
      { q: "A cheque is dishonoured if which of these happens?", options: ["The account has enough money", "The signature matches", "There is not enough money in the account", "The payee is named correctly"], answer: 2, explanation: "A bank refuses a cheque when the account lacks enough funds, the signature does not match, or the cheque is stale." },
      { q: "A cheque more than six months old is described as what?", options: ["Crossed", "Stale", "Open", "Certified"], answer: 1, explanation: "A cheque older than six months is stale and the bank will not honour it." },
      { q: "A bill of exchange is best described as what?", options: ["A promise to pay by the debtor", "A written order instructing a person to pay a sum at a future date", "A cheque drawn by a bank on itself", "A fixed deposit receipt"], answer: 1, explanation: "A bill of exchange is an order by the drawer instructing the drawee to pay a stated sum at a future date." },
      { q: "A promissory note differs from a bill of exchange because it is what?", options: ["An order to pay", "A promise to pay", "A bank draft", "A credit card"], answer: 1, explanation: "A promissory note is a written promise by the maker to pay, while a bill of exchange is an order to pay." },
      { q: "Which of these is a bank draft?", options: ["A cheque drawn by a bank on itself", "A personal cheque", "A savings passbook", "A credit card"], answer: 0, explanation: "A bank draft is drawn by a bank on itself, so the bank guarantees payment." },
      { q: "Which electronic payment channel allows instant transfers between Nigerian banks?", options: ["NIBSS Instant Payment (NIP)", "A paper cheque", "A postal order", "A savings passbook"], answer: 0, explanation: "NIP, run through NIBSS, allows instant transfers between banks in Nigeria." },
      { q: "A debit card differs from a credit card mainly because it does what?", options: ["Lets the holder borrow money", "Takes money directly from the holder's account", "Can only be used abroad", "Has no limit"], answer: 1, explanation: "A debit card deducts money directly from the holder's account, while a credit card lets the holder borrow up to a limit." },
      { q: "Trade credit from a supplier usually allows the buyer how long to pay?", options: ["One day", "About 30 days", "Ten years", "No time at all"], answer: 1, explanation: "Trade credit commonly allows the buyer a period such as 30 days to pay for goods supplied." }
    ],
    status: "published"
  },
  {
    id: "commerce-11",
    subjectId: "commerce",
    topic: "Warehousing and Transportation",
    subtopic: "Warehousing: types, functions and documents",
    title: "Warehousing",
    order: 11,
    introduction: "Goods are rarely used the moment they are produced; they must be stored safely until buyers need them. This lesson explains warehousing, the types of warehouses, their functions, and the documents used in warehousing.",
    objectives: ["Define warehousing and explain its importance", "Describe the types of warehouses", "Explain the functions of a warehouse", "Describe the documents used in warehousing", "Explain the difference between a bonded warehouse and an ordinary warehouse"],
    sections: [
      {
        heading: "What Warehousing Is and Why It Matters",
        body: "Warehousing is the storage of goods in a safe place until they are needed. Most goods are produced in one season or in large batches, but they are consumed gradually, so storage bridges the gap between production and consumption. A yam farmer harvests once a year but people eat yams all year round; a warehouse, or a good store, keeps the yams safe between harvests. Warehousing also protects goods from damage, theft, rain and pests, and it allows goods to be kept until prices are better. For example, a trader may store grains after harvest when prices are low and sell them months later when prices rise. Warehousing therefore helps to keep prices stable, prevents waste, and ensures a steady supply of goods. Without warehousing, producers would have to sell everything at once, prices would crash at harvest time, and goods would be scarce at other times."
      },
      {
        heading: "Types of Warehouses",
        body: "There are several types of warehouses. A private warehouse is owned by a manufacturer or trader for his own goods, such as a Dangote warehouse for cement. A public warehouse is owned by a specialist firm that stores goods for many traders for a fee. A bonded warehouse is a warehouse licensed by the Customs, where imported goods are stored without payment of import duty until the owner is ready to pay the duty and take the goods; if the goods are re-exported, no duty is paid at all. Bonded warehouses are found near ports and airports, such as Apapa in Lagos. A cold store is a warehouse kept at a low temperature for perishable goods such as fish, meat and vegetables. A general warehouse stores many kinds of goods, while a special warehouse stores one kind, such as a silo for grain or a tank for fuel. Each type serves a different need, and the choice depends on the nature of the goods and the trader's business."
      },
      {
        heading: "Functions of a Warehouse",
        body: "A warehouse performs many functions. It stores goods safely until they are needed. It protects goods from damage, theft and bad weather. It allows goods to be kept until prices improve, which helps traders to earn more. It helps to keep a steady supply of goods, so buyers are not disappointed. It allows goods to be sorted, graded, packed and branded before sale. It also allows the breaking of bulk: large deliveries are divided into smaller quantities for retailers. Some warehouses allow goods to be processed, such as ripening bananas or blending tea. Warehouses also provide a place where goods can be inspected by buyers, and they help manufacturers to produce in large quantities without worrying about immediate sale. In modern trade, warehouses are also used as distribution centres, from which online orders are packed and sent to customers."
      },
      {
        heading: "Documents Used in Warehousing",
        body: "Several documents are used in warehousing. When goods are received, the warehouseman issues a warehouse warrant or warehouse receipt, which states the goods stored, their quantity and their owner; the warrant can be used as security for a loan and can be transferred to another person. A delivery order instructs the warehouseman to release goods to a named person. A dock warrant is issued for goods stored in a dock warehouse. The goods are also recorded in a warehouse register, and the owner may be charged rent or storage charges. The warehouse keeper has a lien, that is, the right to keep the goods until storage charges are paid. If goods are damaged while in the warehouse, the owner may claim against the warehouseman or against his insurance. Knowing these documents matters for JAMB, because questions often ask what a warehouse warrant is used for."
      }
    ],
    definitions: [
      { term: "Warehousing", meaning: "The storage of goods in a safe place until they are needed." },
      { term: "Bonded warehouse", meaning: "A Customs-licensed warehouse where imported goods are stored without paying duty until the duty is paid or the goods are re-exported." },
      { term: "Warehouse warrant", meaning: "A document issued by a warehouseman stating the goods stored, which can be transferred or used as security for a loan." },
      { term: "Cold store", meaning: "A warehouse kept at a low temperature for perishable goods." },
      { term: "Public warehouse", meaning: "A warehouse owned by a specialist firm that stores goods for many traders for a fee." },
      { term: "Lien", meaning: "The right of the warehouseman to keep goods until storage charges are paid." }
    ],
    formulas: ["Warehousing bridges the gap between production and consumption.", "Bonded warehouse: goods stored duty-free until duty is paid or goods are re-exported.", "Warehouse warrant: proof of ownership, transferable, usable as security for a loan.", "Storage charges must be paid before goods are released (warehouseman's lien)."],
    examples: [
      {
        title: "Choosing a bonded warehouse",
        problem: "An importer brings electronics into Lagos but does not have enough cash to pay the import duty at once. He plans to sell the goods gradually and pay duty as he takes them out. Which type of warehouse should he use, and why?",
        steps: ["Note the goods are imported and the duty is not yet paid.", "Recall that a bonded warehouse stores imported goods without payment of duty.", "The importer can take goods out bit by bit, paying duty on each portion.", "If he re-exports some goods, no duty is paid on them at all.", "Conclude a bonded warehouse fits his situation."],
        answer: "He should use a bonded warehouse, because it lets him store imported goods duty-free until he pays the duty or re-exports them."
      },
      {
        title: "Using a warehouse warrant",
        problem: "A trader stores 1,000 bags of rice in a public warehouse and receives a warehouse warrant. He needs a loan from his bank. How can the warrant help him?",
        steps: ["Recall that a warehouse warrant states the goods stored and their owner.", "The warrant is a document of title to the goods.", "The trader can pledge the warrant to the bank as security for the loan.", "The bank knows the rice is safely stored and can be sold if the loan is not repaid.", "Conclude the warrant lets the trader borrow against his stored goods."],
        answer: "He can pledge the warehouse warrant to the bank as security for the loan, because it proves he owns rice stored in the warehouse."
      }
    ],
    tips: ["Bonded warehouse = duty-free storage of imports — a favourite JAMB question.", "A warehouse warrant is a document of title: it can be transferred and used as security.", "Cold stores are for perishables: fish, meat, vegetables.", "Warehousing keeps prices stable by storing goods when supply is high."],
    mistakes: ["Saying a bonded warehouse is for local goods; it is for imported goods awaiting duty.", "Confusing a warehouse warrant with a delivery order; the warrant proves ownership, the order releases the goods.", "Forgetting that the warehouseman has a lien until charges are paid.", "Saying warehousing only stores goods; it also sorts, grades, packs and breaks bulk."],
    facts: ["Bonded warehouses are found near ports such as Apapa in Lagos.", "A warehouse warrant can be used as security for a bank loan.", "Grains are stored in silos, which are special warehouses.", "Warehousing bridges the gap between production and consumption."],
    quiz: [
      { q: "What is warehousing?", options: ["The transport of goods by road", "The storage of goods in a safe place until they are needed", "The sale of goods in a market", "The production of goods in a factory"], answer: 1, explanation: "Warehousing is the storage of goods safely until they are needed by buyers." },
      { q: "Warehousing helps to keep prices stable mainly by doing what?", options: ["Destroying surplus goods", "Storing goods when supply is high and releasing them later", "Raising prices at harvest time", "Stopping all trade"], answer: 1, explanation: "Storing goods after harvest and releasing them gradually prevents prices crashing at harvest and rising sharply later." },
      { q: "A bonded warehouse is used mainly for what?", options: ["Storing local farm produce", "Storing imported goods without paying duty until the duty is paid", "Storing goods for free", "Storing goods that will never be sold"], answer: 1, explanation: "In a bonded warehouse, imported goods are stored duty-free until the owner pays the duty or re-exports them." },
      { q: "Where are bonded warehouses usually found?", options: ["In remote villages", "Near ports and airports", "On top of mountains", "Inside schools"], answer: 1, explanation: "Bonded warehouses are near ports and airports, such as Apapa in Lagos, where imported goods arrive." },
      { q: "A cold store is used for which type of goods?", options: ["Cement and iron rods", "Perishable goods such as fish and meat", "Books and stationery", "Furniture"], answer: 1, explanation: "Cold stores are kept at low temperatures to preserve perishable goods such as fish, meat and vegetables." },
      { q: "A public warehouse is owned by whom?", options: ["A manufacturer for his own goods", "A specialist firm that stores goods for many traders for a fee", "The government only", "A single retailer"], answer: 1, explanation: "A public warehouse is run by a specialist firm that stores goods for any trader who pays the fee." },
      { q: "A warehouse warrant can be used for what?", options: ["As security for a bank loan", "As money in a market", "As a passport", "As a driving licence"], answer: 0, explanation: "A warehouse warrant is a document of title to stored goods, so it can be pledged to a bank as security." },
      { q: "A delivery order is used to do what?", options: ["Prove ownership of goods", "Instruct the warehouseman to release goods to a named person", "Pay import duty", "Insure the goods"], answer: 1, explanation: "A delivery order tells the warehouseman to hand over specified goods to the person named in the order." },
      { q: "The warehouseman's lien means he can do what?", options: ["Sell the goods at once", "Keep the goods until storage charges are paid", "Give the goods away free", "Destroy damaged goods"], answer: 1, explanation: "A lien is the right to retain goods until the charges owed on them have been paid." },
      { q: "Which of these is a function of a warehouse?", options: ["Producing goods", "Sorting, grading and packing goods before sale", "Advertising goods on television", "Lending money to traders"], answer: 1, explanation: "Warehouses sort, grade, pack and brand goods before they are sent out for sale." },
      { q: "Grains are usually stored in which special warehouse?", options: ["A cold store", "A silo", "A bonded warehouse", "A fuel tank"], answer: 1, explanation: "A silo is a tall store built specially for grain." },
      { q: "If imported goods in a bonded warehouse are re-exported, what happens to the import duty?", options: ["Double duty is paid", "No duty is paid", "Half duty is paid", "Duty is paid in advance"], answer: 1, explanation: "Goods re-exported from a bonded warehouse never enter the country, so no import duty is paid on them." },
      { q: "Which of these best explains why a trader stores yams after harvest?", options: ["To let them rot", "To sell them later when prices are higher", "To avoid paying tax", "To hide them from buyers"], answer: 1, explanation: "Yams are plentiful and cheap at harvest, so storing them lets the trader sell later when prices rise." },
      { q: "A private warehouse differs from a public warehouse because it is what?", options: ["Owned by a trader for his own goods", "Open to every trader for a fee", "Licensed by Customs", "Kept at a low temperature"], answer: 0, explanation: "A private warehouse belongs to a manufacturer or trader and stores only his own goods." },
      { q: "Breaking the bulk in a warehouse means what?", options: ["Damaging the goods", "Dividing large deliveries into smaller quantities for retailers", "Throwing away bad goods", "Mixing different goods together"], answer: 1, explanation: "Warehouses break bulk by dividing large deliveries into smaller quantities that retailers can buy." }
    ],
    status: "published"
  },
  {
    id: "commerce-12",
    subjectId: "commerce",
    topic: "Warehousing and Transportation",
    subtopic: "Transportation: modes and documents",
    title: "Transportation",
    order: 12,
    introduction: "Transport moves goods and people from where they are to where they are needed, and it is one of the most important aids to trade. This lesson compares the modes of transport, their advantages and disadvantages, and the documents used in transport.",
    objectives: ["Explain the importance of transport in trade", "Compare road, rail, water and air transport", "Describe the advantages and disadvantages of each mode", "Explain the transport documents such as the waybill and bill of lading", "Identify the factors that influence the choice of a mode of transport"],
    sections: [
      {
        heading: "Importance of Transport in Trade",
        body: "Transport is the movement of goods and people from one place to another, and it is essential for trade. It links producers in the countryside with consumers in the cities: yams grown in Benue reach markets in Lagos by road, and crude oil from the Niger Delta reaches refineries and ports by pipeline and ship. Transport makes goods available where they are needed, widens the market for producers, and allows specialisation, since each region can produce what it does best and exchange it for other goods. Transport also creates employment for drivers, pilots, sailors, railway workers and port workers, and it encourages the growth of towns along transport routes. Without transport, trade would be limited to the local area, prices would vary widely between places, and many goods would rot where they were produced. In Nigeria, road transport carries most goods, but rail, water and air transport each play a part."
      },
      {
        heading: "Road and Rail Transport",
        body: "Road transport uses cars, lorries, buses and motorcycles on roads. Its advantages are flexibility and door-to-door service: a lorry can load at a farm and deliver directly to a market, and roads reach almost every town and village. Its disadvantages are that it is slow for long distances, it is affected by bad roads and traffic, and it carries relatively small loads. In Nigeria, bad roads and insecurity on some routes raise the cost of road transport. Rail transport uses trains on railway lines, such as the Lagos to Ibadan standard gauge line and the Abuja to Kaduna line. Rail is cheap for heavy, bulky goods over long distances, such as coal, cement and containers, and it is safer and less affected by traffic. Its disadvantages are that it is inflexible, since trains run only where tracks exist, it is slow to load and unload, and building railways is very expensive. Rail is best for heavy goods over long distances, while road is best for short distances and door-to-door delivery."
      },
      {
        heading: "Water and Air Transport",
        body: "Water transport uses ships, boats and canoes on seas, rivers and lakes. It is the cheapest mode for heavy, bulky goods over long distances, which is why Nigeria's crude oil exports and most imports travel by sea through ports such as Apapa and Tin Can Island in Lagos. Its disadvantages are that it is slow, it depends on waterways and ports, and goods can be damaged by water. Inland water transport on the Niger and Benue rivers carries goods and people in the rainy season. Air transport uses aeroplanes and is the fastest mode of all, which makes it best for perishable goods, urgent goods and light, valuable goods such as medicines, documents and fresh flowers. Its disadvantages are that it is the most expensive mode, it carries small loads, it is affected by bad weather, and it needs airports. Pipeline transport, used for crude oil, gas and water, is cheap and continuous once built, but it is inflexible and costly to construct."
      },
      {
        heading: "Choosing a Mode and Transport Documents",
        body: "The choice of transport depends on several factors. The nature of the goods matters: perishable or urgent goods need fast transport, while heavy, bulky goods need cheap transport. The distance matters: air is best for long distances where speed counts, road for short distances. The cost matters: a trader with a small budget may choose road or water rather than air. The availability of the mode matters: there is no railway to many Nigerian towns, so road is the only choice. The safety of the goods and the reliability of the service also matter. Transport uses documents too. A waybill is a document issued by a carrier, such as a railway or road haulier, showing that goods have been received for transport. A bill of lading is a document issued by a shipowner for goods shipped by sea; it is a receipt, a contract of carriage, and a document of title, so it can be transferred to another person. A consignment note is used in road transport, and an air waybill is used in air transport. These documents prove ownership and help goods to pass through Customs."
      }
    ],
    definitions: [
      { term: "Transport", meaning: "The movement of goods and people from one place to another." },
      { term: "Waybill", meaning: "A document issued by a carrier showing that goods have been received for transport." },
      { term: "Bill of lading", meaning: "A document issued by a shipowner for goods shipped by sea; it is a receipt, a contract and a document of title." },
      { term: "Consignment note", meaning: "A document used in road transport to describe goods sent to a named person." },
      { term: "Pipeline transport", meaning: "Transport of liquids and gases through pipes, used for crude oil, gas and water." },
      { term: "Door-to-door service", meaning: "Collecting goods from the sender and delivering them directly to the receiver's address." }
    ],
    formulas: ["Cheapest for heavy, bulky goods over long distances: water transport.", "Fastest mode: air transport.", "Most flexible, door-to-door: road transport.", "Bill of lading: receipt + contract of carriage + document of title."],
    examples: [
      {
        title: "Choosing a mode of transport",
        problem: "A pharmaceutical company in Lagos must send vaccines to a hospital in Maiduguri urgently. The vaccines must be kept cold and must arrive within a day. Which mode should it use, and why?",
        steps: ["Note the goods are urgent, perishable and valuable.", "Recall that air transport is the fastest mode.", "Road transport would take days and risks delay on bad roads.", "Air transport can deliver within hours and suits light, valuable goods.", "Conclude air transport is the best choice despite its high cost."],
        answer: "Air transport is best, because it is the fastest mode and suits urgent, perishable, valuable goods such as vaccines."
      },
      {
        title: "Bill of lading as a document of title",
        problem: "A trader in Onitsha imports goods by sea and receives a bill of lading. He sells the goods while the ship is still at sea. How can he transfer ownership to the buyer?",
        steps: ["Recall that a bill of lading is a document of title to the goods.", "A document of title can be transferred by endorsement and delivery.", "The trader endorses the bill of lading to the buyer.", "The buyer can then claim the goods from the ship on arrival.", "Conclude the bill of lading lets goods be sold while in transit."],
        answer: "He endorses and hands over the bill of lading to the buyer, who can then claim the goods from the ship."
      }
    ],
    tips: ["Fastest = air; cheapest for heavy goods = water; most flexible = road.", "Bill of lading is the sea document and is a document of title.", "Match the mode to the goods: perishable and urgent = air; heavy and bulky = water or rail.", "The Lagos-Ibadan and Abuja-Kaduna lines are Nigeria's standard gauge railways."],
    mistakes: ["Saying road transport is cheapest for heavy goods over long distances; water and rail are cheaper.", "Confusing a waybill with a bill of lading; the bill of lading is for sea transport and is a document of title.", "Forgetting that air transport carries only small loads.", "Saying transport is unimportant in trade; it links producers to consumers."],
    facts: ["Most of Nigeria's imports and crude oil exports travel by sea.", "Apapa and Tin Can Island are the main ports in Lagos.", "Air transport is the fastest but the most expensive mode.", "A bill of lading is a receipt, a contract of carriage and a document of title."],
    quiz: [
      { q: "What is transport?", options: ["The storage of goods", "The movement of goods and people from one place to another", "The sale of goods in a market", "The production of goods"], answer: 1, explanation: "Transport moves goods and people from where they are to where they are needed." },
      { q: "Which mode of transport is the fastest?", options: ["Road", "Rail", "Water", "Air"], answer: 3, explanation: "Air transport is the fastest mode of all, though it is also the most expensive." },
      { q: "Which mode is cheapest for heavy, bulky goods over long distances?", options: ["Air", "Road", "Water", "Motorcycle"], answer: 2, explanation: "Water transport is the cheapest for heavy, bulky goods carried over long distances." },
      { q: "Which mode offers door-to-door service and the greatest flexibility?", options: ["Rail", "Road", "Water", "Pipeline"], answer: 1, explanation: "Road transport can load at the sender's door and deliver to the receiver's door, and roads reach almost everywhere." },
      { q: "Which of these is a disadvantage of road transport in Nigeria?", options: ["It is too fast", "Bad roads and traffic raise costs and cause delays", "It carries too much at once", "It needs an airport"], answer: 1, explanation: "Bad roads, traffic and insecurity on some routes make road transport slow and costly in Nigeria." },
      { q: "Rail transport is best suited for which goods?", options: ["Urgent medicines", "Heavy, bulky goods over long distances", "Fresh flowers", "Small parcels"], answer: 1, explanation: "Rail is cheap for heavy, bulky goods such as cement and containers carried over long distances." },
      { q: "Which Nigerian ports handle most imports and crude oil exports?", options: ["Apapa and Tin Can Island in Lagos", "Lokoja and Onitsha", "Kano and Sokoto", "Jos and Bauchi"], answer: 0, explanation: "Apapa and Tin Can Island in Lagos are Nigeria's main seaports." },
      { q: "Pipeline transport is mainly used for what?", options: ["Passengers", "Crude oil, gas and water", "Letters and parcels", "Fresh fish"], answer: 1, explanation: "Pipelines carry liquids and gases such as crude oil, gas and water cheaply and continuously." },
      { q: "A bill of lading is issued for goods carried by which mode?", options: ["Road", "Rail", "Sea", "Air"], answer: 2, explanation: "A bill of lading is issued by a shipowner for goods shipped by sea." },
      { q: "Which of these is true of a bill of lading?", options: ["It is only a receipt", "It is a receipt, a contract of carriage and a document of title", "It cannot be transferred", "It is used only for road transport"], answer: 1, explanation: "A bill of lading serves as a receipt for the goods, a contract of carriage, and a document of title." },
      { q: "A waybill is issued by whom?", options: ["A shipowner", "A carrier, such as a railway or road haulier", "A bank", "An insurance company"], answer: 1, explanation: "A waybill is issued by the carrier to show that goods have been received for transport." },
      { q: "Which document is used in air transport?", options: ["Bill of lading", "Air waybill", "Dock warrant", "Warehouse warrant"], answer: 1, explanation: "An air waybill is the transport document used when goods are sent by air." },
      { q: "A trader sending urgent vaccines from Lagos to Maiduguri should choose which mode?", options: ["Water", "Rail", "Air", "Pipeline"], answer: 2, explanation: "Vaccines are urgent, perishable and valuable, so the fastest mode, air, is best." },
      { q: "Which factor most affects the choice of transport for fresh fish?", options: ["The colour of the vehicle", "The perishable nature of the goods", "The name of the driver", "The number of passengers"], answer: 1, explanation: "Fresh fish spoils quickly, so it needs fast transport, which is the key factor in the choice." },
      { q: "Transport widens the market for producers mainly by doing what?", options: ["Making goods available far from where they are produced", "Reducing the number of goods produced", "Stopping goods from leaving the farm", "Raising the price of all goods"], answer: 0, explanation: "Transport lets producers sell in distant markets, widening their market beyond the local area." }
    ],
    status: "published"
  },
  {
    id: "commerce-13",
    subjectId: "commerce",
    topic: "Consumer Protection and Business Law",
    subtopic: "Consumer protection",
    title: "Consumer Protection",
    order: 13,
    introduction: "Buyers are often weaker than sellers: they cannot always tell if goods are genuine, safe or fairly priced. This lesson explains consumer protection, the laws and agencies that protect Nigerian consumers, and what a consumer can do when cheated.",
    objectives: ["Explain the need for consumer protection", "Describe the rights of consumers", "Identify the agencies that protect consumers in Nigeria", "Explain the role of NAFDAC, SON and the FCCPC", "Describe the remedies available to an exploited consumer"],
    sections: [
      {
        heading: "Why Consumers Need Protection",
        body: "Consumers need protection because sellers usually know more about their goods than buyers do. A buyer cannot tell by looking whether a drug is genuine, whether a tin of milk is expired, or whether a phone is fairly priced. Some traders exploit this by selling fake, adulterated or expired goods, by giving short measures, by charging excessive prices, or by making false claims in advertisements. In Nigeria, fake drugs and substandard goods have caused illness and death, which is why consumer protection is a matter of life and death, not just of money. Consumers also need protection because a single buyer has little power against a large company. Protection laws and agencies give the consumer a voice, set standards that sellers must meet, and punish traders who cheat buyers."
      },
      {
        heading: "The Rights of Consumers",
        body: "Consumers have several recognised rights. The right to safety means goods must not harm the buyer when used properly. The right to information means buyers must be told the truth about a product, including its ingredients, price and expiry date. The right to choose means buyers should have a range of goods to choose from at fair prices. The right to be heard means consumers can complain and expect their complaints to be taken seriously. The right to redress means a cheated consumer can get a refund, a replacement, or compensation. The right to consumer education means buyers should be taught how to make wise choices. The right to a healthy environment means goods should not damage the environment. These rights were first set out by the United States President John F. Kennedy in 1962 and have since been adopted around the world, including in Nigeria. Knowing them helps you to answer JAMB questions and to protect yourself as a buyer."
      },
      {
        heading: "Agencies That Protect Consumers in Nigeria",
        body: "Several agencies protect Nigerian consumers. The Federal Competition and Consumer Protection Commission (FCCPC) is the main body: it investigates unfair trade practices, protects consumers from exploitation, and promotes fair competition. The National Agency for Food and Drug Administration and Control (NAFDAC) regulates food, drugs, cosmetics and chemicals, and it fights fake and substandard products. The Standards Organisation of Nigeria (SON) sets and enforces standards for manufactured goods, and its mark, the SON mark of quality, shows that a product meets Nigerian standards. The Consumer Protection Council, now part of the FCCPC, used to handle consumer complaints. Other bodies include the Nigerian Electricity Regulatory Commission for electricity consumers and the Nigerian Communications Commission for telephone users. Traders who sell fake drugs can be prosecuted by NAFDAC, and goods that fail SON standards can be seized."
      },
      {
        heading: "Remedies for the Exploited Consumer",
        body: "A consumer who has been cheated has several remedies. He can return the goods to the seller and ask for a refund or a replacement, especially if the goods are faulty or not as described. He can complain to the seller's management or to a consumer association. He can report the matter to the FCCPC, NAFDAC or SON, which can investigate and take action against the trader. He can also go to court to claim damages, though this is slow and costly, so many consumers prefer to settle through the agencies. Consumer associations, such as the Consumer Protection Organisation of Nigeria, help buyers by giving advice and taking up complaints. To protect himself, a consumer should always ask for a receipt, check expiry dates, look for the NAFDAC number on drugs and food, and look for the SON mark on manufactured goods. A wise consumer also compares prices before buying and avoids goods that are suspiciously cheap."
      }
    ],
    definitions: [
      { term: "Consumer protection", meaning: "Laws, agencies and practices that protect buyers from unfair or harmful trade." },
      { term: "Consumer rights", meaning: "The recognised rights of buyers, including safety, information, choice, redress and education." },
      { term: "NAFDAC", meaning: "The National Agency for Food and Drug Administration and Control, which regulates food, drugs and chemicals in Nigeria." },
      { term: "SON", meaning: "The Standards Organisation of Nigeria, which sets and enforces standards for manufactured goods." },
      { term: "FCCPC", meaning: "The Federal Competition and Consumer Protection Commission, Nigeria's main consumer protection body." },
      { term: "Redress", meaning: "A remedy for a wrong, such as a refund, replacement or compensation." }
    ],
    formulas: ["Consumer rights: safety, information, choice, being heard, redress, education, healthy environment.", "NAFDAC: food, drugs, cosmetics, chemicals — fights fake and substandard products.", "SON: sets standards for manufactured goods; SON mark shows a product meets Nigerian standards.", "FCCPC: investigates unfair trade practices and protects consumers."],
    examples: [
      {
        title: "Spotting a fake drug",
        problem: "Amina buys a malaria drug from a roadside seller. The packet has no NAFDAC number and the expiry date is scratched out. What should she do, and which right is at stake?",
        steps: ["Note the warning signs: no NAFDAC number and a scratched-out expiry date.", "Recall that NAFDAC registration is required for drugs sold in Nigeria.", "Her right to safety and her right to information are both at stake.", "She should not take the drug, and she should report the seller to NAFDAC.", "Conclude that checking the NAFDAC number and expiry date protects the consumer."],
        answer: "Amina should not take the drug and should report the seller to NAFDAC; her rights to safety and information have been violated."
      },
      {
        title: "Getting redress for a faulty phone",
        problem: "Tunde buys a new phone that stops working after three days. The shop refuses a refund. What remedies does he have?",
        steps: ["Recall the consumer's right to redress: a refund, replacement or compensation.", "The phone is faulty and not as described, so he is entitled to redress.", "He can complain to the shop's management first.", "If that fails, he can report the shop to the FCCPC.", "He can also seek help from a consumer association."],
        answer: "Tunde can demand a refund or replacement, complain to the shop's management, report the shop to the FCCPC, or seek help from a consumer association."
      }
    ],
    tips: ["Learn the seven consumer rights — safety, information, choice, heard, redress, education, healthy environment.", "NAFDAC = food and drugs; SON = standards for manufactured goods; FCCPC = overall consumer protection.", "Always check the NAFDAC number and expiry date before buying drugs or food.", "Redress means refund, replacement or compensation."],
    mistakes: ["Saying NAFDAC sets standards for manufactured goods; that is SON's job.", "Confusing the FCCPC with NAFDAC; the FCCPC is the main consumer protection body.", "Forgetting the right to redress when asked what a cheated consumer can do.", "Saying consumers need no protection because sellers are always honest."],
    facts: ["Consumer rights were first set out by President John F. Kennedy in 1962.", "The FCCPC is Nigeria's main consumer protection body.", "The SON mark of quality shows a product meets Nigerian standards.", "A consumer should always ask for a receipt when buying goods."],
    quiz: [
      { q: "Why do consumers need protection?", options: ["Because sellers always know more about their goods than buyers", "Because buyers are always dishonest", "Because goods are always perfect", "Because traders never make profits"], answer: 0, explanation: "Sellers know more about their goods than buyers, so buyers can be cheated with fake, expired or substandard goods." },
      { q: "The right to safety means goods must do what?", options: ["Be very cheap", "Not harm the buyer when used properly", "Last forever", "Be imported"], answer: 1, explanation: "The right to safety means products must not injure or harm the consumer when used as intended." },
      { q: "The right to redress gives a cheated consumer what?", options: ["A free holiday", "A refund, replacement or compensation", "A new shop", "A government job"], answer: 1, explanation: "Redress means the consumer can get a refund, a replacement, or compensation for the wrong." },
      { q: "Which agency regulates food and drugs in Nigeria?", options: ["SON", "NAFDAC", "FCCPC", "CBN"], answer: 1, explanation: "NAFDAC, the National Agency for Food and Drug Administration and Control, regulates food, drugs, cosmetics and chemicals." },
      { q: "Which agency sets and enforces standards for manufactured goods in Nigeria?", options: ["NAFDAC", "SON", "FCCPC", "NCC"], answer: 1, explanation: "The Standards Organisation of Nigeria (SON) sets standards for manufactured goods and enforces them." },
      { q: "Which body is Nigeria's main consumer protection commission?", options: ["FCCPC", "NAFDAC", "SON", "CAC"], answer: 0, explanation: "The Federal Competition and Consumer Protection Commission (FCCPC) is the main body protecting consumers and promoting fair competition." },
      { q: "A drug packet with no NAFDAC number should be treated as what?", options: ["Genuine", "Suspicious and possibly fake", "Cheaper and better", "Approved by SON"], answer: 1, explanation: "Drugs sold in Nigeria must carry a NAFDAC number; its absence is a warning sign of a fake product." },
      { q: "The SON mark of quality on a product shows what?", options: ["The product is imported", "The product meets Nigerian standards", "The product is free", "The product never expires"], answer: 1, explanation: "The SON mark shows that a manufactured product has been tested and meets Nigerian standards." },
      { q: "Which of these is a consumer right?", options: ["The right to sell fake goods", "The right to information about a product", "The right to pay any price", "The right to refuse a receipt"], answer: 1, explanation: "Consumers have the right to truthful information about a product, including its ingredients, price and expiry date." },
      { q: "A consumer who buys a faulty television should first do what?", options: ["Throw it away", "Return it to the seller and ask for a refund or replacement", "Buy another one at once", "Keep quiet"], answer: 1, explanation: "The first remedy is to return the faulty goods to the seller and ask for a refund or replacement." },
      { q: "If a seller refuses to refund a faulty product, the consumer can report the matter to which body?", options: ["The Central Bank", "The FCCPC", "The Stock Exchange", "The Police only"], answer: 1, explanation: "The FCCPC investigates unfair trade practices and can take action against traders who exploit consumers." },
      { q: "Which of these helps a consumer to make a wise choice?", options: ["Buying the cheapest goods without checking", "Comparing prices and checking expiry dates", "Avoiding receipts", "Ignoring the NAFDAC number"], answer: 1, explanation: "A wise consumer compares prices, checks expiry dates and looks for the NAFDAC number and SON mark." },
      { q: "Consumer rights were first set out in 1962 by which person?", options: ["President John F. Kennedy", "President Muhammadu Buhari", "Queen Elizabeth II", "Nelson Mandela"], answer: 0, explanation: "President John F. Kennedy of the United States first set out consumer rights in 1962." },
      { q: "Selling expired drugs is an offence mainly because it violates which consumer right?", options: ["The right to choose", "The right to safety", "The right to education", "The right to a healthy environment"], answer: 1, explanation: "Expired drugs can harm or kill the buyer, so selling them violates the consumer's right to safety." },
      { q: "Which of these is a way a consumer association helps buyers?", options: ["It sells goods cheaply", "It gives advice and takes up complaints on behalf of consumers", "It sets prices for traders", "It prints money"], answer: 1, explanation: "Consumer associations advise buyers and take up their complaints against traders." }
    ],
    status: "published"
  },
  {
    id: "commerce-14",
    subjectId: "commerce",
    topic: "Consumer Protection and Business Law",
    subtopic: "Business law, contracts and trade documents",
    title: "Business Law and Trade Documents",
    order: 14,
    introduction: "Business runs on agreements: every sale, every loan and every partnership rests on a contract. This lesson explains the law of contract, the documents traders use every day, and the other laws that govern business in Nigeria.",
    objectives: ["Explain the meaning and essentials of a valid contract", "Distinguish between valid, void and voidable contracts", "Describe the main trade documents", "Explain the Sale of Goods Act and its implied terms", "Identify other laws that affect business in Nigeria"],
    sections: [
      {
        heading: "The Law of Contract",
        body: "A contract is an agreement between two or more parties that the law will enforce. For a contract to be valid, it must have five essentials. First, there must be an offer by one party and acceptance by the other. Second, there must be consideration, which is something of value given by each side, such as money for goods. Third, the parties must intend to create legal relations; social agreements, such as a promise to meet a friend, are not contracts. Fourth, the parties must have capacity, meaning they are of legal age and sound mind; a contract with a child or a person of unsound mind is generally not enforceable. Fifth, the agreement must be legal and possible: a contract to smuggle goods is void. A contract can be written, spoken or implied by conduct, but important contracts, such as the sale of land, must be in writing. When one party fails to carry out his part, it is called a breach of contract, and the other party can claim damages in court."
      },
      {
        heading: "Valid, Void and Voidable Contracts",
        body: "Contracts are classified by their legal effect. A valid contract has all the essentials and can be enforced by the court. A void contract has no legal effect from the beginning, for example a contract to commit a crime or a contract with no consideration; it is as if no contract was ever made. A voidable contract is valid until the party who was wronged chooses to end it, for example a contract made under fraud, misrepresentation or undue influence. An unenforceable contract is valid in itself but cannot be enforced because of some legal defect, such as the lack of required writing. A contract is discharged, or ended, when both parties perform it, when both agree to end it, when it becomes impossible to perform, or when one party breaches it and the other accepts the breach. JAMB questions often ask you to identify which type a given situation is, so learn the definitions with examples."
      },
      {
        heading: "Trade Documents",
        body: "Traders use many documents, and each has a purpose. An invoice is a document sent by the seller to the buyer stating the goods sold, their prices and the total amount due. A receipt is proof that payment has been made. A delivery note is sent with the goods to show what has been delivered, and the buyer signs it to confirm receipt. A credit note is issued when goods are returned or an overcharge is corrected, reducing the amount owed. A debit note is issued when the buyer is charged extra, for example for goods undercharged. A quotation states the price at which a seller is willing to supply goods. An order is a request by a buyer for goods, and a proforma invoice is a preliminary invoice sent before the goods are delivered, often for Customs or for a buyer who needs to arrange payment. A statement of account shows all transactions between a buyer and a seller over a period. Knowing these documents is essential, because JAMB often asks what each document is used for."
      },
      {
        heading: "The Sale of Goods Act and Other Business Laws",
        body: "The Sale of Goods Act governs the sale of goods in Nigeria. It implies certain terms into every sale, even if they are not written down. The seller must have the right to sell the goods. The goods must correspond with their description, so if a buyer orders a Samsung television, the seller must not deliver another brand. The goods must be of merchantable quality, fit for the purpose for which they are sold. Goods sold by sample must match the sample. If these terms are broken, the buyer can reject the goods or claim damages. Other laws also affect business. The Companies and Allied Matters Act governs the formation and running of companies. The Partnership Act governs partnerships. The law of agency governs the relationship between a principal and his agent. The law of bailment covers goods held by one person for another, such as goods in a warehouse. Together, these laws give traders a framework of rights and duties, and they protect both buyers and sellers."
      }
    ],
    definitions: [
      { term: "Contract", meaning: "An agreement between two or more parties that the law will enforce." },
      { term: "Consideration", meaning: "Something of value given by each party to a contract." },
      { term: "Breach of contract", meaning: "Failure by a party to carry out his part of a contract." },
      { term: "Invoice", meaning: "A document from the seller stating the goods sold, their prices and the total amount due." },
      { term: "Credit note", meaning: "A document issued when goods are returned or an overcharge is corrected, reducing the amount owed." },
      { term: "Merchantable quality", meaning: "Goods fit for the purpose for which they are ordinarily sold." }
    ],
    formulas: ["Valid contract: offer + acceptance + consideration + intention + capacity + legality.", "Void contract: no legal effect from the start.", "Voidable contract: valid until the wronged party chooses to end it.", "Sale of Goods Act implied terms: right to sell, goods as described, merchantable quality, goods as sample."],
    examples: [
      {
        title: "Is this a valid contract?",
        problem: "A 10-year-old boy agrees to buy a bicycle for N30,000 on credit from a trader. Is this a valid contract?",
        steps: ["Recall the essentials of a valid contract, including capacity.", "Capacity requires the parties to be of legal age and sound mind.", "A 10-year-old is a minor and lacks capacity to contract.", "The contract is therefore not enforceable against the boy.", "Conclude it is not a valid contract because capacity is missing."],
        answer: "No, it is not a valid contract, because the boy is a minor and lacks the capacity to contract."
      },
      {
        title: "Credit note or debit note?",
        problem: "A buyer returns damaged goods worth N40,000 to a supplier. The supplier had already sent an invoice for N200,000. Which document should the supplier issue, and what is the new amount owed?",
        steps: ["Recall that a credit note is issued when goods are returned, reducing the amount owed.", "The returned goods are worth N40,000.", "Subtract the credit from the invoice: N200,000 minus N40,000 equals N160,000.", "The supplier should therefore issue a credit note for N40,000.", "Conclude the buyer now owes N160,000."],
        answer: "The supplier should issue a credit note for N40,000, and the buyer now owes N160,000."
      }
    ],
    tips: ["Valid contract = offer, acceptance, consideration, intention, capacity, legality.", "Void = never had legal effect; voidable = valid until the wronged party ends it.", "Invoice = amount due; receipt = proof of payment; credit note = amount reduced.", "Sale of Goods Act: goods must match description and be of merchantable quality."],
    mistakes: ["Saying a contract with a minor is valid; minors lack capacity.", "Confusing a credit note with a debit note; the credit note reduces what is owed.", "Thinking an invoice is proof of payment; a receipt is the proof of payment.", "Forgetting that a contract to commit a crime is void."],
    facts: ["A contract to commit a crime is void.", "Breach of contract entitles the injured party to claim damages.", "A proforma invoice is sent before goods are delivered.", "The Companies and Allied Matters Act governs companies in Nigeria."],
    quiz: [
      { q: "What is a contract?", options: ["A friendly promise with no legal effect", "An agreement between two or more parties that the law will enforce", "A government licence", "A type of insurance"], answer: 1, explanation: "A contract is an agreement the law will enforce, unlike a purely social promise." },
      { q: "Which of these is an essential of a valid contract?", options: ["Friendship", "Consideration", "Wealth", "Luck"], answer: 1, explanation: "Consideration, something of value given by each side, is one of the essentials of a valid contract." },
      { q: "A contract made by a 10-year-old boy is generally not enforceable because he lacks what?", options: ["Money", "Capacity", "Interest", "Education"], answer: 1, explanation: "Capacity requires legal age and sound mind; a minor lacks capacity to contract." },
      { q: "A contract to smuggle goods is what type of contract?", options: ["Valid", "Void", "Voidable", "Enforceable"], answer: 1, explanation: "A contract to do something illegal is void; it has no legal effect from the beginning." },
      { q: "A voidable contract is one that is what?", options: ["Valid until the wronged party chooses to end it", "Void from the start", "Never made at all", "Always enforced by the court"], answer: 0, explanation: "A voidable contract, such as one made under fraud, is valid until the wronged party decides to end it." },
      { q: "Failure by a party to carry out his part of a contract is called what?", options: ["Discharge", "Breach of contract", "Consideration", "Acceptance"], answer: 1, explanation: "Breach of contract is the failure to perform, and it entitles the other party to claim damages." },
      { q: "An invoice is a document that does what?", options: ["Proves payment has been made", "States the goods sold, their prices and the total amount due", "Releases goods from a warehouse", "Orders goods from a supplier"], answer: 1, explanation: "An invoice is sent by the seller to the buyer stating what was sold and how much is owed." },
      { q: "Which document is proof that payment has been made?", options: ["Invoice", "Receipt", "Delivery note", "Quotation"], answer: 1, explanation: "A receipt is the proof that a payment has been made." },
      { q: "A credit note is issued when what happens?", options: ["Goods are ordered", "Goods are returned or an overcharge is corrected", "Payment is made in cash", "A loan is granted"], answer: 1, explanation: "A credit note reduces the amount owed when goods are returned or an overcharge is corrected." },
      { q: "A buyer returns damaged goods worth N40,000 against an invoice of N200,000. How much is now owed?", options: ["N240,000", "N200,000", "N160,000", "N40,000"], answer: 2, explanation: "The credit note of N40,000 reduces the invoice: N200,000 minus N40,000 equals N160,000." },
      { q: "Under the Sale of Goods Act, goods sold must be of what quality?", options: ["The cheapest quality", "Merchantable quality", "Imported quality", "Second-hand quality"], answer: 1, explanation: "Goods must be of merchantable quality, fit for the purpose for which they are ordinarily sold." },
      { q: "If a buyer orders a Samsung television and the seller delivers another brand, which implied term is broken?", options: ["The right to sell", "Goods must correspond with their description", "Goods must match the sample", "The price must be low"], answer: 1, explanation: "Goods must correspond with their description, so delivering another brand breaks this term." },
      { q: "Which document is sent with goods to show what has been delivered?", options: ["Invoice", "Delivery note", "Credit note", "Statement of account"], answer: 1, explanation: "A delivery note travels with the goods and the buyer signs it to confirm receipt." },
      { q: "Which law governs the formation and running of companies in Nigeria?", options: ["Sale of Goods Act", "Companies and Allied Matters Act", "Partnership Act", "Law of agency"], answer: 1, explanation: "The Companies and Allied Matters Act (CAMA) governs companies in Nigeria." },
      { q: "A proforma invoice is best described as what?", options: ["A final invoice after delivery", "A preliminary invoice sent before goods are delivered", "A receipt for payment", "A court order"], answer: 1, explanation: "A proforma invoice is a preliminary invoice sent before delivery, often so the buyer can arrange payment." }
    ],
    status: "published"
  },
];
