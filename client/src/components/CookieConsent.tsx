import { useEffect, useState } from 'react';
import {
  ANALYTICS_CONSENT_STORAGE_KEY,
  applyGoogleConsent,
} from '@/lib/analytics';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY);
    if (stored === 'granted') return applyGoogleConsent(true);
    if (stored === 'denied') return applyGoogleConsent(false);
    setVisible(true);
  }, []);

  function choose(granted: boolean) {
    localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, granted ? 'granted' : 'denied');
    applyGoogleConsent(granted);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[100] max-w-md rounded-2xl border border-gray-200 bg-white/95 p-4 shadow-2xl backdrop-blur-xl">
      <p className="mb-3 text-sm leading-relaxed text-gray-600">
        Usamos cookies de medição para entender como a landing é usada e melhorar a experiência. Você pode aceitar ou recusar os cookies não essenciais.
      </p>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => choose(true)}
          className="flex-1 rounded-full bg-gray-900 px-4 py-2 text-sm font-bold text-white"
        >
          Aceitar
        </button>
        <button
          type="button"
          onClick={() => choose(false)}
          className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm font-bold text-gray-700"
        >
          Recusar
        </button>
      </div>
    </div>
  );
}
