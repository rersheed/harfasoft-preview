import { company } from '../data/company';

/** "Request a demo" target: mailto when an email is configured, otherwise the contact page. */
export function demoHref(productName: string) {
  if (company.email) {
    const subject = encodeURIComponent(`Demo request: ${productName}`);
    const body = encodeURIComponent(`Hello HARFASOFT,\n\nI would like to request a demo of ${productName}.\n\nName:\nOrganisation:\nPhone:\n\nThank you.`);
    return { href: `mailto:${company.email}?subject=${subject}&body=${body}`, external: true };
  }
  return { href: `/contact/?topic=${encodeURIComponent(`Demo request: ${productName}`)}`, external: false };
}
