import React from 'react';

export const ServicesHeader = () => (
  <header
    className="text-center mb-20"
    aria-labelledby="services-title"
    data-testid="services-header"
  >
    <h3
      id="services-title"
      className="text-5xl md:text-6xl font-bold mb-6 text-gradient bg-gradient-to-r from-teal-400 via-lime-500 to-emerald-500 bg-clip-text text-transparent"
    >
      Serviços
    </h3>
    <div
      className="w-24 h-1 bg-gradient-to-r from-teal-400 to-lime-500 mx-auto mb-8 rounded-full shadow-lg shadow-teal-400/50"
      aria-hidden="true"
    />
    <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
      Soluções completas para transformar suas{' '}
      <span className="text-teal-400">ideias em realidade digital</span>.
    </p>
  </header>
);
