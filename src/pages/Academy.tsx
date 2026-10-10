import { Monitor, Code2, Globe, ShieldCheck, Brain, Briefcase, Check, ArrowRight } from 'lucide-react';
import Seo from '../components/Seo';
import { ButtonLink, Container, CtaBanner, PageHero, SectionHeading } from '../components/ui';

const programmes = [
  { icon: Monitor, title: 'Digital Literacy', level: 'Beginner', text: 'Computer fundamentals, file management, office productivity tools, email and safe internet use.', topics: ['Computer basics', 'Word processing & spreadsheets', 'Internet & email', 'Online safety'] },
  { icon: Code2, title: 'Programming Foundations', level: 'Beginner – Intermediate', text: 'Logical thinking and problem solving with a modern programming language.', topics: ['Programming concepts', 'Problem solving', 'Data structures basics', 'Mini projects'] },
  { icon: Globe, title: 'Web Development', level: 'Beginner – Intermediate', text: 'Build responsive websites and web applications from the ground up.', topics: ['HTML & CSS', 'JavaScript', 'Responsive design', 'Deploying a website'] },
  { icon: ShieldCheck, title: 'Cybersecurity Fundamentals', level: 'Beginner', text: 'Understand common threats and how to protect personal and organisational data.', topics: ['Threat awareness', 'Passwords & authentication', 'Phishing & social engineering', 'Safe practices'] },
  { icon: Brain, title: 'Artificial Intelligence', level: 'All levels', text: 'Practical, responsible use of AI tools for study, work and business.', topics: ['What AI can do', 'Productivity with AI tools', 'Prompting', 'Ethics & responsible use'] },
  { icon: Briefcase, title: 'Professional ICT Training', level: 'Organisations', text: 'Customised training and capacity-building programmes for staff of organisations and institutions.', topics: ['Needs assessment', 'Tailored curriculum', 'On-site or virtual delivery', 'Software adoption training'] },
];

const formats = ['Hands-on, practical sessions', 'Individual and group training', 'Corporate and institutional programmes', 'Training on HARFASOFT products for your staff'];

export default function Academy() {
  const crumbs = [{ name: 'Academy', path: '/academy/' }];
  return (
    <>
      <Seo title="HARFASOFT Academy — ICT Training & Digital Skills" description="HARFASOFT Academy offers practical ICT training in Nigeria: digital literacy, programming, web development, cybersecurity fundamentals, AI and professional ICT training." path="/academy/" breadcrumbs={crumbs} />
      <PageHero crumbs={crumbs} eyebrow="HARFASOFT ACADEMY" title="Digital skills for people and organisations" text="Practical ICT training, digital skills and professional development — helping students, professionals and teams build confidence with technology.">
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink to="/contact/">Enquire about training <ArrowRight className="h-4 w-4" aria-hidden="true" /></ButtonLink>
          <ButtonLink to="/services/ict-training/" variant="ghost">Training for organisations</ButtonLink>
        </div>
      </PageHero>
      <section className="bg-white py-20">
        <Container>
          <SectionHeading eyebrow="PROGRAMMES" title="Training programmes" text="Programmes can be scheduled for individuals, schools and organisations. Contact us for available dates and formats." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programmes.map((p) => (
              <article key={p.title} className="reveal flex flex-col rounded-3xl border border-slate-200 p-7 transition hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-cyan text-white"><p.icon className="h-6 w-6" aria-hidden="true" /></span>
                  <span className="rounded-full bg-offwhite px-3 py-1 text-xs font-medium text-slate-600">{p.level}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.text}</p>
                <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">
                  {p.topics.map((t) => <li key={t} className="flex items-center gap-2 text-sm text-slate-700"><Check className="h-4 w-4 text-cyan" aria-hidden="true" />{t}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <div className="reveal grid gap-8 rounded-3xl bg-navy p-10 text-white lg:grid-cols-2 lg:p-14">
            <div>
              <h2 className="font-display text-3xl font-extrabold">How we train</h2>
              <p className="mt-4 text-slate-300">Our training is practical and outcome-focused, so participants leave able to apply what they have learned.</p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {formats.map((f) => <li key={f} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />{f}</li>)}
            </ul>
          </div>
        </Container>
      </section>
      <CtaBanner title="Build your team's digital skills" text="Tell us what you need and we'll design a programme around it." label="Enquire about training" />
    </>
  );
}
