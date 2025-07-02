import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from './index';

// Mocks dos subcomponentes para simplificar o teste
jest.mock('./HeroBackground', () => ({
  HeroBackground: () => <div data-testid="hero-background" />,
}));
jest.mock('./HeroIntro', () => ({
  HeroIntro: () => <div data-testid="hero-intro" />,
}));
jest.mock('./HeroCTA', () => ({
  HeroCTA: () => <div data-testid="hero-cta" />,
}));
jest.mock('./HeroScrollDown', () => ({
  HeroScrollDown: () => <div data-testid="hero-scroll-down" />,
}));

describe('Hero', () => {
  beforeEach(() => {
    render(<Hero />);
  });

  it('deve renderizar a seção <section> com id e role corretos', () => {
    const section = screen.getByRole('region', {
      name: /hero - introdução e chamada para ação/i,
    });
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute('id', 'home');
  });

  it('deve renderizar o heading oculto com o id correto', () => {
    const heading = screen.getByRole('heading', {
      name: /hero - introdução e chamada para ação/i,
    });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('sr-only');
    expect(heading).toHaveAttribute('id', 'hero-heading');
  });

  it('deve renderizar os subcomponentes Hero', () => {
    expect(screen.getByTestId('hero-background')).toBeInTheDocument();
    expect(screen.getByTestId('hero-intro')).toBeInTheDocument();
    expect(screen.getByTestId('hero-cta')).toBeInTheDocument();
    expect(screen.getByTestId('hero-scroll-down')).toBeInTheDocument();
  });
});
