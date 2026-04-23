import { createFileRoute } from "@tanstack/react-router";
import { Plane, HeartHandshake, Landmark, Building2, Briefcase } from "lucide-react";
import { SectionHeader } from "@/components/site/section-header";
import { CTABand } from "@/components/site/cta-band";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Clients & Partners — BERI AGENCY" },
      {
        name: "description",
        content:
          "BERI AGENCY proudly serves airlines, NGOs, governments, private corporations and global travel agencies.",
      },
      { property: "og:title", content: "Clients & Partners — BERI AGENCY" },
      { property: "og:description", content: "The organizations that trust us to move their people." },
    ],
  }),
  component: ClientsPage,
});

const GROUPS = [
  {
    icon: Plane,
    title: "Airlines",
    items: ["Ethiopian Airlines", "Kenya Airways", "EgyptAir", "Qatar Airways", "Turkish Airlines", "Emirates"],
  },
  {
    icon: HeartHandshake,
    title: "NGOs & International Organizations",
    items: ["UN Mission", "Red Cross", "USAID", "Save the Children", "WFP", "Oxfam"],
  },
  {
    icon: Landmark,
    title: "Government Institutions",
    items: ["Federal Ministries", "Regional Bureaus", "Diplomatic Missions", "Public Agencies"],
  },
  {
    icon: Building2,
    title: "Private Corporations",
    items: ["Tech Group", "Manufacturing Co.", "Mining Inc.", "Consulting Ltd.", "FMCG Brand", "Energy Co."],
  },
  {
    icon: Briefcase,
    title: "Travel Agencies & Global Partners",
    items: ["Global DMC Network", "Partner Agency A", "Partner Agency B", "Online Travel Co."],
  },
];

function ClientsPage() {
  return (
    <>
      <section className="gradient-brand text-white">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">Clients & Partners</p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-balance md:text-6xl">
            Trusted by organizations across Africa and the world.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            We work alongside leading airlines, NGOs, governments and corporations
            to keep their people moving — safely and efficiently.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <SectionHeader
          align="center"
          eyebrow="Our network"
          title="Categorized by sector"
          description="Logos shown are representative — real partner logos can be added on request."
        />

        <div className="mt-14 space-y-12">
          {GROUPS.map(({ icon: Icon, title, items }) => (
            <div key={title}>
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-xl font-bold text-primary-deep">{title}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                {items.map((name) => (
                  <div
                    key={name}
                    className="flex h-20 items-center justify-center rounded-lg border border-dashed border-border bg-secondary/40 px-3 text-center font-display text-sm font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
