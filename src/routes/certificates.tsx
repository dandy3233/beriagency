import { createFileRoute } from "@tanstack/react-router";
import { Award, ShieldCheck, FileBadge, Globe2 } from "lucide-react";
import { SectionHeader } from "@/components/site/section-header";
import { CTABand } from "@/components/site/cta-band";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: "Certificates & Compliance — BERI AGENCY" },
      {
        name: "description",
        content:
          "BERI AGENCY operates as a licensed travel agency, government-registered, and aligned with international travel standards.",
      },
      { property: "og:title", content: "Certificates & Compliance — BERI AGENCY" },
      { property: "og:description", content: "Our accreditations and compliance commitments." },
    ],
  }),
  component: CertificatesPage,
});

const CERTS = [
  { icon: Award, title: "Licensed Travel Agency", body: "Operating under a valid travel agency license issued by the relevant national authority." },
  { icon: FileBadge, title: "IATA / Travel Accreditation", body: "Working through IATA-accredited partners for global ticketing and fulfillment." },
  { icon: ShieldCheck, title: "Government Registration", body: "Fully registered with all required Ethiopian government bodies and tax authorities." },
  { icon: Globe2, title: "International Standards", body: "Aligned with international best practices for safety, data handling and duty-of-care." },
];

function CertificatesPage() {
  return (
    <>
      <section className="bg-primary-deep text-white">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">Certificates & Compliance</p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-balance md:text-6xl">
            Credentials you can rely on.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            We hold the licenses and follow the standards required to handle
            travel for governments, NGOs and corporations.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <SectionHeader
          align="center"
          eyebrow="Accreditation"
          title="Our compliance & licensing"
          description="Official certificate documents are available on request and will be displayed here as they are uploaded."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {CERTS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="flex items-start gap-5">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl gradient-brand text-accent">
                  <Icon className="h-8 w-8" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-primary-deep">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-md bg-accent/15 px-3 py-1 text-xs font-semibold text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Verified
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Want to see a specific certificate?{" "}
          <a href="mailto:barjalobalhire@gmail.com" className="font-medium text-primary hover:underline">
            Email us
          </a>{" "}
          and we'll share a copy.
        </p>
      </section>

      <CTABand />
    </>
  );
}
