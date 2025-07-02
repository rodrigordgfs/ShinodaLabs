import React from "react";
import { render } from "@testing-library/react";
import { HeroBackground } from "./index";

describe("HeroBackground", () => {
  it("deve renderizar o background com os gradientes e animações", () => {
    const { container } = render(<HeroBackground />);

    const wrapper = container.firstChild as HTMLElement;

    // Verifica se o wrapper existe e está com aria-hidden
    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveAttribute("aria-hidden", "true");

    // Verifica se os elementos com classes de background/gradiente estão presentes
    const gradientDivs = container.querySelectorAll("div.animate-pulse");
    expect(gradientDivs.length).toBeGreaterThanOrEqual(3); // temos 3 animados

    // Verifica se o grid overlay (com backgroundImage) está presente
    const gridOverlay = container.querySelector('[style*="linear-gradient"]');
    expect(gridOverlay).toBeInTheDocument();
  });
});
