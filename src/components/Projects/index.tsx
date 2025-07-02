'use client';

import React from 'react';
import { ProjectsBackground } from './ProjectsBackground';
import { ProjectsHeader } from './ProjectsHeader';
import { ProjectsList } from './ProjectsList';
import { ViewAllButton } from './ViewAllButton';

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-zinc-950 relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      <h2 id="projects-heading" className="sr-only">Seção de Projetos</h2>
      <ProjectsBackground />
      <div className="container mx-auto px-6 relative z-10">
        <ProjectsHeader />
        <ProjectsList />
        <div className="text-center mt-16">
          <ViewAllButton />
        </div>
      </div>
    </section>
  );
};

export default Projects;