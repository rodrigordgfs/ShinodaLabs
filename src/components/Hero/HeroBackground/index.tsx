export const HeroBackground = () => (
  <div className="absolute inset-0" aria-hidden="true">
    <div className="absolute inset-0 opacity-20">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(124, 206, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(70, 236, 213, 0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
    <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-teal-500/30 to-emerald-500/30 rounded-full filter blur-3xl animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-r from-emerald-500/20 to-yellow-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-72 sm:h-72 bg-gradient-to-r from-yellow-500/10 to-teal-500/10 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent animate-pulse" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent animate-pulse delay-1000" />
    </div>
  </div>
);
