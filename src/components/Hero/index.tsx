"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, ArrowRight, Zap } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const texts = React.useMemo(
    () => [
      "Desenvolvedor Full Stack",
      "Especialista em React & Vue",
      "Criador de Soluções Web",
      "Arquiteto de Experiências",
    ],
    []
  );

  useEffect(() => {
    const currentText = texts[currentIndex];

    if (displayText.length < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [displayText, currentIndex, texts]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-zinc-950"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(124, 206, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(70, 236, 213, 0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-teal-500/30 to-emerald-500/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-r from-emerald-500/20 to-yellow-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-72 sm:h-72 bg-gradient-to-r from-yellow-500/10 to-teal-500/10 rounded-full filter blur-3xl animate-pulse delay-2000"></div>

        {/* Scanning Lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm mb-8 backdrop-blur-xl shadow-lg shadow-teal-500/10">
            <Zap className="w-4 h-4 animate-pulse" />
            Disponível para novos projetos
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-ping"></div>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 leading-snug">
            <span className="text-white">Olá, eu sou o</span>
            <br />
            <span className="bg-gradient-to-r from-teal-400 via-emerald-500 to-lime-500 bg-clip-text text-transparent animate-pulse">
              ShinodaLabs
            </span>
          </h1>

          <div className="h-6 flex items-center justify-center">
            <h2 className="text-lg sm:text-2xl text-zinc-300 font-light">
              <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
                {displayText}
              </span>
              <span
                className={`inline-block w-1 h-8 bg-gradient-to-b from-teal-400 to-emerald-500 ml-2 ${
                  showCursor ? "opacity-100" : "opacity-0"
                }`}
              ></span>
            </h2>
          </div>
        </div>

        <p className="text-base sm:text-lg text-zinc-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
          Transformo ideias em{" "}
          <span className="text-teal-400 font-semibold">
            experiências digitais excepcionais
          </span>{" "}
          usando as tecnologias mais modernas. Especializado em React, Vue,
          Next.js e Nuxt.js com foco em{" "}
          <span className="text-emerald-400 font-semibold">inovação</span> e{" "}
          <span className="text-lime-400 font-semibold">performance</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 sm:mb-16">
          <button
            onClick={() => scrollToSection("projects")}
            className="flex items-center justify-center w-full sm:w-auto text-sm sm:text-base px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-2xl font-semibold hover:from-teal-400 hover:to-emerald-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/25 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center gap-2">
              Ver Projetos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>

          <button className="w-full sm:w-auto text-sm sm:text-base px-6 py-3 border-2 border-teal-500/50 text-white rounded-2xl font-semibold hover:bg-teal-500/10 hover:border-teal-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative">Download CV</span>
          </button>
        </div>

        <button
          onClick={scrollToAbout}
          className="cursor-pointer group relative animate-bounce p-4 rounded-full bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-500/20 hover:from-teal-500/20 hover:to-emerald-500/20 hover:border-teal-400/50 transition-all duration-300 backdrop-blur-xl"
        >
          <ChevronDown className="w-6 h-6 text-teal-400 group-hover:text-teal-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
