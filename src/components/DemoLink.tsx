import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { demoHref } from '../lib/demo';

export default function DemoLink({ product, className, children }: { product: string; className?: string; children: ReactNode }) {
  const d = demoHref(product);
  return d.external ? <a href={d.href} className={className}>{children}</a> : <Link to={d.href} className={className}>{children}</Link>;
}
