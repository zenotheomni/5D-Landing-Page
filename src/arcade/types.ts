export type GameId = 'court-vision' | 'fifth-run' | 'break-and-rack' | 'lane-drift';

export type GameMode = 'endless' | 'challenge';

export type CabinetStatus = 'live' | 'coming';

export interface ScorePayload {
  game: GameId;
  mode: GameMode;
  score: number;
  meta?: Record<string, unknown>;
}

export interface Challenge {
  id: string;
  game: GameId;
  mode: GameMode;
  score: number;
  challengerName?: string;
  url?: string;
}

export interface CabinetConfig {
  id: GameId;
  title: string;
  status: CabinetStatus;
  badge?: string;
  route?: string;
  endDoors?: { challenge: string; store: string };
  previewKind: 'basketball' | 'runner' | 'pool' | 'racing';
}
