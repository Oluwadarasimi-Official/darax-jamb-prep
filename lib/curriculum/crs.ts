import type { Lesson, SubjectDef } from "./types";

export const SUBJECT: SubjectDef = {
  id: "crs",
  name: "Christian Religious Studies",
  short: "CRS",
  colour: "#60a5fa",
  tagline: "Old and New Testament themes, parables and epistles.",
  description: "Master the Old and New Testaments, the parables and miracles of Jesus, the early Church and Christian ethics for JAMB, with accurate biblical references and original practice questions.",
  topics: ["Themes from the Old Testament", "The Life and Teachings of Jesus", "The Parables and Miracles of Jesus", "The Early Church and the Epistles", "Christian Ethics and Morality", "Religion and Society", "The New Testament Writings"],
};

export const LESSONS: Lesson[] = [
  {
    id: "crs-01",
    subjectId: "crs",
    topic: "Themes from the Old Testament",
    subtopic: "Creation, the Fall and the covenants",
    title: "Creation, the Fall and the Covenants",
    order: 1,
    introduction: "The opening chapters of Genesis set the foundation of the Christian faith: God as Creator, humanity made in His image, the tragedy of the Fall, and God's gracious covenants with Noah and Abraham. This lesson traces these themes and their meaning for Christian belief and life.",
    objectives: ["Describe the two accounts of creation in Genesis 1 and 2", "Explain the Fall of man and its consequences in Genesis 3", "Describe the covenants God made with Noah and Abraham", "Explain the significance of Abraham's faith and obedience", "Relate the creation and covenant themes to Christian life today"],
    sections: [
      {
        heading: "The Creation Accounts in Genesis 1 and 2",
        body: "Genesis 1 presents creation as an orderly six-day work of God: light, the sky and seas, dry land and plants, the sun, moon and stars, sea creatures and birds, and finally land animals and human beings, with God resting on the seventh day. Each stage is declared good, showing that the world God made is good and purposeful. Genesis 2 gives a second, more personal account: God forms man from the dust of the ground, breathes life into him, plants the Garden of Eden, and creates woman from man's rib as a suitable helper. The two accounts are complementary rather than contradictory: Genesis 1 stresses God's power and order, while Genesis 2 stresses God's personal care for humanity. Man is made in the image of God, which gives every human being dignity and worth, and is given dominion over creation, which is a responsibility of stewardship, not a licence to destroy it."
      },
      {
        heading: "The Fall of Man in Genesis 3",
        body: "Genesis 3 tells how the serpent tempted Eve to eat the fruit of the tree of the knowledge of good and evil, which God had forbidden, and how Adam also ate. Their eyes were opened, they knew they were naked, and they hid from God. When God confronted them, Adam blamed Eve and Eve blamed the serpent, but all were judged: the serpent was cursed, the woman would suffer pain in childbirth, and the man would labour with sweat until he returned to dust. Sin entered the world, bringing shame, guilt, broken fellowship with God, suffering and death. Yet even in judgement there was grace: God made garments of skin for Adam and Eve, and He promised in Genesis 3:15 that the seed of the woman would bruise the serpent's head, a promise Christians understand as the first hint of the coming Saviour. The Fall explains why the world is broken and why humanity needs redemption."
      },
      {
        heading: "The Covenant with Noah",
        body: "After the Fall, human wickedness grew until God sent the Flood to judge the earth, but Noah found favour with God because he was righteous and walked with God. God commanded Noah to build an ark, and Noah, his family and pairs of animals were saved from the Flood (Genesis 6-8). After the Flood, God made a covenant with Noah and all living creatures: He promised never again to destroy the earth with a flood, and He set the rainbow in the clouds as the sign of the covenant (Genesis 9:8-17). Noah's story teaches obedience in the face of ridicule, God's judgement on sin, and God's mercy in preserving life. The rainbow remains a sign of God's faithfulness to His promises, and the covenant with Noah was universal, covering all humanity and all creation, unlike the later covenant with Abraham, which was with one family."
      },
      {
        heading: "The Covenant with Abraham",
        body: "In Genesis 12, God called Abram, later renamed Abraham, to leave his country and go to a land God would show him, promising to make him a great nation, to bless him, and to make him a blessing to all the families of the earth. Abraham obeyed in faith, though he did not know where he was going. God renewed the promise in Genesis 15, where Abraham believed God and it was counted to him as righteousness, and in Genesis 17, where God gave circumcision as the sign of the covenant and promised Abraham a son by Sarah. Abraham's willingness to offer Isaac in Genesis 22 was the supreme test of his faith, and God provided a ram as a substitute. Through Abraham, God began His plan to bless all nations, a plan fulfilled in Jesus Christ, the seed of Abraham (Galatians 3:16). Abraham is therefore called the father of faith, and Christians are his spiritual children by faith."
      }
    ],
    definitions: [
      { term: "Creation", meaning: "God's act of bringing the universe and all life into existence out of nothing." },
      { term: "Image of God", meaning: "The likeness of God in human beings, giving them dignity, reason, moral sense and the capacity for relationship with God." },
      { term: "The Fall", meaning: "The disobedience of Adam and Eve in Eden, by which sin and death entered the world." },
      { term: "Covenant", meaning: "A solemn agreement or promise between God and His people, sealed with a sign." },
      { term: "Stewardship", meaning: "The responsible care of God's creation, entrusted to human beings." },
      { term: "Faith", meaning: "Trust in God and His promises, shown by obedience, as Abraham demonstrated." }
    ],
    examples: [
      {
        title: "Explaining the two creation accounts",
        problem: "A JAMB question asks why Genesis contains two accounts of creation. How would you answer?",
        steps: ["Recall that Genesis 1 gives an orderly six-day account of creation.", "Recall that Genesis 2 gives a detailed account of the creation of man and woman.", "Note that the accounts have different emphases: Genesis 1 stresses God's power and order; Genesis 2 stresses His personal care.", "Conclude that they are complementary perspectives on the same event, not contradictions.", "Support the answer with the teaching that man is made in God's image in both accounts."],
        answer: "Genesis 1 and 2 are complementary accounts: the first stresses God's orderly power, the second His personal care for humanity."
      },
      {
        title: "Tracing the covenant promise",
        problem: "Trace how God's promise to Abraham points forward to Christ.",
        steps: ["Start with the promise in Genesis 12:3 that all families of the earth would be blessed through Abraham.", "Note the promise of a seed in Genesis 22:18.", "Recall that Galatians 3:16 identifies the seed as Christ.", "Note that believers in Christ share Abraham's blessing by faith (Galatians 3:29).", "Conclude that Abraham's covenant was the beginning of God's plan of salvation for all nations."],
        answer: "God's promise to bless all nations through Abraham's seed is fulfilled in Jesus Christ, through whom believers of all nations are blessed."
      }
    ],
    tips: ["Know the references: creation Genesis 1-2, the Fall Genesis 3, Noah Genesis 6-9, Abraham Genesis 12, 15, 17, 22.", "Link the Fall to the need for redemption and Genesis 3:15 to the promise of a Saviour.", "Remember the signs of the covenants: the rainbow for Noah, circumcision for Abraham.", "Abraham is the father of faith; his righteousness came by believing God, not by works."],
    mistakes: ["Saying Genesis 1 and 2 contradict each other; they are complementary accounts.", "Confusing the covenant signs: the rainbow belongs to Noah, circumcision to Abraham.", "Forgetting that the Fall brought sin, shame, suffering and death into the world.", "Saying Abraham was righteous because of his works rather than because he believed God."],
    facts: ["God created the heavens and the earth in six days and rested on the seventh (Genesis 1).", "Man was made in the image of God (Genesis 1:27).", "The rainbow is the sign of God's covenant with Noah (Genesis 9:13).", "Abraham believed God and it was counted to him as righteousness (Genesis 15:6).", "God changed Abram's name to Abraham, meaning father of many nations (Genesis 17:5)."],
    quiz: [
      { q: "According to Genesis 1, on which day did God create human beings?", options: ["Third day", "Fifth day", "Sixth day", "Seventh day"], answer: 2, explanation: "God created human beings, male and female, on the sixth day of creation (Genesis 1:26-31)." },
      { q: "In Genesis 2, from what did God form man?", options: ["The dust of the ground", "The rib of an animal", "The waters of the sea", "The light of the sun"], answer: 0, explanation: "God formed man from the dust of the ground and breathed the breath of life into him (Genesis 2:7)." },
      { q: "What did God rest from on the seventh day?", options: ["Creating the animals", "All His work of creation", "Making the Garden of Eden", "Blessing Abraham"], answer: 1, explanation: "On the seventh day God rested from all His work which He had done in creation (Genesis 2:2)." },
      { q: "Who tempted Eve to eat the forbidden fruit?", options: ["Adam", "The serpent", "An angel", "Cain"], answer: 1, explanation: "The serpent tempted Eve, questioning God's command and promising that she would be like God (Genesis 3:1-5)." },
      { q: "What was the first promise of a Saviour in the Bible?", options: ["Genesis 3:15", "Genesis 12:3", "Genesis 9:13", "Genesis 1:28"], answer: 0, explanation: "Genesis 3:15 promises that the seed of the woman would bruise the serpent's head, understood as the first promise of Christ." },
      { q: "What sign did God give for His covenant with Noah?", options: ["Circumcision", "The rainbow", "The Passover lamb", "The Sabbath"], answer: 1, explanation: "God set the rainbow in the clouds as the sign of His covenant never again to destroy the earth by flood (Genesis 9:13)." },
      { q: "Why did God send the Flood in the days of Noah?", options: ["Because of the wickedness of mankind", "Because of a drought", "Because Noah asked for it", "Because of a war"], answer: 0, explanation: "God saw that the wickedness of man was great on the earth, so He sent the Flood, saving Noah and his family (Genesis 6:5-8)." },
      { q: "Where did God call Abraham to leave?", options: ["Egypt", "Ur of the Chaldees", "Canaan", "Haran only"], answer: 1, explanation: "God called Abram to leave his country and his father's house; he set out from Ur of the Chaldees (Genesis 11:31; 12:1)." },
      { q: "What was counted to Abraham as righteousness?", options: ["His wealth", "His obedience in building an altar", "His belief in God", "His circumcision"], answer: 2, explanation: "Abraham believed the Lord, and He counted it to him as righteousness (Genesis 15:6)." },
      { q: "What is the meaning of the name Abraham?", options: ["Father of many nations", "Father of peace", "Friend of God", "Prince of God"], answer: 0, explanation: "God changed Abram's name to Abraham, meaning father of a multitude of nations (Genesis 17:5)." },
      { q: "In Genesis 22, what did God provide as a substitute for Isaac?", options: ["A lamb", "A ram", "A goat", "A dove"], answer: 1, explanation: "God provided a ram caught in a thicket as a burnt offering in place of Isaac (Genesis 22:13)." },
      { q: "Which of these is a consequence of the Fall?", options: ["Eternal life for all", "Sin and death entering the world", "The building of the ark", "The call of Abraham"], answer: 1, explanation: "Through Adam's disobedience sin entered the world, and death through sin (Genesis 3; Romans 5:12)." },
      { q: "Who was the first woman created by God?", options: ["Sarah", "Rebekah", "Eve", "Rachel"], answer: 2, explanation: "God created Eve from Adam's rib as a suitable helper for him (Genesis 2:21-23)." },
      { q: "What was the sign of the covenant God made with Abraham?", options: ["The rainbow", "Circumcision", "The Sabbath day", "The Passover"], answer: 1, explanation: "God gave circumcision as the sign of His covenant with Abraham and his descendants (Genesis 17:10-11)." },
      { q: "God's promise that all families of the earth would be blessed through Abraham is found in which chapter?", options: ["Genesis 3", "Genesis 9", "Genesis 12", "Genesis 22"], answer: 2, explanation: "In Genesis 12:3 God promised Abraham that in him all the families of the earth would be blessed." }
    ],
    status: "published"
  },
  {
    id: "crs-02",
    subjectId: "crs",
    topic: "Themes from the Old Testament",
    subtopic: "The Exodus, the Law and the judges",
    title: "The Exodus, the Law and the Judges",
    order: 2,
    introduction: "From slavery in Egypt to the Promised Land, the Exodus is the great story of God's deliverance of Israel. This lesson covers Moses, the Passover, the giving of the Law at Sinai, the wilderness journey, and the period of the judges.",
    objectives: ["Describe the call of Moses and the plagues in Egypt", "Explain the Passover and the crossing of the Red Sea", "Describe the giving of the Ten Commandments at Mount Sinai", "Explain the covenant at Sinai and the wilderness journey", "Describe the period of the judges and the role of Deborah and Gideon"],
    sections: [
      {
        heading: "The Call of Moses and the Plagues",
        body: "After Joseph's generation died, a new Pharaoh enslaved the Israelites in Egypt, fearing their growing numbers (Exodus 1). Moses, an Israelite raised in Pharaoh's palace, fled to Midian after killing an Egyptian, and there God called him from the burning bush, revealing His name as I AM WHO I AM and sending him to deliver Israel (Exodus 3). When Pharaoh refused to let Israel go, God sent ten plagues on Egypt: water turned to blood, frogs, gnats, flies, disease on livestock, boils, hail, locusts, darkness, and finally the death of the firstborn. Each plague struck at the gods of Egypt and showed the power of the God of Israel. Pharaoh's heart was hardened again and again, but the final plague broke his resistance, and he let the people go. Moses' call teaches that God uses ordinary, even reluctant, people for His great purposes."
      },
      {
        heading: "The Passover and the Red Sea",
        body: "Before the final plague, God commanded each Israelite family to kill a lamb without blemish, mark their doorposts with its blood, and eat the meal in readiness to leave; when the Lord saw the blood He would pass over that house (Exodus 12). The Passover became Israel's great memorial feast, and Christians see the lamb as pointing to Christ, the Lamb of God. The Israelites left Egypt in haste, but Pharaoh pursued them to the Red Sea, where God parted the waters and Israel crossed on dry ground, while the Egyptian army was drowned (Exodus 14). Moses' song of victory in Exodus 15 celebrates the Lord as a warrior who triumphed gloriously. The Exodus became the foundation of Israel's faith: God is the Redeemer who delivers His people from bondage, and the Passover and the Red Sea are remembered in Israel's worship ever after."
      },
      {
        heading: "The Law at Mount Sinai",
        body: "Three months after leaving Egypt, Israel came to Mount Sinai, where God made a covenant with them: if they obeyed His voice, they would be His treasured possession, a kingdom of priests and a holy nation (Exodus 19:5-6). Amid thunder, lightning and the sound of the trumpet, God gave the Ten Commandments (Exodus 20): the first four govern the people's duty to God, having no other gods, making no idols, not taking God's name in vain, and keeping the Sabbath; the last six govern duty to neighbours, honouring parents, not murdering, not committing adultery, not stealing, not bearing false witness, and not coveting. The Law was not given as a way to earn salvation but as a guide for a redeemed people, showing them how to live as God's holy nation. The people also received the tabernacle, the priesthood and the sacrificial system, by which sin could be atoned for and fellowship with God maintained."
      },
      {
        heading: "The Wilderness and the Judges",
        body: "Israel's journey to the Promised Land should have taken weeks, but because of unbelief and rebellion, the generation that left Egypt wandered in the wilderness for forty years (Numbers 14). God provided manna from heaven, water from the rock, and guidance by the pillar of cloud and fire. After Moses died, Joshua led Israel into Canaan, but after Joshua's generation, Israel fell into a repeated cycle described in the book of Judges: the people sinned by worshipping other gods, God allowed their enemies to oppress them, they cried out to Him, and God raised up a judge to deliver them. Deborah, a prophetess and judge, led Israel to victory over the Canaanite general Sisera (Judges 4-5), and Gideon, called while threshing wheat in hiding, defeated the Midianites with only three hundred men (Judges 6-7). The judges show that God raises deliverers when His people repent, and that the people's greatest need was a king who would lead them in righteousness."
      }
    ],
    definitions: [
      { term: "Exodus", meaning: "The departure of the Israelites from slavery in Egypt under Moses, led by God." },
      { term: "Passover", meaning: "The feast remembering how God passed over Israelite houses marked with lamb's blood in Egypt." },
      { term: "Ten Commandments", meaning: "The ten laws God gave to Israel at Mount Sinai, governing duty to God and to neighbours." },
      { term: "Covenant at Sinai", meaning: "God's agreement with Israel at Sinai, making them His treasured possession and holy nation." },
      { term: "Manna", meaning: "The bread from heaven God provided for Israel in the wilderness." },
      { term: "Judge", meaning: "A leader raised by God to deliver Israel from its enemies in the period before the kings." }
    ],
    examples: [
      {
        title: "Interpreting the Passover",
        problem: "Why is the Passover lamb significant in Christian understanding?",
        steps: ["Recall that the lamb was without blemish and its blood saved the firstborn from death.", "Note that John the Baptist called Jesus the Lamb of God who takes away the sin of the world (John 1:29).", "Recall that Paul called Christ our Passover lamb (1 Corinthians 5:7).", "Link the blood on the doorposts to deliverance from judgement.", "Conclude that the Passover points forward to Christ's death, which saves believers from judgement."],
        answer: "The Passover lamb points to Christ, the Lamb of God, whose blood delivers believers from God's judgement."
      },
      {
        title: "Tracing the cycle of the judges",
        problem: "Explain the repeated pattern in the book of Judges.",
        steps: ["Note the first stage: Israel sinned by worshipping other gods.", "Note the second stage: God allowed an enemy to oppress them.", "Note the third stage: the people cried out to the Lord.", "Note the fourth stage: God raised up a judge to deliver them.", "Conclude that the cycle shows both human sinfulness and God's mercy in raising deliverers."],
        answer: "The cycle is sin, oppression, crying out to God, and deliverance through a judge raised by God."
      }
    ],
    tips: ["Know the plagues in order and that the tenth, the death of the firstborn, broke Pharaoh's resistance.", "The Passover is Exodus 12; the Red Sea crossing is Exodus 14; the Ten Commandments are Exodus 20.", "Divide the commandments: the first four concern God, the last six concern neighbours.", "Remember the judges' cycle: sin, oppression, cry, deliverance, rest."],
    mistakes: ["Saying Moses parted the Red Sea by his own power; God did it through Moses.", "Confusing the Passover with the Feast of Tabernacles.", "Saying the Law was given before the Exodus; it was given after deliverance, at Sinai.", "Forgetting that Israel wandered forty years because of unbelief at Kadesh."],
    facts: ["God revealed His name to Moses as I AM WHO I AM (Exodus 3:14).", "The Passover lamb was to be without blemish (Exodus 12:5).", "The Ten Commandments were given on Mount Sinai (Exodus 20).", "Deborah was a prophetess and judge who led Israel against Sisera (Judges 4).", "Gideon defeated the Midianites with only three hundred men (Judges 7)."],
    quiz: [
      { q: "From where did God call Moses?", options: ["A burning bush", "A whirlwind", "A dream", "A pillar of fire"], answer: 0, explanation: "God called Moses from a burning bush that was not consumed, at Mount Horeb (Exodus 3:2-4)." },
      { q: "What name did God reveal to Moses at the burning bush?", options: ["El Shaddai", "I AM WHO I AM", "Jehovah Jireh", "Adonai"], answer: 1, explanation: "God said to Moses, I AM WHO I AM, and told him to say that I AM had sent him (Exodus 3:14)." },
      { q: "How many plagues did God send on Egypt?", options: ["Seven", "Eight", "Nine", "Ten"], answer: 3, explanation: "God sent ten plagues on Egypt, ending with the death of the firstborn (Exodus 7-12)." },
      { q: "What was the last plague sent on Egypt?", options: ["Darkness", "Locusts", "Death of the firstborn", "Water turned to blood"], answer: 2, explanation: "The tenth plague was the death of the firstborn of Egypt, which finally made Pharaoh let Israel go (Exodus 12:29-31)." },
      { q: "What marked the houses that the Lord passed over in Egypt?", options: ["Olive oil on the door", "The blood of a lamb on the doorposts", "A white cloth on the roof", "A candle in the window"], answer: 1, explanation: "The blood of the Passover lamb on the doorposts was the sign, and the Lord passed over those houses (Exodus 12:7, 13)." },
      { q: "Where did the Israelites cross the sea on dry ground?", options: ["The River Jordan", "The Red Sea", "The Sea of Galilee", "The Nile"], answer: 1, explanation: "God parted the Red Sea and Israel crossed on dry ground while the Egyptians were drowned (Exodus 14:21-28)." },
      { q: "On which mountain were the Ten Commandments given?", options: ["Mount Carmel", "Mount Sinai", "Mount Zion", "Mount Nebo"], answer: 1, explanation: "The Ten Commandments were given to Moses on Mount Sinai (Exodus 19-20)." },
      { q: "Which commandment comes first in the Ten Commandments?", options: ["You shall not steal", "You shall have no other gods before me", "Honour your father and mother", "Remember the Sabbath day"], answer: 1, explanation: "The first commandment is, You shall have no other gods before me (Exodus 20:3)." },
      { q: "How many years did Israel wander in the wilderness?", options: ["Ten years", "Twenty years", "Forty years", "Seventy years"], answer: 2, explanation: "Because of their unbelief, Israel wandered in the wilderness for forty years until that generation died (Numbers 14:33-34)." },
      { q: "What bread did God provide for Israel in the wilderness?", options: ["Manna", "Unleavened bread", "Showbread", "Barley cakes"], answer: 0, explanation: "God rained manna from heaven for Israel to eat in the wilderness (Exodus 16:15)." },
      { q: "Who was the prophetess and judge who led Israel against Sisera?", options: ["Ruth", "Deborah", "Esther", "Miriam"], answer: 1, explanation: "Deborah, a prophetess and judge, led Barak and Israel to victory over Sisera (Judges 4:4-15)." },
      { q: "With how many men did Gideon defeat the Midianites?", options: ["Three hundred", "Three thousand", "Thirty thousand", "Ten thousand"], answer: 0, explanation: "God reduced Gideon's army to three hundred men so that Israel would know the victory was the Lord's (Judges 7:7)." },
      { q: "What did God promise Israel at Sinai if they obeyed His voice?", options: ["They would be His treasured possession and a holy nation", "They would never face enemies", "They would all become priests", "They would live forever"], answer: 0, explanation: "God promised that if Israel obeyed, they would be His treasured possession, a kingdom of priests and a holy nation (Exodus 19:5-6)." },
      { q: "Who led Israel into the Promised Land after Moses died?", options: ["Aaron", "Caleb", "Joshua", "Samuel"], answer: 2, explanation: "Joshua succeeded Moses and led Israel across the Jordan into Canaan (Joshua 1:1-2)." },
      { q: "In the judges' cycle, what did Israel do after a judge delivered them and peace returned?", options: ["They remained faithful forever", "They again did evil in the sight of the Lord", "They appointed a king at once", "They returned to Egypt"], answer: 1, explanation: "After each deliverance, Israel again did what was evil in the sight of the Lord, and the cycle began again (Judges 2:19)." }
    ],
    status: "published"
  },
  {
    id: "crs-03",
    subjectId: "crs",
    topic: "The Life and Teachings of Jesus",
    subtopic: "Birth, baptism and temptation of Jesus",
    title: "The Birth, Baptism and Temptation of Jesus",
    order: 3,
    introduction: "The life of Jesus began with a miraculous birth announced by angels, a baptism in the Jordan where heaven opened, and a testing in the wilderness. This lesson examines these beginnings of Jesus' public ministry and what they reveal about who He is.",
    objectives: ["Describe the announcement and birth of Jesus in Matthew and Luke", "Explain the visit of the wise men and the flight into Egypt", "Describe the baptism of Jesus by John the Baptist", "Explain the temptation of Jesus in the wilderness", "Explain the significance of these events for Christian faith"],
    sections: [
      {
        heading: "The Announcement and Birth of Jesus",
        body: "The angel Gabriel announced to Mary, a virgin in Nazareth, that she would conceive and bear a son who would be called Jesus, the Son of the Most High, and that the Holy Spirit would come upon her (Luke 1:26-35). Joseph, her betrothed, was told in a dream not to fear taking Mary as his wife, because the child was conceived by the Holy Spirit, and he would save His people from their sins (Matthew 1:20-21). Jesus was born in Bethlehem, the city of David, because Joseph had gone there for the census ordered by Caesar Augustus, and Mary laid Him in a manger because there was no room in the inn (Luke 2:1-7). Angels announced His birth to shepherds, who found the child just as the angel had said, and wise men from the east later followed a star to worship Him, offering gold, frankincense and myrrh (Matthew 2:1-11). The birth of Jesus, the Incarnation, means God Himself entered human history to save His people."
      },
      {
        heading: "The Flight into Egypt and the Childhood of Jesus",
        body: "When Herod heard from the wise men that a king of the Jews had been born, he was troubled and ordered the killing of all male children in Bethlehem under two years old. Warned in a dream, Joseph took Mary and Jesus by night and fled into Egypt, where they stayed until Herod died, fulfilling the prophecy, Out of Egypt I called my son (Matthew 2:13-15). After Herod's death, the family returned and settled in Nazareth, fulfilling the prophecy that Jesus would be called a Nazarene. The only recorded event of Jesus' childhood is His visit to the Temple at twelve years old, when He stayed behind in Jerusalem, astonishing the teachers with His understanding, and told His parents He must be about His Father's business (Luke 2:41-52). Luke notes that Jesus grew in wisdom and stature and in favour with God and men, showing that He lived a truly human life of growth and obedience."
      },
      {
        heading: "The Baptism of Jesus",
        body: "At about thirty years of age, Jesus came to John the Baptist at the River Jordan to be baptised (Matthew 3:13-17). John had been preaching repentance and baptising people in the Jordan, preparing the way for the Messiah, and he protested that he needed to be baptised by Jesus instead. Jesus insisted, saying it was proper to fulfil all righteousness, and as He came up from the water, the heavens opened, the Spirit of God descended like a dove upon Him, and a voice from heaven declared, This is my beloved Son, with whom I am well pleased. The baptism marked the beginning of Jesus' public ministry, identified Him as the Messiah, and showed the three persons of the Trinity together: the Father speaking, the Son being baptised, and the Spirit descending. It also shows Jesus identifying Himself with sinful humanity, though He Himself had no sin to repent of."
      },
      {
        heading: "The Temptation of Jesus",
        body: "Immediately after His baptism, the Spirit led Jesus into the wilderness, where He fasted forty days and forty nights and was tempted by the devil (Matthew 4:1-11; Luke 4:1-13). The devil first tempted Him to turn stones into bread, appealing to His hunger and His power as the Son of God; Jesus answered with Scripture, Man shall not live by bread alone. The devil then tempted Him to throw Himself from the pinnacle of the Temple, quoting Scripture about the angels; Jesus answered, You shall not put the Lord your God to the test. Finally, the devil offered Him all the kingdoms of the world if He would worship him; Jesus answered, You shall worship the Lord your God and him only shall you serve. Jesus defeated every temptation by the word of God, showing that He is the obedient Son where Adam and Israel had failed. His victory gives believers both an example and a High Priest who understands temptation and can help those who are tempted (Hebrews 4:15)."
      }
    ],
    definitions: [
      { term: "Incarnation", meaning: "God the Son taking human flesh and becoming man in Jesus Christ." },
      { term: "Messiah", meaning: "The Anointed One promised by God to save His people; in Greek, Christ." },
      { term: "Baptism", meaning: "The washing with water by which a person is identified with God's people; John's baptism was a baptism of repentance." },
      { term: "Temptation", meaning: "An enticement to disobey God, which Jesus faced and overcame in the wilderness." },
      { term: "Trinity", meaning: "The one God existing in three persons: Father, Son and Holy Spirit." },
      { term: "Frankincense and myrrh", meaning: "Costly gifts offered to Jesus by the wise men; frankincense was used in worship, myrrh in burial." }
    ],
    examples: [
      {
        title: "Explaining the significance of the baptism",
        problem: "Why was Jesus baptised if He had no sin to repent of?",
        steps: ["Recall that John's baptism was a baptism of repentance for the forgiveness of sins.", "Note that Jesus had no sin, so His baptism was not for His own repentance.", "Recall Jesus' words: it was proper to fulfil all righteousness (Matthew 3:15).", "Note that His baptism identified Him with sinful humanity and marked the start of His ministry.", "Conclude that the baptism revealed Him as God's beloved Son and anointed Him by the Spirit."],
        answer: "Jesus was baptised to fulfil all righteousness, to identify with humanity, and to be revealed and anointed as the Messiah."
      },
      {
        title: "Tracing the three temptations",
        problem: "Show how Jesus answered each temptation in the wilderness.",
        steps: ["First temptation: turn stones to bread; Jesus answered with Deuteronomy 8:3, man shall not live by bread alone.", "Second temptation: throw Himself from the Temple; Jesus answered with Deuteronomy 6:16, do not put God to the test.", "Third temptation: worship the devil for the kingdoms of the world; Jesus answered with Deuteronomy 6:13, worship God only.", "Note that every answer came from Scripture.", "Conclude that Jesus overcame temptation by the word of God, as the obedient Son."],
        answer: "Jesus answered each temptation with a quotation from Deuteronomy, showing that victory over temptation comes through God's word."
      }
    ],
    tips: ["Know the two birth accounts: Matthew 1-2 (Joseph, wise men, flight to Egypt) and Luke 1-2 (Mary, shepherds, manger).", "The baptism is Matthew 3:13-17, Mark 1:9-11 and Luke 3:21-22; the temptation is Matthew 4:1-11.", "Remember the gifts of the wise men: gold, frankincense and myrrh.", "Jesus answered every temptation with Scripture from Deuteronomy."],
    mistakes: ["Saying the wise men visited the baby in the manger; they came later to a house (Matthew 2:11).", "Saying Jesus was baptised because He needed repentance; He was sinless.", "Confusing the order of the temptations in Matthew and Luke; Matthew ends with the kingdoms of the world.", "Forgetting that the voice at the baptism declared Jesus God's beloved Son."],
    facts: ["Jesus was born in Bethlehem and laid in a manger (Luke 2:7).", "The wise men offered gold, frankincense and myrrh (Matthew 2:11).", "At Jesus' baptism the Spirit descended like a dove and the Father spoke from heaven (Matthew 3:16-17).", "Jesus fasted forty days and nights in the wilderness (Matthew 4:2).", "Jesus grew in wisdom and stature and in favour with God and men (Luke 2:52)."],
    quiz: [
      { q: "Who announced to Mary that she would bear the Son of God?", options: ["The angel Michael", "The angel Gabriel", "The angel Raphael", "An unnamed angel"], answer: 1, explanation: "The angel Gabriel was sent to Mary in Nazareth to announce the birth of Jesus (Luke 1:26-31)." },
      { q: "In which town was Jesus born?", options: ["Nazareth", "Jerusalem", "Bethlehem", "Capernaum"], answer: 2, explanation: "Jesus was born in Bethlehem, the city of David, during the census of Caesar Augustus (Luke 2:4-7)." },
      { q: "Why was Jesus laid in a manger?", options: ["Because He was a shepherd", "Because there was no room in the inn", "Because Mary preferred it", "Because of a Jewish custom"], answer: 1, explanation: "Mary laid Jesus in a manger because there was no room for them in the inn (Luke 2:7)." },
      { q: "To whom did the angels first announce the birth of Jesus?", options: ["The wise men", "The shepherds", "The priests", "Herod"], answer: 1, explanation: "Angels announced the birth to shepherds keeping watch over their flocks at night (Luke 2:8-14)." },
      { q: "What three gifts did the wise men offer Jesus?", options: ["Gold, silver and bronze", "Gold, frankincense and myrrh", "Silver, myrrh and aloes", "Gold, incense and oil"], answer: 1, explanation: "The wise men offered gold, frankincense and myrrh when they worshipped the child (Matthew 2:11)." },
      { q: "Why did Joseph flee with Mary and Jesus into Egypt?", options: ["To attend a feast", "To escape Herod who sought to kill the child", "To visit relatives", "To pay taxes"], answer: 1, explanation: "An angel warned Joseph in a dream that Herod would seek the child to destroy Him, so they fled to Egypt (Matthew 2:13)." },
      { q: "At what age was Jesus found in the Temple astonishing the teachers?", options: ["Eight", "Ten", "Twelve", "Fifteen"], answer: 2, explanation: "At twelve years old Jesus stayed behind in the Temple at Jerusalem, and all who heard Him were amazed (Luke 2:42-47)." },
      { q: "Who baptised Jesus in the River Jordan?", options: ["Peter", "John the Baptist", "Andrew", "James"], answer: 1, explanation: "John the Baptist baptised Jesus in the Jordan, at first protesting that he needed to be baptised by Jesus (Matthew 3:13-14)." },
      { q: "What happened when Jesus came up out of the water at His baptism?", options: ["The heavens opened and the Spirit descended like a dove", "The river parted", "An earthquake shook the land", "Fire fell from heaven"], answer: 0, explanation: "The heavens were opened, the Spirit of God descended like a dove, and a voice from heaven declared Jesus the beloved Son (Matthew 3:16-17)." },
      { q: "What did the voice from heaven say at Jesus' baptism?", options: ["This is my beloved Son, with whom I am well pleased", "This is the King of Israel", "This is the prophet like Moses", "This is the Lamb of God"], answer: 0, explanation: "The voice from heaven said, This is my beloved Son, with whom I am well pleased (Matthew 3:17)." },
      { q: "How long did Jesus fast in the wilderness?", options: ["Seven days", "Twenty days", "Forty days and nights", "Three months"], answer: 2, explanation: "Jesus fasted forty days and forty nights in the wilderness before being tempted (Matthew 4:2)." },
      { q: "In the first temptation, what did the devil ask Jesus to turn into bread?", options: ["Leaves", "Stones", "Sand", "Water"], answer: 1, explanation: "The tempter said, If you are the Son of God, command these stones to become loaves of bread (Matthew 4:3)." },
      { q: "How did Jesus answer the temptations?", options: ["By performing miracles", "By quoting Scripture", "By calling angels", "By leaving the wilderness"], answer: 1, explanation: "Jesus answered each temptation with a quotation from the Scriptures, from Deuteronomy." },
      { q: "What was the third temptation in Matthew's account?", options: ["To turn stones to bread", "To jump from the Temple", "To worship the devil in exchange for the kingdoms of the world", "To leave the wilderness"], answer: 2, explanation: "The devil offered Jesus all the kingdoms of the world and their glory if He would fall down and worship him (Matthew 4:8-9)." },
      { q: "According to Hebrews 4:15, why can Jesus help those who are tempted?", options: ["Because He never faced temptation", "Because He was tempted as we are, yet without sin", "Because He was an angel", "Because He avoided the wilderness"], answer: 1, explanation: "Jesus was tempted in every respect as we are, yet without sin, so He can sympathise with our weaknesses (Hebrews 4:15)." }
    ],
    status: "published"
  },
  {
    id: "crs-04",
    subjectId: "crs",
    topic: "The Life and Teachings of Jesus",
    subtopic: "The Sermon on the Mount and the teachings of Jesus",
    title: "The Sermon on the Mount and the Teachings of Jesus",
    order: 4,
    introduction: "The Sermon on the Mount, recorded in Matthew 5-7, is the greatest single collection of Jesus' teaching. This lesson explains the Beatitudes, Jesus' teaching on the Law, prayer, and the life of the kingdom of God.",
    objectives: ["Explain the Beatitudes and their meaning", "Describe Jesus' teaching on the Law and righteousness", "Explain Jesus' teaching on prayer, including the Lord's Prayer", "Describe Jesus' teaching on love of enemies and judging others", "Apply the Sermon on the Mount to Christian living"],
    sections: [
      {
        heading: "The Beatitudes",
        body: "Jesus opened the Sermon on the Mount with the Beatitudes, nine blessings on those who belong to the kingdom of heaven (Matthew 5:3-12). Blessed are the poor in spirit, those who recognise their spiritual poverty and need of God; blessed are those who mourn, who will be comforted; blessed are the meek, who will inherit the earth; blessed are those who hunger and thirst for righteousness, who will be satisfied; blessed are the merciful, the pure in heart, and the peacemakers, who will be called sons of God; and blessed are those who are persecuted for righteousness' sake, for theirs is the kingdom of heaven. The Beatitudes turn the world's values upside down: true happiness belongs not to the rich, powerful and self-satisfied, but to the humble, the sorrowful, the merciful and the persecuted. They describe the character of citizens of the kingdom of God, and they are promises as well as blessings, because each blessing carries a reward from God."
      },
      {
        heading: "Jesus and the Law",
        body: "Jesus said He came not to abolish the Law or the Prophets but to fulfil them, and that not the smallest letter would pass from the Law until all was accomplished (Matthew 5:17-18). He demanded a righteousness that exceeds that of the scribes and Pharisees, who kept the letter of the Law while missing its spirit. He deepened the commandments: anger is like murder in the heart, lust is like adultery in the heart, and love must extend even to enemies. He taught His disciples to love their enemies and pray for those who persecute them, so that they may be sons of their Father in heaven, who makes His sun rise on the evil and on the good (Matthew 5:43-48). This teaching shows that the kingdom of God is not about outward religious performance but about a heart transformed by God, producing love, mercy and holiness from within."
      },
      {
        heading: "Prayer and the Lord's Prayer",
        body: "Jesus warned His disciples not to pray like the hypocrites, who love to be seen by men, nor to heap up empty phrases like the Gentiles, who think they will be heard for their many words (Matthew 6:5-8). He taught them to pray in secret to their Father, who sees in secret and will reward them, and He gave them the Lord's Prayer as a pattern: Our Father in heaven, hallowed be your name; your kingdom come, your will be done, on earth as it is in heaven; give us this day our daily bread; forgive us our debts, as we also have forgiven our debtors; and lead us not into temptation, but deliver us from evil (Matthew 6:9-13). The prayer begins with God's name, kingdom and will, then turns to daily needs, forgiveness and protection. Jesus also taught that forgiveness is essential: if we do not forgive others, our Father will not forgive us. Prayer, for Jesus, is a child's confident approach to a loving Father, not a performance to impress people."
      },
      {
        heading: "The Golden Rule and the Two Foundations",
        body: "Jesus summed up the Law and the Prophets in the Golden Rule: whatever you wish that others would do to you, do also to them (Matthew 7:12). He warned against judging others harshly, pointing to the speck in a brother's eye while ignoring the log in one's own eye, and taught His disciples to judge themselves first (Matthew 7:1-5). He spoke of the narrow gate and the narrow way that lead to life, and the wide gate that leads to destruction, and warned against false prophets, who come in sheep's clothing but are inwardly ravenous wolves, known by their fruits (Matthew 7:13-20). The Sermon closes with the parable of the wise and foolish builders: the one who hears Jesus' words and does them is like a wise man who built his house on the rock, and it stood when the storm came; the one who hears and does not do them is like a foolish man who built on sand, and his house fell (Matthew 7:24-27). The crowds were astonished at His teaching, for He taught them as one who had authority, not as their scribes."
      }
    ],
    definitions: [
      { term: "Beatitudes", meaning: "The blessings with which Jesus opened the Sermon on the Mount (Matthew 5:3-12)." },
      { term: "Kingdom of God", meaning: "God's rule and reign, present in Jesus and to be fully revealed at His coming." },
      { term: "Sermon on the Mount", meaning: "Jesus' great teaching in Matthew 5-7 on the life of the kingdom." },
      { term: "The Golden Rule", meaning: "Do to others what you would have them do to you (Matthew 7:12)." },
      { term: "Hypocrite", meaning: "One who performs religion to be seen by people rather than to please God." },
      { term: "Righteousness", meaning: "Right standing and right living before God, which Jesus demands from the heart." }
    ],
    examples: [
      {
        title: "Applying the Beatitudes",
        problem: "A question asks what Jesus meant by blessed are the poor in spirit. How would you explain it?",
        steps: ["Recall the words: Blessed are the poor in spirit, for theirs is the kingdom of heaven (Matthew 5:3).", "Explain that poor in spirit means recognising one's spiritual poverty and need of God.", "Contrast this with the self-satisfied, who see no need for God.", "Note the promise: theirs is the kingdom of heaven.", "Conclude that the Beatitude blesses humility and dependence on God."],
        answer: "Poor in spirit means knowing one's spiritual need of God; such people receive the kingdom of heaven."
      },
      {
        title: "Interpreting the two builders",
        problem: "What is the difference between the wise and the foolish builders in Matthew 7:24-27?",
        steps: ["Note that both builders heard Jesus' words.", "Note that the wise builder did them, building on the rock.", "Note that the foolish builder did not do them, building on sand.", "Recall that both houses faced the same storm.", "Conclude that hearing without obeying leaves a life that collapses in testing."],
        answer: "The wise builder obeyed Jesus' words and stood firm; the foolish builder heard but did not obey, and his house fell."
      }
    ],
    tips: ["Learn the Beatitudes in order; the first is poor in spirit and the last is persecuted for righteousness.", "The Lord's Prayer is Matthew 6:9-13; know its petitions in order.", "Jesus deepened the Law: anger equals murder in the heart, lust equals adultery in the heart.", "The Sermon ends with the wise and foolish builders; doing the words matters, not just hearing them."],
    mistakes: ["Saying Jesus abolished the Law; He came to fulfil it.", "Quoting the Golden Rule backwards; it is do to others as you would have them do to you.", "Saying the Beatitudes bless the rich and powerful; they bless the humble and persecuted.", "Forgetting that Jesus taught forgiveness as a condition of being forgiven."],
    facts: ["The Sermon on the Mount is recorded in Matthew chapters 5 to 7.", "The first Beatitude is, Blessed are the poor in spirit (Matthew 5:3).", "The Golden Rule is found in Matthew 7:12.", "Jesus taught His disciples to love their enemies (Matthew 5:44).", "The crowds were astonished because Jesus taught with authority (Matthew 7:28-29)."],
    quiz: [
      { q: "In which chapters of Matthew is the Sermon on the Mount recorded?", options: ["Chapters 1-3", "Chapters 5-7", "Chapters 8-10", "Chapters 13-15"], answer: 1, explanation: "The Sermon on the Mount is recorded in Matthew chapters 5 to 7." },
      { q: "What is the first Beatitude?", options: ["Blessed are the meek", "Blessed are the poor in spirit", "Blessed are the merciful", "Blessed are the peacemakers"], answer: 1, explanation: "The first Beatitude is, Blessed are the poor in spirit, for theirs is the kingdom of heaven (Matthew 5:3)." },
      { q: "According to the Beatitudes, who will inherit the earth?", options: ["The rich", "The meek", "The powerful", "The wise"], answer: 1, explanation: "Blessed are the meek, for they shall inherit the earth (Matthew 5:5)." },
      { q: "Who will be called sons of God, according to the Beatitudes?", options: ["The merciful", "The peacemakers", "Those who mourn", "The pure in heart"], answer: 1, explanation: "Blessed are the peacemakers, for they shall be called sons of God (Matthew 5:9)." },
      { q: "What did Jesus say He came to do with the Law?", options: ["Abolish it", "Fulfil it", "Ignore it", "Replace it with tradition"], answer: 1, explanation: "Jesus said He came not to abolish the Law or the Prophets but to fulfil them (Matthew 5:17)." },
      { q: "According to Jesus, what is anger in the heart like?", options: ["Theft", "Murder", "Adultery", "Lying"], answer: 1, explanation: "Jesus taught that everyone who is angry with his brother will be liable to judgement, deepening the commandment against murder (Matthew 5:21-22)." },
      { q: "How did Jesus tell His disciples to treat their enemies?", options: ["Ignore them", "Love them and pray for them", "Curse them", "Avoid them"], answer: 1, explanation: "Jesus said, Love your enemies and pray for those who persecute you (Matthew 5:44)." },
      { q: "How did Jesus begin the Lord's Prayer?", options: ["O God of Abraham", "Our Father in heaven", "Lord of all the earth", "Almighty God"], answer: 1, explanation: "The Lord's Prayer begins, Our Father in heaven, hallowed be your name (Matthew 6:9)." },
      { q: "What does the petition give us this day our daily bread ask for?", options: ["Wealth", "Daily provision", "Long life", "A large harvest"], answer: 1, explanation: "Give us this day our daily bread asks God for the daily provision we need (Matthew 6:11)." },
      { q: "What did Jesus say about forgiving others?", options: ["It is optional", "If we do not forgive others, our Father will not forgive us", "Only priests need to forgive", "Forgiveness is only for friends"], answer: 1, explanation: "Jesus taught that if we do not forgive others their trespasses, neither will our Father forgive ours (Matthew 6:15)." },
      { q: "What is the Golden Rule?", options: ["Do to others what you would have them do to you", "Do not judge others at all", "Love God only", "Give to the poor always"], answer: 0, explanation: "The Golden Rule is: whatever you wish that others would do to you, do also to them (Matthew 7:12)." },
      { q: "What did Jesus say about judging others?", options: ["Judge everyone strictly", "First take the log out of your own eye", "Never correct anyone", "Judge only strangers"], answer: 1, explanation: "Jesus said to first take the log out of your own eye before removing the speck from your brother's eye (Matthew 7:5)." },
      { q: "How will false prophets be known, according to Jesus?", options: ["By their clothes", "By their fruits", "By their wealth", "By their speeches"], answer: 1, explanation: "You will recognise false prophets by their fruits: a good tree bears good fruit (Matthew 7:16-20)." },
      { q: "In the parable of the builders, what did the wise man build his house on?", options: ["Sand", "The rock", "Clay", "Wood"], answer: 1, explanation: "The wise man built his house on the rock, and it stood when the storm came (Matthew 7:24-25)." },
      { q: "Why were the crowds astonished at Jesus' teaching?", options: ["Because He spoke in parables only", "Because He taught as one who had authority", "Because He was very old", "Because He agreed with the scribes"], answer: 1, explanation: "The crowds were astonished because Jesus taught them as one who had authority, and not as their scribes (Matthew 7:28-29)." }
    ],
    status: "published"
  },
  {
    id: "crs-05",
    subjectId: "crs",
    topic: "The Parables and Miracles of Jesus",
    subtopic: "The parables of Jesus",
    title: "The Parables of Jesus",
    order: 5,
    introduction: "Jesus taught the crowds in parables, simple stories drawn from daily life that carry deep spiritual truth. This lesson explains the major parables of the kingdom, the Good Samaritan, the Prodigal Son and others, and how to interpret them.",
    objectives: ["Define a parable and explain why Jesus used parables", "Explain the parables of the kingdom: the sower, the mustard seed and the leaven", "Explain the parable of the Good Samaritan", "Explain the parable of the Prodigal Son", "Apply the lessons of the parables to Christian life"],
    sections: [
      {
        heading: "What Is a Parable and Why Jesus Used Them",
        body: "A parable is an earthly story with a heavenly meaning: a simple tale drawn from farming, fishing, family life or money, told to teach a spiritual truth. Jesus used parables because they made His teaching vivid and memorable, and because they revealed truth to those who were willing to listen while hiding it from those who were hardened against Him. As He explained to His disciples, to them it was given to know the secrets of the kingdom of heaven, but to others He spoke in parables (Matthew 13:10-13). A parable usually has one main point, and the details serve that point; the mistake to avoid is pressing every small detail into an allegory. When the disciples asked Jesus to explain a parable, He did so plainly, as with the parable of the sower, which shows that interpretation must be guided by Jesus' own explanations and by the central message of each story."
      },
      {
        heading: "Parables of the Kingdom: The Sower, the Mustard Seed and the Leaven",
        body: "In the parable of the sower (Matthew 13:3-9, 18-23), a sower scattered seed on four kinds of soil: the path, rocky ground, thorny ground and good soil. Jesus explained that the seed is the word of the kingdom: the path is the hearer who does not understand, and the evil one snatches the word away; the rocky ground is the hearer who receives the word with joy but has no root and falls away in trouble; the thorny ground is the hearer choked by the cares of the world and the deceitfulness of riches; and the good soil is the hearer who understands the word and bears fruit, some a hundredfold, some sixty, some thirty. The parable of the mustard seed (Matthew 13:31-32) teaches that the kingdom, though it begins as the smallest of seeds, grows into the greatest of shrubs, so that the birds nest in its branches: the kingdom's small, humble beginning will end in great growth. The parable of the leaven (Matthew 13:33) teaches the same truth from the inside: like leaven hidden in dough, the kingdom works quietly and thoroughly until the whole is transformed."
      },
      {
        heading: "The Good Samaritan",
        body: "When a lawyer asked Jesus, Who is my neighbour? Jesus told the parable of the Good Samaritan (Luke 10:25-37). A man travelling from Jerusalem to Jericho was robbed, beaten and left half dead. A priest and then a Levite saw him and passed by on the other side, but a Samaritan, a member of a despised people, stopped, bound up his wounds, set him on his own animal, took him to an inn and paid for his care. Jesus asked which of the three was a neighbour to the man, and the lawyer answered, The one who showed him mercy. Jesus said, You go, and do likewise. The parable teaches that a neighbour is not defined by race, religion or social standing, but by need and by mercy; the question is not who is my neighbour, but to whom can I be a neighbour. It is the classic parable of compassion in action, and it exposes empty religion that sees suffering and passes by."
      },
      {
        heading: "The Prodigal Son and Other Parables of Grace",
        body: "The parable of the Prodigal Son (Luke 15:11-32) tells of a younger son who demanded his share of the inheritance, wasted it in reckless living, and ended up feeding pigs in a far country. Coming to himself, he returned home to ask his father to take him as a hired servant, but while he was still far off, his father saw him, ran to him, embraced him, and welcomed him home with a feast. The elder brother, who had stayed home and worked faithfully, was angry and refused to join the feast, but the father pleaded with him: it was fitting to celebrate, for this your brother was dead and is alive again. The parable teaches the mercy of God towards repentant sinners, the joy in heaven over one sinner who repents, and the danger of a self-righteous spirit that resents God's grace. Luke 15 also contains the parables of the lost sheep and the lost coin, which teach the same truth: God seeks the lost and rejoices when they are found. The parable of the talents (Matthew 25:14-30) teaches stewardship: God entrusts His servants with gifts and expects them to use them faithfully."
      }
    ],
    definitions: [
      { term: "Parable", meaning: "An earthly story with a heavenly meaning, used by Jesus to teach spiritual truth." },
      { term: "Kingdom of heaven", meaning: "God's rule, present in Jesus' ministry and growing until its full revelation." },
      { term: "Neighbour", meaning: "Anyone in need to whom we can show mercy, regardless of race or religion." },
      { term: "Repentance", meaning: "A change of mind and direction, turning from sin back to God." },
      { term: "Stewardship", meaning: "The faithful use of the gifts and resources God has entrusted to us." },
      { term: "Samaritan", meaning: "A member of a people despised by the Jews, used by Jesus as an example of mercy." }
    ],
    examples: [
      {
        title: "Interpreting the parable of the sower",
        problem: "What is the main lesson of the parable of the sower?",
        steps: ["Recall that the same seed was sown on four different soils.", "Note that the difference in result came from the soil, not the seed.", "Recall Jesus' explanation: the soils are four kinds of hearers of the word.", "Note that only the good soil bears fruit.", "Conclude that the parable teaches that the fruitfulness of God's word depends on the heart that receives it."],
        answer: "The parable teaches that the word of God bears fruit only in a heart that receives and understands it."
      },
      {
        title: "Applying the Good Samaritan",
        problem: "A question asks who the neighbour is in the parable of the Good Samaritan. How do you answer?",
        steps: ["Recall that the priest and Levite passed by, while the Samaritan helped.", "Note that the Samaritan was a despised outsider.", "Recall Jesus' question: which proved neighbour to the wounded man?", "Note the answer: the one who showed mercy.", "Conclude that a neighbour is anyone in need, and we are to show mercy to them."],
        answer: "The neighbour is the one who shows mercy to a person in need, whatever their race or religion."
      }
    ],
    tips: ["Learn the sower's four soils and what each means; Jesus explained it Himself in Matthew 13:18-23.", "The Good Samaritan is Luke 10:25-37; the Prodigal Son is Luke 15:11-32.", "A parable has one main point; do not allegorise every detail.", "Remember the mustard seed and leaven both teach the kingdom's growth from small beginnings."],
    mistakes: ["Saying the priest and Levite helped the wounded man; they passed by.", "Confusing the Prodigal Son with the lost sheep; both are in Luke 15 but are different stories.", "Saying the talents parable teaches that money is evil; it teaches faithful stewardship.", "Interpreting parables by forcing a meaning onto every small detail."],
    facts: ["The parable of the sower is explained by Jesus Himself in Matthew 13:18-23.", "The Good Samaritan was travelling from Jerusalem to Jericho (Luke 10:30).", "The Prodigal Son ended up feeding pigs in a far country (Luke 15:15).", "The mustard seed grows into the greatest of shrubs (Matthew 13:32).", "There is joy in heaven over one sinner who repents (Luke 15:7)."],
    quiz: [
      { q: "What is a parable?", options: ["A miracle of healing", "An earthly story with a heavenly meaning", "A prophecy about the future", "A law given by Moses"], answer: 1, explanation: "A parable is an earthly story with a heavenly meaning, told by Jesus to teach spiritual truth." },
      { q: "Why did Jesus speak to the crowds in parables?", options: ["Because He could not speak plainly", "To reveal truth to willing hearers and hide it from the hardened", "Because parables were the only stories He knew", "To entertain the crowds"], answer: 1, explanation: "Jesus spoke in parables so that the secrets of the kingdom would be revealed to His disciples while hidden from those who rejected Him (Matthew 13:10-13)." },
      { q: "In the parable of the sower, what does the seed represent?", options: ["The church", "The word of the kingdom", "The disciples", "The money of the rich"], answer: 1, explanation: "Jesus explained that the seed is the word of the kingdom, sown in different hearts (Matthew 13:19)." },
      { q: "In the parable of the sower, which soil bore fruit?", options: ["The path", "The rocky ground", "The thorny ground", "The good soil"], answer: 3, explanation: "Only the good soil, the hearer who understands the word, bears fruit, some a hundredfold, some sixty, some thirty (Matthew 13:23)." },
      { q: "What choked the seed in the thorny ground?", options: ["The sun", "The cares of the world and the deceitfulness of riches", "The birds", "The lack of rain"], answer: 1, explanation: "The seed among thorns was choked by the cares of the world and the deceitfulness of riches (Matthew 13:22)." },
      { q: "What does the parable of the mustard seed teach about the kingdom?", options: ["It will always stay small", "It begins small but grows great", "It belongs only to the Jews", "It will be destroyed"], answer: 1, explanation: "The mustard seed, the smallest of seeds, grows into the greatest of shrubs, showing the kingdom's growth from small beginnings (Matthew 13:31-32)." },
      { q: "In the Good Samaritan, who stopped to help the wounded man?", options: ["The priest", "The Levite", "The Samaritan", "The innkeeper"], answer: 2, explanation: "The Samaritan, a despised outsider, stopped, bound up the man's wounds and took him to an inn (Luke 10:33-34)." },
      { q: "In the Good Samaritan, where was the wounded man travelling from?", options: ["Jerusalem to Jericho", "Jericho to Jerusalem", "Nazareth to Capernaum", "Bethlehem to Egypt"], answer: 0, explanation: "The man was going down from Jerusalem to Jericho when robbers attacked him (Luke 10:30)." },
      { q: "What did the lawyer ask Jesus that led to the parable of the Good Samaritan?", options: ["Who is my neighbour?", "What must I do to be rich?", "Who is the greatest?", "When will the kingdom come?"], answer: 0, explanation: "The lawyer asked, And who is my neighbour? and Jesus answered with the parable (Luke 10:29)." },
      { q: "In the parable of the Prodigal Son, what did the younger son do with his inheritance?", options: ["He invested it wisely", "He wasted it in reckless living", "He gave it to the poor", "He buried it"], answer: 1, explanation: "The younger son squandered his property in reckless living in a far country (Luke 15:13)." },
      { q: "What did the father do when he saw the Prodigal Son returning?", options: ["He waited for an apology", "He ran to him, embraced him and welcomed him home", "He sent him away", "He made him a servant"], answer: 1, explanation: "While the son was still far off, his father saw him, had compassion, ran, embraced him and kissed him (Luke 15:20)." },
      { q: "Why was the elder brother angry in the parable of the Prodigal Son?", options: ["Because his father was poor", "Because his brother was welcomed with a feast though he had wasted everything", "Because he was sent away", "Because the servants disobeyed him"], answer: 1, explanation: "The elder brother was angry that his father celebrated his brother's return, though he himself had served faithfully for years (Luke 15:28-30)." },
      { q: "What does the parable of the talents teach?", options: ["Money is evil", "God expects faithful use of the gifts He entrusts to us", "Servants should hide their gifts", "Only the rich are rewarded"], answer: 1, explanation: "The parable of the talents teaches stewardship: the faithful servants who used their talents were rewarded, the unfaithful one was judged (Matthew 25:14-30)." },
      { q: "In the parable of the lost sheep, how many sheep did the shepherd leave to find the one that was lost?", options: ["Nine", "Ninety", "Ninety-nine", "One hundred"], answer: 2, explanation: "The shepherd left the ninety-nine in the open country to go after the one lost sheep (Luke 15:4)." },
      { q: "What does the parable of the leaven teach?", options: ["The kingdom works quietly and thoroughly until all is transformed", "Bread should not be eaten", "The kingdom is only for the rich", "Leaven is unclean"], answer: 0, explanation: "Like leaven hidden in dough, the kingdom works quietly until the whole is leavened (Matthew 13:33)." }
    ],
    status: "published"
  },
  {
    id: "crs-06",
    subjectId: "crs",
    topic: "The Parables and Miracles of Jesus",
    subtopic: "The miracles of Jesus",
    title: "The Miracles of Jesus",
    order: 6,
    introduction: "Jesus' miracles were signs of the kingdom of God breaking into the world: healing the sick, feeding the hungry, calming the storm and raising the dead. This lesson studies the main kinds of miracles and what they reveal about Jesus.",
    objectives: ["Classify the miracles of Jesus into healing, nature, feeding and raising the dead", "Describe the healing miracles, including the leper and the paralytic", "Describe the feeding of the five thousand", "Explain the nature miracles: calming the storm and walking on water", "Explain the raising of Lazarus and its significance"],
    sections: [
      {
        heading: "Healing Miracles",
        body: "Healing was the largest group of Jesus' miracles, and it showed His compassion and His authority over sickness, which the Bible links with the brokenness of the world after the Fall. At Capernaum, Jesus healed a leper who knelt and said, Lord, if you will, you can make me clean; Jesus touched him, saying, I will; be clean, and the leprosy left him at once (Matthew 8:1-4). Jesus also healed a paralytic who was lowered through the roof by his friends, first saying, Your sins are forgiven, and then, Rise, pick up your bed and go home, to prove that the Son of Man has authority on earth to forgive sins (Mark 2:1-12). He healed the centurion's servant from a distance by a word (Matthew 8:5-13), the woman with the flow of blood who touched His garment in faith (Mark 5:25-34), and blind Bartimaeus, who cried out, Son of David, have mercy on me (Mark 10:46-52). In each healing, faith and Jesus' word or touch are prominent, and the healing points beyond itself to the forgiveness and wholeness Jesus brings."
      },
      {
        heading: "The Feeding of the Five Thousand",
        body: "The feeding of the five thousand is the only miracle recorded in all four Gospels (Matthew 14:13-21; Mark 6:30-44; Luke 9:10-17; John 6:1-14). A great crowd followed Jesus to a deserted place, and as evening came, the disciples wanted to send them away to buy food. Jesus asked what they had, and a boy offered five barley loaves and two fish. Jesus took them, gave thanks, broke them, and gave them to the disciples to distribute, and all ate and were satisfied, with twelve baskets of fragments left over. The miracle showed Jesus' compassion for the hungry crowd and His divine power to provide, recalling God's provision of manna in the wilderness. In John's Gospel, Jesus then taught that He is the bread of life, and that whoever comes to Him will never hunger (John 6:35). The feeding teaches that Jesus supplies the real needs of His people, both physical and spiritual, and that what is offered to Him, however small, is enough in His hands."
      },
      {
        heading: "Nature Miracles: The Storm and Walking on Water",
        body: "The nature miracles show Jesus' authority over creation itself. One evening Jesus and His disciples crossed the Sea of Galilee, and a great storm arose, so that the boat was being swamped by the waves while Jesus slept in the stern. The disciples woke Him, crying, Teacher, do you not care that we are perishing? Jesus rebuked the wind and said to the sea, Peace! Be still! and the wind ceased and there was a great calm (Mark 4:35-41). The disciples were filled with awe and asked, Who then is this, that even the wind and the sea obey him? Later the same night, Jesus came to the disciples walking on the sea, and Peter, at Jesus' word, walked on the water towards Him, but began to sink when he saw the wind and was afraid, and Jesus caught him, saying, O you of little faith, why did you doubt? (Matthew 14:22-33). These miracles show that Jesus is Lord over the forces of nature, and that faith looks to Him in the storm rather than to the waves."
      },
      {
        heading: "Raising the Dead: Lazarus and Others",
        body: "Jesus raised the dead on three recorded occasions, each pointing forward to His own resurrection. He raised the daughter of Jairus, a synagogue ruler, taking her by the hand and saying, Little girl, I say to you, arise (Mark 5:21-43). He raised the widow of Nain's only son, touching the bier and saying, Young man, I say to you, arise, and giving him back to his mother (Luke 7:11-17). The greatest of these was the raising of Lazarus of Bethany, who had been dead four days and was already in the tomb (John 11). When Jesus arrived, Martha said, Lord, if you had been here, my brother would not have died, and Jesus answered, I am the resurrection and the life; whoever believes in me, though he die, yet shall he live. Jesus wept at the tomb, then cried with a loud voice, Lazarus, come out, and the dead man came out, bound in grave clothes. Many believed, but the chief priests began to plot Jesus' death, because His power threatened their position. Lazarus shows that Jesus has power over death itself, and that belief in Him is the way to eternal life."
      }
    ],
    definitions: [
      { term: "Miracle", meaning: "An act of God that goes beyond natural power, performed by Jesus as a sign of the kingdom." },
      { term: "Leprosy", meaning: "A skin disease that made a person unclean and cut off from the community in Israel." },
      { term: "Faith", meaning: "Trust in Jesus and His power, shown by those who came to Him for healing." },
      { term: "Bread of life", meaning: "Jesus' title for Himself as the one who satisfies spiritual hunger (John 6:35)." },
      { term: "Resurrection", meaning: "Rising from the dead to new life, as Jesus raised Lazarus and as He Himself rose." },
      { term: "Sign", meaning: "A miracle that points beyond itself to the truth about who Jesus is." }
    ],
    examples: [
      {
        title: "Interpreting the healing of the paralytic",
        problem: "Why did Jesus first say Your sins are forgiven to the paralytic?",
        steps: ["Recall that the man's friends lowered him through the roof to reach Jesus.", "Note that Jesus first forgave his sins, then healed his body.", "Recall that the scribes thought only God could forgive sins.", "Note that Jesus healed the man to prove He had authority to forgive sins.", "Conclude that the miracle showed Jesus' divine authority, with healing as the visible sign of forgiveness."],
        answer: "Jesus forgave the man's sins first to show that He has divine authority to forgive, and the healing proved it."
      },
      {
        title: "Tracing the feeding miracle",
        problem: "What did the disciples have, and what was left over, in the feeding of the five thousand?",
        steps: ["Recall that the crowd was about five thousand men, besides women and children.", "Note that a boy had five barley loaves and two fish (John 6:9).", "Recall that Jesus gave thanks, broke the loaves and distributed them.", "Note that all ate and were satisfied.", "Recall that twelve baskets of fragments were gathered (Matthew 14:20)."],
        answer: "From five loaves and two fish, all were fed and twelve baskets of fragments remained."
      }
    ],
    tips: ["The feeding of the five thousand is the only miracle in all four Gospels.", "Know the three raisings: Jairus' daughter, the widow of Nain's son, and Lazarus.", "Jesus' words in the storm were Peace! Be still! (Mark 4:39).", "Link each miracle to what it reveals: compassion, authority, provision, power over death."],
    mistakes: ["Saying Jesus healed only those who were righteous; He healed out of compassion and in response to faith.", "Confusing the feeding of the five thousand with the feeding of the four thousand.", "Saying Peter walked on water without sinking; he began to sink when he doubted.", "Forgetting that Lazarus had been dead four days when Jesus raised him."],
    facts: ["Jesus healed a leper by touching him and saying, I will; be clean (Matthew 8:3).", "Five loaves and two fish fed about five thousand men (Matthew 14:17-21).", "Jesus calmed the storm with the words Peace! Be still! (Mark 4:39).", "Lazarus had been dead four days when Jesus raised him (John 11:17).", "Jesus said, I am the resurrection and the life (John 11:25)."],
    quiz: [
      { q: "At Capernaum, how did Jesus heal the leper?", options: ["By praying from a distance", "By touching him and saying, I will; be clean", "By giving him medicine", "By sending him to the priests first"], answer: 1, explanation: "Jesus stretched out His hand, touched the leper and said, I will; be clean, and his leprosy was cleansed (Matthew 8:3)." },
      { q: "How did the paralytic reach Jesus in Mark 2?", options: ["He walked to the door", "His friends lowered him through the roof", "He was carried by soldiers", "He swam across the lake"], answer: 1, explanation: "His four friends removed the roof above Jesus and let the paralytic down on his bed (Mark 2:4)." },
      { q: "What did Jesus say to the paralytic before healing him?", options: ["Rise and walk", "Your sins are forgiven", "Go and sin no more", "Your faith is small"], answer: 1, explanation: "Jesus first said, Son, your sins are forgiven, to show His authority to forgive (Mark 2:5)." },
      { q: "Whose servant did Jesus heal from a distance by a word?", options: ["The high priest's servant", "The centurion's servant", "Herod's servant", "The tax collector's servant"], answer: 1, explanation: "Jesus healed the centurion's servant by His word, praising the centurion's great faith (Matthew 8:5-13)." },
      { q: "Who was healed by touching the hem of Jesus' garment?", options: ["The woman with the flow of blood", "Martha", "Mary Magdalene", "The widow of Nain"], answer: 0, explanation: "The woman with a flow of blood for twelve years touched Jesus' garment in faith and was healed (Mark 5:25-34)." },
      { q: "What did blind Bartimaeus cry out to Jesus?", options: ["Teacher, heal my eyes", "Son of David, have mercy on me", "Lord, make me rich", "Rabbi, teach me"], answer: 1, explanation: "Bartimaeus cried out, Jesus, Son of David, have mercy on me, and Jesus restored his sight (Mark 10:47-52)." },
      { q: "How many loaves and fish did the boy have at the feeding of the five thousand?", options: ["Seven loaves and three fish", "Five loaves and two fish", "Two loaves and five fish", "Twelve loaves and seven fish"], answer: 1, explanation: "A boy had five barley loaves and two small fish, which Jesus used to feed the crowd (John 6:9)." },
      { q: "How many baskets of fragments were left after the feeding of the five thousand?", options: ["Seven", "Twelve", "Five", "Two"], answer: 1, explanation: "Twelve baskets full of fragments were gathered after all had eaten and were satisfied (Matthew 14:20)." },
      { q: "In John's Gospel, what did Jesus call Himself after feeding the five thousand?", options: ["The light of the world", "The bread of life", "The good shepherd", "The true vine"], answer: 1, explanation: "Jesus said, I am the bread of life; whoever comes to me shall not hunger (John 6:35)." },
      { q: "What did Jesus say to the storm on the Sea of Galilee?", options: ["Be gone!", "Peace! Be still!", "Stop the rain!", "Calm down, sea!"], answer: 1, explanation: "Jesus rebuked the wind and said to the sea, Peace! Be still! and there was a great calm (Mark 4:39)." },
      { q: "Who walked on the water towards Jesus and then began to sink?", options: ["John", "James", "Peter", "Andrew"], answer: 2, explanation: "Peter walked on the water towards Jesus, but when he saw the wind he was afraid and began to sink (Matthew 14:28-30)." },
      { q: "Whose daughter did Jesus raise, saying, Little girl, I say to you, arise?", options: ["Jairus' daughter", "The widow of Nain's daughter", "Martha's daughter", "The centurion's daughter"], answer: 0, explanation: "Jesus took the daughter of Jairus by the hand and said, Talitha cumi, Little girl, arise (Mark 5:41)." },
      { q: "How long had Lazarus been dead when Jesus raised him?", options: ["One day", "Two days", "Three days", "Four days"], answer: 3, explanation: "Lazarus had been in the tomb four days when Jesus arrived at Bethany (John 11:17)." },
      { q: "What did Jesus say to Martha before raising Lazarus?", options: ["I am the resurrection and the life", "I am the light of the world", "I am the good shepherd", "I am the way, the truth and the life"], answer: 0, explanation: "Jesus said to Martha, I am the resurrection and the life; whoever believes in me, though he die, yet shall he live (John 11:25)." },
      { q: "What did Jesus cry at the tomb of Lazarus?", options: ["Lazarus, come out", "Lazarus, wake up", "Lazarus, arise", "Lazarus, live again"], answer: 0, explanation: "Jesus cried with a loud voice, Lazarus, come out, and the dead man came out (John 11:43)." }
    ],
    status: "published"
  },
  {
    id: "crs-07",
    subjectId: "crs",
    topic: "The Early Church and the Epistles",
    subtopic: "Pentecost and the growth of the early Church",
    title: "Pentecost and the Growth of the Early Church",
    order: 7,
    introduction: "After Jesus' resurrection and ascension, the Holy Spirit came upon the disciples at Pentecost, and the Church was born. This lesson traces the birth of the Church, the apostles' preaching, the first persecution, and the conversion of Saul.",
    objectives: ["Describe the death, resurrection and ascension of Jesus", "Describe the coming of the Holy Spirit at Pentecost", "Explain Peter's sermon and the growth of the early Church", "Describe the communal life of the early believers", "Explain Stephen's martyrdom and the conversion of Saul"],
    sections: [
      {
        heading: "The Death, Resurrection and Ascension of Jesus",
        body: "After the Last Supper, at which Jesus instituted the Lord's Supper with the bread and the cup, He was betrayed by Judas, arrested in Gethsemane, tried before the Sanhedrin and before Pilate, and crucified at Golgotha (Matthew 26-27; John 18-19). He died for the sins of the world, and was buried in the tomb of Joseph of Arimathea. On the third day He rose from the dead: the tomb was empty, the angel announced, He is not here; he has risen, and the risen Jesus appeared to Mary Magdalene, to the disciples on the road to Emmaus, and to the apostles, showing them His hands and His side and eating with them (Luke 24; John 20-21). For forty days He taught them about the kingdom of God, then He ascended into heaven from the Mount of Olives, promising that the Holy Spirit would come upon them and that they would be His witnesses in Jerusalem, in all Judea and Samaria, and to the end of the earth (Acts 1:1-11). The resurrection is the heart of the Christian faith: if Christ has not been raised, our preaching is in vain (1 Corinthians 15:14)."
      },
      {
        heading: "Pentecost and Peter's Sermon",
        body: "Fifty days after the resurrection, on the day of Pentecost, the disciples were together in Jerusalem when suddenly a sound like a mighty rushing wind filled the house, tongues as of fire rested on each of them, and they were filled with the Holy Spirit and began to speak in other tongues (Acts 2:1-4). Jews from every nation under heaven, in Jerusalem for the feast, heard the apostles speaking in their own languages about the mighty works of God. Peter stood up and preached: Jesus of Nazareth, whom they had crucified, God had raised up, and had exalted Him to His right hand, pouring out the Spirit; therefore, let all Israel know that God has made Him both Lord and Christ. Cut to the heart, the crowd asked, What shall we do? Peter answered, Repent and be baptised every one of you in the name of Jesus Christ for the forgiveness of your sins, and you will receive the gift of the Holy Spirit. About three thousand souls were added that day (Acts 2:37-41). Pentecost is the birthday of the Church, and the Spirit's coming fulfilled Jesus' promise and Joel's prophecy (Joel 2:28-32)."
      },
      {
        heading: "The Life of the Early Church",
        body: "The early believers in Jerusalem devoted themselves to the apostles' teaching and the fellowship, to the breaking of bread and the prayers (Acts 2:42). They held all things in common, selling their possessions and distributing to all as any had need, and they ate together with glad and generous hearts, praising God. The apostles performed many signs and wonders, and the Lord added to their number day by day those who were being saved. The Church was not only a worshipping community but a caring one: when a complaint arose that the Hellenist widows were neglected in the daily distribution, the apostles appointed seven men, including Stephen and Philip, to serve the tables, so that the apostles could devote themselves to prayer and the ministry of the word (Acts 6:1-7). This first act of organisation shows the Church's care for the needy and its wisdom in sharing ministry, and the word of God continued to increase and the number of disciples multiplied greatly."
      },
      {
        heading: "Stephen, Philip and the Conversion of Saul",
        body: "Stephen, one of the seven, full of grace and power, was accused of blasphemy and brought before the Sanhedrin, where he preached Israel's history and charged his hearers with resisting the Holy Spirit and killing the Righteous One. Enraged, they stoned him, and as he died Stephen prayed, Lord Jesus, receive my spirit, and, Lord, do not hold this sin against them, becoming the first Christian martyr (Acts 7). A great persecution broke out against the Church in Jerusalem, and the believers were scattered through Judea and Samaria, preaching the word as they went. Philip preached in Samaria and baptised the Ethiopian eunuch on the road to Gaza (Acts 8). Meanwhile Saul of Tarsus, who had approved Stephen's death, was travelling to Damascus to arrest Christians when a light from heaven shone around him and the risen Jesus asked, Saul, Saul, why are you persecuting me? Saul was blinded, then healed and baptised by Ananias, and at once began to preach that Jesus is the Son of God (Acts 9:1-22). The persecutor became the apostle to the Gentiles, and the Church's mission spread beyond Jerusalem."
      }
    ],
    definitions: [
      { term: "Pentecost", meaning: "The feast fifty days after Passover, when the Holy Spirit came upon the disciples in Jerusalem." },
      { term: "Resurrection", meaning: "Jesus rising from the dead on the third day, the foundation of Christian faith." },
      { term: "Ascension", meaning: "Jesus being taken up into heaven forty days after His resurrection." },
      { term: "Martyr", meaning: "One who dies for the faith; Stephen was the first Christian martyr." },
      { term: "Fellowship", meaning: "The shared life of believers in teaching, prayer, breaking of bread and caring for one another." },
      { term: "Witness", meaning: "One who testifies to what he has seen and heard about Jesus, as the apostles did." }
    ],
    examples: [
      {
        title: "Explaining the significance of Pentecost",
        problem: "Why is Pentecost called the birthday of the Church?",
        steps: ["Recall that before Pentecost the disciples were gathered in fear behind closed doors.", "Note that at Pentecost the Holy Spirit came with wind and tongues of fire.", "Recall that Peter preached and about three thousand were baptised that day.", "Note that the believers then lived together as a worshipping, caring community.", "Conclude that Pentecost marks the Spirit-empowered beginning of the Church's public life and mission."],
        answer: "Pentecost is the birthday of the Church because the Spirit came, the gospel was preached, and three thousand were added in one day."
      },
      {
        title: "Tracing Saul's conversion",
        problem: "How did Saul change from persecutor to preacher?",
        steps: ["Recall that Saul approved Stephen's death and persecuted the Church.", "Note that on the road to Damascus a light from heaven shone around him.", "Recall Jesus' question: Saul, Saul, why are you persecuting me?", "Note that Ananias laid hands on him, his sight returned, and he was baptised.", "Conclude that Saul immediately began preaching that Jesus is the Son of God."],
        answer: "Saul met the risen Jesus on the Damascus road, was baptised, and at once preached Christ as the Son of God."
      }
    ],
    tips: ["Pentecost is Acts 2; know the wind, the tongues of fire, and Peter's sermon.", "About three thousand souls were added on the day of Pentecost.", "Stephen was the first martyr (Acts 7); Saul approved his death.", "Saul's conversion is Acts 9; the key question is, Saul, Saul, why are you persecuting me?"],
    mistakes: ["Saying Pentecost came before the resurrection; it was fifty days after it.", "Confusing Stephen with Philip; Stephen was stoned, Philip preached in Samaria.", "Saying Saul was converted in Jerusalem; it was on the road to Damascus.", "Forgetting that the early Church shared possessions and cared for widows."],
    facts: ["Jesus rose from the dead on the third day (Luke 24:1-7).", "The Holy Spirit came at Pentecost with a sound like a mighty rushing wind (Acts 2:2).", "About three thousand souls were baptised on the day of Pentecost (Acts 2:41).", "Stephen was the first Christian martyr (Acts 7:59-60).", "Saul was converted on the road to Damascus (Acts 9:3-6)."],
    quiz: [
      { q: "On which day did Jesus rise from the dead?", options: ["The second day", "The third day", "The seventh day", "The fortieth day"], answer: 1, explanation: "Jesus rose from the dead on the third day, as He had promised (Luke 24:1-7)." },
      { q: "Who betrayed Jesus for thirty pieces of silver?", options: ["Peter", "Judas Iscariot", "Thomas", "Matthew"], answer: 1, explanation: "Judas Iscariot betrayed Jesus to the chief priests for thirty pieces of silver (Matthew 26:14-16)." },
      { q: "How many days after the resurrection did Jesus ascend into heaven?", options: ["Seven", "Ten", "Forty", "Fifty"], answer: 2, explanation: "Jesus appeared to the apostles over forty days before He was taken up into heaven (Acts 1:3, 9)." },
      { q: "What was the last command Jesus gave before His ascension?", options: ["Build a temple", "Be His witnesses to the end of the earth", "Return to Galilee and stay there", "Appoint a king"], answer: 1, explanation: "Jesus promised the Spirit's power and commanded the apostles to be His witnesses in Jerusalem, Judea, Samaria and to the end of the earth (Acts 1:8)." },
      { q: "On the day of Pentecost, what rested on each of the disciples?", options: ["Doves", "Tongues as of fire", "Crowns of gold", "Clouds of smoke"], answer: 1, explanation: "Tongues as of fire appeared and rested on each of them, and they were filled with the Holy Spirit (Acts 2:3-4)." },
      { q: "How many souls were added to the Church on the day of Pentecost?", options: ["About five hundred", "About one thousand", "About three thousand", "About five thousand"], answer: 2, explanation: "Those who received Peter's word were baptised, and about three thousand souls were added that day (Acts 2:41)." },
      { q: "What did Peter tell the crowd to do at Pentecost?", options: ["Repent and be baptised in the name of Jesus Christ", "Go back to their homes", "Offer sacrifices in the Temple", "Wait for another sign"], answer: 0, explanation: "Peter said, Repent and be baptised every one of you in the name of Jesus Christ for the forgiveness of your sins (Acts 2:38)." },
      { q: "Which Old Testament prophet did Peter quote at Pentecost?", options: ["Isaiah", "Joel", "Jeremiah", "Ezekiel"], answer: 1, explanation: "Peter quoted Joel's prophecy that God would pour out His Spirit on all flesh (Acts 2:16-21; Joel 2:28-32)." },
      { q: "What did the early believers devote themselves to, according to Acts 2:42?", options: ["The apostles' teaching, fellowship, breaking of bread and prayers", "Building the Temple", "Collecting taxes", "Travelling to Rome"], answer: 0, explanation: "They devoted themselves to the apostles' teaching and the fellowship, to the breaking of bread and the prayers (Acts 2:42)." },
      { q: "Why were the seven appointed in Acts 6?", options: ["To preach to the Gentiles", "To serve the tables so the Hellenist widows would not be neglected", "To build a new synagogue", "To collect the Temple tax"], answer: 1, explanation: "The seven were appointed to serve the tables and ensure the daily distribution to the widows, freeing the apostles for prayer and the word (Acts 6:1-4)." },
      { q: "Who was the first Christian martyr?", options: ["James", "Stephen", "Philip", "Barnabas"], answer: 1, explanation: "Stephen was stoned to death for his witness, praying for his murderers as he died (Acts 7:59-60)." },
      { q: "What did Stephen pray as he was being stoned?", options: ["Lord Jesus, receive my spirit", "Father, send fire from heaven", "Lord, judge my enemies", "God, save me from death"], answer: 0, explanation: "Stephen prayed, Lord Jesus, receive my spirit, and, Lord, do not hold this sin against them (Acts 7:59-60)." },
      { q: "On which road was Saul converted?", options: ["The road to Jericho", "The road to Damascus", "The road to Emmaus", "The road to Gaza"], answer: 1, explanation: "Saul was travelling to Damascus to arrest Christians when the risen Jesus appeared to him in a blaze of light (Acts 9:3-6)." },
      { q: "Who laid hands on Saul so that his sight was restored?", options: ["Peter", "Ananias", "Barnabas", "Philip"], answer: 1, explanation: "Ananias laid his hands on Saul, his sight returned, and he was baptised (Acts 9:17-18)." },
      { q: "What did Saul do immediately after his conversion?", options: ["He returned to persecuting Christians", "He went to Rome", "He preached that Jesus is the Son of God", "He became a tax collector"], answer: 2, explanation: "Immediately Saul proclaimed Jesus in the synagogues, saying, He is the Son of God (Acts 9:20)." }
    ],
    status: "published"
  },
  {
    id: "crs-08",
    subjectId: "crs",
    topic: "The Early Church and the Epistles",
    subtopic: "The missionary journeys of Paul and the epistles",
    title: "The Missionary Journeys of Paul and the Epistles",
    order: 8,
    introduction: "Paul the apostle carried the gospel from Jerusalem to Rome, planting churches across the Roman world and writing letters that became much of the New Testament. This lesson follows his journeys and introduces his great epistles.",
    objectives: ["Describe the Council of Jerusalem and its decision", "Outline Paul's three missionary journeys", "Describe Paul's arrest and journey to Rome", "Explain the teaching of Romans on justification by faith", "Explain the teaching of 1 Corinthians on love and the resurrection"],
    sections: [
      {
        heading: "The Council of Jerusalem",
        body: "As Gentiles began to believe, a dispute arose: must Gentile converts be circumcised and keep the Law of Moses to be saved? Paul and Barnabas went to Jerusalem, where the apostles and elders met to consider the question (Acts 15). Peter recalled that God had given the Holy Spirit to the Gentiles just as to the Jews, purifying their hearts by faith, and James, the Lord's brother, quoted the prophet Amos and proposed that the Gentiles should not be troubled, but should abstain from idolatry, sexual immorality, strangled meat and blood. The council agreed and sent a letter to the Gentile churches, carried by Paul, Barnabas, Judas and Silas. The decision was a turning point: salvation is by grace through faith in Christ, not by keeping the Law, and Gentiles are full members of the people of God without becoming Jews first. The council also showed how the Church settles disputes: by Scripture, by the testimony of God's work, and by the guidance of the Holy Spirit."
      },
      {
        heading: "Paul's Missionary Journeys",
        body: "Paul made three great missionary journeys from Antioch in Syria, accompanied at different times by Barnabas, Silas, Timothy and Luke. On the first journey (Acts 13-14), Paul and Barnabas preached in Cyprus and in Asia Minor, in Pisidian Antioch, Iconium, Lystra and Derbe, where Paul was stoned and left for dead, yet returned to strengthen the new churches. On the second journey (Acts 15:36-18:22), Paul crossed into Europe after a vision of a man from Macedonia pleading, Come over to Macedonia and help us; he founded churches in Philippi, Thessalonica, Berea, Athens, where he preached on the Areopagus about the unknown God, and Corinth, where he stayed a year and a half. On the third journey (Acts 18:23-21:17), Paul spent about three years teaching in Ephesus, where the gospel spread through Asia and the silversmiths rioted because their trade in idols was threatened. Everywhere Paul preached first in the synagogue, then to the Gentiles, planted churches, appointed elders, and wrote letters to encourage and correct them."
      },
      {
        heading: "Paul's Arrest and Journey to Rome",
        body: "When Paul returned to Jerusalem, he was seized in the Temple by a mob, rescued by the Roman commander, and kept in prison in Caesarea for two years under the governors Felix and Festus, appealing at last to Caesar (Acts 21-26). Before King Agrippa, Paul told the story of his conversion and his commission to preach to the Gentiles, and Agrippa said, This man could have been set free if he had not appealed to Caesar. Paul sailed for Rome as a prisoner, and on the voyage the ship was wrecked in a violent storm off Malta, yet all aboard were saved, as God had promised Paul (Acts 27). In Rome, Paul lived under house arrest for two years, welcoming all who came to him and proclaiming the kingdom of God and teaching about the Lord Jesus Christ with all boldness and without hindrance (Acts 28:30-31). The book of Acts ends with the gospel reaching the heart of the empire, unhindered even by chains."
      },
      {
        heading: "The Epistles of Paul: Romans and 1 Corinthians",
        body: "Paul's letters, or epistles, were written to churches he had founded or hoped to visit, to teach, correct and encourage them. Romans, written from Corinth, is Paul's fullest statement of the gospel: all have sinned and fall short of the glory of God, and are justified by His grace as a gift, through the redemption that is in Christ Jesus (Romans 3:23-24). Justification is by faith, not by works of the Law, as Abraham was justified by believing God. Romans 8 declares that there is no condemnation for those who are in Christ Jesus, and that nothing can separate believers from the love of God in Christ. First Corinthians, written to a troubled church in Corinth, deals with divisions, immorality, lawsuits, marriage, food offered to idols, spiritual gifts and worship. Its most famous chapter, 1 Corinthians 13, describes love as patient and kind, not envious or boastful, bearing all things, believing all things, hoping all things, enduring all things, and declares that love never ends. Chapter 15 defends the resurrection: if Christ has not been raised, our faith is in vain, but in fact Christ has been raised from the dead, the firstfruits of those who have fallen asleep."
      }
    ],
    definitions: [
      { term: "Epistle", meaning: "A letter written by an apostle to a church or an individual, forming part of the New Testament." },
      { term: "Justification", meaning: "God's act of declaring a sinner righteous on the basis of faith in Christ." },
      { term: "Gentile", meaning: "A person who is not a Jew; the gospel was preached to Gentiles as well as Jews." },
      { term: "Areopagus", meaning: "The council and hill in Athens where Paul preached about the unknown God." },
      { term: "Grace", meaning: "God's free, undeserved favour given to sinners in Christ." },
      { term: "Firstfruits", meaning: "The first portion of a harvest, offered to God; Christ is the firstfruits of the resurrection." }
    ],
    examples: [
      {
        title: "Explaining the Jerusalem Council's decision",
        problem: "Why did the Council of Jerusalem not require Gentile converts to be circumcised?",
        steps: ["Recall the question: must Gentiles keep the Law of Moses to be saved?", "Note Peter's testimony that God gave the Holy Spirit to Gentiles by faith, purifying their hearts.", "Recall James's appeal to the prophet Amos about the Gentiles seeking the Lord.", "Note the council's conclusion that salvation is by grace through faith.", "Conclude that the council freed Gentile believers from the Law while asking them to avoid idolatry and immorality."],
        answer: "The council decided that Gentiles are saved by grace through faith, without circumcision or keeping the Law."
      },
      {
        title: "Tracing justification by faith in Romans",
        problem: "How does Paul prove that justification is by faith and not by works?",
        steps: ["Start with Romans 3:23: all have sinned and fall short of the glory of God.", "Note Romans 3:24: sinners are justified by grace as a gift through Christ.", "Recall Abraham: he believed God and it was counted to him as righteousness (Romans 4:3).", "Note that Abraham was justified before he was circumcised.", "Conclude that justification has always been by faith, so no one can boast in works."],
        answer: "Paul proves justification by faith from Abraham, who believed God and was counted righteous before circumcision."
      }
    ],
    tips: ["The Council of Jerusalem is Acts 15; its key truth is salvation by grace, not by the Law.", "Know Paul's three journeys and the Macedonian vision, Come over to Macedonia and help us (Acts 16:9).", "Romans 3:23-24 is the key text on justification by faith.", "1 Corinthians 13 is the chapter on love; 1 Corinthians 15 is the chapter on the resurrection."],
    mistakes: ["Saying the Jerusalem Council required Gentiles to be circumcised; it decided the opposite.", "Confusing Paul's journeys: the Macedonian vision belongs to the second journey.", "Saying Paul died in Acts; Acts ends with Paul under house arrest in Rome.", "Forgetting that Romans teaches justification by faith, not by works of the Law."],
    facts: ["The Council of Jerusalem decided Gentiles need not be circumcised (Acts 15).", "Paul received the Macedonian vision on his second missionary journey (Acts 16:9).", "Paul preached on the Areopagus in Athens about the unknown God (Acts 17:22-31).", "All have sinned and fall short of the glory of God (Romans 3:23).", "Love is patient and kind and never ends (1 Corinthians 13:4, 8)."],
    quiz: [
      { q: "What question did the Council of Jerusalem meet to decide?", options: ["Whether Gentiles must be circumcised to be saved", "Whether Paul should go to Rome", "Whether the Temple should be rebuilt", "Whether Christians should pay taxes"], answer: 0, explanation: "The council met because some taught that Gentile converts must be circumcised and keep the Law of Moses to be saved (Acts 15:1-2)." },
      { q: "Who proposed the council's solution that Gentiles should not be troubled?", options: ["Peter", "Paul", "James", "Barnabas"], answer: 2, explanation: "James, the Lord's brother, proposed that the Gentiles should not be troubled but should abstain from idolatry, immorality, strangled meat and blood (Acts 15:19-20)." },
      { q: "In Paul's vision, a man from where pleaded, Come over and help us?", options: ["Macedonia", "Cyprus", "Egypt", "Spain"], answer: 0, explanation: "Paul saw a vision of a man of Macedonia pleading, Come over to Macedonia and help us (Acts 16:9)." },
      { q: "In which city did Paul preach on the Areopagus about the unknown God?", options: ["Corinth", "Rome", "Athens", "Ephesus"], answer: 2, explanation: "Paul stood in the midst of the Areopagus in Athens and preached about the altar to the unknown God (Acts 17:22-23)." },
      { q: "In which city did Paul spend about three years teaching on his third journey?", options: ["Philippi", "Ephesus", "Thessalonica", "Berea"], answer: 1, explanation: "Paul spent about three years in Ephesus, teaching in the hall of Tyrannus and spreading the gospel through Asia (Acts 19:8-10; 20:31)." },
      { q: "Who accompanied Paul on his first missionary journey?", options: ["Silas", "Timothy", "Barnabas", "Luke"], answer: 2, explanation: "Paul and Barnabas were sent out from Antioch on the first missionary journey (Acts 13:1-3)." },
      { q: "Where was Paul stoned and left for dead on his first journey?", options: ["Iconium", "Lystra", "Derbe", "Pisidian Antioch"], answer: 1, explanation: "At Lystra, Jews from Antioch and Iconium stoned Paul and dragged him out of the city, supposing him dead (Acts 14:19)." },
      { q: "To whom did Paul appeal when he was imprisoned in Caesarea?", options: ["Felix", "Festus", "Caesar", "Agrippa"], answer: 2, explanation: "Paul appealed to Caesar, saying, I appeal to Caesar, and Festus answered, To Caesar you shall go (Acts 25:11-12)." },
      { q: "On which island was Paul shipwrecked on his voyage to Rome?", options: ["Cyprus", "Crete", "Malta", "Sicily"], answer: 2, explanation: "The ship was wrecked off Malta, where Paul was bitten by a viper without harm and healed the sick (Acts 27-28)." },
      { q: "How does the book of Acts end?", options: ["With Paul's death", "With Paul preaching in Rome without hindrance", "With Peter's martyrdom", "With the destruction of Jerusalem"], answer: 1, explanation: "Acts ends with Paul in Rome, proclaiming the kingdom of God and teaching about the Lord Jesus Christ with all boldness and without hindrance (Acts 28:30-31)." },
      { q: "According to Romans 3:23, what is true of all people?", options: ["All have sinned and fall short of the glory of God", "All are righteous by nature", "All keep the Law perfectly", "All are saved by works"], answer: 0, explanation: "For all have sinned and fall short of the glory of God (Romans 3:23)." },
      { q: "How are sinners justified, according to Romans 3:24?", options: ["By keeping the Law", "By grace as a gift, through the redemption in Christ Jesus", "By circumcision", "By offering sacrifices"], answer: 1, explanation: "Sinners are justified by His grace as a gift, through the redemption that is in Christ Jesus (Romans 3:24)." },
      { q: "According to 1 Corinthians 13, what is the greatest of faith, hope and love?", options: ["Faith", "Hope", "Love", "Knowledge"], answer: 2, explanation: "Faith, hope and love abide, but the greatest of these is love (1 Corinthians 13:13)." },
      { q: "In 1 Corinthians 15, what does Paul call Christ in relation to the resurrection?", options: ["The last Adam", "The firstfruits of those who have fallen asleep", "The cornerstone", "The Lamb of God"], answer: 1, explanation: "Christ has been raised from the dead, the firstfruits of those who have fallen asleep (1 Corinthians 15:20)." },
      { q: "What does Romans 8:1 declare about those who are in Christ Jesus?", options: ["There is no condemnation for them", "They will never suffer", "They are under the Law", "They are condemned by the flesh"], answer: 0, explanation: "There is therefore now no condemnation for those who are in Christ Jesus (Romans 8:1)." }
    ],
    status: "published"
  },
  {
    id: "crs-09",
    subjectId: "crs",
    topic: "Christian Ethics and Morality",
    subtopic: "Love, honesty and purity",
    title: "Christian Ethics: Love, Honesty and Purity",
    order: 9,
    introduction: "Christian ethics is not a list of rules but a life shaped by love of God and love of neighbour. This lesson examines the two great commandments, honesty, purity, forgiveness and the fruit of the Spirit as the foundation of Christian character.",
    objectives: ["Explain the two great commandments", "Describe Christian teaching on honesty and truthfulness", "Explain Christian teaching on purity and sexual morality", "Describe forgiveness and reconciliation in Christian ethics", "Explain the fruit of the Spirit as the pattern of Christian character"],
    sections: [
      {
        heading: "The Two Great Commandments",
        body: "When a lawyer asked Jesus which commandment is the greatest, Jesus answered, You shall love the Lord your God with all your heart and with all your soul and with all your mind, and, You shall love your neighbour as yourself; on these two commandments depend all the Law and the Prophets (Matthew 22:37-40). The first commandment, drawn from Deuteronomy 6:5, calls for total devotion to God: heart, soul and mind. The second, from Leviticus 19:18, extends that love to every neighbour. Jesus' summary shows that all God's commands are expressions of love, and that true religion is not ritual without love but love expressed in obedience. The apostle John wrote that whoever loves God must also love his brother, and that we cannot claim to love God while hating our brother (1 John 4:20-21). Paul likewise taught that love is the fulfilling of the Law (Romans 13:10). Christian ethics therefore begins with love, and every moral decision is tested by whether it loves God and loves the neighbour."
      },
      {
        heading: "Honesty and Truthfulness",
        body: "The Bible commands truthfulness in the ninth commandment, You shall not bear false witness against your neighbour (Exodus 20:16), and Jesus taught, Let what you say be simply Yes or No; anything more than this comes from evil (Matthew 5:37). Honesty covers speech, business dealings, examinations and public life: a Christian must not lie, cheat, forge results, bribe or bear false witness. The book of Proverbs says that lying lips are an abomination to the Lord, but those who act faithfully are His delight (Proverbs 12:22), and that a false balance is an abomination to the Lord, but a just weight is His delight (Proverbs 11:1). Ananias and Sapphira died for lying to the Holy Spirit about their gift (Acts 5:1-11), showing how seriously God takes dishonesty in His Church. Christians are to speak the truth in love (Ephesians 4:15), to be trustworthy in small things as well as great, and to remember that God sees every secret act, so that honesty is owed to God even when no human being is watching."
      },
      {
        heading: "Purity and Sexual Morality",
        body: "Christian teaching on purity is rooted in the creation of man and woman in God's image and in the command that marriage is between one man and one woman, in a lifelong, faithful union (Genesis 2:24; Matthew 19:4-6). The seventh commandment, You shall not commit adultery, and Jesus' teaching that lust in the heart is adultery (Matthew 5:27-28), show that purity concerns the heart as well as the body. Paul taught that the body is a temple of the Holy Spirit, and that sexual immorality sins against one's own body, so Christians should flee from it and glorify God in their bodies (1 Corinthians 6:18-20). Joseph's refusal of Potiphar's wife, saying, How then can I do this great wickedness and sin against God? (Genesis 39:9), is the classic Old Testament example of purity under pressure. Purity also covers modesty, self-control, and the wise use of the eyes, the mind and the media. The Church teaches that sexual relations belong within marriage, and that unmarried believers should live in chastity, trusting God's design for their good."
      },
      {
        heading: "Forgiveness and the Fruit of the Spirit",
        body: "Forgiveness is at the heart of Christian ethics because God has forgiven believers in Christ. Jesus taught His disciples to forgive seventy times seven (Matthew 18:21-22), and told the parable of the unforgiving servant, who was forgiven a huge debt yet refused to forgive a small one, to warn that those who will not forgive will not be forgiven (Matthew 18:23-35). Forgiveness does not mean pretending that wrong was not done, nor does it remove all consequences, but it releases the offender from the debt of personal vengeance and restores fellowship. The pattern of Christian character is the fruit of the Spirit: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness and self-control (Galatians 5:22-23). Against such things there is no law, because they are exactly what the Law aims at. The fruit grows not by human effort alone but by the Spirit's work in those who walk by the Spirit, in contrast to the works of the flesh, such as hatred, jealousy, fits of anger and selfish ambition, which Paul warns will not inherit the kingdom of God."
      }
    ],
    definitions: [
      { term: "Ethics", meaning: "The study of right and wrong conduct; Christian ethics is conduct shaped by God's commands and by love." },
      { term: "The two great commandments", meaning: "Love God with all your heart, soul and mind, and love your neighbour as yourself (Matthew 22:37-39)." },
      { term: "Purity", meaning: "Moral cleanness in thought, speech and conduct, especially in sexual matters." },
      { term: "Forgiveness", meaning: "Releasing a person from the debt of their offence, as God has forgiven us in Christ." },
      { term: "Fruit of the Spirit", meaning: "The character produced by the Holy Spirit in believers: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control." },
      { term: "Chastity", meaning: "Sexual purity, living according to God's design for marriage and singleness." }
    ],
    examples: [
      {
        title: "Applying the two great commandments",
        problem: "A student cheats in an examination and says it harms nobody. How would Christian ethics answer?",
        steps: ["Recall the first great commandment: love God with all your heart, soul and mind.", "Note that cheating dishonours God, who commands truthfulness.", "Recall the second commandment: love your neighbour as yourself.", "Note that cheating is unfair to honest students and corrupts trust.", "Conclude that cheating breaks both commandments, so it is wrong even if no one catches it."],
        answer: "Cheating breaks both great commandments: it dishonours God and is unfair to neighbours, so it is wrong."
      },
      {
        title: "Interpreting Joseph's example",
        problem: "What does Joseph's refusal of Potiphar's wife teach about purity?",
        steps: ["Recall that Potiphar's wife tempted Joseph day after day (Genesis 39:10).", "Note Joseph's reason: How can I do this great wickedness and sin against God?", "Note that he fled, leaving his garment behind.", "Recall that he suffered prison rather than compromise.", "Conclude that purity means seeing sin as an offence against God and fleeing from it, whatever the cost."],
        answer: "Joseph teaches that purity means seeing sexual sin as sin against God and fleeing from it, even at great personal cost."
      }
    ],
    tips: ["The two great commandments are Matthew 22:37-40; learn both quotations.", "The fruit of the Spirit is Galatians 5:22-23; learn all nine in order.", "Joseph in Genesis 39 is the classic example of purity; Ananias and Sapphira in Acts 5 are the warning against lying.", "Forgive seventy times seven (Matthew 18:22) means without limit."],
    mistakes: ["Saying Christian ethics is only about rules; it is love of God and neighbour expressed in obedience.", "Saying forgiveness means the wrong never happened; it releases the debt, it does not deny the wrong.", "Confusing the fruit of the Spirit with the gifts of the Spirit; the fruit is character, the gifts are abilities.", "Saying purity concerns only actions; Jesus taught it concerns the heart too."],
    facts: ["The greatest commandment is to love God with all your heart, soul and mind (Matthew 22:37).", "Lying lips are an abomination to the Lord (Proverbs 12:22).", "Joseph fled from Potiphar's wife, saying he would not sin against God (Genesis 39:9).", "Forgive seventy times seven (Matthew 18:22).", "The fruit of the Spirit includes love, joy, peace, patience, kindness, goodness, faithfulness, gentleness and self-control (Galatians 5:22-23)."],
    quiz: [
      { q: "What did Jesus say is the greatest commandment?", options: ["Keep the Sabbath", "Love the Lord your God with all your heart, soul and mind", "Offer sacrifices", "Honour your parents"], answer: 1, explanation: "The greatest commandment is to love the Lord your God with all your heart and with all your soul and with all your mind (Matthew 22:37)." },
      { q: "What is the second great commandment?", options: ["Love your neighbour as yourself", "Do not steal", "Do not commit adultery", "Pray without ceasing"], answer: 0, explanation: "The second great commandment is, You shall love your neighbour as yourself (Matthew 22:39)." },
      { q: "According to Romans 13:10, what is the fulfilling of the Law?", options: ["Sacrifice", "Love", "Prayer", "Fasting"], answer: 1, explanation: "Love does no wrong to a neighbour; therefore love is the fulfilling of the Law (Romans 13:10)." },
      { q: "Which commandment forbids bearing false witness?", options: ["The seventh", "The eighth", "The ninth", "The tenth"], answer: 2, explanation: "The ninth commandment is, You shall not bear false witness against your neighbour (Exodus 20:16)." },
      { q: "What did Jesus teach about Yes and No?", options: ["Let what you say be simply Yes or No", "Always say Yes to everyone", "Never say No", "Swear by heaven when you speak"], answer: 0, explanation: "Jesus taught, Let what you say be simply Yes or No; anything more than this comes from evil (Matthew 5:37)." },
      { q: "Who died for lying to the Holy Spirit about their gift?", options: ["Ananias and Sapphira", "Aquila and Priscilla", "Barnabas and Mark", "Peter and John"], answer: 0, explanation: "Ananias and Sapphira lied about the price of their land and fell dead for lying to the Holy Spirit (Acts 5:1-10)." },
      { q: "According to 1 Corinthians 6:19, what is the body of a believer?", options: ["A burden", "A temple of the Holy Spirit", "A prison", "A tool for work"], answer: 1, explanation: "Your body is a temple of the Holy Spirit within you, whom you have from God (1 Corinthians 6:19)." },
      { q: "What did Joseph say to Potiphar's wife when she tempted him?", options: ["I will tell your husband", "How can I do this great wickedness and sin against God?", "I am too busy", "I do not love you"], answer: 1, explanation: "Joseph said, How then can I do this great wickedness and sin against God? and fled (Genesis 39:9)." },
      { q: "According to Matthew 5:28, what is lust in the heart like?", options: ["Theft", "Adultery", "Murder", "Lying"], answer: 1, explanation: "Jesus taught that everyone who looks at a woman with lustful intent has already committed adultery with her in his heart (Matthew 5:28)." },
      { q: "How many times did Jesus say we should forgive?", options: ["Seven times", "Seventy times seven", "Three times", "Ten times"], answer: 1, explanation: "Jesus told Peter to forgive not seven times, but seventy times seven, meaning without limit (Matthew 18:22)." },
      { q: "In the parable of the unforgiving servant, what did the servant refuse to do?", options: ["Forgive a small debt owed to him", "Pay his taxes", "Work in the field", "Attend the feast"], answer: 0, explanation: "Though forgiven a huge debt, the servant refused to forgive a fellow servant a small debt, and was judged for it (Matthew 18:28-34)." },
      { q: "Which of these is part of the fruit of the Spirit?", options: ["Jealousy", "Self-control", "Selfish ambition", "Hatred"], answer: 1, explanation: "Self-control is part of the fruit of the Spirit listed in Galatians 5:22-23; jealousy, hatred and selfish ambition are works of the flesh." },
      { q: "How many qualities are listed in the fruit of the Spirit?", options: ["Seven", "Eight", "Nine", "Ten"], answer: 2, explanation: "The fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness and self-control: nine qualities (Galatians 5:22-23)." },
      { q: "According to Proverbs 11:1, what is an abomination to the Lord?", options: ["A false balance", "A loud voice", "A rich man", "A long journey"], answer: 0, explanation: "A false balance is an abomination to the Lord, but a just weight is His delight (Proverbs 11:1)." },
      { q: "According to 1 John 4:20, who cannot claim to love God?", options: ["One who hates his brother", "One who is poor", "One who is young", "One who lives far away"], answer: 0, explanation: "Whoever does not love his brother whom he has seen cannot love God whom he has not seen (1 John 4:20)." }
    ],
    status: "published"
  },
  {
    id: "crs-10",
    subjectId: "crs",
    topic: "Christian Ethics and Morality",
    subtopic: "Wealth, work and leadership",
    title: "Christian Attitudes to Wealth, Work and Leadership",
    order: 10,
    introduction: "The Bible has much to say about money, honest work and godly leadership. This lesson examines Christian teaching on wealth and poverty, the dignity of work, contentment, generosity, and the qualities of Christian leaders.",
    objectives: ["Explain Christian teaching on wealth and the love of money", "Describe the Christian attitude to work and laziness", "Explain contentment and generosity", "Describe the qualities of godly leadership", "Apply Christian ethics to leadership in school, church and society"],
    sections: [
      {
        heading: "Wealth and the Love of Money",
        body: "The Bible does not teach that money itself is evil; Abraham, Job and others were wealthy and faithful. What it warns against is the love of money, for the love of money is a root of all kinds of evils (1 Timothy 6:10). Jesus taught that no one can serve two masters, God and money, and that where a person's treasure is, there his heart will be also (Matthew 6:21, 24). The rich young ruler went away sorrowful because he had great possessions and could not give them up to follow Jesus (Matthew 19:16-22). The parable of the rich fool (Luke 12:16-21) warns the man who stored up treasure for himself but was not rich towards God, and the parable of the rich man and Lazarus (Luke 16:19-31) warns that wealth used without compassion brings judgement. Christians are to use wealth as stewards, remembering the poor, giving generously, and laying up treasure in heaven, where neither moth nor rust destroys (Matthew 6:19-20). Wealth is a trust from God, to be used for His glory and the good of others, not an idol to be worshipped."
      },
      {
        heading: "Work and Laziness",
        body: "Work is part of God's good design: before the Fall, God put Adam in the Garden of Eden to work it and keep it (Genesis 2:15), so work is not a curse but a calling. The Fall made work hard, with thorns and thistles and sweat, but it did not make work bad. Paul taught that if anyone is not willing to work, let him not eat (2 Thessalonians 3:10), and he warned against idleness and busybodies, setting his own example by working with his hands as a tentmaker so as not to burden the churches (Acts 18:3; 2 Thessalonians 3:7-9). The book of Proverbs contrasts the diligent, whose plans lead to plenty, with the sluggard, who is as a door turning on its hinges, always moving but never going anywhere (Proverbs 6:6-11; 13:4). Christians are to work heartily, as for the Lord and not for men (Colossians 3:23), whether in school, in a trade, or in the home, and to do their work honestly and excellently, as a witness to Christ. Honest work also provides for one's family and leaves something to share with those in need (Ephesians 4:28)."
      },
      {
        heading: "Contentment and Generosity",
        body: "Contentment is the opposite of the greed that the love of money produces. Paul wrote that godliness with contentment is great gain, for we brought nothing into the world, and we cannot take anything out of the world (1 Timothy 6:6-7), and that he had learned in whatever situation to be content, whether in plenty or in need (Philippians 4:11-12). The writer of Hebrews urged believers to keep their lives free from the love of money and be content with what they have, because God has said, I will never leave you nor forsake you (Hebrews 13:5). Generosity flows from contentment: the early Church shared its possessions so that there was not a needy person among them (Acts 4:34), and Paul taught that God loves a cheerful giver, and that whoever sows generously will also reap generously (2 Corinthians 9:6-7). The widow who gave two small coins gave more than the rich, Jesus said, because she gave out of her poverty all she had to live on (Mark 12:41-44). Christian giving is voluntary, cheerful and sacrificial, motivated by gratitude for God's gift of His Son."
      },
      {
        heading: "Godly Leadership",
        body: "Christian leadership is service, not domination. Jesus told His disciples that the rulers of the Gentiles lord it over them, but it shall not be so among you; whoever would be great among you must be your servant, and whoever would be first among you must be your slave, just as the Son of Man came not to be served but to serve, and to give His life as a ransom for many (Matthew 20:25-28). Moses, though the greatest leader of Israel, was described as very meek, more than all people on the face of the earth (Numbers 12:3), and he interceded for the people even when they rebelled. David was chosen as king because God looks on the heart, not on outward appearance (1 Samuel 16:7), and Nehemiah led by prayer, planning and personal example. Paul gave the qualifications for elders in 1 Timothy 3:1-7 and Titus 1:5-9: above reproach, faithful in marriage, sober-minded, self-controlled, respectable, hospitable, able to teach, not a drunkard, not violent but gentle, not quarrelsome, not a lover of money, and managing his household well. A Christian leader, whether a prefect, a pastor, a parent or a president, leads by example, serves others, speaks truthfully, and is accountable to God."
      }
    ],
    definitions: [
      { term: "Stewardship", meaning: "Managing wealth and resources as a trust from God, for His glory and the good of others." },
      { term: "Contentment", meaning: "Satisfaction with what God has given, free from greed and the love of money." },
      { term: "Generosity", meaning: "Willing, cheerful giving to others, especially the needy, out of gratitude to God." },
      { term: "Diligence", meaning: "Steady, careful and honest hard work." },
      { term: "Servant leadership", meaning: "Leading by serving others, following the example of Christ." },
      { term: "Elder", meaning: "A recognised leader of a local church, qualified by character and teaching ability." }
    ],
    examples: [
      {
        title: "Applying the teaching on wealth",
        problem: "A businessman says money is the root of all evil. Is he quoting the Bible correctly?",
        steps: ["Recall the exact words of 1 Timothy 6:10.", "Note that Paul says the love of money is a root of all kinds of evils, not that money itself is evil.", "Recall that faithful people such as Abraham and Job were wealthy.", "Note that the danger is loving money and serving it instead of God.", "Conclude that the businessman misquotes the verse; money is a trust, the love of it is the danger."],
        answer: "No; the Bible says the love of money is a root of all kinds of evils, not that money itself is evil."
      },
      {
        title: "Interpreting the widow's offering",
        problem: "Why did Jesus say the poor widow gave more than the rich?",
        steps: ["Recall that the rich gave out of their abundance (Mark 12:44).", "Note that the widow gave two small coins, all she had to live on.", "Recall Jesus' words: she put in more than all the others.", "Note that God measures giving by sacrifice, not by amount.", "Conclude that generosity is judged by what it costs the giver, not by its size."],
        answer: "The widow gave more because she gave all she had, while the rich gave only out of their abundance."
      }
    ],
    tips: ["Learn 1 Timothy 6:10 exactly: the love of money is a root of all kinds of evils.", "Work is God's design from Genesis 2:15, before the Fall.", "Godliness with contentment is great gain (1 Timothy 6:6).", "Christian leadership is service: the greatest must be the servant (Matthew 20:26-28)."],
    mistakes: ["Saying money is the root of all evil; the Bible says the love of money is.", "Saying work is a curse; work was given before the Fall, the Fall only made it hard.", "Saying the rich fool was judged for being rich; he was judged for storing up treasure for himself and not being rich towards God.", "Thinking leadership means lording it over others; Jesus taught it means serving."],
    facts: ["The love of money is a root of all kinds of evils (1 Timothy 6:10).", "God put Adam in the Garden of Eden to work it and keep it (Genesis 2:15).", "God loves a cheerful giver (2 Corinthians 9:7).", "The widow gave two small coins, all she had to live on (Mark 12:42-44).", "Moses was described as very meek, more than all people on the earth (Numbers 12:3)."],
    quiz: [
      { q: "According to 1 Timothy 6:10, what is a root of all kinds of evils?", options: ["Money itself", "The love of money", "Poverty", "Hard work"], answer: 1, explanation: "The love of money is a root of all kinds of evils; money itself is a trust, but loving it leads to evil." },
      { q: "According to Matthew 6:24, what can no one serve?", options: ["Two masters, God and money", "Two churches", "Two families", "Two kings"], answer: 0, explanation: "No one can serve two masters, for he will hate the one and love the other; you cannot serve God and money (Matthew 6:24)." },
      { q: "Why did the rich young ruler go away sorrowful?", options: ["Because he was ill", "Because he had great possessions he would not give up", "Because Jesus rebuked him", "Because he had no family"], answer: 1, explanation: "The young man went away sorrowful, for he had great possessions and could not sell them to follow Jesus (Matthew 19:22)." },
      { q: "In the parable of the rich fool, what did the man plan to do?", options: ["Give his goods to the poor", "Tear down his barns and build larger ones", "Leave his country", "Become a priest"], answer: 1, explanation: "The rich fool planned to tear down his barns and build larger ones to store his goods, but God required his soul that night (Luke 12:18-20)." },
      { q: "Where did God put Adam to work before the Fall?", options: ["In the wilderness", "In the Garden of Eden", "In the city of Enoch", "On Mount Sinai"], answer: 1, explanation: "The Lord God took the man and put him in the Garden of Eden to work it and keep it (Genesis 2:15)." },
      { q: "According to 2 Thessalonians 3:10, what should happen to one who is unwilling to work?", options: ["Let him not eat", "Let him be given more", "Let him be made a leader", "Let him rest"], answer: 0, explanation: "Paul taught, If anyone is not willing to work, let him not eat (2 Thessalonians 3:10)." },
      { q: "What trade did Paul practise to support himself?", options: ["Fishing", "Tentmaking", "Carpentry", "Pottery"], answer: 1, explanation: "Paul worked as a tentmaker, the same trade as Aquila and Priscilla, so as not to burden the churches (Acts 18:3)." },
      { q: "According to 1 Timothy 6:6, what is great gain?", options: ["Wealth and power", "Godliness with contentment", "Fame and honour", "Knowledge and wisdom"], answer: 1, explanation: "Godliness with contentment is great gain, for we brought nothing into the world and can take nothing out (1 Timothy 6:6-7)." },
      { q: "According to 2 Corinthians 9:7, whom does God love?", options: ["A cheerful giver", "A rich giver", "A reluctant giver", "A famous giver"], answer: 0, explanation: "God loves a cheerful giver, and each one must give as he has decided in his heart, not reluctantly or under compulsion (2 Corinthians 9:7)." },
      { q: "How much did the poor widow give in the Temple treasury?", options: ["Two small coins, all she had to live on", "A bag of gold", "A tenth of her income", "A sheep for sacrifice"], answer: 0, explanation: "The widow put in two small copper coins, which make a penny, all she had to live on, and Jesus said she gave more than all (Mark 12:42-44)." },
      { q: "What did Jesus say about greatness among His disciples?", options: ["The greatest must be the servant", "The greatest must be the richest", "The greatest must be the oldest", "The greatest must be the strongest"], answer: 0, explanation: "Whoever would be great among you must be your servant, and whoever would be first must be your slave (Matthew 20:26-27)." },
      { q: "Why was David chosen as king, according to 1 Samuel 16:7?", options: ["Because he was tall", "Because he was the eldest", "Because God looks on the heart", "Because he was a soldier"], answer: 2, explanation: "Man looks on the outward appearance, but the Lord looks on the heart (1 Samuel 16:7)." },
      { q: "What did Moses show when he interceded for rebellious Israel?", options: ["Anger and revenge", "Meekness and selfless leadership", "Indifference", "Fear of Pharaoh"], answer: 1, explanation: "Moses was very meek, and he interceded for the people even when they rebelled, pleading for God's mercy (Numbers 12:3; Exodus 32:11-14)." },
      { q: "According to Colossians 3:23, how should Christians work?", options: ["As for the Lord and not for men", "Only when watched", "Only for money", "Only on holy days"], answer: 0, explanation: "Whatever you do, work heartily, as for the Lord and not for men (Colossians 3:23)." },
      { q: "In the parable of the rich man and Lazarus, who was the poor beggar?", options: ["The rich man", "Lazarus", "Abraham", "The steward"], answer: 1, explanation: "Lazarus was the poor beggar at the rich man's gate, and after death he was comforted while the rich man was in torment (Luke 16:19-25)." }
    ],
    status: "published"
  },
  {
    id: "crs-11",
    subjectId: "crs",
    topic: "Religion and Society",
    subtopic: "Christians and the state",
    title: "Religion and the State: Christians in Society",
    order: 11,
    introduction: "Christians live as citizens of two kingdoms: the kingdom of God and the state in which they live. This lesson examines what the Bible teaches about authority, obedience, paying taxes, and serving society, including the Christian response to unjust laws.",
    objectives: ["Explain Romans 13 on submission to governing authorities", "Describe Jesus' teaching on taxes: render to Caesar", "Explain the Christian duty to pray for rulers", "Describe the limits of obedience when laws conflict with God's commands", "Explain the Christian contribution to society: justice, peace and service"],
    sections: [
      {
        heading: "Submission to Governing Authorities",
        body: "Paul taught in Romans 13:1-7 that every person should be subject to the governing authorities, for there is no authority except from God, and those that exist have been instituted by God. The ruler is God's servant for the good of the people, bearing the sword to punish wrongdoers and to protect the innocent. Christians are therefore to obey the law, pay taxes, show respect and honour to whom they are due, and do so not only to avoid punishment but for the sake of conscience. Peter gave the same teaching: be subject for the Lord's sake to every human institution, whether to the emperor as supreme, or to governors, honour everyone, love the brotherhood, fear God, honour the emperor (1 Peter 2:13-17). This teaching applies even when rulers are imperfect, because authority itself is ordained by God for order and justice. Christians should therefore be model citizens: law-abiding, tax-paying, respectful, and eager to do good in their communities."
      },
      {
        heading: "Render to Caesar: Taxes and Loyalty",
        body: "When the Pharisees and Herodians tried to trap Jesus, asking whether it was lawful to pay taxes to Caesar, Jesus asked for a denarius and said, Whose likeness and inscription is this? They said, Caesar's. Then Jesus answered, Render to Caesar the things that are Caesar's, and to God the things that are God's (Mark 12:13-17). The answer avoided the trap: paying taxes to a pagan emperor was not disloyalty to God, because the coin bore Caesar's image, while human beings bear God's image and belong to Him. Christians therefore pay their taxes, obey the laws of the land, and respect the offices of the state, while giving to God what belongs to God: worship, obedience and their whole lives. Jesus Himself paid the Temple tax, though as the Son He was free, so as not to give offence (Matthew 17:24-27). The teaching shows that loyalty to God and loyalty to the state are not in conflict when each is given its proper place."
      },
      {
        heading: "Prayer for Rulers and the Limits of Obedience",
        body: "Paul urged that supplications, prayers, intercessions and thanksgivings be made for all people, for kings and all who are in high positions, that we may lead a peaceful and quiet life, godly and dignified in every way (1 Timothy 2:1-2). Christians pray for their rulers whether they agree with them or not, because God can guide their hearts and because peace allows the gospel to spread. Yet obedience to the state has a limit: when human law commands what God forbids, or forbids what God commands, Christians must obey God rather than men. When the Sanhedrin ordered Peter and John not to speak in the name of Jesus, they answered, Whether it is right in the sight of God to listen to you rather than to God, you must judge, for we cannot but speak of what we have seen and heard (Acts 4:19-20), and later, We must obey God rather than men (Acts 5:29). Daniel's friends refused to worship Nebuchadnezzar's golden image, and Daniel continued to pray though it was forbidden (Daniel 3, 6). The limit is narrow: it applies only when a law directly contradicts God's command, and even then the Christian disobeys respectfully and accepts the consequences."
      },
      {
        heading: "Christians as Salt and Light in Society",
        body: "Jesus called His disciples the salt of the earth and the light of the world, and told them to let their light shine before others, so that they may see their good works and give glory to the Father in heaven (Matthew 5:13-16). Salt preserves and flavours; light reveals and guides. Christians serve society by doing good works: caring for the poor, the sick, the widow and the orphan, as James defines pure religion (James 1:27); working for justice, as the prophets demanded, let justice roll down like waters (Amos 5:24); making peace, for blessed are the peacemakers (Matthew 5:9); and speaking truth to power with respect, as Nathan did to David and John the Baptist did to Herod. Christians may serve in government, in the military, in business and in every honest calling, bringing the values of the kingdom into public life. They do not seek to impose the faith by force, but to commend it by a life of integrity, service and love, so that society is better for their presence."
      }
    ],
    definitions: [
      { term: "Governing authorities", meaning: "Rulers and governments, instituted by God for order and justice (Romans 13:1)." },
      { term: "Render to Caesar", meaning: "Give to the state what belongs to it, and to God what belongs to God (Mark 12:17)." },
      { term: "Civil disobedience", meaning: "Refusing to obey a law that contradicts God's command, while accepting the consequences." },
      { term: "Salt of the earth", meaning: "Jesus' description of believers as a preserving and flavouring influence in society." },
      { term: "Light of the world", meaning: "Jesus' description of believers as those who show God's truth and goodness to the world." },
      { term: "Pure religion", meaning: "Caring for orphans and widows in their affliction and keeping oneself unstained by the world (James 1:27)." }
    ],
    examples: [
      {
        title: "Applying Romans 13",
        problem: "A Christian is asked whether believers must obey a government they did not vote for. How would you answer from Romans 13?",
        steps: ["Recall Romans 13:1: there is no authority except from God.", "Note that Paul wrote this under the Roman emperor, not a Christian ruler.", "Recall that the ruler is God's servant for good, to punish wrongdoers.", "Note that obedience is for conscience's sake, not only to avoid punishment.", "Conclude that Christians obey the government as God's institution, whatever its politics, unless it commands what God forbids."],
        answer: "Christians obey governing authorities as instituted by God, even imperfect ones, unless a law contradicts God's command."
      },
      {
        title: "Tracing the limits of obedience",
        problem: "When is it right for a Christian to disobey the state?",
        steps: ["Recall Peter's words: we must obey God rather than men (Acts 5:29).", "Note the context: the Sanhedrin forbade preaching in Jesus' name.", "Recall Daniel, who kept praying though it was forbidden (Daniel 6).", "Note that in each case the law directly contradicted God's command.", "Conclude that disobedience is right only when a law commands what God forbids or forbids what God commands, and it must be respectful and costly."],
        answer: "A Christian may disobey only when a law directly contradicts God's command, and must accept the consequences."
      }
    ],
    tips: ["Romans 13:1 is the key text: there is no authority except from God.", "Render to Caesar is Mark 12:17; the coin bore Caesar's image, we bear God's.", "We must obey God rather than men is Acts 5:29.", "Salt and light are Matthew 5:13-16; know what each image means."],
    mistakes: ["Saying Christians must obey every law without exception; obedience to God comes first.", "Saying Christians should not pay taxes to a non-Christian government; Jesus taught the opposite.", "Confusing the Sanhedrin's order with God's command in Acts 4-5.", "Saying salt and light mean withdrawing from society; they mean serving within it."],
    facts: ["There is no authority except from God (Romans 13:1).", "Render to Caesar the things that are Caesar's, and to God the things that are God's (Mark 12:17).", "We must obey God rather than men (Acts 5:29).", "Christians are the salt of the earth and the light of the world (Matthew 5:13-14).", "Pure religion is visiting orphans and widows in their affliction (James 1:27)."],
    quiz: [
      { q: "According to Romans 13:1, where does governing authority come from?", options: ["From the people only", "From God", "From military power", "From tradition"], answer: 1, explanation: "There is no authority except from God, and those that exist have been instituted by God (Romans 13:1)." },
      { q: "According to Romans 13, what is the ruler?", options: ["God's servant for good", "A threat to the Church", "A replacement for God", "A mere tax collector"], answer: 0, explanation: "The ruler is God's servant for your good, bearing the sword to punish the wrongdoer (Romans 13:4)." },
      { q: "What did Jesus say about paying taxes to Caesar?", options: ["Never pay taxes", "Render to Caesar the things that are Caesar's", "Pay taxes only to Jewish rulers", "Taxes are a sin"], answer: 1, explanation: "Jesus said, Render to Caesar the things that are Caesar's, and to God the things that are God's (Mark 12:17)." },
      { q: "Whose image was on the denarius Jesus asked about?", options: ["God's", "Caesar's", "Herod's", "Pilate's"], answer: 1, explanation: "The coin bore Caesar's likeness and inscription, so it belonged to Caesar, while people bear God's image (Mark 12:16-17)." },
      { q: "According to 1 Timothy 2:2, why should Christians pray for rulers?", options: ["So that we may lead a peaceful and quiet life", "So that rulers become rich", "So that Christians avoid taxes", "So that wars begin"], answer: 0, explanation: "Pray for kings and all in high positions, that we may lead a peaceful and quiet life, godly and dignified (1 Timothy 2:1-2)." },
      { q: "What did Peter and John say when ordered not to preach in Jesus' name?", options: ["We must obey God rather than men", "We will obey you", "We will leave Jerusalem", "We will pay a fine"], answer: 0, explanation: "Peter and John said they could not but speak of what they had seen and heard, and later, We must obey God rather than men (Acts 4:20; 5:29)." },
      { q: "Who continued to pray to God though the king had forbidden it?", options: ["Joseph", "Daniel", "Nehemiah", "Ezra"], answer: 1, explanation: "Daniel continued to pray three times a day to God, though the king's decree forbade it, and was thrown into the lions' den (Daniel 6:10-16)." },
      { q: "Who refused to worship Nebuchadnezzar's golden image?", options: ["Daniel's three friends, Shadrach, Meshach and Abednego", "The prophets of Baal", "The elders of Israel", "The priests of Egypt"], answer: 0, explanation: "Shadrach, Meshach and Abednego refused to worship the golden image and were thrown into the fiery furnace (Daniel 3:12-18)." },
      { q: "What did Jesus call His disciples in Matthew 5:13-14?", options: ["The salt of the earth and the light of the world", "The builders of the Temple", "The judges of Israel", "The soldiers of Rome"], answer: 0, explanation: "Jesus said, You are the salt of the earth and You are the light of the world (Matthew 5:13-14)." },
      { q: "According to James 1:27, what is pure religion?", options: ["Visiting orphans and widows in their affliction", "Building large churches", "Wearing fine clothes", "Offering many sacrifices"], answer: 0, explanation: "Religion that is pure and undefiled before God is to visit orphans and widows in their affliction and to keep oneself unstained (James 1:27)." },
      { q: "According to Amos 5:24, what should roll down like waters?", options: ["Money", "Justice", "Rain", "Armies"], answer: 1, explanation: "Let justice roll down like waters, and righteousness like an ever-flowing stream (Amos 5:24)." },
      { q: "Who are blessed, according to Matthew 5:9?", options: ["The rich", "The peacemakers", "The powerful", "The famous"], answer: 1, explanation: "Blessed are the peacemakers, for they shall be called sons of God (Matthew 5:9)." },
      { q: "According to 1 Peter 2:17, what should Christians do to the emperor?", options: ["Honour him", "Ignore him", "Overthrow him", "Fear him above God"], answer: 0, explanation: "Honour everyone, love the brotherhood, fear God, honour the emperor (1 Peter 2:17)." },
      { q: "What did Jesus do about the Temple tax in Matthew 17?", options: ["He refused to pay it", "He paid it so as not to give offence", "He told Peter to fight the collectors", "He abolished the tax"], answer: 1, explanation: "Jesus paid the Temple tax, providing the coin from a fish's mouth, so as not to give offence (Matthew 17:24-27)." },
      { q: "What did John the Baptist do to Herod?", options: ["He praised him", "He rebuked him for taking his brother's wife", "He crowned him king", "He baptised him"], answer: 1, explanation: "John rebuked Herod for taking Herodias, his brother's wife, and for all the evil he had done (Luke 3:19)." }
    ],
    status: "published"
  },
  {
    id: "crs-12",
    subjectId: "crs",
    topic: "Religion and Society",
    subtopic: "Inter-religious dialogue and tolerance",
    title: "Inter-Religious Dialogue and Religious Tolerance",
    order: 12,
    introduction: "Nigeria is home to Christians, Muslims and traditional worshippers living side by side. This lesson examines Christian teaching on relating to people of other faiths: truth without hatred, dialogue without compromise, and tolerance without surrender of conviction.",
    objectives: ["Explain the Christian basis for religious tolerance", "Describe the difference between tolerance and compromise", "Explain the biblical examples of relating to people of other faiths", "Describe the role of Christians in promoting peace in a multi-religious society", "Explain the limits of tolerance: truth, justice and the protection of life"],
    sections: [
      {
        heading: "The Christian Basis for Tolerance",
        body: "Christian tolerance is rooted in the dignity of every person as made in the image of God (Genesis 1:27), in the command to love one's neighbour (Matthew 22:39), and in Jesus' teaching to love even enemies and pray for persecutors (Matthew 5:44). It is also rooted in the nature of faith itself: genuine faith cannot be forced, for God desires worship in spirit and in truth (John 4:24), and the gospel is spread by witness and persuasion, not by the sword. Paul reasoned with people in the synagogues and the marketplace, persuading them about the kingdom of God (Acts 17:2; 19:8), and Peter taught believers to be prepared to give a reason for the hope within them, yet to do so with gentleness and respect (1 Peter 3:15). Christians therefore defend freedom of religion, not only for themselves but for others, because every person will give account to God for their own conscience. Tolerance, in the Christian sense, means respecting the dignity and freedom of people whose beliefs differ from ours, while remaining faithful to the truth ourselves."
      },
      {
        heading: "Tolerance and Compromise: The Difference",
        body: "Tolerance is not the same as compromise. Tolerance respects the person; compromise surrenders the truth. Christians can live peacefully with Muslims, traditional worshippers and people of other faiths, sharing meals, working together, and cooperating for the good of the community, without agreeing that all religions teach the same thing. Jesus said, I am the way, and the truth, and the life; no one comes to the Father except through me (John 14:6), and the apostles preached that there is salvation in no one else (Acts 4:12). A Christian who denies this to please others has compromised the faith, not shown tolerance. At the same time, a Christian who hates, insults or attacks people of another faith has failed in love, whatever truth they claim to defend. The balance is clear: hold firmly to the truth of Christ, and treat every person with the love and respect that their dignity as God's image-bearers demands. Paul's example in Athens (Acts 17) shows this balance: he respected the Athenians' religiosity, quoted their poets, and yet clearly proclaimed the one true God and the resurrection."
      },
      {
        heading: "Biblical Examples of Relating to Other Faiths",
        body: "The Bible gives several examples of godly people living among other faiths. Daniel and his friends served faithfully in the Babylonian court, eating the king's food only where it did not violate God's law, and they were respected for their wisdom and integrity (Daniel 1). Naaman, the Syrian commander, was healed by Elisha and returned to Syria worshipping the God of Israel, while asking for understanding about his duties in the temple of Rimmon (2 Kings 5). The centurion in Capernaum, a Roman officer, showed such faith that Jesus marvelled and said He had not found such faith in Israel (Matthew 8:10). The Ethiopian eunuch, a foreigner and an official of another court, was baptised by Philip after hearing the gospel (Acts 8). In each case, the believer neither withdrew from society nor adopted the surrounding religion, but lived faithfully and winsomely among people of other faiths. The Old Testament also protected the foreigner: You shall not oppress a sojourner, for you know the heart of a sojourner, for you were sojourners in the land of Egypt (Exodus 23:9)."
      },
      {
        heading: "Christians and Peace in a Multi-Religious Society",
        body: "In a country like Nigeria, where Christians and Muslims live side by side, Christians have a special calling to be peacemakers. Paul taught, If possible, so far as it depends on you, live peaceably with all (Romans 12:18), and Jesus blessed the peacemakers as sons of God. This means refusing to spread rumours or hate speech, refusing to take revenge when provoked, and working with neighbours of other faiths for common goods: clean water, good schools, honest government and the protection of life. Inter-religious dialogue, when done honestly, helps communities understand one another, correct false rumours, and cooperate against common problems such as poverty and violence. Dialogue does not require agreement on doctrine, and it must never be used to hide persecution or injustice. Christians also have a duty to protect the vulnerable of every faith, because the Good Samaritan crossed religious lines to help a stranger, and because God commands justice for the sojourner, the widow and the orphan. Peace in a multi-religious society is built by truthful witness, respectful dialogue, and practical love, not by pretending that real differences do not exist."
      }
    ],
    definitions: [
      { term: "Religious tolerance", meaning: "Respecting the dignity and freedom of people of other faiths, while holding firmly to one's own beliefs." },
      { term: "Inter-religious dialogue", meaning: "Honest conversation between people of different faiths to promote understanding and cooperation." },
      { term: "Compromise", meaning: "Surrendering essential truth for the sake of agreement; different from tolerance." },
      { term: "Peacemaker", meaning: "One who actively works for peace and reconciliation between people." },
      { term: "Sojourner", meaning: "A foreigner living among God's people, to be treated with justice and kindness." },
      { term: "Hate speech", meaning: "Speech that attacks or demeans people because of their religion or identity; Christians must refuse it." }
    ],
    examples: [
      {
        title: "Applying Paul's example in Athens",
        problem: "How did Paul show both respect and truth in Athens?",
        steps: ["Recall that Paul was in Athens, a city full of idols (Acts 17:16).", "Note that he did not begin by insulting the Athenians.", "Recall that he said, I perceive that in every way you are very religious, and quoted their poets.", "Note that he then proclaimed the one true God and the resurrection of Jesus.", "Conclude that Paul combined respect for his hearers with a clear proclamation of the truth."],
        answer: "Paul respected the Athenians, used their own words, and yet clearly proclaimed the one true God and Christ's resurrection."
      },
      {
        title: "Distinguishing tolerance from compromise",
        problem: "A Christian is asked to say that all religions lead to God. Is agreeing an act of tolerance?",
        steps: ["Recall Jesus' words: I am the way, and the truth, and the life (John 14:6).", "Recall that there is salvation in no one else (Acts 4:12).", "Note that tolerance respects the person, not every claim.", "Note that agreeing would surrender the gospel itself.", "Conclude that refusing to agree is faithfulness, not intolerance, while hating the questioner would be."],
        answer: "Agreeing would be compromise, not tolerance; a Christian can respect the person while holding firmly to Christ as the only way."
      }
    ],
    tips: ["Tolerance respects the person; compromise surrenders the truth.", "Paul's Athens sermon is Acts 17; know how he combined respect with clear proclamation.", "I am the way, and the truth, and the life is John 14:6.", "Live peaceably with all, so far as it depends on you (Romans 12:18)."],
    mistakes: ["Saying tolerance means all religions are equally true; it means respecting people, not agreeing with every belief.", "Saying Christians should force their faith on others; faith cannot be forced.", "Confusing dialogue with compromise; dialogue seeks understanding, not surrender.", "Forgetting that the Good Samaritan crossed religious lines to help a stranger."],
    facts: ["Every person is made in the image of God (Genesis 1:27).", "Jesus said, I am the way, and the truth, and the life (John 14:6).", "Paul reasoned with people in Athens about the unknown God (Acts 17:22-31).", "If possible, live peaceably with all (Romans 12:18).", "Give a reason for your hope with gentleness and respect (1 Peter 3:15)."],
    quiz: [
      { q: "According to Genesis 1:27, in whose image was every human being made?", options: ["Adam's image", "The image of God", "The image of angels", "The image of kings"], answer: 1, explanation: "God created man in His own image, male and female, giving every person dignity (Genesis 1:27)." },
      { q: "What did Jesus say in John 14:6 about the way to the Father?", options: ["I am the way, and the truth, and the life", "All roads lead to God", "The Law is the only way", "The Temple is the only way"], answer: 0, explanation: "Jesus said, I am the way, and the truth, and the life; no one comes to the Father except through me (John 14:6)." },
      { q: "According to Acts 4:12, where is salvation found?", options: ["In no one else but Jesus", "In every religion equally", "In the Temple only", "In good works alone"], answer: 0, explanation: "There is salvation in no one else, for there is no other name under heaven given among men by which we must be saved (Acts 4:12)." },
      { q: "How did Paul approach the Athenians in Acts 17?", options: ["By insulting their religion", "By respecting their religiosity and proclaiming the true God", "By ignoring them", "By destroying their idols"], answer: 1, explanation: "Paul said the Athenians were very religious, quoted their poets, and proclaimed the one true God and the resurrection (Acts 17:22-31)." },
      { q: "According to 1 Peter 3:15, how should Christians give a reason for their hope?", options: ["With gentleness and respect", "With anger and force", "With silence", "With threats"], answer: 0, explanation: "Be prepared to give a reason for the hope within you, yet do it with gentleness and respect (1 Peter 3:15)." },
      { q: "What did Jesus teach about enemies in Matthew 5:44?", options: ["Hate them", "Love them and pray for them", "Ignore them", "Take revenge on them"], answer: 1, explanation: "Jesus said, Love your enemies and pray for those who persecute you (Matthew 5:44)." },
      { q: "Who served faithfully in the Babylonian court while keeping God's law?", options: ["Daniel and his friends", "The prophets of Baal", "The elders of Judah", "The priests of Egypt"], answer: 0, explanation: "Daniel, Shadrach, Meshach and Abednego served in Babylon with wisdom and integrity, refusing food that defiled them (Daniel 1)." },
      { q: "Who was the Syrian commander healed by Elisha?", options: ["Ben-Hadad", "Naaman", "Hazael", "Gehazi"], answer: 1, explanation: "Naaman, commander of the army of Syria, was healed of leprosy by washing in the Jordan at Elisha's word (2 Kings 5:14)." },
      { q: "According to Romans 12:18, how should Christians live with others?", options: ["Live peaceably with all, so far as it depends on you", "Avoid all contact", "Fight for your rights", "Live only with believers"], answer: 0, explanation: "If possible, so far as it depends on you, live peaceably with all (Romans 12:18)." },
      { q: "What did the Good Samaritan do that crossed religious lines?", options: ["He helped a wounded stranger of another people", "He built a temple", "He preached in a synagogue", "He collected taxes"], answer: 0, explanation: "The Samaritan, a despised outsider, stopped to help a wounded Jew, showing mercy across religious and ethnic lines (Luke 10:33-34)." },
      { q: "According to Exodus 23:9, how should the sojourner be treated?", options: ["Oppressed", "Not oppressed, for Israel knew the heart of a sojourner", "Driven away", "Taxed more heavily"], answer: 1, explanation: "You shall not oppress a sojourner, for you know the heart of a sojourner, for you were sojourners in Egypt (Exodus 23:9)." },
      { q: "What does Christian tolerance mean?", options: ["Agreeing that all religions are equally true", "Respecting the dignity and freedom of people of other faiths while holding to the truth", "Hiding one's faith in public", "Forcing others to believe"], answer: 1, explanation: "Tolerance respects the person and their freedom, while the Christian remains faithful to the truth of Christ." },
      { q: "Who was the Roman centurion whose faith Jesus marvelled at?", options: ["Cornelius", "The centurion of Capernaum", "Julius", "Claudius"], answer: 1, explanation: "The centurion in Capernaum trusted Jesus' word to heal his servant, and Jesus said He had not found such faith in Israel (Matthew 8:5-10)." },
      { q: "What is the purpose of inter-religious dialogue?", options: ["To surrender one's beliefs", "To promote understanding and cooperation between faiths", "To convert by force", "To avoid all contact"], answer: 1, explanation: "Honest dialogue helps communities understand one another, correct false rumours, and cooperate for the common good." },
      { q: "Who was baptised by Philip on the road to Gaza?", options: ["The Ethiopian eunuch", "The centurion Cornelius", "The jailer of Philippi", "Simon the sorcerer"], answer: 0, explanation: "Philip explained Isaiah to the Ethiopian eunuch and baptised him when they came to water (Acts 8:26-39)." }
    ],
    status: "published"
  },
  {
    id: "crs-13",
    subjectId: "crs",
    topic: "The New Testament Writings",
    subtopic: "The Gospels and the Acts of the Apostles",
    title: "The Gospels and the Acts of the Apostles",
    order: 13,
    introduction: "The New Testament opens with four Gospels telling the story of Jesus from four angles, followed by Acts, the story of the Church's beginnings. This lesson explains how the Gospels differ, what each emphasises, and how Acts continues the story.",
    objectives: ["Name the four Gospels and their authors", "Explain the distinctive emphasis of each Gospel", "Describe the Synoptic problem and the special material in John", "Explain the structure and purpose of the Acts of the Apostles", "Use the Gospels and Acts together to trace the story of Jesus and the Church"],
    sections: [
      {
        heading: "The Four Gospels",
        body: "The New Testament contains four Gospels: Matthew, Mark, Luke and John. Matthew, written for Jewish readers, presents Jesus as the promised Messiah and King, the Son of David, fulfilling the Old Testament prophecies; it opens with a genealogy from Abraham and records the Sermon on the Mount and the Great Commission. Mark, the shortest Gospel, presents Jesus as the Servant who came to serve and to give His life as a ransom, moving quickly from one action to another with the word immediately; tradition links Mark with Peter's preaching in Rome. Luke, written by the physician and companion of Paul, presents Jesus as the Saviour of all people, with special concern for the poor, women, Samaritans and Gentiles; it contains the parables of the Good Samaritan and the Prodigal Son, found only in Luke. John, written last, presents Jesus as the eternal Word made flesh, the Son of God, and records the seven I am sayings and long discourses, with the stated purpose that readers may believe that Jesus is the Christ, the Son of God, and have life in His name (John 20:31)."
      },
      {
        heading: "The Synoptic Gospels and John",
        body: "Matthew, Mark and Luke are called the Synoptic Gospels, from a Greek word meaning seen together, because they share much material and can be laid side by side to compare. They tell the story in a similar order, with parables, miracles and the same outline of Jesus' ministry from Galilee to Jerusalem. Mark is generally regarded as the earliest, and Matthew and Luke both used Mark and a collection of Jesus' sayings, while adding material of their own. John is different: it covers three Passovers, records long conversations such as those with Nicodemus and the Samaritan woman, and focuses on who Jesus is rather than on the sequence of events. The differences are not contradictions but complementary portraits: the same Jesus seen from four angles, like four witnesses describing one person. Together, the four Gospels give a fuller picture of Jesus than any one of them could alone."
      },
      {
        heading: "The Acts of the Apostles",
        body: "Acts, written by Luke as the second part of his work, continues the story where his Gospel ends. It opens with the ascension and the promise of the Spirit, follows the Church from Jerusalem to Rome, and is structured by Jesus' own outline in Acts 1:8: witness in Jerusalem (chapters 1-7), in all Judea and Samaria (chapters 8-12), and to the end of the earth (chapters 13-28). Its leading figures are Peter in the first half, preaching to Jews and then to the Gentile Cornelius, and Paul in the second half, carrying the gospel to the Gentiles. Acts shows how the gospel crossed barriers of language at Pentecost, of race in the conversion of the Ethiopian eunuch and Cornelius, and of geography in Paul's journeys to Rome. It also shows the Church's life: prayer, the breaking of bread, fellowship, generosity, and the guidance of the Holy Spirit in every decision. Acts is both history and theology: it records what happened, and it shows that the mission of the Church is the work of the risen Christ through His Spirit."
      },
      {
        heading: "The Gospels and Acts in Christian Life",
        body: "The Gospels and Acts are the foundation of Christian faith and practice: they tell believers who Jesus is, what He did, and how the Church began. Christians read the Gospels to know Jesus, to hear His teaching, and to follow His example; they read Acts to see how the first believers lived, prayed, suffered and spread the gospel, and to take courage for the mission today. The Great Commission in Matthew 28:18-20, Go therefore and make disciples of all nations, baptising them in the name of the Father and of the Son and of the Holy Spirit, remains the Church's marching order. The Gospels also correct misunderstandings: Jesus is not only a teacher or a prophet, but the Son of God and the Saviour of the world, and the Church is not a human invention but the body Christ founded and the Spirit empowers. For the JAMB candidate, knowing the authors, emphases and contents of each Gospel, and the structure of Acts, is essential for answering questions on the New Testament writings."
      }
    ],
    definitions: [
      { term: "Gospel", meaning: "Good news; one of the four books telling the life, death and resurrection of Jesus." },
      { term: "Synoptic Gospels", meaning: "Matthew, Mark and Luke, called synoptic because they share much material and can be seen together." },
      { term: "Great Commission", meaning: "Jesus' command to make disciples of all nations (Matthew 28:18-20)." },
      { term: "Messiah", meaning: "The Anointed One promised in the Old Testament, fulfilled in Jesus." },
      { term: "I am sayings", meaning: "Jesus' seven self-descriptions in John, such as I am the bread of life and I am the good shepherd." },
      { term: "Acts of the Apostles", meaning: "Luke's second book, telling the story of the early Church from Pentecost to Paul in Rome." }
    ],
    examples: [
      {
        title: "Distinguishing the Gospels",
        problem: "A question asks which Gospel presents Jesus as the Servant. How would you answer?",
        steps: ["Recall that Mark is the shortest Gospel and moves quickly from action to action.", "Note Mark's key verse: the Son of Man came not to be served but to serve (Mark 10:45).", "Recall that Mark records few long discourses and many deeds.", "Note that tradition links Mark with Peter's preaching in Rome.", "Conclude that Mark presents Jesus as the Servant who gives His life as a ransom."],
        answer: "Mark presents Jesus as the Servant, whose life was given as a ransom for many (Mark 10:45)."
      },
      {
        title: "Tracing the structure of Acts",
        problem: "How does Acts 1:8 structure the book of Acts?",
        steps: ["Recall the verse: you will be my witnesses in Jerusalem, in all Judea and Samaria, and to the end of the earth.", "Note that chapters 1-7 are set in Jerusalem.", "Note that chapters 8-12 cover Judea and Samaria.", "Note that chapters 13-28 follow Paul to the end of the earth, ending in Rome.", "Conclude that the verse is the outline of the whole book."],
        answer: "Acts 1:8 outlines the book: Jerusalem in chapters 1-7, Judea and Samaria in chapters 8-12, and the ends of the earth in chapters 13-28."
      }
    ],
    tips: ["Matthew = King and Messiah for Jews; Mark = Servant; Luke = Saviour of all; John = Son of God.", "The Synoptic Gospels are Matthew, Mark and Luke; John is different.", "John 20:31 states John's purpose: that you may believe Jesus is the Christ.", "Acts 1:8 is the outline of Acts: Jerusalem, Judea and Samaria, the ends of the earth."],
    mistakes: ["Saying there are three Gospels; there are four.", "Confusing Mark with Matthew; Mark is the shortest and presents Jesus as Servant.", "Saying Acts was written by Paul; it was written by Luke.", "Forgetting that the parables of the Good Samaritan and the Prodigal Son are found only in Luke."],
    facts: ["The four Gospels are Matthew, Mark, Luke and John.", "Mark is the shortest Gospel.", "Luke was a physician and a companion of Paul (Colossians 4:14).", "John's stated purpose is that readers may believe Jesus is the Christ, the Son of God (John 20:31).", "Acts ends with Paul preaching in Rome without hindrance (Acts 28:30-31)."],
    quiz: [
      { q: "How many Gospels are there in the New Testament?", options: ["Two", "Three", "Four", "Five"], answer: 2, explanation: "There are four Gospels: Matthew, Mark, Luke and John." },
      { q: "Which Gospel presents Jesus as the promised Messiah and King, the Son of David?", options: ["Mark", "Luke", "Matthew", "John"], answer: 2, explanation: "Matthew presents Jesus as the Messiah and King, opening with a genealogy from Abraham and David and showing how He fulfilled prophecy." },
      { q: "Which Gospel is the shortest?", options: ["Matthew", "Mark", "Luke", "John"], answer: 1, explanation: "Mark is the shortest Gospel, moving quickly from one action to another." },
      { q: "Which Gospel presents Jesus as the Servant who came to give His life as a ransom?", options: ["Matthew", "Mark", "Luke", "John"], answer: 1, explanation: "Mark presents Jesus as the Servant: the Son of Man came not to be served but to serve, and to give His life as a ransom (Mark 10:45)." },
      { q: "Which Gospel was written by a physician?", options: ["Matthew", "Mark", "Luke", "John"], answer: 2, explanation: "Luke was a physician and a companion of Paul (Colossians 4:14)." },
      { q: "In which Gospel alone are the parables of the Good Samaritan and the Prodigal Son found?", options: ["Matthew", "Mark", "Luke", "John"], answer: 2, explanation: "The Good Samaritan and the Prodigal Son are found only in Luke's Gospel (Luke 10:25-37; 15:11-32)." },
      { q: "What are Matthew, Mark and Luke together called?", options: ["The Synoptic Gospels", "The Pastoral Epistles", "The Catholic Epistles", "The Minor Prophets"], answer: 0, explanation: "Matthew, Mark and Luke are called the Synoptic Gospels because they share much material and can be seen together." },
      { q: "What is the stated purpose of John's Gospel, according to John 20:31?", options: ["To record the genealogy of Jesus", "That you may believe that Jesus is the Christ, the Son of God", "To describe the Temple", "To list the apostles"], answer: 1, explanation: "John wrote so that you may believe that Jesus is the Christ, the Son of God, and that by believing you may have life in His name (John 20:31)." },
      { q: "Who wrote the Acts of the Apostles?", options: ["Paul", "Peter", "Luke", "John"], answer: 2, explanation: "Luke wrote Acts as the second part of his work, addressed to Theophilus, continuing his Gospel (Luke 1:3; Acts 1:1)." },
      { q: "According to Acts 1:8, where would the apostles be witnesses?", options: ["In Jerusalem only", "In Jerusalem, Judea and Samaria, and to the end of the earth", "In Rome only", "In Galilee only"], answer: 1, explanation: "You will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth (Acts 1:8)." },
      { q: "What does the Great Commission in Matthew 28 command?", options: ["Build a temple in Jerusalem", "Make disciples of all nations, baptising them", "Return to Galilee and stay there", "Appoint twelve new apostles"], answer: 1, explanation: "Go therefore and make disciples of all nations, baptising them in the name of the Father and of the Son and of the Holy Spirit (Matthew 28:19)." },
      { q: "Which Gospel records the seven I am sayings of Jesus?", options: ["Matthew", "Mark", "Luke", "John"], answer: 3, explanation: "John records the seven I am sayings, such as I am the bread of life, the light of the world, and the good shepherd." },
      { q: "In Acts, who is the leading figure in the first half of the book?", options: ["Paul", "Peter", "Barnabas", "Stephen"], answer: 1, explanation: "Peter leads the Church in the first half of Acts, preaching at Pentecost and to Cornelius, while Paul dominates the second half." },
      { q: "Which Gospel opens with a genealogy tracing Jesus from Abraham?", options: ["Mark", "Luke", "Matthew", "John"], answer: 2, explanation: "Matthew opens with the genealogy of Jesus Christ, the son of David, the son of Abraham (Matthew 1:1)." },
      { q: "Which Gospel opens with the words, In the beginning was the Word?", options: ["Matthew", "Mark", "Luke", "John"], answer: 3, explanation: "John opens, In the beginning was the Word, and the Word was with God, and the Word was God (John 1:1)." }
    ],
    status: "published"
  },
  {
    id: "crs-14",
    subjectId: "crs",
    topic: "The New Testament Writings",
    subtopic: "The epistles, Revelation and the canon",
    title: "The Epistles, Revelation and the Canon",
    order: 14,
    introduction: "Beyond the Gospels and Acts, the New Testament contains letters to churches and individuals, the letter to the Hebrews, the general epistles, and the Revelation of John. This lesson surveys these writings, their teaching, and how the New Testament canon was formed.",
    objectives: ["Distinguish the Pauline epistles from the general epistles", "Explain the teaching of Hebrews on Christ as High Priest", "Explain the teaching of James on faith and works", "Describe the message of Revelation and its hope", "Explain how the New Testament canon was recognised"],
    sections: [
      {
        heading: "The Pauline Epistles",
        body: "Paul wrote thirteen letters that bear his name: Romans, 1 and 2 Corinthians, Galatians, Ephesians, Philippians, Colossians, 1 and 2 Thessalonians, 1 and 2 Timothy, Titus and Philemon. Romans is his fullest statement of the gospel; Galatians defends justification by faith against those who would add the Law; Ephesians describes the Church as the body of Christ and the unity of Jews and Gentiles; Philippians is a joyful letter written from prison, urging humility after Christ's example; Colossians proclaims Christ as the image of the invisible God, in whom all the fullness of God dwells; the Thessalonian letters teach about the second coming of Christ; the Pastoral Epistles, 1 and 2 Timothy and Titus, instruct church leaders; and Philemon is a personal appeal for Onesimus, a runaway slave, whom Paul sends back to his master as a beloved brother. Together, Paul's letters teach the gospel of grace, the life of the Church, and the hope of Christ's return, and they were read aloud in the churches and passed from church to church."
      },
      {
        heading: "Hebrews and the General Epistles",
        body: "The letter to the Hebrews, whose author is not named, was written to Jewish believers tempted to return to Judaism, and it argues that Christ is superior to angels, to Moses, and to the Levitical priesthood, because He is the Son of God and the great High Priest who offered Himself once for all. Hebrews 11, the chapter of faith, lists the heroes of faith from Abel to the prophets, and Hebrews 12 urges believers to run the race with endurance, looking to Jesus, the founder and perfecter of faith. The general epistles, so called because they were addressed to the Church at large rather than to one place, are James, 1 and 2 Peter, 1, 2 and 3 John, and Jude. James teaches that faith without works is dead, and that true religion cares for the needy; 1 Peter encourages believers suffering for their faith; 2 Peter warns against false teachers; John's letters stress love, truth and abiding in Christ, with the command to love one another; and Jude urges believers to contend for the faith once delivered to the saints. Together these letters show the breadth of the apostolic teaching: doctrine, ethics, suffering, love and watchfulness."
      },
      {
        heading: "The Revelation of John",
        body: "Revelation, the last book of the Bible, was written by John while exiled on the island of Patmos, and it records visions he received from the risen Christ. It opens with letters to seven churches in Asia Minor, commending their faithfulness and rebuking their failures, and then unfolds visions of God's throne, the Lamb who was slain, the judgements on the earth, the fall of Babylon, and the final victory of Christ. Its central message is that, however fierce the opposition, the Lamb has conquered, and God will make all things new. The book closes with the vision of the new heaven and the new earth, where God will dwell with His people, wiping away every tear, and there will be no more death or mourning or crying or pain (Revelation 21:1-4). Revelation uses vivid symbols drawn from the Old Testament, numbers, colours and creatures, and it must be read with care, remembering that its purpose is to encourage suffering believers with the certainty of Christ's triumph, not to provide a timetable for the future."
      },
      {
        heading: "The Formation of the Canon",
        body: "The word canon means a measuring rod or rule, and the New Testament canon is the list of the twenty-seven books recognised as Scripture. These books were not chosen by a single council at one moment, but were recognised over time by the churches because they were written by apostles or their companions, were consistent with the apostolic teaching, and were widely used in worship. By the end of the second century, most of the twenty-seven books were already accepted; the full list was confirmed at the councils of Hippo in 393 and Carthage in 397. The Old Testament canon of thirty-nine books was the Scripture Jesus and the apostles used, and the New Testament was added as the apostolic witness to Christ. Christians believe the Scriptures are God-breathed and profitable for teaching, for reproof, for correction, and for training in righteousness (2 Timothy 3:16). The canon gives the Church a fixed standard of truth, and every teaching and practice must be tested against it."
      }
    ],
    definitions: [
      { term: "Canon", meaning: "The list of books recognised by the Church as Holy Scripture." },
      { term: "Pastoral Epistles", meaning: "1 and 2 Timothy and Titus, Paul's letters instructing church leaders." },
      { term: "General epistles", meaning: "James, 1 and 2 Peter, 1, 2 and 3 John, and Jude, addressed to the Church at large." },
      { term: "High Priest", meaning: "In Hebrews, Christ as the one who offered Himself for sins and intercedes for believers." },
      { term: "Revelation", meaning: "The last book of the Bible, John's visions of Christ's victory and the new creation." },
      { term: "God-breathed", meaning: "Inspired by God; the Scriptures are breathed out by God (2 Timothy 3:16)." }
    ],
    examples: [
      {
        title: "Reconciling James and Paul on faith and works",
        problem: "Paul says we are justified by faith, James says faith without works is dead. Do they contradict each other?",
        steps: ["Recall Paul's teaching: a person is justified by faith apart from works of the Law (Romans 3:28).", "Recall James's teaching: faith apart from works is dead (James 2:26).", "Note that Paul speaks of the ground of justification before God.", "Note that James speaks of the evidence of a living faith before people.", "Conclude that they agree: genuine faith justifies, and genuine faith always produces good works."],
        answer: "They do not contradict: Paul teaches that faith justifies, James teaches that living faith shows itself in works."
      },
      {
        title: "Explaining the hope of Revelation",
        problem: "What is the central hope given in Revelation 21?",
        steps: ["Recall the vision: a new heaven and a new earth (Revelation 21:1).", "Note that the holy city, the new Jerusalem, comes down from God.", "Recall the promise: God will dwell with His people and wipe away every tear.", "Note that death, mourning, crying and pain will be no more.", "Conclude that Revelation's hope is God's new creation, where He dwells with His people forever."],
        answer: "Revelation's hope is the new heaven and new earth, where God dwells with His people and wipes away every tear."
      }
    ],
    tips: ["Paul wrote thirteen letters; learn the list in order.", "Hebrews 11 is the chapter of faith; Hebrews 12 urges running the race.", "James 2:26: faith apart from works is dead.", "Revelation 21:4: God will wipe away every tear; no more death or pain."],
    mistakes: ["Saying Paul wrote Hebrews; its author is not named.", "Saying faith and works contradict; Paul and James agree that living faith produces works.", "Reading Revelation as a timetable; its purpose is to encourage sufferers with Christ's victory.", "Saying the canon was invented by one council; it was recognised over time by the churches."],
    facts: ["Paul wrote thirteen letters in the New Testament.", "Hebrews 11 lists the heroes of faith, from Abel onwards.", "Faith without works is dead (James 2:26).", "All Scripture is breathed out by God (2 Timothy 3:16).", "The New Testament has twenty-seven books."],
    quiz: [
      { q: "How many letters in the New Testament bear Paul's name?", options: ["Ten", "Twelve", "Thirteen", "Fourteen"], answer: 2, explanation: "Paul wrote thirteen letters: Romans, 1 and 2 Corinthians, Galatians, Ephesians, Philippians, Colossians, 1 and 2 Thessalonians, 1 and 2 Timothy, Titus and Philemon." },
      { q: "Which letter defends justification by faith against adding the Law?", options: ["Romans", "Galatians", "Ephesians", "Philippians"], answer: 1, explanation: "Galatians defends justification by faith alone against those who taught that Gentiles must keep the Law of Moses." },
      { q: "Which letter describes the Church as the body of Christ?", options: ["Galatians", "Ephesians", "Philippians", "Colossians"], answer: 1, explanation: "Ephesians describes the Church as the body of Christ, uniting Jews and Gentiles in one body." },
      { q: "Which are the Pastoral Epistles?", options: ["Romans, Galatians, Ephesians", "1 and 2 Timothy and Titus", "James, Peter and John", "1, 2 and 3 John"], answer: 1, explanation: "The Pastoral Epistles are 1 and 2 Timothy and Titus, Paul's letters instructing church leaders." },
      { q: "To whom did Paul write a personal appeal about Onesimus?", options: ["Timothy", "Titus", "Philemon", "James"], answer: 2, explanation: "Paul wrote to Philemon, asking him to receive Onesimus, a runaway slave, as a beloved brother (Philemon 10-17)." },
      { q: "According to Hebrews, who is the great High Priest?", options: ["Aaron", "Melchizedek", "Jesus Christ", "Moses"], answer: 2, explanation: "Hebrews presents Jesus as the great High Priest who offered Himself once for all and intercedes for believers (Hebrews 4:14; 7:26-27)." },
      { q: "Which chapter of Hebrews lists the heroes of faith?", options: ["Hebrews 9", "Hebrews 10", "Hebrews 11", "Hebrews 12"], answer: 2, explanation: "Hebrews 11, the chapter of faith, lists Abel, Enoch, Noah, Abraham, Moses and others who lived by faith." },
      { q: "According to James 2:26, what is faith apart from works?", options: ["Sufficient", "Dead", "Perfect", "Strong"], answer: 1, explanation: "As the body apart from the spirit is dead, so also faith apart from works is dead (James 2:26)." },
      { q: "Which letter urges believers to contend for the faith once delivered to the saints?", options: ["James", "Jude", "1 Peter", "2 John"], answer: 1, explanation: "Jude urges believers to contend for the faith that was once for all delivered to the saints (Jude 3)." },
      { q: "Where was John when he received the visions of Revelation?", options: ["Rome", "Jerusalem", "Patmos", "Ephesus"], answer: 2, explanation: "John was on the island of Patmos when he received the revelation of Jesus Christ (Revelation 1:9)." },
      { q: "To how many churches are the letters in Revelation 2-3 addressed?", options: ["Five", "Seven", "Ten", "Twelve"], answer: 1, explanation: "Revelation contains letters to seven churches in Asia Minor: Ephesus, Smyrna, Pergamum, Thyatira, Sardis, Philadelphia and Laodicea." },
      { q: "According to Revelation 21:4, what will God wipe away?", options: ["Every tear", "Every mountain", "Every city", "Every star"], answer: 0, explanation: "God will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning or crying or pain (Revelation 21:4)." },
      { q: "How many books are in the New Testament?", options: ["Twenty-five", "Twenty-six", "Twenty-seven", "Thirty-nine"], answer: 2, explanation: "The New Testament canon contains twenty-seven books, from Matthew to Revelation." },
      { q: "According to 2 Timothy 3:16, what is all Scripture?", options: ["Breathed out by God", "Written by kings only", "A collection of myths", "A human invention"], answer: 0, explanation: "All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness (2 Timothy 3:16)." },
      { q: "What does the word canon mean?", options: ["A song", "A measuring rod or rule", "A temple", "A feast"], answer: 1, explanation: "Canon means a measuring rod or rule; the canon is the list of books recognised as the standard of Scripture." }
    ],
    status: "published"
  }
];
