import { Quote, Star } from "lucide-react";
import { SectionHeader } from "@/components/site/section-header";
import { CTABand } from "@/components/site/cta-band";
import { TESTIMONIALS, TESTIMONIALS_HERO, TESTIMONIALS_HEADER } from "@/data/testimonials";
import testimonialImg from "@/assets/services.jpg";

export function TestimonialsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary-deep text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={testimonialImg}
            alt="Testimonials"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-deep/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-deep via-primary-deep/60 to-transparent" />
        </div>

        <div className="container-px relative z-10 mx-auto max-w-7xl py-20 md:py-28">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            {TESTIMONIALS_HERO.eyebrow}
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-balance md:text-6xl">
            {TESTIMONIALS_HERO.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            {TESTIMONIALS_HERO.description}
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <SectionHeader
          align="center"
          eyebrow={TESTIMONIALS_HEADER.eyebrow}
          title={TESTIMONIALS_HEADER.title}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.quote}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-accent/30" />
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 font-display text-lg italic leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-semibold text-primary-deep">{t.author}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
