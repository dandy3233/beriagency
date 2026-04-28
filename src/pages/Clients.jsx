import { SectionHeader } from "../components/site/section-header";
import { CLIENTS_HERO, CLIENTS_HEADER } from "../data/partners";
import { CTABand } from "../components/site/cta-band";
import { PartnerStaggeredGrid } from "../components/site/partner-grid";
import heroImg from "../assets/images/hero-home.jpg";

export function Clients() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary-deep text-white">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Clients" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-primary-deep/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-deep via-primary-deep/60 to-transparent" />
        </div>

        <div className="container-px relative z-10 mx-auto max-w-7xl py-20 md:pt-52 md:pb-20 text-center md:text-left">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            {CLIENTS_HERO.eyebrow}
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-balance md:text-5xl">
            {CLIENTS_HERO.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">{CLIENTS_HERO.description}</p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="container-px mx-auto max-w-7xl flex flex-col items-center">
          <SectionHeader
            align="center"
            eyebrow={CLIENTS_HEADER.eyebrow}
            title={CLIENTS_HEADER.title}
            description={CLIENTS_HEADER.description}
          />

          <PartnerStaggeredGrid />
        </div>
      </section>

      <CTABand />
    </>
  );
}
