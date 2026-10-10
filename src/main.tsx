import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

const basename = import.meta.env.BASE_URL.replace(/\/$/, '');
const tree = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

const root = document.getElementById('root')!;
if (root.hasChildNodes()) hydrateRoot(root, tree);
else createRoot(root).render(tree);
