import dynamic from 'next/dynamic'
import type { Metadata } from 'next'

// Dynamic imports for better performance
const Header = dynamic(() => import('../components/Header'), { ssr: true })
const Hero = dynamic(() => import('../components/Hero'), { ssr: true })
// const About = dynamic(() => import('../components/About'), { ssr: false })
// const Projects = dynamic(() => import('../components/Projects'), { ssr: false })
// const Services = dynamic(() => import('../components/Services'), { ssr: false })
// const Contact = dynamic(() => import('../components/Contact'), { ssr: false })
// const Footer = dynamic(() => import('../components/Footer'), { ssr: true })

export const metadata: Metadata = {
  title: 'Início',
  description: 'Portfólio profissional de desenvolvedor Full Stack especializado em React, Vue.js, Next.js e Nuxt.js. Veja meus projetos e entre em contato.',
  openGraph: {
    title: 'Desenvolvedor Full Stack | Portfólio Profissional',
    description: 'Portfólio profissional de desenvolvedor Full Stack especializado em React, Vue.js, Next.js e Nuxt.js.',
    url: 'https://seu-dominio.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dev Portfolio - Desenvolvedor Full Stack'
      }
    ]
  }
}

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      <Header />
      <Hero />
      {/* <About />
      <Projects />
      <Services />
      <Contact />
      <Footer /> */}
    </main>
  )
}