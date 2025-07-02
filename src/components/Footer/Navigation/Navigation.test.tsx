import { render, screen, fireEvent } from "@testing-library/react";
import Navigation from "./index";

describe("Navigation", () => {
  beforeEach(() => {
    render(<Navigation />);
  });

  it("deve renderizar o título com o ícone Rocket", () => {
    const heading = screen.getByRole("heading", { name: /navegação/i });
    expect(heading).toBeInTheDocument();

    // O ícone tem aria-hidden, então pegamos pelo seletor de classe
    const rocketIcon = heading.querySelector("svg.lucide-rocket");
    expect(rocketIcon).toBeInTheDocument();
  });

  it("deve renderizar todos os links de navegação", () => {
    const links = screen.getAllByRole("button");
    expect(links.length).toBe(5);
    expect(links[0]).toHaveTextContent("Início");
    expect(links[4]).toHaveTextContent("Contato");
  });

  it("deve chamar scrollIntoView ao clicar em um botão", () => {
    // Mock do método scrollIntoView
    const scrollIntoViewMock = jest.fn();
    // Mock do document.querySelector para retornar elemento com scrollIntoView mockado
    jest.spyOn(document, "querySelector").mockImplementation(() => {
      return {
        scrollIntoView: scrollIntoViewMock,
      } as unknown as Element;
    });

    const botao = screen.getByRole("button", {
      name: /navegar para projetos/i,
    });
    fireEvent.click(botao);

    expect(document.querySelector).toHaveBeenCalledWith("#projects");
    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: "smooth" });
  });
});
