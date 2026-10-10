import { Helmet } from 'react-helmet-async';
import { ButtonLink, Container } from '../components/ui';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-white pt-28">
      <Helmet><title>Page not found | HARFASOFT Academy Limited</title><meta name="robots" content="noindex" /></Helmet>
      <Container className="text-center">
        <p className="font-display text-7xl font-extrabold text-gradient">404</p>
        <h1 className="mt-4 font-display text-3xl font-extrabold text-navy">Page not found</h1>
        <p className="mt-3 text-slate-600">The page you are looking for doesn't exist or has moved.</p>
        <div className="mt-8"><ButtonLink to="/">Back to home</ButtonLink></div>
      </Container>
    </section>
  );
}
