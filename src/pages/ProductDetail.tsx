import { Link } from 'react-router-dom';
import { ArrowRight, Check, Download, ExternalLink as ExtIcon, Globe } from 'lucide-react';
import Seo, { abs } from '../components/Seo';
import ProductMockup from '../components/ProductMockup';
import DemoLink from '../components/DemoLink';
import { Breadcrumbs, Container, CtaBanner, Eyebrow, ExternalLink, SectionHeading } from '../components/ui';
import { products, type Product } from '../data/products';
import { company } from '../data/company';

export default function ProductDetail({ product: p }: { product: Product }) {
  const path = `/products/${p.slug}/`;
  const crumbs = [{ name: 'Our Products', path: '/products/' }, { name: p.name, path }];
  const others = products.filter((o) => o.slug !== p.slug);
  const app: Record<string, unknown> = {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: p.name, description: p.seoDescription,
    applicationCategory: p.applicationCategory, operatingSystem: p.operatingSystem, url: abs(path),
    featureList: p.features.map((f) => f.title).join(', '),
    publisher: { '@type': 'Organization', '@id': `${abs('/')}#organization`, name: company.name },
    audience: { '@type': 'Audience', audienceType: p.customers.join(', ') },
  };
  if (p.liveUrl) app.sameAs = p.liveUrl;
  if (p.apkUrl) app.downloadUrl = p.apkUrl;
  const btn = 'inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition';
  return (
    <>
      <Seo title={p.seoTitle} description={p.seoDescription} path={path} breadcrumbs={crumbs} type="product" jsonLd={[app]} />

      <section className="relative overflow-hidden border-b border-slate-200 bg-white pt-28 pb-20 sm:pt-32">
        <div className="bg-grid-light pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" aria-hidden="true" />
        <div className={`pointer-events-none absolute -right-20 top-10 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-3xl`} aria-hidden="true" />
        <Container className="relative">
          <Breadcrumbs items={crumbs} />
          <div className="mt-10 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>{p.category.toUpperCase()}</Eyebrow>
              <h1 className="mt-5 font-display text-5xl font-extrabold tracking-tight text-navy sm:text-6xl">{p.name}</h1>
              <p className="mt-3 text-xl font-semibold text-brand">{p.tagline}</p>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">{p.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <DemoLink product={p.name} className={`${btn} bg-brand text-white shadow-lg shadow-brand/25 hover:bg-brand-600`}>
                  Request a demo <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </DemoLink>
                {p.liveUrl && (
                  <ExternalLink href={p.liveUrl} className={`${btn} border border-slate-300 bg-white text-navy hover:border-brand hover:text-brand`}>
                    <Globe className="h-4 w-4" aria-hidden="true" /> Open web app <ExtIcon className="h-3.5 w-3.5" aria-hidden="true" /><span className="sr-only">(opens in a new tab)</span>
                  </ExternalLink>
                )}
                {p.apkUrl && (
                  <a href={p.apkUrl} rel="noopener noreferrer" className={`${btn} border border-slate-300 bg-white text-navy hover:border-brand hover:text-brand`}>
                    <Download className="h-4 w-4" aria-hidden="true" /> Download Android APK
                  </a>
                )}
              </div>
            </div>
            <div className="relative">
              <div className={`absolute -inset-6 rounded-[2rem] bg-gradient-to-br ${p.accent} opacity-20 blur-2xl`} aria-hidden="true" />
              {p.slug === 'bizbook' ? (
                <figure className="relative grid grid-cols-[1.6fr_1fr] items-end gap-4">
                  <ProductMockup product={p} />
                  <div>
                    <img src={`${import.meta.env.BASE_URL}images/bizbook-login.png`} width={390} height={760} loading="lazy" alt="Screenshot of the BizBook web app sign-in screen" className="w-full rounded-2xl border border-slate-200 shadow-2xl shadow-navy/15" />
                  </div>
                  <figcaption className="col-span-2 text-center text-xs text-slate-500">Left: illustrative interface. Right: the live BizBook web app sign-in screen.</figcaption>
                </figure>
              ) : (
                <div className="relative"><ProductMockup product={p} /></div>
              )}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="FEATURES" title={`What ${p.name} does`} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {p.features.map((f) => (
              <div key={f.title} className="reveal rounded-3xl border border-slate-200 bg-white p-7">
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${p.accent} text-white`}><f.icon className="h-6 w-6" aria-hidden="true" /></span>
                <h3 className="mt-5 font-display text-lg font-bold text-navy">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="reveal">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy">Who {p.name} is for</h2>
            <ul className="mt-6 space-y-3">
              {p.customers.map((c) => <li key={c} className="flex items-center gap-3 text-lg text-slate-700"><Check className="h-5 w-5 text-cyan" aria-hidden="true" />{c}</li>)}
            </ul>
          </div>
          <div className="reveal rounded-3xl bg-navy p-10 text-white">
            <h2 className="font-display text-2xl font-extrabold">See {p.name} in action</h2>
            <p className="mt-3 text-slate-300">Tell us about your organisation and we'll arrange a walkthrough tailored to your needs.</p>
            <DemoLink product={p.name} className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-navy transition hover:bg-cyan">
              Request a demo <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </DemoLink>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="font-display text-xl font-bold text-navy">Other products</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {others.map((o) => (
              <Link key={o.slug} to={`/products/${o.slug}/`} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-brand/40">
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${o.accent} text-white`}><o.icon className="h-5 w-5" aria-hidden="true" /></span>
                <span><span className="block font-semibold text-navy">{o.name}</span><span className="text-sm text-slate-500">{o.category}</span></span>
                <ArrowRight className="ml-auto h-4 w-4 text-brand" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
