export const site = {
  name: 'Warasat Ali',
  title: 'Full Stack Developer (MERN & PERN) | AI-Powered SaaS Builder',
  description:
    'I build scalable SaaS applications with AI integration, working with MERN/PERN stacks, microservices, and modern databases. I enjoy solving complex problems and delivering real-world products.',
  email: 'warasatwarraich@gmail.com',
  links: {
    github: 'https://github.com/warasat',
    linkedin: 'https://www.linkedin.com/in/your-link-here',
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
    image: '/public/images/DocCure.png',
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
    image: '/public/images/E_Commerce_SaaS.png',
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
    image: '/public/images/Email_Alias_management.png',
    youtubeId: 'dQw4w9WgXcQ',
    links: {
      // Company project hone ki wajah se github link excluded hai
      live: '#',
    },
  },
  {
    title: 'AI Game Builder (Geniteam Solutions)',
    summary:
      'Executed a complete frontend redesign and UI overhaul, migrating legacy styling to a modern React-TypeScript structure using an HTML reference site.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'HTML', 'Vercel'],
    image: '/public/images/AIGameBuilder.png',
    youtubeId: 'dQw4w9WgXcQ',
    links: {
      // Company project hone ki wajah se github link excluded hai
      live: '#',
    },
  },
  {
    title: 'Chat App with AI',
    summary:
      'Intern project: chat experience enhanced with AI features and smart tools.',
    tech: ['React', 'Node.js', 'Socket.IO', 'OpenAI', 'Vercel'],
    image: '/public/images/Chat_App.png',
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
    image: '/public/images/SkillGo.png',
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