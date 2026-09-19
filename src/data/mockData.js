// RESQ-GeoIntel demo data
// Fictional district: Kharodi District — one consistent dataset used across
// every dashboard section so numbers never contradict each other.

export const district = {
  name: 'Kharodi District',
  state: 'Demo State',
  lastSync: 'Today, 14:32',
  connectivity: 'ONLINE',
};

// ---- Habitations (vulnerable population centres) ----
export const habitations = [
  {
    id: 'H-17',
    name: 'Habitation H-17 — Rajpura Basti',
    lat: 22.734,
    lng: 75.812,
    population: 6500,
    vulnerablePopulation: 4850,
    households: 1340,
    children: 1820,
    elderly: 690,
    otherVulnerable: 340,
    riskScore: 87,
    riskLevel: 'high',
    priority: 'Critical',
    factors: {
      elevation: { label: 'Elevation vulnerability', level: 'High', value: 88 },
      rainfall: { label: 'Rainfall intensity', level: 'High', value: 82 },
      historical: { label: 'Historical hazard exposure', level: 'Medium', value: 58 },
      populationExposure: { label: 'Population exposure', level: 'High', value: 91 },
    },
  },
  {
    id: 'H-09',
    name: 'Habitation H-09 — Nallah Colony',
    lat: 22.744,
    lng: 75.792,
    population: 3120,
    vulnerablePopulation: 1980,
    households: 640,
    children: 780,
    elderly: 310,
    otherVulnerable: 140,
    riskScore: 74,
    riskLevel: 'high',
    priority: 'High',
    factors: {
      elevation: { label: 'Elevation vulnerability', level: 'Medium', value: 61 },
      rainfall: { label: 'Rainfall intensity', level: 'High', value: 79 },
      historical: { label: 'Historical hazard exposure', level: 'High', value: 83 },
      populationExposure: { label: 'Population exposure', level: 'Medium', value: 57 },
    },
  },
  {
    id: 'H-22',
    name: 'Habitation H-22 — Ghatpar',
    lat: 22.718,
    lng: 75.828,
    population: 2140,
    vulnerablePopulation: 980,
    households: 410,
    children: 410,
    elderly: 220,
    otherVulnerable: 90,
    riskScore: 52,
    riskLevel: 'medium',
    priority: 'Moderate',
    factors: {
      elevation: { label: 'Elevation vulnerability', level: 'Medium', value: 48 },
      rainfall: { label: 'Rainfall intensity', level: 'Medium', value: 55 },
      historical: { label: 'Historical hazard exposure', level: 'Low', value: 30 },
      populationExposure: { label: 'Population exposure', level: 'Medium', value: 46 },
    },
  },
];

// The habitation the whole demo flow focuses on (matches PPT: H-17, 6,500 pop)
export const focusHabitationId = 'H-17';

// ---- Hazard zone polygons for the map (rough demo geometry) ----
export const hazardZones = [
  {
    id: 'RZ-A',
    level: 'high',
    label: 'Red Zone A — River-adjacent lowland',
    coords: [
      [22.742, 75.802],
      [22.740, 75.822],
      [22.726, 75.824],
      [22.724, 75.806],
    ],
  },
  {
    id: 'RZ-B',
    level: 'medium',
    label: 'Zone B — Moderate slope runoff',
    coords: [
      [22.752, 75.780],
      [22.750, 75.800],
      [22.736, 75.798],
      [22.738, 75.778],
    ],
  },
  {
    id: 'RZ-C',
    level: 'safe',
    label: 'Zone C — Stable upland',
    coords: [
      [22.712, 75.836],
      [22.710, 75.856],
      [22.696, 75.854],
      [22.698, 75.834],
    ],
  },
];

// ---- Candidate relocation sites ----
// Required capacity totals: 2,000 + 2,500 + 2,000 = 6,500 = affected population of H-17
export const sites = [
  {
    id: 'SITE-ALPHA',
    name: 'Site Alpha — Govt. Higher Secondary School Grounds',
    lat: 22.706,
    lng: 75.846,
    distanceKm: 6.1,
    capacity: 2500,
    requiredAllocation: 2000,
    accessibility: 'Good',
    hazardRisk: 'Low',
    facilities: ['Water supply', 'Sanitation blocks', 'Medical post'],
    roadConnectivity: 'All-weather road',
    suitability: 92,
  },
  {
    id: 'SITE-BETA',
    name: 'Site Beta — District Sports Stadium',
    lat: 22.694,
    lng: 75.822,
    distanceKm: 9.4,
    capacity: 3000,
    requiredAllocation: 2500,
    accessibility: 'Good',
    hazardRisk: 'Low',
    facilities: ['Water supply', 'Sanitation blocks', 'Power backup', 'Medical post'],
    roadConnectivity: 'All-weather road',
    suitability: 96,
  },
  {
    id: 'SITE-GAMMA',
    name: 'Site Gamma — Community Hall, Uparwada',
    lat: 22.716,
    lng: 75.860,
    distanceKm: 11.8,
    capacity: 2500,
    requiredAllocation: 2000,
    accessibility: 'Moderate',
    hazardRisk: 'Low',
    facilities: ['Water supply', 'Sanitation blocks'],
    roadConnectivity: 'Partially metalled road',
    suitability: 84,
  },
];

// Sphere humanitarian minimum standards used to derive capacity
export const sphereStandards = {
  coveredFloorSpacePerPerson: 2.5, // m^2
  toiletRatio: 20, // 1 toilet per 20 people
  waterLitersPerPersonPerDay: 15,
};

// ---- Allocation summary (derived, kept consistent with sites[].requiredAllocation) ----
export const allocation = {
  affectedPopulation: 6500,
  bySite: sites.map((s) => ({ siteId: s.id, siteName: s.name, allocated: s.requiredAllocation })),
  get totalAllocated() {
    return this.bySite.reduce((sum, s) => sum + s.allocated, 0);
  },
};

// ---- Routing (habitation H-17 -> Site Beta, the primary recommendation) ----
export const route = {
  originId: 'H-17',
  destinationId: 'SITE-BETA',
  distanceKm: 8.4,
  travelTimeMin: 18,
  hazardExposure: 'Low',
  status: 'Safe',
  hazardZonesAvoided: ['RZ-A', 'RZ-B'],
  path: [
    [22.734, 75.812],
    [22.728, 75.808],
    [22.719, 75.813],
    [22.708, 75.818],
    [22.694, 75.822],
  ],
  alternative: {
    label: 'Alternative via SH-12',
    distanceKm: 7.1,
    travelTimeMin: 15,
    hazardExposure: 'High',
    status: 'Not recommended — crosses Red Zone A',
    path: [
      [22.734, 75.812],
      [22.736, 75.815],
      [22.730, 75.818],
      [22.712, 75.820],
      [22.694, 75.822],
    ],
  },
};

// ---- Evidence & assumptions (Page 9) ----
export const evidence = {
  recommendation: 'Relocate Habitation H-17 → Site Beta (primary), with overflow to Site Alpha and Site Gamma',
  checks: [
    'Outside identified high-risk zone',
    '3,000-person rated capacity at Site Beta',
    'Suitable road accessibility (all-weather road)',
    'Hazard-free primary route (avoids Red Zone A and Zone B)',
    'Population allocation constraint satisfied (6,500 / 6,500 allocated)',
  ],
  assumptions: [
    'Population estimate sourced from WorldPop 100m grid, latest available epoch',
    `Data timestamp: ${district.lastSync}`,
    'Risk model weights: elevation 30%, rainfall 30%, historical hazard 20%, population exposure 20%',
    'Site capacity status confirmed at last field sync; subject to change on re-verification',
  ],
  dataSources: [
    { name: 'CartoDEM V3 (ISRO Bhuvan)', role: 'Elevation / terrain', status: 'Loaded' },
    { name: 'IMD Gridded Rainfall', role: 'Precipitation', status: 'Loaded' },
    { name: 'WorldPop 100m Grid', role: 'Population distribution', status: 'Loaded' },
    { name: 'OpenStreetMap', role: 'Road network & infrastructure', status: 'Loaded' },
    { name: 'Historical hazard archive', role: 'Prior flood/hazard events', status: 'Loaded' },
  ],
  riskModel: {
    criteria: ['Elevation vulnerability', 'Rainfall intensity', 'Historical hazard exposure', 'Population exposure'],
    weights: [30, 30, 20, 20],
  },
};

// ---- System status (Page 10) ----
export const systemStatus = {
  dataLayers: [
    { name: 'Elevation data (CartoDEM V3)', loaded: true },
    { name: 'Rainfall data (IMD)', loaded: true },
    { name: 'Population data (WorldPop)', loaded: true },
    { name: 'Road network (OSM)', loaded: true },
    { name: 'Historical hazard layers', loaded: true },
  ],
  connectivity: 'ONLINE',
  lastSync: district.lastSync,
  offlineCache: 'Available — 4 layers cached',
};

// ---- Top-level metrics (Page 2 bottom cards) ----
export const metrics = {
  highRiskZones: hazardZones.filter((z) => z.level === 'high').length + 1, // +1 nearby zone tracked but not geofenced on demo map
  populationExposed: habitations.reduce((sum, h) => sum + h.vulnerablePopulation, 0),
  sitesAvailable: sites.length,
  capacityAvailable: sites.reduce((sum, s) => sum + s.capacity, 0),
  relocationPriority: 'Critical — H-17',
};
