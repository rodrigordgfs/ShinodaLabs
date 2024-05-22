import {
  CoffeeIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  PhoneCallIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Image from "next/image";

export default function FeedHeader() {
  return (
    <div className="flex flex-col md:flex-row gap-6 border-b-2 pb-4 border-zinc-200">
      <div className="md:flex-1 flex flex-col items-center md:items-start">
        <Image
          src="https://github.com/rodrigordgfs.png"
          className="shadow rounded-full"
          width={128}
          height={128}
          alt="Imagem do Rodrigo Shinoda"
        />
        <h1 className="text-xl font-bold mt-2 text-zinc-900  text-center md:text-start">
          Rodrigo &apos;&apos;Shinoda&apos;&apos; Rodrigues
        </h1>
        <p className="text-zinc-500 font-normal text-sm  text-center md:text-start">
          @mrshinodaa - ShinodaLabs - Brasil
        </p>
        <p className="text-zinc-500 font-normal text-sm text-center md:text-start">
          Desenvolvedor Frontend Pleno | Grupo Lins Ferrão
        </p>
        <div className="flex flex-row gap-2 mt-2">
          <div className="w-7 h-7 rounded-full shadow bg-zinc-900 flex items-center justify-center hover:bg-orange-500 focus:bg-orange-600 transition-all cursor-pointer">
            <YoutubeIcon size={14} className="text-white" />
          </div>
          <div className="w-7 h-7 rounded-full shadow bg-zinc-900 flex items-center justify-center hover:bg-orange-500 focus:bg-orange-600 transition-all cursor-pointer">
            <InstagramIcon size={14} className="text-white" />
          </div>
          <div className="w-7 h-7 rounded-full shadow bg-zinc-900 flex items-center justify-center hover:bg-orange-500 focus:bg-orange-600 transition-all cursor-pointer">
            <GithubIcon size={14} className="text-white" />
          </div>
          <div className="w-7 h-7 rounded-full shadow bg-zinc-900 flex items-center justify-center hover:bg-orange-500 focus:bg-orange-600 transition-all cursor-pointer">
            <LinkedinIcon size={14} className="text-white" />
          </div>
        </div>
      </div>
      <div className="flex flex-row md:flex-col items-center justify-center md:items-start md:justify-start gap-2">
        <button className="w-full md:w-48 h-12 bg-orange-500 text-white rounded-md hover:bg-orange-400 focus:bg-orange-600 transition-all flex flex-row items-center justify-center gap-2">
          <CoffeeIcon size={24} className="text-white" />
          Buy me a coffee
        </button>
        <button className="w-full md:w-48 h-12 bg-zinc-500 text-white rounded-md hover:bg-zinc-400 focus:bg-zinc-600 transition-all flex flex-row items-center justify-center gap-2">
          <PhoneCallIcon size={24} className="text-white" />
          Fale comigo
        </button>
      </div>
    </div>
  );
}
