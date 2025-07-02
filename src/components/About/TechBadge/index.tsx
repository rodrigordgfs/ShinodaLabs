// TechBadge.tsx
import { ReactNode } from "react";

interface TechBadgeProps {
  tech: string;
  icon?: ReactNode;
}

export const TechBadge = ({ tech, icon }: TechBadgeProps) => (
  <li className="flex items-center gap-2">
    <span className="px-4 py-2 flex items-center gap-2 bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 border border-teal-500/20 rounded-xl text-teal-300 text-sm hover:bg-gradient-to-r hover:from-teal-500/10 hover:to-emerald-500/10 hover:border-teal-400/40 hover:text-teal-200 transition-all duration-300 backdrop-blur-sm">
      {icon && (
        <span className="w-4 h-4" data-testid={`${tech}-icon`}>
          {icon}
        </span>
      )}
      {tech}
    </span>
  </li>
);
