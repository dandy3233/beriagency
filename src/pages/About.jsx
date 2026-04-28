import { ArrowRight, Sparkles, Globe2 } from "lucide-react";
import { cn } from "../utils/helpers";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { SectionHeader } from "../components/site/section-header";
// import aboutImg from "../assets/images/about.jpg";
import aboutImg from "../assets/images/12.png";
import {
  VALUES,
  ABOUT_CARDS,
  ABOUT_HERO,
  VALUES_CONTENT,
  ABOUT_STATS,
  ABOUT_CTA,
  TEAM,
} from "../data/about";
import { SendWorkers } from "../components/site/send-workers";

export function About() {
  return (
    <>
      {/* Immersive Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={aboutImg}
            alt="World Travel"
            className="h-full w-full object-cover transition-transform duration-[10s] hover:scale-110"
          />
          <div className="absolute inset-0 bg-primary-deep/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-deep/40 to-primary-deep" />
        </div>

        <div className="container-px relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center pt-40 pb-20 md:pt-48 md:pb-28 lg:pt-58 lg:pb-32">
          <div className="max-w-4xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.3em] text-accent backdrop-blur-md">
              {ABOUT_HERO.eyebrow}
            </p>
            {/* <h1 className="font-display text-5xl font-bold leading-tight text-white text-balance md:text-7xl lg:text-7xl">
              {ABOUT_HERO.title} <br />
              <span className="text-accent underline decoration-white/20 underline-offset-8 italic font-light">{ABOUT_HERO.subtitle}</span>
            </h1> */}
            <p className="mt-8 max-w-2xl text-lg text-white/90 md:text-lg leading-relaxed">
              {ABOUT_HERO.description}
            </p>
          </div>
        </div>
      </section>

      {/* Floating Mission Section */}
      <section className="relative z-20 -mt-20 container-px mx-auto max-w-7xl pb-20 md:pb-32">
        <div className="grid gap-8 lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12">
          {/* Glassmorphism Feature Card */}
          <div className="lg:col-span-8 overflow-hidden rounded-[2.5rem] bg-white/5 p-1 px-1 border border-white/10 backdrop-blur-3xl shadow-elegant">
            <div className="bg-card rounded-[2.3rem] p-10 md:p-16">
              <SectionHeader
                eyebrow={ABOUT_CARDS[0].eyebrow}
                title={ABOUT_CARDS[0].title}
                description={ABOUT_CARDS[0].body}
              />

              <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                {ABOUT_CARDS.slice(1).map((card) => (
                  <div
                    key={card.title}
                    className="group flex items-start gap-4 p-4 rounded-2xl transition-colors hover:bg-secondary/50"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <card.icon className="h-6 w-6" />
                    </div>
                    <div>
                      {card.eyebrow && (
                        <p className="mb-1 text-xs font-bold uppercase tracking-widest text-accent">
                          {card.eyebrow}
                        </p>
                      )}
                      {/* <h4 className="font-display text-lg font-bold text-primary-deep">{card.title}</h4> */}
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                        {card.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Stats / Info Widget */}
          <div className="lg:col-span-4 space-y-8">
            <div className="rounded-[2.5rem] bg-primary-deep p-10 text-white shadow-elegant">
              <h3 className="font-display text-2xl font-bold mb-6">{ABOUT_STATS.title}</h3>
              <div className="space-y-6">
                {ABOUT_STATS.items.map((item) => (
                  <div
                    key={item.label}
                    className="border-b border-white/10 pb-4 last:border-0 last:pb-0"
                  >
                    <div className="text-xs uppercase tracking-widest text-accent font-bold opacity-80">
                      {item.label}
                    </div>
                    <div className="text-lg font-medium mt-1">{item.val}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[2.5rem] bg-accent p-10 text-primary-deep shadow-elegant transition-all hover:scale-[1.02]">
              <div className="absolute -right-4 -top-4 text-primary-deep/10">
                <Globe2 className="h-32 w-32 rotate-12" />
              </div>
              <h3 className="relative z-10 font-display text-2xl font-bold leading-tight whitespace-pre-line">
                {ABOUT_CTA.title}
              </h3>
              <Link
                to={ABOUT_CTA.linkHref}
                className="relative z-10 mt-6 inline-flex items-center gap-2 font-bold uppercase tracking-widest text-xs group/btn"
              >
                {ABOUT_CTA.linkText}{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Horizontal Values */}
      <section className="bg-primary-deep py-24 md:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <SectionHeader
                eyebrow={<span className="text-white">{VALUES_CONTENT.eyebrow}</span>}
                title={<span className="text-white">{VALUES_CONTENT.title}</span>}
                align="left"
              />
            </div>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="group border-l border-white/10 pl-8 transition-colors hover:border-accent"
              >
                <div className="mb-6 text-accent group-hover:scale-110 group-hover:-translate-y-1 transition-all">
                  <v.icon className="h-10 w-10" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{v.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <SectionHeader
          align="center"
          eyebrow={TEAM.eyebrow}
          title={TEAM.title}
          description={TEAM.description}
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.members.map((member) => (
            <div key={member.name} className="group flex flex-col items-center text-center">
              <div className="relative mb-6 aspect-square w-full overflow-hidden rounded-3xl bg-secondary/30">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-deep/10 transition-colors group-hover:bg-transparent" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-deep">{member.name}</h3>
              <p className="mt-1 text-sm font-semibold text-accent uppercase tracking-widest">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Where We Send Workers */}
      <section className="container-px mx-auto max-w-7xl pb-24 md:pb-32">
        <SendWorkers className="" />
      </section>
    </>
  );
}
