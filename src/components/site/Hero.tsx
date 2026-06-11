import { ArrowRight, ArrowUpRight, Gauge, Palette, Search } from "lucide-react";

import { HeroEffectsStatic } from "@/components/site/HeroEffects";
import { HeroPreview } from "@/components/site/HeroPreview";

const pillars = [
  { icon: Palette, label: "Design premium" },
  { icon: Gauge, label: "Performance" },
  { icon: Search, label: "SEO técnico" },
] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#030303] noise"
    >
      <HeroEffectsStatic />

      <div className="section-light-beam pointer-events-none absolute z-[1] opacity-70" aria-hidden />

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_110%_85%_at_50%_35%,oklch(0.145_0.005_285/0.62)_0%,oklch(0.145_0.005_285/0.22)_48%,transparent_74%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-linear-to-b from-[#030303]/25 via-transparent to-[#030303]/95"
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 px-5 pb-24 pt-28 sm:px-6 sm:pb-28 sm:pt-32 lg:grid-cols-12 lg:gap-10 lg:pb-32 lg:pt-36">
        <div className="flex flex-col items-center text-center lg:col-span-6 lg:items-start lg:text-left xl:col-span-5">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-teal/20 bg-teal/[0.07] px-3.5 py-1.5 shadow-[0_0_28px_-18px_oklch(0.78_0.14_180/0.85)] backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-teal opacity-75" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-teal" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
              Studio digital premium
            </span>
          </div>

          <h1 className="font-inter mt-7 text-[clamp(2.35rem,6.8vw,4.25rem)] font-extrabold leading-[1.03] tracking-[-0.045em] sm:mt-8 lg:text-[3.65rem] lg:leading-[1.02]">
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

          <p className="font-inter mt-6 max-w-lg text-pretty text-base leading-relaxed tracking-[-0.01em] text-muted-foreground sm:mt-7 sm:text-lg">
            Criação de sites sob medida para{" "}
            <span className="text-foreground/90">empresas que exigem conversão</span>, performance
            de produto e presença digital memorável.
          </p>

          <ul className="mt-7 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 lg:justify-start">
            {pillars.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-sm"
              >
                <Icon className="h-3.5 w-3.5 text-primary" aria-hidden />
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#contact"
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-foreground px-8 py-3.5 text-[15px] font-semibold tracking-[-0.01em] text-background shadow-[0_1px_0_0_oklch(1_0_0/0.08)_inset] transition-[transform,box-shadow] duration-300 hover:scale-[1.015] hover:shadow-[0_0_44px_-8px_oklch(0.78_0.14_180/0.5)] active:scale-[0.985] sm:w-auto"
            >
              <span
                className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-teal/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
                aria-hidden
              />
              <span className="relative z-10">Iniciar projeto</span>
              <ArrowUpRight className="relative z-10 h-4 w-4 opacity-80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#work"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-7 py-3.5 text-sm font-medium tracking-[-0.01em] text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-foreground sm:w-auto"
            >
              Ver projetos
              <ArrowRight
                className="h-3.5 w-3.5 text-primary transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 xl:col-span-7">
          <HeroPreview />
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
