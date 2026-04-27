import React from 'react';
import { WORKER_DESTINATIONS, DESTINATIONS_CONTENT } from '@/data/send-workers';
import { SectionHeader } from '@/components/site/section-header';

function DestCard({ dest }) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/30 whitespace-nowrap">
      <span className="text-2xl" role="img" aria-label={dest.ariaLabel}>{dest.flag}</span>
      <span className="font-medium text-foreground text-sm">{dest.country}</span>
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
        {WORKER_DESTINATIONS.map((dest) => (
          <DestCard key={dest.country} dest={dest} />
        ))}
      </div>

      {/* LARGE SCREENS: 4-5-4 Staggered Layout */}
      <div className="hidden lg:flex flex-col items-center gap-4 w-full">
        {/* Row 1: 4 Cards */}
        <div className="flex justify-center gap-4 w-full">
          {row1.map((dest) => <DestCard key={dest.country} dest={dest} />)}
        </div>
        {/* Row 2: 5 Cards */}
        <div className="flex justify-center gap-4 w-full">
          {row2.map((dest) => <DestCard key={dest.country} dest={dest} />)}
        </div>
        {/* Row 3: 4 Cards */}
        <div className="flex justify-center gap-4 w-full">
          {row3.map((dest) => <DestCard key={dest.country} dest={dest} />)}
        </div>
      </div>
    </div>
  );
}

