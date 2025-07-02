import React from "react";

interface LogoProps {
  onClick: () => void;
}

const Logo = ({ onClick }: LogoProps) => (
  <a
    href="#home"
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
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
    />
  </a>
);

export default Logo;
