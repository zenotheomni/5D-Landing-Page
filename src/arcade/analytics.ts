type ArcadeProps = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function arcadeTrack(event: string, props?: ArcadeProps): void {
  const payload = { event, ...props, ts: Date.now() };

  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
  }

  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.log('[arcade]', event, props ?? {});
  }
}
