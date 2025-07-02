import { render, screen } from "@testing-library/react";
import { ProjectCard } from "./index";

// Mock do next/image corretamente
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ComponentProps<"img">) => <img alt="" {...props} />,
}));

const defaultProps = {
  title: "Meu Projeto Incrível",
  description: "Este é um projeto incrível de demonstração.",
  image: "/images/project.jpg",
  tech: ["React", "TypeScript", "Tailwind"],
  liveUrl: "https://example.com",
  githubUrl: "https://github.com/example",
  featured: true,
  category: "Frontend",
};

describe("<ProjectCard />", () => {
  beforeEach(() => {
    render(<ProjectCard {...defaultProps} />);
  });

  it("renderiza o título do projeto", () => {
    expect(screen.getByText(/meu projeto incrível/i)).toBeInTheDocument();
  });

  it("renderiza a descrição do projeto", () => {
    expect(
      screen.getByText(/projeto incrível de demonstração/i)
    ).toBeInTheDocument();
  });

  it("renderiza a imagem com alt correto", () => {
    const img = screen.getByTestId("project-image") as HTMLImageElement; // Assegura que o elemento é uma imagem
    expect(img).toBeInTheDocument();
    expect(img.alt).toMatch(/screenshot do projeto/i);
  });

  it("renderiza links para o projeto ao vivo e GitHub", () => {
    const liveLink = screen.getByLabelText(/acessar meu projeto incrível/i);
    const githubLink = screen.getByLabelText(
      /ver código no github de meu projeto incrível/i
    );
    expect(liveLink).toHaveAttribute("href", defaultProps.liveUrl);
    expect(githubLink).toHaveAttribute("href", defaultProps.githubUrl);
  });

  it("renderiza o destaque se featured for true", () => {
    expect(screen.getByText(/destaque/i)).toBeInTheDocument();
  });

  it("renderiza a categoria", () => {
    expect(screen.getByText(defaultProps.category)).toBeInTheDocument();
  });

  it("renderiza todas as tecnologias utilizadas", () => {
    defaultProps.tech.forEach((tech) => {
      // Verifica se o nome da tecnologia está sendo exibido
      expect(screen.getByText(tech)).toBeInTheDocument();

      // Verifica se o ícone da tecnologia está sendo exibido
      const icon = screen.getByTestId(`${tech}-icon`); // Aqui buscamos pelo data-testid do ícone
      expect(icon).toBeInTheDocument();
    });
  });

  it("renderiza o ícone correto para cada tecnologia", () => {
    // Verifica se os ícones das tecnologias específicas estão sendo renderizados corretamente
    expect(screen.getByTestId("React-icon")).toBeInTheDocument();
    expect(screen.getByTestId("TypeScript-icon")).toBeInTheDocument();
    expect(screen.getByTestId("Tailwind-icon")).toBeInTheDocument();
  });
});
