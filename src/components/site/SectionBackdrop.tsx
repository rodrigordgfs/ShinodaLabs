import { cn } from "@/lib/utils";

type SectionBackdropProps = {
  variant?: "dots" | "lines" | "rings" | "mesh";
  align?: "left" | "right" | "center";
};

const alignStyles = {
  left: "left-[-10rem] top-10",
  right: "right-[-10rem] top-8",
  center: "left-[38%] top-16",
};

export function SectionBackdrop({
  variant = "mesh",
  align = "right",
}: SectionBackdropProps) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="section-vignette" />
      <div className="section-light-beam" />

      {variant === "dots" && (
        <>
          <div className="absolute inset-x-0 top-10 h-56 bg-dot-field opacity-45" />
          <div
            className={cn(
              "absolute h-[26rem] w-[26rem] rounded-full border border-teal/10 section-ring",
              alignStyles[align],
            )}
          />
        </>
      )}

      {variant === "lines" && (
        <>
          <div className="absolute left-0 right-0 top-16 h-px bg-gradient-to-r from-transparent via-teal/25 to-transparent" />
          <div className="absolute left-0 right-0 bottom-20 h-px bg-gradient-to-r from-transparent via-emerald/15 to-transparent" />
          <div
            className={cn(
              "absolute h-72 w-72 rotate-45 border border-border/50 section-frame",
              alignStyles[align],
            )}
          />
        </>
      )}

      {variant === "rings" && (
        <div className={cn("absolute h-[34rem] w-[34rem]", alignStyles[align])}>
          <div className="absolute inset-0 rounded-full border border-teal/15 section-ring" />
          <div className="absolute inset-16 rounded-full border border-emerald/10 section-ring section-ring-slow" />
          <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal/70 shadow-[0_0_22px_4px] shadow-teal/20" />
        </div>
      )}

      {variant === "mesh" && (
        <>
          <div className="absolute inset-0 bg-grid bg-grid-fade opacity-30" />
          <div
            className={cn(
              "absolute h-[30rem] w-[30rem] section-mesh",
              alignStyles[align],
            )}
          />
        </>
      )}
    </div>
  );
}
