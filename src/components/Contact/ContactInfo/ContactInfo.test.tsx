import { render, screen } from "@testing-library/react";
import { ContactInfo, Contact } from "./index";
import { Mail, Phone } from "lucide-react";
import "@testing-library/jest-dom";

const mockContacts: Contact[] = [
  {
    icon: Mail,
    label: "Email",
    value: "teste@dominio.com",
    color: "from-teal-500 to-emerald-500",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "+55 11 91234-5678",
    color: "from-emerald-500 to-lime-500",
  },
];

describe("ContactInfo", () => {
  it("deve renderizar o título oculto corretamente", () => {
    render(<ContactInfo contacts={mockContacts} />);
    // Busca o título oculto usando seletor específico para evitar conflito
    expect(
      screen.getByText("Informações de Contato", { selector: "h3.sr-only" })
    ).toBeInTheDocument();
  });

  it("deve exibir todos os contatos fornecidos", () => {
    render(<ContactInfo contacts={mockContacts} />);
    mockContacts.forEach(({ label, value }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });

  it("deve renderizar os ícones dos contatos com data-testid", () => {
    render(<ContactInfo contacts={mockContacts} />);
    expect(screen.getByTestId("icon-email")).toBeInTheDocument();
    expect(screen.getByTestId("icon-telefone")).toBeInTheDocument();
  });
});
