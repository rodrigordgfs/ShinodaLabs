import React from "react";
import { render, screen } from "@testing-library/react";
import { HeroIntro } from "./index";

// Mock do TypingText, se necessário
jest.mock("../TypingText", () => ({
  TypingText: () => <div data-testid="typing-text">Typing effect</div>,
}));

describe("HeroIntro", () => {
  beforeEach(() => {
    render(<HeroIntro />);
  });

  it("deve exibir o aviso de disponibilidade com ícone Zap", () => {
    const status = screen.getByRole("status", {
      name: /disponível para novos projetos/i,
    });
    expect(status).toBeInTheDocument();

    // Verifica se o ícone Zap está presente (svg com classe lucide-zap)
    const icon = status.querySelector("svg");
    expect(icon).toBeInTheDocument();
  });

  it("deve renderizar o título com o nome ShinodaLabs", () => {
    const title = screen.getByRole("heading", { level: 2 });
    expect(title).toHaveTextContent("Olá, eu sou o");
    expect(title).toHaveTextContent("ShinodaLabs");
  });

  it("deve renderizar o componente TypingText", () => {
    const typing = screen.getByTestId("typing-text");
    expect(typing).toBeInTheDocument();
  });

  it("deve conter o parágrafo de introdução com destaque em palavras-chave", () => {
    const paragraph = screen.getByText(/transformo ideias em/i);
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent(/experiências digitais excepcionais/i);
    expect(paragraph).toHaveTextContent(/inovação/i);
    expect(paragraph).toHaveTextContent(/performance/i);
  });
});
