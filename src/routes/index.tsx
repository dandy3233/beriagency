import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Plane,
  Globe2,
  Briefcase,
  Handshake,
  FileCheck,
  ShieldCheck,
  Clock,
  Users,
  MapPin,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/site/section-header";
import { CTABand } from "@/components/site/cta-band";
import heroImg from "@/assets/hero-home.jpg";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BERI AGENCY — Smart Travel Solutions Across Africa & Beyond" },
      {
        name: "description",
        content:
          "Reliable, compliant and technology-driven travel services for businesses, NGOs and global partners. Connecting Africa to the World.",
      },
      { property: "og:title", content: "BERI AGENCY — Smart Travel Solutions" },
      {
        property: "og:description",
        content: "Connecting Africa to the World — corporate travel, tours, NGO logistics, visa support.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const SERVICES = [
  { icon: Plane, title: "Travel Management", desc: "Corporate travel planning, ticketing, and policy compliance." },
  { icon: Globe2, title: "Tours & Logistics", desc: "Custom tours, group coordination, and ground transport." },
  { icon: Briefcase, title: "Corporate Solutions", desc: "Business travel, expense optimization, and reporting." },
  { icon: Handshake, title: "Partnership Services", desc: "Airline, NGO, and global travel coordination." },
  { icon: FileCheck, title: "Visa & Documentation", desc: "Visa assistance, insurance, and compliance support." },
  { icon: ShieldCheck, title: "Compliance & Care", desc: "Industry-standard accreditation and dedicated care." },
];

const STATS = [
  { value: "10+", label: "Years of expertise" },
  { value: "200+", label: "Clients served" },
  { value: "40+", label: "Countries reached" },
  { value: "98%", label: "On-time delivery" },
];

const TESTIMONIALS = [
  { quote: "BERI AGENCY made our corporate travel seamless and cost-efficient.", author: "Corporate Client" },
  { quote: "Reliable, fast, and very professional service.", author: "NGO Partner" },
  { quote: "Best travel coordination we've experienced in Africa.", author: "International Partner" },
];

const PARTNERS = ["Ethiopian Airlines", "UN Mission", "African Union", "World Bank", "Red Cross", "USAID"];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Airliner soaring above the African continent at sunset"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/95 via-primary-deep/80 to-primary-deep/40" />
        </div>

        <div className="container-px mx-auto max-w-7xl py-20 md:py-32 lg:py-40">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Connecting Africa to the World
            </p>
            <h1 className="font-display text-4xl font-bold leading-[1.1] text-white text-balance md:text-6xl lg:text-7xl">
              Smart Travel Solutions Across{" "}
              <span className="text-accent">Africa & Beyond</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80 md:text-xl">
              We deliver reliable, compliant, and technology-driven travel
              services for businesses, NGOs, and global partners.
            </p>
            <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-accent text-primary-deep hover:bg-accent-soft">
                <Link to="/contact">
                  Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                <Link to="/contact" search={{ type: "partner" }}>
                  Partner With Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-secondary/40">
        <div className="container-px mx-auto grid max-w-7xl grid-cols-2 gap-8 py-12 md:grid-cols-4 md:py-16">
          {STATS.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="font-display text-4xl font-bold text-primary md:text-5xl">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Who we are"
              title="A modern travel partner with an African soul and global reach."
              description="BERI AGENCY combines deep industry expertise with innovative technology to simplify travel operations for organizations of all sizes — from regional NGOs to multinational corporations."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: ShieldCheck, label: "Compliant & licensed" },
                { icon: Clock, label: "On-time, every time" },
                { icon: Users, label: "Dedicated account team" },
                { icon: Globe2, label: "Africa-wide network" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button asChild variant="outline">
                <Link to="/about">More about us <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-accent/20 blur-2xl" aria-hidden="true" />
            <img
              src={aboutImg}
              alt="BERI AGENCY team collaborating in Addis Ababa"
              width={1600}
              height={1000}
              loading="lazy"
              className="relative rounded-2xl shadow-elegant"
            />
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            align="center"
            eyebrow="What we do"
            title="Travel services built for organizations that move."
            description="From a single ticket to fleet-wide programs — we handle the details so you can focus on the mission."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg gradient-brand text-accent">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-primary-deep">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/services">Explore all services <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners strip */}
      <section className="border-y border-border bg-background py-12">
        <div className="container-px mx-auto max-w-7xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Trusted by airlines, NGOs, governments & corporations
          </p>
          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {PARTNERS.map((p) => (
              <div
                key={p}
                className="flex h-14 items-center justify-center rounded-md border border-dashed border-border bg-secondary/40 px-4 text-center font-display text-sm font-semibold text-muted-foreground"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <SectionHeader
          align="center"
          eyebrow="Voices of trust"
          title="What our clients say"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.author}
              className="relative rounded-xl border border-border bg-card p-8 shadow-soft"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-accent/40" />
              <blockquote className="font-display text-lg italic leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold text-primary-deep">{t.author}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
