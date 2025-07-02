import { ExternalLink, Zap } from 'lucide-react';

export const ViewAllButton = () => (
  <button
    aria-label="Ver todos os projetos"
    className="cursor-pointer group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-lime-600 text-white rounded-2xl font-semibold hover:from-teal-400 hover:to-lime-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/25 overflow-hidden"
  >
    <span className="relative flex items-center gap-2">
      Ver Todos os Projetos
      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      <Zap className="w-4 h-4 animate-pulse" />
    </span>
  </button>
);
