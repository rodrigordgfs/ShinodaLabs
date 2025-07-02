import React from "react";
import { render, screen } from "@testing-library/react";
import Services from "./index";

describe("Services", () => {
  beforeEach(() => {
    render(<Services />);
  });

  it("deve renderizar a seção principal com aria-labelledby", () => {
    const section = screen.getByRole("region", { name: /seção de serviços/i });
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute("id", "services");
  });

  it("deve renderizar o ServicesBackground com aria-hidden true", () => {
    const background = screen.getByTestId("services-background");
    expect(background).toBeInTheDocument();
    expect(background).toHaveAttribute("aria-hidden", "true");
  });

  it("deve renderizar o ServicesHeader", () => {
    const headings = screen.getAllByRole("heading", { name: /serviços/i });
    expect(headings.length).toBeGreaterThan(0);
    expect(headings[0]).toHaveAttribute("id", "services-title");
  });

  it("deve renderizar a lista de serviços", () => {
    const list = screen.getByRole("list", { name: /lista de serviços/i });
    expect(list).toBeInTheDocument();

    // Pega só os <li> diretos da lista com a classe 'service-list-item'
    const items = Array.from(list.querySelectorAll("li.service-list-item"));
    expect(items.length).toBeGreaterThan(0);
  });

  it('deve renderizar o CTASection com o botão "Vamos Conversar"', () => {
    const button = screen.getByRole("button", {
      name: /iniciar conversa sobre projeto/i,
    });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/vamos conversar/i);
  });
});
