// About.tsx
"use client";

import { Code, Zap, Target, Users, Cpu, Rocket } from "lucide-react";
import { HighlightCard } from "./HighlightCard";
import { TechBadge } from "./TechBadge";
import { techIcons } from "@/utils/techIcons";

const highlights = [
  {
    icon: <Code className="w-6 h-6" aria-hidden="true" />,
    title: "Clean Code",
    description: "Código limpo, legível e bem documentado",
  },
  {
    icon: <Zap className="w-6 h-6" aria-hidden="true" />,
    title: "Performance",
    description: "Aplicações rápidas e otimizadas",
  },
  {
    icon: <Target className="w-6 h-6" aria-hidden="true" />,
    title: "Foco no UX",
    description: "Experiência do usuário em primeiro lugar",
  },
  {
    icon: <Users className="w-6 h-6" aria-hidden="true" />,
    title: "Colaboração",
    description: "Trabalho em equipe e comunicação efetiva",
  },
];

const About = () => (
  <section
    id="about"
    className="py-24 bg-zinc-900 relative overflow-hidden"
    aria-labelledby="about-heading"
  >
    <div className="absolute inset-0" aria-hidden="true">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-lime-500/10 to-teal-500/10 rounded-full filter blur-3xl" />
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-20">
          <h2
            id="about-heading"
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-teal-400 via-lime-500 to-emerald-500 bg-clip-text text-transparent">
              Sobre Mim
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-emerald-500 mx-auto mb-8 rounded-full shadow-lg shadow-teal-400/50" />
          <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
            Desenvolvedor apaixonado por criar{" "}
            <strong className="text-teal-400">
              experiências digitais excepcionais
            </strong>
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div
            className="relative group"
            role="img"
            aria-label="Representação visual do desenvolvedor"
          >
            <div className="relative z-10 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-xl rounded-3xl p-8 border border-teal-500/20 hover:border-teal-400/40 transition-all duration-500">
              <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-3xl flex items-center justify-center text-4xl font-bold border border-teal-500/30 relative overflow-hidden">
                <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
                  DEV
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Cpu
                  className="absolute top-2 right-2 w-6 h-6 text-teal-400/50 animate-pulse"
                  aria-hidden="true"
                />
                <Rocket
                  className="absolute bottom-2 left-2 w-5 h-5 text-lime-400/50 animate-bounce"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div
              className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"
              aria-hidden="true"
            />
          </div>

          <div>
            <h3 className="text-center sm:text-left text-4xl font-bold mb-6">
              <span className="text-white">Desenvolvedor </span>
              <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
                Full Stack
              </span>
              <span className="text-white"> Apaixonado por Tecnologia</span>
            </h3>
            <p className="text-center sm:text-left text-zinc-400 mb-6 leading-relaxed text-lg">
              Com mais de{" "}
              <strong className="text-teal-400 font-semibold">
                5 anos de experiência
              </strong>{" "}
              no desenvolvimento web, especializo-me em criar soluções digitais
              modernas e eficientes. Minha paixão é transformar ideias complexas
              em interfaces{" "}
              <strong className="text-lime-400 font-semibold">
                intuitivas e funcionais
              </strong>
              .
            </p>
            <p className="text-center sm:text-left text-zinc-400 mb-8 leading-relaxed text-lg">
              Trabalho principalmente com{" "}
              <strong className="text-lime-400 font-semibold">
                React, Vue.js, Next.js e Nuxt.js
              </strong>
              , sempre buscando as melhores práticas e as tecnologias mais
              atuais do mercado.
            </p>

            <ul
              className="flex flex-wrap gap-3"
              aria-label="Tecnologias utilizadas"
            >
              {Object.entries(techIcons).map(([tech, icon]) => (
                <TechBadge key={tech} tech={tech} icon={icon} />
              ))}
            </ul>
          </div>
        </div>

        <section aria-label="Destaques">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <HighlightCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  </section>
);

export default About;
