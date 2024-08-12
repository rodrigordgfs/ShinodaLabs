import Header from "@/components/Header";
import AboutDetails from "./components/AboutDetails";
import AbouteServices from "./components/AboutServices";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import AboutMetadata from "./meta";

export const metadata: Metadata = AboutMetadata;

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
