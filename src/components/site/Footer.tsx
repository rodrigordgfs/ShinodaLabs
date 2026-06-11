import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/40 py-16">
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-40" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-teal/70 to-transparent" />
      <div className="absolute inset-0 section-vignette opacity-70" />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <img
                src="/logo.png"
                alt="ShinodaLabs"
                width={171}
                height={38}
                className="h-8 w-auto"
                decoding="async"
              />
            </div>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground md:mx-0">
              Estúdio digital independente. Construindo produtos premium para marcas ambiciosas.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
              {["Criação de sites", "Landing pages", "SEO técnico"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-teal/30 bg-teal/15 px-3 py-1 text-xs font-medium text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center md:text-left">
            <div className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Navegação
            </div>
            <ul className="flex flex-col items-center space-y-2 text-sm md:items-start">
              {[
                ["Projetos", "#work"],
                ["Sobre", "#about"],
                ["Contato", "#contact"],
              ].map(([l, h]) => (
                <li key={l}>
                  <a
                    href={h}
                    className="group inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-teal"
                  >
                    <span className="h-px w-4 bg-border transition-colors group-hover:bg-teal" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <div className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Conecte
            </div>
            <div className="flex justify-center gap-3 md:justify-start">
              {[
                { I: Github, h: "https://github.com/rodrigordgfs/", label: "GitHub da ShinodaLabs" },
                { I: Linkedin, h: "https://www.linkedin.com/in/shinoda-labs/", label: "LinkedIn da ShinodaLabs" },
                { I: Instagram, h: "https://instagram.com/shinodalabs/", label: "Instagram da ShinodaLabs" },
              ].map(({ I, h, label }) => (
                <a
                  key={h}
                  href={h}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card/70 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-teal/40 hover:text-teal hover:shadow-[0_0_30px_-14px_oklch(0.78_0.14_180/0.9)]"
                >
                  <I className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
            <div className="mt-6 flex justify-center text-sm text-muted-foreground md:justify-start">
              <a
                href="mailto:shinodalabs@gmail.com"
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-teal" />
                shinodalabs@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 border-t border-border/40 pt-6 text-center text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} ShinodaLabs. Todos os direitos reservados.</div>
        </div>
      </div>
    </footer>
  );
}
