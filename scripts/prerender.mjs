// Prerenders every route to its own index.html, plus 404.html, sitemap.xml and robots.txt.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const { render, staticRoutes, SITE_URL } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href);

function page(url) {
  const { html, head, htmlAttributes } = render(url);
  let out = template.replace('<!--app-head-->', head).replace('<!--app-html-->', html);
  if (htmlAttributes) out = out.replace(/<html[^>]*>/, `<html ${htmlAttributes}>`);
  return out;
}

for (const r of staticRoutes) {
  const file = path.join(dist, r.path, 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page(r.path));
  console.log('prerendered', r.path);
}
// GitHub Pages serves 404.html for unknown paths; prerender the Not Found view into it.
fs.writeFileSync(path.join(dist, '404.html'), page('/__not-found__/'));

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes.map((r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);
const noindex = process.env.VITE_NOINDEX === '1';
fs.writeFileSync(path.join(dist, 'robots.txt'), noindex
  ? `# Preview deployment — not for indexing\nUser-agent: *\nDisallow: /\n`
  : `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
fs.writeFileSync(path.join(dist, '.nojekyll'), '');
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log(`sitemap.xml (${staticRoutes.length} URLs) and robots.txt written for ${SITE_URL}`);
