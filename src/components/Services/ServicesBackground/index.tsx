export const ServicesBackground = () => (
  <div
    className="absolute inset-0"
    aria-hidden="true"
    data-testid="services-background"
  >
    <div
      className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-teal-500/10 to-lime-500/10 rounded-full filter blur-3xl"
      data-testid="blur-circle"
    />
    <div
      className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full filter blur-3xl"
      data-testid="blur-circle"
    />
    <div
      className="absolute top-1/2 left-0 w-72 h-72 bg-gradient-to-r from-lime-500/5 to-emerald-500/5 rounded-full filter blur-3xl"
      data-testid="blur-circle"
    />
  </div>
);
