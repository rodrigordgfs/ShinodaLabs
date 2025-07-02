import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dev Portfolio - Desenvolvedor Full Stack',
    short_name: 'Dev Portfolio',
    description: 'Portfólio profissional de desenvolvedor Full Stack especializado em React, Vue.js, Next.js e Nuxt.js',
    start_url: '/',
    display: 'standalone',
    background_color: '#09090b',
    theme_color: '#06b6d4',
    orientation: 'portrait-primary',
    categories: ['business', 'productivity'],
    lang: 'pt-BR',
    icons: [
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}