export const HighlightCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <article className="group relative p-6 bg-gradient-to-br from-zinc-800/30 to-zinc-900/30 backdrop-blur-xl rounded-3xl border border-zinc-700/50 hover:border-teal-500/40 transition-all duration-500 hover:scale-105 overflow-hidden">
    <div
      className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      aria-hidden="true"
    />
    <div className="flex flex-col items-center sm:items-start relative z-10">
      <div className="text-teal-400 mb-4 group-hover:scale-110 group-hover:text-teal-300 transition-all duration-300">
        {icon}
      </div>
      <h4 className="text-center sm:text-start text-white font-semibold mb-2 text-lg group-hover:text-teal-100 transition-colors duration-300">
        {title}
      </h4>
      <p className="text-center sm:text-start text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
        {description}
      </p>
    </div>
    <div
      className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      aria-hidden="true"
    />
  </article>
);
