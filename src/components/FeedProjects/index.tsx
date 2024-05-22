import FeedProjectItem from "../FeedProjectItem";

export interface Project {
  id: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export default function FeedProjects() {
  const PROJETOS = [
    {
      id: "6f8f5947-beec-4ba1-ba56-7d3700bc1859",
      date: "2024-05-22",
      title: "Projeto 1",
      description:
        "Nulla magna excepteur culpa reprehenderit sit ea reprehenderit pariatur elit ea cupidatat enim sit nostrud.",
      tags: ["react", "next.js"],
      image: "https://via.placeholder.com/800x600",
    },
    {
      id: "24ab435f-8e36-46b5-8db2-c65b9fb55156",
      date: "2024-05-22",
      title: "Projeto 1",
      description:
        "Nulla magna excepteur culpa reprehenderit sit ea reprehenderit pariatur elit ea cupidatat enim sit nostrud.",
      tags: ["react", "next.js", "react", "next.js", "react", "next.js", "react", "next.js", ],
      image: "https://via.placeholder.com/800x600",
    },
    {
      id: "a8d43673-51fb-4e0e-99f9-c2e3e3a49585",
      date: "2024-05-22",
      title: "Projeto 1",
      description:
        "Nulla magna excepteur culpa reprehenderit sit ea reprehenderit pariatur elit ea cupidatat enim sit nostrud.",
      tags: ["react", "next.js"],
      image: "https://via.placeholder.com/800x600",
    },
  ] as Project[];

  return (
    <div className="flex flex-col pt-5">
      <h2 className="font-bold text-3xl text-zinc-900 mb-4">Últimos Projetos</h2>
      {PROJETOS.map((project) => {
        return <FeedProjectItem key={project.id} {...project} />;
      })}
    </div>
  );
}
