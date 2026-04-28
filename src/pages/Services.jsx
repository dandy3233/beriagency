import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "../components/site/section-header";
import { CTABand } from "../components/site/cta-band";
import servicesImg from "../assets/images/services.jpg";
import { SERVICES, STEPS, SERVICES_HERO, PROCESS_CONTENT } from "../data/services";
import Pagination from "../components/site/pagination";

export function Services() {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedServices, setPaginatedServices] = useState([]);
  const itemsPerPage = 6;

  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-24 text-white md:pt-48 lg:pt-52 lg:pb-32">
        <div className="absolute inset-0 z-0">
          <img
            src={servicesImg}
            alt="Services"
            className="h-full w-full object-cover transition-transform duration-[10s] hover:scale-110"
          />
          <div className="absolute inset-0 bg-primary-deep/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-deep/80 via-primary-deep/40 to-transparent" />
        </div>

        <div className="container-px relative z-10 mx-auto max-w-7xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.3em] text-accent backdrop-blur-md">
            {SERVICES_HERO.eyebrow}
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-balance md:text-6xl">
            {SERVICES_HERO.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
            {SERVICES_HERO.description}
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paginatedServices.map(({ icon: Icon, title, desc, items }) => (
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

        <Pagination
          items={SERVICES}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          onDataUpdate={setPaginatedServices}
        />
      </section>

      {/* Process */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            align="center"
            eyebrow={PROCESS_CONTENT.eyebrow}
            title={PROCESS_CONTENT.title}
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
                <h3 className="mt-4 font-display text-lg font-semibold text-primary-deep">
                  {s.title}
                </h3>
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
