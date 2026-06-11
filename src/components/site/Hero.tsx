import { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, ArrowUpRight, Gauge, Palette, Search } from "lucide-react";

import heroBg from "@/assets/hero-bg.jpg";
import p1 from "@/assets/project-1.png";
import p2 from "@/assets/project-2.png";
import p3 from "@/assets/project-3.png";
import p4 from "@/assets/project-4.jpg";

const easeOut = [0.16, 1, 0.3, 1] as const;

const heroProjects = [
  {
    img: p1,
    title: "Alma & Pata",
    url: "https://alma-pata.vercel.app/",
    tags: ["React", "TanStack Start", "Framer Motion"],
  },
  {
    img: p3,
    title: "Lumière",
    url: "https://lumiere-self-psi.vercel.app/",
    tags: ["React", "TanStack Start", "Framer Motion"],
  },
  {
    img: p2,
    title: "VLTGE",
    url: "https://voltage-academia.vercel.app/",
    tags: ["React", "TanStack Start", "Motion"],
  },
  {
    img: p4,
    title: "Pulse Mobile",
    url: "#",
    tags: ["React Native", "Expo", "Supabase"],
  },
] as const;

const PROJECT_INTERVAL_MS = 5000;

function projectDomain(url: string) {
  if (url === "#") return "shinodalabs.com";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function formatStack(tags: readonly string[]) {
  return tags.slice(0, 2).join(" · ");
}

const pillars = [
  { icon: Palette, label: "Design premium" },
  { icon: Gauge, label: "Performance" },
  { icon: Search, label: "SEO técnico" },
] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: easeOut, staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 32, filter: "blur(14px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: easeOut },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easeOut },
  },
};

const previewVariants = {
  hidden: { opacity: 0, y: 48, rotateX: 12, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { duration: 1.1, ease: easeOut, delay: 0.35 },
  },
};

const previewSlideVariants = {
  enter: {
    opacity: 0,
    scale: 1.08,
    filter: "blur(14px)",
    x: 48,
  },
  center: {
    opacity: 1,
    scale: 1.03,
    filter: "blur(0px)",
    x: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
  exit: {
    opacity: 0,
    scale: 1.03,
    filter: "blur(10px)",
    x: -48,
    transition: { duration: 0.55, ease: easeOut },
  },
};

const previewMetaVariants = {
  enter: { opacity: 0, y: 8, filter: "blur(4px)" },
  center: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.45, ease: easeOut } },
  exit: { opacity: 0, y: -6, filter: "blur(4px)", transition: { duration: 0.3, ease: easeOut } },
};

function HeroPreview() {
  const [index, setIndex] = useState(0);
  const [flash, setFlash] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const project = heroProjects[index];

  const goToProject = useCallback((nextIndex: number) => {
    setFlash(true);
    setIndex(nextIndex);
    window.setTimeout(() => setFlash(false), 500);
  }, []);

  const startAutoplay = useCallback(() => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setFlash(true);
      setIndex((current) => (current + 1) % heroProjects.length);
      window.setTimeout(() => setFlash(false), 500);
    }, PROJECT_INTERVAL_MS);
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    startAutoplay();
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [startAutoplay]);

  const handleSelectProject = (nextIndex: number) => {
    if (nextIndex === index) return;
    goToProject(nextIndex);
    startAutoplay();
  };

  return (
    <motion.div
      variants={previewVariants}
      className="relative mx-auto w-full max-w-md lg:max-w-none [perspective:1200px]"
    >
      <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-teal/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-4 top-8 h-28 w-28 rounded-full border border-teal/15 section-ring" aria-hidden />
      <div
        className="pointer-events-none absolute -left-6 bottom-12 h-20 w-20 rounded-full border border-emerald/10 section-ring section-ring-slow"
        aria-hidden
      />

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-card/50 shadow-[0_40px_80px_-40px_oklch(0_0_0/0.85),0_0_0_1px_oklch(1_0_0/0.05)_inset] backdrop-blur-md"
      >
        <div className="flex items-center gap-2 border-b border-white/[0.08] bg-white/[0.03] px-4 py-3">
          <div className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          </div>
          <div className="mx-auto flex min-w-0 flex-1 items-center justify-center">
            <div className="flex max-w-[220px] flex-1 items-center gap-2 rounded-lg border border-white/[0.06] bg-black/30 px-3 py-1.5">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal/80" aria-hidden />
              <AnimatePresence mode="wait">
                <motion.span
                  key={project.url}
                  variants={previewMetaVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="truncate font-mono text-[10px] text-muted-foreground"
                >
                  {projectDomain(project.url)}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden bg-[#030303]">
          <div className="absolute top-3 right-3 z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.title}
                variants={previewMetaVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex items-center gap-2 rounded-full border border-teal/30 bg-background/90 px-3 py-1.5 shadow-lg shadow-black/25 backdrop-blur-xl"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-teal opacity-70" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-teal" />
                </span>
                <span className="max-w-[140px] truncate font-mono text-[10px] uppercase tracking-[0.16em] text-teal sm:max-w-none">
                  {project.title}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
          <AnimatePresence mode="wait">
            <motion.img
              key={project.title}
              src={project.img}
              alt={`Preview do projeto ${project.title}`}
              variants={previewSlideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 size-full min-h-full min-w-full object-cover object-center"
              loading="eager"
              decoding="async"
            />
          </AnimatePresence>

          <AnimatePresence>
            {flash && (
              <motion.div
                key={`flash-${index}`}
                initial={{ x: "-120%", opacity: 0 }}
                animate={{ x: "120%", opacity: [0, 0.55, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease: easeOut }}
                className="pointer-events-none absolute inset-0 z-20 bg-linear-to-r from-transparent via-teal/35 to-transparent"
                aria-hidden
              />
            )}
          </AnimatePresence>

          <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-[#030303]/55 via-transparent to-transparent" />
        </div>

        <div className="flex items-center justify-center gap-1.5 border-t border-white/[0.06] bg-black/20 px-4 py-2.5">
          {heroProjects.map((item, i) => (
            <button
              key={item.title}
              type="button"
              onClick={() => handleSelectProject(i)}
              className="group relative h-1.5 overflow-hidden rounded-full bg-white/10 transition-all duration-300 hover:bg-white/20"
              style={{ width: i === index ? "1.75rem" : "0.375rem" }}
              aria-label={`Ver projeto ${item.title}`}
              aria-current={i === index ? "true" : undefined}
            >
              {i === index && (
                <motion.span
                  layoutId="hero-preview-progress"
                  className="absolute inset-0 rounded-full bg-teal"
                  transition={{ duration: 0.35, ease: easeOut }}
                />
              )}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.85, duration: 0.6, ease: easeOut }}
        className="absolute -left-2 top-[18%] z-10 rounded-xl border border-white/[0.1] bg-background/80 px-3.5 py-2.5 shadow-xl shadow-black/40 backdrop-blur-xl sm:-left-8"
      >
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-teal">PageSpeed</div>
        <div className="mt-0.5 font-inter text-xl font-bold tabular-nums text-foreground">98</div>
      </motion.div>

      <div className="absolute -right-1 bottom-[22%] z-10 sm:-right-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={project.title}
            variants={previewMetaVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="rounded-xl border border-white/[0.1] bg-background/80 px-3.5 py-2.5 shadow-xl shadow-black/40 backdrop-blur-xl"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Stack
            </div>
            <div className="mt-0.5 font-inter text-sm font-semibold text-foreground">
              {formatStack(project.tags)}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(42);
  const smoothX = useSpring(pointerX, { stiffness: 55, damping: 26, mass: 0.65 });
  const smoothY = useSpring(pointerY, { stiffness: 55, damping: 26, mass: 0.65 });
  const imageX = useTransform(smoothX, [0, 100], [-12, 12]);
  const imageY = useTransform(smoothY, [0, 100], [-8, 8]);
  const gridX = useTransform(smoothX, [0, 100], [14, -14]);
  const gridY = useTransform(smoothY, [0, 100], [10, -10]);
  const glowX = useTransform(smoothX, [0, 100], [-32, 32]);
  const glowY = useTransform(smoothY, [0, 100], [-22, 22]);
  const spotlight = useMotionTemplate`radial-gradient(circle at ${smoothX}% ${smoothY}%, oklch(0.78 0.14 180 / 0.14), transparent 28rem)`;

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
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#030303] noise"
    >
      <motion.div
        className="absolute inset-0 z-0 opacity-[0.32]"
        style={{
          x: imageX,
          y: imageY,
          scale: 1.05,
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          maskImage: "radial-gradient(ellipse 95% 75% at 50% 38%, black 12%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 95% 75% at 50% 38%, black 12%, transparent 78%)",
        }}
        aria-hidden
      />

      <motion.div
        className="absolute inset-0 z-0 mix-blend-screen"
        style={{ background: spotlight }}
        aria-hidden
      />

      <motion.div
        className="bg-grid bg-grid-fade absolute -inset-8 z-0 opacity-40"
        style={{ x: gridX, y: gridY }}
        aria-hidden
      />

      <motion.div
        className="pointer-events-none absolute left-1/2 top-[38%] z-0 h-[min(560px,75vw)] w-[min(780px,95vw)] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          x: glowX,
          y: glowY,
          background:
            "radial-gradient(ellipse at center, oklch(0.78 0.14 180 / 0.12) 0%, oklch(0.78 0.14 180 / 0.04) 42%, transparent 68%)",
        }}
        aria-hidden
      />

      <div className="section-light-beam pointer-events-none absolute z-[1] opacity-70" aria-hidden />

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_110%_85%_at_50%_35%,oklch(0.145_0.005_285/0.62)_0%,oklch(0.145_0.005_285/0.22)_48%,transparent_74%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-linear-to-b from-[#030303]/25 via-transparent to-[#030303]/95"
        aria-hidden
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 px-5 pb-24 pt-28 sm:px-6 sm:pb-28 sm:pt-32 lg:grid-cols-12 lg:gap-10 lg:pb-32 lg:pt-36"
      >
        <div className="flex flex-col items-center text-center lg:col-span-6 lg:items-start lg:text-left xl:col-span-5">
          <motion.div
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2.5 rounded-full border border-teal/20 bg-teal/[0.07] px-3.5 py-1.5 shadow-[0_0_28px_-18px_oklch(0.78_0.14_180/0.85)] backdrop-blur-md"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-teal opacity-75" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-teal" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-teal sm:text-[11px]">
              Studio digital premium
            </span>
          </motion.div>

          <h1 className="font-inter mt-7 text-[clamp(2.35rem,6.8vw,4.25rem)] font-extrabold leading-[1.03] tracking-[-0.045em] sm:mt-8 lg:text-[3.65rem] lg:leading-[1.02]">
            <motion.span variants={lineVariants} className="block overflow-hidden text-foreground">
              <span className="block">Sites que transformam</span>
            </motion.span>
            <motion.span variants={lineVariants} className="block overflow-hidden">
              <span className="block">
                <span className="text-muted-foreground">visitantes em </span>
                <span className="relative inline-block text-teal">
                  clientes.
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.95, ease: easeOut }}
                    className="absolute -bottom-1 left-0 right-0 h-px origin-left bg-linear-to-r from-teal via-emerald to-teal/20"
                    aria-hidden
                  />
                </span>
              </span>
            </motion.span>
          </h1>

          <motion.p
            variants={fadeUpVariants}
            className="font-inter mt-6 max-w-lg text-pretty text-base leading-relaxed tracking-[-0.01em] text-muted-foreground sm:mt-7 sm:text-lg"
          >
            Criação de sites sob medida para{" "}
            <span className="text-foreground/90">empresas que exigem conversão</span>, performance
            de produto e presença digital memorável.
          </motion.p>

          <motion.ul
            variants={fadeUpVariants}
            className="mt-7 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 lg:justify-start"
          >
            {pillars.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-sm"
              >
                <Icon className="h-3.5 w-3.5 text-teal/80" aria-hidden />
                {label}
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={fadeUpVariants}
            className="mt-9 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <motion.a
              href="#contact"
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-foreground px-8 py-3.5 text-[15px] font-semibold tracking-[-0.01em] text-background shadow-[0_1px_0_0_oklch(1_0_0/0.08)_inset] transition-shadow duration-300 hover:shadow-[0_0_44px_-8px_oklch(0.78_0.14_180/0.5)] sm:w-auto"
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              transition={{ duration: 0.25, ease: easeOut }}
            >
              <span
                className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-teal/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
                aria-hidden
              />
              <span className="relative z-10">Iniciar projeto</span>
              <ArrowUpRight className="relative z-10 h-4 w-4 opacity-80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>

            <a
              href="#work"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-7 py-3.5 text-sm font-medium tracking-[-0.01em] text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-foreground sm:w-auto"
            >
              Ver projetos
              <ArrowRight
                className="h-3.5 w-3.5 text-teal/70 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-teal"
                aria-hidden
              />
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-6 xl:col-span-7">
          <HeroPreview />
        </div>
      </motion.div>

      <motion.a
        href="#process"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8, ease: easeOut }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground/60 transition-colors hover:text-muted-foreground"
        aria-label="Rolar para o processo"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.24em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-8 w-5 items-start justify-center rounded-full border border-white/15 pt-1.5"
        >
          <span className="h-1 w-1 rounded-full bg-teal/80" />
        </motion.span>
      </motion.a>
    </section>
  );
}
