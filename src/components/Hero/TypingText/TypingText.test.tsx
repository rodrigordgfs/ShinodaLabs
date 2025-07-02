import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { TypingText } from './index';

jest.useFakeTimers();

describe('TypingText', () => {
  it('deve iniciar exibindo texto vazio', () => {
    render(<TypingText />);
    const heading = screen.getByRole('heading');
    expect(heading).toHaveTextContent('');
  });

  it('deve digitar gradualmente o primeiro texto', () => {
    render(<TypingText />);

    // Simula a digitação do primeiro texto
    act(() => {
      jest.advanceTimersByTime(80 * 5); // Avança alguns caracteres
    });

    const heading = screen.getByRole('heading');
    expect(heading.textContent?.length).toBeGreaterThan(0);
  });

  it('deve alternar o cursor visível/invisível', () => {
    render(<TypingText />);

    const getCursor = () =>
      screen.getByRole('heading').querySelector('span + span');

    const cursor = getCursor();
    expect(cursor).toBeInTheDocument();

    const opacityBefore = cursor?.className.includes('opacity-100');

    act(() => {
      jest.advanceTimersByTime(500); // alterna o cursor
    });

    const opacityAfter = getCursor()?.className.includes('opacity-100');
    expect(opacityBefore).not.toEqual(opacityAfter);
  });

  it('deve limpar e iniciar o próximo texto após completar um', () => {
    render(<TypingText />);

    // Avança tempo suficiente para completar o primeiro texto
    act(() => {
      jest.advanceTimersByTime(80 * 'Desenvolvedor Full Stack'.length + 2000);
    });

    const heading = screen.getByRole('heading');
    expect(heading.textContent).not.toContain('Desenvolvedor Full Stack');
  });
});
