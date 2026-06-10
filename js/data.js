export const creatures = [
    {
        id: 'spermwhale',
        name: 'SPERM WHALE',
        subtitle: 'THE DEEP DIVER',
        biome: 'Deep Ocean',
        sector: 'Deep Sector 11',
        description: 'The sperm whale is the largest toothed predator on Earth, diving deeper than any other mammal — over 2,000 meters — to hunt giant squid in total darkness. Its massive head houses the largest brain of any animal.',
        tags: [
            { icon: '🦑', label: 'DEEP DIVE', value: '2,000m+' },
            { icon: '🧠', label: 'BRAIN', value: 'Largest of any animal' },
            { icon: '📡', label: 'ECHOLOCATION', value: 'Powerful clicks' }
        ],
        anatomy: [
            { label: 'Spermaceti Organ', desc: 'Waxy oil aids buoyancy and echolocation', x: 30, y: 25 },
            { label: 'Lower Jaw', desc: 'Contains 20-26 pairs of conical teeth', x: 25, y: 45 },
            { label: 'Flukes', desc: 'Powerful tail for deep dives', x: 85, y: 70 }
        ],
        stats: {
            size: '16 - 20 m',
            habitat: 'Deep Ocean',
            diet: 'Giant Squid, Fish',
            lifespan: '60 - 70 yrs',
            speed: '4 - 20 knots',
            status: 'Vulnerable'
        },
        missions: [
            { icon: '🦑', title: 'ABYSS TRACKER', desc: 'Map deep-dive routes and squid hunting grounds.' },
            { icon: '📡', title: 'CLICK ANALYSIS', desc: 'Record and analyze echolocation click patterns.' },
            { icon: '🌊', title: 'WHALE FALL', desc: 'Study deep-sea ecosystems sustained by whale falls.' }
        ],
        image: 'whale.svg',
        color: '#546e7a',
        sceneColor: 0x1a4a5a,
        expeditionLog: { current: 10, total: 30 },
        modelPath: '3d model/sperm_whale_compressed.glb',
        credit: { title: 'Sperm Whale', author: 'Bohdan Lvov', url: 'https://skfb.ly/oFq8D', license: 'CC BY 4.0' },
        modelScale: 1.0,
        modelPosition: [0, 0, 0],
        modelRotation: [0, -Math.PI / 2, 0]
    },
    {
        id: 'octopus',
        name: 'OCTOPUS',
        subtitle: 'THE OCEAN GENIUS',
        biome: 'Reef & Deep Sea',
        sector: 'Deep Sector 09',
        description: 'The octopus is a master of camouflage, problem-solving, and escape. With three hearts, blue blood, and a distributed brain, it is one of the most intelligent invertebrates.',
        tags: [
            { icon: '🧠', label: 'INTELLIGENCE', value: 'Tool user, puzzle solver' },
            { icon: '🎨', label: 'CAMOUFLAGE', value: 'Instant skin pattern shift' },
            { icon: '🫀', label: '3 HEARTS', value: '2 branchial + 1 systemic' }
        ],
        anatomy: [
            { label: 'Arms', desc: 'Two-thirds of neurons reside here', x: 25, y: 55 },
            { label: 'Mantle', desc: 'Contains vital organs & beak', x: 50, y: 30 },
            { label: 'Siphon', desc: 'Jet propulsion & ink expulsion', x: 65, y: 20 }
        ],
        stats: {
            size: '0.5 - 6 m',
            habitat: 'Reef & Deep Sea',
            diet: 'Crustaceans, Fish',
            lifespan: '1 - 5 yrs',
            speed: 'Up to 40 km/h (jet)',
            status: 'Least Concern'
        },
        missions: [
            { icon: '🧩', title: 'ESCAPE STUDY', desc: 'Document problem-solving and escape techniques.' },
            { icon: '🎨', title: 'PATTERN RECOG', desc: 'Analyze rapid camouflage pattern generation.' },
            { icon: '🔬', title: 'NEURAL MAP', desc: 'Map distributed neural network across arms.' }
        ],
        image: 'octopus.svg',
        color: '#e91e63',
        sceneColor: 0x8a0a3a,
        expeditionLog: { current: 30, total: 50 },
        modelPath: '3d model/octopus sketchfab2_compressed.glb',
        credit: { title: 'Octopus', author: 'kenchoo', url: 'https://skfb.ly/pvOXE', license: 'CC BY 4.0' },
        modelScale: 1.0,
        modelPosition: [0, -2, 0],
        modelRotation: [0, 0, 0]
    },
    {
        id: 'mantaray',
        name: 'MANTA RAY',
        subtitle: 'THE GENTLE GLIDER',
        biome: 'Open Ocean',
        sector: 'Ocean Sector 03',
        description: 'Manta rays are graceful filter-feeders that soar through the water with wings spanning up to 7 meters. Their intelligence and curiosity make them a favorite among divers.',
        tags: [
            { icon: '🪽', label: 'WINGSPAN', value: 'Up to 7 m' },
            { icon: '🦈', label: 'FILTER FEEDER', value: 'Plankton specialist' },
            { icon: '🧠', label: 'BRAIN SIZE', value: 'Largest of all fish' }
        ],
        anatomy: [
            { label: 'Cephalic Horns', desc: 'Directs plankton into mouth', x: 25, y: 32 },
            { label: 'Pectoral Wings', desc: 'Effortless gliding motion', x: 65, y: 25 },
            { label: 'Gill Slits', desc: 'Filters plankton from water', x: 45, y: 50 }
        ],
        stats: {
            size: '3.5 - 7 m',
            habitat: 'Open Ocean',
            diet: 'Plankton',
            lifespan: '30 - 50 yrs',
            speed: 'Up to 12 knots',
            status: 'Vulnerable'
        },
        missions: [
            { icon: '🪽', title: 'FLIGHT TRACK', desc: 'Track manta ray flight patterns across currents.' },
            { icon: '🌊', title: 'CURRENT RIDE', desc: 'Study how mantas use ocean currents for travel.' },
            { icon: '🧬', title: 'GENOME MAP', desc: 'Contribute to manta ray genetic research.' }
        ],
        image: 'mantaray.svg',
        color: '#9c27b0',
        sceneColor: 0x4a0a6a,
        expeditionLog: { current: 8, total: 20 },
        credit: { title: 'Model 84B — Manta Ray Swimming', author: 'DigitalLife3D', url: 'https://skfb.ly/otY9O', license: 'CC BY-NC 4.0' },
        modelPath: '3d model/manta_ray_84b_compressed.glb',
        // The GLB has a 100x armature-side transform that static bounds miss
        // for the skinned render path, so compensate with rendered size here.
        measuredMaxDim: 260.0,
        useDirectLighting: true,
        modelScale: 1.0,
        modelPosition: [0, 0, 0],
        modelRotation: [0, -Math.PI / 2, 0] // side profile, matching the turtle's facing
    },
    {
        id: 'seaturtle',
        name: 'LOGGERHEAD SEA TURTLE',
        subtitle: 'THE ANCIENT NAVIGATOR',
        biome: 'Coastal & Open Ocean',
        sector: 'Ocean Sector 05',
        description: 'Sea turtles are living fossils that have navigated our oceans for over 100 million years. They migrate thousands of miles to return to their birthplace to nest.',
        tags: [
            { icon: '🐢', label: 'LONGEVITY', value: '50 - 100 yrs' },
            { icon: '🧭', label: 'NAVIGATION', value: 'Earth\'s magnetic field' },
            { icon: '🏖️', label: 'NESTING', value: 'Returns to birthplace' }
        ],
        anatomy: [
            { label: 'Carapace', desc: 'Bony shell fused to ribs', x: 50, y: 28 },
            { label: 'Flippers', desc: 'Wing-like for long-distance', x: 30, y: 55 },
            { label: 'Beak', desc: 'Serrated for seagrass cutting', x: 18, y: 30 }
        ],
        stats: {
            size: '0.9 - 2.1 m',
            habitat: 'Coastal & Open Ocean',
            diet: 'Seagrass, Jellyfish',
            lifespan: '50 - 100 yrs',
            speed: '2 - 5 km/h',
            status: 'Endangered'
        },
        missions: [
            { icon: '🧭', title: 'MIGRATION MAP', desc: 'Track ancient migration routes across oceans.' },
            { icon: '🏖️', title: 'NEST WATCH', desc: 'Monitor nesting beaches and hatchling success.' },
            { icon: '🗑️', title: 'DEBRIS REMOVAL', desc: 'Clean up ocean plastic affecting turtle habitats.' }
        ],
        image: 'seaturtle.svg',
        color: '#4caf50',
        sceneColor: 0x0a6a3a,
        expeditionLog: { current: 15, total: 35 },
        modelPath: '3d model/sea_turtle_compressed.glb',
        credit: { title: 'Model 47A - Loggerhead Sea Turtle', author: 'DigitalLife3D', url: 'https://skfb.ly/6QStY', license: 'CC BY-NC 4.0' },
        modelScale: 1.0,
        modelPosition: [0, 0, 0],
        modelRotation: [0, Math.PI / 2, 0] // side profile (was showing its back)
    },
    {
        id: 'hammerhead',
        name: 'HAMMERHEAD SHARK',
        subtitle: 'THE WIDE-EYED HUNTER',
        biome: 'Coastal & Open Ocean',
        sector: 'Ocean Sector 06',
        description: 'The hammerhead shark\'s distinctive wide head gives it 360-degree vision and enhanced electroreception, making it one of the ocean\'s most precise hunters. They school by the hundreds during the day and hunt alone at night.',
        tags: [
            { icon: '🔨', label: 'HEAD SPAN', value: 'Up to 1 m wide' },
            { icon: '👁️', label: 'VISION', value: '360° binocular' },
            { icon: '⚡', label: 'ELECTROSENSE', value: 'Enhanced ampullae' }
        ],
        anatomy: [
            { label: 'Cephalofoil', desc: 'Wide head improves sensory range', x: 25, y: 30 },
            { label: 'Dorsal Fin', desc: 'Iconic tall first dorsal', x: 55, y: 15 },
            { label: 'Pectoral Fins', desc: 'Agile maneuvering at speed', x: 45, y: 55 }
        ],
        stats: {
            size: '3.5 - 6 m',
            habitat: 'Coastal & Open Ocean',
            diet: 'Stingrays, Fish, Squid',
            lifespan: '20 - 30 yrs',
            speed: 'Up to 25 km/h',
            status: 'Critically Endangered'
        },
        missions: [
            { icon: '🔨', title: 'SCHOOL SURVEY', desc: 'Document hammerhead schooling behavior and hierarchy.' },
            { icon: '⚡', title: 'ELECTRO MAP', desc: 'Visualize the electromagnetic fields they detect.' },
            { icon: '🦈', title: 'MIGRATION ROUTE', desc: 'Track seasonal migration patterns across oceans.' }
        ],
        image: 'whale.svg',
        color: '#607d8b',
        sceneColor: 0x2a5a6a,
        expeditionLog: { current: 6, total: 24 },
        modelPath: '3d model/model_73a_-_great_hammerhead_shark_compressed.glb',
        credit: { title: 'Model 73A - Great Hammerhead Shark', author: 'DigitalLife3D', url: 'https://skfb.ly/6VoZC', license: 'CC BY-NC 4.0' },
        animationSpeed: 1.5,
        modelScale: 1.0,
        modelPosition: [0, 0, 0],
        modelRotation: [0, -Math.PI / 2, 0]
    },
    {
        id: 'whaleshark',
        name: 'WHALE SHARK',
        subtitle: 'THE GENTLE GIANT',
        biome: 'Open Ocean',
        sector: 'Ocean Sector 04',
        description: 'The whale shark is the largest fish in the sea, reaching lengths of over 12 meters. Despite their enormous size, these filter-feeders are gentle and docile, cruising tropical waters with mouths agape to sieve plankton.',
        tags: [
            { icon: '📏', label: 'SIZE', value: 'Up to 18 m' },
            { icon: '🦈', label: 'FILTER FEEDER', value: 'Plankton & small fish' },
            { icon: '🔵', label: 'PATTERN', value: 'Unique spot ID' }
        ],
        anatomy: [
            { label: 'Wide Mouth', desc: 'Up to 1.5 m wide for filter feeding', x: 20, y: 35 },
            { label: 'Dermal Denticles', desc: 'Unique spotted skin pattern', x: 50, y: 25 },
            { label: 'Caudal Fin', desc: 'Heterocercal tail for cruising', x: 85, y: 50 }
        ],
        stats: {
            size: '9 - 18 m',
            habitat: 'Tropical Open Ocean',
            diet: 'Plankton, Small Fish',
            lifespan: '70 - 100 yrs',
            speed: '3 - 5 km/h',
            status: 'Endangered'
        },
        missions: [
            { icon: '📸', title: 'SPOT PATTERN', desc: 'Photograph and catalog unique spot patterns for identification.' },
            { icon: '🌊', title: 'AGGREGATION', desc: 'Track seasonal feeding aggregation sites worldwide.' },
            { icon: '🦈', title: 'SIZE SURVEY', desc: 'Estimate population size using photo-ID databases.' }
        ],
        image: 'whale.svg',
        color: '#26a69a',
        sceneColor: 0x0a5a5a,
        expeditionLog: { current: 5, total: 18 },
        modelPath: '3d model/model_99a_-_whale_shark_compressed.glb',
        credit: { title: 'Model 99A - Whale Shark', author: 'DigitalLife3D', url: 'https://skfb.ly/oLzqI', license: 'CC BY-NC 4.0' },
        animationSpeed: 2.0,
        modelScale: 1.0,
        modelPosition: [0, 0, 0],
        modelRotation: [0, -Math.PI / 2, 0]
    },
    {
        id: 'orca',
        name: 'ORCA',
        subtitle: 'THE APEX PREDATOR',
        biome: 'All Oceans',
        sector: 'Ocean Sector 08',
        description: 'Orcas are the ocean\'s most formidable predators, hunting in coordinated pods with sophisticated strategies. Their complex social structures and vocal dialects make each pod culturally unique.',
        tags: [
            { icon: '🐋', label: 'POD SIZE', value: '5 - 30 members' },
            { icon: '🧠', label: 'INTELLIGENCE', value: 'Complex social learning' },
            { icon: '⚡', label: 'TOP SPEED', value: '56 km/h' }
        ],
        anatomy: [
            { label: 'Dorsal Fin', desc: 'Up to 1.8 m tall in males', x: 50, y: 10 },
            { label: 'Saddle Patch', desc: 'Unique markings for identification', x: 60, y: 30 },
            { label: 'Eye Patch', desc: 'Distinctive white marking', x: 20, y: 35 }
        ],
        stats: {
            size: '6 - 8 m',
            habitat: 'All Oceans',
            diet: 'Fish, Seals, Whales',
            lifespan: '50 - 80 yrs',
            speed: 'Up to 56 km/h',
            status: 'Data Deficient'
        },
        missions: [
            { icon: '🎙️', title: 'DIALECT STUDY', desc: 'Record and classify pod-specific vocal dialects.' },
            { icon: '🦭', title: 'HUNT TACTICS', desc: 'Document cooperative hunting strategies across ecotypes.' },
            { icon: '🌍', title: 'POD TRACKER', desc: 'Map pod territories and migration corridors.' }
        ],
        image: 'whale.svg',
        color: '#37474f',
        sceneColor: 0x1a2a3a,
        expeditionLog: { current: 9, total: 22 },
        modelPath: '3d model/female_orca_compressed.glb',
        credit: { title: 'Female Orca', author: 'neurodolphin', url: 'https://skfb.ly/THDz', license: 'CC BY-NC 4.0' },
        modelScale: 1.0,
        modelPosition: [0, 0, 0],
        modelRotation: [0, -Math.PI / 2, 0]
    },
    {
        id: 'humpback',
        name: 'HUMPBACK WHALE',
        subtitle: 'THE SINGING VOYAGER',
        biome: 'Open Ocean',
        sector: 'Ocean Sector 10',
        description: 'Humpback whales are renowned for their hauntingly complex songs that travel vast distances underwater. These acrobatic giants breach, slap, and spiral through every ocean on Earth during epic annual migrations.',
        tags: [
            { icon: '🎵', label: 'SONG', value: 'Hours-long compositions' },
            { icon: '🌊', label: 'BREACH', value: 'Full-body aerial display' },
            { icon: '🐋', label: 'MIGRATION', value: 'Up to 8,000 km' }
        ],
        anatomy: [
            { label: 'Pectoral Fins', desc: 'Longest of any whale — up to 5 m', x: 35, y: 55 },
            { label: 'Throat Grooves', desc: 'Expandable pleats for lunge feeding', x: 25, y: 40 },
            { label: 'Flukes', desc: 'Unique pattern used for ID', x: 85, y: 65 }
        ],
        stats: {
            size: '12 - 16 m',
            habitat: 'Open Ocean',
            diet: 'Krill, Small Fish',
            lifespan: '45 - 100 yrs',
            speed: '3 - 14 km/h',
            status: 'Least Concern'
        },
        missions: [
            { icon: '🎵', title: 'SONG ARCHIVE', desc: 'Record and catalog regional song variations.' },
            { icon: '🫧', title: 'BUBBLE NET', desc: 'Study cooperative bubble-net feeding techniques.' },
            { icon: '📸', title: 'FLUKE ID', desc: 'Photograph tail flukes for population tracking.' }
        ],
        image: 'whale.svg',
        color: '#5c6bc0',
        sceneColor: 0x1a2a5a,
        expeditionLog: { current: 11, total: 26 },
        modelPath: '3d model/humpback_whale_compressed.glb',
        credit: { title: 'Humpback Whale', author: 'Bohdan Lvov', url: 'https://skfb.ly/oHQvR', license: 'CC BY 4.0' },
        animationSpeed: 3.0,
        modelScale: 1.0,
        modelPosition: [0, 0, 0],
        modelRotation: [0, -Math.PI / 2, 0]
    },
    {
        id: 'sailfish',
        name: 'SAILFISH',
        subtitle: 'THE FASTEST FIN',
        biome: 'Open Ocean',
        sector: 'Ocean Sector 12',
        description: 'The sailfish is the fastest fish in the ocean, slicing through water at speeds over 110 km/h. Its iconic dorsal sail can be raised to herd prey or folded flat for bursts of speed.',
        tags: [
            { icon: '⚡', label: 'TOP SPEED', value: '110 km/h' },
            { icon: '🎏', label: 'DORSAL SAIL', value: 'Largest of any fish' },
            { icon: '🗡️', label: 'BILL', value: 'Slashes through schools' }
        ],
        anatomy: [
            { label: 'Dorsal Sail', desc: 'Folds flat or fans out to herd prey', x: 50, y: 10 },
            { label: 'Bill', desc: 'Elongated upper jaw for stunning prey', x: 10, y: 35 },
            { label: 'Caudal Fin', desc: 'Crescent-shaped for explosive speed', x: 90, y: 45 }
        ],
        stats: {
            size: '2.4 - 3.0 m',
            habitat: 'Open Ocean',
            diet: 'Small Fish, Squid',
            lifespan: '4 - 5 yrs',
            speed: 'Up to 110 km/h',
            status: 'Vulnerable'
        },
        missions: [
            { icon: '⚡', title: 'SPEED TRIAL', desc: 'Measure burst speed during predation events.' },
            { icon: '🎏', title: 'SAIL DISPLAY', desc: 'Analyze sail-raising behavior during hunts.' },
            { icon: '🐟', title: 'BAIT BALL', desc: 'Document cooperative bait-ball hunting tactics.' }
        ],
        image: 'whale.svg',
        color: '#1565c0',
        sceneColor: 0x0a2a5a,
        expeditionLog: { current: 4, total: 16 },
        modelPath: '3d model/sailfish_compressed.glb',
        credit: { title: 'Sailfish', author: 'Mateus Schwaab', url: 'https://skfb.ly/6DGVV', license: 'CC BY 4.0' },
        animationName: 'Armature|Bite',
        useDirectLighting: true,
        exposure: 1.3,
        envIntensity: 0.8,
        modelScale: 1.0,
        modelPosition: [0, 0, 0],
        modelRotation: [0, -Math.PI / 2, 0]
    }
];
