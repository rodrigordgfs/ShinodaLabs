import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import p1 from "@/assets/project-1.webp";
import p2 from "@/assets/project-2.webp";
import p3 from "@/assets/project-3.webp";
import p4 from "@/assets/project-4.webp";

const easeOut = [0.16, 1, 0.3, 1] as const;
const PROJECT_INTERVAL_MS = 5000;

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

export function HeroPreviewSkeleton() {
  return (
    <div
      className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-card/40 lg:max-w-none"
      aria-hidden
    >
      <div className="aspect-[16/10] animate-pulse bg-white/[0.04]" />
    </div>
  );
}

export function HeroPreview() {
  const [index, setIndex] = useState(0);
  const [flash, setFlash] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const hasSlid = useRef(false);
  const project = heroProjects[index];

  const goToProject = useCallback((nextIndex: number) => {
    hasSlid.current = true;
    setFlash(true);
    setIndex(nextIndex);
    window.setTimeout(() => setFlash(false), 500);
  }, []);

  const startAutoplay = useCallback(() => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      hasSlid.current = true;
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
      initial={false}
      animate="visible"
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
              initial={hasSlid.current ? "enter" : false}
              animate="center"
              exit="exit"
              className="absolute inset-0 size-full min-h-full min-w-full object-cover object-center"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={index === 0 ? "high" : "low"}
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
