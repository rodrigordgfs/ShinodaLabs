import React from "react";
import { render, screen } from "@testing-library/react";
import Logo from "./index";

describe("Logo", () => {
  it("deve chamar onClick e prevenir o comportamento padrão do link ao clicar", () => {
    const mockOnClick = jest.fn();
    render(<Logo onClick={mockOnClick} />);

    const link = screen.getByRole("link", { name: /ir para a seção início/i });

    // Criar um mock para preventDefault no evento real
    const clickEvent = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    });
    const preventDefaultSpy = jest.spyOn(clickEvent, "preventDefault");

    link.dispatchEvent(clickEvent);

    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
