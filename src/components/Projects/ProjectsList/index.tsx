import React from 'react';
import { ProjectCard } from '../ProjectCard';

export const projects = [
  {
    title: "E-commerce Platform",
    description: "Plataforma completa de e-commerce com painel administrativo...",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    tech: ["React", "Next.js", "Stripe", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "Full Stack",
  },
  {
    title: "Task Management App",
    description: "Aplicativo de gerenciamento de tarefas com interface intuitiva...",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    tech: ["Vue.js", "Firebase", "Vuetify"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Frontend",
  },
  // ... demais projetos
];

export const ProjectsList = () => {
  return (
    <ul
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4"
      aria-label="Lista de projetos"
    >
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </ul>
  );
};
