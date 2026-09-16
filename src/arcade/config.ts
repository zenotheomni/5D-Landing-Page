import type { CabinetConfig } from './types';

export const ARCADE_PALETTE = {
  void: '#0A0A0C',
  ink: '#1A1028',
  signal: '#FF5A1F',
  softWhite: '#F2F0EA',
  crtMint: '#7DFFC3',
  muted: '#6B6B73',
} as const;

export const COPY = {
  flowState: 'Flow state.',
  fifthState: 'Fifth State unlocked.',
  runItBack: 'Run it back.',
  almost: 'Almost. Rearrange. Run it back.',
  youreIn: "You're in.",
  nothingInTheWay: 'Nothing in the way.',
  shifted: 'You shifted the scoreboard.',
  alreadyMoving: "You're already moving.",
  keyAcquired: 'Key acquired.',
  glitch: 'Glitch. Rearrange. Run it back.',
  outran: 'You outran their reality.',
} as const;

export const CABINETS: CabinetConfig[] = [
  {
    id: 'court-vision',
    title: 'Court Vision',
    status: 'live',
    badge: 'NEW',
    route: '/arcade/court-vision',
    endDoors: { challenge: 'Challenge a friend', store: 'Enter boutique' },
    previewKind: 'basketball',
  },
  {
    id: 'fifth-run',
    title: 'Fifth Run',
    status: 'live',
    route: '/arcade/fifth-run',
    endDoors: { challenge: 'Challenge a friend', store: 'Enter record store' },
    previewKind: 'runner',
  },
  {
    id: 'break-and-rack',
    title: 'Break & Rack',
    status: 'coming',
    previewKind: 'pool',
  },
  {
    id: 'lane-drift',
    title: 'Lane Drift',
    status: 'coming',
    previewKind: 'racing',
  },
];

export const DOCK_LINKS = [
  { id: 'boutique', label: 'Boutique', href: 'https://5dimperial.com' },
  { id: 'record-store', label: 'Record Store', href: '#' },
  { id: 'theater', label: 'Theater', href: '#' },
] as const;
