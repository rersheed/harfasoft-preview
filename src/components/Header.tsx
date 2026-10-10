import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, m as motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';

export const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about/', label: 'About' },
  { to: '/services/', label: 'Services' },
  { to: '/products/', label: 'Products' },
  { to: '/academy/', label: 'Academy' },
  { to: '/portfolio/', label: 'Portfolio' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const dark = pathname === '/' && !scrolled && !open;

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
      dark
        ? isActive ? 'bg-white/10 text-white' : 'text-white/75 hover:text-white'
        : isActive ? 'bg-brand/10 text-brand' : 'text-slate-600 hover:text-navy'
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        dark ? 'bg-transparent' : 'border-b border-slate-200/70 bg-white/85 shadow-sm backdrop-blur-lg'
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-3 lg:px-8" aria-label="Main">
        <Link to="/" aria-label="HARFASOFT Academy Limited — home">
          <Logo light={dark} />
        </Link>
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((n) => (
            <li key={n.to}><NavLink to={n.to} end={n.to === '/'} className={linkCls}>{n.label}</NavLink></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Link
            to="/contact/"
            className="hidden items-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-600 sm:inline-flex"
          >
            Contact us <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <button
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${dark ? 'text-white hover:bg-white/10' : 'text-navy hover:bg-slate-100'}`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
          >
            <ul className="space-y-1 px-5 py-4">
              {[...navItems, { to: '/contact/', label: 'Contact' }].map((n) => (
                <li key={n.to}>
                  <NavLink
                    to={n.to}
                    end={n.to === '/'}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-base font-medium ${isActive ? 'bg-brand/10 text-brand' : 'text-slate-700 hover:bg-slate-50'}`
                    }
                  >
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
