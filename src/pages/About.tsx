import { Target, Eye, ShieldCheck, Lightbulb, Award, Users, HeartHandshake, BadgeCheck } from 'lucide-react';
import Seo from '../components/Seo';
import { Container, CtaBanner, PageHero, SectionHeading } from '../components/ui';
import { company } from '../data/company';

const values = [
  { icon: ShieldCheck, title: 'Integrity', text: 'We are honest about what technology can and cannot do, and we keep our commitments.' },
  { icon: Lightbulb, title: 'Innovation', text: 'We look for better, simpler ways to solve real problems with technology.' },
  { icon: Award, title: 'Excellence', text: 'We hold our software, infrastructure and training to a professional standard.' },
  { icon: Users, title: 'Empowerment', text: 'We build local capacity so people and organisations can thrive in a digital economy.' },
  { icon: HeartHandshake, title: 'Partnership', text: 'We work alongside our clients and support them long after launch.' },
];

export default function About() {
  const crumbs = [{ name: 'About Us', path: '/about/' }];
  return (
    <>
      <Seo title="About Us — Nigerian Software & ICT Company" description={`Learn about ${company.name}, a CAC-registered Nigerian technology company (RC ${company.rcNumber}) providing software, IT consultancy and ICT training.`} path="/about/" breadcrumbs={crumbs} />
      <PageHero crumbs={crumbs} eyebrow="ABOUT HARFASOFT" title="Technology and talent for a digital Nigeria" text="HARFASOFT Academy Limited is a Nigerian technology company specialising in software development, IT consultancy, digital transformation, ICT training and enterprise technology solutions." />

      <section className="bg-white py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="reveal space-y-5 text-lg leading-relaxed text-slate-600">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy">Our background</h2>
            <p>
              {company.name} was incorporated in Nigeria on {company.registrationDateLabel} and is registered with the {company.registrar} under RC number {company.rcNumber}.
            </p>
            <p>
              We exist to help organisations — businesses, schools, healthcare providers and government institutions — replace manual, paper-based processes with reliable digital systems, and to equip people with the ICT skills they need to use them well.
            </p>
            <p>
              Alongside client projects, we develop our own software products: <strong className="text-navy">LumiSAS</strong> for school management, <strong className="text-navy">Alkhairat HMS</strong> for hospital management and <strong className="text-navy">BizBook</strong> for simplified business accounting.
            </p>
          </div>
          <div className="reveal rounded-3xl border border-slate-200 bg-offwhite p-8">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-navy"><BadgeCheck className="h-5 w-5 text-brand" aria-hidden="true" /> Company information</h2>
            <dl className="mt-6 divide-y divide-slate-200 text-sm">
              {[
                ['Registered name', company.name],
                ['RC number', company.rcNumber],
                ['Date of incorporation', company.registrationDateLabel],
                ['Registered with', company.registrar],
                ['Country', company.country],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6 py-3"><dt className="text-slate-500">{k}</dt><dd className="text-right font-medium text-navy">{v}</dd></div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-6 md:grid-cols-2">
          <div className="reveal rounded-3xl bg-navy p-10 text-white">
            <Target className="h-9 w-9 text-cyan" aria-hidden="true" />
            <h2 className="mt-6 font-display text-2xl font-extrabold">Our mission</h2>
            <p className="mt-4 leading-relaxed text-slate-300">To deliver intelligent, affordable and reliable technology solutions and practical ICT training that help organisations work smarter and people build valuable digital skills.</p>
          </div>
          <div className="reveal rounded-3xl bg-gradient-to-br from-brand to-cyan p-10 text-white">
            <Eye className="h-9 w-9" aria-hidden="true" />
            <h2 className="mt-6 font-display text-2xl font-extrabold">Our vision</h2>
            <p className="mt-4 leading-relaxed text-white/90">To be a leading African technology company, recognised for software and digital-skills programmes that transform how institutions and businesses operate.</p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <SectionHeading eyebrow="OUR VALUES" title="What guides our work" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v) => (
              <div key={v.title} className="reveal rounded-3xl border border-slate-200 p-6">
                <v.icon className="h-7 w-7 text-brand" aria-hidden="true" />
                <h3 className="mt-4 font-display font-bold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
