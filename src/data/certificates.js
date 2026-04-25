import { Award, ShieldCheck, FileBadge, Globe2 } from "lucide-react";
// Import placeholders temporarily to fix the build error
import p1 from "@/assets/certificates/1.png";
import p2 from "@/assets/certificates/2.png";
import p3 from "@/assets/certificates/3.png";
import p4 from "@/assets/certificates/4.png";

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
    linkHref: "mailto:beriglobalhire@gmail.com",
    suffix: " and we'll share a copy.",
  },
};

export const CERTS = [
  {
    icon: Award,
    image: p1,
    title: "Licensed Travel Agency",
    body: "Operating under a valid travel agency license issued by the relevant national authority.",
  },
  {
    icon: FileBadge,
    image: p2,
    title: "IATA / Travel Accreditation",
    body: "Working through IATA-accredited partners for global ticketing and fulfillment.",
  },
  {
    icon: ShieldCheck,
    image: p3,
    title: "Government Registration",
    body: "Fully registered with all required Ethiopian government bodies and tax authorities.",
  },
  {
    icon: Globe2,
    image: p4,
    title: "International Standards",
    body: "Aligned with international best practices for safety, data handling and duty-of-care.",
  },
];
