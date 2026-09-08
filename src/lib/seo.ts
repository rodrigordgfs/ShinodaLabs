export const SITE_URL = "https://shinodalabs.com";
export const SITE_NAME = "ShinodaLabs";
export const SITE_LOCALE = "pt_BR";
export const SITE_LANGUAGE = "pt-BR";

export const SITE_EMAIL = "shinodalabs@gmail.com";
export const SITE_PHONE = "+5551996236798";

export const SOCIAL_PROFILES = [
  "https://github.com/rodrigordgfs/",
  "https://www.linkedin.com/in/shinoda-labs/",
  "https://instagram.com/shinodalabs/",
] as const;

export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;

export const SITE_TAGLINE = "Sites que transformam visitantes em clientes.";

export const SITE_DESCRIPTION =
  "ShinodaLabs cria sites e landing pages premium que convertem tráfego em receita. Design, performance, SEO técnico e desenvolvimento web sob medida para empresas no Brasil.";

export const SITE_KEYWORDS = [
  "criação de sites",
  "desenvolvedor de sites",
  "desenvolvimento de sites profissionais",
  "landing pages",
  "sites premium",
  "SEO técnico",
  "desenvolvimento web",
  "site para empresa",
  "conversão digital",
  "Core Web Vitals",
  "web design",
  "ShinodaLabs",
].join(", ");

export const HOME_TITLE = "Criação de Sites Premium | ShinodaLabs — Sites que Convertem";

export const HOME_DESCRIPTION =
  "Estúdio digital especializado em sites e landing pages premium com design, alta performance e SEO técnico. Transforme visitantes em clientes com a ShinodaLabs.";

export const ROOT_TITLE = `${SITE_NAME} | Criação de sites, landing pages e produtos digitais`;

export const SERVICE_TYPES = [
  "Criação de sites",
  "Desenvolvimento de sites",
  "Landing pages",
  "Desenvolvimento web",
  "SEO técnico",
  "Sites profissionais",
  "Design de produto digital",
] as const;

export const FAQ_ITEMS = [
  {
    question: "O que a ShinodaLabs faz?",
    answer:
      "A ShinodaLabs é um estúdio digital que cria sites, landing pages e produtos digitais premium com foco em conversão, performance e SEO técnico.",
  },
  {
    question: "Quais serviços são oferecidos?",
    answer:
      "Criação de sites profissionais, landing pages, design premium, engenharia front-end, SEO técnico, otimização de performance e lançamento digital.",
  },
  {
    question: "Para quem é indicado?",
    answer:
      "Para empresas, fundadores e marcas que precisam de presença digital memorável, alta performance e sites preparados para converter tráfego em clientes.",
  },
  {
    question: "Como iniciar um projeto?",
    answer:
      "Entre em contato pelo formulário ou WhatsApp. A resposta é personalizada em até 24 horas, com briefing, escopo e próximos passos claros.",
  },
] as const;

type MetaTag =
  | { title: string }
  | {
      title?: string;
      name?: string;
      property?: string;
      content: string;
      charSet?: string;
    };

type LinkTag = {
  rel: string;
  href: string;
  type?: string;
  crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
};

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function buildMetaTags(options: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  keywords?: string;
  robots?: string;
}): MetaTag[] {
  const url = absoluteUrl(options.path ?? "/");
  const image = options.image ?? DEFAULT_OG_IMAGE;
  const imageAlt = options.imageAlt ?? `${SITE_NAME} — ${SITE_TAGLINE}`;

  return [
    { title: options.title },
    { name: "description", content: options.description },
    { name: "keywords", content: options.keywords ?? SITE_KEYWORDS },
    { name: "author", content: SITE_NAME },
    { name: "creator", content: SITE_NAME },
    { name: "publisher", content: SITE_NAME },
    { name: "robots", content: options.robots ?? "index, follow" },
    {
      name: "googlebot",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    { name: "theme-color", content: "#ffffff" },
    { name: "color-scheme", content: "light dark" },
    { name: "format-detection", content: "telephone=no" },
    { property: "og:title", content: options.title },
    { property: "og:description", content: options.description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: SITE_LOCALE },
    { property: "og:image", content: image },
    { property: "og:image:alt", content: imageAlt },
    { property: "og:image:width", content: "512" },
    { property: "og:image:height", content: "512" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: options.title },
    { name: "twitter:description", content: options.description },
    { name: "twitter:image", content: image },
    { name: "twitter:image:alt", content: imageAlt },
  ];
}

export function buildCanonicalLink(path = "/"): LinkTag {
  return {
    rel: "canonical",
    href: absoluteUrl(path),
  };
}

export function buildStructuredDataGraph(path = "/") {
  const pageUrl = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: DEFAULT_OG_IMAGE,
        },
        image: DEFAULT_OG_IMAGE,
        email: SITE_EMAIL,
        telephone: SITE_PHONE,
        sameAs: [...SOCIAL_PROFILES],
        founder: {
          "@type": "Person",
          name: "Rodrigo",
          jobTitle: "Fundador e Desenvolvedor de Sites",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: SITE_LANGUAGE,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: HOME_TITLE,
        description: HOME_DESCRIPTION,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        inLanguage: SITE_LANGUAGE,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: SITE_NAME,
        url: SITE_URL,
        image: DEFAULT_OG_IMAGE,
        description: SITE_DESCRIPTION,
        email: SITE_EMAIL,
        telephone: SITE_PHONE,
        areaServed: [
          { "@type": "Country", name: "Brasil" },
          { "@type": "City", name: "São Paulo" },
          { "@type": "City", name: "Porto Alegre" },
        ],
        priceRange: "$$",
        serviceType: [...SERVICE_TYPES],
        provider: { "@id": `${SITE_URL}/#organization` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Serviços digitais ShinodaLabs",
          itemListElement: SERVICE_TYPES.map((service, index) => ({
            "@type": "Offer",
            position: index + 1,
            itemOffered: {
              "@type": "Service",
              name: service,
              provider: { "@id": `${SITE_URL}/#organization` },
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}
