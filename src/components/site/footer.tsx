import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-primary-deep text-white">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo variant="light" />
            <p className="max-w-xs text-sm text-white/70">
              Your Gateway to Smart Travel — connecting Africa to the world with
              compliant, technology-driven travel solutions.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-accent">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/about" className="hover:text-accent">About</Link></li>
              <li><Link to="/services" className="hover:text-accent">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-accent">Portfolio</Link></li>
              <li><Link to="/clients" className="hover:text-accent">Clients & Partners</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-accent">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/certificates" className="hover:text-accent">Certificates</Link></li>
              <li><Link to="/testimonials" className="hover:text-accent">Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
              <li><Link to="/contact" search={{ type: "partner" }} className="hover:text-accent">Partner with us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-accent">
              Get in touch
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href="mailto:barjalobalhire@gmail.com" className="break-all hover:text-accent">
                  barjalobalhire@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>Phone available on request</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>Addis Ababa, Ethiopia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} BERI AGENCY. All rights reserved.</p>
          <p className="font-display tracking-wide text-accent">Connecting Africa to the World</p>
        </div>
      </div>
    </footer>
  );
}
