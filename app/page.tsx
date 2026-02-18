"use client";

import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { TechStack } from "@/components/TechStack";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { socialLinks } from "@/data/socials";
import { getIcon, type IconName } from "@/lib/icons";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* About Section */}
      <Section
        id="about"
        title="About"
        subtitle="01."
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32"
      >
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted leading-relaxed mb-6">
            I&apos;m a Web Engineer with a passion for building scalable,
            maintainable products. I approach development with a focus on clean
            architecture, performance optimization, and delivering exceptional
            user experiences.
          </p>
          <p className="text-lg text-muted leading-relaxed mb-6">
            Over the years, I&apos;ve worked across the stack—from crafting
            interactive frontend interfaces to designing robust backend systems.
            I believe in writing code that&apos;s not just functional, but
            maintainable and scalable for the long term.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            I&apos;m particularly interested in the intersection of design and
            engineering, ensuring that beautiful interfaces are backed by solid
            technical foundations. Whether it&apos;s optimizing bundle sizes,
            improving API response times, or enhancing user interactions, I
            enjoy solving problems that make a real difference.
          </p>
        </div>
      </Section>

      {/* Skills Section */}
      <Section
        id="skills"
        title="Skills"
        subtitle="02."
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32"
        show3D={true}
      >
        <TechStack />
      </Section>

      {/* Projects Section */}
      <Section
        id="projects"
        title="Projects"
        subtitle="03."
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32"
      >
        <ProjectsSection />
      </Section>

      {/* Contact Section */}
      <Section
        id="contact"
        title="Get In Touch"
        subtitle="04."
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32"
      >
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-lg text-muted leading-relaxed">
              I&apos;m always open to discussing new opportunities, interesting
              projects, or just having a conversation about web development.
              Feel free to reach out!
            </p>
          </div>

          <ContactForm />

          {/* <div className="flex items-center justify-center gap-6 pt-8 border-t border-border">
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
                  <IconComponent className="w-6 h-6" />
                </Link>
              );
            })}
          </div> */}
        </div>
      </Section>

      <Footer />
    </main>
  );
}
