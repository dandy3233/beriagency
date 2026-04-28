import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp, FaTelegramPlane, FaTiktok } from "react-icons/fa";
import { Logo } from "./logo";
import { FOOTER_CONTENT, SOCIAL_LINKS } from "../../data/global";

const SOCIAL_ICONS = {
  WhatsApp: FaWhatsapp,
  Telegram: FaTelegramPlane,
  TikTok: FaTiktok,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-deep text-white">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <div className="space-y-4">
              <Logo variant="light" />
              <p className="max-w-xs text-sm text-white/70">{FOOTER_CONTENT.description}</p>
            </div>

            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICONS[social.platform];
                if (!Icon) return null;
                return (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-accent hover:text-primary-deep"
                    aria-label={social.platform}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
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
                <span className="flex flex-col">
                  {FOOTER_CONTENT.phone?.map((num, i) => (
                    <span key={i}>{num}</span>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="flex flex-col">
                  {FOOTER_CONTENT.address?.map((line, i) => (
                    <span key={i}>{line}</span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row md:items-center">
          <p>{FOOTER_CONTENT.copyright.replace("{year}", currentYear)}</p>
          {/* <p className="font-display tracking-wide text-accent">Connecting Africa to the World</p> */}
        </div>
      </div>
    </footer>
  );
}
