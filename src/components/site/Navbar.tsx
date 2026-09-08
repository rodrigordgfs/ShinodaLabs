import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "Sobre" },
  { href: "#work", label: "Projetos" },
  { href: "#contact", label: "Contato" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[padding] duration-300",
        scrolled ? "pt-0" : "pt-2",
      )}
    >
      {open && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-background/75 backdrop-blur-sm md:hidden"
          aria-label="Fechar menu"
          onClick={() => setOpen(false)}
        />
      )}

      <div className="relative z-50 mx-auto max-w-6xl px-5 sm:px-6">
        <nav
          className={cn(
            "flex items-center gap-2 border-b px-0 py-3 sm:gap-3",
            "bg-background/95 transition-[border-color,background-color] duration-300",
            scrolled
              ? "border-border"
              : "border-border/50",
          )}
          aria-label="Principal"
        >
          <a
            href="#top"
            aria-label="ShinodaLabs — voltar ao início"
            className="group flex shrink-0 items-center py-1 pr-3"
            onClick={() => setOpen(false)}
          >
            <img
              src="/logo.png"
              alt=""
              aria-hidden
              width={152}
              height={34}
              className="h-7 w-auto sm:h-8"
              decoding="async"
            />
          </a>

          <div className="hidden min-w-0 flex-1 justify-center md:flex">
            <ul className="flex items-center gap-5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="block min-h-11 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-teal"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="ml-auto flex items-center gap-2 sm:gap-2.5">
            <a
              href="#contact"
              className="hidden min-h-11 items-center gap-1.5 border-l border-border pl-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:text-teal md:inline-flex"
            >
              Iniciar projeto
              <ArrowUpRight className="h-3.5 w-3.5 opacity-80" aria-hidden />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center border transition-colors md:hidden",
                open
                  ? "border-teal/40 bg-teal/10 text-foreground"
                  : "border-border/50 bg-background/60 text-foreground hover:border-border hover:bg-card/60",
              )}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {open && (
          <div
            id="mobile-nav"
            className="absolute inset-x-3 top-[calc(100%+0.5rem)] overflow-hidden rounded-2xl border border-border/50 bg-background/90 p-2 shadow-xl shadow-black/30 backdrop-blur-xl sm:inset-x-4 md:hidden"
          >
            <ul className="flex flex-col gap-0.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3.5 text-base font-medium text-muted-foreground transition-colors hover:bg-card/80 hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-1 border-t border-border/40 pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-foreground py-3 text-base font-medium text-background transition-colors hover:bg-teal"
                >
                  Iniciar projeto
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
