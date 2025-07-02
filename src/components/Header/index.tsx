"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import MenuButton from "./MenuButton";

const menuItems = [
  { id: "home", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "projects", label: "Projetos" },
  { id: "services", label: "Serviços" },
  { id: "contact", label: "Contato" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      const scrollPos = scrollPosition + 100;
      for (const section of menuItems) {
        const el = document.getElementById(section.id);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

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
          <Logo onClick={() => scrollToSection("home")} />

          <DesktopMenu
            menuItems={menuItems}
            activeSection={activeSection}
            onSelect={scrollToSection}
          />

          <MenuButton
            isOpen={isMenuOpen}
            onToggle={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>

        {isMenuOpen && (
          <MobileMenu
            menuItems={menuItems}
            activeSection={activeSection}
            onSelect={scrollToSection}
          />
        )}
      </nav>
    </header>
  );
};

export default Header;
