import { useEffect, useState, type FormEvent } from 'react';
import { Building2, Mail, MapPin, Phone, MessageCircle, Info, Send } from 'lucide-react';
import Seo from '../components/Seo';
import { Container, PageHero } from '../components/ui';
import { company } from '../data/company';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const crumbs = [{ name: 'Contact', path: '/contact/' }];
  const [topic, setTopic] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const canSend = !!(company.formEndpoint || company.email);

  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get('topic');
    if (t) setTopic(t.slice(0, 120));
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSend) return;
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) || '').trim();

    // Hook for an external form service (e.g. Formspree). Configure company.formEndpoint.
    if (company.formEndpoint) {
      try {
        setStatus('sending');
        const res = await fetch(company.formEndpoint, { method: 'POST', headers: { Accept: 'application/json' }, body: data });
        setStatus(res.ok ? 'sent' : 'error');
        if (res.ok) e.currentTarget.reset();
      } catch { setStatus('error'); }
      return;
    }

    // Fallback: compose an email in the visitor's own mail app. Nothing is stored by this website.
    const subject = get('subject') || 'Website enquiry';
    const lines = [`Name: ${get('name')}`, `Email: ${get('email')}`];
    if (get('organisation')) lines.push(`Organisation: ${get('organisation')}`);
    if (get('phone')) lines.push(`Phone: ${get('phone')}`);
    lines.push('', get('message'));
    const body = lines.join('\n');
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const details = [
    { icon: Building2, label: 'Company', value: `${company.name}`, sub: `RC ${company.rcNumber} · Registered ${company.registrationDateLabel}` },
    { icon: Mail, label: 'Email', value: company.email, href: company.email ? `mailto:${company.email}` : undefined },
    { icon: Phone, label: 'Phone', value: company.phone, href: company.phone ? `tel:${company.phone.replace(/\s/g, '')}` : undefined },
    ...(company.whatsapp ? [{ icon: MessageCircle, label: 'WhatsApp', value: `+${company.whatsapp}`, href: `https://wa.me/${company.whatsapp}` }] : []),
    { icon: MapPin, label: 'Address', value: company.address, sub: company.address ? undefined : 'Nigeria' },
  ];

  const input = 'mt-1.5 block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15 disabled:cursor-not-allowed disabled:bg-slate-50';

  return (
    <>
      <Seo title="Contact Us — Business Enquiries & Support" description={`Contact ${company.name} (RC ${company.rcNumber}) for software development, IT consultancy, ICT training and product demos in Nigeria.`} path="/contact/" breadcrumbs={crumbs}
        jsonLd={[{ '@context': 'https://schema.org', '@type': 'ContactPage', name: 'Contact HARFASOFT Academy Limited' }]} />
      <PageHero crumbs={crumbs} eyebrow="CONTACT" title="Let's talk about your project" text="Business enquiries, product demos, training requests and customer support — we'd love to hear from you." />
      <section className="bg-white py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-4">
            {details.map((d) => (
              <div key={d.label} className="flex gap-4 rounded-2xl border border-slate-200 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand"><d.icon className="h-5 w-5" aria-hidden="true" /></span>
                <div>
                  <p className="text-sm font-medium text-slate-500">{d.label}</p>
                  {d.value ? (
                    d.href ? <a href={d.href} className="font-semibold text-navy hover:text-brand" {...(d.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{d.value}</a> : <p className="font-semibold text-navy">{d.value}</p>
                  ) : (
                    <p className="font-semibold text-slate-400">Coming soon</p>
                  )}
                  {d.sub && <p className="mt-0.5 text-sm text-slate-500">{d.sub}</p>}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={onSubmit} className="rounded-3xl border border-slate-200 bg-offwhite p-7 sm:p-9" aria-describedby="form-note">
            <h2 className="font-display text-2xl font-extrabold text-navy">Send an enquiry</h2>
            {!canSend ? (
              <p id="form-note" className="mt-3 flex items-start gap-2 rounded-xl bg-amber-50 p-4 text-sm text-amber-900">
                <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                Our enquiry email address is coming soon. The form will be enabled as soon as it is available.
              </p>
            ) : (
              <p id="form-note" className="mt-3 text-sm text-slate-600">
                {company.formEndpoint
                  ? 'Your message will be sent securely to our team.'
                  : 'Submitting opens your email app with your message ready to send. This website does not store your message.'}
              </p>
            )}
            <fieldset disabled={!canSend || status === 'sending'} className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium text-slate-700">Full name<input name="name" required autoComplete="name" className={input} /></label>
              <label className="text-sm font-medium text-slate-700">Email address<input name="email" type="email" required autoComplete="email" className={input} /></label>
              <label className="text-sm font-medium text-slate-700">Organisation <span className="text-slate-400">(optional)</span><input name="organisation" autoComplete="organization" className={input} /></label>
              <label className="text-sm font-medium text-slate-700">Phone <span className="text-slate-400">(optional)</span><input name="phone" type="tel" autoComplete="tel" className={input} /></label>
              <label className="text-sm font-medium text-slate-700 sm:col-span-2">Subject<input name="subject" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="e.g. School management system demo" className={input} /></label>
              <label className="text-sm font-medium text-slate-700 sm:col-span-2">Message<textarea name="message" required rows={5} className={input} /></label>
              <div className="sm:col-span-2">
                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:bg-slate-400 disabled:shadow-none">
                  <Send className="h-4 w-4" aria-hidden="true" /> {status === 'sending' ? 'Sending…' : 'Send enquiry'}
                </button>
                <p role="status" className="mt-3 text-sm">
                  {status === 'sent' && <span className="text-emerald-700">Thank you — your message has been sent.</span>}
                  {status === 'error' && <span className="text-red-700">Sorry, something went wrong. Please try again later.</span>}
                </p>
              </div>
            </fieldset>
          </form>
        </Container>
      </section>
    </>
  );
}
