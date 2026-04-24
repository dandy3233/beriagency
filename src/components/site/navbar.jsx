import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";
import { NAVBAR_CONTENT, FOOTER_CONTENT, SOCIAL_LINKS } from "@/data/global";

const SOCIAL_ICONS = {
  Facebook: Facebook,
  Twitter: Twitter,
  Instagram: Instagram,
  Linkedin: Linkedin,
  Youtube: Youtube,
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const navItems = [
    { to: "/", label: "Home" },
    ...NAVBAR_CONTENT.links.map(l => ({ to: l.href, label: l.label })),
    { to: "/contact", label: "Contact" }
  ];

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6 pointer-events-none">
      <header
        className={cn(
          "pointer-events-auto w-full max-w-[1400px] overflow-hidden rounded-[2rem] transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
          scrolled ? "-translate-y-2 md:-translate-y-4 shadow-xl" : "translate-y-0"
        )}
      >
        {/* Topbar - Dark section */}
        <div 
          className={cn(
            "bg-primary-deep transition-all duration-500 md:flex items-center justify-between px-8 text-sm text-white/90 hidden",
            scrolled ? "h-0 py-0 opacity-0" : "h-12 py-2 opacity-100"
          )}
        >
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 font-medium">
              <span className="text-white/60">location:</span>
              <span>{FOOTER_CONTENT.address?.replace('\n', ', ')}</span>
            </div>
            
            <div className="h-4 w-px bg-white/20" />
            
            <a href={`mailto:${FOOTER_CONTENT.email}`} className="text-accent font-bold hover:text-white transition-colors">
              {FOOTER_CONTENT.email}
            </a>

            <div className="h-4 w-px bg-white/20" />
            <div className="flex gap-4">
              {FOOTER_CONTENT.phone?.split('\n').map((num) => (
                <a key={num} href={`tel:${num.replace(/\s+/g, '')}`} className="hover:text-accent transition-colors font-medium">
                  {num}
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-5">
            {SOCIAL_LINKS.map(social => {
              const Icon = SOCIAL_ICONS[social.platform];
              if (!Icon) return null;
              return (
                <a key={social.platform} href={social.href} className="text-white hover:text-accent transition-colors" aria-label={social.platform}>
                  <Icon className="h-[18px] w-[18px]" strokeWidth={2.5} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Main Navbar - White section */}
        <div className="flex items-center justify-between bg-white px-6 md:px-10 py-4 transition-colors">
          <Logo variant="default" className="scale-95 md:scale-100 origin-left" />

          <nav className="hidden items-center lg:flex lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="text-[15px] font-semibold text-primary transition-colors hover:text-accent data-[status=active]:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-primary lg:hidden hover:bg-secondary"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
           <div className="bg-white px-6 pb-6 pt-2 lg:hidden border-t border-border/10 text-primary">
              <nav className="flex flex-col gap-1">
                 {navItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      activeOptions={{ exact: item.to === "/" }}
                      className="rounded-lg px-4 py-3 text-base font-semibold transition-colors hover:bg-secondary hover:text-accent data-[status=active]:bg-primary/5 data-[status=active]:text-primary"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                 ))}
                 
                 <div className="mt-6 pt-6 border-t border-border/10 text-sm">
                    <div className="flex flex-col gap-3 font-medium text-primary/70 mb-6">
                      <p><span className="text-primary/40">location:</span> {FOOTER_CONTENT.address?.replace('\n', ', ')}</p>
                      <a href={`mailto:${FOOTER_CONTENT.email}`} className="text-accent font-semibold">{FOOTER_CONTENT.email}</a>
                      {FOOTER_CONTENT.phone?.split('\n').map((num) => (
                        <a key={num} href={`tel:${num.replace(/\s+/g, '')}`}>{num}</a>
                      ))}
                    </div>
                    <div className="flex items-center gap-5">
                      {SOCIAL_LINKS.map(social => {
                        const Icon = SOCIAL_ICONS[social.platform];
                        if (!Icon) return null;
                        return (
                          <a key={social.platform} href={social.href} className="text-primary/40 hover:text-accent" aria-label={social.platform}>
                            <Icon className="h-5 w-5" />
                          </a>
                        );
                      })}
                    </div>
                 </div>
              </nav>
           </div>
        )}
      </header>
    </div>
  );
}
