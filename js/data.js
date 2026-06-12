export const creatures = [
    {
        id: 'humpback',
        name: 'HUMPBACK WHALE',
        subtitle: "OCEAN'S MUSICAL VOYAGER",
        scientificName: 'Megaptera novaeangliae',
        biome: 'Open Ocean',
        sourceUrl: 'https://www.delightfuloceans.com/ocean-marvels/humpback-whale',
        description: 'Humpback whales pair long-distance song with cooperative feeding and record-scale migrations. They can reach 16 meters and 40 tonnes, sing structured 30-minute sequences that carry across ocean basins, and use bubble nets to corral prey.',
        tags: [
            { icon: '', label: 'SONGS', value: '30 min / 1,600 km' },
            { icon: '', label: 'FINS', value: 'Up to 5 m' },
            { icon: '', label: 'MIGRATION', value: '25,000 km annually' }
        ],
        anatomy: [
            { label: 'Pectoral Fins', desc: 'Long fins with tubercles improve lift and maneuvering', x: 35, y: 55 },
            { label: 'Throat Pleats', desc: 'Expandable grooves open during lunge feeding', x: 25, y: 40 },
            { label: 'Flukes', desc: 'Tail patterns help identify individual whales', x: 85, y: 65 }
        ],
        stats: {
            size: 'Up to 16 m / 40 tonnes',
            range: 'All major oceans',
            diet: 'Krill and schooling fish',
            migration: 'Up to 25,000 km yearly',
            signature: 'Complex songs and bubble nets',
            status: 'Major recovery: 135,000+'
        },
        missions: [
            { icon: '01', title: 'Complex Songs', desc: 'Males build layered songs with repeated phrases; these can last around half an hour and travel roughly 1,600 kilometers underwater.' },
            { icon: '02', title: 'Long Pectoral Fins', desc: 'Their pectoral fins can reach about 5 meters, giving these huge whales unusually fine control in the water.' },
            { icon: '03', title: 'Bubble-Net Feeding', desc: 'Groups create curtains of bubbles and coordinated calls to concentrate fish and krill before surfacing together.' },
            { icon: '04', title: 'Epic Migrations', desc: 'They make some of the longest mammal migrations, moving between high-latitude feeding grounds and tropical breeding areas.' },
            { icon: '05', title: 'Protective Behavior', desc: 'Researchers have documented humpbacks intervening when other marine mammals are attacked by predators.' },
            { icon: '06', title: 'Conservation Recovery', desc: 'International protection helped global numbers rebound dramatically after commercial whaling drove them to a low point.' }
        ],
        image: 'whale.svg',
        color: '#5c6bc0',
        sceneColor: 0x1a2a5a,
        modelPath: '3d model/humpback_whale_compressed.glb',
        credit: { title: 'Humpback Whale', author: 'Bohdan Lvov', url: 'https://skfb.ly/oHQvR', license: 'CC BY 4.0' },
        animationSpeed: 3.0,
        modelScale: 1.0,
        modelPosition: [0, 0, 0],
        modelRotation: [0, -Math.PI / 2, 0]
    },
    {
        id: 'spermwhale',
        name: 'SPERM WHALE',
        subtitle: "OCEAN'S DEEP-SEA GIANT",
        scientificName: 'Physeter macrocephalus',
        biome: 'Deep Ocean',
        sourceUrl: 'https://www.delightfuloceans.com/ocean-marvels/sperm-whale',
        description: 'Sperm whales are the largest toothed predators on Earth. They hunt in deep darkness with extremely powerful biosonar, dive beyond 2,000 meters, and use patterned click sequences that help identify social clans.',
        tags: [
            { icon: '', label: 'SONAR', value: '235 dB clicks' },
            { icon: '', label: 'DIVE', value: '2,250 m' },
            { icon: '', label: 'BRAIN', value: 'Around 8 kg' }
        ],
        anatomy: [
            { label: 'Spermaceti Organ', desc: 'A huge head structure tied to sound production and deep-diving buoyancy', x: 30, y: 25 },
            { label: 'Lower Jaw', desc: 'Narrow jaw with conical teeth for gripping deep-sea prey', x: 25, y: 45 },
            { label: 'Flukes', desc: 'Powerful tail strokes drive long descents and ascents', x: 85, y: 70 }
        ],
        stats: {
            size: 'Up to 18 m / 57 tonnes',
            range: 'All major oceans',
            diet: 'Squid and deep-sea fish',
            dive: '2,250 m / 90 min',
            communication: 'Patterned click codas',
            status: 'Vulnerable'
        },
        missions: [
            { icon: '01', title: 'Largest Toothed Predator', desc: 'Adult males can reach about 18 meters, making sperm whales the biggest toothed hunters alive today.' },
            { icon: '02', title: 'Powerful Biosonar', desc: 'Their echolocation clicks are among the loudest biological sounds and can detect prey hundreds of meters away.' },
            { icon: '03', title: 'Extreme Deep Dives', desc: 'They routinely hunt far below sunlight, with documented dives around 2,250 meters and breath holds near 90 minutes.' },
            { icon: '04', title: 'Largest Animal Brain', desc: 'An adult sperm whale brain can weigh roughly 8 kilograms, supporting complex social behavior.' },
            { icon: '05', title: 'Click Codas', desc: 'Families use patterned clicks called codas, which function in social bonding and clan identity.' },
            { icon: '06', title: 'Matriarchal Groups', desc: 'Females and calves live in long-term social units while mature males travel more widely.' }
        ],
        image: 'whale.svg',
        color: '#546e7a',
        sceneColor: 0x1a4a5a,
        modelPath: '3d model/sperm_whale_compressed.glb',
        credit: { title: 'Sperm Whale', author: 'Bohdan Lvov', url: 'https://skfb.ly/oFq8D', license: 'CC BY 4.0' },
        modelScale: 1.0,
        modelPosition: [0, 0, 0],
        modelRotation: [0, -Math.PI / 2, 0]
    },
    {
        id: 'octopus',
        name: 'GIANT PACIFIC OCTOPUS',
        subtitle: "OCEAN'S INTELLIGENT SHAPESHIFTER",
        scientificName: 'Enteroctopus dofleini',
        biome: 'North Pacific Reefs',
        sourceUrl: 'https://www.delightfuloceans.com/ocean-marvels/giant-pacific-octopus',
        description: 'The Giant Pacific octopus is the largest octopus species and one of the clearest examples of intelligence outside the vertebrate body plan. It combines distributed neural control, rapid camouflage, problem-solving, and intense parental care.',
        tags: [
            { icon: '', label: 'SPAN', value: 'Up to 9.1 m' },
            { icon: '', label: 'NEURONS', value: 'About 500 million' },
            { icon: '', label: 'CAMOUFLAGE', value: '0.3 seconds' }
        ],
        anatomy: [
            { label: 'Arms', desc: 'Most neurons are in the arms, enabling local sensing and control', x: 25, y: 55 },
            { label: 'Mantle', desc: 'Holds organs and the only rigid body part: the beak', x: 50, y: 30 },
            { label: 'Chromatophore Skin', desc: 'Color cells and skin texture changes create rapid camouflage', x: 65, y: 20 }
        ],
        stats: {
            size: 'Up to 9.1 m arm span',
            mass: 'Up to 272 kg',
            range: 'North Pacific',
            intelligence: 'Distributed nervous system',
            camouflage: 'Color and texture shifts',
            lifespan: 'About 3-5 years'
        },
        missions: [
            { icon: '01', title: 'Massive Invertebrate', desc: 'The species can reach about 9.1 meters across its arms, making it the largest known octopus.' },
            { icon: '02', title: 'Distributed Intelligence', desc: 'Roughly 500 million neurons are split between the central brain and arm nerve centers, allowing arms to solve local tasks.' },
            { icon: '03', title: 'Instant Camouflage', desc: 'Color and texture can shift in a fraction of a second using dense networks of chromatophores and skin muscles.' },
            { icon: '04', title: 'Extreme Flexibility', desc: 'With no bones and only a rigid beak, the body can pass through openings far smaller than its resting shape.' },
            { icon: '05', title: 'Maternal Care', desc: 'Females guard tens of thousands of eggs for months and usually die soon after the young hatch.' },
            { icon: '06', title: 'Complex Cognition', desc: 'Studies report puzzle solving, tool use, observational learning, and sleep patterns that resemble REM-like activity.' }
        ],
        image: 'octopus.svg',
        color: '#e91e63',
        sceneColor: 0x8a0a3a,
        modelPath: '3d model/octopus sketchfab2_compressed.glb',
        credit: { title: 'Octopus', author: 'kenchoo', url: 'https://skfb.ly/pvOXE', license: 'CC BY 4.0' },
        modelScale: 1.0,
        modelPosition: [0, -2, 0],
        modelRotation: [0, 0, 0]
    },
    {
        id: 'mantaray',
        name: 'MANTA RAY',
        subtitle: "OCEAN'S UNDERWATER ACROBAT",
        scientificName: 'Mobula birostris',
        biome: 'Tropical Open Ocean',
        sourceUrl: 'https://www.delightfuloceans.com/ocean-marvels/manta-ray',
        description: 'Manta rays are highly intelligent filter-feeding rays with enormous wingspans and graceful acrobatics. Their brain-to-body ratio is exceptional among fish, and their swimming mechanics inspire underwater robotics.',
        tags: [
            { icon: '', label: 'WINGSPAN', value: 'Up to 8 m' },
            { icon: '', label: 'FEEDING', value: 'Barrel-roll filtering' },
            { icon: '', label: 'COGNITION', value: 'Large fish brain' }
        ],
        anatomy: [
            { label: 'Cephalic Lobes', desc: 'Guide plankton-rich water into the mouth', x: 25, y: 32 },
            { label: 'Pectoral Wings', desc: 'Broad fins create efficient, gliding propulsion', x: 65, y: 25 },
            { label: 'Gill Filters', desc: 'Internal filters retain plankton while water exits through the gills', x: 45, y: 50 }
        ],
        stats: {
            size: 'Up to 8 m wingspan',
            range: 'Tropical and subtropical seas',
            diet: 'Plankton and small organisms',
            behavior: 'Barrel rolls and cleaning visits',
            intelligence: 'Largest relative fish brain',
            status: 'Protected internationally'
        },
        missions: [
            { icon: '01', title: 'Large Fish Brain', desc: 'Mantas have one of the largest brain-to-body ratios among fish, linked with curiosity and complex behavior.' },
            { icon: '02', title: 'Eight-Meter Wingspan', desc: 'Giant oceanic mantas can span roughly 8 meters across, gliding with slow, wing-like strokes.' },
            { icon: '03', title: 'Acrobatic Feeding', desc: 'They perform barrel rolls to stay inside dense plankton patches and filter food efficiently.' },
            { icon: '04', title: 'Self-Recognition Research', desc: 'Behavioral studies have raised the possibility of mirror self-recognition in manta rays.' },
            { icon: '05', title: 'Robotics Inspiration', desc: 'Their flexible wing motion informs soft underwater robot and autonomous vehicle design.' },
            { icon: '06', title: 'Conservation Planning', desc: 'International trade controls and recovery planning aim to reduce threats from fishing and habitat pressure.' }
        ],
        image: 'mantaray.svg',
        color: '#9c27b0',
        sceneColor: 0x4a0a6a,
        credit: { title: 'Model 84B - Manta Ray Swimming', author: 'DigitalLife3D', url: 'https://skfb.ly/otY9O', license: 'CC BY-NC 4.0' },
        modelPath: '3d model/manta_ray_84b_compressed.glb',
        measuredMaxDim: 260.0,
        useDirectLighting: true,
        modelScale: 1.0,
        modelPosition: [0, 0, 0],
        modelRotation: [0, -Math.PI / 2, 0]
    },
    {
        id: 'seaturtle',
        name: 'LOGGERHEAD SEA TURTLE',
        subtitle: "OCEAN'S MAGNETIC NAVIGATOR",
        scientificName: 'Caretta caretta',
        biome: 'Coastal and Open Ocean',
        sourceUrl: 'https://www.delightfuloceans.com/ocean-marvels/loggerhead-sea-turtle',
        description: 'Loggerhead sea turtles use Earth\'s magnetic field as a long-distance map. Their strong jaws crush hard-shelled prey, and many individuals spend decades at sea before returning to natal regions to nest.',
        tags: [
            { icon: '', label: 'SIZE', value: 'Up to 1.2 m' },
            { icon: '', label: 'MIGRATION', value: '10,000 km circuits' },
            { icon: '', label: 'MATURITY', value: '20-30 years' }
        ],
        anatomy: [
            { label: 'Carapace', desc: 'Bony shell protects the body and streamlines swimming', x: 50, y: 28 },
            { label: 'Flippers', desc: 'Long front flippers power ocean-scale migrations', x: 30, y: 55 },
            { label: 'Powerful Jaws', desc: 'Large head and strong bite crush conchs, crabs, and other shelled prey', x: 18, y: 30 }
        ],
        stats: {
            size: 'Up to 1.2 m / 180 kg',
            range: 'Temperate and tropical seas',
            diet: 'Hard-shelled invertebrates',
            migration: 'Atlantic gyre circuits',
            maturity: '20-30 years',
            status: 'Protected nesting recovery'
        },
        missions: [
            { icon: '01', title: 'Ancient Mariners', desc: 'Loggerheads can reach about 1.2 meters and 180 kilograms, with large heads that give the species its name.' },
            { icon: '02', title: 'Magnetic Navigation', desc: 'They imprint on magnetic signatures and use geomagnetic cues to orient across ocean basins.' },
            { icon: '03', title: 'Crushing Bite', desc: 'Powerful jaws let them feed on hard-shelled animals such as conchs, crabs, and horseshoe crabs.' },
            { icon: '04', title: 'Ocean Gyre Journeys', desc: 'Young turtles can spend years riding Atlantic current systems before returning toward coastal habitats.' },
            { icon: '05', title: 'Slow Maturity', desc: 'They often need two to three decades before breeding, making adult survival especially important.' },
            { icon: '06', title: 'Nesting Protection Works', desc: 'Protected beaches and reduced harvest have helped several North Atlantic nesting populations improve.' }
        ],
        image: 'seaturtle.svg',
        color: '#4caf50',
        sceneColor: 0x0a6a3a,
        modelPath: '3d model/sea_turtle_compressed.glb',
        credit: { title: 'Model 47A - Loggerhead Sea Turtle', author: 'DigitalLife3D', url: 'https://skfb.ly/6QStY', license: 'CC BY-NC 4.0' },
        modelScale: 1.0,
        modelPosition: [0, 0, 0],
        modelRotation: [0, Math.PI / 2, 0]
    },
    {
        id: 'hammerhead',
        name: 'HAMMERHEAD SHARK',
        subtitle: "OCEAN'S MAGNETIC NAVIGATOR",
        scientificName: 'Sphyrna mokarran and Family Sphyrnidae',
        biome: 'Coastal and Open Ocean',
        sourceUrl: 'https://www.delightfuloceans.com/ocean-marvels/hammerhead-shark',
        description: 'Hammerhead sharks combine wide-field vision, dense electroreception, and magnetic navigation. Their broad cephalofoils increase sensory coverage, while some species gather in large daytime schools around seamounts.',
        tags: [
            { icon: '', label: 'ELECTROSENSE', value: '1,500 receptors' },
            { icon: '', label: 'VISION', value: 'Near 360 degrees' },
            { icon: '', label: 'SCHOOLS', value: 'Hundreds together' }
        ],
        anatomy: [
            { label: 'Cephalofoil', desc: 'Hammer-shaped head expands vision and electroreception', x: 25, y: 30 },
            { label: 'Dorsal Fin', desc: 'Tall fin stabilizes movement during cruising and hunting', x: 55, y: 15 },
            { label: 'Electroreceptors', desc: 'Ampullae detect faint electrical fields from hidden prey', x: 35, y: 44 }
        ],
        stats: {
            size: 'Great hammerheads exceed 4 m',
            mass: '450+ kg possible',
            senses: 'Electroreception and wide vision',
            navigation: 'Magnetic-field orientation',
            behavior: 'Day schools, night hunting',
            status: 'High conservation concern'
        },
        missions: [
            { icon: '01', title: 'Extreme Electroreception', desc: 'Hammerheads carry dense arrays of ampullae that help detect extremely faint electrical signals.' },
            { icon: '02', title: 'Wide-Field Vision', desc: 'Eyes placed at the ends of the head create broad visual coverage with very small blind spots.' },
            { icon: '03', title: 'Magnetic Navigation', desc: 'They use geomagnetic cues to move between islands, seamounts, and nursery areas.' },
            { icon: '04', title: 'Social Schooling', desc: 'Scalloped hammerheads can gather by the hundreds during the day before dispersing to hunt.' },
            { icon: '05', title: 'Large Apex Sharks', desc: 'Great hammerheads can exceed 4 meters and carry a head span that greatly expands sensory range.' },
            { icon: '06', title: 'Protected-Area Recovery', desc: 'Recent observations in protected Caribbean waters suggest schooling behavior can return when pressure drops.' }
        ],
        image: 'whale.svg',
        color: '#607d8b',
        sceneColor: 0x2a5a6a,
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
        subtitle: "OCEAN'S GENTLE GIANT",
        scientificName: 'Rhincodon typus',
        biome: 'Tropical Open Ocean',
        sourceUrl: 'https://www.delightfuloceans.com/ocean-marvels/whale-shark',
        description: 'Whale sharks are the largest fish alive, yet they feed by filtering tiny prey from the water. Their spot patterns identify individuals, and long migrations connect seasonal feeding aggregations across thousands of kilometers.',
        tags: [
            { icon: '', label: 'SIZE', value: 'Up to 18 m' },
            { icon: '', label: 'FILTERING', value: '6,000 L/hour' },
            { icon: '', label: 'LIFESPAN', value: '100+ years' }
        ],
        anatomy: [
            { label: 'Wide Mouth', desc: 'Huge mouth takes in plankton-rich water for filtration', x: 20, y: 35 },
            { label: 'Spot Pattern', desc: 'Unique markings allow photo-identification across years', x: 50, y: 25 },
            { label: 'Gill Rakers', desc: 'Specialized filters retain plankton and small organisms', x: 35, y: 44 }
        ],
        stats: {
            size: 'Up to 18 m / 20 tonnes',
            range: 'Warm tropical seas',
            diet: 'Plankton and small fish',
            migration: 'Up to 12,000 km yearly',
            lifespan: 'More than 100 years',
            status: 'Endangered'
        },
        missions: [
            { icon: '01', title: 'Largest Fish', desc: 'Whale sharks can reach around 18 meters and 20 tonnes, making them Earth\'s biggest fish.' },
            { icon: '02', title: 'Filter-Feeding Power', desc: 'Specialized gill filters can process thousands of liters of water per hour to capture tiny prey.' },
            { icon: '03', title: 'Spot Fingerprints', desc: 'Each whale shark has a unique spot pattern that researchers use for long-term identification.' },
            { icon: '04', title: 'Century Lifespan', desc: 'Slow growth and long lives mean populations recover slowly from adult losses.' },
            { icon: '05', title: 'Long Migrations', desc: 'Individuals travel thousands of kilometers between feeding sites and warm-water aggregation areas.' },
            { icon: '06', title: 'Ecotourism Incentive', desc: 'Responsible tourism can make living whale sharks economically valuable and support protection.' }
        ],
        image: 'whale.svg',
        color: '#26a69a',
        sceneColor: 0x0a5a5a,
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
        subtitle: "OCEAN'S APEX SOCIAL PREDATOR",
        scientificName: 'Orcinus orca',
        biome: 'All Oceans',
        sourceUrl: 'https://www.delightfuloceans.com/ocean-marvels/orca',
        description: 'Orcas are the largest dolphins and top predators with complex family cultures. Multi-generation pods use dialects, learned hunting strategies, and matriarchal leadership to thrive from polar waters to tropical seas.',
        tags: [
            { icon: '', label: 'SIZE', value: 'Up to 9 m / 6 tons' },
            { icon: '', label: 'ECHOLOCATION', value: '220 dB clicks' },
            { icon: '', label: 'DIALECTS', value: '7-17 calls per pod' }
        ],
        anatomy: [
            { label: 'Dorsal Fin', desc: 'Large fin can reach about 1.8 meters in adult males', x: 50, y: 10 },
            { label: 'Saddle Patch', desc: 'Unique gray-white markings help identify individuals', x: 60, y: 30 },
            { label: 'Teeth', desc: 'Conical teeth grasp fish, seals, and other marine mammals', x: 20, y: 35 }
        ],
        stats: {
            size: 'Up to 9 m / 6 tons',
            range: 'All oceans',
            diet: 'Fish, seals, and whales',
            speed: 'Up to 56 km/h',
            social: 'Matriarchal pods',
            population: 'About 50,000 globally'
        },
        missions: [
            { icon: '01', title: 'Apex Predators', desc: 'As the largest dolphins, orcas sit at the top of marine food webs in many ocean regions.' },
            { icon: '02', title: 'Powerful Echolocation', desc: 'Their clicks can locate prey at distance and help coordinate group hunting.' },
            { icon: '03', title: 'Matriarchal Societies', desc: 'Eldest females guide multi-generation pods, and sons often remain with their mothers for life.' },
            { icon: '04', title: 'Cultural Hunting', desc: 'Different populations pass down specialized techniques such as wave-washing and carousel feeding.' },
            { icon: '05', title: 'Vocal Dialects', desc: 'Pods maintain distinct call repertoires that young orcas learn from their family group.' },
            { icon: '06', title: 'Global Range', desc: 'Orcas occur from Arctic ice edges to tropical waters, with regional diets and behaviors.' }
        ],
        image: 'whale.svg',
        color: '#37474f',
        sceneColor: 0x1a2a3a,
        modelPath: '3d model/female_orca_compressed.glb',
        credit: { title: 'Female Orca', author: 'neurodolphin', url: 'https://skfb.ly/THDz', license: 'CC BY-NC 4.0' },
        modelScale: 1.0,
        modelPosition: [0, 0, 0],
        modelRotation: [0, -Math.PI / 2, 0]
    },
    {
        id: 'sailfish',
        name: 'SAILFISH',
        subtitle: "OCEAN'S SPEED CHAMPION",
        scientificName: 'Istiophorus platypterus',
        biome: 'Warm Open Ocean',
        sourceUrl: 'https://www.delightfuloceans.com/ocean-marvels/sailfish',
        description: 'Sailfish are built for explosive speed. Their tall dorsal sail, elongated bill, heated swimming muscles, and coordinated pack hunting make them one of the ocean\'s most dramatic high-speed predators.',
        tags: [
            { icon: '', label: 'SPEED', value: 'Up to 110 km/h' },
            { icon: '', label: 'SAIL', value: 'Up to 2 m' },
            { icon: '', label: 'GROUPS', value: 'Up to 70 hunters' }
        ],
        anatomy: [
            { label: 'Dorsal Sail', desc: 'Raises during hunting and may assist display, control, and heat exchange', x: 50, y: 10 },
            { label: 'Bill', desc: 'Long upper jaw slashes and stuns baitfish', x: 10, y: 35 },
            { label: 'Caudal Fin', desc: 'Crescent tail delivers burst acceleration', x: 90, y: 45 }
        ],
        stats: {
            size: 'Up to 3 m / 90 kg',
            range: 'Warm ocean waters',
            diet: 'Small fish and squid',
            speed: 'Up to 110 km/h bursts',
            behavior: 'Cooperative pack hunting',
            status: 'Bycatch-sensitive'
        },
        missions: [
            { icon: '01', title: 'Fastest Fish', desc: 'Sailfish can reach short-burst speeds around 110 kilometers per hour.' },
            { icon: '02', title: 'High Dorsal Sail', desc: 'The sail can rise during hunts and fold back when the fish accelerates.' },
            { icon: '03', title: 'Precision Bill Strikes', desc: 'The long bill is used to slash through baitfish schools and stun prey.' },
            { icon: '04', title: 'Pack Coordination', desc: 'Groups may herd bait balls together, with individuals taking turns striking.' },
            { icon: '05', title: 'Warm Muscles', desc: 'Internal heat production keeps key muscles warmer than surrounding water for explosive movement.' },
            { icon: '06', title: 'Responsible Fishing', desc: 'Catch-and-release practices and bycatch reduction are central to keeping populations stable.' }
        ],
        image: 'whale.svg',
        color: '#1565c0',
        sceneColor: 0x0a2a5a,
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
