import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProjectsHeader } from './index';

describe('ProjectsHeader', () => {
  it('deve renderizar o título com texto correto e estilos de gradiente', () => {
    render(<ProjectsHeader />);
    const heading = screen.getByRole('heading', { level: 3, name: /meus projetos/i });
    expect(heading).toBeInTheDocument();
    // Verifica se o heading tem a classe de gradiente (bg-gradient-to-r)
    expect(heading).toHaveClass('bg-gradient-to-r');
  });

  it('deve renderizar a linha decorativa com aria-hidden', () => {
    render(<ProjectsHeader />);
    const line = screen.getByRole('presentation', { hidden: true });
    expect(line).toBeInTheDocument();
    expect(line).toHaveAttribute('aria-hidden', 'true');
  });

  it('deve renderizar o parágrafo com os textos destacados', () => {
    render(<ProjectsHeader />);
    const paragraph = screen.getByText(/uma seleção dos meus projetos mais recentes/i);
    expect(paragraph).toBeInTheDocument();
    // verifica spans com cores específicas
    expect(screen.getByText(/aplicações web complexas/i)).toHaveClass('text-teal-400');
    expect(screen.getByText(/soluções criativas/i)).toHaveClass('text-lime-400');
  });
});
