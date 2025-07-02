import { render, screen } from '@testing-library/react';
import { ServicesList, services } from './index';

describe('ServicesList', () => {
  it('deve renderizar a lista de serviços', () => {
    render(<ServicesList />);
    const list = screen.getByRole('list', { name: /lista de serviços/i });
    expect(list).toBeInTheDocument();

    // Pega todos os elementos li com a classe 'service-list-item' dentro da lista
    const items = Array.from(list.querySelectorAll('li.service-list-item'));
    expect(items.length).toBe(services.length);
  });
});
