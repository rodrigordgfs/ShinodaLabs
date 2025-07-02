import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ViewAllButton } from './index';

describe('ViewAllButton', () => {
  it('deve renderizar o botão com o texto correto e ícones', () => {
    render(<ViewAllButton />);
    
    const button = screen.getByRole('button', { name: /ver todos os projetos/i });
    expect(button).toBeInTheDocument();
    
    expect(button).toHaveTextContent(/ver todos os projetos/i);

    // Verifica se os ícones estão presentes via aria-hidden (lucide-react usa svg)
    expect(button.querySelector('svg')).toBeInTheDocument();
  });

  it('deve responder ao clique', () => {
    render(<ViewAllButton />);
    const button = screen.getByRole('button', { name: /ver todos os projetos/i });
    
    fireEvent.click(button);
    // Se você quiser testar alguma ação, associe onClick no componente e verifique aqui
    // Por enquanto, só testamos se o clique funciona sem erro
  });
});
