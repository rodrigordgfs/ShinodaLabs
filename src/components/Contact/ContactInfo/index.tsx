import React from "react";
import { LucideIcon, MessageCircle } from "lucide-react";
import { ContactItem } from "../ContactItem";

export interface Contact {
  icon: LucideIcon // tipo do ícone
  label: string;
  value: string;
  color: string;
}

interface ContactProps {
  contacts: Contact[];
}

export const ContactInfo = ({ contacts }: ContactProps) => {
  return (
    <section aria-labelledby="contact-info-heading">
      <h3 id="contact-info-heading" className="sr-only">
        Informações de Contato
      </h3>
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
        <div
          className="relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 backdrop-blur-xl rounded-3xl p-8 border border-zinc-700/50 hover:border-teal-500/40 transition-all duration-500"
          role="region"
          aria-label="Informações de contato"
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-xl">
              <MessageCircle className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            Informações de Contato
          </h3>
          <ul className="space-y-6">
            {contacts.map((contact, index) => (
              <ContactItem
                key={index}
                icon={contact.icon}
                label={contact.label}
                value={contact.value}
                color={contact.color}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
