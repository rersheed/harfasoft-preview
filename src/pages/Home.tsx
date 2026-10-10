import { Link } from 'react-router-dom';
import { m as motion } from 'framer-motion';
import { ArrowRight, Code2, GraduationCap, HeartPulse, Server, ShieldCheck, Layers, Users, Cpu, Handshake, MapPin, CheckCircle2 } from 'lucide-react';
import Seo, { abs } from '../components/Seo';
import Hero3D from '../components/Hero3D';
import ProductMockup from '../components/ProductMockup';
import { Container, CtaBanner, SectionHeading, Eyebrow } from '../components/ui';
import { products } from '../data/products';
import { services } from '../data/services';

const whatWeDo = [
  { icon: Code2, title: 'Software Development', text: 'Custom enterprise applications, SaaS platforms and business automation built around how you work.', to: '/services/custom-software-development/' },
  { icon: GraduationCap, title: 'Education Technology', text: 'School management systems and digital learning tools for conventional and Islamic institutions.', to: '/products/lumisas/' },
  { icon: HeartPulse, title: 'Healthcare Systems', text: 'Hospital management software that connects registration, consultations, lab, pharmacy and billing.', to: '/products/alkhairat-hms/' },
  { icon: Server, title: 'IT Infrastructure', text: 'Networks, servers, cloud hosting and backups that keep your organisation running reliably.', to: '/services/it-infrastructure-networking/' },
];

const reasons = [
  { icon: MapPin, title: 'Built for Nigeria', text: 'Solutions designed for local workflows, users and network conditions — not imported one-size-fits-all.' },
  { icon: Layers, title: 'End-to-end delivery', text: 'From consultancy and design to development, deployment, training and support under one roof.' },
  { icon: Cpu, title: 'Modern technology', text: 'Cloud-ready, secure and scalable architectures using current, well-supported tools.' },
  { icon: Users, title: 'People first', text: 'Through HARFASOFT Academy we train your team so the technology is actually adopted.' },
  { icon: ShieldCheck, title: 'Security by design', text: 'Access control, data protection and backups considered from day one.' },
  { icon: Handshake, title: 'Long-term partnership', text: 'We maintain and improve what we build as your organisation grows.' },
];

const fade = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

export default function Home() {
  return (
    <>
      <Seo
        title="HARFASOFT Academy Limited | Software Development & IT Solutions Nigeria"
        description="HARFASOFT provides custom software development, school and hospital management systems, web and mobile applications, ICT training and IT consultancy in Nigeria."
        path="/"
        jsonLd={[{ '@context': 'https://schema.org', '@type': 'WebSite', name: 'HARFASOFT Academy Limited', url: abs('/'), publisher: { '@id': `${abs('/')}#organization` } }]}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy pt-28 text-white sm:pt-32 lg:min-h-[100svh] lg:pt-0">
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-40 top-0 h-[34rem] w-[34rem] rounded-full bg-brand/30 blur-[120px]" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-[28rem] w-[28rem] rounded-full bg-cyan/20 blur-[120px]" aria-hidden="true" />
        <Container className="relative grid items-center gap-6 lg:min-h-[100svh] lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          <div className="max-w-2xl pt-4 pb-20 lg:py-32">
            <motion.div {...fade} transition={{ duration: 0.6 }}>
              <Eyebrow light>INNOVATIVE DIGITAL SOLUTIONS</Eyebrow>
            </motion.div>
            <motion.h1 {...fade} transition={{ duration: 0.7, delay: 0.08 }} className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.25rem]">
              Transforming Ideas Into <span className="text-gradient">Powerful Digital</span> Solutions.
            </motion.h1>
            <motion.p {...fade} transition={{ duration: 0.7, delay: 0.16 }} className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              We build intelligent software, scalable platforms and reliable IT solutions that help organisations grow.
            </motion.p>
            <motion.div {...fade} transition={{ duration: 0.7, delay: 0.24 }} className="mt-9 flex flex-wrap gap-3">
              <Link to="/services/" className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-white shadow-xl shadow-brand/30 transition hover:bg-brand-600">
                Explore Services <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to="/products/" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur transition hover:border-cyan hover:text-cyan">
                Our Products
              </Link>
            </motion.div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
              {['Software', 'EdTech', 'HealthTech', 'IT Infrastructure', 'ICT Training'].map((t) => (
                <li key={t} className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-cyan" aria-hidden="true" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] opacity-45 sm:h-[640px] lg:pointer-events-auto lg:relative lg:z-auto lg:h-[620px] lg:opacity-100">
            <Hero3D />
          </div>
        </Container>
      </section>

      {/* WHAT WE DO */}
      <section className="py-24" aria-labelledby="what-we-do">
        <Container>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div id="what-we-do"><SectionHeading eyebrow="WHAT WE DO" title="Technology that moves organisations forward" text="We combine software engineering, infrastructure and training to deliver solutions that work in the real world." /></div>
            <Link to="/services/" className="reveal inline-flex items-center gap-1.5 font-semibold text-brand hover:gap-2.5 transition-all">All services <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whatWeDo.map((w, i) => (
              <Link key={w.title} to={w.to} className="reveal group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10" style={{ transitionDelay: `${i * 60}ms` }}>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-cyan text-white shadow-lg shadow-brand/20">
                  <w.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-lg font-bold text-navy">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{w.text}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* PRODUCTS */}
      <section className="relative overflow-hidden bg-white py-24" aria-labelledby="products-heading">
        <div className="bg-grid-light pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" aria-hidden="true" />
        <Container className="relative">
          <div id="products-heading"><SectionHeading center eyebrow="OUR SOFTWARE PRODUCTS" title="Proprietary platforms, built in Nigeria" text="Ready-to-deploy software for schools, hospitals and businesses — customisable to your organisation." /></div>
          <div className="mt-16 space-y-20">
            {products.map((p, i) => (
              <div key={p.slug} className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div className="reveal">
                  <span className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${p.accent} px-3.5 py-1.5 text-xs font-semibold text-white`}>
                    <p.icon className="h-3.5 w-3.5" aria-hidden="true" /> {p.category}
                  </span>
                  <h3 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">{p.name}</h3>
                  <p className="mt-2 text-lg font-medium text-brand">{p.tagline}</p>
                  <p className="mt-4 leading-relaxed text-slate-600">{p.summary}</p>
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {p.features.slice(0, 4).map((f) => (
                      <li key={f.title} className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />{f.title}</li>
                    ))}
                  </ul>
                  <Link to={`/products/${p.slug}/`} className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand">
                    Explore {p.name} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
                <div className="reveal relative">
                  <div className={`absolute -inset-6 rounded-[2rem] bg-gradient-to-br ${p.accent} opacity-15 blur-2xl`} aria-hidden="true" />
                  <ProductMockup product={p} />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SERVICES STRIP */}
      <section className="bg-navy py-24 text-white" aria-labelledby="services-strip">
        <Container>
          <div className="reveal max-w-3xl">
            <Eyebrow light>SERVICES</Eyebrow>
            <h2 id="services-strip" className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">Comprehensive ICT and software services</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {services.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}/`} className="reveal group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-cyan/50 hover:bg-white/[0.08]">
                <s.icon className="h-7 w-7 text-cyan" aria-hidden="true" />
                <h3 className="mt-4 font-display font-bold leading-snug">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.short}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* WHY */}
      <section className="py-24" aria-labelledby="why-heading">
        <Container>
          <div id="why-heading"><SectionHeading center eyebrow="WHY CHOOSE US" title="A technology partner you can rely on" /></div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r) => (
              <div key={r.title} className="reveal rounded-3xl border border-slate-200 bg-white p-7">
                <r.icon className="h-7 w-7 text-brand" aria-hidden="true" />
                <h3 className="mt-5 font-display text-lg font-bold text-navy">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{r.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
