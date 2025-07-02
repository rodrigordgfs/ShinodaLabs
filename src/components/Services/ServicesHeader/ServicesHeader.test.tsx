import { render, screen, within } from "@testing-library/react";
import { ServicesHeader } from "./index";

describe("ServicesHeader", () => {
  it("deve renderizar o header com data-testid", () => {
    render(<ServicesHeader />);
    const header = screen.getByTestId("services-header");
    expect(header).toBeInTheDocument();
  });

  it('deve renderizar o título com o texto "Serviços"', () => {
    render(<ServicesHeader />);
    const heading = screen.getByRole("heading", { name: /serviços/i });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveAttribute("id", "services-title");
  });

  it('deve renderizar o parágrafo com texto descritivo', () => {
    render(<ServicesHeader />);
    const header = screen.getByTestId('services-header');

    // Opção 1: pegar todos e validar algum
    const paragraphs = within(header).getAllByText((_, element) =>
      element?.textContent?.includes('transformar suas ideias em realidade digital') ?? false
    );
    expect(paragraphs.length).toBeGreaterThan(0);
  });
});
