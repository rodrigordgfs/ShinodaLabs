import { render, screen, fireEvent } from "@testing-library/react";
import FooterBottom from "./index";

describe("FooterBottom", () => {
  beforeEach(() => {
    render(<FooterBottom />);
  });

  it("deve exibir o texto de copyright com o coração", () => {
    const copyrightText = screen.getByText(
      /© \d{4} Dev Portfolio\. Feito com/i
    );
    expect(copyrightText).toBeInTheDocument();

    // Seleciona diretamente o SVG do coração pelo seletor da classe que o lucide adiciona
    const heartIcon = document.querySelector("svg.lucide-heart");
    expect(heartIcon).toBeInTheDocument();
    expect(heartIcon).toHaveClass("animate-pulse");
  });

  it("deve mostrar as tecnologias usadas com o ícone Code", () => {
    expect(
      screen.getByText(/NextJS \+ TypeScript \+ Tailwind/i)
    ).toBeInTheDocument();
    const codeIcon = document.querySelector("svg.lucide-code");
    expect(codeIcon).toBeInTheDocument();
  });

  it("botão 'Voltar ao topo' deve existir com aria-label e title", () => {
    const button = screen.getByRole("button", { name: /voltar ao topo/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("title", "Voltar ao topo");
  });

  it("ao clicar no botão, window.scrollTo deve ser chamado com top 0 e behavior smooth", () => {
    const scrollToMock = jest
      .spyOn(window, "scrollTo")
      .mockImplementation(() => {});

    const button = screen.getByRole("button", { name: /voltar ao topo/i });
    fireEvent.click(button);

    expect(scrollToMock).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });

    scrollToMock.mockRestore();
  });
});
