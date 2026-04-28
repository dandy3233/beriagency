import { Award, ShieldCheck, FileBadge, Globe2 } from "lucide-react";
// Import placeholders temporarily to fix the build error
import p1 from "../assets/images/certificates/1.png";
import p2 from "../assets/images/certificates/2.png";
import p3 from "../assets/images/certificates/3.png";
import p4 from "../assets/images/certificates/4.png";

export const CERTS_HERO = {
  eyebrow: "Certificates & Compliance",
  title: "Credentials you can rely on.",
  description:
    "We hold the licenses and follow the legal standards required to handle international recruitment for employers and governments.",
};

export const CERTS_HEADER = {
  eyebrow: "Accreditation",
  title: "Our compliance & licensing",
  description:
    "Official certificate documents are available on request and will be displayed here as they are uploaded.",
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
    title: "Licensed Recruitment Agency",
    body: "Operating under a valid manpower recruitment license issued by the Ethiopian Ministry of Labor and Skills.",
  },
  {
    icon: FileBadge,
    image: p2,
    title: "International Labor Compliance",
    body: "Adhering to international labor standards and ethical recruitment practices for global placement.",
  },
  {
    icon: ShieldCheck,
    image: p3,
    title: "Government Registration",
    body: "Fully registered with all required Ethiopian government bodies, tax authorities, and business bureaus.",
  },
  {
    icon: Globe2,
    image: p4,
    title: "Gulf-Standard Certification",
    body: "Aligned with Gulf-specific requirements for worker deployment, health screening, and legal documentation.",
  },
];
