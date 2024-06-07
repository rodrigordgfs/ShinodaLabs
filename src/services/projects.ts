import Services from "@/lib/axios";

class ProjectsService extends Services {
  constructor() {
    const baseUrl =
      typeof window === "undefined" ? process.env.NEXT_PUBLIC_API_URL : "";
    super({
      url: "/projects",
      config: {
        baseURL: baseUrl,
        headers: {
          "Content-Type": "application/json",
        },
      },
    });
  }
}

const projectsService = new ProjectsService();
export default projectsService;
