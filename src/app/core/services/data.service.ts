import { Injectable } from '@angular/core';

export interface Project {
  title: string;
  slug: string;
  techStack: string[];
  thumbnail: string;
  longThumbnail: string;
  images: string[];
  liveUrl?: string;
  sourceCode?: string;
  year: number;
  description?: string;
  role?: string;
  bullets?: string[];
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  location: string;
  techStack: string;
  bullets: string[];
}

export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillCategory {
  [key: string]: SkillItem[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  generalInfo = {
    email: 'yashbaraiya2402@gmail.com',
    emailSubject: "Let's connect",
    emailBody: 'Hi Yash, I am reaching out to you because...',
    phone: '+91 88664 68649',
    location: 'Surat, Gujarat'
  };

  socialLinks = [
    { name: 'github', url: 'https://github.com' },
    { name: 'linkedin', url: 'https://linkedin.com' },
    { name: 'facebook', url: 'https://facebook.com' }
  ];

  myStack: SkillCategory = {
    frontend: [
      { name: 'Angular', icon: '/assets/logos/angular.png' },
      { name: 'Next.js', icon: '/assets/logos/next.png' },
      { name: 'React', icon: '/assets/logos/react.png' },
      { name: 'SCSS', icon: '/assets/logos/sass.png' },
      { name: 'RxJS', icon: '/assets/logos/rxjs.svg' },
      { name: 'NgRx', icon: '/assets/logos/ngrx.png' },
      { name: 'JavaScript', icon: '/assets/logos/javascript.png' },
      { name: 'HTML', icon: '/assets/logos/html.png' },
      { name: 'CSS', icon: '/assets/logos/css.png' }
    ],
    backend: [
      { name: 'Node.js', icon: '/assets/logos/node.png' },
      { name: 'Express.js', icon: '/assets/logos/express.png' },
      { name: 'NestJS', icon: '/assets/logos/nest.png' },
      { name: 'REST APIs', icon: '/assets/logos/node.png' },
      { name: 'WebSocket', icon: '/assets/logos/javascript.png' },
      { name: 'Stripe', icon: '/assets/logos/stripe.png' }
    ],
    database: [
      { name: 'MongoDB', icon: '/assets/logos/mongodb.png' },
      { name: 'PostgreSQL', icon: '/assets/logos/postgres.png' },
      { name: 'PGAdmin', icon: '/assets/logos/postgres.png' }
    ],
    tools: [
      { name: 'Git', icon: '/assets/logos/git.png' },
      { name: 'GitHub', icon: '/assets/logos/github.png' },
      { name: 'Postman', icon: '/assets/logos/postman.png' },
      { name: 'VS Code', icon: '/assets/logos/vscode.png' },
      { name: 'Agile/Scrum', icon: '/assets/logos/agile.png' }
    ]
  };

  projects: Project[] = [
    {
      title: 'Landing Platform',
      slug: 'landing-platform',
      techStack: ['Angular', 'Next.js', 'NestJS', 'PostgreSQL', 'RxJS', 'NgRx'],
      thumbnail: '/projects/thumbnail/landing-platform.jpg',
      longThumbnail: '/projects/long/landing-platform.jpg',
      images: ['/projects/images/landing-platform-1.png'],
      year: 2024,
      description: 'Client Project',
      role: 'Full Stack Developer',
      bullets: [
        'Built and maintained core modules using Angular; implemented reusable components and integrated REST APIs for dynamic content.',
        'Developed a supporting standalone Next.js project to handle a specific functional area, connected seamlessly to the main platform.',
        'Architected microservices using NestJS and Postgres to deliver a scalable, modular backend foundation.',
        'Implemented pub/sub-based communication for robust, real-time data exchange between microservices and seamless integration with the frontend.',
        'Used RxJS and NgRx for efficient state management, optimizing data flow across modules.'
      ]
    },
    {
      title: 'Finance Handling System',
      slug: 'finance-system',
      techStack: ['Node.js', 'Express', 'Stripe', 'WebSocket', 'MongoDB'],
      thumbnail: '/projects/thumbnail/finance-system.jpg',
      longThumbnail: '/projects/long/finance-system.jpg',
      images: ['/projects/images/finance-system-1.png'],
      year: 2024,
      description: 'Client Project',
      role: 'Backend Developer',
      bullets: [
        'Developed backend APIs in Node.js and Express to support payment workflows and transaction logs.',
        'Integrated Stripe for secure online payments; handled image uploads and file processing logic.',
        'Enabled third-party service integration via WebSocket for GitHub data feeds.'
      ]
    },
    {
      title: 'Database Management Dashboard',
      slug: 'database-dashboard',
      techStack: ['Angular', 'RxJS', 'REST APIs'],
      thumbnail: '/projects/thumbnail/database-dashboard.jpg',
      longThumbnail: '/projects/long/database-dashboard.jpg',
      images: ['/projects/images/database-dashboard-1.png'],
      year: 2024,
      description: 'Internal Tool',
      role: 'Frontend Developer',
      bullets: [
        'Created a responsive dashboard using Angular, with features for CRUD operations, filtering, and real-time updates.',
        'Improved admin task efficiency by implementing custom form validations and user-friendly UX.'
      ]
    }
  ];

  myExperience: Experience[] = [
    {
      title: 'Software Developer',
      company: 'La Net Team Software Solutions Pvt. Ltd.',
      duration: '07/2024 – Present',
      location: 'Surat, Gujarat',
      techStack: 'MEAN, MERN',
      bullets: [
        'Spearheaded front-end development of a dynamic Angular-based landing platform, creating reusable UI components, implementing reactive forms, and integrating RESTful APIs.',
        'Upgraded Angular applications from version 15 to 17, improving performance, compatibility, and developer efficiency.',
        'Independently developed a Next.js project from scratch, designed to support and integrate with the primary landing platform as a modular micro-frontend.',
        'Utilized RxJS and NgRx for state management and reactive data handling in Angular applications.',
        'Created secure backend APIs using Node.js and Express, covering image uploads, payment processing with Stripe, and real-time integration with third-party services like GitHub via WebSocket.',
        'Contributed to sprint planning, code reviews, and agile delivery processes to maintain high-quality and timely software releases.'
      ]
    }
  ];
}

