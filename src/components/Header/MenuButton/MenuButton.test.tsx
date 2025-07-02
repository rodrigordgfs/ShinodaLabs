import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MenuButton from "./index";

describe("MenuButton", () => {
  it("deve renderizar o ícone Menu quando isOpen for false", () => {
    render(<MenuButton isOpen={false} onToggle={jest.fn()} />);
    const button = screen.getByRole("button", { name: /abrir menu/i });
    expect(button).toBeInTheDocument();
    // O ícone Menu do lucide-react não tem texto, mas podemos verificar se o botão tem aria-label correto
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("deve renderizar o ícone X quando isOpen for true", () => {
    render(<MenuButton isOpen={true} onToggle={jest.fn()} />);
    const button = screen.getByRole("button", { name: /fechar menu/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("aria-expanded", "true");
  });

  it("deve chamar onToggle ao clicar no botão", () => {
    const onToggleMock = jest.fn();
    render(<MenuButton isOpen={false} onToggle={onToggleMock} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onToggleMock).toHaveBeenCalledTimes(1);
  });

  it("deve ter aria-controls definido como 'mobile-menu'", () => {
    render(<MenuButton isOpen={false} onToggle={jest.fn()} />);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-controls", "mobile-menu");
  });
});
