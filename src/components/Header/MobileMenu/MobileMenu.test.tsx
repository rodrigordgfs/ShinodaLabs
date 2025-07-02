import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MobileMenu from "./index";

const menuItems = [
  { id: "home", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "projects", label: "Projetos" },
];

describe("MobileMenu", () => {
  it("deve renderizar os botões com os labels corretos", () => {
    render(
      <MobileMenu
        menuItems={menuItems}
        activeSection="about"
        onSelect={() => {}}
      />
    );

    menuItems.forEach(({ label }) => {
      expect(
        screen.getByRole("button", { name: `Navegar para a seção ${label}` })
      ).toBeInTheDocument();
    });
  });

  it("deve aplicar estilos e aria-current no item ativo", () => {
    render(
      <MobileMenu
        menuItems={menuItems}
        activeSection="projects"
        onSelect={() => {}}
      />
    );

    const activeBtn = screen.getByRole("button", {
      name: /navegar para a seção projetos/i,
    });
    expect(activeBtn).toHaveClass("text-emerald-400");
    expect(activeBtn).toHaveAttribute("aria-current", "page");
  });

  it("deve chamar onSelect com o id correto ao clicar", () => {
    const onSelectMock = jest.fn();
    render(
      <MobileMenu
        menuItems={menuItems}
        activeSection="home"
        onSelect={onSelectMock}
      />
    );

    const btn = screen.getByRole("button", {
      name: /navegar para a seção sobre/i,
    });
    fireEvent.click(btn);

    expect(onSelectMock).toHaveBeenCalledTimes(1);
    expect(onSelectMock).toHaveBeenCalledWith("about");
  });

  it('deve ter role "menu" e id "mobile-menu"', () => {
    render(
      <MobileMenu
        menuItems={menuItems}
        activeSection="home"
        onSelect={() => {}}
      />
    );
    const menu = screen.getByRole("menu");
    expect(menu).toBeInTheDocument();
    expect(menu).toHaveAttribute("id", "mobile-menu");
  });
});
