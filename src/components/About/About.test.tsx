// components/__tests__/About.test.tsx

import { render, screen } from '@testing-library/react'
import About from '../About'

describe('About Section', () => {
  it('deve renderizar o título principal', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /sobre mim/i })).toBeInTheDocument()
  })

  it('deve conter o subtítulo com descrição sobre o desenvolvedor', () => {
    render(<About />)
    expect(
      screen.getByText(/Desenvolvedor apaixonado por criar/i)
    ).toBeInTheDocument()
  })

  it('deve renderizar os badges de tecnologia', () => {
    render(<About />)
    const techs = ['React', 'Vue.js', 'Next.js', 'Nuxt.js', 'TypeScript', 'Node.js']
    techs.forEach(tech => {
      expect(screen.getByText(tech)).toBeInTheDocument()
    })
  })

  it('deve renderizar os destaques', () => {
    render(<About />)
    const highlights = ['Clean Code', 'Performance', 'Foco no UX', 'Colaboração']
    highlights.forEach(title => {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    })
  })
})
