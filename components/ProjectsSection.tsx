"use client";

import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="space-y-12">
      {/* Featured Projects - Grid on desktop, column on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* More Projects Toggle */}
      {otherProjects.length > 0 && (
        <div className="pt-8">
          <button
            onClick={() => setShowMore(!showMore)}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 text-accent hover:text-accent/80 font-medium transition-colors border border-accent/30 rounded-lg hover:border-accent/50 hover:bg-accent/5"
          >
            <span>{showMore ? "Show Less" : "Other Projects"}</span>
            {showMore ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>

          <AnimatePresence>
            {showMore && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mt-8">
                  {otherProjects.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
