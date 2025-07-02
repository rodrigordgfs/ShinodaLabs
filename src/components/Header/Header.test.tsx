import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./index";

type MenuItem = { id: string; label: string };

interface LogoProps {
  onClick: () => void;
}

interface DesktopMenuProps {
  menuItems: MenuItem[];
  activeSection: string;
  onSelect: (id: string) => void;
}

interface MobileMenuProps {
  menuItems: MenuItem[];
  activeSection: string;
  onSelect: (id: string) => void;
}

interface MenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

jest.mock("./Logo", () => {
  const LogoMock = ({ onClick }: LogoProps) => (
    <button onClick={onClick}>Logo</button>
  );
  LogoMock.displayName = "LogoMock";
  return LogoMock;
});

jest.mock("./DesktopMenu", () => {
  const DesktopMenuMock = ({
    menuItems,
    onSelect,
  }: Pick<DesktopMenuProps, "menuItems" | "onSelect">) => (
    <nav data-testid="desktop-menu">
      {menuItems.map((item) => (
        <button key={item.id} onClick={() => onSelect(item.id)}>
          {item.label}
        </button>
      ))}
    </nav>
  );
  DesktopMenuMock.displayName = "DesktopMenuMock";
  return DesktopMenuMock;
});

jest.mock("./MobileMenu", () => {
  const MobileMenuMock = ({
    menuItems,
    onSelect,
  }: Pick<MobileMenuProps, "menuItems" | "onSelect">) => (
    <div data-testid="mobile-menu">
      {menuItems.map((item) => (
        <button key={item.id} onClick={() => onSelect(item.id)}>
          {item.label}
        </button>
      ))}
    </div>
  );
  MobileMenuMock.displayName = "MobileMenuMock";
  return MobileMenuMock;
});

jest.mock("./MenuButton", () => {
  const MenuButtonMock = ({ isOpen, onToggle }: MenuButtonProps) => (
    <button
      onClick={onToggle}
      aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
    >
      {isOpen ? "X" : "≡"}
    </button>
  );
  MenuButtonMock.displayName = "MenuButtonMock";
  return MenuButtonMock;
});

describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("deve renderizar o logo com botão e chamar onClick", () => {
    const logoButton = screen.getByRole("button", { name: /logo/i });
    expect(logoButton).toBeInTheDocument();

    fireEvent.click(logoButton);
  });

  it("deve renderizar o DesktopMenu com os itens", () => {
    const desktopMenu = screen.getByTestId("desktop-menu");
    expect(desktopMenu).toBeInTheDocument();

    expect(screen.getByText("Início")).toBeInTheDocument();
    expect(screen.getByText("Contato")).toBeInTheDocument();
  });

  it("deve renderizar o MenuButton e alternar o menu mobile", () => {
    const menuButton = screen.getByRole("button", { name: /abrir menu/i });
    expect(menuButton).toBeInTheDocument();

    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute("aria-label", "Fechar menu");

    const mobileMenu = screen.getByTestId("mobile-menu");
    expect(mobileMenu).toBeInTheDocument();

    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute("aria-label", "Abrir menu");
  });
});
