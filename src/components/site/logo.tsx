import { Link } from "@tanstack/react-router";
import { Plane } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ variant = "default", className }: { variant?: "default" | "light"; className?: string }) {
  const isLight = variant === "light";
  return (
    <Link
      to="/"
      className={cn("flex items-center gap-2 font-display font-bold tracking-tight", className)}
    >
      <span
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-md",
          isLight ? "bg-accent text-primary-deep" : "gradient-brand text-accent",
        )}
      >
        <Plane className="h-5 w-5 -rotate-45" strokeWidth={2.5} />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-base md:text-lg",
            isLight ? "text-white" : "text-primary-deep",
          )}
        >
          BERI <span className="text-accent">AGENCY</span>
        </span>
        <span
          className={cn(
            "mt-0.5 text-[9px] font-medium uppercase tracking-[0.18em]",
            isLight ? "text-white/70" : "text-muted-foreground",
          )}
        >
          Smart Travel Solutions
        </span>
      </span>
    </Link>
  );
}
