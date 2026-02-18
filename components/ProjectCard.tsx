"use client";

import { Project } from "@/data/projects";
import { ProjectLinks } from "./ProjectLinks";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group h-full"
    >
      <div className="bg-background border border-border rounded-lg p-6 md:p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 h-full flex flex-col">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-el">
              {project.title}
            </h3>
            {project.role && (
              <p className="text-sm font-mono text-accent mb-3">
                {project.role}
              </p>
            )}
          </div>
        </div>

        <p className="text-muted mb-6 leading-relaxed flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono bg-background border border-border rounded text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <ProjectLinks links={project.links} />
        </div>
      </div>
    </motion.div>
  );
}
