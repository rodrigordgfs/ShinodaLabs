import { Zap, Code } from 'lucide-react';
import React from 'react';

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  features: string[];
};

export const ServiceCard = ({ title, description, icon, color, features }: ServiceProps) => (
  <li
    className="group relative bg-gradient-to-br from-zinc-800/30 to-zinc-900/30 backdrop-blur-xl rounded-3xl p-8 border border-zinc-700/50 hover:border-teal-500/40 transition-all duration-500 hover:scale-105 overflow-hidden"
    aria-label={`Serviço de ${title}`}
  >
    <div
      className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-lime-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      aria-hidden="true"
    />
    <div className="relative z-10">
      <div className="flex flex-col items-center text-center mb-6">
        <div className={`p-4 bg-gradient-to-r ${color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 mb-4`}>
          <div className="text-white">{icon}</div>
        </div>
        <h4 className="text-2xl font-bold text-white group-hover:text-teal-100 transition-colors duration-300">
          {title}
        </h4>
      </div>
      <p className="text-zinc-400 mb-8 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300 text-center">
        {description}
      </p>
      <ul className="space-y-3" aria-label="Características do serviço">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center justify-center gap-3">
            <div className={`w-2 h-2 bg-gradient-to-r ${color} rounded-full shadow-lg`} aria-hidden="true" />
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
    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-teal-500/20 to-lime-500/20 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
  </li>
);
