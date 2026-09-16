import type { CabinetConfig } from './types';

export const cabinets: CabinetConfig[] = [
  {
    id: 'court-vision',
    title: 'Court Vision',
    status: 'live',
    route: '/arcade/court-vision',
    badge: 'NEW',
    tagline: 'Finger-flick basketball',
  },
  {
    id: 'fifth-run',
    title: 'Fifth Run',
    status: 'live',
    route: '/arcade/fifth-run',
    tagline: '3-lane night runner',
  },
  {
    id: 'break-rack',
    title: 'Break & Rack',
    status: 'coming',
    tagline: 'Coming up',
  },
  {
    id: 'lane-drift',
    title: 'Lane Drift',
    status: 'coming',
    tagline: 'Coming up',
  },
];
