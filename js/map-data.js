export const creatureMapData = [
    {
        id: 'spermwhale',
        name: 'Sperm Whale',
        icon: '🐋',
        color: '#546e7a',
        habitats: [
            { name: 'Azores, Portugal', coords: [-27.0, 38.5], population: 'high', status: 'feeding', season: 'Year-round', notes: 'Year-round resident population, deep submarine canyons' },
            { name: 'Kaikoura, New Zealand', coords: [173.7, -42.4], population: 'high', status: 'feeding', season: 'Year-round', notes: 'Deep underwater canyon provides rich squid hunting' },
            { name: 'Gulf of Mexico', coords: [-89.0, 27.5], population: 'moderate', status: 'resident', season: 'Year-round', notes: 'Resident population near deep-water oil platforms' },
            { name: 'Sri Lanka, Indian Ocean', coords: [81.0, 7.5], population: 'high', status: 'feeding', season: 'Dec-Apr', notes: 'Major gathering site along continental shelf' },
            { name: 'Dominica, Caribbean', coords: [-61.4, 15.4], population: 'moderate', status: 'breeding', season: 'Nov-Jun', notes: 'Only known year-round breeding population in the Caribbean' },
            { name: 'Galápagos Islands', coords: [-91.0, -0.5], population: 'moderate', status: 'feeding', season: 'Year-round', notes: 'Males frequent cold, productive upwelling zones' },
        ],
        migration: null
    },
    {
        id: 'octopus',
        name: 'Octopus',
        icon: '🐙',
        color: '#e91e63',
        habitats: [
            { name: 'Mediterranean Sea', coords: [15.0, 37.0], population: 'high', status: 'thriving', season: 'Year-round', notes: 'Common octopus (O. vulgaris) densely populates rocky reefs' },
            { name: 'Pacific Northwest, USA', coords: [-123.5, 47.5], population: 'high', status: 'thriving', season: 'Year-round', notes: 'Giant Pacific octopus in Puget Sound kelp forests' },
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
        color: '#9c27b0',
        habitats: [
            { name: 'Maldives', coords: [73.5, 3.5], population: 'high', status: 'thriving', season: 'May-Nov', notes: 'Hanifaru Bay — largest known feeding aggregation' },
            { name: 'Komodo, Indonesia', coords: [119.5, -8.5], population: 'high', status: 'thriving', season: 'Dec-Feb', notes: 'Nutrient-rich upwellings attract large aggregations' },
            { name: 'Isla de la Plata, Ecuador', coords: [-81.0, -1.3], population: 'moderate', status: 'feeding', season: 'Jun-Oct', notes: 'Giant oceanic mantas in Humboldt Current waters' },
            { name: 'Kona Coast, Hawaii', coords: [-156.0, 19.7], population: 'moderate', status: 'resident', season: 'Year-round', notes: 'Famous night-dive manta site, plankton-rich waters' },
            { name: 'Mozambique Coast', coords: [35.5, -23.5], population: 'moderate', status: 'feeding', season: 'Oct-Mar', notes: 'Tofo Beach — critical reef manta habitat' },
        ],
        migration: {
            route: [
                [72.95, 5.13], [75.0, 3.0], [78.0, 1.0],
                [82.0, -1.0], [86.0, -2.0], [90.0, -4.0],
                [95.0, -5.5], [100.0, -6.5], [105.0, -7.0],
                [109.0, -10.5], [114.0, -10.2], [119.2, -9.0]
            ],
            direction: 'east',
            timing: [
                { coord: [72.95, 5.13], month: 'May', note: 'Feeding at Hanifaru Bay, Baa Atoll' },
                { coord: [90.0, -4.0], month: 'Aug', note: 'Transit through central Indian Ocean' },
                { coord: [119.45, -8.55], month: 'Dec', note: 'Arrives at Komodo feeding grounds' },
            ]
        }
    },
    {
        id: 'seaturtle',
        name: 'Loggerhead Sea Turtle',
        icon: '🐢',
        color: '#4caf50',
        habitats: [
            { name: 'Archie Carr NWR, Florida', coords: [-80.5, 27.7], population: 'high', status: 'nesting', season: 'May-Oct', notes: 'Most important nesting beach in the Western Hemisphere' },
            { name: 'Zakynthos, Greece', coords: [20.9, 37.7], population: 'high', status: 'nesting', season: 'Jun-Aug', notes: 'Largest Mediterranean nesting colony' },
            { name: 'Masirah Island, Oman', coords: [58.8, 20.7], population: 'high', status: 'nesting', season: 'May-Aug', notes: 'Largest loggerhead nesting site in the world (~30,000 nests/yr)' },
            { name: 'Yakushima, Japan', coords: [130.5, 30.4], population: 'moderate', status: 'nesting', season: 'May-Aug', notes: 'Primary North Pacific nesting site' },
            { name: 'Cape Verde Islands', coords: [-23.5, 16.0], population: 'moderate', status: 'nesting', season: 'Jun-Oct', notes: 'Third-largest loggerhead nesting population globally' },
        ],
        migration: {
            route: [
                [-80.49, 27.95], [-78.0, 30.0], [-75.0, 33.0],
                [-65.0, 35.0], [-55.0, 36.0], [-45.0, 37.0],
                [-30.38, 38.31], [-16.28, 32.37], [-15.5, 28.1],
                [-10.0, 35.5], [-5.35, 35.9], [-4.0, 36.0],
                [-2.0, 36.0], [0.0, 36.8], [3.0, 38.2],
                [8.0, 38.7], [12.0, 37.4], [15.0, 35.4],
                [18.0, 36.3], [20.4, 37.2]
            ],
            direction: 'east',
            timing: [
                { coord: [-80.49, 27.95], month: 'Oct', note: 'Hatchlings enter Gulf Stream from Florida' },
                { coord: [-30.38, 38.31], month: 'Year 2-3', note: 'Juveniles drift to Azores via North Atlantic Gyre' },
                { coord: [20.87, 37.73], month: 'Year 5-10', note: 'Foraging in Mediterranean, Laganas Bay' },
            ]
        }
    },
    {
        id: 'hammerhead',
        name: 'Hammerhead Shark',
        icon: '🦈',
        color: '#607d8b',
        habitats: [
            { name: 'Galápagos Islands', coords: [-91.0, -0.5], population: 'high', status: 'critical', season: 'Jan-May', notes: 'Massive schools of 200+ at Darwin and Wolf Islands' },
            { name: 'Cocos Island, Costa Rica', coords: [-87.0, 5.5], population: 'high', status: 'critical', season: 'Jun-Dec', notes: 'UNESCO site, hundreds school around seamounts' },
            { name: 'Malpelo Island, Colombia', coords: [-81.6, 4.0], population: 'high', status: 'critical', season: 'Year-round', notes: 'Protected sanctuary, large hammerhead aggregations' },
            { name: 'Bimini, Bahamas', coords: [-79.3, 25.7], population: 'moderate', status: 'nursery', season: 'Mar-Sep', notes: 'Critical nursery habitat for juvenile great hammerheads' },
            { name: 'Layang-Layang, Malaysia', coords: [113.8, 7.4], population: 'moderate', status: 'seasonal', season: 'Mar-May', notes: 'Scalloped hammerhead schooling at deep atoll' },
        ],
        migration: {
            route: [
                [-91.82, 1.39], [-91.99, 1.67], [-91.5, 2.0],
                [-90.5, 2.5], [-89.5, 3.0], [-88.5, 3.5],
                [-87.5, 4.5], [-87.07, 5.52], [-86.0, 5.0],
                [-85.0, 4.5], [-84.0, 4.2], [-83.0, 4.0],
                [-81.6, 3.98]
            ],
            direction: 'northeast',
            timing: [
                { coord: [-91.82, 1.39], month: 'Jan', note: 'Schooling at Wolf & Darwin Islands' },
                { coord: [-87.07, 5.52], month: 'Jun', note: 'Migrates north along Cocos Ridge to Cocos Island' },
                { coord: [-81.6, 3.98], month: 'Aug', note: 'Continues east to Malpelo Island' },
            ]
        }
    },
    {
        id: 'whaleshark',
        name: 'Whale Shark',
        icon: '🦈',
        color: '#26a69a',
        habitats: [
            { name: 'Ningaloo Reef, Australia', coords: [113.8, -22.7], population: 'high', status: 'feeding', season: 'Mar-Jul', notes: 'Largest reliable aggregation, coral spawning attracts 300-500 sharks' },
            { name: 'Isla Holbox, Mexico', coords: [-87.4, 21.5], population: 'high', status: 'feeding', season: 'Jun-Sep', notes: 'Caribbean\'s largest gathering, bonito egg feeding' },
            { name: 'Oslob, Philippines', coords: [123.4, 9.5], population: 'moderate', status: 'resident', season: 'Year-round', notes: 'Controversial provisioning site, year-round sightings' },
            { name: 'Djibouti, Gulf of Tadjoura', coords: [43.1, 11.6], population: 'moderate', status: 'feeding', season: 'Oct-Feb', notes: 'Juvenile whale shark aggregation in warm gulf' },
            { name: 'Gladden Spit, Belize', coords: [-88.0, 16.5], population: 'moderate', status: 'feeding', season: 'Mar-Jun', notes: 'Sharks feed on snapper spawn clouds' },
            { name: 'South Ari Atoll, Maldives', coords: [72.8, 3.5], population: 'high', status: 'feeding', season: 'Year-round', notes: 'Year-round juvenile population along atoll shelf' },
        ],
        migration: {
            route: [
                [113.65, -22.67], [114.5, -16.0], [116.0, -10.0],
                [116.5, -8.5], [117.4, -5.5], [118.6, -1.5],
                [120.0, 2.5], [121.0, 7.0], [121.5, 8.5],
                [122.8, 9.2]
            ],
            direction: 'north',
            timing: [
                { coord: [113.65, -22.67], month: 'Mar', note: 'Aggregation at Ningaloo during coral spawn' },
                { coord: [124.0, -6.0], month: 'Jun', note: 'Northward through Indonesian waters' },
                { coord: [123.42, 9.56], month: 'Sep', note: 'Arrives at Oslob, Cebu, Philippines' },
            ]
        }
    },
    {
        id: 'orca',
        name: 'Orca',
        icon: '🐋',
        color: '#37474f',
        habitats: [
            { name: 'Norwegian Fjords', coords: [17.0, 69.0], population: 'high', status: 'feeding', season: 'Oct-Jan', notes: 'Pods follow herring into narrow fjords, carousel feeding' },
            { name: 'Salish Sea, Pacific NW', coords: [-123.0, 48.5], population: 'low', status: 'critical', season: 'May-Oct', notes: 'Southern Resident orcas — only ~75 individuals, critically endangered' },
            { name: 'Valdes Peninsula, Argentina', coords: [-63.5, -42.5], population: 'moderate', status: 'feeding', season: 'Mar-May', notes: 'Famous intentional beach stranding to catch sea lions' },
            { name: 'Crozet Islands, Sub-Antarctic', coords: [51.0, -46.4], population: 'moderate', status: 'feeding', season: 'Year-round', notes: 'Specialized elephant seal hunting pods' },
            { name: 'Antarctic Peninsula', coords: [-60.0, -64.0], population: 'high', status: 'feeding', season: 'Dec-Mar', notes: 'Type B orcas hunt seals using wave-wash technique' },
            { name: 'Iceland', coords: [-20.0, 64.5], population: 'high', status: 'feeding', season: 'Jun-Aug', notes: 'Summer herring feeding aggregation' },
        ],
        migration: {
            route: [
                [-62.33, -64.5], [-60.0, -62.0], [-58.0, -58.0],
                [-56.0, -53.0], [-55.0, -48.0], [-52.0, -43.0],
                [-48.0, -35.0], [-43.0, -30.0], [-37.0, -20.0],
                [-33.0, -10.0], [-30.0, 0.0], [-28.0, 10.0],
                [-25.0, 25.0], [-23.0, 40.0], [-22.0, 52.0],
                [-22.0, 63.2]
            ],
            direction: 'north',
            timing: [
                { coord: [-62.33, -64.5], month: 'Dec', note: 'Seal hunting at Gerlache Strait, Antarctic Peninsula' },
                { coord: [-45.0, -30.0], month: 'Mar', note: 'Rapid northward migration for skin maintenance' },
                { coord: [-20.0, 64.5], month: 'Jun', note: 'Arrives at Iceland herring grounds' },
            ]
        }
    },
    {
        id: 'humpback',
        name: 'Humpback Whale',
        icon: '🐋',
        color: '#5c6bc0',
        habitats: [
            { name: 'Stellwagen Bank, Massachusetts', coords: [-70.3, 42.3], population: 'high', status: 'feeding', season: 'Apr-Nov', notes: 'Major North Atlantic feeding ground, bubble-net feeding' },
            { name: 'Silver Bank, Dominican Republic', coords: [-68.5, 20.8], population: 'high', status: 'breeding', season: 'Jan-Mar', notes: 'Primary North Atlantic breeding and calving area' },
            { name: 'Tonga', coords: [-175.0, -20.0], population: 'moderate', status: 'breeding', season: 'Jul-Oct', notes: 'South Pacific breeding ground, swim-with-whales tourism' },
            { name: 'Antarctic Peninsula', coords: [-62.0, -64.5], population: 'high', status: 'feeding', season: 'Dec-Mar', notes: 'Krill-rich summer feeding grounds' },
            { name: 'Maui, Hawaii', coords: [-156.5, 20.8], population: 'high', status: 'breeding', season: 'Dec-Apr', notes: 'North Pacific breeding ground, famous for whale song' },
            { name: 'Monterey Bay, California', coords: [-122.0, 36.8], population: 'high', status: 'feeding', season: 'Apr-Nov', notes: 'Lunge-feeding on anchovies along submarine canyon' },
        ],
        migration: {
            route: [
                [-62.33, -64.5], [-60.0, -62.0], [-57.5, -55.0],
                [-54.0, -45.0], [-48.0, -35.0], [-41.0, -25.0],
                [-35.0, -15.0], [-34.0, -5.0], [-43.0, 8.0],
                [-62.0, 18.0], [-69.7, 20.54], [-70.0, 25.0],
                [-72.0, 30.0], [-71.5, 35.0], [-69.5, 40.0],
                [-69.3, 41.4], [-70.0, 42.2]
            ],
            direction: 'north',
            timing: [
                { coord: [-62.33, -64.5], month: 'Dec-Mar', note: 'Feeds on krill at Gerlache Strait, Antarctic Peninsula' },
                { coord: [-69.7, 20.54], month: 'Jan-Mar', note: 'Breeds and calves at Silver Bank sanctuary' },
                { coord: [-70.25, 42.33], month: 'Apr-Nov', note: 'Feeds on fish and krill at Stellwagen Bank' },
            ]
        }
    },
    {
        id: 'sailfish',
        name: 'Sailfish',
        icon: '🐟',
        color: '#1565c0',
        habitats: [
            { name: 'Isla Mujeres, Mexico', coords: [-86.7, 21.2], population: 'high', status: 'feeding', season: 'Jan-Mar', notes: 'Massive sardine bait-ball hunts, sailfish "army" events' },
            { name: 'Zanzibar, Tanzania', coords: [39.2, -6.2], population: 'moderate', status: 'seasonal', season: 'Aug-Oct', notes: 'East African coast sport fishing hotspot' },
            { name: 'Rompin, Malaysia', coords: [103.5, 2.8], population: 'high', status: 'feeding', season: 'Feb-May', notes: 'Indo-Pacific sailfish schooling near river mouths' },
            { name: 'Pacific Coast, Guatemala', coords: [-91.5, 13.5], population: 'high', status: 'feeding', season: 'Nov-May', notes: '"Sailfish Capital of the World" — 20+ raises per day' },
            { name: 'Exmouth, Australia', coords: [114.1, -22.0], population: 'moderate', status: 'seasonal', season: 'Mar-Jul', notes: 'Indian Ocean sailfish along the Ningaloo coast' },
        ],
        migration: null
    },
];
