import { Zap, Rocket } from 'lucide-react';

export const CTASection = () => (
  <div className="text-center">
    <div className="relative group inline-block">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-lime-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" aria-hidden="true" />
      <div className="relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 backdrop-blur-xl rounded-3xl p-8 border border-zinc-700/50 hover:border-teal-500/40 transition-all duration-500">
        <h5 className="text-2xl font-bold text-white mb-4">
          Pronto para começar seu projeto?
        </h5>
        <p className="text-zinc-400 mb-6 max-w-md mx-auto">
          Vamos conversar sobre como posso ajudar a transformar sua ideia em uma solução digital incrível.
        </p>
        <button
          aria-label="Iniciar conversa sobre projeto"
          className="group/btn relative px-8 py-4 bg-gradient-to-r from-teal-500 to-lime-600 text-white rounded-2xl font-semibold hover:from-teal-400 hover:to-lime-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/25 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-lime-500/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" aria-hidden="true" />
          <span className="relative flex items-center gap-2">
            Vamos Conversar
            <Rocket className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" aria-hidden="true" />
            <Zap className="w-4 h-4 animate-pulse" aria-hidden="true" />
          </span>
        </button>
      </div>
    </div>
  </div>
);
