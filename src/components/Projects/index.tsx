"use client";

import React from "react";
import { ExternalLink, Github, Star, Zap, Code, Sparkles } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos e gestão de estoque.",
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
        "Aplicativo de gerenciamento de tarefas com interface intuitiva e sincronização em tempo real.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Vue.js", "Firebase", "Vuetify"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "Frontend",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Dashboard analítico para redes sociais com visualização de dados em tempo real e relatórios.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "D3.js", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "Data Viz",
    },
    {
      title: "Portfolio Website",
      description:
        "Site portfólio responsivo com animações suaves e design moderno para um cliente.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Nuxt.js", "GSAP", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      category: "Design",
    },
    {
      title: "Crypto Tracker",
      description:
        "Aplicação para rastreamento de criptomoedas com gráficos interativos e alertas de preço.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Chart.js", "CoinGecko API"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      category: "API",
    },
    {
      title: "Learning Platform",
      description:
        "Plataforma de ensino online com sistema de cursos, quizzes e acompanhamento de progresso.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Vue.js", "Laravel", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "EdTech",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-zinc-950 relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      <h2 id="projects-heading" className="sr-only">
        Seção de Projetos
      </h2>

      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-teal-500/10 to-lime-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-r from-lime-500/10 to-teal-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-0 right-1/3 w-72 h-72 bg-gradient-to-r from-lime-500/5 to-lime-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <header className="max-w-6xl mx-auto text-center mb-14">
          <h3 className="text-5xl md:text-6xl font-bold mb-6 text-gradient bg-gradient-to-r from-teal-400 via-emerald-500 to-lime-500 bg-clip-text text-transparent">
            Meus Projetos
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-lime-500 mx-auto mb-8 rounded-full shadow-lg shadow-teal-400/50" aria-hidden="true"></div>
          <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
            Uma seleção dos meus projetos mais recentes, desde <span className="text-teal-400">aplicações web complexas</span> até <span className="text-lime-400">soluções criativas</span>.
          </p>
        </header>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4" aria-label="Lista de projetos">
          {projects.map((project, index) => (
            <li
              key={index}
              className={`group relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 backdrop-blur-xl rounded-3xl overflow-hidden border border-zinc-700/50 hover:border-teal-500/40 transition-all duration-500 hover:scale-105 ${
                project.featured ? "lg:col-span-2" : ""
              }`}
              aria-label={`Projeto ${project.title}`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 px-4 py-2 bg-gradient-to-r from-teal-500 to-lime-600 text-white rounded-full text-xs font-semibold flex items-center gap-2 shadow-lg shadow-teal-500/25">
                  <Star className="w-3 h-3" aria-hidden="true" />
                  Destaque
                  <Sparkles className="w-3 h-3 animate-pulse" aria-hidden="true" />
                </div>
              )}
              <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-zinc-900/80 backdrop-blur-sm border border-teal-500/30 rounded-full text-teal-400 text-xs font-medium">
                {project.category}
              </div>

              <figure className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Screenshot do projeto ${project.title}`}
                  width={800}
                  height={600}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <figcaption className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></figcaption>

                <div className="absolute bottom-2 left-4 right-4 flex justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <a
                    aria-label={`Acessar ${project.title}`}
                    href={project.liveUrl}
                    className="p-3 bg-gradient-to-r from-teal-500/20 to-lime-500/20 backdrop-blur-xl rounded-2xl border border-teal-500/30 hover:from-teal-500/30 hover:to-lime-500/30 hover:border-teal-400/50 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 text-teal-400 hover:text-teal-300" aria-hidden="true" />
                  </a>
                  <a
                    aria-label={`Ver código no GitHub de ${project.title}`}
                    href={project.githubUrl}
                    className="p-3 bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 backdrop-blur-xl rounded-2xl border border-zinc-600/30 hover:from-zinc-700/50 hover:to-zinc-800/50 hover:border-zinc-500/50 transition-all duration-300"
                  >
                    <Github className="w-4 h-4 text-zinc-400 hover:text-white" aria-hidden="true" />
                  </a>
                </div>
              </figure>

              <div className="p-6 relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" aria-hidden="true"></div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-teal-100 transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-zinc-400 mb-4 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 border border-zinc-700/50 rounded-lg text-xs text-zinc-300 hover:from-teal-500/10 hover:to-lime-500/10 hover:border-teal-500/30 hover:text-teal-300 transition-all duration-300 backdrop-blur-sm"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="absolute bottom-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <Code className="w-4 h-4 text-teal-400" aria-hidden="true" />
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-lime-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true"></div>
            </li>
          ))}
        </ul>

        <div className="text-center mt-16">
          <button
            aria-label="Ver todos os projetos"
            className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-lime-600 text-white rounded-2xl font-semibold hover:from-teal-400 hover:to-lime-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/25 overflow-hidden"
          >
            <span className="relative flex items-center gap-2">
              Ver Todos os Projetos
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
              <Zap className="w-4 h-4 animate-pulse" aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;