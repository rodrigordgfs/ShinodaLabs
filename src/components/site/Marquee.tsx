const items = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Postgres",
  "Supabase",
  "Stripe",
  "Vercel",
  "Figma",
  "GSAP",
];

export function Marquee() {
  return (
    <div className="relative border-y border-border/40 bg-card/30 py-6 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex w-max animate-marquee">
        {[...items, ...items].map((it, i) => (
          <div
            key={i}
            className="px-8 text-sm tracking-wider uppercase text-muted-foreground font-mono"
          >
            {it}
          </div>
        ))}
      </div>
    </div>
  );
}
