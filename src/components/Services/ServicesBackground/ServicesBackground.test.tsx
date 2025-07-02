import React from 'react';
import { render, screen } from '@testing-library/react';
import { ServicesBackground } from './index';

describe('ServicesBackground', () => {
  it('deve renderizar o container principal com aria-hidden true', () => {
    render(<ServicesBackground />);
    
    // Verifica o elemento com aria-hidden
    const container = screen.getByTestId('services-background');
    expect(container).toBeInTheDocument();
    expect(container).toHaveAttribute('aria-hidden', 'true');
  });

  it('deve renderizar 3 elementos de fundo (circulares)', () => {
    render(<ServicesBackground />);
    
    const backgrounds = screen.getAllByTestId('blur-circle');
    expect(backgrounds.length).toBe(3);
  });
});
