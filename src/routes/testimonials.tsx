import { createFileRoute } from "@tanstack/react-router";
import { Quote, Star } from "lucide-react";
import { SectionHeader } from "@/components/site/section-header";
import { CTABand } from "@/components/site/cta-band";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — BERI AGENCY" },
      {
        name: "description",
        content:
          "What corporate, NGO and international partners say about working with BERI AGENCY — Connecting Africa to the World.",
      },
      { property: "og:title", content: "Testimonials — BERI AGENCY" },
      { property: "og:description", content: "Voices from our clients across Africa and beyond." },
    ],
  }),
  component: TestimonialsPage,
});

const TESTIMONIALS = [
  {
    quote: "BERI AGENCY made our corporate travel seamless and cost-efficient.",
    author: "Corporate Client",
    role: "Multinational, Pan-Africa",
  },
  {
    quote: "Reliable, fast, and very professional service.",
    author: "NGO Partner",
    role: "International NGO",
  },
  {
    quote: "Best travel coordination we've experienced in Africa.",
    author: "International Partner",
    role: "Global Travel Network",
  },
  {
    quote: "Their visa and documentation team saved us weeks of paperwork.",
    author: "Operations Manager",
    role: "Mining Company",
  },
  {
    quote: "Always one step ahead — even when itineraries change last minute.",
    author: "Programs Director",
    role: "Humanitarian NGO",
  },
  {
    quote: "Transparent pricing and excellent post-trip reporting.",
    author: "Finance Lead",
    role: "Tech Group",
  },
];

function TestimonialsPage() {
  return (
    <>
      <section className="gradient-brand text-white">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">Testimonials</p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-balance md:text-6xl">
            Trust, in our clients' own words.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Honest feedback from the people we've helped move across Africa
            and around the world.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <SectionHeader align="center" eyebrow="What clients say" title="Stories of seamless travel." />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.quote}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-accent/30" />
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 font-display text-lg italic leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-semibold text-primary-deep">{t.author}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
