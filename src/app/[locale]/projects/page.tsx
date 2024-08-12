import Header from "@/components/Header";
import type { Metadata } from "next";
import Image from "next/image";
import ProjectCard from "./components/ProjectCard";
import projectsService from "@/services/projects";

export interface Project {
  id: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  repository?: string | undefined;
}

interface ProjectsResponse {
  data: Project[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number | null;
}

async function getProjects(): Promise<Project[]> {
  try {
    const res = await projectsService.get();

    if (res.status !== 200) {
      throw new Error("Failed to fetch data");
    }

    if (!res.data.data) {
      throw new Error("Projects not found in the response");
    }

    const { data } = res.data as ProjectsResponse;

    return data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
}

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

export default async function ProjectsPage() {
  const projects = await getProjects();

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
