import { motion } from "framer-motion";
import { Gauge, Palette, Search, Smartphone, Workflow, ShieldCheck } from "lucide-react";
import { SectionBackdrop } from "./SectionBackdrop";

const items = [
  {
    icon: Gauge,
    title: "Performance obsessiva",
    desc: "Core Web Vitals no verde. Cada milissegundo otimizado para conversão e SEO.",
  },
  {
    icon: Palette,
    title: "Design premium",
    desc: "Identidade visual forte, tipografia refinada, sistema de design escalável.",
  },
  {
    icon: Search,
    title: "SEO técnico",
    desc: "SSR, schema markup, sitemap dinâmico e estrutura semântica impecável.",
  },
  {
    icon: Smartphone,
    title: "Responsividade real",
    desc: "Pixel-perfect em mobile, tablet, desktop e telas ultrawide.",
  },
  {
    icon: Workflow,
    title: "Arquitetura moderna",
    desc: "Stack atual, componentes reutilizáveis e código que escala com o produto.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança & DX",
    desc: "Boas práticas, type-safety end-to-end e infraestrutura confiável.",
  },
];

export function Differentiators() {
  return (
    <section className="relative overflow-hidden border-y border-border/60 bg-card/40 py-32">
      <SectionBackdrop variant="dots" align="center" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-teal mb-4">03 / Como trabalhamos</div>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold leading-tight text-foreground">
            Engenharia <span className="text-gradient-teal">de elite</span>, do conceito ao deploy.
          </h2>
        </div>

        <div className="grid overflow-hidden border-y border-border/40 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group bg-background p-8 hover:bg-secondary/40 transition-colors"
            >
              <div className="mb-5 font-mono text-sm text-teal">0{i + 1}</div>
              <h3 className="font-display text-xl text-foreground mb-2">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
