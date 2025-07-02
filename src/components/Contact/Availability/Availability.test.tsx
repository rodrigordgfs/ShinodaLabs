// components/__tests__/Availability.test.tsx

import { render, screen } from '@testing-library/react'
import { Availability } from '../Availability'

describe('Availability', () => {
  beforeEach(() => {
    render(<Availability />)
  })

  it('deve renderizar a seção com título "Disponibilidade"', () => {
    expect(
      screen.getAllByRole('heading', { name: /disponibilidade/i })[0]
    ).toBeInTheDocument()
  })

  it('deve exibir que está disponível para novos projetos', () => {
    expect(
      screen.getByText(/disponível para novos projetos/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/aceitando novos clientes/i)
    ).toBeInTheDocument()
  })

  it('deve exibir o horário de atendimento corretamente', () => {
    expect(screen.getByText('Segunda - Sexta')).toBeInTheDocument()
    expect(screen.getByText('9h - 18h')).toBeInTheDocument()
    expect(screen.getByText('Sábado')).toBeInTheDocument()
    expect(screen.getByText('9h - 14h')).toBeInTheDocument()
    expect(screen.getByText('Domingo')).toBeInTheDocument()
    expect(screen.getByText('Fechado')).toBeInTheDocument()
  })

  it('deve exibir o tempo de resposta', () => {
    expect(
      screen.getByText(/respondo todas as mensagens em até/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/24 horas/i)).toBeInTheDocument()
  })
})
