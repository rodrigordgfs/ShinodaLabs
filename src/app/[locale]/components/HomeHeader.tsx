import Link from "next/link";
import { useTranslations } from "next-intl";

export default function HomeHeader() {
  const t = useTranslations("Header");

  return (
    <header className="flex flex-row items-center justify-center py-12">
      <nav>
        <ul className="flex flex-row space-x-6 items-center">
          <li className="hover:text-lime-400 transition-all text-center">
            <Link href="/about" prefetch>
              {t("about")}
            </Link>
          </li>
          <li className="hover:text-lime-400 transition-all text-center">
            <Link href="/resume" prefetch>
              {t("resume")}
            </Link>
          </li>
          <li className="hover:text-lime-400 transition-all text-center">
            <Link href="/projects" prefetch>
              {t("projects")}
            </Link>
          </li>
          <li className="hover:text-lime-400 transition-all text-center">
            <Link href="/contact" prefetch>
              {t("contact")}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
