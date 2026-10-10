import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { LazyMotion, domAnimation } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import { useReveal } from '../lib/useReveal';
import { initAnalytics } from '../lib/analytics';

export default function Layout() {
  const { pathname } = useLocation();
  useReveal();
  useEffect(() => { initAnalytics(); }, []);
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return (
    <LazyMotion features={domAnimation} strict>
      <a href="#main" className="sr-only z-[60] rounded-lg bg-brand px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to main content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
    </LazyMotion>
  );
}
