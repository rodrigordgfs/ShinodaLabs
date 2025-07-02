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
  LucideIcon,
} from "lucide-react";
import { ContactInfo } from "./ContactInfo";
import { Availability } from "./Availability";
import { SocialLinks } from "./SocialLinks";
import { CallToAction } from "./CallToAction";

export type Contact = {
  icon: LucideIcon;
  label: string;
  value: string;
  color: string;
};

export type SocialLink = {
  icon: LucideIcon;
  label: string;
  username: string;
  color: string;
  hoverColor: string;
  url: string;
};

export const Contact = () => {
  const contactInfo: Contact[] = [
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

  const socialLinks: SocialLink[] = [
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
            <ContactInfo contacts={contactInfo} />
            <Availability />
          </div>

          <SocialLinks links={socialLinks} />

          <CallToAction />
        </div>
      </div>
    </section>
  );
};

export default Contact;
