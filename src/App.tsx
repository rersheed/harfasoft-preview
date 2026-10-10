import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Academy from './pages/Academy';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { Privacy, Terms } from './pages/Legal';
import NotFound from './pages/NotFound';
import { services } from './data/services';
import { products } from './data/products';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        {services.map((s) => <Route key={s.slug} path={`services/${s.slug}`} element={<ServiceDetail service={s} />} />)}
        <Route path="products" element={<Products />} />
        {products.map((p) => <Route key={p.slug} path={`products/${p.slug}`} element={<ProductDetail product={p} />} />)}
        <Route path="academy" element={<Academy />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<Privacy />} />
        <Route path="terms-of-service" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
