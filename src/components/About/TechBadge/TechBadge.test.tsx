import { render, screen } from "@testing-library/react";
import { TechBadge } from "../TechBadge";
import { SiReact } from "react-icons/si";

describe("TechBadge", () => {
  it("deve renderizar o nome da tecnologia corretamente", () => {
    const techName = "React";
    render(<TechBadge tech={techName} />);

    const badge = screen.getByText(techName);
    expect(badge).toBeInTheDocument();

    const listItem = badge.closest("li");
    expect(listItem).toBeInTheDocument();
    expect(listItem?.tagName).toBe("LI");
  });

  it("deve renderizar o ícone se for fornecido", () => {
    const techName = "React";
    render(
      <TechBadge tech={techName} icon={<SiReact data-testid="tech-icon" />} />
    );

    const icon = screen.getByTestId("tech-icon");
    expect(icon).toBeInTheDocument();
  });

  it("não deve renderizar o container do ícone se nenhum ícone for fornecido", () => {
    const techName = "Vue.js";
    render(<TechBadge tech={techName} />);

    // Procura por um span com largura e altura do ícone, que só existe se houver ícone
    const iconSpan =
      screen.queryByRole("img") || screen.queryByTestId("tech-icon");
    expect(iconSpan).not.toBeInTheDocument();
  });
});
