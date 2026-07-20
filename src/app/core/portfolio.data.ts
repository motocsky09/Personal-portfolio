import { LanguageItem, Profile, Project, SkillGroup, Stat, TimelineItem } from './portfolio.models';

export const PROFILE: Profile = {
  name: 'Andrei Alexandru Motoc',
  role: 'Full-Stack Developer',
  tagline:
    'Full-Stack Developer with hands-on experience building end-to-end web applications using .NET (C#) and Angular. I apply Clean Architecture and SOLID principles across the stack — RESTful APIs with ASP.NET Core, SPA interfaces with Angular, and SQL Server / MongoDB for persistence. I am looking for an entry-level Full-Stack role to contribute alongside a skilled engineering team.',
  location: 'Oradea, Romania',
  email: 'motoc.andreialexandru@gmail.com',
  phone: '+40 724 789 573',
  available: true,
  socials: [
    { label: 'GitHub', icon: 'bi-github', url: 'https://github.com/motocsky09' },
    { label: 'LinkedIn', icon: 'bi-linkedin', url: 'https://www.linkedin.com/in/andreialexandru-motoc/' },
    { label: 'Email', icon: 'bi-envelope', url: 'mailto:motoc.andreialexandru@gmail.com' },
  ],
};

export const STATS: Stat[] = [
  { value: '2+', label: 'Years building software' },
  { value: '5', label: 'Projects delivered' },
  { value: '10+', label: 'Technologies used' },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Backend',
    icon: 'bi-hdd-network',
    skills: ['C#', 'ASP.NET Core', 'Entity Framework', 'REST APIs', 'SQL Server', 'MongoDB'],
  },
  {
    title: 'Frontend',
    icon: 'bi-window',
    skills: ['Angular', 'TypeScript', 'HTML5 & CSS3', 'Bootstrap', 'RxJS', 'Responsive UI'],
  },
  {
    title: 'Tools & Practices',
    icon: 'bi-tools',
    skills: ['Git', 'Docker', 'Swagger / Postman', 'Clean Architecture', 'SOLID', 'Ollama / LLMs'],
  },
];

export const PROJECTS: Project[] = [
  {
    name: 'Somo',
    summary:
      'A veterinary clinic finder built as an Angular SPA on ASP.NET Core and MongoDB. Pet owners locate nearby clinics through Google Maps geolocation and book appointments via a guided 6-step flow, secured with JWT and role-based authorization over a Clean Architecture backend.',
    year: '2025',
    tech: ['Angular', 'ASP.NET Core', 'MongoDB', 'JWT'],
    sourceUrl: 'https://github.com/motocsky09',
  },
  {
    name: 'Device Management System',
    summary:
      'A device inventory platform on Angular, ASP.NET Core and MongoDB with full CRUD, JWT authentication and role-based access. It features an AI-powered description generator using a local Ollama model and a custom free-text search engine with relevance ranking.',
    year: '2026',
    tech: ['Angular', 'ASP.NET Core', 'MongoDB', 'Ollama'],
    sourceUrl: 'https://github.com/motocsky09',
  },
  {
    name: 'MeigoWeb',
    summary:
      'A full-stack e-commerce platform for clothing retail built with Angular, ASP.NET Core and SQL Server. Includes cart and order management, role-based access with IdentityServer and JWT, and an admin dashboard with inventory control and monthly sales reporting.',
    year: '2024',
    tech: ['Angular', 'ASP.NET Core', 'SQL Server', 'JWT'],
    sourceUrl: 'https://github.com/motocsky09',
  },
  {
    name: 'Wing Tsun Connect',
    summary:
      'A responsive showcase website for a martial-arts academy, built as an Angular SPA with modular, reusable components. Deployed to production on Netlify with GitHub-integrated CI/CD for automatic updates on every commit.',
    year: '2026',
    tech: ['Angular', 'TypeScript', 'Netlify', 'CI/CD'],
    sourceUrl: 'https://github.com/motocsky09',
  },
  {
    name: 'Portfolio Website',
    summary:
      'This very site — a fast, responsive single-page application built with Angular 16 and Bootstrap 5, featuring a layered dark theme and lazy-loaded pages, deployed as a static app.',
    year: '2025',
    tech: ['Angular', 'Bootstrap', 'SCSS'],
    sourceUrl: 'https://github.com/motocsky09/Personal-portfolio',
  },
];

export const EXPERIENCE: TimelineItem[] = [
  {
    title: 'Full-Stack Developer',
    organisation: 'Personal & Freelance Projects',
    period: '2024 — Present',
    description:
      'Design and build end-to-end web applications with .NET (C#) and Angular, applying Clean Architecture and SOLID principles. Delivered e-commerce, device-management and appointment-booking platforms backed by SQL Server and MongoDB.',
  },
  {
    title: 'IT & Operations Associate',
    organisation: 'FinProm S.R.L.',
    period: '2021 — Present',
    description:
      'Administer and optimise departmental virtual machines, diagnose complex network and VPN access issues, and manage the end-to-end provisioning and inventory of IT equipment.',
  },
];

export const EDUCATION: TimelineItem[] = [
  {
    title: 'B.Sc. Automation and Applied Informatics',
    organisation: 'University of Oradea',
    period: '2020 — 2024',
    description:
      'Faculty of Electrical Engineering and Information Technology. Studied software engineering, programming, databases and applied informatics.',
  },
];

export const LANGUAGES: LanguageItem[] = [
  { name: 'Romanian', level: 'Native — C2' },
  { name: 'English', level: 'Professional — B2' },
];
