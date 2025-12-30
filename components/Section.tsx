"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section3D } from "./Section3D";

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  show3D?: boolean;
}

export function Section({
  id,
  title,
  subtitle,
  children,
  className,
  show3D = false,
}: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id={id} ref={ref} className={`relative ${className || ""}`}>
      {show3D && <Section3D />}
      {(title || subtitle) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          {subtitle && (
            <h2 className="text-sm font-mono text-accent mb-2">{subtitle}</h2>
          )}
          {title && (
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              {title}
            </h3>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
}
