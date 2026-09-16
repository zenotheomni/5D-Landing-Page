const ANON_KEY = '5d_arcade_anon';

function randomId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }
  return `anon_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
}

/** Anonymous arcade identity — local only until M6 accounts. */
export function getArcadeAnonId(): string {
  if (typeof localStorage === 'undefined') return randomId();
  const existing = localStorage.getItem(ANON_KEY);
  if (existing) return existing;
  const id = randomId();
  localStorage.setItem(ANON_KEY, id);
  return id;
}
