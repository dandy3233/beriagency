import { Award, ShieldCheck, FileBadge, Globe2 } from "lucide-react";

export const CERTS_HERO = {
  eyebrow: "Certificates & Compliance",
  title: "Credentials you can rely on.",
  description: "We hold the licenses and follow the standards required to handle travel for governments, NGOs and corporations.",
};

export const CERTS_HEADER = {
  eyebrow: "Accreditation",
  title: "Our compliance & licensing",
  description: "Official certificate documents are available on request and will be displayed here as they are uploaded.",
  footer: {
    text: "Want to see a specific certificate? ",
    linkText: "Email us",
    linkHref: "mailto:barjalobalhire@gmail.com",
    suffix: " and we'll share a copy.",
  },
};

export const CERTS = [
  {
    icon: Award,
    title: "Licensed Travel Agency",
    body: "Operating under a valid travel agency license issued by the relevant national authority.",
  },
  {
    icon: FileBadge,
    title: "IATA / Travel Accreditation",
    body: "Working through IATA-accredited partners for global ticketing and fulfillment.",
  },
  {
    icon: ShieldCheck,
    title: "Government Registration",
    body: "Fully registered with all required Ethiopian government bodies and tax authorities.",
  },
  {
    icon: Globe2,
    title: "International Standards",
    body: "Aligned with international best practices for safety, data handling and duty-of-care.",
  },
];
