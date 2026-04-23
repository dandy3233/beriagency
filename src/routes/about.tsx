import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Sparkles, ShieldCheck, Heart, Lightbulb, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/site/section-header";
import { CTABand } from "@/components/site/cta-band";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — BERI AGENCY | Connecting Africa to the World" },
      {
        name: "description",
        content:
          "BERI AGENCY is a modern travel management company delivering efficient, transparent and cost-effective travel solutions across Africa and beyond.",
      },
      { property: "og:title", content: "About BERI AGENCY" },
      { property: "og:description", content: "Our mission, vision, and values — Connecting Africa to the World." },
      { property: "og:image", content: aboutImg },
      { name: "twitter:image", content: aboutImg },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: ShieldCheck, title: "Reliability", desc: "We deliver on time, every time, with transparent communication." },
  { icon: Heart, title: "Customer Care", desc: "Every client gets a dedicated team that treats your trip like our own." },
  { icon: Lightbulb, title: "Innovation", desc: "We use modern tools to make travel simpler, faster and smarter." },
  { icon: Globe2, title: "Global Reach", desc: "An African-rooted network with worldwide partnerships." },
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary-deep text-white">
        <div className="absolute inset-0 opacity-30">
          <img src={aboutImg} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 gradient-brand opacity-80" />
        </div>
        <div className="container-px relative mx-auto max-w-7xl py-20 md:py-28">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">About BERI AGENCY</p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-white text-balance md:text-6xl">
            We make travel work — for Africa, and for the world.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            BERI AGENCY is a modern travel management company focused on
            delivering efficient, transparent, and cost-effective travel
            solutions across Africa and international markets.
          </p>
        </div>
      </section>

      {/* Mission / Vision / Who */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              icon: Sparkles,
              eyebrow: "Who we are",
              title: "A modern, technology-driven travel partner.",
              body: "We combine industry expertise with innovative technology to simplify travel operations for organizations of all sizes — from regional NGOs to multinational corporations.",
            },
            {
              icon: Target,
              eyebrow: "Our Mission",
              title: "Compliant, smart, and reliable travel.",
              body: "Deliver compliant, technology-driven, and competitively priced travel solutions across Africa and global markets — with unmatched reliability, transparency, and customer care.",
            },
            {
              icon: Eye,
              eyebrow: "Our Vision",
              title: "Africa's most trusted travel partner.",
              body: "To become one of the most trusted African-focused travel management companies, serving airlines, NGOs, corporations, and global partners.",
            },
          ].map((card) => (
            <div
              key={card.eyebrow}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-xl gradient-brand text-accent">
                <card.icon className="h-7 w-7" />
              </span>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {card.eyebrow}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold text-primary-deep">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            align="center"
            eyebrow="Our values"
            title="The principles behind every itinerary."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-xl border border-border bg-card p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/15 text-primary">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-primary-deep">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/services">See what we offer</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
