import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProjectsBackground } from './index';

describe('ProjectsBackground', () => {
  it('deve renderizar o container principal com aria-hidden true', () => {
    render(<ProjectsBackground />);
    const container = screen.getByRole('presentation', { hidden: true });
    expect(container).toBeInTheDocument();
    expect(container).toHaveAttribute('aria-hidden', 'true');
  });
});
