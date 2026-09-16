export type ArcadeGame = 'court-vision' | 'fifth-run';

export type ArcadeMode = 'endless' | 'challenge';

export type ScorePayload = {
  game: ArcadeGame;
  mode: ArcadeMode;
  score: number;
  meta?: Record<string, unknown>;
};

export type Challenge = {
  id: string;
  url: string;
  game: ArcadeGame;
  targetScore: number;
  challengerName?: string;
};

export type CabinetStatus = 'live' | 'coming';

export type CabinetConfig = {
  id: string;
  title: string;
  status: CabinetStatus;
  route?: string;
  badge?: string;
  tagline: string;
};
