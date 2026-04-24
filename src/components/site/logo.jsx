import { Link } from "@tanstack/react-router";
import { Plane } from "lucide-react";
import logo from "@/assets/logo/logo.png";
import { cn } from "@/lib/utils";

export function Logo({ variant = "default", className }) {
  const isLight = variant === "light";
  return (
    <Link
      to="/"
      className={cn("flex items-center gap-3 font-display font-bold tracking-tight", className)}
    >
      <span
        className={cn(
          "flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-lg",
          isLight ? "bg-accent text-primary-deep" : "gradient-brand text-accent",
        )}
      >
        {/* <Plane className="h-6 w-6 -rotate-45" strokeWidth={2.5} /> */}
        <img src={logo} alt="Logo" className="h-6 w-6 md:h-12 md:w-12" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("text-lg md:text-xl", isLight ? "text-white" : "text-primary-deep")}>
          BERI <span className="text-accent">AGENCY</span>
        </span>
        <span
          className={cn(
            "mt-1 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em]",
            isLight ? "text-white/70" : "text-muted-foreground",
          )}
        >
          Smart Travel Solutions
        </span>
      </span>
    </Link>
  );
}
