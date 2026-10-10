import type { LucideIcon } from 'lucide-react';
import { Code2, Smartphone, Server, ShieldCheck, GraduationCap } from 'lucide-react';

export interface Service {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  offerings: { title: string; text: string }[];
  audiences: string[];
  process: string[];
}

export const services: Service[] = [
  {
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    short: 'Enterprise applications, SaaS platforms, business automation, database systems and customised solutions.',
    icon: Code2,
    seoTitle: 'Custom Software Development in Nigeria',
    seoDescription:
      'HARFASOFT builds custom enterprise applications, SaaS platforms, business automation and database systems for Nigerian organisations.',
    intro:
      'Off-the-shelf software rarely fits the way your organisation actually works. We design and build software around your processes, so your team spends less time on workarounds and more time on results.',
    offerings: [
      { title: 'Enterprise applications', text: 'Line-of-business systems for operations, records, workflows and reporting across departments.' },
      { title: 'SaaS platforms', text: 'Multi-tenant, subscription-ready cloud products designed to scale from first customer to many.' },
      { title: 'Business automation', text: 'Replace repetitive manual work and paper forms with reliable digital workflows and notifications.' },
      { title: 'Database systems', text: 'Well-structured databases, data migration and secure access for accurate, consistent information.' },
      { title: 'Customised solutions', text: 'Tailored modules and integrations that extend or connect the systems you already use.' },
    ],
    audiences: ['Businesses and SMEs', 'Schools and educational institutions', 'Healthcare providers', 'Government agencies', 'NGOs and associations'],
    process: ['Discovery & requirements', 'Solution design & prototyping', 'Agile development', 'Testing & quality assurance', 'Deployment & training', 'Support & maintenance'],
  },
  {
    slug: 'web-mobile-development',
    title: 'Web and Mobile Development',
    short: 'Corporate websites, e-commerce, admin dashboards and Android & iOS applications.',
    icon: Smartphone,
    seoTitle: 'Web & Mobile App Development in Nigeria',
    seoDescription:
      'Corporate websites, e-commerce stores, admin dashboards and Android & iOS apps — fast, responsive and built for Nigerian users and networks.',
    intro:
      'Your customers meet you on their phones first. We build fast, responsive websites and mobile apps that load quickly on Nigerian networks and look great on every screen.',
    offerings: [
      { title: 'Corporate websites', text: 'Professional, SEO-ready websites that present your organisation with credibility.' },
      { title: 'E-commerce', text: 'Online stores with product catalogues, carts and payment-provider integration.' },
      { title: 'Admin dashboards', text: 'Clear, data-rich dashboards to manage users, content, orders and operations.' },
      { title: 'Android & iOS apps', text: 'Cross-platform mobile applications, including offline-friendly experiences.' },
      { title: 'Progressive web apps', text: 'Installable web apps that work smoothly even on low-bandwidth connections.' },
    ],
    audiences: ['Start-ups and SMEs', 'Retail and e-commerce businesses', 'Schools and training centres', 'Hospitals and clinics', 'Public-sector organisations'],
    process: ['Goals & content planning', 'UX/UI design', 'Development', 'Performance & SEO optimisation', 'Launch', 'Ongoing updates'],
  },
  {
    slug: 'it-infrastructure-networking',
    title: 'IT Infrastructure and Networking',
    short: 'Server deployment, LAN/WAN, intranet, cloud hosting, backups and maintenance.',
    icon: Server,
    seoTitle: 'IT Infrastructure & Networking Services Nigeria',
    seoDescription:
      'Server deployment, LAN/WAN networking, intranet set-up, cloud hosting, backups and IT maintenance from HARFASOFT Academy Limited.',
    intro:
      'Reliable software needs reliable foundations. We plan, deploy and maintain the networks, servers and cloud environments that keep your organisation connected and productive.',
    offerings: [
      { title: 'Server deployment', text: 'On-premise and cloud server set-up, configuration and hardening.' },
      { title: 'LAN / WAN networking', text: 'Structured cabling, Wi-Fi and inter-site connectivity designed for growth.' },
      { title: 'Intranet solutions', text: 'Private internal portals for documents, communication and internal tools.' },
      { title: 'Cloud hosting', text: 'Hosting, migration and management of applications in the cloud.' },
      { title: 'Backups & recovery', text: 'Automated backup strategies so critical data can be restored when it matters.' },
      { title: 'Maintenance & support', text: 'Preventive maintenance, monitoring and responsive technical support.' },
    ],
    audiences: ['Offices and corporate organisations', 'Schools and campuses', 'Hospitals and clinics', 'Government offices'],
    process: ['Site survey & assessment', 'Network & system design', 'Installation & configuration', 'Testing & documentation', 'Monitoring & maintenance'],
  },
  {
    slug: 'cybersecurity-it-consultancy',
    title: 'Cybersecurity and IT Consultancy',
    short: 'Security assessments, system hardening, technology planning, IT strategy and digital transformation.',
    icon: ShieldCheck,
    seoTitle: 'Cybersecurity & IT Consultancy Nigeria',
    seoDescription:
      'Security assessments, system hardening, IT strategy and digital transformation consulting for Nigerian businesses, schools, hospitals and government.',
    intro:
      'Technology decisions have long-term consequences. We help you assess risk, secure your systems and plan a practical digital-transformation roadmap that fits your budget.',
    offerings: [
      { title: 'Security assessments', text: 'Review of systems, networks and practices to identify vulnerabilities and priorities.' },
      { title: 'System hardening', text: 'Configuration, access control and patching to reduce your attack surface.' },
      { title: 'Technology planning', text: 'Independent advice on choosing, budgeting and rolling out the right tools.' },
      { title: 'IT strategy', text: 'Aligning technology investment with organisational goals and growth.' },
      { title: 'Digital transformation', text: 'Moving paper-based and manual processes to efficient digital systems, step by step.' },
    ],
    audiences: ['Executives and management teams', 'SMEs going digital', 'Educational institutions', 'Healthcare providers', 'Government organisations'],
    process: ['Assessment', 'Findings & recommendations', 'Roadmap', 'Implementation support', 'Review'],
  },
  {
    slug: 'ict-training',
    title: 'ICT Training and Capacity Development',
    short: 'Digital literacy, programming, web development, cybersecurity fundamentals, AI and professional ICT training.',
    icon: GraduationCap,
    seoTitle: 'ICT Training & Capacity Development Nigeria',
    seoDescription:
      'Practical ICT training in Nigeria: digital literacy, programming, web development, cybersecurity fundamentals, AI and professional staff training.',
    intro:
      'Technology only creates value when people can use it confidently. Through HARFASOFT Academy we deliver practical, hands-on training for individuals, students and organisations.',
    offerings: [
      { title: 'Digital literacy', text: 'Computer fundamentals, office productivity and safe internet use.' },
      { title: 'Programming', text: 'Problem solving and coding foundations with modern languages.' },
      { title: 'Web development', text: 'Building responsive websites and web applications from scratch.' },
      { title: 'Cybersecurity fundamentals', text: 'Security awareness and protecting personal and organisational data.' },
      { title: 'Artificial intelligence', text: 'Understanding and applying AI tools productively and responsibly.' },
      { title: 'Professional ICT training', text: 'Customised staff training and capacity-building for organisations.' },
    ],
    audiences: ['Students and young people', 'Teachers and school staff', 'Working professionals', 'Corporate and public-sector teams'],
    process: ['Training needs analysis', 'Curriculum design', 'Hands-on delivery', 'Assessment & feedback', 'Follow-up support'],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
