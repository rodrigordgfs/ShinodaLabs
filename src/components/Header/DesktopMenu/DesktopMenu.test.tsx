import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DesktopMenu from "./index";

const menuItems = [
  { id: "home", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "contact", label: "Contato" },
];

describe("DesktopMenu", () => {
  it("deve renderizar botões para todos os itens do menu", () => {
    render(
      <DesktopMenu
        menuItems={menuItems}
        activeSection="home"
        onSelect={() => {}}
      />
    );

    menuItems.forEach(({ label }) => {
      expect(
        screen.getByRole("button", { name: `Navegar para a seção ${label}` })
      ).toBeInTheDocument();
    });
  });

  it("deve aplicar estilo e aria-current no item ativo", () => {
    render(
      <DesktopMenu
        menuItems={menuItems}
        activeSection="about"
        onSelect={() => {}}
      />
    );

    const activeButton = screen.getByRole("button", {
      name: /navegar para a seção Sobre/i,
    });
    expect(activeButton).toHaveClass("text-emerald-400");
    expect(activeButton).toHaveAttribute("aria-current", "page");

    const inactiveButton = screen.getByRole("button", {
      name: /navegar para a seção Contato/i,
    });
    expect(inactiveButton).toHaveClass("text-zinc-400");
    expect(inactiveButton).not.toHaveAttribute("aria-current");
  });

  it("deve chamar onSelect com o id correto quando um botão for clicado", () => {
    const onSelectMock = jest.fn();

    render(
      <DesktopMenu
        menuItems={menuItems}
        activeSection="home"
        onSelect={onSelectMock}
      />
    );

    const contactButton = screen.getByRole("button", {
      name: /navegar para a seção Contato/i,
    });
    fireEvent.click(contactButton);

    expect(onSelectMock).toHaveBeenCalledTimes(1);
    expect(onSelectMock).toHaveBeenCalledWith("contact");
  });
});
