import HomeContent from "./components/HomeContent";
import HomeFooter from "./components/HomeFooter";
import HomeHeader from "./components/HomeHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shinoda Labs - Transformando Ideias em Realidade Digital",
  description:
    "Bem-vindo à Shinoda Labs, onde transformamos suas ideias em soluções digitais inovadoras. Oferecemos serviços de design web personalizados para criar experiências únicas e envolventes.",
  keywords: [
    "design web",
    "Shinoda Labs",
    "desenvolvimento web",
    "UI/UX",
    "branding",
    "web design criativo",
    "sites responsivos",
  ],
  authors: [
    {
      name: "Shinoda Labs",
      url: "https://shinodalabs.com.br",
    },
  ],
  robots: "index, follow",
  openGraph: {
    title: "Shinoda Labs - Transformando Ideias em Realidade Digital",
    description:
      "Bem-vindo à Shinoda Labs, onde transformamos suas ideias em soluções digitais inovadoras. Oferecemos serviços de design web personalizados para criar experiências únicas e envolventes.",
    images: [
      {
        url: "/seo.png",
        width: 1200,
        height: 630,
        alt: "Imagem representando criatividade e inovação da Shinoda Labs",
      },
    ],
    url: "https://shinodalabs.com.br",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shinoda Labs - Transformando Ideias em Realidade Digital",
    description:
      "Bem-vindo à Shinoda Labs, onde transformamos suas ideias em soluções digitais inovadoras. Oferecemos serviços de design web personalizados para criar experiências únicas e envolventes.",
    images: [
      {
        url: "/seo.png",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="w-full max-w-full h-screen max-h-screen text-zinc-50 flex flex-col bg-pattern bg-no-repeat bg-center">
      <div className="flex flex-col max-w-6xl w-full h-screen mx-auto px-4">
        <HomeHeader />
        <HomeContent />
        <HomeFooter />
      </div>
    </div>
  );
}
