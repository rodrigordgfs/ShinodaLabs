import { lazy, Suspense } from "react";
import { createFileRoute } from "@tanstack/react-router";

import heroPreview from "@/assets/project-1.webp";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Footer } from "@/components/site/Footer";
import { useDeferredMount } from "@/hooks/use-deferred-mount";
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

function Index() {
  const belowFoldReady = useDeferredMount(1800);
  const cursorReady = useDeferredMount(2500);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {cursorReady && (
        <Suspense fallback={null}>
          <CustomCursor />
        </Suspense>
      )}
      <Navbar />
      <main id="conteudo-principal">
        <Hero />
        {belowFoldReady && (
          <Suspense fallback={null}>
            <Marquee />
            <About />
            <Work />
            <Differentiators />
            <CTA />
          </Suspense>
        )}
      </main>
      <Footer />
    </div>
  );
}
