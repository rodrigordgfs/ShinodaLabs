import { lazy, Suspense, useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Work } from "@/components/site/Work";
import { Differentiators } from "@/components/site/Differentiators";
import { CTA } from "@/components/site/CTA";
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

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: buildMetaTags({
      title: HOME_TITLE,
      description: HOME_DESCRIPTION,
      keywords: SITE_KEYWORDS,
      path: "/",
    }),
    links: [buildCanonicalLink("/")],
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

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <DeferredCursor />
      <Navbar />
      <main id="conteudo-principal">
        <Hero />
        <div className="below-fold">
          <Marquee />
          <About />
          <Work />
          <Differentiators />
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  );
}
