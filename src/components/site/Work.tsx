import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import p1 from "@/assets/project-1.webp";
import p2 from "@/assets/project-2.webp";
import p3 from "@/assets/project-3.webp";
import p4 from "@/assets/project-4.webp";
import { SectionBackdrop } from "./SectionBackdrop";

const projects = [
  {
    img: p1,
    title: "Alma & Pata",
    category: "Landing Page · Site",
    year: "2025",
    desc: "Landing page premium para pet shop em São Paulo, com serviços de banho e tosa, veterinária, hotel pet, delivery e produtos selecionados.",
    tags: ["React", "TanStack Start", "Tailwind CSS", "Framer Motion"],
    url: "https://alma-pata.vercel.app/",
    span: "lg:col-span-7",
  },
  {
    img: p3,
    title: "Lumière",
    category: "Landing Page · Site",
    year: "2025",
    desc: "Site institucional clínica odontológica em São Paulo.",
    tags: ["React", "TanStack Start", "Tailwind CSS", "Framer Motion"],
    span: "lg:col-span-5",
    url: "https://lumiere-self-psi.vercel.app/",
  },
  {
    img: p2,
    title: "VLTGE",
    category: "Site Empresarial · Academia",
    year: "2025",
    desc: "Site premium para academia de alta performance, com narrativa cinematográfica, modalidades, treinadores, contato e SEO técnico.",
    tags: ["React", "TanStack Start", "Tailwind CSS", "Motion"],
    url: "https://voltage-academia.vercel.app/",
    span: "lg:col-span-5",
  },
  {
    img: p4,
    title: "Pulse Mobile",
    category: "App · Fintech",
    year: "2024",
    desc: "App nativo para gestão financeira pessoal com UX impecável.",
    tags: ["React Native", "Expo", "Supabase"],
    span: "lg:col-span-7",
  },
];

export function Work() {
  return (
    <section id="work" className="relative overflow-hidden py-32">
      <SectionBackdrop variant="lines" align="right" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="flex items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-teal mb-4">/ Selected work</div>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-foreground max-w-2xl leading-tight">
              Projetos pensados para impressionar e converter.
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-teal transition-colors"
          >
            Solicitar case completo
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="space-y-5 lg:columns-2 lg:gap-5 lg:space-y-0">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group mb-5 break-inside-avoid overflow-hidden rounded-2xl card-premium"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/0 to-transparent opacity-60" />
                <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-xs text-muted-foreground uppercase tracking-wider">
                  {p.category}
                </div>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Abrir site ${p.title}`}
                    className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full border border-border/50 bg-card/80 text-foreground opacity-90 transition-opacity hover:border-teal/40 hover:text-teal sm:opacity-0 sm:group-hover:opacity-100"
                  >
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </a>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl text-foreground">{p.title}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono text-muted-foreground border border-border rounded-md px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
