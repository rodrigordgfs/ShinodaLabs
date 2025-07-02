"use client";

import React from "react";
import { Globe, Database, Monitor, Zap, Code, Rocket } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Desenvolvimento Web",
      description:
        "Criação de sites e aplicações web modernas, responsivas e otimizadas para performance usando as tecnologias mais atuais.",
      icon: <Globe className="w-8 h-8" aria-hidden="true" />,
      color: "from-teal-500 to-lime-500",
      features: [
        "React & Vue.js",
        "Next.js & Nuxt.js",
        "TypeScript",
        "Responsive Design",
        "Performance Optimization",
        "SEO Otimizado",
      ],
    },
    {
      title: "Backend & APIs",
      description:
        "Desenvolvimento de APIs robustas, microserviços e arquiteturas escaláveis para suportar aplicações de qualquer tamanho.",
      icon: <Database className="w-8 h-8" aria-hidden="true" />,
      color: "from-lime-500 to-emerald-500",
      features: [
        "Node.js & Express",
        "REST & GraphQL",
        "Microserviços",
        "Database Design",
        "Authentication",
        "Cloud Integration",
      ],
    },
    {
      title: "UI/UX Design",
      description:
        "Design de interfaces modernas e experiências de usuário intuitivas que convertem visitantes em clientes satisfeitos.",
      icon: <Monitor className="w-8 h-8" aria-hidden="true" />,
      color: "from-emerald-500 to-teal-500",
      features: [
        "Figma & Design Systems",
        "Prototyping",
        "User Research",
        "Wireframing",
        "Interaction Design",
        "Usability Testing",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-zinc-900 relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      <h2 id="services-heading" className="sr-only">
        Seção de Serviços
      </h2>

      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-teal-500/10 to-lime-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-gradient-to-r from-lime-500/5 to-emerald-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-20">
            <h3 className="text-5xl md:text-6xl font-bold mb-6 text-gradient bg-gradient-to-r from-teal-400 via-lime-500 to-emerald-500 bg-clip-text text-transparent">
              Serviços
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-lime-500 mx-auto mb-8 rounded-full shadow-lg shadow-teal-400/50" aria-hidden="true"></div>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
              Soluções completas para transformar suas <span className="text-teal-400">ideias em realidade digital</span>.
            </p>
          </header>

          <ul className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-20" aria-label="Lista de serviços">
            {services.map((service, index) => (
              <li
                key={index}
                className="group relative bg-gradient-to-br from-zinc-800/30 to-zinc-900/30 backdrop-blur-xl rounded-3xl p-8 border border-zinc-700/50 hover:border-teal-500/40 transition-all duration-500 hover:scale-105 overflow-hidden"
                aria-label={`Serviço de ${service.title}`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-lime-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>

                <div className="relative z-10">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div
                      className={`p-4 bg-gradient-to-r ${service.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 mb-4`}
                    >
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <h4 className="text-2xl font-bold text-white group-hover:text-teal-100 transition-colors duration-300">
                      {service.title}
                    </h4>
                  </div>

                  <p className="text-zinc-400 mb-8 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300 text-center">
                    {service.description}
                  </p>

                  <ul className="space-y-3" aria-label="Características do serviço">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center justify-center gap-3"
                      >
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full shadow-lg flex-shrink-0`}
                          aria-hidden="true"
                        ></div>
                        <span className="text-zinc-300 text-sm group-hover:text-zinc-200 transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity duration-300" aria-hidden="true">
                  <Code className="w-6 h-6 text-teal-400" />
                </div>
                <div className="absolute bottom-4 left-4 opacity-10 group-hover:opacity-30 transition-opacity duration-300" aria-hidden="true">
                  <Zap className="w-4 h-4 text-lime-400" />
                </div>

                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-teal-500/20 to-lime-500/20 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>
              </li>
            ))}
          </ul>

          <div className="text-center">
            <div className="relative group inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-lime-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" aria-hidden="true"></div>
              <div className="relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 backdrop-blur-xl rounded-3xl p-8 border border-zinc-700/50 hover:border-teal-500/40 transition-all duration-500">
                <h5 className="text-2xl font-bold text-white mb-4">
                  Pronto para começar seu projeto?
                </h5>
                <p className="text-zinc-400 mb-6 max-w-md mx-auto">
                  Vamos conversar sobre como posso ajudar a transformar sua ideia em uma solução digital incrível.
                </p>
                <button
                  aria-label="Iniciar conversa sobre projeto"
                  className="group/btn relative px-8 py-4 bg-gradient-to-r from-teal-500 to-lime-600 text-white rounded-2xl font-semibold hover:from-teal-400 hover:to-lime-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/25 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-lime-500/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
                  <span className="relative flex items-center gap-2">
                    Vamos Conversar
                    <Rocket className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                    <Zap className="w-4 h-4 animate-pulse" aria-hidden="true" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
