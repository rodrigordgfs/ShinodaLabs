export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  category: string;
}

export const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description:
      "Plataforma completa de e-commerce com painel administrativo...",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    tech: ["React", "Next.js", "Stripe", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "Full Stack",
  },
  {
    title: "Task Management App",
    description:
      "Aplicativo de gerenciamento de tarefas com interface intuitiva...",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    tech: ["Vue.js", "Firebase", "Vuetify"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Frontend",
  },
];
