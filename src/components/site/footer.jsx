import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./logo";
import { FOOTER_CONTENT } from "@/data/global";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-deep text-white">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo variant="light" />
            <p className="max-w-xs text-sm text-white/70">
              {FOOTER_CONTENT.description}
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-accent">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              {FOOTER_CONTENT.links.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-accent">
              Legal & Compliance
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              {FOOTER_CONTENT.links.support.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-accent">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${FOOTER_CONTENT.email}`} className="break-all hover:text-accent">
                  {FOOTER_CONTENT.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{FOOTER_CONTENT.address === "Available on request" ? FOOTER_CONTENT.address : "Phone on request"}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{FOOTER_CONTENT.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row md:items-center">
          <p>{FOOTER_CONTENT.copyright.replace("{year}", currentYear)}</p>
          <p className="font-display tracking-wide text-accent">Connecting Africa to the World</p>
        </div>
      </div>
    </footer>
  );
}
