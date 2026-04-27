import React from 'react';
import { WORKER_DESTINATIONS, DESTINATIONS_CONTENT } from '@/data/send-workers';
import { SectionHeader } from '@/components/site/section-header';

function DestCard({ dest, index }) {
  return (
    <div 
      className="group flex items-center gap-4 rounded-full border border-border bg-card px-6 py-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-primary/40 whitespace-nowrap"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <span 
        className="text-4xl animate-float transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:filter group-hover:drop-shadow-md" 
        role="img" 
        aria-label={dest.ariaLabel}
        style={{ animationDelay: `${index * 0.2}s` }}
      >
        {dest.flag}
      </span>
      <span className="font-bold text-foreground text-base tracking-tight">{dest.country}</span>
    </div>
  );
}

export function SendWorkers({ className }) {
  const row1 = WORKER_DESTINATIONS.slice(0, 4);
  const row2 = WORKER_DESTINATIONS.slice(4, 9);
  const row3 = WORKER_DESTINATIONS.slice(9, 13);

  return (
    <div className={className || "mt-24 border-t border-border pt-16"}>
      <SectionHeader
        align="center"
        eyebrow={DESTINATIONS_CONTENT.eyebrow}
        title={DESTINATIONS_CONTENT.title}
        description={DESTINATIONS_CONTENT.description}
        variant="pill"
        className="mb-12"
      />

      {/* MOBILE & TABLET: Centered flex-wrap */}
      <div className="flex flex-wrap justify-center gap-3 lg:hidden">
        {WORKER_DESTINATIONS.map((dest, i) => (
          <DestCard key={dest.country} dest={dest} index={i} />
        ))}
      </div>

      {/* LARGE SCREENS: 4-5-4 Staggered Layout */}
      <div className="hidden lg:flex flex-col items-center gap-4 w-full">
        {/* Row 1: 4 Cards */}
        <div className="flex justify-center gap-4 w-full">
          {row1.map((dest, i) => <DestCard key={dest.country} dest={dest} index={i} />)}
        </div>
        {/* Row 2: 5 Cards */}
        <div className="flex justify-center gap-4 w-full">
          {row2.map((dest, i) => <DestCard key={dest.country} dest={dest} index={i + 4} />)}
        </div>
        {/* Row 3: 4 Cards */}
        <div className="flex justify-center gap-4 w-full">
          {row3.map((dest, i) => <DestCard key={dest.country} dest={dest} index={i + 9} />)}
        </div>
      </div>
    </div>
  );
}

