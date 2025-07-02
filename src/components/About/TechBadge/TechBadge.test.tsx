import { render, screen } from '@testing-library/react'
import { TechBadge } from '../TechBadge'

describe('TechBadge', () => {
  it('deve renderizar o nome da tecnologia corretamente', () => {
    const techName = 'React'

    render(<TechBadge tech={techName} />)

    // Verifica se o texto está presente na tela
    expect(screen.getByText(techName)).toBeInTheDocument()

    // Verifica se está dentro de um <li>
    const listItem = screen.getByText(techName).closest('li')
    expect(listItem).toBeInTheDocument()
  })
})
