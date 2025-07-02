import { render, screen } from '@testing-library/react'
import { HighlightCard } from '../HighlightCard'
import { Code } from 'lucide-react'

describe('HighlightCard', () => {
  const mockProps = {
    icon: <Code data-testid="icon" />,
    title: 'Desenvolvimento Web',
    description: 'Criação de sites modernos e responsivos.',
  }

  it('deve renderizar o título', () => {
    render(<HighlightCard {...mockProps} />)
    expect(screen.getByText('Desenvolvimento Web')).toBeInTheDocument()
  })

  it('deve renderizar a descrição', () => {
    render(<HighlightCard {...mockProps} />)
    expect(screen.getByText('Criação de sites modernos e responsivos.')).toBeInTheDocument()
  })

  it('deve renderizar o ícone', () => {
    render(<HighlightCard {...mockProps} />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
