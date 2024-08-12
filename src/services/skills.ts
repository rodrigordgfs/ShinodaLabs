import Services from "@/libs/axios";

class SkillService extends Services {
  constructor() {
    const baseUrl =
      typeof window === "undefined" ? process.env.NEXT_PUBLIC_API_URL : "";
    super({
      url: "/skills",
      config: {
        baseURL: baseUrl,
        headers: {
          "Content-Type": "application/json",
        },
      },
    });
  }
}

const skillService = new SkillService();
export default skillService;
