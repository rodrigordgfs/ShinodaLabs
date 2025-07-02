import React from "react";
import { Rocket } from "lucide-react";

const quickLinks = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Projetos", href: "#projects" },
  { label: "Serviços", href: "#services" },
  { label: "Contato", href: "#contact" },
];

const Navigation = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav aria-labelledby="nav-heading">
      <h4
        id="nav-heading"
        className="text-white font-semibold mb-6 flex items-center gap-2"
      >
        <Rocket className="w-4 h-4 text-teal-400" aria-hidden="true" />
        Navegação
      </h4>
      <ul className="space-y-3">
        {quickLinks.map((link, index) => (
          <li key={index}>
            <button
              aria-label={`Navegar para ${link.label}`}
              onClick={() => scrollToSection(link.href)}
              className="cursor-pointer text-zinc-400 hover:text-teal-400 transition-all duration-300 text-sm hover:translate-x-1 block"
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
