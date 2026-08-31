import { useEffect } from 'react';
import {
  ANALYTICS_CONSENT_STORAGE_KEY,
  applyGoogleConsent,
  ensureGtag,
  trackEvent,
} from '@/lib/analytics';

const GTM_ID = 'GTM-MWC4F9RN';
const PRODUCTION_HOSTS = new Set(['artefinal.app', 'www.artefinal.app']);

function normalize(value: string | null | undefined) {
  return (value || '').replace(/\s+/g, ' ').trim();
}

export default function AnalyticsProvider() {
  useEffect(() => {
    if (!PRODUCTION_HOSTS.has(window.location.hostname.toLowerCase())) return;

    if (!document.getElementById('artefinal-gtm-script')) {
      const granted = localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY) === 'granted';
      ensureGtag();
      applyGoogleConsent(granted, 'default');

      const script = document.createElement('script');
      script.id = 'artefinal-gtm-script';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      document.head.appendChild(script);
    }

    const onClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const anchor = target?.closest('a');
      if (!anchor) return;
      const href = anchor.href || anchor.getAttribute('href') || '';
      const label = normalize(anchor.textContent);

      if (href.includes('ia.artefinal.app')) {
        trackEvent('artefinal_app_click', {
          product: 'artefinal',
          link_url: href,
          link_text: label || undefined,
          destination: href.includes('/login') ? 'login' : 'app',
        });

        if (/começar grátis|comecar gratis/i.test(label)) {
          trackEvent('start_free', {
            product: 'artefinal',
            destination: 'ia.artefinal.app',
          });
        }
      }
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}
