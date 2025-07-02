import React from 'react';
import { render, screen } from '@testing-library/react';
import { ServiceCard } from './index';
import { Code } from 'lucide-react';

describe('ServiceCard', () => {
  const mockProps = {
    title: 'Desenvolvimento Web',
    description: 'Criação de aplicações web modernas e responsivas.',
    icon: <Code data-testid="icon" />,
    color: 'from-teal-500 to-emerald-500',
    features: ['SPA com React', 'Integração com APIs', 'Design Responsivo'],
  };

  it('deve renderizar título, descrição, ícone e lista de features', () => {
    render(<ServiceCard {...mockProps} />);

    // Verifica título
    expect(
      screen.getByRole('heading', { name: mockProps.title })
    ).toBeInTheDocument();

    // Verifica descrição
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();

    // Verifica ícone (via data-testid para evitar dependência de SVG)
    expect(screen.getByTestId('icon')).toBeInTheDocument();

    // Verifica cada feature
    mockProps.features.forEach((feature) => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });

    // Verifica se o elemento tem aria-label acessível
    expect(
      screen.getByLabelText(`Serviço de ${mockProps.title}`)
    ).toBeInTheDocument();
  });
});
