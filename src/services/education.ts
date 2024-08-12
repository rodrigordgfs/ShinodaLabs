import Services from "@/libs/axios";

class EducationService extends Services {
  constructor() {
    const baseUrl =
      typeof window === "undefined" ? process.env.NEXT_PUBLIC_API_URL : "";
    super({
      url: "/educations",
      config: {
        baseURL: baseUrl,
        headers: {
          "Content-Type": "application/json",
        },
      },
    });
  }
}

const educationService = new EducationService();
export default educationService;
