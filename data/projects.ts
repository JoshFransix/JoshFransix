export interface ProjectLink {
  label: string;
  url: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  role?: string;
  techStack: string[];
  links: ProjectLink[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "ibloov",
    title: "iBloov",
    description:
      "An event & ticketing platform that connects event planners, promoters, and attendees on one unified platform. Built with modern web technologies for scalability and performance.",
    role: "Full-stack Developer",
    techStack: ["Nuxt.js", "TypeScript", "Tailwind CSS", "Node.js"],
    links: [
      {
        label: "Live Demo",
        url: "https://ibloov.com",
        icon: "external-link",
      },
    ],
    featured: true,
  },
  {
    id: "corniehealth",
    title: "CornieHealth",
    description:
      "A healthcare platform that helps users locate and access top-tier health services. Features online appointment booking, transaction management, and seamless service delivery.",
    role: "Full-stack Developer",
    techStack: ["Nuxt.js", "TypeScript", "Tailwind CSS", "Node.js"],
    links: [
      {
        label: "Live Demo",
        url: "https://corniehealth.com",
        icon: "external-link",
      },
    ],
    featured: true,
  },
  {
    id: "pollsensei",
    title: "Pollsensei",
    description:
      "AI-powered survey and research platform that helps users create engaging surveys and analyze meaningful data with intelligent automation.",
    role: "Frontend Developer",
    techStack: ["WordPress", "jQuery", "AJAX"],
    links: [
      {
        label: "Live Demo",
        url: "https://launch.pollsensei.ai",
        icon: "external-link",
      },
    ],
    featured: true,
  },
  {
    id: "ydev-academy",
    title: "Ydev Academy",
    description:
      "Ed-tech platform helping Africans capture global tech opportunities through world-class education and skill development programs.",
    role: "Frontend Developer",
    techStack: ["React", "JavaScript", "Tailwind CSS"],
    links: [
      {
        label: "Live Demo",
        url: "https://www.ydev.academy/home",
        icon: "external-link",
      },
    ],
    featured: true,
  },
  {
    id: "jovalink",
    title: "Jovalink",
    description:
      "Marketplace platform connecting users with indigenous vendors for products and services. Features fast, seamless service delivery.",
    role: "Full-stack Developer",
    techStack: ["WordPress", "jQuery", "REST API"],
    links: [
      {
        label: "Live Demo",
        url: "https://jovalink.shop",
        icon: "external-link",
      },
    ],
    featured: true,
  },
  {
    id: "jotloom",
    title: "JotLoom",
    description:
      "A sleek and user-friendly web application for capturing and organizing thoughts, tasks, and ideas effortlessly.",
    role: "Full-stack Developer",
    techStack: ["Nuxt.js", "Vuetify", "Tailwind CSS", "Pinia", "EmailJS"],
    links: [
      {
        label: "Frontend",
        url: "https://github.com/JoshFransix/Jotloom",
        icon: "github",
      },
      {
        label: "Live Demo",
        url: "https://jotloom.netlify.app",
        icon: "external-link",
      },
    ],
    featured: true,
  },
  {
    id: "prime-telecoms",
    title: "Prime Telecoms",
    description:
      "Telecom services platform providing airtime top-up, data subscription, and related services for users.",
    role: "Full-stack Developer",
    techStack: ["Nuxt.js", "Vuetify", "Tailwind CSS", "Node.js", "Vuex"],
    links: [
      {
        label: "Live Demo",
        url: "https://prime-telecoms.onrender.com",
        icon: "external-link",
      },
    ],
    featured: true,
  },
  {
    id: "github-finder",
    title: "GitHub Finder",
    description:
      "Web application for fetching and displaying GitHub user profiles, including stats, repositories, and interaction data.",
    techStack: ["JavaScript", "HTML", "CSS"],
    links: [
      {
        label: "Frontend",
        url: "https://github.com/JoshFransix/githubFinder",
        icon: "github",
      },
      {
        label: "Live Demo",
        url: "https://findgit-user.netlify.app",
        icon: "external-link",
      },
    ],
    featured: false,
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description:
      "React-based expense tracking application for managing and calculating personal expenses with an intuitive interface.",
    techStack: ["React", "JavaScript"],
    links: [
      {
        label: "Frontend",
        url: "https://github.com/JoshFransix/Expense-Tracker",
        icon: "github",
      },
      {
        label: "Live Demo",
        url: "https://josh-expense-tracker.netlify.app",
        icon: "external-link",
      },
    ],
    featured: false,
  },
  {
    id: "youcommerce",
    title: "YouCommerce",
    description:
      "E-commerce platform providing access to various unique products with a modern shopping experience.",
    techStack: ["React", "Node.js"],
    links: [
      {
        label: "Frontend",
        url: "https://github.com/JoshFransix/you-commerce",
        icon: "github",
      },
      {
        label: "Live Demo",
        url: "https://you-commerce.onrender.com",
        icon: "external-link",
      },
    ],
    featured: false,
  },
  {
    id: "word-beater",
    title: "Word Beater",
    description:
      "Typing speed test application that challenges users to type given words as fast as possible within a time limit.",
    techStack: ["JavaScript", "HTML", "CSS"],
    links: [
      {
        label: "Frontend",
        url: "https://github.com/JoshFransix/speed_type",
        icon: "github",
      },
      {
        label: "Live Demo",
        url: "https://joshspeedtype.netlify.app",
        icon: "external-link",
      },
    ],
    featured: false,
  },
];
