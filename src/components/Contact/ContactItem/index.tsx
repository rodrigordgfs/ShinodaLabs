import React from "react";
import type { LucideIcon } from "lucide-react";

interface ContactItemProps {
  icon: LucideIcon;
  label: string;
  value: string;
  color: string;
}

export const ContactItem: React.FC<ContactItemProps> = ({ icon: Icon, label, value, color }) => {
  // Mapear label para testId com letras minúsculas e sem acento
  const testId = `icon-${label.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`;

  return (
    <li className="group/contact flex items-center gap-4 p-4 bg-zinc-800/30 rounded-2xl border border-zinc-700/50 hover:bg-zinc-800/50 hover:border-teal-500/30 transition-all duration-300">
      <div className={`p-3 bg-gradient-to-r ${color} rounded-xl shadow-lg`}>
        <Icon data-testid={testId} className="w-5 h-5 text-white" aria-hidden="true" />
      </div>
      <div>
        <div className="text-zinc-400 text-sm group-hover/contact:text-zinc-300 transition-colors duration-300">
          {label}
        </div>
        <div className="text-white font-medium group-hover/contact:text-teal-100 transition-colors duration-300">
          {value}
        </div>
      </div>
    </li>
  );
};
