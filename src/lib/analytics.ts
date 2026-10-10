import { GA4_MEASUREMENT_ID } from '../data/company';

let loaded = false;
/** Loads GA4 only when a Measurement ID is configured in src/data/company.ts. */
export function initAnalytics() {
  if (loaded || !GA4_MEASUREMENT_ID || typeof window === 'undefined') return;
  loaded = true;
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.appendChild(s);
  const w = window as unknown as { dataLayer: unknown[]; gtag: (...a: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() { w.dataLayer.push(arguments); } as (...a: unknown[]) => void;
  w.gtag('js', new Date());
  w.gtag('config', GA4_MEASUREMENT_ID);
}
