export const site = {
  name: 'Warasat Ali',
  title: 'Full Stack Developer (MERN & PERN) | AI-Powered SaaS Builder',
  description:
    'I build scalable SaaS applications with AI integration, working with MERN/PERN stacks, microservices, and modern databases. I enjoy solving complex problems and delivering real-world products.',
  email: 'warasatwarraich@gmail.com',
  links: {
    github: 'https://github.com/warasat',
    linkedin: 'https://www.linkedin.com/in/warasat-ali/',
  },
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
]

export const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'NextJs', 'React Native', 'Tailwind CSS', 'TypeScript', 'Vite', 'Redux', 'Socket.IO', 'WebSockets', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'Microservices', 'REST APIs', 'GraphQL', 'Socket.IO', 'WebSockets', 'TypeScript', 'JWT', 'OAuth', 'Prisma', 'Mongoose', 'Redis', 'RabbitMQ'],
  },
  {
    title: 'Databases',
    items: ['MongoDB', 'PostgreSQL (Prisma)', 'Cassandra', 'Redis', 'Firebase', 'Supabase', 'MySQL'],
  },
  {
    title: 'DevOps & Deployments',
    items: ['Docker', 'AWS', 'Vercel', 'Ngrok'],
  },
  {
    title: 'AI',
    items: ['RAG', 'LangChain', 'LangGraph', 'OpenAI APIs'],
  },
]

export const projects = [
  {
    title: 'Doccure',
    summary:
      'Healthcare app with appointments, dashboards, and production-ready UX.',
    tech: ['React', 'Node.js', 'MongoDB', 'Vercel'],
    image: '/images/DocCure.png', // Fixed: removed /public
    youtubeId: 'dQw4w9WgXcQ',
    links: {
      github: 'https://github.com/warasat',
      live: 'https://vercel.com',
    },
  },
  {
    title: 'E-commerce SaaS',
    summary:
      'Multi-tenant storefront + admin with payments, orders, and analytics.',
    tech: ['React', 'Express', 'PostgreSQL', 'Prisma', 'Stripe', 'AWS'],
    image: '/images/E_Commerce_SaaS.png', // Fixed: removed /public
    youtubeId: 'dQw4w9WgXcQ',
    links: {
      github: 'https://github.com/warasat',
      live: '#',
    },
  },
  {
    title: 'Email Alias Management MVP',
    summary:
      'A secure MVP platform featuring dedicated Admin & User portals, integrated with Stripe for subscriptions and Mailgun for seamless email routing.',
    tech: ['NextJs', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Stripe', 'Mailgun', 'AWS', 'Ngrok'],
    image: '/images/Email_Alias_management.png', // Fixed: removed /public
    youtubeId: 'dQw4w9WgXcQ',
    links: {
      live: '#',
    },
  },
  {
    title: 'AI Game Builder (Geniteam Solutions)',
    summary:
      'Executed a complete frontend redesign and UI overhaul, migrating legacy styling to a modern React-TypeScript structure using an HTML reference site.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'HTML', 'Vercel'],
    image: '/images/AIGameBuilder.png', // Fixed: removed /public
    youtubeId: 'dQw4w9WgXcQ',
    links: {
      live: '#',
    },
  },
  {
    title: 'Chat App with AI',
    summary:
      'Intern project: chat experience enhanced with AI features and smart tools.',
    tech: ['React', 'Node.js', 'Socket.IO', 'OpenAI', 'Vercel'],
    image: '/images/Chat_App.png', // Fixed: removed /public
    youtubeId: 'dQw4w9WgXcQ',
    links: {
      github: 'https://github.com/warasat',
      live: '#',
    },
  },
  {
    title: 'SkillGo',
    summary:
      'Intern project: agentic AI concept for personalized skill-building workflows.',
    tech: ['RAG', 'LangGraph', 'Node.js', 'MongoDB', 'Vercel'],
    image: '/images/skillGo.png', // Fixed: matched GitHub lowercase 's' and removed /public
    youtubeId: 'dQw4w9WgXcQ',
    links: {
      github: 'https://github.com/warasat',
      live: '#',
    },
  },
]

export const services = [
  {
    title: 'Full Stack MERN & PERN Development',
    desc: 'Production-ready web apps with modern architecture, SQL/NoSQL databases, and clean UX.',
  },
  {
    title: 'AI Chatbot Integration (RAG)',
    desc: 'Retrieval-augmented generation with your data, safely and fast.',
  },
  {
    title: 'SaaS Application Development',
    desc: 'Multi-tenant systems, Stripe billing flows, and scalable foundations.',
  },
  {
    title: 'API Development & Third-Party Integrations',
    desc: 'Secure REST/GraphQL APIs with payment gateways, email services (Mailgun), validation, and auth.',
  },
  {
    title: 'Cloud Deployment & DevOps',
    desc: 'Configuring secure service boundaries, production hosting on AWS/Vercel, and local tunneling setups.',
  },
]
export const experiences = [
  {
    role: 'Full Stack Developer (PSEB Apprenticeship)',
    company: 'Geniteam Solutions',
    duration: 'Nov 2025 - May 2026',
    description:
      'Worked extensively on enterprise-grade SaaS products and client contracts using MERN/PERN stacks. Specialized in integrating AI capabilities and streamlining complex background workflows.',
    highlights: [
      'Developed an Email Alias Management MVP with Next.js and PostgreSQL, embedding Stripe subscriptions and Mailgun mail routing.',
      'Designed SkillGo, an agentic AI-driven smart workflow concept leveraging RAG architectures and LangGraph.',
      'Executed a comprehensive frontend overhaul for an AI Game Builder SaaS, refactoring legacy code into React, TypeScript, and Tailwind CSS.',
      'Engineered a real-time Chat Application with Socket.IO and OpenAI APIs for advanced AI tool call processing.'
    ],
  },
  {
    role: 'Freelance Full Stack Engineer',
    company: 'Remote & International Contracts',
    duration: '2025 - 2026',
    description:
      'Delivered end-to-end web applications for international clients, focused on creating high-performance e-commerce systems and custom management solutions.',
    highlights: [
      'Architected and deployed a multi-tenant E-commerce SaaS featuring localized Stripe payments, automated global tax scaling, and an advanced analytics dashboard for orders and sales tracking.',
      'Developed a custom, high-traffic web platform tailored for a Mexico-based client, ensuring fully responsive UI/UX and high availability backend architecture.',
      'Gathered business requirements directly from overseas clients to scope out MVPs, manage deployment lifecycles on AWS, and establish continuous integration.'
    ],
  },
  {
    role: 'Full Stack Developer (Final Year Project)',
    company: 'University Graduation Project',
    duration: '2025',
    description:
      'Co-authored and engineered "Doccure", a production-ready healthcare and clinic-management portal solving real-world scheduling and data bottlenecks.',
    highlights: [
      'Built a comprehensive Doctor-Patient Management System featuring automated appointment booking, smart calendars, and role-based access control.',
      'Created intuitive medical dashboards for doctors and patients using React and Node.js, storing dynamic medical records securely in MongoDB.',
      'Achieved full deployment on Vercel with high UX performance and optimized API call handling.'
    ],
  }
]