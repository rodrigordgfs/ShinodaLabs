import { ChevronDown } from "lucide-react";

export const HeroScrollDown = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      aria-label="Navegar para a seção Sobre"
      onClick={scrollToAbout}
      className="cursor-pointer group relative animate-bounce p-4 rounded-full bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-500/20 hover:from-teal-500/20 hover:to-emerald-500/20 hover:border-teal-400/50 transition-all duration-300 backdrop-blur-xl"
    >
      <ChevronDown
        className="w-6 h-6 text-teal-400 group-hover:text-teal-300"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"
        aria-hidden="true"
      />
    </button>
  );
};
