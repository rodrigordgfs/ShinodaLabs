'use client';

import React from 'react';
import { Code, Zap, Target, Users, Cpu, Rocket } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Clean Code',
      description: 'Código limpo, legível e bem documentado'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance',
      description: 'Aplicações rápidas e otimizadas'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Foco no UX',
      description: 'Experiência do usuário em primeiro lugar'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Colaboração',
      description: 'Trabalho em equipe e comunicação efetiva'
    }
  ];

  return (
    <section id="about" className="py-24 bg-zinc-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-lime-500/10 to-teal-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-teal-400 via-lime-500 to-emerald-500 bg-clip-text text-transparent">
                Sobre Mim
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-emerald-500 mx-auto mb-8 rounded-full shadow-lg shadow-teal-400/50"></div>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
              Desenvolvedor apaixonado por criar <span className="text-teal-400">experiências digitais excepcionais</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative group">
              <div className="relative z-10 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-xl rounded-3xl p-8 border border-teal-500/20 hover:border-teal-400/40 transition-all duration-500">
                <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-3xl flex items-center justify-center text-4xl font-bold border border-teal-500/30 relative overflow-hidden">
                  <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">DEV</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Cpu className="absolute top-2 right-2 w-6 h-6 text-teal-400/50 animate-pulse" />
                  <Rocket className="absolute bottom-2 left-2 w-5 h-5 text-lime-400/50 animate-bounce" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            </div>

            <div>
              <h3 className="text-center sm:text-left text-4xl font-bold mb-6">
                <span className="text-white">Desenvolvedor </span>
                <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">Full Stack</span>
                <span className="text-white"> Apaixonado por Tecnologia</span>
              </h3>
              <p className="text-center sm:text-left text-zinc-400 mb-6 leading-relaxed text-lg">
                Com mais de <span className="text-teal-400 font-semibold">5 anos de experiência</span> no desenvolvimento web, especializo-me em criar 
                soluções digitais modernas e eficientes. Minha paixão é transformar ideias complexas 
                em interfaces <span className="text-lime-400 font-semibold">intuitivas e funcionais</span>.
              </p>
              <p className="text-center sm:text-left text-zinc-400 mb-8 leading-relaxed text-lg">
                Trabalho principalmente com <span className="text-lime-400 font-semibold">React, Vue.js, Next.js e Nuxt.js</span>, sempre buscando 
                as melhores práticas e as tecnologias mais atuais do mercado.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {['React', 'Vue.js', 'Next.js', 'Nuxt.js', 'TypeScript', 'Node.js'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 border border-teal-500/20 rounded-xl text-teal-300 text-sm hover:bg-gradient-to-r hover:from-teal-500/10 hover:to-emerald-500/10 hover:border-teal-400/40 hover:text-teal-200 transition-all duration-300 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group relative p-6 bg-gradient-to-br from-zinc-800/30 to-zinc-900/30 backdrop-blur-xl rounded-3xl border border-zinc-700/50 hover:border-teal-500/40 transition-all duration-500 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex flex-col items-center sm:items-start relative z-10">
                  <div className="text-teal-400 mb-4 group-hover:scale-110 group-hover:text-teal-300 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-semibold mb-2 text-lg group-hover:text-teal-100 transition-colors duration-300">{item.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">{item.description}</p>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;