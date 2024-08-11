import Header from "@/components/Header";
import AboutDetails from "./components/AboutDetails";
import AbouteServices from "./components/AboutServices";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Sobre a Shinoda Labs - Nossa Missão e Equipe",
  description:
    "Conheça a Shinoda Labs: nossa história, missão e a equipe dedicada a transformar ideias em soluções digitais inovadoras. Descubra como estamos redefinindo o design web com criatividade e paixão.",
  keywords: [
    "sobre Shinoda Labs",
    "nossa missão",
    "nossa equipe",
    "história da Shinoda Labs",
    "valores da Shinoda Labs",
    "design web inovador",
    "tecnologia e criatividade",
  ],
  authors: [
    {
      name: "Shinoda Labs",
      url: "https://shinodalabs.com.br",
    },
  ],
  robots: "index, follow",
  openGraph: {
    title: "Sobre a Shinoda Labs - Nossa Missão e Equipe",
    description:
      "Conheça a Shinoda Labs: nossa história, missão e a equipe dedicada a transformar ideias em soluções digitais inovadoras. Descubra como estamos redefinindo o design web com criatividade e paixão.",
    images: [
      {
        url: "/seo.png",
        width: 1200,
        height: 630,
        alt: "Equipe da Shinoda Labs colaborando em soluções digitais",
      },
    ],
    url: "https://shinodalabs.com.br/sobre",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre a Shinoda Labs - Nossa Missão e Equipe",
    description:
      "Conheça a Shinoda Labs: nossa história, missão e a equipe dedicada a transformar ideias em soluções digitais inovadoras. Descubra como estamos redefinindo o design web com criatividade e paixão.",
    images: [
      {
        url: "/seo.png",
      },
    ],
  },
};

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  return (
    <div className="w-full max-w-full text-zinc-50 flex flex-col space-y-16 relative py-10">
      <Header title={t("title")} description={t("know_me")} />
      <AboutDetails />
      <AbouteServices />
    </div>
  );
}
