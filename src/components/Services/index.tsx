'use client';

import React from 'react';
import { ServicesBackground } from './ServicesBackground';
import { ServicesHeader } from './ServicesHeader';
import { ServicesList } from './ServicesList';
import { CTASection } from './CTASection';

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 bg-zinc-900 relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      <h2 id="services-heading" className="sr-only">Seção de Serviços</h2>
      <ServicesBackground />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ServicesHeader />
          <ServicesList />
          <CTASection />
        </div>
      </div>
    </section>
  );
};

export default Services;
