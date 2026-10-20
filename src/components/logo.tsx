import { cn } from "@/lib/utils";

export function Logo({
  className,
  inverted = false,
  size = "header",
}: {
  className?: string;
  inverted?: boolean;
  size?: "header" | "footer";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center bg-transparent border-none p-0 m-0 shadow-none outline-none",
        className,
      )}
    >
      <img 
        src="/PSC_logo_blue@300x.png" 
        alt="P.S.C. srl edilizia moderna" 
        className={cn(
          "w-auto object-contain border-none p-0 m-0 shadow-none outline-none bg-transparent max-w-full block",
          // Rimosso il trucco mix-blend visto che l'immagine è già trasparente
          inverted ? "brightness-0 invert" : "",
          size === "footer" ? "h-28 md:h-32" : "h-24 md:h-28",
        )}
      />
      <span className="sr-only">P.S.C. srl edilizia moderna</span>
    </span>
  );
}
