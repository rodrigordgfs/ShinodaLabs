import Image from "next/image";

interface ProjectCardProps {
  title: string;
  image: string;
  link: string;
}

export default function ProjectCard({ title, image, link }: ProjectCardProps) {
  return (
    <div className="relative overflow-hidden group">
      <Image
        loading="lazy"
        src={image}
        width={300}
        height={200}
        alt={title}
        className="w-full h-auto"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
        <div className="text-center text-white">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <a
            href={link}
            className="text-zinc-200 font-semibold hover:text-lime-600 transition-all"
            target="_blank"
          >
            Ver Projeto
          </a>
        </div>
      </div>
    </div>
  );
}
