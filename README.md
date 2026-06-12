# ShinodaLabs

Site institucional da **ShinodaLabs** — estúdio digital especializado em sites e landing pages premium com foco em conversão, performance e SEO técnico.

**Produção:** [shinodalabs.com](https://shinodalabs.com)

---

## Sobre o projeto

Landing page de página única com SSR (Server-Side Rendering), animações fluidas, portfólio de projetos, seções de serviços e CTA de contato. O site foi construído para excelência em Core Web Vitals, acessibilidade e indexação em buscadores.

### Destaques

- **SSR completo** com TanStack Start — HTML renderizado no servidor para SEO e LCP rápido
- **Performance otimizada** — lazy load seletivo, preload de imagens críticas, analytics adiado
- **SEO técnico** — meta tags Open Graph, Twitter Cards, JSON-LD (Organization, WebSite, FAQPage, ProfessionalService), sitemap e robots.txt
- **Acessibilidade** — contraste adequado, labels semânticos, áreas de toque generosas
- **Design premium** — dark mode nativo, tipografia Inter/Sora/JetBrains Mono, animações com Framer Motion
- **Deploy flexível** — Vercel (produção) ou Cloudflare Workers

---

## Stack tecnológica

| Camada | Tecnologia |
|--------|------------|
| Framework | [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router) |
| UI | [React 19](https://react.dev) |
| Estilização | [Tailwind CSS 4](https://tailwindcss.com) |
| Componentes | [Radix UI](https://www.radix-ui.com) + [shadcn/ui](https://ui.shadcn.com) |
| Animações | [Framer Motion](https://www.framer.com/motion/) |
| Build | [Vite 7](https://vite.dev) |
| SSR / Deploy | [Nitro](https://nitro.build) (Vercel) · [Cloudflare Workers](https://developers.cloudflare.com/workers/) |
| Analytics | [@vercel/analytics](https://vercel.com/docs/analytics) |
| Linguagem | TypeScript |

---

## Pré-requisitos

- **Node.js** ≥ 22 (ver `.node-version`)
- **npm** (ou pnpm/yarn/bun)

---

## Instalação e desenvolvimento

```bash
# Clonar o repositório
git clone https://github.com/ShinodaLabs/ShinodaLabs.git
cd ShinodaLabs

# Instalar dependências
npm install

# Servidor de desenvolvimento (http://localhost:8080)
npm run dev
```

---

## Scripts disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento com HMR |
| `npm run build` | Build de produção (Cloudflare Workers por padrão) |
| `npm run build:vercel` | Build de produção para Vercel (simula `VERCEL=1`) |
| `npm run preview` | Preview local do build |
| `npm run lint` | Executa ESLint |
| `npm run format` | Formata o código com Prettier |
| `npm run optimize-images` | Converte e otimiza imagens para WebP (Sharp) |

---

## Estrutura do projeto

```
ShinodaLabs/
├── public/                  # Arquivos estáticos (favicon, logo, sitemap, robots.txt)
├── scripts/
│   └── optimize-images.mjs  # Pipeline de otimização de imagens
├── src/
│   ├── assets/              # Imagens do site (WebP otimizadas)
│   ├── components/
│   │   ├── site/            # Componentes da landing page
│   │   └── ui/              # Componentes base (shadcn/ui)
│   ├── hooks/               # Hooks React customizados
│   ├── lib/
│   │   ├── seo.ts           # Meta tags, JSON-LD e constantes de SEO
│   │   ├── error-capture.ts # Captura de erros SSR
│   │   └── utils.ts         # Utilitários (cn, etc.)
│   ├── routes/
│   │   ├── __root.tsx       # Layout raiz, shell HTML, analytics
│   │   └── index.tsx        # Página principal
│   ├── server.ts            # Entry point SSR com tratamento de erros
│   ├── start.ts             # Middleware de request (TanStack Start)
│   ├── router.tsx           # Configuração do router
│   └── styles.css           # Tailwind + design tokens
├── vite.config.ts           # Vite (detecta Vercel vs Cloudflare)
├── vercel.json              # Configuração de deploy Vercel
├── wrangler.jsonc           # Configuração de deploy Cloudflare
└── package.json
```

### Seções da landing page

| Componente | Descrição |
|------------|-----------|
| `Navbar` | Navegação fixa com links âncora |
| `Hero` | Hero principal com preview de projetos |
| `Marquee` | Faixa animada de tecnologias |
| `About` | Sobre o estúdio |
| `Work` | Portfólio de projetos |
| `Differentiators` | Diferenciais competitivos |
| `CTA` | Chamada para ação / contato |
| `Footer` | Rodapé com links e redes sociais |

---

## Deploy

O projeto suporta dois targets de deploy. A detecção é automática via variável de ambiente `VERCEL=1` no `vite.config.ts`.

### Vercel (produção)

A Vercel detecta o framework **TanStack Start** automaticamente.

1. Importe o repositório em [vercel.com/new](https://vercel.com/new)
2. Confirme o build command: `npm run build`
3. Deploy

Para testar o build localmente:

```bash
npm run build:vercel
# Saída em .vercel/output/
```

### Cloudflare Workers

```bash
npm run build
npx wrangler deploy
```

A saída do build fica em `dist/`.

---

## SEO e metadados

As constantes e helpers de SEO ficam centralizados em `src/lib/seo.ts`:

- URL canônica, título, descrição e keywords
- Open Graph e Twitter Cards
- JSON-LD estruturado (Organization, WebSite, FAQPage, ProfessionalService)
- Sitemap em `public/sitemap.xml`
- Robots em `public/robots.txt`

Para alterar metadados globais, edite `src/lib/seo.ts`. Para metadados da home, veja `src/routes/index.tsx`.

---

## Performance

Algumas otimizações implementadas:

- **Preload** da imagem hero (`hero-preview.webp`) com `fetchPriority: high`
- **Lazy load** do `CustomCursor` — carregado apenas após interação do mouse
- **Code splitting** — seções abaixo da dobra carregadas de forma adiada
- **Analytics adiado** — Vercel Analytics carregado via `requestIdleCallback`
- **Imagens WebP** — assets otimizados com script Sharp (`npm run optimize-images`)
- **Fontes self-hosted** — via `@fontsource` (sem requests externos)

---

## Personalização

### Adicionar um projeto ao portfólio

Edite os arrays em:

- `src/components/site/Work.tsx` — seção completa do portfólio
- `src/components/site/HeroPreview.tsx` — preview no hero

### Alterar identidade visual

- **Cores e tokens:** `src/styles.css` (`@theme inline`)
- **Tipografia:** imports de fonte no topo de `src/styles.css`
- **Logo e favicon:** `public/logo.png` e `public/favicon.png`

### Variáveis de ambiente

O projeto usa variáveis `VITE_*` injetadas automaticamente pelo Vite. Crie um `.env.local` na raiz se necessário:

```env
# Exemplo
VITE_EXAMPLE=valor
```

---

## Qualidade de código

```bash
# Lint
npm run lint

# Formatação
npm run format
```

Configurações: `eslint.config.js`, `.prettierrc` (se existir), `tsconfig.json`.

---

## Licença

Projeto privado — © ShinodaLabs. Todos os direitos reservados.

## Contato

- **Site:** [shinodalabs.com](https://shinodalabs.com)
- **E-mail:** shinodalabs@gmail.com
- **WhatsApp:** +55 51 99623-6798
- **GitHub:** [@rodrigordgfs](https://github.com/rodrigordgfs)
- **LinkedIn:** [ShinodaLabs](https://www.linkedin.com/in/shinoda-labs/)
- **Instagram:** [@shinodalabs](https://instagram.com/shinodalabs/)
