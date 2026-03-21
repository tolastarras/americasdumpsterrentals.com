import { Clock, CodeXml, Lightbulb, Paintbrush, Scaling, Target, Workflow } from 'lucide-react';

export const FEATURES = [
  {
    label: 'Philosophy',
    value: 'Quality over quantity',
    description: 'We focus on doing fewer things better, delivering exceptional work every time.',
    icon: Lightbulb,
    color: 'text-amber-500',
    gradient: 'from-amber-400 to-orange-500',
    illustration: '/images/process.svg',
  },
  {
    label: 'Process',
    value: 'Discover · Design · Build',
    description: 'A proven 3-phase approach that turns ideas into reality with no surprises.',
    icon: Workflow,
    color: 'text-blue-500',
    gradient: 'from-blue-400 to-cyan-500',
  },
  {
    label: 'Response',
    value: '24h guaranteed',
    description: 'Fast replies, always. Questions answered within one business day.',
    icon: Clock,
    color: 'text-purple-500',
    gradient: 'from-purple-400 to-pink-500',
  },
  {
    label: 'Promise',
    value: 'On time, on budget',
    description: 'We deliver what we promise, when we promise it, for the price we agreed.',
    icon: Target,
    color: 'text-emerald-500',
    gradient: 'from-emerald-400 to-teal-500',
  },
];

export const SERVICES = [
  {
    icon: CodeXml,
    headerText: 'Custom',
    title: 'Custom Software Development',
    description: 'Applications built with modern frameworks to solve your unique business challenges.',
    gradient: 'from-blue-500 to-cyan-500',
    circleColor: 'bg-blue-500',
    textColor: 'text-blue-600',
    features: [
      'Full-stack development with Next.js',
      'Custom API development & integration',
      'Scalable microservices architecture',
    ],
  },
  {
    icon: Paintbrush,
    headerText: 'Design',
    title: 'Website Design & Development',
    description: 'Intuitive, engaging digital experiences that convert visitors into customers.',
    gradient: 'from-purple-500 to-pink-500',
    circleColor: 'bg-purple-500',
    textColor: 'text-purple-600',
    features: [
      'Wireframing & interactive prototyping',
      'User research & usability testing',
      'Custom responsive design systems',
    ],
  },
  {
    icon: Scaling,
    headerText: 'Web Apps',
    title: 'Scalable, High-Performance Web Apps',
    description: 'Cloud infrastructure and deployment for maximum performance and reliability.',
    gradient: 'from-green-500 to-teal-500',
    circleColor: 'bg-green-500',
    textColor: 'text-green-600',
    features: [
      'Deployment with automatic scaling',
      'Next.js App Router for optimal rendering',
      'PostgreSQL database solutions',
    ],
  },
];

export const SERVICE_OPTIONS = [
  {
    label: 'Custom Software Development',
    value: 'custom-development',
  },
  {
    label: 'UI/UX Design',
    value: 'ux-design',
  },
  {
    label: 'Technical Consulting',
    value: 'technical-consulting',
  },
   {
    label: 'Other',
    value: 'other',
  },
];

export const TECH_STACK = [
  {
    name: 'Next.js',
    description: 'React framework',
    image: '/images/logos/nextjs.svg',
    color: 'from-white to-white/60',
    borderColor: 'group-hover:border-white/50',
  },
  {
    name: 'TypeScript',
    description: 'Type-safe JavaScript',
    image: '/images/logos/typescript.svg',
    color: 'from-blue-500 to-blue-400',
    borderColor: 'group-hover:border-blue-600/50',
  },
  {
    name: 'TailwindCSS',
    description: 'Utility-first CSS',
    image: '/images/logos/tailwindcss.svg',
    color: 'from-sky-400 to-sky-300',
    borderColor: 'group-hover:border-sky-400/50',
  },
  {
    name: 'Supabase',
    description: 'Database',
    image: '/images/logos/supabase.webp',
    color: 'from-green-400 to-green-300',
    borderColor: 'group-hover:border-green-400/50',
  },
];

export const PROJECT_PHASES = [
  {
    id: '1',
    title: 'Discovery & Planning',
    subtitle: 'Key Deliverables',
    description: 'We dive deep into your business goals, requirements, and timeline. No pressure, just clarity.',
    textColor: 'text-blue-600',
    gradient: 'from-blue-600 to-cyan-500',
    items: [
      'Project requirements document',
      'Technical architecture plan',
      'Timeline & milestone schedule',
    ],
  },
  {
    id: '2',
    title: 'Design & Prototyping',
    subtitle: 'Tools & Methods',
    description: 'Creating wireframes, mockups, and interactive prototypes that bring your vision to life before development begins.',
    textColor: 'text-purple-600',
    gradient: 'from-purple-600 to-pink-500',
    items: ['Figma for wireframing', 'User story mapping', 'Agile methodology'],
  },
  {
    id: '3',
    title: 'Development & Launch',
    subtitle: 'Technologies & Support',
    description: 'Building with clean, maintainable code using modern frameworks, followed by deployment and ongoing support.',
    textColor: 'text-green-600',
    gradient: 'from-green-600 to-teal-500',
    support: 'Deployment, testing, and ongoing support. Your project doesn\'t end at launch.',
    items: ['React/Next.js for frontend', 'Node.js for backend', 'PostgreSQL for database'],
  },
] as const;
