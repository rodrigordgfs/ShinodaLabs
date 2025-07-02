import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { HeroCTA } from "./index";

describe("HeroCTA", () => {
  beforeEach(() => {
    // Mock do scrollIntoView
    Element.prototype.scrollIntoView = jest.fn();
  });

  it("deve renderizar os botões 'Ver Projetos' e 'Download CV'", () => {
    render(<HeroCTA />);

    const verProjetos = screen.getByRole("button", {
      name: /navegar para a seção projetos/i,
    });
    const downloadCV = screen.getByRole("button", {
      name: /download do currículo/i,
    });

    expect(verProjetos).toBeInTheDocument();
    expect(downloadCV).toBeInTheDocument();
  });

  it("deve chamar scrollIntoView ao clicar em 'Ver Projetos'", () => {
    render(<HeroCTA />);
    const verProjetos = screen.getByRole("button", {
      name: /navegar para a seção projetos/i,
    });

    const section = document.createElement("div");
    section.id = "projects";
    document.body.appendChild(section);

    const spy = jest.spyOn(section, "scrollIntoView");

    fireEvent.click(verProjetos);

    expect(spy).toHaveBeenCalledWith({ behavior: "smooth" });

    section.remove();
  });
});
