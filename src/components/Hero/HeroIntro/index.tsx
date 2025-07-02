import { Zap } from "lucide-react";
import { TypingText } from "../TypingText";

export const HeroIntro = () => (
  <div className="mb-8">
    <div
      className="hidden sm:inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm mb-8 backdrop-blur-xl shadow-lg shadow-teal-500/10"
      role="status"
      aria-label="Disponível para novos projetos"
    >
      <Zap className="w-4 h-4 animate-pulse" aria-hidden="true" />
      Disponível para novos projetos
      <div
        className="w-2 h-2 bg-teal-400 rounded-full animate-ping"
        aria-hidden="true"
      />
    </div>

    <h2 className="text-5xl sm:text-6xl font-bold leading-snug text-white">
      <span className="bg-gradient-to-r from-teal-400 via-emerald-500 to-lime-500 bg-clip-text text-transparent animate-pulse">
        ShinodaLabs
      </span>
    </h2>

    <TypingText />

    <p className="text-base sm:text-lg text-zinc-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
      Transformo ideias em
      <strong className="text-teal-400 font-semibold">
        {" "}
        experiências digitais excepcionais{" "}
      </strong>
      usando as tecnologias mais modernas. Especializado em React, Vue, Next.js
      e Nuxt.js com foco em
      <strong className="text-emerald-400 font-semibold"> inovação </strong>e
      <strong className="text-lime-400 font-semibold"> performance</strong>.
    </p>
  </div>
);
