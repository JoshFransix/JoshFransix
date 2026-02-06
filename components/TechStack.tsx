"use client";

import { skills } from "@/data/skills";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-12">
      {skills.map((group, groupIndex) => (
        <motion.div
          key={group.category}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
        >
          <h4 className="text-sm font-mono text-accent mb-4">
            {group.category}
          </h4>
          <div className="flex flex-wrap gap-3">
            {group.skills.map((skill, skillIndex) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{
                  duration: 0.3,
                  delay: groupIndex * 0.1 + skillIndex * 0.03,
                }}
                className="px-4 py-2 bg-background border border-border rounded-lg text-sm text-foreground hover:border-accent hover:text-accent transition-el"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
