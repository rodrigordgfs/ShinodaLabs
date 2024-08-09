import {
  CodeIcon,
  ConstructionIcon,
  FolderCodeIcon,
  FrameIcon,
  HelpingHandIcon,
  TabletSmartphoneIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function AbouteServices() {
  const t = useTranslations("AboutPage");

  return (
    <div className="flex flex-col max-w-6xl w-full mx-auto px-4 gap-5">
      <div className="flex flex-col gap-2">
        <p className="text-base text-center md:text-start text-zinc-400 font-normal">
          {t("what_i_do")}
        </p>
        <h1 className="font-bold text-5xl text-center md:text-start text-zinc-100">
          {t("my_services")}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex flex-col gap-4 shadow bg-zinc-800 px-8 py-10 rounded-sm border-b-2 border-zinc-800 hover:border-lime-400 transition-all">
          <CodeIcon size={38} className="text-lime-400" />
          <h3 className="text-2xl font-bold text-zinc-100">
            Desenvolvimento Web
          </h3>
          <p className="font-normal text-sm text-zinc-400">
            Posso ajudar com o desenvolvimento do seu site, blog ou e-commerce.
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
            Ofereço consultoria para melhorar a performance e escalabilidade do
            seu projeto.
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
            Desenvolvo aplicativos móveis nativos e híbridos de alta qualidade.
          </p>
        </div>
        <div className="flex flex-col gap-4 shadow bg-zinc-800 px-8 py-10 rounded-sm border-b-2 border-zinc-800 hover:border-lime-400 transition-all">
          <ConstructionIcon size={38} className="text-lime-400" />
          <h3 className="text-2xl font-bold text-zinc-100">
            Manutenção e Suporte
          </h3>
          <p className="font-normal text-sm text-zinc-400">
            Ofereço serviços de manutenção e suporte contínuos para seu projeto.
          </p>
        </div>
      </div>
    </div>
  );
}
