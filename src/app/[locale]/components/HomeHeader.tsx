import Link from "next/link";
import { useTranslations } from "next-intl";

export default function HomeHeader() {
  const t = useTranslations("Header");

  return (
    <header className="flex flex-row items-center justify-center py-12">
      <nav>
        <ul className="flex flex-row space-x-6">
          <li className="hover:text-lime-400 transition-all">
            <Link href="/about" prefetch>
              {t("about")}
            </Link>
          </li>
          <li className="hover:text-lime-400 transition-all">
            <Link href="/resume" prefetch>
              {t("resume")}
            </Link>
          </li>
          <li className="hover:text-lime-400 transition-all">
            <Link href="/projects" prefetch>
              {t("projects")}
            </Link>
          </li>
          <li className="hover:text-lime-400 transition-all">
            <Link href="/contact" prefetch>
              {t("contact")}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
