# Joshua Fransix - Portfolio

A modern, professional portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **3D Graphics**: Three.js, React Three Fiber
- **Icons**: Lucide React

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Section.tsx
│   ├── ProjectCard.tsx
│   ├── TechStack.tsx
│   ├── Footer.tsx
│   └── ...
├── data/                # Data files
│   ├── projects.ts      # Project data
│   ├── skills.ts        # Skills data
│   └── socials.ts       # Social links
└── lib/                 # Utility functions
    ├── icons.tsx
    ├── theme.ts
    └── utils.ts
```

## Adding Content

### Projects

Edit `data/projects.ts` to add or modify projects. Each project can have multiple links (frontend repo, backend repo, live demo, etc.).

### Skills

Edit `data/skills.ts` to update skill categories and items.

### Social Links

Edit `data/socials.ts` to update social media links.

## Features

- Dark mode by default with light/dark toggle
- Responsive design
- Smooth animations and transitions
- SEO optimized
- Accessible
- Fast performance
- Type-safe with TypeScript

## License

© 2026 Joshua Fransix. All rights reserved.
