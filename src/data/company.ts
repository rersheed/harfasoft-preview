/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  COMPANY DETAILS — single source of truth.
 *  Fill in phone / email / address / socials when they are available. Every page
 *  (Contact, Footer, JSON-LD structured data, Privacy, Terms) reads from here and
 *  hides or shows "Coming soon" automatically while a value is empty.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const company = {
  name: 'HARFASOFT ACADEMY LIMITED',
  shortName: 'HARFASOFT',
  rcNumber: '1982700',
  registrationDate: '2022-09-29',
  registrationDateLabel: '29 September 2022',
  registrar: 'Corporate Affairs Commission (CAC), Nigeria',
  country: 'Nigeria',

  /** e.g. 'info@harfasoft.com' — when empty, the contact form is disabled with a note. */
  email: '',
  /** e.g. '+234 800 000 0000' */
  phone: '',
  /** WhatsApp number in international format without "+" e.g. '2348000000000' */
  whatsapp: '',
  /** Full business address, e.g. 'No. 1 Example Street, Kano, Kano State, Nigeria' */
  address: '',
  /** Optional: city / state used in structured data once address is set */
  city: '',
  region: '',

  socials: {
    linkedin: '',
    x: '',
    facebook: '',
    instagram: '',
  } as Record<string, string>,

  /**
   * Optional external form endpoint (e.g. Formspree "https://formspree.io/f/xxxx").
   * When set, the contact form POSTs there instead of opening the visitor's email app.
   * Leave empty to use the mailto: fallback. Update the Privacy Policy if you enable it.
   */
  formEndpoint: '',
};

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  GOOGLE ANALYTICS 4
 *  Paste your GA4 Measurement ID (format "G-XXXXXXXXXX") below to enable analytics.
 *  While empty, NO analytics script is loaded. Update the Privacy Policy when enabled.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const GA4_MEASUREMENT_ID = '';

/** Public site URL without trailing slash. Override at build time with VITE_SITE_URL. */
export const SITE_URL: string = ((import.meta.env.VITE_SITE_URL as string | undefined) || 'https://harunsaidcodes.github.io/harfasoft').replace(/\/$/, '');
