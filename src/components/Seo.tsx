import { Helmet } from 'react-helmet-async';
import { company, SITE_URL } from '../data/company';

export interface Crumb { name: string; path: string }

interface SeoProps {
  title: string;
  description: string;
  path: string; // e.g. '/services/' (always with trailing slash)
  breadcrumbs?: Crumb[];
  jsonLd?: Record<string, unknown>[];
  type?: 'website' | 'article' | 'product';
}

export const abs = (path: string) => `${SITE_URL}${path === '/' ? '/' : path}`;

export function organizationLd() {
  const sameAs = Object.values(company.socials).filter(Boolean);
  const address: Record<string, string> = { '@type': 'PostalAddress', addressCountry: 'NG' };
  if (company.address) address.streetAddress = company.address;
  if (company.city) address.addressLocality = company.city;
  if (company.region) address.addressRegion = company.region;
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'HARFASOFT',
    legalName: company.name,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og-image.png`,
    foundingDate: company.registrationDate,
    identifier: { '@type': 'PropertyValue', propertyID: 'CAC RC Number', value: company.rcNumber },
    description:
      'Nigerian technology company providing software development, IT consultancy, digital transformation, ICT training and enterprise technology solutions.',
    address,
    areaServed: 'NG',
    ...(company.email ? { email: company.email } : {}),
    ...(company.phone ? { telephone: company.phone } : {}),
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export default function Seo({ title, description, path, breadcrumbs, jsonLd = [], type = 'website' }: SeoProps) {
  const fullTitle = path === '/' ? title : `${title} | HARFASOFT Academy Limited`;
  const url = abs(path);
  const image = `${SITE_URL}/og-image.png`;
  const ld: Record<string, unknown>[] = [organizationLd(), ...jsonLd];
  if (breadcrumbs && breadcrumbs.length) {
    ld.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [{ name: 'Home', path: '/' }, ...breadcrumbs].map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: abs(c.path),
      })),
    });
  }
  return (
    <Helmet prioritizeSeoTags>
      <html lang="en-NG" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {import.meta.env.VITE_NOINDEX === '1' && <meta name="robots" content="noindex, nofollow" />}
      <meta property="og:type" content={type === 'product' ? 'website' : type} />
      <meta property="og:site_name" content="HARFASOFT Academy Limited" />
      <meta property="og:locale" content="en_NG" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="HARFASOFT Academy Limited — Transforming Ideas Into Powerful Digital Solutions" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {ld.map((obj, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(obj)}</script>
      ))}
    </Helmet>
  );
}
