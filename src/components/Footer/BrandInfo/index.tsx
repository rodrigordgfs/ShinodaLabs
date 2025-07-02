import React from "react";
import { Code, Zap, Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  { icon: Mail, text: "shinodalabs@gmail.com" },
  { icon: Phone, text: "+55 (51) 99623-6798" },
  { icon: MapPin, text: "Camaquã, RS, Brasil" },
];

const BrandInfo = () => {
  return (
    <section aria-labelledby="brand-heading" className="lg:col-span-2">
      <h3 id="brand-heading" className="sr-only">
        Sobre o Desenvolvedor
      </h3>
      <div className="mb-8">
        <div className="text-3xl font-bold mb-4 flex items-center gap-3">
          <span className="text-teal-400 animate-pulse">&lt;</span>
          <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
            ShinodaLabs
          </span>
          <span className="text-teal-400 animate-pulse">/&gt;</span>
          <Code className="w-6 h-6 text-teal-400/50" aria-hidden="true" />
        </div>
        <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
          Desenvolvedor Full Stack especializado em criar{" "}
          <span className="text-teal-400">
            experiências digitais excepcionais
          </span>{" "}
          usando as tecnologias mais modernas do mercado.
        </p>
      </div>
      <div className="space-y-4">
        <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
          <Zap className="w-4 h-4 text-teal-400" aria-hidden="true" />
          Contato Rápido
        </h4>
        <ul>
          {contactInfo.map(({ icon: Icon, text }, index) => (
            <li
              key={index}
              className="cursor-pointer flex items-center gap-3 text-zinc-400 hover:text-teal-400 transition-colors duration-300 group"
            >
              <Icon
                className="w-4 h-4 group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              />
              <span className="text-sm">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BrandInfo;
