import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://shinodalabs.com.br",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
      alternates: {
        languages: {
          br: "https://shinodalabs.com.br/br",
          en: "https://shinodalabs.com.br/en",
          es: "https://shinodalabs.com.br/es",
        },
      },
    },
    {
      url: "https://shinodalabs.com.br/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
      alternates: {
        languages: {
          br: "https://shinodalabs.com.br/br/about",
          en: "https://shinodalabs.com.br/en/about",
          es: "https://shinodalabs.com.br/es/about",
        },
      },
    },
    {
      url: "https://shinodalabs.com.br/projects",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          br: "https://shinodalabs.com.br/br/projects",
          en: "https://shinodalabs.com.br/en/projects",
          es: "https://shinodalabs.com.br/es/projects",
        },
      },
    },
    {
      url: "https://shinodalabs.com.br/resume",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
      alternates: {
        languages: {
          br: "https://shinodalabs.com.br/br/resume",
          en: "https://shinodalabs.com.br/en/resume",
          es: "https://shinodalabs.com.br/es/resume",
        },
      },
    },
    {
      url: "https://shinodalabs.com.br/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
      alternates: {
        languages: {
          br: "https://shinodalabs.com.br/br/contact",
          en: "https://shinodalabs.com.br/en/contact",
          es: "https://shinodalabs.com.br/es/contact",
        },
      },
    },
  ];
}
