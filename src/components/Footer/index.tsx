'use client';

import React from 'react';
import BrandInfo from './BrandInfo';
import Navigation from './Navigation';
import SocialConnect from './SocialConnect';
import FooterBottom from './FooterBottom';

const Footer = () => {
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
            <BrandInfo />
            <Navigation />
            <SocialConnect />
          </div>
          <FooterBottom />
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
    </footer>
  );
};

export default Footer;