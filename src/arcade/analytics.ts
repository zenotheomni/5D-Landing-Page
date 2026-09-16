export function track(event: string, props?: Record<string, unknown>): void {
  const payload = {
    event,
    props: props ?? {},
    ts: Date.now(),
  };

  console.debug('[arcade]', event, props ?? {});

  try {
    const body = JSON.stringify(payload);
    if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
      const blob = new Blob([body], { type: 'application/json' });
      navigator.sendBeacon('/api/arcade/analytics', blob);
    }
  } catch {
    // ignore analytics failures in M1
  }
}
