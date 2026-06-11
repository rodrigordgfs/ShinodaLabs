import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Work } from "@/components/site/Work";
import { Differentiators } from "@/components/site/Differentiators";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { CustomCursor } from "@/components/site/CustomCursor";
import {
  HOME_DESCRIPTION,
  HOME_TITLE,
  SITE_KEYWORDS,
  buildCanonicalLink,
  buildMetaTags,
} from "@/lib/seo";

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

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <CustomCursor />
      <Navbar />
      <main id="conteudo-principal">
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Differentiators />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
