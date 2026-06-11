import { motion } from "framer-motion";
import { SectionBackdrop } from "./SectionBackdrop";

const metrics = [
  { v: "+248%", l: "Conversão pós-redesign", c: "Atelier Commerce" },
  { v: "0.3s", l: "Largest Contentful Paint", c: "Nebula Analytics" },
  { v: "+72", l: "Pontos no PageSpeed", c: "Helix AI" },
  { v: "4.9★", l: "Satisfação dos clientes", c: "Média 2024" },
];

const testimonials = [
  {
    q: "Trabalhar com a ShinodaLabs foi diferente. Atenção ao detalhe, comunicação clara e um produto final que superou as expectativas do board.",
    a: "Marina Costa",
    r: "Head of Product, Helix AI",
  },
  {
    q: "Migramos para uma arquitetura moderna sem dor. Performance disparou, time de marketing ficou mais rápido e o site finalmente representa a marca.",
    a: "Diego Faria",
    r: "CEO, Atelier",
  },
];

export function Results() {
  return (
    <section id="results" className="relative overflow-hidden py-32">
      <SectionBackdrop variant="dots" align="right" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="max-w-2xl mb-14">
          <div className="text-xs uppercase tracking-[0.2em] text-teal mb-4">/ Resultados</div>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold leading-tight text-foreground">
            Números que falam por si.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {metrics.map((m, i) => (
            <motion.div
              key={m.l}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="card-premium rounded-2xl p-6"
            >
              <div className="font-display text-4xl text-gradient-teal">{m.v}</div>
              <div className="text-sm text-foreground mt-3">{m.l}</div>
              <div className="text-xs text-muted-foreground mt-1 font-mono">{m.c}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.a}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-premium rounded-2xl p-8"
            >
              <svg
                aria-hidden
                className="mb-4 h-6 w-6 text-primary"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7 7h4v4H7c0 2.2 1.8 4 4 4v2c-3.3 0-6-2.7-6-6V7zm9 0h4v4h-4c0 2.2 1.8 4 4 4v2c-3.3 0-6-2.7-6-6V7z" />
              </svg>
              <blockquote className="text-foreground leading-relaxed">{t.q}</blockquote>
              <figcaption className="mt-6 text-sm">
                <div className="text-foreground">{t.a}</div>
                <div className="text-muted-foreground">{t.r}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
