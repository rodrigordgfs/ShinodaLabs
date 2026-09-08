import { ArrowRight, ArrowUpRight } from "lucide-react";

import { HeroEffects } from "@/components/site/HeroEffects";

const pillars = [
  { label: "Design premium" },
  { label: "Performance" },
  { label: "SEO técnico" },
] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-background noise"
    >
      <HeroEffects />

      <div className="section-light-beam pointer-events-none absolute z-[1] opacity-30" aria-hidden />


      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-5 pb-24 pt-32 sm:px-6 lg:grid-cols-[1.5fr_0.7fr] lg:items-end lg:gap-20 lg:pb-32 lg:pt-40">
        <div className="flex flex-col items-start">
          <div className="mb-7 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-teal">
            <span className="h-px w-10 bg-teal" />
            ShinodaLabs / estúdio digital
          </div>

          <h1 className="font-display max-w-4xl text-[clamp(2.8rem,7vw,6.5rem)] font-semibold leading-[0.98] sm:text-[4.8rem] lg:text-[6.2rem]">
            <span className="block text-foreground">Sites que transformam</span>
            <span className="block">
              <span className="text-muted-foreground">visitantes em </span>
              <span className="relative inline-block text-teal">
                clientes.
                <span
                  className="hero-underline absolute -bottom-1 left-0 right-0 h-px origin-left bg-linear-to-r from-teal via-emerald to-teal/20"
                  aria-hidden
                />
              </span>
            </span>
          </h1>

          <p className="font-inter mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Criação de sites sob medida para{" "}
            <span className="text-foreground/90">empresas que exigem conversão</span>, performance
            de produto e presença digital memorável.
          </p>

          <ul className="mt-8 grid gap-2 border-l border-border pl-4 text-left sm:grid-cols-3 sm:gap-5 sm:border-l-0 sm:pl-0">
            {pillars.map(({ label }, index) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 text-xs text-muted-foreground"
              >
                <span className="font-mono text-teal">{String(index + 1).padStart(2, "0")}</span>
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex w-full flex-col items-start gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden bg-teal px-8 py-3.5 text-[15px] font-semibold text-background transition-colors hover:bg-foreground sm:w-auto"
            >
              <span
                className="pointer-events-none absolute inset-0 -translate-x-full bg-foreground/20 transition-transform duration-700 ease-out group-hover:translate-x-full"
                aria-hidden
              />
              <span className="relative z-10">Iniciar projeto</span>
              <ArrowUpRight className="relative z-10 h-4 w-4 opacity-80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#work"
              className="group inline-flex w-full items-center justify-center gap-2 border border-border px-7 py-3.5 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-teal hover:text-foreground sm:w-auto"
            >
              Ver projetos
              <ArrowRight
                className="h-3.5 w-3.5 text-primary transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#work"
        className="hero-scroll-indicator absolute bottom-6 left-1/2 z-10 flex min-h-11 min-w-11 -translate-x-1/2 flex-col items-center justify-center gap-2 p-2 text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Rolar para os projetos"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.24em]">Scroll</span>
        <span className="flex h-8 w-5 items-start justify-center rounded-full border border-white/25 pt-1.5">
          <span className="hero-scroll-dot h-1 w-1 rounded-full bg-primary" />
        </span>
      </a>
    </section>
  );
}
