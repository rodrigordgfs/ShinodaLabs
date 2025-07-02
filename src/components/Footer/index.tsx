'use client';

import React from 'react';
import {
  Heart,
  ArrowUp,
  Zap,
  Code,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Rocket,
  Star
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Serviços', href: '#services' },
    { label: 'Contato', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'shinodalabs@gmail.com' },
    { icon: Phone, text: '+55 (51) 99623-6798' },
    { icon: MapPin, text: 'Camaquã, RS, Brasil' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-zinc-950 relative overflow-hidden" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Rodapé</h2>

      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-500/5 to-emerald-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-lime-500/5 to-teal-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-emerald-500/3 to-lime-500/3 rounded-full filter blur-3xl"></div>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" aria-hidden="true"></div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <section aria-labelledby="brand-heading" className="lg:col-span-2">
              <h3 id="brand-heading" className="sr-only">Sobre o Desenvolvedor</h3>
              <div className="mb-8">
                <div className="text-3xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-teal-400 animate-pulse">&lt;</span>
                  <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">ShinodaLabs</span>
                  <span className="text-teal-400 animate-pulse">/&gt;</span>
                  <Code className="w-6 h-6 text-teal-400/50" aria-hidden="true" />
                </div>
                <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                  Desenvolvedor Full Stack especializado em criar <span className="text-teal-400">experiências digitais excepcionais</span> usando as tecnologias mais modernas do mercado.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-teal-400" aria-hidden="true" />
                  Contato Rápido
                </h4>
                <ul>
                  {contactInfo.map((contact, index) => (
                    <li key={index} className="cursor-pointer flex items-center gap-3 text-zinc-400 hover:text-teal-400 transition-colors duration-300 group">
                      <contact.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                      <span className="text-sm">{contact.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <nav aria-labelledby="nav-heading">
              <h4 id="nav-heading" className="text-white font-semibold mb-6 flex items-center gap-2">
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

            <section aria-labelledby="social-heading">
              <h4 id="social-heading" className="text-white font-semibold mb-6 flex items-center gap-2">
                <Star className="w-4 h-4 text-teal-400" aria-hidden="true" />
                Conecte-se
              </h4>
              <div className="flex gap-3 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    aria-label={`Acessar ${social.label}`}
                    key={index}
                    href={social.href}
                    className="group relative p-3 bg-zinc-900/50 border border-zinc-800/50 rounded-xl hover:bg-gradient-to-r hover:from-teal-500/10 hover:to-emerald-500/10 hover:border-teal-500/30 transition-all duration-300 hover:scale-110"
                    title={social.label}
                  >
                    <social.icon className="w-4 h-4 text-zinc-400 group-hover:text-teal-400 transition-colors duration-300" aria-hidden="true" />
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" aria-hidden="true"></div>
                  </a>
                ))}
              </div>
              <div className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></div>
                  <span className="text-green-400 text-sm font-semibold">Disponível</span>
                </div>
                <p className="text-zinc-400 text-xs">Aceitando novos projetos</p>
              </div>
            </section>
          </div>

          <div className="border-t border-zinc-800/50 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <p className="text-zinc-400 text-sm flex items-center gap-2">
                  © {new Date().getFullYear()} Dev Portfolio. Feito com <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" aria-hidden="true" /> por Rodrigo Shinoda
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-zinc-500 text-xs">
                  <Code className="w-3 h-3" aria-hidden="true" />
                  <span>NextJS + TypeScript + Tailwind</span>
                </div>
                <button
                  aria-label="Voltar ao topo"
                  onClick={scrollToTop}
                  className="cursor-pointer group relative p-3 bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 border border-zinc-700/50 rounded-xl hover:from-teal-500/10 hover:to-emerald-500/10 hover:border-teal-500/40 transition-all duration-300 hover:scale-110 backdrop-blur-sm overflow-hidden"
                  title="Voltar ao topo"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
                  <ArrowUp className="relative w-4 h-4 text-zinc-400 group-hover:text-teal-400 transition-colors duration-300" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" aria-hidden="true"></div>
          <div className="absolute top-4 right-4 opacity-20" aria-hidden="true">
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-teal-400 rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse delay-100"></div>
              <div className="w-1 h-1 bg-lime-400 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
