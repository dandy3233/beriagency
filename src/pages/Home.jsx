import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Users,
  Globe2,
  MapPin,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/site/section-header";
import { CTABand } from "@/components/site/cta-band";
import { PartnerStaggeredGrid } from "@/components/site/partner-grid";
import aboutImg from "@/assets/about.jpg";
import { SERVICES } from "@/data/services";
import { TESTIMONIALS } from "@/data/testimonials";
import {
  HERO_SLIDES,
  HERO_CONTENT,
  STATS,
  ABOUT_PREVIEW,
  SERVICES_PREVIEW,
  TESTIMONIALS_PREVIEW,
} from "@/data/home";

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero with Slider */}
      <section className="relative isolate overflow-hidden min-h-[650px] flex items-center">
        <div className="absolute inset-0 -z-10">
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                width={1920}
                height={1080}
                className={`h-full w-full object-cover transition-transform duration-[6000ms] ease-out ${index === currentSlide ? "scale-110" : "scale-100"
                  }`}
              />
            </div>
          ))}

          {/* Overlays */}
          <div className="absolute inset-0 bg-primary-deep/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/95 via-primary-deep/40 to-transparent" />
        </div>

        <div className="container-px mx-auto max-w-7xl py-20 md:py-32 lg:py-10">
          <div
            key={currentSlide} // Key change triggers CSS animation
            className="max-w-3xl relative z-10 text-left animate-in fade-in slide-in-from-left-8 duration-1000 ease-out"
          >
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {HERO_SLIDES[currentSlide].eyebrow}
            </p>

            <h1 className="font-display text-4xl font-bold leading-[1.1] text-white text-balance md:text-6xl lg:text-7xl">
              {HERO_SLIDES[currentSlide].title.split("Africa & Beyond")[0]}
              <span className="text-accent">Africa & Beyond</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-white/80 md:text-xl leading-relaxed">
              {HERO_SLIDES[currentSlide].description}
            </p>

            <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row relative z-20">
              <Button
                asChild
                size="lg"
                className="bg-accent text-primary-deep hover:bg-accent-soft px-8 font-bold h-14"
              >
                <Link to="/contact">
                  {HERO_CONTENT.ctaPrimary} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 bg-white/5 text-white hover:bg-white/10 hover:text-white px-8 h-14"
              >
                <Link to="/about">
                  Learn About Us
                </Link>
              </Button>
            </div>
          </div>

          {/* Slider Indicators */}
          <div className="absolute bottom-12 left-6 md:left-12 flex gap-3 z-10">
            {HERO_SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-500 ${index === currentSlide ? "w-10 bg-accent" : "w-3 bg-white/30 hover:bg-white/50"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-secondary/40">
        <div className="container-px mx-auto grid max-w-7xl grid-cols-2 gap-8 py-12 md:grid-cols-4 md:py-16">
          {STATS.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="font-display text-4xl font-bold text-primary md:text-5xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow={ABOUT_PREVIEW.eyebrow}
              title={ABOUT_PREVIEW.title}
              description={ABOUT_PREVIEW.description}
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {ABOUT_PREVIEW.features.map(({ label }) => {
                let Icon = ShieldCheck;
                if (label.includes("time")) Icon = Clock;
                if (label.includes("team")) Icon = Users;
                if (label.includes("network")) Icon = Globe2;

                return (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-medium text-foreground">{label}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-8">
              <Button asChild variant="outline">
                <Link to="/about">
                  {ABOUT_PREVIEW.cta} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-2xl bg-accent/20 blur-2xl"
              aria-hidden="true"
            />
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
            eyebrow={SERVICES_PREVIEW.eyebrow}
            title={SERVICES_PREVIEW.title}
            description={SERVICES_PREVIEW.description}
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg gradient-brand text-accent">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-primary-deep">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/services">
                {SERVICES_PREVIEW.cta} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners staggered grid */}
      <section className="bg-white overflow-hidden py-24 border-y border-border">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-3">
              Trusted Network
            </p>
          </div>

          <PartnerStaggeredGrid />
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <SectionHeader
          align="center"
          eyebrow={TESTIMONIALS_PREVIEW.eyebrow}
          title={TESTIMONIALS_PREVIEW.title}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.slice(0, 3).map((t) => (
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
