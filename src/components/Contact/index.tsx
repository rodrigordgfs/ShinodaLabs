"use client";

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Youtube,
  Zap,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shinodalabs@gmail.com",
      color: "from-teal-500 to-emerald-500",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (51) 9623 - 6798",
      color: "from-emerald-500 to-lime-500",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Camaquã, RS, Brasil",
      color: "from-lime-500 to-teal-500",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "@rodrigordgfs",
      color: "from-zinc-700 to-zinc-800",
      hoverColor: "hover:from-zinc-600 hover:to-zinc-700",
      url: "#",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "/in/shinodalabs",
      color: "from-emerald-600 to-emerald-700",
      hoverColor: "hover:from-emerald-500 hover:to-emerald-600",
      url: "#",
    },
    {
      icon: Instagram,
      label: "Instagram",
      username: "@r_shinodaa",
      color: "from-pink-500 to-lime-600",
      hoverColor: "hover:from-pink-400 hover:to-lime-500",
      url: "#",
    },
    {
      icon: Youtube,
      label: "YouTube",
      username: "@shinodalabs",
      color: "from-red-500 to-red-600",
      hoverColor: "hover:from-red-400 hover:to-red-500",
      url: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-zinc-950 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-lime-500/10 to-teal-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-r from-emerald-500/5 to-lime-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-20">
            <h2
              id="contact-heading"
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-teal-400 via-emerald-500 to-lime-500 bg-clip-text text-transparent">
                Vamos Conversar
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-emerald-500 mx-auto mb-8 rounded-full shadow-lg shadow-teal-400/50"></div>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
              Entre em contato comigo através das{" "}
              <strong className="text-teal-400">redes sociais</strong> ou
              informações abaixo!
            </p>
          </header>

          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <section aria-labelledby="contact-info-heading">
              <h3 id="contact-info-heading" className="sr-only">
                Informações de Contato
              </h3>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div
                  className="relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 backdrop-blur-xl rounded-3xl p-8 border border-zinc-700/50 hover:border-teal-500/40 transition-all duration-500"
                  role="region"
                  aria-label="Informações de contato"
                >
                  <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-xl">
                      <MessageCircle
                        className="w-5 h-5 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    Informações de Contato
                  </h3>
                  <ul className="space-y-6">
                    {contactInfo.map((contact, index) => (
                      <li
                        key={index}
                        className="group/contact flex items-center gap-4 p-4 bg-zinc-800/30 rounded-2xl border border-zinc-700/50 hover:bg-zinc-800/50 hover:border-teal-500/30 transition-all duration-300"
                      >
                        <div
                          className={`p-3 bg-gradient-to-r ${contact.color} rounded-xl shadow-lg`}
                        >
                          <contact.icon
                            className="w-5 h-5 text-white"
                            aria-hidden="true"
                          />
                        </div>
                        <div>
                          <div className="text-zinc-400 text-sm group-hover/contact:text-zinc-300 transition-colors duration-300">
                            {contact.label}
                          </div>
                          <div className="text-white font-medium group-hover/contact:text-teal-100 transition-colors duration-300">
                            {contact.value}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section aria-labelledby="availability-heading">
              <h3 id="availability-heading" className="sr-only">Disponibilidade</h3>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-lime-500/20 to-teal-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 backdrop-blur-xl rounded-3xl p-8 border border-zinc-700/50 hover:border-teal-500/40 transition-all duration-500">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-lime-500 to-teal-500 rounded-xl">
                      <Zap className="w-5 h-5 text-white" aria-hidden="true" />
                    </div>
                    Disponibilidade
                  </h3>

                  <div className="space-y-6">
                    <div className="p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></div>
                        <span className="text-green-400 font-semibold">
                          Disponível para novos projetos
                        </span>
                      </div>
                      <p className="text-zinc-300 text-sm">
                        Atualmente aceitando novos clientes e projetos freelance.
                      </p>
                    </div>

                    <div className="p-6 bg-zinc-800/30 border border-zinc-700/50 rounded-2xl">
                      <h4 className="text-white font-semibold mb-3">
                        Horário de Atendimento
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-zinc-400">Segunda - Sexta</span>
                          <span className="text-teal-400">9h - 18h</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-400">Sábado</span>
                          <span className="text-teal-400">9h - 14h</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-400">Domingo</span>
                          <span className="text-zinc-500">Fechado</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-500/20 rounded-2xl">
                      <h4 className="text-white font-semibold mb-3">
                        Tempo de Resposta
                      </h4>
                      <p className="text-zinc-300 text-sm">
                        Respondo todas as mensagens em até{' '}
                        <span className="text-teal-400 font-semibold">24 horas</span>{' '}
                        durante dias úateis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section aria-labelledby="social-media-heading">
            <h3 id="social-media-heading" className="sr-only">
              Redes Sociais
            </h3>
            <div className="relative group mb-16">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-lime-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div
                className="relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 backdrop-blur-xl rounded-3xl p-8 border border-zinc-700/50 hover:border-teal-500/40 transition-all duration-500"
                role="region"
                aria-label="Redes Sociais"
              >
                <h3 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-lime-500 to-teal-500 rounded-xl">
                    <Zap className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  Redes Sociais
                </h3>
                <nav aria-label="Links sociais">
                  <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {socialLinks.map((social, index) => (
                      <li key={index}>
                        <a
                          href={social.url}
                          className={`group/social relative block p-6 bg-gradient-to-r ${social.color} rounded-2xl ${social.hoverColor} transition-all duration-300 text-center hover:scale-105 hover:shadow-xl overflow-hidden`}
                          aria-label={`${social.label}: ${social.username}`}
                        >
                          <social.icon
                            className="w-8 h-8 text-white mx-auto mb-3 group-hover/social:scale-110 transition-transform duration-300"
                            aria-hidden="true"
                          />
                          <div className="text-sm text-white font-semibold mb-1">
                            {social.label}
                          </div>
                          <div className="text-xs text-white/80 group-hover/social:text-white transition-colors duration-300">
                            {social.username}
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </section>

          <footer className="text-center" aria-labelledby="cta-heading">
            <h3 id="cta-heading" className="sr-only">
              Chamada para Ação
            </h3>
            <div className="relative group inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 backdrop-blur-xl rounded-3xl p-8 border border-zinc-700/50 hover:border-teal-500/40 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Pronto para começar um projeto?
                </h3>
                <p className="text-zinc-400 mb-6 max-w-md mx-auto">
                  Entre em contato através do seu canal preferido e vamos
                  transformar sua ideia em realidade!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:shinodalabs@gmail.com"
                    className="group/btn relative px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-2xl font-semibold hover:from-teal-400 hover:to-emerald-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/25 overflow-hidden"
                    aria-label="Enviar email para shinodalabs@gmail.com"
                  >
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    <span className="relative ml-2">Enviar Email</span>
                  </a>
                  <a
                    href="tel:+5551996236798"
                    className="group/btn relative px-8 py-4 border-2 border-teal-500/50 text-white rounded-2xl font-semibold hover:bg-teal-500/10 hover:border-teal-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20 overflow-hidden"
                    aria-label="Ligar para +55 (51) 9623 - 6798"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    <span className="relative ml-2">Ligar Agora</span>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Contact;
