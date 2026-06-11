import { motion } from "framer-motion";
import { SectionBackdrop } from "./SectionBackdrop";

const groups = [
  {
    title: "Front-end",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "GSAP"],
  },
  {
    title: "Back-end",
    items: ["Node.js", "tRPC", "Postgres", "Prisma", "Redis", "REST / GraphQL"],
  },
  {
    title: "Cloud & DX",
    items: ["Vercel", "Cloudflare", "Supabase", "Stripe", "Sentry", "GitHub Actions"],
  },
  {
    title: "Design",
    items: ["Figma", "Design tokens", "Motion design", "Prototyping", "Design ops", "Icon systems"],
  },
];

export function Stack() {
  return (
    <section
      id="stack"
      className="relative overflow-hidden py-32 bg-card/40 border-y border-border/40"
    >
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-50" />
      <SectionBackdrop variant="rings" align="right" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="max-w-2xl mb-14">
          <div className="text-xs uppercase tracking-[0.2em] text-teal mb-4">/ Stack</div>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold leading-tight text-foreground">
            Ferramentas modernas, escolhidas com intenção.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="card-premium rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-teal shadow-[0_0_8px_1px] shadow-teal/60" />
                <h3 className="font-display text-foreground">{g.title}</h3>
              </div>
              <ul className="space-y-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="text-sm text-muted-foreground font-mono flex items-center gap-2"
                  >
                    <span className="text-primary" aria-hidden>→</span> {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
