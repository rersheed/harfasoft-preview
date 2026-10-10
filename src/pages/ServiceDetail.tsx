import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import Seo, { abs } from '../components/Seo';
import { ButtonLink, Container, CtaBanner, PageHero, SectionHeading } from '../components/ui';
import { services, type Service } from '../data/services';
import { company } from '../data/company';

export default function ServiceDetail({ service: s }: { service: Service }) {
  const path = `/services/${s.slug}/`;
  const crumbs = [{ name: 'Services', path: '/services/' }, { name: s.title, path }];
  const others = services.filter((o) => o.slug !== s.slug);
  return (
    <>
      <Seo
        title={s.seoTitle}
        description={s.seoDescription}
        path={path}
        breadcrumbs={crumbs}
        jsonLd={[{
          '@context': 'https://schema.org', '@type': 'Service', name: s.title, serviceType: s.title, description: s.seoDescription, url: abs(path),
          provider: { '@type': 'Organization', '@id': `${abs('/')}#organization`, name: company.name },
          areaServed: { '@type': 'Country', name: 'Nigeria' },
          hasOfferCatalog: { '@type': 'OfferCatalog', name: s.title, itemListElement: s.offerings.map((o) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: o.title, description: o.text } })) },
        }]}
      />
      <PageHero crumbs={crumbs} eyebrow="SERVICE" title={s.title} text={s.intro}>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink to="/contact/">Discuss your project <ArrowRight className="h-4 w-4" aria-hidden="true" /></ButtonLink>
          <ButtonLink to="/services/" variant="ghost">All services</ButtonLink>
        </div>
      </PageHero>

      <section className="bg-white py-20">
        <Container>
          <SectionHeading eyebrow="WHAT WE OFFER" title={`Our ${s.title.toLowerCase()} services`} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {s.offerings.map((o) => (
              <div key={o.title} className="reveal rounded-3xl border border-slate-200 p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand"><Check className="h-5 w-5" aria-hidden="true" /></span>
                <h3 className="mt-5 font-display text-lg font-bold text-navy">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{o.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="reveal rounded-3xl border border-slate-200 bg-white p-8">
            <h2 className="font-display text-2xl font-extrabold text-navy">Who it's for</h2>
            <ul className="mt-6 space-y-3">
              {s.audiences.map((a) => <li key={a} className="flex items-center gap-3 text-slate-700"><Check className="h-5 w-5 text-cyan" aria-hidden="true" />{a}</li>)}
            </ul>
          </div>
          <div className="reveal rounded-3xl bg-navy p-8 text-white">
            <h2 className="font-display text-2xl font-extrabold">How we work</h2>
            <ol className="mt-6 space-y-4">
              {s.process.map((p, i) => (
                <li key={p} className="flex items-center gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-cyan text-sm font-bold">{i + 1}</span>
                  <span className="text-slate-200">{p}</span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <h2 className="font-display text-xl font-bold text-navy">Related services</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <li key={o.slug}>
                <Link to={`/services/${o.slug}/`} className="flex h-full items-start gap-3 rounded-2xl border border-slate-200 p-5 transition hover:border-brand/40">
                  <o.icon className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  <span className="text-sm font-semibold text-navy">{o.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
