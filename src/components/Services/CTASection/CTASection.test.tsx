import React from 'react';
import { render, screen } from '@testing-library/react';
import { CTASection } from './index';

describe('CTASection', () => {
  it('deve renderizar o título, descrição e botão de CTA', () => {
    render(<CTASection />);

    // Verifica se o título está presente
    expect(
      screen.getByRole('heading', {
        name: /pronto para começar seu projeto\?/i,
      })
    ).toBeInTheDocument();

    // Verifica se o parágrafo de descrição está presente
    expect(
      screen.getByText(/vamos conversar sobre como posso ajudar/i)
    ).toBeInTheDocument();

    // Verifica se o botão está presente
    const button = screen.getByRole('button', {
      name: /iniciar conversa sobre projeto/i,
    });
    expect(button).toBeInTheDocument();

    // Verifica se os ícones estão presentes (svg)
    const icons = button.querySelectorAll('svg');
    expect(icons.length).toBeGreaterThanOrEqual(2);
  });
});
