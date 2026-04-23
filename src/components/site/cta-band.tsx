import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTABand() {
  return (
    <section className="relative overflow-hidden gradient-brand">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent blur-3xl" />
        <div className="absolute -bottom-40 left-10 h-96 w-96 rounded-full bg-accent-soft blur-3xl" />
      </div>
      <div className="container-px relative mx-auto max-w-7xl py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Ready when you are
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-white text-balance md:text-5xl">
            Let's plan your next journey, together.
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Whether you need corporate travel, NGO logistics, or a long-term
            partnership — we'll respond within one business day.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-accent text-primary-deep hover:bg-accent-soft">
              <Link to="/contact">
                Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              <Link to="/contact" search={{ type: "partner" }}>
                Partner With Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
