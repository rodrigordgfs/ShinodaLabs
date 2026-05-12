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

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Criação de Sites Profissionais | Desenvolvedor de Sites | ShinodaLabs",
      },
      {
        name: "description",
        content:
          "Desenvolvedor de sites especializado em criação de sites profissionais, landing pages e produtos digitais com design premium, alta performance, responsividade e SEO técnico.",
      },
      {
        name: "keywords",
        content:
          "criação de sites, desenvolvedor de sites, desenvolvimento de sites profissionais, landing pages, sites responsivos, SEO técnico, web design, criação de site para empresa",
      },
      {
        property: "og:title",
        content: "Criação de sites profissionais e desenvolvimento web | ShinodaLabs",
      },
      {
        property: "og:description",
        content:
          "Sites, landing pages e produtos digitais sob medida para empresas que querem performance, design premium e presença forte no Google.",
      },
      {
        name: "twitter:title",
        content: "Criação de Sites Profissionais | ShinodaLabs",
      },
      {
        name: "twitter:description",
        content:
          "Desenvolvimento de sites, landing pages e produtos digitais com performance, responsividade e SEO técnico.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <main>
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
