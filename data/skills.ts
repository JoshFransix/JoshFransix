export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'Vue.js',
      'Nuxt.js',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Sass',
      'Vuetify',
      'Framer Motion',
      'GSAP',
    ],
  },
  {
    category: 'Backend',
    skills: [
      'Node.js',
      'Express',
      'NestJS',
      'REST APIs',
      'GraphQL',
      'PostgreSQL',
      'MongoDB',
    ],
  },
  {
    category: 'Tools & Infrastructure',
    skills: [
      'Git',
      'Webpack',
      'Vite',
      'Docker',
      'AWS',
      'Vercel',
      'Netlify',
      'WordPress',
      'Salesforce',
    ],
  },
  {
    category: 'Blockchain',
    skills: ['Solidity', 'Smart Contracts', 'Web3.js'],
  }
];

