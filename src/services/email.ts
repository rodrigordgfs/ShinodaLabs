import Services from "@/libs/axios";

class EmailService extends Services {
  constructor() {
    super({
      url: "/send-email",
      config: {
        baseURL: process.env.NEXT_PUBLIC_API_URL,
        headers: {
          "Content-Type": "application/json",
        },
      },
    });
  }
}

const emailService = new EmailService();
export default emailService;
