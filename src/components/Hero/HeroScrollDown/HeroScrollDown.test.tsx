import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { HeroScrollDown } from "./index";

describe("HeroScrollDown", () => {
  it("deve renderizar o botão com o ícone ChevronDown", () => {
    render(<HeroScrollDown />);

    const button = screen.getByRole("button", {
      name: /navegar para a seção sobre/i,
    });
    expect(button).toBeInTheDocument();

    const icon = button.querySelector("svg");
    expect(icon).toBeInTheDocument();
  });

  it("deve chamar scrollIntoView ao clicar no botão", () => {
    // Cria a seção de destino
    const aboutSection = document.createElement("div");
    aboutSection.id = "about";
    document.body.appendChild(aboutSection);

    const scrollIntoViewMock = jest.fn();
    aboutSection.scrollIntoView = scrollIntoViewMock;

    render(<HeroScrollDown />);

    const button = screen.getByRole("button", {
      name: /navegar para a seção sobre/i,
    });
    fireEvent.click(button);

    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: "smooth" });

    // Limpeza
    document.body.removeChild(aboutSection);
  });
});
