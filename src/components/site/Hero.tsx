import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(42);
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 24, mass: 0.35 });
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 24, mass: 0.35 });
  const imageX = useTransform(smoothX, [0, 100], [-18, 18]);
  const imageY = useTransform(smoothY, [0, 100], [-12, 12]);
  const gridX = useTransform(smoothX, [0, 100], [22, -22]);
  const gridY = useTransform(smoothY, [0, 100], [16, -16]);
  const glowX = useTransform(smoothX, [0, 100], [-120, 120]);
  const glowY = useTransform(smoothY, [0, 100], [-80, 80]);
  const spotlight = useMotionTemplate`radial-gradient(circle at ${smoothX}% ${smoothY}%, oklch(0.78 0.14 180 / 0.22), transparent 34rem)`;

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
      className="relative min-h-screen flex items-center overflow-hidden noise"
    >
      {/* Background image */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          x: imageX,
          y: imageY,
          scale: 1.06,
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 20%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 20%, transparent 80%)",
        }}
      />
      <motion.div className="absolute inset-0 mix-blend-screen" style={{ background: spotlight }} />
      {/* Grid */}
      <motion.div
        className="absolute -inset-8 bg-grid bg-grid-fade"
        style={{
          x: gridX,
          y: gridY,
        }}
      />
      {/* Glow */}
      <motion.div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-teal/10 blur-3xl animate-pulse-glow"
        style={{ x: glowX, y: glowY }}
      />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-emerald/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 w-full pt-32 pb-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 rounded-full bg-teal animate-ping opacity-75" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-teal" />
          </span>
          Disponível para novos projetos
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-foreground max-w-4xl mx-auto"
        >
          Pixels com{" "}
          <span className="relative inline-block">
            <span className="text-gradient">propósito.</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-1 left-0 right-0 h-[3px] origin-left bg-gradient-to-r from-teal via-emerald to-lime rounded-full"
            />
          </span>
          <br />
          Sites que <span className="text-gradient-teal">vendem.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed"
        >
          Criação de sites profissionais com design premium, performance e SEO técnico.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 font-medium hover:bg-teal transition-colors"
          >
            Iniciar um projeto
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-foreground hover:border-teal/40 transition-colors"
          >
            <Play className="h-4 w-4 text-teal" />
            Ver projetos
          </a>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-border/40 border border-border/40"
        >
          {[
            { v: "7+", l: "Anos de mercado" },
            { v: "98", l: "PageSpeed médio" },
            { v: "Sob medida", l: "Sites e produtos" },
            { v: "100%", l: "Foco no detalhe" },
          ].map((s) => (
            <div key={s.l} className="bg-background/80 backdrop-blur-md p-5 text-center">
              <div className="font-display text-3xl text-foreground flex items-baseline justify-center gap-1">
                {s.v}
                <Sparkles className="h-3.5 w-3.5 text-teal" />
              </div>
              <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
