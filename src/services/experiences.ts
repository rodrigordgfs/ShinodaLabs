import Services from "@/libs/axios";

class ExperiencesService extends Services {
  constructor() {
    const baseUrl =
      typeof window === "undefined" ? process.env.NEXT_PUBLIC_API_URL : "";
    super({
      url: "/experiences",
      config: {
        baseURL: baseUrl,
        headers: {
          "Content-Type": "application/json",
        },
      },
    });
  }
}

const experienceService = new ExperiencesService();
export default experienceService;
