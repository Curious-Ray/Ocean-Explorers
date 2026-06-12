export const creatureMapData = [
    {
        id: 'humpback',
        name: 'Humpback Whale',
        icon: '🐋',
        iconImage: 'whale-tail',
        color: '#5c6bc0',
        habitats: [
            { name: 'Stellwagen Bank, Massachusetts', coords: [-70.3, 42.3], population: 'high', status: 'feeding', season: 'Apr-Nov', notes: 'Major North Atlantic feeding ground, bubble-net feeding' },
            { name: 'Silver Bank, Dominican Republic', coords: [-69.7, 20.6], population: 'high', status: 'breeding', season: 'Jan-Mar', notes: 'Primary North Atlantic breeding and calving area on the Silver Bank' },
            { name: 'Tonga', coords: [-175.0, -20.0], population: 'moderate', status: 'breeding', season: 'Jul-Oct', notes: 'South Pacific breeding ground, swim-with-whales tourism' },
            { name: 'Antarctic Peninsula', coords: [-62.0, -64.5], population: 'high', status: 'feeding', season: 'Dec-Mar', notes: 'Krill-rich summer feeding grounds' },
            { name: 'Maui, Hawaii', coords: [-156.6, 20.75], population: 'high', status: 'breeding', season: 'Dec-Apr', notes: 'North Pacific breeding ground, famous for whale song' },
            { name: 'Monterey Bay, California', coords: [-122.1, 36.8], population: 'high', status: 'feeding', season: 'Apr-Nov', notes: 'Lunge-feeding on anchovies along submarine canyon' },
        ],
        migration: {
            route: [
                [-69.7, 20.6], [-68.5, 24], [-66, 29],
                [-64.8, 32.4], [-66.5, 37], [-68.5, 40],
                [-70.29, 41.3], [-70.3, 42.3]
            ],
            direction: 'north',
            timing: [
                { coord: [-69.7, 20.6], month: 'Jan-Mar', note: 'Breeding and calving at Silver Bank, Dominican Republic' },
                { coord: [-64.8, 32.4], month: 'Mar-May', note: 'Offshore northward migration through deep Atlantic waters near Bermuda' },
                { coord: [-70.3, 42.3], month: 'Apr-Nov', note: 'Feeding at Stellwagen Bank, Gulf of Maine' },
            ]
        }
    },
    {
        id: 'spermwhale',
        name: 'Sperm Whale',
        icon: '🐋',
        iconImage: 'whale-tail',
        color: '#546e7a',
        habitats: [
            { name: 'Azores, Portugal', coords: [-27.0, 38.5], population: 'high', status: 'feeding', season: 'Year-round', notes: 'Year-round resident population, deep submarine canyons' },
            { name: 'Kaikoura, New Zealand', coords: [173.7, -42.45], population: 'high', status: 'feeding', season: 'Year-round', notes: 'Deep underwater canyon provides rich squid hunting' },
            { name: 'Gulf of Mexico', coords: [-89.0, 27.5], population: 'moderate', status: 'resident', season: 'Year-round', notes: 'Resident population near deep-water oil platforms' },
            { name: 'Sri Lanka, Indian Ocean', coords: [81.65, 7.85], population: 'high', status: 'feeding', season: 'Dec-Apr', notes: 'Major gathering site along continental shelf' },
            { name: 'Dominica, Caribbean', coords: [-61.45, 15.4], population: 'moderate', status: 'breeding', season: 'Nov-Jun', notes: 'Only known year-round breeding population in the Caribbean' },
            { name: 'Galápagos Islands', coords: [-90.95, -0.5], population: 'moderate', status: 'feeding', season: 'Year-round', notes: 'Males frequent cold, productive upwelling zones' },
        ],
        migration: null
    },
    {
        id: 'octopus',
        name: 'Octopus',
        icon: '🐙',
        iconImage: 'octopus',
        color: '#e91e63',
        habitats: [
            { name: 'Mediterranean Sea', coords: [15.2, 36.85], population: 'high', status: 'thriving', season: 'Year-round', notes: 'Common octopus (O. vulgaris) densely populates rocky reefs' },
            { name: 'Pacific Northwest, USA', coords: [-122.9, 47.7], population: 'high', status: 'thriving', season: 'Year-round', notes: 'Giant Pacific octopus in Puget Sound kelp forests' },
            { name: 'Great Barrier Reef', coords: [147.0, -18.0], population: 'moderate', status: 'thriving', season: 'Year-round', notes: 'Blue-ringed and reef octopus species' },
            { name: 'Japan, Pacific Coast', coords: [139.0, 34.5], population: 'high', status: 'thriving', season: 'Year-round', notes: 'Key fishery species, culturally significant' },
            { name: 'Octopus Garden, Central California', coords: [-122.0, 36.5], population: 'high', status: 'breeding', season: 'Year-round', notes: 'Deep-sea nursery discovered at Monterey Bay' },
        ],
        migration: null
    },
    {
        id: 'mantaray',
        name: 'Manta Ray',
        icon: '🪽',
        iconImage: 'manta-ray',
        color: '#9c27b0',
        habitats: [
            { name: 'Maldives', coords: [73.5, 3.5], population: 'high', status: 'thriving', season: 'May-Nov', notes: 'Hanifaru Bay — largest known feeding aggregation' },
            { name: 'Komodo, Indonesia', coords: [119.5, -8.45], population: 'high', status: 'thriving', season: 'Dec-Feb', notes: 'Nutrient-rich upwellings attract large aggregations' },
            { name: 'Isla de la Plata, Ecuador', coords: [-81.0, -1.3], population: 'moderate', status: 'feeding', season: 'Jun-Oct', notes: 'Giant oceanic mantas in Humboldt Current waters' },
            { name: 'Kona Coast, Hawaii', coords: [-156.05, 19.65], population: 'moderate', status: 'resident', season: 'Year-round', notes: 'Famous night-dive manta site, plankton-rich waters' },
            { name: 'Mozambique Coast', coords: [35.5, -23.5], population: 'moderate', status: 'feeding', season: 'Oct-Mar', notes: 'Tofo Beach — critical reef manta habitat' },
        ],
        migration: null
    },
    {
        id: 'seaturtle',
        name: 'Loggerhead Sea Turtle',
        icon: '🐢',
        iconImage: 'sea-turtle',
        color: '#4caf50',
        habitats: [
            { name: 'Archie Carr NWR, Florida', coords: [-80.35, 27.7], population: 'high', status: 'nesting', season: 'May-Oct', notes: 'Most important nesting beach in the Western Hemisphere' },
            { name: 'Zakynthos, Greece', coords: [20.9, 37.7], population: 'high', status: 'nesting', season: 'Jun-Aug', notes: 'Largest Mediterranean nesting colony' },
            { name: 'Masirah Island, Oman', coords: [58.8, 20.7], population: 'high', status: 'nesting', season: 'May-Aug', notes: 'Largest loggerhead nesting site in the world (~30,000 nests/yr)' },
            { name: 'Yakushima, Japan', coords: [130.45, 30.45], population: 'moderate', status: 'nesting', season: 'May-Aug', notes: 'Primary North Pacific nesting site' },
            { name: 'Cape Verde Islands', coords: [-23.5, 16.0], population: 'moderate', status: 'nesting', season: 'Jun-Oct', notes: 'Third-largest loggerhead nesting population globally' },
            { name: 'Azores Developmental Grounds', coords: [-28, 38], population: 'moderate', status: 'developmental', season: 'Years 2-10', notes: 'Open-ocean nursery in the North Atlantic Gyre where juvenile loggerheads from Florida develop for years before returning west.' },
        ],
        migration: {
            route: [
                [-80.35, 27.7], [-77, 30], [-72, 34],
                [-64, 37], [-54, 38], [-44, 38.5],
                [-34, 38.5], [-28, 38]
            ],
            direction: 'east',
            timing: [
                { coord: [-80.35, 27.7], month: 'Oct', note: 'Hatchlings leave Florida and enter the Gulf Stream' },
                { coord: [-44, 38.5], month: 'Years 2-3', note: 'Drift northeast across the North Atlantic Gyre' },
                { coord: [-28, 38], month: 'Years 5-10', note: 'Develop in open-ocean Azores/Madeira grounds before returning west' },
            ]
        }
    },
    {
        id: 'hammerhead',
        name: 'Hammerhead Shark',
        icon: '🦈',
        iconImage: 'hammerhead',
        color: '#607d8b',
        habitats: [
            { name: 'Galápagos Islands', coords: [-90.95, -0.5], population: 'high', status: 'critical', season: 'Jan-May', notes: 'Massive schools of 200+ at Darwin and Wolf Islands' },
            { name: 'Cocos Island, Costa Rica', coords: [-87.0, 5.5], population: 'high', status: 'critical', season: 'Jun-Dec', notes: 'UNESCO site, hundreds school around seamounts' },
            { name: 'Malpelo Island, Colombia', coords: [-81.6, 4.0], population: 'high', status: 'critical', season: 'Year-round', notes: 'Protected sanctuary, large hammerhead aggregations' },
            { name: 'Bimini, Bahamas', coords: [-79.3, 25.7], population: 'moderate', status: 'nursery', season: 'Mar-Sep', notes: 'Critical nursery habitat for juvenile great hammerheads' },
            { name: 'Layang-Layang, Malaysia', coords: [113.8, 7.4], population: 'moderate', status: 'seasonal', season: 'Mar-May', notes: 'Scalloped hammerhead schooling at deep atoll' },
            { name: 'Gulf of Panama Nursery', coords: [-79.5, 7.5], population: 'high', status: 'nursery', season: 'Feb-May', notes: 'Coastal Panama Bight nursery where pregnant scalloped hammerheads migrate from the Galapagos to give birth.' },
        ],
        migration: {
            route: [
                [-90.95, -0.5], [-88, 2], [-85, 5],
                [-82, 6.5], [-79.5, 7.5]
            ],
            direction: 'northeast',
            timing: [
                { coord: [-90.95, -0.5], month: 'Jan', note: 'Schooling at Darwin & Wolf Islands, Galapagos' },
                { coord: [-85, 5], month: 'Feb-Mar', note: 'Pregnant females migrate northeast across the Eastern Tropical Pacific' },
                { coord: [-79.5, 7.5], month: 'Mar-May', note: 'Give birth in the Gulf of Panama coastal nursery' },
            ]
        }
    },
    {
        id: 'whaleshark',
        name: 'Whale Shark',
        icon: '🦈',
        iconImage: 'whale-shark',
        color: '#26a69a',
        habitats: [
            { name: 'Ningaloo Reef, Australia', coords: [113.7, -22.7], population: 'high', status: 'feeding', season: 'Mar-Jul', notes: 'Largest reliable aggregation, coral spawning attracts 300-500 sharks' },
            { name: 'Isla Holbox, Mexico', coords: [-87.4, 21.5], population: 'high', status: 'feeding', season: 'Jun-Sep', notes: 'Caribbean\'s largest gathering, bonito egg feeding' },
            { name: 'Oslob, Philippines', coords: [123.45, 9.5], population: 'moderate', status: 'resident', season: 'Year-round', notes: 'Controversial provisioning site, year-round sightings' },
            { name: 'Djibouti, Gulf of Tadjoura', coords: [43.1, 11.6], population: 'moderate', status: 'feeding', season: 'Oct-Feb', notes: 'Juvenile whale shark aggregation in warm gulf' },
            { name: 'Gladden Spit, Belize', coords: [-88.0, 16.5], population: 'moderate', status: 'feeding', season: 'Mar-Jun', notes: 'Sharks feed on snapper spawn clouds' },
            { name: 'South Ari Atoll, Maldives', coords: [72.8, 3.5], population: 'high', status: 'feeding', season: 'Year-round', notes: 'Year-round juvenile population along atoll shelf' },
        ],
        migration: null
    },
    {
        id: 'orca',
        name: 'Orca',
        icon: '🐋',
        iconImage: 'orca',
        color: '#37474f',
        habitats: [
            { name: 'Norwegian Fjords', coords: [17.0, 69.0], population: 'high', status: 'feeding', season: 'Oct-Jan', notes: 'Pods follow herring into narrow fjords, carousel feeding' },
            { name: 'Salish Sea, Pacific NW', coords: [-123.0, 48.5], population: 'low', status: 'critical', season: 'May-Oct', notes: 'Southern Resident orcas — only ~75 individuals, critically endangered' },
            { name: 'Valdes Peninsula, Argentina', coords: [-63.5, -42.45], population: 'moderate', status: 'feeding', season: 'Mar-May', notes: 'Famous intentional beach stranding to catch sea lions' },
            { name: 'Crozet Islands, Sub-Antarctic', coords: [51.0, -46.4], population: 'moderate', status: 'feeding', season: 'Year-round', notes: 'Specialized elephant seal hunting pods' },
            { name: 'Antarctic Peninsula', coords: [-62.5, -64.3], population: 'high', status: 'feeding', season: 'Dec-Mar', notes: 'Type B orcas hunt seals around Gerlache Strait, then depart north Feb-Apr' },
            { name: 'Iceland', coords: [-20.5, 63.7], population: 'high', status: 'feeding', season: 'Jun-Aug', notes: 'Summer herring feeding aggregation' },
            { name: 'South Atlantic Skin-Maintenance Grounds', coords: [-51, -33], population: 'moderate', status: 'migrating', season: 'Mar-Jun', notes: 'Warm subtropical shelf waters off Uruguay/southern Brazil reached on rapid round-trip skin-maintenance migrations from Antarctica.' },
        ],
        migration: {
            route: [
                [-62.5, -64.3], [-60, -58], [-57, -53],
                [-56.5, -51.5], [-52, -44], [-50, -37],
                [-51, -33]
            ],
            direction: 'north',
            timing: [
                { coord: [-62.5, -64.3], month: 'Feb-Apr', note: 'Depart Gerlache Strait after summer seal hunting at the Antarctic Peninsula' },
                { coord: [-56.5, -51.5], month: 'Feb-Apr', note: 'Fast northbound track passes east of the Falkland Islands' },
                { coord: [-51, -33], month: 'Mar-Jun', note: 'Reach warm subtropical shelf waters for skin maintenance, then return south by early winter' },
            ]
        }
    },
    {
        id: 'sailfish',
        name: 'Sailfish',
        icon: '🐟',
        iconImage: 'sailfish',
        color: '#1565c0',
        habitats: [
            { name: 'Isla Mujeres, Mexico', coords: [-86.75, 21.2], population: 'high', status: 'feeding', season: 'Jan-Mar', notes: 'Massive sardine bait-ball hunts, sailfish "army" events' },
            { name: 'Zanzibar, Tanzania', coords: [39.2, -6.25], population: 'moderate', status: 'seasonal', season: 'Aug-Oct', notes: 'East African coast sport fishing hotspot' },
            { name: 'Rompin, Malaysia', coords: [103.55, 2.8], population: 'high', status: 'feeding', season: 'Feb-May', notes: 'Indo-Pacific sailfish schooling near river mouths' },
            { name: 'Pacific Coast, Guatemala', coords: [-91.5, 13.5], population: 'high', status: 'feeding', season: 'Nov-May', notes: '"Sailfish Capital of the World" — 20+ raises per day' },
            { name: 'Exmouth, Australia', coords: [114.2, -22.0], population: 'moderate', status: 'seasonal', season: 'Mar-Jul', notes: 'Indian Ocean sailfish along the Ningaloo coast' },
        ],
        migration: null
    },
];
