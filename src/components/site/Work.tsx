import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import p1 from "@/assets/project-1.webp";
import p2 from "@/assets/project-2.webp";
import p3 from "@/assets/project-3.webp";
import p4 from "@/assets/project-4.webp";
import p5 from "@/assets/project-5.webp";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionBackdrop } from "./SectionBackdrop";

const projects = [
  {
    img: p1,
    title: "Alma & Pata",
    category: "Landing Page · Site",
    year: "2025",
    desc: "Landing page premium para pet shop em São Paulo, com serviços de banho e tosa, veterinária, hotel pet, delivery e produtos selecionados.",
    tags: ["React", "TanStack Start", "Tailwind CSS", "Framer Motion"],
    url: "https://alma-pata.vercel.app/",
  },
  {
    img: p3,
    title: "Lumière",
    category: "Landing Page · Site",
    year: "2025",
    desc: "Site institucional clínica odontológica em São Paulo.",
    tags: ["React", "TanStack Start", "Tailwind CSS", "Framer Motion"],
    url: "https://lumiere-self-psi.vercel.app/",
  },
  {
    img: p2,
    title: "VLTGE",
    category: "Site Empresarial · Academia",
    year: "2025",
    desc: "Site premium para academia de alta performance, com narrativa cinematográfica, modalidades, treinadores, contato e SEO técnico.",
    tags: ["React", "TanStack Start", "Tailwind CSS", "Motion"],
    url: "https://voltage-academia.vercel.app/",
  },
  {
    img: p4,
    title: "Aurelius Imobiliária",
    category: "Site Empresarial · Imobiliária",
    year: "2025",
    desc: "Site institucional para imobiliária em Porto Alegre.",
    tags: ["React", "TanStack Start", "Tailwind CSS"],
    url: "https://aurelius-imobiliaria.vercel.app/",
  },
  {
    img: p5,
    title: "Oliveira & Martins Advogados",
    category: "Site Empresarial · Advogados",
    year: "2025",
    desc: "Site institucional para advogados em Porto Alegre.",
    tags: ["React", "TanStack Start", "Tailwind CSS"],
    url: "https://oliveira-martins-advogados.vercel.app/",
  },
] as const;

type Project = (typeof projects)[number];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group h-full overflow-hidden border-y border-border card-premium">
      <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
        <img
          src={project.img}
          alt={project.title}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/0 to-transparent opacity-60" />
        <div className="absolute top-4 left-4 border-l-2 border-teal bg-background/90 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
          {project.title}
        </div>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Abrir site ${project.title}`}
            className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center border border-border bg-background/90 text-foreground opacity-90 transition-colors hover:border-teal hover:text-teal sm:opacity-0 sm:group-hover:opacity-100"
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl text-foreground">{project.title}</h3>
          <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{project.desc}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border-l border-border pl-2 text-[11px] font-mono text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function WorkCarousel() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    let timer: ReturnType<typeof setInterval> | undefined;

    const play = () => {
      if (timer) clearInterval(timer);
      timer = setInterval(() => {
        if (api.canScrollNext()) {
          api.scrollNext();
        } else {
          api.scrollTo(0);
        }
      }, 4000);
    };

    const stop = () => {
      if (timer) {
        clearInterval(timer);
        timer = undefined;
      }
    };

    play();

    api.on("pointerDown", stop);
    api.on("pointerUp", play);

    return () => {
      stop();
      api.off("pointerDown", stop);
      api.off("pointerUp", play);
    };
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        slidesToScroll: 1,
        containScroll: "trimSnaps",
      }}
      className="relative border-l border-border px-8 sm:px-12"
    >
      <CarouselContent className="-ml-4 md:-ml-5">
        {projects.map((project) => (
          <CarouselItem key={project.title} className="basis-full pl-4 md:basis-1/2 md:pl-5">
            <ProjectCard project={project} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 top-[calc(50%-2.5rem)] h-10 w-10 border-border/50 bg-card/80 text-foreground hover:border-teal/40 hover:bg-card hover:text-teal disabled:opacity-30" />
      <CarouselNext className="right-0 top-[calc(50%-2.5rem)] h-10 w-10 border-border/50 bg-card/80 text-foreground hover:border-teal/40 hover:bg-card hover:text-teal disabled:opacity-30" />
    </Carousel>
  );
}

export function Work() {
  return (
    <section id="work" className="relative overflow-hidden py-32">
      <SectionBackdrop variant="lines" align="right" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="mb-4 text-xs uppercase tracking-[0.2em] text-teal">01 / Projetos selecionados</div>
            <h2 className="font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              Projetos pensados para{" "}
              <span className="text-gradient-teal">impressionar e converter</span>.
            </h2>
          </div>
          <div className="hidden items-center gap-3 sm:flex">
            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-teal"
            >
              Solicitar case completo
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <WorkCarousel />
        </motion.div>
      </div>
    </section>
  );
}
