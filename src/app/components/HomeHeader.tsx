import Link from "next/link";

export default function HomeHeader() {
  return (
    <header className="flex flex-row items-center justify-center py-12">
      <nav>
        <ul className="flex flex-row space-x-6">
          <li className="hover:text-lime-400 transition-all">
            <Link href="/about" prefetch>Sobre</Link>
          </li>
          <li className="hover:text-lime-400 transition-all">
            <Link href="/resume" prefetch>Resumo</Link>
          </li>
          <li className="hover:text-lime-400 transition-all">
            <Link href="/projects" prefetch>Projetos</Link>
          </li>
          <li className="hover:text-lime-400 transition-all">
            <Link href="/contact" prefetch>Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
