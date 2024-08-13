import Header from "@/components/Header";
import type { Metadata } from "next";
import ContactMetadata from "./meta";
import { useTranslations } from "next-intl";
import { Mail, MapPin, Phone, User2 } from "lucide-react";
import FormEmail from "./components/FormEmail";

export const metadata: Metadata = ContactMetadata;

export default function ContactPage() {
  const t = useTranslations("ContactPage");

  return (
    <div className="w-full max-w-full text-zinc-50 flex flex-col space-y-16 relative py-10">
      <Header title={t("title")} description={t("subtitle")} />

      <div className="flex flex-col md:flex-row max-w-6xl w-full mx-auto px-4 gap-10">
        <div className="flex flex-col flex-1 gap-7">
          <h2 className="font-medium text-2xl mb-6">{t("message_me")}</h2>
          <FormEmail />
        </div>
        <div className="flex flex-col flex-1 gap-7">
          <h2 className="font-medium text-2xl mb-6">{t("contact_info")}</h2>

          <p>{t("contact_info_message")}</p>

          <ul className="flex flex-col">
            <li className="flex flex-row gap-5">
              <User2 size={42} className="text-lime-400 m-2" />
              <div className="h-full w-[2px] bg-zinc-500" />
              <div className="flex flex-col">
                <p className="font-semibold text-md">{t("name")}</p>
                <p className="font-medium">Rodrigo Viegas Rodrigues</p>
              </div>
            </li>
            <li className="flex flex-row gap-5">
              <MapPin size={42} className="text-lime-400 m-2" />
              <div className="h-full w-[2px] bg-zinc-500" />
              <div className="flex flex-col">
                <p className="font-semibold text-md">{t("location")}</p>
                <p className="font-medium">Camaquã / RS - Brasil</p>
              </div>
            </li>
            <li className="flex flex-row gap-5">
              <Phone size={42} className="text-lime-400 m-2" />
              <div className="h-full w-[2px] bg-zinc-500" />
              <div className="flex flex-col">
                <p className="font-semibold text-md">{t("phone")}</p>
                <p className="font-medium">+ 55 51 9 9623 6798</p>
              </div>
            </li>
            <li className="flex flex-row gap-5">
              <Mail size={42} className="text-lime-400 m-2" />
              <div className="h-full w-[2px] bg-zinc-500" />
              <div className="flex flex-col">
                <p className="font-semibold text-md">{t("mail")}</p>
                <p className="font-medium">shinodalabs@gmail.com</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
