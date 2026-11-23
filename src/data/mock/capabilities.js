/**
 * Mock data for the 3 core spatial capability feature cards.
 * Exact content from the three middle cards in the screenshot.
 */
export const mockCapabilities = [
  {
    id: 'spatial-continuity-canvas',
    badge: 'REAL-TIME TELEMETRY',
    badgeType: 'telemetry',
    iconKey: 'compass',
    title: 'Spatial Continuity Canvas',
    description:
      'Map-anchored trajectories calculated against solar elevation angles, pedestrian elevation gradients, and crowd densities.',
    visualization: {
      type: 'elevation-curve',
      headerLeft: 'Walking Fatigue Index',
      headerRight: 'Optimized (1.4 km max leg)',
      milestones: [
        { time: '09:00', label: 'Casa Batlló' },
        { time: '13:30', label: 'Mercat Boqueria' },
        { time: '18:45', label: 'Sagrada Família' },
      ],
    },
  },
  {
    id: 'autonomous-pacing-budget',
    badge: 'ALGORITHMIC',
    badgeType: 'algorithmic',
    iconKey: 'sliders',
    title: 'Autonomous Pacing & Budget',
    description:
      'Dynamic liquidity thresholds with automated alerts on ticketing bottlenecks and unexpected price spikes.',
    visualization: {
      type: 'budget-breakdown',
      items: [
        {
          category: 'Boutique Lodging',
          amount: '$1,240',
          percentage: 53,
          colorClass: 'bg-indigo-600',
        },
        {
          category: 'Gastronomy & Tapas',
          amount: '$550',
          percentage: 24,
          colorClass: 'bg-sky-500',
        },
        {
          category: 'Museums & Passes',
          amount: '$540',
          percentage: 23,
          colorClass: 'bg-purple-600',
        },
      ],
    },
  },
  {
    id: 'cryptographic-offline-vault',
    badge: 'ZERO-SIGNAL READY',
    badgeType: 'vault',
    iconKey: 'shieldCheck',
    title: 'Cryptographic Offline Vault',
    description:
      'Local vector tiles cached to your hardware. Direct sync to Apple Wallet boarding passes, calendar streams, and haptic queues.',
    visualization: {
      type: 'vault-sync',
      items: [
        {
          iconKey: 'mapPin',
          title: 'Vector Map Tiles (Catalog)',
          status: '142 MB Cached',
          statusType: 'success',
        },
        {
          iconKey: 'refresh',
          title: 'Passbook & Calendar Live Sync',
          status: 'Dual Handshake',
          statusType: 'primary',
        },
      ],
    },
  },
];
