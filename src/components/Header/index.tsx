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
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white relative">
            <span className="text-emerald-400 animate-pulse">&lt;</span>
            <span className="bg-gradient-to-r from-lime-400 to-emerald-500 bg-clip-text text-transparent">
              ShinodaLabs
            </span>
            <span className="text-emerald-400 animate-pulse">/&gt;</span>
            <div className="absolute -inset-1 bg-gradient-to-r from-lime-500/20 to-emerald-500/20 rounded-lg blur opacity-30"></div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`cursor-pointer relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                  activeSection === item.id
                    ? "text-emerald-400"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-lime-400 to-emerald-500 rounded-full shadow-lg shadow-emerald-400/50"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-lime-500/10 to-emerald-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="cursor-pointer md:hidden text-zinc-400 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-emerald-500/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-zinc-900/95 rounded-2xl backdrop-blur-2xl border border-emerald-500/20 shadow-2xl shadow-emerald-500/10">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-6 py-3 text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-emerald-400 bg-emerald-500/10 border-l-2 border-emerald-400"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                }`}
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
