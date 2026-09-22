import { LanguageItem, Profile, Project, SkillGroup, Stat, TimelineItem } from './portfolio.models';

export const PROFILE: Profile = {
  name: 'Andrei Alexandru Motoc',
  firstName: 'Andrei',
  role: 'Full-Stack Developer (.NET + Angular)',
  tagline: [
    'Full-Stack Developer with 2+ years of experience building web applications with .NET (C#) and Angular through personal and freelance projects.',
    'Currently working in back-office operations for Italian insurance providers, where I use code to automate repetitive workflows.',
    'Based in Oradea, open to relocation, hybrid or remote roles.',
  ],
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
  { value: '6', label: 'Projects delivered' },
  { value: '25+', label: 'Hours of manual work automated monthly' },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Backend',
    icon: 'bi-hdd-network',
    skills: [
      'C#',
      'ASP.NET Core',
      'Entity Framework',
      'REST APIs',
      'Clean Architecture',
      'Repository Pattern',
      'DTOs',
      'JWT & RBAC',
      'async/await',
    ],
  },
  {
    title: 'Frontend',
    icon: 'bi-window',
    skills: ['Angular (v12+)', 'TypeScript', 'JavaScript', 'HTML5 & CSS3', 'Bootstrap', 'RxJS', 'Responsive UI'],
  },
  {
    title: 'Data, Tools & Infrastructure',
    icon: 'bi-tools',
    skills: [
      'SQL Server',
      'MongoDB',
      'SQL',
      'Git',
      'Docker',
      'Swagger / Postman',
      'PowerShell',
      'Ollama / local LLMs',
      'Virtual Machines',
      'Windows / Linux / macOS',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    name: 'Somo',
    summary: [
      'A veterinary clinic finder — Angular SPA on ASP.NET Core and MongoDB — letting pet owners locate nearby clinics via Google Maps geolocation and book appointments through a 6-step guided flow.',
      'Built on Clean Architecture with strict separation across 4 layers (Domain, Application, Infrastructure, API), keeping business logic fully isolated from infrastructure concerns.',
      'Applies a Generic Repository Pattern and dedicated DTOs for Vets, Clinics, Pets and Appointments, decoupling the internal domain model from the API contract.',
      'Secured with JWT authentication and role-based authorization (Owner / Vet / ClinicAdmin) across all endpoints, with a custom MongoRepository for complex medical documents.',
    ],
    year: '2025 - present',
    status: 'In development',
    tech: ['Angular', 'ASP.NET Core', 'MongoDB', 'Clean Architecture', 'JWT', 'Google Maps'],
    sourceUrl: 'https://github.com/motocsky09/Somo',
  },
  {
    name: 'Device Management System',
    summary: [
      'A device inventory management platform — Angular SPA on ASP.NET Core and MongoDB — with full CRUD, JWT authentication, role-based access control and device assignment per user.',
      'Integrates an AI-powered description generator using Ollama (gemma2:2b) that turns technical specifications into human-readable device descriptions.',
      'Implements a free-text search engine with relevance ranking, scoring matches across Name, Manufacturer, Processor and RAM fields without external search libraries.',
    ],
    year: '2026',
    tech: ['Angular', 'ASP.NET Core', 'MongoDB', 'Ollama', 'JWT'],
    sourceUrl: 'https://github.com/motocsky09/Device-Management',
  },
  {
    name: 'MeigoWeb',
    summary: [
      'A full-stack e-commerce platform for clothing retail — Angular, ASP.NET Core and SQL Server — supporting product browsing, cart management and order placement across mobile, tablet and desktop.',
      'Relational SQL Server schema (products, users, carts, orders) designed with Entity Framework Core, using async/await throughout the data access layer.',
      'Role-based access control (Customer / Admin) built on IdentityServer 8 and JWT tokens, with hashed passwords and route guards preventing unauthorized access to the admin panel.',
      'Admin dashboard covering inventory management, order history tracking and a monthly sales chart with calendar-based reporting.',
    ],
    year: '2024 - 2025',
    tech: ['Angular', 'ASP.NET Core', 'SQL Server', 'Entity Framework', 'IdentityServer 8'],
    sourceUrl: 'https://github.com/motocsky09/MeigoWeb',
  },
  {
    name: 'Wing Tsun Connect',
    summary: [
      'A responsive showcase website for a martial arts academy, built as an Angular SPA and deployed to production on Netlify with GitHub-integrated CI/CD for automatic updates on every commit.',
      'Assembled from modular, reusable Angular components ensuring a consistent visual identity and a fluid single-page experience across all devices.',
    ],
    year: '2026',
    tech: ['Angular', 'TypeScript', 'Netlify', 'CI/CD'],
    demoUrl: 'https://wingtsun.netlify.app/',
    sourceUrl: 'https://github.com/motocsky09/WingTsun',
  },
  {
    name: 'Meridian Onboarding',
    summary: [
      'A web application that helps new employees at Meridian navigate their first month.',
      'HR onboards a new hire through a simple form and shares a personalized link, which opens that employee\'s own onboarding dashboard.',
    ],
    year: '2026',
    tech: ['Angular', 'TypeScript', '.NET 8', 'MongoDB'],
    sourceUrl: 'https://github.com/motocsky09/meridian-onboarding',
  },
  {
    name: 'Portfolio Website',
    summary: [
      'This very site — a fast, responsive single-page application built with Angular 16 and Bootstrap 5.',
      'Features a layered dark theme and lazy-loaded pages, deployed as a static app on Netlify.',
    ],
    year: '2026 - present',
    tech: ['Angular', 'Bootstrap', 'SCSS', 'Netlify'],
    sourceUrl: 'https://github.com/motocsky09/Personal-portfolio',
  },
];

export const EXPERIENCE: TimelineItem[] = [
  {
    title: 'Financial & Commercial Intermediary (Insurance Back-Office Operations)',
    organisation: 'FinProm',
    period: '2021 — Present',
    description: [
      "Process client case files for 6 Italian insurance providers (AXA, Cardif, K5, Net Insurance, Sogecap SA, Vittoria) on Q-Task, the company's multi-bank cloud platform.",
      'Identified repetitive, time-consuming manual workflows within the team and built automation tools that save 25+ hours of manual work per month.',
      'Developed a browser-based text generator (HTML/JavaScript) that parses Excel amortization plans into standardized Italian installment texts, cutting processing from 5-7 to 1-2 minutes per case file.',
      'Wrote a PowerShell script that sorts 250-300 PDF documents per batch into per-client folders by surname matching, reducing a 4-5 hour job to under 20 minutes.',
      'Designed the script with safety in mind: a dry-run mode, detection of ambiguous matches flagged for manual review, and a rollback script.',
    ],
  },
  {
    title: 'Full-Stack Developer',
    organisation: 'Personal & Freelance Projects',
    period: '2024 — Present',
    description: [
      'Design and build end-to-end web applications with .NET (C#) and Angular, applying Clean Architecture, the Repository Pattern and SOLID principles.',
      'Delivered e-commerce, device-management and appointment-booking platforms backed by SQL Server and MongoDB, secured with JWT authentication and role-based access control.',
    ],
  },
];

export const EDUCATION: TimelineItem[] = [
  {
    title: "Bachelor's Degree in Automation and Applied Informatics",
    organisation: 'University of Oradea',
    period: '2020 — 2024',
    description: [
      'Faculty of Electrical Engineering and Information Technology.',
      'Studied software engineering, programming, databases and applied informatics.',
    ],
  },
];

export const LANGUAGES: LanguageItem[] = [
  { name: 'Romanian', level: 'Native' },
  { name: 'English', level: 'B2' },
  { name: 'Italian', level: 'Professional insurance terminology (reading)' },
];
