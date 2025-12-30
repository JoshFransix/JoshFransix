"use client";

import { ProjectLink } from "@/data/projects";
import { getIcon, type IconName } from "@/lib/icons";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectLinksProps {
  links: ProjectLink[];
  className?: string;
}

export function ProjectLinks({ links, className }: ProjectLinksProps) {
  if (links.length === 0) return null;

  return (
    <div className={cn("flex flex-wrap gap-4", className)}>
      {links.map((link) => {
        const IconComponent =
          getIcon(link.icon as IconName) || getIcon("external-link");

        return (
          <Link
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted hover:text-accent border border-border rounded-lg hover:border-accent transition-colors"
          >
            <IconComponent className="w-4 h-4" />
            <span>{link.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
