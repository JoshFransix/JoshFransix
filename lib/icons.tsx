import {
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
  Moon,
  Sun,
  Menu,
  X,
  FileText,
  Code,
  Database,
} from 'lucide-react';

export const iconMap = {
  'external-link': ExternalLink,
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  twitter: Twitter,
  youtube: Youtube,
  moon: Moon,
  sun: Sun,
  menu: Menu,
  x: X,
  'case-study': FileText,
  frontend: Code,
  backend: Database,
  contract: Code,
  documentation: FileText,
};

export type IconName = keyof typeof iconMap;

export const getIcon = (name: IconName) => {
  return iconMap[name] || ExternalLink;
};

