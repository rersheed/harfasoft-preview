import { Link } from 'react-router-dom';
import { ArrowRight, Building, Globe, LayoutDashboard, Network, School, Stethoscope } from 'lucide-react';
import Seo from '../components/Seo';
import ProductMockup from '../components/ProductMockup';
import { Container, CtaBanner, PageHero, SectionHeading } from '../components/ui';
import { products } from '../data/products';

const categories = [
  { icon: School, title: 'Education technology', text: 'School administration, results processing and parent communication systems.' },
  { icon: Stethoscope, title: 'Healthcare systems', text: 'Patient records, clinical workflow, laboratory, pharmacy and billing software.' },
  { icon: LayoutDashboard, title: 'Business software', text: 'Bookkeeping, inventory, dashboards and process automation for SMEs.' },
  { icon: Globe, title: 'Websites & web apps', text: 'Corporate websites, portals and progressive web applications.' },
  { icon: Network, title: 'Networks & infrastructure', text: 'LAN/WAN, server and cloud deployments with backup strategies.' },
  { icon: Building, title: 'Institutional solutions', text: 'Digital transformation projects for public-sector and non-profit organisations.' },
];

export default function Portfolio() {
  const crumbs = [{ name: 'Portfolio', path: '/portfolio/' }];
  return (
    <>
      <Seo title="Portfolio — Software Projects & Solutions" description="Explore HARFASOFT's work: LumiSAS school management, Alkhairat HMS hospital management, BizBook business accounting and our areas of project delivery." path="/portfolio/" breadcrumbs={crumbs} />
      <PageHero crumbs={crumbs} eyebrow="PORTFOLIO" title="Our work" text="A look at the platforms we have built and the kinds of projects we deliver for organisations." />
      <section className="bg-white py-20">
        <Container>
          <SectionHeading eyebrow="FLAGSHIP PRODUCTS" title="Platforms we've built" />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {products.map((p) => (
              <Link key={p.slug} to={`/products/${p.slug}/`} className="reveal group block overflow-hidden rounded-3xl border border-slate-200 transition hover:shadow-2xl hover:shadow-brand/10">
                <div className={`bg-gradient-to-br ${p.accent} p-6`}><ProductMockup product={p} compact /></div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand">{p.category}</p>
                  <h3 className="mt-1 font-display text-xl font-bold text-navy">{p.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{p.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">View project <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" /></span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="PROJECT CATEGORIES" title="What we deliver" text="Beyond our own products, we take on custom projects across these areas." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <div key={c.title} className="reveal rounded-3xl border border-slate-200 bg-white p-7">
                <c.icon className="h-7 w-7 text-brand" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-bold text-navy">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CtaBanner title="Have a project in mind?" text="Let's discuss how we can help." />
    </>
  );
}
