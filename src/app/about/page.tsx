"use client";

import {
  CodeIcon,
  ConstructionIcon,
  FolderCodeIcon,
  FrameIcon,
  Github,
  HelpingHandIcon,
  InstagramIcon,
  LinkedinIcon,
  Mail,
  TabletSmartphoneIcon,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { dayjs } from "@/libs/dayjs";

export default function AboutPage() {
  const router = useRouter();
  const ageInYears = dayjs().diff(dayjs("1997-11-28"), "year");

  return (
    <div className="w-full max-w-full text-zinc-50 flex flex-col space-y-12 relative py-10">
      <div className="flex flex-col max-w-6xl w-full mx-auto px-4">
        <X
          size={30}
          onClick={() => router.back()}
          className="fixed top-4 right-4 text-zinc-400 hover:text-lime-400 transition-all cursor-pointer"
        />
        <header className="flex flex-col items-center justify-center gap-4">
          <p className="text-base text-zinc-400 font-normal">
            Conheça quem sou
          </p>
          <h1 className="font-bold text-5xl text-zinc-100">Sobre mim</h1>
          <div className="flex items-center justify-center mt-3">
            <span className="w-24 h-1 bg-lime-400"></span>
          </div>
        </header>
      </div>

      <div className="flex flex-col-reverse md:flex-row max-w-6xl w-full mx-auto px-4 gap-5">
        <div className="w-full h-80 md:h-auto md:max-w-72 bg-me bg-no-repeat bg-cover rounded-md shadow" />
        <div className="flex-1 space-y-4">
          <h2 className="text-lime-400 text-center md:text-start font-medium text-2xl">
            Quem sou eu?
          </h2>
          <h3 className="text-3xl font-bold text-center md:text-start text-zinc-100">
            Sou o Rodrigo Shinoda, Desenvolvedor Fullstack Pleno
          </h3>
          <p className="font-normal text-sm text-zinc-400 text-center md:text-start">
            Desenvolvedor fullstack com 6 anos de experiência em Vue.js,
            Nuxt.js, React.js, Next.js, NodeJS, NestJS, criando aplicações web
            robustas e interfaces escaláveis. Sempre atualizado com tendências e
            melhores práticas, busco novos desafios para aprimorar minhas
            habilidades. Valorizo a comunicação eficaz e o trabalho em equipe,
            acreditando na colaboração para resultados excepcionais.
          </p>
          <div className="w-full h-[2px] bg-zinc-600" />
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center sm:text-left">
            <li className="font-normal text-sm text-zinc-400">
              <span className="text-zinc-200">Nome:</span> Rodrigo Viegas
              Rodrigues
            </li>
            <li className="font-normal text-sm text-zinc-400">
              <span className="text-zinc-200">Idade:</span> {ageInYears} anos
            </li>
            <li className="font-normal text-sm text-zinc-400">
              <span className="text-zinc-200">Email:</span>{" "}
              shinodalabs@gmail.com
            </li>
            <li className="font-normal text-sm text-zinc-400">
              <span className="text-zinc-200">Cidade:</span> Camaquã / RS -
              Brasil
            </li>
          </ul>

          <div className="flex flex-col md:flex-row gap-3 items-center">
            <a href="/curriculo.pdf" download="curriculo.pdf">
              <button className="bg-lime-500 text-zinc-950 px-6 py-2 w-full md:w-auto rounded-full hover:bg-lime-400 transition-all">
                Baixar Currículo
              </button>
            </a>
            <div className="w-[2px] md:w-16 md:h-[2px] h-6 bg-zinc-400" />
            <ul className="flex flex-row items-center gap-2">
              <li className="h-7 w-7 rounded-lg hover:bg-lime-400 hover:text-zinc-950 flex items-center justify-center transition-all cursor-pointer">
                <a
                  href="https://www.linkedin.com/in/shinoda-labs/"
                  target="_blank"
                >
                  <LinkedinIcon size={18} />
                </a>
              </li>
              <li className="h-7 w-7 rounded-lg hover:bg-lime-400 hover:text-zinc-950 flex items-center justify-center transition-all cursor-pointer">
                <a href="https://www.instagram.com/mr_shinodaa" target="_blank">
                  <InstagramIcon size={18} />
                </a>
              </li>
              <li className="h-7 w-7 rounded-lg hover:bg-lime-400 hover:text-zinc-950 flex items-center justify-center transition-all cursor-pointer">
                <a href="https://www.github.com/rodrigordgfs" target="_blank">
                  <Github size={18} />
                </a>
              </li>
              <li className="h-7 w-7 rounded-lg hover:bg-lime-400 hover:text-zinc-950 flex items-center justify-center transition-all cursor-pointer">
                <a href="mailto:shinodalabs@gmail.com">
                  <Mail size={18} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col max-w-6xl w-full mx-auto px-4 gap-5">
        <div className="flex flex-col gap-2">
          <p className="text-base text-center md:text-start text-zinc-400 font-normal">
            O que eu faço?
          </p>
          <h1 className="font-bold text-5xl text-center md:text-start text-zinc-100">
            Meus serviços
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-col gap-4 shadow bg-zinc-800 px-8 py-10 rounded-sm border-b-2 border-zinc-800 hover:border-lime-400 transition-all">
            <CodeIcon size={38} className="text-lime-400" />
            <h3 className="text-2xl font-bold text-zinc-100">
              Desenvolvimento Web
            </h3>
            <p className="font-normal text-sm text-zinc-400">
              Posso ajudar com o desenvolvimento do seu site, blog ou
              e-commerce.
            </p>
          </div>
          <div className="flex flex-col gap-4 shadow bg-zinc-800 px-8 py-10 rounded-sm border-b-2 border-zinc-800 hover:border-lime-400 transition-all">
            <FolderCodeIcon size={38} className="text-lime-400" />
            <h3 className="text-2xl font-bold text-zinc-100">
              Desenvolvimento de API
            </h3>
            <p className="font-normal text-sm text-zinc-400">
              Posso ajudar com o desenvolvimento de APIs robustas e escaláveis.
            </p>
          </div>
          <div className="flex flex-col gap-4 shadow bg-zinc-800 px-8 py-10 rounded-sm border-b-2 border-zinc-800 hover:border-lime-400 transition-all">
            <HelpingHandIcon size={38} className="text-lime-400" />
            <h3 className="text-2xl font-bold text-zinc-100">
              Consultoria em Desenvolvimento
            </h3>
            <p className="font-normal text-sm text-zinc-400">
              Ofereço consultoria para melhorar a performance e escalabilidade
              do seu projeto.
            </p>
          </div>
          <div className="flex flex-col gap-4 shadow bg-zinc-800 px-8 py-10 rounded-sm border-b-2 border-zinc-800 hover:border-lime-400 transition-all">
            <FrameIcon size={38} className="text-lime-400" />
            <h3 className="text-2xl font-bold text-zinc-100">
              Design de Interface
            </h3>
            <p className="font-normal text-sm text-zinc-400">
              Posso criar interfaces de usuário atraentes e funcionais para seu
              produto.
            </p>
          </div>
          <div className="flex flex-col gap-4 shadow bg-zinc-800 px-8 py-10 rounded-sm border-b-2 border-zinc-800 hover:border-lime-400 transition-all">
            <TabletSmartphoneIcon size={38} className="text-lime-400" />
            <h3 className="text-2xl font-bold text-zinc-100">
              Desenvolvimento Mobile
            </h3>
            <p className="font-normal text-sm text-zinc-400">
              Desenvolvo aplicativos móveis nativos e híbridos de alta
              qualidade.
            </p>
          </div>
          <div className="flex flex-col gap-4 shadow bg-zinc-800 px-8 py-10 rounded-sm border-b-2 border-zinc-800 hover:border-lime-400 transition-all">
            <ConstructionIcon size={38} className="text-lime-400" />
            <h3 className="text-2xl font-bold text-zinc-100">
              Manutenção e Suporte
            </h3>
            <p className="font-normal text-sm text-zinc-400">
              Ofereço serviços de manutenção e suporte contínuos para seu
              projeto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
