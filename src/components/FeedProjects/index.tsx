import projectsService from "@/services/projects";
import FeedProjectItem from "../FeedProjectItem";

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

export default async function FeedProjects() {
  try {
    const projects = await getProjects();

    return (
      <div className="flex flex-col pt-5">
        {projects.map((project: Project) => (
          <FeedProjectItem key={project.id} {...project} />
        ))}
        <div className="flex flex-row items-center"></div>
      </div>
    );
  } catch (error) {
    console.error("Error rendering projects:", error);
    return <div>Error loading projects</div>;
  }
}
