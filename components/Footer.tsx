'use client';

import { socialLinks } from '@/data/socials';
import { getIcon, type IconName } from '@/lib/icons';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border mt-20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted">
            Built with{' '}
            <span className="text-foreground font-medium">Next.js</span> and{' '}
            <span className="text-foreground font-medium">TypeScript</span>
          </p>
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => {
              const IconComponent = getIcon(social.icon as IconName);
              if (!IconComponent) return null;

              return (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent transition-colors"
                  aria-label={social.name}
                >
                  <IconComponent className="w-5 h-5" />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Joshua Fransix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

