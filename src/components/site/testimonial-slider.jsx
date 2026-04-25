import { useState, useEffect, useCallback } from "react";
import { Quote, MapPin } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(1);

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      setItemsPerView(window.innerWidth >= 768 ? 3 : 1);
    };
    
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const totalItems = TESTIMONIALS.length;
  // Calculate total pages/dots
  const totalDots = Math.ceil(totalItems / itemsPerView);
  
  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalDots);
  }, [totalDots]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  return (
    <div 
      className="relative mt-14 overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div 
        className="flex transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1)"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="w-full md:w-1/3 flex-shrink-0 px-3">
            <figure className="h-full relative rounded-xl border border-border bg-card p-8 shadow-soft">
              <Quote className="absolute right-6 top-6 h-8 w-8 text-accent/20" />
              <blockquote className="font-display text-lg italic leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4" />
                </span>
                <div className="text-left">
                  <div className="text-sm font-semibold text-primary-deep">{t.author}</div>
                  <div className="text-[11px] text-muted-foreground uppercase tracking-wider">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="mt-10 flex justify-center gap-2">
        {Array.from({ length: totalDots }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-500",
              i === currentIndex ? "w-10 bg-accent" : "w-2 bg-border hover:bg-accent/40"
            )}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
