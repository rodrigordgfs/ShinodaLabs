import { ExternalLink, Github, Star, Sparkles, Code } from 'lucide-react';
import Image from 'next/image';

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  category: string;
};

export const ProjectCard = ({
  title,
  description,
  image,
  tech,
  liveUrl,
  githubUrl,
  featured,
  category,
}: Project) => {
  return (
    <li
      className={`group relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 backdrop-blur-xl rounded-3xl overflow-hidden border border-zinc-700/50 hover:border-teal-500/40 transition-all duration-500 hover:scale-105 ${
        featured ? 'lg:col-span-2' : ''
      }`}
      aria-label={`Projeto ${title}`}
    >
      {featured && (
        <div className="absolute top-4 right-4 z-20 px-4 py-2 bg-gradient-to-r from-teal-500 to-lime-600 text-white rounded-full text-xs font-semibold flex items-center gap-2 shadow-lg shadow-teal-500/25">
          <Star className="w-3 h-3" aria-hidden="true" />
          Destaque
          <Sparkles className="w-3 h-3 animate-pulse" aria-hidden="true" />
        </div>
      )}
      <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-zinc-900/80 backdrop-blur-sm border border-teal-500/30 rounded-full text-teal-400 text-xs font-medium">
        {category}
      </div>

      <figure className="relative overflow-hidden">
        <Image
          src={image}
          alt={`Screenshot do projeto ${title}`}
          width={800}
          height={600}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <figcaption className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></figcaption>

        <div className="absolute bottom-2 left-4 right-4 flex justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <a
            aria-label={`Acessar ${title}`}
            href={liveUrl}
            className="p-3 bg-gradient-to-r from-teal-500/20 to-lime-500/20 backdrop-blur-xl rounded-2xl border border-teal-500/30 hover:from-teal-500/30 hover:to-lime-500/30 hover:border-teal-400/50"
          >
            <ExternalLink className="w-4 h-4 text-teal-400 hover:text-teal-300" />
          </a>
          <a
            aria-label={`Ver código no GitHub de ${title}`}
            href={githubUrl}
            className="p-3 bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 backdrop-blur-xl rounded-2xl border border-zinc-600/30 hover:border-zinc-500/50"
          >
            <Github className="w-4 h-4 text-zinc-400 hover:text-white" />
          </a>
        </div>
      </figure>

      <div className="p-6 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-teal-100 transition-colors duration-300">
          {title}
        </h4>
        <p className="text-zinc-400 mb-4 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
          {description}
        </p>

        <ul className="flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
          {tech.map((t) => (
            <li
              key={t}
              className="px-3 py-1 bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 border border-zinc-700/50 rounded-lg text-xs text-zinc-300 hover:from-teal-500/10 hover:to-lime-500/10 hover:border-teal-500/30 hover:text-teal-300 transition-all duration-300 backdrop-blur-sm"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="absolute bottom-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
          <Code className="w-4 h-4 text-teal-400" />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-lime-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </li>
  );
};
