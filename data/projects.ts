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
    role: "Senior Frontend Engineer",
    techStack: [
      "Nuxt.js",
      "TypeScript",
      "Tailwind CSS",
      "AWS",
      "Vuetify",
      "Smartlook",
    ],
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
    id: "pollsensei",
    title: "Pollsensei",
    description:
      "AI-powered survey and research platform that helps users create engaging surveys and analyze meaningful data with intelligent automation.",
    role: "Frontend Software Engineer",
    techStack: [
      "WordPress",
      "jQuery",
      "AJAX",
      "Next.js",
      "Shadcn UI",
      "Framer",
      "Microsoft Clarity",
    ],
    links: [
      {
        label: "Launch Site",
        url: "https://launch.pollsensei.ai",
        icon: "external-link",
      },
      {
        label: "Live Demo",
        url: "https://pollsensei.ai/",
        icon: "external-link",
      },
    ],
    featured: true,
  },
  {
  id: "cloudenly",
  title: "Cloudenly",
  description:
    "A cloud-based business and analytics platform that helps organizations manage operations, monitor performance metrics, and gain actionable insights through data-driven dashboards and reporting tools.",
  role: "Frontend Engineer",
  techStack: [
    "Nuxt.js",
    "Vue.js",
    "Vuetify",
    "Google Analytics (GA4)",
    "Google Tag Manager",
    "AWS (S3, CloudFront)",
    "Webpack"
  ],
  links: [
    {
      label: "Live Platform",
      url: "https://cloudenly.com",
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
    role: "Senior Frontend Developer",
    techStack: ["Nuxt.js", "TypeScript", "Tailwind CSS", "AWS"],
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
    id: "linar-studios",
    title: "Linar Studios",
    description:
      "Showcase platform for a leading African 3D animation studio specializing in bringing indigenous African stories to life. Includes a full-featured admin system for managing blog content, portfolio pieces, and studio information with a modern, responsive frontend and robust backend API.",
    role: "Full Stack Developer",
    techStack: ["Next.js", "Tailwind CSS", "Framer", "NestJS", "PostgreSQL"],
    links: [
      {
        label: "Live Demo",
        url: "https://www.linarstudios.com/",
        icon: "external-link",
      },
      {
        label: "Backend",
        url: "https://github.com/JoshFransix/linar-studios-backend",
        icon: "github",
      },
    ],
    featured: false,
  },
  {
    id: "webonix",
    title: "Webonix",
    description:
      "Real-time web performance monitoring observatory that tracks Core Web Vitals including LCP, INP, CLS, FCP, and TTFB. Features live metrics updates via WebSocket, historical analytics, performance charts, and customizable alert thresholds.",
    role: "Full-stack Engineer",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Socket.io",
      "Zustand",
      "Recharts",
      "NestJS",
      "Tailwind CSS",
    ],
    links: [
      {
        label: "Live Demo",
        url: "https://webonix-frontend.vercel.app/",
        icon: "external-link",
      },
      {
        label: "Frontend",
        url: "https://github.com/JoshFransix/webonix-frontend",
        icon: "github",
      },
      {
        label: "Backend",
        url: "https://github.com/JoshFransix/webonix-backend",
        icon: "github",
      },
    ],
    featured: false,
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
    featured: false,
  },
  {
    id: "bluledger",
    title: "BluLedger",
    description:
      "A comprehensive financial management system with multi-tenant support for organizations. Features include account management, transaction tracking, automated balance calculations, and secure JWT authentication with refresh token rotation.",
    role: "Full-stack Engineer",
    techStack: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Tailwind CSS",
      "NestJS",
      "Prisma",
      "PostgreSQL",
    ],
    links: [
      {
        label: "Live Demo",
        url: "https://bluledger.vercel.app/",
        icon: "external-link",
      },
      {
        label: "Frontend",
        url: "https://github.com/JoshFransix/bluledger",
        icon: "github",
      },
      {
        label: "Backend",
        url: "https://github.com/JoshFransix/bluledger-backend",
        icon: "github",
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
    featured: false,
  },
  // {
  //   id: "prime-telecoms",
  //   title: "Prime Telecoms",
  //   description:
  //     "Telecom services platform providing airtime top-up, data subscription, and related services for users.",
  //   role: "Full-stack Developer",
  //   techStack: ["Nuxt.js", "Vuetify", "Tailwind CSS", "NestJS", "MongoDB"],
  //   links: [
  //     {
  //       label: "Live Demo",
  //       url: "https://prime-telecoms.onrender.com",
  //       icon: "external-link",
  //     },
  //   ],
  //   featured: true,
  // },
  {
    id: "jotloom",
    title: "JotLoom",
    description:
      "A sleek and user-friendly web application for capturing and organizing thoughts, tasks, and ideas effortlessly.",
    role: "Full-stack Developer",
    techStack: ["Nuxt.js", "Vuetify", "Tailwind CSS", "Pinia", "EmailJS", "NestJS","PostgreSQL"],
    links: [
      {
        label: "Live Demo",
        url: "https://jotloom.netlify.app",
        icon: "external-link",
      },
      {
        label: "Frontend",
        url: "https://github.com/JoshFransix/Jotloom",
        icon: "github",
      },
      {
        label: "Backend",
        url: "https://github.com/JoshFransix/Jotloom-backend",
        icon: "github",
      },
    ],
    featured: true,
  },
  {
    id: "flex-it",
    title: "iBloov flex-it",
    description:
      "Real-time donation and fundraising platform that gamifies event contributions through live leaderboards and cashless gifting. Enables users to collect funds instantly via QR code scanning with instant payouts, bank-level security, and competitive rankings.",
    role: "Frontend Developer",
    techStack: ["Next.js", "Lucide", "Tailwind CSS", "Typescript", "Framer", "Radix UI", "Zustand"],
    links: [
      {
        label: "Live Demo",
        url: "https://flex.ibloov.com",
        icon: "external-link",
      },
    ],
    featured: false,
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
  // {
  //   id: "expense-tracker",
  //   title: "Expense Tracker",
  //   description:
  //     "React-based expense tracking application for managing and calculating personal expenses with an intuitive interface.",
  //   techStack: ["React", "JavaScript"],
  //   links: [
  //     {
  //       label: "Frontend",
  //       url: "https://github.com/JoshFransix/Expense-Tracker",
  //       icon: "github",
  //     },
  //     {
  //       label: "Live Demo",
  //       url: "https://josh-expense-tracker.netlify.app",
  //       icon: "external-link",
  //     },
  //   ],
  //   featured: false,
  // },
  // {
  //   id: "youcommerce",
  //   title: "YouCommerce",
  //   description:
  //     "E-commerce platform providing access to various unique products with a modern shopping experience.",
  //   techStack: ["React", "Node.js"],
  //   links: [
  //     {
  //       label: "Frontend",
  //       url: "https://github.com/JoshFransix/you-commerce",
  //       icon: "github",
  //     },
  //     {
  //       label: "Live Demo",
  //       url: "https://you-commerce.onrender.com",
  //       icon: "external-link",
  //     },
  //   ],
  //   featured: false,
  // },
  // {
  //   id: "word-beater",
  //   title: "Word Beater",
  //   description:
  //     "Typing speed test application that challenges users to type given words as fast as possible within a time limit.",
  //   techStack: ["JavaScript", "HTML", "CSS"],
  //   links: [
  //     {
  //       label: "Frontend",
  //       url: "https://github.com/JoshFransix/speed_type",
  //       icon: "github",
  //     },
  //     {
  //       label: "Live Demo",
  //       url: "https://joshspeedtype.netlify.app",
  //       icon: "external-link",
  //     },
  //   ],
  //   featured: false,
  // },
];
