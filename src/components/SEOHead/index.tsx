import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

export default function SEOHead({
  title = 'Desenvolvedor Full Stack | Portfólio Profissional',
  description = 'Desenvolvedor Full Stack especializado em React, Vue.js, Next.js e Nuxt.js. Criando experiências digitais modernas e inovadoras.',
  canonical = 'https://seu-dominio.com',
  ogImage = '/og-image.jpg'
}: SEOHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Dev Portfolio" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@seuusuario" />

      {/* SEO & Robots */}
      <meta name="author" content="Dev Portfolio" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />

      {/* External Domains */}
      <link rel="preconnect" href="https://images.pexels.com" />
      <link rel="dns-prefetch" href="https://images.pexels.com" />

      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />

      {/* Theme */}
      <meta name="theme-color" content="#06b6d4" />
      <meta name="msapplication-TileColor" content="#06b6d4" />

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
            "url": canonical,
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
    </Head>
  );
}