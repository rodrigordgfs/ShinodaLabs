import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

import { SectionBackdrop } from "./SectionBackdrop";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.05 4.91A9.8 9.8 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91a9.86 9.86 0 0 0-2.91-7.01ZM12.05 20.15h-.01a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.38c0-4.53 3.69-8.22 8.23-8.22a8.17 8.17 0 0 1 5.82 2.41 8.17 8.17 0 0 1 2.41 5.82c-.01 4.53-3.7 8.22-8.23 8.22Zm4.51-6.16c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.96-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.76-1.85-.2-.48-.4-.41-.56-.42h-.48c-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.56c.12.16 1.75 2.68 4.24 3.75.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.17.21-.58.21-1.07.14-1.17-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}

export function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-linear-to-b from-card/25 via-background to-background py-28 noise"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-(--gradient-hero) opacity-[0.85]"
        aria-hidden
      />
      <SectionBackdrop variant="mesh" align="right" />
      <div
        className="pointer-events-none absolute -bottom-32 left-[-12%] h-[min(32rem,90vw)] w-[min(32rem,90vw)] rounded-full bg-emerald/14 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-[18%] right-[-8%] h-[min(26rem,70vw)] w-[min(26rem,70vw)] rounded-full bg-teal/12 blur-[100px]"
        aria-hidden
      />
      <div className="absolute inset-x-0 top-0 z-10 h-px bg-border/60" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-6xl px-5"
      >
        <div>
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/10 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.24em] text-teal shadow-[0_0_28px_-18px_oklch(0.78_0.14_180/0.9)]">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              Briefing aberto
            </div>
            <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              Um site com direção,
              <br />
              não só presença.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Traga a ideia, o contexto ou o problema. Eu transformo em uma rota clara de design,
              performance e lançamento.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/50 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["01", "Discovery", "Negócio, audiência, objetivos, escopo e métricas."],
              ["02", "Strategy & UX", "Arquitetura de informação, fluxos e protótipos navegáveis."],
              [
                "03",
                "Design system",
                "Identidade visual, tokens, componentes e direção de motion.",
              ],
              ["04", "Engineering", "Desenvolvimento com tipagem forte, revisão e performance."],
              ["05", "Launch & growth", "Deploy, SEO técnico e iterações orientadas a dados."],
            ].map(([step, title, desc]) => (
              <div key={step} className="bg-background/85 p-5 transition-colors hover:bg-card/80">
                <div className="grid gap-3 sm:grid-cols-[3rem_1fr] md:grid-cols-1">
                  <div className="font-mono text-xs text-teal">{step}</div>
                  <div>
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <Check className="h-4 w-4 text-teal" />
                      {title}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex flex-col justify-between gap-5 bg-card/55 p-5 md:col-span-2 lg:col-span-1">
              <div>
                <div className="text-sm font-medium text-foreground">Pronto para começar?</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Resposta pessoal em até <span className="text-foreground">24h</span>.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/5551996236798"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-teal"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Enviar briefing
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
