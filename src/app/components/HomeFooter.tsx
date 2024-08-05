import { Github, InstagramIcon, LinkedinIcon, Mail } from "lucide-react";

export default function HomeFooter() {
  return (
    <footer className="flex flex-row items-center justify-between pb-12">
      <ul className="uppercase flex flex-col gap-5 ml-4">
        <li className="transform rotate-270 origin-left-bottom whitespace-nowrap hover:text-lime-400 transition-all cursor-pointer">
          Bra
        </li>
        <li className="transform rotate-270 origin-left-bottom whitespace-nowrap hover:text-lime-400 transition-all cursor-pointer">
          Eua
        </li>
        <li className="transform rotate-270 origin-left-bottom whitespace-nowrap hover:text-lime-400 transition-all cursor-pointer">
          Esp
        </li>
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
