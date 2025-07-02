import { Database, Globe, Monitor } from 'lucide-react';
import { ServiceCard } from '../ServiceCard';

export const services = [
  {
    title: 'Desenvolvimento Web',
    description:
      'Criação de sites e aplicações web modernas, responsivas e otimizadas para performance usando as tecnologias mais atuais.',
    icon: <Globe className="w-8 h-8" aria-hidden="true" />,
    color: 'from-teal-500 to-lime-500',
    features: [
      'React & Vue.js',
      'Next.js & Nuxt.js',
      'TypeScript',
      'Responsive Design',
      'Performance Optimization',
      'SEO Otimizado',
    ],
  },
  {
    title: 'Backend & APIs',
    description:
      'Desenvolvimento de APIs robustas, microserviços e arquiteturas escaláveis para suportar aplicações de qualquer tamanho.',
    icon: <Database className="w-8 h-8" aria-hidden="true" />,
    color: 'from-lime-500 to-emerald-500',
    features: [
      'Node.js & Express',
      'REST & GraphQL',
      'Microserviços',
      'Database Design',
      'Authentication',
      'Cloud Integration',
    ],
  },
  {
    title: 'UI/UX Design',
    description:
      'Design de interfaces modernas e experiências de usuário intuitivas que convertem visitantes em clientes satisfeitos.',
    icon: <Monitor className="w-8 h-8" aria-hidden="true" />,
    color: 'from-emerald-500 to-teal-500',
    features: [
      'Figma & Design Systems',
      'Prototyping',
      'User Research',
      'Wireframing',
      'Interaction Design',
      'Usability Testing',
    ],
  },
];

export const ServicesList = () => (
  <ul
    className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
    aria-label="Lista de serviços"
  >
    {services.map((service, index) => (
      <ServiceCard key={index} {...service} />
    ))}
  </ul>
);
