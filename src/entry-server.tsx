import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import App from './App';
import { staticRoutes } from './routes';

export { staticRoutes };
export { SITE_URL } from './data/company';

export function render(url: string) {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '');
  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={basename + url} basename={basename}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>,
  );
  const h = helmetContext.helmet!;
  const head = [h.title.toString(), h.priority.toString(), h.meta.toString(), h.link.toString(), h.script.toString()].join('\n    ');
  return { html, head, htmlAttributes: h.htmlAttributes.toString() };
}
