import React from "react";
import { render, screen, within } from "@testing-library/react";
import { ProjectsList } from "./index";
import { projects } from "@/utils/projects";

describe("ProjectsList", () => {
  it("deve renderizar a lista de projetos", () => {
    render(<ProjectsList />);

    const list = screen.getByRole("list", { name: /lista de projetos/i });
    expect(list).toBeInTheDocument();

    // Busca apenas os listitems DENTRO da lista, evita contar outros <li> no DOM
    const allItems = within(list).getAllByRole("listitem");
    const itemsWithClass = allItems.filter((item) =>
      item.classList.contains("project-items")
    );

    expect(itemsWithClass.length).toBe(projects.length);

    expect(screen.getByText(projects[0].title)).toBeInTheDocument();
  });
});
