/**
 * Mock data for the "Curated by Collective Travel Intelligence" blueprints.
 * Exact content from the 4 destination cards in the screenshot.
 */
export const mockBlueprints = [
  {
    id: 'blueprint-barcelona',
    slug: 'barcelona-gaudi-tapas',
    title: 'Barcelona Gaudí & Tapas',
    category: 'ARCHITECTURE & TAPAS',
    rating: 4.9,
    description:
      'Catalan Modernism walking corridors, subterranean vermouth cellars, and...',
    estimatedCost: '$2,140',
    duration: '7 Days',
    imageKey: 'destinationBarcelona',
  },
  {
    id: 'blueprint-tokyo',
    slug: 'neon-zen-tokyo',
    title: 'Neon & Zen Tokyo',
    category: 'MODERNIST & CULINARY',
    rating: 4.8,
    description:
      'Autonomous rail navigation from Ginza omakase basements to Kamakura temos...',
    estimatedCost: '$1,850',
    duration: '5 Days',
    imageKey: 'destinationTokyo',
  },
  {
    id: 'blueprint-amalfi',
    slug: 'amalfi-coastline-scooter',
    title: 'Amalfi Coastline by Scooter',
    category: 'COASTAL VISTAS',
    rating: 4.9,
    description:
      'Curve-by-curve scenic navigation, lemon grove private luncheons, and...',
    estimatedCost: '$2,200',
    duration: '6 Days',
    imageKey: 'destinationAmalfi',
  },
  {
    id: 'blueprint-reykjavik',
    slug: 'reykjavik-geothermal-circuit',
    title: 'Reykjavik Geothermal Circuit',
    category: 'NATURE & VOLCANISM',
    rating: 4.8,
    description:
      'Volcanic fault lines, geothermal soak coordinates, and aurora tracking...',
    estimatedCost: '$2,650',
    duration: '6 Days',
    imageKey: 'destinationReykjavik',
  },
];

export const mockBlueprintsMeta = {
  totalCount: 42,
  sectionKicker: 'AUTONOMOUS BLUEPRINTS',
  sectionTitle: 'Curated by Collective Travel Intelligence',
  actionLabel: 'View All 42 Blueprints',
};
