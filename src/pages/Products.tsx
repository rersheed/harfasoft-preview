import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import Seo, { abs } from '../components/Seo';
import ProductMockup from '../components/ProductMockup';
import { Container, CtaBanner, PageHero } from '../components/ui';
import { products } from '../data/products';

export default function Products() {
  const crumbs = [{ name: 'Our Products', path: '/products/' }];
  return (
    <>
      <Seo title="Our Products — LumiSAS, Alkhairat HMS & BizBook" description="HARFASOFT software products: LumiSAS school management system, Alkhairat HMS hospital management system and BizBook simplified business accounting." path="/products/" breadcrumbs={crumbs}
        jsonLd={[{ '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: products.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.name, url: abs(`/products/${p.slug}/`) })) }]}
      />
      <PageHero crumbs={crumbs} eyebrow="OUR PRODUCTS" title="Software products for schools, hospitals and businesses" text="Our proprietary platforms are built for the way Nigerian institutions work, and can be customised and deployed for your organisation." />
      <section className="bg-white py-20">
        <Container className="grid gap-8 lg:grid-cols-3">
          {products.map((p) => (
            <article key={p.slug} className="reveal group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand/10">
              <div className={`bg-gradient-to-br ${p.accent} p-6`}>
                <ProductMockup product={p} compact />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">{p.category}</p>
                <h2 className="mt-2 font-display text-2xl font-extrabold text-navy">{p.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.summary}</p>
                <ul className="mt-5 space-y-2">
                  {p.features.slice(0, 5).map((f) => <li key={f.title} className="flex items-center gap-2 text-sm text-slate-700"><Check className="h-4 w-4 text-cyan" aria-hidden="true" />{f.title}</li>)}
                </ul>
                <Link to={`/products/${p.slug}/`} className="mt-auto inline-flex items-center gap-2 pt-7 font-semibold text-brand">
                  View {p.name} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </Container>
      </section>
      <CtaBanner title="Need a custom version?" text="We can tailor any of our products to your organisation's workflows." label="Talk to us" />
    </>
  );
}
