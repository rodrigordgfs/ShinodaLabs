import { useCallback, useEffect, useRef, useState } from "react";

import p2 from "@/assets/project-2.webp";
import p3 from "@/assets/project-3.webp";
import p4 from "@/assets/project-4.webp";
import p5 from "@/assets/project-5.webp";

const PROJECT_INTERVAL_MS = 5000;

const HERO_PREVIEW_URL = "/hero-preview.webp";

const heroProjects = [
  {
    img: HERO_PREVIEW_URL,
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
    title: "Aurelius Imobiliária",
    url: "https://aurelius-imobiliaria.vercel.app/",
    tags: ["React", "TanStack Start", "Tailwind CSS"],
  },
  {
    img: p5,
    title: "Oliveira & Martins Advogados",
    url: "https://oliveira-martins-advogados.vercel.app/",
    tags: ["React", "TanStack Start", "Tailwind CSS"],
  },
] as const;

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

export function HeroPreview() {
  const [index, setIndex] = useState(0);
  const [flash, setFlash] = useState(false);
  const [hasSlid, setHasSlid] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const project = heroProjects[index];

  const goToProject = useCallback((nextIndex: number) => {
    setHasSlid(true);
    setFlash(true);
    setIndex(nextIndex);
    window.setTimeout(() => setFlash(false), 500);
  }, []);

  const startAutoplay = useCallback(() => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setHasSlid(true);
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
    <div className="relative mx-auto w-full max-w-md lg:max-w-none [perspective:1200px]">
      <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-teal/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-4 top-8 h-28 w-28 rounded-full border border-teal/15 section-ring" aria-hidden />
      <div
        className="pointer-events-none absolute -left-6 bottom-12 h-20 w-20 rounded-full border border-emerald/10 section-ring section-ring-slow"
        aria-hidden
      />

      <div className="hero-preview-float relative overflow-hidden rounded-2xl border border-white/[0.1] bg-card/50 shadow-[0_40px_80px_-40px_oklch(0_0_0/0.85),0_0_0_1px_oklch(1_0_0/0.05)_inset] backdrop-blur-md">
        <div className="flex items-center gap-2 border-b border-white/[0.08] bg-white/[0.03] px-4 py-3">
          <div className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          </div>
          <div className="mx-auto flex min-w-0 flex-1 items-center justify-center">
            <div className="flex max-w-[220px] flex-1 items-center gap-2 rounded-lg border border-white/[0.06] bg-black/30 px-3 py-1.5">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal/80" aria-hidden />
              <span
                key={project.url}
                className={`truncate font-mono text-[11px] text-muted-foreground${hasSlid ? " hero-preview-meta" : ""}`}
              >
                {projectDomain(project.url)}
              </span>
            </div>
          </div>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden bg-[#030303]">
          <div className="absolute top-3 right-3 z-20">
            <div
              key={project.title}
              className={`flex items-center gap-2 rounded-full border border-teal/30 bg-background/90 px-3 py-1.5 shadow-lg shadow-black/25 backdrop-blur-xl${hasSlid ? " hero-preview-meta" : ""}`}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-teal opacity-70" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-teal" />
              </span>
              <span className="max-w-[140px] truncate font-mono text-[11px] uppercase tracking-[0.16em] text-primary sm:max-w-none">
                {project.title}
              </span>
            </div>
          </div>

          <img
            key={project.title}
            src={project.img}
            alt={`Preview do projeto ${project.title}`}
            width={1280}
            height={800}
            className={`absolute inset-0 size-full min-h-full min-w-full object-cover object-center${hasSlid ? " hero-preview-slide" : ""}`}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={index === 0 ? "high" : "low"}
          />

          {flash && (
            <div
              key={`flash-${index}`}
              className="hero-preview-flash pointer-events-none absolute inset-0 z-20 bg-linear-to-r from-transparent via-teal/35 to-transparent"
              aria-hidden
            />
          )}

          <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-[#030303]/55 via-transparent to-transparent" />
        </div>

        <div className="flex items-center justify-center gap-1 border-t border-white/[0.06] bg-black/20 px-4 py-1">
          {heroProjects.map((item, i) => (
            <button
              key={item.title}
              type="button"
              onClick={() => handleSelectProject(i)}
              className="flex h-11 w-11 items-center justify-center rounded-full"
              aria-label={`Ver projeto ${item.title}`}
              aria-current={i === index ? "true" : undefined}
            >
              <span
                className={`rounded-full transition-all duration-300 ${
                  i === index ? "h-1.5 w-7 bg-teal" : "h-1.5 w-1.5 bg-white/25 hover:bg-white/40"
                }`}
                aria-hidden
              />
            </button>
          ))}
        </div>
      </div>

      <div className="hero-preview-badge absolute -left-2 top-[18%] z-10 rounded-xl border border-white/[0.1] bg-background/80 px-3.5 py-2.5 shadow-xl shadow-black/40 backdrop-blur-xl sm:-left-8">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">PageSpeed</div>
        <div className="mt-0.5 font-inter text-xl font-bold tabular-nums text-foreground">98</div>
      </div>

      <div className="absolute -right-1 bottom-[22%] z-10 sm:-right-6">
        <div
          key={project.title}
          className={`rounded-xl border border-white/[0.1] bg-background/80 px-3.5 py-2.5 shadow-xl shadow-black/40 backdrop-blur-xl${hasSlid ? " hero-preview-meta" : ""}`}
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Stack
          </div>
          <div className="mt-0.5 font-inter text-sm font-semibold text-foreground">
            {formatStack(project.tags)}
          </div>
        </div>
      </div>
    </div>
  );
}
