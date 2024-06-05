import FeedProjectItem from "../FeedProjectItem";

export interface Project {
  id: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  url: string;
  repository: string | undefined;
}

export default function FeedProjects() {
  const PROJETOS: Project[] = [
    {
      id: "6f8f5947-beec-4ba1-ba56-7d3700bc1859",
      date: "2022-11-28",
      title: "To Do List",
      description: "Projeto criado como desafio do bootcamp da Rocketseat.",
      tags: ["react", "typescript", "css modules", "phosphor icons"],
      image: "https://i.imgur.com/6CG03RE.png",
      url: "https://to-do-list-pi-tawny.vercel.app/",
      repository: "https://github.com/rodrigordgfs/ToDo-List",
    },
    {
      id: "5250981b-0711-47cb-9759-4eb687a8595c",
      date: "2023-01-23",
      title: "R Chat",
      description:
        "Chat criado para colocar em pratica os conhecimentos adiquirido sobre React.",
      tags: [
        "react",
        "typescript",
        "tailwindcss",
        "context api",
        "firebase",
        "date-fns",
      ],
      image: "https://i.imgur.com/VxgqCzY.png",
      url: "https://r-chat.vercel.app/",
      repository: "https://github.com/rodrigordgfs/R-Chat",
    },
    {
      id: "724615df-1d24-42af-a5bd-1fd741a4d310",
      date: "2022-12-19",
      title: "Ignite Timer",
      description: "Projeto criado como desafio do bootcamp da Rocketseat",
      tags: [
        "react",
        "typescript",
        "styled components",
        "zod",
        "react hook forms",
        "date-fns",
      ],
      image: "https://i.imgur.com/LrJSAcK.png",
      url: "https://ignite-timer-brown-tau.vercel.app/",
      repository: "https://github.com/rodrigordgfs/Ignite-Timer",
    },
    {
      id: "9a291fe2-861a-4a4f-943e-8c1be7dbd2c7",
      date: "2023-02-08",
      title: "Coffee Delivery",
      description: "Projeto criado como desafio do bootcamp da Rocketseat.",
      tags: ["react", "typescript", "styled components", "context api"],
      image: "https://i.imgur.com/JQlmeoh.png",
      url: "https://coffee-delivery-sigma-gules.vercel.app/",
      repository: "https://github.com/rodrigordgfs/Coffee-Delivery",
    },
    {
      id: "a59d7579-598d-4c06-944a-37f6912a9ae9",
      date: "2023-02-14",
      title: "DT Money",
      description: "Projeto criado como desafio do bootcamp da Rocketseat.",
      tags: [
        "react",
        "typescript",
        "styled components",
        "context api",
        "zod",
        "react hook forms",
      ],
      image: "https://i.imgur.com/fXdilpE.png",
      url: "https://dt-money-plum.vercel.app/",
      repository: "https://github.com/rodrigordgfs/DT-Money",
    },
    {
      id: "eb1d547d-fd4b-4934-b6ce-2e05aed7f8b7",
      date: "2023-02-16",
      title: "GitHub Blog",
      description: "Projeto criado como desafio do bootcamp da Rocketseat.",
      tags: [
        "react",
        "typescript",
        "styled components",
        "context api",
        "zod",
        "react hook forms",
      ],
      image: "https://i.imgur.com/an0gTPC.png",
      url: "https://github-blog-rose.vercel.app/",
      repository: "https://github.com/rodrigordgfs/Github-Blog",
    },
    {
      id: "748d4383-006c-4387-b94b-d6ef491e4726",
      date: "2024-03-10",
      title: "Materialize Imóveis",
      description: "Site para a Materialize Imóveis",
      tags: [
        "wordpress",
        "elementor",
        "jet engine"
      ],
      image: "https://i.imgur.com/K4nchoj.png",
      url: "https://materializeimoveis.com.br/",
      repository: undefined,
    },
  ];

  const ordenedProjects = PROJETOS.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="flex flex-col pt-5">
      {ordenedProjects.map((project) => {
        return <FeedProjectItem key={project.id} {...project} />;
      })}
    </div>
  );
}
