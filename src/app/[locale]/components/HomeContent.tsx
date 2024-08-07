"use client";

import { useTranslations } from "next-intl";
import { ReactTyped } from "react-typed";

export default function HomeContent() {
  const t = useTranslations("HomePage");

  return (
    <main className="flex-1 flex flex-col gap-6 items-center justify-center">
      <h1 className="text-center font-bold text-6xl">Rodrigo Shinoda</h1>
      <p className="text-center font-medium text-3xl">
        {t("i_am")}{" "}
        <ReactTyped
          strings={[t("dev_fullstack"), t("dev_web"), t("ui_ux")]}
          typeSpeed={100}
          loop
          backSpeed={20}
          cursorChar="|"
          showCursor={true}
        />
      </p>
    </main>
  );
}
