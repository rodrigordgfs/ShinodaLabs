'use client';

import React from 'react';
import { HeroBackground } from './HeroBackground';
import { HeroIntro } from './HeroIntro';
import { HeroCTA } from './HeroCTA';
import { HeroScrollDown } from './HeroScrollDown';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-zinc-950"
      aria-labelledby="hero-heading"
      role="region"
    >
      <h1 id="hero-heading" className="sr-only">Hero - Introdução e chamada para ação</h1>
      <HeroBackground />

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <HeroIntro />
        <HeroCTA />
        <HeroScrollDown />
      </div>
    </section>
  );
};

export default Hero;
