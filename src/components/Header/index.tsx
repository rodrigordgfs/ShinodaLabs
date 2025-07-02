"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      const sections = ["home", "about", "projects", "services", "contact"];
      const scrollPos = scrollPosition + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { id: "home", label: "Início" },
    { id: "about", label: "Sobre" },
    { id: "projects", label: "Projetos" },
    { id: "services", label: "Serviços" },
    { id: "contact", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-zinc-950/80 backdrop-blur-2xl border-b border-emerald-500/20 shadow-lg shadow-emerald-500/10"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav
        className="container mx-auto px-6 py-4"
        aria-label="Menu de navegação principal"
      >
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold text-white relative focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            aria-label="Ir para a seção Início"
          >
            <span className="text-emerald-400 animate-pulse">&lt;</span>
            <span className="bg-gradient-to-r from-lime-400 to-emerald-500 bg-clip-text text-transparent">
              ShinodaLabs
            </span>
            <span className="text-emerald-400 animate-pulse">/&gt;</span>
            <span
              className="absolute -inset-1 bg-gradient-to-r from-lime-500/20 to-emerald-500/20 rounded-lg blur opacity-30"
              aria-hidden="true"
            ></span>
          </a>

          <div className="hidden md:flex items-center space-x-8" role="navigation">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  activeSection === item.id
                    ? "text-emerald-400"
                    : "text-zinc-400 hover:text-white"
                }`}
                aria-current={activeSection === item.id ? "page" : undefined}
                aria-label={`Navegar para a seção ${item.label}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-lime-400 to-emerald-500 rounded-full shadow-lg shadow-emerald-400/50"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-lime-500/10 to-emerald-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-zinc-400 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-emerald-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden mt-4 py-4 bg-zinc-900/95 rounded-2xl backdrop-blur-2xl border border-emerald-500/20 shadow-2xl shadow-emerald-500/10"
            role="menu"
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-6 py-3 text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  activeSection === item.id
                    ? "text-emerald-400 bg-emerald-500/10 border-l-2 border-emerald-400"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                }`}
                aria-current={activeSection === item.id ? "page" : undefined}
                aria-label={`Navegar para a seção ${item.label}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;