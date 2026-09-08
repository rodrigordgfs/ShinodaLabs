import { cn } from "@/lib/utils";

type SectionBackdropProps = {
  variant?: "dots" | "lines" | "rings" | "mesh";
  align?: "left" | "right" | "center";
};

export function SectionBackdrop({ variant = "mesh", align = "right" }: SectionBackdropProps) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="section-vignette" />
      <div className="section-light-beam opacity-20" />
      <div
        className={cn(
          "absolute top-16 h-px w-40 bg-teal/50",
          align === "left" ? "left-5" : align === "center" ? "left-1/2" : "right-5",
        )}
      />
      <span className="absolute bottom-10 right-5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
        {variant}
      </span>
    </div>
  );
}
