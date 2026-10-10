import type { LucideIcon } from 'lucide-react';
import {
  School, HeartPulse, BookOpenCheck, UserPlus, CalendarCheck, FileBarChart, Wallet, Users,
  Stethoscope, FlaskConical, Pill, Receipt, Building2, ClipboardList, ShoppingCart, TrendingDown,
  HandCoins, RotateCcw, BarChart3, BookMarked, Smartphone,
} from 'lucide-react';

export interface Product {
  slug: 'lumisas' | 'alkhairat-hms' | 'bizbook';
  name: string;
  tagline: string;
  category: string;
  applicationCategory: string;
  icon: LucideIcon;
  accent: string; // tailwind gradient classes
  summary: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  features: { icon: LucideIcon; title: string; text: string }[];
  customers: string[];
  liveUrl?: string;
  apkUrl?: string;
  operatingSystem: string;
}

export const products: Product[] = [
  {
    slug: 'lumisas',
    name: 'LumiSAS',
    tagline: 'School management, simplified.',
    category: 'School Management System',
    applicationCategory: 'EducationalApplication',
    icon: School,
    accent: 'from-blue-600 to-cyan-400',
    summary: 'A school management system for conventional, Tahfeez and Majlis institutions.',
    description:
      'LumiSAS brings admissions, attendance, results, fees and parent communication into one platform. It is designed for the realities of Nigerian schools — including conventional schools, Tahfeez (Qur\'an memorisation) schools and Majlis institutions — so administrators, teachers and parents all work from the same accurate records.',
    seoTitle: 'LumiSAS — School Management System for Nigerian Schools',
    seoDescription:
      'LumiSAS is a school management system for conventional, Tahfeez and Majlis institutions: admissions, attendance, results, fees and parent access.',
    features: [
      { icon: UserPlus, title: 'Admissions', text: 'Capture applications and student records digitally, from enquiry to enrolment.' },
      { icon: CalendarCheck, title: 'Attendance', text: 'Fast daily attendance for classes and halaqahs, with clear history per student.' },
      { icon: FileBarChart, title: 'Results', text: 'Record assessments and produce report sheets without manual calculations.' },
      { icon: Wallet, title: 'Fees management', text: 'Track fees, payments and outstanding balances per student and term.' },
      { icon: Users, title: 'Parent access', text: 'Keep parents informed about attendance, performance and fees.' },
      { icon: BookOpenCheck, title: 'Tahfeez & Majlis support', text: 'Workflows suited to Qur\'anic memorisation progress and Islamic learning institutions.' },
    ],
    customers: ['Nursery, primary and secondary schools', 'Tahfeez (Qur\'an memorisation) schools', 'Majlis and Islamic learning institutions', 'School proprietors and administrators'],
    operatingSystem: 'Web',
  },
  {
    slug: 'alkhairat-hms',
    name: 'Alkhairat HMS',
    tagline: 'Hospital operations, connected.',
    category: 'Hospital Management System',
    applicationCategory: 'MedicalApplication',
    icon: HeartPulse,
    accent: 'from-cyan-500 to-emerald-400',
    summary: 'A hospital management system covering registration, consultations, laboratory, pharmacy, billing and administration.',
    description:
      'Alkhairat HMS connects every department of a hospital or clinic — from patient registration and consultations to laboratory, pharmacy and billing — so patients move through care smoothly and management has a clear view of operations.',
    seoTitle: 'Alkhairat HMS — Hospital Management System in Nigeria',
    seoDescription:
      'Alkhairat HMS is a hospital management system for clinics and hospitals: patient registration, consultations, laboratory, pharmacy, billing and administration.',
    features: [
      { icon: ClipboardList, title: 'Patient registration', text: 'Create and find patient records quickly with consistent demographic data.' },
      { icon: Stethoscope, title: 'Consultations', text: 'Doctors record complaints, diagnoses, prescriptions and requests in one place.' },
      { icon: FlaskConical, title: 'Laboratory', text: 'Receive test requests and return results straight to the consulting doctor.' },
      { icon: Pill, title: 'Pharmacy', text: 'Dispense prescriptions and keep track of drug stock.' },
      { icon: Receipt, title: 'Billing', text: 'Accurate bills for consultations, tests and drugs, with payment tracking.' },
      { icon: Building2, title: 'Administration', text: 'User roles, departments and reports for hospital management.' },
    ],
    customers: ['Private hospitals', 'Clinics and medical centres', 'Diagnostic laboratories', 'Doctors, nurses and hospital administrators'],
    operatingSystem: 'Web',
  },
  {
    slug: 'bizbook',
    name: 'BizBook',
    tagline: 'Simple bookkeeping for growing businesses.',
    category: 'Business Accounting App',
    applicationCategory: 'FinanceApplication',
    icon: BookMarked,
    accent: 'from-indigo-500 to-blue-400',
    summary: 'Simplified business accounting: record sales, expenses, credit and repayments, and see clear reports.',
    description:
      'BizBook helps small business owners keep proper books without needing an accountant. Record sales and expenses, keep track of customers who buy on credit and their repayments, and see simple reports that show how the business is really doing. BizBook is available on the web and as an Android app.',
    seoTitle: 'BizBook — Simple Business Accounting App (Web & Android)',
    seoDescription:
      'BizBook is a simplified business accounting app for small businesses: record sales, expenses, credit sales and repayments, and view clear reports.',
    features: [
      { icon: ShoppingCart, title: 'Sales', text: 'Record every sale in seconds, cash or credit.' },
      { icon: TrendingDown, title: 'Expenses', text: 'Log business expenses so you know where money goes.' },
      { icon: HandCoins, title: 'Credit tracking', text: 'See which customers owe you and how much.' },
      { icon: RotateCcw, title: 'Repayments', text: 'Record repayments and keep customer balances up to date.' },
      { icon: BarChart3, title: 'Reports', text: 'Clear summaries of sales, expenses and outstanding credit.' },
      { icon: Smartphone, title: 'Web & Android', text: 'Use it in the browser or install the Android app.' },
    ],
    customers: ['Shop owners and traders', 'Small and medium-sized businesses', 'Market and retail businesses', 'Entrepreneurs and service providers'],
    liveUrl: 'https://rersheed.github.io/bizbook/',
    apkUrl: 'https://github.com/rersheed/bizbook/releases/download/v0.1.2/bizbook-v0.1.2.apk',
    operatingSystem: 'Web, Android',
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
