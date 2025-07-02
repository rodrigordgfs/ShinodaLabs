import React from "react";
import { Star, Github, Linkedin, Instagram, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const SocialConnect = () => {
  return (
    <section aria-labelledby="social-heading">
      <h4
        id="social-heading"
        className="text-white font-semibold mb-6 flex items-center gap-2"
      >
        <Star className="w-4 h-4 text-teal-400" aria-hidden="true" />
        Conecte-se
      </h4>
      <div className="flex gap-3 mb-6">
        {socialLinks.map(({ icon: Icon, href, label }, index) => (
          <a
            aria-label={`Acessar ${label}`}
            key={index}
            href={href}
            className="group relative p-3 bg-zinc-900/50 border border-zinc-800/50 rounded-xl hover:bg-gradient-to-r hover:from-teal-500/10 hover:to-emerald-500/10 hover:border-teal-500/30 transition-all duration-300 hover:scale-110"
            title={label}
          >
            <Icon
              className="w-4 h-4 text-zinc-400 group-hover:text-teal-400 transition-colors duration-300"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"
              aria-hidden="true"
            ></div>
          </a>
        ))}
      </div>
      <div className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
        <div className="flex items-center gap-2 mb-2">
          <div
            className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
            aria-hidden="true"
          ></div>
          <span className="text-green-400 text-sm font-semibold">
            Disponível
          </span>
        </div>
        <p className="text-zinc-400 text-xs">Aceitando novos projetos</p>
      </div>
    </section>
  );
};

export default SocialConnect;
