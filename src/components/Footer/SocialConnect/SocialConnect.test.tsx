import { render, screen } from "@testing-library/react";
import SocialConnect from "./index";

describe("SocialConnect", () => {
  beforeEach(() => {
    render(<SocialConnect />);
  });

  it("deve renderizar o título com o ícone Star", () => {
    const heading = screen.getByRole("heading", { name: /conecte-se/i });
    expect(heading).toBeInTheDocument();

    // O ícone Star tem aria-hidden, pegamos pelo seletor de classe dentro do heading
    const starIcon = heading.querySelector("svg.lucide-star");
    expect(starIcon).toBeInTheDocument();
  });

  it("deve renderizar os links sociais com os ícones e labels corretos", () => {
    const links = screen.getAllByRole("link");
    expect(links.length).toBe(4);

    const labels = ["GitHub", "LinkedIn", "Instagram", "Twitter"];

    labels.forEach((label) => {
      const link = screen.getByRole("link", { name: new RegExp(`acessar ${label}`, "i") });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("title", label);

      // Verifica se dentro do link existe o svg do ícone (aria-hidden=true)
      const icon = link.querySelector("svg");
      expect(icon).toBeInTheDocument();
    });
  });

  it("deve renderizar o status Disponível com indicador verde e texto", () => {
    const statusText = screen.getByText(/disponível/i);
    expect(statusText).toBeInTheDocument();

    const statusDescription = screen.getByText(/aceitando novos projetos/i);
    expect(statusDescription).toBeInTheDocument();

    const pulseDot = statusText.previousSibling;
    expect(pulseDot).toBeInTheDocument();
    // O dot não tem role, mas tem a classe que indica a animação
    // Para garantir, podemos buscar por um elemento com a classe animate-pulse dentro do container
    const container = statusText.parentElement;
    expect(container?.querySelector(".animate-pulse")).toBeInTheDocument();
  });
});
