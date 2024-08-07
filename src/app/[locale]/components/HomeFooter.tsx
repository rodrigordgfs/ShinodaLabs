'use client'

import { Github, InstagramIcon, LinkedinIcon, Mail } from "lucide-react";
import { Link, usePathname, useRouter } from "@/navigation";
import { useEffect, useState } from "react";

export default function HomeFooter() {
  const pathName = usePathname();

  const [lang, setLang] = useState("br");
  
  useEffect(() => {
    setLang(window.location.href.split('/')[3]);
  }, [])

  return (
    <footer className="flex flex-row items-center justify-between pb-12">
      <ul className="uppercase flex flex-col gap-5 ml-4">
        <Link
          href={pathName}
          locale="br"
          className={`transform rotate-270 origin-left-bottom whitespace-nowrap hover:text-lime-400 transition-all cursor-pointer ${lang === 'pt' && 'text-lime-400'}`}
        >
          Bra
        </Link>
        <Link
          href={pathName}
          locale="en"
          className={`transform rotate-270 origin-left-bottom whitespace-nowrap hover:text-lime-400 transition-all cursor-pointer ${lang === 'en' && 'text-lime-400'}`}
        >
          Eng
        </Link>
        <Link
          href={pathName}
          locale="es"
          className={`transform rotate-270 origin-left-bottom whitespace-nowrap hover:text-lime-400 transition-all cursor-pointer ${lang === 'es' && 'text-lime-400'}`}
        >
          Esp
        </Link>
      </ul>
      <ul className="flex flex-col items-center gap-2">
        <li className="h-7 w-7 rounded-lg hover:bg-lime-400 hover:text-zinc-950 flex items-center justify-center transition-all cursor-pointer">
          <LinkedinIcon size={18} />
        </li>
        <li className="h-7 w-7 rounded-lg hover:bg-lime-400 hover:text-zinc-950 flex items-center justify-center transition-all cursor-pointer">
          <InstagramIcon size={18} />
        </li>
        <li className="h-7 w-7 rounded-lg hover:bg-lime-400 hover:text-zinc-950 flex items-center justify-center transition-all cursor-pointer">
          <Github size={18} />
        </li>
        <li className="h-7 w-7 rounded-lg hover:bg-lime-400 hover:text-zinc-950 flex items-center justify-center transition-all cursor-pointer">
          <Mail size={18} />
        </li>
      </ul>
    </footer>
  );
}
