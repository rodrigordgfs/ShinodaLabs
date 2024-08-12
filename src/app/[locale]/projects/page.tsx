import Header from "@/components/Header";
import type { Metadata } from "next";
import Image from "next/image";
import ProjectCard from "./components/ProjectCard";
import projectsService from "@/services/projects";
import ProjectsMetadata from "./meta";

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

export const metadata: Metadata = ProjectsMetadata;

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
