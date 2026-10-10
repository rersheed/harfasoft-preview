import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import Seo from '../components/Seo';
import { Container, CtaBanner, PageHero } from '../components/ui';
import { services } from '../data/services';

export default function Services() {
  const crumbs = [{ name: 'Services', path: '/services/' }];
  return (
    <>
      <Seo title="ICT & Software Services in Nigeria" description="Custom software, web & mobile apps, IT infrastructure & networking, cybersecurity & IT consultancy, and ICT training from HARFASOFT Academy Limited." path="/services/" breadcrumbs={crumbs} />
      <PageHero crumbs={crumbs} eyebrow="SERVICES" title="Comprehensive ICT and software services" text="From strategy and software to networks and training, we cover the full technology lifecycle for businesses, schools, healthcare providers and government organisations." />
      <section className="bg-white py-20">
        <Container className="space-y-6">
          {services.map((s) => (
            <article key={s.slug} className="reveal grid gap-8 rounded-3xl border border-slate-200 p-8 transition hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5 lg:grid-cols-[1fr_1.3fr] lg:p-10">
              <div>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-cyan text-white shadow-lg shadow-brand/20"><s.icon className="h-7 w-7" aria-hidden="true" /></span>
                <h2 className="mt-6 font-display text-2xl font-extrabold text-navy">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-slate-600">{s.intro}</p>
                <Link to={`/services/${s.slug}/`} className="mt-6 inline-flex items-center gap-2 font-semibold text-brand hover:gap-3 transition-all">
                  Learn more about {s.title} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <ul className="grid content-start gap-3 sm:grid-cols-2">
                {s.offerings.map((o) => (
                  <li key={o.title} className="rounded-2xl bg-offwhite p-4">
                    <p className="flex items-center gap-2 font-semibold text-navy"><Check className="h-4 w-4 text-cyan" aria-hidden="true" />{o.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{o.text}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
