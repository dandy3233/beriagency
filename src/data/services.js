import { Plane, Globe2, Briefcase, Handshake, FileCheck, ShieldCheck, MessageSquare, ClipboardList, Rocket, CheckCircle2 } from "lucide-react";

export const SERVICES_HERO = {
  eyebrow: "Our services",
  title: "Five core services. One reliable partner.",
  description: "Whether you need a single visa or a full corporate travel program, BERI AGENCY brings the expertise, technology and care to make it effortless.",
};

export const SERVICES = [
  {
    icon: Plane,
    title: "Travel Management",
    desc: "End-to-end planning and ticketing for individuals and teams.",
    items: [
      "Corporate travel planning",
      "Flight booking & ticketing",
      "Travel policy compliance",
      "24/7 itinerary support",
    ],
  },
  {
    icon: Globe2,
    title: "Tours & Logistics",
    desc: "Seamless tour design and on-the-ground coordination.",
    items: [
      "Customized tour packages",
      "Group travel coordination",
      "Local transportation arrangements",
      "Local guides & permits",
    ],
  },
  {
    icon: Briefcase,
    title: "Corporate Solutions",
    desc: "Programs that turn travel spend into measurable value.",
    items: [
      "Business travel management",
      "Expense optimization",
      "Reporting & analytics",
      "Preferred-rate negotiation",
    ],
  },
  {
    icon: Handshake,
    title: "Partnership Services",
    desc: "Strategic relationships across Africa and beyond.",
    items: [
      "Airline partnerships",
      "NGO travel support",
      "Global travel coordination",
      "Mission & event logistics",
    ],
  },
  {
    icon: FileCheck,
    title: "Visa & Documentation",
    desc: "Paperwork done right — so you fly without friction.",
    items: ["Visa assistance", "Travel insurance", "Documentation compliance", "Embassy liaison"],
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Care",
    desc: "Standards, safety, and dedicated support at every step.",
    items: [
      "Industry accreditation",
      "Risk & duty-of-care",
      "Sustainable travel options",
      "Dedicated account manager",
    ],
  },
];

export const PROCESS_CONTENT = {
  eyebrow: "How we work",
  title: "A simple, four-step path to a great trip.",
};

export const STEPS = [
  {
    icon: MessageSquare,
    title: "Discovery",
    desc: "We learn your goals, policies, and constraints.",
  },
  {
    icon: ClipboardList,
    title: "Plan & Quote",
    desc: "Tailored itinerary with transparent pricing.",
  },
  {
    icon: Rocket,
    title: "Book & Travel",
    desc: "We handle bookings, docs, and on-trip support.",
  },
  {
    icon: CheckCircle2,
    title: "Review & Optimize",
    desc: "Reporting and ideas to save next time.",
  },
];
