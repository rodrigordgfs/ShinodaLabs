import React from 'react';
import { Heart, Code, ArrowUp } from 'lucide-react';

const FooterBottom = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="border-t border-zinc-800/50 pt-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <p className="text-zinc-400 text-sm flex items-center gap-2">
            © {new Date().getFullYear()} Dev Portfolio. Feito com{' '}
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" aria-hidden="true" /> por Rodrigo Shinoda
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-zinc-500 text-xs">
            <Code className="w-3 h-3" aria-hidden="true" />
            <span>NextJS + TypeScript + Tailwind</span>
          </div>
          <button
            aria-label="Voltar ao topo"
            onClick={scrollToTop}
            className="cursor-pointer group relative p-3 bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 border border-zinc-700/50 rounded-xl hover:from-teal-500/10 hover:to-emerald-500/10 hover:border-teal-500/40 transition-all duration-300 hover:scale-110 backdrop-blur-sm overflow-hidden"
            title="Voltar ao topo"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
            <ArrowUp className="relative w-4 h-4 text-zinc-400 group-hover:text-teal-400 transition-colors duration-300" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
