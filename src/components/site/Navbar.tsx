import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

import siteLogo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

const links = [
  { href: "#work", label: "Projetos" },
  { href: "#about", label: "Sobre" },
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
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[padding] duration-300",
        scrolled ? "pt-3 md:pt-3" : "pt-4 md:pt-5",
      )}
    >
      <AnimatePresence>
        {open && (
          <motion.button
            type="button"
            key="nav-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/75 backdrop-blur-sm md:hidden"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <div className="relative z-50 mx-auto max-w-6xl px-4 sm:px-5">
        <nav
          className={cn(
            "flex items-center gap-2 rounded-full border px-2 py-2 sm:gap-3 sm:px-3",
            "bg-background/70 shadow-[0_0_0_1px_oklch(1_0_0/0.05)_inset] backdrop-blur-xl transition-[box-shadow,border-color,background-color] duration-300",
            scrolled
              ? "border-border/55 shadow-lg shadow-black/25"
              : "border-border/35 shadow-md shadow-black/15",
          )}
          aria-label="Principal"
        >
          <a
            href="#top"
            className="group flex shrink-0 items-center gap-2 rounded-full py-1 pl-1 pr-2 sm:pr-3"
            onClick={() => setOpen(false)}
          >
            <span className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-card/40 ring-1 ring-border/40">
              <img
                src={siteLogo}
                alt=""
                width={32}
                height={32}
                className="h-full w-full object-contain p-0.5"
                decoding="async"
              />
            </span>
            <span className="font-display text-sm font-semibold tracking-tight text-foreground sm:text-base">
              Shinoda<span className="text-muted-foreground">Labs</span>
            </span>
          </a>

          <div className="hidden min-w-0 flex-1 justify-center md:flex">
            <ul className="flex items-center rounded-full border border-border/30 bg-foreground/4 p-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="block rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-card/90 hover:text-foreground"
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
              className="hidden items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-teal md:inline-flex"
            >
              Iniciar projeto
              <ArrowUpRight className="h-3.5 w-3.5 opacity-80" aria-hidden />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors md:hidden",
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

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-nav"
              key="mobile-nav"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
