import { render, screen } from "@testing-library/react";
import BrandInfo from "./index";

describe("BrandInfo", () => {
  beforeEach(() => {
    render(<BrandInfo />);
  });

  it("deve renderizar o nome da marca com destaque", () => {
    // Busca o <span> específico com o texto exato "ShinodaLabs" e que tem a classe bg-clip-text
    const brandName = screen.getByText((content, element) => {
      return (
        element?.tagName.toLowerCase() === "span" &&
        content === "ShinodaLabs" &&
        element.classList.contains("bg-clip-text")
      );
    });
    expect(brandName).toBeInTheDocument();
  });

  it("deve renderizar o ícone Code", () => {
    // Como o SVG não tem role, busca pelo seletor CSS da classe do ícone lucide-code
    const codeIcon = document.querySelector("svg.lucide-code");
    expect(codeIcon).toBeInTheDocument();
    expect(codeIcon).toHaveClass("w-6", "h-6");
  });

  it("deve exibir o contato rápido com todos os itens", () => {
    // Verifica se o título Contato Rápido está presente
    expect(screen.getByRole("heading", { name: /contato rápido/i })).toBeInTheDocument();

    // Verifica se os 3 contatos aparecem (email, telefone e local)
    const contatos = screen.getAllByRole("listitem");
    expect(contatos).toHaveLength(3);

    // Verifica se o email aparece
    expect(screen.getByText("shinodalabs@gmail.com")).toBeInTheDocument();

    // Verifica se o telefone aparece
    expect(screen.getByText("+55 (51) 99623-6798")).toBeInTheDocument();

    // Verifica se o endereço aparece
    expect(screen.getByText("Camaquã, RS, Brasil")).toBeInTheDocument();
  });
});
