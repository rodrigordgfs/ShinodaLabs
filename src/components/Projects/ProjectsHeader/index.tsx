export const ProjectsHeader = () => (
  <header className="max-w-6xl mx-auto text-center mb-14">
    <h3 className="text-5xl md:text-6xl font-bold mb-6 text-gradient bg-gradient-to-r from-teal-400 via-emerald-500 to-lime-500 bg-clip-text text-transparent">
      Meus Projetos
    </h3>
    <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-lime-500 mx-auto mb-8 rounded-full shadow-lg shadow-teal-400/50" aria-hidden="true" role="presentation" />
    <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
      Uma seleção dos meus projetos mais recentes, desde <span className="text-teal-400">aplicações web complexas</span> até <span className="text-lime-400">soluções criativas</span>.
    </p>
  </header>
);
