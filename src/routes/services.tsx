import { createFileRoute } from "@tanstack/react-router";
import {
  Plane,
  Globe2,
  Briefcase,
  Handshake,
  FileCheck,
  CheckCircle2,
  MessageSquare,
  ClipboardList,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { SectionHeader } from "@/components/site/section-header";
import { CTABand } from "@/components/site/cta-band";
import servicesImg from "@/assets/services.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — BERI AGENCY | Travel, Tours, Corporate & Visa" },
      {
        name: "description",
        content:
          "Travel management, tours & logistics, corporate solutions, partnership services, and visa & documentation support — all under one trusted roof.",
      },
      { property: "og:title", content: "Services — BERI AGENCY" },
      { property: "og:description", content: "Five core service areas powering travel for businesses, NGOs and partners." },
      { property: "og:image", content: servicesImg },
      { name: "twitter:image", content: servicesImg },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    icon: Plane,
    title: "Travel Management",
    desc: "End-to-end planning and ticketing for individuals and teams.",
    items: ["Corporate travel planning", "Flight booking & ticketing", "Travel policy compliance", "24/7 itinerary support"],
  },
  {
    icon: Globe2,
    title: "Tours & Logistics",
    desc: "Seamless tour design and on-the-ground coordination.",
    items: ["Customized tour packages", "Group travel coordination", "Local transportation arrangements", "Local guides & permits"],
  },
  {
    icon: Briefcase,
    title: "Corporate Solutions",
    desc: "Programs that turn travel spend into measurable value.",
    items: ["Business travel management", "Expense optimization", "Reporting & analytics", "Preferred-rate negotiation"],
  },
  {
    icon: Handshake,
    title: "Partnership Services",
    desc: "Strategic relationships across Africa and beyond.",
    items: ["Airline partnerships", "NGO travel support", "Global travel coordination", "Mission & event logistics"],
  },
  {
    icon: FileCheck,
    title: "Visa & Documentation",
    desc: "Paperwork done right — so you fly without friction.",
    items: ["Visa assistance", "Travel insurance", "Documentation compliance", "Embassy liaison"],
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Care",
    desc: "Standards, safety, and dedicated support at every step.",
    items: ["Industry accreditation", "Risk & duty-of-care", "Sustainable travel options", "Dedicated account manager"],
  },
];

const STEPS = [
  { icon: MessageSquare, title: "Discovery", desc: "We learn your goals, policies, and constraints." },
  { icon: ClipboardList, title: "Plan & Quote", desc: "Tailored itinerary with transparent pricing." },
  { icon: Rocket, title: "Book & Travel", desc: "We handle bookings, docs, and on-trip support." },
  { icon: CheckCircle2, title: "Review & Optimize", desc: "Reporting and ideas to save next time." },
];

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden gradient-brand text-white">
        <div className="container-px relative mx-auto max-w-7xl py-20 md:py-28">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">Our services</p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-balance md:text-6xl">
            Five core services. One reliable partner.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Whether you need a single visa or a full corporate travel program,
            BERI AGENCY brings the expertise, technology and care to make it
            effortless.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, desc, items }) => (
            <div
              key={title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-xl gradient-brand text-accent">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-primary-deep">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-foreground/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            align="center"
            eyebrow="How we work"
            title="A simple, four-step path to a great trip."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <div key={s.title} className="relative rounded-xl border border-border bg-card p-6">
                <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-primary-deep">
                  {i + 1}
                </div>
                <span className="mt-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-primary-deep">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
