import { Component, lazy, Suspense, useEffect, useRef, useState, type ReactNode } from 'react';

const HeroScene = lazy(() => import('../three/HeroScene'));

/** Static, zero-JS gradient visual used during SSR, while loading, and when 3D is disabled. */
function StaticVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
      <div className="relative h-[70%] max-h-80 aspect-square">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand via-blue-500 to-cyan opacity-80 blur-2xl" />
        <div className="absolute inset-[18%] rounded-full bg-gradient-to-br from-brand to-cyan shadow-[0_0_80px_rgba(34,211,238,.5)]" />
        <div className="absolute -inset-[12%] rounded-full border border-cyan/40" />
        <div className="absolute -inset-[24%] rotate-12 rounded-full border border-blue-400/25" />
      </div>
    </div>
  );
}

class GLBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? <StaticVisual /> : this.props.children; }
}

function webglAvailable() {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch { return false; }
}

type Mode = 'static' | 'full' | 'simple';

export default function Hero3D() {
  const [mode, setMode] = useState<Mode>('static');
  const [reduced, setReduced] = useState(false);
  const [active, setActive] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nav = navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string }; deviceMemory?: number };
    const conn = nav.connection;
    const lowData = !!conn?.saveData || /(^|-)2g$/.test(conn?.effectiveType || '');
    const lowPower = (nav.deviceMemory !== undefined && nav.deviceMemory <= 2) || (nav.hardwareConcurrency !== undefined && nav.hardwareConcurrency <= 2);
    if (lowData || lowPower || !webglAvailable()) return; // keep the static fallback
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const small = window.matchMedia('(max-width: 767px)').matches;
    // Defer loading three.js until the browser is idle so it never competes with first paint.
    const start = () => setMode(small ? 'simple' : 'full');
    const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number };
    let id: number;
    if (w.requestIdleCallback) id = w.requestIdleCallback(start, { timeout: small ? 2500 : 1200 });
    else id = window.setTimeout(start, small ? 1500 : 600);
    return () => { (window as Window & { cancelIdleCallback?: (n: number) => void }).cancelIdleCallback?.(id); clearTimeout(id); };
  }, []);

  // Pause rendering while the hero is off-screen.
  useEffect(() => {
    if (!ref.current || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(([e]) => setActive(e.isIntersecting), { threshold: 0 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative h-full w-full">
      {mode === 'static' ? (
        <StaticVisual />
      ) : (
        <GLBoundary>
          <Suspense fallback={<StaticVisual />}>
            <div className="absolute inset-0 animate-[fadein_1s_ease-out]">
              <HeroScene simplified={mode === 'simple'} reducedMotion={reduced} active={active} />
            </div>
          </Suspense>
        </GLBoundary>
      )}
    </div>
  );
}
