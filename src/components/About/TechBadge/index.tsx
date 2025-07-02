export const TechBadge = ({ tech }: { tech: string }) => (
  <li key={tech}>
    <span className="px-4 py-2 bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 border border-teal-500/20 rounded-xl text-teal-300 text-sm hover:bg-gradient-to-r hover:from-teal-500/10 hover:to-emerald-500/10 hover:border-teal-400/40 hover:text-teal-200 transition-all duration-300 backdrop-blur-sm">
      {tech}
    </span>
  </li>
);
