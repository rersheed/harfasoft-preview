import { Link } from 'react-router-dom';
import Logo from './Logo';
import { company } from '../data/company';
import { products } from '../data/products';
import { services } from '../data/services';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-900 text-slate-300" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
            A Nigerian technology company delivering software development, IT consultancy, digital transformation, ICT training and enterprise technology solutions.
          </p>
          <p className="mt-5 text-sm text-slate-400">
            {company.name}<br />
            RC {company.rcNumber} · Registered with the CAC
          </p>
          {company.email && (
            <p className="mt-3 text-sm"><a className="text-cyan hover:underline" href={`mailto:${company.email}`}>{company.email}</a></p>
          )}
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              ['/about/', 'About us'], ['/academy/', 'Academy'], ['/portfolio/', 'Portfolio'], ['/contact/', 'Contact'],
            ].map(([to, l]) => <li key={to}><Link className="hover:text-white" to={to}>{l}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => <li key={s.slug}><Link className="hover:text-white" to={`/services/${s.slug}/`}>{s.title}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Products</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {products.map((p) => <li key={p.slug}><Link className="hover:text-white" to={`/products/${p.slug}/`}>{p.name}</Link></li>)}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {year} {company.name}. All rights reserved. RC {company.rcNumber}.</p>
          <ul className="flex gap-5">
            <li><Link className="hover:text-white" to="/privacy-policy/">Privacy Policy</Link></li>
            <li><Link className="hover:text-white" to="/terms-of-service/">Terms of Service</Link></li>
            <li><a className="hover:text-white" href={`${import.meta.env.BASE_URL}sitemap.xml`}>Sitemap</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
