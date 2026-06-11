import { lazy, Suspense, useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import heroPreview from "@/assets/project-1.webp";
import { LazyWhenVisible } from "@/components/LazyWhenVisible";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Footer } from "@/components/site/Footer";
import {
  HOME_DESCRIPTION,
  HOME_TITLE,
  SITE_KEYWORDS,
  buildCanonicalLink,
  buildMetaTags,
} from "@/lib/seo";

const CustomCursor = lazy(() =>
  import("@/components/site/CustomCursor").then((module) => ({ default: module.CustomCursor })),
);

const Marquee = lazy(() =>
  import("@/components/site/Marquee").then((module) => ({ default: module.Marquee })),
);

const About = lazy(() =>
  import("@/components/site/About").then((module) => ({ default: module.About })),
);

const Work = lazy(() =>
  import("@/components/site/Work").then((module) => ({ default: module.Work })),
);

const Differentiators = lazy(() =>
  import("@/components/site/Differentiators").then((module) => ({
    default: module.Differentiators,
  })),
);

const CTA = lazy(() =>
  import("@/components/site/CTA").then((module) => ({ default: module.CTA })),
);

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: buildMetaTags({
      title: HOME_TITLE,
      description: HOME_DESCRIPTION,
      keywords: SITE_KEYWORDS,
      path: "/",
    }),
    links: [
      buildCanonicalLink("/"),
      {
        rel: "preload",
        as: "image",
        href: heroPreview,
        type: "image/webp",
        fetchPriority: "high",
      },
    ],
  }),
});

function DeferredCursor() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!media.matches) return;

    const enable = () => setReady(true);
    window.addEventListener("pointermove", enable, { once: true, passive: true });
    return () => window.removeEventListener("pointermove", enable);
  }, []);

  if (!ready) return null;

  return (
    <Suspense fallback={null}>
      <CustomCursor />
    </Suspense>
  );
}

function BelowFoldSections() {
  return (
    <Suspense fallback={null}>
      <Marquee />
      <About />
      <Work />
      <Differentiators />
      <CTA />
    </Suspense>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <DeferredCursor />
      <Navbar />
      <main id="conteudo-principal">
        <Hero />
        <LazyWhenVisible rootMargin="400px 0px">
          <BelowFoldSections />
        </LazyWhenVisible>
      </main>
      <Footer />
    </div>
  );
}
