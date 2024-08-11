import Header from "@/components/Header";
import type { Metadata } from "next";
import Image from "next/image";
import ProjectCard from "./components/ProjectCard";

export const metadata: Metadata = {
  title: "Projetos da Shinoda Labs - Soluções Digitais Inovadoras",
  description:
    "Explore os projetos da Shinoda Labs e veja como transformamos ideias em soluções digitais de impacto. Descubra nossos trabalhos em design web, desenvolvimento de aplicativos e branding criativo.",
  keywords: [
    "projetos Shinoda Labs",
    "soluções digitais",
    "design web",
    "desenvolvimento de aplicativos",
    "branding",
    "portfólio",
    "inovação tecnológica",
  ],
  authors: [
    {
      name: "Shinoda Labs",
      url: "https://shinodalabs.com.br",
    },
  ],
  robots: "index, follow",
  openGraph: {
    title: "Projetos da Shinoda Labs - Soluções Digitais Inovadoras",
    description:
      "Explore os projetos da Shinoda Labs e veja como transformamos ideias em soluções digitais de impacto. Descubra nossos trabalhos em design web, desenvolvimento de aplicativos e branding criativo.",
    images: [
      {
        url: "/seo.png",
        width: 1200,
        height: 630,
        alt: "Imagem de projetos da Shinoda Labs mostrando inovação e criatividade",
      },
    ],
    url: "https://shinodalabs.com.br/projetos",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projetos da Shinoda Labs - Soluções Digitais Inovadoras",
    description:
      "Explore os projetos da Shinoda Labs e veja como transformamos ideias em soluções digitais de impacto. Descubra nossos trabalhos em design web, desenvolvimento de aplicativos e branding criativo.",
    images: [
      {
        url: "/seo.png",
      },
    ],
  },
};

const projects = [
  {
    title: "Projeto 1",
    image: "https://placehold.co/600x400",
    link: "https://google.com",
  },
  {
    title: "Projeto 2",
    image: "https://placehold.co/600x400",
    link: "https://google.com",
  },
  {
    title: "Projeto 3",
    image: "https://placehold.co/600x400",
    link: "https://google.com",
  },
  {
    title: "Projeto 1",
    image: "https://placehold.co/600x400",
    link: "https://google.com",
  },
  {
    title: "Projeto 2",
    image: "https://placehold.co/600x400",
    link: "https://google.com",
  },
  {
    title: "Projeto 3",
    image: "https://placehold.co/600x400",
    link: "https://google.com",
  },
];

export default function ProjectsPage() {
  return (
    <div className="w-full max-w-6xl m-auto text-zinc-50 flex flex-col space-y-16 relative py-10">
      <Header title="Projetos" description="Conheça meus projetos" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.title}
              image={project.image}
              link={project.link}
              title={project.title}
            />
          );
        })}
      </div>
    </div>
  );
}
