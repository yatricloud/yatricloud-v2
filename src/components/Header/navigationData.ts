import {
  LucideIcon,
  BookOpen,
  Code,
  Linkedin,
  Server,
  Shield,
  GraduationCap,
  Contact,
  Package,
  Users,
  Compass,
  Sparkles,
  Target,
  Brain,
} from 'lucide-react';
import { ReactIcon } from '../Products/icons';

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon | (() => JSX.Element);
}

export interface NavSection {
  label: string;
  items?: NavItem[];
  hasDropdown?: boolean;
}

export const navigationItems: NavSection[] = [
  {
    label: 'Home',
    items: [{ label: 'Home', href: '/' }],
  },
  // {
  //   label: 'Why',
  //   items: [
  //     {
  //       label: 'Structured Learning Path',
  //       href: '/learning-path',
  //       icon: Compass,
  //       description:
  //         'Follow our structured learning paths designed to take you from beginner to expert',
  //     },
  //     {
  //       label: 'Certification Support',
  //       href: '/certification-support',
  //       icon: GraduationCap,
  //       description:
  //         'Comprehensive exam preparation with practice tests and hands-on labs',
  //     },
  //     {
  //       label: 'Expert-Led Sessions',
  //       href: '/expert-sessions',
  //       icon: Brain,
  //       description:
  //         'Learn from industry professionals with real-world experience',
  //     },
  //     {
  //       label: 'Hands-on Projects',
  //       href: '/hands-on-projects',
  //       icon: Target,
  //       description: 'Build real-world projects to strengthen your portfolio',
  //     },
  //   ],
  // },
  // {
  //   label: 'Courses',
  //   items: [{ label: 'Courses', href: '/courses' }],
  // },
  {
    label: 'Products',
    items: [{ label: 'Products', href: '/products' }],
    hasDropdown: true,
  },
  {
    label: 'Blog',
    items: [{ label: 'Blog', href: '/blog' }],
  },
  {
    label: 'Community',
    items: [{ label: 'Community', href: '/community' }],
  },
  // {
  //   label: 'Success Stories',
  //   items: [{ label: 'Success Stories', href: '/success-stories' }],
  // },
  {
    label: 'Contact',
    items: [{ label: 'Contact', href: '/contact' }],
  },
];
