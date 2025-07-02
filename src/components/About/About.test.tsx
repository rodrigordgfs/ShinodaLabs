// components/__tests__/About.test.tsx
import { render, screen } from "@testing-library/react";
import About from "../About";
import { techIcons } from "@/utils/techIcons";
describe("About Section", () => {
  it("deve renderizar o título principal", () => {
    render(<About />);
    expect(
      screen.getByRole("heading", { name: /sobre mim/i })
    ).toBeInTheDocument();
  });

  it("deve conter o subtítulo com descrição sobre o desenvolvedor", () => {
    render(<About />);
    expect(
      screen.getByText(/Desenvolvedor apaixonado por criar/i)
    ).toBeInTheDocument();
  });

  it("deve renderizar os badges de tecnologia com seus ícones", () => {
    render(<About />);

    // Verifica se os badges e seus ícones estão presentes
    Object.entries(techIcons).forEach(([name]) => {
      expect(screen.getByText(name)).toBeInTheDocument();
      const iconElement = screen.getByTestId(`${name}-icon`);
      expect(iconElement).toBeInTheDocument();
    });
  });

  it("deve renderizar os destaques", () => {
    render(<About />);

    const highlights = [
      "Clean Code",
      "Performance",
      "Foco no UX",
      "Colaboração",
    ];
    highlights.forEach((title) => {
      expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
    });
  });
});
