"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { EnhancedThreeBackground } from "./EnhancedThreeBackground";
import { Mail } from "lucide-react";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      const elements = [
        heroRef.current.querySelector(".hero-greeting"),
        heroRef.current.querySelector(".hero-name"),
        heroRef.current.querySelector(".hero-title"),
        heroRef.current.querySelector(".hero-description"),
        heroRef.current.querySelector(".hero-cta"),
      ].filter(Boolean) as Element[];

      // Animate in from initial state set by CSS classes
      const tl = gsap.timeline();
      elements.forEach((el, index) => {
        tl.to(
          el,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          index * 0.2,
        );
      });
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <EnhancedThreeBackground />
      <div
        ref={heroRef}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <p className="hero-greeting text-accent font-mono text-sm md:text-base mb-4 opacity-0 translate-y-5">
          Hello, my name is
        </p>
        <h1 className="hero-name text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 opacity-0 translate-y-5">
          Joshua Fransix.
        </h1>
        <h2 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold text-foreground/80 mb-6 opacity-0 translate-y-5">
          I&apos;m a Web Engineer.
        </h2>
        <p className="hero-description text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 translate-y-5">
          {/* I build scalable, interactive products across frontend and backend,
          focusing on maintainability, performance, and exceptional user
          experiences. */}
          I build scalable web applications — from polished frontends to
          reliable backends and CMS-driven sites.
        </p>
        <div className="hero-cta opacity-0 translate-y-5">
          <a
            href="mailto:joshfransix@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
