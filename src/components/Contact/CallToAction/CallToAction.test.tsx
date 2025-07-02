// components/__tests__/CallToAction.test.tsx

import { render, screen } from '@testing-library/react'
import { CallToAction } from '../CallToAction'

describe('CallToAction', () => {
  beforeEach(() => {
    render(<CallToAction />)
  })

  it('deve renderizar o título oculto "Chamada para Ação"', () => {
    expect(
      screen.getByRole('heading', { name: /chamada para ação/i })
    ).toBeInTheDocument()
  })

  it('deve exibir o texto principal da chamada', () => {
    expect(
      screen.getByText(/pronto para começar um projeto\?/i)
    ).toBeInTheDocument()

    expect(
      screen.getByText(/entre em contato através do seu canal preferido/i)
    ).toBeInTheDocument()
  })

  it('deve ter um botão com link para envio de email', () => {
    const emailLink = screen.getByRole('link', {
      name: /enviar email/i,
    })

    expect(emailLink).toBeInTheDocument()
    expect(emailLink).toHaveAttribute('href', 'mailto:shinodalabs@gmail.com')
  })

  it('deve ter um botão com link para ligação', () => {
    const phoneLink = screen.getByRole('link', {
      name: /ligar para/i,
    })

    expect(phoneLink).toBeInTheDocument()
    expect(phoneLink).toHaveAttribute('href', 'tel:+5551996236798')
  })
})
