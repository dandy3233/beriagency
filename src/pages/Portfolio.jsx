import { useState, useMemo, useEffect } from "react";
import { MapPin, TrendingUp, Tag } from "lucide-react";
import { SectionHeader } from "../components/site/section-header";
import { CTABand } from "../components/site/cta-band";
import { cn } from "../utils/helpers";
import p2 from "../assets/images/portfolio/project-2.png";
import { PROJECTS, FILTERS, PORTFOLIO_HERO, PORTFOLIO_FILTER_HEADER } from "../data/portfolio";
import Pagination from "../components/site/pagination";

export function Portfolio() {
  const [active, setActive] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedProjects, setPaginatedProjects] = useState([]);
  const itemsPerPage = 6;

  const visible = useMemo(
    () => (active === "All" ? PROJECTS : PROJECTS.filter((p) => p.type === active)),
    [active],
  );

  // Reset page to 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [active]);

  return (
    <>
      <section className="relative overflow-hidden bg-primary-deep text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={p2}
            alt="portfolio"
            className="h-full w-full object-cover transition-transform duration-[10s] hover:scale-110"
          />
          <div className="absolute inset-0 bg-primary-deep/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-deep/80 via-primary-deep/40 to-transparent" />
        </div>
        <div className="container-px relative z-10 mx-auto max-w-7xl pt-40 pb-20 md:pt-48 md:pb-28 lg:pt-52 lg:pb-32">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            {PORTFOLIO_HERO.eyebrow}
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-balance md:text-6xl">
            {PORTFOLIO_HERO.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">{PORTFOLIO_HERO.description}</p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-16 md:py-24">
        <SectionHeader
          eyebrow={PORTFOLIO_FILTER_HEADER.eyebrow}
          title={PORTFOLIO_FILTER_HEADER.title}
          description={PORTFOLIO_FILTER_HEADER.description}
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

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {paginatedProjects.map((p) => (
            <article
              key={p.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-xl font-bold text-primary-deep md:text-2xl">
                  {p.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-primary" />
                    {p.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Tag className="h-4 w-4 text-primary" />
                    {p.type}
                  </span>
                </div>

                <div className="mt-6 flex flex-1 items-start gap-3 rounded-xl bg-accent/10 p-4">
                  <TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm leading-relaxed text-foreground">{p.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="mt-12 text-center text-muted-foreground">
            {PORTFOLIO_FILTER_HEADER.emptyMessage}
          </p>
        ) : (
          <Pagination
            items={visible}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            onDataUpdate={setPaginatedProjects}
          />
        )}
      </section>

      <CTABand />
    </>
  );
}
