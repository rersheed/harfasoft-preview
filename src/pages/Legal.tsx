import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { Container, PageHero } from '../components/ui';
import { company, GA4_MEASUREMENT_ID } from '../data/company';

const LAST_UPDATED = '10 October 2026';

function Prose({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-3xl space-y-5 leading-relaxed text-slate-700 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-navy [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_a]:text-brand [&_a]:underline">{children}</div>;
}

function ContactLine() {
  return company.email
    ? <>by email at <a href={`mailto:${company.email}`}>{company.email}</a></>
    : <>using the contact details published on our <Link to="/contact/">Contact page</Link></>;
}

export function Privacy() {
  const crumbs = [{ name: 'Privacy Policy', path: '/privacy-policy/' }];
  return (
    <>
      <Seo title="Privacy Policy" description={`How ${company.name} handles information when you visit this website.`} path="/privacy-policy/" breadcrumbs={crumbs} />
      <PageHero crumbs={crumbs} eyebrow="LEGAL" title="Privacy Policy" text={`Last updated: ${LAST_UPDATED}`} />
      <section className="bg-white py-16"><Container><Prose>
        <p>This Privacy Policy explains how {company.name} ("HARFASOFT", "we", "us"), a company registered in Nigeria with the Corporate Affairs Commission under RC {company.rcNumber}, handles information in connection with this website. We are committed to complying with the Nigeria Data Protection Act 2023.</p>
        <h2>1. A static website</h2>
        <p>This website is a static, informational website. It has no user accounts, does not use a database and does not store any information you enter on our servers.</p>
        <h2>2. Information we collect</h2>
        <ul>
          <li><strong>Contact form:</strong> {company.formEndpoint
            ? 'when you submit the contact form, the details you provide (such as name, email address, organisation, phone and message) are sent to our team through a third-party form-processing service so we can respond to you.'
            : 'the contact form does not send or store data through this website. Submitting it opens your own email application with your message pre-filled; nothing is sent until you choose to send the email yourself.'}</li>
          <li><strong>Emails you send us:</strong> if you contact us by email, we receive the information in your message and use it only to respond to your enquiry and provide requested services.</li>
          <li><strong>Analytics:</strong> {GA4_MEASUREMENT_ID
            ? 'we use Google Analytics 4 to understand how visitors use the website. Google Analytics uses cookies and collects information such as pages visited, device and approximate location. See Google\'s privacy policy for details.'
            : 'we do not currently use analytics, advertising or tracking cookies on this website. If we introduce analytics in future, we will update this policy before doing so.'}</li>
        </ul>
        <h2>3. Hosting</h2>
        <p>This website is hosted on GitHub Pages, operated by GitHub, Inc. Like most web hosts, GitHub may automatically process technical information such as your IP address in server logs for security and reliability purposes. Please see GitHub's privacy statement for more information. Fonts and other assets are served from the same host; we do not load third-party fonts.</p>
        <h2>4. Links to other websites</h2>
        <p>This website links to other sites, including our product web applications. Those sites may have their own privacy policies, which apply when you use them.</p>
        <h2>5. How we use and share information</h2>
        <p>Information you send us is used only to respond to you and to provide services you request. We do not sell personal information. We share it only where necessary to provide our services or where required by law.</p>
        <h2>6. Your rights</h2>
        <p>Under the Nigeria Data Protection Act 2023 you may have the right to access, correct or delete personal information we hold about you, and to object to or restrict its processing. To exercise these rights, contact us <ContactLine />.</p>
        <h2>7. Changes</h2>
        <p>We may update this policy from time to time. The "last updated" date above shows when it was last revised.</p>
      </Prose></Container></section>
    </>
  );
}

export function Terms() {
  const crumbs = [{ name: 'Terms of Service', path: '/terms-of-service/' }];
  return (
    <>
      <Seo title="Terms of Service" description={`Terms governing the use of the ${company.name} website.`} path="/terms-of-service/" breadcrumbs={crumbs} />
      <PageHero crumbs={crumbs} eyebrow="LEGAL" title="Terms of Service" text={`Last updated: ${LAST_UPDATED}`} />
      <section className="bg-white py-16"><Container><Prose>
        <p>These Terms of Service govern your use of this website, operated by {company.name}, a company registered in Nigeria with the Corporate Affairs Commission under RC {company.rcNumber}. By using this website you agree to these terms.</p>
        <h2>1. Use of the website</h2>
        <p>This website provides information about our company, services, software products and training programmes. You may use it for lawful purposes only and must not attempt to disrupt, damage or gain unauthorised access to it.</p>
        <h2>2. Information only</h2>
        <p>Content on this website is provided for general information. It does not constitute an offer or a contract. Specific services, products, pricing and deliverables are agreed separately in writing with each client.</p>
        <h2>3. Products and services</h2>
        <p>Our software products (including LumiSAS, Alkhairat HMS and BizBook) and professional services may be subject to their own terms, licence agreements or service agreements, which will apply when you use or purchase them.</p>
        <h2>4. Intellectual property</h2>
        <p>Unless stated otherwise, the content, design, text and graphics on this website and the names of our products are the property of {company.name}. You may not reproduce them for commercial purposes without our written permission.</p>
        <h2>5. Third-party links</h2>
        <p>Links to third-party websites are provided for convenience. We are not responsible for their content or practices.</p>
        <h2>6. Disclaimer and limitation of liability</h2>
        <p>The website is provided "as is" without warranties of any kind. To the fullest extent permitted by law, we are not liable for any loss arising from the use of, or inability to use, this website.</p>
        <h2>7. Governing law</h2>
        <p>These terms are governed by the laws of the Federal Republic of Nigeria.</p>
        <h2>8. Contact</h2>
        <p>Questions about these terms can be sent to us <ContactLine />.</p>
      </Prose></Container></section>
    </>
  );
}
