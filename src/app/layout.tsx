import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: 'Desenvolvedor Full Stack | Portfólio Profissional',
    template: '%s | Dev Portfolio'
  },
  description: 'Desenvolvedor Full Stack especializado em React, Vue.js, Next.js e Nuxt.js. Criando experiências digitais modernas e inovadoras com foco em performance e UX.',
  keywords: [
    'desenvolvedor full stack',
    'react developer',
    'vue.js developer',
    'next.js',
    'nuxt.js',
    'typescript',
    'javascript',
    'frontend developer',
    'backend developer',
    'web developer',
    'ui/ux design',
    'são paulo',
    'brasil',
    'freelancer',
    'portfólio'
  ],
  authors: [{ name: 'Dev Portfolio' }],
  creator: 'Dev Portfolio',
  publisher: 'Dev Portfolio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://seu-dominio.com'),
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/pt-br',
      'en-US': '/en'
    }
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://seu-dominio.com',
    title: 'Desenvolvedor Full Stack | Portfólio Profissional',
    description: 'Desenvolvedor Full Stack especializado em React, Vue.js, Next.js e Nuxt.js. Criando experiências digitais modernas e inovadoras.',
    siteName: 'Dev Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dev Portfolio - Desenvolvedor Full Stack'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desenvolvedor Full Stack | Portfólio Profissional',
    description: 'Desenvolvedor Full Stack especializado em React, Vue.js, Next.js e Nuxt.js.',
    creator: '@seuusuario',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'seu-google-verification-code',
    yandex: 'seu-yandex-verification-code',
    yahoo: 'seu-yahoo-verification-code',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06b6d4" />
        <meta name="msapplication-TileColor" content="#06b6d4" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Dev Portfolio",
              "jobTitle": "Desenvolvedor Full Stack",
              "description": "Desenvolvedor Full Stack especializado em React, Vue.js, Next.js e Nuxt.js",
              "url": "https://seu-dominio.com",
              "sameAs": [
                "https://github.com/seuusuario",
                "https://linkedin.com/in/seuusuario",
                "https://twitter.com/seuusuario"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "São Paulo",
                "addressCountry": "BR"
              },
              "email": "seu@email.com",
              "telephone": "+5511999999999",
              "knowsAbout": [
                "React",
                "Vue.js",
                "Next.js",
                "Nuxt.js",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "Full Stack Development",
                "UI/UX Design"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}