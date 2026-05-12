import { ArrowUpRight, Github, Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/40 py-16">
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-40" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal/70 to-transparent" />
      <div className="absolute inset-0 section-vignette opacity-70" />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-teal to-emerald shadow-[0_0_28px_-8px_oklch(0.78_0.14_180_/_0.8)]">
                <span className="font-display text-sm font-bold text-background">S</span>
              </span>
              <span className="font-display text-lg font-semibold text-foreground">
                Shinoda<span className="text-muted-foreground">Labs</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Estúdio digital independente. Construindo produtos premium para marcas ambiciosas.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Criação de sites", "Landing pages", "SEO técnico"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-teal/20 bg-teal/10 px-3 py-1 text-xs text-teal"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Navegação
            </div>
            <ul className="space-y-2 text-sm">
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

          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Conecte
            </div>
            <div className="flex gap-2">
              {[
                { I: Github, h: "https://github.com/rodrigordgfs/" },
                { I: Linkedin, h: "https://www.linkedin.com/in/shinoda-labs/" },
                { I: Instagram, h: "https://instagram.com/r_shinodaa/" },
              ].map(({ I, h }, i) => (
                <a
                  key={i}
                  href={h}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card/70 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-teal/40 hover:text-teal hover:shadow-[0_0_30px_-14px_oklch(0.78_0.14_180_/_0.9)]"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
            <div className="mt-6 text-sm text-muted-foreground">
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
