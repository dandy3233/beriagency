import { useState, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MapPin, TrendingUp, Tag } from "lucide-react";
import { SectionHeader } from "@/components/site/section-header";
import { CTABand } from "@/components/site/cta-band";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — BERI AGENCY | Recent Travel Projects" },
      {
        name: "description",
        content:
          "Recent travel projects: NGO mission travel, multinational corporate programs, East Africa group tours, and airline ticketing & logistics.",
      },
      { property: "og:title", content: "Portfolio — BERI AGENCY" },
      { property: "og:description", content: "Selected engagements across NGO, corporate, tours and airline operations." },
    ],
  }),
  component: PortfolioPage,
});

const PROJECTS = [
  {
    title: "NGO regional mission travel",
    location: "East Africa",
    type: "Partnership Services",
    result: "Coordinated 120+ field-staff trips across 6 countries with zero missed missions.",
  },
  {
    title: "Multinational corporate program",
    location: "Pan-Africa",
    type: "Corporate Solutions",
    result: "Cut annual travel spend by 22% via policy & vendor optimization.",
  },
  {
    title: "East Africa group tour series",
    location: "Ethiopia · Kenya · Tanzania",
    type: "Tours & Logistics",
    result: "Designed and led 14 tour groups with a 4.9/5 satisfaction score.",
  },
  {
    title: "Airline ticketing & logistics",
    location: "Addis Ababa hub",
    type: "Travel Management",
    result: "Issued 5,000+ tickets with a 99.7% accuracy rate and 24/7 support.",
  },
];

const FILTERS = ["All", "Travel Management", "Tours & Logistics", "Corporate Solutions", "Partnership Services"] as const;

function PortfolioPage() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("All");
  const visible = useMemo(
    () => (active === "All" ? PROJECTS : PROJECTS.filter((p) => p.type === active)),
    [active],
  );

  return (
    <>
      <section className="bg-primary-deep text-white">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">Portfolio</p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-balance md:text-6xl">
            Real engagements. Real results.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            A selection of the work our team has delivered across Africa and beyond.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-16 md:py-24">
        <SectionHeader
          eyebrow="Selected work"
          title="Filter by service type"
          description="A handful of engagements that show how we help clients move smarter."
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                active === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground hover:border-primary hover:text-primary",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {visible.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="absolute right-0 top-0 h-1 w-full gradient-accent" />
              <h3 className="font-display text-xl font-bold text-primary-deep md:text-2xl">{p.title}</h3>

              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary" />{p.location}</span>
                <span className="inline-flex items-center gap-1.5"><Tag className="h-4 w-4 text-primary" />{p.type}</span>
              </div>

              <div className="mt-5 flex items-start gap-3 rounded-lg bg-accent/10 p-4">
                <TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-foreground">{p.result}</p>
              </div>
            </article>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="mt-12 text-center text-muted-foreground">No projects in this category yet.</p>
        )}
      </section>

      <CTABand />
    </>
  );
}
