export type AnalyticsParams = Record<string, string | number | boolean | null | undefined>;
export const ANALYTICS_CONSENT_STORAGE_KEY = 'artefinal_cookie_consent';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function layer() {
  window.dataLayer = window.dataLayer || [];
  return window.dataLayer;
}

export function ensureGtag() {
  const target = layer();
  if (!window.gtag) window.gtag = (...args: unknown[]) => target.push(args);
  return window.gtag;
}

export function applyGoogleConsent(granted: boolean, mode: 'default' | 'update' = 'update') {
  ensureGtag()('consent', mode, {
    analytics_storage: granted ? 'granted' : 'denied',
    ad_storage: granted ? 'granted' : 'denied',
    ad_user_data: granted ? 'granted' : 'denied',
    ad_personalization: granted ? 'granted' : 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
    wait_for_update: mode === 'default' ? 500 : undefined,
  });
}

export function trackEvent(event: string, params: AnalyticsParams = {}) {
  layer().push({
    event,
    ...Object.fromEntries(Object.entries(params).filter(([, value]) => value !== undefined)),
  });
}
