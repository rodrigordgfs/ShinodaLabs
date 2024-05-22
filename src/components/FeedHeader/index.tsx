"use client";

import {
  CoffeeIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  PhoneCallIcon,
  YoutubeIcon,
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { useRipple } from "react-use-ripple";

export default function FeedHeader() {
  const refCoffee = useRef<HTMLAnchorElement | null>(null);
  const refPhone = useRef<HTMLAnchorElement | null>(null);

  useRipple(refCoffee, {
    animationLength: 600,
    rippleColor: "rgba(255,255,255,0.6)",
  });

  useRipple(refPhone, {
    animationLength: 600,
    rippleColor: "rgba(255,255,255,0.6)",
  });

  return (
    <div className="flex flex-col md:flex-row gap-6 border-b-2 pb-6 border-zinc-200">
      <div className="md:flex-1 flex flex-col items-center md:items-start">
        <Image
          src="https://github.com/rodrigordgfs.png"
          className="shadow rounded-full"
          width={128}
          height={128}
          alt="Imagem do Rodrigo Shinoda"
        />
        <h1 className="text-xl font-bold mt-2 text-zinc-900  text-center md:text-start">
          Rodrigo Shinoda
        </h1>
        <p className="text-zinc-500 font-normal text-sm  text-center md:text-start">
          @mrshinodaa - ShinodaLabs - Brasil
        </p>
        <p className="text-zinc-500 font-normal text-sm text-center md:text-start">
          Desenvolvedor Frontend Pleno | Grupo Lins Ferrão
        </p>
        <div className="flex flex-row gap-2 mt-2">
          <a
            href="https://www.youtube.com"
            target="_blank"
            className="w-7 h-7 rounded-full shadow bg-zinc-900 flex items-center justify-center hover:bg-orange-500 focus:bg-orange-600 transition-all cursor-pointer"
          >
            <YoutubeIcon size={14} className="text-white" />
          </a>
          <a
            href="https://www.instagram.com/mr_shinodaa"
            target="_blank"
            className="w-7 h-7 rounded-full shadow bg-zinc-900 flex items-center justify-center hover:bg-orange-500 focus:bg-orange-600 transition-all cursor-pointer"
          >
            <InstagramIcon size={14} className="text-white" />
          </a>
          <a
            href="https://www.github.com/rodrigordgfs"
            target="_blank"
            className="w-7 h-7 rounded-full shadow bg-zinc-900 flex items-center justify-center hover:bg-orange-500 focus:bg-orange-600 transition-all cursor-pointer"
          >
            <GithubIcon size={14} className="text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/shinoda-labs/"
            target="_blank"
            className="w-7 h-7 rounded-full shadow bg-zinc-900 flex items-center justify-center hover:bg-orange-500 focus:bg-orange-600 transition-all cursor-pointer"
          >
            <LinkedinIcon size={14} className="text-white" />
          </a>
        </div>
      </div>
      <div className="flex flex-row md:flex-col md:max-w-60 md:w-full items-center justify-center md:items-start md:justify-start gap-2">
        <a
          ref={refCoffee}
          // href={repository}
          target="_blank"
          className="w-full h-10 rounded-lg bg-orange-500 hover:bg-orange-600 focus:bg-orange-700 transition-all text-white font-semibold  flex flex-row items-center justify-center gap-2"
        >
          <CoffeeIcon size={16} className="text-white" />
          Buy me a coffee
        </a>
        <a
          ref={refPhone}
          href="https://wa.me/5551996236798"
          target="_blank"
          className="w-full h-10 rounded-lg bg-zinc-500 hover:bg-zinc-600 focus:bg-zinc-700 transition-all text-white font-semibold  flex flex-row items-center justify-center gap-2"
        >
          <PhoneCallIcon size={16} className="text-white" />
          Fale comigo
        </a>
      </div>
    </div>
  );
}
