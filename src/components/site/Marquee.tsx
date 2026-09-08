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
    <div className="relative overflow-hidden border-y border-border/40 bg-card/30 py-5">
      <div className="flex w-max animate-marquee">
        {[...items, ...items].map((it, i) => (
          <div
            key={i}
            className="border-r border-border px-8 text-sm font-mono uppercase tracking-wider text-muted-foreground"
          >
            {it}
          </div>
        ))}
      </div>
    </div>
  );
}
