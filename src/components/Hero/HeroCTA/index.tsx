import { ArrowRight } from "lucide-react";

export const HeroCTA = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 sm:mb-16">
      <button
        aria-label="Navegar para a seção Projetos"
        onClick={() => scrollToSection("projects")}
        className="cursor-pointer flex items-center justify-center w-full sm:w-auto text-sm sm:text-base px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-2xl font-semibold hover:from-teal-400 hover:to-emerald-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/25"
      >
        <span className="relative flex items-center gap-2">
          Ver Projetos
          <ArrowRight
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
            aria-hidden="true"
          />
        </span>
      </button>

      <button
        aria-label="Download do currículo"
        className="cursor-pointer w-full sm:w-auto text-sm sm:text-base px-6 py-3 border-2 border-teal-500/50 text-white rounded-2xl font-semibold hover:bg-teal-500/10 hover:border-teal-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20"
      >
        <span className="relative">Download CV</span>
      </button>
    </div>
  );
};
