import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import type { Crumb } from './Seo';

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-5 lg:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold tracking-[0.18em] ${
      light ? 'border-cyan/30 bg-cyan/10 text-cyan' : 'border-brand/20 bg-brand/5 text-brand'
    }`}>
      <span className={`h-1.5 w-1.5 rounded-full ${light ? 'bg-cyan' : 'bg-brand'}`} aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHeading({ eyebrow, title, text, center = false }: { eyebrow?: string; title: ReactNode; text?: ReactNode; center?: boolean }) {
  return (
    <div className={`reveal max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-lg leading-relaxed text-slate-600">{text}</p>}
    </div>
  );
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-slate-500">
        <li><Link className="hover:text-brand" to="/">Home</Link></li>
        {items.map((c, i) => (
          <li key={c.path} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            {i === items.length - 1 ? (
              <span aria-current="page" className="font-medium text-navy">{c.name}</span>
            ) : (
              <Link className="hover:text-brand" to={c.path}>{c.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({ crumbs, eyebrow, title, text, children }: { crumbs: Crumb[]; eyebrow: string; title: ReactNode; text: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div className="bg-grid-light pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-cyan/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-20 left-1/3 h-72 w-72 rounded-full bg-brand/10 blur-3xl" aria-hidden="true" />
      <Container className="relative">
        <Breadcrumbs items={crumbs} />
        <div className="mt-8 max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-navy sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">{text}</p>
          {children}
        </div>
      </Container>
    </section>
  );
}

export function CtaBanner({
  title = 'Ready to digitise your organisation?',
  text = "Let's discuss your next project.",
  label = 'Contact HARFASOFT',
  to = '/contact/',
}: { title?: string; text?: string; label?: string; to?: string }) {
  return (
    <section className="py-20">
      <Container>
        <div className="reveal relative overflow-hidden rounded-3xl bg-navy px-8 py-14 text-center shadow-2xl shadow-navy/20 sm:px-16">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand/40 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-cyan/30 blur-3xl" aria-hidden="true" />
          <div className="relative">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">{text}</p>
            <Link to={to} className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-navy shadow-lg transition hover:bg-cyan">
              {label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ButtonLink({ to, children, variant = 'primary' }: { to: string; children: ReactNode; variant?: 'primary' | 'ghost' }) {
  const cls = variant === 'primary'
    ? 'bg-brand text-white shadow-lg shadow-brand/25 hover:bg-brand-600'
    : 'border border-slate-300 bg-white text-navy hover:border-brand hover:text-brand';
  return (
    <Link to={to} className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${cls}`}>{children}</Link>
  );
}

export function ExternalLink({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>;
}
