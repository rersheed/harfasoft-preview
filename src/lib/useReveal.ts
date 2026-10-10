import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Adds `is-visible` to `.reveal` elements as they scroll into view. */
export function useReveal() {
  const { pathname } = useLocation();
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)'));
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('is-visible')); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); } }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [pathname]);
}
