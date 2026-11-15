import type { Lesson, SubjectDef } from "./types";

export const SUBJECT: SubjectDef = {
  id: "geography",
  name: "Geography",
  short: "GEO",
  colour: "#7ea6e8",
  tagline: "Understand the Earth, its people and their livelihoods.",
  description: "Master physical geography, map work and GIS, climate and vegetation, population and settlement, and economic geography for JAMB, with Nigerian and African examples throughout, worked calculations and original practice questions.",
  topics: ["Physical Geography", "Map Work and GIS", "Climate and Vegetation", "Population and Settlement", "Economic Geography", "Environmental Issues and Conservation", "Soils and Water Resources"],
};

export const LESSONS: Lesson[] = [
  {
    id: "geography-01",
    subjectId: "geography",
    topic: "Physical Geography",
    subtopic: "Earth structure and landforms",
    title: "Earth Structure and Landforms",
    order: 1,
    introduction: "The Earth is a layered planet whose surface is constantly shaped by forces from within and without. This lesson explains the structure of the Earth, plate movement, and the main landforms, with examples from Nigeria and Africa.",
    objectives: ["Describe the layers of the Earth and their characteristics", "Explain plate tectonics and its effects", "Identify major landforms and how they are formed", "Relate landforms to examples in Nigeria and Africa", "Explain the difference between internal and external forces"],
    sections: [
      {
        heading: "The Structure of the Earth",
        body: "The Earth has four main layers. The crust is the thin, solid outer shell, about 5 to 70 kilometres thick, and it carries the continents and ocean floors. Below it lies the mantle, a thick layer of hot, partly molten rock that flows very slowly. The outer core is liquid iron and nickel, and its movement creates the Earth's magnetic field. The inner core is solid iron and nickel, kept solid by immense pressure despite its great heat. The crust and the upper mantle together form the lithosphere, which is broken into plates. Knowing these layers matters because most landforms, earthquakes and volcanoes are explained by what happens in and between them."
      },
      {
        heading: "Plate Tectonics",
        body: "Plate tectonics is the theory that the lithosphere is divided into large plates that move slowly over the mantle. Where plates move apart, new crust forms, as at the Mid-Atlantic Ridge. Where they collide, mountains rise, as the Himalayas formed when the Indian plate met the Eurasian plate. Where one plate slides under another, deep ocean trenches and volcanoes form. In Africa, the East African Rift Valley is forming where plates are pulling apart, and it holds lakes such as Tanganyika and Malawi. Plate movement also causes earthquakes: when plates grind past each other, stress builds up and is released as a sudden shock. Nigeria sits away from active plate boundaries, which is why it experiences very few earthquakes."
      },
      {
        heading: "Landforms from Internal Forces",
        body: "Internal forces, also called endogenic forces, build up the Earth's surface. Folding occurs when layers of rock are squeezed and bend into anticlines, upward folds, and synclines, downward folds. The Atlas Mountains of North Africa were formed by folding. Faulting occurs when rocks break and blocks move: the block that rises forms a horst, and the block that sinks forms a rift valley or graben. Volcanic activity builds cones and lava plains; Mount Cameroon is an active volcano in West Africa. In Nigeria, the Jos Plateau is a highland formed by ancient volcanic activity and uplift, while the Mambilla Plateau in Taraba State is one of the highest areas in the country. These highlands influence climate, farming and settlement."
      },
      {
        heading: "Landforms from External Forces",
        body: "External forces, also called exogenic forces, wear down the landforms built by internal forces. Weathering breaks rocks in place, erosion carries the material away, and deposition drops it in a new place. Rivers carve valleys and build floodplains and deltas, as the River Niger builds its delta in southern Nigeria. Wind shapes dunes in the Sahara and in northern Nigeria, while waves shape cliffs, beaches and spits along the Lagos coast. Over long periods, highlands are worn down to plains called peneplains. The balance between building up and wearing down gives every landscape its character, and JAMB questions often ask you to link a landform to the force that created it."
      }
    ],
    definitions: [
      { term: "Lithosphere", meaning: "The rigid outer layer of the Earth, made of the crust and upper mantle." },
      { term: "Plate tectonics", meaning: "The theory that the Earth's lithosphere is divided into plates that move over the mantle." },
      { term: "Anticline", meaning: "An upward fold in rock layers, formed by compression." },
      { term: "Rift valley", meaning: "A long, low valley formed where blocks of crust sink between faults." },
      { term: "Endogenic force", meaning: "A force from inside the Earth that builds up landforms, such as folding and volcanism." },
      { term: "Exogenic force", meaning: "A force from outside, such as weathering, erosion and deposition, that wears down landforms." }
    ],
    formulas: ["Plate movement: plates diverge, converge or slide past each other.", "Folding by compression produces anticlines and synclines.", "Faulting produces horsts, which rise, and grabens, which sink.", "Landform = internal building forces minus external wearing forces over time."],
    examples: [
      {
        title: "Identifying a landform's origin",
        problem: "The East African Rift Valley is a long, low valley with steep sides and lakes. How was it formed?",
        steps: ["Note the features: a long valley, steep sides, lakes on the floor.", "Recall that such valleys form where crust sinks between faults.", "Link this to plates pulling apart in East Africa.", "Identify the process as faulting, producing a graben.", "Conclude the rift valley is a faulted landform, not a folded one."],
        answer: "It was formed by faulting: blocks of crust sank between faults as plates pulled apart, creating a graben."
      },
      {
        title: "Linking a Nigerian landform to its cause",
        problem: "Why is the Jos Plateau much higher than the surrounding plains?",
        steps: ["Recall that the Jos Plateau is a highland in central Nigeria.", "Link highlands to uplift and volcanic activity, which are internal forces.", "Note that ancient volcanic rocks underlie the plateau.", "Contrast this with the surrounding plains, worn down by erosion.", "Conclude the plateau's height comes from uplift and resistant volcanic rock."],
        answer: "The Jos Plateau is high because of ancient uplift and volcanic activity, and its hard rocks resist erosion."
      }
    ],
    tips: ["Link every landform to its process: folding, faulting, volcanism, erosion or deposition.", "Use African examples: East African Rift, Atlas Mountains, Mount Cameroon, Jos Plateau.", "Remember Nigeria has few earthquakes because it is far from plate boundaries.", "Draw a labelled cross-section of the Earth when you revise."],
    mistakes: ["Confusing folding with faulting; folding bends rocks, faulting breaks them.", "Calling a rift valley a folded mountain.", "Forgetting that the mantle is below the crust, not above it.", "Saying erosion builds landforms; erosion wears them down and deposition builds new ones."],
    facts: ["The crust is the thinnest layer of the Earth.", "The East African Rift Valley is forming where plates pull apart.", "Mount Cameroon is an active volcano in West Africa.", "The Jos Plateau is a highland formed by uplift and volcanic activity."],
    quiz: [
      { q: "Which layer of the Earth is the thinnest?", options: ["Mantle", "Outer core", "Crust", "Inner core"], answer: 2, explanation: "The crust is the thin outer shell of the Earth, much thinner than the mantle or the core." },
      { q: "The East African Rift Valley was formed mainly by what process?", options: ["Folding", "Faulting", "Volcanic eruption", "River deposition"], answer: 1, explanation: "The rift valley formed when blocks of crust sank between faults as plates pulled apart." },
      { q: "Which of these is an internal force?", options: ["Weathering", "Erosion", "Volcanism", "Deposition"], answer: 2, explanation: "Volcanism comes from inside the Earth, while weathering, erosion and deposition are external forces." },
      { q: "An upward fold in rock layers is called what?", options: ["Syncline", "Graben", "Anticline", "Horst"], answer: 2, explanation: "An anticline is an upward fold produced by compression; a syncline folds downward." },
      { q: "Why does Nigeria experience very few earthquakes?", options: ["It has no rivers", "It is far from active plate boundaries", "It is too hot for earthquakes", "It has no mountains"], answer: 1, explanation: "Nigeria sits on a stable part of the African plate, away from active plate boundaries where most earthquakes occur." },
      { q: "The movement of liquid iron in which layer creates the Earth's magnetic field?", options: ["Crust", "Mantle", "Outer core", "Inner core"], answer: 2, explanation: "The outer core is liquid iron and nickel, and its movement generates the Earth's magnetic field." },
      { q: "The Himalayas were formed when two plates did what?", options: ["Moved apart", "Collided", "Slid past each other", "Sank into the mantle"], answer: 1, explanation: "The Himalayas rose when the Indian plate collided with the Eurasian plate, folding and thrusting the crust upward." },
      { q: "A block of crust that rises between two faults is called what?", options: ["Graben", "Horst", "Syncline", "Peneplain"], answer: 1, explanation: "A horst is an uplifted block between faults, while the block that sinks is a graben." },
      { q: "The Mambilla Plateau, one of the highest areas in Nigeria, is in which state?", options: ["Plateau State", "Taraba State", "Bauchi State", "Kaduna State"], answer: 1, explanation: "The Mambilla Plateau is in Taraba State in eastern Nigeria, and its height gives it a cool climate." },
      { q: "Folding and faulting are examples of which forces?", options: ["Exogenic forces", "Endogenic forces", "Erosional forces", "Depositional forces"], answer: 1, explanation: "Folding and faulting come from inside the Earth, so they are endogenic forces that build up landforms." },
      { q: "New crust forms at the Mid-Atlantic Ridge because the plates there are doing what?", options: ["Colliding", "Moving apart", "Sliding past each other", "Sinking"], answer: 1, explanation: "At a divergent boundary such as the Mid-Atlantic Ridge, plates move apart and magma rises to form new crust." },
      { q: "Which of these is a volcanic landform?", options: ["Oxbow lake", "Rift valley", "Volcanic cone", "Peneplain"], answer: 2, explanation: "A volcanic cone is built up by lava and ash from a volcano; the others are formed by rivers or faulting." },
      { q: "Which layer of the Earth is solid iron and nickel?", options: ["Outer core", "Mantle", "Crust", "Inner core"], answer: 3, explanation: "The inner core is solid iron and nickel, kept solid by immense pressure despite its great heat." },
      { q: "A downward fold in rock layers is called what?", options: ["Syncline", "Anticline", "Horst", "Graben"], answer: 0, explanation: "A syncline is a downward fold produced by compression, while an anticline folds upward." },
      { q: "The Atlas Mountains of North Africa were formed mainly by what process?", options: ["Faulting", "Folding", "Volcanism", "River erosion"], answer: 1, explanation: "The Atlas Mountains were formed by folding, when rock layers were squeezed and bent upward by compression." }
    ],
    status: "published"
  },
  {
    id: "geography-02",
    subjectId: "geography",
    topic: "Physical Geography",
    subtopic: "Rivers, weathering and erosion",
    title: "Rivers, Weathering and Erosion",
    order: 2,
    introduction: "Rivers are among the most powerful shapers of the Earth's surface. This lesson explains how rivers work, how rocks are weathered, and how erosion and deposition create valleys, floodplains and deltas, with the River Niger as a leading Nigerian example.",
    objectives: ["Describe the stages of a river from source to mouth", "Explain physical, chemical and biological weathering", "Describe river erosion, transport and deposition", "Identify river landforms such as meanders, oxbow lakes and deltas", "Explain the importance of rivers in Nigeria"],
    sections: [
      {
        heading: "The Course of a River",
        body: "A river has three main stages. In its upper course, near the source, the river flows fast over steep ground, eroding vertically and cutting a narrow, V-shaped valley with rapids and waterfalls. In its middle course, the land is gentler, the river erodes sideways, and it begins to meander across a wider valley. In its lower course, near the mouth, the river flows slowly over flat land, depositing sediment to form a floodplain and a delta. The River Niger, which rises in Guinea, flows through Mali and Nigeria, and meets the River Benue at Lokoja before reaching the Atlantic through its delta. The Niger Delta is one of the largest deltas in the world and a major centre of fishing, farming and oil production in Nigeria."
      },
      {
        heading: "Weathering of Rocks",
        body: "Weathering is the breaking down of rocks in place, without movement. Physical weathering breaks rocks by temperature change, frost, or the growth of salt crystals; in northern Nigeria, the wide daily temperature range cracks rocks as they expand by day and contract by night. Chemical weathering changes the minerals in rocks: rainwater, which is slightly acidic, dissolves limestone and rusts iron-bearing rocks, a process common in the humid south. Biological weathering is caused by living things: tree roots grow into cracks and split rocks, and burrowing animals break up the surface. Weathering prepares material for erosion, and it also produces soil, which is the basis of farming. Without weathering, there would be little soil and little agriculture."
      },
      {
        heading: "River Erosion, Transport and Deposition",
        body: "A river erodes its bed and banks in four ways: hydraulic action, the force of the water itself; abrasion, the scraping of rock fragments carried by the water; attrition, the wearing down of the fragments as they knock together; and solution, the dissolving of soluble minerals. The river then transports its load in four ways: as dissolved material, as suspended particles, by bouncing along the bed, and by rolling large stones. When the river slows down, it deposits its load, building features such as levees, floodplains and deltas. For example, when the River Niger floods, it drops fertile silt on its floodplain, which farmers use for rice and vegetables. Erosion is strongest where the river is fast and steep, and deposition is strongest where it is slow and flat."
      },
      {
        heading: "River Landforms",
        body: "Rivers create distinctive landforms along their courses. In the upper course, waterfalls and gorges form where hard and soft rocks meet, as at the Gurara Falls in Niger State. In the middle course, meanders form as the river swings from side to side, eroding the outer bank and depositing on the inner bank. When a meander is cut off, it leaves an oxbow lake, common along the middle Niger and Benue. In the lower course, the river splits into distributaries and builds a delta of silt and sand, as in the Niger Delta. Floodplains are flat lands beside the river, built by repeated deposition during floods. Each landform tells you where you are in the river's course and whether erosion or deposition is dominant there."
      }
    ],
    definitions: [
      { term: "Weathering", meaning: "The breaking down of rocks in place, without movement." },
      { term: "Erosion", meaning: "The wearing away and removal of rock and soil by water, wind or ice." },
      { term: "Deposition", meaning: "The dropping of material carried by a river, wind or sea." },
      { term: "Meander", meaning: "A bend or curve in the course of a river." },
      { term: "Oxbow lake", meaning: "A crescent-shaped lake formed when a river meander is cut off." },
      { term: "Delta", meaning: "A fan-shaped area of deposited sediment at the mouth of a river." }
    ],
    formulas: ["River load = solution + suspension + saltation + traction.", "Erosion is greatest in the upper course; deposition is greatest in the lower course.", "Weathering breaks rocks in place; erosion carries the material away.", "A meander cut off from the main channel becomes an oxbow lake."],
    examples: [
      {
        title: "Identifying a river stage",
        problem: "A river flows fast over steep ground, cutting a narrow V-shaped valley with rapids. Which stage is this?",
        steps: ["Note the clues: fast flow, steep ground, narrow V-shaped valley, rapids.", "Recall that vertical erosion dominates in the upper course.", "Compare with the middle course, where meanders and wide valleys dominate.", "Compare with the lower course, where deposition and deltas dominate.", "Conclude the features match the upper course."],
        answer: "This is the upper course of the river, where vertical erosion is dominant."
      },
      {
        title: "Explaining a delta",
        problem: "Why does the River Niger form a large delta where it meets the Atlantic?",
        steps: ["Note that the river slows down sharply as it meets the sea.", "Recall that slow water cannot carry its load, so it deposits sediment.", "Note that deposition over a long time builds up land at the mouth.", "Recall that distributaries spread the sediment into a fan shape.", "Conclude the delta is built by deposition at the river mouth."],
        answer: "The Niger deposits its sediment where it slows at the sea, building a large delta of distributaries and silt."
      }
    ],
    tips: ["Learn river features by course: upper, middle and lower.", "Use the River Niger and Benue for Nigerian examples.", "Remember the four erosion processes: hydraulic action, abrasion, attrition, solution.", "Weathering happens in place; erosion moves material away."],
    mistakes: ["Confusing weathering with erosion.", "Placing deltas in the upper course instead of the lower course.", "Saying a river erodes most in its lower course.", "Forgetting that oxbow lakes form in the middle course."],
    facts: ["The River Niger meets the River Benue at Lokoja.", "The Niger Delta is one of the largest deltas in the world.", "Temperature change is a major cause of physical weathering in northern Nigeria.", "A river carries its load by solution, suspension, saltation and traction."],
    quiz: [
      { q: "In which course does a river form a delta?", options: ["Upper course", "Middle course", "Lower course", "Source"], answer: 2, explanation: "A delta forms at the mouth, in the lower course, where the river deposits its load." },
      { q: "What is an oxbow lake?", options: ["A lake in a crater", "A lake formed when a meander is cut off", "A lake formed by a dam", "A lake at the source of a river"], answer: 1, explanation: "When a river cuts through the neck of a meander, the abandoned bend becomes an oxbow lake." },
      { q: "Which is an example of chemical weathering?", options: ["Frost cracking rocks", "Rainwater dissolving limestone", "Tree roots splitting rocks", "Wind blowing sand"], answer: 1, explanation: "Rainwater dissolving limestone changes the minerals of the rock, which is chemical weathering." },
      { q: "Where do the River Niger and River Benue meet?", options: ["Lagos", "Lokoja", "Abuja", "Port Harcourt"], answer: 1, explanation: "The Niger and Benue meet at Lokoja in Kogi State, forming a famous confluence." },
      { q: "Which process wears down rock fragments as they knock together in a river?", options: ["Hydraulic action", "Abrasion", "Attrition", "Solution"], answer: 2, explanation: "Attrition is the wearing down of fragments as they collide with each other in the water." },
      { q: "Which river erosion process is the force of the water itself?", options: ["Hydraulic action", "Abrasion", "Attrition", "Solution"], answer: 0, explanation: "Hydraulic action is the sheer force of moving water wearing away the river bed and banks." },
      { q: "Saltation is a way a river transports material by doing what?", options: ["Dissolving it", "Carrying it in suspension", "Bouncing it along the bed", "Rolling large stones"], answer: 2, explanation: "In saltation, small particles bounce along the river bed in a series of hops." },
      { q: "Where do rapids and waterfalls mainly occur in a river's course?", options: ["Upper course", "Middle course", "Lower course", "Delta"], answer: 0, explanation: "Rapids and waterfalls form in the upper course, where the river flows fast over steep ground." },
      { q: "Which of these is a depositional river feature?", options: ["Gorge", "Levee", "Waterfall", "V-shaped valley"], answer: 1, explanation: "A levee is a raised bank built by sediment deposited when a river floods its banks." },
      { q: "Physical weathering in northern Nigeria is mainly caused by what?", options: ["Temperature change", "Dissolving by rainwater", "Tree roots", "Burrowing animals"], answer: 0, explanation: "The wide daily temperature range in the north cracks rocks as they expand by day and contract by night." },
      { q: "Gurara Falls, a well-known waterfall in Nigeria, is in which state?", options: ["Lagos State", "Niger State", "Kano State", "Enugu State"], answer: 1, explanation: "Gurara Falls is in Niger State, where the river drops over resistant rock in its upper course." },
      { q: "At a delta, a river splits into what?", options: ["Tributaries", "Distributaries", "Meanders", "Rapids"], answer: 1, explanation: "Distributaries are the branches a river splits into as it spreads its load across a delta." },
      { q: "Which process dissolves soluble minerals in a river?", options: ["Hydraulic action", "Abrasion", "Attrition", "Solution"], answer: 3, explanation: "Solution is the dissolving of soluble minerals, such as limestone, in the river water." },
      { q: "Floodplains are built mainly by what?", options: ["Deposition during floods", "Volcanic eruption", "Faulting", "Folding"], answer: 0, explanation: "When a river floods, it drops fertile silt beside its channel, building up the floodplain over time." },
      { q: "In the middle course, a river mainly erodes in which direction?", options: ["Vertically downward", "Sideways, or laterally", "By solution only", "It does not erode at all"], answer: 1, explanation: "In the middle course the river erodes sideways, widening its valley and forming meanders." }
    ],
    status: "published"
  },
  {
    id: "geography-03",
    subjectId: "geography",
    topic: "Map Work and GIS",
    subtopic: "Map scales and grid references",
    title: "Map Scales and Grid References",
    order: 3,
    introduction: "Maps shrink the real world onto paper, and scale tells you by how much. This lesson teaches you the types of map scale, how to convert between map and ground distances, and how to locate places accurately with grid references.",
    objectives: ["Explain the three types of map scale", "Convert map distances to ground distances and back", "Calculate areas from map measurements", "Give four-figure and six-figure grid references", "Use scale to estimate real distances between Nigerian towns"],
    sections: [
      {
        heading: "What Map Scale Means",
        body: "Map scale is the ratio between a distance on the map and the same distance on the ground. A scale of 1:50,000 means one unit on the map represents 50,000 of the same units on the ground: one centimetre on the map equals 50,000 centimetres, or 500 metres, on the ground. Large-scale maps, such as 1:10,000, show small areas in great detail, while small-scale maps, such as 1:1,000,000, show large areas with little detail. Topographic maps of Nigeria are often at 1:50,000, which is detailed enough to show individual settlements, roads and relief. Always read the scale before measuring anything, because every distance and area calculation depends on it."
      },
      {
        heading: "Types of Scale",
        body: "Scale is shown in three ways. A statement scale uses words: One centimetre represents one kilometre. A representative fraction, or RF, uses a ratio: 1:50,000. A linear scale, also called a bar scale, is a line divided into units that you can measure against with a ruler or dividers. To convert an RF to a statement scale, remember that 100,000 centimetres equal one kilometre, so 1:100,000 means one centimetre equals one kilometre. For example, on a 1:50,000 map, one centimetre equals 0.5 kilometres, because 50,000 centimetres is 500 metres. The linear scale is the most practical in the field, because it still works even if the map is photocopied and enlarged or reduced."
      },
      {
        heading: "Measuring Distance and Area",
        body: "To find a ground distance, measure the map distance in centimetres and multiply by the scale. For example, on a 1:50,000 map, a road measuring 6 centimetres is 6 times 500 metres, which is 3 kilometres on the ground. For a winding road or river, use a piece of string or dividers, stepping along the curves and then measuring the string. To find an area, measure the length and width on the map, convert each to ground units, and multiply them. For example, a farm measuring 4 centimetres by 3 centimetres on a 1:50,000 map is 2 kilometres by 1.5 kilometres on the ground, an area of 3 square kilometres. Always show your working in the exam, because method marks are often awarded even if the final figure is slightly off."
      },
      {
        heading: "Grid References",
        body: "Grid references locate places on a map using numbered lines called eastings, which run vertically, and northings, which run horizontally. A four-figure grid reference gives the square in which a feature lies: read the easting first, then the northing. For example, a school in square 24 68 has the four-figure reference 2468. A six-figure reference pinpoints the feature within the square: estimate tenths across and up, so the same school might be at 245685. Remember the rule: along the corridor, then up the stairs, meaning eastings first, then northings. In JAMB map questions, check the numbers carefully and write the easting before the northing, or the answer is wrong even if you found the right place."
      }
    ],
    definitions: [
      { term: "Map scale", meaning: "The ratio between a distance on a map and the same distance on the ground." },
      { term: "Representative fraction", meaning: "Scale expressed as a ratio, such as 1:50,000." },
      { term: "Linear scale", meaning: "A bar scale drawn on a map, divided into ground units." },
      { term: "Easting", meaning: "A vertical grid line numbered from west to east." },
      { term: "Northing", meaning: "A horizontal grid line numbered from south to north." },
      { term: "Grid reference", meaning: "A set of numbers that locates a place on a map grid." }
    ],
    formulas: ["Ground distance = map distance x scale.", "On a 1:50,000 map, 1 cm = 0.5 km; on a 1:100,000 map, 1 cm = 1 km.", "Ground area = ground length x ground width.", "Grid reference: easting first, then northing; along the corridor, then up the stairs."],
    examples: [
      {
        title: "Converting a map distance",
        problem: "On a 1:50,000 map, the distance between two villages measures 8 cm. What is the ground distance?",
        steps: ["Note the scale: 1:50,000, so 1 cm on the map equals 50,000 cm on the ground.", "Convert 50,000 cm to kilometres: 50,000 cm equals 0.5 km.", "Multiply the map distance by the value of 1 cm: 8 times 0.5 km.", "Calculate 8 times 0.5, which is 4.", "State the answer with the correct unit, kilometres."],
        answer: "The ground distance is 4 kilometres."
      },
      {
        title: "Giving a six-figure grid reference",
        problem: "A church lies in grid square 32 47, about 4 tenths across the square and 6 tenths up it. Give its six-figure grid reference.",
        steps: ["Recall the rule: easting first, then northing.", "Take the easting of the square, 32, and add the tenths across, 4, to get 324.", "Take the northing of the square, 47, and add the tenths up, 6, to get 476.", "Combine them as a six-figure reference: 324476.", "Check that the easting comes first."],
        answer: "The six-figure grid reference is 324476."
      }
    ],
    tips: ["Always read the scale before measuring anything on a map.", "Remember 1:50,000 means 1 cm equals 0.5 km, and 1:100,000 means 1 cm equals 1 km.", "Give eastings before northings in every grid reference.", "Use string or dividers for winding roads and rivers."],
    mistakes: ["Giving the northing before the easting.", "Forgetting to convert centimetres to kilometres.", "Confusing large-scale and small-scale maps.", "Measuring a curved road with a straight ruler and getting a short distance."],
    facts: ["Nigerian topographic maps are commonly at 1:50,000.", "A four-figure reference gives a grid square; a six-figure reference pinpoints a feature.", "A linear scale still works if a map is enlarged or reduced.", "100,000 cm equals 1 km."],
    quiz: [
      { q: "On a 1:50,000 map, what ground distance does 1 cm represent?", options: ["50 m", "500 m", "5 km", "50 km"], answer: 1, explanation: "50,000 cm equals 500 m, so 1 cm on a 1:50,000 map represents 500 m on the ground." },
      { q: "On a 1:100,000 map, a road measures 5 cm. How long is it on the ground?", options: ["0.5 km", "5 km", "50 km", "500 m"], answer: 1, explanation: "On a 1:100,000 map, 1 cm equals 1 km, so 5 cm equals 5 km." },
      { q: "In a grid reference, which is read first?", options: ["Northing", "Easting", "Altitude", "Latitude"], answer: 1, explanation: "Grid references are read easting first, then northing: along the corridor, then up the stairs." },
      { q: "Which map shows the most detail?", options: ["1:1,000,000", "1:500,000", "1:100,000", "1:10,000"], answer: 3, explanation: "1:10,000 is the largest scale listed, so it shows the smallest area in the most detail." },
      { q: "What is a four-figure grid reference used for?", options: ["Pinpointing a single building", "Locating a grid square", "Measuring height", "Showing the scale"], answer: 1, explanation: "A four-figure reference identifies the grid square containing a feature; a six-figure reference pinpoints it." },
      { q: "On a 1:50,000 map, what ground distance does 10 cm represent?", options: ["0.5 km", "5 km", "50 km", "500 m"], answer: 1, explanation: "On a 1:50,000 map, 1 cm equals 0.5 km, so 10 cm equals 5 km on the ground." },
      { q: "Which of these is a statement scale?", options: ["One centimetre represents one kilometre", "1:50,000", "A bar scale", "A grid reference"], answer: 0, explanation: "A statement scale uses words, such as one centimetre represents one kilometre, to state the scale." },
      { q: "A farm measures 2 cm by 2 cm on a 1:50,000 map. What is its ground area?", options: ["1 square kilometre", "2 square kilometres", "4 square kilometres", "0.5 square kilometres"], answer: 0, explanation: "Each 2 cm side equals 1 km on the ground, so the area is 1 km by 1 km, which is 1 square kilometre." },
      { q: "How many figures does a six-figure grid reference have?", options: ["4", "6", "8", "2"], answer: 1, explanation: "A six-figure grid reference has six figures: three for the easting and three for the northing." },
      { q: "Which of these is a small-scale map?", options: ["1:10,000", "1:25,000", "1:50,000", "1:1,000,000"], answer: 3, explanation: "1:1,000,000 is the smallest scale listed, so it shows a large area with the least detail." },
      { q: "A linear scale is especially useful because it does what?", options: ["It still works if the map is enlarged or reduced", "It gives grid references", "It shows height above sea level", "It measures temperature"], answer: 0, explanation: "Because the bar is drawn on the map, it grows or shrinks with the map when it is photocopied." },
      { q: "On a 1:100,000 map, a road measures 12 cm. How long is it on the ground?", options: ["1.2 km", "6 km", "12 km", "120 km"], answer: 2, explanation: "On a 1:100,000 map, 1 cm equals 1 km, so 12 cm equals 12 km." },
      { q: "Eastings are grid lines that run in which direction?", options: ["Horizontally", "Vertically", "Diagonally", "In circles"], answer: 1, explanation: "Eastings are vertical lines, numbered from west to east across the map." },
      { q: "What statement scale is the same as a representative fraction of 1:250,000?", options: ["1 cm represents 25 km", "1 cm represents 2.5 km", "1 cm represents 250 m", "1 cm represents 25 m"], answer: 1, explanation: "250,000 cm equals 2.5 km, so 1 cm on the map represents 2.5 km on the ground." },
      { q: "A winding river on a map is best measured with what?", options: ["A piece of string", "A straight ruler only", "A protractor", "A compass"], answer: 0, explanation: "A piece of string follows the curves of the river and is then measured straight, unlike a rigid ruler." }
    ],
    status: "published"
  },
  {
    id: "geography-04",
    subjectId: "geography",
    topic: "Map Work and GIS",
    subtopic: "Map interpretation and GIS basics",
    title: "Map Interpretation and GIS Basics",
    order: 4,
    introduction: "A good geographer can read a map like a story, seeing relief, drainage, settlement and land use in its symbols. This lesson teaches you to interpret topographic maps, read contours, and understand how GIS turns map data into decisions.",
    objectives: ["Interpret conventional signs and symbols on topographic maps", "Read contours and describe relief", "Calculate gradient from contour information", "Describe drainage, settlement and land-use patterns from a map", "Explain what GIS is and how it is used"],
    sections: [
      {
        heading: "Reading Topographic Maps",
        body: "Topographic maps use symbols to show the features of an area. Blue lines and areas show water: rivers, lakes and reservoirs. Green shows vegetation such as forest and farmland, brown shows contours and relief, black shows human features such as roads, railways and boundaries, and red shows main roads and built-up areas. The key or legend explains every symbol, so always read it first. For example, a map of the Ilorin area might show the Asa River in blue, roads in red and black, and scattered settlements as small black squares. To describe an area, work through relief, drainage, vegetation, settlement and transport in turn, giving evidence from the map for each point you make."
      },
      {
        heading: "Contours and Relief",
        body: "Contours are lines joining places of equal height above sea level. Close contours mean steep slopes, while widely spaced contours mean gentle slopes. Concentric closed contours with increasing values show a hill, while a V-shape pointing uphill shows a valley. A contour interval is the height difference between one contour and the next; on Nigerian 1:50,000 maps it is often 50 feet or about 15 metres. For example, if the contour interval is 50 metres and a hilltop is three contours above a river at 100 metres, the hilltop is about 250 metres high. Spot heights and trigonometrical stations give exact heights at single points. Reading contours lets you describe the relief of an area, identify the highest and lowest points, and work out where water will flow."
      },
      {
        heading: "Gradient and Cross-Sections",
        body: "Gradient measures how steep a slope is, and it is calculated from the vertical interval and the horizontal equivalent. The vertical interval is the difference in height between two points, and the horizontal equivalent is the ground distance between them. For example, if a hill rises 100 metres over a ground distance of 2,000 metres, the gradient is 100 divided by 2,000, which is 1 in 20. A cross-section is a side view of the land along a line drawn on the map: you transfer the heights where contours cross the line onto a graph, join the points, and you can see hills, valleys and slopes. Cross-sections help you judge intervisibility, whether one point can be seen from another, which matters for siting radio masts, settlements and roads."
      },
      {
        heading: "Geographic Information Systems",
        body: "A Geographic Information System, or GIS, is a computer system that captures, stores, analyses and displays geographic data in layers. Each layer holds one kind of information: roads, rivers, population, soil or land use, and the layers can be combined to answer questions. For example, a planner in Lagos can overlay flood-risk areas, population density and road networks to decide where to build a new hospital safely. GIS is used in Nigeria for mapping farmland, tracking deforestation, planning cities, managing oil pipelines and responding to floods. Unlike a paper map, a GIS can be updated quickly, queried for patterns, and used to model what might happen if conditions change, which makes it a powerful tool for geographers and planners."
      }
    ],
    definitions: [
      { term: "Contour", meaning: "A line on a map joining places of equal height above sea level." },
      { term: "Contour interval", meaning: "The difference in height between one contour line and the next." },
      { term: "Gradient", meaning: "The steepness of a slope, expressed as vertical rise over horizontal distance." },
      { term: "Cross-section", meaning: "A side view of the land along a line drawn on a map." },
      { term: "GIS", meaning: "A computer system for capturing, storing, analysing and displaying geographic data." },
      { term: "Topographic map", meaning: "A detailed map showing relief, drainage, vegetation, settlement and transport." }
    ],
    formulas: ["Gradient = vertical interval / horizontal equivalent.", "Gradient as a ratio: 1 in (horizontal equivalent / vertical interval).", "Height of a point = height of nearest contour + (contours crossed x contour interval).", "GIS analysis = overlaying layers of data to find patterns and make decisions."],
    examples: [
      {
        title: "Calculating a gradient",
        problem: "A slope rises 150 metres over a horizontal distance of 3,000 metres. Calculate the gradient.",
        steps: ["Write the formula: gradient equals vertical interval divided by horizontal equivalent.", "Insert the values: 150 divided by 3,000.", "Simplify the fraction: 150 over 3,000 equals 1 over 20.", "Express the gradient as a ratio: 1 in 20.", "Interpret it: the slope rises 1 metre for every 20 metres across."],
        answer: "The gradient is 1 in 20."
      },
      {
        title: "Reading relief from contours",
        problem: "On a map, contours are very close together on one side of a hill and far apart on the other. What does this show?",
        steps: ["Recall that close contours mean steep slopes.", "Recall that widely spaced contours mean gentle slopes.", "Apply this to the hill: one side is steep, the other is gentle.", "Note the hill is therefore asymmetric.", "Conclude the steep side may be a scarp and the gentle side a dip slope."],
        answer: "One side of the hill is steep and the other side is gentle."
      }
    ],
    tips: ["Always read the key before interpreting a map.", "Close contours mean steep slopes; wide contours mean gentle slopes.", "Work through relief, drainage, vegetation, settlement and transport in order.", "Show your working in gradient calculations."],
    mistakes: ["Reading contours as rivers or roads.", "Forgetting that gradient needs ground distance, not map distance.", "Describing a map without evidence from its symbols.", "Confusing a hill with a depression; check whether contour values rise or fall."],
    facts: ["Blue on a map shows water; brown shows contours and relief.", "A contour interval is the height difference between successive contours.", "GIS stores geographic data in layers that can be combined.", "Cross-sections show whether one point can be seen from another."],
    quiz: [
      { q: "What do closely spaced contours show?", options: ["A gentle slope", "A steep slope", "Flat land", "A river"], answer: 1, explanation: "Closely spaced contours mean height changes quickly over a short distance, which is a steep slope." },
      { q: "A slope rises 100 m over 2,000 m. What is the gradient?", options: ["1 in 2", "1 in 20", "1 in 200", "1 in 10"], answer: 1, explanation: "Gradient is 100 divided by 2,000, which simplifies to 1 in 20." },
      { q: "What does GIS stand for?", options: ["Global Internet Service", "Geographic Information System", "General Information Survey", "Ground Inspection Service"], answer: 1, explanation: "GIS stands for Geographic Information System, a computer system for geographic data." },
      { q: "Which colour on a topographic map shows water?", options: ["Brown", "Green", "Blue", "Black"], answer: 2, explanation: "Blue is used for water features such as rivers, lakes and reservoirs." },
      { q: "What is a cross-section?", options: ["A type of grid reference", "A side view of land along a line on a map", "A map scale", "A compass bearing"], answer: 1, explanation: "A cross-section is a side view of the relief along a chosen line, drawn from contour heights." },
      { q: "Which colour on a topographic map shows vegetation?", options: ["Blue", "Green", "Brown", "Black"], answer: 1, explanation: "Green is used for vegetation such as forest and farmland on topographic maps." },
      { q: "Concentric contours with values increasing towards the centre show what?", options: ["A hill", "A depression", "A valley", "A flat plain"], answer: 0, explanation: "Closed contours with rising values towards the middle show a hill rising above the surrounding land." },
      { q: "A V-shaped contour pattern pointing uphill shows what?", options: ["A hill", "A ridge", "A valley", "A lake"], answer: 2, explanation: "Contours form a V pointing uphill where a valley cuts into the slope, with the river running through the point of the V." },
      { q: "What does a spot height give?", options: ["The exact height at a single point", "The average height of an area", "The depth of a river", "The gradient of a slope"], answer: 0, explanation: "A spot height is the exact height above sea level at one marked point on the map." },
      { q: "In GIS, roads, rivers and population are stored as separate what?", options: ["Maps", "Layers", "Grids", "Scales"], answer: 1, explanation: "GIS stores each kind of geographic data as a separate layer, and layers can be combined for analysis." },
      { q: "Which is a use of GIS in Nigeria?", options: ["Measuring rainfall with a rain gauge", "Printing paper maps only", "Tracking deforestation", "Measuring temperature"], answer: 2, explanation: "GIS is used in Nigeria to map farmland, track deforestation, plan cities and respond to floods." },
      { q: "If the contour interval is 50 m and a point is two contours above a river at 200 m, how high is it?", options: ["250 m", "300 m", "350 m", "200 m"], answer: 1, explanation: "Two contours above 200 m add 100 m, so the point is 200 plus 100, which is 300 m high." },
      { q: "Which colour on a topographic map shows human features such as roads and boundaries?", options: ["Black", "Blue", "Green", "Brown"], answer: 0, explanation: "Black is used for human features such as roads, railways, boundaries and buildings." },
      { q: "Intervisibility means what?", options: ["The distance between two towns", "Whether one point can be seen from another", "The height of a hill", "The scale of a map"], answer: 1, explanation: "Intervisibility is whether one point can be seen from another, judged from a cross-section." },
      { q: "Which colour on a topographic map shows main roads and built-up areas?", options: ["Blue", "Red", "Green", "Brown"], answer: 1, explanation: "Red is used for main roads and built-up areas on topographic maps." }
    ],
    status: "published"
  },
  {
    id: "geography-05",
    subjectId: "geography",
    topic: "Climate and Vegetation",
    subtopic: "Elements of climate",
    title: "Elements of Climate",
    order: 5,
    introduction: "Climate is the average weather of a place over a long time, and it is described by its elements. This lesson explains temperature, rainfall, humidity, wind, pressure and sunshine, how they are measured, and how they shape life in Nigeria.",
    objectives: ["List and define the elements of climate", "Explain how temperature and rainfall are measured", "Describe the factors that control temperature and rainfall", "Interpret climate graphs and data tables", "Explain how climate elements affect farming and daily life in Nigeria"],
    sections: [
      {
        heading: "Temperature and Its Measurement",
        body: "Temperature is the degree of hotness or coldness of the air, measured in degrees Celsius with a thermometer. In a weather station, thermometers are kept in a Stevenson screen, a white, louvred box that shields them from direct sun while allowing air to circulate. The daily mean temperature is the average of the maximum and minimum temperatures for the day, and the daily range is the difference between them. Temperature falls with height by about 6.5 degrees Celsius per 1,000 metres, which is why the Jos Plateau is cooler than the surrounding lowlands. Temperature also falls with latitude: places near the equator, such as southern Nigeria, are warmer than places further away. The annual range, the difference between the warmest and coldest months, is small near the equator and large in temperate lands."
      },
      {
        heading: "Rainfall and Humidity",
        body: "Rainfall is measured with a rain gauge, in millimetres, and it is the most important element of climate for Nigerian farmers. Rain forms when air rises, cools and condenses: relief rainfall occurs when air is forced up over high ground, convectional rainfall when heated air rises on hot afternoons, and frontal rainfall when warm and cold air masses meet. Nigeria's rainfall decreases from over 2,000 millimetres a year on the coast to under 500 millimetres in the far north. Humidity is the amount of water vapour in the air, measured with a hygrometer, and relative humidity is that amount as a percentage of the maximum the air can hold at that temperature. High humidity makes hot weather feel uncomfortable, and it is highest on the humid Nigerian coast."
      },
      {
        heading: "Wind, Pressure and Sunshine",
        body: "Wind is air moving from high pressure to low pressure, and it is measured for speed with an anemometer and for direction with a wind vane. In Nigeria, the south-west monsoon brings moist air and rain from the Atlantic between roughly April and October, while the north-east trade wind, the Harmattan, brings dry, dusty air from the Sahara between November and March. Air pressure is measured with a barometer, and pressure differences drive the winds. Sunshine is measured with a sunshine recorder, and it affects temperature, evaporation and crop growth. The sun is overhead at the equator twice a year, which helps explain why equatorial regions have little seasonal change in temperature, while the Harmattan season in northern Nigeria brings cool, dry, dusty mornings."
      },
      {
        heading: "Factors Controlling Climate",
        body: "Several factors control the climate of a place. Latitude decides how much solar energy a place receives: the equator receives the most, so tropical Nigeria is warm all year. Altitude cools the air, so highlands are cooler than lowlands at the same latitude. Distance from the sea matters: coastal Lagos has a smaller temperature range than inland Kano, because the sea moderates temperature. Ocean currents, such as the cold Benguela Current off south-west Africa, cool nearby coasts. Prevailing winds bring either moist or dry air, and relief forces moist air to rise and rain on windward slopes. Together, these factors explain why Nigeria, though mostly tropical, has a wetter south, a drier north, and cooler highlands in the centre."
      }
    ],
    definitions: [
      { term: "Climate", meaning: "The average weather conditions of a place over a long period, usually 30 years." },
      { term: "Daily range of temperature", meaning: "The difference between the maximum and minimum temperatures in a day." },
      { term: "Relative humidity", meaning: "The amount of water vapour in the air as a percentage of the maximum possible at that temperature." },
      { term: "Convectional rainfall", meaning: "Rainfall caused by heated air rising, cooling and condensing." },
      { term: "Harmattan", meaning: "The dry, dusty north-east trade wind that blows from the Sahara over West Africa." },
      { term: "Stevenson screen", meaning: "A white, louvred box that shelters thermometers from direct sun." }
    ],
    formulas: ["Daily mean temperature = (maximum temperature + minimum temperature) / 2.", "Daily range of temperature = maximum temperature - minimum temperature.", "Annual range of temperature = warmest month mean - coldest month mean.", "Temperature falls by about 6.5 degrees Celsius for every 1,000 m rise in altitude."],
    examples: [
      {
        title: "Calculating mean and range",
        problem: "On a day in Kano, the maximum temperature is 36 degrees Celsius and the minimum is 20 degrees Celsius. Find the daily mean and the daily range.",
        steps: ["Write the mean formula: mean equals maximum plus minimum, divided by 2.", "Add the values: 36 plus 20 equals 56.", "Divide by 2 to get the mean: 28 degrees Celsius.", "Find the range: maximum minus minimum, 36 minus 20.", "State both answers with the correct units."],
        answer: "The daily mean temperature is 28 degrees Celsius and the daily range is 16 degrees Celsius."
      },
      {
        title: "Explaining rainfall differences",
        problem: "Why does Lagos receive much more rainfall than Sokoto?",
        steps: ["Note the positions: Lagos is on the coast, Sokoto is far inland in the north.", "Recall the south-west monsoon brings moist air from the Atlantic to the coast.", "Note that the monsoon loses moisture as it travels north.", "Recall that the dry Harmattan affects the north for longer each year.", "Conclude that distance from the sea and wind direction explain the difference."],
        answer: "Lagos is reached first by the moist south-west monsoon from the Atlantic, while Sokoto is far inland and drier."
      }
    ],
    tips: ["Learn each instrument: thermometer for temperature, rain gauge for rainfall, barometer for pressure.", "Rainfall in Nigeria decreases from the coast to the far north.", "Mean equals maximum plus minimum divided by two; range is the difference.", "Link the Harmattan to the dry season and the monsoon to the rainy season."],
    mistakes: ["Confusing weather with climate; weather is short-term, climate is long-term average.", "Confusing daily range with annual range.", "Saying temperature rises with height; it falls.", "Forgetting that the Harmattan is dry and dusty, not wet."],
    facts: ["Nigeria's rainfall falls from over 2,000 mm on the coast to under 500 mm in the far north.", "Temperature falls about 6.5 degrees Celsius per 1,000 m of height.", "The Harmattan blows from the Sahara between November and March.", "The Jos Plateau is cooler than the surrounding lowlands because of its height."],
    quiz: [
      { q: "What is climate?", options: ["The weather of a single day", "The average weather of a place over a long time", "The temperature at noon", "The amount of rain in one storm"], answer: 1, explanation: "Climate is the average weather conditions of a place over a long period, usually about 30 years." },
      { q: "Which instrument measures rainfall?", options: ["Thermometer", "Barometer", "Rain gauge", "Anemometer"], answer: 2, explanation: "A rain gauge collects and measures rainfall in millimetres." },
      { q: "If the maximum is 34 degrees and the minimum is 22 degrees, what is the daily range?", options: ["28 degrees", "12 degrees", "56 degrees", "6 degrees"], answer: 1, explanation: "The daily range is maximum minus minimum: 34 minus 22 equals 12 degrees." },
      { q: "Which wind brings dry, dusty air to Nigeria?", options: ["South-west monsoon", "Harmattan", "Sea breeze", "Land breeze"], answer: 1, explanation: "The Harmattan is the dry north-east trade wind from the Sahara." },
      { q: "Why is the Jos Plateau cooler than the lowlands?", options: ["It is nearer the sea", "It is higher in altitude", "It has more rainfall", "It is nearer the equator"], answer: 1, explanation: "Temperature falls with height, so the high Jos Plateau is cooler than the surrounding lowlands." },
      { q: "Which instrument measures air pressure?", options: ["Thermometer", "Rain gauge", "Barometer", "Anemometer"], answer: 2, explanation: "A barometer measures air pressure, and pressure differences drive the winds." },
      { q: "Which instrument measures wind speed?", options: ["Wind vane", "Barometer", "Hygrometer", "Anemometer"], answer: 3, explanation: "An anemometer measures the speed of the wind, while a wind vane shows its direction." },
      { q: "Wind direction is measured with which instrument?", options: ["Wind vane", "Anemometer", "Rain gauge", "Sunshine recorder"], answer: 0, explanation: "A wind vane points in the direction from which the wind blows." },
      { q: "Relief rainfall occurs when air is forced up over what?", options: ["Heated ground on a hot afternoon", "High ground", "A cold air mass", "The sea at night"], answer: 1, explanation: "Relief rainfall happens when moist air is forced to rise over hills or mountains, cooling and condensing as it rises." },
      { q: "If the maximum temperature is 30 degrees and the minimum is 18 degrees, what is the daily mean?", options: ["24 degrees", "12 degrees", "48 degrees", "6 degrees"], answer: 0, explanation: "The daily mean is maximum plus minimum divided by two: 30 plus 18 is 48, divided by two is 24 degrees." },
      { q: "If the warmest month averages 28 degrees and the coldest month 24 degrees, what is the annual range?", options: ["52 degrees", "4 degrees", "26 degrees", "2 degrees"], answer: 1, explanation: "The annual range is the warmest month mean minus the coldest month mean: 28 minus 24 equals 4 degrees." },
      { q: "The south-west monsoon brings rain to Nigeria roughly between which months?", options: ["November and March", "April and October", "All year round", "December and January"], answer: 1, explanation: "The moist south-west monsoon blows from the Atlantic roughly from April to October, bringing the rainy season." },
      { q: "Humidity is measured with which instrument?", options: ["Thermometer", "Barometer", "Hygrometer", "Rain gauge"], answer: 2, explanation: "A hygrometer measures the amount of water vapour in the air." },
      { q: "Why is the temperature range of coastal Lagos smaller than that of Kano?", options: ["The sea moderates temperature", "Lagos is higher in altitude", "Lagos is nearer the equator", "Kano has more rainfall"], answer: 0, explanation: "The sea warms and cools slowly, so coastal places have smaller temperature ranges than inland places." },
      { q: "Temperature falls by about 6.5 degrees Celsius for every rise in height of what?", options: ["100 m", "1,000 m", "10,000 m", "100 km"], answer: 1, explanation: "The lapse rate is about 6.5 degrees Celsius per 1,000 metres of height." }
    ],
    status: "published"
  },
  {
    id: "geography-06",
    subjectId: "geography",
    topic: "Climate and Vegetation",
    subtopic: "Climate types and vegetation zones",
    title: "Climate Types and Vegetation Zones",
    order: 6,
    introduction: "Climate and vegetation are closely linked: the rainfall and temperature of a place decide what grows there. This lesson covers the main climate types of the world and Nigeria's vegetation zones, from mangrove swamp to Sahel savanna.",
    objectives: ["Describe the main world climate types", "Explain the link between climate and vegetation", "Describe Nigeria's vegetation zones from south to north", "Explain the characteristics of tropical rainforest and savanna", "Discuss the effects of desertification in northern Nigeria"],
    sections: [
      {
        heading: "World Climate Types",
        body: "The world has several broad climate types. The equatorial climate, found near the equator in the Congo Basin and the Amazon, is hot and wet all year, with over 2,000 millimetres of rain and little temperature change. The tropical continental climate, or savanna climate, has a wet season and a dry season, as in much of West Africa. The hot desert climate, found in the Sahara, is very hot by day, cool by night, and receives under 250 millimetres of rain a year. The Mediterranean climate has hot, dry summers and cool, wet winters, while the temperate climate of western Europe is mild and rainy all year. The polar climate is cold all year. Each climate produces its own vegetation, so learning the climate of a place lets you predict what grows there and how people live."
      },
      {
        heading: "Nigeria's Vegetation Zones",
        body: "Nigeria's vegetation changes from south to north as rainfall decreases. Along the coast is the mangrove swamp, with salt-tolerant trees in tidal creeks, important for fish breeding. Inland is the freshwater swamp and then the tropical rainforest, with tall trees, dense canopy and high biodiversity, found in states such as Cross River, Edo and Ondo. North of the forest is the Guinea savanna, with tall grasses and scattered trees, covering much of the Middle Belt. Further north is the Sudan savanna, with shorter grasses and fewer trees, and in the far north-east is the Sahel savanna, with sparse grasses, thorny shrubs and very little rain. This pattern follows the rainfall gradient, and it shapes farming, grazing and settlement across the country."
      },
      {
        heading: "Tropical Rainforest and Savanna",
        body: "The tropical rainforest is hot, with temperatures around 27 degrees Celsius all year, and wet, with over 2,000 millimetres of rain. Its trees are tall, evergreen and layered into canopy, understorey and forest floor, and the soils are often poor because nutrients are washed away by heavy rain. Farming here is often shifting cultivation, and crops include cocoa, oil palm, rubber and plantain. The savanna has a distinct wet and dry season, with rainfall between about 500 and 1,500 millimetres. Its grasses support grazing and crops such as yam, maize, millet and groundnuts. Fires are common in the dry season, and trees such as the baobab and shea are adapted to drought. The boundary between forest and savanna is not fixed: farming and fire push it south, while protection can let forest regrow."
      },
      {
        heading: "Desertification and Vegetation Change",
        body: "Desertification is the spread of desert-like conditions into land that was once productive, and it is a serious problem in northern Nigeria. It is caused by drought, overgrazing, cutting trees for firewood, and farming land too intensively without rest. In states such as Borno, Yobe, Sokoto and Katsina, sand dunes advance, wells dry up, and farmland is lost. The effects include lower crop yields, loss of grazing land, migration southwards, and conflict between farmers and herders over shrinking resources. Responses include planting shelterbelts of trees, such as the Great Green Wall project, practising agroforestry, controlling grazing, and using irrigation. JAMB questions often ask for the causes and effects of desertification and for the measures that can control it, so learn the Nigerian examples well."
      }
    ],
    definitions: [
      { term: "Vegetation zone", meaning: "A region with a characteristic plant cover shaped by its climate." },
      { term: "Mangrove swamp", meaning: "Coastal swamp forest of salt-tolerant trees in tidal areas." },
      { term: "Guinea savanna", meaning: "Savanna with tall grasses and scattered trees, south of the Sudan savanna." },
      { term: "Sahel savanna", meaning: "Dry savanna with sparse grasses and thorny shrubs at the edge of the Sahara." },
      { term: "Desertification", meaning: "The spread of desert-like conditions into land that was once productive." },
      { term: "Shifting cultivation", meaning: "Farming in which plots are cleared, cropped for a few years, then left fallow." }
    ],
    formulas: ["Rainfall decreases from south to north in Nigeria, and vegetation follows the same pattern.", "Equatorial climate: hot and wet all year, rain over 2,000 mm.", "Savanna climate: wet season plus dry season, rain about 500 to 1,500 mm.", "Desertification = drought + overgrazing + deforestation + over-cultivation."],
    examples: [
      {
        title: "Linking climate to vegetation",
        problem: "A place has 2,400 mm of rain a year, temperatures near 27 degrees Celsius, and little seasonal change. What vegetation would you expect?",
        steps: ["Note the high rainfall and steady high temperature.", "Recall that hot, wet, steady conditions produce tropical rainforest.", "Check the rainfall: over 2,000 mm fits rainforest, not savanna.", "Check the temperature range: small range fits the equatorial zone.", "Conclude the vegetation is tropical rainforest."],
        answer: "Tropical rainforest, with tall evergreen trees and a dense canopy."
      },
      {
        title: "Explaining desertification",
        problem: "Why is desertification a problem in Yobe State in north-eastern Nigeria?",
        steps: ["Note the location: Yobe is in the far north, near the Sahel.", "Recall the rainfall there is low and unreliable.", "Add human causes: overgrazing, tree cutting and over-cultivation.", "Note the effects: sand advance, lost farmland and migration.", "Conclude desertification results from low rainfall plus human pressure."],
        answer: "Low, unreliable rainfall plus overgrazing, deforestation and over-cultivation are turning farmland into desert-like land."
      }
    ],
    tips: ["Learn Nigeria's zones in order from south to north: mangrove, rainforest, Guinea, Sudan, Sahel.", "Rainfall is the key link between climate and vegetation.", "Use the Great Green Wall as an example of fighting desertification.", "Know the crops of each zone: cocoa in the forest, millet in the Sudan savanna."],
    mistakes: ["Placing the Sahel savanna in the south.", "Saying rainforest soils are rich; they are often poor and leached.", "Confusing desertification with drought alone; human actions matter too.", "Forgetting that savanna has a wet and a dry season."],
    facts: ["Nigeria's rainfall decreases from the coast to the far north.", "The tropical rainforest has over 2,000 mm of rain a year.", "The Sahel savanna is found in the far north-east of Nigeria.", "The Great Green Wall is a tree-planting project against desertification."],
    quiz: [
      { q: "Which vegetation zone is found along Nigeria's coast?", options: ["Sahel savanna", "Mangrove swamp", "Sudan savanna", "Montane forest"], answer: 1, explanation: "Mangrove swamp forest grows in the tidal creeks along Nigeria's coast." },
      { q: "Which zone lies immediately north of the tropical rainforest?", options: ["Sahel savanna", "Guinea savanna", "Mangrove swamp", "Sudan savanna"], answer: 1, explanation: "North of the rainforest is the Guinea savanna, with tall grasses and scattered trees." },
      { q: "What is the main cause of desertification in northern Nigeria?", options: ["Heavy rainfall", "Drought plus overgrazing and deforestation", "Too many rivers", "Coastal flooding"], answer: 1, explanation: "Desertification is driven by drought combined with overgrazing, tree cutting and over-cultivation." },
      { q: "Which crop is typical of the rainforest zone?", options: ["Millet", "Cocoa", "Groundnut", "Sorghum"], answer: 1, explanation: "Cocoa grows in the humid rainforest zone of south-western Nigeria, while millet and sorghum suit the drier north." },
      { q: "An equatorial climate is best described as what?", options: ["Hot and dry all year", "Hot and wet all year", "Cold and wet all year", "Hot in summer and cold in winter"], answer: 1, explanation: "Equatorial climates are hot and wet throughout the year, with little seasonal change." },
      { q: "Which climate has hot, dry summers and cool, wet winters?", options: ["Equatorial", "Savanna", "Mediterranean", "Polar"], answer: 2, explanation: "The Mediterranean climate is marked by hot, dry summers and cool, wet winters." },
      { q: "A hot desert climate receives less than how much rain a year?", options: ["100 mm", "250 mm", "1,000 mm", "2,000 mm"], answer: 1, explanation: "Hot deserts such as the Sahara receive under 250 mm of rain a year." },
      { q: "Which tree is well adapted to the dry savanna?", options: ["Baobab", "Mahogany", "Mangrove", "Iroko"], answer: 0, explanation: "The baobab stores water in its thick trunk and sheds its leaves in the dry season, suiting the savanna." },
      { q: "Which crop is typical of the Sudan savanna?", options: ["Cocoa", "Oil palm", "Rubber", "Millet"], answer: 3, explanation: "Millet is a hardy grain that suits the short rainy season and dry conditions of the Sudan savanna." },
      { q: "The freshwater swamp in Nigeria lies where?", options: ["North of the Sahel savanna", "Between the mangrove swamp and the rainforest", "In the far north-east", "On the Jos Plateau"], answer: 1, explanation: "Inland from the coastal mangrove swamp is the freshwater swamp, which then gives way to tropical rainforest." },
      { q: "Tropical rainforest is found in which of these Nigerian states?", options: ["Sokoto", "Cross River", "Yobe", "Kano"], answer: 1, explanation: "Cross River State in the south-east has extensive tropical rainforest, while the northern states are savanna." },
      { q: "Why are tropical rainforest soils often poor?", options: ["They are too cold", "They have no trees", "Nutrients are washed away by heavy rain", "They are too dry"], answer: 2, explanation: "Heavy rain leaches nutrients out of rainforest soils, so most nutrients are held in the living vegetation." },
      { q: "Which is a human cause of desertification in northern Nigeria?", options: ["Cutting trees for firewood", "Heavy rainfall", "Irrigation", "Planting shelterbelts"], answer: 0, explanation: "Cutting trees for firewood removes the cover that holds the soil, speeding desertification." },
      { q: "The Great Green Wall project aims to do what?", options: ["Build dams across the north", "Grow cocoa in the Sahel", "Mine minerals in the desert", "Fight desertification by planting trees"], answer: 3, explanation: "The Great Green Wall is a belt of trees planted across the Sahel to hold back the desert." },
      { q: "Which vegetation zone has the shortest grasses and fewest trees in Nigeria?", options: ["Sahel savanna", "Guinea savanna", "Tropical rainforest", "Mangrove swamp"], answer: 0, explanation: "The Sahel savanna at the edge of the Sahara has sparse grasses, thorny shrubs and very little rain." }
    ],
    status: "published"
  },
  {
    id: "geography-07",
    subjectId: "geography",
    topic: "Population and Settlement",
    subtopic: "Population distribution and migration",
    title: "Population Distribution and Migration",
    order: 7,
    introduction: "People are not spread evenly across the Earth: some places are crowded and others are almost empty. This lesson explains why population is distributed as it is, how population changes, and why people migrate, with Nigerian examples throughout.",
    objectives: ["Define population density and calculate it", "Explain the factors affecting population distribution", "Describe birth rate, death rate and natural increase", "Explain push and pull factors in migration", "Discuss the effects of migration in Nigeria"],
    sections: [
      {
        heading: "Population Distribution and Density",
        body: "Population distribution is how people are spread across an area, and population density is the number of people per square kilometre. In Nigeria, density is highest in the south-west around Lagos and Ibadan, in the south-east around Onitsha and Enugu, and in the north around Kano, while it is lowest in the sparsely settled Middle Belt and the far north-east. Physical factors matter: people cluster where rainfall, fertile soil and water are available, and avoid deserts, steep mountains and swamps. Human factors matter too: jobs, trade, transport and government attract people to cities. For example, Lagos is densely settled because it is a port, a commercial centre and the former capital, while the Chad Basin is thinly settled because of low rainfall and poor soils."
      },
      {
        heading: "Population Change",
        body: "Population changes through births, deaths and migration. The birth rate is the number of live births per 1,000 people per year, and the death rate is the number of deaths per 1,000 people per year. Natural increase is the birth rate minus the death rate. Nigeria has a high birth rate and a falling death rate, so its natural increase is high and its population is growing fast, with over 200 million people. The demographic transition model describes how countries move from high birth and death rates to low ones as they develop. Nigeria is in an early stage of this transition, with a young population: a large share of Nigerians are under 15, which means many dependants and a need for schools, jobs and health care in the future."
      },
      {
        heading: "Migration: Push and Pull Factors",
        body: "Migration is the movement of people from one place to another, and it is explained by push factors, which drive people away, and pull factors, which attract them. Push factors include unemployment, poor harvests, drought, flooding and insecurity. Pull factors include jobs, better pay, education, health care and security. In Nigeria, rural-to-urban migration is the most important flow: young people leave villages for Lagos, Abuja, Port Harcourt and Kano in search of work. Seasonal migration also occurs, as herders move cattle south in the dry season. International migration takes Nigerians abroad for study and work, and brings migrants from neighbouring countries such as Niger, Chad and Benin into Nigerian border towns and cities."
      },
      {
        heading: "Effects of Migration",
        body: "Migration brings both benefits and problems. For the receiving area, migrants provide labour, skills and enterprise, and they pay taxes and fill jobs, but they also increase pressure on housing, water, transport and schools, and can contribute to the growth of slums, as in parts of Lagos. For the sending area, migration reduces pressure on land and brings back remittances, money sent home by migrants, but it also removes the young and able-bodied, leaving villages with older people and fewer workers. In Nigeria, rural depopulation has weakened farming in some areas, while urban growth has created jobs in trade, transport and services. Governments try to manage migration by developing rural areas, creating jobs outside the big cities, and improving urban planning and housing."
      }
    ],
    definitions: [
      { term: "Population density", meaning: "The number of people per square kilometre of land." },
      { term: "Birth rate", meaning: "The number of live births per 1,000 people per year." },
      { term: "Death rate", meaning: "The number of deaths per 1,000 people per year." },
      { term: "Natural increase", meaning: "The growth of a population from births minus deaths, excluding migration." },
      { term: "Push factor", meaning: "A condition that drives people to leave a place." },
      { term: "Pull factor", meaning: "A condition that attracts people to a new place." }
    ],
    formulas: ["Population density = total population / land area.", "Natural increase = birth rate - death rate.", "Population change = (births - deaths) + (immigrants - emigrants).", "Migration = push factors out of the origin + pull factors into the destination."],
    examples: [
      {
        title: "Calculating population density",
        problem: "A local government area has 240,000 people and covers 600 square kilometres. What is its population density?",
        steps: ["Write the formula: density equals population divided by area.", "Insert the values: 240,000 divided by 600.", "Divide 240,000 by 600 to get 400.", "State the unit: people per square kilometre.", "Compare the result with other areas to judge whether it is high or low."],
        answer: "The population density is 400 people per square kilometre."
      },
      {
        title: "Identifying push and pull factors",
        problem: "A young farmer leaves his village for Lagos because his harvest failed and he hears of jobs in construction. Identify the push and pull factors.",
        steps: ["Find the reason for leaving: the failed harvest is a push factor.", "Find the attraction: jobs in construction in Lagos is a pull factor.", "Check that the push factor is at the origin, the village.", "Check that the pull factor is at the destination, Lagos.", "Conclude this is rural-to-urban migration driven by both factors."],
        answer: "Push factor: failed harvest in the village. Pull factor: construction jobs in Lagos."
      }
    ],
    tips: ["Density always needs a unit: people per square kilometre.", "Learn Nigeria's dense areas: Lagos, Ibadan, Onitsha, Enugu, Kano.", "Natural increase ignores migration; population change includes it.", "For migration questions, sort factors into push and pull."],
    mistakes: ["Confusing population distribution with population density.", "Forgetting to subtract deaths from births for natural increase.", "Calling a pull factor a push factor.", "Saying migration only benefits cities; it affects villages too."],
    facts: ["Nigeria has over 200 million people and a young population.", "Lagos is the most densely settled area in Nigeria.", "Rural-to-urban migration is the main migration flow in Nigeria.", "Remittances are money sent home by migrants."],
    quiz: [
      { q: "What is population density?", options: ["Total population of a country", "Number of people per square kilometre", "Number of births per year", "Number of migrants per year"], answer: 1, explanation: "Population density is the total population divided by the land area, giving people per square kilometre." },
      { q: "A town has 150,000 people on 500 sq km. What is its density?", options: ["150 people per sq km", "300 people per sq km", "750 people per sq km", "30 people per sq km"], answer: 1, explanation: "150,000 divided by 500 equals 300 people per square kilometre." },
      { q: "Natural increase is calculated as what?", options: ["Birth rate plus death rate", "Birth rate minus death rate", "Births plus migrants", "Deaths minus births"], answer: 1, explanation: "Natural increase is the birth rate minus the death rate, excluding migration." },
      { q: "Which is a push factor?", options: ["Good jobs in a city", "Drought in a village", "Better schools in a town", "Cheap housing in a city"], answer: 1, explanation: "Drought drives people away from their home, so it is a push factor; the others attract people." },
      { q: "Which area of Nigeria is most densely settled?", options: ["Chad Basin", "Lagos area", "Mambilla Plateau", "Sokoto desert fringe"], answer: 1, explanation: "The Lagos area is densely settled because of its port, commerce and jobs." },
      { q: "If the birth rate is 40 per 1,000 and the death rate is 15 per 1,000, what is the natural increase?", options: ["55 per 1,000", "25 per 1,000", "15 per 1,000", "40 per 1,000"], answer: 1, explanation: "Natural increase is birth rate minus death rate: 40 minus 15 equals 25 per 1,000 people." },
      { q: "Which area of Nigeria is thinly settled?", options: ["Chad Basin", "Lagos", "Kano", "Onitsha"], answer: 0, explanation: "The Chad Basin is thinly settled because of low rainfall and poor soils." },
      { q: "Rural-to-urban migration in Nigeria is mainly driven by what?", options: ["Better farm yields", "Jobs and services in cities", "More land in villages", "Lower city rents"], answer: 1, explanation: "Young people move to cities mainly for jobs, better pay, education and services." },
      { q: "What are remittances?", options: ["Taxes paid by migrants", "Loans from banks", "Money sent home by migrants", "Money paid to leave a village"], answer: 2, explanation: "Remittances are money sent home by migrants to support their families in the sending area." },
      { q: "The demographic transition model describes what?", options: ["Movement from high to low birth and death rates as a country develops", "Movement of people to cities", "Growth of slums", "Fall in population density"], answer: 0, explanation: "The model shows how countries move from high birth and death rates to low ones as they develop." },
      { q: "In Nigeria, herders move their cattle south in which season?", options: ["Rainy season", "Dry season", "Harmattan only", "Winter"], answer: 1, explanation: "In the dry season, herders move cattle south in search of pasture and water." },
      { q: "Which of these is a pull factor?", options: ["Unemployment", "Poor harvests", "Better pay in a city", "Flooding"], answer: 2, explanation: "Better pay attracts people to a city, so it is a pull factor; the others drive people away." },
      { q: "Population change is calculated as what?", options: ["Births minus deaths plus net migration", "Births only", "Deaths only", "Births plus deaths"], answer: 0, explanation: "Population change equals natural increase, births minus deaths, plus net migration." },
      { q: "Nigeria's population is best described as what?", options: ["Old and shrinking", "Evenly spread across the country", "Mostly over 60 years old", "Young, with many people under 15"], answer: 3, explanation: "Nigeria has a young population, with a large share under 15 years old, which means many dependants." },
      { q: "Which is an effect of migration on the sending area?", options: ["More housing pressure", "Loss of young, able-bodied workers", "Growth of slums", "More traffic congestion"], answer: 1, explanation: "Migration removes the young and able-bodied from villages, leaving older people and fewer workers." }
    ],
    status: "published"
  },
  {
    id: "geography-08",
    subjectId: "geography",
    topic: "Population and Settlement",
    subtopic: "Settlement patterns and urbanisation",
    title: "Settlement Patterns and Urbanisation",
    order: 8,
    introduction: "Settlements are where people live, from scattered farmsteads to great cities. This lesson explains settlement patterns, the functions of settlements, and urbanisation in Nigeria, including its causes, problems and solutions.",
    objectives: ["Describe nucleated, dispersed and linear settlement patterns", "Explain the factors that decide where settlements grow", "Describe the functions of rural and urban settlements", "Explain urbanisation and its causes in Nigeria", "Discuss urban problems and how they can be solved"],
    sections: [
      {
        heading: "Settlement Patterns",
        body: "Settlements take different patterns. A nucleated settlement is clustered tightly around a central point, such as a market, a church or a water source, and it is common in Yoruba towns and in Igbo villages. A dispersed settlement has houses scattered across the countryside, often because each family lives on its own farmland, as in parts of the Middle Belt. A linear settlement stretches along a road, river or railway, as villages do along the Lagos-Ibadan expressway. The pattern depends on water supply, relief, farming, defence and transport. For example, settlements cluster around wells in the dry north, spread out where farmland is plentiful, and line up along roads where trade is important. On a map, you can recognise the pattern by looking at how the buildings are arranged."
      },
      {
        heading: "Site, Situation and Functions",
        body: "The site of a settlement is the exact place it occupies, such as a hilltop, a river crossing or a coastal bay, while its situation is its position relative to other places, such as near a market or on a trade route. Settlements grow where the site offers water, flat land, defence or resources. Their functions are the jobs they do: farming villages produce food, mining towns such as Jos extract minerals, ports such as Lagos and Port Harcourt handle trade, and administrative centres such as Abuja govern. Many towns have several functions: Ibadan is a commercial, educational and administrative centre. As a settlement grows, its functions multiply, and it may change from a village to a town and then to a city. JAMB questions often ask for the function of a named Nigerian town, so learn the leading examples."
      },
      {
        heading: "Urbanisation in Nigeria",
        body: "Urbanisation is the growth in the proportion of people living in towns and cities. In Nigeria, it is driven by rural-to-urban migration, natural increase in cities, and the reclassification of growing villages as towns. Lagos, with over 15 million people, is the largest city, followed by Kano, Ibadan, Abuja and Port Harcourt. Cities grow because they offer jobs, schools, hospitals, electricity and entertainment, and because government and industry concentrate there. However, urban growth in Nigeria is often faster than the provision of housing, water, roads and jobs, which creates problems. Understanding urbanisation means understanding both its pull and its pressures, and why planning is essential if cities are to work well."
      },
      {
        heading: "Urban Problems and Solutions",
        body: "Rapid urbanisation in Nigeria has created serious problems. Housing is short, so many people live in overcrowded rooms or in slums such as Makoko in Lagos, with poor sanitation and limited clean water. Traffic congestion wastes time and fuel on roads in Lagos and Abuja. Unemployment is high, especially among young people, and informal work such as street trading fills the gap. Flooding affects low-lying districts during heavy rain, and waste disposal is a constant challenge. Solutions include building affordable housing, improving public transport, providing water and electricity, planning new towns, and developing rural areas so fewer people need to move. The Federal Capital Territory, Abuja, was planned to relieve pressure on Lagos, and new satellite towns around major cities are part of the same strategy."
      }
    ],
    definitions: [
      { term: "Nucleated settlement", meaning: "A settlement where buildings are clustered tightly around a central point." },
      { term: "Dispersed settlement", meaning: "A settlement where houses are scattered across the countryside." },
      { term: "Linear settlement", meaning: "A settlement that stretches along a road, river or railway." },
      { term: "Site", meaning: "The exact place where a settlement is built." },
      { term: "Urbanisation", meaning: "The growth in the proportion of people living in towns and cities." },
      { term: "Slum", meaning: "A densely settled urban area with poor housing and inadequate services." }
    ],
    formulas: ["Settlement pattern = arrangement of buildings: clustered, scattered or linear.", "Urbanisation rate = urban population / total population x 100.", "Site is where a settlement is; situation is where it is in relation to other places.", "Urban problems grow when city growth outpaces housing, water, transport and jobs."],
    examples: [
      {
        title: "Identifying a settlement pattern",
        problem: "On a map, houses are spread far apart across farmland, each on its own plot. What pattern is this?",
        steps: ["Observe the arrangement: houses are far apart, not clustered.", "Recall the patterns: nucleated is clustered, linear follows a line, dispersed is scattered.", "Match the observation to dispersed settlement.", "Note the likely reason: each family lives on its own farmland.", "Conclude the pattern is dispersed."],
        answer: "This is a dispersed settlement pattern."
      },
      {
        title: "Explaining urban growth",
        problem: "Why has Lagos grown into Nigeria's largest city?",
        steps: ["Note the site: a coastal lagoon with a natural harbour.", "Note the functions: port, commerce, industry and former capital.", "Add migration: people move to Lagos for jobs and services.", "Add natural increase: the city population grows by births too.", "Conclude that site, functions and migration together explain its growth."],
        answer: "Lagos grew because of its harbour, port and commercial functions, plus migration and natural increase."
      }
    ],
    tips: ["Learn the three patterns: nucleated, dispersed, linear.", "Site is the exact place; situation is the position relative to other places.", "Know the functions of Lagos, Port Harcourt, Jos, Kano and Abuja.", "Link urban problems to growth outpacing services."],
    mistakes: ["Confusing site with situation.", "Calling every clustered settlement linear.", "Saying urbanisation is only migration; natural increase matters too.", "Forgetting that Abuja was planned to relieve pressure on Lagos."],
    facts: ["Lagos is Nigeria's largest city, with over 15 million people.", "Yoruba towns are often nucleated around a market or palace.", "Makoko in Lagos is an example of a slum settlement.", "Abuja is Nigeria's planned Federal Capital Territory."],
    quiz: [
      { q: "What is a nucleated settlement?", options: ["Houses scattered across farmland", "Buildings clustered around a central point", "Houses in a line along a road", "A single farmstead"], answer: 1, explanation: "A nucleated settlement has buildings clustered tightly around a centre such as a market or church." },
      { q: "Which is a linear settlement?", options: ["A village spread over farmland", "A town around a palace", "Houses along a railway line", "A city on a hilltop"], answer: 2, explanation: "A linear settlement stretches along a line such as a road, river or railway." },
      { q: "What is the site of a settlement?", options: ["Its position relative to other towns", "The exact place where it is built", "Its population size", "Its main function"], answer: 1, explanation: "Site is the exact place of a settlement, while situation is its position relative to other places." },
      { q: "Which town is a major Nigerian port?", options: ["Jos", "Lagos", "Kano", "Abuja"], answer: 1, explanation: "Lagos is Nigeria's main port city, handling most of the country's sea trade." },
      { q: "What is urbanisation?", options: ["The movement of people to villages", "The growth in the share of people living in towns and cities", "The building of rural roads", "The fall in city population"], answer: 1, explanation: "Urbanisation is the increase in the proportion of a population living in urban areas." },
      { q: "Which settlement pattern is common in Yoruba towns?", options: ["Nucleated", "Dispersed", "Linear", "Isolated"], answer: 0, explanation: "Yoruba towns are often nucleated, clustered around a market, palace or church." },
      { q: "The main function of Jos as a settlement is what?", options: ["Port", "Mining", "Fishing", "Administration only"], answer: 1, explanation: "Jos grew as a mining town, extracting tin and other minerals from the Jos Plateau." },
      { q: "Which city is Nigeria's administrative capital?", options: ["Lagos", "Kano", "Ibadan", "Abuja"], answer: 3, explanation: "Abuja is the Federal Capital Territory and the seat of Nigeria's government." },
      { q: "Which is a cause of urbanisation in Nigeria?", options: ["Falling birth rates", "Fewer jobs in cities", "Reclassification of growing villages as towns", "Rural depopulation only"], answer: 2, explanation: "When a growing village is reclassified as a town, its people count as urban, adding to urbanisation." },
      { q: "Makoko in Lagos is an example of what?", options: ["A planned city", "A slum settlement", "A mining town", "A farm village"], answer: 1, explanation: "Makoko is a densely settled waterside community with poor housing and inadequate services, a slum." },
      { q: "Settlements cluster around wells in the dry north mainly because of what?", options: ["Water supply", "Defence", "Trade", "Mining"], answer: 0, explanation: "In dry areas, people settle where water is available, so wells and rivers attract nucleated settlements." },
      { q: "Which is a solution to urban problems in Nigeria?", options: ["Ignoring slums", "Building affordable housing", "Closing markets", "Banning migration"], answer: 1, explanation: "Building affordable housing reduces overcrowding and slum growth in fast-growing cities." },
      { q: "Ibadan is best described as what kind of centre?", options: ["Commercial, educational and administrative centre", "Port city", "Mining town", "Fishing village"], answer: 0, explanation: "Ibadan has several functions: it is a commercial, educational and administrative centre." },
      { q: "Linear settlements most often develop along what?", options: ["Hilltops only", "Deserts", "Roads and rivers", "Swamps"], answer: 2, explanation: "Houses line up along roads, rivers and railways where transport and trade are easiest." },
      { q: "When city growth outpaces housing, water and transport, what results?", options: ["Overcrowding and slums", "More farmland", "Falling population", "Less traffic"], answer: 0, explanation: "Services cannot keep up with rapid growth, so overcrowding, slums and congestion appear." }
    ],
    status: "published"
  },
  {
    id: "geography-09",
    subjectId: "geography",
    topic: "Economic Geography",
    subtopic: "Agriculture and industry",
    title: "Agriculture and Industry in Nigeria",
    order: 9,
    introduction: "Agriculture feeds Nigeria and industry adds value to what the land produces. This lesson explains farming systems, the main crops and livestock, and the growth of industry, with Nigerian examples from cocoa farms to cement factories.",
    objectives: ["Describe subsistence and commercial farming in Nigeria", "Identify the main food and cash crops and where they grow", "Explain pastoralism and livestock farming", "Describe the types and location of industries in Nigeria", "Discuss the problems and prospects of agriculture and industry"],
    sections: [
      {
        heading: "Farming Systems in Nigeria",
        body: "Nigerian farming takes several forms. Subsistence farming produces mainly for the family, using simple tools, small plots and family labour, and it is still the most common system in rural areas. Commercial farming produces for sale, using larger farms, improved seeds, fertiliser and machines, as in the large rice farms of Kebbi State. Shifting cultivation clears a plot, crops it for a few years, then leaves it fallow to recover, while mixed farming combines crops and livestock on the same farm. Plantation farming grows one cash crop, such as oil palm or rubber, on a large estate. Each system suits different conditions: subsistence farming suits areas with little capital, while commercial farming needs good roads, markets and credit. JAMB often asks you to compare these systems and to name the crops each one produces."
      },
      {
        heading: "Crops and Livestock",
        body: "Nigeria's crops divide into food crops and cash crops. Food crops include yam, cassava, maize, rice, millet, sorghum and plantain: yam is the leading crop of the Middle Belt and south-east, cassava grows widely in the south, and millet and sorghum suit the drier north. Cash crops earn export income: cocoa from the south-west, especially Ondo and Osun States, groundnuts from Kano and the north, oil palm from the south-east, and rubber from Edo and Delta States. Livestock farming is important in the north, where cattle, goats and sheep graze the savanna, and the Fulani herders move their cattle seasonally in search of pasture and water. Poultry farming is growing around cities, supplying eggs and meat to urban markets. Climate, soil and market access decide which crops and animals thrive in each zone."
      },
      {
        heading: "Industry in Nigeria",
        body: "Industry turns raw materials into finished goods, and Nigeria has several types. Primary industries extract raw materials, such as oil and gas in the Niger Delta and solid minerals such as limestone, tin and coal. Secondary industries manufacture goods: cement at Obajana in Kogi State and Ewekoro in Ogun State, steel at Ajaokuta, textiles in Kano and Kaduna, food processing in Lagos, and vehicle assembly in Lagos and Nnewi. Tertiary industries provide services, such as banking, transport and trade. Most Nigerian industries cluster in Lagos, Kano, Kaduna, Port Harcourt and Onitsha, because those cities offer markets, labour, power, transport and raw materials. The location of an industry depends on raw materials, market, labour, power, transport and government policy, and JAMB questions often ask which factor matters most for a named industry."
      },
      {
        heading: "Problems and Prospects",
        body: "Nigerian agriculture faces low productivity from poor seeds, little fertiliser, erratic rainfall and poor roads, which make it hard to move produce to market. Storage is poor, so much food is lost after harvest, and young people leave farming for city jobs. Industry faces unreliable power supply, high costs, competition from imports, and poor transport. Prospects are real, however: irrigation in the north, improved seeds and fertiliser, and government programmes such as the Anchor Borrowers scheme support farmers. For industry, local content policies, industrial estates, and the Dangote refinery in Lagos show what investment can achieve. The future of both sectors depends on power, roads, credit and skills, and on adding value at home instead of exporting raw materials and importing finished goods."
      }
    ],
    definitions: [
      { term: "Subsistence farming", meaning: "Farming that produces mainly for the farmer's family, not for sale." },
      { term: "Commercial farming", meaning: "Farming that produces mainly for sale in the market." },
      { term: "Cash crop", meaning: "A crop grown mainly for sale or export, such as cocoa or groundnut." },
      { term: "Plantation", meaning: "A large farm growing one cash crop, such as oil palm or rubber." },
      { term: "Secondary industry", meaning: "Manufacturing industry that turns raw materials into finished goods." },
      { term: "Agroforestry", meaning: "Farming that combines trees with crops or livestock on the same land." }
    ],
    formulas: ["Agriculture = crops + livestock + fishing + forestry.", "Industry location depends on raw materials, market, labour, power, transport and policy.", "Food crops feed people; cash crops earn money.", "Value added = price of finished goods - cost of raw materials."],
    examples: [
      {
        title: "Matching a crop to its zone",
        problem: "Cocoa is a leading cash crop of south-western Nigeria. Why does it grow there and not in the far north?",
        steps: ["Recall cocoa needs high rainfall, over 1,500 mm, and steady warmth.", "Note the south-west has a humid rainforest climate with enough rain.", "Note the far north is dry, with under 600 mm of rain.", "Recall cocoa also needs shade and deep, fertile soils.", "Conclude the climate and soils of the south-west suit cocoa, while the north does not."],
        answer: "Cocoa needs heavy rain and steady warmth, which the humid south-west provides but the dry far north does not."
      },
      {
        title: "Explaining an industrial location",
        problem: "Why is a cement factory located at Obajana in Kogi State?",
        steps: ["Identify the main raw material for cement: limestone.", "Note that Obajana has large limestone deposits nearby.", "Recall that cement is heavy, so it is best made near its raw material.", "Add other factors: market in central Nigeria, roads and labour.", "Conclude raw material availability is the main locational factor."],
        answer: "Obajana has abundant limestone, the main raw material for cement, so the factory is sited near its raw material."
      }
    ],
    tips: ["Learn crops by zone: cocoa in the south-west, groundnut in the north, oil palm in the south-east.", "Subsistence is for the family; commercial is for the market.", "For industry location, ask which factor matters most: raw material, market or power.", "Use Obajana cement and Ajaokuta steel as Nigerian examples."],
    mistakes: ["Calling cocoa a food crop; it is a cash crop.", "Saying subsistence farming uses machines and large farms.", "Placing groundnuts in the rainforest zone.", "Forgetting that power supply is a major problem for Nigerian industry."],
    facts: ["Yam is a leading food crop of the Middle Belt and south-east.", "Cocoa is the main cash crop of south-western Nigeria.", "Cement is made at Obajana in Kogi State from local limestone.", "The Fulani are Nigeria's main cattle herders."],
    quiz: [
      { q: "Which farming system produces mainly for the family?", options: ["Commercial farming", "Subsistence farming", "Plantation farming", "Mechanised farming"], answer: 1, explanation: "Subsistence farming produces mainly for the farmer's family, using simple tools and small plots." },
      { q: "Which is a cash crop of south-western Nigeria?", options: ["Millet", "Cocoa", "Sorghum", "Groundnut"], answer: 1, explanation: "Cocoa is the leading cash crop of the south-west, grown in Ondo, Osun and Oyo States." },
      { q: "Where is cement made from local limestone in Nigeria?", options: ["Kano", "Obajana", "Enugu", "Jos"], answer: 1, explanation: "Obajana in Kogi State has large limestone deposits and a major cement factory." },
      { q: "Which livestock are mainly herded by the Fulani?", options: ["Pigs", "Cattle", "Chickens", "Fish"], answer: 1, explanation: "The Fulani are Nigeria's main cattle herders, moving their herds seasonally for pasture and water." },
      { q: "What is the main problem facing Nigerian industry?", options: ["Too much rainfall", "Unreliable power supply", "Too many workers", "Lack of raw materials"], answer: 1, explanation: "Unreliable electricity is the most widely cited problem for Nigerian manufacturers, raising costs and limiting output." },
      { q: "Groundnuts are mainly grown in which part of Nigeria?", options: ["South-west", "Kano and the north", "Niger Delta", "Jos Plateau"], answer: 1, explanation: "Groundnuts are a cash crop of the north, grown around Kano and other northern states." },
      { q: "Which of these is a primary industry?", options: ["Oil and gas extraction", "Cement making", "Banking", "Transport"], answer: 0, explanation: "Primary industries extract raw materials, such as oil and gas from the Niger Delta." },
      { q: "Which of these is a tertiary industry?", options: ["Mining", "Farming", "Steel making", "Banking"], answer: 3, explanation: "Tertiary industries provide services, such as banking, transport and trade." },
      { q: "Rubber is grown mainly in which Nigerian states?", options: ["Kano and Kaduna", "Sokoto and Borno", "Edo and Delta", "Yobe and Jigawa"], answer: 2, explanation: "Rubber is a plantation crop of the humid south, grown mainly in Edo and Delta States." },
      { q: "Which farming system combines crops and livestock on the same farm?", options: ["Shifting cultivation", "Mixed farming", "Plantation farming", "Subsistence farming only"], answer: 1, explanation: "Mixed farming combines crops and livestock, so the animals provide manure and the crops provide feed." },
      { q: "Ajaokuta in Kogi State is known for what industry?", options: ["Steel", "Cement", "Textiles", "Oil refining"], answer: 0, explanation: "Ajaokuta is the site of Nigeria's steel complex, built to use local iron ore." },
      { q: "Textile industries in Nigeria are found mainly in which cities?", options: ["Lagos only", "Kano and Kaduna", "Enugu only", "Calabar only"], answer: 1, explanation: "Kano and Kaduna have long been centres of textile manufacturing in northern Nigeria." },
      { q: "Which is a major problem of agriculture in Nigeria?", options: ["Too much fertiliser", "Too many farm workers", "Poor storage and post-harvest losses", "Too much rainfall everywhere"], answer: 2, explanation: "Poor storage means much harvested food is lost before it reaches the market." },
      { q: "The Anchor Borrowers programme supports which group?", options: ["Farmers", "Miners", "Bankers", "Traders"], answer: 0, explanation: "The Anchor Borrowers scheme gives farmers credit and inputs to raise food production." },
      { q: "Oil palm is mainly grown in which part of Nigeria?", options: ["Far north", "South-east", "Jos Plateau", "Chad Basin"], answer: 1, explanation: "Oil palm is a cash crop of the humid south-east, where rainfall is high all year." }
    ],
    status: "published"
  },
  {
    id: "geography-10",
    subjectId: "geography",
    topic: "Economic Geography",
    subtopic: "Transport, trade and development",
    title: "Transport, Trade and Development in Nigeria",
    order: 10,
    introduction: "Transport moves goods and people, trade exchanges them, and together they drive development. This final lesson explains Nigeria's transport systems, its internal and international trade, and what development means for a country like Nigeria.",
    objectives: ["Describe road, rail, water and air transport in Nigeria", "Explain the advantages and disadvantages of each transport mode", "Describe Nigeria's internal and international trade", "Explain the meaning and measures of development", "Discuss the challenges and prospects of development in Nigeria"],
    sections: [
      {
        heading: "Transport in Nigeria",
        body: "Nigeria has four main modes of transport. Roads carry most passengers and goods: the Lagos-Ibadan expressway, the Abuja-Kaduna road and the East-West road link the major cities, but many roads are in poor condition. Railways carry bulk goods such as cement and containers: the Lagos-Ibadan standard gauge line and the Abuja-Kaduna line are modern examples, while older narrow-gauge lines link Lagos to Kano. Water transport uses the rivers Niger and Benue and the coastal creeks, and the ports of Lagos, Port Harcourt, Warri and Calabar handle sea trade. Air transport links Lagos, Abuja, Kano and Port Harcourt with domestic and international flights. Each mode suits different needs: roads are flexible, rail is cheap for bulk goods, water is cheapest for heavy cargo, and air is fastest but most expensive."
      },
      {
        heading: "Trade in Nigeria",
        body: "Trade is the exchange of goods and services. Internal trade moves goods within Nigeria: yams from the Middle Belt to Lagos, cattle from the north to the south, and manufactured goods from Lagos to the rest of the country. Markets such as Onitsha Main Market, one of the largest in West Africa, and Mile 12 in Lagos are centres of this trade. International trade exchanges goods with other countries: Nigeria exports crude oil, which provides most of its foreign earnings, plus cocoa, rubber, sesame and solid minerals, and it imports machinery, vehicles, food, fuel and manufactured goods. Nigeria trades mainly with the United States, China, India and the European Union, and within West Africa through ECOWAS. A favourable balance of trade means exports exceed imports, while an unfavourable balance means the reverse."
      },
      {
        heading: "Development and Its Measures",
        body: "Development means improvement in people's quality of life, not just growth in income. It is measured by indicators such as gross domestic product per head, life expectancy, literacy rate, infant mortality, access to clean water, and the Human Development Index, which combines income, health and education. Nigeria is classed as a developing country: it has a large economy and rich resources, but life expectancy is around 53 years, literacy is uneven, and many people lack clean water and reliable power. Development is uneven within Nigeria too: Lagos and Abuja are more developed than many rural areas. Improving development means raising incomes, health and education together, not one alone, and it requires investment in people as well as in roads and factories."
      },
      {
        heading: "Challenges and Prospects for Development",
        body: "Nigeria's development faces several challenges. Over-dependence on crude oil makes the economy vulnerable when oil prices fall. Poor power supply and bad roads raise the cost of doing business. Corruption diverts public funds, and insecurity in the north-east and Middle Belt disrupts farming and trade. Rapid population growth means schools, hospitals and jobs must expand quickly just to stand still. Prospects are strong, however: Nigeria has a large, young population, fertile land, solid minerals, a growing technology sector in Lagos, and a large market of over 200 million people. Diversifying the economy into agriculture, manufacturing, technology and services, improving power and transport, and investing in education and health are the paths most often recommended for sustainable development."
      }
    ],
    definitions: [
      { term: "Balance of trade", meaning: "The difference between the value of a country's exports and its imports." },
      { term: "Internal trade", meaning: "Trade in goods and services within a country." },
      { term: "International trade", meaning: "Trade in goods and services between countries." },
      { term: "Development", meaning: "Improvement in people's quality of life, including income, health and education." },
      { term: "Human Development Index", meaning: "A measure combining income, life expectancy and education to rank development." },
      { term: "Diversification", meaning: "Spreading an economy across several sectors instead of depending on one." }
    ],
    formulas: ["Balance of trade = value of exports - value of imports.", "Development = income + health + education, not income alone.", "Roads are flexible, rail is cheap for bulk, water is cheapest for heavy cargo, air is fastest.", "Sustainable development meets present needs without harming future generations."],
    examples: [
      {
        title: "Choosing the best transport mode",
        problem: "A company needs to move 500 tonnes of cement from Obajana to Lagos. Which transport mode is most suitable, and why?",
        steps: ["Note the cargo: 500 tonnes of cement, heavy and bulky.", "Recall that rail and water are cheapest for heavy bulk goods.", "Note that rail links the interior to Lagos and handles bulk well.", "Reject air, which is far too expensive for cement, and road, which is costlier per tonne.", "Conclude rail is the most suitable mode for bulk cement."],
        answer: "Rail is most suitable: it is cheap for heavy bulk goods over a long distance."
      },
      {
        title: "Calculating a balance of trade",
        problem: "In a year, Nigeria exports goods worth 40 billion dollars and imports goods worth 35 billion dollars. What is the balance of trade?",
        steps: ["Write the formula: balance of trade equals exports minus imports.", "Insert the values: 40 billion minus 35 billion.", "Calculate the difference: 5 billion dollars.", "Note the sign: exports exceed imports, so the balance is favourable.", "State the answer with the correct unit."],
        answer: "The balance of trade is a favourable 5 billion dollars."
      }
    ],
    tips: ["Learn the four transport modes and one advantage of each.", "Crude oil provides most of Nigeria's export earnings.", "Development is measured by income, health and education together.", "Onitsha Main Market is a key example of internal trade."],
    mistakes: ["Saying air transport is cheapest; it is the most expensive.", "Confusing internal trade with international trade.", "Measuring development by income alone.", "Forgetting that Nigeria imports fuel despite exporting crude oil."],
    facts: ["Roads carry most passengers and goods in Nigeria.", "Onitsha Main Market is one of the largest markets in West Africa.", "Crude oil provides most of Nigeria's foreign earnings.", "Nigeria is a member of ECOWAS and trades with West African neighbours."],
    quiz: [
      { q: "Which transport mode is cheapest for heavy bulk goods?", options: ["Air", "Road", "Water", "Pipeline"], answer: 2, explanation: "Water transport is cheapest for heavy, bulky cargo, followed by rail; air is the most expensive." },
      { q: "What is Nigeria's main export?", options: ["Cocoa", "Crude oil", "Groundnut", "Rubber"], answer: 1, explanation: "Crude oil provides most of Nigeria's export earnings and foreign exchange." },
      { q: "Balance of trade is calculated as what?", options: ["Imports minus exports", "Exports minus imports", "Exports plus imports", "Exports divided by imports"], answer: 1, explanation: "Balance of trade equals the value of exports minus the value of imports." },
      { q: "Which market is one of the largest in West Africa?", options: ["Mile 12, Lagos", "Onitsha Main Market", "Bodija Market", "Kurmi Market"], answer: 1, explanation: "Onitsha Main Market in Anambra State is one of the largest markets in West Africa." },
      { q: "What does the Human Development Index combine?", options: ["Income only", "Income, health and education", "Population and area", "Exports and imports"], answer: 1, explanation: "The Human Development Index combines income, life expectancy and education to measure development." },
      { q: "Which transport mode is the fastest?", options: ["Air", "Rail", "Water", "Road"], answer: 0, explanation: "Air transport is the fastest mode, but it is also the most expensive." },
      { q: "The Lagos-Ibadan railway line is built to which gauge?", options: ["Narrow gauge", "Expressway", "Standard gauge", "Waterway"], answer: 2, explanation: "The Lagos-Ibadan line is a modern standard gauge railway, unlike the older narrow-gauge lines." },
      { q: "Which of these is a Nigerian seaport?", options: ["Lokoja", "Warri", "Kano", "Jos"], answer: 1, explanation: "Warri is a port on the Niger Delta coast, handling sea trade like Lagos, Port Harcourt and Calabar." },
      { q: "Mile 12 in Lagos is a major centre for what?", options: ["Internal trade in foodstuffs", "Oil export", "Car assembly", "Textile export"], answer: 0, explanation: "Mile 12 is a major foodstuffs market, where produce from across Nigeria is traded." },
      { q: "Nigeria trades within West Africa mainly through which body?", options: ["The European Union only", "OPEC only", "ECOWAS", "The Commonwealth only"], answer: 2, explanation: "ECOWAS, the Economic Community of West African States, promotes trade among West African countries." },
      { q: "Life expectancy in Nigeria is around how many years?", options: ["75 years", "53 years", "40 years", "90 years"], answer: 1, explanation: "Nigeria's life expectancy is around 53 years, which is low compared with developed countries." },
      { q: "If Nigeria exports goods worth 40 billion dollars and imports goods worth 45 billion dollars, what is the balance of trade?", options: ["Favourable 5 billion dollars", "Unfavourable 5 billion dollars", "Balanced", "Favourable 85 billion dollars"], answer: 1, explanation: "Exports minus imports is 40 minus 45, which is minus 5 billion dollars, an unfavourable balance." },
      { q: "Which of these is an indicator of development?", options: ["Literacy rate", "Number of cars", "Size of the army", "Amount of rainfall"], answer: 0, explanation: "The literacy rate measures education, which is one of the key indicators of development." },
      { q: "Over-dependence on crude oil makes Nigeria vulnerable to what?", options: ["Heavy rainfall", "Falling oil prices", "Too many exports", "Cold weather"], answer: 1, explanation: "When world oil prices fall, Nigeria's export earnings and government revenue fall with them." },
      { q: "The Dangote refinery, one of the largest in Africa, is located in which state?", options: ["Lagos", "Kano", "Abuja", "Port Harcourt"], answer: 0, explanation: "The Dangote refinery is in the Lekki area of Lagos State." }
    ],
    status: "published"
  },
  {
    id: "geography-11",
    subjectId: "geography",
    topic: "Environmental Issues and Conservation",
    subtopic: "Environmental hazards and disasters",
    title: "Environmental Hazards and Disasters",
    order: 11,
    introduction: "Floods, drought, erosion and oil spills regularly disrupt life in Nigeria. This lesson explains what environmental hazards and disasters are, why they happen, and how they can be managed, with Nigerian examples from the Niger Delta to the gullies of the south-east.",
    objectives: ["Distinguish between a hazard and a disaster", "Describe the main natural hazards affecting Nigeria", "Explain the causes and effects of flooding in Nigeria", "Explain the causes and effects of drought and gully erosion", "Discuss how hazards can be predicted, prevented and managed"],
    sections: [
      {
        heading: "Hazards and Disasters",
        body: "A hazard is a natural or human event that has the potential to cause harm, such as a heavy rainstorm, an earthquake or an oil spill. A disaster happens when a hazard strikes people and causes serious loss of life, property and livelihoods. The same flood is a hazard in an empty field but a disaster in a crowded town, because disaster depends on how many people and how much property are exposed, and how vulnerable they are. Vulnerability is higher where houses are built on floodplains, where drainage is poor, and where people are too poor to rebuild. This is why the same amount of rain can cause a minor flood in one place and a disaster in another. Disaster management has four stages: prevention, reducing the risk before it happens; preparedness, such as early warning systems; response, such as rescue and relief; and recovery, rebuilding after the event."
      },
      {
        heading: "Flooding in Nigeria",
        body: "Flooding is Nigeria's most common disaster. It is caused by heavy rainfall, rivers overflowing their banks, poor drainage in towns, building on floodplains, and the release of water from dams. Coastal flooding affects Lagos and the Niger Delta, where the land is low and the sea can push water inland, while river flooding affects towns along the Niger and Benue, such as Lokoja and Makurdi. The severe floods of 2012 affected millions of Nigerians and were worsened by heavy rain and the release of water from the Lagdo Dam in Cameroon. Floods destroy homes, farms and roads, spread water-borne diseases such as cholera, and displace families. They can be reduced by building dykes and levees, clearing drains, avoiding construction on floodplains, planting trees to slow runoff, and giving early warnings so people can move to safety."
      },
      {
        heading: "Drought, Erosion and Other Hazards",
        body: "Drought is a prolonged period of little or no rainfall, and it is a serious hazard in northern Nigeria, where it dries up wells, kills crops and livestock, and forces people to migrate. It is linked to desertification, the spread of desert-like conditions, and to climate change, which is making rainfall more erratic. Gully erosion is another major hazard, worst in the south-east in states such as Anambra and Imo, where heavy rain on sandy soils cuts deep gullies that swallow farmland, roads and houses. It is worsened by deforestation and poor farming on slopes. Other hazards include oil spillage in the Niger Delta, which pollutes rivers and farmland and destroys fishing and farming livelihoods, and landslides on steep slopes during heavy rain. Earthquakes are rare in Nigeria because the country sits away from plate boundaries, but small tremors have been felt in parts of the south-west."
      },
      {
        heading: "Managing Hazards and Disasters",
        body: "Hazards cannot always be prevented, but their damage can be reduced. Prediction and early warning are the first step: the Nigerian Meteorological Agency forecasts heavy rain, and river levels are monitored so warnings can reach people in time. The National Emergency Management Agency, NEMA, coordinates disaster response in Nigeria, working with state emergency agencies, the Red Cross and local communities. Mitigation measures include building flood defences, enforcing planning laws so people do not build on floodplains, planting shelterbelts and trees to control erosion and desertification, and cleaning up oil spills quickly. After a disaster, relief such as food, shelter and medicine is given, and recovery means rebuilding homes, roads and farms, often with better protection than before. Communities that prepare, with evacuation plans and stored supplies, suffer far less than those caught unprepared."
      }
    ],
    definitions: [
      { term: "Hazard", meaning: "A natural or human event that has the potential to cause harm." },
      { term: "Disaster", meaning: "A hazard that causes serious loss of life, property and livelihoods." },
      { term: "Vulnerability", meaning: "How exposed and how poorly prepared people are when a hazard strikes." },
      { term: "Flood", meaning: "An overflow of water onto land that is normally dry." },
      { term: "Drought", meaning: "A prolonged period of little or no rainfall." },
      { term: "Mitigation", meaning: "Action taken to reduce the damage a hazard can cause." }
    ],
    formulas: ["Disaster = hazard + vulnerable people and property.", "Flood risk rises with heavy rain, poor drainage and building on floodplains.", "Drought + overgrazing + deforestation = desertification.", "Disaster management = prevention + preparedness + response + recovery."],
    examples: [
      {
        title: "Deciding whether an event is a disaster",
        problem: "Heavy rain falls on an empty farmland and causes a small flood with no damage. In a nearby town, the same rain floods homes and destroys a market. Which is a disaster and why?",
        steps: ["Recall that a hazard is an event with the potential to cause harm.", "Note the farmland flood caused no loss of life or property.", "Note the town flood destroyed homes and a market.", "Recall that a disaster needs serious loss to people and property.", "Conclude the town flood is a disaster, while the farmland flood is only a hazard."],
        answer: "The town flood is a disaster because it caused serious loss; the farmland flood is only a hazard."
      },
      {
        title: "Explaining gully erosion in the south-east",
        problem: "Why is gully erosion so severe in parts of Anambra State?",
        steps: ["Note the rainfall: heavy rain falls in the south-east.", "Note the soil: sandy soils are easily washed away.", "Add the human causes: deforestation and farming on slopes remove plant cover.", "Note the result: rainwater cuts deep channels into the bare soil.", "Conclude the gullies come from heavy rain on erodible soil without plant cover."],
        answer: "Heavy rain on sandy soils, worsened by deforestation and slope farming, cuts deep gullies in Anambra State."
      }
    ],
    tips: ["A hazard becomes a disaster only when it causes serious loss to people and property.", "Learn Nigeria's flood zones: Lagos, the Niger Delta, Lokoja and Makurdi.", "Gully erosion is worst in the south-east; drought is worst in the north.", "NEMA coordinates disaster management in Nigeria."],
    mistakes: ["Calling every hazard a disaster.", "Saying earthquakes are common in Nigeria; they are rare.", "Forgetting the human causes of flooding, such as building on floodplains.", "Confusing drought with desertification; drought is lack of rain, desertification is the spread of desert conditions."],
    facts: ["Flooding is Nigeria's most common disaster.", "The 2012 floods affected millions of Nigerians.", "Gully erosion is worst in south-eastern states such as Anambra and Imo.", "NEMA is the National Emergency Management Agency."],
    quiz: [
      { q: "A disaster is best described as what?", options: ["Any natural event", "A hazard that causes serious loss of life and property", "A man-made event only", "A weather forecast"], answer: 1, explanation: "A disaster is a hazard that strikes people and causes serious loss of life, property and livelihoods." },
      { q: "Which Nigerian city is most affected by coastal flooding?", options: ["Kano", "Lagos", "Jos", "Abuja"], answer: 1, explanation: "Lagos is low-lying on the coast, so it suffers coastal flooding when the sea pushes water inland." },
      { q: "Gully erosion is a serious problem in which part of Nigeria?", options: ["South-east", "North-west coast", "Lagos Island", "Jos Plateau"], answer: 0, explanation: "Gully erosion is worst in the south-east, in states such as Anambra and Imo, where heavy rain cuts deep gullies in sandy soils." },
      { q: "Which is a human cause of flooding?", options: ["Tides", "Heavy rainfall", "Building on floodplains", "High altitude"], answer: 2, explanation: "Building houses on floodplains puts people and property in the path of flood water." },
      { q: "What is a drought?", options: ["A prolonged period of little or no rainfall", "A sudden flood", "A volcanic eruption", "A strong wind"], answer: 0, explanation: "Drought is a long period with little or no rain, which dries up wells and kills crops." },
      { q: "The severe 2012 floods in Nigeria were worsened by the release of water from which dam?", options: ["Kainji Dam", "Lagdo Dam", "Shiroro Dam", "Jebba Dam"], answer: 1, explanation: "Water released from the Lagdo Dam in Cameroon flowed down the Benue and worsened the 2012 floods." },
      { q: "Which agency coordinates disaster management in Nigeria?", options: ["NEMA", "NNPC", "NAFDAC", "FRSC"], answer: 0, explanation: "The National Emergency Management Agency, NEMA, coordinates disaster response in Nigeria." },
      { q: "An earthquake is caused by what?", options: ["Heavy rain", "Sudden release of stress along a fault", "Volcanic ash", "High tides"], answer: 1, explanation: "An earthquake happens when stress built up along a fault is suddenly released as the rocks move." },
      { q: "Which is a mitigation measure against flooding?", options: ["Building on river banks", "Cutting down trees", "Blocking drains", "Building dykes and proper drainage"], answer: 3, explanation: "Dykes hold back flood water and good drainage carries it away, reducing flood damage." },
      { q: "Oil spillage in the Niger Delta mainly damages what?", options: ["Air transport", "Fishing and farming livelihoods", "Mountain climbing", "Desert farming"], answer: 1, explanation: "Oil spills pollute rivers and farmland, destroying the fishing and farming on which Delta communities depend." },
      { q: "Which hazard is caused by the movement of plates?", options: ["Drought", "Flooding", "Earthquake", "Gully erosion"], answer: 2, explanation: "Earthquakes are caused by plate movement, when stress along faults is released as a sudden shock." },
      { q: "Early warning systems help people mainly by doing what?", options: ["Giving people time to prepare and evacuate", "Stopping the hazard", "Increasing rainfall", "Building houses"], answer: 0, explanation: "Early warnings give people time to move to safety and protect their property before the hazard strikes." },
      { q: "Which hazard in northern Nigeria is linked to desertification?", options: ["Flooding", "Drought", "Landslide", "Tsunami"], answer: 1, explanation: "Drought dries the land and, with overgrazing and tree cutting, turns it into desert-like land." },
      { q: "Planting trees helps control which hazards?", options: ["Earthquakes", "Volcanoes", "Gully erosion and desertification", "Tsunamis"], answer: 2, explanation: "Tree roots hold the soil against erosion and shelterbelts slow the advance of the desert." },
      { q: "Which is a secondary effect of flooding?", options: ["Heavy rainfall", "Dam collapse", "Earthquake", "Outbreak of water-borne diseases such as cholera"], answer: 3, explanation: "Flood water contaminates drinking water, leading to outbreaks of cholera and other water-borne diseases." }
    ],
    status: "published"
  },
  {
    id: "geography-12",
    subjectId: "geography",
    topic: "Environmental Issues and Conservation",
    subtopic: "Conservation and sustainable development",
    title: "Conservation and Sustainable Development",
    order: 12,
    introduction: "Nigeria's forests, wildlife, soils and waters are being used faster than they can recover. This lesson explains why conservation matters, how resources can be protected, and what sustainable development means for Nigeria's future.",
    objectives: ["Explain what conservation means and why it matters", "Distinguish renewable from non-renewable resources", "Describe methods of conserving forests, wildlife, soil and water", "Explain sustainable development and its principles", "Discuss Nigeria's main environmental problems and their solutions"],
    sections: [
      {
        heading: "Why Conserve Resources",
        body: "Conservation is the wise use and protection of natural resources so that they last and can keep serving people. Resources fall into two groups. Renewable resources, such as sunlight, wind, water and forests, can be replaced naturally if they are not used faster than they regrow. Non-renewable resources, such as crude oil, coal and solid minerals, exist in fixed amounts and are used up once they are mined. Nigeria is rich in both, but its forests are shrinking, its wildlife is declining, and its oil will one day run out. Without conservation, the next generation will inherit bare land, empty rivers and no fuel. Conservation is therefore not about stopping use, but about using resources at a rate the environment can sustain, and protecting the places and species that cannot be replaced."
      },
      {
        heading: "Conserving Forests, Wildlife, Soil and Water",
        body: "Forests are conserved by controlling logging, planting new trees, which is called afforestation, and replanting trees where they were cut, which is reforestation. Shelterbelts of trees are planted in the north to hold back the desert, and the Great Green Wall is a large tree-planting project across the Sahel. Wildlife is conserved in national parks and game reserves, such as Yankari Game Reserve in Bauchi State and Cross River National Park, where hunting is controlled and habitats are protected. Soil is conserved by terracing steep slopes, contour ploughing, planting cover crops and leaving land fallow to recover. Water is conserved by protecting rivers and lakes from pollution, using irrigation carefully, and harvesting rainwater. Each method protects the resource while still allowing people to use it, which is the heart of conservation."
      },
      {
        heading: "Sustainable Development",
        body: "Sustainable development is development that meets the needs of the present without harming the ability of future generations to meet their own needs. It rests on three pillars: economic growth, so people have jobs and incomes; social progress, so people have health, education and fairness; and environmental protection, so the land, water and air are not destroyed. In practice, this means using renewable energy such as hydroelectric power and solar power, farming in ways that keep the soil fertile, building towns with proper waste disposal, and making sure industries clean up their waste instead of dumping it in rivers. For Nigeria, sustainable development means diversifying away from crude oil into agriculture, manufacturing and technology, investing in education and health, and protecting the Niger Delta from further oil damage, so that growth today does not destroy the chances of tomorrow."
      },
      {
        heading: "Environmental Problems and Solutions in Nigeria",
        body: "Nigeria faces several serious environmental problems. Deforestation is driven by cutting trees for fuelwood and farming, and it causes soil erosion, loss of wildlife and changes in rainfall. Air pollution from vehicles, generators and gas flaring harms health in cities such as Lagos and Port Harcourt, while gas flaring in the Niger Delta also adds carbon dioxide to the atmosphere, contributing to global warming. Water pollution from oil spills, industrial waste and sewage damages rivers and fishing. Waste disposal is a problem in cities, where refuse is often dumped in open sites. Solutions include enforcing environmental laws through the National Environmental Standards and Regulations Enforcement Agency, NESREA, promoting clean energy such as solar power, recycling waste, planting trees, and teaching people why the environment matters. International agreements on climate change also commit Nigeria to cutting emissions and protecting its forests."
      }
    ],
    definitions: [
      { term: "Conservation", meaning: "The wise use and protection of natural resources so they last." },
      { term: "Renewable resource", meaning: "A resource that can be replaced naturally, such as sunlight, water or forest." },
      { term: "Non-renewable resource", meaning: "A resource in fixed supply that is used up once mined, such as crude oil." },
      { term: "Sustainable development", meaning: "Development that meets present needs without harming future generations." },
      { term: "Afforestation", meaning: "Planting trees in an area where there was no forest before." },
      { term: "Deforestation", meaning: "The clearing of forests for farming, fuelwood or other uses." }
    ],
    formulas: ["Sustainable development = economic growth + social progress + environmental protection.", "Renewable resources regrow if use is slower than regrowth; non-renewable resources do not.", "Conservation = wise use + protection + restoration of resources.", "Global warming is driven mainly by carbon dioxide from burning fossil fuels."],
    examples: [
      {
        title: "Classifying a resource",
        problem: "A community uses firewood from its forest and crude oil from a nearby well. Which resource is renewable and which is not, and why?",
        steps: ["Recall that a renewable resource can be replaced naturally.", "Note that trees regrow if the forest is replanted and not overcut.", "Recall that a non-renewable resource exists in a fixed amount.", "Note that crude oil formed over millions of years and cannot regrow in a human lifetime.", "Conclude firewood is renewable if managed, while crude oil is non-renewable."],
        answer: "Firewood is renewable because trees regrow; crude oil is non-renewable because it cannot be replaced once used."
      },
      {
        title: "Choosing a sustainable practice",
        problem: "A farmer cuts down all the trees on a slope to plant yams, and the soil washes away in the rains. What sustainable practice should he have used instead?",
        steps: ["Identify the problem: removing all trees exposed the soil to erosion.", "Recall that conservation allows use while protecting the soil.", "Consider agroforestry: keeping some trees with the crops.", "Add contour ploughing and terracing to slow runoff on the slope.", "Conclude the farmer should have combined trees with crops and ploughed along the contour."],
        answer: "He should have practised agroforestry and contour ploughing, keeping tree cover so the soil is not washed away."
      }
    ],
    tips: ["Renewable means it can regrow or be replaced; non-renewable means it runs out.", "Sustainable development has three pillars: economy, society and environment.", "Learn Yankari Game Reserve and Cross River National Park as conservation examples.", "NESREA enforces environmental standards in Nigeria."],
    mistakes: ["Calling crude oil a renewable resource.", "Saying conservation means never using resources at all.", "Confusing afforestation with deforestation.", "Forgetting that gas flaring adds carbon dioxide to the atmosphere."],
    facts: ["Crude oil is a non-renewable resource; sunlight is renewable.", "Yankari Game Reserve in Bauchi State protects wildlife.", "The Great Green Wall is a tree-planting project against desertification.", "NESREA enforces environmental standards and regulations in Nigeria."],
    quiz: [
      { q: "What does conservation mean?", options: ["Never using natural resources", "The wise use and protection of resources so they last", "Cutting down all forests", "Mining as fast as possible"], answer: 1, explanation: "Conservation is the wise use and protection of resources so they can keep serving people." },
      { q: "Which of these is a renewable resource?", options: ["Solar energy", "Crude oil", "Coal", "Iron ore"], answer: 0, explanation: "Solar energy comes from the sun and is renewed daily, unlike oil, coal and iron ore." },
      { q: "Which of these is a non-renewable resource?", options: ["Wind", "Water", "Crude oil", "Forest"], answer: 2, explanation: "Crude oil exists in a fixed amount and is used up once it is extracted." },
      { q: "Sustainable development means what?", options: ["Using resources as fast as possible", "Meeting present needs without harming future generations", "Stopping all industries", "Building more cities"], answer: 1, explanation: "Sustainable development meets today's needs while protecting the ability of future generations to meet theirs." },
      { q: "Which Nigerian reserve protects wildlife?", options: ["Yankari Game Reserve", "Tafawa Balewa Square", "National Theatre", "Aso Rock"], answer: 0, explanation: "Yankari Game Reserve in Bauchi State protects wildlife such as elephants, lions and baboons." },
      { q: "Deforestation in Nigeria is mainly caused by what?", options: ["Too much rainfall", "Cutting trees for fuelwood and farming", "Building dams", "Planting shelterbelts"], answer: 1, explanation: "Trees are cut for fuelwood and to clear land for farming, which is the main cause of deforestation." },
      { q: "Which is a method of conservation?", options: ["Overgrazing", "Dumping waste in rivers", "Creating national parks", "Burning forests"], answer: 2, explanation: "National parks protect habitats and wildlife by controlling hunting and logging." },
      { q: "Recycling helps the environment mainly by doing what?", options: ["Reducing waste and saving resources", "Increasing mining", "Burning more fuel", "Cutting more trees"], answer: 0, explanation: "Recycling turns waste into useful material, so less is thrown away and fewer new resources are mined." },
      { q: "Which gas is the main cause of global warming?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], answer: 1, explanation: "Carbon dioxide from burning fossil fuels traps heat in the atmosphere and warms the Earth." },
      { q: "The Great Green Wall project aims to do what?", options: ["Build dams across the north", "Grow cocoa in the Sahel", "Mine minerals in the desert", "Stop the desert spreading by planting trees"], answer: 3, explanation: "The Great Green Wall is a belt of trees across the Sahel that holds back desertification." },
      { q: "Which is a renewable energy source used in Nigeria?", options: ["Hydroelectric power", "Coal", "Crude oil", "Natural gas"], answer: 0, explanation: "Hydroelectric power uses flowing water, which is renewed by the water cycle, unlike fossil fuels." },
      { q: "Afforestation means what?", options: ["Cutting down a forest", "Planting trees where there was no forest", "Burning farmland", "Mining under a forest"], answer: 1, explanation: "Afforestation is planting trees in an area that had no forest, while reforestation replants a cleared forest." },
      { q: "Which agency enforces environmental standards in Nigeria?", options: ["NEMA", "NNPC", "NESREA", "NAFDAC"], answer: 2, explanation: "NESREA, the National Environmental Standards and Regulations Enforcement Agency, enforces environmental laws." },
      { q: "Overfishing in rivers and lakes leads to what?", options: ["Depletion of fish stocks", "More fish", "Cleaner water", "Bigger boats"], answer: 0, explanation: "Catching fish faster than they can breed depletes the stocks and harms fishing livelihoods." },
      { q: "Which practice conserves soil on a slope?", options: ["Ploughing up and down the slope", "Terracing and contour ploughing", "Removing all plant cover", "Burning the vegetation"], answer: 1, explanation: "Terracing and contour ploughing slow water running down a slope, so the soil is not washed away." }
    ],
    status: "published"
  },
  {
    id: "geography-13",
    subjectId: "geography",
    topic: "Soils and Water Resources",
    subtopic: "Soils: formation, types and conservation",
    title: "Soils: Formation, Types and Conservation",
    order: 13,
    introduction: "Soil is the thin layer on which all farming depends, yet it takes hundreds of years to form and can be lost in a single rainy season. This lesson explains how soils form, the layers of a soil profile, the main soil types in Nigeria, and how soil can be conserved.",
    objectives: ["Explain how soil is formed", "Describe the layers of a soil profile", "Identify the main soil types and their characteristics", "Explain soil acidity and how it is measured", "Discuss soil erosion and methods of soil conservation"],
    sections: [
      {
        heading: "How Soil Forms",
        body: "Soil is the loose material on the Earth's surface in which plants grow, formed from weathered rock mixed with decayed organic matter. Five factors control its formation: the parent material, the rock from which the soil comes; climate, which controls the speed of weathering and leaching; organisms, such as plants, animals and microbes that add humus; relief, because steep slopes lose soil while flat land keeps it; and time, because soil forms very slowly, often taking hundreds of years to build a few centimetres. Weathering breaks the parent rock into small particles, rain washes minerals down through the soil, and dead plants and animals decay into humus, the dark organic part of soil. A good soil is about half mineral particles, a quarter water, a quarter air, and a small amount of humus, and each part matters for plant growth."
      },
      {
        heading: "The Soil Profile",
        body: "A soil profile is a vertical section through the soil, showing its layers, called horizons. The O horizon is the surface layer of dead leaves and organic matter. The A horizon, or topsoil, is dark and rich in humus, and it is where most plant roots feed. The B horizon, or subsoil, is where minerals washed down from above collect, and it is usually lighter in colour and harder. The C horizon is weathered parent material, partly broken rock, and below it lies the solid bedrock, called the R horizon. Leaching is the washing of minerals down from the A horizon to the B horizon by rainwater, and it is strongest in the wet south, where heavy rain washes nutrients out of the topsoil. Reading a profile tells you how fertile a soil is: a deep, dark A horizon means a rich soil, while a thin, pale one means a poor soil."
      },
      {
        heading: "Soil Types in Nigeria",
        body: "Nigeria has several soil types, shaped by its climate and parent rock. Sandy soils have large particles, drain quickly, are easy to work, but hold few nutrients and dry out fast. Clay soils have tiny particles, hold water and nutrients well, but become waterlogged in the wet season and crack hard in the dry season. Loamy soils mix sand, silt and clay, and are the best for farming because they hold water and nutrients while still draining well. Laterite soils form in the humid south, where heavy rain leaches silica and leaves iron and aluminium oxides, giving the soil a red colour; laterite hardens when exposed and is often used as a building material. In the north, the soils of the savanna are lighter and less leached, suiting millet, sorghum and groundnuts, while the forest soils of the south suit cocoa, oil palm and cassava. Soil acidity is measured on the pH scale from 0 to 14: below 7 is acidic, 7 is neutral, and above 7 is alkaline. Most crops grow best in slightly acidic to neutral soils, around pH 6 to 7, and very acidic soils can be improved by adding lime."
      },
      {
        heading: "Soil Erosion and Conservation",
        body: "Soil erosion is the removal of topsoil by water, wind or human action, and it is one of Nigeria's greatest threats to farming. Sheet erosion washes away a thin layer of soil over a wide area, rill erosion cuts small channels, and gully erosion cuts deep channels that destroy farmland, as in the south-east. Wind erosion blows away light, dry soil in the north during the Harmattan. Erosion is caused by heavy rain on bare soil, deforestation, overgrazing, and farming up and down slopes. It is controlled by keeping the soil covered with crops or trees, ploughing along the contour instead of up and down, building terraces on steep slopes, planting shelterbelts against the wind, practising crop rotation and fallowing so the soil recovers, and adding manure and compost to rebuild humus. Conserving soil means conserving the food supply, because once the topsoil is gone, the land may take centuries to recover."
      }
    ],
    definitions: [
      { term: "Soil", meaning: "The loose material on the Earth's surface in which plants grow." },
      { term: "Soil profile", meaning: "A vertical section through the soil showing its horizons." },
      { term: "Humus", meaning: "Dark, decayed organic matter in the soil that adds nutrients." },
      { term: "Leaching", meaning: "The washing of minerals down through the soil by rainwater." },
      { term: "Laterite", meaning: "A red soil rich in iron and aluminium oxides, formed by heavy leaching in the humid tropics." },
      { term: "Soil erosion", meaning: "The removal of topsoil by water, wind or human action." }
    ],
    formulas: ["Soil = weathered rock + humus + water + air.", "Soil profile: O horizon, A horizon (topsoil), B horizon (subsoil), C horizon, R horizon (bedrock).", "pH scale: below 7 is acidic, 7 is neutral, above 7 is alkaline; most crops prefer pH 6 to 7.", "Soil formation = parent material + climate + organisms + relief + time."],
    examples: [
      {
        title: "Reading a soil profile",
        problem: "A farmer digs a pit and sees a dark, humus-rich layer on top, a pale hard layer below it, and broken rock at the bottom. Which horizons are these?",
        steps: ["Recall the profile order: O, A, B, C, then bedrock.", "Match the dark, humus-rich layer to the A horizon, the topsoil.", "Match the pale, hard layer where minerals collect to the B horizon, the subsoil.", "Match the broken rock to the C horizon, weathered parent material.", "Conclude the pit shows A, B and C horizons in order."],
        answer: "The dark layer is the A horizon (topsoil), the pale hard layer is the B horizon (subsoil), and the broken rock is the C horizon."
      },
      {
        title: "Interpreting soil pH",
        problem: "A soil test shows pH 5.0, and the farmer wants to grow maize, which prefers pH 6 to 7. What does the test mean, and what should the farmer do?",
        steps: ["Recall the pH scale: below 7 is acidic, 7 is neutral.", "Note pH 5.0 is acidic, below the range maize prefers.", "Recall that acidic soils lock up nutrients and reduce yields.", "Recall that adding lime raises soil pH towards neutral.", "Conclude the farmer should apply lime to raise the pH."],
        answer: "The soil is acidic at pH 5.0; the farmer should add lime to raise the pH towards 6 to 7 for maize."
      }
    ],
    tips: ["Learn the profile order: O, A, B, C, R, with A as topsoil and B as subsoil.", "Loamy soil is the best for farming; sandy drains fast, clay holds water.", "pH below 7 is acidic, 7 is neutral, above 7 is alkaline.", "Laterite is red and forms in the humid south by heavy leaching."],
    mistakes: ["Confusing the A horizon with the B horizon; A is topsoil, B is subsoil.", "Saying sandy soils are the best for farming; loamy soils are.", "Calling pH 5 alkaline; it is acidic.", "Forgetting that leaching is strongest where rainfall is heaviest."],
    facts: ["Soil forms very slowly, taking hundreds of years to build a few centimetres.", "The A horizon is the topsoil, rich in humus.", "Laterite soils are red and common in southern Nigeria.", "Most crops grow best in soils of pH 6 to 7."],
    quiz: [
      { q: "Soil is formed from what?", options: ["Solid bedrock only", "Weathered rock and organic matter", "Rainwater only", "Volcanic ash only"], answer: 1, explanation: "Soil forms when rock weathers into particles and mixes with decayed organic matter, humus." },
      { q: "Which horizon is the topsoil, rich in humus?", options: ["A horizon", "B horizon", "C horizon", "R horizon"], answer: 0, explanation: "The A horizon is the topsoil, dark and rich in humus, where most plant roots feed." },
      { q: "Which horizon is the subsoil, where minerals washed down from above collect?", options: ["O horizon", "B horizon", "C horizon", "A horizon"], answer: 1, explanation: "The B horizon is the subsoil, where minerals leached from the topsoil accumulate." },
      { q: "Leaching is best described as what?", options: ["Breaking rocks by frost", "Washing minerals down through the soil by rain", "Planting trees on a slope", "Burning farmland"], answer: 1, explanation: "Leaching is the washing of minerals from the upper soil down to lower layers by rainwater." },
      { q: "Laterite soils are common in which part of Nigeria?", options: ["Humid south", "Far north desert fringe", "Jos Plateau only", "Chad Basin"], answer: 0, explanation: "Laterite forms in the humid south, where heavy rain leaches silica and leaves iron and aluminium oxides." },
      { q: "Which soil is best for farming in northern Nigeria?", options: ["Sandy soil", "Loamy soil", "Clayey soil", "Laterite"], answer: 1, explanation: "Loamy soil holds water and nutrients while still draining well, making it the best farming soil." },
      { q: "Sandy soils are best described as what?", options: ["Well drained but poor in nutrients", "Waterlogged and hard to work", "Rich in humus", "Sticky when wet"], answer: 0, explanation: "Sandy soils drain quickly and are easy to work, but they hold few nutrients and dry out fast." },
      { q: "Clay soils are difficult to farm because they do what?", options: ["Drain too fast", "Become waterlogged and hard when dry", "Have no minerals", "Are too acidic always"], answer: 1, explanation: "Clay soils hold water and become waterlogged in the wet season, then crack hard in the dry season." },
      { q: "A soil with pH 7 is best described as what?", options: ["Acidic", "Neutral", "Alkaline", "Salty"], answer: 1, explanation: "On the pH scale, 7 is neutral, below 7 is acidic and above 7 is alkaline." },
      { q: "A soil with pH 5 is best described as what?", options: ["Acidic", "Neutral", "Alkaline", "Waterlogged"], answer: 0, explanation: "pH 5 is below 7, so the soil is acidic and may need lime for most crops." },
      { q: "Which practice prevents soil erosion on a slope?", options: ["Ploughing up and down the slope", "Removing all trees", "Contour ploughing", "Burning the vegetation"], answer: 2, explanation: "Contour ploughing runs along the slope, slowing water so it does not wash the soil away." },
      { q: "Humus improves soil mainly by doing what?", options: ["Making it red", "Adding nutrients and holding water", "Making it sandy", "Raising its pH to 14"], answer: 1, explanation: "Humus adds nutrients, holds water and improves soil structure for plant growth." },
      { q: "The parent material of a soil is what?", options: ["The rock from which the soil forms", "The top layer of leaves", "The fertiliser added by farmers", "The rainwater in the soil"], answer: 0, explanation: "Parent material is the rock or deposit from which the soil develops through weathering." },
      { q: "How does climate affect soil formation?", options: ["It decides the colour only", "It has no effect", "It controls temperature only", "It controls the rate of weathering and leaching"], answer: 3, explanation: "Warm, wet climates speed up weathering and leaching, while cold, dry climates slow them down." },
      { q: "Gully erosion removes which soil layer first?", options: ["Topsoil, the A horizon", "Bedrock, the R horizon", "Subsoil, the B horizon", "Parent material, the C horizon"], answer: 0, explanation: "Erosion strips the topsoil first, which is why it is so damaging to farming." }
    ],
    status: "published"
  },
  {
    id: "geography-14",
    subjectId: "geography",
    topic: "Soils and Water Resources",
    subtopic: "Water resources and oceanography",
    title: "Water Resources and Oceanography",
    order: 14,
    introduction: "Water covers most of the Earth, yet only a small part of it is fresh and usable. This lesson explains the water cycle, Nigeria's rivers, lakes and groundwater, and the oceans: their currents, tides and waves, and why they matter to Nigerians.",
    objectives: ["Describe the water cycle and its processes", "Identify Nigeria's main rivers, lakes and dams", "Explain groundwater and aquifers", "Describe ocean currents, tides and waves", "Explain the importance and problems of water resources in Nigeria"],
    sections: [
      {
        heading: "The Water Cycle",
        body: "The water cycle is the continuous movement of water between the Earth and the atmosphere, driven by energy from the sun. Water evaporates from seas, rivers and lakes, and plants release water vapour by transpiration. The vapour rises, cools and condenses into clouds, then falls back as precipitation, rain or snow. Some of the rain runs off into rivers and lakes, some soaks into the ground to become groundwater, and some is stored as ice. The balance can be written as a simple water budget: precipitation equals evaporation plus runoff plus infiltration. In Nigeria, the wet south has a large water surplus, while the dry north has a deficit, which is why irrigation matters in the north. The cycle never stops, so the water we use today is the same water that has circulated for millions of years."
      },
      {
        heading: "Rivers, Lakes and Groundwater in Nigeria",
        body: "Nigeria's rivers are its most important water resource. The River Niger, the longest river in Nigeria, rises in Guinea, flows through Mali and Nigeria, meets the Benue at Lokoja, and reaches the Atlantic through its delta. The River Benue is its main tributary, and other rivers include the Sokoto-Rima, the Kaduna, the Gongola and the Cross River. Lakes include Lake Chad, the largest lake in Nigeria, shared with neighbouring countries, and the man-made Kainji Lake, formed by the Kainji Dam on the River Niger for hydroelectric power. Groundwater is water stored underground in aquifers, layers of porous rock such as sandstone that hold water, and it is reached through wells and boreholes. In the north, where surface water is scarce, boreholes are a vital source of drinking water. Rivers and lakes provide water for farming, fishing, transport and power, but they are threatened by pollution, siltation and falling water levels, as Lake Chad has shrunk greatly in recent decades because of reduced rainfall and heavy water use."
      },
      {
        heading: "Oceans and Seas",
        body: "Nigeria borders the Atlantic Ocean through the Gulf of Guinea, and the ocean shapes its climate, trade and food supply. The ocean floor near the coast is the continental shelf, a shallow, gently sloping area rich in fish and oil, beyond which the sea floor drops steeply into the deep ocean. The Guinea Current, a warm current, flows east along the Gulf of Guinea coast, warming the coastal climate and bringing moist air. Ocean currents are driven by prevailing winds, the rotation of the Earth and differences in water temperature and saltiness: warm currents flow from the equator towards the poles, and cold currents flow from the poles towards the equator. The cold Benguela Current off south-west Africa cools the coast there, which is one reason the Namib Desert is so dry. Oceans also absorb carbon dioxide and heat, so they help to control the world's climate."
      },
      {
        heading: "Tides, Waves and the Uses of the Sea",
        body: "Tides are the regular rise and fall of sea level, caused mainly by the gravitational pull of the moon, with the sun adding a smaller effect. There are usually two high tides and two low tides each day, and the highest tides, spring tides, happen when the sun, moon and Earth line up. Waves are caused mainly by wind blowing over the sea surface, and they erode cliffs, move sand along beaches and can damage coastal buildings. The sea gives Nigeria fish, oil and gas from offshore fields, salt, and transport through its ports, while the coast offers tourism and recreation. But the sea also brings problems: coastal erosion eats away beaches at Lagos and in the Niger Delta, oil spills pollute the water, and sea-level rise threatens low-lying coastal communities. Managing the sea means protecting the coast, controlling pollution, and using its resources without destroying them."
      }
    ],
    definitions: [
      { term: "Water cycle", meaning: "The continuous movement of water between the Earth and the atmosphere." },
      { term: "Aquifer", meaning: "A layer of porous rock underground that holds groundwater." },
      { term: "Groundwater", meaning: "Water stored underground in soil and rock." },
      { term: "Tide", meaning: "The regular rise and fall of sea level caused mainly by the moon's pull." },
      { term: "Ocean current", meaning: "A large, regular flow of sea water in a set direction." },
      { term: "Continental shelf", meaning: "The shallow, gently sloping seabed near a coast." }
    ],
    formulas: ["Water budget: precipitation = evaporation + runoff + infiltration.", "Warm currents flow from the equator towards the poles; cold currents flow from the poles towards the equator.", "Tides are caused mainly by the gravitational pull of the moon.", "Runoff = precipitation - evaporation - infiltration."],
    examples: [
      {
        title: "Working out a water budget",
        problem: "A catchment receives 2,000 mm of rain in a year. 1,200 mm evaporates and 300 mm soaks into the ground. How much water runs off?",
        steps: ["Write the water budget: precipitation equals evaporation plus runoff plus infiltration.", "Insert the known values: 2,000 equals 1,200 plus runoff plus 300.", "Add the known losses: 1,200 plus 300 equals 1,500.", "Subtract from precipitation: 2,000 minus 1,500 equals 500.", "State the answer with the correct unit, millimetres."],
        answer: "The runoff is 500 mm for the year."
      },
      {
        title: "Explaining why Lake Chad is shrinking",
        problem: "Lake Chad was once much larger than it is today. What has caused it to shrink?",
        steps: ["Note the lake depends on rainfall and rivers flowing into it.", "Recall that rainfall in the region has fallen and become less reliable.", "Add the human cause: more water is taken from rivers for irrigation.", "Note the result: less water reaches the lake, so it shrinks.", "Conclude the shrinkage comes from reduced rainfall plus heavy water use."],
        answer: "Reduced rainfall and heavy abstraction of river water for irrigation have shrunk Lake Chad."
      }
    ],
    tips: ["Learn the water cycle order: evaporation, condensation, precipitation, runoff and infiltration.", "The River Niger is Nigeria's longest river; it meets the Benue at Lokoja.", "Tides are caused mainly by the moon's gravitational pull.", "Warm currents flow from the equator; cold currents flow from the poles."],
    mistakes: ["Saying tides are caused by the wind; they are caused mainly by the moon.", "Confusing the Guinea Current with the Benguela Current; Guinea is warm, Benguela is cold.", "Calling Lake Kainji natural; it is man-made, formed by the Kainji Dam.", "Forgetting that groundwater is stored in aquifers, not in rivers."],
    facts: ["Lake Chad is the largest lake in Nigeria.", "The Kainji Dam on the River Niger provides hydroelectric power.", "The Guinea Current is a warm current along the Gulf of Guinea.", "There are usually two high tides and two low tides each day."],
    quiz: [
      { q: "The water cycle is mainly driven by energy from what?", options: ["The moon", "The sun", "The wind", "The Earth's core"], answer: 1, explanation: "Energy from the sun drives evaporation, which powers the whole water cycle." },
      { q: "Evaporation is best described as what?", options: ["Water changing from liquid to vapour", "Water vapour cooling into droplets", "Rain falling to the ground", "Water soaking into the ground"], answer: 0, explanation: "Evaporation is when liquid water changes into water vapour and rises into the air." },
      { q: "Which is the largest lake in Nigeria?", options: ["Lake Kainji", "Oguta Lake", "Lake Chad", "Lake Bosomtwe"], answer: 2, explanation: "Lake Chad, shared with neighbouring countries, is the largest lake in Nigeria." },
      { q: "Groundwater is stored in what?", options: ["Rivers", "Aquifers", "Clouds", "Dams"], answer: 1, explanation: "Groundwater is stored underground in aquifers, layers of porous rock such as sandstone." },
      { q: "Which ocean borders Nigeria?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], answer: 0, explanation: "Nigeria borders the Atlantic Ocean through the Gulf of Guinea." },
      { q: "The Guinea Current is best described as what?", options: ["A cold current", "A deep current", "A warm current", "A tidal current"], answer: 2, explanation: "The Guinea Current is a warm current flowing east along the Gulf of Guinea coast." },
      { q: "Tides are mainly caused by what?", options: ["Wind blowing over the sea", "The moon's gravitational pull", "Earthquakes under the sea", "Ocean currents"], answer: 1, explanation: "The moon's gravitational pull raises the sea level, causing the regular rise and fall of tides." },
      { q: "Which is the longest river in Nigeria?", options: ["River Niger", "River Benue", "River Cross", "River Kaduna"], answer: 0, explanation: "The River Niger is the longest river in Nigeria, flowing from Guinea to the Atlantic." },
      { q: "The Kainji Dam is built on which river?", options: ["River Benue", "River Niger", "River Cross", "River Gongola"], answer: 1, explanation: "The Kainji Dam is built on the River Niger and forms Kainji Lake for hydroelectric power." },
      { q: "The continental shelf is best described as what?", options: ["The deepest part of the ocean", "A steep cliff under the sea", "A mountain in the sea", "The shallow seabed near the coast"], answer: 3, explanation: "The continental shelf is the shallow, gently sloping seabed near the coast, rich in fish and oil." },
      { q: "Which is a use of ocean water and the sea in Nigeria?", options: ["Fishing and transport", "Growing cocoa", "Mining coal", "Building dams"], answer: 0, explanation: "The sea provides fish for food and a route for ships carrying Nigeria's trade." },
      { q: "Condensation is best described as what?", options: ["Water soaking into the ground", "Rain falling to the ground", "Water vapour cooling to form droplets", "Water changing into vapour"], answer: 2, explanation: "Condensation is when water vapour cools and changes into tiny droplets, forming clouds." },
      { q: "Why is Lake Chad shrinking?", options: ["Too much rainfall", "Reduced rainfall and heavy water use", "Earthquakes", "Too many fish"], answer: 1, explanation: "Less rainfall and more water taken from rivers for irrigation mean less water reaches the lake." },
      { q: "Which current cools the coast of south-west Africa?", options: ["Benguela Current", "Guinea Current", "Gulf Stream", "Kuroshio Current"], answer: 0, explanation: "The cold Benguela Current flows north along the south-west African coast, cooling it and helping form the Namib Desert." },
      { q: "A catchment receives 2,000 mm of rain, 1,200 mm evaporates and 300 mm infiltrates. How much runs off?", options: ["300 mm", "500 mm", "800 mm", "2,000 mm"], answer: 1, explanation: "Runoff equals precipitation minus evaporation minus infiltration: 2,000 minus 1,200 minus 300 equals 500 mm." }
    ],
    status: "published"
  }
];