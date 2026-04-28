import { useState } from "react";
import { LiaCertificateSolid } from "react-icons/lia";
import { SectionHeader } from "../components/site/section-header";
import { CTABand } from "../components/site/cta-band";
import { CERTS, CERTS_HERO, CERTS_HEADER } from "../data/certificates";
import certImg from "../assets/images/about.jpg";
import Pagination from "../components/site/pagination";

export function Certificates() {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedCerts, setPaginatedCerts] = useState([]);
  const itemsPerPage = 6;

  return (
    <>
      <section className="relative overflow-hidden bg-primary-deep text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={certImg}
            alt="Certificates"
            className="h-full w-full object-cover transition-transform duration-[10s] hover:scale-110"
          />
          <div className="absolute inset-0 bg-primary-deep/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-deep/80 via-primary-deep/40 to-transparent" />
        </div>

        <div className="container-px relative z-10 mx-auto max-w-7xl pt-40 pb-20 md:pt-48 md:pb-28 lg:pt-52 lg:pb-32">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            {CERTS_HERO.eyebrow}
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-balance md:text-6xl">
            {CERTS_HERO.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">{CERTS_HERO.description}</p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <SectionHeader
          align="center"
          eyebrow={CERTS_HEADER.eyebrow}
          title={CERTS_HEADER.title}
          description={CERTS_HEADER.description}
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedCerts.map(({ icon: Icon, image, title, body }) => (
            <div
              key={title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-border bg-secondary/20">
                {/* Verified Badge Top Right */}
                <div
                  className="
                  absolute right-4 top-4 z-20
                  flex items-center justify-center
                  rounded-full bg-white/95 text-amber-700 shadow-sm backdrop-blur-md
                  h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20
                "
                >
                  <LiaCertificateSolid className="text-amber-600 h-8 w-8 md:h-10 md:w-10 lg:h-14 lg:w-14" />
                </div>

                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary-deep/5 transition-colors group-hover:bg-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-8">
                <div className="flex items-start gap-5">
                  <div>
                    <h3 className="font-display text-xl font-bold text-primary-deep">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          items={CERTS}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          onDataUpdate={setPaginatedCerts}
        />

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
