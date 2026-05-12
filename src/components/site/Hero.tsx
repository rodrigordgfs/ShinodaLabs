import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { v: "7+", l: "Anos de mercado" },
  { v: "98", l: "PageSpeed médio" },
  { v: "Sob medida", l: "Sites e produtos" },
  { v: "100%", l: "Foco no detalhe" },
] as const;

export function Hero() {
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(42);
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 24, mass: 0.35 });
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 24, mass: 0.35 });
  const imageX = useTransform(smoothX, [0, 100], [-14, 14]);
  const imageY = useTransform(smoothY, [0, 100], [-10, 10]);
  const gridX = useTransform(smoothX, [0, 100], [18, -18]);
  const gridY = useTransform(smoothY, [0, 100], [12, -12]);
  const glowX = useTransform(smoothX, [0, 100], [-100, 100]);
  const glowY = useTransform(smoothY, [0, 100], [-70, 70]);
  const spotlight = useMotionTemplate`radial-gradient(circle at ${smoothX}% ${smoothY}%, oklch(0.78 0.14 180 / 0.2), transparent 32rem)`;

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width) * 100);
    pointerY.set(((event.clientY - rect.top) / rect.height) * 100);
  };

  const handlePointerLeave = () => {
    pointerX.set(50);
    pointerY.set(42);
  };

  return (
    <section
      id="top"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative flex min-h-screen items-center overflow-hidden noise"
    >
      {/* Background image — slightly softer so type wins */}
      <motion.div
        className="absolute inset-0 z-0 opacity-[0.32]"
        style={{
          x: imageX,
          y: imageY,
          scale: 1.05,
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center 28%",
          maskImage: "radial-gradient(ellipse 95% 75% at 50% 38%, black 12%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 95% 75% at 50% 38%, black 12%, transparent 78%)",
        }}
      />
      <motion.div
        className="absolute inset-0 z-0 mix-blend-screen"
        style={{ background: spotlight }}
      />
      <motion.div
        className="bg-grid bg-grid-fade absolute -inset-8 z-0 opacity-90"
        style={{ x: gridX, y: gridY }}
      />
      <motion.div
        className="animate-pulse-glow absolute -top-40 left-1/2 z-0 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-teal/10 blur-3xl"
        style={{ x: glowX, y: glowY }}
      />
      <div className="absolute bottom-0 right-0 z-0 h-[min(28rem,70vw)] w-[min(28rem,70vw)] rounded-full bg-emerald/10 blur-3xl" />

      {/* Legibility: vignette + base wash so headlines stay crisp */}
      <div
        className="pointer-events-none absolute inset-0 z-1 bg-[radial-gradient(ellipse_120%_85%_at_50%_32%,oklch(0.145_0.005_285/0.78)_0%,oklch(0.145_0.005_285/0.35)_48%,transparent_72%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-1 bg-linear-to-b from-background/20 via-transparent to-background/95"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-24 pt-28 md:pb-28 md:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Copy column */}
          <div className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/70 px-3.5 py-1.5 text-xs text-muted-foreground shadow-[0_0_0_1px_oklch(1_0_0/0.04)_inset] backdrop-blur-md"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-teal opacity-75" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-teal" />
              </span>
              Disponível para novos projetos
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.06 }}
              className="mt-7 max-w-xl lg:max-w-2xl"
            >
              <h1 className="font-display text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[3.35rem] lg:leading-[1.06] xl:text-7xl xl:leading-[1.05]">
                <span className="block text-foreground">Pixels com</span>
                <span className="relative mt-1 inline-block">
                  <span className="text-gradient">propósito.</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.75, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute -bottom-1 left-0 right-0 h-0.5 origin-left rounded-full bg-linear-to-r from-teal via-emerald to-lime"
                    aria-hidden
                  />
                </span>
              </h1>
              <p className="font-display mt-5 text-xl font-medium leading-snug tracking-tight text-foreground/90 sm:text-2xl sm:leading-snug">
                Sites que <span className="text-teal">vendem</span>
                <span className="text-muted-foreground"> — </span>
                <span className="text-muted-foreground">não só aparecem.</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14 }}
              className="mt-6 max-w-lg space-y-1 text-base leading-relaxed text-foreground/75 sm:text-lg"
            >
              <p className="text-pretty">
                Design, código e SEO técnico no mesmo fluxo: sites rápidos, acessíveis e prontos
                para converter.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="mt-9 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-base font-medium text-background transition-colors hover:bg-teal"
              >
                Iniciar um projeto
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-border/60 bg-background/60 px-7 py-3.5 text-base font-medium text-foreground shadow-[0_0_0_1px_oklch(1_0_0/0.04)_inset] backdrop-blur-md transition-colors hover:border-teal/45 hover:bg-card/50"
              >
                <Play className="h-4 w-4 shrink-0 text-teal" />
                Ver projetos
              </a>
            </motion.div>
          </div>

          {/* Stats — 2×2 no mobile; coluna única no desktop */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.32 }}
            className="lg:col-span-5"
          >
            <div className="mx-auto grid max-w-md grid-cols-2 gap-2 sm:max-w-lg lg:mx-0 lg:flex lg:max-w-sm lg:flex-col lg:gap-0 lg:overflow-hidden lg:rounded-2xl lg:border lg:border-border/50 lg:bg-background/55 lg:shadow-[0_0_0_1px_oklch(1_0_0/0.04)_inset] lg:backdrop-blur-md">
              {stats.map((s, i) => (
                <div
                  key={s.l}
                  className={`rounded-xl border border-border/40 bg-card/50 px-4 py-4 text-center sm:px-5 sm:py-5 lg:flex lg:items-baseline lg:justify-between lg:gap-4 lg:rounded-none lg:border-0 lg:bg-background/45 lg:px-5 lg:py-4 lg:text-left ${
                    i < stats.length - 1 ? "lg:border-b lg:border-border/35" : ""
                  }`}
                >
                  <div className="font-display flex items-baseline justify-center gap-1.5 text-2xl tabular-nums tracking-tight text-foreground sm:text-3xl lg:justify-start lg:text-3xl">
                    <span>{s.v}</span>
                    <Sparkles className="h-3.5 w-3.5 shrink-0 text-teal opacity-90" aria-hidden />
                  </div>
                  <div className="mt-1.5 text-xs leading-snug text-muted-foreground sm:text-sm lg:mt-0 lg:max-w-44 lg:text-right lg:text-xs lg:leading-relaxed">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
