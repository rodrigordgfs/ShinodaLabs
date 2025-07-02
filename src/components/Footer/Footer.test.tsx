import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./index";

// Mock dos componentes filhos para simplificar o teste
jest.mock("./BrandInfo", () => {
  const Mock = () => <div data-testid="brand-info" />;
  Mock.displayName = "BrandInfo";
  return Mock;
});

jest.mock("./Navigation", () => {
  const Mock = () => <nav data-testid="navigation" />;
  Mock.displayName = "Navigation";
  return Mock;
});

jest.mock("./SocialConnect", () => {
  const Mock = () => <section data-testid="social-connect" />;
  Mock.displayName = "SocialConnect";
  return Mock;
});

jest.mock("./FooterBottom", () => {
  const Mock = () => <div data-testid="footer-bottom" />;
  Mock.displayName = "FooterBottom";
  return Mock;
});
describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("deve renderizar o elemento <footer> com aria-labelledby correto", () => {
    const footer = screen.getByRole("contentinfo"); // 'footer' role
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveAttribute("aria-labelledby", "footer-heading");
  });

  it('deve renderizar o título oculto "Rodapé"', () => {
    const heading = screen.getByRole("heading", { name: /rodapé/i });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("sr-only");
  });

  it("deve renderizar os componentes filhos mockados", () => {
    expect(screen.getByTestId("brand-info")).toBeInTheDocument();
    expect(screen.getByTestId("navigation")).toBeInTheDocument();
    expect(screen.getByTestId("social-connect")).toBeInTheDocument();
    expect(screen.getByTestId("footer-bottom")).toBeInTheDocument();
  });
});
