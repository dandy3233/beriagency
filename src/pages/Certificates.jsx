import { SectionHeader } from "@/components/site/section-header";
import { CTABand } from "@/components/site/cta-band";
import { CERTS, CERTS_HERO, CERTS_HEADER } from "@/data/certificates";

export function Certificates() {
  return (
    <>
      <section className="bg-primary-deep text-white">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            {CERTS_HERO.eyebrow}
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-balance md:text-6xl">
            {CERTS_HERO.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            {CERTS_HERO.description}
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <SectionHeader
          align="center"
          eyebrow={CERTS_HEADER.eyebrow}
          title={CERTS_HEADER.title}
          description={CERTS_HEADER.description}
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
          {CERTS_HEADER.footer.text}
          <a
            href={CERTS_HEADER.footer.linkHref}
            className="font-medium text-primary hover:underline"
          >
            {CERTS_HEADER.footer.linkText}
          </a>
          {CERTS_HEADER.footer.suffix}
        </p>
      </section>

      <CTABand />
    </>
  );
}
