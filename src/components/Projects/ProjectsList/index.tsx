import React from 'react';
import { ProjectCard } from '../ProjectCard';
import { projects } from '@/utils/projects';

export const ProjectsList = () => {
  return (
    <ul
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
      aria-label="Lista de projetos"
    >
      {projects.map((project) => (
        <ProjectCard {...project} key={project.title} />
      ))}
    </ul>
  );
};
