import { services } from './data/services';
import { products } from './data/products';

/** Every route that is prerendered to static HTML and listed in sitemap.xml. */
export const staticRoutes: { path: string; priority: number; changefreq: string }[] = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/about/', priority: 0.8, changefreq: 'monthly' },
  { path: '/services/', priority: 0.9, changefreq: 'monthly' },
  ...services.map((s) => ({ path: `/services/${s.slug}/`, priority: 0.8, changefreq: 'monthly' })),
  { path: '/products/', priority: 0.9, changefreq: 'monthly' },
  ...products.map((p) => ({ path: `/products/${p.slug}/`, priority: 0.8, changefreq: 'monthly' })),
  { path: '/academy/', priority: 0.8, changefreq: 'monthly' },
  { path: '/portfolio/', priority: 0.7, changefreq: 'monthly' },
  { path: '/contact/', priority: 0.8, changefreq: 'yearly' },
  { path: '/privacy-policy/', priority: 0.3, changefreq: 'yearly' },
  { path: '/terms-of-service/', priority: 0.3, changefreq: 'yearly' },
];
